//'use strict';

(function(parent) {
    // view-model for data records
    var dataViewModel = kendo.observable({
    	jsdoDataSource: undefined,
    	selectedRow: {},
        origRow: {},  // save in case user cancels edit
        resourceName: undefined,
        addMode: false,
        useSubmit: undefined,
        currentOperation: undefined,
        onEditDetailView: false,
        doListRefresh: false,
        
        // The order of the firing of events is as follows:
        //			before-show
        //			init (fires only once)
        //			show
        onBeforeShowListView: function(e) {
            var dataViewModel = this.model;
                  
        	// Set list title to resource name
         	if (dataViewModel.resourceName != undefined) {
            	app.changeTitle(dataViewModel.resourceName);
        	}
     	},
        
        onInitMessageModalView: function(e) {
            console.log("In onInitMessageModalView");
        },
        
        onInitListView: function(e) {
        	var dataViewModel = app.viewModels.dataViewModel,
                fieldNames;
            
        	try {
                // Create Data Source
                dataViewModel.createJSDODataSource();  
                
                dataViewModel.displayListButtons(e.view, true);
                app.views.listView = e.view;
            
            	if (jsdoSettings && jsdoSettings.displayFields) {   
                	fieldNames = jsdoSettings.displayFields.split(",").join("#</br> #:");
            	}
            
            	if (fieldNames) {      
            		$("#empListView").kendoMobileListView({
                    	dataSource: dataViewModel.jsdoDataSource,
                        autoBind: true,
                    	pullToRefresh: false,
                    	appendOnRefresh: false,
                       	endlessScroll: true,
                		virtualViewSize: 100,
                    	template: "<a href='views/detailView.html'>" + "#: " + fieldNames + " #</a>",
                    	click: function(e) {
                            if (e.dataItem) {
                                dataViewModel.set("selectedRow", e.dataItem); 
                            }
                            else {
                                console.log("Error: On click of listView, e.dataItem is undefined");  
                            }
                    		               	
                    	}
            		});
				}
            	else {
            		console.log("Warning: jsdoSettings.displayFields not specified");
            	}
            }
        	catch (ex) {    
            	console.log("Error in onInitListView: " + ex);        
        	}
		},
        
        onShowListView: function(e) {
             var dataViewModel = app.viewModels.dataViewModel;
            
            if (dataViewModel.doListRefresh) {
                dataViewModel.doListRefresh = false;
         
                $("#empListView").data("kendoMobileListView").scroller().reset();
                $("#empListView").data("kendoMobileListView").refresh();
            }
            
            dataViewModel.displayListButtons(e.view, true);
     	},
       
        doRead: function(readLocal) {
             var dataViewModel = app.viewModels.dataViewModel,
                jsdoDataSource = dataViewModel.jsdoDataSource;
            
            // readLocal property tells jsdoDataSource transport where to get data from underlying jsdo,
            // either from local jsdo memory or from its corresponding back end service
        	jsdoDataSource.transport.readLocal = readLocal;
            // Reads the data (based upon readlocal property setting)
            jsdoDataSource.read();
     	},
             
        displayListButtons: function(view, show) { 
            var dataViewModel = app.viewModels.dataViewModel,
                jsdo = dataViewModel.jsdoModel,
                jsdoDataSource = dataViewModel.jsdoDataSource,
                enableSubmit = false,
                enableErrors = false;
            
            if (show) {
                
                if (dataViewModel.useSubmit === true) {
                    view.footer.find("#submitBtn").css("visibility", "visible");
                    view.footer.find("#errorBtn").css("visibility", "visible");
                    
                    if (jsdoDataSource) {
                        // Determine if jsdoDataSource data items have any pending changes
                        if (jsdoDataSource.hasChanges()) {
                    		enableSubmit = true;
                            enableErrors = false;
                		}
                        else if (jsdo && jsdo.getErrors().length > 0) {
                    		enableErrors = true;
                		} 
                    }
                    view.footer.find("#submitBtn").data("kendoMobileButton").enable(enableSubmit);
                    view.footer.find("#errorBtn").data("kendoMobileButton").enable(enableErrors);
                    //Always show border
                    $('.buttonDiv').css('border','solid').css('border-width','1px').css('border-color', 'rgba(0,0,0,0.1)');

                }
            }
            else {
                // If useSubmit is false, don't bother hiding buttons. They're never displayed in this case
                if (dataViewModel.useSubmit === true) {
                    view.footer.find("#submitBtn").css("visibility", "hidden");
                    view.footer.find("#errorBtn").css("visibility", "hidden");
                }
            } 
        },
        
        createJSDODataSource: function( ) {
            var dataViewModel = app.viewModels.dataViewModel;
            
            try { 
                // create JSDO
                if (jsdoSettings && jsdoSettings.resourceName) {   
                	this.jsdoModel = new progress.data.JSDO({ name : jsdoSettings.resourceName,
                        autoFill : false, events : {
                            'afterFill' : [ {
                                scope : this,
                                fn : function (jsdo, success, request) {
                                    // afterFill event handler statements ...
                                    app.changeTitle(this.resourceName);
                                }
                            } ],
                            'beforeFill' : [ {
                                scope : this,
                                fn : function (jsdo, success, request) {
                                    // beforeFill event handler statements ...
                                }
                            } ]
                        }
                    });
                    
                    this.useSubmit = this.jsdoModel._hasSubmitOperation;
 
                    this.jsdoDataSource = new kendo.data.DataSource({
                        type: "jsdo",
                		// TO_DO - Enter your filtering and sorting options
						//serverFiltering: true,
                        //serverSorting: true,
 						//filter: { field: "LastName", operator: "startswith", value: "K" },
                        //sort: [ { field: "Name", dir: "desc" } ],
                        batch: dataViewModel.useSubmit,
                        transport: {
                            jsdo: this.jsdoModel,
                            // TO_DO - replace with your Business Entity count function name and set pageSize above to enable server paging
                            //, countFnName: "count"
                        },
                        error: function(e) {
                            console.log("Error: ", e);
                        },
                        change: function(e) {
                            if (e.action === "itemchange") {
                            	console.log("Got change event");
                            }
                        }
                    });
                    this.resourceName = jsdoSettings.resourceName;
                }
                else {
                    console.log("Warning: jsdoSettings.resourceName not specified");
                }
           }
           catch(ex) {
               app.viewModels.dataViewModel.createDataSourceErrorFn({errorObject: ex});
           } 
        },
        
        createDataSourceErrorFn: function(info) {
            var msg = "Error on create DataSource",
                fullMsg = msg;
            
            if (info.errorObject !== undefined) {
                fullMsg = fullMsg + "\n" + info.errorObject;
            }
            console.log(fullMsg);
            app.showError(msg);
        },
        
        // Removes leftover data from screen
        // As example, used by logout functionality
        clearData: function () {
        	var that = this,
                clistView; 
            
            if (that.jsdoModel) {
				that.jsdoModel.addRecords([], progress.data.JSDO.MODE_EMPTY);
            }
            clistView = $("#listListView").data("kendoMobileListView");
            if (clistView && clistView.dataSource) {
                // Clear ListView
                clistView.dataSource.data([]);
                clistView.refresh();
            }
       },
        
        submit: function(operation) {    
            var dataViewModel = app.viewModels.dataViewModel,
                jsdoDataSource = dataViewModel.jsdoDataSource,
                promise;
            
            try {
                // sync() saves any data item changes (update/delete/create),
                // since jsdoDataSource is configured to a remote data service, changes are 
                // sent to remote data service
                promise = jsdoDataSource.sync();
                
                promise.done( function() {
                    var view = app.views.listView;
                    
                    try {
                    	navigator.notification.alert("Submit was successful");        
                    	view.footer.find("#submitBtn").data("kendoMobileButton").enable(false);
                    	view.footer.find("#errorBtn").data("kendoMobileButton").enable(false);
                    }
                    catch(ex) {
               			console.log("Error in submit, promise.done(): " + ex); 
            		} 
            
                });

               promise.fail( function(xhr) {
               		var view = app.views.listView,
                        jsdo = xhr.request.jsdo,
                        errorMsg;
                   
                   	try {
                    	errorMsg = dataViewModel.normalizeError(xhr.request);
                        
                        // Only enable the Error button if row error(s) occurred. The error listview is how multiple 
                        // row errors are displayed to user
                        if (jsdo && jsdo.getErrors().length > 0) {
                            errorMsg += "\n\nPlease use Errors button to see a list of errors.";
                            view.footer.find("#errorBtn").data("kendoMobileButton").enable(true);
                        }
						
                    	view.footer.find("#submitBtn").data("kendoMobileButton").enable(false);
                        
                        // modalview uses asynchronous model, so specify code here to be run after 
                    	// display of error message to user
                    	app.closeDisplayMessageFn = 
                        	function() {
                       			var dataViewModel = app.viewModels.dataViewModel,
                			    	jsdoDataSource = dataViewModel.jsdoDataSource;
                        		
                   				// On failure of jsdoDatasource.sync(), deleted row remains in jsdoDataSource._destroyed array;
                            	// Calling cancelChanges() clears out _destroyed array
                    			jsdoDataSource.cancelChanges();
                    			dataViewModel.doRead(true); 
 							 };
                        
                    	app.showError("ERROR while saving changes:\n\n" + errorMsg);
                    }
                   	catch(ex) {
               			console.log("Error in submit, promise.fail(): " + ex); 
            		} 	
                }); // end promise.fail
           
            }
            catch(ex) {
               console.log("Error in submit: " + ex); 
            } 
        },
    	
        refresh: function(e) {    
            var dataViewModel = app.viewModels.dataViewModel,
                jsdoDataSource = dataViewModel.jsdoDataSource;
            
            // Determine if jsdoDataSource data items have any pending changes
            if (jsdoDataSource.hasChanges()) {
                $("#confirmRefresh").data("kendoMobileModalView").open();
            	e.preventDefault();
            }
            else {
                dataViewModel.finishRefresh();
            }
        },
        
        continueRefresh: function() {
            var dataViewModel = app.viewModels.dataViewModel;
          	$("#confirmRefresh").data("kendoMobileModalView").close();
            dataViewModel.finishRefresh();
      	},

      	cancelRefresh: function() {
          $("#confirmRefresh").data("kendoMobileModalView").close();
      	},
        
        finishRefresh: function() {
        	var dataViewModel = app.viewModels.dataViewModel,
                jsdoDataSource = dataViewModel.jsdoDataSource,
                view = app.views.listView,
                clistView;
        
        	try {
                if (jsdoDataSource.hasChanges()) {
                    // Cancel pending changes in the data source
                    jsdoDataSource.cancelChanges();
                      
                }
                
                // Ensure that submit and error buttons are disabled
                if (dataViewModel.useSubmit) {
                	view.footer.find("#submitBtn").data("kendoMobileButton").enable(false); 
                	view.footer.find("#errorBtn").data("kendoMobileButton").enable(false);
                }
                
                dataViewModel.doRead(false);
                clistView = $("#empListView").data("kendoMobileListView");
                if (clistView) {
                   clistView.scroller().reset();
                }
        	}
            catch(ex) {
            	console.log("Error in finishRefresh: " + ex);
            } 
    	},

		normalizeError: function (request) {        
        	var errorMsg = "",
                jsdo = request.jsdo,
           	    response = request.response,
                lastErrors = jsdo.getErrors();
            
            /* Try to get the error string from _error object. Then check if
             * it was a data error, otherwise see if the error came as a string in the body. 
             * If nothing is set, then just get the native statusTest */        
            
            if (response && response._errors && response._errors.length > 0) {   
                errorMsg = response._errors[0]._errorMsg;
            }
            else if (lastErrors.length === 1) {
                errorMsg = lastErrors[0].error;
			}
            else if (lastErrors.length > 1) {
                errorMsg = "Submit failed with " + lastErrors.length + (lastErrors.length == 1 ? " error." : " errors.");
			}
            
            if (errorMsg === "") {
                if (request.xhr.responseText.substring(0,6) !== "<html>")  {
                    errorMsg = request.xhr.responseText;
                }  
                if (errorMsg === "") {
                    errorMsg = request.xhr.statusText;
                }      
            }   
            
            return errorMsg;   
		},

                                        
        ///////////////////////////////////////////////////////////////////////////////
        //
        // Functions for errorDetail view
        
        onInitErrorListView: function(e) {      
            var dataViewModel = this.model,
                jsdo = dataViewModel.jsdoModel,
                errorDataSource;
           
            try {
                errorDataSource = new kendo.data.DataSource({
                    transport: {
        				read: function (options) { 	
            				options.success(jsdo.getErrors());
        				}
    				}
                });

            	$("#submitErrorsListView").kendoMobileListView({
                	dataSource: errorDataSource,
                    pullToRefresh: true,
                	appendOnRefresh: false,
                    // error is property in object(s) returned from jsdo.getErrors()
                    template: "#: error #"
            	});
                
        	}
        	catch (ex) {    
            	console.log("Error in onInitErrorListView: " + ex);        
        	}
    	},
        
        onShowErrorListView: function(e) {
            var errorListView;
            
           	errorListView = $("#submitErrorsListView").data("kendoMobileListView");
            if (errorListView !== undefined) {
            	errorListView.dataSource.read();                
            }
           
    	},
                   
        ///////////////////////////////////////////////////////////////////////////////
        //
        // Functions for Detail view
        // Called for editDetail view's data-show event
        onShowDetailView: function(e) {
            var dataViewModel = this.model;
            
        	dataViewModel.displayListButtons(e.view, false);
        },
        
       
        ///////////////////////////////////////////////////////////////////////////////
        //
        // Functions for editDetail view
        
        // Called for editDetail view's data-init event
        onInitEditDetailView: function(e) { 
            var dataViewModel = this.model; 
            
            // If backend does not have a submit, then CUD operations will be sent to be when button selected
            if (!dataViewModel.useSubmit) {       
            	$("#editDetailDoneButton").html("Save");
            }
            app.views.editDetailView = e.view;
        },
        
        // Called for editDetail view's data-show event
        onShowEditDetailView: function(e) {
             var newRow,
                 dataViewModel = this.model,
                 tabstrip,
                 errorMsg = undefined;    
            
            if (e.view.params.addMode && e.view.params.addMode === "true") {
                dataViewModel.addMode = true;
                dataViewModel.displayListButtons(e.view, false);
                // Add a data item to the data source
                newRow = dataViewModel.jsdoDataSource.add({});
                
                if (newRow) {
                	// Copy default values, if any..
                    dataViewModel.set("selectedRow", newRow);   
            	}
            	else {
                    errorMsg = "Error adding new record";
            	}
            }
            else {
                e.view.footer.find("#deleteBtn").css("visibility", "visible");
                
            	// Save in case user hits Cancel button
                dataViewModel.copyRow(dataViewModel.selectedRow, dataViewModel.origRow);
            }
            
            if (errorMsg) {
                // modalview uses asynchronous model, so specify code here to be run after 
                // display of error message to user
                app.closeDisplayMessageFn = 
                    function() {
                		$("#editDetailDoneButton").data("kendoMobileButton").enable(false);
                    };

                app.showError(errorMsg);
            }
            else {
                dataViewModel.onEditDetailView = true;
            
            	tabstrip = e.view.footer.find("#navigateTab").data("kendoMobileTabStrip");
            	// Clear out selected tab, so user can't reselect it while on editView
  				tabstrip.clear();
            }
        },
        
        // Called for editDetail view's data-hide event
        onHideEditDetailView: function(e) {
            dataViewModel.onEditDetailView = false;
            
            e.view.footer.find("#deleteBtn").css("visibility", "hidden");
        },
        
        // Called when user selects "Cancel" button in editDetail view
        cancelEditDetail: function(e) {
            var dataViewModel = app.viewModels.dataViewModel,
                jsdoDataSource = dataViewModel.jsdoDataSource;
            
         	if (dataViewModel.addMode === true) {
            	// Remove record just added to jsdoDataSource 
                jsdoDataSource.remove(dataViewModel.selectedRow);
				dataViewModel.backToView("#list");
            } 
            else {
                if (dataViewModel.useSubmit === false) {
                    // Determine if jsdoDataSource data items have any pending changes
                    if (jsdoDataSource.hasChanges()) {
                        // Cancel pending changes in the data source
                        jsdoDataSource.cancelChanges();
                        
                        // Reget current row, now with orig data, to restore orig data to controls
                        var dataItem = jsdoDataSource.get(dataViewModel.selectedRow.id);
                        dataViewModel.set("selectedRow", dataItem); 
                    }
                }
                else {
                    // We don't call cancelChanges() when doing submit. Don't want to lose any
                	// possible prior changes to this row
                    
                    // This will update the DataSource as well as selectedRow object with the original values
                    dataViewModel.updateSelectedRow(dataViewModel.origRow);
                }
                
                dataViewModel.backToView("#detail"); 
            }    
        },
        
        
        // Called when user selects "Done" button in editDetail view
        doneEditDetail: function(e) {
        	var dataViewModel = app.viewModels.dataViewModel;         
            
            if (dataViewModel.useSubmit === false) {
                dataViewModel.doSync(dataViewModel.addMode ?  "create" : "update" );
            }
            else {
                // Updates will be sent to backend when Submit button is selected
                // On show of listView, listView control will be refreshed to show any pending updates
                dataViewModel.doListRefresh = true;
                //dataViewModel.backToView("#detail");
                dataViewModel.backToView("views/detailView.html"); 
            } 
        },
        
        // navView - specify view to navigate to
        backToView: function(navView) {
            var dataViewModel = app.viewModels.dataViewModel;
                
            // Reset to default, which is false
           	dataViewModel.addMode = false;
            
            app.mobileApp.navigate(navView);
        },
        
        
        // Called when useSubmit property is set to false, so only single row is involved.
        // It calls the DataSource sync() function (for individual create/update/delete operation)
		doSync: function(operation) {    
            var dataViewModel = app.viewModels.dataViewModel,
                jsdoDataSource = dataViewModel.jsdoDataSource,
                promise;
            
            try { 
                
                dataViewModel.currentOperation = operation;
                
                // sync() saves the data item change (either update, delete, or create),
                // since jsdoDataSource is configured to a remote data service, change is 
                // sent to remote data service
                promise = jsdoDataSource.sync();
                promise.done( function() {
                    var dataItem;
                    
                    console.log(operation + " was successful");
                    dataViewModel.doListRefresh = true;
                    
                     if (operation === "delete") {
                    	dataViewModel.backToView("#list");
                    }
                    else {
                        // Reget selected row, in case backend updated its data
                       	dataItem = jsdoDataSource.get(dataViewModel.selectedRow.id);
                       
                        // TO_DO: Need to investigate further. EmpNum field is set on backend, returned to client.
                        // So here trying to bind new data to control so its will be displayed in detailView and editDetailView.
                        // But empNum is not always displayed in control, once user hits "Save" button.
                        dataViewModel.updateSelectedRow(dataItem);
                        
                        // Don't know why, but "#detail" not always working
                        //dataViewModel.backToView("#detail"); 
                        dataViewModel.backToView("views/detailView.html"); 
                    }
                   	
                });

               	promise.fail( function(xhr) {
               		var errorMsg;
                   
                   	errorMsg = dataViewModel.normalizeError(xhr.request);   
                    errorMsg = "ERROR when doing " + operation + " operation:\n\n" + errorMsg;
                    console.log(errorMsg);
                    
                    // modalview uses asynchronous model, so specify code here to be run after 
                    // display of error message to user
                    app.closeDisplayMessageFn = 
                        function() {
                       		var dataViewModel = app.viewModels.dataViewModel,
                			    jsdoDataSource = dataViewModel.jsdoDataSource,
                                saveSelectedRow = {},
                                dataItem;
                        
                        	if (dataViewModel.currentOperation === "delete") {
                                // Calling cancelChanges(); deleted row remains in jsdoDataSource._destroyed array; need to remove
                                jsdoDataSource.cancelChanges();
                                dataViewModel.backToView("#list");
                    		}
                        	else if (dataViewModel.currentOperation === "update") {
                                // Save edited data. After we resync dataSource with jsdo, want to put back
                                // edits into controls, so user can modify
                				dataViewModel.copyRow(dataViewModel.selectedRow, saveSelectedRow);
                                
                                // On failure of datasource.sync(), pending changes persist, so read data from jsdo,
                                // cancelChanges() won't do this for updates once sync() is done
                                // (since jsdoDataSource._pristineData no longer has orig data)
                                dataViewModel.doRead(true);
                                
                                // reget current row
                                dataItem = jsdoDataSource.get(dataViewModel.selectedRow.id);
                                dataViewModel.set("selectedRow", dataItem); 
                                
                                dataViewModel.updateSelectedRow(saveSelectedRow);
                            }
                        	
                    };
                    app.showError(errorMsg);   
                    
                }); // end promise.fail
           
            }
            catch(ex) {
               console.log("Error in doSync: " + ex);  
            } 
        },
       
        verifyDoDelete: function(e) {
        	// Must ask user if they really want to delete current record
           	$("#modalview-confirm").data("kendoMobileModalView").open();    
        },
        
        // Called when user selects "Delete" button in Delete modal view
        deleteRow: function(e) {
            var dataViewModel = app.viewModels.dataViewModel,
                jsdoDataSource = dataViewModel.jsdoDataSource;

            $("#modalview-confirm").data("kendoMobileModalView").close();
            // Removes the specified data item from the data source
            jsdoDataSource.remove(dataViewModel.selectedRow);
            
            if (dataViewModel.useSubmit === false) {
                dataViewModel.doSync("delete");
            }
            else {
                dataViewModel.doListRefresh = true;
                dataViewModel.backToView("#list");
            }
        },
       
        // Called when user selects "Cancel" button in Delete modal view
        cancelDelete: function(e) {    
            // User canceled delete, so nothing to do but remove dialog
            $("#modalview-confirm").kendoMobileModalView("close");
            
        },
        
        ///////////////////////////////////////////////////////////////////////////////
        //
        // Utility Functions
        
        updateSelectedRow: function(sourceRow) {
           var dataViewModel = app.viewModels.dataViewModel,
               schema = dataViewModel.jsdoModel.getSchema(),
           	   field,
               i;
            
            for (i = 0; i < schema.length; i++) {
                field = schema[i].name;
                dataViewModel.set("selectedRow." + field, sourceRow[field]); 
            }
        },
        
        
        copyRow: function(source, target) {
           var dataViewModel = app.viewModels.dataViewModel,
               schema = dataViewModel.jsdoModel.getSchema(),
           	   field,
               i;
            
            if (source === undefined) {
                return;
            }

            for (i = 0; i < schema.length; i++) {
                field = schema[i].name;
                
                if (source.hasOwnProperty(field)) {
                    if (source[field] === undefined || source[field] === null) {
                    	target[field] = source[field];
                	}
                	else if (source[field] instanceof Date) {
                    	target[field] = source[field];
                	}        
                	else if (typeof source[field] === 'object') {
                    	var newObject = source[field] instanceof Array ? [] : {};
                    	app.viewModels.dataViewModel.copyRow(source[field], newObject);
                    	target[field] = newObject;
                	}
                	else
                    	target[field] = source[field];
  				}
            }
        }   
         
	});    
    
    parent.dataViewModel = dataViewModel;
    
})(app.viewModels);


