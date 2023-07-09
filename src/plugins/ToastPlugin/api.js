import Toast from '@/components/Toast/Toast.vue'
import { createShadowComponent } from '../render'
import { eventBus } from '@/utils/eventBus'

const defaultOption = {
   variant: 'toast-success',
   text: "Hello I'm toast!",
   position: 'bottom-right',
}

export const useToast = {
   show(option) {
      const vOption = option ? option : defaultOption;
      eventBus.emit('show-toast', vOption);
      return createShadowComponent(Toast, vOption, document.body);
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
