<template>
    <div v-if="loading" class="load">
        <Loading />
    </div>
    <div v-else class="mx-auto" >
        
        <SettingsRk7 v-if="showList" :connection="connection" @save="(e)=>send_settings(e)" />
        <SettingsLogs v-if="showList" :logs="logs" @save="(e)=>send_settings(e)"/>
        <SettingsServer v-if="showList" :server="server" @save="(e)=>send_settings(e)"/>
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
    </div>
</template>
<script>
import Loading from '../components/Loading.vue';
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
        message: "блаблабла",
        showMes: false,
        showList: true
    }),
    components:{
        Loading,
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
        async send_settings(data){
            try{
                const response = await fetch("/config/",{
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

                if(response.status!=200) throw new Error('Responce statuse: '+response.statusText)
                this.message = 'Настойки изменены'
                this.showMes = true
            }
            catch (err){              
                this.message = err.message
                this.showMes = true
            }
        }

    },
    async mounted(){
        try{
            const response = await fetch("/config");
            const data = await response.json();
            this.loading=false
            if(response.status!=200) throw new Error(data.error_text)
            this.get_settings(data)
        }
        catch (err){
            this.message = err.message
            this.showList= false
            this.showMes = true
        }
        
    }
}
</script>
<style>

</style>