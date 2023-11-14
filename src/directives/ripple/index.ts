import { HandleRippleFunc } from "../type";
import { createVNode } from "@/plugins/render";

const handleRipple : HandleRippleFunc = (event, element) => {
   const container = element.getElementsByClassName("ripple")[0]
   const diameter = Math.max(element.clientWidth, element.clientHeight);
   const radius = diameter / 2;

   const effect = createVNode(
      'span',
      container, { 
         height:  `${diameter}px`,
         width:   `${diameter}px`,
         top:     `${event.clientY - (element.offsetTop + radius)}px`,
         left:    `${event.clientX - (element.offsetLeft + radius)}px`
      },
      null,
      'ripple__effect'
   )
   
   if (effect.el) {
      (effect.el).remove();
   }
   
   container.appendChild(effect.el as HTMLElement);
   event.stopImmediatePropagation()
}

export const Ripple = {
   created(el: HTMLElement | null) {
      createVNode('div', el, null, null, 'ripple');
   },
   mounted(el: HTMLElement | null) {
      el.addEventListener('click', (event) => handleRipple(event, el));
   },
   unmounted(el: HTMLElement | null){
      el.removeEventListener('click', (event) => handleRipple(event, el));
   }
}