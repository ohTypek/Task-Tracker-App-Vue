import { VueRouter, createWebHistory } from "vue-router"
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router