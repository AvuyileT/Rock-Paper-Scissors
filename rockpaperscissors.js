function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let answer = Math.floor(Math.random() * choice.length);
  return answer;
}
console.log(getComputerChoice())

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == 1) {
        return "Paper beats rock. You Lose!";
    } else if (playerSelection == "rock" && computerSelection == 2) {
        return "Rock beats scissors. You win!";
    } else if (playerSelection == "paper" && computerSelection == 0) {
        return "Paper beats rock. You win!";
    } else if (playerSelection == "paper" && computerSelection == 2) {
        return "Scissors cut paper. You lose!";
    } else if (playerSelection == "scissors" && computerSelection == 0) {
        return "Rock beats scissors. You lose!";
    } else if (playerSelection == "scissors" && computerSelection == 1) {
        return "Scissors cut paper. You win!";
    } else {
        return "It's a tie. Play Again!";
    }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playSingleRound(playerSelection, computerSelection));