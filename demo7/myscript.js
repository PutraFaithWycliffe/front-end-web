// window element
window.addEventListener('load', () => {
  resize(); // Resizes the canvas once the Windows loads
  document.addEventListener('mousedown', startPainting);
  document.addEventListener('mouseup', stopPainting);
  document.addEventListener('mousemove', sketch);
  window.addEventListener('resize', resize);
});

// declare variables
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d'); //canvas for 2d dimensional operations
let coord = { x: 0, y: 0 }; // stores the initial position of the cursor
let paint = false; // trigger drawing

// Resizes the canvas to the avaliable size of the window
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

//Updates the canvas to the available size of the window.
function getPosition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

//Start and stop drawing
function startPainting(event) {
  paint = true;
  getPosition(event);
}
function stopPainting() {
  paint = false;
}
function sketch(event) {
  if (!paint) return;
  ctx.beginPath();
  ctx.lineWidth = 5;
  // sets round shape.
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'green';
  // the cursor to start drawing moves to his coordinate
  ctx.moveTo(coord.x, coord.y);

  getPosition(event);

  ctx.lineTo(coord.x, coord.y);

  ctx.stroke();
}
