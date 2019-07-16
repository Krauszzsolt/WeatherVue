<template>
  <div class="home">
   <Navbar /> 
    <img alt="Vue logo" src="../../assets/logo.png">
    <div>Hey YoYo</div>
     
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';;
import Navbar from './../components/layout/Navbar.vue'

@Component({
  components: {
    Navbar,
  },
})
export default class Layout extends Vue{ }
</script>
