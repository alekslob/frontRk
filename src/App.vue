<template>
  <v-app >
    <Loading v-if="$store.state.loading" />
    <component v-else :is="layout" />
    <Message v-if="showMes" :message="message"/>
  </v-app>
</template>

<script>
import Loading from './components/Loading.vue';
import Message from './components/Message.vue';
import Home from './layout/Home.vue'
import IsValid from './layout/IsValid.vue';

export default {
    name: "App",
    data: () => ({
      message: '',
      showMes: false
    }),
    components:{
      Loading,
      Message,
      Home,
      IsValid
    },
    computed:{
        layout() {
          return this.$store.state.isValid ? 'IsValid': 'Home'
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
          this.$store.commit('noload')
          // if(response.status!=200) throw new Error(data.error_text)
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
  align-items: center;
  justify-content: center;
  height: 100%;
}
.no-lic{
  background:gainsboro;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
