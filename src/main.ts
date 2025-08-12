import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {createPinia} from "pinia";
import {createPersistedStatePlugin} from "pinia-plugin-persistedstate-2";

const app = createApp(App)
const pinia = createPinia()
const persistedStatePlugin = createPersistedStatePlugin({
    // plugin options goes here
})
pinia.use(persistedStatePlugin)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
