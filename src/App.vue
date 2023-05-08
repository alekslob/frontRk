<template>
  <v-app >
    <div class="main">
      <v-btn class="mx-2"
        depressed
        color="settings_btn"
        fab
        x-large
        dark
        >
          <v-icon>mdi-wrench</v-icon>
      </v-btn>
      <v-btn class="mx-2"
        depressed
        color="orders_btn"
        fab
        x-large
        dark
      >
        <v-icon>mdi-view-list</v-icon>
    </v-btn>
  </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.main{
  background:cadetblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
