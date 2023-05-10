<template>
    <v-card>
        <v-container fluid>
            <v-form >
                <v-text-field
                    v-model="conHost"
                    :rules="hostRules"
                    label="Адрес для подключения к rk7"
                    required 
                ></v-text-field>
                <v-text-field
                    v-model="conPort"
                    :rules="portRules"
                    label="Порт для подключения к rk7"
                    required 
                ></v-text-field>

            </v-form>
        </v-container>
    </v-card>
</template>

<script>
export default{
    data:()=>({
        conHost: '',
        conPort: '',
        conUser: '',
        conPassword: '',
        hostRules: [
            v => (v && v.length <= 15) || '*.*.*.*',
        ],
        portRules: [
            v => (v && v.length <= 65000) || '-----',
        ]
    }),
    props:{
        settings:{}
    },
    mounted(){
        this.conHost = this.settings.connection.host
        this.conPort = this.settings.connection.port
        this.conUser = this.settings.connection.user
        this.conPassword =this.settings.connection.password

    }
}
</script>