(()=>{"use strict";var e,t,r,n,o={},a={};function i(e){if(a[e])return a[e].exports;var t=a[e]={exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"js/"+e+"."+{442:"070c9b1e",979:"0a14ac9a"}[e]+".js",i.miniCssF=e=>"css/"+({179:"main",252:"runtime-main"}[e]||e)+".css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="runtheworld-test:",i.l=(r,n,o)=>{if(e[r])e[r].push(n);else{var a,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[n];var c=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),l&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"})(),r=e=>new Promise(((t,r)=>{var n=i.miniCssF(e),o=i.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),n={252:0},i.f.miniCss=(e,t)=>{n[e]?t.push(n[e]):0!==n[e]&&{979:1}[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))},(()=>{var e={252:0},t=[];i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=o);var a=i.p+i.u(t),l=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}}),"chunk-"+t)}};var r=()=>{};function n(){for(var r,n=0;n<t.length;n++){for(var o=t[n],a=!0,l=1;l<o.length;l++){var s=o[l];0!==e[s]&&(a=!1)}a&&(t.splice(n--,1),r=i(i.s=o[0]))}return 0===t.length&&(i.x(),i.x=()=>{}),r}i.x=()=>{i.x=()=>{},a=a.slice();for(var e=0;e<a.length;e++)o(a[e]);return(r=n)()};var o=n=>{for(var o,a,[s,u,d,c]=n,p=0,h=[];p<s.length;p++)a=s[p],i.o(e,a)&&e[a]&&h.push(e[a][0]),e[a]=0;for(o in u)i.o(u,o)&&(i.m[o]=u[o]);for(d&&d(i),l(n);h.length;)h.shift()();return c&&t.push.apply(t,c),r()},a=self.webpackChunkruntheworld_test=self.webpackChunkruntheworld_test||[],l=a.push.bind(a);a.push=o})(),i.x()})();
//# sourceMappingURL=runtime-main.05ac706d.js.map