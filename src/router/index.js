import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import StatusList from '../views/status-page/StatusList.vue'
import ContactUs from '../views/ContactUs.vue'
import HumidStatus from '../views/status-page/HumidStatus'
import TempStatus from '../views/status-page/TempStatus'
import SoundStatus from '../views/status-page/SoundStatus'
import LineChart from '../views/status-page/LineChart'
import { auth } from '../firebase'
import InfoUser from '../views/InfoUser.vue'

const routes = [{
  path: '/',
  name: 'home',
  component: HomePage,
  meta: {
    requiresAuth: true
  }
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
  component: StatusList,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/status/humid',
  name: 'humid',
  component: HumidStatus,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/status/temp',
  name: 'temp',
  component: TempStatus,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/status/sound',
  name: 'sound',
  component: SoundStatus,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/contact',
  name: 'contact',
  component: ContactUs,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/chart',
  name: 'chart',
  component: LineChart,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/user',
  name: 'user info',
  component: InfoUser,
  meta: {
    requiresAuth: true
  }

}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  console.log(currentUser)
  if (to.path === '/login' && currentUser) {
    next('/')
    return
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !currentUser) {
    next('/login')
    return
  }
  next()
})

export default router
