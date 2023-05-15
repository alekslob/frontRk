import Vue from 'vue'
import Vuex from 'vuex'
import message from './message'
import license from './license'
import config from './config'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        message,
        license,
        config,
    }
})


// state: {
    //     date: "",
//         isValid: false,
//         viewConfig: false,
//         changeConfig: false,
//         showMess: false,
//         message: '',
//         config: []
//     },
//     mutations: {
//         set_licInfo (state, licInfo){ 
//             state.date = licInfo.expire_date
//             state.isValid = licInfo.valid
//             state.viewConfig = licInfo.features.find(e => e.id==1) != undefined
//             state.changeConfig = licInfo.features.find(e => e.id==1) != undefined
//         },
//         set_config(ctx, connection){
            
//             ctx.config.push({title: "Подключение к rk7", settings: connection})
//             // state.config.push({title: "Логирование", settings: config.log}) 
//             // state.config.push({title: "Подключение к серверу", settings: config.local_serv}) 
//         },
//         set_message(state, message){
//             state.message = message
//             state.showMess = true
//         }
//     },
//     actions: {
//       async getLicenseInfo(ctx){
//           try{
//               const response = await fetch("/license");
//               if (response.status!=200) {
//                   const message = await response.text()
//                   throw new Error(message);
//               }
//               const data = await response.json()
//               ctx.commit('set_licInfo', data)
//               ctx.commit('set_message', "норм")
//           }
//           catch (err) {
//               ctx.commit('set_message', err.message)
//               throw err
//           }
//       },
//       async getConfig(ctx){
//         try{
//             const response = await fetch("/config")
//             if(response.status!=200){
//                 const message = await response.text()
//                 throw new Error(message)
//             }
//             const data = await response.json()
//             console.log("тест: ", settings)
//             ctx.commit('set_config', settings.dispatch('settingsConnection', data.connection))
//         }
//         catch(err){
//             ctx.commit('set_message', err.message)
//         }
//       },
//       async sendConfig(ctx){
//           try{
//               const response = await fetch("/config/",{
//                   method: "post",
//                   headers: {
//                       'Accept': 'application/json',
//                       'Content-Type': 'application/json'
//                   },
//                   body: JSON.stringify(ctx.state.config)
//               })
//               if(response.status!=200) throw new Error('Responce statuse: '+response.statusText)
//               ctx.commit('set_message', 'Настойки изменены')
//           }
//           catch(err){
//               ctx.commit('set_message', err.message)
//           }
//       }
//   },
