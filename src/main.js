import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../src/components/App.vue'
import './assets/style.scss'


const app = createApp(App)

app.use(createPinia())


app.mount('#app')
