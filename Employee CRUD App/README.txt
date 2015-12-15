


This sample is a fully functional CRUD app utilizing all capabilities found in the default Progress Data Service template. 

It makes use of the JavaScript Data Object dialect of the Kendo UI DataSource to provide data to the app's default listview control, which, 
in turn, utilizes the JavaScript data object (JSDO) to access the data and operations of a Mobile resource provided by a remote data service.

In order to create and use the JSDO Dialect of the DataSource, and ultimately access the remote data service, the user must log in, 
and optionally provide credentials. This sample app instantiates an underlying progress.data.JSDOSession object providing this support. 
This session-enabled support provides a default login page (only displayed when app is configured with a backend service with an authenticationModel of type 
"basic" or "form", see below for more details).

In addition, it provides the user with the ability to perform CUD operations (create, update, and delete). The user can click on a row in 
the listview control, which brings user to a detail view, displaying that row's data in detail.  In order to update or delete the selected row, the 
user then clicks on the "Edit" button which brings user to the edit detail view to perform updates or deletion of the row.
To add a new row, the user can click on the add button found on the list view.

The app can be run in two modes: submit or basic CRUD (i.e. no submit). The mode is determined by the availability of the submit operation in the 
remote data service (specified in the jsdoSettings object).

If a submit operation is found in the remote data service, a Submit button will be displayed on the list view. All CUD operations performed 
(starting from the previous selection of the Submit button) will be sent together to the remote data service in a single transaction, when the user selects the "Submit" button.
To cancel any pending changes, press the Refresh button found in the header. 

Note: when app is running in submit mode, the button on the edit detail view, after an add or edit, will say "Done". Once selected, the change will be saved only on the client. User can perform
more CUD operations at this time, or return to the list view to submit the changes up to this point.

If there is no submit operation found, then each CUD operation performed will be sent to the remote data service individually. (The button on the 
edit detail view will say "Save".) When the user selects the "Save" button, the created, updated, or row to delete will be sent to remote data serice at that time.

This sample app is configured (by default) to access a publicly accessible deployed service called EmployeeSubmitService (with the submit capability). It can also be modified easily
to access a publicly accessible deployed service called EmployeeCRUDService (with the CRUD capability). (See the scripts/jsdoSettings.js file in the project.)





Steps to hook up app to new remote data service:
------------------------------------------------

1.) Update all the propeties in the jsdoSettings object in scripts/jsdoSettings.js. (Details concerning the jsdoSettings properties are defined below.)

2.) In views/detailView.html, substitute in field names from your remote data service (use catalog file that you specified in jsdoSettings)

Example, here I've changed EmpNum to CustNum:

ORIG:
-----
<label><input type="text" readonly="true" data-bind="value: selectedRow.EmpNum"/>Emp Num:</label>

NEW:
----
<label><input type="text" readonly="true" data-bind="value: selectedRow.CustNum"/>Cust Num:</label>


3.) In views/editDetailView.html, do similar substitutions as above.

Since controls in this view are editable, make sure that type is set appropriately for field's data type.
In examples below, FirstName has type="text" and Birthdate has type="date".

<label><input type="text" data-bind="value: selectedRow.FirstName"/>First Name:</label>
<label><input type="date" data-bind="value: selectedRow.Birthdate"/>Birth Date:</label>


Example jsdoSettings object follows:
/*
var jsdoSettings = { 
		"serviceURI": "http://54.174.121.220:8815/EmployeeSubmit",
        "catalogURIs": "http://54.174.121.220:8815/EmployeeSubmit/static/EmployeeSubmitService.json",
        "authenticationModel": "anonymous",
        "displayFields": "EmpNum, LastName",
        "resourceName": "EmployeeSubmitBE" 
};
 */

jsdoSettings properties:
------------------------

serviceURI:  Set this to your remote data service. It's the URI of the Web application that hosts the remote data service for which to start 
             the user login session.
             Ex. http://Your-IP-Address:8980/MyMobileWebAppl

catalogURIs: Specify one (or more) JSDO Catalog pathnames that describe the Mobile services provided by the remote data service. 
If more than one is specified, this is an array of strings.
             
resourceName: The name of the resource (found in a JSDO catalog file) for which the underlying JSDO instance is created.

authenticationModel: Should be set to either: "anonymous", "basic", or "form". If not specified, it's defaulted to "anonymous". 
                     It specifies the type of authentication that the backend server requires.
                     
displayFields: Specify one (or more) field names found in the specified resource. This field will be displayed on the list page 
               for each row retreived from the remote data service. Note: The current template version only uses the first field 
               name specified.
