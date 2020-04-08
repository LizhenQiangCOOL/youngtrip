<template>
  <v-card >
    <v-card-text>
      <p class="subtitle-1 mt-1" >
        <v-badge color="red"  :content="cards.length.toString()">你喜欢的卡片</v-badge>
      </p>
    </v-card-text>
    <HomeCard
      v-for="card in cards"
      :key="card.id"
      :card="card"
      :id="card.id"
      :img="card.pic"
      title=""
      :subtitle="card.date"
      :avatar="card.userprofile.avatar"
      :author="card.userprofile.username"
      :uid="card.userprofile.id"
      :avatarhidden="false"
      :flag="false"
    ></HomeCard>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import HomeCard from "@/components/HomeCard";

export default {
  components: {
    HomeCard
  },

  created() {
    const params = {
      page: 1,
      page_size: 99999999,
      userprofile: this.user.userinfo.id
    };
    const headers = {
      Authorization: `jwt ${this.$store.state.user.token}`
    };
    this.axios
      .get(`/likecard/`, { params, headers: headers })
      .then(response => {
        this.cards = response.data.results;
        this.count = response.data.count;
        this.next = response.data.next;
        this.previous = response.data.previous;
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
      },
      {
        id: 2,
        pic:
          "http://photos.breadtrip.com/photo_2019_10_31_c26207f514c82339d22a3a88912f0ea6.jpg?imageView/1/w/640/h/480/q/85",
        title: "非洲海岛流浪记🇲🇺毛里求斯cdn",
        date: "2019.10.1   9025浏览",
        userprofile: {
          id: 1,
          avatar: "https://api.adorable.io/avatars/200/asfdafasdf.png",
          username: "小一爱客随"
        }
      },
      {
        id: 3,
        pic:
          "http://photos.breadtrip.com/photo_2019_12_11_33d7de2dd10931d698f65389a5693fc4.jpg?imageView/1/w/640/h/480/q/85",
        title: "非洲海岛流浪记🇲🇺毛里求斯cdn",
        date: "2019.10.1   9025浏览",
        userprofile: {
          id: 1,
          avatar: "https://api.adorable.io/avatars/200/asfdafasdf.png",
          username: "小一爱客随"
        }
      },
      {
        id: 4,
        pic:
          "http://photos.breadtrip.com/photo_2018_02_18_5e2813ae58c7a944a6622e0dde820c4c.jpg?imageView/1/w/640/h/480/q/85",
        title: "非洲海岛流浪记🇲🇺毛里求斯cdn",
        date: "2019.10.1   9025浏览",
        userprofile: {
          id: 1,
          avatar: "https://api.adorable.io/avatars/200/asfdafasdf.png",
          username: "小一爱客随"
        }
      },
      {
        id: 5,
        pic:
          "http://photos.breadtrip.com/photo_2019_12_29_d84e13c3d374449b8be03e939b4cbe33.jpg?imageView/2/w/1384/h/1384/q/85",
        title: "非洲海岛流浪记🇲🇺毛里求斯cdn",
        date: "2019.10.1   9025浏览",
        userprofile: {
          id: 1,
          avatar: "https://api.adorable.io/avatars/200/asfdafasdf.png",
          username: "小一爱客随"
        }
      }
    ]
  }),
  computed: {
    // 使用对象展开运算符，将 mapState 对象混入到计算属性之中
    ...mapState([
      // 映射 this.auth 为 store.state.auth
      "auth",
      "user"
    ])
  }
};
</script>

<style>
</style>