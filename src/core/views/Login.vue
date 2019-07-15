<template>
  <div class="home">
    <LoginFields />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginFields from './../components/login/LoginFields.component.vue'; // @ is an alias to /src

@Component({
  components: {
    LoginFields,
  },
})
export default class Login extends Vue {}
</script>
