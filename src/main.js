import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import { clickOut } from './directives/clickOut';
import { ToastPlugin } from '@/plugins/ToastPlugin/index.js';

import '@/assets/scss/main.scss'
import router from '@/router/index.js'



const app = createApp(App)




app.use(createPinia())
   .use(ToastPlugin)
   .use(router)
   .directive('click-outside', clickOut)
   .mount('#app')
   

