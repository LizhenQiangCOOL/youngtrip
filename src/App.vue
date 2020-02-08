<template>
  <v-app>
    <Header />
    
    <v-snackbar v-model="alter.msgShow" :color="alter.msgType" multi-line :timeout="timeout" top>
      {{alter.msg}}
      <v-btn color="white" icon @click="closesnackbar">
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>

    <v-content id="main-trip" class="d-flex">
      <v-card elevation="0" max-width="740px" style="margin:0 auto">
        <router-view></router-view>
      </v-card>
    </v-content>
    <Footer />
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
    Footer
  },

  computed: {
    ...mapState(["alter"])
  },

  data: () => ({
    timeout: 3000
  }),
  methods: {
    closesnackbar(){
       this.$store.dispatch('updateAlter', { msgShow: false });
    },
  }
};
</script>

<style>
@import "~animate.css/animate.min.css";
</style>