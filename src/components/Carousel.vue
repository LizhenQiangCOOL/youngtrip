<template>
  <v-carousel cycle height="180" :show-arrows="false" hide-delimiter-background class="px-3 pt-4">
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
  
      items: [
        {
          src: "http://photos.breadtrip.com/covers_2019_12_02_bc50571b6df881e0032e160c517ddc77.jpg?imageView/2/w/960/"
        },
        {
          src: "http://photos.breadtrip.com/covers_2019_02_14_424e0f1c242c8282e09d05e10ad8bad8.jpg?imageView/2/w/960/"
        },
        {
          src: "http://photos.breadtrip.com/covers_2018_07_18_0eb8e1f2c8769a9813a5e5f5e308f364.jpg?imageView/2/w/960/"
        },
        {
          src: "http://photos.breadtrip.com/covers_2019_01_25_b3df653037bcf7b8aeaa6a3bb2355974.jpg?imageView/2/w/960/"
        },
        {
          src:"http://photos.breadtrip.com/covers_2019_07_18_c19646d22d89ba04a0884f493f737c4a.jpg?imageView/2/w/960/"
        }
      ]
    };
  }
};
</script>

<style>
</style>