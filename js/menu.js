export function menuinit(set) {
  set.button.onclick = tooglemenu;
  Array.from(set.links).forEach(link => link.onclick = closemenu);

  function tooglemenu() {
    if (ismenuopen()) closemenu();
    else openmenu();
  }
  function ismenuopen() {
    return set.button.classList.contains('_active');
  }
  function closemenu() {
    if (!ismenuopen()) return;
    set.button.classList.remove('_active');
    set.body.classList.remove('_active');
    document.body.classList.remove('_lock');
  }
  function openmenu() {
    if (ismenuopen()) return;
    set.button.classList.add('_active');
    set.body.classList.add('_active');
    document.body.classList.add('_lock');
  }
}
