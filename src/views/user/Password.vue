<template>
  <v-card elevation="0" class="pa-3">
    <v-card-title class="d-flex justify-center">{{cardtitle}}</v-card-title>
    <v-card-text>
      <form lazy-validation>
        <v-text-field
          v-model.trim="password"
          :error-messages="passwordErrors"
          :append-icon="showpassword? 'mdi-eye' : 'mdi-eye-off'"
          :type="showpassword? 'text':'password'"
          label="密码"
          required
          @blur="$v.password.$touch()"
          @click:append="showpassword = !showpassword"
        ></v-text-field>

        <v-text-field
          v-model.trim="repassword"
          :error-messages="repasswordErrors"
          :append-icon="showrepassword? 'mdi-eye' : 'mdi-eye-off'"
          :type="showrepassword? 'text':'password'"
          label="确认密码"
          required
          @blur="$v.repassword.$touch()"
          @click:append="showrepassword = !showrepassword"
        ></v-text-field>

        <v-btn large color="success" @click="updateuser()" v-if="enSureBtn">确认修改</v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  alphaNum,
  email,
  numeric
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    password: { required, maxLength: maxLength(16), minLength: minLength(6) },
    repassword: { required, maxLength: maxLength(16), minLength: minLength(6) }
  },
  props: {
    cardtitle: {
      type: String,
      required: true
    },
    enSureBtn: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    password: "",
    repassword: "",
    showpassword: false,
    showrepassword: false,
  }),
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength && errors.push("密码最长16个字符串");
      !this.$v.password.minLength && errors.push("密码最短6个字符串");
      !this.$v.password.required && errors.push("密码必填");
      return errors;
    },
    repasswordErrors() {
      const errors = [];
      if (!this.$v.repassword.$dirty) return errors;
      !(this.$v.password.$model === this.$v.repassword.$model) &&
        errors.push("输入的该项不匹配");
      return errors;
    }
  },
  methods: {
    updateuser() {
      this.$v.$touch();
      if (!this.$v.$error) {
        const id = this.$store.state.user.userinfo.id;
        const params = {
          password: this.password
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
    },
    getEerrors() {
      this.$v.$touch();
      return !this.$v.$error;
    },
    getVals() {
      return { password: this.password };
    }
  }
};
</script>

<style>
</style>