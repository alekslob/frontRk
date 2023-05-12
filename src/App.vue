<template>
  <v-app >
    <component :is="layout" />
    <Message v-if="showMes" :message="message"/>
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
          this.showMes = false
          const response = await fetch("/license");
          
          if(response.status!=200) {
              const mess = await response.text()
              throw new Error(mess)
          }
          const data = await response.json()
          this.loading = false
          this.$store.commit('set_licInfo', data)
        }
        catch(err){
          console.log(err)
          this.message = err.message
          this.showMes = true
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
