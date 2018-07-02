window.setTimeout(function() {
  
  var todos = ["Buy new turtle"];

  var input = prompt("What would you like to do");

  while(input != "quit"){
  	if (input == "list"){
  		listTodos();
	
  	}else if (input == "delete"){
  		deleteTodos();

  	}else if (input == "new"){
  		addTodo();
  	}
  	input = prompt("What would you like to do");

}
console.log("You quit");

function listTodos(){
	todos.forEach(function(todo, index){
	  			console.log("**********");
	  			console.log(index + ": " +todo);
	  			console.log("**********");
	  		});
}

function deleteTodos(){
	var index = prompt("Enter index of todo to delete");
  		todos.splice(index, 1);

}

function addTodo(){
	var newEntry = prompt("Enter new todo");
  		todos.push(newEntry);
}






}, 500);