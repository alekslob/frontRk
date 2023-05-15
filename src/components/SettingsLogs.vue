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
  
            <v-btn v-if="$store.state.changeConfig && show" icon @click="editing">
                <v-fade-transition leave-absolute>
                    <v-icon v-if="isEditing">mdi-close</v-icon>
                    <v-icon v-else>mdi-pencil</v-icon>
                </v-fade-transition>
            </v-btn>
        </v-toolbar>

        <v-card-text v-if="show">
            <InputField :params="listParams.level" :isEditing="isEditing"/>
            <InputField :params="listParams.days" :isEditing="isEditing"/>
            
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
        listParams: {},
        // level:'',
        // days: '',
        levelRules: [
            v => (v && v <= 10) || '',
        ],
        daysRules: [
            v => /[0-9]+$/.test(v) || '',
        ],
    }),
    methods:{
        save () {
            if(this.listParams.level.rules[0](this.listParams.level.value) == true &&
                this.listParams.days.rules[0](this.listParams.days.value) == true){
                    this.logs.level = this.listParams.level.value
                    this.logs.retention_days = this.listParams.days.value
                    this.$emit('save', {log: this.logs})
                    this.isEditing = !this.isEditing
                    this.hasSaved = true
            }
            
        },
        editing(){
            this.isEditing = !this.isEditing
            // if(!this.isEditing){
            //     this.setParams() 
            // }
        },
        setParams(){
            this.listParams.level = {
                name: 'Уровень логирования',
                value: this.logs.level,
                rules: this.levelRules,
            }
            this.listParams.days = {
                name: 'Количество дней',
                value: this.logs.retention_days,
                rules: this.daysRules
            }
        }
    },
    props:{
        logs:{},
    },
    mounted(){
       this.setParams()
    },
    components:{
        InputField
    }
}
</script>