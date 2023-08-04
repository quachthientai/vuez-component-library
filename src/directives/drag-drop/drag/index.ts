import { Event, HandleEventDirective } from "@/directives/type"
import { DirectiveBinding } from "vue";
import { v4 as uuidv4 } from 'uuid';

const isDragEvent = (e: Event) : e is DragEvent => {
   return e.constructor.name === 'DragEvent';
}

const handleDragEnd: HandleEventDirective = (event, element) => {
   if(isDragEvent(event)) {
      element.classList.remove('dragging');
      
   }
}

const handleDragStart: HandleEventDirective = (event, element) => {
   if(isDragEvent(event)) {
      
      event.dataTransfer.effectAllowed = 'move';
      setTimeout(() => {
         element.classList.add('dragging');
      },0)
      
      event.dataTransfer.setData('DragElement', element.id);
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
      el.classList.add('draggable-item');

      el.addEventListener('dragstart', (ev) => handleDragStart(ev, el))
      el.addEventListener('dragend', (ev) => handleDragEnd(ev,el))
   },
   unmounted(el: HTMLElement, binding?: DirectiveBinding) {
      el.removeEventListener('dragstart', (ev) => handleDragStart(ev, el))
      el.removeEventListener('dragend', (ev) => handleDragEnd(ev,el))
   }
}