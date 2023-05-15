<template>
    <v-card-actions v-if="$store.state.changeConfig && view">
            <v-spacer></v-spacer>
            <v-btn
            :disabled="!isEditing"
            @click="save"
            >
            Save
            </v-btn>
        </v-card-actions>
</template>

<script>
export default{
    props:{
        view:{
            default: false
        },
        isEditing:{
            default: false
        }
    },
    methods:{
        save(){
            console.log('save')
        }
    }
}
</script>