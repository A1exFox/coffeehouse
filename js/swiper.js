export const action = {
  right: null,
  left: null,
}

const ignoremove = 15;
let startX;

export function init(target) {
  target.addEventListener('touchstart', touchstart);
  target.addEventListener('touchend', touchend);
}
function touchstart(event) {
  startX = event.touches[0].clientX;
}
function touchend(event) {
  const endX = event.changedTouches[0].clientX;
  const different = startX - endX;
  if (Math.abs(different) < ignoremove) return;
  if (different < 0 && action.left) action.left();
  if (different > 0 && action.right) action.right();
}