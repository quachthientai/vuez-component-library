import { extractRefHTMLElement } from '@/utils/extractRefHTMLElement';
import { ComponentInternalInstance, Ref, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

const useClickOutside = (props: {
   refElement: Ref<HTMLElement | null>,
   triggerElement: Ref<HTMLElement | null>,
   callback: (e: Event) => void 
}) => {
   const { refElement, callback, triggerElement } = props;
   
   const handleClickOutside = (ev : Event) => {
      const target = ev.target as HTMLElement;
      const trigger = extractRefHTMLElement(triggerElement);
      const element = extractRefHTMLElement(refElement);

      switch(true) {
         case !target:
         case !element:
         case element === target:
         case target === trigger:
         case element.contains(target):
         case trigger.contains(target):
            break;
         default: 
            callback(ev);
      }
      // if(!target || !element) {
      //    return;
      // }

      // if(element === target || target === trigger || trigger.contains(target)) {
      //    return;
      // }
      
      // callback();
   }

   

   onMounted(() => {
      document.addEventListener('mousedown', handleClickOutside)
   })

   onUnmounted(() => {
      document.removeEventListener('mousedown', handleClickOutside)
   })
}

export {
   useClickOutside
}