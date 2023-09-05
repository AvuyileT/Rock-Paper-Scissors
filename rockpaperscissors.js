function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let answer = Math.floor(Math.random() * choice.length);
  return answer;
}
console.log(getComputerChoice());

