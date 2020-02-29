<template class="d-flex">
  <v-card elevation="0" max-width="720px" style="margin:0 auto">
    <v-img :src="bgimg" height="40vh" gradient="to right, rgba(0, 0, 0, 0.5) 0%, transparent">
      <v-card-text>
        <v-row>
          <v-col cols="4">
            <div class="mt-2 float-right" style="color:white" @click="enterfollower">
              <div class="headline font-weight-light d-flex justify-center">{{followers}}</div>
              <div class="d-flex justify-center">粉丝</div>
            </div>
          </v-col>
          <v-col cols="4" class="d-flex justify-center">
            <v-btn icon>
              <v-avatar size="60">
                <img :src="avatar" alt />
              </v-avatar>
            </v-btn>
          </v-col>
          <v-col cols="4">
            <div class="mt-2 float-left" style="color:white" @click="enterfollowee">
              <div class="headline font-weight-light d-flex justify-center">{{followees}}</div>
              <div class="d-flex justify-center">关注</div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center title pt-2 white--text">{{ author }}</v-col>
        </v-row>
        <v-row v-show="!(auth && id === authUserid)">
          <v-col class="d-flex justify-center">
            <v-btn v-if="auth && follow" rounded width="100" style="color:white;" outlined @click="followyou">已关注</v-btn>
            <v-btn v-else  rounded width="100" @click="followyou">关注</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-img>
  </v-card>
</template>


<script>
import { mapState } from "vuex";

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    follow: {
      type: Boolean,
      required: true
    },
    auth: {
      type: Boolean,
      required: true
    },
    authUserid: {
      type: Number,
      required: false
    },
    followers: {
      type: Number,
      required: true
    },
    followees: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    bgimg: `${process.env.VUE_APP_IMGURL}img/bg.jpg`
  }),
  methods: {
    followyou() {
      this.$emit('followyou')
    },
    enterfollower(){
      this.$emit('enterfollower')
    },
    enterfollowee(){
      this.$emit('enterfollowee')
    }
  }
};
</script>

<style>
</style>