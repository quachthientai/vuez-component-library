import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import { clickOut } from './directives/clickOut'



import ModalPlugin from './plugins/ModalPlugin/index.js'
// import eventBus from './utils/eventBus'

import { ToastPlugin } from '@/plugins/ToastPlugin/index.js';

import '@/assets/scss/main.scss'
import router from '@/router/index.js'



export const app = createApp(App)






app.use(createPinia())
   .use(ToastPlugin)
   .use(ModalPlugin)
   // .use(eventBus)
   .use(router)
   .directive('click-outside', clickOut)
   // .use('click-outside', clickOut)
   .mount('#app')
   

