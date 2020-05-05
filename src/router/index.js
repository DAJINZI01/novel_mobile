import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import(/* webpackChunkName: "index" */ '../views/Index.vue')
const BookInfo = () => import(/* webpackChunkName: "index" */ '../views/BookInfo.vue')

const Category = () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
const Explore = () => import(/* webpackChunkName: "explore" */ '../views/Explore.vue')
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', name: 'Index', component: Index },
  { path: '/bookinfo/:id', name: 'BookInfo', component: BookInfo },
  { path: '/category', name: 'Category', component: Category },
  { path: '/explore', name: 'Explore', component: Explore },
  { path: '/home', name: 'Home', component: Home },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
