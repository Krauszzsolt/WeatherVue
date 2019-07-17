<template>
  <v-layout row>
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
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-list-tile v-else :key="item.title" avatar @click="showWeather">
              <v-list-tile-avatar>
                <img :src="item.avatar" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

export interface item {
    avatar: string;
    title: string;
}

export default class MyCity extends Vue{
  
  @Prop( {
    default: () => (

        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "This weekend?",
       
        //   avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        //   title: 'Summer ',
        
    
        // [ avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        //   title: "Oui oui"],
         }
    )
  }
  )      items!: item[];
   
}
</script>


<style lang="scss" scoped>

.my-city-img{
    width: 50px;
    height: 50px;
}
</style>
