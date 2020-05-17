import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/index'
import User from '@/pages/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
