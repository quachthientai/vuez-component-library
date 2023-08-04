import { Event, HandleDrop, HandleDragOver } from "@/directives/type";
import { DirectiveBinding } from "vue";
import { eventBus } from "@/utils/eventBus";

const isDragEvent = (e: Event) : e is DragEvent => {
   return e.constructor.name === 'DragEvent';
}


//Will think of it later
const handleDrop: HandleDrop = (event) => {
   if(isDragEvent(event)) {
      let receiveElement = document.getElementById(event.dataTransfer.getData('DragElement'));

      if(receiveElement.hasAttribute('data-draggable')) {
         // put logic to process data
      }

      return (event.currentTarget as HTMLElement).appendChild(receiveElement);
      
   }
}

//Calculate the position of element

const getDragAfterElement = (container:HTMLElement,y:number)=>{
   
   const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
   
   return draggableElements.reduce((closest:any,child:HTMLElement)=>{
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height/2
      console.log(offset)
      if(offset < 0 && offset>closest.offset){
         return {offset:offset, element: child}
      }else{
         return closest
      }

   },{offset:Number.NEGATIVE_INFINITY}).element


}

const handleDragOver: HandleDragOver = (event) => {
   if(isDragEvent(event)) {
      event.preventDefault();
      const draggable = document.querySelector('.dragging')
      const afterElement = getDragAfterElement((event.currentTarget as HTMLElement),event.clientY)
      console.log(afterElement)
      if(afterElement == null){
         return (event.currentTarget as HTMLElement).appendChild(draggable)
      }else{
         return (event.currentTarget as HTMLElement).insertBefore(draggable, afterElement)
      }
      
      
   }
  
}

export const Drop = {
   mounted(el: HTMLElement, binding?: DirectiveBinding ) {
      el.addEventListener('dragover', (ev) => handleDragOver(ev));
     
   },
   unmounted(el: HTMLElement, binding?: DirectiveBinding) {
      el.removeEventListener('dragover', (ev) => handleDragOver(ev));
     
   }
}