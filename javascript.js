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

function singleGame(){
    const computerChoice = getComputerChoice();
    const playerChoice = this.getAttribute("data-choice");
    let result;
       switch(playerChoice){
        case "rock":
            if(computerChoice === "paper"){
                result = "computer";
            } else if (computerChoice == "scissors"){
                result = "player";
            } else {
                result = "Its a tie!";
            }
            break;
        case "paper":
            if(computerChoice === "scissors"){
                result = "computer";
            } else if (computerChoice == "rock"){
                result = "player";
            } else {
                result = "Its a tie!";
            }
            break;
        case "scissors":
            if(computerChoice === "rock"){
                result = "computer";
            } else if (computerChoice == "paper"){
                result = "player";
            } else {
                result = "Its a tie!";
            }
            break;
       }
       if(result === "computer"){
        increaseCounter(document.querySelector(".countComputer"));
        document.querySelector(".message").textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
       } else if (result === "player"){
        increaseCounter(document.querySelector(".countPlayer"));
        document.querySelector(".message").textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
       } else {
        document.querySelector(".message").textContent = "Its a tie! Try again.";
       }
       checkEndgame();
}

function increaseCounter(counter){
    let currentCount = counter.textContent;
    counter.textContent = parseInt(currentCount) + 1;
}

function checkEndgame(){
    let playerScore = document.querySelector(".countPlayer");
    let computerScore = document.querySelector(".countComputer");
    if(parseInt(computerScore.textContent) === 5){
        document.querySelector(".message").textContent = `The game is over! You lose ${computerScore.textContent} to ${playerScore.textContent}.`;
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    } else if (parseInt(playerScore.textContent) === 5){
        document.querySelector(".message").textContent = `The game is over! You win ${playerScore.textContent} to ${computerScore.textContent}.`;
        playerScore.textContent = 0;
        computerScore.textContent = 0;
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
        let gameResult = singleGame(playerChoice);
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


// Event listeners and such.

//const rockBtn = document.querySelector(".rock");
//console.log(rockBtn);
//rockBtn.addEventListener("click", () => {console.log("ROCK!")});

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener("click", singleGame));



