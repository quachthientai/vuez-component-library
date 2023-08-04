import { Event, HandleEventDirective } from "@/directives/type";

import { DirectiveBinding, VNode } from "vue";


const isDragEvent = (e: Event) : e is DragEvent => {
   return e.constructor.name === 'DragEvent';
}

const handleDrop: HandleEventDirective = (event) => {
   if(isDragEvent(event)) {
      
      let receiveElement = document.getElementById(event.dataTransfer.getData('DragElement'));
      receiveElement.classList.remove('dragging');
      if(receiveElement.hasAttribute('data-draggable')) {
         // put logic to process data
         console.log(JSON.parse(receiveElement.getAttribute('data-draggable')));
      }

   }
}


function getDragAfterElement(container, y) : HTMLElement{
   
   const draggableElements = [...container.querySelectorAll('.draggable-item:not(.dragging)')]
   
   
   return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      
      const offset = y - box.top - box.height / 2
      
      if(offset < 0 && offset > closest.offset) {
         return {offset: offset, element: child}   
      } else {
         return closest;
      }

      
   }, {offset: Number.NEGATIVE_INFINITY}).element

   

}


function moveWithAnimation(parent : HTMLElement, draggable : HTMLElement, afterElement : HTMLElement) {
   let isTransitioning = true;

   
   const moveDirection = !afterElement || afterElement.previousElementSibling === draggable.nextElementSibling;
   const animationTarget : any = moveDirection ? 
        (afterElement ? afterElement.previousElementSibling : draggable.nextElementSibling) : draggable.previousElementSibling;

   // animation
   animationTarget.style.transform = `translateY(${moveDirection ? '-100%' : '100%'})`;
   animationTarget.style.transition = "transform .3s";
   
   // animationTarget.classList.add('disable-transition')

   animationTarget.ontransitionend = () => {
      animationTarget.style.transition = "";
      animationTarget.style.transform = "";
      parent.insertBefore(draggable, afterElement);
   };

}

const handleDragOver: HandleEventDirective = (event, element) => {
   if(isDragEvent(event)) {
      event.preventDefault()

      const afterElement = getDragAfterElement(element, event.clientY);
      const dragElement = document.querySelector('.dragging');
      // console.log(dragElement.previousElementSibling);
      
      if(afterElement == null) {
         element.appendChild(dragElement);
      }else {
         // moveWithAnimation(element, dragElement as HTMLElement, afterElement);
         element.insertBefore(dragElement, afterElement);
      }
      
   }
}

export const Drop = {
   mounted(el: HTMLElement, binding?: DirectiveBinding, vnode?: VNode ) {
      
      el.addEventListener('dragover', (ev) => handleDragOver(ev,el));
      el.addEventListener('drop', (ev) => handleDrop(ev,el))
   },
   unmounted(el: HTMLElement, binding?: DirectiveBinding) {
      el.removeEventListener('dragover', (ev) => handleDragOver(ev, el));
      
      el.removeEventListener('drop', (ev) => handleDrop(ev,el))
   }
}