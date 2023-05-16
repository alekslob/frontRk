<template>
    <v-container v-if="loading" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;" >
        <Loading />
    </v-container>
    <v-container v-else style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <Settings v-for="(item, idx) in $store.getters.getListSettings"
        :key="idx"
        :title="item.title"
        :listParams="item.settings"
        />
    </v-container>
</template>

<script>
import Settings from '../components/Settings.vue';
import Loading from '../components/Loading.vue';

export default{
    data:()=>({
        loading: true,
    }),
    components:{
        Settings,
        Loading
    },
    methods:{
        async send_settings(){
            await this.$store.dispatch('sendfConfig')
            
        }

    },
    async mounted(){
        try{
            await this.$store.dispatch('fetchConfig')
            this.loading = false
        }
        catch(err){
            this.loading = true
        }
        
        // console.log(this.$store.getters.getListSettings[0])
    }
}
</script>
<style>

</style>