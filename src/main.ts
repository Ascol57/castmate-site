import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            Hello: "Hello everybody",
            Welcome: "Welcome on my blog"
        },
        fr: {
            Hello: "Bonjour tout le monde",
            Welcome: "Bienvenue sur mon blog"
        }
    }
});

const eventBus = createApp({});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
