<template>
  <div>
    <v-card class="mx-3 mt-4">
      <v-card-text>
        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn icon>
              <v-avatar size="60" @click="dumpuser({id:uid,avatar:uavatar,username:uname})">
                <img :src="uavatar" alt />
              </v-avatar>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            class="d-flex justify-center"
            style="font-size: 12px;color: #999;padding-top:20px;"
          >by {{ uname }}</v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex justify-center">
            <span class="title">{{title}}</span>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="6">
            <v-icon size="28" class="mr-1">mdi-calendar</v-icon>
            <span class="subtitle-2">{{date}}</span>
          </v-col>
          <v-col cols="6">
            <v-icon size="28" class="mr-1">mdi-earth</v-icon>
            <span class="subtitle-2">{{location}}</span>
          </v-col>
        </v-row>

        <div class="photo-ctn">
          <v-img :src="pic"></v-img>
          <div class="wp-btns">
            <a class="comment-btn" @click="clickcomment">
              <v-icon size="20" color="white" class="pt-1 mx-1 float-right">mdi-message</v-icon>
              <span>{{ comments.length}}</span>
            </a>
            <i class="icon-btnbg"></i>
            <a :class="likeclass" @click="like">
              <v-icon size="20" :color="likecolor" class="mx-1">mdi-cards-heart</v-icon>
              <span>{{ likeUsers.length }}</span>
            </a>
          </div>
        </div>

        <v-card-text>
          <div class="text--primary">{{content}}</div>
        </v-card-text>

        <v-row v-show="auth && user.userinfo &&uid === user.userinfo.id">
          <v-col>
            <v-btn icon @click="editcard">
              <v-icon>mdi-content-save-edit</v-icon>
            </v-btn>
            <v-btn icon @click="delcard">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mx-3 mt-3">
      <v-card-text>
        <p>
          <v-badge color="pink" v-if="!likeUsers.length" content="0">喜欢</v-badge>
          <v-badge color="pink" v-else :content="likeUsers.length">喜欢</v-badge>
        </p>
        <v-avatar
          size="40"
          class="mx-2"
          v-for="likeuser in likeUsers"
          :key="likeuser.id"
          @click="dumpuser(likeuser.userprofile)"
        >
          <img :src="likeuser.userprofile.avatar" alt />
        </v-avatar>
        <p
          v-if="!likeUsers.length"
          class="body-1 font-weight-medium d-flex justify-center"
        >成为第一个点赞的人吧 ?</p>
      </v-card-text>
    </v-card>

    <v-card class="mx-3 mt-3">
      <v-card-text>
        <p>
          <v-badge color="green" v-if="!comments.length" content="0">评论</v-badge>
          <v-badge color="green" v-else :content="comments.length">评论</v-badge>
        </p>

        <v-row class="comment-line" v-for="comment in comments" :key="comment.id">
          <v-col cols="2" class="d-flex justify-center">
            <v-avatar
              size="40"
              :to="'/'+comment.userprofile.id"
              @click="dumpuser(comment.userprofile)"
            >
              <img :src="comment.userprofile.avatar" alt />
            </v-avatar>
          </v-col>
          <v-col cols="8" class="comment-content">
            <span class="mr-3 font-weight-bold subtitle-1">{{comment.userprofile.username}}</span>
            <span class="caption font-weight-light">{{comment.date | moment('from') }}</span>
            <div class="body-2 font-weight-medium">{{comment.content}}</div>
            <div v-if="auth && user.userinfo && comment.userprofile.id === user.userinfo.id">
              <v-icon color="#d0d0d0" size="18" @click="contentedit(comment)">mdi-content-save-edit</v-icon>
              <v-icon color="#d0d0d0" size="18" @click="contentdel(comment)">mdi-delete</v-icon>
            </div>
          </v-col>
          <v-col cols="2">
            <a
              href="#comment-text"
              class="comment-replay"
              @click="commentreplay(comment.userprofile.username)"
            >回复</a>
          </v-col>
        </v-row>

        <v-row class="mt-1">
          <v-col cols="10">
            <v-textarea
              id="comment-text"
              v-model="commentext"
              outlined
              clearable
              background-color="#fbf7ed"
              label="评论"
              height="80px"
            ></v-textarea>
          </v-col>
          <v-col cols="2">
            <v-btn
              style=" position: relative;top: 20px;left:-20px"
              rounded
              depressed
              color="#4ABDCB"
              class="white--text"
              @click="comment"
            >发送</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    uid: null,
    uavatar: null,
    uname: "",

    card: null,
    id: "",
    title: "",
    pic: "",
    content: "",
    location: "",
    date: new Date().toISOString().substr(0, 10),
    menu: false,

    likeid: null,
    likecolor: "white",
    likeclass: "like-btn",
    likeUsers: [], //点赞用户列表

    commentId: null, //评论 ID
    commentext: "",
    comments: [] //评论列表
  }),
  computed: {
    // 使用对象展开运算符，将 mapState 对象混入到计算属性之中
    ...mapState([
      // 映射 this.auth 为 store.state.auth
      "auth",
      "user"
    ])
  },
  created() {
    const cardId = this.$route.params.cardId || null;
    const card = this.$route.params.card || null;
    if (cardId !== null) {
      if (card && cardId === card.id) {
        this.card = card;
        let obj = card;
        this.uid = obj.userprofile.id;
        this.uavatar = obj.userprofile.avatar;
        this.uname = obj.userprofile.username;
        this.id = obj.id;
        this.title = obj.title;
        this.pic = obj.pic;
        this.content = obj.content;
        this.location = obj.location;
        this.date = obj.date;
        this.likeUsers = obj.likeUsers;
        this.comments = obj.comments;

        if (this.auth && this.auth === true) {
          if (Array.isArray(this.likeUsers)) {
            const authUserId = this.user.userinfo.id;
            this.likeUsers.forEach(element => {
              if (element.userprofile.id === authUserId) {
                this.likeid = element.id;
                this.likecolor = "red";
              }
            });
          }
        }
      } else {
        this.axios
          .get(`/card/${cardId}/`)
          .then(response => {
            let obj = response.data;
            this.uid = obj.userprofile.id;
            this.uavatar = obj.userprofile.avatar;
            this.uname = obj.userprofile.username;
            this.id = obj.id;
            this.title = obj.title;
            this.pic = obj.pic;
            this.content = obj.content;
            this.location = obj.location;
            this.date = obj.date;

            this.likeUsers = obj.likeUsers;
            this.comments = obj.comments;

            if (this.auth && this.auth === true) {
              if (Array.isArray(this.likeUsers)) {
                const authUserId = this.user.userinfo.id;
                this.likeUsers.forEach(element => {
                  if (element.userprofile.id === authUserId) {
                    this.likeid = element.id;
                    this.likecolor = "red";
                  }
                });
              }
            }
          })
          .catch(error => {
            this.$store.dispatch("updateAlter", {
              msg: "查看失败",
              msgType: "error",
              msgShow: true
            });
            this.$router.back(-1);
          });
      }
    }
  },
  methods: {
    editcard() {
      this.$router.push({
        name: "Edit",
        params: { cardId: this.id, card: this.card }
      });
    },
    delcard() {
      const cardId = this.id;
      const headers = {
        Authorization: `jwt ${this.$store.state.user.token}`
      };
      this.axios
        .delete(`/card/${cardId}/`, { headers: headers })
        .then(response => {
          this.$store.dispatch("updateAlter", {
            msg: response.data.msg,
            msgType: "success",
            msgShow: true
          });
          this.$router.push({
            name: "Home"
          });
        })
        .catch(error => {
          this.$store.dispatch("updateAlter", {
            msg: "网络异常, 查看失败",
            msgType: "error",
            msgShow: true
          });
        });
    },

    like(e) {
      if (!this.auth) {
        this.$store.dispatch("updateAlter", {
          msg: "请先登录",
          msgType: "info",
          msgShow: true
        });
      } else {
        if (this.likecolor === "white") {
          const params = {
            userprofile: this.user.userinfo.id,
            card: this.id
          };
          const headers = {
            Authorization: `jwt ${this.$store.state.user.token}`
          };
          this.axios
            .post(`/like/`, params, { headers: headers })
            .then(response => {
              this.likeid = response.data.data.id;
              this.likecolor = "red";
              this.likeclass = "like-btn likeclass animated swing";
              this.likeUsers.push(response.data.data);
            })
            .catch(error => {
              this.$store.dispatch("updateAlter", {
                msg: "like失败",
                msgType: "error",
                msgShow: true
              });
            });
        } else {
          const headers = {
            Authorization: `jwt ${this.$store.state.user.token}`
          };
          this.axios
            .delete(`/like/${this.likeid}/`, { headers: headers })
            .then(response => {
              for (let likeUser of this.likeUsers) {
                if (likeUser.id === this.likeid) {
                  this.likeUsers.splice(this.likeUsers.indexOf(likeUser), 1);
                  break;
                }
              }
              this.likeid = null;
              this.likecolor = "white";
              this.likeclass = "like-btn";
            })
            .catch(error => {
              this.$store.dispatch("updateAlter", {
                msg: "like取消失败",
                msgType: "error",
                msgShow: true
              });
            });
        }
      }
    },

    clickcomment() {
      this.commentext = "";
      this.commentId = null;
      document.querySelector("#comment-text").focus();
    },
    comment() {
      if (!this.auth) {
        this.$store.dispatch("updateAlter", {
          msg: "请先登录",
          msgType: "info",
          msgShow: true
        });
      } else {
        if (this.commentId === null) {
          const params = {
            content: this.commentext,
            card: this.id,
            userprofile: this.user.userinfo.id
          };
          const headers = {
            Authorization: `jwt ${this.$store.state.user.token}`
          };
          this.axios
            .post(`/comment/`, params, { headers: headers })
            .then(response => {
              this.comments.push(response.data.data);
              this.commentId = null;
              this.commentext = "";
            })
            .catch(error => {
              this.$store.dispatch("updateAlter", {
                msg: "添加评论失败",
                msgType: "error",
                msgShow: true
              });
            });
        } else {
          const params = {
            content: this.commentext
          };
          const headers = {
            Authorization: `jwt ${this.$store.state.user.token}`
          };
          this.axios
            .put(`/comment/${this.commentId}/`, params, { headers: headers })
            .then(response => {
              for (let comment of this.comments) {
                if (comment.id === this.commentId) {
                  comment.content = this.commentext;
                  break;
                }
              }
              this.commentId = null;
              this.commentext = "";
              this.$store.dispatch("updateAlter", {
                msg: "修改评论成功",
                msgType: "success",
                msgShow: true
              });
            })
            .catch(error => {
              this.$store.dispatch("updateAlter", {
                msg: "修改评论失败",
                msgType: "error",
                msgShow: true
              });
            });
        }
      }
    },

    contentedit(comment) {
      this.commentext = comment.content;
      this.commentId = comment.id;
      document.querySelector("#comment-text").focus();
    },
    contentdel(comment) {
      const headers = {
        Authorization: `jwt ${this.$store.state.user.token}`
      };
      this.axios
        .delete(`/comment/${comment.id}/`, { headers: headers })
        .then(response => {
          for (let commentitem of this.comments) {
            if (commentitem.id === comment.id) {
              this.comments.splice(this.comments.indexOf(commentitem), 1);
              break;
            }
          }
          this.$store.dispatch("updateAlter", {
            msg: "删除评论成功",
            msgType: "success",
            msgShow: true
          });
        })
        .catch(error => {
          this.$store.dispatch("updateAlter", {
            msg: "删除评论失败",
            msgType: "error",
            msgShow: true
          });
        });
    },
    commentreplay(uname) {
      this.commentext = "回复" + uname + "：";
      this.commentId = null;
      document.querySelector("#comment-text").focus();
    },
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
.photo-ctn {
  -webkit-tap-highlight-color: transparent;
  font-size: 100%;
  position: relative;
}

.wp-btns {
  -webkit-tap-highlight-color: transparent;
  font-size: 100%;
  bottom: 15px;
  position: absolute;
  right: 10px;
}
.comment-btn {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  color: #fff;
  float: right;
  font-size: 12px;
  font-weight: lighter;
  height: 27px;
  line-height: 27px;
  min-width: 39px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: right;
  padding-left: 4px;
}
.icon-btnbg {
  -webkit-tap-highlight-color: transparent;
  font-size: 100%;
  float: right;
  display: inline-block;
  vertical-align: text-bottom;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAA2CAYAAAD3YagRAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABd0RVh0Q3JlYXRpb24gVGltZQAyMDE0LjYuMjdz2qYwAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAU9JREFUSImtlu1Kw0AQRY8NCAGhmjT6lj6DT+VD+CZ+tGD+CErFH6mw3MzuXIsLgc5mD7l3ZruzF8AD7fEEPBbxANxvEgjgTeIJwAFfJd654F7i0QE/gVnmLKnqD0yp6u8K6B1Q/e1+f2TgQeLRBZ8lnhzwO/iiJfUdOMqcJVUzeglszwGHcn0LrPrLQK3hrQtqKQYH/Dg95bCk6ubeUBS/Baq/LdA5oJZi1AWu1DsX1BoOuiACj6w9TrooAg8s/4yzwHL0pycFNaOrr/07mGa0Boa9IgNn1pvbAlVmR3FctMCo8OHu0smwpTmgJibMaAQ2z5ka+MVyCJfDkrpnvbktqervhuX0TsFqS8vAF3lX9aegtUcj8CypM8vVpByWVPXXs9wwUrDZ0lqgJqbprwStcyYCqxehFli96GWg+uuAawds3i5aYNpgauCfawjwAw7TQvoFhoY7AAAAAElFTkSuQmCC);
  background-size: 7px 27px;
  background-repeat: no-repeat;
  width: 7px;
  height: 27px;
}
.like-btn {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  color: #fff;
  float: right;
  font-size: 12px;
  font-weight: lighter;
  height: 27px;
  line-height: 27px;
  min-width: 39px;
  background-color: rgba(0, 0, 0, 0.5);
  padding-right: 4px;
}
.comment-line {
  border-bottom: 1px dotted #dededc;
}
.comment-content {
  position: relative;
  top: -6px;
}
.comment-replay {
  color: #a1a1a1;
  text-decoration: none;
}
</style>