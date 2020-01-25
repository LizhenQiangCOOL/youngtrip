<template>
   <v-card class="mx-3 mt-5">
       <v-alert dismissible  :type="msgType" :value="msgShow">{{msg}}</v-alert>

       <v-card-title class="d-flex justify-center">登录</v-card-title>

       <v-card-text> 
        <form
        lazy-validation
        >
            <v-text-field
            rounded
               solo
                append-icon='mdi-account'
                v-model.trim="name"
                :error-messages="nameErrors"
                :counter="10"
                label="用户名"
                required
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
                @blur="$v.password.$touch()"
                @click:append='showpassword = !showpassword'
            ></v-text-field>

            <v-row>
                <v-col class="d-flex justify-center">
                    <v-btn  block rounded  color="success" @click="login">开始</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-space-between mb-6">
                    <v-card-actions> <v-btn to='/auth/register' text color="blue">注册</v-btn></v-card-actions>
                    <v-card-actions> <v-btn to='' text color="blue">找回密码</v-btn></v-card-actions>
                </v-col>
            </v-row>
                
        </form>
     </v-card-text>

   </v-card>
   

</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  import ls from '@/utils/localStorage'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required },
      password: {required },
    },

    data: () => ({
      name: '',
      password:'',
      showpassword:false,
      msg:'',
      msgType:'success',
      msgShow:false,
    }),
    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors    
        !this.$v.name.required && errors.push('用户名必填')
        return errors
      },
      passwordErrors(){
        const errors = []
        if(!this.$v.password.$dirty) return errors    
        !this.$v.password.required && errors.push('密码必填')
        return errors
      },
    },
    methods:{
       login(){ 
          this.$v.$touch()
          if(!this.$v.$error)
               this.$nextTick(()=>{
                  this.submit()
           })  
       },
       submit(){

          const user = {
             username: this.name,
             password: this.password,
          }
          this.axios.post('/account/login/', user).then((response) => {
              this.axios.defaults.headers.common['Authorization'] = 'JWT '+ response.data.data.token
              this.$store.dispatch('login', response.data.data)
          }).catch( (error) => {
              if(error.response.status=='404' || error.response.status=='400'){
                this.showMsg(error.response.data.msg, 'error')
              }else{
                this.showMsg('网络错误', 'error')
              }
          });
          
       },
       clear () {
        this.$v.$reset()
        this.name = ''
        this.password = ''
      },
      showMsg(msg, type = 'warning'){
        this.msg = msg
        this.msgType = type
        this.msgShow = false
        this.$nextTick(() => {
          this.msgShow=true
          this.timer = setTimeout(() => {this.msgShow=false}, 3300)
        })
      }

    }

}
</script>

<style>

</style>