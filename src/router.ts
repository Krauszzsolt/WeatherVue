import Vue from 'vue'
import Router from 'vue-router'
import Home from './core/views/Home.vue'
import Login from './core/views/Login.vue'
import Layout from './core/views/Layout.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './core/views/About.vue')
    }
  ]
})
