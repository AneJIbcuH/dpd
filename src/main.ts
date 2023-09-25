import {createApp} from 'vue'
import router from './router'
import {createPinia} from 'pinia'
import App from './App.vue'
import '@/assets/scss/main.scss'

// @ts-ignore
const app = createApp(App)
	.use(createPinia())
	.use(router)
	.mount('#app')
