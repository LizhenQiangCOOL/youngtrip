<template>
  <v-card elevation="0">
    <v-card-title class="d-flex justify-center">请输入头像地址</v-card-title>
    <v-card-text>
      <form lazy-validation>
        <v-label>头像预览:</v-label>

        <v-img
          class="ma-3"
          :src="avatar"
          lazy-src="https://picsum.photos/id/11/100/60"
          alt="图像加载出错"
        ></v-img>

        <v-text-field
          v-model.trim="avatar"
          :error-messages="avatarErrors"
          label="头像地址"
          required
          @blur="$v.avatar.$touch()"
        ></v-text-field>

        <v-btn color="success" @click="updateuser()" large>上传头像</v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, url } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    avatar: { required, url }
  },

  data: () => ({
    avatar: ""
  }),
  created() {
    const user = this.$store.state.user;
    this.avatar = user.userinfo.avatar;
  },
  computed: {
    avatarErrors() {
      const errors = [];
      if (!this.$v.avatar.$dirty) return errors;
      !this.$v.avatar.url && errors.push("头像地址为网络地址");
      !this.$v.avatar.required && errors.push("头像地址不可为空");
      return errors;
    }
  },
  methods: {
    updateuser() {
      const id = this.$store.state.user.userinfo.id;
      const params = {
        avatar: this.avatar,
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
          this.timer = setTimeout(() => {
            this.$store.dispatch("updateAlter", { msgShow: false });
          }, 3300);
        })
        .catch(error => {
          this.$store.dispatch("updateAlter", {
            msg: "修改失败",
            msgType: "error",
            msgShow: true
          });
          this.timer = setTimeout(() => {
            this.$store.dispatch("updateAlter", { msgShow: false });
          }, 3300);
        });
    }
  }
};
</script>

<style>
</style>