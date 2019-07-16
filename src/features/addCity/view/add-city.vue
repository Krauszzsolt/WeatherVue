
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
            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
            <v-list-tile v-else :key="item.title" avatar @click>
              <v-list-tile-avatar>
                <img :src="item.avatar" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import { Component, Vue, Prop } from "vue-property-decorator";

export default {
  data() {
    return {
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.my-city-card {
  min-width: 90% !important;
  margin: 40px;
}

.my-city-title {
  width: 100%;
}

.my-city-img {
  width: 100%;
  height: 50px;
}
</style>
