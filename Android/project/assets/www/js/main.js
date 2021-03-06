

    var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        var options = new ContactFindOptions();
        options.filter="";
        multiple = true;
        filter = ["displayName","name"];
        navigator.contacts.find(filter, onSuccess, onError, options);

        var deviceElement = document.getElementById('contentOutput');


          deviceElement.innerHTML = 'Device Name: '     + device.name    + '<br />' + 
                                    'Device Cordova: '  + device.cordova  + '<br />' + 
                                    'Device Platform: ' + device.platform + '<br />' + 
                                    'Device UUID: '     + device.uuid     + '<br />' + 
                                    'Device Version: '  + device.version  + '<br />';
    
        };

     function onSuccess(contacts) { 
        var contactList = document.getElementById('contactOutput');
        for (var i=0; i<contacts.length; i++) {
                contactList.innerHTML = "Name: " + contacts[i].name.formatted + "</ hr>" ;
        }
    };

    // onError: Failed to get the contacts
    //
    function onError(contactError) {
        $('contactOutput').append("Sorry we were unable to retreived your contact"); 
    };

    // alert dialog dismissed
    function alertDismissed() {
        // do something
    }

    // Show a custom alert
    //
    function showAlert() {
        navigator.notification.alert(
            'You have been evicted, you currently have 15 seconds to close this alert!',  // message
            alertDismissed,         // callback
            'Notice of Eviction',            // title
            'Close'                  // buttonName
        );
    }

//Function to get ESPN Data using ESPN Headlines API

function getESPN (){
$.ajax({
    type: "GET",
    dataType: "json",
    data: " ",
    url: 'http://api.espn.com/v1/sports/news/headlines/top?limit=5&_accept=text/json&apikey=kc3vzscknxjjxawgyr9966hq',
    success: function(data) {
        console.log(data);
            $.each(data.headlines, function() {
                    $('#featHeadline').append(
                    $('<div>')
                        .append($("<h3>" + this.headline + "</h3>"))
                        //Tried to implement images, but not all article contain images so my code crashes once it reaches one of those articles
                        //.append($("<img src="+this.images[0].url +">")
                            //.attr("class", "img"))
                        //.append($("<p>" + this.images[0].caption + "</p>")
                            //.attr("class", "caption"))
                        .append($("<p>" + this.description + "</p>")
                            .attr("class", "description"))
                        .append($("<h2>" +'Source: ' + this.source + "</h2>")
                            .attr("class", "source"))
                    )
                         /*if(this.byline > 0){
                            $("<p>" + this.byline + "</p>").appendTo('#featHeadline')
                        }*/
                     
            });

    },
        error: function() {
        }

});
}

//Function to retrieve Twitter headlines for a specified search string using Twitters GET API

function getTweet () {
    $.ajax({
        type: "GET",
        dataType: "json",
        data: " ",
        url: "http://search.twitter.com/search.json?q=mobile+development&rpp=15include_entities=true&callback=?",
       success: function(data) {
            console.log(data);
                $('#tweetSection').append(
                    $('<div>')
                    .attr("class","tweetHeadDiv")
                    .append($("<p>"+"Mobile Development Tweets"+"</p>")))

            $.each(data.results, function(){
                //Shortens date to just DD/MMM/YEAR
                $('#tweetSection').append(
                    $('<div>').attr("class","tweetsDiv")
                        .append($("<img src="+this.profile_image_url+">"))
                        .append($("<h3>"+this.from_user_name+"</h3>"))
                        .append($("<p>" + "@" + this.from_user + "</p>")
                            .attr("class","twitHandle"))
                        .append($("<p>" + this.created_at.substr(0,16) + "</p>")
                            .attr("class","date"))
                        .append($("<p>" + this.text + "</p>")
                            .attr("class","content"))
                        
                    )
            })
        },
            error: function() {
            }
    });

}

