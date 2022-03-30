import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import CameraCheck from '../views/CameraCheck.vue'
import HistoryPage from '../views/HistoryPage.vue'
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
    path: '/camera',
    name: 'camera',
    component: CameraCheck
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryPage
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
