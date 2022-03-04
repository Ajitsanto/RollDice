var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var dice1 = document.getElementById("dice1-img");

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
var dice2 = document.getElementById("dice2-img");

var heading = document.getElementById("heading");
var reloadThePage = document.getElementById("btnreload");



if (randomNumber1 === 1) {
  dice1.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  dice1.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  dice1.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  dice1.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  dice1.setAttribute("src", "images/dice5.png");
} else {
  dice1.setAttribute("src", "images/dice6.png");
}

if (randomNumber2 === 1) {
  dice2.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
  dice2.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
  dice2.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
  dice2.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
  dice2.setAttribute("src", "images/dice5.png");
} else {
  dice2.setAttribute("src", "images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  heading.innerHTML = "🚩 Player 2 Wins";
} else if (randomNumber1 === randomNumber2) {
  heading.innerHTML = "🤝 It is a draw";
} else {
  heading.innerHTML = "Sorry no result 💔";
}

function onreload() {
  location.reload();
}

reloadThePage.addEventListener("click", onreload);
