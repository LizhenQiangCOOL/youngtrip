<template>
  <div>
    <v-stepper class="mx-3 mt-5" v-model="e1" :alt-labels="altLabels">
      <template>
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step
              :key="`${n}-step`"
              :complete="e1 > n"
              :step="n"
              :editable="editable"
            >Step {{ n }}</v-stepper-step>

          </template>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">

            <Email ref="email" v-if="n===1"></Email>
            <Password ref="password" v-else cardtitle="找回密码--重置密码" :enSureBtn="false"></Password>

            <v-row v-if="n===1">
              <v-col class="d-flex justify-center">
                <v-btn color="primary" @click="nextStep(n)">下一步</v-btn>
                <v-btn text　to="/">取消</v-btn>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col class="d-flex justify-center">
                <v-btn color="primary" @click="nextStep(n)" v-if="n===2">确认</v-btn>
              </v-col>
            </v-row>
          </v-stepper-content>
        </v-stepper-items>
      </template>
    </v-stepper>
  </div>

</template>

<script>
import Email from "@/views/auth/Email";
import Password from "@/views/user/Password";
import router from "@/router";

export default {
  components: {
    Email,
    Password
  },

  data() {
    return {
      e1: 1,
      steps: 2,
      altLabels: false,
      editable: false,
    };
  },

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
    vertical() {
      this.e1 = 2;
      requestAnimationFrame(() => (this.e1 = 1)); // Workarounds
    }
  },
  methods: {
    nextStep(n) {
      if (n === this.steps) {
        //  　最终完成找回面膜然后　跳转登录页面
        if (this.$refs.password[0].getEerrors()) {
          const params = this.$refs.password[0].getVals();
          const id = this.$store.state.user.userinfo.id;
          const headers = {
            Authorization: `jwt ${this.$store.state.user.token}`
          };
          this.axios
            .patch(`/account/user/${id}/`, params, { headers: headers })
            .then(response => {
              this.$store.dispatch("updateUser", response.data.data);
              this.$store.dispatch("updateAlter", {
                msg: "重置密码成功",
                msgType: "success",
                msgShow: true
              });
              router.push("/auth/login");
            })
            .catch(error => {
              this.$store.dispatch("updateAlter", {
                msg: "重置密码失败",
                msgType: "error",
                msgShow: true
              });
            });
        }
      } else {
        // 第一步
        if (this.$refs.email[0].getEerrors()) {
          const params = this.$refs.email[0].getVals();
          this.axios
            .post(`/account/emailcode`, params)
            .then(response => {
              this.$store.dispatch("updateUser", response.data.data);
              this.e1 = n + 1;
            })
            .catch(error => {
              this.$store.dispatch("updateAlter", {
                msg: "验证邮箱失败",
                msgType: "error",
                msgShow: true
              });
            });
        }
      }
    }
  }
};
</script>

<style>
</style>