<template>
    <v-app-bar
      app
      flex
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
      class="pt-1"
    >

        <v-btn icon>
            <v-icon large >mdi-home</v-icon>
        </v-btn>
        
        <v-toolbar-title>
            <v-img
                alt="Vuetify Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                width="100"
                />
        </v-toolbar-title>


      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      
    </v-app-bar>
</template>

<script>
export default {
    name:'Header',

}
</script>

<style scoped>

</style>>

