<template>
  <v-layout row>
    <v-btn color="teal" flat value="MyCity" @click="getCity">
      <span>GetThisCity</span>
    </v-btn>

    <v-flex xs12 sm6 offset-sm3 class="my-city-card">
      <v-card class="my-city-tile">
        <v-toolbar color="cyan" dark class="my-city-tile">
          <v-toolbar-title>Cities</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-flex xs12 sm6 md3>
            <v-text-field placeholder="Search"></v-text-field>
          </v-flex>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line class="my-city-tile">
          <!-- <div v-if="!!(cities)">
            <template v-for="(cities, index) in items">
              <v-subheader v-if="cities.name" :key="cities.name">{{ item.name }}</v-subheader>
              <v-list-tile v-else :key="cities.name" avatar @click="showWeather">
                <v-list-tile-avatar>
                  <img :src="item.avatar" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </div> -->
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Api } from "../../services/api";
import { Weather, List } from "../../models/weather.model";
import Axios from "axios";
export interface item {
  avatar: string;
  title: string;
}

export default class MyCity extends Vue {
  // @Prop( {
  //     default: () => (

  //         {
  //           avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  //           title: "This weekend?",

  //         //   avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  //         //   title: 'Summer ',

  //         // [ avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  //         //   title: "Oui oui"],
  //          }
  //     )
  //   }
  //   )      items!: item[];

    // Api.Cities.getCitiesData("london").then(resp => {
    //   console.log(resp);
    // });
    // Api.Cities.getCityGroupData(" ", " ", " ").then(resp => {
    //   console.log(resp);
    //   this.cities = resp.data;
    // });

  private cities: any;
  getCity() {

    Axios.get("http://api.openweathermap.org/data/2.5/find?q=london&cnt=10&APPID=57e71e29e268016d12932485490524a7").then(
        resp => {
            console.log(resp);
        this.cities = resp.data;
        }
    )
  }

}
</script>


<style lang="scss" scoped>
.my-city-img {
  width: 50px;
  height: 50px;
}
</style>
