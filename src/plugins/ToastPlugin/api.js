import Toast from '@/components/Toast/Toast.vue'
import { createShadowComponent } from '../render'
import { eventBus } from '@/utils/eventBus'

const defaultOption = {
   variant: 'toast-default',
   text: "Hello I'm toast!",
   position: 'top-center',
   onClickDismiss: true,
   timeOut: 2000,
   pauseOnHover: true,
   hideCloseButton: true,
}

export const useToast = {
   show(message, option) {
      let vOption;

      try{
         if(!message) throw new Error('Invalid arguments!')
      }catch(e) {
         console.error(e);
      }
      
      vOption = option ? Object.assign(defaultOption, {text: message}, option) : Object.assign(defaultOption, {text: message});
      
      eventBus.emit('show-toast', vOption);
      return createShadowComponent(Toast, vOption, document.body, 'shadow-container');
   },
   clear() {
      eventBus.emit('dismiss');
   },
   success(message, option) {
      if(!option) return this.show(message, {variant: 'toast-success'})

      Object.defineProperty(option, "variant", {
         value: 'toast-success',
         writable: false,
      })
      
      return this.show(message, option);
   },
   warning(message, option) {
      if(!option) return this.show(message, {variant: 'toast-warning'})

      Object.defineProperty(option, "variant", {
         value: 'toast-warning',
         writable: false,
      })
      
      return this.show(message, option);
   },
   error(message, option) {
      if(!option) return this.show(message, {variant: 'toast-error'})

      Object.defineProperty(option, "variant", {
         value: 'toast-error',
         writable: false,
      })
      
      return this.show(message, option);
   },
   info(message, option) {
      if(!option) return this.show(message, {variant: 'toast-info'})

      Object.defineProperty(option, "variant", {
         value: 'toast-info',
         writable: false,
      })
      
      return this.show(message, option);
   },
}
