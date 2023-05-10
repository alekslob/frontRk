<template>
    <div v-if="loading" class="load">
        <Loading />
    </div>
    <div v-else class="listform">
        <v-container fluid >
            <ListForm :settings="settings" />
        </v-container>
    </div>
</template>
<script>
import Loading from '../components/Loading.vue';
import ListForm from '../components/ListForm.vue';

export default{
    name:'Settings',
    data:()=>({
        loading: true,
        settings: {}
    }),
    components:{
        Loading,
        ListForm
    },
    methods:{
        get_settings(){
            this.settings.conHost = this.settings.connection.host
            this.settings.conPort = this.settings.connection.port
            this.settings.conUser = this.settings.connection.user
            this.settings.conPassword =this.settings.connection.password
        }
    },
    async mounted(){
        const response = await fetch("http://127.0.0.1:8000/config");
        const data = await response.json();
        console.log(data)
        if(data!=undefined) this.loading=false
        this.get_settings(data)
    }
}
</script>
<style>
.listform{
    max-width: 344px;
    
}
</style>