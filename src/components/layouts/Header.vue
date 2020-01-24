<template>
    <v-app-bar
      app
      flex
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
      class="pt-1"
      width="100%"
    >

        <v-btn icon to="/">
            <v-icon large >mdi-home</v-icon>
        </v-btn>
        
        <v-toolbar-title>
            <v-img
                alt="Vuetify Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                width="100"
                />
        </v-toolbar-title>


      <v-spacer></v-spacer>


      <v-btn icon >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

   
      <v-menu offset-y transition="slide-y-transition"  v-if="auth">
          <template v-slot:activator="{ on }">
              <v-btn icon>
              <v-avatar v-on="on" size="30">
              <img
                :src="user.avator"
                :alt="user.name"
              >
              </v-avatar>
              </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="memuclick(index)"
            > 
              <v-icon>{{item.icon}}</v-icon>
              <v-list-item-title> {{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
      </v-menu> 
      <v-btn v-else icon to="/auth/login">
        <v-icon>mdi-account</v-icon>
      </v-btn>

    </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'Header',
    data: () => ({
      items: [
        { title: '个人', icon:'mdi-account-edit' },
        { title: '退出', icon:'mdi-account-off' },
      ],
    }),

    computed:{
      // 使用对象展开运算符，将 mapState 对象混入到计算属性之中
      ...mapState([
        // 映射 this.auth 为 store.state.auth
        'auth',
        'user'
      ])
    },

    methods:{
      memuclick(index){
        if(index===0){
          console.log(index)
        }else if(index===1){
          this.logout()
        }
      },
      logout(){
        this.$store.dispatch('logout')
      }
    }
}
</script>

<style scoped>

</style>>

