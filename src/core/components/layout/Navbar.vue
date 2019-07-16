<template>
  <v-card class="navbar" flat>
    <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">


      <v-btn color="teal" flat value="AddCity" @click="componentName =  'AddCity'">
        <span>AddCity</span>
      </v-btn>

      <v-btn color="teal" flat value="MyCity"  @click="componentName =  'MyCity' "> 
        <span>MyCity</span>
      </v-btn>

    </v-bottom-nav>
     <div class="headline text-xs-center pa-5">Active: {{ bottomNav }}</div>
     <component v-bind:is="componentName"></component>
  </v-card>
</template>

<script lang="ts">

import Router from 'vue-router';
import {Component, Vue, Prop} from 'vue-property-decorator';
import MyCity from './../../../features/myCity/view/my-city.vue';
import AddCity from './../../../features/addCity/view/add-city.vue';
import WeathertCity from './../../../features/weatherInCity/view/weather-in-city.vue'

@Component({
  components: {
    MyCity,
    AddCity,
    WeathertCity
  },
})

export default class Navbar extends Vue{ 
@Prop() componentName: string = 'MyCity'
}

</script>

<style lang="scss" scoped>

.navbar{
  height: 100%;
}
</style>
