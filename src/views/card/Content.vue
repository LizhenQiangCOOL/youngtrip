<template>
  <v-card class="mx-3 mt-4">
    <v-card-text>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn icon>
            <v-avatar v-on="on" size="60">
              <img src="https://api.adorable.io/avatars/200/admin.png" alt />
            </v-avatar>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="d-flex justify-center"
          style="font-size: 12px;color: #999;padding-top:20px;"
        >by name</v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex justify-center">
          <h2>标题</h2>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="6">
          <h2>时间</h2>
        </v-col>
        <v-col cols="6">
          <h2>地点</h2>
        </v-col>
      </v-row>
      <div class="photo-ctn">
        <v-img
          src="http://photos.breadtrip.com/photo_2019_10_13_0eac9e3e0592219ae5c8cf068b63078b.jpg?imageView/2/w/640/q/85"
        ></v-img>

        <div class="photo-mask">
          <div class="photo-mask-left float-left"></div>
          <div class="photo-mask-arrow-left float-left"></div>
          <div class="photo-mask-arrow-right float-left"></div>
          <div class="photo-mask-right float-left"></div>
        </div>
        <div class="wp-btns">
          <a class="comment-btn">
            <i class="icon-comment"></i>
            <span>0</span>
          </a>
          <i class="icon-btnbg"></i>
          <a class="like-btn">
            <i class="icon-like"></i>
            <span>3</span>
          </a>
        </div>
      </div>
      <!-- <v-textarea solo label="内容" messages="内容" clearable counter="300" v-model.trim="content"></v-textarea> -->
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    title: "",
    pic: null,
    content: "",
    location: "",
    date: new Date().toISOString().substr(0, 10),
    menu: false
  }),

  methods: {
    cardcreate() {
      console.log(this.title, this.pic, this.content, this.location, this.date);
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

.photo-mask {
  -webkit-tap-highlight-color: transparent;
  font-size: 100%;
  bottom: 0;
  height: 5px;
  position: absolute;
  width: 100%;
  display: -webkit-box;
}
.photo-mask-left {
  -webkit-tap-highlight-color: transparent;
  font-size: 100%;
  background: #fff;
  height: 5px;
  width: 10px;
}
.photo-mask-arrow-left {
  -webkit-tap-highlight-color: transparent;
  font-size: 100%;
}
.photo-mask-arrow-right {
  -webkit-tap-highlight-color: transparent;
  font-size: 100%;
  width: 0;
  height: 0;
  border-bottom: 5px solid #fff;
  border-left: 5px solid transparent;
}
.photo-mask-right {
  -webkit-tap-highlight-color: transparent;
  font-size: 100%;
  background: #fff;
  height: 5px;
  -webkit-box-flex: 1;
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
.icon-comment {
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  font-weight: lighter;
  line-height: 27px;
  text-align: right;
  font-size: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC42LjI3c9qmMAAAANVJREFUSInt1iFqA0EUgOE/Kwo5QGxC1aqeITYqalWPENvTFHqDqlXVOUEgPUF0IAQSCI35K7q7YqCF3Q47Zn435r0PnhkA1Ee1Vr8cp526anajgjpXzyMBwqoWMlHfgYo0HYEFcCuAZSIEwAx4AiiAh4QQ2v1FYkRXhoRlSFiGhGVIWIaEZUhYAdwTG+4tZJsQcQI+W8gLcE0E2QC37qWW6ofjfp7Xze6fz3Pf1MMfC97Uac95USEX9bn/tLiQvVoOQcSEvPY9RWzI4FPEhNT/OcVvkG/WzyVTsIX20QAAAABJRU5ErkJggg==);
  width: 17px;
  height: 14px;
  background-size: cover;
  display: block;
  margin: 0 7px 0 4px;
  float: right;
  position: relative;
  top: 6px;
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
.icon-like {
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  font-weight: lighter;
  line-height: 27px;
  font-size: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAKwwAACsMBNCkkqwAAABd0RVh0Q3JlYXRpb24gVGltZQAyMDE0LjYuMjdz2qYwAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAb5JREFUSInFlz1LHFEUhp+rsJVgJVgJQiBg2DpslUAQhECqhcD+Cf+BlX9CSL1VsAimSmMh2mglgoUQCAYCYruwIfCk2DsymZ3Z+do4bzNw73nf8zDDzLkTyJG6C3wABqnla+BrCOFznifjHwLvgX5q+QL4EkL4lqnNDdhWT1ysc7U/7wa1H/cX6UTdToP8A6OO1ElJSKI/6kEG4iCuV9FE/TgHor5RpxVD0jpSe/FaV9PYF5Wg9oAb4EXZsy/QD2CrofcOeAX8XgGGLSBoAUHsOwRIQLrUE0ibu7EMvUxA1jsGWU9AfnUM8jMBOesY5CwBGXcMMgZYCSFcdQgzBq4AAoC6AZzzvG/Qd+A18ACzR0MI4QF4x+xL9xy6A97GvvNSN9XLBnOjji7VzVTPwqPAmnr6nyBO1bVMv3yQuNlTj5cMcexswGZ7FYPEglWbjfc8HamrBX0Wg6QKD1tCHJbkVwOJxfsNIfYrZFcHiYaR1U9xU3VUMbceSDTtWX6unah7NTLrg0TjQH0sgHhUB+UpSwCJ5h31PgNxr+40yGoOEgO21NsIcas2Oru2BokhG+onZ0OzacbT70Q7miXpL0JKXd49hnWgAAAAAElFTkSuQmCC);
  width: 17px;
  height: 14px;
  background-size: cover;
  display: block;
  margin: 0 4px 0 7px;
  float: left;
  position: relative;
  top: 6px;
}
</style>