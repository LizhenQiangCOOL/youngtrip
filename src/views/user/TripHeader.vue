<template class="d-flex">
  <v-card elevation="0" max-width="720px" style="margin:0 auto">
    <v-img :src="picurl" height="35vh" gradient="to right, rgba(0, 0, 0, 0.5) 0%, transparent">
      <v-card-text>
        <v-row>
          <v-col cols="12" class="d-flex justify-center" >
            <v-btn icon  @click="dumpuser">
              <v-avatar size="60">
                <img :src="avatar" alt />
              </v-avatar>
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="d-flex justify-center white--text font-weight-regular body-2">
            <div>
              <i class="mx-1">by</i>
              {{author}}
            </div>
          </v-col>
        </v-row>
        <div cols="12" class="d-flex justify-center white--text title">{{title}}</div>

        <v-divider color="white"></v-divider>

        <v-row class="mt-3">
          <v-col cols="4">
            <div class="d-flex justify-center white--text">
              <v-badge color="blue" :content="days.toString()">天数</v-badge>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="d-flex justify-center white--text">
              <v-badge color="pink" :content="likecount.toString()">喜欢</v-badge>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="d-flex justify-center white--text">
              <v-badge color="green" :content="commentcount.toString()">评论</v-badge>
            </div>
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
    likecount: {
      type: Number,
      required: true
    },
    commentcount: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    picurl: {
      type: String,
      required: true
    },
    days: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    bgimg: `${process.env.VUE_APP_IMGURL}img/bg.jpg`
  }),
  methods: {

    dumpuser() {
      this.$emit('dumpuser', {id:this.id,avatar:this.avatar,username:this.author})
    },

  
  }
};
</script>

<style>
</style>