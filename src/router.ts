import Vue from 'vue'
import Router from 'vue-router'
import Login from './core/views/Login.vue'
import WeatherRoutes from './features/weatherInCity/weahter.routes';


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('./core/views/Layout.vue'),
    },
    {
      path: "/weather",
      component: () => import('./features/weatherInCity/view/weather-in-city.vue'),
      children: WeatherRoutes

    },
  ]
}
)
