import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import StatusPage from '../views/Status.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'log in',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'sign up',
    component: SignUp
  },
  {
    path: '/status',
    name: 'status',
    component: StatusPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
