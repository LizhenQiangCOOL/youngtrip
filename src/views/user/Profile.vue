<template>
  <v-card elevation="0">
    <v-card-title class="d-flex justify-center">编辑个人资料</v-card-title>
    <v-card-text>
      <form lazy-validation>
        <v-text-field v-model.trim="name" label="用户名" disabled></v-text-field>

        <v-select
          v-model="sex"
          :items="sexitems"
          :item-text="sexitems.text"
          :item-value="sexitems.value"
          label="性别"
          chips
        ></v-select>

        <v-textarea solo label="个性签名" messages="个性签名" clearable counter="100" v-model.trim="sign"></v-textarea>

        <v-btn color="success" @click="updateuser()">应用修改</v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    sexitems: [
      {
        text: "未选择",
        value: "0"
      },
      {
        text: "男",
        value: "male"
      },
      {
        text: "女",
        value: "female"
      }
    ],
    sex: "0",
    name: "",
    sign: "",
  }),
  created() {
    const user = this.$store.state.user;
    this.name = user.userinfo.user.username;
    this.sex = user.userinfo.sex;
    this.sign = user.userinfo.sign;
  },
  methods: {
    updateuser() {
        const id = this.$store.state.user.userinfo.id;
        const params = {
          sex: this.sex,
          sign: this.sign
        };
        const headers = {
          Authorization: `jwt ${this.$store.state.user.token}`
        };
        this.axios
          .patch(`/account/user/${id}/`, params, { headers: headers })
          .then(response => {
            this.$store.dispatch("updateUser", response.data.data);
            this.$store.dispatch("updateAlter", {
              msg: response.data.msg,
              msgType: "success",
              msgShow: true
            });
            this.msgtimer = setTimeout(() => {
              this.$store.dispatch("updateAlter", { msgShow: false });
            }, 3300);
          })
          .catch(error => {
            this.$store.dispatch("updateAlter", {
              msg: "修改失败",
              msgType: "error",
              msgShow: true
            });
            this.msgtimer = setTimeout(() => {
              this.$store.dispatch("updateAlter", { msgShow: false });
            }, 3300);
          });
      
    }
  }
};
</script>

<style>
</style>