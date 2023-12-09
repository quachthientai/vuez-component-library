import { HandleRippleFunc } from "../type";
import { createVNode } from "@/plugins/render";

import {DirectiveBinding} from 'vue'

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
   event.stopPropagation()
      
   container.appendChild(effect.el as HTMLElement);
   
}

export const Ripple = {
   created(el: HTMLElement | null, binding: DirectiveBinding) {
      if(binding.value === false) {
         return;
      }
      createVNode('div', el, null, null, 'ripple');
   },
   mounted(el: HTMLElement | null, binding: DirectiveBinding) {
      if(binding.value === false) {
         return;
      }
      el.addEventListener('click', (event) => handleRipple(event, el));
   },
   unmounted(el: HTMLElement | null){
      el.removeEventListener('click', (event) => handleRipple(event, el));
   }
}

