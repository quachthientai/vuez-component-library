import { Event, HandleDrop, HandleDragOver } from "@/directives/type";
import { DirectiveBinding } from "vue";
import { eventBus } from "@/utils/eventBus";

const isDragEvent = (e: Event) : e is DragEvent => {
   return e.constructor.name === 'DragEvent';
}

const handleDrop: HandleDrop = (event) => {
   if(isDragEvent(event)) {
      let receiveElement = document.getElementById(event.dataTransfer.getData('DragElement'));

      if(receiveElement.hasAttribute('data-draggable')) {
         // put logic to process data
         console.log(JSON.parse(receiveElement.getAttribute('data-draggable')));
      }

      return (event.currentTarget as HTMLElement).appendChild(receiveElement);
      
   }
}

const handleDragOver: HandleDragOver = (event) => {
   if(isDragEvent(event)) {
      return event.preventDefault();
   }
}

export const Drop = {
   mounted(el: HTMLElement, binding?: DirectiveBinding ) {
      el.addEventListener('dragover', (ev) => handleDragOver(ev));
      el.addEventListener('drop', (ev) => handleDrop(ev,el))
   },
   unmounted(el: HTMLElement, binding?: DirectiveBinding) {
      el.removeEventListener('dragover', (ev) => handleDragOver(ev));
      el.removeEventListener('drop', (ev) => handleDrop(ev,el))
   }
}