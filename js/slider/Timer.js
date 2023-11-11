import { Listener } from "./Listener.js";

export class Timer {
  static anchor = null;
  constructor() {
    this.element = this.init();
    this.insertElement();
    this.listener = new Listener(this.element);
  }
  init() {
    const element = document.createElement('div');
    element.classList.value = 'slider__timer';
    return element;
  }
  insertElement() {
    Timer.anchor.insertAdjacentElement('beforeend', this.element);
  }
  async startAnimation() {
    await this.listener.start('_progress');
  }
  getResolve() {
    return this.listener.getResolve();
  }
}