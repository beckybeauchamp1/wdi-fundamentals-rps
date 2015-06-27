////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) { 
    if (move === null){ 
    	return "move";
    }
    else {
    	return "getInput()";
    }
}
function getComputerMove(move) {
    if (move === null){
    	return "move";
    }
    else{
    	return "randomPlay";
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove){
        winner = "tie";
    }
    else if (playerMove === "rock" && computerMove === "paper"){
        winner = "player";
    }
    else if (playerMove === "rock" && computerMove === "scissors"){
        winner = "computer";
    }
    else if (playerMove === "paper" && computerMove === "rock"){
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "scissors"){
        winner = "computer";
    }
    else if(playerMove === "scissors" && computerMove === "paper"){
        winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "rock"){
        winner = "computer";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins <= 5 || computerWins <= 5){
    	if (getWinner === "player"){
    		return playerWins++; 
    }
    	else{
    		return computerWins++;
    }
    }
    console.log("Player chose" + playerMove + "While Computer chose" + computerMove);
    console.log("The Score is player" + playerWins + "To computer" + computerWins);
    return [playerWins, computerWins];
}

