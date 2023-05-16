import Vue from 'vue'
import Vuex from 'vuex'
import message from './message'
import license from './license'
import config from './config'
import orders from './orders'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        message,
        license,
        config,
        orders
    }
})
