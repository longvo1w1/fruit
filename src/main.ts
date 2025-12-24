import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useI18n } from '~/i18n'

import './styles/global.css'

const app = createApp(App)

app.use(router)
app.use(useI18n)
app.mount('#app')
