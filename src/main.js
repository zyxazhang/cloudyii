import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/reset.css'
import '@/styles/custom.css'
import { initTheme } from '@/utils/theme'

// 初始化主题
initTheme()

import App from './App.vue'
import router from './router'
import './styles/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
