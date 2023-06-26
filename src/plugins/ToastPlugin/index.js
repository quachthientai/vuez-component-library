import Toast from '@/plugins/ToastPlugin/Toast.vue'
import { app } from '@/main'

export const ToastPlugin = {
   install(vue, options) {
      
      app.component('toast', Toast)

      app.config.globalProperties.$toast = {
         show(params) {
            ToastPlugin.emitter.emit('show', params)
         }
      }
      
      
   }
} 