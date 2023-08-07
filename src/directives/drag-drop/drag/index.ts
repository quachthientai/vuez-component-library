import { Event, HandleEventDirective } from "@/directives/type"
import ButtonVue from "@/components/Button/Button.vue";
import { createSubComponent } from "@/plugins/render";
import { getOptions } from "./getOptions";
import { DirectiveBinding, h, render } from "vue";
import { v4 as uuidv4 } from 'uuid';

const defaultOption = getOptions
let vOption = null;

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
   beforeMount(el: HTMLElement, binding?: DirectiveBinding){
      if(binding.arg && binding.arg !== 'options') {
         throw new Error('Argument must be "options"')
      }
   },
   mounted(el: HTMLElement, binding?: DirectiveBinding) {
      
      if(binding.arg === 'options') {
         vOption = Object.assign({}, defaultOption, binding.value)
         if(vOption.handle) {
            createSubComponent(ButtonVue, {btnClass:"btn btn-icon-circle btn-plain",
            class:"mr-2",
            appendIcon:"fluent:drag-20-filled"}, el, 'handle')
         }
      }

      if(binding.value && binding.arg !== 'options') {
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
   unmounted(el: HTMLElement) {
      el.removeEventListener('dragstart', (ev) => handleDragStart(ev, el))
      el.removeEventListener('dragend', (ev) => handleDragEnd(ev,el))
   }
}