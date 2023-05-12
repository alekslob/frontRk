<template>
    <v-text-field 
        v-model="params.value"
        :rules="params.rules"
        :disabled="!isEditing"
        color="grey"
        :label="params.name"
        :hint="params.hint"
    ></v-text-field>
</template>

<script>
export default{
    data:()=>({

    }),
    props:{
        params:{
            default:{
                name:'',
                value: '',
                rules:[],
                hint: '',
                
            }
        },
        isEditing: {
            default: true
        }
    },
}
</script>