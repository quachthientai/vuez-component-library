import Toast from '@/components/Toast/Toast.vue'
import { createShadowComponent } from '../render'
import { eventBus } from '@/utils/eventBus'

const defaultOption = {
   type: 'default',
   text: "Hello I'm toast!",
   position: 'top-center',
   onClickDismiss: true,
   timeOut: 2000,
   pauseOnHover: true,
   hideCloseButton: true,
}

export const useToast = {
   show(message, option) {
      try{
         if(!message) throw new Error('Invalid arguments!')
      }catch(e) {
         console.error(e);
      }
      
      let vOption = option ? Object.assign(defaultOption, {text: message}, option) 
                           : Object.assign(defaultOption, {text: message});

      eventBus.emit('show-toast', vOption);
      return createShadowComponent(Toast, vOption, document.body, 'shadow-container');
   },
   clear() {
      eventBus.emit('dismiss');
   },
   success(message, option) {
      const typeObj = {type: 'success'}

      if(!option) return this.show(message, typeObj)
      
      let vOption = Object.assign(option, typeObj)

      return this.show(message, vOption);
   },
   warning(message, option) {
      const typeObj = {type: 'warning'}

      if(!option) return this.show(message, typeObj)

      let vOption = Object.assign(option, typeObj)

      return this.show(message, vOption);
   },
   error(message, option) {
      const typeObj = {type: 'error'}

      if(!option) return this.show(message, typeObj)

      let vOption = Object.assign(option, typeObj)

      return this.show(message, vOption);
   },
   info(message, option) {
      const typeObj = {type: 'info'}

      if(!option) return this.show(message, typeObj)

      let vOption = Object.assign(option, typeObj)

      return this.show(message, vOption);
   },
}
