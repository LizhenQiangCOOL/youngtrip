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

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
            <Email ref="email" v-if="n===1"></Email>

            <v-row v-if="n===1">
              <v-col class="d-flex justify-center">
                <v-btn color="primary" @click="nextStep(n)">下一步</v-btn>
                <v-btn text>取消</v-btn>
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

export default {
  components: {
    Email
  },

  data() {
    return {
      e1: 1,
      steps: 2,
      altLabels: false,
      editable: false
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
    onInput(val) {
      this.steps = parseInt(val);
    },
    nextStep(n) {
      if (n === this.steps) {
        //  　最终完成注册然后　跳转home
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
        //　对邮箱进行验证
        // if(this.$refs.email[0].getEerrors())
        // {

        //       this.axios.post(process.env.VUE_APP_APIURL+'/account/register/', this.$refs.email[0].getVals()).then((response) => {
        //       this.axios.defaults.headers.common['Authorization'] = 'JWT '+ response.data.data.token
        //       this.$store.dispatch('updateUser', response.data.data)　//保存一下data　id
        //       console.log(response.data.data)

        //     }).catch( (error) => {
        //       if(error.response.status=='400'){
        //         this.$store.dispatch('updateAlter',{msg:error.response.data.msg, msgType:'error', msgShow:true})
        //         this.timer = setTimeout(() => {this.$store.dispatch('updateAlter',{msgShow:false}) }, 3300)
        //       }else{
        //         this.$store.dispatch('updateAlter',{msg:'网络错误', msgType:'error', msgShow:true})
        //         this.timer = setTimeout(() => {this.$store.dispatch('updateAlter',{msgShow:false}) }, 3300)
        //       }
        //     })

        // }
      }
    }
  }
};
</script>

<style>
</style>