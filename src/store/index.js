import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        date: "",
        isValid: false,
        viewConfig: false,
        changeConfig: false,
        showMess: false,
        message: '',
        config: {}
    },
    mutations: {
        set_licInfo (state, licInfo){ 
            state.date = licInfo.expire_date
            state.isValid = licInfo.valid
            state.viewConfig = licInfo.features.find(e => e.id==1) != undefined
            state.changeConfig = licInfo.features.find(e => e.id==1) != undefined
        },
        set_config(state, config){
            state.config = config
        },
        set_message(state, message){
            state.message = message
            state.showMess = true
        }
    },
    actions: {
      async getLicenseInfo(ctx){
          try{
              const response = await fetch("/license");
              if (response.status!=200) {
                  const message = await response.text()
                  throw new Error(message);
              }
              const data = await response.json()
              ctx.commit('set_licInfo', data)
              ctx.commit('set_message', "норм")
          }
          catch (err) {
              ctx.commit('set_message', err.message)
              throw err
          }
      },
      async getConfig(ctx){
          try{
              ctx.state.showMess = false
              const response = await fetch("/config");
              const data = await response.json();
              if(response.status!=200) throw new Error(data.error_text)

              ctx.commit('set_config', data)
              
          }
          catch (err){
              ctx.commit('set_message', err.message)
          }
      },
      async sendConfig(ctx){
          try{
              const response = await fetch("/config/",{
                  method: "post",
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(ctx.state.config)
              })
              if(response.status!=200) throw new Error('Responce statuse: '+response.statusText)
              ctx.commit('set_message', 'Настойки изменены')
          }
          catch(err){
              ctx.commit('set_message', err.message)
          }
      }
  },
  modules: {
  }
})
