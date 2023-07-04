import Toast from '@/components/Toast/Toast.vue'
import { createComponent } from '../render'
import { eventBus } from '@/utils/eventBus'

const defaultOption = {
   title: 'title',
   variant: 'toast-success',
   text: 'text',
   position: 'bottom-right',
}

export const useToast = {
   show(option) {
      const vOption = option ? option : defaultOption;
      eventBus.emit('show-toast', vOption);
      return createComponent(Toast, vOption, document.body);
   },
   clear() {
      eventBus.emit('dismiss');
   },
   success() {

   },
   warning() {

   },
   error() {

   },
   info() {

   },
}
