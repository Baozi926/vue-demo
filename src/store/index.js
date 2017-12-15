import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions' import * as getters from './getters'
Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    count: 0,
    mapState: {
      loaded: false
    },
    view: {}
  },
  mutations: {
    increment (state) {
      state.count++
    },
    mapLoaded (state, param) {
      param = param || {}
      state.mapState.loaded = true
      state.view = param.view
    },
    mapDestroyed (state) {
      state.mapState.loaded = false
      state.view = {}
    }

  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  // getters,
  modules: {}
})
