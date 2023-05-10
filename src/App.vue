<template>
  <v-app >
    <div v-if="!$store.state.loading">
      <div v-if="$store.state.isValid" class="main">
        <router-link to="/listOrders">
          <v-btn class="mx-2"
            depressed
            color="orders_btn"
            x-large
            dark
            >
            <v-icon>mdi-view-list</v-icon>
          </v-btn></router-link>
        <div v-if="$store.state.isF1">
          <router-link to="/settings">
            <v-btn class="mx-2"
              depressed
              color="settings_btn"
              x-large
              dark
              ><v-icon>mdi-wrench</v-icon>
              </v-btn>
            </router-link>
        </div>
      </div>
    </div>
  <router-view/>
  </v-app>
</template>

<script>
// import router from './router';


export default {
    name: "App",
    data: () => ({
      loading: true,
      isValid: false,
      isF1: false,
      isF2: false,
      licInfo: undefined
    }),
    methods: {
        async get_orders(){
            // const response = await fetch("http://127.0.0.1:8000/order_list");
            // const data = await response.json();
            // console.log(data);
        }
    },
    // components: { router }
    async mounted(){
          const response = await fetch("http://127.0.0.1:8000/license");
          const data = await response.json()
          console.log(data)
          if (data!=undefined) this.$store.commit('noload')
          this.$store.commit('set_licInfo', data)

    }
}

</script>

<style>
.main{
  background:gainsboro;
  display: flex;
  /* align-items: center;
  justify-content: center; */
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
