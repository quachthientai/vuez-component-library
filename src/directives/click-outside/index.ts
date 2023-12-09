import { Event, HandleClickOutFunc } from "../type";

const handleClickOut : HandleClickOutFunc = (event, element, binding) => {
  if(!(element === event.target || element.contains(event.target as HTMLElement))) {
    debugger;
    binding.value(event);
  }
}


export const ClickOut = {
  mounted(el: HTMLElement, binding) {
    document.body.addEventListener('click', (ev) => handleClickOut(ev, el, binding))
  },
  unmounted(el: HTMLElement, binding) {
    document.body.removeEventListener('click', (ev) => handleClickOut(ev, el, binding))
  }
}
