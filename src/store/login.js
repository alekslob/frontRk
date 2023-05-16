export default{
    state:{
        login: false,
        user: 'adm',
        password: '1'
    },
    actions:{
        async loginCheck(state, login){
            if(login.user == state.getters.getUser &&
                login.password == state.getters.getPassword){
                await state.commit('loginIn', true)
                state.dispatch('setMessage', 'Привет')
            }   
            else{
                await state.commit('loginIn', false)
                state.dispatch('setMessage', 'Неверный логин или пароль')
            }
            
        }
    },
    mutations:{
        loginIn(state, status){
            state.login = status
        }
    },
    getters:{
        getUser(state){
            return state.user
        },
        getPassword(state){
            return state.password
        },
        getLogin(state){
            return state.login
        }
    }
}