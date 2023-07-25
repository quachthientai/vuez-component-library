import { Event } from "../type";
import { Binding } from "../type";

function handleClickOut(event: Event, element: HTMLElement, binding: Binding) : void {
  if(!(element === event.target || element.contains(event.target as HTMLElement))) {
    binding.value(event);
  }
}

export const ClickOut = {
  mounted(el: HTMLElement, binding?: Binding) {
    document.body.addEventListener('click', (ev) => handleClickOut(ev, el, binding))
  },
  unmounted(el: HTMLElement, binding?: Binding) {
    document.body.removeEventListener('click', (ev) => handleClickOut(ev, el, binding))
  }
}
