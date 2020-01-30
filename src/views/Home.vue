<template>
  <div class="home">
    <Carousel />
    <HomeCard
      v-for="(homecard, index) in homecardsItems"
      :key="index"
      :img="homecard.img"
      :title="homecard.title"
      :subtitle="homecard.subtitle"
      :avatar="homecard.avatar"
      :author="homecard.author"
    ></HomeCard>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

import Carousel from "@/components/Carousel";
import HomeCard from "@/components/HomeCard";

export default {
  name: "home",
  components: {
    Carousel,
    HomeCard
  },
  data: () => ({
    homecardsItems: [
      {
        img:
          "http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",
        title: "🇺🇸新墨西哥州Albuquerque# 浪漫的热气球节和似雪的白色沙滩🎈",
        subtitle: "2019.10.1   9025浏览",
        avatar: "https://api.adorable.io/avatars/200/asfdafasdf.png",
        author: "小一爱客随"
      },
      {
        img:
          "http://photos.breadtrip.com/photo_2019_10_31_c26207f514c82339d22a3a88912f0ea6.jpg?imageView/1/w/640/h/480/q/85",
        title: "非洲海岛流浪记🇲🇺毛里求斯cdn",
        subtitle: "2019.10.1   9025浏览",
        avatar: "https://api.adorable.io/avatars/200/asfdafasdf.png",
        author: "小一爱客随"
      },
      {
        img:
          "http://photos.breadtrip.com/photo_2019_12_11_33d7de2dd10931d698f65389a5693fc4.jpg?imageView/1/w/640/h/480/q/85",
        title: "非洲海岛流浪记🇲🇺毛里求斯cdn",
        subtitle: "2019.10.1   9025浏览",
        avatar: "https://api.adorable.io/avatars/200/asfdafasdf.png",
        author: "小一爱客随"
      },
      {
        img:
          "http://photos.breadtrip.com/photo_2018_02_18_5e2813ae58c7a944a6622e0dde820c4c.jpg?imageView/1/w/640/h/480/q/85",
        title: "非洲海岛流浪记🇲🇺毛里求斯cdn",
        subtitle: "2019.10.1   9025浏览",
        avatar: "https://api.adorable.io/avatars/200/asfdafasdf.png",
        author: "小一爱客随"
      },
      {
        img:
          "http://photos.breadtrip.com/photo_2019_12_29_d84e13c3d374449b8be03e939b4cbe33.jpg?imageView/2/w/1384/h/1384/q/85",
        title: "非洲海岛流浪记🇲🇺毛里求斯cdn",
        subtitle: "2019.10.1   9025浏览",
        avatar: "https://api.adorable.io/avatars/200/asfdafasdf.png",
        author: "小一爱客随"
      }
    ],
  }),

  beforeRouteEnter(to, from, next) {
    const fromName = from.name;
    const logout = to.params.logout;
    next(vm => {
      if (vm.$store.state.auth) {
        switch (fromName) {
          case "Register":
            vm.$store.dispatch("updateAlter", {
              msg: "注册成功",
              msgType: "success",
              msgShow: true
            });
            vm.msgtimer = setTimeout(() => {
              vm.$store.dispatch("updateAlter", { msgShow: false });
            }, 3300);
            break;
          case "Login":
            vm.$store.dispatch("updateAlter", {
              msg: "登录成功",
              msgType: "success",
              msgShow: true
            });
            vm.msgtimer = setTimeout(() => {
              vm.$store.dispatch("updateAlter", { msgShow: false });
            }, 3300);
            break;
        }
      } else if (logout) {
        vm.$store.dispatch("updateAlter", {
          msg: "操作成功",
          msgType: "success",
          msgShow: true
        });
        vm.msgtimer = setTimeout(() => {
          vm.$store.dispatch("updateAlter", { msgShow: false });
        }, 3300);
      }
    });
  },

  computed: {
    // 使用对象展开运算符，将 mapState 对象混入到计算属性之中
    ...mapState([
      // 映射 this.auth 为 store.state.auth
      "auth"
    ])
  },
  watch: {
    auth(value) {
      if (!value) {
        this.$store.dispatch("updateAlter", {
          msg: "操作成功",
          msgType: "success",
          msgShow: true
        });
        this.msgtimer = setTimeout(() => {
          this.$store.dispatch("updateAlter", { msgShow: false });
        }, 3300);
      }
    }
  }
};
</script>

<style>
</style>
