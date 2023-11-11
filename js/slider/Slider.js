import { Slide } from "./Slide.js";
import { Timer } from "./Timer.js";

export class Slider {
  constructor(slidesData, containers) {
    this.container = containers.slider;
    // this.items = this.init(slidesData);
    // this.direction = 'next';
    // this.insertSlides();
    // this.startAnimation();
  }
  init(slidesData) {
    const items = slidesData.map(selector => [new Slide(selector), new Timer()]);
    return items;
  }
  insertSlides() {
    this.items.forEach(([slide]) => this.insertSlide('beforeend', slide));
  }
  insertSlide(position, slide) {
    this.container.insertAdjacentElement(position, slide.element);
  }

  next() {
    const timer = this.getCurrentTimer();
    const resolve = timer.getResolve();
    if (!resolve) return;
    this.direction = 'next';
    resolve();
  }
  prev() {
    const timer = this.getCurrentTimer();
    const resolve = timer.getResolve();
    if (!resolve) return;
    this.direction = 'prev';
    resolve();
  }

  async nextslide() {
    const item = this.items.shift();
    const [slide] = item;
    await slide.transitionNext();
    this.items.push(item);
    this.insertSlide('beforeend', slide);
    this.startAnimation();
  }
  async prevslide() {
    if (this.direction == 'prev') this.direction = 'next';
    const item = this.items.pop();
    const [slide] = item;
    this.items.unshift(item);
    this.insertSlide('afterbegin', slide);
    await slide.transitionPrev();
    this.startAnimation();
  }
  async startAnimation() {
    const timer = this.getCurrentTimer();
    await timer.startAnimation();
    if (this.direction == 'next') this.nextslide();
    if (this.direction == 'prev') this.prevslide();
  }
  getCurrentTimer() {
    return this.items[0][1];
  }
}