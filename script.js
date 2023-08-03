"use strict";

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number ⛔";
  }

  //When Guess Number Is too high
  else if (guess > number) {
    document.querySelector(".message").textContent = "Too High 📈";
    score--;
    document.querySelector(".score").textContent = score;

    if (score < 1) {
      document.querySelector(".message").textContent = " 💥 Game Over";
      document.querySelector(".score").textContent = 0;
    }

    //When e guess Too low
  } else if (guess < number) {
    document.querySelector(".message").textContent = " Too Low 📉";
    score--;
    document.querySelector(".score").textContent = score;

    //When Game Is Over
    if (score < 1) {
      document.querySelector(".message").textContent = " 💥 Game Over";
      document.querySelector(".score").textContent = 0;
    }

    //When We Guess Right Number
  } else if (guess == number) {
    document.querySelector(".message").textContent = "Correct Number 🎉";
    document.querySelector(".number").textContent = number;
    document.querySelector(".number").style.width = "30rem";

    document.querySelector("body").style.backgroundColor = "#39FF14";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
});
console.log(number);
