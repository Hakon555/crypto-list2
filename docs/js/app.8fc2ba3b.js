(function(t){function e(e){for(var r,i,c=e[0],u=e[1],s=e[2],f=0,l=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"36c6":function(t,e,n){"use strict";var r=n("93f9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("CryptoList")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crypto"},[n("table",[t._m(0),t._l(t.cryptoList,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.bid))]),n("td",[t._v(t._s(e.ask))])])}))],2)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("Pair")]),n("td",[t._v("Bid")]),n("td",[t._v("Ask")])])}],u={name:"CryptoList",data:function(){return{updateTime:15e3,intervalId:0,pairs:["XXBTZUSD","XREPZUSD","ADAUSD","DAIUSD","XETHZUSD"]}},methods:{autoUpdate:function(){var t=this;0===this.intervalId&&(this.intervalId=setInterval((function(){t.$store.dispatch("getCriptoFromKraken",t.pairs)}),this.updateTime))}},computed:{cryptoList:function(){return this.$store.getters["getItems"]}},created:function(){this.$store.dispatch("getCriptoFromKraken",this.pairs),this.autoUpdate()}},s=u,p=(n("36c6"),n("2877")),f=Object(p["a"])(s,i,c,!1,null,"54fe8cfc",null),l=f.exports,d={name:"app",components:{CryptoList:l}},v=d,h=(n("034f"),Object(p["a"])(v,o,a,!1,null,null,null)),m=h.exports,b=(n("4160"),n("a15b"),n("4fad"),n("d3b7"),n("159b"),n("e587")),y=n("2f62"),_=n("bc3a"),g=n.n(_);r["a"].use(y["a"]);var O=new y["a"].Store({state:{criptoItems:{}},mutations:{addData:function(t,e){t.criptoItems=Object.assign({},t.criptoItems,e)}},actions:{getCriptoFromKraken:function(t,e){var n=t.commit;return new Promise((function(t,r){g.a.get("https://api.kraken.com/0/public/Ticker?pair="+e.join(",")).then((function(e){var r={};Object.entries(e.data.result).forEach((function(t){var e=Object(b["a"])(t,2),n=e[0],o=e[1];r[n]={name:n,bid:o.b[0],ask:o.a[0]}})),n("addData",r),t(!0)})).catch((function(t){r(t)}))}))}},getters:{getItems:function(t){return t.criptoItems}}});r["a"].config.productionTip=!1,new r["a"]({store:O,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,n){},"93f9":function(t,e,n){}});
//# sourceMappingURL=app.8fc2ba3b.js.map