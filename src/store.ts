import Vue from 'vue'
import Vuex from 'vuex'
import auth from "@/core/store/auth.store"
import logincomponent from "@/core/store/logincomponent.store"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    auth,
    logincomponent
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
