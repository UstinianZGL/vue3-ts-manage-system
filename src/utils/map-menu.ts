import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(menus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  //step1:先拿到所有的路由
  const allRouteFiles = require.context('../router/main', true, /\.ts/)
  allRouteFiles.keys().forEach((item) => {
    const curPath = item.slice(1)
    const route = require('../router/main' + curPath)
    allRoutes.push(route.default)
  })
  function getUserRoutes(myMenus: any[]) {
    if (myMenus && myMenus.length != 0) {
      myMenus.forEach((item) => {
        if (item.type == 1) {
          getUserRoutes(item.children)
        } else {
          const curRoute = allRoutes.find((routeItem) => {
            if (routeItem.path == item.url) return routeItem
          })
          if (curRoute != null) routes.push(curRoute)
        }
      })
    }
  }
  getUserRoutes(menus)
  return routes
}
