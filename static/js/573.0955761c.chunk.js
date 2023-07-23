"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[573],{520:function(t,e,r){r.d(e,{e:function(){return i}});var n=r(689),a=r(87),c=r(93),u=r(184),s=function(t){var e=t.id,r=t.title,s=t.name,i=t.poster_path,o=(0,n.TH)(),p=(0,c.Q)(i);return(0,u.jsx)("li",{className:"movie-item",children:(0,u.jsxs)(a.rU,{to:"/movies/".concat(e),state:{from:o},children:[(0,u.jsx)("img",{className:"movie-poster",src:p,alt:r||s}),r||s]})},e)},i=function(t){var e=t.movies;return(0,u.jsx)("ul",{children:e.map((function(t){return(0,u.jsx)(s,{id:t.id,title:t.title,name:t.name,poster_path:t.poster_path},t.id)}))})}},278:function(t,e,r){r.r(e);var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(520),i=r(791),o=r(643),p=r(87),f=r(719),v=r(390),l=r(184);e.default=function(){var t,e=(0,i.useState)([]),r=(0,a.Z)(e,2),c=r[0],d=r[1],h=(0,i.useState)(!1),m=(0,a.Z)(h,2),x=m[0],w=m[1],g=(0,p.lr)(),y=(0,a.Z)(g,2),_=y[0],b=y[1],k=null!==(t=_.get("query"))&&void 0!==t?t:"";(0,i.useEffect)((function(){if(k){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,(0,v.XT)(k);case 4:e=t.sent,d(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}}),[k]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.currentTarget,r=e.elements.search.value;b({query:r}),e.reset()},children:[(0,l.jsx)("input",{name:"search",type:"text",required:!0,placeholder:"Search movies..."}),(0,l.jsxs)("button",{type:"submit",children:[(0,l.jsx)(f.wTD,{}),(0,l.jsx)("span",{children:"Search"})]})]}),x&&(0,l.jsx)(o.g4,{height:"80",width:"80",radius:"9",color:"#3f51b5",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),(0,l.jsx)(s.e,{movies:c})]})}},390:function(t,e,r){r.d(e,{TP:function(){return f},Tn:function(){return l},XT:function(){return p},rj:function(){return o},vJ:function(){return v}});var n=r(861),a=r(757),c=r.n(a),u=r(243),s="https://api.themoviedb.org/3/",i="6da8758eb40e221013709d63079fd9c4",o=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"trending/all/day?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return r=t.sent,console.log("review",r.data.results),t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},93:function(t,e,r){r.d(e,{Q:function(){return a}});var n=r.p+"static/media/No_image_poster.68ae350692995e841a18.png";function a(t){return t?"https://image.tmdb.org/t/p/w300".concat(t):n}}}]);
//# sourceMappingURL=573.0955761c.chunk.js.map