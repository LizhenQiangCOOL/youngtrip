(function(e){function t(t){for(var r,n,i=t[0],o=t[1],u=t[2],d=0,l=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&l.push(c[n][0]),c[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==c[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},c={app:0},s=[];function i(e){return o.p+"assets/js/"+({}[e]||e)+"."+{"chunk-0f691e06":"02d27232","chunk-3d629f9c":"9d06f96e","chunk-5dc2c362":"978877de","chunk-13b2a492":"55e4dbf8","chunk-2c8d9ed8":"dd064538","chunk-2c9142e8":"39eb8f09","chunk-81938010":"512ae754","chunk-0cda507e":"399dbda4","chunk-1f03a656":"e920be5f","chunk-2d0b3401":"31cfd84b","chunk-f86effda":"c671f25d","chunk-65b1ddc7":"37cd9afc","chunk-7887c8b2":"1a3b23a8","chunk-7f38105a":"a31fa7c0","chunk-105d8871":"c3f60ca0","chunk-1072981a":"90605cbf"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-0f691e06":1,"chunk-3d629f9c":1,"chunk-13b2a492":1,"chunk-81938010":1,"chunk-0cda507e":1,"chunk-1f03a656":1,"chunk-f86effda":1,"chunk-65b1ddc7":1,"chunk-7887c8b2":1,"chunk-7f38105a":1,"chunk-105d8871":1,"chunk-1072981a":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-0f691e06":"1d12d943","chunk-3d629f9c":"88f9f24c","chunk-5dc2c362":"31d6cfe0","chunk-13b2a492":"07d772b1","chunk-2c8d9ed8":"31d6cfe0","chunk-2c9142e8":"31d6cfe0","chunk-81938010":"be194fd2","chunk-0cda507e":"e1bb24b7","chunk-1f03a656":"7ee080d6","chunk-2d0b3401":"31d6cfe0","chunk-f86effda":"a58bf20f","chunk-65b1ddc7":"710d352b","chunk-7887c8b2":"1d12d943","chunk-7f38105a":"1484913c","chunk-105d8871":"3273cc88","chunk-1072981a":"a7a556f3"}[e]+".css",c=o.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===c))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[e],f.parentNode.removeChild(f),a(s)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){n[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,a){r=c[e]=[t,a]}));t.push(r[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=c[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("8a23"),n=a.n(r);n.a},"08dd":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{elevation:"0"}},[a("v-card",{staticClass:"px-3 pt-3 pb-1",staticStyle:{margin:"0 auto"},attrs:{elevation:"0","max-width":"720px"},on:{click:e.intocontent}},[a("v-img",{staticClass:"handelheight",attrs:{src:e.img,"lazy-src":e.lazyimg,gradient:"to right, rgba(0, 0, 0, 0.5) 0%, transparent"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[a("v-card-title",{staticClass:"font-weight-black white--text",domProps:{textContent:e._s(e.title)}}),a("v-card-subtitle",{staticClass:"font-weight-regular body-2"},[a("v-card",{staticClass:"HomeCard-detail",attrs:{color:"transparent",elevation:"0"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:"null null"!==e.subtitle,expression:"subtitle!=='null null'"}],staticClass:"mx-2 white--text"},[e._v(e._s(e.subtitle))])])],1),a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!e.avatarhidden,expression:"!avatarhidden"}],staticClass:"HomeCard-bottom"},[a("v-avatar",{attrs:{size:"30"}},[a("img",{attrs:{src:e.avatar,alt:e.author}})]),a("span",{staticClass:"ml-2 white--text font-weight-regular body-2"},[a("i",[e._v("by")]),e._v(" "+e._s(e.author)+" ")])],1)],1)],1),e.tripdelflag&&1==e.tripdelflag?a("v-card-actions",{staticClass:"ml-2"},[a("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white"},on:{click:function(t){return e.deltrip(e.card)}}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",[e._v("mdi-delete")])],1),e._v("删除 ")],1),a("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white"},on:{click:function(t){return e.edittrip(e.card)}}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",[e._v("mdi-content-save-edit")])],1),e._v("修改 ")],1)],1):e._e()],1)},n=[],c=(a("a9e3"),{props:{card:{type:Object,required:!0},id:{type:Number,required:!0},img:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0},avatar:{type:String,required:!0},author:{type:String,required:!0},uid:{type:Number,required:!0},avatarhidden:{type:Boolean,required:!0},flag:{type:Boolean,required:!0},tripdelflag:{type:Boolean,required:!1}},data:function(){return{lazyimg:"".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_IMGURL,"img/lazyimg.jpg")}},methods:{intocontent:function(){this.flag?this.$router.push({name:"Trip",params:{tripId:this.id,trip:this.card}}):this.$router.push({name:"Content",params:{cardId:this.id,card:this.card}})},deltrip:function(e){this.$emit("deltrip",e)},edittrip:function(e){this.$emit("edittrip",e)}}}),s=c,i=(a("6ba3"),a("2877")),o=a("6544"),u=a.n(o),d=a("8212"),l=a("b0af"),f=a("99d9"),h=a("cc20"),p=a("132d"),b=a("adda"),m=a("490a"),v=a("0fd9"),g=Object(i["a"])(s,r,n,!1,null,"aea01712",null);t["a"]=g.exports;u()(g,{VAvatar:d["a"],VCard:l["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VChip:h["a"],VIcon:p["a"],VImg:b["a"],VProgressCircular:m["a"],VRow:v["a"]})},4360:function(e,t,a){"use strict";a("a4d3"),a("4de4"),a("c740"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b");var r=a("ade3"),n=a("53ca"),c=a("2b0e"),s=a("2f62"),i=a("e8ec"),o=a("a18c");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}c["a"].use(s["a"]);var l={user:i["a"].getItem("user"),auth:i["a"].getItem("auth"),loading:!1,alter:{msg:"",msgType:"info",msgShow:!1},searchValue:"",trip:i["a"].getItem("trip")},f={UPDATE_USER:function(e,t){e.user=t,i["a"].setItem("user",t)},UPDATE_AUTH:function(e,t){e.auth=t,i["a"].setItem("auth",t)},UPDATE_LOADING:function(e,t){e.loading=t},UPDATE_ALTER:function(e,t){e.alter=t},UPDATE_SEARCH_VALUE:function(e,t){e.searchValue=t},UPDATE_TRIP:function(e,t){e.trip=t,i["a"].setItem("trip",t)}},h={login:function(e,t){var a=e.commit;t&&a("UPDATE_USER",t),a("UPDATE_AUTH",!0),o["a"].push("/")},logout:function(e){var t=e.commit;t("UPDATE_AUTH",!1),"Home"!==o["a"].history.current.name&&o["a"].push({name:"Home",params:{logout:!0}})},updateAlter:function(e,t){var a=e.state,r=e.commit,c=a.alter;c&&"object"===Object(n["a"])(c)&&(t=d({},c,{},t)),r("UPDATE_ALTER",t)},updateUser:function(e,t){var a=e.state,r=e.commit,c=a.user;c&&"object"===Object(n["a"])(c)&&(t=d({},c,{},t)),r("UPDATE_USER",t)},updateTrip:function(e,t){var a=e.state,r=e.commit,c=a.trip;c&&"object"===Object(n["a"])(c)&&(t=d({},c,{},t)),r("UPDATE_TRIP",t)},clearTrip:function(e){e.state;var t=e.commit,a={id:null,title:"",picurl:"",cards:[],firstday:"",location:""};t("UPDATE_TRIP",a)},updateTripAddCards:function(e,t){var a=e.state,r=e.commit,n=a.trip;n.cards.push(t),r("UPDATE_TRIP",n)},updateTripCard:function(e,t){var a=e.state,r=e.commit;function n(e){return e.id==t.id}var c=a.trip,s=c.cards.findIndex(n);c.cards[s]=t,r("UPDATE_TRIP",c)}};t["a"]=new s["a"].Store({state:l,mutations:f,actions:h,modules:{}})},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Header"),a("v-snackbar",{attrs:{color:e.alter.msgType,"multi-line":"",timeout:e.timeout,top:""},model:{value:e.alter.msgShow,callback:function(t){e.$set(e.alter,"msgShow",t)},expression:"alter.msgShow"}},[e._v(" "+e._s(e.alter.msg)+" "),a("v-btn",{attrs:{color:"white",icon:""},on:{click:e.closesnackbar}},[a("v-icon",[e._v("mdi-close-circle")])],1)],1),a("v-content",{staticClass:"d-flex",attrs:{id:"main-trip"}},[a("v-card",{staticStyle:{margin:"0 auto"},attrs:{elevation:"0","max-width":"740px"}},[a("router-view")],1)],1),a("Footer")],1)},c=[],s=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),i=a("2f62"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{staticClass:"pt-1",attrs:{app:"",flex:"",color:"primary",dark:"",src:e.bgimg,width:"100%",height:"50%"}},[a("v-btn",{attrs:{icon:"",to:"/"}},[a("v-icon",{attrs:{size:"32"}},[e._v("mdi-home")])],1),a("v-toolbar-title",[e._v("青年游记")]),a("v-spacer"),a("v-expand-x-transition",[e.expandsearch?a("v-text-field",{attrs:{flat:"","solo-inverted":"","hide-details":"",dense:"","prepend-inner-icon":"mdi-magnify",label:"Search",rounded:"",clearable:"",autofocus:"",id:"search-item",color:"green","background-color":"blue-grey lighten-5"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:e.updateSearchValue},model:{value:e.searchValue,callback:function(t){e.searchValue="string"===typeof t?t.trim():t},expression:"searchValue"}}):e._e()],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.expandsearch=!e.expandsearch}}},[a("v-icon",[e._v("mdi-magnify")])],1),e.auth?a("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",{attrs:{icon:""}},[a("v-avatar",e._g({attrs:{size:"30"}},r),[a("img",{attrs:{src:e.user.userinfo.avatar,alt:e.user.userinfo.user.username}})])],1)]}}],null,!1,3821094325)},[a("v-list",e._l(e.items,(function(t,r){return a("v-list-item",{key:r,on:{click:function(t){return e.memuclick(r)}}},[a("v-icon",{staticClass:"mx-1"},[e._v(e._s(t.icon))]),a("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1):a("v-btn",{attrs:{icon:"",to:"/auth/login"}},[a("v-icon",[e._v("mdi-account")])],1)],1)},u=[],d=a("a18c");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h={name:"Header",data:function(){return{bgimg:"".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_IMGURL,"img/headbg.png"),items:[{title:"增加游记",icon:"mdi-plus-circle-outline"},{title:"个人喜欢",icon:"mdi-cards-heart"},{title:"个人中心",icon:"mdi-card-account-details"},{title:"修改信息",icon:"mdi-account-edit"},{title:"退出登录",icon:"mdi-account-off"}],expandsearch:!1,value:""}},computed:f({},Object(i["b"])(["auth","user"]),{searchValue:{get:function(){return this.$store.state.searchValue},set:function(e){this.value=e}}}),methods:{memuclick:function(e){switch(e){case 0:this.$router.push("/trips/create");break;case 1:this.$router.push("/cards/likecard");break;case 2:this.$router.push({name:"Column",params:{user:this.$store.state.user.userinfo.id,name:this.$store.state.user.userinfo.user.username,avatar:this.$store.state.user.userinfo.avatar}});break;case 3:d["a"].push("/user/edit");break;case 4:this.logout();break}},logout:function(){this.$store.dispatch("logout"),this.$store.dispatch("clearTrip")},search:function(){var e=this.value;""!==e&&this.$router.push({name:"Search",query:{q:e}})},updateSearchValue:function(){this.$store.commit("UPDATE_SEARCH_VALUE",this.value)}}},p=h,b=a("2877"),m=a("6544"),v=a.n(m),g=a("40dc"),j=a("8212"),k=a("8336"),y=a("0789"),O=a("132d"),w=a("8860"),_=a("da13"),P=a("5d23"),E=a("e449"),S=a("2fa4"),x=a("8654"),T=a("2a7f"),A=Object(b["a"])(p,o,u,!1,null,"68a1165b",null),C=A.exports;v()(A,{VAppBar:g["a"],VAvatar:j["a"],VBtn:k["a"],VExpandXTransition:y["b"],VIcon:O["a"],VList:w["a"],VListItem:_["a"],VListItemTitle:P["b"],VMenu:E["a"],VSpacer:S["a"],VTextField:x["a"],VToolbarTitle:T["a"]});var V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-bottom-navigation",{staticClass:"d=felx d-md-none",attrs:{flex:"",app:"",grow:"",value:e.activeBtn,color:"deep-purple accent-4","input-value":!e.hiddenvbn}},e._l(e.items,(function(t,r){return a("v-btn",{key:t.icon,attrs:{text:""},on:{click:function(t){return e.intopage(r)}}},[a("span",[e._v(e._s(t.name))]),a("v-icon",[e._v(e._s(t.icon))])],1)})),1)},$=[],I=(a("b0c0"),{watch:{$route:{handler:function(e,t){var a=e.name;switch(a){case"Home":this.hiddenvbn=!1,this.activeBtn=0;break;case"Likecard":this.hiddenvbn=!1,this.activeBtn=1;break;case"Column":var r=e.params.user||null;r&&this.$store.state.auth&&this.$store.state.user.userinfo.id===r?(this.hiddenvbn=!1,this.activeBtn=2):this.hiddenvbn=!0;break;default:this.hiddenvbn=!0}}}},data:function(){return{hiddenvbn:!1,activeBtn:0,items:[{name:"首页",icon:"mdi-history"},{name:"喜欢",icon:"mdi-cards-heart"},{name:"个人",icon:"mdi-account-box"}]}},methods:{intopage:function(e){switch(e){case 0:this.$router.push("/");break;case 1:this.$router.push("/cards/likecard");break;case 2:this.$store.state.auth?this.$router.push({name:"Column",params:{user:this.$store.state.user.userinfo.id,name:this.$store.state.user.userinfo.user.username,avatar:this.$store.state.user.userinfo.avatar}}):this.$store.dispatch("updateAlter",{msg:"请先登录",msgType:"info",msgShow:!0});break}}}}),U=I,D=a("b81c"),z=Object(b["a"])(U,V,$,!1,null,null,null),L=z.exports;function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}v()(z,{VBottomNavigation:D["a"],VBtn:k["a"],VIcon:O["a"]});var B={name:"App",components:{Header:C,Footer:L},computed:N({},Object(i["b"])(["alter"])),data:function(){return{timeout:3e3}},methods:{closesnackbar:function(){this.$store.dispatch("updateAlter",{msgShow:!1})}}},q=B,H=(a("034f"),a("7496")),M=a("b0af"),G=a("a75b"),F=a("2db4"),J=Object(b["a"])(q,n,c,!1,null,null,null),K=J.exports;v()(J,{VApp:H["a"],VBtn:k["a"],VCard:M["a"],VContent:G["a"],VIcon:O["a"],VSnackbar:F["a"]});var X=a("4360"),Q=a("f309");r["a"].use(Q["a"]);var W=new Q["a"]({}),Y=a("a7fe"),Z=a.n(Y),ee=a("bc3a"),te=a.n(ee),ae=a("53ca"),re=a("c1df"),ne=a.n(re);a("3c43");ne.a.locale("zh-cn");var ce=function(e){var t=e;if(ne()(t).isValid()){for(var a=arguments.length,r=new Array(a>1?a-1:0),n=1;n<a;n++)r[n-1]=arguments[n];var c=r.shift();if("string"===typeof c)switch(c){case"from":e=ne()(t).from();var s=r.shift();s&&"object"===Object(ae["a"])(s)&&(e=ne()(t).startOf(s.startOf).from());break;default:e=ne()(t).format(c)}}return e};r["a"].filter("moment",ce);var se=a("8c4f");te.a.defaults.baseURL="https://xn--m83a.top/api",te.a.defaults.headers.post["Content-Type"]="application/json",r["a"].use(Z.a,te.a),r["a"].config.productionTip=!1;var ie=se["a"].prototype.push;se["a"].prototype.push=function(e){return ie.call(this,e).catch((function(e){return e}))},new r["a"]({router:d["a"],store:X["a"],vuetify:W,render:function(e){return e(K)}}).$mount("#app")},"6ba3":function(e,t,a){"use strict";var r=a("971c"),n=a.n(r);n.a},"8a23":function(e,t,a){},"971c":function(e,t,a){},a18c:function(e,t,a){"use strict";a("c975");var r=a("2b0e"),n=a("8c4f"),c=(a("d3b7"),a("bb51"),a("c1df"),[{path:"/",name:"Home",component:function(){return Promise.resolve().then(a.bind(null,"bb51"))}},{path:"/auth/login",name:"Login",component:function(){return Promise.all([a.e("chunk-5dc2c362"),a.e("chunk-2c9142e8")]).then(a.bind(null,"5326"))}},{path:"/auth/register",name:"Register",component:function(){return Promise.all([a.e("chunk-5dc2c362"),a.e("chunk-2c8d9ed8")]).then(a.bind(null,"935e"))}},{path:"/auth/findpassword",name:"FindPassword",component:function(){return Promise.all([a.e("chunk-5dc2c362"),a.e("chunk-f86effda")]).then(a.bind(null,"f85d"))}},{path:"/user/edit",name:"edit",component:function(){return Promise.all([a.e("chunk-5dc2c362"),a.e("chunk-13b2a492")]).then(a.bind(null,"9504"))},meta:{auth:!0}},{path:"/slides/:slideId/content",name:"Slide",component:function(){return a.e("chunk-3d629f9c").then(a.bind(null,"2598"))}},{path:"/trips/create",name:"TripCreate",component:function(){return Promise.all([a.e("chunk-5dc2c362"),a.e("chunk-81938010"),a.e("chunk-0cda507e"),a.e("chunk-2d0b3401")]).then(a.bind(null,"2827"))},meta:{auth:!0}},{path:"/trips/:tripId/content",name:"Trip",component:function(){return Promise.all([a.e("chunk-81938010"),a.e("chunk-1072981a")]).then(a.bind(null,"5e35"))}},{path:"/cards/create",name:"Create",component:function(){return Promise.all([a.e("chunk-5dc2c362"),a.e("chunk-81938010"),a.e("chunk-0cda507e"),a.e("chunk-1f03a656")]).then(a.bind(null,"0eef"))},meta:{auth:!0}},{path:"/cards/:cardId/content",name:"Content",component:function(){return Promise.all([a.e("chunk-81938010"),a.e("chunk-105d8871")]).then(a.bind(null,"6d02"))}},{path:"/cards/:cardId/edit",name:"Edit",component:function(){return Promise.all([a.e("chunk-5dc2c362"),a.e("chunk-81938010"),a.e("chunk-0cda507e"),a.e("chunk-1f03a656")]).then(a.bind(null,"0eef"))},meta:{auth:!0}},{path:"/search",name:"Search",component:function(){return a.e("chunk-65b1ddc7").then(a.bind(null,"2d3b"))}},{path:"/:user",name:"Column",component:function(){return a.e("chunk-0f691e06").then(a.bind(null,"5fac"))}},{path:"/cards/likecard",name:"Likecard",component:function(){return a.e("chunk-7887c8b2").then(a.bind(null,"0bab"))},meta:{auth:!0}},{path:"/user/follow",name:"follow",component:function(){return a.e("chunk-7f38105a").then(a.bind(null,"d6f6"))}},{path:"*",redirect:"/"}]),s=a("4360");a("0b16");r["a"].use(n["a"]);var i=new n["a"]({base:"",routes:c});i.beforeEach((function(e,t,a){var r=i.app.$options.store.state.auth;r&&-1!==e.path.indexOf("/auth/")?a("/"):!r&&e.meta.auth?(a("/"),s["a"].dispatch("updateAlter",{msg:"请先登录",msgType:"info",msgShow:!0})):a()})),i.afterEach((function(e,t,a){window.scrollTo(0,0)}));t["a"]=i},bb51:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Carousel"),e._l(e.cards,(function(e){return a("HomeCard",{key:e.id,attrs:{card:e,id:e.id,img:e.pic,title:e.title,subtitle:e.firstday+" "+e.location,avatar:e.userprofile.avatar,author:e.userprofile.username,uid:e.userprofile.id,avatarhidden:!1,flag:!0}})})),a("v-speed-dial",{staticClass:"d-felx d-md-none",attrs:{fixed:"",bottom:"",right:"",value:"true"}},[a("v-btn",{staticStyle:{position:"relative",top:"-25px",left:"-25px"},attrs:{color:"pink",fab:""},on:{click:e.checkauth}},[a("v-icon",[e._v("mdi-plus")])],1)],1),a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{page:e.page,length:e.pagelength,circle:""},on:{input:e.paginationInput},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],2)},n=[],c=(a("a4d3"),a("4de4"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),s=a("2f62"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-carousel",{staticClass:"px-3 pt-4",attrs:{cycle:"",height:"30vh","show-arrows":!1,"hide-delimiter-background":""}},e._l(e.slides,(function(t){return a("v-carousel-item",{key:t.id,staticStyle:{cursor:"pointer"},attrs:{src:t.pic},on:{click:function(a){return e.enterSlide(t)}}})})),1)},o=[],u={name:"Carousel",created:function(){var e=this;this.axios.get("/slide/").then((function(t){e.slides=t.data})).catch((function(t){e.$store.dispatch("updateAlter",{msg:"获取数据失败",msgType:"error",msgShow:!0}),e.$router.push("/")}))},data:function(){return{items:[{src:"".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_IMGURL,"img/carousel1.jpg")},{src:"".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_IMGURL,"img/carousel2.jpg")},{src:"".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_IMGURL,"img/carousel3.jpg")}],slides:[]}},methods:{enterSlide:function(e){this.$router.push({name:"Slide",params:{slideId:e.id,slide:e}})}}},d=u,l=a("2877"),f=a("6544"),h=a.n(f),p=a("5e66"),b=a("3e35"),m=Object(l["a"])(d,i,o,!1,null,null,null),v=m.exports;h()(m,{VCarousel:p["a"],VCarouselItem:b["a"]});var g=a("08dd");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y={name:"home",components:{Carousel:v,HomeCard:g["a"]},created:function(){var e=this;this.axios.get("/trip/").then((function(t){e.cards=t.data.results,e.count=t.data.count,e.next=t.data.next,e.previous=t.data.previous,e.page=1,e.pagelength=Math.ceil(e.count/e.pagesize)})).catch((function(t){e.$store.dispatch("updateAlter",{msg:"获取数据失败",msgType:"error",msgShow:!0}),e.$router.push("/")}))},data:function(){return{count:null,next:null,previous:null,cards:[],homecardsItems:[{id:1,pic:"http://photos.breadtrip.com/photo_2019_10_15_a62a735bac66d94567b709f570194f92.jpg?imageView/1/w/640/h/480/q/85",title:"🇺🇸新墨西哥州Albuquerque# 浪漫的热气球节和似雪的白色沙滩🎈",date:"2019.10.1   9025浏览",userprofile:{id:1,avatar:"https://api.adorable.io/avatars/200/asfdafasdf.png",username:"小一爱客随"}}],pagesize:3,page:1,pagelength:1}},methods:{checkauth:function(){this.auth?this.$router.push("/trips/create"):this.$store.dispatch("updateAlter",{msg:"请先登录",msgType:"info",msgShow:!0})},paginationInput:function(){var e=this,t={page:this.page};this.axios.get("/trip/",{params:t}).then((function(t){e.cards=t.data.results,e.count=t.data.count,e.next=t.data.next,e.previous=t.data.previous,e.pagelength=Math.ceil(e.count/e.pagesize)})).catch((function(t){e.$store.dispatch("updateAlter",{msg:"获取数据失败",msgType:"error",msgShow:!0}),e.$router.push("/")}))}},beforeRouteEnter:function(e,t,a){var r=t.name,n=e.params.logout;a((function(e){if(e.$store.state.auth)switch(r){case"Register":e.$store.dispatch("updateAlter",{msg:"注册成功",msgType:"success",msgShow:!0});break;case"Login":e.$store.dispatch("updateAlter",{msg:"登录成功",msgType:"success",msgShow:!0});break}else n&&e.$store.dispatch("updateAlter",{msg:"操作成功",msgType:"success",msgShow:!0})}))},computed:k({},Object(s["b"])(["auth"])),watch:{auth:function(e){e||this.$store.dispatch("updateAlter",{msg:"操作成功",msgType:"success",msgShow:!0})}}},O=y,w=a("8336"),_=a("132d"),P=a("891e"),E=a("c73b"),S=Object(l["a"])(O,r,n,!1,null,null,null);t["default"]=S.exports;h()(S,{VBtn:w["a"],VIcon:_["a"],VPagination:P["a"],VSpeedDial:E["a"]})},e8ec:function(e,t,a){"use strict";var r=localStorage;t["a"]={setItem:function(e,t){e="youngtrip_"+e,r.setItem(e,JSON.stringify(t))},getItem:function(e){try{return e="youngtrip_"+e,JSON.parse(r.getItem(e))}catch(t){return null}},removeItem:function(e){e="youngtrip_"+e,r.removeItem(e)}}}});
//# sourceMappingURL=app.bf5be0bb.js.map