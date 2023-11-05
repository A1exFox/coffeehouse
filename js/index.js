const burgerbutton = document.querySelector('#burgerbutton');
const menulist = document.querySelector('#menulist');

document.addEventListener('click', clickHandler);

function clickHandler(event) {
  const triggerburger = isTriggerBurger(event.target);
  if (triggerburger) {
    const isActive = burgerbutton.classList.contains('_active');
    if (!isActive && event.target == burgerbutton) {
      burgerbutton.classList.add('_active');
      menulist.classList.add('_active');
      document.body.classList.add('_lock');
      return;
    } else {
      burgerbutton.classList.remove('_active');
      menulist.classList.remove('_active');
      document.body.classList.remove('_lock');
      return;
    }
  }
}

function isTriggerBurger(target) {
  const triggers = ['.menu-item', '.header__logo-container', '.button-icon-burger']
  const isTrigger = triggers.some(item => target.closest(item));
  return isTrigger;
}