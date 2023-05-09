<template>
  <v-app >
    <div class="main">
      <v-btn class="mx-2"
        depressed
        color="settings_btn"
        fab
        x-large
        dark
        @click="get_settings"
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
  <div>
    {{ info }}
  </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    info: ''
  }),
  methods:{
    async get_settings(){
      const response = await fetch("http://127.0.0.1:8000/config/")
      const data = await response.json()
      console.log(data);
 
    }
  }
}

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
