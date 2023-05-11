<template>
    <v-card class="text-center">
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
                Настройки логирования
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
                v-model="logs.level"
                :disabled="!isEditing"
                :rules="levelRules"
                color="grey"
                label="Уровень логирования"
            ></v-text-field>
            <v-text-field
                v-model="logs.retention_days"
                :disabled="!isEditing"
                :rules="daysRules"
                color="grey"
                label="Количество дней"
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
        levelRules: [
            v => (v && v.length <= 15) || '*.*.*.*',
        ],
        daysRules: [
            v => (v && v <= 65000) || '-----',
        ],
    }),
    methods:{
        save () {
            this.$emit('save', {log: this.logs})
            this.isEditing = !this.isEditing
            this.hasSaved = true
        },
    },
    props:{
        logs:{},
    },

}
</script>