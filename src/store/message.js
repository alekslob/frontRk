export default{
    state:{
        message: '',
        viewMessage: false,
    },

    actions:{
        setMessage(state, message){
            state.commit('updateMessage', message)
        }
    },
    mutations:{
        updateMessage(state, message){
            state.message = message
            state.viewMessage = true
        }
    },
    getters:{
        getMessage(state){
            return state.message
        },
        getViewMessage(state){
            return state.viewMessage
        }
    }
}