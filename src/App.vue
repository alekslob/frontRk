<template>
  <v-app >
    <div v-if="!$store.state.loading">
      <div v-if="$store.state.isValid" class="main">
        <router-link to="/listOrders">
          <v-btn class="mx-2"
            depressed

            x-large
            dark
            >
            <v-icon>mdi-view-list</v-icon>
          </v-btn></router-link>
        <div v-if="$store.state.isF1">
          <router-link to="/settings">
            <v-btn class="mx-2"
              depressed

              x-large
              dark
              ><v-icon>mdi-wrench</v-icon>
              </v-btn>
            </router-link>
        </div>
      </div>
    </div>
  <router-view />
  </v-app>
</template>

<script>

export default {
    name: "App",
    data: () => ({
      loading: true,
      isValid: false,
      isF1: false,
      isF2: false,
      licInfo: undefined
    }),

    async mounted(){
          const response = await fetch("/license");
          const data = await response.json()
          this.$store.commit('set_licInfo', data)
          this.$store.commit('noload')
          

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
