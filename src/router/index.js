import Vue from 'vue'
import VueRouter from 'vue-router'

// import Settings from '../views/Settings.vue'
import ListOrders from '../views/ListOrders.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  },
  {
    path: '/',
    name: 'ListOrders',
    component: ListOrders
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
