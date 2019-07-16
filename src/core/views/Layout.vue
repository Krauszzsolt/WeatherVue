<template>

    <div class = "outer">
      <Navbar />
  
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


.outer{
  width:100%;
  height: 650px;
  min-height:80%;
  border:5px 
}

</style>
