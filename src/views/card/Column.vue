<template>
  <v-card elevation="0">
    <SelfHeader
      :id="uid"
      :avatar="uavatar"
      :author="uname"
      :follow="follow"
      :auth="auth"
      :authUserid="user.userinfo.id"
      :followers="followerNum"
      :followees="followeeNum"
      @followyou="followyou"
      @enterfollower="enterfollower"
      @enterfollowee="enterfollowee"
    />

    <v-card-text class="subtitle-1" style="padding-bottom:0">
      <v-badge
        color="green"
        :content="cards.length.toString()"
      >{{auth&&uid===user.userinfo.id?'你':'他'}}の游记</v-badge>
    </v-card-text>

    <HomeCard
      v-for="card in cards"
      :key="card.id"
      :card="card"
      :id="card.id"
      :img="card.pic"
      :title="card.title"
      :subtitle="card.date"
      :avatar="card.userprofile.avatar"
      :author="card.userprofile.username"
      :uid="card.userprofile.id"
      :avatarhidden="true"
    ></HomeCard>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import HomeCard from "@/components/HomeCard";
import SelfHeader from "@/views/user/SelfHeader";
export default {
  components: {
    HomeCard,
    SelfHeader
  },
  created() {
    //  个人信息直接路由传递
    this.uid = parseInt(this.$route.params.user);
    this.uavatar = this.$route.params.avatar || "";
    this.uname = this.$route.params.name || "";

    if (typeof this.uid !== "number" || isNaN(this.uid)) {
      this.$router.push("/");
      return;
    }

    this.axios
      .get(`/account/user/${this.uid}/`)
      .then(response => {
        let obj = response.data.data.userinfo;
        this.uavatar = obj.avatar;
        this.uname = obj.user.username;

        this.followerNum = obj.followerNum;
        this.followeeNum = obj.followeeNum;
      })
      .catch(error => {
        this.$store.dispatch("updateAlter", {
          msg: "用户信息拉取失败, 请稍后重试",
          msgType: "error",
          msgShow: true
        });
      });

    // 如果登录　拉取是否关注该用户
    if (this.auth && this.user.userinfo.id !== this.uid) {
      const params = {
        follower: this.user.userinfo.id,
        followee: this.uid
      };
      this.axios
        .get(`/fans/`, { params })
        .then(response => {
          if (response.data.count !== 0) {
            this.follow = true;
            this.followid = response.data.results[0].id;
          }
        })
        .catch(error => {
          this.$store.dispatch("updateAlter", {
            msg: "获取数据失败",
            msgType: "error",
            msgShow: true
          });
        });
    }

    //　个人游记数据请求
    // 后面做个图片上传，在把这三个请求合并
    const params = {
      page: 1,
      page_size: 99999999,
      userprofile: this.uid
    };

    this.axios
      .get(`/card/`, { params })
      .then(response => {
        let obj = response.data;
        this.count = obj.count;
        this.next = obj.next;
        this.previous = obj.previous;
        this.cards = obj.results;
      })
      .catch(error => {
        this.$store.dispatch("updateAlter", {
          msg: "查看失败, 请稍后重试",
          msgType: "error",
          msgShow: true
        });
      });
  },
  data: () => ({
    uid: null,
    uavatar: "",
    uname: "",

    followid: null,
    follow: false,
    followerNum: 0,
    followeeNum: 0,

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
    ]
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
    followyou() {
      if (!this.auth) {
        this.$store.dispatch("updateAlter", {
          msg: "请先登录",
          msgType: "info",
          msgShow: true
        });
      } else {
        if (this.follow) {
          //取消关注
          const headers = {
            Authorization: `jwt ${this.$store.state.user.token}`
          };
          this.axios
            .delete(`/fans/${this.followid}/`, { headers: headers })
            .then(response => {
              this.follow = false;
              this.followid = null;
              this.followerNum -= 1;
            })
            .catch(error => {
              this.$store.dispatch("updateAlter", {
                msg: "关注取消失败",
                msgType: "error",
                msgShow: true
              });
            });
        } else {
          //关注
          const params = {
            follower: this.user.userinfo.id,
            followee: this.uid
          };
          const headers = {
            Authorization: `jwt ${this.$store.state.user.token}`
          };
          this.axios
            .post(`/fans/`, params, { headers: headers })
            .then(response => {
              this.followid = response.data.data;
              this.follow = true;
              this.followerNum += 1;
            })
            .catch(error => {
              this.$store.dispatch("updateAlter", {
                msg: "关注失败",
                msgType: "error",
                msgShow: true
              });
            });
        }
      }
    },
    enterfollower() {
      if (this.followerNum > 0) {
        this.$router.push({
          name: "follow",
          params: {
            uid: this.uid,
            uname: this.uname,
            follow: true
          }
        });
      }
    },
    enterfollowee() {
      if (this.followeeNum > 0) {
        this.$router.push({
          name: "follow",
          params: {
            uid: this.uid,
            uname: this.uname,
            follow: false
          }
        });
      }
    }
  }
};
</script>

<style>
</style>