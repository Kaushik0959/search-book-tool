(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(15),l=a.n(c),i=(a(65),a(66),a(13)),u=a(20),s=a(11),m=a(16),d=a(37),E=a(53),p={query:"",isFetching:!1,data:{},error:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_BOOKS":return Object.assign({},e,{isFetching:!0,query:t.query});case"RECEIVE_BOOKS":return Object.assign({},e,{isFetching:!1,data:"success"===t.status?t.payload:p.data,error:"error"===t.status?t.payload:p.error});default:return e}},b=a(55),f=Object(s.a)(),g=Object(m.createStore)((n=f,Object(m.combineReducers)({router:Object(u.b)(n),books:h})),{},Object(E.composeWithDevTools)(Object(m.applyMiddleware)(Object(d.a)(f),b.a))),y=a(34),v=function(){return o.a.createElement("header",{id:"app-header"},o.a.createElement(y.a,{bg:"light",expand:"lg"},o.a.createElement(y.a.Brand,{href:"#/"},"Searh Book Tool App")))},k=function(){return o.a.createElement("footer",{id:"app-footer"},"Seach Book Tool \xa9 ",(new Date).getFullYear())},O=a(26),j=a(22),S=a(58),w=a(56),B=a.n(w),N=function(e){return{type:"RECEIVE_BOOKS",status:e.status,payload:e.payload}},T=function(e){return function(t){t(function(e){return{type:"REQUEST_BOOKS",query:e}}(e));var a="http://openlibrary.org/search.json?title=".concat(e);return B.a.get(a).then(function(e){t(N({status:"success",payload:e.data}))}).catch(function(e){t(N({status:"error",payload:e}))})}},q=a(57),F=a.n(q),x=Object(i.c)(function(e){return{query:e.books.query}},function(e){return Object(m.bindActionCreators)({getBooks:T},e)})(function(e){var t=e.getBooks,a=(e.query,F()(function(e){t(e)},700));return o.a.createElement("div",{className:"search-books"},o.a.createElement(j.a,{className:"search-books--form",onSubmit:function(e){e.preventDefault()}},o.a.createElement(j.a.Group,{controlId:"formBasicEmail"},o.a.createElement(j.a.Control,{type:"text",onChange:function(e){a(e.target.value)},placeholder:"Java programming, C programming"}),o.a.createElement(j.a.Text,{className:"text-muted"},"Search by book title.")),o.a.createElement(S.a,{variant:"primary",type:"submit"},"Find")))}),_=a(33),C=a.n(_),R=a(14),D=function(e){var t=e.book;console.log(t);var a=t.title,n=t.subtitle,r=t.author_name,c=t.first_sentence,l=t.imageLinks,i=t.publish_date;t.description;return o.a.createElement("div",{className:"book"},o.a.createElement(R.a,null,l?o.a.createElement(R.a.Img,{variant:"top",src:l.thumbnail}):null,o.a.createElement(R.a.Body,null,o.a.createElement(R.a.Title,null,"Title: ",a),o.a.createElement(R.a.Subtitle,null,"Subtitle: ",n),o.a.createElement(R.a.Text,null,"Author: ",r&&r.join(",")),o.a.createElement(R.a.Text,{className:"book--description"},"Description: ",c&&c.join(" ")),o.a.createElement(R.a.Text,{className:"book--description"},"Published Date: ",i&&i.join(" ")))))},I=Object(i.c)(function(e){var t=e.books;return{data:t.data,isFetching:t.isFetching,query:t.query,error:t.error}},null)(function(e){var t=e.data,a=e.isFetching,n=e.query,r=e.error,c="";return c=a?o.a.createElement("p",null,"Searching Book..."):C()(r)?function(e,t){if(C()(e))return null;var a=e.docs,n=e.numFound;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Search results for title: ",t),o.a.createElement("p",null,"Total Results: ",n),o.a.createElement("div",{className:"books-list"},a.map(function(e){return o.a.createElement(D,{key:e.key,book:e})})))}(t,n):JSON.stringify(r),o.a.createElement("div",{className:"books"},c)}),J=(a(119),function(){return o.a.createElement("div",{id:"home",className:"page"},o.a.createElement("div",{className:"container"},o.a.createElement(x,null),o.a.createElement(I,null)))}),K=o.a.createElement(O.c,null,o.a.createElement(O.a,{exact:!0,path:"/",component:J}));a(120);var A=function(){return o.a.createElement(i.a,{store:g},o.a.createElement(u.a,{history:f},o.a.createElement("div",{className:"app"},o.a.createElement(v,null),o.a.createElement("main",null,K),o.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,t,a){e.exports=a(121)},66:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.0b529d32.chunk.js.map