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

      return (event.currentTarget as HTMLElement).appendChild(receiveElement);
      
   }
}

const handleDragOver: HandleEventDirective = (event, element, binding) => {
   if(isDragEvent(event)) {
      event.preventDefault()
      // const afterElement = getDragAfterElement(element, event.clientY);
      
      const afterElement = getDragAfterElement(element, event, binding)
      const dragElement = document.querySelector('.dragging');

      // console.log(dragElement.previousElementSibling);
      if(dragElement) {
         if(afterElement == null && dragElement) {
            element.appendChild(dragElement);
         }else {
            // moveWithAnimation(element, dragElement as HTMLElement, afterElement);
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