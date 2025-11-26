player_choice = document.getElementById("playerChoice");
computer_choice = document.getElementById("computerChoice");
resultsEl = document.getElementById("results")
winEl = document.getElementById("win");
drawEl = document.getElementById("draw");
loseEl = document.getElementById("lose");

let winCount = 0;
let drawCount = 0;
let loseCount = 0;

function start() {
  computer = Math.random();
  if (computer <= (1/3)) {
    comp_choice = "rock";
  }
  else if (computer <= (2/3)) {
    comp_choice = "paper";
  }
  else {
    comp_choice = "scissors";
  }
}
function logic() {
  if (player === comp_choice) {
    status = "You tied";
    resultsEl.textContent = status;
    drawCount += 1;
    drawEl.textContent = "Draw: " + drawCount;
  }
  else if (player === "rock" && comp_choice === "scissors") {
    status = "You won";
    resultsEl.textContent = status;
    winCount += 1;
    winEl.textContent = "Win: " + winCount;
  }
  else if (player === "paper" && comp_choice === "rock") {
    status = "You won";
    resultsEl.textContent = status;
    winCount += 1;
    winEl.textContent = "Win: " + winCount;
  }
  else if (player === "scissors" && comp_choice === "paper") {
    status = "You won";
    resultsEl.textContent = status;
    winCount += 1;
    winEl.textContent = "Win: " + winCount;
  }
  else {
    status = "You lost";
    resultsEl.textContent = status;
    loseCount += 1;
    loseEl.textContent = "Lose: " + loseCount;
  }
}
function rock() {
  start();
  player = "rock";
  logic();
  player_choice.textContent = "Player's choice: " + player;
  computer_choice.textContent = "Computer's choice: " + comp_choice;
}
function paper() {
  start();
  player = "paper";
  logic();
  player_choice.textContent = "Player's choice: " + player;
  computer_choice.textContent = "Computer's choice: " + comp_choice;
}
function scissors() {
  start();
  player = "scissors";
  logic();
  player_choice.textContent = "Player's choice: " + player;
  computer_choice.textContent = "Computer's choice: " + comp_choice;
}
