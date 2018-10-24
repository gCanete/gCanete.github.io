
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp = document.getElementById("colorDisp");
var messageDisp = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click",function(){
   easyBtn.classList.toggle("selected");
   hardBtn.classList.toggle("selected");
   colors = generateRandomColors(3);
   pickedColor = pickColor();
   colorDisp.textContent = pickedColor;
   numSquares = 3;
   for(var i = 0; i < squares.length; i++){
     if(colors[i]){
       squares[i].style.backgroundColor = colors[i];
     }else{
     squares[i].style.display = "none";
     }
   }

});

hardBtn.addEventListener("click",function(){
   hardBtn.classList.toggle("selected");
   easyBtn.classList.toggle("selected");
   colors = generateRandomColors(6);
   pickedColor = pickColor();
   numSquares = 6;
   colorDisp.textContent = pickedColor;
   for(var i = 0; i < squares.length; i++){
     squares[i].style.backgroundColor = colors[i];
     squares[i].style.display = "block";
   }
});

//Reset Button
resetBtn.addEventListener("click",function(){
  //generate random colors
  colors = generateRandomColors(numSquares);
  //pick random color
  pickedColor = pickColor();
  //change colorDisp
  colorDisp.textContent = pickedColor;
  //change color of the squares
  for(var i = 0; i < squares.length; i++){
    //Add new colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelBlue";
  resetBtn.textContent = "New Colors";
  messageDisp.textContent = "";
});


//Square code
colorDisp.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
  //Add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //Add eventlistener
  squares[i].addEventListener("click",function(){
  //Grab color of picked square
   var clickedColor = this.style.backgroundColor;
  //Compare color of picked color
  if(clickedColor === pickedColor){
     messageDisp.textContent = "Correct!";
     changeColor(clickedColor);
     h1.style.backgroundColor = clickedColor;
     resetBtn.textContent = "Play Again?";
  }else{
     this.style.backgroundColor = "#232323";
     messageDisp.textContent = "Try again";
       }
  });
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

function randomColor(){
  //red 0-255
  var R = Math.floor(Math.random() * 255);
  //green 0-255
  var G = Math.floor(Math.random() * 255);
  //blue 0-255
  var B = Math.floor(Math.random() * 255);

  return "rgb(" + R + ", " + G + ", " + B + ")";
}
