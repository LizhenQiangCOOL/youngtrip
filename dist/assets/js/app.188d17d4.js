(function(e){function t(t){for(var r,n,o=t[0],i=t[1],u=t[2],d=0,l=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s={app:0},c=[];function o(e){return i.p+"assets/js/"+({}[e]||e)+"."+{"chunk-5dc2c362":"f889f565","chunk-34b5b33e":"96ab9c2e","chunk-7887c8b2":"d713ae19","chunk-92a14dc8":"36c7d25a","chunk-22afa89a":"d27ed98d","chunk-2d0c7e58":"d87daaf9","chunk-2d0e5060":"e6fc8cfe","chunk-55ea97c0":"81f35013","chunk-cba47e84":"f708c8e9","chunk-78d00fd2":"6e4825f8"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-34b5b33e":1,"chunk-7887c8b2":1,"chunk-92a14dc8":1,"chunk-22afa89a":1,"chunk-55ea97c0":1,"chunk-cba47e84":1,"chunk-78d00fd2":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-5dc2c362":"31d6cfe0","chunk-34b5b33e":"4f490747","chunk-7887c8b2":"1d12d943","chunk-92a14dc8":"0670aa22","chunk-22afa89a":"f2ecce65","chunk-2d0c7e58":"31d6cfe0","chunk-2d0e5060":"31d6cfe0","chunk-55ea97c0":"b7b3514a","chunk-cba47e84":"9f4f2c45","chunk-78d00fd2":"1d12d943"}[e]+".css",s=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===s))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===r||d===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete n[e],f.parentNode.removeChild(f),a(c)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("8a23"),n=a.n(r);n.a},"08dd":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"px-3 pt-4",staticStyle:{margin:"0 auto"},attrs:{elevation:"0","max-width":"720px"},on:{click:e.intocontent}},[a("v-img",{attrs:{src:e.img,height:"30vh",gradient:"to right, rgba(0, 0, 0, 0.5) 0%, transparent"}},[a("v-card-title",{staticClass:"font-weight-black white--text",domProps:{textContent:e._s(e.title)}}),a("v-card-subtitle",{staticClass:"font-weight-regular body-2"},[a("v-card",{staticClass:"HomeCard-detail",attrs:{color:"transparent",elevation:"0"}},[a("span",{staticClass:"mx-2 white--text"},[e._v(e._s(e.subtitle))])])],1),a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!e.avatarhidden,expression:"!avatarhidden"}],staticClass:"HomeCard-bottom"},[a("v-avatar",{attrs:{size:"30"}},[a("img",{attrs:{src:e.avatar,alt:e.author}})]),a("span",{staticClass:"ml-2 white--text font-weight-regular body-2"},[a("i",[e._v("by")]),e._v(" "+e._s(e.author)+" ")])],1)],1)],1)},n=[],s=(a("a9e3"),{props:{card:{type:Object,required:!0},id:{type:Number,required:!0},img:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0},avatar:{type:String,required:!0},author:{type:String,required:!0},uid:{type:Number,required:!0},avatarhidden:{type:Boolean,required:!0}},data:function(){return{}},methods:{intocontent:function(){this.$router.push({name:"Content",params:{cardId:this.id,card:this.card}})}}}),c=s,o=(a("098f"),a("2877")),i=a("6544"),u=a.n(i),d=a("8212"),l=a("b0af"),f=a("99d9"),p=a("adda"),h=Object(o["a"])(c,r,n,!1,null,"8ce8b8b8",null);t["a"]=h.exports;u()(h,{VAvatar:d["a"],VCard:l["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VImg:p["a"]})},"098f":function(e,t,a){"use strict";var r=a("fb6e"),n=a.n(r);n.a},4360:function(e,t,a){"use strict";a("a4d3"),a("4de4"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b");var r=a("ade3"),n=a("53ca"),s=a("2b0e"),c=a("2f62"),o=a("e8ec"),i=a("a18c");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}s["a"].use(c["a"]);var l={user:o["a"].getItem("user"),auth:o["a"].getItem("auth"),loading:!1,alter:{msg:"",msgType:"info",msgShow:!1},searchValue:""},f={UPDATE_USER:function(e,t){e.user=t,o["a"].setItem("user",t)},UPDATE_AUTH:function(e,t){e.auth=t,o["a"].setItem("auth",t)},UPDATE_LOADING:function(e,t){e.loading=t},UPDATE_ALTER:function(e,t){e.alter=t},UPDATE_SEARCH_VALUE:function(e,t){e.searchValue=t}},p={login:function(e,t){var a=e.commit;t&&a("UPDATE_USER",t),a("UPDATE_AUTH",!0),i["a"].push("/")},logout:function(e){var t=e.commit;t("UPDATE_AUTH",!1),"Home"!==i["a"].history.current.name&&i["a"].push({name:"Home",params:{logout:!0}})},updateAlter:function(e,t){var a=e.state,r=e.commit,s=a.alter;s&&"object"===Object(n["a"])(s)&&(t=d({},s,{},t)),r("UPDATE_ALTER",t)},updateUser:function(e,t){var a=e.state,r=e.commit,s=a.user;s&&"object"===Object(n["a"])(s)&&(t=d({},s,{},t)),r("UPDATE_USER",t)}};t["a"]=new c["a"].Store({state:l,mutations:f,actions:p,modules:{}})},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Header"),a("v-snackbar",{attrs:{color:e.alter.msgType,"multi-line":"",timeout:e.timeout,top:""},model:{value:e.alter.msgShow,callback:function(t){e.$set(e.alter,"msgShow",t)},expression:"alter.msgShow"}},[e._v(" "+e._s(e.alter.msg)+" "),a("v-btn",{attrs:{color:"white",icon:""},on:{click:e.closesnackbar}},[a("v-icon",[e._v("mdi-close-circle")])],1)],1),a("v-content",{staticClass:"d-flex",attrs:{id:"main-trip"}},[a("v-card",{staticStyle:{margin:"0 auto"},attrs:{elevation:"0","max-width":"740px"}},[a("router-view")],1)],1),a("Footer")],1)},s=[],c=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),o=a("2f62"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{staticClass:"pt-1",attrs:{app:"",flex:"",color:"primary",dark:"",src:"https://picsum.photos/1920/1080?random",width:"100%",height:"50%"}},[a("v-btn",{attrs:{icon:"",to:"/"}},[a("v-icon",{attrs:{size:"32"}},[e._v("mdi-home")])],1),a("v-toolbar-title",[e._v("青年游记")]),a("v-spacer"),a("v-expand-x-transition",[a("v-text-field",{directives:[{name:"show",rawName:"v-show",value:e.expandsearch,expression:"expandsearch"}],attrs:{flat:"","solo-inverted":"","hide-details":"",dense:"","prepend-inner-icon":"mdi-magnify",label:"Search",rounded:"",clearable:"",id:"searchItem",color:"green"},on:{blur:function(t){e.expandsearch=!1},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:e.updateSearchValue},model:{value:e.searchValue,callback:function(t){e.searchValue="string"===typeof t?t.trim():t},expression:"searchValue"}})],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.expandsearch=!e.expandsearch}}},[a("v-icon",[e._v("mdi-magnify")])],1),e.auth?a("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",{attrs:{icon:""}},[a("v-avatar",e._g({attrs:{size:"30"}},r),[a("img",{attrs:{src:e.user.userinfo.avatar,alt:e.user.userinfo.user.username}})])],1)]}}],null,!1,3821094325)},[a("v-list",e._l(e.items,(function(t,r){return a("v-list-item",{key:r,on:{click:function(t){return e.memuclick(r)}}},[a("v-icon",[e._v(e._s(t.icon))]),a("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1):a("v-btn",{attrs:{icon:"",to:"/auth/login"}},[a("v-icon",[e._v("mdi-account")])],1)],1)},u=[],d=a("a18c");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={name:"Header",data:function(){return{items:[{title:"游记",icon:"mdi-format-list-bulleted"},{title:"个人",icon:"mdi-account-edit"},{title:"退出",icon:"mdi-account-off"}],expandsearch:!1,value:""}},computed:f({},Object(o["b"])(["auth","user"]),{searchValue:{get:function(){return this.$store.state.searchValue},set:function(e){this.value=e}}}),methods:{memuclick:function(e){1===e?d["a"].push("/user/edit"):2===e?this.logout():0===e&&this.$router.push({name:"Column",params:{user:this.user.userinfo.id,name:this.user.userinfo.user.username,avatar:this.user.userinfo.avatar}})},logout:function(){this.$store.dispatch("logout")},search:function(){var e=this.value;""!==e&&console.log(e)},updateSearchValue:function(){this.$store.commit("UPDATE_SEARCH_VALUE",this.value)}}},h=p,b=a("2877"),m=a("6544"),j=a.n(m),v=a("40dc"),g=a("8212"),y=a("8336"),k=a("0789"),O=a("132d"),w=a("8860"),_=a("da13"),x=a("5d23"),P=a("e449"),S=a("2fa4"),E=a("8654"),V=a("2a7f"),C=Object(b["a"])(h,i,u,!1,null,"0c66671a",null),A=C.exports;j()(C,{VAppBar:v["a"],VAvatar:g["a"],VBtn:y["a"],VExpandXTransition:k["b"],VIcon:O["a"],VList:w["a"],VListItem:_["a"],VListItemTitle:x["b"],VMenu:P["a"],VSpacer:S["a"],VTextField:E["a"],VToolbarTitle:V["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-bottom-navigation",{staticClass:"d=felx d-md-none",attrs:{flex:"",app:"",grow:"",value:e.activeBtn,color:"deep-purple accent-4"}},e._l(e.items,(function(t){return a("v-btn",{key:t.icon,attrs:{text:"",to:t.to}},[a("span",[e._v(e._s(t.name))]),a("v-icon",[e._v(e._s(t.icon))])],1)})),1)},D=[],z={data:function(){return{activeBtn:0,items:[{name:"首页",icon:"mdi-history",to:"/"},{name:"喜欢",icon:"mdi-cards-heart",to:"/cards/likecard"},{name:"个人",icon:"mdi-account-box",to:"/user/edit"}]}}},I=z,U=a("b81c"),$=Object(b["a"])(I,T,D,!1,null,null,null),q=$.exports;function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}j()($,{VBottomNavigation:U["a"],VBtn:y["a"],VIcon:O["a"]});var N={name:"App",components:{Header:A,Footer:q},computed:H({},Object(o["b"])(["alter"])),data:function(){return{timeout:3e3}},methods:{closesnackbar:function(){this.$store.dispatch("updateAlter",{msgShow:!1})}}},B=N,R=(a("034f"),a("7496")),F=a("b0af"),M=a("a75b"),J=a("2db4"),G=Object(b["a"])(B,n,s,!1,null,null,null),K=G.exports;j()(G,{VApp:R["a"],VBtn:y["a"],VCard:F["a"],VContent:M["a"],VIcon:O["a"],VSnackbar:J["a"]});var X=a("4360"),Q=a("f309");r["a"].use(Q["a"]);var W=new Q["a"]({}),Y=a("a7fe"),Z=a.n(Y),ee=a("bc3a"),te=a.n(ee),ae=a("53ca"),re=a("c1df"),ne=a.n(re);a("3c43");ne.a.locale("zh-cn");var se=function(e){var t=e;if(ne()(t).isValid()){for(var a=arguments.length,r=new Array(a>1?a-1:0),n=1;n<a;n++)r[n-1]=arguments[n];var s=r.shift();if("string"===typeof s)switch(s){case"from":e=ne()(t).from();var c=r.shift();c&&"object"===Object(ae["a"])(c)&&(e=ne()(t).startOf(c.startOf).from());break;default:e=ne()(t).format(s)}}return e};r["a"].filter("moment",se);var ce=a("8c4f");te.a.defaults.baseURL="https://xn--m83a.top/api",te.a.defaults.headers.post["Content-Type"]="application/json",r["a"].use(Z.a,te.a),r["a"].config.productionTip=!1;var oe=ce["a"].prototype.push;ce["a"].prototype.push=function(e){return oe.call(this,e).catch((function(e){return e}))},new r["a"]({router:d["a"],store:X["a"],vuetify:W,render:function(e){return e(K)}}).$mount("#app")},"8a23":function(e,t,a){},a18c:function(e,t,a){"use strict";a("c975");var r=a("2b0e"),n=a("8c4f"),s=(a("d3b7"),a("bb51"),[{path:"/",name:"Home",component:function(){return Promise.resolve().then(a.bind(null,"bb51"))}},{path:"/auth/login",name:"Login",component:function(){return Promise.all([a.e("chunk-92a14dc8"),a.e("chunk-5dc2c362"),a.e("chunk-2d0c7e58")]).then(a.bind(null,"5326"))}},{path:"/auth/register",name:"Register",component:function(){return Promise.all([a.e("chunk-92a14dc8"),a.e("chunk-5dc2c362"),a.e("chunk-2d0e5060")]).then(a.bind(null,"935e"))}},{path:"/auth/findpassword",name:"FindPassword",component:function(){return Promise.all([a.e("chunk-92a14dc8"),a.e("chunk-5dc2c362"),a.e("chunk-55ea97c0")]).then(a.bind(null,"f85d"))}},{path:"/user/edit",name:"edit",component:function(){return Promise.all([a.e("chunk-5dc2c362"),a.e("chunk-34b5b33e")]).then(a.bind(null,"9504"))},meta:{auth:!0}},{path:"/cards/create",name:"Create",component:function(){return Promise.all([a.e("chunk-92a14dc8"),a.e("chunk-5dc2c362"),a.e("chunk-cba47e84")]).then(a.bind(null,"0eef"))},meta:{auth:!0}},{path:"/cards/:cardId/content",name:"Content",component:function(){return Promise.all([a.e("chunk-92a14dc8"),a.e("chunk-22afa89a")]).then(a.bind(null,"6d02"))}},{path:"/cards/:cardId/edit",name:"Edit",component:function(){return Promise.all([a.e("chunk-92a14dc8"),a.e("chunk-5dc2c362"),a.e("chunk-cba47e84")]).then(a.bind(null,"0eef"))},meta:{auth:!0}},{path:"/:user",name:"Column",component:function(){return Promise.all([a.e("chunk-92a14dc8"),a.e("chunk-78d00fd2")]).then(a.bind(null,"5fac"))}},{path:"/cards/likecard",name:"Likecard",component:function(){return a.e("chunk-7887c8b2").then(a.bind(null,"0bab"))},meta:{auth:!0}},{path:"*",redirect:"/"}]),c=a("4360");a("0b16");r["a"].use(n["a"]);var o=new n["a"]({base:"",routes:s});o.beforeEach((function(e,t,a){var r=o.app.$options.store.state.auth;r&&-1!==e.path.indexOf("/auth/")?a("/"):!r&&e.meta.auth?(a("/"),c["a"].dispatch("updateAlter",{msg:"请先登录",msgType:"info",msgShow:!0})):a()})),o.afterEach((function(e,t,a){window.scrollTo(0,0)}));t["a"]=o},bb51:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Carousel"),e._l(e.cards,(function(e){return a("HomeCard",{key:e.id,attrs:{card:e,id:e.id,img:e.pic,title:e.title,subtitle:e.date,avatar:e.userprofile.avatar,author:e.userprofile.username,uid:e.userprofile.id,avatarhidden:!1}})})),a("v-speed-dial",{staticClass:"d=felx d-md-none",attrs:{fixed:"",bottom:"",right:"",value:"true"}},[a("v-btn",{staticStyle:{position:"relative",top:"-25px",left:"-25px"},attrs:{color:"pink",fab:""},on:{click:e.checkauth}},[a("v-icon",[e._v("mdi-plus")])],1)],1)],2)},n=[],s=(a("a4d3"),a("4de4"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),c=a("2f62"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-carousel",{staticClass:"px-3 pt-4",attrs:{cycle:"",height:"30vh","show-arrows":!1,"hide-delimiter-background":""}},e._l(e.items,(function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e.src}})})),1)},i=[],u={name:"Carousel",data:function(){return{items:[{src:"".concat("https://xn--m83a.top/media/","img/carousel1.jpg")},{src:"".concat("https://xn--m83a.top/media/","img/carousel2.jpg")},{src:"".concat("https://xn--m83a.top/media/","img/carousel3.jpg")}]}}},d=u,l=a("2877"),f=a("6544"),p=a.n(f),h=a("5e66"),b=a("3e35"),m=Object(l["a"])(d,o,i,!1,null,null,null),j=m.exports;p()(m,{VCarousel:h["a"],VCarouselItem:b["a"]});var v=a("08dd");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k={name:"home",components:{Carousel:j,HomeCard:v["a"]},created:function(){var e=this;this.axios.get("/card/").then((function(t){e.cards=t.data.results,e.count=t.data.count,e.next=t.data.next,e.previous=t.data.previous})).catch((function(t){e.$store.dispatch("updateAlter",{msg:"获取数据失败",msgType:"error",msgShow:!0}),e.$router.push("/")}))},data:function(){return{count:null,next:null,previous:null,cards:[],homecardsItems:[{id:1,pic:"http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",title:"🇺🇸新墨西哥州Albuquerque# 浪漫的热气球节和似雪的白色沙滩🎈",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}},{id:2,pic:"http://photos.breadtrip.com/photo_2019_10_31_c26207f514c82339d22a3a88912f0ea6.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}},{id:3,pic:"http://photos.breadtrip.com/photo_2019_12_11_33d7de2dd10931d698f65389a5693fc4.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}},{id:4,pic:"http://photos.breadtrip.com/photo_2018_02_18_5e2813ae58c7a944a6622e0dde820c4c.jpg?imageView/1/w/640/h/480/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}},{id:5,pic:"http://photos.breadtrip.com/photo_2019_12_29_d84e13c3d374449b8be03e939b4cbe33.jpg?imageView/2/w/1384/h/1384/q/85",title:"非洲海岛流浪记🇲🇺毛里求斯cdn",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}}]}},methods:{checkauth:function(){this.auth?this.$router.push("/cards/create"):this.$store.dispatch("updateAlter",{msg:"请先登录",msgType:"info",msgShow:!0})}},beforeRouteEnter:function(e,t,a){var r=t.name,n=e.params.logout;a((function(e){if(e.$store.state.auth)switch(r){case"Register":e.$store.dispatch("updateAlter",{msg:"注册成功",msgType:"success",msgShow:!0});break;case"Login":e.$store.dispatch("updateAlter",{msg:"登录成功",msgType:"success",msgShow:!0});break}else n&&e.$store.dispatch("updateAlter",{msg:"操作成功",msgType:"success",msgShow:!0})}))},computed:y({},Object(c["b"])(["auth"])),watch:{auth:function(e){e||this.$store.dispatch("updateAlter",{msg:"操作成功",msgType:"success",msgShow:!0})}}},O=k,w=a("8336"),_=a("132d"),x=a("c73b"),P=Object(l["a"])(O,r,n,!1,null,null,null);t["default"]=P.exports;p()(P,{VBtn:w["a"],VIcon:_["a"],VSpeedDial:x["a"]})},e8ec:function(e,t,a){"use strict";var r=localStorage;t["a"]={setItem:function(e,t){r.setItem(e,JSON.stringify(t))},getItem:function(e){try{return JSON.parse(r.getItem(e))}catch(t){return null}},removeItem:function(e){r.removeItem(e)}}},fb6e:function(e,t,a){}});
//# sourceMappingURL=app.188d17d4.js.map