import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'

Vue.use(Vuex)

// 状态
const state = {
  user: ls.getItem('user'),
  //添加 auth 来保存当前用户的登录状态: 值为 true或false
  auth: ls.getItem('auth') 
}

// 改变状态的方法，不可异步
const mutations = {
  UPDATE_USER(state, user){
    state.user = user
    ls.setItem('user', user)
  },
  UPDATE_AUTH(state, auth){
    state.auth = auth
    ls.setItem('auth', auth)
  }
}

// 类似mutations 提交前面的mutations  调用方法：store.dispatch('login)
const actions = {
  login({ commit }, user) {
    if (user) commit('UPDATE_USER', user)
    commit('UPDATE_AUTH', true)
    router.push('/')
  },

  logout({ commit }){
    commit('UPDATE_AUTH', false)
    if(router.history.current.name !== 'Home') 
        router.push({name:'Home', params: {logout:true}})
  }
  
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{}
})
