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
  //

  
    /*ctx.fillRect(10, 70, 1000, 1600);

    ctx.clearRect(120, 60, 800, 1600);
    ctx.strokeRect(100, 70, 50, 1600); */
    
  
  

  ctx.fillStyle = 'green';
  ctx.fillRect(200, 260, 1000, 1600);

  

  ctx.fillStyle = 'grey';
  ctx.fillRect(290, 260, 625, 1600); 
  
  

  ctx.fillStyle = 'white';
  ctx.fillRect(310, 260, 25, 1600);

  /* Deuxième ligne blanche
  310 + la largeur du gris (625) - la bordure blanche (25) */

  ctx.fillStyle = 'white';
  ctx.fillRect(870, 260, 25, 1600);


  /* 1000 (largeur du vert) / 2  -  25 (largeur du blanc)/2 */
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.setLineDash([50, 40]);
  ctx.moveTo(W/2,0);
  ctx.lineTo(W/2, 1600);
  ctx.stroke();
  // ctx.fillRect(600, 260, 25, 1600);


  
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
