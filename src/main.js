import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import '@/assets/scss/main.scss'
import router from '@/router/index.js'

const app = createApp(App)

const clickOut = app.directive('click-outside', {
   mounted(el, binding) {
      console.log(el)
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

app.use(createPinia())
   .use(router)
   .use(clickOut)
   .mount('#app')
