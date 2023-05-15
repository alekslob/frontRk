<template>
    <div v-if="loading" class="load">
        <Loading />
    </div>
    <div v-else class="d-flex flex-column align-center " >
        
        <SettingsRk7  v-if="showList" :connection="connection" @save="(e)=>send_settings(e)" />
        <SettingsLogs v-if="showList" :logs="logs" @save="(e)=>send_settings(e)"/>
        <SettingsServer v-if="showList" :server="server" @save="(e)=>send_settings(e)"/>
        <!-- <Message v-if="showMes" :message="message"/> -->
    </div>
</template>

<script>
import Loading from '../components/Loading.vue';
// import Message from '../components/Message.vue';
import SettingsRk7 from '../components/SettingsRk7.vue';
import SettingsLogs from '../components/SettingsLogs.vue';
import SettingsServer from '../components/SettingsServer.vue';

export default{
    name:'Settings',
    data:()=>({
        loading: true,
        settings: {},
        connection: {},
        logs: {},
        server: {},
        // message: "блаблабла",
        // showMes: false,
        showList: true
    }),
    components:{
        Loading,
        // Message,
        SettingsRk7,
        SettingsLogs,
        SettingsServer,
    },
    methods:{
        get_settings(data){
            this.connection = data.connection
            this.logs = data.log
            this.server = data.local_serv
        },
        async send_settings(){
            await this.$store.dispatch('senfConfig')
            
        }

    },
    async mounted(){
        try{
            await this.$store.dispatch('getConfig')
            this.loading = false
        }
        catch (err){
            this.showList = false
        }
        
    }
}
</script>
<style>

</style>