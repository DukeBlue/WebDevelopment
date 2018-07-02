
var movieDB = [
	{
		title: "The Incredibles",
		rating: 8.0,
		hasWatched: true
	},

	{
		title: "The Notebook",
		rating: 7.9,
		hasWatched: false
	},

	{
		title: "Eternal Sushine of the Spotless Mind",
		rating: 8.3,
		hasWatched: true
	},

	{
		title: "Shrek 2",
		rating: 7.2,
		hasWatched: true
	}

];

function print(struct){
	movieDB.forEach(function(movie){
		if(movie.hasWatched == true){
			console.log("You have watched " + movie.title + " - " + movie.rating + " stars");
		}
		else{
			console.log("You have not watched " + movie.title + " - " + movie.rating + " stars");
		}
	});
}





