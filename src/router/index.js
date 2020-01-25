import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { format } from 'url'

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
  if(auth && to.path.indexOf('/auth/') !== -1){
    next('/')
  }else{
    next()
  }
})

export default router
