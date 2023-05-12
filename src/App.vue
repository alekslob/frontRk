<template>
  <v-app >
    <v-app-bar v-if="!$store.state.loading && $store.state.isValid" elevation="6" app>
        <v-spacer></v-spacer>
        <router-link to="/listOrders">
          <v-btn class="mx-2"
            x-large
            dark
            >
            <v-icon>mdi-view-list</v-icon>
          </v-btn></router-link>
          <router-link v-if="$store.state.isF1" to="/settings">
            <v-btn class="mx-2"
              depressed

              x-large
              dark
              ><v-icon>mdi-wrench</v-icon>
              </v-btn>
            </router-link>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="justify-center"> 
      <router-view />
    </v-main>
  
  </v-app>
</template>

<script>
// import Message from './components/Message.vue';
export default {
    name: "App",
    data: () => ({
      loading: true,
      isValid: false,
      isF1: false,
      isF2: false,
      licInfo: undefined
    }),
    
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
