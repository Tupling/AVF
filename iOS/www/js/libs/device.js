

    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
function onDeviceReady() {
        var element = document.getElementById('contentOutput');
        var pName = device.name;
        var cordova = device.cordova;

        element.innerHTML = 'Device Name: '     + pName    + '<br />' + 
                            'Device Cordova: '  + cordova  + '<br />' + 
                            'Device Platform: ' + device.platform + '<br />' + 
                            'Device UUID: '     + device.uuid     + '<br />' + 
                            'Device Version: '  + device.version  + '<br />';
    }

