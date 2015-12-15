(function() {
    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app = {
        data: {},
        mobileApp: {},
        jsdoSession: {},
        views: {},
        viewModels: {},
        closeDisplayMessageFn : undefined
    };

    var bootstrap = function() {
        $(function() {
           try {
                 app.mobileApp = new kendo.mobile.Application(document.body, {

                    // you can change the default transition (slide, zoom or fade)
                    transition: 'slide',
                    // comment out the following line to get a UI which matches the look
                    // and feel of the operating system
                    skin: 'flat',
                    // the application needs to know which view to load first
                    initial: 'views/home.html',
                    layout: "tabstrip-layout",
                    statusBarStyle: 'black-translucent'
                });

                // Session management - behavior depends on authentication model specified in JSDO instance 
                // for session in jsdoSettings.js
                progress.util.jsdoSettingsProcessor(jsdoSettings);

                if (!jsdoSettings.authenticationModel) {
                    console.log("Warning: jsdoSettings.authenticationModel not specified. Default is ANONYMOUS");
                }

                if (jsdoSettings.serviceURI) {
                    app.jsdosession = new progress.data.JSDOSession(jsdoSettings);
                }
                else {
                    console.log("Error: jsdoSettings.serviceURI must be specified.");
                }
               
                if (app.jsdosession && app.isAnonymous()) {    
                    // Login as anonymous automatically, data will be available on list page
                    $('#loginIcon').hide();
                    app.viewModels.loginViewModel.login();
                }
            } 
            catch(ex) { 
                console.log("Error creating JSDOSession: " + ex);        
            }    
		});
    };

    if (window.cordova) {
        // this function is called by Cordova when the application is loaded by the device
        document.addEventListener('deviceready', function() {
            // hide the splash screen as soon as the app is ready. otherwise
            // Cordova will wait 5 very long seconds to do it for you.
            if (navigator && navigator.splashscreen) {
                navigator.splashscreen.hide();
            }

            bootstrap();
        }, false);
    } else {
        bootstrap();
    }

    window.app = app;

    app.isOnline = function() {
        if (!navigator || !navigator.connection) {
            return true;
        } else {
            return navigator.connection.type !== 'none';
        }
    };
    
   app.isAnonymous = function() {
        // authenticationModel defaults to "ANONYMOUS"
        if (!jsdoSettings.authenticationModel || 
             jsdoSettings.authenticationModel.toUpperCase() === "ANONYMOUS") {
            return true;
        } 

        return false;
    };

	app.showError = function (message) {
        app.showMessage("Error", message);
    };
    
    app.showMessage = function (title, message) {
        document.getElementById("modalViewTitle").innerHTML = title;
        document.getElementById("modalViewMessage").innerHTML = message;
        $("#modalview-displayMsg").kendoMobileModalView("open");          

    };

    app.changeTitle =  function (customTitle) {
        app.mobileApp.view().header.find('[data-role="navbar"]').data('kendoMobileNavBar').title(customTitle);
    };

	app.onSelectTab = function (e) {
        var dataViewModel = app.viewModels.dataViewModel;
        
        // Disable if user is on editDetailView 
        if (dataViewModel && dataViewModel.onEditDetailView) {
            e.preventDefault();
        } 
		else if (e.item[0].id == "listIcon") {
            if (!app.viewModels.loginViewModel.isLoggedIn && !app.isAnonymous()) {
                app.showError("Please login first.");
                e.preventDefault();
			}            
        }               
    };
    
    
    app.onShowHomeView = function (e) {
        var dataViewModel = app.viewModels.dataViewModel;
        
        // Hide refresh button
        dataViewModel.displayListButtons(e.view, false);
    };

    app.onInitDisplayMessage = function(e) {
        console.log("In onInitDisplayMessage");
    };
        
    app.onCloseDisplayMessage = function(e) {
        $("#modalview-displayMsg").kendoMobileModalView("close");
        
        // Check if there's any function to run after close of modal view
        if (app.closeDisplayMessageFn) {
            app.closeDisplayMessageFn();
            
            app.closeDisplayMessageFn = undefined;
        }
	};


    
}());