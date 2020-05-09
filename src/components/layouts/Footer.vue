<template>
  <v-bottom-navigation
    flex
    app
    grow
    :value="activeBtn"
    color="deep-purple accent-4"
    class="d=felx d-md-none"
    :input-value='!hiddenvbn'
  >
    <v-btn text v-for="(item, index) in items" :key="item.icon" @click="intopage(index)">
      <span>{{item.name}}</span>
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  watch: {
    $route: {
      handler: function(val, oldVal) {
        const name = val.name;
        switch (name) {
          case "Home":
            this.hiddenvbn = false;
            this.activeBtn = 0;
            break;
          case "Likecard":
            this.hiddenvbn = false;
            this.activeBtn = 1;
            break;
          case "Column":
            const userid = val.params.user || null;
            if (
              userid &&
              this.$store.state.auth &&
              this.$store.state.user.userinfo.id === userid
            ) {
              this.hiddenvbn = false;
              this.activeBtn = 2;
            } else {
              this.hiddenvbn = true;
            }
            break;
          default:
            this.hiddenvbn = true;
        }
      }
    }
  },
  data() {
    return {
      hiddenvbn: false,
      activeBtn: 0,
      items: [
        {
          name: "首页",
          icon: "mdi-history",
        },
        {
          name: "喜欢",
          icon: "mdi-cards-heart",
        },
        {
          name: "个人",
          icon: "mdi-account-box",
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
          break;
      }
    }
  }
};
</script>

<style>
</style>