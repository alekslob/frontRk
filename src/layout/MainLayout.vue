<template>
    <div style="height: 100%">
    <v-app-bar v-if="$store.getters.getLicenseViewConfig" elevation="6" app>
        <v-spacer></v-spacer>
        <router-link to="/orders">
          <v-btn class="mx-2"
            x-large
            dark
            >
            <v-icon>mdi-view-list</v-icon>
          </v-btn></router-link>
          <router-link to="/config">
            <v-btn class="mx-2"
              depressed

              x-large
              dark
              ><v-icon>mdi-wrench</v-icon>
              </v-btn>
            </router-link>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-main style="height: 100%"> 
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