import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { IStoreType } from './type'

const store = createStore({
  state() {
    return {
      name: 'Ustinian',
      age: 24
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function loadStoreLoginMassage() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
