import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useI18n } from '~/i18n'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
const pinia = createPinia()
import './styles/global.css'

const app = createApp(App)
app.use(pinia) 
app.use(router)
app.use(Antd)  
app.use(useI18n)
app.mount('#app')
