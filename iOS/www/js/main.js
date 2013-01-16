$(document).on("pageinit", function(){
	getESPN();
})



function getESPN (){
$.ajax({
    type: "GET",
    dataType: "json",
    data: " ",
    url: 'http://api.espn.com/v1/sports/news/headlines/top?limit=10&_accept=text/json&apikey=kc3vzscknxjjxawgyr9966hq',
    success: function(data) {
    	console.log(data);
      	var ul = $('<ul/>');
			$.each(data.headlines, function() {
                    $('#featHeadline').append(
                    $('<div>')
                        .append($("<h3>" + this.headline + "</h3>"))
                        //.append($("<p>"+"<img src="+this.images.url+">" + this.images.caption + "</p>"))
                        .append($("<p>" + this.description + "</p>"))
                        .append($("<h2>" + this.source + "</h2>"))
                     )
			});

	},
		error: function() {
		}

});
}


