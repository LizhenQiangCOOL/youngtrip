<template>
  <div>
    <v-card class="mx-3 mt-4" elevation="0">
      <v-img :src="pic" :lazy-src="lazyimg">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <div v-html="rich" class="rich mt-4"></div>
    </v-card>
  </div>
</template>

<script>
export default {
  created() {
    const slideId = this.$route.params.slideId || null;
    const slide = this.$route.params.slide || null;
    if (slideId !== null) {
      if (slide && slideId === slide.id) {
        this.id = slide.id
        this.rich = slide.content
        this.pic = slide.pic
      } else {
        this.axios
          .get(`/slide/${slideId}/`)
          .then(response => {
            let obj = response.data;
            this.id = obj.id
            this.rich = obj.content
            this.pic = obj.pic
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
    id:null,
    pic: '',
    rich: '',
    lazyimg:`${process.env.VUE_APP_IMGURL}img/lazyimg.jpg`
  }),

  methods: {
    //  给
    rechesHandle(data) {
      let fn_result = data;
      fn_result = fn_result.replace(/(&nbsp;)/g, "");
      fn_result = fn_result.replace(
        "<html><head><title></title></head><body>",
        ""
      );
      fn_result = fn_result.replace("</body></html>", "");
      return fn_result;
    }
  }
};
</script>

<style scoped>
.rich >>> img {
  display: block;
  margin: 0 auto;
  max-width: 100% !important;
  height: auto !important;
}
.rich >>> p {
  max-width: 100%;
  word-break: break-all;
  font-size: 15px !important;
}
.rich >>> span {
  max-width: 100%;
  word-break: break-all;
  font-size: 15px !important;
}
.rich >>> table {
  width: 100%;
}
</style>