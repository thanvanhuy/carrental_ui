import Vue from 'vue'
import VueRouter from 'vue-router'
import requireAuth from '../js/requireAuth.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    meta: {
      title: 'Xe giá rẻ',
    },
    component: () => import('../components/client/Main.vue')
  },
  {
    path: '/gioithieu',
    name: 'gioithieu',
    meta: {
      title: 'Giới thiệu',
    },
    component: () => import('../components/client/About.vue')
  },
  {
    path: '/xe4cho',
    name: 'xe4cho',
    meta: {
      title: 'Xe 4 chỗ',
    },
    component: () => import('../components/client/Car_4.vue')
  },
  {
    path: '/xe7cho',
    name: 'xe7cho',
    meta: {
      title: 'Xe 7 chỗ',
    },
    component: () => import('../components/client/Car_7.vue')
  },
  {
    path: '/xe16cho',
    name: 'xe16cho',
    meta: {
      title: 'Xe 16 chỗ',
    },
    component: () => import('../components/client/Car_16.vue')
  },
  {
    path: '/lienhe',
    name: 'lienhe',
    meta: {
      title: 'Liên hệ',
    },
    component: () => import('../components/client/Contac.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../components/admin/Login.vue'),
    meta: {
      title: 'Đăng nhập',
    },
  },

  {
    path: '/Admin',
    name: 'Admin',
    meta: {
      title: 'Administrator',
    },
    component: () => import('../components/admin/Admin.vue'),
    beforeEnter: requireAuth,
  },
  
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
  next();
});

export default router
