let scoreDisplay = document.getElementById("score-display");
// let scoreBox_div = document.querySelector(".score-box");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let rockButton = document.querySelector(".rock");
let score = 0;

let gameOptions_section = document.querySelector(".game-options");
let choicesPicked_section = document.querySelector(".choices-picked");
let youWin = document.querySelector(".you-win");
let userLose = document.querySelector(".user-lose");
let tieGame = document.querySelector(".tie-game");

// let img = document.querySelector("img");
// const userPicked_h1 = document.querySelector(".user-picked");
// const housePicked_h1 = document.querySelector(".house-picked");
// let buttonRules = document.querySelector(".button-rules");
// let rulesImg = document.querySelector(".rules");
// let buttonBack = document.querySelector(".button-back");
let playAgainButton = document.querySelector(".play-again");
// let userPickedImg = document.getElementById("user-picked-img");
// let housePickedImg = document.getElementById("house-picked-img");
// "paper", "scissors", "rock"
// house choice
let getHouseChoice = () => {
  let choices = [
    {
      paper: "/assets/images/icon-paper.png",
      scissors: "/assets/images/icon-scissors.png",
      rock: "/assets/images/icon-rock.png",
    },
  ];

  const houseRandom = Math.floor(Math.random() * choices.length);

  return choices[houseRandom];
};

// user choice game and checks winner
let getWinner = (userSelection, houseSelection) => {
  houseSelection = getHouseChoice();
  if (
    (userSelection === "scissors" && houseSelection === "paper") ||
    (userSelection === "paper" && houseSelection === "rock") ||
    (userSelection === "rock" && houseSelection === "scissors")
  ) {
    // user won
    gameOptions_section.style.display = "none";
    choicesPicked_section.style.display = "flex";
    youWin.style.display = "flex";
    userLose.style.display = "none";
    tieGame.style.display = "none";
    updateScore(1);
    // same (tie!) selection
  } else if (userSelection === houseSelection) {
    // Tie game;
    gameOptions_section.style.display = "none";
    choicesPicked_section.style.display = "flex";
    youWin.style.display = "none";
    userLose.style.display = "none";
    tieGame.style.display = "flex";
    // Lost to house selection
  } else {
    updateScore(-1);
    gameOptions_section.style.display = "none";
    choicesPicked_section.style.display = "flex";
    youWin.style.display = "none";
    tieGame.style.display = "none";
    userLose.style.display = "flex";
  }
};

// updates/display the score in the score box
let updateScore = (newScore) => {
  score += newScore;
  scoreDisplay.innerText = score;
  console.log(newScore);
};

// Play again button function
const playAgain = () => {
  playAgainButton.addEventListener("click", () => {
    gameOptions_section.style.display = "flex";
    choicesPicked_section.style.display = "none";
    console.log("play again!");
  });
};
// call back playAgain function
playAgain(playAgainButton);

// button function for Rock Paper Scissors
let button = () => {
  paperButton.addEventListener("click", () => {
    getWinner("paper");
  });

  scissorsButton.addEventListener("click", () => {
    getWinner("scissors");
  });

  rockButton.addEventListener("click", () => {
    getWinner("rock");
  });
};
button();
