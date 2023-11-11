import { Listener } from "./Listener.js";

export class Slide {
  constructor(slidedata) {
    this.data = slidedata;
    this.element = this.create(slidedata);
    this.listener = new Listener(this.element);
  }
  create(data) {
    const element = document.createElement('div');
    element.classList.value = `slider__item slide`;
    const html = `
    <div class="slide__body">
      <div class="slide__image-container">
        <img class="slide__image" src="${data.img}" alt="coffee">
      </div>
      <h3 class="slide__name">${data.name}</h3>
      <p class="slide__description">${data.description}</p>
      <div class="slide__price">${data.price}</div>
    </div>`;
    element.insertAdjacentHTML('afterbegin', html);
    return element;
  }
  async transitionNext() {
    await this.listener.start('_hide');
  }
  async transitionPrev() {
    await this.listener.start('_show');
  }
}