<template>
  <v-app >
    <component :is="layout" />
    <Message v-if="$store.getters.getViewMessage" :message="$store.getters.getMessage" :time="$store.getters.getTime"/>
  </v-app>
</template>

<script>

import Message from './components/Message.vue';
import NoLicLayout from './layout/NoLicLayout.vue';
import MainLayout from './layout/MainLayout.vue';
import LoginLayout from './layout/LoginLayout.vue';
import LoadLayout from './layout/LoadLayout.vue';

export default {
    name: "App",
    data: () => ({
      loading: true,
      login: false
    }),
    components:{  
      LoadLayout,
      Message,
      NoLicLayout,
      MainLayout,
      LoginLayout
    },
    computed:{
        layout() {
          
          // return this.loading ? 'LoadLayout' : !this.$store.getters.getLicenseValid ? 'NoLicLayout': this.$store.getters.getLogin ? 'MainLayout':'LoginLayout'
          return this.loading ? 'LoadLayout' : this.$store.getters.getLicenseValid ? this.$store.getters.getLogin ? 'MainLayout':'LoginLayout':'NoLicLayout'
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
