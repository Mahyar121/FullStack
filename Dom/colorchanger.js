var bg = document.querySelector("button");
var isPurple = false;

// bg.addEventListener("click", function(){
// 	if(isPurple){
// 		document.body.style.background = "white";
// 	}
// 	else{
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
	
// })

bg.addEventListener("click", function(){
	document.body.classList.toggle("purple");
})