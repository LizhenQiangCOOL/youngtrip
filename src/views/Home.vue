<template>
  <div class="home">
    <Carousel />

    <HomeCard
      v-for="card in cards"
      :key="card.id"
      :card="card"
      :id="card.id"
      :img="card.pic"
      :title="card.title"
      :subtitle="(card.firstday)+' '+(card.location)"
      :avatar="card.userprofile.avatar"
      :author="card.userprofile.username"
      :uid="card.userprofile.id"
      :avatarhidden="false"
      :flag="true"
    />

    <v-speed-dial fixed bottom right value="true" class="d=felx d-md-none">
      <v-btn color="pink" fab style="position:relative; top:-25px; left:-25px" @click="checkauth">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-speed-dial>

    <div class="text-center">
      <v-pagination
        v-model="page"
        :page="page"
        :length="pagelength"
        circle
        @input="paginationInput"
      ></v-pagination>
    </div>
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
  created() {
    this.axios
      .get(`/trip/`)
      .then(response => {
        this.cards = response.data.results;
        this.count = response.data.count;
        this.next = response.data.next;
        this.previous = response.data.previous;
        this.page = 1;
        this.pagelength = Math.ceil(this.count / this.pagesize);
      })
      .catch(error => {
        this.$store.dispatch("updateAlter", {
          msg: "获取数据失败",
          msgType: "error",
          msgShow: true
        });
        this.$router.push("/");
      });
  },

  data: () => ({
    count: null,
    next: null,
    previous: null,
    cards: [],
    homecardsItems: [
      {
        id: 1,
        pic:
          "http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",
        title: "🇺🇸新墨西哥州Albuquerque# 浪漫的热气球节和似雪的白色沙滩🎈",
        date: "2019.10.1   9025浏览",
        userprofile: {
          id: 1,
          avatar: "https://api.adorable.io/avatars/200/asfdafasdf.png",
          username: "小一爱客随"
        }
      }
    ],

    pagesize: 3,
    page: 1,
    pagelength: 1
  }),
  methods: {
    checkauth() {
      if (!this.auth) {
        this.$store.dispatch("updateAlter", {
          msg: "请先登录",
          msgType: "info",
          msgShow: true
        });
      } else {
        this.$router.push("/trips/create");
      }
    },

    paginationInput() {
      const params = {
        page:this.page
      };
      this.axios
        .get(`/trip/`, { params })
        .then(response => {
          this.cards = response.data.results;
          this.count = response.data.count;
          this.next = response.data.next;
          this.previous = response.data.previous;
          this.pagelength = Math.ceil(this.count / this.pagesize);
        })
        .catch(error => {
          this.$store.dispatch("updateAlter", {
            msg: "获取数据失败",
            msgType: "error",
            msgShow: true
          });
          this.$router.push("/");
        });
    }
  },
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
            break;
          case "Login":
            vm.$store.dispatch("updateAlter", {
              msg: "登录成功",
              msgType: "success",
              msgShow: true
            });
            break;
        }
      } else if (logout) {
        vm.$store.dispatch("updateAlter", {
          msg: "操作成功",
          msgType: "success",
          msgShow: true
        });
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
      }
    }
  }
};
</script>

<style>
</style>
