<template>
  <v-bottom-navigation
    flex
    app
    grow
    :value="activeBtn"
    color="deep-purple accent-4"
    class="d=felx d-md-none"
  >
    <v-btn text v-for="(item, index) in items" :key="item.icon" @click="intopage(index)">
      <span>{{item.name}}</span>
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 0,
      items: [
        {
          name: "首页",
          icon: "mdi-history",
          to: "/"
        },
        {
          name: "喜欢",
          icon: "mdi-cards-heart",
          to: "/cards/likecard"
        },
        {
          name: "个人",
          icon: "mdi-account-box",
          to: "/user"
        }
      ]
    };
  },
  methods: {
    intopage(index) {
      switch (index) {
        case 0:
          this.$router.push("/");
          break;
        case 1:
          this.$router.push("/cards/likecard");
          break;
        case 2:
          if (this.$store.state.auth) {
            this.$router.push({
              name: "Column",
              params: {
                user: this.$store.state.user.userinfo.id,
                name: this.$store.state.user.userinfo.user.username,
                avatar: this.$store.state.user.userinfo.avatar
              }
            });
          } else {
            this.$store.dispatch("updateAlter", {
              msg: "请先登录",
              msgType: "info",
              msgShow: true
            });
          }
      }
    }
  }
};
</script>

<style>
</style>