let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
 
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, W, H);

  

  ctx.fillStyle = 'grey';
  ctx.fillRect(90, 0, 825, H); 
  
  

  ctx.fillStyle = 'white';
  ctx.fillRect(110, 0, 25, H);

  /* Deuxième ligne blanche */

  ctx.fillStyle = 'white';
  ctx.fillRect(870, 0, 25, H);

  /* Traits pointillés */
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.setLineDash([50, 70]);
  ctx.moveTo(W/2,0);
  ctx.lineTo(W/2, 1600);
  ctx.lineWidth = 10;
  ctx.stroke();


  
  // Iteration 2: car drawing
  //

  // TODO

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

draw()

document.onkeydown = function (e) {
  if (!car) return;

  // TODO
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  // TODO

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
