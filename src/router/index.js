import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Swiper from '../components/Swiper/Swiper'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component:Swiper
    },{
      path:'/home',
      component:Home
    }
  ]
})
