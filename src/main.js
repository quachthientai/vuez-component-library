import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import { ClickOut } from './directives/click-outside'
import { Icon } from '@iconify/vue'

import { ToastPlugin } from '@/plugins/ToastPlugin/index.js'
import { Drag } from './directives/drag-drop/drag'
import { Drop } from './directives/drag-drop/drop'
import '@/assets/scss/main.scss'
import router from '@/router/index.js'

const app = createApp(App)

app.use(createPinia())
  .use(ToastPlugin)
  .use(router)
  .component('Icon', Icon)
  .directive('click-outside', ClickOut)
  .directive('drag', Drag)
  .directive('drop', Drop)
  .mount('#app')




