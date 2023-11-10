let slider = null;
export async function sliderinit(set) {
  try {
    const sliderData = await loaddata(set.dataurl);
    if (!sliderData) throw new Error(`Load from '${url}' is failed`);
    // slider = new Slider(sliderData, sliderContainer);
    slider = sliderData;
    set.action.previous.onclick = clickprevious;
    set.action.next.onclick = clicknext;
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
function clickprevious() {
  if (slider) console.log('previous');
}
function clicknext() {
  if (slider) console.log('next');
}