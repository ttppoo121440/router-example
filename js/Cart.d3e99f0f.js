(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cart"],{1166:function(t,a,r){},"13d5":function(t,a,r){"use strict";var e=r("23e7"),i=r("d58f").left,c=r("a640"),n=r("ae40"),s=c("reduce"),o=n("reduce",{1:0});e({target:"Array",proto:!0,forced:!s||!o},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,a,r){var e=r("da84"),i=r("fdbc"),c=r("17c2"),n=r("9112");for(var s in i){var o=e[s],u=o&&o.prototype;if(u&&u.forEach!==c)try{n(u,"forEach",c)}catch(l){u.forEach=c}}},"17c2":function(t,a,r){"use strict";var e=r("b727").forEach,i=r("a640"),c=r("ae40"),n=i("forEach"),s=c("forEach");t.exports=n&&s?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,a,r){"use strict";var e=r("23e7"),i=r("17c2");e({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4b4a":function(t,a,r){"use strict";var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"product-details-count"},[r("button",{staticClass:"btn btn-right",class:{disabled:1===t.quantity},on:{click:function(a){return t.calculation(t.data,t.quantity-1)}}},[t._v(" - ")]),r("input",{staticClass:"text-center btn-input",attrs:{type:"text",maxlength:"3"},domProps:{value:t.quantity},on:{change:t.changeValue}}),r("button",{staticClass:"btn btn-left",class:{disabled:999===t.quantity},on:{click:function(a){return t.calculation(t.data,t.quantity+1)}}},[t._v(" + ")])])},i=[],c=(r("a9e3"),{name:"InputNumber",props:{quantity:{type:Number,required:!0},data:{type:Object,required:!0}},methods:{calculation:function(t,a){this.$emit("calculation",{product:t,quantity:a})},changeValue:function(t){if(Number(t.target.value)<1){var a=t;a.target.value=1,this.$emit("changeValue",{quantity:t,product:this.data})}else this.$emit("changeValue",{quantity:t,product:this.data})}}}),n=c,s=r("2877"),o=Object(s["a"])(n,e,i,!1,null,null,null);a["a"]=o.exports},5899:function(t,a){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,a,r){var e=r("1d80"),i=r("5899"),c="["+i+"]",n=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),o=function(t){return function(a){var r=String(e(a));return 1&t&&(r=r.replace(n,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:o(1),end:o(2),trim:o(3)}},"6e67":function(t,a,r){"use strict";var e=r("9c73"),i=r.n(e);i.a},7156:function(t,a,r){var e=r("861d"),i=r("d2bb");t.exports=function(t,a,r){var c,n;return i&&"function"==typeof(c=a.constructor)&&c!==r&&e(n=c.prototype)&&n!==r.prototype&&i(t,n),t}},8418:function(t,a,r){"use strict";var e=r("c04e"),i=r("9bf2"),c=r("5c6c");t.exports=function(t,a,r){var n=e(a);n in t?i.f(t,n,c(0,r)):t[n]=r}},"9c73":function(t,a,r){},a434:function(t,a,r){"use strict";var e=r("23e7"),i=r("23cb"),c=r("a691"),n=r("50c4"),s=r("7b0b"),o=r("65f0"),u=r("8418"),l=r("1dde"),f=r("ae40"),d=l("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,g=9007199254740991,C="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,a){var r,e,l,f,d,p,m=s(this),b=n(m.length),y=i(t,b),L=arguments.length;if(0===L?r=e=0:1===L?(r=0,e=b-y):(r=L-2,e=v(h(c(a),0),b-y)),b+r-e>g)throw TypeError(C);for(l=o(m,e),f=0;f<e;f++)d=y+f,d in m&&u(l,f,m[d]);if(l.length=e,r<e){for(f=y;f<b-e;f++)d=f+e,p=f+r,d in m?m[p]=m[d]:delete m[p];for(f=b;f>b-e+r;f--)delete m[f-1]}else if(r>e)for(f=b-e;f>y;f--)d=f+e-1,p=f+r-1,d in m?m[p]=m[d]:delete m[p];for(f=0;f<r;f++)m[f+y]=arguments[f+2];return m.length=b-e+r,l}})},a9e3:function(t,a,r){"use strict";var e=r("83ab"),i=r("da84"),c=r("94ca"),n=r("6eeb"),s=r("5135"),o=r("c6b6"),u=r("7156"),l=r("c04e"),f=r("d039"),d=r("7c73"),p=r("241c").f,h=r("06cf").f,v=r("9bf2").f,g=r("58a8").trim,C="Number",m=i[C],b=m.prototype,y=o(d(b))==C,L=function(t){var a,r,e,i,c,n,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),a=u.charCodeAt(0),43===a||45===a){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(u.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+u}for(c=u.slice(2),n=c.length,s=0;s<n;s++)if(o=c.charCodeAt(s),o<48||o>i)return NaN;return parseInt(c,e)}return+u};if(c(C,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var S,_=function(t){var a=arguments.length<1?0:t,r=this;return r instanceof _&&(y?f((function(){b.valueOf.call(r)})):o(r)!=C)?u(new m(L(a)),r,_):L(a)},E=e?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;E.length>N;N++)s(m,S=E[N])&&!s(_,S)&&v(_,S,h(m,S));_.prototype=b,b.constructor=_,n(i,C,_)}},ca5a:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("section",[r("h1",{staticClass:"text-center"},[t._v(" 購物車 ")]),r("div",{staticClass:"container"},[r("CartList",{attrs:{"cart-list":t.cartList},on:{clearCart:t.getCart}})],1)])},i=[],c=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"cart"},[r("transition-group",{staticClass:"w-100",attrs:{name:"list",appear:"",tag:"div"}},t._l(t.cartList,(function(a){return r("div",{key:a.product.id,staticClass:"cart-item"},[r("div",{staticClass:"row w-100"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"cart-detail"},[r("div",{staticClass:"cart-pic"},[r("img",{attrs:{src:a.product.imageUrl}})]),r("div",{staticClass:"cart-prduct"},[r("h2",{staticClass:"mb-3"},[t._v(" "+t._s(a.product.title)+" ")]),r("span",[t._v(t._s(a.product.category))]),r("div",{staticClass:"count d-flex my-3"},[r("InputNumber",{attrs:{quantity:a.quantity,data:a.product},on:{calculation:t.calculation,changeValue:t.changeValue}}),r("div",{staticClass:"cart-price"},[r("span",[t._v(" x "+t._s(t._f("filter")(a.product.price)))])])],1)])])]),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"cart-function"},[r("div",{staticClass:"cart-price-total"},[t._v(" "+t._s(t._f("filter")(a.quantity*a.product.price))+" ")]),r("div",{staticClass:"cart-delete"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(r){return t.cartDelete(a.product.id)}}},[r("i",{staticClass:"far fa-trash-alt"})])])])])])])})),0),0!==t.cartList.length?r("CartFooter",{attrs:{"cart-list":t.cartList},on:{clearCart:t.clearCart}}):t._e()],1)},n=[],s=(r("4160"),r("a434"),r("a9e3"),r("159b"),r("4b4a")),o=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"cart-footer"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8"}),r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"cart-footer-total"},[r("div",{staticClass:"cart-footer-pricetotal"},[t._v(" 總數："+t._s(t.cartItemTotal)),r("br"),t._v(" 總金額："+t._s(t._f("filter")(t.cartPriceTotal))+" ")]),r("div",[r("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:t.clearCart}},[t._v(" 清空 "),r("i",{staticClass:"far fa-trash-alt"})])])])])])])},u=[],l=(r("13d5"),{name:"CartFooter",props:{cartList:{type:Array,required:!0}},computed:{cartPriceTotal:function(){return this.cartList.reduce((function(t,a){return t+a.product.price*a.quantity}),0)},cartItemTotal:function(){return this.cartList.reduce((function(t,a){return t+a.quantity}),0)}},methods:{clearCart:function(){localStorage.removeItem("cart"),this.$emit("clearCart")}}}),f=l,d=(r("da77"),r("2877")),p=Object(d["a"])(f,o,u,!1,null,null,null),h=p.exports,v={name:"CartList",components:{InputNumber:s["a"],CartFooter:h},props:{cartList:{type:Array,required:!0}},methods:{cartDelete:function(t){var a=this;this.cartList.forEach((function(r,e){r.product.id===t&&a.cartList.splice(e,1)})),localStorage.setItem("cart",JSON.stringify(this.cartList))},calculation:function(t){var a=this;this.cartList.forEach((function(r,e){if(r.product.id===t.product.id){var i=r;i.quantity=t.quantity,a.cartList.splice(e,1,r)}})),localStorage.setItem("cart",JSON.stringify(this.cartList))},changeValue:function(t){var a=this;this.cartList.forEach((function(r,e){if(r.product.id===t.product.id){var i=r;i.quantity=Number(t.quantity.target.value),a.cartList.splice(e,1,r)}})),localStorage.setItem("cart",JSON.stringify(this.cartList))},clearCart:function(){this.$emit("clearCart")}}},g=v,C=Object(d["a"])(g,c,n,!1,null,null,null),m=C.exports,b={name:"Cart",components:{CartList:m},data:function(){return{cartList:[]}},mounted:function(){this.getCart()},methods:{getCart:function(){this.cartList=JSON.parse(localStorage.getItem("cart"))||[]}}},y=b,L=(r("6e67"),Object(d["a"])(y,e,i,!1,null,null,null));a["default"]=L.exports},d58f:function(t,a,r){var e=r("1c0b"),i=r("7b0b"),c=r("44ad"),n=r("50c4"),s=function(t){return function(a,r,s,o){e(r);var u=i(a),l=c(u),f=n(u.length),d=t?f-1:0,p=t?-1:1;if(s<2)while(1){if(d in l){o=l[d],d+=p;break}if(d+=p,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=p)d in l&&(o=r(o,l[d],d,u));return o}};t.exports={left:s(!1),right:s(!0)}},da77:function(t,a,r){"use strict";var e=r("1166"),i=r.n(e);i.a},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);