import VueRouter, { /*createRouter, createWebHistory*/ } from "vue-router"
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/AboutView.vue'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router