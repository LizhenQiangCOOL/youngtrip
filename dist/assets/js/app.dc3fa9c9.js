(function(t){function e(e){for(var r,n,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&d.push(c[n][0]),c[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},c={app:0},o=[];function i(t){return s.p+"assets/js/"+({}[t]||t)+"."+{"chunk-014cbbb8":"0061f13c","chunk-a7c1db1e":"c4626687","chunk-b914272c":"495b967a","chunk-006ed8d2":"cf0c349d","chunk-5dc2c362":"f889f565","chunk-06cbb92a":"f321af87","chunk-073c971a":"f529b546","chunk-34e69b86":"01b8bd93","chunk-bfedc9f6":"4aae26a6","chunk-f37f1c66":"59906e5e"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a={"chunk-014cbbb8":1,"chunk-a7c1db1e":1,"chunk-b914272c":1,"chunk-006ed8d2":1,"chunk-06cbb92a":1,"chunk-073c971a":1,"chunk-34e69b86":1,"chunk-bfedc9f6":1,"chunk-f37f1c66":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="assets/css/"+({}[t]||t)+"."+{"chunk-014cbbb8":"1d12d943","chunk-a7c1db1e":"41be911b","chunk-b914272c":"014e0f94","chunk-006ed8d2":"ec8e1342","chunk-5dc2c362":"31d6cfe0","chunk-06cbb92a":"0670aa22","chunk-073c971a":"0670aa22","chunk-34e69b86":"81a35bc4","chunk-bfedc9f6":"b268d9e5","chunk-f37f1c66":"b2174419"}[t]+".css",c=s.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=c[t]=[e,a]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var a=c[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}c[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("8a23"),n=a.n(r);n.a},"08dd":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"px-3 pt-4",staticStyle:{margin:"0 auto"},attrs:{elevation:"0","max-width":"720px",to:"/cards/"+this.id+"/content"}},[a("v-img",{attrs:{src:t.img,height:"30vh",gradient:"to right, rgba(0, 0, 0, 0.5) 0%, transparent"}},[a("v-card-title",{staticClass:"font-weight-black white--text",domProps:{textContent:t._s(t.title)}}),a("v-card-subtitle",{staticClass:"font-weight-regular body-2"},[a("v-card",{staticClass:"HomeCard-detail",attrs:{color:"transparent",elevation:"0"}},[a("span",{staticClass:"mx-2 white--text"},[t._v(t._s(t.subtitle))])])],1),a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!t.avatarhidden,expression:"!avatarhidden"}],staticClass:"HomeCard-bottom"},[a("v-avatar",{attrs:{size:"30"}},[a("img",{attrs:{src:t.avatar,alt:t.author}})]),a("span",{staticClass:"ml-2 white--text font-weight-regular body-2"},[a("i",[t._v("by")]),t._v(" "+t._s(t.author)+" ")])],1)],1)],1)},n=[],c=(a("a9e3"),{props:{id:{type:Number,required:!0},img:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0},avatar:{type:String,required:!0},author:{type:String,required:!0},uid:{type:Number,required:!0},avatarhidden:{type:Boolean,required:!0}},data:function(){return{}},methods:{}}),o=c,i=(a("5c1f"),a("2877")),s=a("6544"),u=a.n(s),l=a("8212"),d=a("b0af"),p=a("99d9"),f=a("adda"),h=Object(i["a"])(o,r,n,!1,null,"0b07448b",null);e["a"]=h.exports;u()(h,{VAvatar:l["a"],VCard:d["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VImg:f["a"]})},4360:function(t,e,a){"use strict";a("a4d3"),a("4de4"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b");var r=a("ade3"),n=a("53ca"),c=a("2b0e"),o=a("2f62"),i=a("e8ec"),s=a("a18c");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}c["a"].use(o["a"]);var d={user:i["a"].getItem("user"),auth:i["a"].getItem("auth"),loading:!1,alter:{msg:"",msgType:"info",msgShow:!1}},p={UPDATE_USER:function(t,e){t.user=e,i["a"].setItem("user",e)},UPDATE_AUTH:function(t,e){t.auth=e,i["a"].setItem("auth",e)},UPDATE_LOADING:function(t,e){t.loading=e},UPDATE_ALTER:function(t,e){t.alter=e}},f={login:function(t,e){var a=t.commit;e&&a("UPDATE_USER",e),a("UPDATE_AUTH",!0),s["a"].push("/")},logout:function(t){var e=t.commit;e("UPDATE_AUTH",!1),"Home"!==s["a"].history.current.name&&s["a"].push({name:"Home",params:{logout:!0}})},updateAlter:function(t,e){var a=t.state,r=t.commit,c=a.alter;c&&"object"===Object(n["a"])(c)&&(e=l({},c,{},e)),r("UPDATE_ALTER",e)},updateUser:function(t,e){var a=t.state,r=t.commit,c=a.user;c&&"object"===Object(n["a"])(c)&&(e=l({},c,{},e)),r("UPDATE_USER",e)}};e["a"]=new o["a"].Store({state:d,mutations:p,actions:f,modules:{}})},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("v-snackbar",{attrs:{color:t.alter.msgType,"multi-line":"",timeout:t.timeout,top:""},model:{value:t.alter.msgShow,callback:function(e){t.$set(t.alter,"msgShow",e)},expression:"alter.msgShow"}},[t._v(" "+t._s(t.alter.msg)+" "),a("v-btn",{attrs:{color:"white",icon:""},on:{click:t.closesnackbar}},[a("v-icon",[t._v("mdi-close-circle")])],1)],1),a("v-content",{staticClass:"d-flex",attrs:{id:"main-trip"}},[a("v-card",{staticStyle:{margin:"0 auto"},attrs:{elevation:"0","max-width":"740px"}},[a("router-view")],1)],1),a("Footer")],1)},c=[],o=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),i=a("2f62"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"pt-1",attrs:{app:"",flex:"",color:"primary",dark:"",src:"https://picsum.photos/1920/1080?random",width:"100%",height:"45%"}},[a("v-btn",{attrs:{icon:"",to:"/"}},[a("v-icon",{attrs:{size:"32"}},[t._v("mdi-home")])],1),a("v-toolbar-title",[a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1),t.auth?a("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",{attrs:{icon:""}},[a("v-avatar",t._g({attrs:{size:"30"}},r),[a("img",{attrs:{src:t.user.userinfo.avatar,alt:t.user.userinfo.user.username}})])],1)]}}],null,!1,3821094325)},[a("v-list",t._l(t.items,(function(e,r){return a("v-list-item",{key:r,on:{click:function(e){return t.memuclick(r)}}},[a("v-icon",[t._v(t._s(e.icon))]),a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1):a("v-btn",{attrs:{icon:"",to:"/auth/login"}},[a("v-icon",[t._v("mdi-account")])],1)],1)},u=[],l=a("a18c");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"Header",data:function(){return{items:[{title:"游记",icon:"mdi-format-list-bulleted"},{title:"个人",icon:"mdi-account-edit"},{title:"退出",icon:"mdi-account-off"}]}},computed:p({},Object(i["b"])(["auth","user"])),methods:{memuclick:function(t){1===t?l["a"].push("/user/edit"):2===t?this.logout():0===t&&this.$router.push({name:"Column",params:{user:this.user.userinfo.id,name:this.user.userinfo.user.username,avatar:this.user.userinfo.avatar}})},logout:function(){this.$store.dispatch("logout")}}},h=f,m=a("2877"),b=a("6544"),v=a.n(b),g=a("40dc"),y=a("8212"),O=a("8336"),k=a("132d"),w=a("adda"),j=a("8860"),_=a("da13"),P=a("5d23"),S=a("e449"),x=a("2fa4"),E=a("2a7f"),C=Object(m["a"])(h,s,u,!1,null,"06d4f05a",null),T=C.exports;v()(C,{VAppBar:g["a"],VAvatar:y["a"],VBtn:O["a"],VIcon:k["a"],VImg:w["a"],VList:j["a"],VListItem:_["a"],VListItemTitle:P["b"],VMenu:S["a"],VSpacer:x["a"],VToolbarTitle:E["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-navigation",{attrs:{flex:"",app:"",grow:"",value:t.activeBtn,color:"deep-purple accent-4"}},t._l(t.items,(function(e){return a("v-btn",{key:e.icon,attrs:{text:"",to:e.to}},[a("span",[t._v(t._s(e.name))]),a("v-icon",[t._v(t._s(e.icon))])],1)})),1)},A=[],D={data:function(){return{activeBtn:0,items:[{name:"首页",icon:"mdi-history",to:"/"},{name:"喜欢",icon:"mdi-cards-heart",to:"/cards/likecard"},{name:"个人",icon:"mdi-account-box",to:"/user/edit"}]}}},I=D,$=a("b81c"),U=Object(m["a"])(I,V,A,!1,null,null,null),q=U.exports;function L(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function H(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?L(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}v()(U,{VBottomNavigation:$["a"],VBtn:O["a"],VIcon:k["a"]});var N={name:"App",components:{Header:T,Footer:q},computed:H({},Object(i["b"])(["alter"])),data:function(){return{timeout:3e3}},methods:{closesnackbar:function(){this.$store.dispatch("updateAlter",{msgShow:!1})}}},B=N,R=(a("034f"),a("7496")),M=a("b0af"),F=a("a75b"),J=a("2db4"),z=Object(m["a"])(B,n,c,!1,null,null,null),G=z.exports;v()(z,{VApp:R["a"],VBtn:O["a"],VCard:M["a"],VContent:F["a"],VIcon:k["a"],VSnackbar:J["a"]});var K=a("4360"),Q=a("f309");r["a"].use(Q["a"]);var W=new Q["a"]({}),X=a("a7fe"),Y=a.n(X),Z=a("bc3a"),tt=a.n(Z),et=a("8c4f");tt.a.defaults.baseURL="https://xn--m83a.top/api",tt.a.defaults.headers.post["Content-Type"]="application/json",r["a"].use(Y.a,tt.a),r["a"].config.productionTip=!1;var at=et["a"].prototype.push;et["a"].prototype.push=function(t){return at.call(this,t).catch((function(t){return t}))},new r["a"]({router:l["a"],store:K["a"],vuetify:W,render:function(t){return t(G)}}).$mount("#app")},"5c1f":function(t,e,a){"use strict";var r=a("cf3a"),n=a.n(r);n.a},"8a23":function(t,e,a){},a18c:function(t,e,a){"use strict";a("c975");var r=a("2b0e"),n=a("8c4f"),c=(a("d3b7"),a("bb51"),[{path:"/",name:"Home",component:function(){return Promise.resolve().then(a.bind(null,"bb51"))}},{path:"/auth/login",name:"Login",component:function(){return Promise.all([a.e("chunk-b914272c"),a.e("chunk-5dc2c362"),a.e("chunk-073c971a")]).then(a.bind(null,"5326"))}},{path:"/auth/register",name:"Register",component:function(){return Promise.all([a.e("chunk-b914272c"),a.e("chunk-5dc2c362"),a.e("chunk-06cbb92a")]).then(a.bind(null,"935e"))}},{path:"/auth/findpassword",name:"FindPassword",component:function(){return Promise.all([a.e("chunk-b914272c"),a.e("chunk-5dc2c362"),a.e("chunk-bfedc9f6")]).then(a.bind(null,"f85d"))}},{path:"/user/edit",name:"edit",component:function(){return Promise.all([a.e("chunk-b914272c"),a.e("chunk-5dc2c362"),a.e("chunk-f37f1c66")]).then(a.bind(null,"9504"))},meta:{auth:!0}},{path:"/cards/create",name:"Create",component:function(){return Promise.all([a.e("chunk-b914272c"),a.e("chunk-5dc2c362"),a.e("chunk-34e69b86")]).then(a.bind(null,"0eef"))},meta:{auth:!0}},{path:"/cards/:cardId/content",name:"Content",component:function(){return Promise.all([a.e("chunk-b914272c"),a.e("chunk-006ed8d2")]).then(a.bind(null,"6d02"))}},{path:"/cards/:cardId/edit",name:"Edit",component:function(){return Promise.all([a.e("chunk-b914272c"),a.e("chunk-5dc2c362"),a.e("chunk-34e69b86")]).then(a.bind(null,"0eef"))},meta:{auth:!0}},{path:"/:user",name:"Column",component:function(){return a.e("chunk-a7c1db1e").then(a.bind(null,"5fac"))}},{path:"/cards/likecard",name:"Likecard",component:function(){return a.e("chunk-014cbbb8").then(a.bind(null,"0bab"))},meta:{auth:!0}},{path:"*",redirect:"/"}]),o=a("4360");a("0b16");r["a"].use(n["a"]);var i=new n["a"]({base:"",routes:c});i.beforeEach((function(t,e,a){var r=i.app.$options.store.state.auth;r&&-1!==t.path.indexOf("/auth/")?a("/"):!r&&t.meta.auth?(a("/"),o["a"].dispatch("updateAlter",{msg:"请先登录",msgType:"info",msgShow:!0})):a()})),i.afterEach((function(t,e,a){window.scrollTo(0,0)}));e["a"]=i},bb51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Carousel"),t._l(t.cards,(function(t){return a("HomeCard",{key:t.id,attrs:{id:t.id,img:t.pic,title:t.title,subtitle:t.date,avatar:t.userprofile.avatar,author:t.userprofile.username,uid:t.userprofile.id,avatarhidden:!1}})})),a("v-speed-dial",{attrs:{fixed:"",bottom:"",right:"",value:"true"}},[a("v-btn",{staticStyle:{position:"relative",top:"-25px",left:"-25px"},attrs:{color:"pink",fab:""},on:{click:t.checkauth}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],2)},n=[],c=(a("a4d3"),a("4de4"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),o=a("2f62"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{staticClass:"px-3 pt-4",attrs:{cycle:"",height:"30vh","show-arrows":!1,"hide-delimiter-background":""}},t._l(t.items,(function(t,e){return a("v-carousel-item",{key:e,attrs:{src:t.src}})})),1)},s=[],u={name:"Carousel",data:function(){return{items:[{src:"".concat("https://xn--m83a.top/media/","img/carousel1.jpg")},{src:"".concat("https://xn--m83a.top/media/","img/carousel2.jpg")},{src:"".concat("https://xn--m83a.top/media/","img/carousel3.jpg")}]}}},l=u,d=a("2877"),p=a("6544"),f=a.n(p),h=a("5e66"),m=a("3e35"),b=Object(d["a"])(l,i,s,!1,null,null,null),v=b.exports;f()(b,{VCarousel:h["a"],VCarouselItem:m["a"]});var g=a("08dd");function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(Object(a),!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var k={name:"home",components:{Carousel:v,HomeCard:g["a"]},created:function(){var t=this;this.axios.get("/card/").then((function(e){t.cards=e.data.results,t.count=e.data.count,t.next=e.data.next,t.previous=e.data.previous})).catch((function(e){t.$store.dispatch("updateAlter",{msg:"获取数据失败",msgType:"error",msgShow:!0}),t.$router.push("/")}))},data:function(){return{count:null,next:null,previous:null,cards:[],homecardsItems:[{id:1,pic:"http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",title:"🇺🇸新墨西哥州Albuquerque# 浪漫的热气球节和似雪的白色沙滩🎈",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}},{id:2,pic:"http://photos.breadtrip.com/photo_2019_10_31_c26207f514c82339d22a3a88912f0ea6.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}},{id:3,pic:"http://photos.breadtrip.com/photo_2019_12_11_33d7de2dd10931d698f65389a5693fc4.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}},{id:4,pic:"http://photos.breadtrip.com/photo_2018_02_18_5e2813ae58c7a944a6622e0dde820c4c.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}},{id:5,pic:"http://photos.breadtrip.com/photo_2019_12_29_d84e13c3d374449b8be03e939b4cbe33.jpg?imageView/2/w/1384/h/1384/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}}]}},methods:{checkauth:function(){this.auth?this.$router.push("/cards/create"):this.$store.dispatch("updateAlter",{msg:"请先登录",msgType:"info",msgShow:!0})}},beforeRouteEnter:function(t,e,a){var r=e.name,n=t.params.logout;a((function(t){if(t.$store.state.auth)switch(r){case"Register":t.$store.dispatch("updateAlter",{msg:"注册成功",msgType:"success",msgShow:!0});break;case"Login":t.$store.dispatch("updateAlter",{msg:"登录成功",msgType:"success",msgShow:!0});break}else n&&t.$store.dispatch("updateAlter",{msg:"操作成功",msgType:"success",msgShow:!0})}))},computed:O({},Object(o["b"])(["auth"])),watch:{auth:function(t){t||this.$store.dispatch("updateAlter",{msg:"操作成功",msgType:"success",msgShow:!0})}}},w=k,j=a("8336"),_=a("132d"),P=a("c73b"),S=Object(d["a"])(w,r,n,!1,null,null,null);e["default"]=S.exports;f()(S,{VBtn:j["a"],VIcon:_["a"],VSpeedDial:P["a"]})},cf3a:function(t,e,a){},e8ec:function(t,e,a){"use strict";var r=localStorage;e["a"]={setItem:function(t,e){r.setItem(t,JSON.stringify(e))},getItem:function(t){try{return JSON.parse(r.getItem(t))}catch(e){return null}},removeItem:function(t){r.removeItem(t)}}}});
//# sourceMappingURL=app.dc3fa9c9.js.map