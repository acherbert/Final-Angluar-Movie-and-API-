

$("#searchBtn").click(function(){
	var string = $("#searchInput").val();
	var url = "http://www.omdbapi.com/?apikey=2681c342&t=" + string;

	$.getJSON(url, function(result)
	{
		$("#movieArea").html("");
		$("#movieArea").append('<img src="' + result.Poster + '" ><div id="movieTitle">' + result.Title +'</div>');
			$("#movieArea").append('<div id="movieTitle">' + result.Year + ' ');
			$("#movieArea").append('<div id="movieTitle">' + result.Plot + ' ');
				$("#movieArea").append('<div id="movieTitle">' + + result.Genre + ' ');
					$("#movieArea").append('<div id="movieTitle">' + result.Writer+ ' ');
							$("#movieArea").append('<div id="movieTitle">' + result.Actors + ' ');
								$("#movieArea").append('<div id="movieTitle">' + result.Awards + ' '); 
										$("#movieArea").append('<div id="movieTitle">' +result.DVD + ' '); 
											$("#movieArea").append('<div id="movieTitle">' + result.BoxOffice + ' ');
												$("#movieArea").append('<div id="movieTitle">' + result.imdbVotes + ''); 
													$("#movieArea").append('<div id="movieTitle">' + result.RunTime + ' ');
														$("#movieArea").append('<div id="movieTitle">' + result.Released + ' '); 
		console.log(result)
	});

	
});