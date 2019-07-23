<template>
  <v-card class="navbar" flat>
    <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
      <v-btn color="teal" flat  @click="componentName =  'AddCity'">
        <span>Város hozzáadása</span>
      </v-btn>

      <v-btn color="teal" flat  @click="componentName =  'MyCity' ">
        <span>Városaim</span>
      </v-btn>

      <v-btn color="teal" flat   @click="logout"  >
        <span>Kijelentkezés</span>
      </v-btn>
    </v-bottom-nav>
    <div class="headline text-xs-center pa-3">
      <img class="logo" src="@/assets/Wlogo2.png" alt />
      időjárás előrejelzés
      <img class="logo" src="@/assets/Wlogo1.png" alt />
    </div>
    <div></div>

    <component v-bind:is="componentName"></component>
  </v-card>
</template>

<script lang="ts">
import Router from "vue-router";
import { Component, Vue, Prop } from "vue-property-decorator";
import MyCity from "./../../../features/myCity/view/my-city.vue";
import AddCity from "./../../../features/addCity/view/add-city.vue";
import WeathertCity from "./../../../features/weatherInCity/view/weather-in-city.vue";

@Component({
  components: {
    MyCity,
    AddCity,
    WeathertCity
  }
})
export default class Navbar extends Vue {
  @Prop() componentName: string = "MyCity";

  logout(){
    console.log('logout');
    this.$store.dispatch("logout").then(() => {
      this.$router.push('/')
    })
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
}

.logo {
  width: 60px;
  height: 60px;
}
</style>

