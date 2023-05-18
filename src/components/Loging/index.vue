<template>
    <v-card  style="min-width: 500px;"
    >
        <v-card-title>
            Вход по логину
        </v-card-title> 
        <v-form @submit.prevent="enter">
            <v-card-text>
                <InputField v-model="user" label="Имя пользователя" placeholder="Adm"/>
                <InputField v-model="password" label="Пароль" type="password" />

            </v-card-text>
        
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="enter" type="submit">
                    Войти
                </v-btn>
            </v-card-actions>
        </v-form> 
    </v-card>
</template>

<script>
import InputField from './InputField.vue';
export default{
    data:()=>({
        user: '',
        password: ''
    }),
    components:{
        InputField
    },
    methods:{
        async enter(){
            await this.$store.dispatch('loginCheck', {user: this.user, password: this.password})
        }
    }
}
</script>