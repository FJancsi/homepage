import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gps',
      name: 'gps',
      component: () => import('./views/GPSView.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
