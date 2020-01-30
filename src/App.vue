<template>
  <v-app>
    <Header />
    <v-content id="main-trip" class="d-flex">
       <v-card elevation="0" max-width="740px" style="margin:0 auto">
        <v-alert dismissible class="ma-2" :type="alter.msgType" :value="alter.msgShow">{{alter.msg}}</v-alert>
        <router-view></router-view>
       </v-card>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  computed: {
    ...mapState(["alter"])
  },

  data: () => ({})
};
</script>

<style>
</style>