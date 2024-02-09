import { extractRefHTMLElement } from '@/utils/extractRefHTMLElement';
import { Ref, nextTick, onMounted, onUnmounted } from 'vue';

const useClickOutside = (props: {
   refElement: Ref<HTMLElement | null>,
   callback: () => void 
}) => {
   const { refElement, callback } = props;

   const handleClickOutside = (ev : Event) => {
      const target = ev.target as HTMLElement;
      const element = extractRefHTMLElement(refElement);

      if(!target || !element) {
         return;
      }

      if(element === target || element.contains(target)) {
         return;
      }
      
      callback();
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