<template>
   <v-card 
     class=" mx-3 mt-4"
   >
     <v-img 
       :src="img"
       height="180"
       gradient="to left, rgba(100,115,201,.33), rgba(25,32,72,.7)"
     >
          <v-card-title class="font-weight-black white--text"  v-text="title"></v-card-title>
          <v-card-subtitle class="font-weight-regular HomeCard-detail white--text">{{subtitle}}</v-card-subtitle>

          <v-card-text class="HomeCard-bottom">
                    <v-avatar size="30">
                    <img
                      :src="avatar"
                      :alt="author"
                    >
                    </v-avatar>
                    <span class="ml-2 white--text font-weight-bold caption">
                      <i>by</i>
                      {{author}}
                    </span>
          </v-card-text>
     </v-img>
   </v-card>
</template>

<script>
export default {
    name:'HomeCard',
    data: ()=>({
        img:'http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85',
        title: '非洲海岛流浪记🇲🇺毛里求斯cdn',
        subtitle:'2019.10.1   9025浏览',
        avatar:'https://api.adorable.io/avatars/200/asfdafasdf.png',
        author:'小一爱客随'
    }),
}
</script>

<style scoped>
 .HomeCard-detail:before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    margin: 0 5px 0 0;
    border-radius: 1px;
    background: #4abdcc;
}

.HomeCard-bottom{
  position: absolute;
  bottom: 11px;
  left: 0;
  font-size: 1rem;
}
</style>
