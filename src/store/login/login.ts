import { Module } from 'vuex'
import { IRootState } from '../type'
import { ILoginState, IAccount } from './type'
import cache from '@/utils/cache'
import router from '@/router'
import {
  accountUserLoginRequest,
  requestUserInfoById,
  requestGetUserMenuByUserId
} from '@/service/login/login'
import { ca } from 'element-plus/es/locale'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu: any) {
      state.userMenu = userMenu
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log('vuex收到登录的action')

      //1. 实现登录逻辑
      const loginRes = await accountUserLoginRequest(payload)
      console.log('登录的响应：', loginRes)
      const { id, token } = loginRes.data.data
      console.log('token', token)
      //更新store存储的token的值
      commit('changeToken', token)
      //将token值缓存到后台
      cache.setCache('token', token)

      //2. 获取用户信息
      const userInfoRes = await requestUserInfoById(id)
      console.log('获取用户信息的响应：', userInfoRes)
      const userInfo = userInfoRes.data
      commit('changeUserInfo', userInfo)
      //将用户信息缓存到后台
      cache.setCache('userInfo', userInfo)

      //3.获取用户菜单信息
      const userMenuRes = await requestGetUserMenuByUserId(id)
      console.log('获取用户菜单信息的响应：', userMenuRes)
      const userMenu = userMenuRes.data
      commit('changeUserMenu', userMenu)
      //将用户菜单信息缓存到后台
      cache.setCache('userMenu', userMenu)

      //跳转到首页
      router.push('main')
    },

    loadLocalLogin({ commit }) {
      //获取用户的token
      const userToken = cache.getCache('token')
      if (userToken != 'undefined') {
        commit('changeToken', userToken)
      }
      //获取用户的menu
      const userMenu = cache.getCache('userMenu')
      if (userMenu != 'undefined') {
        commit('changeUserMenu', userMenu)
      }
      //获取用户登录信息
      const userLoginInfo = cache.getCache('userInfo')
      if (userLoginInfo != 'undefined') {
        commit('changeUserInfo', userLoginInfo)
      }
    }
  }
}

export default loginModule
