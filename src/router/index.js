import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',

    component: () =>
      import(/* webpackChunkName: "home_1" */ '../views/home/Home.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(
        /* webpackChunkName: "register_1" */ '../views/login/Register.vue'
      ),
    beforeEnter(to, from, next) {
      console.log(to, from)
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Login' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login_1" */ '../views/login/Login.vue'),
    beforeEnter(to, from, next) {
      console.log(to, from)
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/shop/:id',
    name: 'Shop',

    component: () =>
      import(/* webpackChunkName: "shop_1" */ '../views/shop/Shop.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = name === 'Login' || name === 'Register'
  isLogin || isLoginOrRegister ? next() : next({ name: 'Login' })

  console.log(to, from)
})
export default router
