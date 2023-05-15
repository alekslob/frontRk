<template>
    <v-snackbar
        v-model="showMes"
        :timeout="2000"
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
        showMes: false
    }),
    props:{
        message:{
            default: ''
        }
    },
    mounted(){
        console.log('всплывающее сообщение')
        this.showMes=true
    }
}
</script>