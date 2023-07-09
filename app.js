//console.log("rock paper scissorss");

let choices = ["Rock", "Paper", "Scissors"];

//getting a random choice
const getComputerChoice = () => {

    randomNum = Math.random() * choices.length;

    choiceIndex = Math.floor(randomNum);

    return choices[choiceIndex]
}

//let the game begin
let text = prompt("What is your Choice? ROCK, PAPER or SCISSORS");

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return "Tie";

    } else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "You Lose!";
        }else{
            return `you win! ${playerSelection} beats ${computerSelection}`
        }

    } else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "You Lose!"
        }else{
            return `you win! ${playerSelection} beats ${computerSelection}`
        }

    } else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            return "You Lose!"
        }else{
            return `you win! ${playerSelection} beats ${computerSelection}`
        }
    }
}
const playerSelection = text.toLocaleLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
