(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f691e06"],{"4ca6":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("159b");var o=r("15fd"),a=r("ade3"),i=(r("ff44"),r("132d")),s=r("a9ad"),n=r("7560"),l=r("f2e7"),u=r("f40d"),c=r("fe6c"),f=r("58df"),d=r("80d2");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(f["a"])(s["a"],Object(c["b"])(["left","bottom"]),n["a"],l["a"],u["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return p({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(d["f"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),r=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),o=this.$createElement("span",r,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[o]):o},genBadgeContent:function(){if(!this.dot){var t=Object(d["n"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(i["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],r=[Object(d["n"])(this)],a=this.$attrs,i=(a["aria-atomic"],a["aria-label"],a["aria-live"],a.role,a.title,Object(o["a"])(a,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?r.unshift(e):r.push(e),t("span",{staticClass:"v-badge",attrs:i,class:this.classes},r)}})},"5fac":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{elevation:"0"}},[r("SelfHeader",{attrs:{id:t.uid,avatar:t.uavatar,author:t.uname,follow:t.follow,auth:t.auth,authUserid:t.user.userinfo.id,followers:t.followerNum,followees:t.followeeNum},on:{followyou:t.followyou,enterfollower:t.enterfollower,enterfollowee:t.enterfollowee,enteredituser:t.enteredituser}}),r("v-card-text",{staticClass:"subtitle-1",staticStyle:{"padding-bottom":"0"}},[r("v-badge",{attrs:{color:"green",content:t.cards.length.toString()}},[t._v(t._s(t.auth&&t.uid===t.user.userinfo.id?"你":"他")+"の游记")])],1),0===t.cards.length?r("p",{staticClass:"body-1 font-weight-medium d-flex justify-center pt-4"},[t._v(t._s(t.auth&&t.uid===t.user.userinfo.id?"你":"他")+"没有记录任何游记！")]):t._l(t.cards,(function(e){return r("HomeCard",{key:e.id,attrs:{card:e,id:e.id,img:e.pic,title:e.title,subtitle:e.firstday+" "+e.location,avatar:e.userprofile.avatar,author:e.userprofile.username,uid:e.userprofile.id,avatarhidden:!0,flag:!0,tripdelflag:t.auth&&t.user.userinfo&&t.uid===t.user.userinfo.id},on:{deltrip:t.deltrip,edittrip:t.edittrip}})}))],2)},a=[],i=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),s=r("2f62"),n=r("08dd"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticStyle:{margin:"0 auto"},attrs:{elevation:"0","max-width":"720px"}},[r("v-img",{attrs:{src:t.bgimg,height:"40vh",gradient:"to right, rgba(0, 0, 0, 0.5) 0%, transparent"}},[r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("div",{staticClass:"mt-2 float-right",staticStyle:{color:"white"},on:{click:t.enterfollower}},[r("div",{staticClass:"headline font-weight-light d-flex justify-center"},[t._v(t._s(t.followers))]),r("div",{staticClass:"d-flex justify-center"},[t._v("粉丝")])])]),r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"4"}},[r("v-btn",{attrs:{icon:""}},[r("v-avatar",{attrs:{size:"60"}},[r("img",{attrs:{src:t.avatar,alt:""}})])],1)],1),r("v-col",{attrs:{cols:"4"}},[r("div",{staticClass:"mt-2 float-left",staticStyle:{color:"white"},on:{click:t.enterfollowee}},[r("div",{staticClass:"headline font-weight-light d-flex justify-center"},[t._v(t._s(t.followees))]),r("div",{staticClass:"d-flex justify-center"},[t._v("关注")])])])],1),r("v-row",[r("v-col",{staticClass:"d-flex justify-center title pt-2 white--text"},[t._v(t._s(t.author))])],1),t.auth&&t.id===t.authUserid?r("v-row",[r("v-col",{staticClass:"d-flex justify-center"},[r("v-btn",{attrs:{rounded:"",width:"100"},on:{click:t.enteredituser}},[t._v("个人设置")])],1)],1):r("v-row",[r("v-col",{staticClass:"d-flex justify-center"},[t.auth&&t.follow?r("v-btn",{staticStyle:{color:"white"},attrs:{rounded:"",width:"100",outlined:""},on:{click:t.followyou}},[t._v("已关注")]):r("v-btn",{attrs:{rounded:"",width:"100"},on:{click:t.followyou}},[t._v("关注")])],1)],1)],1)],1)],1)},u=[],c=(r("a9e3"),{props:{id:{type:Number,required:!0},avatar:{type:String,required:!0},author:{type:String,required:!0},follow:{type:Boolean,required:!0},auth:{type:Boolean,required:!0},authUserid:{type:Number,required:!1},followers:{type:Number,required:!0},followees:{type:Number,required:!0}},data:function(){return{bgimg:"".concat("https://xn--m83a.top/media/","img/bg.jpg")}},methods:{followyou:function(){this.$emit("followyou")},enterfollower:function(){this.$emit("enterfollower")},enterfollowee:function(){this.$emit("enterfollowee")},enteredituser:function(){this.$emit("enteredituser")}}}),f=c,d=r("2877"),h=r("6544"),p=r.n(h),m=r("8212"),b=r("8336"),g=r("b0af"),v=r("99d9"),w=r("62ad"),y=r("adda"),O=r("0fd9"),j=Object(d["a"])(f,l,u,!1,null,null,null),S=j.exports;function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}p()(j,{VAvatar:m["a"],VBtn:b["a"],VCard:g["a"],VCardText:v["c"],VCol:w["a"],VImg:y["a"],VRow:O["a"]});var C={components:{HomeCard:n["a"],SelfHeader:S},created:function(){var t=this;if(this.uid=parseInt(this.$route.params.user),this.uavatar=this.$route.params.avatar||"",this.uname=this.$route.params.name||"","number"!==typeof this.uid||isNaN(this.uid))this.$router.push("/");else{if(this.axios.get("/account/user/".concat(this.uid,"/")).then((function(e){var r=e.data.data.userinfo;t.uavatar=r.avatar,t.uname=r.user.username,t.followerNum=r.followerNum,t.followeeNum=r.followeeNum})).catch((function(e){t.$store.dispatch("updateAlter",{msg:"用户信息拉取失败, 请稍后重试",msgType:"error",msgShow:!0})})),this.auth&&this.user.userinfo.id!==this.uid){var e={follower:this.user.userinfo.id,followee:this.uid};this.axios.get("/fans/",{params:e}).then((function(e){0!==e.data.count&&(t.follow=!0,t.followid=e.data.results[0].id)})).catch((function(e){t.$store.dispatch("updateAlter",{msg:"获取数据失败",msgType:"error",msgShow:!0})}))}var r={page:1,page_size:99999999,userprofile:this.uid};this.axios.get("/trip/",{params:r}).then((function(e){t.cards=e.data.results,t.count=e.data.count,t.next=e.data.next,t.previous=e.data.previous})).catch((function(e){t.$store.dispatch("updateAlter",{msg:"查看失败, 请稍后重试",msgType:"error",msgShow:!0})}))}},data:function(){return{uid:null,uavatar:"",uname:"",followid:null,follow:!1,followerNum:0,followeeNum:0,count:null,next:null,previous:null,cards:[],homecardsItems:[{id:1,pic:"http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",title:"🇺🇸新墨西哥州Albuquerque# 浪漫的热气球节和似雪的白色沙滩🎈",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}}]}},computed:x({},Object(s["b"])(["auth","user"])),methods:{followyou:function(){var t=this;if(this.auth)if(this.follow){var e={Authorization:"jwt ".concat(this.$store.state.user.token)};this.axios.delete("/fans/".concat(this.followid,"/"),{headers:e}).then((function(e){t.follow=!1,t.followid=null,t.followerNum-=1})).catch((function(e){t.$store.dispatch("updateAlter",{msg:"关注取消失败",msgType:"error",msgShow:!0})}))}else{var r={follower:this.user.userinfo.id,followee:this.uid},o={Authorization:"jwt ".concat(this.$store.state.user.token)};this.axios.post("/fans/",r,{headers:o}).then((function(e){t.followid=e.data.data,t.follow=!0,t.followerNum+=1})).catch((function(e){t.$store.dispatch("updateAlter",{msg:"关注失败",msgType:"error",msgShow:!0})}))}else this.$store.dispatch("updateAlter",{msg:"请先登录",msgType:"info",msgShow:!0})},enterfollower:function(){this.followerNum>0&&this.$router.push({name:"follow",params:{uid:this.uid,uname:this.uname,follow:!0}})},enterfollowee:function(){this.followeeNum>0&&this.$router.push({name:"follow",params:{uid:this.uid,uname:this.uname,follow:!1}})},enteredituser:function(){this.$router.push({name:"edit"})},deltrip:function(t){var e=this,r=t.id,o={Authorization:"jwt ".concat(this.$store.state.user.token)};this.axios.delete("/trip/".concat(r,"/"),{headers:o}).then((function(r){e.$store.dispatch("updateAlter",{msg:r.data.msg,msgType:"success",msgShow:!0});var o=e.cards.filter((function(e){return e.id!==t.id}));e.cards=o})).catch((function(t){e.$store.dispatch("updateAlter",{msg:"网络异常,删除失败",msgType:"error",msgShow:!0})}))},edittrip:function(t){this.$store.dispatch("updateTrip",t),this.$router.push({name:"TripCreate"})}}},_=C,P=r("4ca6"),N=Object(d["a"])(_,o,a,!1,null,null,null);e["default"]=N.exports;p()(N,{VBadge:P["a"],VCard:g["a"],VCardText:v["c"]})},"62ad":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("caad"),r("13d5"),r("45fc"),r("4ec9"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("2ca0"),r("159b"),r("ddb0");var o=r("ade3"),a=(r("4b85"),r("2b0e")),i=r("d9f7"),s=r("80d2");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=["sm","md","lg","xl"],c=function(){return u.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),f=function(){return u.reduce((function(t,e){return t["offset"+Object(s["x"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return u.reduce((function(t,e){return t["order"+Object(s["x"])(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(c),offset:Object.keys(f),order:Object.keys(d)};function p(t,e,r){var o=t;if(null!=r&&!1!==r){if(e){var a=e.replace(t,"");o+="-".concat(a)}return"col"!==t||""!==r&&!0!==r?(o+="-".concat(r),o.toLowerCase()):o.toLowerCase()}}var m=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:l({cols:{type:[Boolean,String,Number],default:!1}},c,{offset:{type:[String,Number],default:null}},f,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,a=e.data,s=e.children,n=(e.parent,"");for(var l in r)n+=String(r[l]);var u=m.get(n);return u||function(){var t,e;for(e in u=[],h)h[e].forEach((function(t){var o=r[t],a=p(e,t,o);a&&u.push(a)}));var a=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!a||!r.cols},Object(o["a"])(t,"col-".concat(r.cols),r.cols),Object(o["a"])(t,"offset-".concat(r.offset),r.offset),Object(o["a"])(t,"order-".concat(r.order),r.order),Object(o["a"])(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),m.set(n,u)}(),t(r.tag,Object(i["a"])(a,{class:u}),s)}})},ff44:function(t,e,r){}}]);
//# sourceMappingURL=chunk-0f691e06.db3e15f8.js.map