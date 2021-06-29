import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './static/base.less'
require('./mock/mock')

createApp(App).use(store).use(router).mount('#app')
