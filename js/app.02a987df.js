(function(e){function t(t){for(var o,r,c=t[0],s=t[1],i=t[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(t);while(l.length)l.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},u=[];function c(e){return s.p+"js/"+({About:"About",Cart:"Cart",Checkout:"Checkout",Complete:"Complete",DashboardCoupon:"DashboardCoupon",DashboardImages:"DashboardImages",DashboardOrders:"DashboardOrders",DashboardProducts:"DashboardProducts","Dashboard~DashboardHome~Product~Products~login":"Dashboard~DashboardHome~Product~Products~login",Dashboard:"Dashboard",DashboardHome:"DashboardHome",Product:"Product",Products:"Products",login:"login",Home:"Home"}[e]||e)+"."+{About:"2e7207ad",Cart:"d3e99f0f",Checkout:"9666eecb",Complete:"dd043e02",DashboardCoupon:"59126293",DashboardImages:"f683243e",DashboardOrders:"1d94a30b",DashboardProducts:"51af75ca","Dashboard~DashboardHome~Product~Products~login":"03cf6242",Dashboard:"6163c0d4",DashboardHome:"63358eef",Product:"783eb00b",Products:"63b0fe41",login:"65f8f216",Home:"c616a3e2"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={Cart:1,Product:1,Products:1,login:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({About:"About",Cart:"Cart",Checkout:"Checkout",Complete:"Complete",DashboardCoupon:"DashboardCoupon",DashboardImages:"DashboardImages",DashboardOrders:"DashboardOrders",DashboardProducts:"DashboardProducts","Dashboard~DashboardHome~Product~Products~login":"Dashboard~DashboardHome~Product~Products~login",Dashboard:"Dashboard",DashboardHome:"DashboardHome",Product:"Product",Products:"Products",login:"login",Home:"Home"}[e]||e)+"."+{About:"31d6cfe0",Cart:"72a8a48b",Checkout:"31d6cfe0",Complete:"31d6cfe0",DashboardCoupon:"31d6cfe0",DashboardImages:"31d6cfe0",DashboardOrders:"31d6cfe0",DashboardProducts:"31d6cfe0","Dashboard~DashboardHome~Product~Products~login":"31d6cfe0",Dashboard:"31d6cfe0",DashboardHome:"31d6cfe0",Product:"0a30f82a",Products:"0fe47adc",login:"515422e8",Home:"31d6cfe0"}[e]+".css",a=s.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===o||d===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],d=i.getAttribute("data-href");if(d===o||d===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],h.parentNode.removeChild(h),n(u)},h.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=u);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var h=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cf8":function(e,t,n){"use strict";var o=n("3045"),r=n.n(o);r.a},3045:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={name:"App"},c=u,s=(n("5c0b"),n("2877")),i=Object(s["a"])(c,r,a,!1,null,null,null),d=i.exports,l=(n("d3b7"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Navbar",{attrs:{data:e.navList}})],1)},m=[],f=n("ceb8"),b={name:"Home",components:{Navbar:f["a"]},data:function(){return{navList:[{name:"首頁",router:"/"},{name:"產品列表",router:"/products"},{name:"購物車",router:"/cart"},{name:"關於我們",router:"/about"},{name:"結帳",router:"/checkout"},{name:"結帳完成",router:"/complete"},{name:"後台首頁",router:"/dashboard/home"}]}}},p=b,g=Object(s["a"])(p,h,m,!1,null,null,null),v=g.exports;o["a"].use(l["a"]);var D=[{path:"/",component:v,children:[{path:"/",name:"Home",component:function(){return n.e("Home").then(n.bind(null,"1c3a"))}},{path:"cart",name:"Cart",component:function(){return n.e("Cart").then(n.bind(null,"ca5a"))}},{path:"products",name:"Products",component:function(){return Promise.all([n.e("Dashboard~DashboardHome~Product~Products~login"),n.e("Products")]).then(n.bind(null,"f76a"))}},{path:"product/:id",name:"Product",component:function(){return Promise.all([n.e("Dashboard~DashboardHome~Product~Products~login"),n.e("Product")]).then(n.bind(null,"de64"))}},{path:"about",name:"About",component:function(){return n.e("About").then(n.bind(null,"adbf"))}},{path:"checkout",name:"Checkout",component:function(){return n.e("Checkout").then(n.bind(null,"c46f"))}},{path:"complete",name:"Complete",component:function(){return n.e("Complete").then(n.bind(null,"e40a"))}}]},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("Dashboard~DashboardHome~Product~Products~login"),n.e("login")]).then(n.bind(null,"0120"))}},{path:"/dashboard",name:"Dashboard",meta:{requireAuth:!0},component:function(){return Promise.all([n.e("Dashboard~DashboardHome~Product~Products~login"),n.e("Dashboard")]).then(n.bind(null,"f32b"))},children:[{path:"Home",name:"DashboardHome",component:function(){return Promise.all([n.e("Dashboard~DashboardHome~Product~Products~login"),n.e("DashboardHome")]).then(n.bind(null,"cfe3"))}},{path:"products",name:"DashboardProducts",component:function(){return n.e("DashboardProducts").then(n.bind(null,"140e"))}},{path:"orders",name:"DashboardOrders",component:function(){return n.e("DashboardOrders").then(n.bind(null,"f819"))}},{path:"coupon",name:"DashboardCoupon",component:function(){return n.e("DashboardCoupon").then(n.bind(null,"ba60"))}},{path:"images",name:"DashboardImages",component:function(){return n.e("DashboardImages").then(n.bind(null,"d12e"))}}]},{path:"*",redirect:"/"}],P=new l["a"]({routes:D,scrollBehavior:function(e,t,n){return n||(e.hash?{selector:e.hash}:{x:0,y:0})}}),H=P,C=n("9062"),y=n.n(C);n("e40d");o["a"].component("Loading",y.a),o["a"].use(y.a);n("4de4"),n("c975"),n("ac1f"),n("25f0"),n("5319");o["a"].filter("filter",(function(e){var t=e.toString(),n=t.indexOf(".")>-1?/(\d)(?=(\d{3})+\.)/g:/(\d)(?=(?:\d{3})+$)/g;return"$".concat(t.replace(n,"$1,"))})),o["a"].config.productionTip=!1,new o["a"]({router:H,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(e,t,n){},ceb8:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("nav",{staticClass:"nav"},[n("Logo"),n("div",{staticClass:"d-flex ml-auto"},[n("button",{staticClass:"nav-menu-icon btn-icon",class:{active:!0===e.active},on:{click:e.activeHandler}},[n("span")])]),n("Menu",{attrs:{data:e.data,active:e.active,"menu-height":e.menuHeight},on:{"update:active":function(t){e.active=t},activeHandler:e.activeHandler}})],1),n("transition",{attrs:{name:"page",appear:""}},[n("router-view",{key:e.$route.fullPath,attrs:{token:e.token}})],1)],1)},r=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"logo pl-3"},[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:n("cf05"),alt:"logo",height:"100"}})])])}],c={name:"Logo"},s=c,i=(n("0cf8"),n("2877")),d=Object(i["a"])(s,a,u,!1,null,null,null),l=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-collapse"},[n("ul",{ref:"navbarMenu",staticClass:"nav-menu",class:{active:!0===e.active},style:e.HowMenuHeight},e._l(e.data,(function(t){return n("li",{key:t.name,staticClass:"nav-menu-item",attrs:{to:t.router}},[n("router-link",{attrs:{to:t.router,href:"#"},nativeOn:{click:function(t){return e.activeHandler(t)}}},[e._v(" "+e._s(t.name)+" ")])],1)})),0)])},m=[],f={name:"Menu",props:{data:{type:Array,required:!0},active:{type:Boolean,default:!1},menuHeight:{type:String,default:""}},computed:{HowMenuHeight:function(){return{height:this.menuHeight}}},methods:{activeHandler:function(){this.$emit("activeHandler",!1)}}},b=f,p=Object(i["a"])(b,h,m,!1,null,null,null),g=p.exports,v={name:"Navbar",components:{Menu:g,Logo:l},props:{data:{type:Array,required:!0},token:{type:String,default:""}},data:function(){return{active:!1,menuHeight:"",navbarMenu:"",MenuLength:0,navbarMenuItemHeight:0}},mounted:function(){var e=this;this.screenWidth(),window.addEventListener("resize",this.screenWidth),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("resize",e.screenWidth)}))},methods:{screenWidth:function(){window.screenWidth=document.body.clientWidth,window.screenWidth>992?(this.active=!1,this.menuHeight=""):(this.active=!1,this.menuHeight="0px")},activeHandler:function(){this.active=!this.active;var e=this.$children[1].$refs.navbarMenu;this.MenuLength=e.getElementsByTagName("li").length,this.navbarMenuItemHeight=e.getElementsByTagName("li")[0].offsetHeight,this.active&&window.screenWidth<992?this.menuHeight="".concat(this.MenuLength*this.navbarMenuItemHeight,"px"):window.screenWidth<992&&(this.menuHeight="0px")}}},D=v,P=Object(i["a"])(D,o,r,!1,null,null,null);t["a"]=P.exports},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});