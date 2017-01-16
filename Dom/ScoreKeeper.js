var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var reset = document.querySelector("#p3");
var p1 = document.querySelector("#p1Display");
var p2 = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var num = document.querySelector("#num");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score == winningScore)
		{
			p1Display.classList.add("winner");
			gameOver = !gameOver;
		}
		p1.textContent = p1Score;
	}
	
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score == winningScore)
		{
			p2Display.classList.add("winner");
			gameOver = !gameOver;
		}
		p2.textContent = p2Score;
	}
	
});

reset.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	winningScore = 5;
	p1.textContent = p1Score;
	p2.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = !gameOver;
});

numInput.addEventListener("change", function(){
	num.textContent = numInput.value;
	winningScore = num.textContent;
})

