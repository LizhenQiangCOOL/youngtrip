<template>
  <v-app-bar
    app
    flex
    color="primary"
    dark
    src="https://picsum.photos/1920/1080?random"
    class="pt-1"
    width="100%"
    height="50%"
  >
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
        id="searchItem"
        color="green"
        v-show="expandsearch"
        v-model.trim="searchValue"
        @blur="expandsearch = false"
        @keyup.enter="search"
        @input="updateSearchValue"
      />
    </v-expand-x-transition>
    <v-btn icon @click="expandsearch =! expandsearch">
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
          <v-icon>{{item.icon}}</v-icon>
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
    items: [
      { title: "游记", icon: "mdi-format-list-bulleted" },
      { title: "个人", icon: "mdi-account-edit" },
      { title: "退出", icon: "mdi-account-off" }
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
      if (index === 1) {
        router.push("/user/edit");
      } else if (index === 2) {
        this.logout();
      } else if (index === 0) {
        this.$router.push({
          name: "Column",
          params: {
            user: this.user.userinfo.id,
            name: this.user.userinfo.user.username,
            avatar: this.user.userinfo.avatar
          }
        });
      }
    },
    logout() {
      this.$store.dispatch("logout");
    },
    search() {
      const value = this.value;

      if (value !== "") {
        console.log(value);
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

