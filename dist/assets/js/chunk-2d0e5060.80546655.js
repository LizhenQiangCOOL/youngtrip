(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5060"],{"935e":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-card",{staticClass:"mx-3 mt-4"},[t("v-card-title",{staticClass:"d-flex justify-center"},[e._v("欢迎注册")]),t("v-card-text",[t("form",{attrs:{"lazy-validation":""}},[t("v-text-field",{attrs:{"error-messages":e.nameErrors,counter:10,label:"用户名",required:"",clearable:""},on:{blur:function(s){return e.$v.name.$touch()}},model:{value:e.name,callback:function(s){e.name="string"===typeof s?s.trim():s},expression:"name"}}),t("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"邮件地址",required:"",clearable:""},on:{blur:function(s){return e.$v.email.$touch()}},model:{value:e.email,callback:function(s){e.email="string"===typeof s?s.trim():s},expression:"email"}}),t("v-row",[t("v-col",{attrs:{cols:"8"}},[t("v-text-field",{attrs:{"error-messages":e.codeErrors,counter:6,label:"验证码",required:""},on:{blur:function(s){return e.$v.code.$touch()}},model:{value:e.code,callback:function(s){e.code="string"===typeof s?s.trim():s},expression:"code"}})],1),t("v-col",{attrs:{cols:"2"}},[e.isShowGetCode?t("v-btn",{staticClass:"identiCode",staticStyle:{top:"12px"},attrs:{color:"success"},on:{click:e.getIdentifyCode}},[e._v("获取")]):t("v-btn",{staticClass:"identiCode cancel-pointer",staticStyle:{top:"12px"}},[e._v(e._s(e.countdown)+"s")])],1)],1),t("v-text-field",{attrs:{"error-messages":e.passwordErrors,"append-icon":e.showpassword?"mdi-eye":"mdi-eye-off",type:e.showpassword?"text":"password",label:"密码",required:""},on:{blur:function(s){return e.$v.password.$touch()},"click:append":function(s){e.showpassword=!e.showpassword}},model:{value:e.password,callback:function(s){e.password="string"===typeof s?s.trim():s},expression:"password"}}),t("v-text-field",{attrs:{"error-messages":e.repasswordErrors,"append-icon":e.showrepassword?"mdi-eye":"mdi-eye-off",type:e.showrepassword?"text":"password",label:"确认密码",required:""},on:{blur:function(s){return e.$v.repassword.$touch()},"click:append":function(s){e.showrepassword=!e.showrepassword}},model:{value:e.repassword,callback:function(s){e.repassword="string"===typeof s?s.trim():s},expression:"repassword"}}),t("v-row",[t("v-col",{staticClass:"d-flex justify-center"},[t("v-btn",{staticClass:"mr-4",attrs:{large:"",color:"success"},on:{click:e.register}},[e._v("提交")]),t("v-btn",{attrs:{large:"",color:"error"},on:{click:e.clear}},[e._v("清除")])],1)],1)],1)])],1)},a=[],o=(t("b0c0"),t("1dce")),i=t("b5ae"),n={mixins:[o["validationMixin"]],validations:{name:{required:i["required"],maxLength:Object(i["maxLength"])(10),minLength:Object(i["minLength"])(3),alphaNum:i["alphaNum"]},password:{required:i["required"],maxLength:Object(i["maxLength"])(16),minLength:Object(i["minLength"])(6)},repassword:{required:i["required"],sameAsPassword:Object(i["sameAs"])("password")},email:{required:i["required"],email:i["email"]},code:{required:i["required"],numeric:i["numeric"]}},data:function(){return{name:"",password:"",repassword:"",showpassword:!1,showrepassword:!1,email:"",code:"",countdown:30,timer:null,isShowGetCode:!0}},created:function(){},computed:{nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.alphaNum&&e.push("用户名必须字母或数字"),!this.$v.name.maxLength&&e.push("用户名最长10个字符串"),!this.$v.name.minLength&&e.push("用户名最短3个字符串"),!this.$v.name.required&&e.push("用户名必填"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.maxLength&&e.push("密码最长16个字符串"),!this.$v.password.minLength&&e.push("密码最短6个字符串"),!this.$v.password.required&&e.push("密码必填"),e):e},repasswordErrors:function(){var e=[];return this.$v.repassword.$dirty?(!this.$v.repassword.sameAsPassword&&e.push("输入的该项不匹配"),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("邮件地址格式必须正确"),!this.$v.email.required&&e.push("邮件地址必填"),e):e},codeErrors:function(){var e=[];return this.$v.code.$dirty?(!this.$v.code.numeric&&e.push("验证码必须数字"),!this.$v.code.required&&e.push("验证码必填"),e):e}},methods:{register:function(){var e=this;this.$v.$touch(),this.$v.$error||this.$nextTick((function(){e.submit()}))},submit:function(){var e=this,s={username:this.name,email:this.email,code:this.code,password:this.password,avatar:"https://api.adorable.io/avatars/200/".concat(this.name,".png")};this.axios.post("'https://xn--m83a.top/api',/account/register/",s).then((function(s){e.axios.defaults.headers.common["Authorization"]="JWT "+s.data.data.token,e.login(s.data.data)})).catch((function(s){"400"==s.response.status?e.$store.dispatch("updateAlter",{msg:s.response.data.msg,msgType:"error",msgShow:!0}):e.$store.dispatch("updateAlter",{msg:"网络错误",msgType:"error",msgShow:!0})}))},clear:function(){this.$v.$reset(),this.name="",this.password="",this.repassword=""},login:function(e){this.$store.dispatch("login",e)},getIdentifyCode:function(){this.$v.email.$touch(),this.$v.email.$error||(this.emailcodesend(),this.countDown(),this.isShowGetCode=!1)},countDown:function(){var e=this;this.timer=setInterval((function(){e.countdown--,0===e.countdown&&(clearInterval(e.timer),e.countdown=30,e.isShowGetCode=!0)}),1e3)},emailcodesend:function(){var e=this;this.axios.post("/account/emailcodesend",{email:this.email}).then((function(s){e.$store.dispatch("updateAlter",{msg:s.data.msg,msgType:"success",msgShow:!0})})).catch((function(s){e.$store.dispatch("updateAlter",{msg:s.response.data.msg||s,msgType:"error",msgShow:!0})}))}}},d=n,c=t("2877"),u=t("6544"),l=t.n(u),h=t("8336"),m=t("b0af"),p=t("99d9"),w=t("62ad"),v=t("0fd9"),f=t("8654"),$=Object(c["a"])(d,r,a,!1,null,null,null);s["default"]=$.exports;l()($,{VBtn:h["a"],VCard:m["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:w["a"],VRow:v["a"],VTextField:f["a"]})}}]);
//# sourceMappingURL=chunk-2d0e5060.80546655.js.map