import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import { ClickOut } from './directives/click-outside'
import { Ripple } from './directives/ripple'
import { ToastPlugin } from '@/plugins/ToastPlugin/index.js'
import dragDirective from './directives/drag-drop/drag'

import '@/assets/scss/main.scss'
import router from '@/router/index.js'

const app = createApp(App)

app
  .use(createPinia())
  .use(ToastPlugin)
  .use(router)
  .directive('ripple', Ripple)
  .directive('click-outside', ClickOut)
  .directive('drag', dragDirective)
  .mount('#app')
  
