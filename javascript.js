// rockPaperScissors Script



// Need to get a computer choice, recieve a player choice
// Compare computer choice to player choice to determine winner


// getComputerChoice
// Function will return a string, rock, paper or scissors
// Assign string using switch cases based on a random num 0 through 2

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    switch(randNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// singleGame
// Takes two inputs: Player choice and computer choice
// Switch statements based off of player choice
// conditionals inside switch cases will return the winner

function singleGame(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
       switch(playerChoice){
        case "rock":
            if(computerChoice === "paper"){
                return "You lose! Paper beats Rock";
            } else if (computerChoice == "scissors"){
                return "You win! Rock beats Scissors";
            } else {
                return "Its a tie!";
            }
        case "paper":
            if(computerChoice === "scissors"){
                return "You lose! Scissors beats Paper";
            } else if (computerChoice == "rock"){
                return "You win! Paper beats Rock";
            } else {
                return "Its a tie!";
            }
        case "scissors":
            if(computerChoice === "rock"){
                return "You lose! Rock beats Scissors";
            } else if (computerChoice == "paper"){
                return "You win! Scissors beats Paper";
            } else {
                return "Its a tie!";
            }
        default:
            return "Choice invalid, try again!"
       }
}


// game
// Play 5 rounds of singleGame, keep score and report winner of each round and game.
// Use for loop to play 5 games. Ask for input at beggining of each round.
// Search returned string for win or lose or tie. Increase counter accordingly.

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let game = 0; game < 5; game++){
        let playerChoice = prompt("Rock, Papper, Scissors! Choose one to play:");
        let gameResult = singleGame(playerChoice, getComputerChoice());
        if (gameResult.includes("win")){
            playerScore++;
        } else if (gameResult.includes("lose")){
            computerScore++;
        }
        console.log(gameResult);
        console.log("Player: " + playerScore + " Computer: " + computerScore);
    }
    if (playerScore === computerScore){
        console.log("The game is a tie!");
    } else if (playerScore > computerScore){
        console.log("Congrats! You win the game.");
    } else {
        console.log("Computer wins the game! You lost.")
    }
}










