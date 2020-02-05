<template>
  <v-card class="mx-3 mt-4">
    <v-card-title class="d-flex justify-center">记录游记</v-card-title>
    <v-card-text>
      <form lazy-validation>
        <v-text-field v-model.trim="title" label="标题"></v-text-field>
        <v-file-input
          v-model="pic"
          accept="image/*"
          show-size
          label="封面图"
          prepend-icon="mdi-camera"
        ></v-file-input>
        <v-textarea solo label="内容" messages="内容" clearable counter="300" v-model.trim="content"></v-textarea>
        <v-text-field v-model.trim="location" label="地点"></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Picker in menu"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">取消</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">确定</v-btn>
          </v-date-picker>
        </v-menu>

        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn color="success" @click="cardcreate">提交</v-btn>
          </v-col>
        </v-row>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    title: "",
    pic: null,
    content: "",
    location: "",
    date: new Date().toISOString().substr(0, 10),
    menu: false
  }),

  methods:{
      cardcreate(){
          console.log(this.title, this.pic, this.content, this.location, this.date)
      }
  },
};
</script>

<style>
</style>