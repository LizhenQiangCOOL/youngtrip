<template>
  <v-app>
    <Header/>

    

    <v-content>
      <Carousel/>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>

    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

import Header from '@/components/layouts/Header';
import Carousel from '@/components/Carousel';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Header,
    Carousel,
  },

  data: () => ({
    //
  }),
};
</script>
