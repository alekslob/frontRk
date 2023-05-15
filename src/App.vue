<template>
  <v-app >
    <component :is="layout" />
    <Message v-if="$store.getters.getViewMessage" :message="$store.getters.getMessage"/>
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
      // message: '',
      // showMes: false
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
            console.log(this.$store.getters.getLicenseValid)
            this.loading = false
        }
        catch (err){
            this.loading = true
        }
    }
    
}

</script>

<style>
.main{
  display: flex;
  justify-content: center;
}
.load{
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* height: 100%; */
}
.no-lic{
  background:gainsboro;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
