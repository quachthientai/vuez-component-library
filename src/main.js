import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import './assets/tailwind.scss'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
