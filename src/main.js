import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueApexCharts from 'vue3-apexcharts'
const app = createApp(App)
app.use(router).use(store).mount('#app')
app.use(VueApexCharts)
