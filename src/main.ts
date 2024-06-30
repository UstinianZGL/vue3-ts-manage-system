import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'

const app = createApp(App)

//注册element-plus局部组件/其他
app.use(router)
app.use(store)
app.use(globalRegister)

app.mount('#app')
