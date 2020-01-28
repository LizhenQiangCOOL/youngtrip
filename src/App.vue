<template>
  <v-app>
    <Header />
    <v-content id="main-trip">
      <v-alert dismissible class="ma-2" :type="alter.msgType" :value="alter.msgShow">{{alter.msg}}</v-alert>
      <router-view></router-view>
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
