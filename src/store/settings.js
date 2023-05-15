export default new Vuex.Store({
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
        settingsConnection:[]
    },
    mutation:{
        setSettingsConnection(ctx, connection){
            ctx.settingsConnection.push({
                name:'Адрес',
                value: connection.host,
                rules: ctx.hostRules,
                hint: 'Изменения вступят в силу после перезагрузки сервера'
            })
        }
    }
})