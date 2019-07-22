<template>

    <div class = "outer">
      <Navbar class= "navbar" />
  
 </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./../components/layout/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>

.navbar{
  background-color: rgba(0,0,0,0)
}

.outer{
  width:100%;
  height: 650px;
  min-height:80%;
  border:5px 
}

</style>
