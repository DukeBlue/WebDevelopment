//Check off specific todos by clicking

//$('li').click(function(){
//	//if li is grey
//	if(($this).css("color") === "rgb(128,128,128)"){
//		//turn it black
//		$(this).css({
//		color:"black",
//		textDecoration:"none"
//	});
//
//	}
//	else{
//		//turn it grey
//		$(this).css({
//		color:"gray",
//		textDecoration:"line-through"
//	})
//	}
//	
//});

$('ul').on("click", "li", function(){ //says, when a li is clicked inside a ul, toggle the class
	$(this).toggleClass("completed")
});

//Click on x to delete todo
$('ul').on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	}); //We need .parent because right now, 'this' refers to only the span
	event.stopPropagation(); //Stops the bubbling of listeners
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //enter key is 13
		var todoText = $(this).val();
		$(this).val("")
		//create new li, and add to ul
		$('ul').append("<li><span> <i class = 'fas fa-trash'> </i> </span> " + todoText + "</li>")

	}

});

//NOTE: .click() will only add listeners to existing elements, while on() adds listeners to all future possible elements!!

$(".fa-plus").on("click", function(){
	$("input[type = 'text']").fadeToggle();
})