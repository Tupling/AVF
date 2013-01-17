
    var path = window.location.pathname;
        if (path.indexOf('/espn.html') !== -1){
            getESPN();
        } else {
            getTweet();
        }





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
                    	.attr("data-filter", true)
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

/*function getTweet () {
    $.ajax({

    })
}*/


