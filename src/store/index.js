import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    licInfo: {},
    date: "",
    isValid: false,
    isF1: false,
    isF2: false
  },
  mutations: {
    noload (state) {
      state.loading = false
    },
    set_licInfo (state, licInfo){ 
      state.date = licInfo.expire_date
      state.isValid = licInfo.valid
      state.isF1 = licInfo.features.find(e => e.id==1) != undefined
      state.isF2 = licInfo.features.find(e => e.id==1) != undefined
    }
  },
  actions: {
  },
  modules: {
  }
})
