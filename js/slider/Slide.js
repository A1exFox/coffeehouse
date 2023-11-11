import { Listener } from "./Listener.js";

export class Slide {
  constructor(selector) {
    this.selector = selector;
    this.element = this.create(selector);
    this.listener = new Listener(this.element);
  }
  create(selector) {
    const element = document.createElement('div');
    element.classList.value = `slide ${selector}`;
    return element;
  }
  async transitionNext() {
    await this.listener.start('_hide');
  }
  async transitionPrev() {
    await this.listener.start('_show');
  }
}