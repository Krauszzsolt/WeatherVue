import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify';
import VueMaterial from 'vue-material'
import 'vuetify/dist/vuetify.min.css';
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueMaterial)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
