<template class="d-flex">
  <v-card elevation="0" class="mb-3">
    <v-card-text
      class="title font-weight-bold d-flex justify-center"
      style="padding-bottom:0"
    >第{{th}}天 {{date}}</v-card-text>
    <span class="d-flex justify-center">
      <span class="circle"></span>
    </span>
    <span class="d-flex justify-center">
      <span class="wp-sep clear-both"></span>
    </span>

    <div v-for="(item, i) in cards" :key="i">
      <v-card
        class="px-2 pt-2 pb-1 mx-2"
        elevation="1"
        max-width="720px"
        style="margin:0 auto"
        @click="intocontent(item)"
      >
        <div class="photo-ctn" v-if="item.pic">
          <v-img
            :src="item.pic"
            lazy-src="https://picsum.photos/id/11/100/60"
            gradient="to right, rgba(0, 0, 0, 0.5) 0%, transparent"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <div class="wp-btns">
            <a class="comment-btn">
              <v-icon size="20" color="white" class="pt-1 mx-1 float-right">mdi-message</v-icon>
              <span>{{item.comments.length}}</span>
            </a>
            <i class="icon-btnbg"></i>
            <a :class="likeclass">
              <v-icon size="20" :color="likecolor" class="mx-1">mdi-cards-heart</v-icon>
              <span>{{item.likeUsers.length}}</span>
            </a>
          </div>
        </div>



        <v-card-text>
          <div class="text--primary">{{item.content}}</div>
        </v-card-text>

        <v-row>
          <v-col cols="7" class="d-flex align-center">
            <v-icon size="20" class="mr-1">mdi-calendar</v-icon>{{item.date}}
            <span class="body-1 cla"></span>
          </v-col>
          <v-col cols="5" class="d-flex flex-row-reverse" v-if="item.location">
            <v-chip color="teal" text-color="white">
              <v-avatar>
                <v-icon size="18">mdi-earth</v-icon>
              </v-avatar>
              {{item.location}}
            </v-chip>

          </v-col>
        </v-row>

      </v-card>

      <span class="d-flex justify-center" v-if="i!=cards.length-1">
        <span class="wp-sep clear-both"></span>
      </span>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true
    },
    th: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  data: () => ({
    img:
      "http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",
    likecolor: "white",
    likeclass: "like-btn"
  }),
  methods: {
    intocontent(item) {
      this.$router.push({
        name: "Content",
        params: {
          cardId: item.id,
          card: item
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

.circle {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 8px;
  border: 4px solid #e7ddc6;
  vertical-align: text-bottom;
}
.wp-sep {
  background: #e7ddc6;
  height: 18px;
  width: 4px;
}
</style>
