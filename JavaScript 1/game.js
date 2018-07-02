
// Create secret number 
var secretNumber = 4;
var guess = Number(prompt("Guess a Number"));

//Check if guess is right
if(guess === secretNumber){
	alert("You guessed correctly!")
}

//Otherwise, check if higher
else if (guess > secretNumber){
	alert("Too high, guess again")
}

//Otherwise, check if lower
else {
	alert("Too low, guess again")
}