const playerChoiceEl = document.getElementById("playerChoice");
const computerChoiceEl = document.getElementById("computerChoice");
const resultsEl = document.getElementById("results");
const winEl = document.getElementById("win");
const drawEl = document.getElementById("draw");
const loseEl = document.getElementById("lose");

let winCount = 0;
let drawCount = 0;
let loseCount = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(player, computer) {
  if (player === computer) return "draw";

  const winRules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  return winRules[player] === computer ? "win" : "lose";
}

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);

  // Update choices
  playerChoiceEl.textContent = `Player's choice: ${playerChoice}`;
  computerChoiceEl.textContent = `Computer's choice: ${computerChoice}`;

  // Update results and scores
  if (result === "win") {
    resultsEl.textContent = "You won!";
    winCount++;
    winEl.textContent = `Win: ${winCount}`;
  } else if (result === "draw") {
    resultsEl.textContent = "You tied.";
    drawCount++;
    drawEl.textContent = `Draw: ${drawCount}`;
  } else {
    resultsEl.textContent = "You lost.";
    loseCount++;
    loseEl.textContent = `Lose: ${loseCount}`;
  }
}
