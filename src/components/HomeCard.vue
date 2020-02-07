<template class="d-flex">
  <v-card class="px-3 pt-4"  elevation="0" max-width="720px" style="margin:0 auto" :to="'/cards/'+this.id+'/content'">
    <v-img :src="img" height="30vh" gradient="to right, rgba(0, 0, 0, 0.5) 0%, transparent">
      <v-card-title class="font-weight-black white--text" v-text="title"></v-card-title>
      <v-card-subtitle class="font-weight-regular body-2">
        <v-card class="HomeCard-detail" color="transparent" elevation="0">
          <span class="mx-2 white--text">{{subtitle}}</span>
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
</template>

<script>
export default {
  props: {
    id:{
      type:Number,
      required:true
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
    uid:{
      type:Number,
      required:true
    },
    avatarhidden:{
      type: Boolean,
      required: true
    }
  },
  data: () => ({})
};
</script>

<style scoped>
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
