
export default {
    state: {
        hostRules: [
            (v) => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v) || 'блаблабла',
        ],
        portRules: [
            v => (v && v <= 65000) || '-----',
        ],
        userRules: [
            // v => (v && v.length <= 60) || '',
        ],
        passwordRules: [
            // v => (v && v.length <= 60) || '',
        ],
        levelRules: [
            v => (v && v <= 10) || '',
        ],
        daysRules: [
            v => /[0-9]+$/.test(v) || '',
        ],
        connection: {},
        log: {},
        server: {},
        listSettings: []
    },
    mutation:{
        updateConfig(state, config){
            state.connection = config.connection
            state.log = config.log
            state.server = config.local_serv
        },
    },
    action:{
        async getConfig(state){
            try{
                const response = await fetch("/config")
                if(response.status!=200){
                    const message = await response.text()
                    throw new Error(message)
                }
                const data = await response.json()
                state.commit('updateConfig', data)
            }
            catch (err) {
                state.dispatch('setMessage', err.message)
                throw err
            }
        },
        async sendConfig(state){
            try{
                const response = await fetch("/config/",{
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify(state.getters.getConfig)
                })
                if(response.status!=200) throw new Error('Responce statuse: '+response.statusText)
                state.dispatch('setMessage', 'Настойки изменены')
            }
            catch(err){
                state.dispatch('setMessage', err.message)
            }
        },
    },
    getters:{
        // getConfig(state){
        //     return {
        //         connection: state.connection,
        //         log: state.log,
        //         local_serv: state.server
        //     }
        // },
        getListSettings(state){
            state.listSettings = [
                {title: "Подключение к rk7", settings:[
                    {name:"Адрес",
                    value:state.connection.host,
                    rules:state.hostRules
                    },
                    {name:"Порт",
                    value:state.connection.port,
                    rules:state.portRules},
                    {name:"Логин",
                    value:state.connection.user,
                    rules:state.userRules},
                    {name:"Пароль",
                    value:state.connection.password,
                    rules:state.passwordRules}
                ]},
                {title: "Логирование", settings:[
                    {name:"Уровень логирования",
                    value:state.log.level,
                    rules: state.levelRules},
                    {name:"Количество дней",
                    value:state.log.retention_days,
                    rules:state.daysRules},
                ]},
                {title: "Подключение к серверу", settings:[
                    {name:"Адрес",
                    value:state.server.host,
                    rules: state.hostRules},
                    {name:"Порт",
                    value:state.server.host,
                    rules: state.portRules},
                ]}
            ]
            return state.listSettings
        }
    }
}