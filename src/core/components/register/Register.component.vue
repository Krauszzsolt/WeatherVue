<template>
  <div id="app">
    <v-app class="register-layout" id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Regisztráció</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <v-icon large></v-icon>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="datas.userName"
                      name="rlogin"
                      label="Felhasználónév"
                      type="text"
                    ></v-text-field>
                    <v-text-field v-model="datas.email" name="re-mail" label="e-mail" type="text"></v-text-field>
                    <v-text-field
                      v-model="datas.confirmed"
                      name="rpassword"
                      label="Jelszó"
                      id="password"
                      type="password"
                    ></v-text-field>
                    <v-text-field
                      v-model="datas.password"
                      name="rconfirm"
                      label="Jelszó mégegyszer"
                      id="confirm"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="register">Regisztárció</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
    <v-snackbar v-model="snackbar" :color="color" :bottom="true" :timeout="2000">
      {{ text }}
      <v-btn dark flat @click="snackbar = false">Bezárás</v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { registerModel } from "../../models/register.model";
import router from "../../../router";

@Component
export default class LoginFields extends Vue {
  @Prop({
    default: () => ({
      userName: "",
      password: "",
      confirmed: "",
      email: ""
    })
  })
  private datas!: registerModel;

  //@Prop() message : string ="form child";
  public snackbar: boolean = false;
  public text: string = "";
  public color: string = "";

  register() {
    if (
      !localStorage.getItem(this.datas.userName) &&
      this.datas.password === this.datas.confirmed
    ) {
      localStorage.setItem(this.datas.userName, this.datas.userName);
      localStorage.setItem(this.datas.password, this.datas.password);
      this.$parent.$parent.$forceUpdate();
      this.showSnackbar('Sikeres regisztráció', 'success')
    }
    else{
      this.showSnackbar('Sikertelen regisztráció', 'error')
    }
  }

  showSnackbar(message: string, color: string) {
    this.text = message;
    this.color = color;
    this.snackbar = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.register-layout {
  background-color: rgba(0, 0, 0, 0) !important ;
}
</style>
