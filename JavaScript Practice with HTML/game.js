// create secret number
var secretNumber = 4;

// ask user for a guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
// check if guess is right
if(guess === secretNumber)
{
	alert("YOU GOT IT RIGHT!");
}
else if(guess > secretNumber)
{
	alert("number too high!");
}
else if(guess < secretNumber)
{
	alert("number too low");
}