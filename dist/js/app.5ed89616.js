(function(t){function e(e){for(var o,a,s=e[0],c=e[1],d=e[2],u=0,f=[];u<s.length;u++)a=s[u],i[a]&&f.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("04f5"),i=n.n(o);i.a},"04f5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var o=n("2b0e"),i=n("8f94"),r=n.n(i),a=(n("a7be"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[t._m(0),n("section",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 editor editor-html"},[n("HTMLEditor",{attrs:{code:t.HTMLCode},on:{change:t.HTMLChange,focus:function(e){t.onFocus("html")}}})],1),n("div",{staticClass:"col-12 col-md-6 editor editor-jade"},[n("JADEEditor",{attrs:{code:t.JADECode},on:{change:t.JADEChange,focus:function(e){t.onFocus("jade")}}})],1)])])])}),s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"row p-1"},[n("div",{staticClass:"col-12 col-md-10 text-left"},[n("div",{staticClass:"row align-items-end"},[n("div",{staticClass:"col-12 col-md"},[n("span",{staticClass:"logo"},[t._v("HTML to JADE/PUG")]),n("span",{staticClass:"small ml-md-2 d-block d-md-inline"},[t._v("realtime online converter")])])])]),n("div",{staticClass:"col-12 col-md-2 right"},[n("div",{staticClass:"links"},[n("a",{attrs:{href:"https://github.com/chenka/html2jade.org/issues/new"}},[t._v("Report an issue")])])])])}],c=(n("a481"),n("386d"),n("d5e0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"html-editor"}},[n("Editor",{attrs:{code:t.code,options:t.options},on:{change:t.change,focus:t.focus}})],1)}),d=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("codemirror",{staticClass:"editor",attrs:{value:t.mutableCode,options:t.codeMirrorOptions},on:{focus:t.onFocus,input:t.onCmCodeChange}})},u=[],f=(n("f751"),n("31c5"),n("05dd"),{name:"editor",props:["code","options","mode"],computed:{codeMirrorOptions:function(){return Object.assign({tabSize:2,styleActiveLine:!0,autoCloseTags:!0,line:!0},this.options)},mutableCode:function(){return this.code}},methods:{onFocus:function(){this.$emit("focus")},onCmCodeChange:function(t){this.$emit("change",t)}}}),p=f,h=(n("b16a"),n("2877")),m=Object(h["a"])(p,l,u,!1,null,null,null),g=m.exports,v=(n("d69f"),{name:"HTML-editor",props:{code:{type:String,default:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Jade</title>\n    <script type="text/javascript">\n      const foo = true;\n      let bar = function () {};\n      if (foo) {\n         bar(1 + 5)\n      }\n    <\/script>\n  </head>\n  <body>\n    <h1>Jade - node template engine</h1>\n    <div class="col" id="container">\n      <p>You are amazing</p>\n      <p>\n        Jade is a terse and simple\n        templating language with a\n        strong focus on performance\n        and powerful features.\n      </p>\n    </div>\n  </body>\n</html>\n'}},components:{Editor:g},data:function(){return{options:{mode:"text/html"}}},methods:{change:function(t){t!=this.code&&this.$emit("change",t)},focus:function(){this.$emit("focus")}}}),b=v,C=Object(h["a"])(b,c,d,!1,null,null,null),y=C.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"html-editor"}},[n("Editor",{attrs:{code:t.code,options:t.options},on:{change:t.change,focus:t.focus}})],1)},J=[],T=(n("5bef"),{name:"JADE-editor",props:{code:{type:String,default:"doctype html\nhtml(lang='en')\n  head\n    title Jade\n    script(type='text/javascript').\n      const foo = true;\n      let bar = function () {};\n      if (foo) {\n         bar(1 + 5)\n      }\n  body\n    h1 Jade - node template engine\n    #container.col\n      p You are amazing\n      p\n        | Jade is a terse and simple\n        | templating language with a\n        | strong focus on performance\n        | and powerful features.\n\n"}},components:{Editor:g},data:function(){return{options:{mode:"text/x-pug"}}},methods:{change:function(t){t!=this.code&&this.$emit("change",t)},focus:function(){this.$emit("focus")}}}),M=T,_=Object(h["a"])(M,E,J,!1,null,null,null),O=_.exports,j={name:"app",components:{HTMLEditor:y,JADEEditor:O},data:function(){return{JADECode:void 0,HTMLCode:void 0,editingCode:"",counter:1}},methods:{findHTMLOrBodyTag:function(t){return t.search(/<\/html>|<\/body>/)>-1},onFocus:function(t){this.editingCode=t},JADEChange:function(t){this.JADECode=t,this.JADECode&&(this.HTMLCode=pug.render(this.JADECode,{pretty:!0}))},HTMLChange:function(t){var e=this;this.HTMLCode=t;var n=!this.findHTMLOrBodyTag(this.HTMLCode),o={bodyless:n,donotencode:!0};Html2Jade.convertHtml(this.HTMLCode,o,function(t,o){var i=o.replace(/\|\s+$/gm,"").replace(/^(?:[\t ]*(?:\r?\n|\r))+/gm,"");n&&(i=i.replace("head\n","")),e.JADECode=i})}}},w=j,x=(n("034f"),Object(h["a"])(w,a,s,!1,null,null,null)),H=x.exports;o["a"].use(r.a),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(H)}}).$mount("#app")},6578:function(t,e,n){},b16a:function(t,e,n){"use strict";var o=n("6578"),i=n.n(o);i.a}});
//# sourceMappingURL=app.5ed89616.js.map