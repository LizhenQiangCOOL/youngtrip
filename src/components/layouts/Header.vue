<template>
  <v-app-bar app flex color="primary" dark :src="bgimg" class="pt-1" width="100%" height="50%">
    <v-btn icon to="/">
      <v-icon size="32">mdi-home</v-icon>
    </v-btn>

    <v-toolbar-title>青年游记</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-expand-x-transition>
      <v-text-field
        flat
        solo-inverted
        hide-details
        dense
        prepend-inner-icon="mdi-magnify"
        label="Search"
        rounded
        clearable
        autofocus
        id="search-item"
        color="green"
        background-color="blue-grey lighten-5"
        v-if="expandsearch"
        v-model.trim="searchValue"
        @keyup.enter="search"
        @input="updateSearchValue"
      />
    </v-expand-x-transition>
    <v-btn icon @click="expandsearch = !expandsearch">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu offset-y transition="slide-y-transition" v-if="auth">
      <template v-slot:activator="{ on }">
        <v-btn icon>
          <v-avatar v-on="on" size="30">
            <img :src="user.userinfo.avatar" :alt="user.userinfo.user.username" />
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="memuclick(index)">
          <v-icon class="mx-1">{{item.icon}}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn v-else icon to="/auth/login">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
import router from "@/router";

export default {
  name: "Header",
  data: () => ({
    bgimg: `${process.env.VUE_APP_IMGURL}img/headbg.png`,
    items: [
      { title: "增加游记", icon: "mdi-plus-circle-outline" },
      { title: "个人喜欢", icon: "mdi-cards-heart" },
      { title: "个人中心", icon: "mdi-card-account-details" },
      { title: "修改信息", icon: "mdi-account-edit" },
      { title: "退出登录", icon: "mdi-account-off" }
    ],
    expandsearch: false,
    value: ""
  }),
  computed: {
    // 使用对象展开运算符，将 mapState 对象混入到计算属性之中
    ...mapState([
      // 映射 this.auth 为 store.state.auth
      "auth",
      "user"
    ]),
    searchValue: {
      get() {
        return this.$store.state.searchValue;
      },
      set(newValue) {
        this.value = newValue;
      }
    }
  },
  methods: {
    memuclick(index) {
      switch (index) {
        case 0:
          this.$router.push("/trips/create");
          break;
        case 1:
          this.$router.push("/cards/likecard");
          break;
        case 2:
          this.$router.push({
            name: "Column",
            params: {
              user: this.$store.state.user.userinfo.id,
              name: this.$store.state.user.userinfo.user.username,
              avatar: this.$store.state.user.userinfo.avatar
            }
          });
          break;
        case 3:
          router.push("/user/edit");
          break;
        case 4:
          this.logout();
          break;
      }
    },
    logout() {
      this.$store.dispatch("logout");
      this.$store.dispatch("clearTrip");
    },
    search() {
      const value = this.value;

      if (value !== "") {
        this.$router.push({ name: "Search", query: { q: value } });
      }
    },
    updateSearchValue() {
      this.$store.commit("UPDATE_SEARCH_VALUE", this.value);
    }
  }
};
</script>

<style scoped>
</style>>

