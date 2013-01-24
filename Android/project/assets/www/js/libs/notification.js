    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        // Empty
    }

    // alert dialog dismissed
    function alertDismissed() {
        // do something
    }

    // Show a custom alertDismissed
    //
    function showAlert() {
        navigator.notification.alert(
            'This is your eviction notice! You have 15 seconds to close thi alert!',  // message
            alertDismissed,         // callback
            'Evicted',            // title
            'Close'                  // buttonName
        );
    }
