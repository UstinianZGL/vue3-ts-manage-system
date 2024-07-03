import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import './service/axios_demo'

const app = createApp(App)

//注册element-plus局部组件/其他
app.use(router)
app.use(store)
app.use(globalRegister)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
