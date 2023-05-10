<template>
  <div class="load">
    <Loading v-if="$store.state.loading"/>
    <div v-else>
      <NoLicense v-if="!$store.state.isValid"/>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import NoLicense from '../components/NoLicense.vue';
export default {
    name: "Home",
    components: { 
      Loading,
      NoLicense
    }
}
</script>

<style>

</style>