<template>
  <v-card elevation="0">
    <v-card-title class="d-flex justify-center">找回密码--验证邮箱</v-card-title>
    <v-card-text>
      <form lazy-validation>
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
              clearable
              @blur="$v.code.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <!-- <span color ='success' v-if="isShowGetCode" class="identiCode" @click="getIdentifyCode"></span>
            <span v-else class="identiCode cancel-pointer">{{countdown }}s后可重试</span>-->
            <v-btn
              style="top: 8px"
              large
              color="success"
              v-if="isShowGetCode"
              class="identiCode"
              @click="getIdentifyCode"
            >获取</v-btn>
            <v-btn style="top: 8px" large v-else class="identiCode cancel-pointer">{{countdown }}s</v-btn>

            <!-- <v-btn style="top: 12px"><v-icon left>mdi-menu</v-icon>
            获取</v-btn>-->
          </v-col>
        </v-row>

        <!-- <v-row>
                <v-col class="d-flex justify-center">
                    <v-btn class="mr-4" @click="register" color="success">下一步</v-btn>
                </v-col>
        </v-row>-->
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, numeric, email } from "vuelidate/lib/validators";
import ls from "@/utils/localStorage";

export default {
  name: "Email",
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    code: { required, numeric }
  },
  data: () => ({
    email: "",
    code: "",
    countdown: 30,
    timer: "",
    isShowGetCode: true
  }),

  computed: {
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
        this.$nextTick(() => {});
      }
    },

    clear() {
      this.$v.$reset();
      this.code = "";
      this.email = "";
    },
    login(user) {
      this.$store.dispatch("login", user);
    },

    //验证码倒计时
    getIdentifyCode() {
      this.countDown();
      this.isShowGetCode = false;
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
    //向父组件传值
    getEerrors() {
      this.$v.$touch();
      return !this.$v.$error;
    },
    getVals() {
      return { email: this.email, code: this.code };
    }
  }
};
</script>

<style>
</style>