(this["webpackJsonpboilerplate-101"]=this["webpackJsonpboilerplate-101"]||[]).push([[0],{180:function(e,t,n){e.exports=n(342)},189:function(e,t,n){},209:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){e.exports=n.p+"static/media/destinations.4430fc75.png"},249:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},342:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),i=n.n(c),o=n(15),l=n(91),u=n(97),s=n(161),m=(n(189),n(56)),d=n(143),p=n(24),f=n.n(p),b=n(37),h=n(27),v=n(10),g=n(77),E=n.n(g),O=function(e){return Object.entries(e).map((function(e){return{country:e[0],amount:e[1]}}))},y=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t||"GBP",e.prev=1,e.next=4,E.a.get("https://api.exchangeratesapi.io/latest?base=".concat(n));case 4:return a=e.sent,r=a.data.rates,c=O(r),e.abrupt("return",Object(v.a)(Object(v.a)({},a.data),{},{rates:Object(h.a)(c)}));case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){return+(Math.round(e+"e+2")+"e-2")},w=function(e){return e.reduce((function(e,t){return e+Number(t.price)}),0)},k=function(e,t){return e.find((function(e){return e.country===t}))},C={basketList:[],allCurrencies:[],rate:{country:"GBP",amount:"1"},total:0},x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||m.c,_=Object(m.c)(Object(m.a)(d.a),x||function(e){return e}),S=Object(m.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_API_INIT":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"FETCH_API_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{allCurrencies:t.payload,loading:!1});case"FETCH_API_FAILURE":return Object(v.a)(Object(v.a)({},e),{},{loading:!1});case"ADD_ITEM":return Object(v.a)(Object(v.a)({},e),{},{basketList:[].concat(Object(h.a)(e.basketList),[Object(v.a)({},t.item)])});case"REMOVE_ITEM":return Object(v.a)(Object(v.a)({},e),{},{basketList:[].concat(Object(h.a)(e.basketList.slice(0,t.index)),Object(h.a)(e.basketList.slice(t.index+1)))});case"HANDLE_CHECKOUT":return Object(v.a)(Object(v.a)({},e),{},{total:j(w(e.basketList))});case"UPDATE_CURRENCY":return Object(v.a)(Object(v.a)({},e),{},{rate:Object(v.a)({},k(e.allCurrencies,t.event.target.value))});default:return e}}),_);S.dispatch(function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_API_INIT"}),e.prev=1,e.next=4,y("GBP");case 4:n=e.sent,t({type:"FETCH_API_SUCCESS",payload:n.rates}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"FETCH_API_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}());var I=S,N=n(57),T=n(403),F=n(399),L=n(58);function P(){var e=Object(N.a)(["\n.","-enter {\n  opacity: 0;\n  transform: translateX(","%);\n\n  /* add flag for styled components for overlapp? */\n  position: relative;\n  z-index: 1;\n}\n.","-enter-active {\n  opacity: 1;\n  transform: translateX(0%);\n}\n.","-exit {\n  opacity: 1;\n  transform: translateX(0%);\n\n  /* add flag for styled components for absolute overlapp? */\n  position: absolute;\n  top: 0;\n  z-index: 0;\n\n  /* keep page exactly the same whilst sliding out\n  with full width and offset nav width on desktop */\n  width: 100%;\n  left: 192px;\n}\n.","-exit-active {\n  opacity: 0;\n  transform: translateX(-","%);\n}\n.","-enter-active,\n.","-exit-active {\n  transition: all ","ms cubic-bezier(0.390, 0.575, 0.565, 1.000); /* easeOutSine */\n}\n"]);return P=function(){return e},e}var A=Object(L.a)(P(),"slide",10,"slide","slide","slide",10,"slide","slide",200),D=function(e){var t=e.pageKey,n=e.classNames,a=e.timeout,c=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(T.a,{childFactory:function(e){return r.a.cloneElement(e,{classNames:n,timeout:a})}},r.a.createElement(F.a,{key:t,addEndListener:function(){return null}},r.a.createElement("div",null,c))))};function R(){var e=Object(N.a)(["\n  flex: 1;\n"]);return R=function(){return e},e}function M(){var e=Object(N.a)(["\n  flex: 0;\n  /* Put on left side */\n  order: -1;\n\n  @media (min-width: 768px) {\n    /* props.size is the width of the side column */\n    flex: 0 0 ","em;\n  }\n"]);return M=function(){return e},e}function H(){var e=Object(N.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    flex: 1;\n  }\n"]);return H=function(){return e},e}function B(){var e=Object(N.a)(["\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    flex: 1;\n  }\n"]);return B=function(){return e},e}var G=L.b.div(B()),z=L.b.div(H()),U=Object(L.b)("div")(M(),(function(e){return e.size||16})),V=L.b.div(R()),X=function(e){var t=e.size,n=e.children;return r.a.createElement(U,{size:t},n)},W=function(e){var t=e.children;return r.a.createElement(V,null,t)},K=r.a.memo((function(e){var t=e.children;return r.a.createElement(G,null,r.a.createElement(z,null,t))})),J=n(17),Y=n(377),Q=n(147),$=n.n(Q),q=n(400),Z=n(382),ee=n(378),te=n(379),ne=n(380),ae=n(381),re=["Index","Shopping List","Mobile Beer App","Shortest Route","Movie List","MapBox","Sunrise Sunset","Simple Express Form"],ce=function(e){return"Index"===e?"/":"/".concat(e.replace(/\s+/g,"-").toLowerCase())},ie=Object(Y.a)({list:{width:250,background:"#333333",padding:"1.2rem",height:"100%"},listItem:{color:"white"},menuIcon:{color:"#333333"},link:{textDecoration:"none"}}),oe=function(e){var t=e.classes,n=e.titles,a=e.toggleDrawer;return r.a.createElement(ee.a,{className:t.list},n.map((function(e){return r.a.createElement(te.a,{button:!0,key:e},r.a.createElement(l.b,{className:t.link,key:"".concat(ce(e)),to:"".concat(ce(e)),onClick:a(!1),onKeyDown:a(!1)},r.a.createElement(ne.a,{className:t.listItem,primary:e})))})))},le=function(){var e=ie(),t=Object(ae.a)("(max-width:768px)"),n=r.a.useState(!1),a=Object(J.a)(n,2),c=a[0],i=a[1],o=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(e)}};return r.a.createElement("div",{className:"nav"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{onClick:o(!0)},r.a.createElement($.a,{className:e.menuIcon,fontSize:"large"})),r.a.createElement(q.a,{anchor:"left",open:c,onClose:o(!1),onOpen:o(!0)},r.a.createElement(oe,{classes:e,titles:re,toggleDrawer:o}))):r.a.createElement(oe,{classes:e,titles:re,toggleDrawer:o}))},ue=n(62),se=n(63),me=n(70),de=n(68),pe=n(406),fe=n(407),be=n(401),he=n(393),ve=n(386),ge=(n(209),n(404)),Ee=n(411),Oe=n(410),ye=n(383),je=n(384),we=n(398),ke=Object(Y.a)((function(e){return Object(ge.a)({formControl:{margin:e.spacing(1)}})})),Ce=function(e){var t=e.filters,n=e.handleOnChangeFilter,a=ke();return r.a.createElement(Oe.a,{component:"fieldset",className:a.formControl},r.a.createElement(Ee.a,{component:"legend"},"Pick a category"),r.a.createElement(ye.a,{row:!0},t.map((function(e){return r.a.createElement(je.a,{key:e.id,control:r.a.createElement(we.a,{name:e.name,onChange:n,checked:e.isChecked||!1}),label:e.name})}))))},xe=n(148),_e=n.n(xe),Se=n(149),Ie=n.n(Se),Ne=(n(239),function(e){var t=e.movie,n=Object(a.useMemo)((function(){return t.genre_ids.join("/")}),[t.genre_ids]);return r.a.createElement("div",{className:"listing__content"},r.a.createElement("h2",{className:"h2"},t.title),r.a.createElement("p",null,"Movie Genres: ".concat(n)),r.a.createElement(_e.a,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(t.poster_path),loader:r.a.createElement("div",{style:{width:"100%",minHeight:"190px",background:"#ddd",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(Ie.a,{type:"TailSpin",color:"gray",height:40,width:40})),unloader:r.a.createElement("div",{style:{width:"100%",minHeight:"150px",background:"#ccc",display:"flex",alignItems:"center",justifyContent:"center"}})}))}),Te=n(402),Fe=n(405),Le=n(150),Pe=n(160),Ae=n(385),De=function(e){return e.isChecked},Re=function(e){return be.a(De,e)},Me=function(e){return Te.a(Fe.a("id"),e)},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Le.a((function(e,t){return Pe.a([].concat(Object(h.a)(e),Object(h.a)(t.genre_ids)))}),[],e)},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Ae.a((function(e,t){return e.id===t}),e,t)},Ge=function(e){return e.then((function(e){return[e,void 0]})).catch((function(e){return Promise.resolve([void 0,e])}))},ze=function(e){Object(me.a)(n,e);var t=Object(de.a)(n);function n(){var e;Object(ue.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={genres:[],nowPlaying:[],availableGenreNames:[],updatedList:[]},e.fetchFilters=function(){var t=He(e.state.nowPlaying),n=Be(e.state.genres,t);e.setState({availableGenreNames:n})},e.handleOnChangeFilter=function(t){var n=t.target.name,a=t.target.checked;e.setState((function(e){return{availableGenreNames:Object(h.a)(e.availableGenreNames.map((function(e){return e.name===n?Object(v.a)(Object(v.a)({},e),{},{isChecked:a}):e})))}}),(function(){return e.updatePlayingList()}))},e.updatePlayingList=function(){var t=Re(e.state.availableGenreNames),n=Me(t),a=be.a((function(e){return pe.a(fe.a(n,e.genre_ids))>0}),e.state.nowPlaying);e.setState({updatedList:a})},e.fetchList=function(){return 0===e.state.updatedList.length?e.state.nowPlaying:e.state.updatedList},e}return Object(se.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:this.fetchFilters();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,n,a,r,c,i,o,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ge(E.a.get("".concat("https://api.themoviedb.org/3","/genre/movie/list?api_key=").concat("39519945102ffc54f50b428dc72696b3")));case 2:return t=e.sent,n=Object(J.a)(t,2),a=n[0],r=n[1],e.next=8,Ge(E.a.get("".concat("https://api.themoviedb.org/3","/movie/now_playing?api_key=").concat("39519945102ffc54f50b428dc72696b3")));case 8:if(c=e.sent,i=Object(J.a)(c,2),o=i[0],l=i[1],!r){e.next=14;break}throw new Error("Could not fetch genres");case 14:if(!l){e.next=16;break}throw new Error("Could not fetch playing list");case 16:this.setState({genres:a.data.genres,nowPlaying:o.data.results});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.nowPlaying&&0!==this.state.nowPlaying.length?r.a.createElement("div",{className:"App"},r.a.createElement(K,null,r.a.createElement(X,{size:12},r.a.createElement("form",null,0===this.state.availableGenreNames.length&&r.a.createElement("div",null,"Please set up an API key"," ",r.a.createElement("a",{href:"https://www.themoviedb.org/settings/api"},"here")," and add to a .env file, as per .env.example."),r.a.createElement(Ce,{filters:this.state.availableGenreNames,handleOnChangeFilter:this.handleOnChangeFilter}))),r.a.createElement(W,null,r.a.createElement(ve.a,{container:!0,spacing:3,style:{margin:0,width:"100%"}},this.fetchList().sort((function(e,t){return t.popularity-e.popularity})).map((function(e){return r.a.createElement(ve.a,{key:e.id,item:!0,sm:6,md:4,lg:3},r.a.createElement(he.a,null,r.a.createElement(Ne,{movie:e})))})))))):null}}]),n}(a.Component),Ue=n(46),Ve=n(55),Xe=r.a.memo((function(e){var t=e.stops,n=e.distance;return r.a.createElement("div",{className:"route"},t.map((function(e,t){return r.a.createElement("span",{style:{marginRight:"0.5em"},key:t},r.a.createElement("span",null,e))})),r.a.createElement("span",{className:"route__distance"},"Distance: ",n," "))})),We=n(387),Ke=n(408),Je=n(395),Ye=n(409),Qe=function(e,t){return e.map((function(e){return t.push(e)}))},$e=function(e,t,n){return e.concat([t],[n])},qe=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0;if(a=$e(a,t,r),t===n)return[a];if(!Object.prototype.hasOwnProperty.call(e,t))return['The start route string "'.concat(t,'" does not exist in route table')];if(!Object.prototype.hasOwnProperty.call(e,n))return['The end route string "'.concat(n,'" does not exist in route table')];var c=[];return e[t].map((function(t){var r=t.node;if(a.includes(r))return[];var i=qe(e,r,n,a,t.weight);return Qe(i,c)})),c},Ze=function(e,t,n){return We.a([t,e],Object(v.a)({},n))},et=function(e,t){return Ze(e,"start",t)||Ze(e,"end",t)},tt=function(e){return Ke.a(e)},nt=function(e){return Ve.a(e)[0]},at=function(e){return e.reduce((function(e,t){var n=Ye.a(t.filter((function(e){return!isNaN(e)}))),a=t.filter((function(e){return e&&isNaN(e)})).concat(n);return[].concat(Object(h.a)(e),[a])}),[])},rt=function(e){var t=e.routes;return r.a.createElement("div",null,r.a.createElement("h3",null,"Possible routes:"),r.a.createElement("div",{className:"route__list"},t.sort((function(e,t){return tt(e)-tt(t)})).map((function(e,t){return r.a.createElement(Xe,{key:t,stops:(n=e,Je.a(1,n)),distance:tt(e)});var n}))))},ct={A:[{node:"C",weight:2}],B:[{node:"D",weight:4},{node:"E",weight:7}],C:[{node:"A",weight:2},{node:"D",weight:1},{node:"F",weight:4}],D:[{node:"C",weight:1},{node:"B",weight:4},{node:"F",weight:1},{node:"G",weight:2}],E:[{node:"B",weight:7},{node:"H",weight:10}],F:[{node:"C",weight:4},{node:"D",weight:1},{node:"G",weight:3}],G:[{node:"D",weight:2},{node:"F",weight:3},{node:"H",weight:4}],H:[{node:"G",weight:4},{node:"E",weight:10}]},it={background:"#eee",width:"100px",textAlign:"center",color:"white",position:"absolute",bottom:"49px",left:"100%",padding:".5em"},ot={background:"#ff5a5f",display:"block",borderRadius:"3px",padding:".5em",marginBottom:"0.3em"},lt=function(e){var t=e.onClickRouteEnd,n=e.stop;return r.a.createElement("div",{style:it},["start","end"].map((function(e){return r.a.createElement("span",{style:ot,key:e,onClick:function(a){return t(a,n,e)}},e)})))},ut=n(151),st=n.n(ut),mt=function(e){var t=e.fastest,n=e.node,c=e.edge,i=Object(a.useState)(!1),o=Object(J.a)(i,2),l=o[0],u=o[1];Object(a.useEffect)((function(){return setTimeout((function(){return u(!0)}),250),function(){return u(!1)}}),[]);var s=function(e,t,n){return fe.a(e,[t,n.node])}(t,n,c);return l&&0!==s.length&&0!==t.length?r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("div",null,r.a.createElement(st.a,{className:"route__edge",from:"route__option--".concat(s&&s[0]),to:"route__option--".concat(s&&s[1]),borderColor:"#9EFFE4"}))):null},dt=(n(247),function(e){return e?"route__option--active":""}),pt=function(e){var t=e.active,n=e.fastest,a=e.toolTip,c=e.toggleToolTip,i=e.onClickRouteEnd,o=e.node;return r.a.createElement("div",{key:o,style:{position:"relative"}},r.a.createElement("div",{className:"route__option route__option--".concat(o," ").concat(dt(et(o,t))),onClick:function(e){return c(e,o)}},o,a&&a[o]&&r.a.createElement(lt,{onClickRouteEnd:i,stop:o})),ct[o].map((function(e,t){return r.a.createElement(mt,{key:t,fastest:n,node:o,edge:e})})))},ft=n(248),bt=function(e){Object(me.a)(n,e);var t=Object(de.a)(n);function n(){var e;Object(ue.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={routes:[],fastest:[],active:{start:{A:!0},end:{E:!0}},toolTip:{A:!1}},e.onClickRouteEnd=function(t,n,a){t.persist(),e.setState((function(e){return{active:Object(v.a)(Object(v.a)({},e.active),{},Object(Ue.a)({},a,Object(Ue.a)({},n,!0)))}}),(function(){return e.updateRoutes()}))},e.updateRoutes=function(){var t=e.state.active,n=t.start,a=t.end,r=qe(ct,nt(n),nt(a));e.setState({routes:at(r)},(function(){return e.getFastestRoute()}))},e.getFastestRoute=function(){return e.setState((function(e){return{fastest:e.routes[0]}}))},e.toggleToolTip=function(t,n){t.preventDefault(),e.setState({toolTip:Object(Ue.a)({},n,!Fe.a(n,e.state.toolTip))})},e}return Object(se.a)(n,[{key:"componentDidMount",value:function(){this.updateRoutes()}},{key:"render",value:function(){var e=this,t=this.state,n=t.active,a=t.fastest,c=t.toolTip,i=t.routes;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{height:"150px",marginBottom:"5em"}},r.a.createElement("h3",null,"Find the shortest distance between any direction, any stop using any combination possible"),r.a.createElement("img",{src:ft,style:{width:"100%",maxWidth:"450px"},alt:"table of destinations and distances"})),r.a.createElement(rt,{routes:i}),r.a.createElement("div",{className:"route__graph"},r.a.createElement("h3",null,"Start ",nt(n.start)," - End"," ",nt(n.end)),r.a.createElement("h3",null,"Shortest distance: ",tt(a)),Ve.a(ct).map((function(t){return r.a.createElement(pt,{key:t,node:t,active:n,fastest:a,toggleToolTip:e.toggleToolTip,onClickRouteEnd:e.onClickRouteEnd,toolTip:c})}))))}}]),n}(a.Component),ht=(n(249),function(e){var t=e.item,n=e.addItemOnClick,a=e.removeItemOnClick,c=e.index;return r.a.createElement("li",{className:"shopping-list__item",onClick:function(){return c>-1?a(c=0):n(t)}},t.name,r.a.createElement("span",null,t.price))}),vt=(n(250),r.a.memo((function(e){var t=e.foodItems,n=e.addItemOnClick;return r.a.createElement("ul",{className:"shopping-list"},r.a.createElement("h3",null,"Items"),t.map((function(e){return r.a.createElement(ht,{key:e.id,item:e,addItemOnClick:n,removeItemOnClick:function(){return"noop"},index:-1})})))}))),gt=r.a.memo((function(e){var t=e.basketList,n=e.removeItemOnClick;return r.a.createElement("div",{className:"basket"},r.a.createElement("h3",null,"Shopping Cart"),t.map((function(e,t){return r.a.createElement(ht,{key:t,index:t,item:e,removeItemOnClick:n,addItemOnClick:function(){return"noop"}})})))})),Et=function(e){var t=e.value,n=e.options,a=e.handleOnChange;return r.a.createElement("select",{onChange:function(e){return a(e)}},r.a.createElement("option",{value:t},t),n.map((function(e,t){return r.a.createElement("option",{key:t,value:e.country},e.country)})))},Ot=(n(251),function(e){var t=e.totalIncRate,n=e.base,a=e.allCurrencies,c=e.updateCurrency;return r.a.createElement("div",{className:"total"},r.a.createElement("div",{className:"segment"},r.a.createElement("h3",null,r.a.createElement(Et,{value:n,options:a,handleOnChange:c}),t," ",n)))}),yt=[{id:1,name:"Peas",price:"0.95"},{id:2,name:"Eggs",price:"2.10"},{id:3,name:"Milk",price:"1.30"},{id:4,name:"Beans",price:"0.73"}],jt=Object(u.b)((function(e){return{total:e.total,rate:e.rate,basketList:e.basketList,allCurrencies:e.allCurrencies}}),(function(e){return{addItemOnClickFn:function(t){return e(function(e){return{type:"ADD_ITEM",item:e}}(t))},removeItemOnClickFn:function(t){return e(function(e){return{type:"REMOVE_ITEM",index:e}}(t))},handleCheckoutFn:function(){return e({type:"HANDLE_CHECKOUT"})},updateCurrencyFn:function(t){return e(function(e){return{type:"UPDATE_CURRENCY",event:e}}(t))}}}))((function(e){var t=e.basketList,n=e.rate,c=e.total,i=e.allCurrencies,o=e.addItemOnClickFn,l=e.removeItemOnClickFn,u=e.handleCheckoutFn,s=e.updateCurrencyFn;return Object(a.useEffect)((function(){u()}),[t,u]),r.a.createElement("div",{className:"App"},r.a.createElement(vt,{foodItems:yt,addItemOnClick:o}),r.a.createElement(gt,{basketList:t,removeItemOnClick:l}),r.a.createElement(Ot,{base:n.country,totalIncRate:j(c*n.amount),allCurrencies:i,updateCurrency:s}))})),wt=n(100),kt=n(159),Ct=n(388),xt=n(394);function _t(e,t){var n=e.features,a=Object(xt.a)().domain(n.map(t)).range(Object(Ct.a)(9));return{type:"FeatureCollection",features:n.map((function(e){var n=t(e),r=Object(v.a)(Object(v.a)({},e.properties),{},{value:n,percentile:a(n)});return Object(v.a)(Object(v.a)({},e),{},{properties:r})}))}}var St={id:"data",type:"fill",paint:{"fill-color":{property:"percentile",stops:[[0,"#3288bd"],[1,"#66c2a5"],[2,"#abdda4"],[3,"#e6f598"],[4,"#ffffbf"],[5,"#fee08b"],[6,"#fdae61"],[7,"#f46d43"],[8,"#d53e4f"]]},"fill-opacity":.8}},It=function(e){Object(me.a)(n,e);var t=Object(de.a)(n);function n(){var e;Object(ue.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={year:2015,data:null,hoveredFeature:null,viewport:{latitude:40,longitude:-100,zoom:2,bearing:0,pitch:0}},e._loadData=function(t){e.setState({data:_t(t,(function(t){return t.properties.income[e.state.year]}))})},e._updateSettings=function(t,n){if("year"===t){e.setState({year:n});var a=e.state.data;a&&e.setState({data:_t(a,(function(e){return e.properties.income[n]}))})}},e._onViewportChange=function(t){return e.setState({viewport:t})},e._onHover=function(t){var n=t.features,a=t.srcEvent,r=a.offsetX,c=a.offsetY,i=n&&n.find((function(e){return"data"===e.layer.id}));e.setState({hoveredFeature:i,x:r,y:c})},e}return Object(se.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(kt.a)("https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson",(function(t,n){t||e._loadData(n)}))}},{key:"_renderTooltip",value:function(){var e=this.state,t=e.hoveredFeature,n=e.x,a=e.y;return t&&r.a.createElement("div",{className:"tooltip",style:{left:n,top:a}},r.a.createElement("div",null,"State: ",t.properties.name),r.a.createElement("div",null,"Median Household Income: ",t.properties.value),r.a.createElement("div",null,"Percentile: ",t.properties.percentile/8*100))}},{key:"render",value:function(){var e=this.state,t=e.viewport,n=e.data;return r.a.createElement("div",{style:{height:"100vh"}},r.a.createElement("div",{style:{height:"100%",position:"relative"}},r.a.createElement(wt.c,Object.assign({},t,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/light-v9",onViewportChange:this._onViewportChange,mapboxApiAccessToken:"pk.eyJ1IjoibHhtcnRuNyIsImEiOiJjazcyM2RvNzEwY21uM2Vtb2o4cWxoaWRiIn0.PIkKBr_g2uCcKcM7pLY2aQ",onHover:this._onHover}),r.a.createElement(wt.b,{type:"geojson",data:n},r.a.createElement(wt.a,St)),this._renderTooltip())))}}]),n}(a.Component),Nt=n(162),Tt=n(153),Ft=n.n(Tt),Lt=function(){var e=function(){var e=Object(a.useState)({}),t=Object(J.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(J.a)(c,2),o=i[0],l=i[1],u=function(e){var t=e.coords;r({latitude:t.latitude,longitude:t.longitude})},s=function(e){l(e.message)};return Object(a.useEffect)((function(){var e=navigator.geolocation;if(e){var t;return t=e.watchPosition(u,s),function(){return e.clearWatch(t)}}l("Geolocation is not supported")}),[]),Object(v.a)(Object(v.a)({},n),{},{error:o,onError:s,onChange:u})}(),t=e.error,n=Object(Nt.a)(e,["error"]),c=n.latitude,i=n.longitude,o=function(e,t){return Ft.a.getTimes(new Date,e,t)}(c,i),l=o.sunrise,u=o.sunset;return r.a.createElement("div",{style:{padding:"2em"}},t&&r.a.createElement("p",null,"Please allow browser to find your geoLocation"),c||i?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"User Location: ".concat(c.toFixed(4),",\n          ").concat(i.toFixed(4))),r.a.createElement("p",null,"Sunrise: ".concat(l)),r.a.createElement("p",null,"SunSet: ".concat(u))):r.a.createElement("p",null,"Loading..."))},Pt=function(e){var t=e.name,n=e.type,a=e.value,c=e.onChange,i=e.validation;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:t},t),r.a.createElement("input",{type:n,name:t,id:t,value:a,onChange:c}),i&&i)},At=function(e){var t=e.message;return r.a.createElement("span",null,t||"")},Dt=n(111),Rt=n.n(Dt),Mt={values:{name:"",email:"",message:"",newsletter:!1},errors:{},meta:{isSubmitting:!1,submitMessage:""}},Ht="Please fill all text field",Bt="Invalid email address",Gt="name",zt="email",Ut="message",Vt="newsletter",Xt=function(e){return e===Vt},Wt=function(e){switch(e.name){case Gt:case Ut:return Rt.a.isEmpty(e.value)?Ht:"";case zt:return Rt.a.isEmail(e.value)?"":Bt;default:return""}},Kt=function(e){return t=e.values,Object.values(t).every((function(e){return""!==e}))&&function(e){return Object.values(e).every((function(e){return""===e}))}(e.errors)?[]:[e.errors];var t},Jt=function(e,t){var n=Object(a.useState)(Mt),r=Object(J.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)([]),l=Object(J.a)(o,2),u=l[0],s=l[1];Object(a.useEffect)((function(){0===Object.keys(u).length&&c.meta.isSubmitting&&(i((function(e){return Object(v.a)(Object(v.a)({},e),{},{meta:Object(v.a)(Object(v.a)({},e.meta),{},{submitMessage:"Sending..."})})})),t(c.values))}),[u]);return{state:c,handleSubmit:function(t){t&&t.preventDefault(),s(e(c)),i((function(e){return Object(v.a)(Object(v.a)({},e),{},{meta:Object(v.a)(Object(v.a)({},e.meta),{},{isSubmitting:!0})})}))},handleOnChange:function(e){e.persist();var t=e.target;i((function(e){return Object(v.a)(Object(v.a)({},e),{},{values:Object(v.a)(Object(v.a)({},e.values),{},Object(Ue.a)({},t.name,(n=t,"checkbox"===n.type?n.checked:n.value))),errors:Object(v.a)(Object(v.a)({},e.errors),{},Object(Ue.a)({},t.name,Wt(t)))});var n}))}}},Yt=function(){var e=Jt(Kt,function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/contact-form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post:t})});case 2:console.info("no errors, user details posting...");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=e.state,n=e.handleOnChange,a=e.handleSubmit;return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:a},r.a.createElement("p",null,r.a.createElement("strong",null,"Tasty Treats Customer form:")),Object.keys(t.values).map((function(e){return r.a.createElement(Pt,{key:e,name:e,type:Xt(e)?"checkbox":"text",value:t.values[e],onChange:n,validation:!Xt(e)&&r.a.createElement(At,{message:t.errors[e]||""})})})),r.a.createElement("p",null,t.meta.submitMessage),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("a",{style:{display:"block",marginTop:"2em"},href:"/boilerplate-101/userList.txt"},"Go to Saved User List file"))},Qt=n(154),$t=n.n(Qt),qt=n(396),Zt=n(392),en=n(112),tn=n.n(en),nn=n(156),an=n.n(nn),rn=n(96),cn=n.n(rn),on=n(157),ln=n.n(on),un=n(158),sn=n.n(un),mn=n(397);function dn(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var pn=Object(Y.a)((function(e){return{paper:{position:"absolute",width:function(e){return e},backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),fn=function(e){var t=e.width,n=e.open,c=e.handleClose,i=e.children,o=pn(t),l=Object(a.useState)(dn),u=Object(J.a)(l,1)[0];return r.a.createElement(mn.a,{open:n,onClose:c,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{style:u,className:o.paper},i))},bn=n(35),hn=n(390),vn=n(389),gn=n(412),En=n(155),On=n.n(En),yn=Object(Y.a)({shoppingTab:{position:"fixed",bottom:0,width:"100%",textAlign:"center",background:"grey"}}),jn=function(e){var t=e.items,n=e.removeFromCart,c=yn(),i=Object(a.useState)(!1),o=Object(J.a)(i,2),l=o[0],u=o[1],s=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&u(e)}};return r.a.createElement("div",null,r.a.createElement(Z.a,{className:c.shoppingTab,onClick:s(!0)},"Shopping Cart"),r.a.createElement(bn.a,{anchor:"bottom",open:l,onClose:s(!1)},r.a.createElement(ee.a,null,t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(te.a,null,r.a.createElement(vn.a,null,r.a.createElement(gn.a,{alt:e.name,src:e.image_url})),r.a.createElement(ne.a,{primary:e.name}),r.a.createElement(On.a,{onClick:function(t){return n(t,e.id)}})),r.a.createElement(hn.a,{variant:"inset",component:"li"}))})))))},wn=n(391),kn=Object(Y.a)((function(e){return{root:{flexGrow:1},loader:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"},item:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,borderRadius:"4px",border:"1px solid lightgray"},imgWrapper:{height:"120px",display:"flex",alignItems:"center",justifyContent:"center"},img:{maxHeight:"100%"}}})),Cn=function(e){var t=e.beerList,n=(e.index,e.handleOpen),a=e.isLoading,c=kn();return a?r.a.createElement("div",{className:c.loader},r.a.createElement(wn.a,null)):r.a.createElement(ve.a,{container:!0,spacing:1,style:{margin:0,width:"100%"}},t.map((function(e){return r.a.createElement(ve.a,{key:e.id,item:!0,xs:4},r.a.createElement(he.a,{className:c.item,onClick:function(t){return n(t,e)}},r.a.createElement("div",{className:c.imgWrapper},e.image_url?r.a.createElement("img",{className:c.img,src:e.image_url,alt:e.name}):r.a.createElement(cn.a,{fontSize:"large"})),r.a.createElement("div",null,e.name),r.a.createElement("div",null,"ABV: ",e.abv,"%")))})))},xn=function(e){var t=e.showBeer,n=e.addToCart,a=Object(Y.a)((function(){return{beerImg:{maxHeight:"120px"}}}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"simple-modal-title"},t.name),r.a.createElement("p",{id:"simple-modal-description"},r.a.createElement("img",{className:a.beerImg,src:t.image_url,alt:t.description}),t.tagline,t.abv,t.description,t.food_pairing),r.a.createElement("button",{type:"button",onClick:function(e){return n(e,t)}},"Add to Cart"))},_n={0:"All",1:"Pizza",2:"Steak"},Sn=function(e){return _n[e]},In=function(e){return Object.keys(e)},Nn=function(){var e=Object(a.useState)(!1),t=Object(J.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),o=Object(J.a)(i,2),l=o[0],u=o[1],s=Object(a.useState)(1),m=Object(J.a)(s,2),d=m[0],p=m[1],g=Object(a.useRef)(null),E=Object(a.useState)([]),O=Object(J.a)(E,2),y=O[0],j=O[1],w=Object(a.useState)("All"),k=Object(J.a)(w,2),C=k[0],x=k[1],_=Object(a.useState)(0),S=Object(J.a)(_,2),I=S[0],N=S[1],T=Object(a.useState)(0),F=Object(J.a)(T,2),L=F[0],P=F[1],A=Object(a.useState)({open:!1}),D=Object(J.a)(A,2),R=D[0],M=D[1],H=function(e,t){return M(Object(v.a)(Object(v.a)({},t),{},{open:!0}))},B=function(e){return M(Object(v.a)(Object(v.a)({},e),{},{open:!1}))},G=Object(a.useState)([]),z=Object(J.a)(G,2),U=z[0],V=z[1];return Object(a.useEffect)((function(){"undefined"===typeof window.orientation?(M(Object(v.a)(Object(v.a)({},{}),{},{open:!0})),u(!1)):u(!0)}),[]),Object(a.useEffect)((function(){x(Sn(I)),p(1)}),[I]),Object(a.useEffect)((function(){(function(){var e=Object(b.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,$t()(200);case 4:return e.next=6,fetch("https://api.punkapi.com/v2/beers?page=".concat(d,"&per_page=").concat(9).concat(C&&"&food=".concat(C.toLowerCase())));case 6:return t=e.sent,e.next=9,t.json();case 9:n=e.sent,j(n),c(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("Error fetching API",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}),[C,d]),r.a.createElement("div",null,r.a.createElement(qt.a,{value:L,fullwidth:"true",onChange:function(e,t){return P(t)},centered:!0},r.a.createElement(Zt.a,{icon:r.a.createElement(cn.a,null),"aria-label":"drink"}),r.a.createElement(Zt.a,{icon:r.a.createElement(an.a,null),"aria-label":"food"}),r.a.createElement(Zt.a,{icon:r.a.createElement(ln.a,null),"aria-label":"settings"}),r.a.createElement(Zt.a,{icon:r.a.createElement(sn.a,null),"aria-label":"search"})),r.a.createElement(tn.a,{index:L,onChangeIndex:function(e){return P(e)}},r.a.createElement("div",{style:{height:"700px"},ref:g},r.a.createElement(qt.a,{value:I,fullwidth:"true",onChange:function(e,t){return N(t)},centered:!0},In(_n).map((function(e){return r.a.createElement(Zt.a,{key:e,label:Sn(e)})}))),r.a.createElement(tn.a,{index:I,onChangeIndex:function(e){return N(e)}},In(_n).map((function(e){return r.a.createElement(Cn,{key:e,index:e,isLoading:n,beerList:y,handleOpen:H})})))),r.a.createElement(r.a.Fragment,null,r.a.createElement(qt.a,{value:0,fullwidth:"true",onChange:function(){return null},centered:!0},r.a.createElement(Zt.a,{label:"All food"})),r.a.createElement("p",null,"Other stuff in here"))),R.id&&r.a.createElement(fn,{open:R.open,handleClose:B,width:250},r.a.createElement(xn,{showBeer:R,addToCart:function(e,t){V([].concat(Object(h.a)(U),[t])),B(t)}})),!l&&!R.id&&r.a.createElement(fn,{open:R.open,handleClose:B,width:600},r.a.createElement("div",null,r.a.createElement("p",null,"To demo the swipeable features, view in mobile mode in browser / on a device."),r.a.createElement(Z.a,{variant:"contained",color:"primary",onClick:B},"Close"))),r.a.createElement(jn,{items:U||[],removeFromCart:function(e,t){var n=U.filter((function(e){return e.id!==t}));V(n)}}))},Tn=function(){return r.a.createElement("div",{className:"index--centre"},"Blank page flex centred")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Fn=function(){return r.a.createElement(u.a,{store:I},r.a.createElement(l.a,null,r.a.createElement(K,null,r.a.createElement(X,null,r.a.createElement(le,null)),r.a.createElement(W,null,r.a.createElement(o.a,{render:function(e){var t=e.location;return r.a.createElement(D,{pageKey:Object(s.a)(),classNames:"slide",timeout:300},r.a.createElement(o.c,{location:t},r.a.createElement(o.a,{exact:!0,path:"/",component:Tn}),r.a.createElement(o.a,{path:"/mobile-beer-app",component:Nn}),r.a.createElement(o.a,{path:"/shopping-list",component:jt}),r.a.createElement(o.a,{path:"/shortest-route",component:bt}),r.a.createElement(o.a,{path:"/movie-list",component:ze}),r.a.createElement(o.a,{path:"/mapbox",component:It}),r.a.createElement(o.a,{path:"/sunrise-sunset",component:Lt}),r.a.createElement(o.a,{path:"/simple-express-form",component:Yt})))}})))))};i.a.render(r.a.createElement(Fn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[180,1,2]]]);
//# sourceMappingURL=main.2982f61c.chunk.js.map