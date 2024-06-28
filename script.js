var num = 6;
var colors = [];
var pickedColor;
var span = document.querySelector("#rgbspan");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var btn = document.querySelector("#btn");
var modeBtn = document.querySelectorAll(".mode");

init();
function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("Selected");
      this.classList.add("selected");
      console.log(this.textContent === "Easy" ? num = 3 : num = 6);
      reset();
    });
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;//background color name

      if (clickedColor === pickedColor) {
        message.textContent = "Correct !!!"
        h1.style.backgroundColor = pickedColor;
        changeColor(clickedColor);
        btn.textContent = "Play Again?";
      }
      else {
        this.style.backgroundColor = "black";
        message.textContent = "Try Again";
      }
    })
  }
}

function reset() {
  colors = generateColor(num);
  pickedColor = pickColor();
  span.textContent = pickedColor;
  message.textContent = " ";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
  btn.textContent = "NEW COLOR";
  h1.style.backgroundColor = "rgb(16, 114, 251)";
}

btn.addEventListener("click", function () {
  reset();
})

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var col = Math.floor(Math.random() * colors.length);
  return colors[col];
}

function generateColor(nums) {
  var arr = [];
  for (var i = 0; i < nums; i++) {
    arr.push(colorCreater());
  }
  return arr;
}

function colorCreater() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}
