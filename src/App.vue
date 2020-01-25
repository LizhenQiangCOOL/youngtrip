<template>
  <v-app>
    <Header/>

    
    <v-content id="main-trip">
        <v-alert dismissible class="ma-2"  :type="alter.msgType" :value="alter.msgShow">{{alter.msg}}</v-alert>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/layouts/Header';

export default {
  name: 'App',

  components: {
    Header,
  },

  computed:{
      ...mapState([
        'alter'
      ])
    },

  data: () => ({
    //
  }),
};
</script>
