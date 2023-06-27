import Toast from '@/components/Toast/Toast.vue'
import { eventBus } from '@/utils/eventBus'



export const ToastPlugin = {
   install(app, options) {
      
      
      
      app.component('toast', Toast) 

      //expose 
      app.config.globalProperties.$toast = {
         show(params) {
            eventBus.emit('show', params)
         }
      }
      
      
   }
} 