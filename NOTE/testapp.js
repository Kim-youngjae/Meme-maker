const canvas = document.querySelector("canvas"); //js에서 접근하기 위해 querySelector()사용
const ctx = canvas.getContext("2d"); //2d로 그릴 수 있는 권한을 얻는 key같은 존재

canvas.width = 500; // canvas 속성을 정의
canvas.height = 500;

// ctx.fillRect(0, 0, 50, 50); // 컨택스트의 좌표는 생성한 canvas 즉, key(context)를 얻은 canvas를 기준으로 좌표를 가진다.

// Filled triangle
ctx.beginPath();
ctx.moveTo(25, 25);
ctx.lineTo(105, 25);
ctx.lineTo(25, 105);
ctx.fill();

// Stroked triangle
ctx.beginPath();
ctx.moveTo(125, 125);
ctx.lineTo(125, 45);
ctx.lineTo(45, 125);
ctx.closePath();
ctx.stroke();
