<template>
  <v-card class="mx-3 mt-4 ">
    
    <!-- <v-img :src="img" height="180" gradient="to left, rgba(100,115,201,.33), rgba(25,32,72,.7)">
      <v-card-title class="font-weight-black white--text" v-text="title"></v-card-title>
      <v-card-subtitle class=" HomeCard-detail font-weight-regular  white--text" >
        {{subtitle}}
        </v-card-subtitle>

      <v-card-text class="HomeCard-bottom">
        <v-avatar size="30">
          <img :src="avatar" :alt="author" />
        </v-avatar>
        <span class="ml-2 white--text font-weight-bold caption">
          <i>by</i>
          {{author}}
        </span>
      </v-card-text>
    </v-img> -->

      <v-img :src="img" height="180" gradient="to left, rgba(100,115,201,.33), rgba(25,32,72,.7)">
      <v-card-title class="font-weight-black white--text" v-text="title"></v-card-title>
      <v-card-subtitle class=" font-weight-regular body-2 " >
          <v-card class="HomeCard-detail" color="transparent" elevation="0">
            <span class="mx-2 white--text"> {{subtitle}}</span>
          </v-card>
        </v-card-subtitle>

      <v-card-text class="HomeCard-bottom">
        <v-avatar size="30">
          <img :src="avatar" :alt="author" />
        </v-avatar>
        <span class="ml-2 white--text  font-weight-regular body-2">
          <i>by</i>
          {{author}}
        </span>
      </v-card-text>
    </v-img>

  </v-card>
</template>

<script>
export default {
  props:{
    img:{
      type: String,
      required:true,
    },
    title:{
      type: String,
      required:true,
    },
    subtitle:{
      type: String,
      required:true,
    },
    avatar:{
      type: String,
      required:true,
    },
    author:{
      type: String,
      required:true,
    }
  },
  data: () => ({
  })
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
  bottom: 11px;
  left: 0;
  font-size: 1rem;
}

</style>
