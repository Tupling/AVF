
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        //Refresh page to reload notification
           //window.location.reload();
    }

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        if(buttonIndex == 1){
       $.mobile.changePage( "device.html", { transition: "none"} );
   }else{
        $.mobile.changePage("index.html", { transition: "none"});
   }
    }

    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'Would you like to load your device information',  // notification message display
                onConfirm,              // function to run when user sleects desired button
            'Device Information',            // notification title
            'Yes Please!,No Thanks!'          // buttonLabels reference to buttonIndex in number sequence 1, 2, or 3.
        );
    }
