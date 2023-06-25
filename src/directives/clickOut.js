export const clickOut = {
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
}

