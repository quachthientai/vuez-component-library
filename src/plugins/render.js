import { TransitionGroup, render, h } from 'vue'
import Toast from '@/components/Toast/Toast.vue'

export const createComponent = (component, option, root) => {
   var container = document.createElement('div');
   container.classList.add('shadow-toast-container')
   root.appendChild(container)
   const toast = h(component,option)
   render(toast,container)
}