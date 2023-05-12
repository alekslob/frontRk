<template>
    <div>
    <v-app-bar v-if="!$store.state.loading && $store.state.isF1" elevation="6" app>
        <v-spacer></v-spacer>
        <router-link to="/">
          <v-btn class="mx-2"
            x-large
            dark
            >
            <v-icon>mdi-view-list</v-icon>
          </v-btn></router-link>
          <router-link to="/settings">
            <v-btn class="mx-2"
              depressed

              x-large
              dark
              ><v-icon>mdi-wrench</v-icon>
              </v-btn>
            </router-link>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="ma-auto"> 
      <router-view />
    </v-main>
</div>
</template>

<script>
export default{
    data:()=>({

    })
}
</script>