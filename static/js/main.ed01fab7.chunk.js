(this.webpackJsonprobofriendsapp=this.webpackJsonprobofriendsapp||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){e.exports={Scroll:"Scroll_Scroll__3bsia"}},2:function(e,n,t){e.exports={Heading:"App_Heading__2J-0I",Loading:"App_Loading__1HeUi"}},20:function(e,n,t){},21:function(e,n,t){e.exports=t(33)},31:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(3),c=t.n(a),i=t(6),s=t(1),l=t(16),u=t(9),d={searchField:""},h={isPending:!1,robots:[],error:""},f=t(17),p=(t(31),t(4)),b=t(5),g=t(7),m=t(8),E=t(2),v=t.n(E),S=function(e){return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{onChange:e.changed,"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))},w=t(18),O=t.n(w),R=function(e){var n=e.id,t=e.name,o=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(n,"?size=200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,o)))},y=function(e){var n=e.robots.map((function(e,n){return r.a.createElement(R,{key:n+1,name:e.name,email:e.email,id:n+1})}));return r.a.createElement("div",{className:O.a.CardList},n)},_=t(19),j=t.n(_),C=function(e){return r.a.createElement("div",{className:j.a.Scroll},e.children)},N=t(20),k=t.n(N),A=function(e){Object(m.a)(t,e);var n=Object(g.a)(t);function t(e){var o;return Object(p.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(b.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:k.a.ErrorBoundary},r.a.createElement("h1",null,"Ooooops! Something did not go well!!!")):this.props.children}}]),t}(o.Component),L=function(e){Object(m.a)(t,e);var n=Object(g.a)(t);function t(){return Object(p.a)(this,t),n.apply(this,arguments)}return Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobot()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.isPending,o=e.searchField,a=e.onSearchChange,c=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return t?r.a.createElement("div",{className:"".concat(v.a.Loading," tc")},r.a.createElement("h1",{className:"".concat(v.a.Heading," f1")},"LOADING...")):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"".concat(v.a.Heading," f1")},"RoboFriends"),r.a.createElement(S,{changed:a}),r.a.createElement(C,null,r.a.createElement(A,null,r.a.createElement(y,{robots:c}))))}}]),t}(o.Component),T=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobot:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://swapi.co/api/people/").then((function(e){return e.json()})).then((function(n){var t=n.results;return console.log(t),e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}))}}}))(L),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(32);var F=Object(l.createLogger)(),W=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object(u.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(u.a)({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(u.a)({},e,{error:n.payload,isPending:!1});default:return e}}}),B=Object(s.d)(W,Object(s.a)(f.a,F));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:B},r.a.createElement(T,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriendsPWA",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriendsPWA","/service-worker.js");P?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(n,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.ed01fab7.chunk.js.map