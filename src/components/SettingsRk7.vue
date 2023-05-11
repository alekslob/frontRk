<template>
    <v-card class="mx-auto">
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
  
            <v-btn v-if="$store.state.isF2 && show" icon @click="isEditing = !isEditing">
                <v-fade-transition leave-absolute>
                    <v-icon v-if="isEditing">mdi-close</v-icon>
                    <v-icon v-else>mdi-pencil</v-icon>
                </v-fade-transition>
            </v-btn>
        </v-toolbar>

        <v-card-text v-if="show">
            <v-text-field
                v-model="connection.host"
                :disabled="!isEditing"
                :rules="hostRules"
                color="grey"
                label="Адрес"
            ></v-text-field>
            <v-text-field
                v-model="connection.port"
                :disabled="!isEditing"
                :rules="portRules"
                color="grey"
                label="Порт"
                required 
            ></v-text-field>
            <v-text-field
                v-model="connection.user"
                :rules="userRules"
                :disabled="!isEditing"
                label="Имя пользователя"
                required 
            ></v-text-field>
            <v-text-field
                v-model="connection.password"
                :rules="passwordRules"
                :disabled="!isEditing"
                label="Пароль"
                required 
            ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions v-if="$store.state.isF2 && show">
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
        hostRules: [
            v => (v && v.length <= 15) || '*.*.*.*',
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
    }),
    methods:{
        save () {
            this.$emit('save', {connection: this.connection})
            this.isEditing = !this.isEditing
            this.hasSaved = true
        },
    },
    props:{
        settings:{},
        connection: {}
    },

}
</script>