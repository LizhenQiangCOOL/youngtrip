<template>
  <v-card class="mx-3 mt-4">
    <v-tabs v-model="tab" background-color="white" color="deep-purple accent-4" right>
      <v-tab v-for="link in links" :key="link.name">{{ link.title }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <Profile />
      </v-tab-item>
      <v-tab-item>
        <Avatar />
      </v-tab-item>
      <v-tab-item>
        <Password cardtitle="修改密码" :enSureBtn="true" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Profile from "@/views/user/Profile";
import Avatar from "@/views/user/Avatar";
import Password from "@/views/user/Password";

export default {
  components: {
    Profile,
    Avatar,
    Password
  },
  data: () => ({
    tab: null,
    links: [
      {
        name: "edit",
        title: "个人信息"
      },
      {
        name: "edit_avatar",
        title: "修改头像"
      },
      {
        name: "edit_password",
        title: "修改密码"
      }
    ]
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
    　//没登录　防止修改个人信息
      if (!vm.$store.state.auth) next(from);
    });
  }
};
</script>

<style>
</style>