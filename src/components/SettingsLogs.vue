<template>
    <v-card class="mx-auto ma-2" min-width="500px">
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
                Логирование
            </v-toolbar-title>
            <v-spacer></v-spacer>
  
            <v-btn v-if="$store.state.isF2 && show" icon @click="editing">
                <v-fade-transition leave-absolute>
                    <v-icon v-if="isEditing">mdi-close</v-icon>
                    <v-icon v-else>mdi-pencil</v-icon>
                </v-fade-transition>
            </v-btn>
        </v-toolbar>

        <v-card-text v-if="show">
            <v-text-field ref="levelValid"
                v-model="logs.level"
                :disabled="!isEditing"
                :rules="levelRules"
                color="grey"
                label="Уровень логирования"
            ></v-text-field>
            <v-text-field ref="daysValid"
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
        level:'',
        days: '',
        levelRules: [
            v => (v && v <= 10) || '',
        ],
        daysRules: [
            v => /[0-9]+$/.test(v) || '',
        ],
    }),
    methods:{
        save () {
            if(this.$refs.levelValid.validate() && this.$refs.daysValid.validate()){
                this.$emit('save', {log: this.logs})
                this.isEditing = !this.isEditing
                this.hasSaved = true
            }
            
        },
        editing(){
            this.isEditing = !this.isEditing
            if(!this.isEditing){
                this.logs.level = this.level,
                this.logs.retention_days = this.days 
            }
        }
    },
    props:{
        logs:{},
    },
    mounted(){
        this.level = this.logs.level,
        this.days = this.logs.retention_days
    }
}
</script>