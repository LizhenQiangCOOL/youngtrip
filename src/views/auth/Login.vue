<template>
  <v-card class="mx-3 mt-4">
    <v-card-title class="d-flex justify-center">登录</v-card-title>

    <v-card-text>
      <form lazy-validation>
        <v-text-field
          rounded
          solo
          append-icon="mdi-account"
          v-model.trim="name"
          :error-messages="nameErrors"
          :counter="10"
          label="用户名"
          required
          clearable
          @blur="$v.name.$touch()"
        ></v-text-field>

        <v-text-field
          rounded
          solo
          v-model.trim="password"
          :error-messages="passwordErrors"
          :append-icon="showpassword? 'mdi-eye' : 'mdi-eye-off'"
          :type="showpassword? 'text':'password'"
          label="密码"
          required
          clearable
          @blur="$v.password.$touch()"
          @click:append="showpassword = !showpassword"
        ></v-text-field>

        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn block rounded color="success" @click="login">开始</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-space-between mb-6">
            <v-card-actions>
              <v-btn to="/auth/register" text color="blue">注册</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn to="/auth/findpassword" text color="blue">找回密码</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required },
    password: { required }
  },

  data: () => ({
    name: "",
    password: "",
    showpassword: false
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("用户名必填");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("密码必填");
      return errors;
    }
  },
  methods: {
    login() {
      this.$v.$touch();
      if (!this.$v.$error)
        this.$nextTick(() => {
          this.submit();
        });
    },
    submit() {
      const user = {
        username: this.name,
        password: this.password
      };
      this.axios
        .post("/account/login/", user)
        .then(response => {
          this.$store.dispatch("login", response.data.data);
        })
        .catch(error => {
          if (
            error.response.status &&
            (error.response.status == "404" || error.response.status == "400")
          ) {
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
    }
  }
};
</script>

<style>
</style>