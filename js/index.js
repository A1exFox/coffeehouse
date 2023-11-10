import { menuinit } from "./menu.js";

const menubutton = document.getElementById('menubutton');
const menubody = document.getElementById('menubody')
const header = document.querySelector('.header');
const headerlinks = header.getElementsByTagName('a');
const menuset = { menubutton, menubody, headerlinks };
menuinit(menuset);