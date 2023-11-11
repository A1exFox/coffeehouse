import { Slider } from "./slider/Slider.js";
let slider = null;
export async function init(set) {
  try {
    const sliderData = await loaddata(set.dataurl);
    if (!sliderData) throw new Error(`Load from '${url}' is failed`);
    slider = new Slider(sliderData, set.containers);
  }
  catch (error) {
    console.error(error);
  }
}
async function loaddata(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
export function previous() {
  if (slider) slider.prev();
}
export function next() {
  if (slider) slider.next();
}