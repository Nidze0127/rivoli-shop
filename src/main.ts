import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import './style.css'

import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'ru',
  fallbackLocale: 'ru',
  availableLocales: ['en', 'ru', 'kz'],
  messages: messages
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
