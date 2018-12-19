import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Devices from '@/components/Devices'
import Users from '@/components/Users'
import About from '@/components/About'
import Add from '@/components/Add'
import Contact from '@/components/Contact'
import Edit from '@/components/Edit'
import Create from '@/components/AddUserForm'

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
      path: '/users',
      name: 'Users',
      component: Users
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
      path: '/create',
      name: 'Create',
      component: Create
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
    }
  ]
})
