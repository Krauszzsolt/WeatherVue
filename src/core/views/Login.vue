<template>
  <div class="home">
    <v-btn color="teal" flat @click="componentName =  'LoginFields'">
      <span>Log In</span>
    </v-btn>
    <v-btn color="teal" flat @click="componentName =  'Register'">
      <span>Sign in</span>
    </v-btn>
    <component v-bind:is="componentName"></component>
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
