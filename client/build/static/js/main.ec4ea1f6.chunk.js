(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,n){e.exports=n(30)},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(16),o=n.n(c),l=(n(25),n(6)),i=n.n(l),u=n(7),s=n(5),m=n(9),p=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:3001","/api/logs"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:3001","/api/logs"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(0),E=function(e){var t=e.entry,n=e.viewport,c=e.showPopup,o=e.setShowPopup;return r.a.createElement(a.Fragment,null,r.a.createElement(m.a,{latitude:t.latitude,longitude:t.longitude},r.a.createElement("div",{onClick:function(){return o(Object(h.a)({showPopup:c},t._id,!0))}},r.a.createElement("svg",{className:"marker",style:{height:"".concat(6*n.zoom,"px"),width:"".concat(6*n.zoom,"px")},version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"})))))),c[t._id]?r.a.createElement(m.b,{latitude:t.latitude,longitude:t.longitude,closeButton:!0,closeOnClick:!0,dynamicPosition:!0,onClose:function(){return o()},anchor:"top"},r.a.createElement("div",{className:"popUp"},r.a.createElement("h3",null,t.title),r.a.createElement("p",null,t.description),r.a.createElement("small",null,"Visit Date:",new Date(t.visitDate).toLocaleDateString()))):r.a.createElement(r.a.Fragment,null))},f=n(18),g=n(19),b=function(e){var t=e.latitude,n=e.longitude,c=e.onClose,o=Object(g.a)(),l=o.register,m=o.handleSubmit,p=Object(a.useState)(!1),h=Object(s.a)(p,2),E=h[0],b=h[1],v=Object(a.useState)(!1),y=Object(s.a)(v,2),w=y[0],j=y[1],x=function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,d(Object(f.a)({},a,{latitude:t,longitude:n}));case 4:c(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),j(e.t0.message),b(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"entryForm",onSubmit:m(x)},w?r.a.createElement("h3",{className:"error"},w):null,r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{name:"title",required:!0,ref:l}),r.a.createElement("label",{htmlFor:"comments"},"Comments"),r.a.createElement("textarea",{name:"comments",row:3,ref:l}),r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",row:3,ref:l}),r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{name:"image",ref:l}),r.a.createElement("label",{htmlFor:"visitDate"},"Visit Date"),r.a.createElement("input",{name:"visitDate",type:"date",required:!0,ref:l}),r.a.createElement("button",{disabled:E},E?"Loading...":"Create Log Entry"))},v=function(e){var t=e.addEntryLocation,n=e.viewport,c=e.setAddEntryLocation,o=e.getEntries;return r.a.createElement(a.Fragment,null,r.a.createElement(m.a,{latitude:t.latitude,longitude:t.longitude},r.a.createElement("div",null,r.a.createElement("svg",{className:"marker marker-secondary",style:{height:"".concat(6*n.zoom,"px"),width:"".concat(6*n.zoom,"px")},version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"})))))),r.a.createElement(m.b,{latitude:t.latitude,longitude:t.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return c(null)},anchor:"top"},r.a.createElement("div",{className:"popUp"},r.a.createElement(b,{onClose:function(){c(null),o()},latitude:t.latitude,longitude:t.longitude}))))},y=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),l=Object(s.a)(o,2),d=l[0],h=l[1],f=Object(a.useState)({}),g=Object(s.a)(f,2),b=g[0],y=g[1],w=Object(a.useState)({width:"100vw",height:"100vh",latitude:37.6,longitude:-95.665,zoom:3}),j=Object(s.a)(w,2),x=j[0],O=j[1],k=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,p();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){k()}),[]);return r.a.createElement(m.c,Object.assign({},x,{mapStyle:"mapbox://styles/adrianpearman12/ck6iix7kv0f2e1jpeh8lgiy7l",mapboxApiAccessToken:"pk.eyJ1IjoiYWRyaWFucGVhcm1hbjEyIiwiYSI6ImNrNmlkZ3c4ejMzaGszbnFqY28zOTVhMzcifQ.YgsEEUURqf0S_4_lyFo79g",onViewportChange:O,onDblClick:function(e){var t=Object(s.a)(e.lngLat,2),n=t[0],a=t[1];c({latitude:a,longitude:n})}}),d.map((function(e){return r.a.createElement(E,{key:e._id,entry:e,viewport:x,showPopup:b,setShowPopup:y})})),n?r.a.createElement(v,{addEntryLocation:n,viewport:x,setAddEntryLocation:c,getEntries:k}):null)};o.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ec4ea1f6.chunk.js.map