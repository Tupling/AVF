
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, true);

    // Cordova is ready
    //
    function onDeviceReady() {
        // specify contact search criteria
        var options = new ContactFindOptions();
        filter="",        // empty search string returns all contacts
        multiple=true,   // return multiple results
        filter = ["*"]; 

        // find contacts
        navigator.contacts.find(filter, onSuccess, onError, options);
    }

    // onSuccess: Get a snapshot of the current contacts
    //
    function onSuccess(contacts) {
        var element = document.getElementById('contentOutput');
        for (var i=0; i<contacts.length; i++) {
                    element.innerHTML = "Name: " + contacts[i].name.formatted + "</ hr>";
        }
    };

    // onError: Failed to get the contacts
    //
    function onError(contactError) {
        $('contentOutput').append("Sorry we were unable to retreived your contact"); 
    }
