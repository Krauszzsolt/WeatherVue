<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3 class="my-city-card">
      <v-card class="my-city-tile">
        <v-toolbar color="cyan" dark class="my-city-tile">
          <v-toolbar-title>Cities</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon @click="getCity">
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line class="my-city-tile">
          <div v-if="!!(cities)">
            <v-container id="scroll-target" style="max-height: 380px" class="scroll-y">
              <template v-for="(city) in cities">
                <v-list-tile v-if :key="city.name" avatar @click="showWeather(city)">
                  <v-list-tile-avatar>
                    <img src="@/assets/10d.png" />
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="city.name"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-container>
          </div>
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

@Component({
  components: {}
})
export default class MyCity extends Vue {
  public cities: List[] = [];
  public cityname: string = "";

  showWeather(city: List) {
    console.log("showweather");
    localStorage.setItem("CityID", city.id.toString());
    this.$router.push("/weather");
  }

  getCity() {
    if (!!localStorage.getItem("idList")) {
      console.log("vaan benne");
      const IDs: string[] = JSON.parse(localStorage.getItem("idList") || "");

      IDs.forEach(i => {
        Api.Cities.getCityById(i).then(resp => {
          this.cities.push(resp.data);
          console.log(this.cities);
        });
      });
    }

    Api.Cities.getCityGroupData(this.cityname, " ", " ").then(resp => {
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
