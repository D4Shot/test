"use strict";
//selecting  elements
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let clear = document.querySelector(".clear");

//computer choise
const getComputerChoise = () => {
  let choiseArry = ["rock", "paper", "scissors"];
  const randChoise = choiseArry[Math.floor(Math.random() * choiseArry.length)];
  return randChoise;
};
const computerChoise = String(getComputerChoise());

// console.log(typeof computerChoise, computerChoise);
//listeners
clear.addEventListener("click", () => {
  location.reload();
});
rock.addEventListener("click", () => {
  rock = player("rock");
  console.log(winnerFunc(rock, computerChoise));
});
paper.addEventListener("click", () => {
  paper = player("paper");
  console.log(winnerFunc(paper, computerChoise));
});
scissors.addEventListener("click", () => {
  scissors = player("scissors");
  console.log(winnerFunc(scissors, computerChoise));
});

//player selection
const player = (value) => {
  if (value === "rock") {
    return "rock";
  } else if (value === "paper") {
    return "paper";
  } else if (value === "scissors") {
    return "scissors";
  }
};

// checking winner
const winnerFunc = (player, computer) => {
  if (player === computer) {
    return "Draw";
  } else if (player === "rock" && computer === "scissors") {
    return "player wins rock";
  } else if (player === "paper" && computer === "rock") {
    return "player wins paper";
  } else if (player === "scissors" && computer === "paper") {
    return "player wins scissors";
  } else {
    return `computer wins `;
  }

  // if (player === "rock" && computer === "scissors") {
  //   return "player wins with rock";
  // } else if (player === "paper" && computer === "rock") {
  //   return "player wins with paper";
  // } else if (player === "scissors" && computer === "paper") {
  //   return "player wins with paper";
  // } else {
  //   return "computer won ";
  // }
};
