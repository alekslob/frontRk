import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    date: "",
    isValid: false,
    viewConfig: false,
    changeConfig: false
  },
  mutations: {
    noload (state) {
      state.loading = false
    },
    set_licInfo (state, licInfo){ 
      state.date = licInfo.expire_date
      state.isValid = licInfo.valid
      state.viewConfig = licInfo.features.find(e => e.id==1) != undefined
      state.changeConfig = licInfo.features.find(e => e.id==1) != undefined
    }
  },
  actions: {
  },
  modules: {
  }
})
