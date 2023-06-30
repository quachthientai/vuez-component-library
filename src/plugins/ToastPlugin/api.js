import Toast from '@/components/Toast/Toast.vue'

const defaultOption = {
   title: 'title',
   variant: 'toast-primary',
   text: 'text',
   position: 'top-right',
}

export const useToast = {
   show(option) {
      if(!option) {
         console.log(defaultOption)
         return
      }
      console.log(option)
   }
}
