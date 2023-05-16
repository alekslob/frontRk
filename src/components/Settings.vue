<template>
    <v-card>
        <v-toolbar flat>
            <v-btn
                icon
                @click="view=!view"
                color="gray"
            >
                <v-icon v-if="view">mdi-chevron-up</v-icon>
                <v-icon v-else>mdi-chevron-down</v-icon>
            </v-btn>
            <v-toolbar-title class="font-weight-light">
                {{title}}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="$store.getters.getLicenseCangeConfig && view" icon @click="isEditing=!isEditing">
                <v-fade-transition leave-absolute>
                    <v-icon v-if="isEditing">mdi-close</v-icon>
                    <v-icon v-else>mdi-pencil</v-icon>
                </v-fade-transition>
            </v-btn>
            
        </v-toolbar>
        <v-card-text v-if="view">
            <InputField v-for="(item, idx) in listParams"
            :key="idx"
            :params="item"
            :isEditing="isEditing"
            />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions v-if="$store.getters.getLicenseCangeConfig && view">
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
import InputField from './InputField.vue';

export default{
    data:()=>({
        view: false,
        isEditing: false, 

    }),
    props:{
        title:{
            default: "Тест1"
        },
        listParams:{
            default: {}
        }
    },
    components:{
        InputField,
    },
    methods:{
        async save(){
            if (await this.$store.dispatch('checkConfig', this.listParams)){
                this.isEditing=!this.isEditing
                this.$store.dispatch('saveConfig')
                await this.$store.dispatch('sendConfig')
            }
        }
    }
}
</script>