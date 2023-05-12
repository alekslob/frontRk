<template>
  <div class="load">
    <Loading v-if="$store.state.loading"/>
    <div v-else>
      <NoLicense v-if="!$store.state.isValid"/>
      <YesLicense v-else/>
    </div>
    <Message v-if="showMes" :message="message"/>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import NoLicense from '../components/NoLicense.vue';
import YesLicense from '../components/YesLicense.vue';
import Message from '../components/Message.vue';

export default {
    name: "Home",
    data:()=>({
      showMes: false,
      message: ''
    }),
    components: { 
      Loading,
      Message,
      NoLicense,
      YesLicense
    },
    async mounted(){
        try{
          this.showMes = false
          const response = await fetch("/license");
          const data = await response.json()
          this.$store.commit('noload')
          if(response.status!=200) throw new Error(data.error_text)
          this.$store.commit('set_licInfo', data)
        }
        catch(err){
          this.message = err.message
          this.showMes = true
        }
    }
}
</script>

<style>

</style>