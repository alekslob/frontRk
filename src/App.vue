<template>
  <v-app >
    <component :is="layout" />
    <Message v-if="$store.state.showMess" :message="$store.state.message"/>
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
      message: '',
      showMes: false
    }),
    components:{
      LoadLayout,
      Message,
      NoLicLayout,
      MainLayout
    },
    computed:{
        layout() {
          return this.loading ? 'LoadLayout' : this.$store.state.isValid ? 'MainLayout': 'NoLicLayout'
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
