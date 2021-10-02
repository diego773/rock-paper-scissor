let scoreDisplay = document.getElementById("score-display");
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
let playAgainButton = document.querySelector(".play-again");
// let userPickedImg = document.getElementById("user-picked-img");
// let housePickedImg = document.getElementById("house-picked-img");

let getHouseChoice = () => {
  const choices = [
    {
      paper: "/assets/images/icon-paper.png",
      scissors: "/assets/images/icon-scissors.png",
      rock: "/assets/images/icon-rock.png",
    },
  ];
  const houseRandom = Math.floor(Math.random() * choices.length);
  return choices[houseRandom];
};

// game winner
let getWinner = (userSelection) => {
  const houseSelection = getHouseChoice();

  if (
    (userSelection === "scissors" && houseSelection === "paper") ||
    (userSelection === "paper" && houseSelection === "rock") ||
    (userSelection === "rock" && houseSelection === "scissors")
  ) {
    updateScore(1);
    console.log("user win!");
    choicesPicked_section.style.display = "flex";
    gameOptions_section.style.display = "none";
    youWin.style.display = "flex";
    userLose.style.display = "none";
    tieGame.style.display = "none";
  } else if (userSelection === houseSelection) {
    console.log("tie!");
    choicesPicked_section.style.display = "flex";
    gameOptions_section.style.display = "none";
    tieGame.style.display = "flex";
    youWin.style.display = "none";
    userLose.style.display = "none";
  } else {
    updateScore(-1);
    console.log("you lose!");
    choicesPicked_section.style.display = "flex";
    gameOptions_section.style.display = "none";
    userLose.style.display = "flex";
    tieGame.style.display = "none";
    youWin.style.display = "none";
  }
  playAgain();
};

// play button
const playAgain = () => {
  playAgainButton.addEventListener("click", () => {
    gameOptions_section.style.display = "flex";
    choicesPicked_section.style.display = "none";
    console.log("play again!");
  });
};

// get score
let updateScore = (newScore) => {
  score += newScore;
  scoreDisplay.innerText = score;
  console.log(newScore);
};

// game buttons
let buttons = () => {
  paperButton.addEventListener("click", () => {
    getWinner("paper");
    console.log("paper");
  });
  scissorsButton.addEventListener("click", () => {
    getWinner("scissors");

    console.log("scissors");
  });
  rockButton.addEventListener("click", () => {
    getWinner("rock");

    console.log("rock");
  });
};
buttons();

//
// house choice
// let getHouseChoice = () => {
//   let choices = [
//     {
//       paper: "/assets/images/icon-paper.png",
//       scissors: "/assets/images/icon-scissors.png",
//       rock: "/assets/images/icon-rock.png",
//     },
//   ];

//   const houseRandom = Math.floor(Math.random() * choices.length);
//   console.log("house", choices[houseRandom]);
//   return choices[houseRandom];
// };

// // user choice game and checks winner
// let getWinner = (userSelection) => {
//   let houseSelection = getHouseChoice();

//   if (
//     (userSelection === "scissors" && houseSelection === "paper") ||
//     (userSelection === "paper" && houseSelection === "rock") ||
//     (userSelection === "rock" && houseSelection === "scissors")
//   ) {
//     // user won
//     updateScore(1);
//     gameOptions_section.style.display = "none";
//     choicesPicked_section.style.display = "flex";
//     youWin.style.display = "flex";
//     userLose.style.display = "none";
//     tieGame.style.display = "none";
//     // same (tie!) selection
//   } else if (userSelection === houseSelection) {
//     // Tie game;
//     gameOptions_section.style.display = "none";
//     choicesPicked_section.style.display = "flex";
//     youWin.style.display = "none";
//     userLose.style.display = "none";
//     tieGame.style.display = "flex";
//     // Lost to house selection
//   } else {
//     updateScore(-1);
//     gameOptions_section.style.display = "none";
//     choicesPicked_section.style.display = "flex";
//     youWin.style.display = "none";
//     tieGame.style.display = "none";
//     userLose.style.display = "flex";
//     console.log(houseSelection);
//   }
// };

// // updates/display the score in the score box
// let updateScore = (newScore) => {
//   score += newScore;
//   scoreDisplay.innerText = score;
//   console.log(newScore);
// };

// // Play again button function
// const playAgain = () => {
//   playAgainButton.addEventListener("click", () => {
//     gameOptions_section.style.display = "flex";
//     choicesPicked_section.style.display = "none";
//     console.log("play again!");
//   });
// };
// // call back playAgain function
// playAgain(playAgainButton);

// // button function for Rock Paper Scissors
// let button = () => {
//   paperButton.addEventListener("click", () => {
//     getWinner("paper");
//   });

//   scissorsButton.addEventListener("click", () => {
//     getWinner("scissors");
//   });

//   rockButton.addEventListener("click", () => {
//     getWinner("rock");
//   });
// };
// button();
