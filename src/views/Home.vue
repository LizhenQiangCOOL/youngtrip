<template>
  <div class="home">
    
      <Carousel/>
      <HomeCard/>
      <HomeCard/>
      <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel';
import HomeCard from '@/components/HomeCard'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Carousel,
    HomeCard
  },
  data: () => ({
  }),
  beforeRouteEnter (to, from, next) {
    const fromName = from.name
    const logout = to.params.logout

    next(vm=>{
      if(vm.$store.state.auth){
        switch(fromName){
          case 'Register':
            vm.$store.dispatch('updateAlter',{msg:'注册成功', msgType:'success', msgShow:true})
            vm.timer = setTimeout(() => {vm.$store.dispatch('updateAlter',{msgShow:false}) }, 3300)
            break
          case 'Login':
            vm.$store.dispatch('updateAlter',{msg:'登录成功', msgType:'success', msgShow:true})
            vm.timer = setTimeout(() => {vm.$store.dispatch('updateAlter',{msgShow  :false}) }, 3300)
            break
        }
      } else if (logout){
        vm.$store.dispatch('updateAlter',{msg:'操作成功', msgType:'success', msgShow:true})
        vm.timer = setTimeout(() => {vm.$store.dispatch('updateAlter',{msgShow  :false}) }, 3300)
      }
    })
  },

    computed:{
      // 使用对象展开运算符，将 mapState 对象混入到计算属性之中
      ...mapState([
        // 映射 this.auth 为 store.state.auth
        'auth',
      ])
    },

  watch:{
    auth(value){
      if(!value){
        this.$store.dispatch('updateAlter',{msg:'操作成功', msgType:'success', msgShow:true})
        this.timer = setTimeout(() => {this.$store.dispatch('updateAlter',{msgShow  :false}) }, 3300)
      }
    }
  },

}
</script>
