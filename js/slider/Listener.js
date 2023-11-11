export class Listener {
  constructor(htmlElement) {
    this.element = htmlElement;
    this.resolve = null;
  }
  start(selector) {
    function executor(resolve) {
      this.element.classList.add(selector);
      this.resolve = resolve;
      this.element.addEventListener('animationend', this.resolve);
    }
    function result() {
      this.element.removeEventListener('animationend', this.resolve);
      this.resolve = null;
      this.element.classList.remove(selector);
    }
    return new Promise(executor.bind(this)).then(result.bind(this))
  }
  getResolve() {
    return this.resolve;
  }

}