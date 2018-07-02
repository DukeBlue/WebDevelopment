var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector('#resetButton');
var modeButtons = document.querySelectorAll('.mode');

//Function to initialize the game
init();


function reset(){
	//generate all new colors, pick new random color,change colors of squares
	resetButton.textContent = "New Colors";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
	for(var i = 0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";

}
resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//Loop through all squares to change each color
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	//repeat num times
	for(var i = 0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//pick a 'red', a 'blue', and a 'green'
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


function init(){
	setupModeButton();
	setupSquares();
	reset();


}

function setupModeButton(){
	//Mode button event listeners
	for(var i = 0; i< modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
	
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			//if(this.textContent == "Easy"){
			//	numSquares = 3;
			//}else{
			//	numSquares = 6;
			//}
			reset();
			//Figure out how many squares to show, pick new colors, and a winning color. 
		})
	}

}
function setupSquares(){
	for(var i = 0; i<squares.length; i++){

	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
		//compare color to clicked square
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			//WIN!
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again"; //Change to play again if we win
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			//LOSE!
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
			}

		});
	}

}





