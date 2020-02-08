<template>
    <v-carousel  cycle height="30vh" :show-arrows="false" hide-delimiter-background class="px-3 pt-4">
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
          src: `${process.env.VUE_APP_IMGURL}img/carousel1.jpg`
        },
        {
          src: `${process.env.VUE_APP_IMGURL}img/carousel2.jpg`
        },
        {
          src: `${process.env.VUE_APP_IMGURL}img/carousel3.jpg`
        },
      ]
    };
  }
};
</script>

<style>
</style>