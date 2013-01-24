
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        var options = new ContactFindOptions();
        options.filter="";
        filter = ["name"];
        navigator.contacts.find(filter, onSuccess, onError, options);
    }

    // onSuccess: Get a snapshot of the current contacts
    //
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
               var element = document.getElementById('contentOutput');

        			element.innerHTML = "Formatted: " + contacts[i].name.formatted + </ br></ hr>";
        }
    };

    // onError: Failed to get the contacts
    //
    function onError(contactError) {
        alert('onError!');
    }