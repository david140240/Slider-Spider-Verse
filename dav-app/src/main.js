import './assets/main.css'
import store from './store/store'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')