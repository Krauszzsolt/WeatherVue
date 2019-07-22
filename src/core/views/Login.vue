<template>
  <div class="home">
    <v-btn color="teal" flat @click="componentName =  'LoginFields'">
      <span>Bejelentkezés</span>
    </v-btn>
    <v-btn color="teal" flat @click="componentName =  'Register'">
      <span>Regisztráció</span>
    </v-btn>
    <component v-bind:is="componentName"  class="login"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import LoginFields from "./../components/login/LoginFields.component.vue"; // @ is an alias to /src
import Register from "./../components/register/Register.component.vue"; // @ is an alias to /src

@Component({
  components: {
    LoginFields,
    Register
  }
})
export default class Login extends Vue {
  @Prop() componentName: string = "";
}
</script>


<style lang="scss" scoped>

.home{
  width:100%;
  height: 650px;
  min-height:80%;
  border:5px 
}
.login {
  background-color:  rgba(0 ,0 ,0, 0) 
  ;
}
</style>
