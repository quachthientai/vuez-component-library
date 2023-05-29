import Vue from 'vue'

export const clickOut = Vue.directive('click-outside', {
   mounted(el, binding) {
      
      el.handleClick = function(e) {
         if(!(el === e.target || el.contains(e.target))) {
            binding.value(e)
         }
      }
      document.body.addEventListener('click', el.handleClick);
   },
   unmounted(el){
      document.body.removeEventListener('click', el.handleClick)
   }
})

export default clickOut;