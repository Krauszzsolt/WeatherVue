<template>
  <div>
    <div>Yo Yo Weather-City</div>

    <v-btn color="teal" flat value="AddCity" @click="get">
      <span>YeeYoo</span>
    </v-btn>

    <v-container :key="KEY" fluid grid-list-md>
      <template>
        <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
          <v-toolbar-title v-if="!!(city)" >{{city.name}}</v-toolbar-title>
        </v-toolbar>
      </template>
      <template >
        <div class = "tables">
        <v-flex xs12 sm6 md4 lg3 v-if="!!(city)">
          <v-card>
            <v-card-title class="subheading font-weight-bold">Alapadatok</v-card-title>

            <v-divider></v-divider>

            <v-list dense>

              <v-list-tile>
                <v-list-tile-content>Hőmérsékelet :</v-list-tile-content>
                <v-list-tile-content class="align-end">{{city.main.temp}}</v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Hőmérsékelet-minimum :</v-list-tile-content>
                <v-list-tile-content class="align-end">{{city.main.temp_min}}</v-list-tile-content>
              </v-list-tile>

                <v-list-tile>
                <v-list-tile-content>Hőmérsékelet-maximum :</v-list-tile-content>
                <v-list-tile-content class="align-end">{{city.main.temp_max}}</v-list-tile-content>
              </v-list-tile>
                <v-list-tile>
                <v-list-tile-content>Nyomás :</v-list-tile-content>
                <v-list-tile-content class="align-end">{{city.main.pressure}}</v-list-tile-content>
              </v-list-tile>

                <v-list-tile>
                <v-list-tile-content>Páratartalom :</v-list-tile-content>
                <v-list-tile-content class="align-end">{{city.main.humidity}}</v-list-tile-content>
              </v-list-tile>
            </v-list>
            
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-if="!!(city)">
          <v-card>
            <v-card-title class="subheading font-weight-bold">Koordinatak</v-card-title>

            <v-divider></v-divider>

            <v-list dense>

              <v-list-tile>
                <v-list-tile-content>Hosszúsági:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{city.coord.lon}}</v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Széllességi:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{city.coord.lat}}</v-list-tile-content>
              </v-list-tile>
            </v-list>
            
          </v-card>
        </v-flex>
        </div>
      </template>
      <template footer>
        <v-toolbar class="mt-2" color="indigo" dark dense flat>
          <v-toolbar-title class="subheading">This is a footer</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-container>
  </div>
</template> 


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Api } from "@/features/services/api";
import { Clouds, List, Coord } from '../../models/weather.model';

@Component({
  components: {}
})
export default class Weather extends Vue {
  @Prop({ default: () => localStorage.getItem("CityID") })
  private cityID!: string;
  private KEY: number = 0;
  private city!: List;

  get() {
    console.log(this.cityID);
    Api.Cities.getCityById(this.cityID).then(resp => {
      this.city = resp.data;
      console.log(this.city);
      this.KEY--;
    });
  }
}
</script>

<style lang="scss" scoped>
.tables{
  display: flex;
  flex-wrap: nowrap;
}

</style>

