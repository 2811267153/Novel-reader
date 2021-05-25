import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: ''
  },
  mutations: {
    isShow(state, plyLode){
      state.isShow = plyLode
    }
  },
  actions: {
  },
  modules: {
  }
})
