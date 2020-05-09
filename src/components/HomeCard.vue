<template class="d-flex">
  <v-card elevation="0">
    <v-card
      class="px-3 pt-3 pb-1"
      elevation="0"
      max-width="720px"
      style="margin:0 auto"
      @click="intocontent"
    >
      <v-img
         class="handelheight"
        :src="img"
        :lazy-src="lazyimg"
        gradient="to right, rgba(0, 0, 0, 0.5) 0%, transparent"
      >
        <!-- 图片加载转圈 -->
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>

        <v-card-title class="font-weight-black white--text" v-text="title"></v-card-title>
        <v-card-subtitle class="font-weight-regular body-2">
          <v-card class="HomeCard-detail" color="transparent" elevation="0">
            <span class="mx-2 white--text" v-show="subtitle!=='null null'">{{subtitle}}</span>
          </v-card>
        </v-card-subtitle>

        <v-card-text class="HomeCard-bottom" v-show="!avatarhidden">
          <v-avatar size="30">
            <img :src="avatar" :alt="author" />
          </v-avatar>
          <span class="ml-2 white--text font-weight-regular body-2">
            <i>by</i>
            {{author}}
          </span>
        </v-card-text>
      </v-img>
    </v-card>
    <v-card-actions class="ml-2" v-if="tripdelflag && tripdelflag==true">
      <v-chip class="ma-2" color="green" text-color="white" @click="deltrip(card)">
        <v-avatar left>
          <v-icon>mdi-delete</v-icon>
        </v-avatar>删除
      </v-chip>
      <v-chip class="ma-2" color="green" text-color="white" @click="edittrip(card)">
        <v-avatar left>
          <v-icon>mdi-content-save-edit</v-icon>
        </v-avatar>修改
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    uid: {
      type: Number,
      required: true
    },
    avatarhidden: {
      type: Boolean,
      required: true
    },
    flag: {
      type: Boolean,
      required: true
    },
    tripdelflag: {
      type: Boolean,
      required: false
    }
  },
  data: () => ({
    lazyimg: `${process.env.VUE_APP_IMGURL}img/lazyimg.jpg`
  }),
  methods: {
    intocontent() {
      if (this.flag) {
        this.$router.push({
          name: "Trip",
          params: { tripId: this.id, trip: this.card }
        });
      } else {
        this.$router.push({
          name: "Content",
          params: {
            cardId: this.id,
            card: this.card
          }
        });
      }
    },
    deltrip(item) {
      this.$emit("deltrip", item);
    },
    edittrip(item) {
      this.$emit("edittrip", item);
    }
  }
};
</script>

<style scoped>
.handelheight{height: 30vh;}
@media (min-width:600px) and (max-width:960px){
  .handelheight{height: 35vh;}
}
@media (min-width:960px){
  .handelheight{height: 40vh;}
}


.HomeCard-detail:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 88%;
  margin: 0 5px 0 0;
  border-radius: 1px;
  background: #4abdcc;
}

.HomeCard-bottom {
  position: absolute;
  bottom: 0px;
  left: 0;
  font-size: 1rem;
}
</style>
