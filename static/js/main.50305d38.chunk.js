(this["webpackJsonpreact-tailwindcss"]=this["webpackJsonpreact-tailwindcss"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),i=(n(12),n(2)),l=n.n(i),s=n(3),u=n(1);var m=function(e){var t=e.imageData,n=e.searchText,a=t.webformatURL,o=t.tags,c=t.user,i=t.views,l=t.downloads,s=t.likes,u=o.split(",")||[];return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg"},r.a.createElement("img",{className:"w-full",src:a,alt:"Sunset in the mountains"}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold  text-red-400 text-xl mb-2"},"by ",c),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Views: "),i),r.a.createElement("li",null,r.a.createElement("strong",null,"Downloads: "),l),r.a.createElement("li",null,r.a.createElement("strong",null,"Likes: "),s))),r.a.createElement("div",{className:"px-6 py-4"},u.map((function(e){return r.a.createElement("span",{onClick:function(){return n(e)},className:"cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},"#".concat(e))}))))},d=n(6),f=n.n(d);var p=function(e){var t=e.searchText,n=e.swtichToVideo,o=e.isImage,c=Object(a.useState)(""),i=Object(u.a)(c,2),l=i[0],s=i[1];return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l)},className:"w-full max-w-sm flex"},r.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2"},r.a.createElement("input",{onChange:function(e){return s(e.target.value)},className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search Image Term..."}),r.a.createElement("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit"},"Search")),r.a.createElement(f.a,{value:o,onToggle:function(e){n(!e)}})))};var v=function(e){var t=e.videoData,n=e.searchText,o=Object(a.useState)(null),c=Object(u.a)(o,2),i=c[0],l=c[1],s=t.videos,m=t.tags,d=t.user,f=t.views,p=t.downloads,v=t.likes,h=t.picture_id,g=s.tiny,w="https://i.vimeocdn.com/video/".concat(h,"_295x166.jpg"),b=m.split(",")||[],x=function(e){l("over"===e)};return r.a.createElement("div",{onMouseOver:function(){return x("over")},onMouseLeave:function(){return x("out")},className:"max-w-sm rounded overflow-hidden shadow-lg"},i?r.a.createElement("div",{className:"w-full"},r.a.createElement("video",{autoplay:"true",muted:!0,loop:!0},r.a.createElement("source",{type:"video/mp4",src:g.url}))):r.a.createElement("img",{className:"w-full",src:w,alt:"Sunset in the mountains"}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold  text-red-400 text-xl mb-2"},"by ",d),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Views: "),f),r.a.createElement("li",null,r.a.createElement("strong",null,"Downloads: "),p),r.a.createElement("li",null,r.a.createElement("strong",null,"Likes: "),v))),r.a.createElement("div",{className:"px-6 py-4"},b.map((function(e){return r.a.createElement("span",{onClick:function(){return n(e)},className:"cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},"#".concat(e))}))))};var h=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),i=Object(u.a)(c,2),d=i[0],f=i[1],h=Object(a.useState)(""),g=Object(u.a)(h,2),w=g[0],b=g[1],x=Object(a.useState)(!0),E=Object(u.a)(x,2),y=E[0],k=E[1],N=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.fetch("https://pixabay.com/api/?key=".concat("16706699-0a39087c67e883c7f93b62962","&q=").concat(w,"&image_type=photo"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,o(n.hits),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.fetch("https://pixabay.com/api/videos/?key=".concat("16706699-0a39087c67e883c7f93b62962","&q=").concat(w,"&pretty=true"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,f(n.hits),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y?N():j()}),[w,y]),r.a.createElement("div",{className:"container mx-auto"},r.a.createElement(p,{searchText:function(e){return b(e)},swtichToVideo:function(e){k(e)},isImage:y}),r.a.createElement("div",{className:"grid  gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"},y?n.map((function(e){return r.a.createElement(m,{searchText:function(e){return b(e)},key:e.id,imageData:e})})):d.map((function(e){return r.a.createElement(v,{searchText:function(e){return b(e)},key:e.id,videoData:e})}))))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-tailwind-pixaway",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-tailwind-pixaway","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.50305d38.chunk.js.map