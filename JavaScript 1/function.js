

function isEven(x){
	return(x%2 == 0);
}


function factorial(x){
	if(x == 0){
		return 1;
	}

	return x*factorial(x-1);
}

function kebabToSnake(str){
	var res = str.replace(/-/g, "_");
	return res;
}


// Higher Order Functions 

function sing(){
	console.log("Twinkle Twinkle");
	console.log("How I wonder")
}

// Calls our funciton sing every 1000 milliseconds 
setInterval(sing, 1000);