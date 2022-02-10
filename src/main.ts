import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import { globalRegister } from './global'
import myRequest from './service'
import App from './App.vue'

import router from '@/router'
import store from '@/store'
// import './service/axios_demo'//测试axios
const app = createApp(App)

app.use(ElementPlus)
// app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app')

myRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独的请求config')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独的请求res')
      return res
    }
  }
})
