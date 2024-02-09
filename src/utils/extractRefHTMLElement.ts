import type { Ref, ComponentPublicInstance } from 'vue';
import { unref } from 'vue';

const extractRefHTMLElement = (ref: Ref<HTMLElement | ComponentPublicInstance | null>) => {
   const value = unref(ref);
   if(value) {
      if(value instanceof HTMLElement) {
         return value;
      }

      return value.$el;
   }

   return null;
}

export {
   extractRefHTMLElement,
}