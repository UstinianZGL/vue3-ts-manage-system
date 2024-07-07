import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import cache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: import('@/views/login/Login.vue')
  },
  {
    path: '/login',
    component: import('@/views/login/Login.vue')
  },
  {
    path: '/main',
    component: import('@/views/main/MainPage.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  const userToken = cache.getCache('token')
  console.log('导航守卫获取的token：', userToken)
  if (to.path == '/' || to.path == 'login') {
    if (userToken != '') return '/main'
  } else {
    if (userToken == '') return '/login'
  }
})

export default router
