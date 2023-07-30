import { Event, Binding, HandleDrag } from "@/directives/type"
import { DirectiveBinding } from "vue";
import { v4 as uuidv4 } from 'uuid';

const isDragEvent = (e: Event) : e is DragEvent => {
   return e.constructor.name === 'DragEvent';
}

const handleDrag: HandleDrag = (event, element) => {
   if(isDragEvent(event)) {
      event.dataTransfer.effectAllowed = 'move';
      return event.dataTransfer.setData('DragElement', (event.target as HTMLElement).id);
   }
}

export const Drag = {
   mounted(el: HTMLElement, binding?: DirectiveBinding) {

      if(binding.value) {
         el.setAttribute('data-draggable', JSON.stringify(binding.value));
      }

      if(!el.id) {
         el.setAttribute('id', uuidv4());
      }
      
      el.draggable = true;
      el.addEventListener('dragstart', (ev) => handleDrag(ev, el))
   },
   unmounted(el: HTMLElement, binding?: DirectiveBinding) {
      el.removeEventListener('dragstart', (ev) => handleDrag(ev, el))
   }
}