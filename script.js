var count = 60;
var newHitval = 0;
var scoreVal = 0;

function timer() {
  let timerint = setInterval(() => {
    if (count > -0) {
      count--;
      document.getElementById("timer").innerText = count;
    } else {
      clearInterval(timerint);
      document.getElementById("game").innerHTML = `<h1>Game Over </h1> 

      <h1>Score ${scoreVal} </h1>`;
    }
  }, 1000);
}

function makeBubble() {
  var bubbles = "";
  for (let i = 1; i < 137; i++) {
    let number = Math.floor(Math.random() * 10);
    bubbles += `<div class = "point">${number}</div>`;
  }
  const game = (document.getElementById("game").innerHTML = bubbles);
}

function getHit() {
  newHitval = Math.floor(Math.random() * 10);
  document.getElementById("hitValue").innerText = newHitval;
}

function updateScore() {
  scoreVal += 10;
  document.getElementById("score").textContent = scoreVal;
}

makeBubble();
getHit();
timer();

/* const elements = document.getElementsByClassName("point");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", () => {
    let pointvalue = Number(elements[i].textContent);

    if (pointvalue === Number(newHitval)) {
      updateScore();
      makeBubble();
      getHit();
    }
  });
} */

const elements = document.getElementById("game");
elements.addEventListener("click", (details) => {
  let pointvalue = Number(details.target.textContent);
  if (pointvalue === newHitval) {
    updateScore();
    getHit();
    makeBubble();
  }
});
