export class Swiper {
  static ignoreMove = 15;
  constructor(target) {
    this.target = target;
    this.startX = null;
    this.toleft = null;
    this.toright = null;
    this.target.addEventListener('touchstart', this.touchStart.bind(this));
    this.target.addEventListener('touchend', this.touchEnd.bind(this));
  }
  touchStart(event) {
    this.startX = event.touches[0].clientX;
  }
  touchEnd(event) {
    const endX = event.changedTouches[0].clientX;
    const differentX = this.startX - endX;
    if (Math.abs(differentX) < Swiper.ignoreMove) return;
    if (differentX > 0 && this.toleft) this.toleft();
    if (differentX < 0 && this.toright) this.toright();
  }
}