(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"3JFx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n("NOtv")),a=c(n("t0y4")),o=c(n("s/rx")),i=c(n("4Y/j"));function c(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)("youtube-player"),l={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){s('event "%s"',r,t),e.trigger(n,t)}},r=!0,a=!1,i=void 0;try{for(var c,l=o.default[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){n(c.value)}}catch(u){a=!0,i=u}finally{try{!r&&l.return&&l.return()}finally{if(a)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.then(function(e){var t=i.default[r],a=e.getPlayerState(),o=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise(function(n){e.addEventListener("onStateChange",function r(){var a=e.getPlayerState(),o=void 0;"number"===typeof t.timeout&&(o=setTimeout(function(){e.removeEventListener("onStateChange",r),n()},t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",r),clearTimeout(o),n())})}).then(function(){return o}):o})}:n[r]=function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.then(function(e){return e[r].apply(e,n)})}},o=!0,c=!1,s=void 0;try{for(var l,u=a.default[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){r(l.value)}}catch(f){c=!0,s=f}finally{try{!o&&u.return&&u.return()}finally{if(c)throw s}}return n}};t.default=l,e.exports=t.default},"4Y/j":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("u6sg"),o=(r=a)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},"D+Oc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=c(n("MEFE")),o=c(n("MIx2")),i=c(n("3JFx"));function c(e){return e&&e.__esModule?e:{default:e}}var s=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=(0,a.default)();if(s||(s=(0,o.default)(c)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(c);var l=new Promise(function(n){"object"===("undefined"===typeof e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):s.then(function(r){var a=new r.Player(e,t);return c.on("ready",function(){n(a)}),null})}),u=i.default.promisifyPlayer(l,n);return u.on=c.on,u.off=c.off,u},e.exports=t.default},MEFE:function(e,t,n){"use strict";var r;r=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,a=t[e];if(a)for(r=a.length;r--;)a[r].handler(n)},e},e.exports=r},MIx2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("MuZe"),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise(function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,o.default)(n+"//www.youtube.com/iframe_api",function(t){t&&e.trigger("error",t)});var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}})},e.exports=t.default},MuZe:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof t&&(a=t,t={}),t=t||{},a=a||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,a),i.onload||n(i,a),o.appendChild(i)}},NOtv:function(e,t,n){(function(r){function a(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof r&&"env"in r&&(e=r.env.DEBUG),e}(t=e.exports=n("lv48")).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))}),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=a,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())}).call(this,n("8oxB"))},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("VdAu"),i=n("rt45"),c=n("vOnD"),s=n("CoOK"),l=a.a.createElement;function u(){var e=Object(i.a)(["\n  height: 100%;\n  width: 100%;\n"]);return u=function(){return e},e}function f(){var e=Object(i.a)(["\n  background: url(",") no-repeat;\n  background-size: cover;\n  height: 242px;\n\n  @media screen and (min-width: 40em) {\n    height: 350px;\n  }\n"]);return f=function(){return e},e}function d(){var e=Object(i.a)(["\n  position: relative;\n  border-radius: 0px;\n  padding-bottom: 242px;\n\n  @media screen and (min-width: 40em) {\n    padding-bottom: 350px;\n  }\n"]);return d=function(){return e},e}function p(){var e=Object(i.a)(["\n  overflow: hidden;\n  height: 242px;\n\n  @media screen and (min-width: 40em) {\n    height: 350px;\n  }\n"]);return p=function(){return e},e}function y(){var e=Object(i.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 242px;\n\n  @media screen and (min-width: 40em) {\n    height: 350px;\n  }\n"]);return y=function(){return e},e}function h(){var e=Object(i.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1;\n  border-radius: 0px;\n  height: 242px;\n\n  @media screen and (min-width: 40em) {\n    height: 350px;\n  }\n"]);return h=function(){return e},e}var g=Object(c.b)(o.a)(h()),m=Object(c.b)(o.a)(y()),b=Object(c.b)(o.d)(p()),v=Object(c.b)(o.c)(d()),w=Object(c.b)(o.a)(f(),function(e){return e.src}),P=Object(c.b)(o.e)(u()),S=function(e){return l(v,{color:"white"},l(g,null,l(b,null,l(w,{width:1/3,src:"".concat(s.a,"/static/images/banner/0.png")}),l(w,{width:1/3,src:"".concat(s.a,"/static/images/banner/1.png")}),l(w,{width:1/3,src:"".concat(s.a,"/static/images/banner/2.png")}))),l(m,null,l(b,{justifyContent:"center",alignItems:"center"},l(o.a,{width:[1/3,.25,.2],p:[1,4]},l(o.d,{justifyContent:"center"},l(P,{src:"".concat(s.a,"/static/images/banner/logo.png")}))))))},x=n("FGAr"),E=a.a.createElement;function C(){var e=Object(i.a)(["\n  font-family: TATSanaSuksa;\n  font-size: 18px;\n  line-height: 1.8;\n  color: #333333;\n\n  .nowrap {\n    white-space: nowrap;\n  }\n"]);return C=function(){return e},e}function A(){var e=Object(i.a)(["\n  background: #213a8f;\n  border-radius: 5px;\n  box-shadow: 0 15px 30px 0 rgba(28, 78, 132, 0.4);\n"]);return A=function(){return e},e}var O=Object(c.b)(o.b)(A()),T=c.b.div(C()),j=function(e){var t=Object(r.useContext)(x.a);return E(o.a,{py:3},E(o.a,{py:2},E(o.g,{fontSize:16,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#333333",textAlign:"center"},"\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"),E(o.g,{fontSize:48,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#e6332a",textAlign:"center"},t.duration)),E(o.a,{py:2},E(o.d,{justifyContent:"center"},E(O,{px:5},E(o.g,{fontSize:24,fontWeight:"bold",fontFamily:"TATSanaChon",color:"white",textAlign:"center"},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19 \u0e40\u0e1f\u0e2a 2"),E(o.g,{fontSize:24,fontWeight:"bold",fontFamily:"TATSanaChon",color:"white",textAlign:"center"},"\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 24 \u0e15.\u0e04. 62 \u0e27\u0e31\u0e19\u0e25\u0e30 2 \u0e23\u0e2d\u0e1a \u0e40\u0e27\u0e25\u0e32 6.00 \u0e19. \u0e41\u0e25\u0e30 18.00 \u0e19."),E(o.g,{fontSize:24,fontWeight:"bold",fontFamily:"TATSanaChon",color:"white",textAlign:"center"},"(\u0e08\u0e33\u0e01\u0e31\u0e14\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e23\u0e2d\u0e1a\u0e25\u0e30 5 \u0e41\u0e2a\u0e19\u0e04\u0e19 \u0e23\u0e27\u0e21 1 \u0e25\u0e49\u0e32\u0e19\u0e04\u0e19\u0e15\u0e48\u0e2d\u0e27\u0e31\u0e19)")))),E(o.a,{pt:5,pb:2},E(o.d,{justifyContent:"center"},E(o.a,{width:[22/24,20/24,.75],py:4},E(o.a,{py:1},E(o.g,{fontSize:36,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#e6332a"},"\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e42\u0e20\u0e04"),E(o.g,{fontSize:36,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#e6332a"},"\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28 \u201c\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49\u201d")),E(o.a,{py:2},E(T,{dangerouslySetInnerHTML:{__html:t.detail}})),E(o.a,{pt:2},E(o.g,{fontSize:18,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#333333"},"\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23")),E(o.a,{py:3},E(T,{dangerouslySetInnerHTML:{__html:t.condition}}))))))},k=a.a.createElement,N=function(e){return k(o.d,{justifyContent:"center"},k(o.a,{width:[22/24,20/24,.75],py:4},k(o.d,{flexWrap:"wrap"},k(o.a,{width:[1,1/3],p:4},k(o.d,{justifyContent:"center",alignItems:"center"},k(o.f,{href:"tel:021111144"},k(o.e,{src:"".concat(s.a,"/static/images/contact/ktb.png")})))),k(o.a,{width:[1,1/3],p:4},k(o.d,{justifyContent:"center",alignItems:"center"},k(o.f,{href:"tel:022706400"},k(o.e,{src:"".concat(s.a,"/static/images/contact/cgd.png")})))),k(o.a,{width:[1,1/3],p:4},k(o.d,{justifyContent:"center",alignItems:"center"},k(o.f,{href:"tel:1672"},k(o.e,{src:"".concat(s.a,"/static/images/contact/tat.png")})))))))},_=a.a.createElement,I=function(e){return _(o.d,{justifyContent:"center"},_(o.a,{width:[22/24,20/24,.75],py:4},_(o.g,{fontSize:18,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#333333"},"\u0e43\u0e0a\u0e49\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e48\u0e19 \u201c\u0e40\u0e1b\u0e4b\u0e32\u0e15\u0e31\u0e07\u201d \u0e0a\u0e33\u0e23\u0e30\u0e04\u0e48\u0e32\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e41\u0e25\u0e30\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23"),_(o.g,{fontSize:18,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#333333"},"\u0e0a\u0e33\u0e23\u0e30\u0e04\u0e48\u0e32\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e41\u0e25\u0e30\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e44\u0e14\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e48\u0e19 \u201c\u0e16\u0e38\u0e07\u0e40\u0e07\u0e34\u0e19\u201d \u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19"),_(o.g,{fontSize:18,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#e6332a"},"\u0e43\u0e0a\u0e49\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e44\u0e14\u0e49\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48 27 \u0e01.\u0e22. - 31 \u0e18.\u0e04. 62")))},F={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V=r.createContext&&r.createContext(F),z=function(){return(z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function R(e){return function(t){return r.createElement(M,z({attr:z({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,z({key:n},t.attr),e(t.child))})}(e.child))}}function M(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,i=e.title,c=D(e,["attr","title"]);return r.createElement("svg",z({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:z({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==V?r.createElement(V.Consumer,null,function(e){return t(e)}):t(F)}var W=function(e){return R({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"}}]})(e)};W.displayName="FaCaretRight";var B=n("17x9"),L=n.n(B),U=n("aUsF"),Y=n.n(U),Q=n("D+Oc"),G=n.n(Q),J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function Z(e){return q({},e,{playerVars:q({},e.playerVars,{autoplay:0,start:0,end:0})})}var $=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onPlayerReady=function(e){return n.props.onReady(e)},n.onPlayerError=function(e){return n.props.onError(e)},n.onPlayerStateChange=function(e){switch(n.props.onStateChange(e),e.data){case t.PlayerState.ENDED:n.props.onEnd(e);break;case t.PlayerState.PLAYING:n.props.onPlay(e);break;case t.PlayerState.PAUSED:n.props.onPause(e)}},n.onPlayerPlaybackRateChange=function(e){return n.props.onPlaybackRateChange(e)},n.onPlayerPlaybackQualityChange=function(e){return n.props.onPlaybackQualityChange(e)},n.createPlayer=function(){if("undefined"!==typeof document){var e=q({},n.props.opts,{videoId:n.props.videoId});n.internalPlayer=G()(n.container,e),n.internalPlayer.on("ready",n.onPlayerReady),n.internalPlayer.on("error",n.onPlayerError),n.internalPlayer.on("stateChange",n.onPlayerStateChange),n.internalPlayer.on("playbackRateChange",n.onPlayerPlaybackRateChange),n.internalPlayer.on("playbackQualityChange",n.onPlayerPlaybackQualityChange)}},n.resetPlayer=function(){return n.internalPlayer.destroy().then(n.createPlayer)},n.updatePlayer=function(){n.internalPlayer.getIframe().then(function(e){n.props.id?e.setAttribute("id",n.props.id):e.removeAttribute("id"),n.props.className?e.setAttribute("class",n.props.className):e.removeAttribute("class")})},n.updateVideo=function(){if("undefined"!==typeof n.props.videoId&&null!==n.props.videoId){var e=!1,t={videoId:n.props.videoId};"playerVars"in n.props.opts&&(e=1===n.props.opts.playerVars.autoplay,"start"in n.props.opts.playerVars&&(t.startSeconds=n.props.opts.playerVars.start),"end"in n.props.opts.playerVars&&(t.endSeconds=n.props.opts.playerVars.end)),e?n.internalPlayer.loadVideoById(t):n.internalPlayer.cueVideoById(t)}else n.internalPlayer.stopVideo()},n.refContainer=function(e){n.container=e},n.container=null,n.internalPlayer=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),J(t,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){return e.id!==t.id||e.className!==t.className})(e,this.props)&&this.updatePlayer(),function(e,t){return!Y()(Z(e.opts),Z(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){if(e.videoId!==t.videoId)return!0;var n=e.opts.playerVars||{},r=t.opts.playerVars||{};return n.start!==r.start||n.end!==r.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return a.a.createElement("div",{className:this.props.containerClassName},a.a.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer}))}}]),t}();$.propTypes={videoId:L.a.string,id:L.a.string,className:L.a.string,containerClassName:L.a.string,opts:L.a.objectOf(L.a.any),onReady:L.a.func,onError:L.a.func,onPlay:L.a.func,onPause:L.a.func,onEnd:L.a.func,onStateChange:L.a.func,onPlaybackRateChange:L.a.func,onPlaybackQualityChange:L.a.func},$.defaultProps={id:null,className:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},$.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var X=$,H=a.a.createElement;function K(){var e=Object(i.a)(["\n  border-radius: 5px;\n  border: solid 4px #213a8f;\n  color: #213a8f;\n  background: transparent;\n\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background: #213a8f;\n    color: #fff;\n  }\n"]);return K=function(){return e},e}function ee(){var e=Object(i.a)(["\n  width: 100%;\n"]);return ee=function(){return e},e}var te=Object(c.b)(o.e)(ee()),ne=Object(c.b)(o.b)(K()),re=function(e){var t=e.href,n=e.title;return H(o.f,{href:t},H(ne,{py:1,px:2},H(o.d,{alignItems:"center"},H(o.g,{fontSize:18,fontWeight:"bold",fontFamily:"TATSanaChon"},n),H(o.a,{mx:"auto"}),H(W,{size:"18px"}))))},ae=function(e){return H(o.d,{justifyContent:"center"},H(o.a,{width:[22/24,20/24,.75],py:3},H(o.a,{py:3},H(o.d,{flexWrap:"wrap"},H(o.a,{width:[1,5/12],p:3},H(o.g,{fontSize:36,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#e6332a",pb:3},"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"),H(re,{title:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32\u0e17\u0e35\u0e48\u0e23\u0e48\u0e27\u0e21\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23",href:"https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province"})),H(o.a,{width:[1,7/12],p:3},H(te,{src:"".concat(s.a,"/static/images/guide/store.png")})))),H(o.a,{py:3},H(o.d,{flexWrap:"wrap"},H(o.a,{width:[1,7/12],p:3},H(X,{videoId:"ZkniwQLv_Xk"})),H(o.a,{width:[1,5/12],p:3},H(o.g,{fontSize:36,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#e6332a",pb:3},"\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e41\u0e2d\u0e1b\u0e2f \u201c\u0e40\u0e1b\u0e4b\u0e32\u0e15\u0e31\u0e07\u201d"),H(re,{title:"\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",href:"https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register"})))),H(o.a,{py:3},H(o.d,{flexWrap:"wrap"},H(o.a,{width:[1,5/12],p:3},H(o.g,{fontSize:36,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#e6332a",pb:3},"\u0e01\u0e32\u0e23\u0e40\u0e15\u0e34\u0e21\u0e40\u0e07\u0e34\u0e19\u0e40\u0e02\u0e49\u0e32 \u201c\u0e40\u0e1b\u0e4b\u0e32\u0e15\u0e31\u0e07\u201d (G-Wallet)"),H(re,{title:"\u0e14\u0e39\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",href:"https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-topup-gwallet"})),H(o.a,{width:[1,7/12],p:3},H(te,{src:"".concat(s.a,"/static/images/guide/topup.png")})))),H(o.a,{py:3},H(o.d,{flexWrap:"wrap"},H(o.a,{width:[1,7/12],p:3},H(te,{src:"".concat(s.a,"/static/images/guide/usage.png")})),H(o.a,{width:[1,5/12],p:3},H(o.g,{fontSize:36,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#e6332a"},"\u0e43\u0e0a\u0e49\u0e08\u0e48\u0e32\u0e22 \u0e2a\u0e30\u0e14\u0e27\u0e01 \u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e1c\u0e48\u0e32\u0e19 \u201c\u0e40\u0e1b\u0e4b\u0e32\u0e15\u0e31\u0e07\u201d (G-Wallet)"),H(o.a,{py:2},H(o.g,{fontSize:18,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#333"},"\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e15\u0e48\u0e2d\u0e17\u0e35\u0e48 1 : \u0e23\u0e31\u0e1a\u0e40\u0e07\u0e34\u0e19\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19 1,000 \u0e1a\u0e32\u0e17"),H(o.g,{fontSize:18,fontWeight:"bold",fontFamily:"TATSanaChon",color:"#333"},"\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e15\u0e48\u0e2d\u0e17\u0e35\u0e48 2 : \u0e23\u0e31\u0e1a\u0e40\u0e07\u0e34\u0e19\u0e0a\u0e14\u0e40\u0e0a\u0e22\u0e04\u0e37\u0e19 15%-20% (\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 8,500 \u0e1a\u0e32\u0e17)")),H(o.a,{py:2},H(o.g,{fontSize:16,fontFamily:"TATSanaSuksa",color:"#333333"},"\u0e41\u0e1a\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19"),H(o.a,{px:3},H(o.g,{fontSize:16,fontFamily:"TATSanaSuksa",color:"#333333"},"1. 15% \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e22\u0e2d\u0e14\u0e43\u0e0a\u0e49\u0e08\u0e48\u0e32\u0e22\u0e2a\u0e30\u0e2a\u0e21\u0e44\u0e21\u0e48\u0e40\u0e01\u0e34\u0e19 30,000 \u0e1a\u0e32\u0e17"),H(o.g,{fontSize:16,fontFamily:"TATSanaSuksa",color:"#333333"},"2. 20% \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e22\u0e2d\u0e14\u0e43\u0e0a\u0e49\u0e08\u0e48\u0e32\u0e22\u0e2a\u0e30\u0e2a\u0e21\u0e2a\u0e48\u0e27\u0e19 30,000 \u0e16\u0e36\u0e07 50,000 \u0e1a\u0e32\u0e17"))),H(o.a,{py:2},H(o.d,null,H(o.a,{p:2},H(o.f,{href:"https://apps.apple.com/th/app/%E0%B9%80%E0%B8%9B-%E0%B8%B2%E0%B8%95-%E0%B8%87/id1324902182?l=th"},H(o.e,{width:168,src:"".concat(s.a,"/static/images/download/ios.png")}))),H(o.a,{p:2},H(o.f,{href:"https://play.google.com/store/apps/details?id=com.ktb.customer.qr"},H(o.e,{width:168,src:"".concat(s.a,"/static/images/download/android.png")}))))))))))},oe=a.a.createElement,ie=function(e){return oe(o.a,null,oe(S,null),oe(j,null),oe(ae,null),oe(I,null),oe(N,null))},ce=a.a.createElement;t.default=function(e){return ce(ie,null)}},aUsF:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var i,c,s,l=r(t),u=r(n);if(l&&u){if((c=t.length)!=n.length)return!1;for(i=c;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(l!=u)return!1;var f=t instanceof Date,d=n instanceof Date;if(f!=d)return!1;if(f&&d)return t.getTime()==n.getTime();var p=t instanceof RegExp,y=n instanceof RegExp;if(p!=y)return!1;if(p&&y)return t.toString()==n.toString();var h=a(t);if((c=h.length)!==a(n).length)return!1;for(i=c;0!==i--;)if(!o.call(n,h[i]))return!1;for(i=c;0!==i--;)if(!e(t[s=h[i]],n[s]))return!1;return!0}return t!==t&&n!==n}},k2N2:function(e,t){var n=1e3,r=60*n,a=60*r,o=24*a,i=365.25*o;function c(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var s,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*i;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*a;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?c(s=e,o,"day")||c(s,a,"hour")||c(s,r,"minute")||c(s,n,"second")||s+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=a)return Math.round(e/a)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},lv48:function(e,t,n){var r;function a(e){function n(){if(n.enabled){var e=n,a=+new Date,o=a-(r||a);e.diff=o,e.prev=r,e.curr=a,r=a;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;s++;var a=t.formatters[r];if("function"===typeof a){var o=i[s];n=a.call(e,o),i.splice(s,1),s--}return n}),t.formatArgs.call(e,i),(n.log||t.log||console.log.bind(console)).apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&("-"===(e=n[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("k2N2"),t.names=[],t.skips=[],t.formatters={}},"s/rx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},t0y4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},u6sg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default}},[["/EDR",1,0]]]);