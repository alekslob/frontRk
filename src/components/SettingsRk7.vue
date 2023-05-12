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
            <InputField v-for="(item,idx) in listParams" :key="idx"
                :params="item" :isEditing="isEditing"/>
            
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
        host: '',
        port: '',
        user: '',
        password: '',
        hostRules: [
            (v) => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v) || 'блаблабла',
        ],
        portRules: [
            v => (v && v <= 65000) || '-----',
        ],
        userRules: [
            v => (v && v.length <= 60) || '',
        ],
        passwordRules: [
            v => (v && v.length <= 60) || '',
        ],
        listParams:[]
    }),
    components:{
        InputField
    },
    methods:{
        save () {
            this.connection.host = this.listParams[0].value
            console.log(this.listParams[0].rules[0](this.connection.host))
            // if(this.$refs.hostValid.validate() && this.$refs.portValid.validate()){
            //     this.$emit('save', {connection: this.connection})
            //     this.isEditing = !this.isEditing
            //     this.hasSaved = true
            // }
        },
        editing(){
            this.isEditing = !this.isEditing
            if (!this.isEditing){
                this.listParams[0].value = this.connection.host
            }
        }
    },
    props:{
        connection: {}
    },

    mounted(){
        this.listParams.push({
                name:'Адрес',
                value: this.connection.host,
                rules: this.hostRules,
                hint: 'Изменения вступят в силу после перезагрузки сервера'
            })
            // {
            //     name:'Имя пользователя',
            //     value: '',
            //     rules: this.userRules,
            //     isEditing: this.isEditing
            // },
            // {
            //     name:'Имя пользователя',
            //     value: '',
            //     rules: this.userRules,
            //     isEditing: this.isEditing
            // },
            // {
            //     name:'Пароль',
            //     value: '',
            //     rules: this.passwordRules,
            //     isEditing: this.isEditing
            // }

    }
}
</script>