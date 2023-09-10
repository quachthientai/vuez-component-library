import { Event, HandleEventDirective } from "@/directives/type"
import { getOptions } from "./getOptions";
import { DirectiveBinding, VNode, h, render } from "vue";
import { v4 as uuidv4 } from 'uuid';

const defaultOption = getOptions
let vOption = null;
let handleTarget = null;
let cloneNode = null;

// let dx = 0, dy = 0, draggedItem = undefined;

const isDragEvent = (e: Event) : e is DragEvent => {
   return e.constructor.name === 'DragEvent';
}

const handleMouseOver: HandleEventDirective = (event, element) => {
   element.style.cursor = 'move';
}

const handleDragEnd: HandleEventDirective = (event, element) => {
   if(isDragEvent(event)) {
      if((event.target as HTMLElement).className.indexOf('handle') != -1) {
         document.body.removeChild(cloneNode)
      }
      element.classList.remove('dragging');
   }
}

const handleDragStart: HandleEventDirective = (event, element) => {
   if(isDragEvent(event)) {
      
      event.dataTransfer.effectAllowed = 'move';
      // draggedItem = event.target;
      
      if((event.target as HTMLElement).className.indexOf('handle') != -1) {

         cloneNode = element.cloneNode(true) as HTMLElement
         cloneNode.classList.add('cloneNode');

         cloneNode.style.width = `${element.offsetWidth}`;
         cloneNode.style.height = `${element.offsetHeight}`;

         document.body.appendChild(cloneNode)

         event.dataTransfer.setDragImage(cloneNode,0,0);
      }
      
      setTimeout(() => {
         element.classList.add('dragging');
      },0)
      
      event.dataTransfer.setData('DragElement', element.id);

   }
}


export const Drag = {
   beforeMount(el: HTMLElement, binding?: DirectiveBinding){
      if(binding.arg && binding.arg !== 'options') {
         throw new Error('Argument must be "options"')
      }
   },
   mounted(el: HTMLElement, binding?: DirectiveBinding, vnode?: VNode) {
      if(binding.value && binding.arg !== 'options') {
         el.setAttribute('data-draggable', JSON.stringify(binding.value));
      }

      if(!el.id) {
         el.setAttribute('id', uuidv4());
      }

      if(binding.arg === 'options') {
         vOption = Object.assign({}, defaultOption, binding.value)
         
         if(vOption.handle) {
            const v = h('span', {id: `handle-${el.id}`, class: 'handle'});
            render(v, el)
            
            handleTarget = v.el;
            
            handleTarget.draggable = true

            handleTarget.addEventListener('dragstart', (ev: Event) => handleDragStart(ev, el))
            handleTarget.addEventListener('dragend', (ev: Event) => handleDragEnd(ev,el))
            
         }
      }else {
         el.draggable = true
         el.addEventListener('mouseover', (ev) => handleMouseOver(ev, el))
         el.addEventListener('dragstart', (ev) => handleDragStart(ev, el))
         el.addEventListener('dragend', (ev) => handleDragEnd(ev,el))
      }
   
      el.classList.add('draggable-item');
   },
   unmounted(el: HTMLElement) {
      el.removeEventListener('dragstart', (ev) => handleDragStart(ev, el))
      el.removeEventListener('dragend', (ev) => handleDragEnd(ev,el))
      el.removeEventListener('mouseover', (ev) => handleMouseOver(ev, el))
      handleTarget.removeEventListener('dragstart', (ev : Event) => handleDragStart(ev, el))
      handleTarget.removeEventListener('dragend', (ev : Event) => handleDragEnd(ev,el))
   }
}