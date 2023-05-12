<template>
  <div class="load">
    <Loading v-if="$store.state.loading"/>
    <div v-else>
      <NoLicense v-if="!$store.state.isValid"/>
      <YesLicense v-else/>
    </div>
    
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import NoLicense from '../components/NoLicense.vue';
import YesLicense from '../components/YesLicense.vue';

export default {
    name: "Home",
    data:()=>({

    }),
    components: { 
      Loading,
      NoLicense,
      YesLicense
    },
    
}
</script>

<style>

</style>