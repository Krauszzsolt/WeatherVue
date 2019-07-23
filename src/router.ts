import Vue from 'vue'
import Router from 'vue-router'
import Login from './core/views/Login.vue'
import WeatherRoutes from './features/weatherInCity/weahter.routes';
import auth from './core/store/auth.store'
import Vuetify from 'vuetify';

const ifNotAuthenticated  = (to: any, from: any, next : any) => {


  if (!(auth.state.status === "success")  ) {
    console.log(auth.getters.isAuthenticate)
    next()
    return
  }
  next('/layout')
}

const ifAuthenticated = (to: any, from: any, next : any) => {
  console.log(auth.getters.isAuthenticate)
  if ((auth.state.status === 'success')) {
    console.log(auth.getters.isAuthenticate)
    next()
    return
  }
  next('/')
}





Vue.use(Router)
export default new Router({
  routes: [

    {
      path: '/',
      name: 'login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('./core/views/Layout.vue'),
      beforeEnter: ifAuthenticated,
    },
    {
      path: "/weather",
      component: () => import('./features/weatherInCity/view/weather-in-city.vue'),
      children: WeatherRoutes,
      beforeEnter: ifAuthenticated,

    },
  ]
}
)
