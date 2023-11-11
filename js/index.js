import * as menu from "./menu.js";
import * as slider from "./slider.js";

const header = document.querySelector('.header');

/* Menu burger */
const menulinks = header.getElementsByTagName('a');
const menuset = {
  button: document.getElementById('menubutton'),
  body: document.getElementById('menubody'),
}
menu.init(menuset);
menuset.button.onclick = menu.tooglemenu;
Array.from(menulinks).forEach(link => link.onclick = menu.closemenu);

/* Slider */
const prevslide = document.getElementById('slider-prev');
const nextslide = document.getElementById('slider-next');
const sliderset = {
  dataurl: './assets/slides.json',
  container: {
    slider: document.getElementById('slider-slides-container'),
    timer: document.getElementById('slider-timers-container'),
  },
}
slider.init(sliderset);
prevslide.onclick = slider.previous;
nextslide.onclick = slider.next;
