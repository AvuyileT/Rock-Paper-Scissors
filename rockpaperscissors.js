function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let answer = Math.floor(Math.random() * choice.length);
  return answer;
}

var playerScore = 0;
var computerScore = 0;

function playSingleRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === 1) ||
    (playerSelection === "paper" && computerSelection === 2) ||
    (playerSelection === "scissors" && computerSelection === 0)
  ) {
    console.log("You Lose!");
    computerScore++;
  } else if (
    (playerSelection === "rock" && computerSelection === 2) ||
    (playerSelection === "paper" && computerSelection === 0) ||
    (playerSelection === "scissors" && computerSelection === 1)
  ) {
    console.log("You win!");
    playerScore++;
  } else {
    console.log("It's a tie. Play Again!");
  }
}

function game() {
  for (i = 1; i <= 5; i++) {
    const playerSelection = prompt(
      "Rock, Paper, Scissors! What is your answer? "
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playSingleRound(playerSelection, computerSelection));
  }
  return { playerScore, computerScore };
}
console.log(game());
