(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f38105a"],{"4ca6":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("159b");var i=r("15fd"),n=r("ade3"),a=(r("ff44"),r("132d")),o=r("a9ad"),s=r("7560"),c=r("f2e7"),l=r("f40d"),u=r("fe6c"),f=r("58df"),d=r("80d2");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(f["a"])(o["a"],Object(u["b"])(["left","bottom"]),s["a"],c["a"],l["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return h({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(d["d"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),r=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",r,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent:function(){if(!this.dot){var t=Object(d["l"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(a["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],r=[Object(d["l"])(this)],n=this.$attrs,a=(n["aria-atomic"],n["aria-label"],n["aria-live"],n.role,n.title,Object(i["a"])(n,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?r.unshift(e):r.push(e),t("span",{staticClass:"v-badge",attrs:a,class:this.classes},r)}})},"62ad":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("caad"),r("13d5"),r("45fc"),r("4ec9"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("2ca0"),r("159b"),r("ddb0");var i=r("ade3"),n=(r("4b85"),r("2b0e")),a=r("d9f7"),o=r("80d2");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=["sm","md","lg","xl"],u=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),f=function(){return l.reduce((function(t,e){return t["offset"+Object(o["v"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["order"+Object(o["v"])(e)]={type:[String,Number],default:null},t}),{})}(),b={col:Object.keys(u),offset:Object.keys(f),order:Object.keys(d)};function h(t,e,r){var i=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");i+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(i+="-".concat(r),i.toLowerCase()):i.toLowerCase()}}var p=new Map;e["a"]=n["a"].extend({name:"v-col",functional:!0,props:c({cols:{type:[Boolean,String,Number],default:!1}},u,{offset:{type:[String,Number],default:null}},f,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,n=e.data,o=e.children,s=(e.parent,"");for(var c in r)s+=String(r[c]);var l=p.get(s);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var i=r[t],n=h(e,t,i);n&&l.push(n)}));var n=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!n||!r.cols},Object(i["a"])(t,"col-".concat(r.cols),r.cols),Object(i["a"])(t,"offset-".concat(r.offset),r.offset),Object(i["a"])(t,"order-".concat(r.order),r.order),Object(i["a"])(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),p.set(s,l)}(),t(r.tag,Object(a["a"])(n,{class:l}),o)}})},"8ce9":function(t,e,r){},ce7e:function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var i=r("ade3"),n=(r("8ce9"),r("7560"));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:o({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:o({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},d6f6:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card-text",[r("p",{staticClass:"subtitle-1 mt-1"},[t.users.length?r("v-badge",{attrs:{color:"pink lighten-3",content:t.users.length}},[t._v(t._s(t.auth&&t.uid===t.user.userinfo.id?"你":"他")+t._s(t.title))]):r("v-badge",{attrs:{color:"pink lighten-3",content:"0"}},[t._v(t._s(t.auth&&t.uid===t.user.userinfo.id?"你":"他")+t._s(t.title))])],1)]),t._l(t.users,(function(e){return r("v-card",{key:e.id,staticClass:"px-2 pt-2",staticStyle:{margin:"0 auto"},attrs:{color:"#fbf7ed",elevation:"0"},on:{click:function(r){return t.dumpuser(e)}}},[r("v-row",[r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"2"}},[r("v-avatar",{staticClass:"ml-2",attrs:{size:"44"}},[r("img",{attrs:{src:e.avatar,alt:""}})])],1),r("v-col",{attrs:{cols:"8"}},[r("div",{staticClass:"mr-3 font-weight-light title grey--text text--darken-1"},[t._v(t._s(e.username))]),r("div",{staticClass:"font-italic font-weight-thin body-2 cyan--text text--lighten-2"},[t._v(t._s(""==e.sign?"Life is a journey":e.sign))])]),r("v-col",{attrs:{cols:"2"}},[r("v-btn",{attrs:{large:"",icon:""}},[r("v-icon",{attrs:{color:"blue"}},[t._v("mdi-chevron-right")])],1)],1)],1),r("v-divider")],1)}))],2)},n=[],a=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),o=r("2f62");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={created:function(){var t=this;this.uid=parseInt(this.$route.params.uid),this.uname=this.$route.params.uname,this.follow=this.$route.params.follow,this.follow?this.title="的粉丝":this.title="所关注";var e={id:this.uid,follow:this.follow};this.axios.get("/account/follow",{params:e}).then((function(e){t.users=e.data.data})).catch((function(e){t.$store.dispatch("updateAlter",{msg:"获取数据失败",msgType:"error",msgShow:!0})}))},data:function(){return{uid:null,uname:"",follow:null,title:"",users:[]}},computed:c({},Object(o["b"])(["auth","user"])),methods:{dumpuser:function(t){this.$router.push({name:"Column",params:{user:t.id,name:t.username,avatar:t.avatar}})}}},u=l,f=r("2877"),d=r("6544"),b=r.n(d),h=r("8212"),p=r("4ca6"),v=r("8336"),g=r("b0af"),O=r("99d9"),m=r("62ad"),y=r("ce7e"),j=r("132d"),w=r("0fd9"),P=Object(f["a"])(u,i,n,!1,null,"56f5443b",null);e["default"]=P.exports;b()(P,{VAvatar:h["a"],VBadge:p["a"],VBtn:v["a"],VCard:g["a"],VCardText:O["c"],VCol:m["a"],VDivider:y["a"],VIcon:j["a"],VRow:w["a"]})},ff44:function(t,e,r){}}]);
//# sourceMappingURL=chunk-7f38105a.b56101ab.js.map