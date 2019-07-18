<template>
  <v-layout row>
    <v-btn color="teal" flat @click="getCity">
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
          <div v-if="!!(cities)">
            <template v-for="(city, index) in cities">
              <v-subheader v-if="city.name" :key="city.name">{{ city.name }}</v-subheader>
              <v-list-tile v-else :key="city.name" avatar @click="showWeather">
                <v-list-tile-avatar>
                  <img :src="city.name" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="city.name"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </div>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Api } from "../../services/api";
import { Weather, List } from '../../models/weather.model';
import Axios from "axios";


@Component({
  components: {
  }
})
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



showWeather(){
  //doo
}


  public cities: List[] = [];
  getCity() {
  
  Api.Cities.getCityGroupData(" ", " ", " ").then(resp => {
    
    this.cities = resp.data.list;
    console.log(this.cities);
  });


  }
}
</script>


<style lang="scss" scoped>
.my-city-img {
  width: 50px;
  height: 50px;
}
</style>
