<template>
  <v-card elevation="0">
    <TripHeader
      :id="uid"
      :avatar="uavatar"
      :author="uname"
      :likecount="likecount"
      :commentcount="commentcount"
      :title="title"
      :picurl="picurl"
      :days="cards.length"
      @dumpuser="dumpuser"
    />

    <p
      v-if="cards.length === 0"
      class="body-1 font-weight-medium d-flex justify-center pt-4"
    >该游记没有任何卡片！</p>

    <div v-for="(item, i) in cards" :key="i" v-else>
      <TripCard :cards="item.data" :th="item.delta" :date="item.date"></TripCard>
    </div>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import TripCard from "@/components/TripCard";
import TripHeader from "@/views/user/TripHeader";

export default {
  components: {
    TripCard,
    TripHeader
  },
  created() {
    const tripId = this.$route.params.tripId || null;
    const trip = this.$route.params.trip || null;

    if (tripId !== null) {
      if (trip && trip.id === tripId) {
        let obj = trip;
        this.uid = obj.userprofile.id;
        this.uavatar = obj.userprofile.avatar;
        this.uname = obj.userprofile.username;

        this.id = obj.id;
        this.likecount = obj.likecount;
        this.commentcount = obj.commentcount;
        this.title = obj.title;
        this.picurl = obj.pic;

        this.firstday = obj.firstday

        let newcards = [];
        let date = null;
        obj.cards.forEach(element => {
          if (element.dateD === date) {
            newcards[newcards.length - 1]["data"].push(element);
          } else {
            date = element.dateD;
            newcards.push({
              delta: this.SectionToChinese(
                this.getDaysBetween(
                  this.stringToDate(this.firstday),
                  this.stringToDate(date)
                ) + 1
              ),
              date: date,
              data: [element]
            });
          }
        });
        this.cards = newcards;
      } else {
        this.axios
          .get(`/trip/${tripId}/`)
          .then(response => {
            let obj = response.data;
            
            this.uid = obj.userprofile.id;
            this.uavatar = obj.userprofile.avatar;
            this.uname = obj.userprofile.username;

            this.id = obj.id;
            this.likecount = obj.likecount;
            this.commentcount = obj.commentcount;
            this.title = obj.title;
            this.picurl = obj.pic;

       
            this.firstday = obj.firstday

            let newcards = [];
            let date = null;
            obj.cards.forEach(element => {
              if (element.dateD === date) {
                newcards[newcards.length - 1]["data"].push(element);
              } else {
                date = element.dateD;
                newcards.push({
                  delta: this.SectionToChinese(
                    this.getDaysBetween(
                      this.stringToDate(this.firstday),
                      this.stringToDate(date)
                    ) + 1
                  ),
                  date: date,
                  data: [element]
                });
              }
            });
            this.cards = newcards;
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
  data: () => ({
    uid: 1,
    uavatar: "",
    uname: "admin",

    id: null,
    likecount: 0,
    commentcount: 0,
    title: "",
    picurl: "",
    cards: [],

    firstday: null,
    homecardsItems: [
      {
        userprofile: {
          id: 2,
          username: "zhangsan",
          avatar: "https://api.adorable.io/avatars/200/test1.png"
        },
        id: 7,
        title: "这是一篇测试",
        pic: "https://xn--m83a.top/media/card/200402_203518.jpg",
        content: "测试",
        location: "北京",
        date: "2020-04-02 06:25:00",
        likeUsers: [],
        comments: []
      },
      {
        userprofile: {
          id: 1,
          username: "admin",
          avatar: "https://api.adorable.io/avatars/200/admin.png"
        },
        id: 1,
        title: "新墨西哥州Albuquerque# 浪漫的热气球节和似雪的白色沙滩",
        pic: "https://xn--m83a.top/media/card/image/homecard1.jpg",
        content:
          "暑假从国内回来，我们就准备着自驾前往新墨西哥州参加全世界最大的热气球节。先来说说我们这三天的行程安排，由于我和谢博士都喜欢自由散漫的旅行方式，我们这次的行程也没有安排得太紧。主要活动是【Albuquerque热气球节-白色沙漠-Santa Fe（新墨西哥州的州府）】",
        location: "墨西哥",
        date: "2020-02-06 08:00:00",
        likeUsers: [
          {
            id: 95,
            userprofile: {
              id: 1,
              username: "admin",
              avatar: "https://api.adorable.io/avatars/200/admin.png"
            }
          },
          {
            id: 45,
            userprofile: {
              id: 2,
              username: "zhangsan",
              avatar: "https://api.adorable.io/avatars/200/test1.png"
            }
          },
          {
            id: 46,
            userprofile: {
              id: 3,
              username: "lisi",
              avatar: "https://api.adorable.io/avatars/200/test2.png"
            }
          }
        ],
        comments: [
          {
            id: 2,
            userprofile: {
              id: 2,
              username: "zhangsan",
              avatar: "https://api.adorable.io/avatars/200/test1.png"
            },
            content: "我要评论了哦啊",
            date: "2020-02-08 16:01:56"
          },
          {
            id: 3,
            userprofile: {
              id: 3,
              username: "lisi",
              avatar: "https://api.adorable.io/avatars/200/test2.png"
            },
            content: "评论",
            date: "2020-02-08 16:02:47"
          },
          {
            id: 5,
            userprofile: {
              id: 1,
              username: "admin",
              avatar: "https://api.adorable.io/avatars/200/admin.png"
            },
            content: "在此评测在此",
            date: "2020-02-08 20:46:23"
          },
          {
            id: 10,
            userprofile: {
              id: 1,
              username: "admin",
              avatar: "https://api.adorable.io/avatars/200/admin.png"
            },
            content: "测试",
            date: "2020-02-08 21:36:00"
          }
        ]
      },
      {
        userprofile: {
          id: 2,
          username: "zhangsan",
          avatar: "https://api.adorable.io/avatars/200/test1.png"
        },
        id: 2,
        title: "非洲海岛流浪记",
        pic: "https://xn--m83a.top/media/card/image/homecard2.jpg",
        content:
          "酒店有随处可见的美丽风景，也有随处可见的超舒服的沙发让人relax，看到很多情侣就躺在沙发上看看风景看看书喝喝饮料发发呆，让人不禁感叹这才是享受生活呐！",
        location: "非洲",
        date: "2020-02-06 08:00:00",
        likeUsers: [
          {
            id: 70,
            userprofile: {
              id: 1,
              username: "admin",
              avatar: "https://api.adorable.io/avatars/200/admin.png"
            }
          }
        ],
        comments: [
          {
            id: 11,
            userprofile: {
              id: 1,
              username: "admin",
              avatar: "https://api.adorable.io/avatars/200/admin.png"
            },
            content: "评论一下",
            date: "2020-02-09 19:57:23"
          }
        ]
      },
      {
        userprofile: {
          id: 3,
          username: "lisi",
          avatar: "https://api.adorable.io/avatars/200/test2.png"
        },
        id: 3,
        title: "滇川藏区，从泸沽湖畔到稻城亚丁",
        pic: "https://xn--m83a.top/media/card/image/homecard3.jpg",
        content:
          "秋天是祖国各地最美的时候，10月中旬的高原地区，天高气爽，碧空如洗，层林尽染，金黄遍地。我们从成都出发自驾，沿着“天路”雅西高速过西昌进云南，穿过如仙女般的泸沽湖，取道丽江，过虎跳峡和小中甸到香格里拉，看过普达措的蜀都湖又转过松赞林寺的转经筒，一路北上去德钦的飞来寺欣赏梅里雪山的日照金山，然后回到四川，来到天堂般的稻城亚丁。后面他们还要接着沿G317去色达、黑水和毕棚沟，我因为没假就从亚丁机场返程。",
        location: "中国,迪庆藏族自治州",
        date: "2020-02-06 08:00:00",
        likeUsers: [
          {
            id: 77,
            userprofile: {
              id: 1,
              username: "admin",
              avatar: "https://api.adorable.io/avatars/200/admin.png"
            }
          }
        ],
        comments: []
      },
      {
        userprofile: {
          id: 4,
          username: "anni",
          avatar: "https://api.adorable.io/avatars/200/test3.png"
        },
        id: 4,
        title: "大寫的墨西哥",
        pic: "https://xn--m83a.top/media/card/image/homecard4.jpg",
        content: "半夜的航班讓我很困",
        location: "古巴,哈瓦那",
        date: "2020-02-06 08:00:00",
        likeUsers: [],
        comments: [
          {
            id: 13,
            userprofile: {
              id: 1,
              username: "admin",
              avatar: "https://api.adorable.io/avatars/200/admin.png"
            },
            content: "你需要评论吗？？",
            date: "2020-02-10 11:50:41"
          }
        ]
      },
      {
        userprofile: {
          id: 2,
          username: "zhangsan",
          avatar: "https://api.adorable.io/avatars/200/test1.png"
        },
        id: 5,
        title: "【马尔代夫】掉进果冻色的梦",
        pic: "https://xn--m83a.top/media/card/image/homecard5.jpg",
        content:
          "辛苦忙碌了一年，到2019年末终于下定决心出门好好放松一下，果断请了一直不敢请的5天年假。休假最主要的目的之一也是陪老妈好好放松下，于是把选择权给了她，而老妈怀揣着年轻时的满腔向往选择了马代。就这样开始了做攻略预订出行的一系列工作。马尔代夫是著名的“一岛一酒店”，出行前最重要的就是选择要去的岛，之后除了想要换岛体验的情况之外，就可以上岛开始无需辗转的度假时光了。",
        location: "马尔代夫",
        date: "2020-02-06 08:00:00",
        likeUsers: [],
        comments: []
      },
      {
        userprofile: {
          id: 1,
          username: "admin",
          avatar: "https://api.adorable.io/avatars/200/admin.png"
        },
        id: 6,
        title: "天上人间",
        pic: "https://xn--m83a.top/media/card/image/homecard5.jpg",
        content: "乐趣无穷 哥哥哥",
        location: "杭州",
        date: "2020-02-06 08:00:00",
        likeUsers: [
          {
            id: 94,
            userprofile: {
              id: 1,
              username: "admin",
              avatar: "https://api.adorable.io/avatars/200/admin.png"
            }
          },
          {
            id: 89,
            userprofile: {
              id: 2,
              username: "zhangsan",
              avatar: "https://api.adorable.io/avatars/200/test1.png"
            }
          }
        ],
        comments: [
          {
            id: 12,
            userprofile: {
              id: 1,
              username: "admin",
              avatar: "https://api.adorable.io/avatars/200/admin.png"
            },
            content: "评论一下把",
            date: "2020-02-10 12:32:46"
          }
        ]
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
    stringToDate: function(dateStr, separator) {
      if (!separator) {
        separator = "-";
      }
      let dateArr = dateStr.split(separator);
      let year = parseInt(dateArr[0]);
      let month;
      //处理月份为04这样的情况
      if (dateArr[1].indexOf("0") == 0) {
        month = parseInt(dateArr[1].substring(1));
      } else {
        month = parseInt(dateArr[1]);
      }
      let day = parseInt(dateArr[2]);
      let date = new Date(year, month - 1, day);
      return date;
    },

    getDaysBetween(dateString1, dateString2) {
      let startDate = Date.parse(dateString1);
      let endDate = Date.parse(dateString2);
      let days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
      return days;
    },
    SectionToChinese(section) {
      var chnNumChar = [
        "零",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九"
      ];
      var chnUnitChar = ["", "十", "百", "千", "万", "亿", "万亿", "亿亿"];
      var strIns = "",
        chnStr = "";
      var unitPos = 0;
      var zero = true;
      while (section > 0) {
        var v = section % 10;
        if (v === 0) {
          if (!zero) {
            zero = true;
            chnStr = chnNumChar[v] + chnStr;
          }
        } else {
          zero = false;
          strIns = chnNumChar[v];
          strIns += chnUnitChar[unitPos];
          chnStr = strIns + chnStr;
        }
        unitPos++;
        section = Math.floor(section / 10);
      }
      return chnStr;
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

<style>
</style>