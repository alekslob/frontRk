<template>
    <v-toolbar flat>
            <v-btn
                icon
                @click="changeView"
                color="gray"
            >
                <v-icon v-if="view">mdi-chevron-up</v-icon>
                <v-icon v-else>mdi-chevron-down</v-icon>
            </v-btn>
            <v-toolbar-title class="font-weight-light">
                {{title}}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="$store.state.changeConfig && view" icon @click="changeEdit">
                <v-fade-transition leave-absolute>
                    <v-icon v-if="isEditing">mdi-close</v-icon>
                    <v-icon v-else>mdi-pencil</v-icon>
                </v-fade-transition>
            </v-btn>
            
        </v-toolbar>
</template>

<script>
export default{
    data:()=>({
        view: false,
        isEditing: false,
    }),
    props:{
        title:{
            default: ''
        },
    },
    methods:{
        changeView(){
            this.view=!this.view
            this.$emit('changeView')
        },
        changeEdit(){
            this.isEditing=!this.isEditing
            this.$emit('changeEdit')
        }
    }
}
</script>