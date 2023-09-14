import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import { ClickOut } from './directives/click-outside'
import { Ripple } from './directives/ripple'
import { ToastPlugin } from '@/plugins/ToastPlugin/index.js'
import { Drag } from './directives/drag-drop/drag/index'
import { Drop } from './directives/drag-drop/drop/index'
import { InputValidate } from './directives/validate/validate'

import '@/assets/scss/main.scss'
import router from '@/router/index.js'


const app = createApp(App)

app
  .use(createPinia())
  .use(ToastPlugin)
  .use(router)
  .directive('ripple', Ripple)
  .directive('click-outside', ClickOut)
  .directive('drag', Drag)
  .directive('drop', Drop)
  .directive('validate',InputValidate)
  .mount('#app')
