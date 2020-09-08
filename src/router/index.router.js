import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
  },{
    path: '/my-activities',
    name: 'Main',
    component: Main
  },{
    path: '/all-accounts',
    name: 'Main',
    component: Main
  },{
    path: '/users',
    name: 'Main',
    component: Main
  },{
    path: '/performance',
    name: 'Main',
    component: Main
  },{
    path: '/dashboard',
    name: 'Main',
    component: Main
  }]
})