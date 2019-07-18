<template>
  <div>
    <div>Yo Yo Weather-City</div>

    <v-btn color="teal" flat value="AddCity" @click="get">
      <span>YeeYoo</span>
    </v-btn>

    <v-container fluid grid-list-md>
      <v-data-iterator
        :items="city"
        content-tag="v-layout"
        hide-actions
        row
        wrap
      >
        <template v-slot:header>
          <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
            <v-toolbar-title>This is a header</v-toolbar-title>
          </v-toolbar>
        </template>
        <template >
          <v-flex xs12 sm6 md4 lg3>
            <v-card>
              <v-card-title class="subheading font-weight-bold">asd</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>Calories:</v-list-tile-content>
                  <v-list-tile-content class="align-end">asd</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Fat:</v-list-tile-content>
                  <v-list-tile-content class="align-end">asd</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Carbs:</v-list-tile-content>
                  <v-list-tile-content class="align-end">asd</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Protein:</v-list-tile-content>
                  <v-list-tile-content class="align-end">asd</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Sodium:</v-list-tile-content>
                  <v-list-tile-content class="align-end">asd</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Calcium:</v-list-tile-content>
                  <v-list-tile-content class="align-end">asd</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Iron:</v-list-tile-content>
                  <v-list-tile-content class="align-end">asd</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </template>
        <template v-slot:footer>
          <v-toolbar class="mt-2" color="indigo" dark dense flat>
            <v-toolbar-title class="subheading">This is a footer</v-toolbar-title>
          </v-toolbar>
        </template>
      </v-data-iterator>
    </v-container>
  </div>
</template> 


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Api } from "@/features/services/api";
import { Clouds, List } from "../../models/weather.model";

@Component({
  components: {}
})
export default class Weather extends Vue {
  @Prop({ default: () => localStorage.getItem("CityID") })
  private cityID!: string;

  private city!: List;
  get() {
    console.log(this.cityID);
    Api.Cities.getCityById(this.cityID).then(resp => {
      this.city = resp.data;
      console.log(this.city);
    });
  }
}
</script>
