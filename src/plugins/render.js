import { render, h } from 'vue'

export const createComponent = (component, option, root) => {
   var container = document.createElement('div');
   container.classList.add('shadow-toast-container');
   root.appendChild(container);
   const toast = h(component,option)
   render(toast,container)
}