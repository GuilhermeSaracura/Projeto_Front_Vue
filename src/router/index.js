import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Savory from '../views/Savory.vue'
import Candies from '../views/Candies.vue'
import Juice from '../views/Juice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Savory',
    name: 'Savory',
    component: Savory
  },
  {
    path:'/Candies',
    name:'Candies',
    component: Candies
  },
  {
    path:'/Juice',
    name:'Juice',
    component: Juice
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
