<template>
  <div>
    <div class="headline text-xs-center pa-3">
      <img class="logo" src="@/assets/Wlogo2.png" alt />
      időjárás előrejelzés
      <img class="logo" src="@/assets/Wlogo1.png" alt />
    </div>

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
          <v-toolbar-title class="subheading"></v-toolbar-title>
        </v-toolbar>
      </template>
    </v-container>
        <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">

      <v-btn color="teal" flat  to = '/layout' >
        <span>Vissza</span>
      </v-btn>


    </v-bottom-nav>
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

  created(){
    this.get()
  }

  get() {
    Api.Cities.getCityById(this.cityID).then(resp => {
      this.city = resp.data;
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

.v-card {
  background-color: rgba(white, 0.5) !important;
}
.v-list {
  background-color: rgba(white, 0.5) !important;
}
.mb-2{
   background-color: rgba(#00bcd4, 1 ) !important;
}

.mt-2{
   background-color: rgba(#00bcd4, 1 ) !important;
}

.logo {
  width: 60px;
  height: 60px;
}
.headline{
  padding: 30px;
}

</style>

