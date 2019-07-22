<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3 class="add-city-card">
      <v-card class="add-city-tile">
        <v-toolbar color="cyan" dark class="my-city-tile">
          <v-toolbar-title>Városok</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-flex xs12 sm6 md3>
            <v-text-field v-model="cityname" placeholder="Keresés"></v-text-field>
          </v-flex>
          <v-btn icon @click="getCity">
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line class="add-city-tile">
          <div v-if="!!(cities)">
            <v-container id="scroll-target" style="max-height: 380px" class="scroll-y">
              <template v-for="(city) in cities">
                <!-- <v-subheader v-if="city.name" :key="city.name">{{ city.name }}</v-subheader> -->
                <v-list-tile v-if :key="city.name" avatar @click="addCity(city)">
                  <v-list-tile-avatar>
                    <img src="@/assets/10d.png" />
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                   <v-list-tile-title v-html="city.name + ', '"></v-list-tile-title>
                    <v-list-tile-title v-html="'Azonosítószám: ' + city.id"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-container>
          </div>
        </v-list>
      </v-card>
      <v-snackbar v-model="snackbar" :color="color" :bottom="true" :timeout=2000>
        {{ text }}
        <v-btn dark flat @click="snackbar = false">Bezárás</v-btn>
      </v-snackbar>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Api } from "../../services/api";
import { Weather, List } from "../../models/weather.model";

@Component({
  components: {}
})
export default class MyCity extends Vue {
  public snackbar: boolean = false;
  public cities: List[] = [];
  public cityname: string = "";
  public listID: string[] = [];
  public text: string = '';
  public color: string = '';

  showSnackbar( message : string, color: string){
    this.text = message;
    this.color = color;
    this.snackbar = true;
    
  }

  addCity(city: List) {
    console.log("addCity");
    const id: string = city.id.toString();
    this.listID = [];

    if (!!(localStorage.getItem(localStorage.getItem("currentUser") || "" ))) {
      console.log("vaan benne");
     const IDs: string[] = JSON.parse(localStorage.getItem( localStorage.getItem("currentUser") || "") || "");
      IDs.forEach(i => {
        this.listID.push(i);
      });

      console.log(this.listID);
    }
    if (!this.listID.some(x => x === id)){
      this.listID.push(id);
      this.showSnackbar('Sikeres hozzáadás.','success')
     }
     else{
       this.showSnackbar('Ezt a várost már hozzáadta.','error')
     }

    localStorage.setItem(localStorage.getItem("currentUser") || "" , JSON.stringify(this.listID));
  }

  getCity() {
    Api.Cities.getCityGroupData(this.cityname, " ", " ").then(resp => {
      this.cities = resp.data.list;
      console.log(this.cities);
    });
  }
}
</script>


<style lang="scss" scoped>
.add-city-card {
    min-width: 60%;
  margin-left: 20%;
}

.add-city-title {
  width: 100%;
}
</style>
