import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Payroll from '../views/Payroll.vue'
import Recruting from '../views/Recruiting.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/payroll',
    name: 'Payroll',
    component: Payroll
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
