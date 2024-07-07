import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import './assets/css/index.less'
import { loadStoreLoginMassage } from '@/store/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

//注册element-plus局部组件/其他
app.use(router)
app.use(store)
app.use(globalRegister)

//获取用户的登录信息
loadStoreLoginMassage()

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
