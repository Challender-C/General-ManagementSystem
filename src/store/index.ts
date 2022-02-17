import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'

import type { IRootState, IStoreType } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'test',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function userStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
