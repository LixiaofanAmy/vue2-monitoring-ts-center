import Vue from 'vue'
import VueRouter from 'vue-router'
import MonitoringScreen from '../views/monitoring-screen/MonitoringScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MonitoringScreen',
    component: MonitoringScreen,
  },
]

const router = new VueRouter({
  routes,
})

export default router
