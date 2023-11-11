let menuset = null;
export function init(set) {
  menuset = set;
}

export function tooglemenu() {
  if (ismenuopen()) closemenu();
  else openmenu();
}
function ismenuopen() {
  return menuset.button.classList.contains('_active');
}
export function closemenu() {
  if (!ismenuopen()) return;
  menuset.button.classList.remove('_active');
  menuset.body.classList.remove('_active');
  document.body.classList.remove('_lock');
}
function openmenu() {
  if (ismenuopen()) return;
  menuset.button.classList.add('_active');
  menuset.body.classList.add('_active');
  document.body.classList.add('_lock');
}