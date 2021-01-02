var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var newimg = document.querySelectorAll("img");
newimg[0].setAttribute("src", "dice" + randomNumber1 + ".png");
newimg[1].setAttribute("src", "dice" + randomNumber2 + ".png");

var winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  winner.innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  winner.innerHTML = "Player 2 Wins!";
} else {
  winner.innerHTML = "Draw!";
}
