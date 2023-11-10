import { menuinit } from "./menu.js";
import { sliderinit } from "./slider/sliderinit.js";

const header = document.querySelector('.header');

/* Menu burger */
const menuset = {
  button: document.getElementById('menubutton'),
  body: document.getElementById('menubody'),
  links: header.getElementsByTagName('a'),
}
menuinit(menuset);

/* Slider */
const sliderset = {
  dataurl: './assets/slides.json',
  container: {
    slider: document.getElementById('slider-slides-container'),
    timer: document.getElementById('slider-timers-container'),
  },
  action: {
    previous: document.getElementById('slider-prev'),
    next: document.getElementById('slider-next'),
  },
}
sliderinit(sliderset);



