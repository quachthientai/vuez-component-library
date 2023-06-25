import Toast from '@/plugins/ToastPlugin/Toast.vue'
import { app } from '@/main'

export const ToastPlugin = {
   install(vue, options) {
      app.component('toast', Toast)

      
      
   }
} 