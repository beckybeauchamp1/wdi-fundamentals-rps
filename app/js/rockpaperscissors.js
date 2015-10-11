////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

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
        return move || getInput();
}

function getComputerMove(move) {
        return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === "rock" && computerMove === "paper") {
        console.log("You chose rock and the computer chose paper");
        winner = "computer";
        
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        console.log("You chose rock and the computer chose scissors");
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        console.log("You chose paper and the computer chose rock");
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
        console.log("You chose paper and the computer chose scissors");
        winner = "computer";
    }
    else if(playerMove === "scissors" && computerMove === "paper") {
        console.log("You chose scissors and the computer chose paper");
        winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
        console.log("You chose scissors and the computer chose rock");
        winner = "computer";
    }
    else if (playerMove !== "paper" || playerMove !== "rock"){
        console.log("Not valid!");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player"){
            console.log("Player Wins!");
            playerWins ++;
            console.log("Player score is" + " " + playerWins + " " + "While the Computer score is" + " " + computerWins);
        }
        else if (winner === "computer"){
            console.log("Computer Wins!");
            computerWins ++;
            console.log("Player score is" + " " + playerWins + " " + "While the Computer score is" + " " + computerWins);
        }
        else if (playerMove === computerMove) {
            console.log ("It's a tie!");
            continue;
        }
        else {
            continue;
        }
    } 
    if (playerWins === 5){
        console.log("You win!");
    }
    else if (computerWins === 5){
        console.log("Sorry, you lose!");
    }
    return [playerWins, computerWins];
}

playToFive();




