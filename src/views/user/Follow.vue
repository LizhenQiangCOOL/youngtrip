<template>
  <div>
    <v-card-text>
      <p class="subtitle-1 mt-1">
        <v-badge
          color="pink lighten-3"
          v-if="!users.length"
          content="0"
        >{{auth&&uid===user.userinfo.id?'你':'他'}}{{title}}</v-badge>
        <v-badge
          color="pink lighten-3"
          v-else
          :content="users.length"
        >{{auth&&uid===user.userinfo.id?'你':'他'}}{{title}}</v-badge>
      </p>
    </v-card-text>

    <v-card
      color="#fbf7ed"
      class="px-2 pt-2"
      elevation="0"
      style="margin:0 auto"
      v-for="user in users"
      :key="user.id"
      @click="dumpuser(user)"
    >
      <v-row>
        <v-col cols="2" class="d-flex justify-center">
          <v-avatar size="44" class="ml-2">
            <img :src="user.avatar" alt />
          </v-avatar>
        </v-col>
        <v-col cols="8">
          <div class="mr-3 font-weight-light title grey--text text--darken-1">{{user.username}}</div>
          <div
            class="font-italic font-weight-thin body-2 cyan--text text--lighten-2"
          >{{ user.sign==''? "Life is a journey" : user.sign}}</div>
        </v-col>
        <v-col cols="2">
          <v-btn large icon>
            <v-icon color="blue">mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.uid = parseInt(this.$route.params.uid);
    this.uname = this.$route.params.uname;
    this.follow = this.$route.params.follow;

    if (this.follow) {
      this.title = "的粉丝";
    } else {
      this.title = "所关注";
    }
    const params = {
      id: this.uid,
      follow: this.follow
    };
    //请求
    this.axios
      .get(`/account/follow`, { params })
      .then(response => {
        this.users = response.data.data;
      })
      .catch(error => {
        this.$store.dispatch("updateAlter", {
          msg: "获取数据失败",
          msgType: "error",
          msgShow: true
        });
      });
  },
  data: () => ({
    uid: null,
    uname: "",
    follow: null,
    title: "",
    users: []
  }),
  computed: {
    // 使用对象展开运算符，将 mapState 对象混入到计算属性之中
    ...mapState([
      // 映射 this.auth 为 store.state.auth
      "auth",
      "user"
    ])
  },
  methods: {
    dumpuser(userprofile) {
      this.$router.push({
        name: "Column",
        params: {
          user: userprofile.id,
          name: userprofile.username,
          avatar: userprofile.avatar
        }
      });
    }
  }
};
</script>

<style scoped>
</style>