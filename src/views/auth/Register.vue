<template>
  <v-card class="mx-3 mt-4">
    <v-card-title class="d-flex justify-center">欢迎注册</v-card-title>
    <v-card-text>
      <form lazy-validation>
        <v-text-field
          v-model.trim="name"
          :error-messages="nameErrors"
          :counter="10"
          label="用户名"
          required
          clearable
          @blur="$v.name.$touch()"
        ></v-text-field>

        <v-text-field
          v-model.trim="email"
          :error-messages="emailErrors"
          label="邮件地址"
          required
          clearable
          @blur="$v.email.$touch()"
        ></v-text-field>

        <v-row>
          <v-col cols="8">
            <v-text-field
              v-model.trim="code"
              :error-messages="codeErrors"
              :counter="6"
              label="验证码"
              required
              @blur="$v.code.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn
              style="top: 12px"
              color="success"
              v-if="isShowGetCode"
              class="identiCode"
              @click="getIdentifyCode"
            >获取</v-btn>
            <v-btn style="top: 12px" v-else class="identiCode cancel-pointer">{{countdown }}s</v-btn>
          </v-col>
        </v-row>

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

        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn large class="mr-4" @click="register" color="success">提交</v-btn>
            <v-btn large @click="clear" color="error">清除</v-btn>
          </v-col>
        </v-row>
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
  numeric,
  sameAs
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: {
      required,
      maxLength: maxLength(10),
      minLength: minLength(3),
      alphaNum
    },
    password: { required, maxLength: maxLength(16), minLength: minLength(6) },
    repassword: { required, sameAsPassword:sameAs('password')},
    email: { required, email },
    code: { required, numeric }
  },

  data: () => ({
    name: "",
    password: "",
    repassword: "",
    showpassword: false,
    showrepassword: false,
    email: "",
    code: "",
    countdown: 30,
    timer: null,
    isShowGetCode: true,
  }),
  created(){
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.alphaNum && errors.push("用户名必须字母或数字");
      !this.$v.name.maxLength && errors.push("用户名最长10个字符串");
      !this.$v.name.minLength && errors.push("用户名最短3个字符串");
      !this.$v.name.required && errors.push("用户名必填");
      return errors;
    },
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
      !this.$v.repassword.sameAsPassword && errors.push("输入的该项不匹配");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("邮件地址格式必须正确");
      !this.$v.email.required && errors.push("邮件地址必填");
      return errors;
    },
    codeErrors() {
      const errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.numeric && errors.push("验证码必须数字");
      !this.$v.code.required && errors.push("验证码必填");
      return errors;
    }
  },
  methods: {
    register() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.$nextTick(() => {
          this.submit();
        });
      }
    },
    submit() {
      const user = {
        username: this.name,
        email: this.email,
        code: this.code,
        password: this.password,
        avatar: `https://api.adorable.io/avatars/200/${this.name}.png`
      };

      this.axios
        .post(process.env.VUE_APP_APIURL + "/account/register/", user)
        .then(response => {
          this.axios.defaults.headers.common["Authorization"] =
            "JWT " + response.data.data.token;
          this.login(response.data.data);
        })
        .catch(error => {
          if (error.response.status == "400") {
            this.$store.dispatch("updateAlter", {
              msg: error.response.data.msg,
              msgType: "error",
              msgShow: true
            });
          } else {
            this.$store.dispatch("updateAlter", {
              msg: "网络错误",
              msgType: "error",
              msgShow: true
            });
          }
        });
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.password = "";
      this.repassword = "";
    },
    login(user) {
      this.$store.dispatch("login", user);
    },
    //验证码倒计时
    getIdentifyCode() {
      this.$v.email.$touch();
      if (!this.$v.email.$error) {
        this.emailcodesend();
        this.countDown();
        this.isShowGetCode = false;
      }
    },
    countDown() {
      const self = this;
      this.timer = setInterval(() => {
        self.countdown--;
        if (self.countdown === 0) {
          clearInterval(self.timer);
          self.countdown = 30;
          self.isShowGetCode = true;
        }
      }, 1000);
    },
    emailcodesend() {
      this.axios
        .post("/account/emailcodesend", { email: this.email })
        .then(response => {
          this.$store.dispatch("updateAlter", {
            msg: response.data.msg,
            msgType: "success",
            msgShow: true
          });
        })
        .catch(error => {
          this.$store.dispatch("updateAlter", {
            msg: error.response.data.msg || error,
            msgType: "error",
            msgShow: true
          });
        });
    },
  }
};
</script>

<style>
</style>