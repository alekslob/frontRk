<template>
    <v-snackbar
        v-model="view"
        :timeout="time"
        attach
        position="absolute"
        top
        right
    >
        {{message}}
    </v-snackbar>
</template>

<script>
export default{
    data:()=>({
        view: false,
    }),
    props:{
        message:{
            default: ''
        },
        time:{
            default: 0
        }
    },
    mounted(){
        this.view=true
    }
}
</script>