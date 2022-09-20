let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

// playround
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    roundWinner = "Draw";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
};

const getRandomChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "ROCK";
  } else if (randomNumber === 1) {
    return "PAPER";
  } else if (randomNumber === 2) {
    return "SCISSORS";
  }
};

const isGameOver = () => {
  return playerScore === 5 || computerScore === 5;
};

// ui selecting elements

const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");

rockBtn.addEventListener("click", () => handleClick("ROCK"));
paperBtn.addEventListener("click", () => handleClick("PAPER"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));
restartBtn.addEventListener("click", restartGame);
overlay.addEventListener("click", closeEndgameModal);

const handleClick = (playerSelection) => {
  if (isGameOver()) {
    openEndgameModal();
    return;
  }

  const computerSelection = getRandomChoice();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  updateScore();

  if (isGameOver()) {
    openEndgameModal();
    setFinalMessage();
  }
};

//showing txt content and icons
function updateChoices(playerSelection, computerSelection) {
  if (playerSelection === "ROCK") {
    playerSign.textContent = "✊";
  } else if (playerSelection === "PAPER") {
    playerSign.textContent = "✋";
  } else if (playerSelection === "SCISSORS") {
    playerSign.textContent = "✌";
  }

  if (computerSelection === "ROCK") {
    computerSign.textContent = "✊";
  } else if (computerSelection === "PAPER") {
    computerSign.textContent = "✋";
  } else if (computerSelection === "SCISSORS") {
    computerSign.textContent = "✌";
  }
}

const updateScore = () => {
  if (roundWinner === "Draw") {
    scoreInfo.textContent = "It's Draw!";
  } else if (roundWinner === "player") {
    scoreInfo.textContent = "You won!";
  } else if (roundWinner === "computer") {
    scoreInfo.textContent = "You lost!";
  }

  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
};

const updateScoreMessage = (winner, playerSelection, computerSelection) => {
  if (winner === "player") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner === "computer") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} Draw with ${computerSelection.toLowerCase()}`;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const openEndgameModal = () => {
  endgameModal.classList.add("active");
  overlay.classList.add("active");
};

function closeEndgameModal() {
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

const setFinalMessage = () => {
  return playerScore > computerScore
    ? (endgameMsg.textContent = "You won!")
    : (endgameMsg.textContent = "You lost...");
};

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  scoreInfo.textContent = "Player Selection";
  scoreMessage.textContent = "First to score 5 points wins";
  playerScorePara.textContent = "Player: 0";
  computerScorePara.textContent = "Computer: 0";
  playerSign.textContent = "?";
  computerSign.textContent = "?";
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}
