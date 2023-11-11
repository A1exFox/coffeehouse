import { Listener } from "./Listener.js";

export class Timer {
  static anchor = document.getElementById('timers');
  static selector = '_progress';
  constructor() {
    this.element = this.init();
    this.insertElement();
    this.listener = new Listener(this.element);
  }
  init() {
    const element = document.createElement('div');
    element.classList.value = 'timer';
    return element;
  }
  insertElement() {
    Timer.anchor.insertAdjacentElement('beforeend', this.element);
  }
  async startAnimation() {
    await this.listener.start(Timer.selector);
  }
  getResolve() {
    return this.listener.getResolve();
  }
}