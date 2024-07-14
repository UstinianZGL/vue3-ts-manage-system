import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { ISystemState } from './type'
import { accountSystemUserList } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  getters: {},
  mutations: {
    changeUserList(state, payload: any[]) {
      state.userList = payload
    },
    changeUserCount(state, payload: number) {
      state.userCount = payload
    }
  },
  actions: {
    //请求用户列表信息
    async getPageListUserAction({ commit }, payload: any) {
      // console.log(payload.requestUrl)
      // console.log(payload.queryData)
      const resData = await accountSystemUserList(
        payload.requestUrl,
        payload.queryData
      )
      // console.log(resData)
      commit('changeUserList', resData.data.data.list)
      commit('changeUserCount', resData.data.data.totalCount)
    }
  }
}

export default systemModule
