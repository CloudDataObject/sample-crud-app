//'use strict';

(function(parent) {
    var loginViewModel = kendo.observable({
        username: "",
        password: "",
        isLoggedIn: false,
        loginViewTitle: "Log In",
        loginLabel: "Log In",
        logoutLabel: "Log Out",
        
        onBeforeShow: function(e) {
            // Always clear password
            app.viewModels.loginViewModel.set("password", "");
             if (!app.isAnonymous()) {
                app.changeTitle(app.viewModels.loginViewModel.loginViewTitle);
            }

            // If logged in, show welcome message
            if (app.viewModels.loginViewModel.isLoggedIn) {
                $("#credentials").parent().hide();
                $("#username").parent().hide();
                $("#password").parent().hide();
                $("#welcome").parent().show();
            } else {
                //else show login screen
                app.viewModels.loginViewModel.set("username", "");
                $("#credentials").parent().show();
                $("#username").parent().show();
                $("#password").parent().show();
                $("#welcome").parent().hide();            
            }        
        },

        onInit: function(e) { 
            app.views.loginView = e.view;
        },
        
        login: function(e) {    
            var that = this, 
                details,
                promise;
            try { 
                promise = app.jsdosession.login(this.get("username"), this.get("password"));
                promise.done( function( jsdosession, result, info ) {
                    try { 
                        console.log("Success on login()");   
                        that.set("isLoggedIn", true);
                        app.viewModels.loginViewModel.loginViewTitle = app.viewModels.loginViewModel.logoutLabel;
                        app.viewModels.loginViewModel.onBeforeShow( );
                        var catPromise = jsdosession.addCatalog(jsdoSettings.catalogURIs);
                        catPromise.done( function( jsdosession, result, details ) { 
                            console.log("Success on addCatalog()");
                            if (!app.isAnonymous() && app.viewModels.loginViewModel) {
                                app.viewModels.loginViewModel.onBeforeShow();
                                app.changeTitle(app.viewModels.loginViewModel.logoutLabel);
                            } 
                         });
                        
                        catPromise.fail( function( jsdosession, result, details) {
                            app.viewModels.loginViewModel.addCatalogErrorFn(app.jsdosession, 
                                                    progress.data.Session.GENERAL_FAILURE, details);
                        });  
                    } 
                    catch(ex) {
                        details = [{"catalogURI": jsdoSettings.catalogURIs, errorObject: ex}];
                        app.viewModels.loginViewModel.addCatalogErrorFn(app.jsdosession, 
                                                    progress.data.Session.GENERAL_FAILURE, details);
                    } 
 
                });
                
              
               promise.fail( function(jsdosession, result, info) {
                    app.viewModels.loginViewModel.loginErrorFn(app.jsdosession, result, info);
                }); // end promise.fail
            }
            catch(ex) {
               app.viewModels.loginViewModel.loginErrorFn(app.jsdosession, progress.data.Session.GENERAL_FAILURE, 
                                                    {errorObject: ex});
            } 
        },
         
        logout: function(e) {
            var that = this,
                promise,
                clistView;
                
            if (e) {
                e.preventDefault();
            }
            try {
                promise = app.jsdosession.logout();
                promise.done( function(jsdosession, result, info) {
                    console.log("Success on logout()"); 
                    that.set("isLoggedIn", false);
                    app.viewModels.loginViewModel.loginViewTitle = app.viewModels.loginViewModel.loginLabel;
                    app.viewModels.loginViewModel.onBeforeShow();
                    
                    if (app.viewModels.dataViewModel) {
                        // Remove any leftover data
                        app.viewModels.dataViewModel.clearData();   
                    }
                });
                promise.fail( function(jsdosession, result, info) {
                     app.viewModels.loginViewModel.logoutErrorFn(jsdosession, result, info);
                });              
            }
            catch(ex) {
               app.viewModels.loginViewModel.logoutErrorFn(app.jsdosession, progress.data.Session.GENERAL_FAILURE, 
                   {errorObject: ex});
            } 
        },
 
      
        checkEnter: function (e) {
            var that = this;
            if (e.keyCode === 13) {
                $(e.target).blur();
                that.login();
            }
        },
        
        addCatalogErrorFn: function(jsdosession, result, details) {
            var msg = "", i;            
            console.log("Error on addCatalog()");            
            if (details !== undefined  && Array.isArray(details)){
                for (i = 0; i < details.length; i += 1){
                    msg = msg + "\nresult for " + details[i].catalogURI + ": " + details[i].result + "\n    " + details[i].errorObject;
                }
            }
            // TO_DO: Can't yet use showError() ->  modalview-displayMsg modalView; (called from showError). Need to investigate further.
            // Use case is when invalid catalog is specified in jsdoSettings, and authModel = anon
            //Note: I verified that app.onInitDisplayMessage had already been called
            navigator.notification.alert(msg);
            //app.showError(msg);
            console.log(msg);   
            
            // Now logout
            if (app.viewModels.loginViewModel.isLoggedIn) { 
                app.viewModels.loginViewModel.logout();
            }
        },
        
        logoutErrorFn: function(jsdosession, result, info) {
            var msg = "Error on logout";
            app.showError(msg);
            if (info.errorObject !== undefined) {
                msg = msg + "\n" + info.errorObject;
            }
            if (info.xhr) {
                msg = msg + "\n" + "status (from jqXHT):" + info.xhr.status;
                msg = msg + " statusText (from jqXHT):" + info.xhr.statusText;
            }
            console.log(msg);
        },

         loginErrorFn: function(jsdosession, result, info) {
            var msg = "Error on login";
            switch (result) {
                case progress.data.Session.LOGIN_AUTHENTICATION_FAILURE:
                    msg = msg + " Invalid userid or password.";
                    break;
                case progress.data.Session.LOGIN_GENERAL_FAILURE:
                default:
                    if (info && info.errorObject) {
                        msg = msg + " " + info.errorObject.message;
                    }
                    else {
                        msg = msg + " Service " + jsdoSettings.serviceURI + " is unavailable.";
                    } 
                    break;
            }      
            app.showError(msg);
            if (info.xhr) {
                msg = msg + " status (from jqXHT):" + info.xhr.status;
                msg = msg + " statusText (from jqXHT):" + info.xhr.statusText;
                if (info.xhr.status === 200) {
                    //something is likely wrong with the catalog, so dump it out     
                    msg = msg + "\nresponseText (from jqXHT):" + info.xhr.responseText;
                }
            }
            if (info.errorObject) {
                msg = msg + "\n" + info.errorObject;
            }
            console.log(msg);
         }
    });
    
    parent.loginViewModel = loginViewModel;
    
})(app.viewModels);
