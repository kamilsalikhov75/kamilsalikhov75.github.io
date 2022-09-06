let field = document.getElementById('field');
let ball = document.getElementById('ball');
let ballWidth = ball.getBoundingClientRect().width;
let ballHeight = ball.getBoundingClientRect().height;
let rect = field.getBoundingClientRect();
let borderWidth = parseInt(window.getComputedStyle(field).border.replace('px', ''));
field.onclick = function (event) {
  let x = event.clientX;
  let y = event.clientY

  if (x <= rect.x + borderWidth + ballWidth / 2) {
    x = rect.x + borderWidth + ballWidth / 2;
  }
  else if (x >= rect.width - borderWidth - ballWidth / 2 + rect.x) {
    x = rect.width - borderWidth - ballWidth / 2 + rect.x;
  }
  if (y <= rect.y + borderWidth + ballWidth / 2) {
    y = rect.y + borderWidth + ballHeight / 2;
  }
  else if (y >= rect.height - borderWidth - ballHeight / 2 + rect.y) {
    y = rect.height - borderWidth - ballHeight / 2 + rect.y;
  }

  x = x - rect.x - borderWidth - ballWidth / 2; //160
  y = y - rect.y - borderWidth - ballHeight / 2;
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
}