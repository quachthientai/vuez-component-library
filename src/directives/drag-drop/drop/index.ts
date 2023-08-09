import { Event, HandleEventDirective } from "@/directives/type";
import { eventBus } from "@/utils/eventBus";
import { DirectiveBinding, VNode, callWithAsyncErrorHandling } from "vue";

const isDragEvent = (e: Event) : e is DragEvent => {
   return e.constructor.name === 'DragEvent';
}

const handleDrop: HandleEventDirective = (event) => {
   if(isDragEvent(event)) {
      
      let receiveElement = document.getElementById(event.dataTransfer.getData('DragElement'));

      if(receiveElement) {
         receiveElement.classList.remove('dragging');

         if(receiveElement.hasAttribute('data-draggable')) {
            // put logic to process data
            console.log(JSON.parse(receiveElement.getAttribute('data-draggable')));
            // eventBus.emit('onDragOver', JSON.parse(receiveElement.getAttribute('data-draggable')));
         }
      }
   }
}


function getDragAfterElement(container, event: Event, binding: DirectiveBinding ) : HTMLElement {
   
   const draggableElements = [...container.querySelectorAll('.draggable-item:not(.dragging)')]
   
   
   return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      
      const offset = binding.arg == 'horizontal' ? event.clientX - box.left - box.width / 2 : event.clientY - box.top - box.height / 2
      
      if(offset < 0 && offset > closest.offset) {
         return {offset: offset, element: child}   
      } else {
         return closest;
      }

   }, {offset: Number.NEGATIVE_INFINITY}).element
}

const handleDragOver: HandleEventDirective = (event, element, binding) => {
   if(isDragEvent(event)) {
      
      event.preventDefault()
      
      const afterElement = getDragAfterElement(element, event, binding)
      const dragElement = document.querySelector('.dragging');

      if(dragElement) {
         if(afterElement == null && dragElement) {
            element.appendChild(dragElement);
         }else {
            element.insertBefore(dragElement, afterElement);
         }
      }
      
      
   }
}

export const Drop = {
   beforeMount(el: HTMLElement, binding?: DirectiveBinding, vnode?: VNode) {
      if(!binding.arg || !(binding.arg == 'horizontal' || binding.arg == 'vertical')) {
         throw new Error('Directive argument is not valid!')
      }
   },

   mounted(el: HTMLElement, binding?: DirectiveBinding, vnode?: VNode ) {
      el.addEventListener('dragover', (ev) => handleDragOver(ev,el,binding));
      el.addEventListener('drop', (ev) => handleDrop(ev,el))
   },
   unmounted(el: HTMLElement, binding?: DirectiveBinding) {
      el.removeEventListener('dragover', (ev) => handleDragOver(ev, el, binding));
      el.removeEventListener('drop', (ev) => handleDrop(ev,el))
   }
}