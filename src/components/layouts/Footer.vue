<template>
    <v-bottom-navigation 
      flex
      app
      grow
      :value="activeBtn"
      color="deep-purple accent-4"
      class="d=felx d-md-none"
    >
      <v-btn text v-for="item in items" :key="item.icon" :to="item.to">
        <span>{{item.name}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: 0,
        items:[
            {
                name:'首页',
                icon:'mdi-history',
                to:'/',
            },
            {
                name:'喜欢',
                icon:'mdi-cards-heart',
                to:'/cards/likecard',
            },
            {
                name:'个人',
                icon:'mdi-account-box',
                to:`/user/edit`,
            }
        ],
      }
    },
  }
</script>

<style>

</style>