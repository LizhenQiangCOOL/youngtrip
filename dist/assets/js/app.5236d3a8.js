(function(t){function e(e){for(var a,n,c=e[0],s=e[1],u=e[2],p=0,l=[];p<c.length;p++)n=c[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&l.push(o[n][0]),o[n]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,n=1;n<r.length;n++){var c=r[n];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o={app:0},i=[];function c(t){return s.p+"assets/js/"+({}[t]||t)+"."+{"chunk-4ea7e3ea":"b522a14a","chunk-008652d5":"1115e138","chunk-06cbb92a":"e0c4cfe6","chunk-073c971a":"d82e9c82","chunk-8d5e4b96":"075856b6"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={"chunk-4ea7e3ea":1,"chunk-008652d5":1,"chunk-06cbb92a":1,"chunk-073c971a":1,"chunk-8d5e4b96":1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="assets/css/"+({}[t]||t)+"."+{"chunk-4ea7e3ea":"601c8aad","chunk-008652d5":"a9d517ce","chunk-06cbb92a":"0670aa22","chunk-073c971a":"0670aa22","chunk-8d5e4b96":"648979a5"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===a||p===o))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],p=u.getAttribute("data-href");if(p===a||p===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[t],d.parentNode.removeChild(d),r(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=i);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=c(t);var l=new Error;u=function(e){p.onerror=p.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,r[1](l)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=p;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("Header"),r("v-content",{attrs:{id:"main-trip"}},[r("v-alert",{staticClass:"ma-2",attrs:{dismissible:"",type:t.alter.msgType,value:t.alter.msgShow}},[t._v(t._s(t.alter.msg))]),r("router-view")],1),r("Footer")],1)},o=[],i=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),c=r("2f62"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{staticClass:"pt-1",attrs:{app:"",flex:"",color:"primary",dark:"",src:"https://picsum.photos/1920/1080?random",width:"100%",height:"45%"}},[r("v-btn",{attrs:{icon:"",to:"/"}},[r("v-icon",{attrs:{size:"32"}},[t._v("mdi-home")])],1),r("v-toolbar-title",[r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1),t.auth?r("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",{attrs:{icon:""}},[r("v-avatar",t._g({attrs:{size:"30"}},a),[r("img",{attrs:{src:t.user.userinfo.avatar,alt:t.user.userinfo.user.username}})])],1)]}}],null,!1,3821094325)},[r("v-list",t._l(t.items,(function(e,a){return r("v-list-item",{key:a,on:{click:function(e){return t.memuclick(a)}}},[r("v-icon",[t._v(t._s(e.icon))]),r("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1):r("v-btn",{attrs:{icon:"",to:"/auth/login"}},[r("v-icon",[t._v("mdi-account")])],1)],1)},u=[],p=r("a18c");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"Header",data:function(){return{items:[{title:"个人",icon:"mdi-account-edit"},{title:"退出",icon:"mdi-account-off"}]}},computed:d({},Object(c["b"])(["auth","user"])),methods:{memuclick:function(t){0===t?p["a"].push("/user/edit"):1===t&&this.logout()},logout:function(){this.$store.dispatch("logout")}}},m=f,h=r("2877"),b=r("6544"),g=r.n(b),v=r("40dc"),y=r("8212"),O=r("8336"),_=r("132d"),w=r("adda"),j=r("8860"),P=r("da13"),k=r("5d23"),S=r("e449"),E=r("2fa4"),T=r("2a7f"),A=Object(h["a"])(m,s,u,!1,null,"65b42d19",null),V=A.exports;g()(A,{VAppBar:v["a"],VAvatar:y["a"],VBtn:O["a"],VIcon:_["a"],VImg:w["a"],VList:j["a"],VListItem:P["a"],VListItemTitle:k["b"],VMenu:S["a"],VSpacer:E["a"],VToolbarTitle:T["a"]});var C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-bottom-navigation",{attrs:{flex:"",app:"",grow:"",value:t.activeBtn,color:"deep-purple accent-4"}},t._l(t.items,(function(e){return r("v-btn",{key:e.icon,attrs:{text:"",to:e.to}},[r("span",[t._v(t._s(e.name))]),r("v-icon",[t._v(t._s(e.icon))])],1)})),1)},D=[],x={data:function(){return{activeBtn:0,items:[{name:"首页",icon:"mdi-history",to:"/"},{name:"注意",icon:"mdi-shield-cross",to:"/user/edit"},{name:"个人",icon:"mdi-account-box",to:"/user/edit"}]}}},I=x,U=r("b81c"),$=Object(h["a"])(I,C,D,!1,null,null,null),H=$.exports;function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}g()($,{VBottomNavigation:U["a"],VBtn:O["a"],VIcon:_["a"]});var N={name:"App",components:{Header:V,Footer:H},computed:q({},Object(c["b"])(["alter"])),data:function(){return{}}},B=N,R=r("0798"),M=r("7496"),F=r("a75b"),J=Object(h["a"])(B,n,o,!1,null,null,null),z=J.exports;g()(J,{VAlert:R["a"],VApp:M["a"],VContent:F["a"]});r("b0c0");var G=r("e8ec");function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?K(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}a["a"].use(c["a"]);var W={user:G["a"].getItem("user"),auth:G["a"].getItem("auth"),loading:!1,alter:{msg:"",msgType:"info",msgShow:!1}},X={UPDATE_USER:function(t,e){t.user=e,G["a"].setItem("user",e)},UPDATE_AUTH:function(t,e){t.auth=e,G["a"].setItem("auth",e)},UPDATE_LOADING:function(t,e){t.loading=e},UPDATE_ALTER:function(t,e){t.alter=e}},Y={login:function(t,e){var r=t.commit;e&&r("UPDATE_USER",e),r("UPDATE_AUTH",!0),p["a"].push("/")},logout:function(t){var e=t.commit;e("UPDATE_AUTH",!1),"Home"!==p["a"].history.current.name&&p["a"].push({name:"Home",params:{logout:!0}})},updateAlter:function(t,e){var r=t.state,a=t.commit,n=r.alter;n&&"objects"===typeof n&&(e=Q({},n,{},e)),a("UPDATE_ALTER",e)},updateUser:function(t,e){var r=t.state,a=t.commit,n=r.user;n&&"objects"===typeof n&&(e=Q({},n,{},e)),a("UPDATE_USER",e)}},Z=new c["a"].Store({state:W,mutations:X,actions:Y,modules:{}}),tt=r("f309");a["a"].use(tt["a"]);var et=new tt["a"]({}),rt=r("a7fe"),at=r.n(rt),nt=r("bc3a"),ot=r.n(nt),it=r("8c4f");ot.a.defaults.baseURL="http://127.0.0.1:8000/api",ot.a.defaults.headers.post["Content-Type"]="application/json",a["a"].use(at.a,ot.a),a["a"].config.productionTip=!1;var ct=it["a"].prototype.push;it["a"].prototype.push=function(t){return ct.call(this,t).catch((function(t){return t}))},new a["a"]({router:p["a"],store:Z,vuetify:et,render:function(t){return t(z)}}).$mount("#app")},"6ce3":function(t,e,r){"use strict";var a=r("d8e3"),n=r.n(a);n.a},a18c:function(t,e,r){"use strict";r("c975");var a=r("2b0e"),n=r("8c4f"),o=(r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Carousel"),t._l(t.homecardsItems,(function(t,e){return r("HomeCard",{key:e,attrs:{img:t.img,title:t.title,subtitle:t.subtitle,avatar:t.avatar,author:t.author}})}))],2)}),i=[],c=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),s=r("2f62"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-carousel",{staticClass:"px-3 pt-4",attrs:{cycle:"",height:"180","show-arrows":!1,"hide-delimiter-background":""}},t._l(t.items,(function(t,e){return r("v-carousel-item",{key:e,attrs:{src:t.src}})})),1)},p=[],l={name:"Carousel",data:function(){return{items:[{src:"http://photos.breadtrip.com/covers_2019_12_02_bc50571b6df881e0032e160c517ddc77.jpg?imageView/2/w/960/"},{src:"http://photos.breadtrip.com/covers_2019_02_14_424e0f1c242c8282e09d05e10ad8bad8.jpg?imageView/2/w/960/"},{src:"http://photos.breadtrip.com/covers_2018_07_18_0eb8e1f2c8769a9813a5e5f5e308f364.jpg?imageView/2/w/960/"},{src:"http://photos.breadtrip.com/covers_2019_01_25_b3df653037bcf7b8aeaa6a3bb2355974.jpg?imageView/2/w/960/"},{src:"http://photos.breadtrip.com/covers_2019_07_18_c19646d22d89ba04a0884f493f737c4a.jpg?imageView/2/w/960/"}]}}},d=l,f=r("2877"),m=r("6544"),h=r.n(m),b=r("5e66"),g=r("3e35"),v=Object(f["a"])(d,u,p,!1,null,null,null),y=v.exports;h()(v,{VCarousel:b["a"],VCarouselItem:g["a"]});var O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-3 mt-4 "},[r("v-img",{attrs:{src:t.img,height:"180",gradient:"to left, rgba(100,115,201,.33), rgba(25,32,72,.7)"}},[r("v-card-title",{staticClass:"font-weight-black white--text",domProps:{textContent:t._s(t.title)}}),r("v-card-subtitle",{staticClass:" font-weight-regular body-2 "},[r("v-card",{staticClass:"HomeCard-detail",attrs:{color:"transparent",elevation:"0"}},[r("span",{staticClass:"mx-2 white--text"},[t._v(" "+t._s(t.subtitle))])])],1),r("v-card-text",{staticClass:"HomeCard-bottom"},[r("v-avatar",{attrs:{size:"30"}},[r("img",{attrs:{src:t.avatar,alt:t.author}})]),r("span",{staticClass:"ml-2 white--text  font-weight-regular body-2"},[r("i",[t._v("by")]),t._v(" "+t._s(t.author)+" ")])],1)],1)],1)},_=[],w={props:{img:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0},avatar:{type:String,required:!0},author:{type:String,required:!0}},data:function(){return{}}},j=w,P=(r("6ce3"),r("8212")),k=r("b0af"),S=r("99d9"),E=r("adda"),T=Object(f["a"])(j,O,_,!1,null,"4f7c60e0",null),A=T.exports;function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?V(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}h()(T,{VAvatar:P["a"],VCard:k["a"],VCardSubtitle:S["b"],VCardText:S["c"],VCardTitle:S["d"],VImg:E["a"]});var D={name:"home",components:{Carousel:y,HomeCard:A},data:function(){return{homecardsItems:[{img:"http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",subtitle:"2019.10.1   9025浏览",avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",author:"小一爱客随"},{img:"http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",subtitle:"2019.10.1   9025浏览",avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",author:"小一爱客随"},{img:"http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",subtitle:"2019.10.1   9025浏览",avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",author:"小一爱客随"},{img:"http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",subtitle:"2019.10.1   9025浏览",avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",author:"小一爱客随"},{img:"http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",subtitle:"2019.10.1   9025浏览",avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",author:"小一爱客随"}]}},beforeRouteEnter:function(t,e,r){var a=e.name,n=t.params.logout;r((function(t){if(t.$store.state.auth)switch(a){case"Register":t.$store.dispatch("updateAlter",{msg:"注册成功",msgType:"success",msgShow:!0}),t.timer=setTimeout((function(){t.$store.dispatch("updateAlter",{msgShow:!1})}),3300);break;case"Login":t.$store.dispatch("updateAlter",{msg:"登录成功",msgType:"success",msgShow:!0}),t.timer=setTimeout((function(){t.$store.dispatch("updateAlter",{msgShow:!1})}),3300);break}else n&&(t.$store.dispatch("updateAlter",{msg:"操作成功",msgType:"success",msgShow:!0}),t.timer=setTimeout((function(){t.$store.dispatch("updateAlter",{msgShow:!1})}),3300))}))},computed:C({},Object(s["b"])(["auth"])),watch:{auth:function(t){var e=this;t||(this.$store.dispatch("updateAlter",{msg:"操作成功",msgType:"success",msgShow:!0}),this.timer=setTimeout((function(){e.$store.dispatch("updateAlter",{msgShow:!1})}),3300))}}},x=D,I=Object(f["a"])(x,o,i,!1,null,null,null),U=I.exports,$=[{path:"/",name:"Home",component:U},{path:"/auth/login",name:"Login",component:function(){return Promise.all([r.e("chunk-4ea7e3ea"),r.e("chunk-073c971a")]).then(r.bind(null,"5326"))}},{path:"/auth/register",name:"Register",component:function(){return Promise.all([r.e("chunk-4ea7e3ea"),r.e("chunk-06cbb92a")]).then(r.bind(null,"935e"))}},{path:"/auth/findpassword",name:"FindPassword",component:function(){return Promise.all([r.e("chunk-4ea7e3ea"),r.e("chunk-8d5e4b96")]).then(r.bind(null,"f85d"))}},{path:"/user/edit",name:"edit",component:function(){return Promise.all([r.e("chunk-4ea7e3ea"),r.e("chunk-008652d5")]).then(r.bind(null,"9504"))}},{path:"*",redirect:"/"}];r("0b16");a["a"].use(n["a"]);var H=new n["a"]({base:"",routes:$});H.beforeEach((function(t,e,r){var a=H.app.$options.store.state.auth;a&&-1!==t.path.indexOf("/auth/")?r("/"):r()}));e["a"]=H},d8e3:function(t,e,r){},e8ec:function(t,e,r){"use strict";var a=localStorage;e["a"]={setItem:function(t,e){a.setItem(t,JSON.stringify(e))},getItem:function(t){try{return JSON.parse(a.getItem(t))}catch(e){return null}},removeItem:function(t){a.removeItem(t)}}}});
//# sourceMappingURL=app.5236d3a8.js.map