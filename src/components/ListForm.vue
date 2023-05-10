<template>
    <v-form >
        <v-text-field
        v-model="conHost"
        :rules="hostRules"
        label="Адрес для подключения к rk7"
        required 
      ></v-text-field>

    </v-form>

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