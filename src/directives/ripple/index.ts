import { HandleRippleFunc } from "../type";
import { createVNode } from "@/plugins/render";
import { VNode, isVNode, render } from "vue";

const handleRipple : HandleRippleFunc = (event, element) => {
   const container = element.getElementsByClassName("ripple")[0]
   const diameter = Math.max(element.clientWidth, element.clientHeight);
   const radius = diameter / 2;
   const ripple = element.getElementsByClassName("ripple__effect")[0];
   
   const circle = createVNode(
      'span',
      container, { 
         height: `${diameter}px`,
         width: `${diameter}px`,
         top: `${event.clientY - (element.offsetTop + radius)}px`,
         left: `${event.clientX - (element.offsetLeft + radius)}px`
      },
      null,
      'ripple__effect'
   )
   
   if (ripple) {
      ripple.remove();
   }
   
   container.appendChild(circle.el as HTMLElement);
  
   
   
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