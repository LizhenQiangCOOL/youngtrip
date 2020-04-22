<template>
  <v-carousel cycle height="30vh" :show-arrows="false" hide-delimiter-background class="px-3 pt-4">
    <v-carousel-item
      v-for="item in slides"
      :key="item.id"
      :src="item.pic"
      @click="enterSlide(item)"
      style="cursor:pointer"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  created() {
    this.axios
      .get(`/slide/`)
      .then(response => {
        this.slides = response.data;
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
  data() {
    return {
      items: [
        {
          src: `${process.env.VUE_APP_IMGURL}img/carousel1.jpg`
        },
        {
          src: `${process.env.VUE_APP_IMGURL}img/carousel2.jpg`
        },
        {
          src: `${process.env.VUE_APP_IMGURL}img/carousel3.jpg`
        }
      ],
      slides: []
    };
  },
  methods: {
    enterSlide(item) {
      this.$router.push({
        name: "Slide",
        params: { slideId: item.id, slide:item }
      });
    }
  }
};
</script>

<style>
</style>