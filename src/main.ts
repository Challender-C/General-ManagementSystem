import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
import './assets/css/font.css'
import App from './App.vue'

import router from '@/router'
import store from '@/store'
import { setupStore } from '@/store'
// import './service/axios_demo'//测试axios
const app = createApp(App)

app.use(ElementPlus)
// app.use(globalRegister)
app.use(router)
app.use(store)
setupStore()

app.mount('#app')
