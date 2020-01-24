<template>
  <div class="home">
      <v-alert dismissible class="ma-1"  :type="msgType" :value="msgShow">{{msg}}</v-alert>

      <Carousel/>
      <HomeCard/>
      <HomeCard/>
      <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
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
      msg:'',
      msgType:'success',
      msgShow:false,
  }),
  beforeRouteEnter (to, from, next) {
    const fromName = from.name
    const logout = to.params.logout

    next(vm=>{
      if(vm.$store.state.auth){
        switch(fromName){
          case 'Register':
            vm.showMsg('注册成功')
            break
          case 'Login':
            vm.showMsg('登录成功')
            break
        }
      } else if (logout){
        vm.showMsg('操作成功')
      }
    })
  },
  computed:{
    auth(){
      return this.$store.state.auth
    }
  },
  watch:{
    auth(value){
      if(!value){
        this.showMsg('操作成功')
      }
    }
  },
  methods:{
     showMsg(msg, type = 'success'){
        this.msg = msg
        this.msgType = type
        this.msgShow = false
        this.$nextTick(() => {
          this.msgShow=true
          this.timer = setTimeout(() => {this.msgShow=false}, 3300)
        })
   }
  }

}
</script>
