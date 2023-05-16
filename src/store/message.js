export default{
    state:{
        message: '',
        viewMessage: false,
        time: 2000
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
            setTimeout(()=>{state.viewMessage = false}, state.time)
        },
        
    },
    getters:{
        getMessage(state){
            return state.message
        },
        getViewMessage(state){
            return state.viewMessage
        },
        getTime(state){
            return state.time
        }
    }
}