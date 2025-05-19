var quotes = document.querySelectorAll(".quote");
var randomNum = 0;
function random() {
  var randomNumCheck = Math.floor(Math.random() * quotes.length);
  while (randomNum === randomNumCheck) {
    randomNumCheck = Math.floor(Math.random() * quotes.length);
  }
  randomNum = randomNumCheck;
  quotes[randomNum].style.display = "block";
  for (let i = 0; i < quotes.length; i++) {
    if (i !== randomNum) quotes[i].style.display = "none";
  }
}
