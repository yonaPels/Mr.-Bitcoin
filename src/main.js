import './assets/main.css'
// import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BiCurrencyBitcoin } from "oh-vue-icons/icons"
import { OhVueIcon, addIcons } from 'oh-vue-icons'

addIcons(BiCurrencyBitcoin)

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

app.component('v-icon',OhVueIcon)