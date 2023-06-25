import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import mitt from 'mitt'
import { clickOut } from './directives/clickOut'


import { ToastPlugin } from '@/plugins/ToastPlugin/index.js';

import '@/assets/scss/main.scss'
import router from '@/router/index.js'

const emitter = mitt();
export const app = createApp(App)
app.config.globalProperties.emitter = emitter;


app.use(createPinia())
   .use(ToastPlugin)
   .use(router)
   .directive('click-outside', clickOut)
   // .use('click-outside', clickOut)
   .mount('#app')
