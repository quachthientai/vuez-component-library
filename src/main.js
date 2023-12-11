import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import { Icon } from '@iconify/vue'
import {Button} from './components/Button/Button.tsx'

import { ToastPlugin } from '@/plugins/ToastPlugin/index.js'
import { InputValidate } from './directives/validate/validate'
import { Drag } from './directives/drag-drop/drag'
import { Drop } from './directives/drag-drop/drop'
import '@/assets/scss/main.scss'
import router from '@/router/index.js'


const app = createApp(App)

app.use(createPinia())
  .use(ToastPlugin)
  .use(router)
  .component('Button', Button)
  .component('Icon', Icon)
  .directive('drag', Drag)
  .directive('drop', Drop)
  .directive('validate',InputValidate)
  .mount('#app')




