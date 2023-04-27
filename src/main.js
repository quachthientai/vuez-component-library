import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/App.vue'
import './assets/tailwind.scss'


const app = createApp(App)

app.use(createPinia())


app.mount('#app')
