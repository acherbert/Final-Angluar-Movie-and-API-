

$("#searchBtn").click(function(){
	var string = $("#searchInput").val();
	var url = "http://www.omdbapi.com/?apikey=2681c342&t=" + string;

	$.getJSON(url, function(result)
	{
		$("#movieArea").html("");
		$("#movieArea").append('<img src="' + result.Poster + '" ><div id="movieTitle">' + result.Title +'</div>')>  
			$("#movieArea").append('<img src="' + result.Year + '" ><div id="movieTitle">' + result.Title +'</div>')>  
				$("#movieArea").append('<img src="' + result.Genre + '" ><div id="movieTitle">' + result.Title +'</div>')> 
					$("#movieArea").append('<img src="' + result.Title + '" ><div id="movieTitle">' + result.Title +'</div>')> 
						$("#movieArea").append('<img src="' + result.Writer+ '" ><div id="movieTitle">' + result.Title +'</div>')> 
							$("#movieArea").append('<img src="' + result.Actors + '" ><div id="movieTitle">' + result.Title +'</div>')> 
								$("#movieArea").append('<img src="' + result.Awards + '" ><div id="movieTitle">' + result.Title +'</div>')> 
									$("#movieArea").append('<img src="' + result.Plot + '" ><div id="movieTitle">' + result.Title +'</div>')>  
										$("#movieArea").append('<img src="' + result.DVD + '" ><div id="movieTitle">' + result.Title +'</div>')>  
											$("#movieArea").append('<img src="' + result.BoxOffice + '" ><div id="movieTitle">' + result.Title +'</div>')> 
												$("#movieArea").append('<img src="' + result.imdbVotes + '" ><div id="movieTitle">' + result.Title +'</div>')> 
													$("#movieArea").append('<img src="' + result.RunTime + '" ><div id="movieTitle">' + result.Title +'</div>')> 
														$("#movieArea").append('<img src="' + result.Released + '" ><div id="movieTitle">' + result.Title +'</div>')> 
		console.log(result)
	});

	
});