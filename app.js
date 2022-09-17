"use strict";
//selecting  elements
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const clear = document.querySelector(".clear");

rock.addEventListener("click", () => {
  console.log("rock");
});
paper.addEventListener("click", () => {
  console.log("paper");
});
scissors.addEventListener("click", () => {
  console.log("scissors");
});
//player selection
let choise;
function playerFunc() {}

//computer choise
const getComputerChoise = () => {
  let choiseArry = ["rock", "paper", "scissors"];
  const randChoise = choiseArry[Math.floor(Math.random() * choiseArry.length)];
  return randChoise;
};

// checking winner
const winnerFunc = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "draw";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "player";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "player ";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "player ";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    return "computer";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "computer";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return "computer";
  }
};
// playing round
const playRound = (playerSelection, computerSelection) => {
  const result = winnerFunc(playerSelection, computerSelection);
  if (result == "draw") {
    return "its a draw";
  } else if (result == "player") {
    return "you win";
  } else {
    return "you lose";
  }
};

//the game  loop logic
const game = () => {
  console.log("Wellcome to game ");
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerFunc();
    const computerSelection = getComputerChoise();
    console.log(playRound(playerSelection, computerSelection));
  }
};

game();
