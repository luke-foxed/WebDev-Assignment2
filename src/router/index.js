import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Devices from '@/components/Devices'
import About from '@/components/About'
import Add from '@/components/Add'
import Contact from '@/components/Contact'
import Edit from '@/components/Edit'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/devices',
      name: 'Devices',
      component: Devices
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
