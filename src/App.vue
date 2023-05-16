<template>
  <v-app >
    <component :is="layout" />
    <Message v-if="$store.getters.getViewMessage" :message="$store.getters.getMessage" :time="$store.getters.getTime"/>
  </v-app>
</template>

<script>

import Message from './components/Message.vue';
import NoLicLayout from './layout/NoLicLayout.vue';
import MainLayout from './layout/MainLayout.vue'
import LoadLayout from './layout/LoadLayout.vue';

export default {
    name: "App",
    data: () => ({
      loading: true,
    }),
    components:{
      LoadLayout,
      Message,
      NoLicLayout,
      MainLayout
    },
    computed:{
        layout() {
          
          return this.loading ? 'LoadLayout' : this.$store.getters.getLicenseValid ? 'MainLayout': 'NoLicLayout'
        }
    },
    async mounted(){
        try{
            await this.$store.dispatch('getLicenseInfo')
            this.loading = false
        }
        catch (err){
            this.loading = true
        }
    }
    
}

</script>

<style>

</style>
