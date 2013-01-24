
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        var element = document.getElementById('contentOutput');

        element.innerHTML = 'Device Name: '     + window.device.name     + '<br />' + 
                            'Device Cordova: '  + window.device.cordova  + '<br />' + 
                            'Device Platform: ' + window.device.platform + '<br />' + 
                            'Device UUID: '     + window.device.uuid     + '<br />' + 
                            'Device Version: '  + window.device.version  + '<br />';
    }