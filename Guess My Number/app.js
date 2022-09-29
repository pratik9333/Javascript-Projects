"use scrict";

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let messageBox = document.querySelector(".message");
let highScoreBox = document.querySelector(".highscore");
let number = document.querySelector(".number");
let scoreBox = document.querySelector(".score");
let highscore = document.querySelector(".highscore");

let inputValue;
let defaultHighscore = 0;

let score = 20;
scoreBox.innerText = score;

const displayMessage = function (message) {
  messageBox.innerText = message;
};

// add event listener on check button
document.querySelector(".check").addEventListener("click", () => {
  inputValue = document.querySelector(".guess").value;

  if (!inputValue || score === 0) {
    displayMessage("No Number Found or you already lost the game :)!");
  }

  // if user wins
  else if (Number(inputValue) === randomNumber) {
    displayMessage("Yay, you guessed it right");
    number.innerText = randomNumber;
    if (score > defaultHighscore) {
      defaultHighscore = score;
      highScoreBox.innerText = score;
    }
  }

  // if value is incorrect
  else {
    if (score < 2) {
      displayMessage("Sorry, you have lost the game");
    } else {
      displayMessage(`${inputValue < randomNumber ? "Too Low" : "Too High"}`);
      score -= 1;
    }
  }

  // // if value is low
  // else if (inputValue < randomNumber) {
  //   if (score < 2) {
  //     displayMessage("Sorry, you have lost the game");
  //     highScoreBox.innerText = 0;
  //   } else {
  //     messageBox.innerText = "Too low";
  //     score -= 1;
  //     scoreBox.innerText = score;
  //   }
  // }

  // // if value is high
  // else {
  //   if (score < 2) {
  //     displayMessage("Sorry, you have lost the game");
  //     highScoreBox.innerText = 0;
  //   } else {
  //     messageBox.innerText = "Too high";
  //     score -= 1;
  //     scoreBox.innerText = score;
  //   }
  // }
});

// add event listener on again button
document.querySelector(".again").addEventListener("click", () => {
  number.innerText = "?";
  inputValue = "";
  displayMessage("start guessing");
  score = 20;
  scoreBox.innerText = score;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
});
