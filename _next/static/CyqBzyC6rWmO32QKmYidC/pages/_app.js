(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"===typeof t&&"default"in t?t.default:t}var o=n("q1tI"),a=r(o),i=r(n("Gytx"));function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!==typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var f,l=[];function s(){f=t(l.map(function(t){return t.props})),T.canUseDOM?e(f):n&&(f=n(f))}var T=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return f},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=f;return f=void 0,l=[],t};var u=o.prototype;return u.shouldComponentUpdate=function(t){return!i(t,this.props)},u.componentWillMount=function(){l.push(this),s()},u.componentDidUpdate=function(){s()},u.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),s()},u.render=function(){return a.createElement(r,this.props)},o}(o.Component);return u(T,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),u(T,"canUseDOM",c),T}}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),u=n("N9n2"),c=n("ln6h"),f=n("KI45");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=A,e.default=void 0;var l=f(n("htGi")),s=f(n("+oT+")),T=f(n("q1tI")),p=n("g/15");function d(t){return E.apply(this,arguments)}function E(){return(E=(0,s.default)(c.mark(function t(e){var n,r,o;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,r=e.ctx,t.next=3,(0,p.loadGetInitialProps)(n,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}e.AppInitialProps=p.AppInitialProps;var h=function(t){function e(){return r(this,e),a(this,i(e).apply(this,arguments))}return u(e,t),o(e,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=A(e);return T.default.createElement(n,(0,l.default)({},r,{url:o}))}}]),e}(T.default.Component);function A(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=h,h.origGetInitialProps=d,h.getInitialProps=d},Gytx:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!==typeof t||!t||"object"!==typeof e||!e)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),c=0;c<a.length;c++){var f=a[c];if(!u(f))return!1;var l=t[f],s=e[f];if(!1===(o=n?n.call(r,l,s,f):void 0)||void 0===o&&l!==s)return!1}return!0}},TJpk:function(t,e,n){e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=s(n("q1tI")),i=s(n("17x9")),u=s(n("8+s/")),c=s(n("bmMU")),f=n("v1p5"),l=n("hFT/");function s(t){return t&&t.__esModule?t:{default:t}}function T(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var p=function(t){var e,n;return n=e=function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,e.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),n.prototype.shouldComponentUpdate=function(t){return!(0,c.default)(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,a=t.newChildProps,i=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,a=t.newProps,i=t.newChildProps,u=t.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},a,((e={})[o.type]=u,e.titleAttributes=r({},i),e));case l.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case l.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach(function(e){var o;n=r({},n,((o={})[e]=t[e],o))}),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return a.default.Children.forEach(t,function(t){if(t&&t.props){var o=t.props,a=o.children,i=T(o,["children"]),u=(0,f.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(t,a),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:u,nestedChildren:a})}}}),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,o=T(e,["children"]),i=r({},o);return n&&(i=this.mapChildrenToProps(n,i)),a.default.createElement(t,i)},o(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(a.default.Component),e.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=(0,f.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n}((0,u.default)(f.reducePropsToState,f.handleClientStateChange,f.mapStateOnServer)(function(){return null}));p.renderStatic=p.rewind,e.Helmet=p,e.default=p},Wl4k:function(t,e){t.exports={unregister:function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},register:function(t){"serviceWorker"in navigator&&navigator.serviceWorker.register(t||"/service-worker.js").then(function(t){console.log("SW registered: ",t)}).catch(function(t){console.log("SW registration failed: ",t)})}}},bmMU:function(t,e,n){"use strict";var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!==typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var u,c,f,l=r(e),s=r(n);if(l&&s){if((c=e.length)!=n.length)return!1;for(u=c;0!==u--;)if(!t(e[u],n[u]))return!1;return!0}if(l!=s)return!1;var T=e instanceof Date,p=n instanceof Date;if(T!=p)return!1;if(T&&p)return e.getTime()==n.getTime();var d=e instanceof RegExp,E=n instanceof RegExp;if(d!=E)return!1;if(d&&E)return e.toString()==n.toString();var h=o(e);if((c=h.length)!==o(n).length)return!1;for(u=c;0!==u--;)if(!a.call(n,h[u]))return!1;if(i&&e instanceof Element&&n instanceof Element)return e===n;for(u=c;0!==u--;)if(("_owner"!==(f=h[u])||!e.$$typeof)&&!t(e[f],n[f]))return!1;return!0}return e!==e&&n!==n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(t,e){e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(e.VALID_TAG_NAMES=Object.keys(n).map(function(t){return n[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce(function(t,e){return t[r[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},hUgY:function(t,e,n){"use strict";n.r(e);var r=n("hfKm"),o=n.n(r);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}var i=n("XVgq"),u=n.n(i),c=n("Z7t5"),f=n.n(c);function l(t){return(l="function"===typeof f.a&&"symbol"===typeof u.a?function(t){return typeof t}:function(t){return t&&"function"===typeof f.a&&t.constructor===f.a&&t!==f.a.prototype?"symbol":typeof t})(t)}function s(t){return(s="function"===typeof f.a&&"symbol"===l(u.a)?function(t){return l(t)}:function(t){return t&&"function"===typeof f.a&&t.constructor===f.a&&t!==f.a.prototype?"symbol":l(t)})(t)}function T(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var p=n("Bhuq"),d=n.n(p),E=n("TRZx"),h=n.n(E);function A(t){return(A=h.a?d.a:function(t){return t.__proto__||d()(t)})(t)}var y=n("SqZg"),b=n.n(y);function S(t,e){return(S=h.a||function(t,e){return t.__proto__=e,t})(t,e)}var m=n("q1tI"),g=n.n(m),v=n("8Bbg"),_=n.n(v),O=n("Wl4k"),w=n("VdAu"),P=n("FGAr"),C=n("rt45"),R=n("vOnD"),M=n("CoOK"),I=g.a.createElement;function N(){var t=Object(C.a)(["\n  text-decoration: none;\n  color: #333333;\n"]);return N=function(){return t},t}function L(){var t=Object(C.a)(["\n  text-decoration: none;\n"]);return L=function(){return t},t}function j(){var t=Object(C.a)(["\n  background: #213a8f;\n"]);return j=function(){return t},t}function G(){var t=Object(C.a)(["\n  background: #fafafa;\n"]);return G=function(){return t},t}var k=Object(R.b)(w.a)(G()),H=Object(R.b)(w.a)(j()),x=Object(R.b)(w.f)(L()),U=R.b.a(N()),B=function(t){var e=Object(m.useContext)(P.a);return I(k,null,I(w.a,null,I(w.d,{justifyContent:"center"},I(w.a,{width:[22/24,20/24,.75],py:4},I(w.d,{flexWrap:"wrap"},I(w.a,{width:[1,.25],p:2},I(w.e,{alt:"logo",width:108,src:"".concat(M.a,"/static/images/logo.png")})),I(w.a,{width:[1,.25],p:2},I(w.g,{pb:1,fontSize:16,fontWeight:700,fontFamily:"TATSanaSuksa",color:"#e6332a"},"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19"),I(w.g,{pb:1,fontSize:14,fontFamily:"TATSanaSuksa",color:"#333333"},"\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34 \u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e48\u0e19 \u201c\u0e40\u0e1b\u0e4b\u0e32\u0e15\u0e31\u0e07\u201d \u0e41\u0e25\u0e30 \u201c\u0e16\u0e38\u0e07\u0e40\u0e07\u0e34\u0e19\u201d"),I(w.g,{pb:1,fontSize:14,fontFamily:"TATSanaSuksa",color:"#333333"},"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49 Call Center by Krungthai \u0e42\u0e17\u0e23.",I(U,{href:"tel:021111144"},"0 2111 1144"))),I(w.a,{width:[1,.25],p:2},I(w.g,{pb:1,fontSize:16,fontWeight:700,fontFamily:"TATSanaSuksa",color:"#e6332a"},"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1c\u0e39\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e01\u0e32\u0e23"),I(w.g,{pb:1,fontSize:14,fontFamily:"TATSanaSuksa",color:"#333333"},"\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e41\u0e25\u0e30\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23\u0e2f"),I(w.g,{pb:1,fontSize:14,fontFamily:"TATSanaSuksa",color:"#333333"},"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e42\u0e17\u0e23. ",I(U,{href:"tel:022706400"},"0 2270 6400 \u0e01\u0e14 7"))),I(w.a,{width:[1,.25],p:2},I(w.g,{pb:1,fontSize:16,fontWeight:700,fontFamily:"TATSanaSuksa",color:"#e6332a"},"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49"),I(w.g,{pb:1,fontSize:14,fontFamily:"TATSanaSuksa",color:"#333333"},"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e17\u0e17\u0e17."),I(w.g,{pb:1,fontSize:14,fontFamily:"TATSanaSuksa",color:"#333333"},"\u0e42\u0e17\u0e23 ",I(U,{href:"tel:1672"},"1672"))))))),I(H,null,I(w.d,{justifyContent:"center"},I(w.a,{width:[22/24,20/24,.75]},I(w.d,{flexWrap:"wrap",py:3},I(w.a,{width:[1,.25],p:2},I(w.g,{fontSize:[12,14],fontWeight:"bold",fontFamily:"TATSanaChon",color:"white"},"Copyright \xa9 2003-2019")),e.navbarItems.map(function(t){var e=t.label,n=t.href;return I(w.a,{width:[1,.25],key:"navbar-".concat(e),p:2},I(x,{href:n},I(w.g,{fontSize:[12,14],fontWeight:"bold",fontFamily:"TATSanaChon",color:"white"},e)))}))))))};function F(){var t=Object(C.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  }\n\n  @font-face {\n    font-family: 'Chonburi';\n    font-style: normal;\n    font-display: swap;\n    src: url('","/static/fonts/Chonburi/normal/font.woff2') format('woff2'), url('","/static/fonts/Chonburi/normal/font.woff') format('woff');\n  }\n\n  @font-face {\n    font-family: 'TATSanaChon';\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n    src: url('","/static/fonts/TATSanaChon/normal/font.woff2') format('woff2'), url('","/static/fonts/TATSanaChon/normal/font.woff') format('woff');\n  }\n\n  @font-face {\n    font-family: 'TATSanaChon';\n    font-style: normal;\n    font-weight: 700;\n    font-display: swap;\n    src: url('","/static/fonts/TATSanaChon/bold/font.woff2') format('woff2'), url('","/static/fonts/TATSanaChon/bold/font.woff') format('woff');\n  }\n\n  @font-face {\n    font-family: 'TATSanaSuksa';\n    font-style: normal;\n    font-display: swap;\n    src: url('","/static/fonts/TATSanaSuksa/normal/font.woff2') format('woff2'), url('","/static/fonts/TATSanaSuksa/normal/font.woff') format('woff');\n  }\n"]);return F=function(){return t},t}var D=Object(R.a)(F(),M.a,M.a,M.a,M.a,M.a,M.a,M.a,M.a),W=n("ma3e"),q=n("GHgE"),Y=n("yZLd"),z=g.a.createElement;function X(){var t=Object(C.a)(["\n  color: rgba(0, 0, 0, 0.5);\n\n  &:hover {\n    color: #333333;\n  }\n"]);return X=function(){return t},t}function K(){var t=Object(C.a)(["\n  background: #fff;\n"]);return K=function(){return t},t}function V(){var t=Object(C.a)(["\n  width: auto;\n  height: 42px;\n"]);return V=function(){return t},t}function Z(){var t=Object(C.a)(["\n  height: 58px;\n"]);return Z=function(){return t},t}function J(){var t=Object(C.a)(["\n  color: #333333;\n  font-weight: bold;\n  transition: all 0.3s ease-in-out 0s;\n\n  position: relative;\n\n  &:hover {\n    color: #213a8f;\n\n    &:after {\n      transform: scaleX(1);\n    }\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 6px;\n\n    position: absolute;\n    left: 0;\n    bottom: -10px;\n\n    background-color: #213a8f;\n\n    transform: scaleX(0);\n    transition: all 0.3s ease-in-out 0s;\n  }\n"]);return J=function(){return t},t}function Q(){var t=Object(C.a)(["\n  text-decoration: none;\n"]);return Q=function(){return t},t}function $(){var t=Object(C.a)(["\n  position: fixed;\n  z-index: 1;\n  background: #fff;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);\n  width: 100%;\n  height: 58px;\n"]);return $=function(){return t},t}var tt=Object(R.b)(w.a)($()),et=Object(R.b)(w.f)(Q()),nt=Object(R.b)(w.g)(J()),rt=Object(R.b)(w.d)(Z()),ot=Object(R.b)(w.e)(V()),at=Object(R.b)(w.a)(K()),it=Object(R.b)(w.g)(X()),ut=function(){var t=Object(m.useContext)(P.a),e=Object(m.useState)(!1),n=e[0],r=e[1];return z("nav",null,z(w.a,{pb:58},z(tt,null,z(Y.a,null,z(rt,{justifyContent:"center",alignItems:"center"},t.navbarItems.map(function(t){var e=t.label,n=t.href;return z(w.a,{p:3,key:"navbar-".concat(e)},z(et,{href:n},z(nt,{fontSize:14,fontWeight:400,fontFamily:"TATSanaChon"},e)))}))),z(q.a,null,z(rt,{alignItems:"center"},z(w.a,{px:3},z(ot,{alt:"logo",src:"".concat(M.a,"/static/images/logo.png")})),z(w.a,{mx:"auto"}),z(w.a,{px:3,onClick:function(){return r(function(t){return!t})}},z(n?W.c:W.a,{size:"30px",color:"#333333"}))),n?z(at,{p:3},z(w.d,{flexWrap:"wrap"},t.navbarItems.map(function(t){var e=t.label,n=t.href;return z(w.a,{width:1,p:2,key:"navbar-".concat(e)},z(et,{href:n},z(it,{fontSize:16,fontWeight:400,fontFamily:"TATSanaSuksa",textAlign:"right"},e)))}))):null))))},ct=n("TJpk"),ft=g.a.createElement,lt=function(t){return ft(ct.Helmet,{htmlAttributes:{lang:"en"},defaultTitle:"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23 \u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49",link:[{rel:"shortcut icon",href:"".concat(M.a,"/static/images/logo.png")},{rel:"apple-touch-icon-precomposed",href:"".concat(M.a,"/static/images/logo.png")}],meta:[{name:"title",content:"\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e17\u0e48\u0e2d\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28 \u201c\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49\u201d"},{name:"description",content:"\u0e1c\u0e39\u0e49\u0e2a\u0e19\u0e43\u0e08\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23\u0e2f \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19 \u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48 \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 23 \u0e01.\u0e22. - 15 \u0e1e.\u0e22. 62"}]})},st=g.a.createElement,Tt=function(t){var e=t.children;return Object(m.useEffect)(function(){Object(O.register)()},[]),st(w.a,null,st(P.b,null,st(D,null),st(lt,null),st(ut,null),e,st(B,null)))},pt=g.a.createElement,dt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),T(this,A(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=b()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,_.a),n=e,(r=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return pt(Tt,null,pt(e,n))}}])&&a(n.prototype,r),o&&a(n,o),e}();e.default=dt},v1p5:function(t,e,n){(function(t){e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=c(n("q1tI")),i=c(n("MgzW")),u=n("hFT/");function c(t){return t&&t.__esModule?t:{default:t}}var f=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},l=function(t){var e=E(t,u.TAG_NAMES.TITLE),n=E(t,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,function(){return e});var r=E(t,u.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},s=function(t){return E(t,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(t,e){return e.filter(function(e){return"undefined"!==typeof e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return o({},t,e)},{})},p=function(t,e){return e.filter(function(t){return"undefined"!==typeof t[u.TAG_NAMES.BASE]}).map(function(t){return t[u.TAG_NAMES.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==t.indexOf(a)&&n[a])return e.concat(n)}return e},[])},d=function(t,e,n){var o={};return n.filter(function(e){return!!Array.isArray(e[t])||("undefined"!==typeof e[t]&&S("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,n){var r={};n.filter(function(t){for(var n=void 0,a=Object.keys(t),i=0;i<a.length;i++){var c=a[i],f=c.toLowerCase();-1===e.indexOf(f)||n===u.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||f===u.TAG_PROPERTIES.REL&&"stylesheet"===t[f].toLowerCase()||(n=f),-1===e.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var a=Object.keys(r),c=0;c<a.length;c++){var f=a[c],l=(0,i.default)({},o[f],r[f]);o[f]=l}return t},[]).reverse()},E=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},h=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){h(e)},0)}}(),A=function(t){return clearTimeout(t)},y="undefined"!==typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:t.requestAnimationFrame||h,b="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:t.cancelAnimationFrame||A,S=function(t){return console&&"function"===typeof console.warn&&console.warn(t)},m=null,g=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,f=t.onChangeClientState,l=t.scriptTags,s=t.styleTags,T=t.title,p=t.titleAttributes;O(u.TAG_NAMES.BODY,r),O(u.TAG_NAMES.HTML,o),_(T,p);var d={baseTag:w(u.TAG_NAMES.BASE,n),linkTags:w(u.TAG_NAMES.LINK,a),metaTags:w(u.TAG_NAMES.META,i),noscriptTags:w(u.TAG_NAMES.NOSCRIPT,c),scriptTags:w(u.TAG_NAMES.SCRIPT,l),styleTags:w(u.TAG_NAMES.STYLE,s)},E={},h={};Object.keys(d).forEach(function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(h[t]=d[t].oldTags)}),e&&e(),f(t,E,h)},v=function(t){return Array.isArray(t)?t.join(""):t},_=function(t,e){"undefined"!==typeof t&&document.title!==t&&(document.title=v(t)),O(u.TAG_NAMES.TITLE,e)},O=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(e),c=0;c<i.length;c++){var f=i[c],l=e[f]||"";n.getAttribute(f)!==l&&n.setAttribute(f,l),-1===o.indexOf(f)&&o.push(f);var s=a.indexOf(f);-1!==s&&a.splice(s,1)}for(var T=a.length-1;T>=0;T--)n.removeAttribute(a[T]);o.length===a.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},w=function(t,e){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c="undefined"===typeof e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return i=e,n.isEqualNode(t)})?o.splice(i,1):a.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),a.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:a}},P=function(t){return Object.keys(t).reduce(function(e,n){var r="undefined"!==typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[u.REACT_TAG_MAP[n]||n]=t[n],e},e)},R=function(t,e,n){switch(t){case u.TAG_NAMES.TITLE:return{toComponent:function(){return function(t,e,n){var r,o=((r={key:e})[u.HELMET_ATTRIBUTE]=!0,r),i=C(n,o);return[a.default.createElement(u.TAG_NAMES.TITLE,i,e)]}(0,e.title,e.titleAttributes)},toString:function(){return function(t,e,n,r){var o=P(n),a=v(e);return o?"<"+t+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+t+">":"<"+t+" "+u.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(e)},toString:function(){return P(e)}};default:return{toComponent:function(){return function(t,e){return e.map(function(e,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach(function(t){var n=u.REACT_TAG_MAP[t]||t;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]}),a.default.createElement(t,o)})}(t,e)},toString:function(){return function(t,e,n){return e.reduce(function(e,r){var o=Object.keys(r).filter(function(t){return!(t===u.TAG_PROPERTIES.INNER_HTML||t===u.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o="undefined"===typeof r[e]?e:e+'="'+f(r[e],n)+'"';return t?t+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=-1===u.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+t+">")},"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[u.HTML_TAG_MAP[n]||n]=t[n],e},e)},e.handleClientStateChange=function(t){m&&b(m),t.defer?m=y(function(){g(t,function(){m=null})}):(g(t),m=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,f=t.scriptTags,l=t.styleTags,s=t.title,T=void 0===s?"":s,p=t.titleAttributes;return{base:R(u.TAG_NAMES.BASE,e,r),bodyAttributes:R(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:R(u.ATTRIBUTE_NAMES.HTML,o,r),link:R(u.TAG_NAMES.LINK,a,r),meta:R(u.TAG_NAMES.META,i,r),noscript:R(u.TAG_NAMES.NOSCRIPT,c,r),script:R(u.TAG_NAMES.SCRIPT,f,r),style:R(u.TAG_NAMES.STYLE,l,r),title:R(u.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}},e.reducePropsToState=function(t){return{baseTag:p([u.TAG_PROPERTIES.HREF],t),bodyAttributes:T(u.ATTRIBUTE_NAMES.BODY,t),defer:E(t,u.HELMET_PROPS.DEFER),encode:E(t,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(u.ATTRIBUTE_NAMES.HTML,t),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],t),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:s(t),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],t),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],t),title:l(t),titleAttributes:T(u.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=y,e.warn=S}).call(this,n("yLpj"))}},[["74v/",1,0]]]);