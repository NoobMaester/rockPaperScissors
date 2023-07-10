

//getting a random choice
const getComputerChoice = () => {
    
    let choices = ["Rock", "Paper", "Scissors"];

    randomNum = Math.random() * choices.length;

    choiceIndex = Math.floor(randomNum);

    return choices[choiceIndex]
}

//playing a single round
const playRound = (playerSelection, computerSelection) => {

    //
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    //checking for a tie
    if (player === computer){
        return "It's a Tie!";
    }

    if (player === "rock"){
        if (computer === "paper"){
            return `You Lose! ${computer} beats ${player}`;
        } else {
            return `you Win! ${player} beats ${computer}`;
        }

    } else if (player === "scissors"){
        if (computer === "rock"){
            return `You Lose! ${computer} beats ${player}`;
        } else {
            return `you Win! ${player} beats ${computer}`;
        }

    } else if (player === "paper"){
        if (computer === "scissors"){
            return `You Lose! ${computer} beats ${player}`;
        } else {
            return `you Win! ${player} beats ${computer}`
        }
    } else {
        return "Invalid selection. It has to be rock, paper, or scissors";
    }
}

//let the game begin

const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("what is your choice? rock, paper, scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if(result.includes("Win")){
            playerScore ++;
        } else if (result.includes("Lose")){
            computerScore ++;
        }
    }

    console.log(`Final Score: PLAYER: ${playerScore} COMPUTER: ${computerScore}`)
}

//start game
game();