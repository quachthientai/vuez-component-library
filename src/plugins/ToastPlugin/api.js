import Toast from '@/components/Toast/Toast.vue'
import { createComponent } from '../render'

const defaultOption = {
   title: 'title',
   variant: 'toast-success',
   text: 'text',
   position: 'top-right',
}

export const useToast = {
   show(option) {
      if(!option) {
         createComponent(Toast, defaultOption, document.body)
         return
      }
      createComponent(Toast, option, document.body)
   }
}
