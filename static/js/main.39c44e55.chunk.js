(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(7),o=n.n(a),i=(n(13),n(2)),h=n(3),u=n(5),l=n(4),j=(n(14),function(e){var t=e.src,n=e.name,r=e.email;return Object(c.jsxs)("div",{className:"Card",children:[Object(c.jsx)("img",{src:t,alt:"robots"}),Object(c.jsxs)("div",{className:"Card-desc",children:[Object(c.jsxs)("p",{children:[" ",n," "]}),Object(c.jsxs)("p",{children:[" ",r," "]})]})]})}),d=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",height:"78vh",borderTop:"4px solid rgba(246, 246, 255,0.4)"},children:e.children})},b=(n(15),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)(d,{children:Object(c.jsx)("div",{className:"CardDeck",children:this.props.robots.map((function(e,t){return Object(c.jsx)(j,{src:"https://robohash.org/"+(e.id+60)+"?set=set3",name:e.name,email:e.email},t)}))})})}}]),n}(r.Component)),p=n.p+"static/media/loader.7ed90ab5.svg",O=(n(16),n(17),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"SearchBox",children:[Object(c.jsx)("label",{htmlFor:"search",children:"Search friend:"}),Object(c.jsx)("input",{id:"search",type:"text",placeholder:" name",onChange:this.props.inputChange})]})}}]),n}(r.Component)),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c.setState({robots:e})})).catch((function(e){return console.log("ERROR!",e)}))},c.onInputChange=function(e){c.setState({search:e.target.value})},c.state={robots:[],search:""},c}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.robots,n=e.search,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{className:"App-header",children:"Robo Friends"}),Object(c.jsx)(O,{inputChange:this.onInputChange}),Object(c.jsx)(b,{robots:r})]}):Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{className:"App-header",children:"Robo Friends"}),Object(c.jsx)(O,{inputChange:this.onInputChange}),Object(c.jsx)("img",{className:"App-loader",src:p,alt:"loading"})]})}}]),n}(r.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.39c44e55.chunk.js.map