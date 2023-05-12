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
                Подключение к серверу
            </v-toolbar-title>
            <v-spacer></v-spacer>
  
            <v-btn v-if="$store.state.changeConfig && show" icon @click="editing">
                <v-fade-transition leave-absolute>
                    <v-icon v-if="isEditing">mdi-close</v-icon>
                    <v-icon v-else>mdi-pencil</v-icon>
                </v-fade-transition>
            </v-btn>

        </v-toolbar>

        <v-card-text v-if="show">
            <v-text-field ref="hostValid"
                v-model="server.host"
                :disabled="!isEditing"
                :rules="hostRules"
                color="grey"
                label="Адрес"
                hint="Изменения вступят в силу после перезагрузки сервера"
            ></v-text-field>
            <v-text-field ref="portValid"
                v-model="server.port"
                :disabled="!isEditing"
                :rules="portRules"
                color="grey"
                label="Порт"
                hint="Изменения вступят в силу после перезагрузки сервера"
                required 
            ></v-text-field>
            
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
export default{
    data:()=>({
        show: false,
        isEditing: false,
        host: '',
        port: '',
        hostRules: [
            (v) => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v) || 'блаблабла',
        ],
        portRules: [
            v => (v && v <= 65000) || '',
        ],
    }),
    methods:{
        save () {
            if(this.$refs.hostValid.validate() && this.$refs.portValid.validate()){
                this.$emit('save', {local_serv: this.server})
                this.isEditing = !this.isEditing
                this.hasSaved = true
            }
        },
        editing(){
            this.isEditing = !this.isEditing
            if(!this.isEditing){
                this.server.host = this.host
                this.server.port = this.port
            }
        }
    },
    props:{
        server:{},
    },
    mounted(){
        this.host = this.server.host
        this.port = this.server.port
    }
}
</script>