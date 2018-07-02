

var tag = document.getElementById("highlight");
console.log(tag)


var tags = document.getElementsByClassName("bolded");
console.log(tags[0])


var tags2 = document.getElementsByTagName("li");


// querySelector -> returns first element that matches css style selector

var tag2 = document.querySelector("#highlight");

var tag3 = document.querySelector(".bolded");




//MANIPULATE

tag.style.color = "blue";
tag.style.border = "10px solid red"