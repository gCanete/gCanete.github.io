
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var numInput = document.querySelector("input");
var p1Disp = document.querySelector("#p1Disp");
var p2Disp = document.getElementById("p2Disp");
var maxScoreDisp = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;
var rstButton = document.querySelector("#rst");
var h1 = document.querySelector("h1");

numInput.addEventListener("change",function(){
    maxScoreDisp.textContent = Number(numInput.value);
    maxScore = Number(numInput.value);
    reset();
});

p1Button.addEventListener("click",function(){
  if(!gameOver){
  p1Score ++;
    if (p1Score === maxScore) {
      p1Disp.classList.add("winner");
      gameOver = true;
    }
  p1Disp.textContent = p1Score;
  }
  // h1.textContent = p1Score + " to " + p2Score;
});

p2Button.addEventListener("click",function(){
  if(!gameOver){
  p2Score ++;
    if (p2Score === maxScore) {
      p2Disp.classList.add("winner");
      gameOver = true;
    }
  p2Disp.textContent = p2Score;
  }
  // h1.textContent = p1Score + " to " + p2Score;
});



rstButton.addEventListener("click",reset);

function reset (){
  p1Score = 0;
  p2Score = 0;
  p1Disp.textContent = p1Score;
  p2Disp.textContent = p2Score;
  p1Disp.classList.remove("winner");
  p2Disp.classList.remove("winner");
  gameOver = false;
}
