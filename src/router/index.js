import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import StatusList from '../views/status-page/StatusList.vue'
import ContactUs from '../views/ContactUs.vue'
import HumidStatus from '../views/status-page/HumidStatus'
import TempStatus from '../views/status-page/TempStatus'
import SoundStatus from '../views/status-page/SoundStatus'

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
    component: StatusList
  },
  {
    path: '/status/humid',
    name: 'humid',
    component: HumidStatus
  },
  {
    path: '/status/temp',
    name: 'temp',
    component: TempStatus
  },
  {
    path: '/status/sound',
    name: 'sound',
    component: SoundStatus
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
