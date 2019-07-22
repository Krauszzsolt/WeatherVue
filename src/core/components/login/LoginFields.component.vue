<template>
  <div id="app">
    <v-app class="login-layout" id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Felhasználónév</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <v-icon large></v-icon>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="datas.userName" name="Felhasználónév" label="Felhasználónév" type="text"></v-text-field>
                    <v-text-field
                      v-model="datas.password"
                      name="Jelszó"
                      label="Jelszó"
                      id="password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login">Bejelentkezés</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { loginModel } from "../../models/login.model";
import router from "../../../router";

@Component
export default class LoginFields extends Vue {
  @Prop({
    default: () => ({
      userName: "",
      password: ""
    })
  })
  private datas!: loginModel;

  login() {
    if (
      this.datas.userName === localStorage.getItem(this.datas.userName) &&
      this.datas.password === localStorage.getItem(this.datas.userName)
    ) {
      localStorage.setItem('currentUser', this.datas.userName+'IDs')
      router.push({ path: "layout" });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-layout {
  background-color: rgba(0, 0, 0, 0) !important ;
}

#app {
  // background-color:  rgba(0 ,0 ,0, 0)
}
</style>
