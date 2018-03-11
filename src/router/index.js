import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Category from '@/pages/Category'
import RoomList from '@/pages/RoomList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/roomList/:gameId/:gameName',
      component: RoomList
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
