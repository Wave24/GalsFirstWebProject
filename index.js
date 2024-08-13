/**@type {HTMLCanvasElement} */
let myCanvas = document.getElementById("myCanvas");

let ctx = myCanvas.getContext("2d");

let delta = 1 / 60; // seconds

let acc = 400; // pixel/seconds^2
let velocityY = 0; // pixel/seconds
let positionY = 50; // pixel
let positionX = 250;
let velocityX = 0;

function animationFrame() {


  if (positionY < 360) {
    velocityY += acc * delta;
  } else {
    velocityY *= -1;
  }

  positionY += velocityY * delta;
  positionX += velocityX * delta;


  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.beginPath();
  ctx.arc(positionX, positionY, 40, 0 * Math.PI, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();




}

function handleKeyDown(event) {
  if (event.keyCode == 39) {
    positionX += 400 * delta;
  }
}

setInterval(animationFrame, delta * 1000);

// document.addEventListener("keydown", handleKeyDown);

document.onkeydown = (event) => {
  if (event.key == "ArrowRight") {
    velocityX = 400;
  }
  else if (event.key == "ArrowLeft") {
    velocityX = -400;
  }
}

document.onkeyup = (event) => {
  if (event.key == "ArrowRight"|| event.key == "ArrowLeft") {
    velocityX = 0;
  }
}

document.addEventListener("keyup", handleKeyDown);