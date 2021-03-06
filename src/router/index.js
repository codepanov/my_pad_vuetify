import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Land from '../views/Land.vue'
import Notifications from '../views/Notifications.vue'
// import Gallery from '../components/ImageGallery.vue'
import AddItem from '../views/AddItem.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/land',
    name: 'Land',
    component: Land
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  // {
  //   path: '/gallery',
  //   name: 'Gallery',
  //   component: Gallery
  // },
  {
    path: '/add-item',
    name: 'AddItem',
    component: AddItem
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router