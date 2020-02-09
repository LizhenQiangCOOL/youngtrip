import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'
import {
  format
} from 'url'

Vue.use(VueRouter)


const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 获取仓库里的登录信息
  const auth = router.app.$options.store.state.auth
  // 如果当前用户已登录，且目标路由包含 /auth/ ，就跳转到首页
  //　或auth要求为true的
  if (auth && to.path.indexOf('/auth/') !== -1) {
    next('/')
  } else if ((!auth && to.meta.auth)) {
    next('/')
    store.dispatch('updateAlter', {
      msg: "请先登录",
      msgType: "info",
      msgShow: true
    });
  } else {
    next()
  }
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

export default router