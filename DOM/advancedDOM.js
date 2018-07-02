

var button = document.querySelector("button");
var body = document.querySelector("body");


//button.addEventListener("click", function(){
//	if (body.style.background != "pink"){
//		body.style.background = "pink";
//	}
//	else {
//		body.style.background = "white";
//	}
//
//});


//Moral -> Using classList.toggle is much shorter and easier too. Just make a CSS class called pink
button.addEventListener("click", function(){
	body.classList.toggle("pink");

});


