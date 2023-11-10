export function menuinit(set) {
  set.menubutton.onclick = tooglemenu;
  Array.from(set.headerlinks).forEach(element => element.onclick = closemenu);

  function tooglemenu() {
    if (ismenuopen()) closemenu();
    else openmenu();
  }
  function ismenuopen() {
    return set.menubutton.classList.contains('_active');
  }
  function closemenu() {
    if (!ismenuopen()) return;
    set.menubutton.classList.remove('_active');
    set.menubody.classList.remove('_active');
    document.body.classList.remove('_active');
  }
  function openmenu() {
    if (ismenuopen()) return;
    set.menubutton.classList.add('_active');
    set.menubody.classList.add('_active');
    document.body.classList.add('_active');
  }
}
