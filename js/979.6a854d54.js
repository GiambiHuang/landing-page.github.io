(self.webpackChunkruntheworld_test=self.webpackChunkruntheworld_test||[]).push([[979],{32:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$});var r=n(682),o=n(51),a=n(555),c=n(754),i=n(894),u=n(828),l=n.n(u);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l().createClient(f({mode:"rtc",codec:"vp8"},e))}function v(e,t,n){return new Promise((function(r,o){e.join(t,n,null,(function(e){r(e)}),(function(e){o(e)}))}))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l().createStream(f({video:!0,audio:!0,screen:!1},e))}function b(e){return new Promise((function(t,n){e.init((function(){t()}),(function(e){n(e)}))}))}function y(e){return new Promise((function(t,n){e.leave((function(){t()}),(function(e){n(e)}))}))}function h(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){h(a,r,o,c,i,"next",e)}function i(e){h(a,r,o,c,i,"throw",e)}c(void 0)}))}}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={client:null,stream:null,uid:null,loading:!1,joined:!1,published:!1,muteAudio:!1,muteVideo:!1,error:""},A=(0,i.Z)((function(e,t){return O(O({},j),{},{init:(r=g(regeneratorRuntime.mark((function t(n){var r,o,a,c,i,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({loading:!0}),r=n.key,o=n.token,a=n.channel,(c=d()).init(r),t.prev=4,t.next=7,v(c,o,a);case 7:return i=t.sent,c.enableDualStream(),u=p({streamID:i}),t.next=12,b(u);case 12:c.publish(u),e({stream:u,uid:i,client:c,joined:!0}),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(4),console.log("catch error",t.t0),e({error:t.t0.info});case 20:return t.prev=20,e({loading:!1}),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[4,16,20,23]])}))),function(e){return r.apply(this,arguments)}),handleLeave:(n=g(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t().client,o=t().stream,r.unpublish(o),o.close(),n.next=6,y(r);case 6:e(O({},j));case 7:case"end":return n.stop()}}),n)}))),function(){return n.apply(this,arguments)}),handleAudioMute:function(){var n=t();n.stream[n.muteAudio?"unmuteAudio":"muteAudio"](),e((function(e){return{muteAudio:!e.muteAudio}}))},handleVideoMute:function(){var n=t();n.stream[n.muteVideo?"unmuteVideo":"muteVideo"](),e((function(e){return{muteVideo:!e.muteVideo}}))}});var n,r})),S=n(814),P=n(294);function k(){var e=A(),t=e.uid,n=e.init,r=e.loading;return e.error,P.createElement(o.Z,{className:"client-status justify-content-center py-3 text-light"},t?P.createElement("div",null,"Your UID: ",t):P.createElement(c.Z,{variant:"primary",onClick:function(){n({key:"c68b1ccf95454e6a92b411ade4422452",token:"006c68b1ccf95454e6a92b411ade4422452IADiWjvuqDQXDZhw1Ea3q9O+kOE5RyhA84/X4rn2dd2CaQ5csHcAAAAAEADGU1aHQI22XwEAAQBAjbZf",channel:"TalkToMe"})},disabled:r,className:"client-status__join"},r?P.createElement(S.G,{className:"fa-spin",icon:"spinner"}):"Join the channel!"))}var x=n(294),D=n(294);function I(e){var t=e.stream,n=t?"stream-video-".concat(t.getId()):"";return(0,x.useEffect)((function(){n&&t.play(n,{fit:"contain"})}),[n]),D.createElement("div",{className:"stream-video"},n&&D.createElement("div",{className:"w-100 h-100 stream-video__content",id:n}))}const N=(0,x.memo)(I);var Z=n(294);function C(){var e=A(),t=e.muteAudio,n=e.handleAudioMute,r=[t?"text-danger":"text-info","rounded-circle","shadow-none","local-stream__button"];return Z.createElement(c.Z,{className:r,onClick:n,variant:"secondary"},t?Z.createElement(S.G,{icon:"microphone"}):Z.createElement(S.G,{icon:"microphone-slash"}))}var _=n(294);function V(){var e=A(),t=e.uid,n=e.handleLeave,r=[t?"text-danger":"text-info","rounded-circle","shadow-none","local-stream__button"];return _.createElement(c.Z,{onClick:n,className:r,variant:"secondary"},_.createElement(S.G,{icon:"phone-slash"}))}var G=n(294);function M(){var e=A(),t=e.muteVideo,n=e.handleVideoMute,r=[t?"text-danger":"text-info","rounded-circle","shadow-none","local-stream__button"];return G.createElement(c.Z,{className:r,onClick:n,variant:"secondary"},t?G.createElement(S.G,{icon:"video"}):G.createElement(S.G,{icon:"video-slash"}))}var T=n(294);function R(){var e=A(),t=e.stream,n=e.uid;return T.createElement(x.Fragment,null,T.createElement(N,{stream:t}),n&&T.createElement("div",{className:"py-2 text-center"},T.createElement(V,null),T.createElement(C,null),T.createElement(M,null)))}function Q(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=n(294);function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(){var e,t,n,r,c,i,u=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((e=A().client,t=(0,x.useState)([]),n=2,r=function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(t,n)||Q(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=r[0],i=r[1],(0,x.useEffect)((function(){var t=function(t){var n=t.stream;e.subscribe(n)},n=function(e){var t=e.stream;i((function(e){return[].concat(function(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e),[t])}))},r=function(e){var t=e.stream;if(t){var n=t.getId();t.close(),i((function(e){return e.filter((function(e){return e.getId()!==n}))}))}},o=function(e){switch(e.curState){case"DISCONNECTED":i([])}};return e&&(e.on("stream-added",t),e.on("stream-subscribed",n),e.on("stream-removed",r),e.on("peer-leave",r),e.on("connection-state-change",o)),function(){e&&(e.off("stream-added",t),e.off("stream-subscribed",n),e.off("peer-leave",r),e.off("stream-removed",r),e.off("connection-state-change",o))}}),[e]),[c]),1)[0];return u.length?X.createElement(o.Z,{xs:1,md:u.length>2?2:1,className:"m-0 px-sm-1"},u.map((function(e){return X.createElement(a.Z,{key:e.getId(),className:"p-1"},X.createElement(N,{stream:e}))}))):X.createElement(a.Z,{className:"p-1"},X.createElement(N,null))}var L=n(294);function $(){return L.createElement(r.Z,{className:"min-vw-100 min-vh-100 bg-dark"},L.createElement(k,null),L.createElement(o.Z,{xs:1,sm:2,className:"m-0 p-5"},L.createElement(a.Z,{className:"p-1"},L.createElement(R,null)),L.createElement(H,null)))}}}]);
//# sourceMappingURL=979.6a854d54.js.map