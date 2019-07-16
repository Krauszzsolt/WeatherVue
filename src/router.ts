import Vue from 'vue'
import Router from 'vue-router'
import Login from './core/views/Login.vue'


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
      component: () => import('./core/views/Layout.vue') ,
      children: [
        {
          path: "/my-city",
          component: () =>
            import(/* webpackChunkName: "tasks" */ "./features/myCity/view/my-city.vue"),
            
        },
      ]
    }
  
  ]
})
