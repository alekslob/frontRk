<template>
  <NoLicense v-if="!$store.state.isValid"/>
  <YesLicense v-else/>
</template>

<script>

import NoLicense from '../components/NoLicense.vue';
import YesLicense from '../components/YesLicense.vue';

export default {
    name: "Home",
    data:()=>({

    }),
    components: { 

      NoLicense,
      YesLicense
    },
    
}
</script>

<style>

</style>