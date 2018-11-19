
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp = document.getElementById("colorDisp");
var messageDisp = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var mediumBtn = document.getElementById("mediumBtn");
var hardBtn = document.getElementById("hardBtn");
var guesses = 0;
var guessesLeft = document.getElementById("guesses");
var scored = document.getElementById("scored");
var score = 0;
var mode = 2;
var h1String = h1.innerHTML;

resetGuesses(2);
changeScore(0);
refillSquares(6);

easyBtn.addEventListener("click",function(){
  mode = 3;
  changeScore(0);
  easyBtn.classList.add("selected");
  mediumBtn.classList.remove("selected");
  hardBtn.classList.remove("selected");
  refillSquares(3);
  colorDisp.textContent = pickedColor;
  resetGuesses(3);
  for(var i = 0; i < squares.length; i++){
    squares[i].style.display = "block";
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }

});

mediumBtn.addEventListener("click",function(){
  mode = 2;
  changeScore(0);
  hardBtn.classList.remove("selected");
  mediumBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  refillSquares(6);
  colorDisp.textContent = pickedColor;
  resetGuesses(2);
  colorDisp.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

hardBtn.addEventListener("click",function(){
  mode = 1;
  hardBtn.classList.add("selected");
  mediumBtn.classList.remove("selected");
  easyBtn.classList.remove("selected");
  refillSquares(6);
  colorDisp.textContent = pickedColor;
  resetGuesses(1);
  for(var i = 0; i < squares.length; i++){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetBtn.addEventListener("click",function(){
  refillSquares(numSquares);
  colorDisp.textContent = pickedColor;
  changeScore(0);

  if(mode === 3){
    resetGuesses(3);
  }else if (mode === 2) {
    resetGuesses(2);
  }else if (mode === 1) {
    resetGuesses(1);
  }
  //change color of the squares
  for(var i = 0; i < squares.length; i++){
    //Add new colors to squares
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelBlue";
});


// Square code

function clickCheck (){

      var clickedColor = this.style.backgroundColor;
      //Compare color of picked color
      if(clickedColor === pickedColor){
        changeColor(clickedColor);
        changeScore(score+1);
        h1.style.backgroundColor = clickedColor;
        setTimeout(function() {
          refillSquares(numSquares);
          for(var i = 0; i < numSquares; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
            h1.style.backgroundColor = "steelBlue";
          } }, 2000);


        }else{
          this.style.backgroundColor = "#232323";
          resetGuesses(guesses-1);
        }
          if(guesses <= 0){
            for(var i = 0; i < numSquares; i++){
              squares[i].style.display = "none";
		         	h1.textContent = "Try Again";
              h1.style.backgroundColor = "steelBlue";
            }

          }
        }

        if(guesses <= 0){
          colorDisp.textContent = "YOU LOST!";
          for(var i = 0; i < numSquares; i++){
            squares[i].style.display = "none";
            h1.textContent = "Try Again";
            h1.style.backgroundColor = "steelBlue";
          }
        }



  function changeColor(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
      //change each color to match given color
      squares[i].style.backgroundColor = color;
    }
  }

  function pickColor(){
    //pick a random number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }

  function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
      arr.push(randomColor());
    }
    return arr;
  }

  function resetGuesses(num){
    guesses = num;
    guessesLeft.textContent = num;
  }

  function changeScore(num){
    score = num;
    scored.textContent = num;
  }

  function randomColor(){
    //red 0-255
    var R = Math.floor(Math.random() * 255);
    //green 0-255
    var G = Math.floor(Math.random() * 255);
    //blue 0-255
    var B = Math.floor(Math.random() * 255);

    return "RGB(" + R + ", " + G + ", " + B + ")";
  }
  function resetH1(color){
    h1.innerHTML = "The Great <br> <span id=\"colorDisp\">"+ color + "</span> <br>Color Game"
  }
  function refillSquares(num){
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    resetH1(pickedColor);
    numSquares = num;
    for(var i = 0; i < squares.length; i++){
      //Add initial colors to squares
      squares[i].style.backgroundColor = colors[i];
      //Add eventlistener
      squares[i].addEventListener("click",clickCheck);
  }
}
