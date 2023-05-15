<template>
    <v-card  class="mx-auto ma-2"
    min-width="500px">
        <v-toolbar flat>
            <v-btn
                icon
                @click="show = !show"
                color="gray"
            >
                <v-icon v-if="show">mdi-chevron-up</v-icon>
                <v-icon v-else>mdi-chevron-down</v-icon>
            </v-btn> 
            <v-toolbar-title class="font-weight-light">
                Подключение к rk7
            </v-toolbar-title>
            <v-spacer></v-spacer>
  
            <v-btn v-if="$store.state.changeConfig && show" icon @click="editing">
                <v-fade-transition leave-absolute>
                    <v-icon v-if="isEditing">mdi-close</v-icon>
                    <v-icon v-else>mdi-pencil</v-icon>
                </v-fade-transition>
            </v-btn>
        </v-toolbar>

        <v-card-text  v-if="show">
            <InputField :params="listParams.host" :isEditing="isEditing"/>
            <InputField :params="listParams.port" :isEditing="isEditing"/>
            <InputField :params="listParams.user" :isEditing="isEditing"/>
            <InputField :params="listParams.password" :isEditing="isEditing"/>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions v-if="$store.state.changeConfig && show">
            <v-spacer></v-spacer>
            <v-btn
            :disabled="!isEditing"
            @click="save"
            >
            Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import InputField from './InputField.vue'

export default{
    data:()=>({
        show: false,
        isEditing: false,
        // host: '',
        // port: '',
        // user: '',
        // password: '',
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
        listParams:{}
    }),
    components:{
        InputField
    },
    methods:{
        save () {
            if(this.listParams.host.rules[0](this.listParams.host.value)==true &&
                this.listParams.port.rules[0](this.listParams.port.value)==true){
                this.connection.host = this.listParams.host.value
                this.connection.port = this.listParams.port.value
                this.connection.user = this.listParams.user.value
                this.connection.password = this.listParams.password.value
                this.$emit('save', {connection: this.connection})
                this.isEditing = !this.isEditing
                this.hasSaved = true
            }
        },
        setParams(){
            this.listParams.host = {
                name:'Адрес',
                value: this.connection.host,
                rules: this.hostRules,
                hint: 'Изменения вступят в силу после перезагрузки сервера'
            }
        this.listParams.port = {
                name:'Порт',
                value: this.connection.port,
                rules: this.portRules,
            }
        this.listParams.user = {
                name:'Имя пользователя',
                value: this.connection.user,
                rules: this.userRules,
            }
        this.listParams.password = {
                name:'Пароль',
                value: this.connection.password,
                rules: this.passwordRules,
            }
        },
        editing(){
            this.isEditing = !this.isEditing
            // if (!this.isEditing){
            //     this.setParams()
            // }
        }
    },
    props:{
        connection: {}
    },

    mounted(){
        this.setParams()
    }
}
</script>