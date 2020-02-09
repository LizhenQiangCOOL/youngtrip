<template class="d-flex">
  <v-card elevation="0" max-width="720px" style="margin:0 auto">
    <v-img
      :src="bgimg"
      height="40vh"
      gradient="to right, rgba(0, 0, 0, 0.5) 0%, transparent"
    >
      <v-card-text>
        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn icon>
              <v-avatar size="60">
                <img :src="avatar" alt />
              </v-avatar>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            class="d-flex justify-center title pt-5 white--text"
          >{{ author }}</v-col>
        </v-row>
      </v-card-text>
    </v-img>
  </v-card>
</template>


<script>
export default {
  props: {
    id:{
        type:Number,
        required:true
    },
    avatar: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
  },
  data: () => ({
      bgimg:`${process.env.VUE_APP_IMGURL}img/bg.jpg`,
  })
};
</script>

<style>
</style>