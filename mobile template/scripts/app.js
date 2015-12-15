(function() {
    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app = {
        data: {},
        mobileApp: {},
        jsdoSession: {},
    	views: {},
        viewModels: {}
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

                // Session management - behavior deoends on authentication model speecified in JSDO instance for session in jsdoSettings.js
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
    	if (navigator && navigator.notification) {
            navigator.notification.alert(message);
        } else {
            // if run directly in browser
            alert(message);
        }
    };
    
    app.changeTitle =  function (customTitle) {
    	app.mobileApp.view().header.find('[data-role="navbar"]').data('kendoMobileNavBar').title(customTitle);
        //$("#navbar").data("kendoMobileNavBar").title(customTitle);
   	};

	app.onSelectTab = function (e) {
		if (e.item[0].id == "listIcon") {
       		if (!app.viewModels.loginViewModel.isLoggedIn && !app.isAnonymous()) {
                app.showError("Please login first.");
        		e.preventDefault();
			}            
        }                
    };
    
}());