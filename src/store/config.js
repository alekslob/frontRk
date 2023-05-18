
export default {
    state: {
        hostRules: [
            (v) => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v) || '',
        ],
        portRules: [
            v => (v && v <= 65000) || '',
        ],
        userRules: [
            v => (v && v.length <= 60) || '',
        ],
        passwordRules: [
            v => (v && v.length <= 60) || '',
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
    mutations:{
        updateConfig(state, config){
            state.connection = config.connection
            state.log = config.log
            state.server = config.local_serv
        },
        updateConnection(state, connection){
            state.connection = {
                host: connection[0].value,
                port: connection[1].value,
                user: connection[2].value,
                password: connection[3].value,
            }
        },
        updateLog(state, log){
            state.log = {
                level: log[0].value,
                retention_days: log[1].value,
            }
        },
        updateServer(state, server){
            state.server = {
                host: server[0].value,
                port: server[1].value
            }
        }
    },
    actions:{
        async saveConfig(state, id){
            switch(id) {
                case 0:
                    await state.commit('updateConnection', state.getters.getConnection)
                    break
                case 1:
                    await state.commit('updateLog', state.getters.getLog)
                    break
                case 2:
                    await state.commit('updateServer', state.getters.getServer)
                    break 
            }
            console.log(state.getters.getConfig)
        },
        checkConfig(_, params){
            for(var i =0; i<params.length; i++){
                if (params[i].rules[0](params[i].value)!=true)
                    return false
            }
            return true
        },
        async fetchConfig(state){
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
                console.log('sendConfig', state.getters.getConfig)
                const response = await fetch("/config/",{
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(state.getters.getConfig)
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
        getConnection(state){
            return state.listSettings[0].settings
        },
        getLog(state){
            return state.listSettings[1].settings
        },
        getServer(state){
            return state.listSettings[2].settings
        },
        getConfig(state){
            return {
                connection: state.connection,
                log: state.log,
                local_serv: state.server
            }
        },
        getListSettings(state){
            state.listSettings = [
                {title: "Подключение к rk7", settings:[
                    {name:"Адрес",
                    value:state.connection.host,
                    rules:state.hostRules,
                    hint: 'Настройки применятся после перезагрузки сервера'
                    },
                    {name:"Порт",
                    value:state.connection.port,
                    rules:state.portRules
                    },
                    {name:"Логин",
                    value:state.connection.user,
                    rules:state.userRules
                    },
                    {name:"Пароль",
                    value:state.connection.password,
                    rules:state.passwordRules
                    }
                ]},
                {title: "Логирование", settings:[
                    {name:"Уровень логирования",
                    value:state.log.level,
                    rules: state.levelRules
                    },
                    {name:"Количество дней",
                    value:state.log.retention_days,
                    rules:state.daysRules
                    },
                ]},
                {title: "Подключение к серверу", settings:[
                    {name:"Адрес",
                    value:state.server.host,
                    rules: state.hostRules,
                    hint: 'Настройки применятся после перезагрузки сервера'
                    },
                    {name:"Порт",
                    value:state.server.port,
                    rules: state.portRules,
                    hint: 'Настройки применятся после перезагрузки сервера'
                    },
                ]}
            ]
            return state.listSettings
        }
    }
}

