# sample-crud-app
Sample mobile app using the Kendo UI DataSource to list and update records from the employee table in the sports2000 sample OE database. Can be easily configured to use another remote data service.

<a href="https://platform.telerik.com/#appbuilder/clone/https%3A%2F%2Fgithub.com%2FCloudDataObject%2Fsample-crud-app" target="_blank"><img src="http://docs.telerik.com/platform/appbuilder/sample-apps/images/try-in-appbuilder.png" alt="Try in AppBuilder" title="Try in AppBuilder" /></a>

This app can be cloned in the Telerik Platform (by selecting above button) to build a Hybrid Mobile App. You can explore and modify the code, and build and run it on Android, iOS and Windows Phone 8 devices.

This sample is a fully functional CRUD app utilizing all capabilities found in the default Progress Data Service template. 
It makes use of the JavaScript Data Object dialect of the Kendo UI DataSource to provide data to the app's default listview control, which, in turn, utilizes the JavaScript data object (JSDO) to access the data and operations of a Mobile resource provided by a remote data service.

The app supports anonymous, form and basic authentication to an OpenEdge or Rollbase server using the JSDO Session management and a JSDO catalog.

In addition, it provides the user with the ability to perform CUD operations (create, update, and delete). The user can click on a row in the listview control, which brings user to a detail view, displaying that row's data in detail.  In order to update or delete the selected row, the user then clicks on the "Edit" button which brings user to the edit detail view to perform updates or deletion of the row. To add a new row, the user can click on the add button found on the list view.

The app can be run in two modes: submit or basic CRUD (i.e. no submit). For more information, download the sample app to the Telerik Platform, and see its README.txt.

## Running the Sample

With the Telerik Platform, you can deploy apps in the device simulator and on device wirelessly or via cable connection. For more information about running apps, see [Running Your App][Running Your App].

To test the LiveSync JavaScript API sample, choose one of the following deployment methods.

* Build your project for the companion app and deploy it via QR code.
* Build your project as an application package with the Debug build configuration.

## License

This sample is licensed under the Apache License, Version 2.0. For more information, see [License][License].

[License]: https://github.com/CloudDataObject/sample-crud-app/blob/master/LICENSE
[Running Your App]: http://docs.telerik.com/platform/appbuilder/testing-your-app/run-your-app

