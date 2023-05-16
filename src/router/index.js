import Vue from 'vue'
import VueRouter from 'vue-router'

// import Settings from '../views/Settings.vue'
import ListOrders from '../views/ListOrders.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/orders'
  },
  {
    path: '/config',
    name: 'SettingsView',
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingsView.vue')
  },
  {
    path: '/orders',
    name: 'ListOrders',
    component: ListOrders,
  }
]

const router = new VueRouter({
  routes
})

export default router
