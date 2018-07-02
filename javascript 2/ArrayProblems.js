

function printReverse(arr){
	for(i = arr.length; i > 0; i--){
		console.log(arr[i-1]);
	}
}


function isUniform(arr){
	var blah = arr[0];
	var ret = true;
	arr.forEach(function(element){
		if(blah != element){
			ret = false;
			return ret;
		}
	});
	return ret;
}

function sumArray(arr){
	var count = 0;
	arr.forEach(function(elem){
		count +=elem;
	})
	return count
}


function max(arr){
	var max = 0;
	for(i = 0; i <arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}
