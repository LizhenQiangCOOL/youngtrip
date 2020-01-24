<template>

   <v-card
    class="mx-3 mt-5"
   >
   <v-alert dismissible  :type="msgType" :value="msgShow">{{msg}}</v-alert>

   <v-card-title class="d-flex justify-center">欢迎注册</v-card-title>
   <v-card-text> 
        <form
        lazy-validation
        >
            <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="用户名"
                required
                @blur="$v.name.$touch()"
            ></v-text-field>

            <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="邮件地址"
                required
                @blur="$v.email.$touch()"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                :append-icon="showpassword? 'mdi-eye' : 'mdi-eye-off'"
                :type="showpassword? 'text':'password'"
                label="密码"
                required
                @blur="$v.password.$touch()"
                @click:append='showpassword = !showpassword'
            ></v-text-field>

            <v-text-field
                v-model="repassword"
                :error-messages="repasswordErrors"
                :append-icon="showrepassword? 'mdi-eye' : 'mdi-eye-off'"
                :type="showrepassword? 'text':'password'"
                label="确认密码"
                required
                @blur="$v.repassword.$touch()"
                @click:append='showrepassword = !showrepassword'
            ></v-text-field>

            <v-row>
                <v-col class="d-flex justify-center">
                    <v-btn class="mr-4" @click="register" color="success">提交</v-btn>
                    <v-btn  @click="clear" color="error">清除</v-btn>
                </v-col>
            </v-row>
                
        </form>
     </v-card-text>
   </v-card>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, alphaNum, email } from 'vuelidate/lib/validators'
  import ls from '@/utils/localStorage'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10), minLength: minLength(3), alphaNum },
      email: { required, email },
      password: {required, maxLength: maxLength(16), minLength: minLength(6)},
      repassword: {required, maxLength: maxLength(16), minLength: minLength(6)}
    },

    data: () => ({
      name: '',
      email: '',
      password:'',
      repassword:'',
      showpassword:false,
      showrepassword:false,
      msg:'',
      msgType:'success',
      msgShow:false,
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.alphaNum && errors.push('用户名必须字母或数字')
        !this.$v.name.maxLength && errors.push('用户名最长10个字符串')
        !this.$v.name.minLength && errors.push('用户名最短3个字符串')      
        !this.$v.name.required && errors.push('用户名必填')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('邮件地址格式必须正确')
        !this.$v.email.required && errors.push('邮件地址必填')
        return errors
      },
      passwordErrors(){
        const errors = []
        if(!this.$v.password.$dirty) return errors
        !this.$v.password.maxLength && errors.push('用户名最长10个字符串')
        !this.$v.password.minLength && errors.push('用户名最短6个字符串')      
        !this.$v.password.required && errors.push('密码必填')
        return errors
      },
      repasswordErrors(){
        const errors = []
        if(!this.$v.repassword.$dirty) return errors
        !(this.$v.password.$model===this.$v.repassword.$model) && errors.push('输入的该项不匹配')
        return errors
      }
    },

    methods: {
      register(){
        this.$v.$touch()
        if(!this.$v.$error){
          this.$nextTick(()=>{
            this.submit()
          })
        }
      },
      submit () {
        const user = {
            name: this.name,
            email: this.email,
            password: this.password,
            avator: `https://api.adorable.io/avatars/200/${this.name}.png` 
        }
        const localUser =  this.$store.state.user
        if (localUser) {
          if (localUser.name === user.name) {
            this.showMsg('该用户已存在', 'error')
          } else {
            this.login(user)
          }
        } else {
          this.login(user)
        }

      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.password = ''
        this.repassword = ''
      },
      
      login(user){
          this.$store.dispatch('login', user)
      },
      showMsg(msg, type = 'info'){
        this.msg = msg
        this.msgType = type
        this.msgShow = false
        this.$nextTick(() => {
          this.msgShow=true
          this.timer = setTimeout(() => {this.msgShow=false}, 3300)
        })
      }
    },
  }
</script>

<style>

</style>