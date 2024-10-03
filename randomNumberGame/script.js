const easyButton = document.getElementById("easyLevel");
const medieumButton = document.getElementById("medieumLevel");
const hardButton = document.getElementById("hardLevel");
const inputGuess = document.getElementById("inputGuess");
const returnmessage = document.getElementById("guessing");
const MySubmit = document.getElementById("MySubmit");
let randomnum;
let number;
let score = 0;
easyButton.onclick = function () {
  randomnum = Math.floor(Math.random() * 10) + 1;
}
medieumButton.onclick = function () {
    randomnum = Math.floor(Math.random() * 50) + 1;
  }
hardButton.onclick = function () {
    randomnum = Math.floor(Math.random() * 100) + 1;
  }
MySubmit.onclick = function () {
    number = inputGuess.value;
    number = Number(number);
    if (number === randomnum) {
      alert("you guessed right !!");
    }
    else {
        alert("wrong try again");
      }
  }


