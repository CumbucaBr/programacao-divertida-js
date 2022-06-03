const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// QUADRADO
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 200);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(100, 200);
ctx.stroke();


// TRIÂNGULO
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(400, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(350, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 200);
ctx.lineTo(350, 100);
ctx.stroke();
