import Home from '../views/Home.vue'
import People from '../views/People.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/people',
    name: 'People',
    component: People,
  },

  {
    path: '/about-media/:media_type/:media_id',
    name: 'AboutMedia',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMedia.vue'),
  },
]
