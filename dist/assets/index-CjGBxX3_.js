function r0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function i0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zg={exports:{}},Vl={},ey={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),s0=Symbol.for("react.portal"),o0=Symbol.for("react.fragment"),a0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),u0=Symbol.for("react.provider"),c0=Symbol.for("react.context"),h0=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),p0=Symbol.for("react.lazy"),mp=Symbol.iterator;function m0(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var ty={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ny=Object.assign,ry={};function $i(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}$i.prototype.isReactComponent={};$i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iy(){}iy.prototype=$i.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}var Vh=Lh.prototype=new iy;Vh.constructor=Lh;ny(Vh,$i.prototype);Vh.isPureReactComponent=!0;var gp=Array.isArray,sy=Object.prototype.hasOwnProperty,Mh={current:null},oy={key:!0,ref:!0,__self:!0,__source:!0};function ay(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sy.call(e,r)&&!oy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Eo,type:t,key:s,ref:o,props:i,_owner:Mh.current}}function g0(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function y0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yp=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?y0(""+t.key):e.toString(36)}function Ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Eo:case s0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ou(o,0):r,gp(i)?(n="",t!=null&&(n=t.replace(yp,"$&/")+"/"),Ta(i,e,n,"",function(h){return h})):i!=null&&(bh(i)&&(i=g0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ou(s,l);o+=Ta(s,e,n,u,i)}else if(u=m0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ou(s,l++),o+=Ta(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,n){if(t==null)return t;var r=[],i=0;return Ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function v0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},Ia={transition:null},_0={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:Mh};function ly(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=$i;X.Fragment=o0;X.Profiler=l0;X.PureComponent=Lh;X.StrictMode=a0;X.Suspense=d0;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_0;X.act=ly;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ny({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)sy.call(e,u)&&!oy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Eo,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:c0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:u0,_context:t},t.Consumer=t};X.createElement=ay;X.createFactory=function(t){var e=ay.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:h0,render:t}};X.isValidElement=bh;X.lazy=function(t){return{$$typeof:p0,_payload:{_status:-1,_result:t},_init:v0}};X.memo=function(t,e){return{$$typeof:f0,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};X.unstable_act=ly;X.useCallback=function(t,e){return it.current.useCallback(t,e)};X.useContext=function(t){return it.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return it.current.useDeferredValue(t)};X.useEffect=function(t,e){return it.current.useEffect(t,e)};X.useId=function(){return it.current.useId()};X.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return it.current.useMemo(t,e)};X.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};X.useRef=function(t){return it.current.useRef(t)};X.useState=function(t){return it.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return it.current.useTransition()};X.version="18.3.1";ey.exports=X;var j=ey.exports;const uy=i0(j),E0=r0({__proto__:null,default:uy},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=j,T0=Symbol.for("react.element"),I0=Symbol.for("react.fragment"),S0=Object.prototype.hasOwnProperty,A0=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C0={key:!0,ref:!0,__self:!0,__source:!0};function cy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)S0.call(e,r)&&!C0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:T0,type:t,key:s,ref:o,props:i,_owner:A0.current}}Vl.Fragment=I0;Vl.jsx=cy;Vl.jsxs=cy;Zg.exports=Vl;var f=Zg.exports,yc={},hy={exports:{}},Et={},dy={exports:{}},fy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var Q=B.length;B.push(q);e:for(;0<Q;){var ce=Q-1>>>1,we=B[ce];if(0<i(we,q))B[ce]=q,B[Q]=we,Q=ce;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var q=B[0],Q=B.pop();if(Q!==q){B[0]=Q;e:for(var ce=0,we=B.length,fr=we>>>1;ce<fr;){var Tt=2*(ce+1)-1,pr=B[Tt],Nt=Tt+1,Cn=B[Nt];if(0>i(pr,Q))Nt<we&&0>i(Cn,pr)?(B[ce]=Cn,B[Nt]=Q,ce=Nt):(B[ce]=pr,B[Tt]=Q,ce=Tt);else if(Nt<we&&0>i(Cn,Q))B[ce]=Cn,B[Nt]=Q,ce=Nt;else break e}}return q}function i(B,q){var Q=B.sortIndex-q.sortIndex;return Q!==0?Q:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,y=3,R=!1,P=!1,x=!1,L=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(B){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=B)r(h),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(h)}}function D(B){if(x=!1,C(B),!P)if(n(u)!==null)P=!0,Yi(M);else{var q=n(h);q!==null&&Xi(D,q.startTime-B)}}function M(B,q){P=!1,x&&(x=!1,I(v),v=-1),R=!0;var Q=y;try{for(C(q),m=n(u);m!==null&&(!(m.expirationTime>q)||B&&!A());){var ce=m.callback;if(typeof ce=="function"){m.callback=null,y=m.priorityLevel;var we=ce(m.expirationTime<=q);q=t.unstable_now(),typeof we=="function"?m.callback=we:m===n(u)&&r(u),C(q)}else r(u);m=n(u)}if(m!==null)var fr=!0;else{var Tt=n(h);Tt!==null&&Xi(D,Tt.startTime-q),fr=!1}return fr}finally{m=null,y=Q,R=!1}}var z=!1,E=null,v=-1,w=5,S=-1;function A(){return!(t.unstable_now()-S<w)}function k(){if(E!==null){var B=t.unstable_now();S=B;var q=!0;try{q=E(!0,B)}finally{q?T():(z=!1,E=null)}}else z=!1}var T;if(typeof _=="function")T=function(){_(k)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,nn=Ve.port2;Ve.port1.onmessage=k,T=function(){nn.postMessage(null)}}else T=function(){L(k,0)};function Yi(B){E=B,z||(z=!0,T())}function Xi(B,q){v=L(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||R||(P=!0,Yi(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var Q=y;y=q;try{return B()}finally{y=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=y;y=B;try{return q()}finally{y=Q}},t.unstable_scheduleCallback=function(B,q,Q){var ce=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ce+Q:ce):Q=ce,B){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=Q+we,B={id:p++,callback:q,priorityLevel:B,startTime:Q,expirationTime:we,sortIndex:-1},Q>ce?(B.sortIndex=Q,e(h,B),n(u)===null&&B===n(h)&&(x?(I(v),v=-1):x=!0,Xi(D,Q-ce))):(B.sortIndex=we,e(u,B),P||R||(P=!0,Yi(M))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var q=y;return function(){var Q=y;y=q;try{return B.apply(this,arguments)}finally{y=Q}}}})(fy);dy.exports=fy;var R0=dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=j,_t=R0;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var py=new Set,qs={};function Gr(t,e){ki(t,e),ki(t+"Capture",e)}function ki(t,e){for(qs[t]=e,t=0;t<e.length;t++)py.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=Object.prototype.hasOwnProperty,k0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vp={},_p={};function N0(t){return vc.call(_p,t)?!0:vc.call(vp,t)?!1:k0.test(t)?_p[t]=!0:(vp[t]=!0,!1)}function x0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O0(t,e,n,r){if(e===null||typeof e>"u"||x0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var jh=/[\-:]([a-z])/g;function Uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jh,Uh);Be[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jh,Uh);Be[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jh,Uh);Be[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fh(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(O0(e,n,i,r)&&(n=null),r||i===null?N0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),ii=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),zh=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),gy=Symbol.for("react.context"),Bh=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),yy=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function ms(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Du;function As(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Lu=!1;function Vu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function D0(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=Vu(t.type,!1),t;case 11:return t=Vu(t.type.render,!1),t;case 1:return t=Vu(t.type,!0),t;default:return""}}function Tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case si:return"Fragment";case ii:return"Portal";case _c:return"Profiler";case zh:return"StrictMode";case Ec:return"Suspense";case wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gy:return(t.displayName||"Context")+".Consumer";case my:return(t._context.displayName||"Context")+".Provider";case Bh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $h:return e=t.displayName||null,e!==null?e:Tc(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return Tc(t(e))}catch{}}return null}function L0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tc(e);case 8:return e===zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function V0(t){var e=vy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ea(t){t._valueTracker||(t._valueTracker=V0(t))}function _y(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ha(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ey(t,e){e=e.checked,e!=null&&Fh(t,"checked",e,!1)}function Sc(t,e){Ey(t,e);var n=nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ac(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ac(t,e,n){(e!=="number"||Ha(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Cs(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function wy(t,e){var n=nr(e.value),r=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ty(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ty(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ta,Iy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M0=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){M0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function Sy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function Ay(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var b0=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(t,e){if(e){if(b0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nc=null;function Hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xc=null,yi=null,vi=null;function Ap(t){if(t=Io(t)){if(typeof xc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Fl(e),xc(t.stateNode,t.type,e))}}function Cy(t){yi?vi?vi.push(t):vi=[t]:yi=t}function Ry(){if(yi){var t=yi,e=vi;if(vi=yi=null,Ap(t),e)for(t=0;t<e.length;t++)Ap(e[t])}}function Py(t,e){return t(e)}function ky(){}var Mu=!1;function Ny(t,e,n){if(Mu)return t(e,n);Mu=!0;try{return Py(t,e,n)}finally{Mu=!1,(yi!==null||vi!==null)&&(ky(),Ry())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var r=Fl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Oc=!1;if(yn)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{Oc=!1}function j0(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Ds=!1,Wa=null,Ga=!1,Dc=null,U0={onError:function(t){Ds=!0,Wa=t}};function F0(t,e,n,r,i,s,o,l,u){Ds=!1,Wa=null,j0.apply(U0,arguments)}function z0(t,e,n,r,i,s,o,l,u){if(F0.apply(this,arguments),Ds){if(Ds){var h=Wa;Ds=!1,Wa=null}else throw Error(U(198));Ga||(Ga=!0,Dc=h)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cp(t){if(qr(t)!==t)throw Error(U(188))}function B0(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cp(i),t;if(s===r)return Cp(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Oy(t){return t=B0(t),t!==null?Dy(t):null}function Dy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dy(t);if(e!==null)return e;t=t.sibling}return null}var Ly=_t.unstable_scheduleCallback,Rp=_t.unstable_cancelCallback,$0=_t.unstable_shouldYield,H0=_t.unstable_requestPaint,Te=_t.unstable_now,W0=_t.unstable_getCurrentPriorityLevel,Wh=_t.unstable_ImmediatePriority,Vy=_t.unstable_UserBlockingPriority,qa=_t.unstable_NormalPriority,G0=_t.unstable_LowPriority,My=_t.unstable_IdlePriority,Ml=null,Jt=null;function q0(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:J0,K0=Math.log,Q0=Math.LN2;function J0(t){return t>>>=0,t===0?32:31-(K0(t)/Q0|0)|0}var na=64,ra=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Rs(l):(s&=o,s!==0&&(r=Rs(s)))}else o=n&~i,o!==0?r=Rs(o):s!==0&&(r=Rs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function Y0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=Y0(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function by(){var t=na;return na<<=1,!(na&4194240)&&(na=64),t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function Z0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function jy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Uy,qh,Fy,zy,By,Vc=!1,ia=[],$n=null,Hn=null,Wn=null,Js=new Map,Ys=new Map,bn=[],eT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,e){switch(t){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Io(e),e!==null&&qh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tT(t,e,n,r,i){switch(e){case"focusin":return $n=ys($n,t,e,n,r,i),!0;case"dragenter":return Hn=ys(Hn,t,e,n,r,i),!0;case"mouseover":return Wn=ys(Wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Js.set(s,ys(Js.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ys.set(s,ys(Ys.get(s)||null,t,e,n,r,i)),!0}return!1}function $y(t){var e=Sr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=xy(n),e!==null){t.blockedOn=e,By(t.priority,function(){Fy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nc=r,n.target.dispatchEvent(r),Nc=null}else return e=Io(n),e!==null&&qh(e),t.blockedOn=n,!1;e.shift()}return!0}function kp(t,e,n){Sa(t)&&n.delete(e)}function nT(){Vc=!1,$n!==null&&Sa($n)&&($n=null),Hn!==null&&Sa(Hn)&&(Hn=null),Wn!==null&&Sa(Wn)&&(Wn=null),Js.forEach(kp),Ys.forEach(kp)}function vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Vc||(Vc=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,nT)))}function Xs(t){function e(i){return vs(i,t)}if(0<ia.length){vs(ia[0],t);for(var n=1;n<ia.length;n++){var r=ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for($n!==null&&vs($n,t),Hn!==null&&vs(Hn,t),Wn!==null&&vs(Wn,t),Js.forEach(e),Ys.forEach(e),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)$y(n),n.blockedOn===null&&bn.shift()}var _i=In.ReactCurrentBatchConfig,Qa=!0;function rT(t,e,n,r){var i=re,s=_i.transition;_i.transition=null;try{re=1,Kh(t,e,n,r)}finally{re=i,_i.transition=s}}function iT(t,e,n,r){var i=re,s=_i.transition;_i.transition=null;try{re=4,Kh(t,e,n,r)}finally{re=i,_i.transition=s}}function Kh(t,e,n,r){if(Qa){var i=Mc(t,e,n,r);if(i===null)qu(t,e,r,Ja,n),Pp(t,r);else if(tT(i,t,e,n,r))r.stopPropagation();else if(Pp(t,r),e&4&&-1<eT.indexOf(t)){for(;i!==null;){var s=Io(i);if(s!==null&&Uy(s),s=Mc(t,e,n,r),s===null&&qu(t,e,r,Ja,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qu(t,e,r,null,n)}}var Ja=null;function Mc(t,e,n,r){if(Ja=null,t=Hh(r),t=Sr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ja=t,null}function Hy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W0()){case Wh:return 1;case Vy:return 4;case qa:case G0:return 16;case My:return 536870912;default:return 16}default:return 16}}var Fn=null,Qh=null,Aa=null;function Wy(){if(Aa)return Aa;var t,e=Qh,n=e.length,r,i="value"in Fn?Fn.value:Fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Aa=i.slice(t,1<r?1-r:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function Np(){return!1}function wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sa:Np,this.isPropagationStopped=Np,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=wt(Hi),To=ye({},Hi,{view:0,detail:0}),sT=wt(To),ju,Uu,_s,bl=ye({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_s&&(_s&&t.type==="mousemove"?(ju=t.screenX-_s.screenX,Uu=t.screenY-_s.screenY):Uu=ju=0,_s=t),ju)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),xp=wt(bl),oT=ye({},bl,{dataTransfer:0}),aT=wt(oT),lT=ye({},To,{relatedTarget:0}),Fu=wt(lT),uT=ye({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),cT=wt(uT),hT=ye({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dT=wt(hT),fT=ye({},Hi,{data:0}),Op=wt(fT),pT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gT[t])?!!e[t]:!1}function Yh(){return yT}var vT=ye({},To,{key:function(t){if(t.key){var e=pT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yh,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_T=wt(vT),ET=ye({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=wt(ET),wT=ye({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yh}),TT=wt(wT),IT=ye({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ST=wt(IT),AT=ye({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CT=wt(AT),RT=[9,13,27,32],Xh=yn&&"CompositionEvent"in window,Ls=null;yn&&"documentMode"in document&&(Ls=document.documentMode);var PT=yn&&"TextEvent"in window&&!Ls,Gy=yn&&(!Xh||Ls&&8<Ls&&11>=Ls),Lp=" ",Vp=!1;function qy(t,e){switch(t){case"keyup":return RT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ky(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oi=!1;function kT(t,e){switch(t){case"compositionend":return Ky(e);case"keypress":return e.which!==32?null:(Vp=!0,Lp);case"textInput":return t=e.data,t===Lp&&Vp?null:t;default:return null}}function NT(t,e){if(oi)return t==="compositionend"||!Xh&&qy(t,e)?(t=Wy(),Aa=Qh=Fn=null,oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gy&&e.locale!=="ko"?null:e.data;default:return null}}var xT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xT[t.type]:e==="textarea"}function Qy(t,e,n,r){Cy(r),e=Ya(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vs=null,Zs=null;function OT(t){ov(t,0)}function jl(t){var e=ui(t);if(_y(e))return t}function DT(t,e){if(t==="change")return e}var Jy=!1;if(yn){var zu;if(yn){var Bu="oninput"in document;if(!Bu){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),Bu=typeof bp.oninput=="function"}zu=Bu}else zu=!1;Jy=zu&&(!document.documentMode||9<document.documentMode)}function jp(){Vs&&(Vs.detachEvent("onpropertychange",Yy),Zs=Vs=null)}function Yy(t){if(t.propertyName==="value"&&jl(Zs)){var e=[];Qy(e,Zs,t,Hh(t)),Ny(OT,e)}}function LT(t,e,n){t==="focusin"?(jp(),Vs=e,Zs=n,Vs.attachEvent("onpropertychange",Yy)):t==="focusout"&&jp()}function VT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Zs)}function MT(t,e){if(t==="click")return jl(e)}function bT(t,e){if(t==="input"||t==="change")return jl(e)}function jT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:jT;function eo(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function Up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,e){var n=Up(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Up(n)}}function Xy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zy(){for(var t=window,e=Ha();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ha(t.document)}return e}function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UT(t){var e=Zy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xy(n.ownerDocument.documentElement,n)){if(r!==null&&Zh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fp(n,s);var o=Fp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FT=yn&&"documentMode"in document&&11>=document.documentMode,ai=null,bc=null,Ms=null,jc=!1;function zp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jc||ai==null||ai!==Ha(r)||(r=ai,"selectionStart"in r&&Zh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ms&&eo(Ms,r)||(Ms=r,r=Ya(bc,"onSelect"),0<r.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ai)))}function oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var li={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},$u={},ev={};yn&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function Ul(t){if($u[t])return $u[t];if(!li[t])return t;var e=li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ev)return $u[t]=e[n];return t}var tv=Ul("animationend"),nv=Ul("animationiteration"),rv=Ul("animationstart"),iv=Ul("transitionend"),sv=new Map,Bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){sv.set(t,e),Gr(e,[t])}for(var Hu=0;Hu<Bp.length;Hu++){var Wu=Bp[Hu],zT=Wu.toLowerCase(),BT=Wu[0].toUpperCase()+Wu.slice(1);lr(zT,"on"+BT)}lr(tv,"onAnimationEnd");lr(nv,"onAnimationIteration");lr(rv,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(iv,"onTransitionEnd");ki("onMouseEnter",["mouseout","mouseover"]);ki("onMouseLeave",["mouseout","mouseover"]);ki("onPointerEnter",["pointerout","pointerover"]);ki("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$T=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));function $p(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,z0(r,e,void 0,t),t.currentTarget=null}function ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;$p(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;$p(i,l,h),s=u}}}if(Ga)throw t=Dc,Ga=!1,Dc=null,t}function le(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var r=t+"__bubble";n.has(r)||(av(e,t,2,!1),n.add(r))}function Gu(t,e,n){var r=0;e&&(r|=4),av(n,t,r,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[aa]){t[aa]=!0,py.forEach(function(n){n!=="selectionchange"&&($T.has(n)||Gu(n,!1,t),Gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[aa]||(e[aa]=!0,Gu("selectionchange",!1,e))}}function av(t,e,n,r){switch(Hy(e)){case 1:var i=rT;break;case 4:i=iT;break;default:i=Kh}n=i.bind(null,e,n,t),i=void 0,!Oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Sr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ny(function(){var h=s,p=Hh(n),m=[];e:{var y=sv.get(t);if(y!==void 0){var R=Jh,P=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":R=_T;break;case"focusin":P="focus",R=Fu;break;case"focusout":P="blur",R=Fu;break;case"beforeblur":case"afterblur":R=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=aT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=TT;break;case tv:case nv:case rv:R=cT;break;case iv:R=ST;break;case"scroll":R=sT;break;case"wheel":R=CT;break;case"copy":case"cut":case"paste":R=dT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Dp}var x=(e&4)!==0,L=!x&&t==="scroll",I=x?y!==null?y+"Capture":null:y;x=[];for(var _=h,C;_!==null;){C=_;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,I!==null&&(D=Qs(_,I),D!=null&&x.push(no(_,D,C)))),L)break;_=_.return}0<x.length&&(y=new R(y,P,null,n,p),m.push({event:y,listeners:x}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",y&&n!==Nc&&(P=n.relatedTarget||n.fromElement)&&(Sr(P)||P[vn]))break e;if((R||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,R?(P=n.relatedTarget||n.toElement,R=h,P=P?Sr(P):null,P!==null&&(L=qr(P),P!==L||P.tag!==5&&P.tag!==6)&&(P=null)):(R=null,P=h),R!==P)){if(x=xp,D="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Dp,D="onPointerLeave",I="onPointerEnter",_="pointer"),L=R==null?y:ui(R),C=P==null?y:ui(P),y=new x(D,_+"leave",R,n,p),y.target=L,y.relatedTarget=C,D=null,Sr(p)===h&&(x=new x(I,_+"enter",P,n,p),x.target=C,x.relatedTarget=L,D=x),L=D,R&&P)t:{for(x=R,I=P,_=0,C=x;C;C=ti(C))_++;for(C=0,D=I;D;D=ti(D))C++;for(;0<_-C;)x=ti(x),_--;for(;0<C-_;)I=ti(I),C--;for(;_--;){if(x===I||I!==null&&x===I.alternate)break t;x=ti(x),I=ti(I)}x=null}else x=null;R!==null&&Hp(m,y,R,x,!1),P!==null&&L!==null&&Hp(m,L,P,x,!0)}}e:{if(y=h?ui(h):window,R=y.nodeName&&y.nodeName.toLowerCase(),R==="select"||R==="input"&&y.type==="file")var M=DT;else if(Mp(y))if(Jy)M=bT;else{M=VT;var z=LT}else(R=y.nodeName)&&R.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=MT);if(M&&(M=M(t,h))){Qy(m,M,n,p);break e}z&&z(t,y,h),t==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&Ac(y,"number",y.value)}switch(z=h?ui(h):window,t){case"focusin":(Mp(z)||z.contentEditable==="true")&&(ai=z,bc=h,Ms=null);break;case"focusout":Ms=bc=ai=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,zp(m,n,p);break;case"selectionchange":if(FT)break;case"keydown":case"keyup":zp(m,n,p)}var E;if(Xh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else oi?qy(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Gy&&n.locale!=="ko"&&(oi||v!=="onCompositionStart"?v==="onCompositionEnd"&&oi&&(E=Wy()):(Fn=p,Qh="value"in Fn?Fn.value:Fn.textContent,oi=!0)),z=Ya(h,v),0<z.length&&(v=new Op(v,t,null,n,p),m.push({event:v,listeners:z}),E?v.data=E:(E=Ky(n),E!==null&&(v.data=E)))),(E=PT?kT(t,n):NT(t,n))&&(h=Ya(h,"onBeforeInput"),0<h.length&&(p=new Op("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=E))}ov(m,e)})}function no(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ya(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qs(t,n),s!=null&&r.unshift(no(t,s,i)),s=Qs(t,e),s!=null&&r.push(no(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Qs(n,s),u!=null&&o.unshift(no(n,u,l))):i||(u=Qs(n,s),u!=null&&o.push(no(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HT=/\r\n?/g,WT=/\u0000|\uFFFD/g;function Wp(t){return(typeof t=="string"?t:""+t).replace(HT,`
`).replace(WT,"")}function la(t,e,n){if(e=Wp(e),Wp(t)!==e&&n)throw Error(U(425))}function Xa(){}var Uc=null,Fc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,GT=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,qT=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(KT)}:Bc;function KT(t){setTimeout(function(){throw t})}function Ku(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xs(e)}function Gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wi=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Wi,ro="__reactProps$"+Wi,vn="__reactContainer$"+Wi,$c="__reactEvents$"+Wi,QT="__reactListeners$"+Wi,JT="__reactHandles$"+Wi;function Sr(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qp(t);t!==null;){if(n=t[Qt])return n;t=qp(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Qt]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Fl(t){return t[ro]||null}var Hc=[],ci=-1;function ur(t){return{current:t}}function ue(t){0>ci||(t.current=Hc[ci],Hc[ci]=null,ci--)}function se(t,e){ci++,Hc[ci]=t.current,t.current=e}var rr={},Ye=ur(rr),ct=ur(!1),Dr=rr;function Ni(t,e){var n=t.type.contextTypes;if(!n)return rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function Za(){ue(ct),ue(Ye)}function Kp(t,e,n){if(Ye.current!==rr)throw Error(U(168));se(Ye,e),se(ct,n)}function lv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,L0(t)||"Unknown",i));return ye({},n,r)}function el(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Dr=Ye.current,se(Ye,t),se(ct,ct.current),!0}function Qp(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=lv(t,e,Dr),r.__reactInternalMemoizedMergedChildContext=t,ue(ct),ue(Ye),se(Ye,t)):ue(ct),se(ct,n)}var sn=null,zl=!1,Qu=!1;function uv(t){sn===null?sn=[t]:sn.push(t)}function YT(t){zl=!0,uv(t)}function cr(){if(!Qu&&sn!==null){Qu=!0;var t=0,e=re;try{var n=sn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sn=null,zl=!1}catch(i){throw sn!==null&&(sn=sn.slice(t+1)),Ly(Wh,cr),i}finally{re=e,Qu=!1}}return null}var hi=[],di=0,tl=null,nl=0,It=[],St=0,Lr=null,un=1,cn="";function wr(t,e){hi[di++]=nl,hi[di++]=tl,tl=t,nl=e}function cv(t,e,n){It[St++]=un,It[St++]=cn,It[St++]=Lr,Lr=t;var r=un;t=cn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,un=1<<32-Ft(e)+i|n<<i|r,cn=s+t}else un=1<<s|n<<i|r,cn=t}function ed(t){t.return!==null&&(wr(t,1),cv(t,1,0))}function td(t){for(;t===tl;)tl=hi[--di],hi[di]=null,nl=hi[--di],hi[di]=null;for(;t===Lr;)Lr=It[--St],It[St]=null,cn=It[--St],It[St]=null,un=It[--St],It[St]=null}var vt=null,yt=null,de=!1,Lt=null;function hv(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,yt=Gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,yt=null,!0):!1;default:return!1}}function Wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gc(t){if(de){var e=yt;if(e){var n=e;if(!Jp(t,e)){if(Wc(t))throw Error(U(418));e=Gn(n.nextSibling);var r=vt;e&&Jp(t,e)?hv(r,n):(t.flags=t.flags&-4097|2,de=!1,vt=t)}}else{if(Wc(t))throw Error(U(418));t.flags=t.flags&-4097|2,de=!1,vt=t}}}function Yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function ua(t){if(t!==vt)return!1;if(!de)return Yp(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=yt)){if(Wc(t))throw dv(),Error(U(418));for(;e;)hv(t,e),e=Gn(e.nextSibling)}if(Yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yt=Gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yt=null}}else yt=vt?Gn(t.stateNode.nextSibling):null;return!0}function dv(){for(var t=yt;t;)t=Gn(t.nextSibling)}function xi(){yt=vt=null,de=!1}function nd(t){Lt===null?Lt=[t]:Lt.push(t)}var XT=In.ReactCurrentBatchConfig;function Es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xp(t){var e=t._init;return e(t._payload)}function fv(t){function e(I,_){if(t){var C=I.deletions;C===null?(I.deletions=[_],I.flags|=16):C.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=Jn(I,_),I.index=0,I.sibling=null,I}function s(I,_,C){return I.index=C,t?(C=I.alternate,C!==null?(C=C.index,C<_?(I.flags|=2,_):C):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,C,D){return _===null||_.tag!==6?(_=nc(C,I.mode,D),_.return=I,_):(_=i(_,C),_.return=I,_)}function u(I,_,C,D){var M=C.type;return M===si?p(I,_,C.props.children,D,C.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Vn&&Xp(M)===_.type)?(D=i(_,C.props),D.ref=Es(I,_,C),D.return=I,D):(D=Da(C.type,C.key,C.props,null,I.mode,D),D.ref=Es(I,_,C),D.return=I,D)}function h(I,_,C,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==C.containerInfo||_.stateNode.implementation!==C.implementation?(_=rc(C,I.mode,D),_.return=I,_):(_=i(_,C.children||[]),_.return=I,_)}function p(I,_,C,D,M){return _===null||_.tag!==7?(_=Nr(C,I.mode,D,M),_.return=I,_):(_=i(_,C),_.return=I,_)}function m(I,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return _=nc(""+_,I.mode,C),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zo:return C=Da(_.type,_.key,_.props,null,I.mode,C),C.ref=Es(I,null,_),C.return=I,C;case ii:return _=rc(_,I.mode,C),_.return=I,_;case Vn:var D=_._init;return m(I,D(_._payload),C)}if(Cs(_)||ms(_))return _=Nr(_,I.mode,C,null),_.return=I,_;ca(I,_)}return null}function y(I,_,C,D){var M=_!==null?_.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return M!==null?null:l(I,_,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Zo:return C.key===M?u(I,_,C,D):null;case ii:return C.key===M?h(I,_,C,D):null;case Vn:return M=C._init,y(I,_,M(C._payload),D)}if(Cs(C)||ms(C))return M!==null?null:p(I,_,C,D,null);ca(I,C)}return null}function R(I,_,C,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(C)||null,l(_,I,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Zo:return I=I.get(D.key===null?C:D.key)||null,u(_,I,D,M);case ii:return I=I.get(D.key===null?C:D.key)||null,h(_,I,D,M);case Vn:var z=D._init;return R(I,_,C,z(D._payload),M)}if(Cs(D)||ms(D))return I=I.get(C)||null,p(_,I,D,M,null);ca(_,D)}return null}function P(I,_,C,D){for(var M=null,z=null,E=_,v=_=0,w=null;E!==null&&v<C.length;v++){E.index>v?(w=E,E=null):w=E.sibling;var S=y(I,E,C[v],D);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(I,E),_=s(S,_,v),z===null?M=S:z.sibling=S,z=S,E=w}if(v===C.length)return n(I,E),de&&wr(I,v),M;if(E===null){for(;v<C.length;v++)E=m(I,C[v],D),E!==null&&(_=s(E,_,v),z===null?M=E:z.sibling=E,z=E);return de&&wr(I,v),M}for(E=r(I,E);v<C.length;v++)w=R(E,I,v,C[v],D),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?v:w.key),_=s(w,_,v),z===null?M=w:z.sibling=w,z=w);return t&&E.forEach(function(A){return e(I,A)}),de&&wr(I,v),M}function x(I,_,C,D){var M=ms(C);if(typeof M!="function")throw Error(U(150));if(C=M.call(C),C==null)throw Error(U(151));for(var z=M=null,E=_,v=_=0,w=null,S=C.next();E!==null&&!S.done;v++,S=C.next()){E.index>v?(w=E,E=null):w=E.sibling;var A=y(I,E,S.value,D);if(A===null){E===null&&(E=w);break}t&&E&&A.alternate===null&&e(I,E),_=s(A,_,v),z===null?M=A:z.sibling=A,z=A,E=w}if(S.done)return n(I,E),de&&wr(I,v),M;if(E===null){for(;!S.done;v++,S=C.next())S=m(I,S.value,D),S!==null&&(_=s(S,_,v),z===null?M=S:z.sibling=S,z=S);return de&&wr(I,v),M}for(E=r(I,E);!S.done;v++,S=C.next())S=R(E,I,v,S.value,D),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),_=s(S,_,v),z===null?M=S:z.sibling=S,z=S);return t&&E.forEach(function(k){return e(I,k)}),de&&wr(I,v),M}function L(I,_,C,D){if(typeof C=="object"&&C!==null&&C.type===si&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Zo:e:{for(var M=C.key,z=_;z!==null;){if(z.key===M){if(M=C.type,M===si){if(z.tag===7){n(I,z.sibling),_=i(z,C.props.children),_.return=I,I=_;break e}}else if(z.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Vn&&Xp(M)===z.type){n(I,z.sibling),_=i(z,C.props),_.ref=Es(I,z,C),_.return=I,I=_;break e}n(I,z);break}else e(I,z);z=z.sibling}C.type===si?(_=Nr(C.props.children,I.mode,D,C.key),_.return=I,I=_):(D=Da(C.type,C.key,C.props,null,I.mode,D),D.ref=Es(I,_,C),D.return=I,I=D)}return o(I);case ii:e:{for(z=C.key;_!==null;){if(_.key===z)if(_.tag===4&&_.stateNode.containerInfo===C.containerInfo&&_.stateNode.implementation===C.implementation){n(I,_.sibling),_=i(_,C.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=rc(C,I.mode,D),_.return=I,I=_}return o(I);case Vn:return z=C._init,L(I,_,z(C._payload),D)}if(Cs(C))return P(I,_,C,D);if(ms(C))return x(I,_,C,D);ca(I,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,C),_.return=I,I=_):(n(I,_),_=nc(C,I.mode,D),_.return=I,I=_),o(I)):n(I,_)}return L}var Oi=fv(!0),pv=fv(!1),rl=ur(null),il=null,fi=null,rd=null;function id(){rd=fi=il=null}function sd(t){var e=rl.current;ue(rl),t._currentValue=e}function qc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ei(t,e){il=t,rd=fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Rt(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},fi===null){if(il===null)throw Error(U(308));fi=t,il.dependencies={lanes:0,firstContext:t}}else fi=fi.next=t;return e}var Ar=null;function od(t){Ar===null?Ar=[t]:Ar.push(t)}function mv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,od(e)):(n.next=i.next,i.next=n),e.interleaved=n,_n(t,r)}function _n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_n(t,n)}return i=r.interleaved,i===null?(e.next=e,od(r)):(e.next=i.next,i.next=e),r.interleaved=e,_n(t,n)}function Ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gh(t,n)}}function Zp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sl(t,e,n,r){var i=t.updateQueue;Mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=h=u=null,l=s;do{var y=l.lane,R=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,x=l;switch(y=e,R=n,x.tag){case 1:if(P=x.payload,typeof P=="function"){m=P.call(R,m,y);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=x.payload,y=typeof P=="function"?P.call(R,m,y):P,y==null)break e;m=ye({},m,y);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else R={eventTime:R,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=R,u=m):p=p.next=R,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mr|=o,t.lanes=o,t.memoizedState=m}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var So={},Yt=ur(So),io=ur(So),so=ur(So);function Cr(t){if(t===So)throw Error(U(174));return t}function ld(t,e){switch(se(so,e),se(io,t),se(Yt,So),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rc(e,t)}ue(Yt),se(Yt,e)}function Di(){ue(Yt),ue(io),ue(so)}function yv(t){Cr(so.current);var e=Cr(Yt.current),n=Rc(e,t.type);e!==n&&(se(io,t),se(Yt,n))}function ud(t){io.current===t&&(ue(Yt),ue(io))}var pe=ur(0);function ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ju=[];function cd(){for(var t=0;t<Ju.length;t++)Ju[t]._workInProgressVersionPrimary=null;Ju.length=0}var Pa=In.ReactCurrentDispatcher,Yu=In.ReactCurrentBatchConfig,Vr=0,ge=null,Pe=null,Oe=null,al=!1,bs=!1,oo=0,ZT=0;function He(){throw Error(U(321))}function hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function dd(t,e,n,r,i,s){if(Vr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pa.current=t===null||t.memoizedState===null?rI:iI,t=n(r,i),bs){s=0;do{if(bs=!1,oo=0,25<=s)throw Error(U(301));s+=1,Oe=Pe=null,e.updateQueue=null,Pa.current=sI,t=n(r,i)}while(bs)}if(Pa.current=ll,e=Pe!==null&&Pe.next!==null,Vr=0,Oe=Pe=ge=null,al=!1,e)throw Error(U(300));return t}function fd(){var t=oo!==0;return oo=0,t}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ge.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Pt(){if(Pe===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var e=Oe===null?ge.memoizedState:Oe.next;if(e!==null)Oe=e,Pe=t;else{if(t===null)throw Error(U(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Oe===null?ge.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function ao(t,e){return typeof e=="function"?e(t):e}function Xu(t){var e=Pt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var p=h.lane;if((Vr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ge.lanes|=p,Mr|=p}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Mr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=Pt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function vv(){}function _v(t,e){var n=ge,r=Pt(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,pd(Tv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,lo(9,wv.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(U(349));Vr&30||Ev(n,e,i)}return i}function Ev(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wv(t,e,n,r){e.value=n,e.getSnapshot=r,Iv(e)&&Sv(t)}function Tv(t,e,n){return n(function(){Iv(e)&&Sv(t)})}function Iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function Sv(t){var e=_n(t,1);e!==null&&zt(e,t,1,-1)}function tm(t){var e=qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:t},e.queue=t,t=t.dispatch=nI.bind(null,ge,t),[e.memoizedState,t]}function lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Av(){return Pt().memoizedState}function ka(t,e,n,r){var i=qt();ge.flags|=t,i.memoizedState=lo(1|e,n,void 0,r===void 0?null:r)}function Bl(t,e,n,r){var i=Pt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&hd(r,o.deps)){i.memoizedState=lo(e,n,s,r);return}}ge.flags|=t,i.memoizedState=lo(1|e,n,s,r)}function nm(t,e){return ka(8390656,8,t,e)}function pd(t,e){return Bl(2048,8,t,e)}function Cv(t,e){return Bl(4,2,t,e)}function Rv(t,e){return Bl(4,4,t,e)}function Pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kv(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,Pv.bind(null,e,t),n)}function md(){}function Nv(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xv(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ov(t,e,n){return Vr&21?($t(n,e)||(n=by(),ge.lanes|=n,Mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function eI(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Yu.transition;Yu.transition={};try{t(!1),e()}finally{re=n,Yu.transition=r}}function Dv(){return Pt().memoizedState}function tI(t,e,n){var r=Qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lv(t))Vv(e,n);else if(n=mv(t,e,n,r),n!==null){var i=nt();zt(n,t,r,i),Mv(n,e,r)}}function nI(t,e,n){var r=Qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lv(t))Vv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,od(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=mv(t,e,i,r),n!==null&&(i=nt(),zt(n,t,r,i),Mv(n,e,r))}}function Lv(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function Vv(t,e){bs=al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gh(t,n)}}var ll={readContext:Rt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},rI={readContext:Rt,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:nm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ka(4194308,4,Pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return ka(4,2,t,e)},useMemo:function(t,e){var n=qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tI.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:tm,useDebugValue:md,useDeferredValue:function(t){return qt().memoizedState=t},useTransition:function(){var t=tm(!1),e=t[0];return t=eI.bind(null,t[1]),qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=qt();if(de){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Le===null)throw Error(U(349));Vr&30||Ev(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,nm(Tv.bind(null,r,s,t),[t]),r.flags|=2048,lo(9,wv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qt(),e=Le.identifierPrefix;if(de){var n=cn,r=un;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iI={readContext:Rt,useCallback:Nv,useContext:Rt,useEffect:pd,useImperativeHandle:kv,useInsertionEffect:Cv,useLayoutEffect:Rv,useMemo:xv,useReducer:Xu,useRef:Av,useState:function(){return Xu(ao)},useDebugValue:md,useDeferredValue:function(t){var e=Pt();return Ov(e,Pe.memoizedState,t)},useTransition:function(){var t=Xu(ao)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:_v,useId:Dv,unstable_isNewReconciler:!1},sI={readContext:Rt,useCallback:Nv,useContext:Rt,useEffect:pd,useImperativeHandle:kv,useInsertionEffect:Cv,useLayoutEffect:Rv,useMemo:xv,useReducer:Zu,useRef:Av,useState:function(){return Zu(ao)},useDebugValue:md,useDeferredValue:function(t){var e=Pt();return Pe===null?e.memoizedState=t:Ov(e,Pe.memoizedState,t)},useTransition:function(){var t=Zu(ao)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:_v,useId:Dv,unstable_isNewReconciler:!1};function Ot(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=Qn(t),s=fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(zt(e,t,i,r),Ra(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=Qn(t),s=fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(zt(e,t,i,r),Ra(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=Qn(t),i=fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&(zt(e,t,r,n),Ra(e,t,r))}};function rm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!eo(n,r)||!eo(i,s):!0}function bv(t,e,n){var r=!1,i=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=ht(e)?Dr:Ye.current,r=e.contextTypes,s=(r=r!=null)?Ni(t,i):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function im(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ad(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=ht(e)?Dr:Ye.current,i.context=Ni(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$l.enqueueReplaceState(i,i.state,null),sl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Li(t,e){try{var n="",r=e;do n+=D0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oI=typeof WeakMap=="function"?WeakMap:Map;function jv(t,e,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cl||(cl=!0,oh=r),Jc(t,e)},n}function Uv(t,e,n){n=fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jc(t,e),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EI.bind(null,t,e,n),e.then(t,t))}function om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function am(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t)}var aI=In.ReactCurrentOwner,ut=!1;function tt(t,e,n,r){e.child=t===null?pv(e,null,n,r):Oi(e,t.child,n,r)}function lm(t,e,n,r,i){n=n.render;var s=e.ref;return Ei(e,i),r=dd(t,e,n,r,s,i),n=fd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(de&&n&&ed(e),e.flags|=1,tt(t,e,r,i),e.child)}function um(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Fv(t,e,s,r,i)):(t=Da(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Jn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Fv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(eo(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,En(t,e,i)}return Yc(t,e,n,r,i)}function zv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(mi,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(mi,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(mi,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(mi,mt),mt|=r;return tt(t,e,i,n),e.child}function Bv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yc(t,e,n,r,i){var s=ht(n)?Dr:Ye.current;return s=Ni(e,s),Ei(e,i),n=dd(t,e,n,r,s,i),r=fd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(de&&r&&ed(e),e.flags|=1,tt(t,e,n,i),e.child)}function cm(t,e,n,r,i){if(ht(n)){var s=!0;el(e)}else s=!1;if(Ei(e,i),e.stateNode===null)Na(t,e),bv(e,n,r),Qc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Rt(h):(h=ht(n)?Dr:Ye.current,h=Ni(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&im(e,o,r,h),Mn=!1;var y=e.memoizedState;o.state=y,sl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||ct.current||Mn?(typeof p=="function"&&(Kc(e,n,p,r),u=e.memoizedState),(l=Mn||rm(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ot(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rt(u):(u=ht(n)?Dr:Ye.current,u=Ni(e,u));var R=n.getDerivedStateFromProps;(p=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&im(e,o,r,u),Mn=!1,y=e.memoizedState,o.state=y,sl(e,r,o,i);var P=e.memoizedState;l!==m||y!==P||ct.current||Mn?(typeof R=="function"&&(Kc(e,n,R,r),P=e.memoizedState),(h=Mn||rm(e,n,h,r,y,P,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Xc(t,e,n,r,s,i)}function Xc(t,e,n,r,i,s){Bv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qp(e,n,!1),En(t,e,s);r=e.stateNode,aI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oi(e,t.child,null,s),e.child=Oi(e,null,l,s)):tt(t,e,l,s),e.memoizedState=r.state,i&&Qp(e,n,!0),e.child}function $v(t){var e=t.stateNode;e.pendingContext?Kp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kp(t,e.context,!1),ld(t,e.containerInfo)}function hm(t,e,n,r,i){return xi(),nd(i),e.flags|=256,tt(t,e,n,r),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(pe,i&1),t===null)return Gc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gl(o,r,0,null),t=Nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eh(n),e.memoizedState=Zc,t):gd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return lI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Jn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Jn(l,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,r}return s=t.child,t=s.sibling,r=Jn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gd(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ha(t,e,n,r){return r!==null&&nd(r),Oi(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ec(Error(U(422))),ha(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gl({mode:"visible",children:r.children},i,0,null),s=Nr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oi(e,t.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Zc,s);if(!(e.mode&1))return ha(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=ec(s,r,void 0),ha(t,e,o,r)}if(l=(o&t.childLanes)!==0,ut||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_n(t,i),zt(r,t,i,-1))}return Td(),r=ec(Error(U(421))),ha(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,yt=Gn(i.nextSibling),vt=e,de=!0,Lt=null,t!==null&&(It[St++]=un,It[St++]=cn,It[St++]=Lr,un=t.id,cn=t.overflow,Lr=e),e=gd(e,r.children),e.flags|=4096,e)}function dm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qc(t.return,e,n)}function tc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Wv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,n,e);else if(t.tag===19)dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ol(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ol(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tc(e,!0,n,null,s);break;case"together":tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Na(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uI(t,e,n){switch(e.tag){case 3:$v(e),xi();break;case 5:yv(e);break;case 1:ht(e.type)&&el(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(rl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(se(pe,pe.current&1),t=En(t,e,n),t!==null?t.sibling:null);se(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Wv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,zv(t,e,n)}return En(t,e,n)}var Gv,th,qv,Kv;Gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};th=function(){};qv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Cr(Yt.current);var s=null;switch(n){case"input":i=Ic(t,i),r=Ic(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=Cc(t,i),r=Cc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xa)}Pc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(qs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(qs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&le("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Kv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ws(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cI(t,e,n){var r=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return ht(e.type)&&Za(),We(e),null;case 3:return r=e.stateNode,Di(),ue(ct),ue(Ye),cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Lt!==null&&(uh(Lt),Lt=null))),th(t,e),We(e),null;case 5:ud(e);var i=Cr(so.current);if(n=e.type,t!==null&&e.stateNode!=null)qv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return We(e),null}if(t=Cr(Yt.current),ua(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[ro]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Ps.length;i++)le(Ps[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":wp(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Ip(r,s),le("invalid",r)}Pc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&la(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&la(r.textContent,l,t),i=["children",""+l]):qs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":ea(r),Tp(r,s,!0);break;case"textarea":ea(r),Sp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ty(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[ro]=r,Gv(t,e,!1,!1),e.stateNode=t;e:{switch(o=kc(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ps.length;i++)le(Ps[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":wp(t,r),i=Ic(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),le("invalid",t);break;case"textarea":Ip(t,r),i=Cc(t,r),le("invalid",t);break;default:i=r}Pc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ay(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Iy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ks(t,u):typeof u=="number"&&Ks(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&le("scroll",t):u!=null&&Fh(t,s,u,o))}switch(n){case"input":ea(t),Tp(t,r,!1);break;case"textarea":ea(t),Sp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)Kv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Cr(so.current),Cr(Yt.current),ua(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:la(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return We(e),null;case 13:if(ue(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&yt!==null&&e.mode&1&&!(e.flags&128))dv(),xi(),e.flags|=98560,s=!1;else if(s=ua(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Qt]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else Lt!==null&&(uh(Lt),Lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?ke===0&&(ke=3):Td())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Di(),th(t,e),t===null&&to(e.stateNode.containerInfo),We(e),null;case 10:return sd(e.type._context),We(e),null;case 17:return ht(e.type)&&Za(),We(e),null;case 19:if(ue(pe),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ws(s,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ol(t),o!==null){for(e.flags|=128,ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Vi&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=ol(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return We(e),null}else 2*Te()-s.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=pe.current,se(pe,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return wd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function hI(t,e){switch(td(e),e.tag){case 1:return ht(e.type)&&Za(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(),ue(ct),ue(Ye),cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ud(e),null;case 13:if(ue(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(pe),null;case 4:return Di(),null;case 10:return sd(e.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var da=!1,Ke=!1,dI=typeof WeakSet=="function"?WeakSet:Set,$=null;function pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function nh(t,e,n){try{n()}catch(r){_e(t,e,r)}}var fm=!1;function fI(t,e){if(Uc=Qa,t=Zy(),Zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,y=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(R=m.firstChild)!==null;)y=m,m=R;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++p===r&&(u=o),(R=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fc={focusedElem:t,selectionRange:n},Qa=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var x=P.memoizedProps,L=P.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?x:Ot(e.type,x),L);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){_e(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=fm,fm=!1,P}function js(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nh(e,n,s)}i=i.next}while(i!==r)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qv(t){var e=t.alternate;e!==null&&(t.alternate=null,Qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[ro],delete e[$c],delete e[QT],delete e[JT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jv(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xa));else if(r!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}var Me=null,Dt=!1;function Dn(t,e,n){for(n=n.child;n!==null;)Yv(t,e,n),n=n.sibling}function Yv(t,e,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Ke||pi(n,e);case 6:var r=Me,i=Dt;Me=null,Dn(t,e,n),Me=r,Dt=i,Me!==null&&(Dt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Dt?(t=Me,n=n.stateNode,t.nodeType===8?Ku(t.parentNode,n):t.nodeType===1&&Ku(t,n),Xs(t)):Ku(Me,n.stateNode));break;case 4:r=Me,i=Dt,Me=n.stateNode.containerInfo,Dt=!0,Dn(t,e,n),Me=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!Ke&&(pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Dn(t,e,n),Ke=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dI),e.forEach(function(r){var i=TI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Dt=!1;break e;case 3:Me=l.stateNode.containerInfo,Dt=!0;break e;case 4:Me=l.stateNode.containerInfo,Dt=!0;break e}l=l.return}if(Me===null)throw Error(U(160));Yv(s,o,i),Me=null,Dt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){_e(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xv(e,t),e=e.sibling}function Xv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),Gt(t),r&4){try{js(3,t,t.return),Hl(3,t)}catch(x){_e(t,t.return,x)}try{js(5,t,t.return)}catch(x){_e(t,t.return,x)}}break;case 1:xt(e,t),Gt(t),r&512&&n!==null&&pi(n,n.return);break;case 5:if(xt(e,t),Gt(t),r&512&&n!==null&&pi(n,n.return),t.flags&32){var i=t.stateNode;try{Ks(i,"")}catch(x){_e(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ey(i,s),kc(l,o);var h=kc(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Ay(i,m):p==="dangerouslySetInnerHTML"?Iy(i,m):p==="children"?Ks(i,m):Fh(i,p,m,h)}switch(l){case"input":Sc(i,s);break;case"textarea":wy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?gi(i,!!s.multiple,R,!1):y!==!!s.multiple&&(s.defaultValue!=null?gi(i,!!s.multiple,s.defaultValue,!0):gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ro]=s}catch(x){_e(t,t.return,x)}}break;case 6:if(xt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){_e(t,t.return,x)}}break;case 3:if(xt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(e.containerInfo)}catch(x){_e(t,t.return,x)}break;case 4:xt(e,t),Gt(t);break;case 13:xt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_d=Te())),r&4&&mm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(h=Ke)||p,xt(e,t),Ke=h):xt(e,t),Gt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for($=t,p=t.child;p!==null;){for(m=$=p;$!==null;){switch(y=$,R=y.child,y.tag){case 0:case 11:case 14:case 15:js(4,y,y.return);break;case 1:pi(y,y.return);var P=y.stateNode;if(typeof P.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(x){_e(r,n,x)}}break;case 5:pi(y,y.return);break;case 22:if(y.memoizedState!==null){ym(m);continue}}R!==null?(R.return=y,$=R):ym(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Sy("display",o))}catch(x){_e(t,t.return,x)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(x){_e(t,t.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:xt(e,t),Gt(t),r&4&&mm(t);break;case 21:break;default:xt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ks(i,""),r.flags&=-33);var s=pm(t);sh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=pm(t);ih(t,l,o);break;default:throw Error(U(161))}}catch(u){_e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pI(t,e,n){$=t,Zv(t)}function Zv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||da;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ke;l=da;var h=Ke;if(da=o,(Ke=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?vm(i):u!==null?(u.return=o,$=u):vm(i);for(;s!==null;)$=s,Zv(s),s=s.sibling;$=i,da=l,Ke=h}gm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):gm(t)}}function gm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||Hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ot(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&em(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Xs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ke||e.flags&512&&rh(e)}catch(y){_e(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function ym(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function vm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(u){_e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){_e(e,i,u)}}var s=e.return;try{rh(e)}catch(u){_e(e,s,u)}break;case 5:var o=e.return;try{rh(e)}catch(u){_e(e,o,u)}}}catch(u){_e(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var mI=Math.ceil,ul=In.ReactCurrentDispatcher,yd=In.ReactCurrentOwner,Ct=In.ReactCurrentBatchConfig,te=0,Le=null,Se=null,Fe=0,mt=0,mi=ur(0),ke=0,uo=null,Mr=0,Wl=0,vd=0,Us=null,lt=null,_d=0,Vi=1/0,rn=null,cl=!1,oh=null,Kn=null,fa=!1,zn=null,hl=0,Fs=0,ah=null,xa=-1,Oa=0;function nt(){return te&6?Te():xa!==-1?xa:xa=Te()}function Qn(t){return t.mode&1?te&2&&Fe!==0?Fe&-Fe:XT.transition!==null?(Oa===0&&(Oa=by()),Oa):(t=re,t!==0||(t=window.event,t=t===void 0?16:Hy(t.type)),t):1}function zt(t,e,n,r){if(50<Fs)throw Fs=0,ah=null,Error(U(185));wo(t,n,r),(!(te&2)||t!==Le)&&(t===Le&&(!(te&2)&&(Wl|=n),ke===4&&jn(t,Fe)),dt(t,r),n===1&&te===0&&!(e.mode&1)&&(Vi=Te()+500,zl&&cr()))}function dt(t,e){var n=t.callbackNode;X0(t,e);var r=Ka(t,t===Le?Fe:0);if(r===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?YT(_m.bind(null,t)):uv(_m.bind(null,t)),qT(function(){!(te&6)&&cr()}),n=null;else{switch(jy(r)){case 1:n=Wh;break;case 4:n=Vy;break;case 16:n=qa;break;case 536870912:n=My;break;default:n=qa}n=a_(n,e_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e_(t,e){if(xa=-1,Oa=0,te&6)throw Error(U(327));var n=t.callbackNode;if(wi()&&t.callbackNode!==n)return null;var r=Ka(t,t===Le?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=dl(t,r);else{e=r;var i=te;te|=2;var s=n_();(Le!==t||Fe!==e)&&(rn=null,Vi=Te()+500,kr(t,e));do try{vI();break}catch(l){t_(t,l)}while(!0);id(),ul.current=s,te=i,Se!==null?e=0:(Le=null,Fe=0,e=ke)}if(e!==0){if(e===2&&(i=Lc(t),i!==0&&(r=i,e=lh(t,i))),e===1)throw n=uo,kr(t,0),jn(t,r),dt(t,Te()),n;if(e===6)jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!gI(i)&&(e=dl(t,r),e===2&&(s=Lc(t),s!==0&&(r=s,e=lh(t,s))),e===1))throw n=uo,kr(t,0),jn(t,r),dt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Tr(t,lt,rn);break;case 3:if(jn(t,r),(r&130023424)===r&&(e=_d+500-Te(),10<e)){if(Ka(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bc(Tr.bind(null,t,lt,rn),e);break}Tr(t,lt,rn);break;case 4:if(jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mI(r/1960))-r,10<r){t.timeoutHandle=Bc(Tr.bind(null,t,lt,rn),r);break}Tr(t,lt,rn);break;case 5:Tr(t,lt,rn);break;default:throw Error(U(329))}}}return dt(t,Te()),t.callbackNode===n?e_.bind(null,t):null}function lh(t,e){var n=Us;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=dl(t,e),t!==2&&(e=lt,lt=n,e!==null&&uh(e)),t}function uh(t){lt===null?lt=t:lt.push.apply(lt,t)}function gI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jn(t,e){for(e&=~vd,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function _m(t){if(te&6)throw Error(U(327));wi();var e=Ka(t,0);if(!(e&1))return dt(t,Te()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var r=Lc(t);r!==0&&(e=r,n=lh(t,r))}if(n===1)throw n=uo,kr(t,0),jn(t,e),dt(t,Te()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,lt,rn),dt(t,Te()),null}function Ed(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(Vi=Te()+500,zl&&cr())}}function br(t){zn!==null&&zn.tag===0&&!(te&6)&&wi();var e=te;te|=1;var n=Ct.transition,r=re;try{if(Ct.transition=null,re=1,t)return t()}finally{re=r,Ct.transition=n,te=e,!(te&6)&&cr()}}function wd(){mt=mi.current,ue(mi)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GT(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Za();break;case 3:Di(),ue(ct),ue(Ye),cd();break;case 5:ud(r);break;case 4:Di();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:sd(r.type._context);break;case 22:case 23:wd()}n=n.return}if(Le=t,Se=t=Jn(t.current,null),Fe=mt=e,ke=0,uo=null,vd=Wl=Mr=0,lt=Us=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ar=null}return t}function t_(t,e){do{var n=Se;try{if(id(),Pa.current=ll,al){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}al=!1}if(Vr=0,Oe=Pe=ge=null,bs=!1,oo=0,yd.current=null,n===null||n.return===null){ke=1,uo=e,Se=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Fe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var R=om(o);if(R!==null){R.flags&=-257,am(R,o,l,s,e),R.mode&1&&sm(s,h,e),e=R,u=h;var P=e.updateQueue;if(P===null){var x=new Set;x.add(u),e.updateQueue=x}else P.add(u);break e}else{if(!(e&1)){sm(s,h,e),Td();break e}u=Error(U(426))}}else if(de&&l.mode&1){var L=om(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),am(L,o,l,s,e),nd(Li(u,l));break e}}s=u=Li(u,l),ke!==4&&(ke=2),Us===null?Us=[s]:Us.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=jv(s,u,e);Zp(s,I);break e;case 1:l=u;var _=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Kn===null||!Kn.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Uv(s,l,e);Zp(s,D);break e}}s=s.return}while(s!==null)}i_(n)}catch(M){e=M,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function n_(){var t=ul.current;return ul.current=ll,t===null?ll:t}function Td(){(ke===0||ke===3||ke===2)&&(ke=4),Le===null||!(Mr&268435455)&&!(Wl&268435455)||jn(Le,Fe)}function dl(t,e){var n=te;te|=2;var r=n_();(Le!==t||Fe!==e)&&(rn=null,kr(t,e));do try{yI();break}catch(i){t_(t,i)}while(!0);if(id(),te=n,ul.current=r,Se!==null)throw Error(U(261));return Le=null,Fe=0,ke}function yI(){for(;Se!==null;)r_(Se)}function vI(){for(;Se!==null&&!$0();)r_(Se)}function r_(t){var e=o_(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?i_(t):Se=e,yd.current=null}function i_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hI(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Se=null;return}}else if(n=cI(n,e,mt),n!==null){Se=n;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);ke===0&&(ke=5)}function Tr(t,e,n){var r=re,i=Ct.transition;try{Ct.transition=null,re=1,_I(t,e,n,r)}finally{Ct.transition=i,re=r}return null}function _I(t,e,n,r){do wi();while(zn!==null);if(te&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Z0(t,s),t===Le&&(Se=Le=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fa||(fa=!0,a_(qa,function(){return wi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=re;re=1;var l=te;te|=4,yd.current=null,fI(t,n),Xv(n,t),UT(Fc),Qa=!!Uc,Fc=Uc=null,t.current=n,pI(n),H0(),te=l,re=o,Ct.transition=s}else t.current=n;if(fa&&(fa=!1,zn=t,hl=i),s=t.pendingLanes,s===0&&(Kn=null),q0(n.stateNode),dt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cl)throw cl=!1,t=oh,oh=null,t;return hl&1&&t.tag!==0&&wi(),s=t.pendingLanes,s&1?t===ah?Fs++:(Fs=0,ah=t):Fs=0,cr(),null}function wi(){if(zn!==null){var t=jy(hl),e=Ct.transition,n=re;try{if(Ct.transition=null,re=16>t?16:t,zn===null)var r=!1;else{if(t=zn,zn=null,hl=0,te&6)throw Error(U(331));var i=te;for(te|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:js(8,p,s)}var m=p.child;if(m!==null)m.return=p,$=m;else for(;$!==null;){p=$;var y=p.sibling,R=p.return;if(Qv(p),p===h){$=null;break}if(y!==null){y.return=R,$=y;break}$=R}}}var P=s.alternate;if(P!==null){var x=P.child;if(x!==null){P.child=null;do{var L=x.sibling;x.sibling=null,x=L}while(x!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:js(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,$=C;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(M){_e(l,l.return,M)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(te=i,cr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ml,t)}catch{}r=!0}return r}finally{re=n,Ct.transition=e}}return!1}function Em(t,e,n){e=Li(n,e),e=jv(t,e,1),t=qn(t,e,1),e=nt(),t!==null&&(wo(t,1,e),dt(t,e))}function _e(t,e,n){if(t.tag===3)Em(t,t,n);else for(;e!==null;){if(e.tag===3){Em(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){t=Li(n,t),t=Uv(e,t,1),e=qn(e,t,1),t=nt(),e!==null&&(wo(e,1,t),dt(e,t));break}}e=e.return}}function EI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(Fe&n)===n&&(ke===4||ke===3&&(Fe&130023424)===Fe&&500>Te()-_d?kr(t,0):vd|=n),dt(t,e)}function s_(t,e){e===0&&(t.mode&1?(e=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):e=1);var n=nt();t=_n(t,e),t!==null&&(wo(t,e,n),dt(t,n))}function wI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),s_(t,n)}function TI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),s_(t,n)}var o_;o_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,uI(t,e,n);ut=!!(t.flags&131072)}else ut=!1,de&&e.flags&1048576&&cv(e,nl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Na(t,e),t=e.pendingProps;var i=Ni(e,Ye.current);Ei(e,n),i=dd(null,e,r,t,i,n);var s=fd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,el(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ad(e),i.updater=$l,e.stateNode=i,i._reactInternals=e,Qc(e,r,t,n),e=Xc(null,e,r,!0,s,n)):(e.tag=0,de&&s&&ed(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Na(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SI(r),t=Ot(r,t),i){case 0:e=Yc(null,e,r,t,n);break e;case 1:e=cm(null,e,r,t,n);break e;case 11:e=lm(null,e,r,t,n);break e;case 14:e=um(null,e,r,Ot(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Yc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),cm(t,e,r,i,n);case 3:e:{if($v(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,gv(t,e),sl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Li(Error(U(423)),e),e=hm(t,e,r,n,i);break e}else if(r!==i){i=Li(Error(U(424)),e),e=hm(t,e,r,n,i);break e}else for(yt=Gn(e.stateNode.containerInfo.firstChild),vt=e,de=!0,Lt=null,n=pv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){e=En(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return yv(e),t===null&&Gc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zc(r,i)?o=null:s!==null&&zc(r,s)&&(e.flags|=32),Bv(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&Gc(e),null;case 13:return Hv(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oi(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),lm(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(rl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!ct.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=fn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),qc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ei(e,n),i=Rt(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=Ot(r,e.pendingProps),i=Ot(r.type,i),um(t,e,r,i,n);case 15:return Fv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Na(t,e),e.tag=1,ht(r)?(t=!0,el(e)):t=!1,Ei(e,n),bv(e,r,i),Qc(e,r,i,n),Xc(null,e,r,!0,t,n);case 19:return Wv(t,e,n);case 22:return zv(t,e,n)}throw Error(U(156,e.tag))};function a_(t,e){return Ly(t,e)}function II(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new II(t,e,n,r)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SI(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bh)return 11;if(t===$h)return 14}return 2}function Jn(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Da(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case si:return Nr(n.children,i,s,e);case zh:o=8,i|=8;break;case _c:return t=At(12,n,e,i|2),t.elementType=_c,t.lanes=s,t;case Ec:return t=At(13,n,e,i),t.elementType=Ec,t.lanes=s,t;case wc:return t=At(19,n,e,i),t.elementType=wc,t.lanes=s,t;case yy:return Gl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case my:o=10;break e;case gy:o=9;break e;case Bh:o=11;break e;case $h:o=14;break e;case Vn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Nr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function Gl(t,e,n,r){return t=At(22,t,r,e),t.elementType=yy,t.lanes=n,t.stateNode={isHidden:!1},t}function nc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function rc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bu(0),this.expirationTimes=bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sd(t,e,n,r,i,s,o,l,u){return t=new AI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),t}function CI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function l_(t){if(!t)return rr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(ht(n))return lv(t,n,e)}return e}function u_(t,e,n,r,i,s,o,l,u){return t=Sd(n,r,!0,t,i,s,o,l,u),t.context=l_(null),n=t.current,r=nt(),i=Qn(n),s=fn(r,i),s.callback=e??null,qn(n,s,i),t.current.lanes=i,wo(t,i,r),dt(t,r),t}function ql(t,e,n,r){var i=e.current,s=nt(),o=Qn(i);return n=l_(n),e.context===null?e.context=n:e.pendingContext=n,e=fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,o),t!==null&&(zt(t,i,o,s),Ra(t,i,o)),o}function fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ad(t,e){wm(t,e),(t=t.alternate)&&wm(t,e)}function RI(){return null}var c_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cd(t){this._internalRoot=t}Kl.prototype.render=Cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ql(t,e,null,null)};Kl.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){ql(null,t,null,null)}),e[vn]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=zy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bn.length&&e!==0&&e<bn[n].priority;n++);bn.splice(n,0,t),n===0&&$y(t)}};function Rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function PI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=fl(o);s.call(h)}}var o=u_(e,r,t,0,null,!1,!1,"",Tm);return t._reactRootContainer=o,t[vn]=o.current,to(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=fl(u);l.call(h)}}var u=Sd(t,0,!1,null,null,!1,!1,"",Tm);return t._reactRootContainer=u,t[vn]=u.current,to(t.nodeType===8?t.parentNode:t),br(function(){ql(e,u,n,r)}),u}function Jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=fl(o);l.call(u)}}ql(e,o,t,i)}else o=PI(n,e,t,i,r);return fl(o)}Uy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rs(e.pendingLanes);n!==0&&(Gh(e,n|1),dt(e,Te()),!(te&6)&&(Vi=Te()+500,cr()))}break;case 13:br(function(){var r=_n(t,1);if(r!==null){var i=nt();zt(r,t,1,i)}}),Ad(t,1)}};qh=function(t){if(t.tag===13){var e=_n(t,134217728);if(e!==null){var n=nt();zt(e,t,134217728,n)}Ad(t,134217728)}};Fy=function(t){if(t.tag===13){var e=Qn(t),n=_n(t,e);if(n!==null){var r=nt();zt(n,t,e,r)}Ad(t,e)}};zy=function(){return re};By=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};xc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Fl(r);if(!i)throw Error(U(90));_y(r),Sc(r,i)}}}break;case"textarea":wy(t,n);break;case"select":e=n.value,e!=null&&gi(t,!!n.multiple,e,!1)}};Py=Ed;ky=br;var kI={usingClientEntryPoint:!1,Events:[Io,ui,Fl,Cy,Ry,Ed]},Ts={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NI={bundleType:Ts.bundleType,version:Ts.version,rendererPackageName:Ts.rendererPackageName,rendererConfig:Ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Oy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ts.findFiberByHostInstance||RI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{Ml=pa.inject(NI),Jt=pa}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kI;Et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(e))throw Error(U(200));return CI(t,e,null,n)};Et.createRoot=function(t,e){if(!Rd(t))throw Error(U(299));var n=!1,r="",i=c_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sd(t,1,!1,null,null,n,!1,r,i),t[vn]=e.current,to(t.nodeType===8?t.parentNode:t),new Cd(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Oy(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return br(t)};Et.hydrate=function(t,e,n){if(!Ql(e))throw Error(U(200));return Jl(null,t,e,!0,n)};Et.hydrateRoot=function(t,e,n){if(!Rd(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=c_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=u_(e,null,t,1,n??null,i,!1,s,o),t[vn]=e.current,to(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Kl(e)};Et.render=function(t,e,n){if(!Ql(e))throw Error(U(200));return Jl(null,t,e,!1,n)};Et.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(U(40));return t._reactRootContainer?(br(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};Et.unstable_batchedUpdates=Ed;Et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ql(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Jl(t,e,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function h_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h_)}catch(t){console.error(t)}}h_(),hy.exports=Et;var xI=hy.exports,Im=xI;yc.createRoot=Im.createRoot,yc.hydrateRoot=Im.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},co.apply(this,arguments)}var Bn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Bn||(Bn={}));const Sm="popstate";function OI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ch("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:pl(i)}return LI(e,n,null,t)}function Ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Pd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DI(){return Math.random().toString(36).substr(2,8)}function Am(t,e){return{usr:t.state,key:t.key,idx:e}}function ch(t,e,n,r){return n===void 0&&(n=null),co({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gi(e):e,{state:n,key:e&&e.key||r||DI()})}function pl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function LI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Bn.Pop,u=null,h=p();h==null&&(h=0,o.replaceState(co({},o.state,{idx:h}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=Bn.Pop;let L=p(),I=L==null?null:L-h;h=L,u&&u({action:l,location:x.location,delta:I})}function y(L,I){l=Bn.Push;let _=ch(x.location,L,I);h=p()+1;let C=Am(_,h),D=x.createHref(_);try{o.pushState(C,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(D)}s&&u&&u({action:l,location:x.location,delta:1})}function R(L,I){l=Bn.Replace;let _=ch(x.location,L,I);h=p();let C=Am(_,h),D=x.createHref(_);o.replaceState(C,"",D),s&&u&&u({action:l,location:x.location,delta:0})}function P(L){let I=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof L=="string"?L:pl(L);return _=_.replace(/ $/,"%20"),Ce(I,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,I)}let x={get action(){return l},get location(){return t(i,o)},listen(L){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Sm,m),u=L,()=>{i.removeEventListener(Sm,m),u=null}},createHref(L){return e(i,L)},createURL:P,encodeLocation(L){let I=P(L);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:y,replace:R,go(L){return o.go(L)}};return x}var Cm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Cm||(Cm={}));function VI(t,e,n){return n===void 0&&(n="/"),MI(t,e,n)}function MI(t,e,n,r){let i=typeof e=="string"?Gi(e):e,s=kd(i.pathname||"/",n);if(s==null)return null;let o=d_(t);bI(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=QI(s);l=GI(o[u],h)}return l}function d_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ce(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Yn([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(Ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),d_(s.children,e,p,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:HI(h,s.index),routesMeta:p})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of f_(s.path))i(s,o,u)}),e}function f_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=f_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function bI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jI=/^:[\w-]+$/,UI=3,FI=2,zI=1,BI=10,$I=-2,Rm=t=>t==="*";function HI(t,e){let n=t.split("/"),r=n.length;return n.some(Rm)&&(r+=$I),e&&(r+=FI),n.filter(i=>!Rm(i)).reduce((i,s)=>i+(jI.test(s)?UI:s===""?zI:BI),r)}function WI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function GI(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",m=qI({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},p),y=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Yn([s,m.pathname]),pathnameBase:eS(Yn([s,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(s=Yn([s,m.pathnameBase]))}return o}function qI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=KI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,p,m)=>{let{paramName:y,isOptional:R}=p;if(y==="*"){let x=l[m]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const P=l[m];return R&&!P?h[y]=void 0:h[y]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function KI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Pd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function QI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Pd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function kd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const JI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,YI=t=>JI.test(t);function XI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gi(t):t,s;if(n)if(YI(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Pd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Pm(n.substring(1),"/"):s=Pm(n,e)}else s=e;return{pathname:s,search:tS(r),hash:nS(i)}}function Pm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ic(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ZI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function p_(t,e){let n=ZI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function m_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gi(t):(i=co({},t),Ce(!i.pathname||!i.pathname.includes("?"),ic("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),ic("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),ic("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}l=m>=0?e[m]:"/"}let u=XI(i,l),h=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||p)&&(u.pathname+="/"),u}const Yn=t=>t.join("/").replace(/\/\/+/g,"/"),eS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const g_=["post","put","patch","delete"];new Set(g_);const iS=["get",...g_];new Set(iS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ho.apply(this,arguments)}const Nd=j.createContext(null),sS=j.createContext(null),Kr=j.createContext(null),Yl=j.createContext(null),Qr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),y_=j.createContext(null);function oS(t,e){let{relative:n}=e===void 0?{}:e;Ao()||Ce(!1);let{basename:r,navigator:i}=j.useContext(Kr),{hash:s,pathname:o,search:l}=__(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Yn([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ao(){return j.useContext(Yl)!=null}function Xl(){return Ao()||Ce(!1),j.useContext(Yl).location}function v_(t){j.useContext(Kr).static||j.useLayoutEffect(t)}function aS(){let{isDataRoute:t}=j.useContext(Qr);return t?ES():lS()}function lS(){Ao()||Ce(!1);let t=j.useContext(Nd),{basename:e,future:n,navigator:r}=j.useContext(Kr),{matches:i}=j.useContext(Qr),{pathname:s}=Xl(),o=JSON.stringify(p_(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return v_(()=>{l.current=!0}),j.useCallback(function(h,p){if(p===void 0&&(p={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let m=m_(h,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Yn([e,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[e,r,o,s,t])}function __(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(Kr),{matches:i}=j.useContext(Qr),{pathname:s}=Xl(),o=JSON.stringify(p_(i,r.v7_relativeSplatPath));return j.useMemo(()=>m_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function uS(t,e){return cS(t,e)}function cS(t,e,n,r){Ao()||Ce(!1);let{navigator:i}=j.useContext(Kr),{matches:s}=j.useContext(Qr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Xl(),p;if(e){var m;let L=typeof e=="string"?Gi(e):e;u==="/"||(m=L.pathname)!=null&&m.startsWith(u)||Ce(!1),p=L}else p=h;let y=p.pathname||"/",R=y;if(u!=="/"){let L=u.replace(/^\//,"").split("/");R="/"+y.replace(/^\//,"").split("/").slice(L.length).join("/")}let P=VI(t,{pathname:R}),x=mS(P&&P.map(L=>Object.assign({},L,{params:Object.assign({},l,L.params),pathname:Yn([u,i.encodeLocation?i.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?u:Yn([u,i.encodeLocation?i.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),s,n,r);return e&&x?j.createElement(Yl.Provider,{value:{location:ho({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Bn.Pop}},x):x}function hS(){let t=_S(),e=rS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const dS=j.createElement(hS,null);class fS extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(Qr.Provider,{value:this.props.routeContext},j.createElement(y_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pS(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(Nd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Qr.Provider,{value:e},r)}function mS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||Ce(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:y,errors:R}=n,P=m.route.loader&&y[m.route.id]===void 0&&(!R||R[m.route.id]===void 0);if(m.route.lazy||P){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,m,y)=>{let R,P=!1,x=null,L=null;n&&(R=l&&m.route.id?l[m.route.id]:void 0,x=m.route.errorElement||dS,u&&(h<0&&y===0?(wS("route-fallback"),P=!0,L=null):h===y&&(P=!0,L=m.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,y+1)),_=()=>{let C;return R?C=x:P?C=L:m.route.Component?C=j.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=p,j.createElement(pS,{match:m,routeContext:{outlet:p,matches:I,isDataRoute:n!=null},children:C})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?j.createElement(fS,{location:n.location,revalidation:n.revalidation,component:x,error:R,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):_()},null)}var E_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(E_||{}),w_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(w_||{});function gS(t){let e=j.useContext(Nd);return e||Ce(!1),e}function yS(t){let e=j.useContext(sS);return e||Ce(!1),e}function vS(t){let e=j.useContext(Qr);return e||Ce(!1),e}function T_(t){let e=vS(),n=e.matches[e.matches.length-1];return n.route.id||Ce(!1),n.route.id}function _S(){var t;let e=j.useContext(y_),n=yS(),r=T_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ES(){let{router:t}=gS(E_.UseNavigateStable),e=T_(w_.UseNavigateStable),n=j.useRef(!1);return v_(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ho({fromRouteId:e},s)))},[t,e])}const km={};function wS(t,e,n){km[t]||(km[t]=!0)}function TS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function La(t){Ce(!1)}function IS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Bn.Pop,navigator:s,static:o=!1,future:l}=t;Ao()&&Ce(!1);let u=e.replace(/^\/*/,"/"),h=j.useMemo(()=>({basename:u,navigator:s,static:o,future:ho({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Gi(r));let{pathname:p="/",search:m="",hash:y="",state:R=null,key:P="default"}=r,x=j.useMemo(()=>{let L=kd(p,u);return L==null?null:{location:{pathname:L,search:m,hash:y,state:R,key:P},navigationType:i}},[u,p,m,y,R,P,i]);return x==null?null:j.createElement(Kr.Provider,{value:h},j.createElement(Yl.Provider,{children:n,value:x}))}function SS(t){let{children:e,location:n}=t;return uS(hh(e),n)}new Promise(()=>{});function hh(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,hh(r.props.children,s));return}r.type!==La&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=hh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dh(){return dh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dh.apply(this,arguments)}function AS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RS(t,e){return t.button===0&&(!e||e==="_self")&&!CS(t)}const PS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kS="6";try{window.__reactRouterVersion=kS}catch{}const NS="startTransition",Nm=E0[NS];function xS(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=OI({window:i,v5Compat:!0}));let o=s.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},p=j.useCallback(m=>{h&&Nm?Nm(()=>u(m)):u(m)},[u,h]);return j.useLayoutEffect(()=>o.listen(p),[o,p]),j.useEffect(()=>TS(r),[r]),j.createElement(IS,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const OS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ti=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:p,viewTransition:m}=e,y=AS(e,PS),{basename:R}=j.useContext(Kr),P,x=!1;if(typeof h=="string"&&DS.test(h)&&(P=h,OS))try{let C=new URL(window.location.href),D=h.startsWith("//")?new URL(C.protocol+h):new URL(h),M=kd(D.pathname,R);D.origin===C.origin&&M!=null?h=M+D.search+D.hash:x=!0}catch{}let L=oS(h,{relative:i}),I=LS(h,{replace:o,state:l,target:u,preventScrollReset:p,relative:i,viewTransition:m});function _(C){r&&r(C),C.defaultPrevented||I(C)}return j.createElement("a",dh({},y,{href:P||L,onClick:x||s?r:_,ref:n,target:u}))});var xm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xm||(xm={}));var Om;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Om||(Om={}));function LS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=aS(),h=Xl(),p=__(t,{relative:o});return j.useCallback(m=>{if(RS(m,n)){m.preventDefault();let y=r!==void 0?r:pl(h)===pl(p);u(t,{replace:y,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[h,u,p,r,i,n,t,s,o,l])}/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var VS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ot=(t,e)=>{const n=j.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},p)=>j.createElement("svg",{ref:p,...VS,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${MS(t)}`,l].join(" "),...h},[...e.map(([m,y])=>j.createElement(m,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=ot("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=ot("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=ot("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=ot("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=ot("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=ot("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=ot("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=ot("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=ot("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=ot("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=ot("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=ot("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=ot("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=ot("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ot("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),GS=()=>{};var Mm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},A_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(y=64)),r.push(n[p],n[m],n[y],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(S_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new KS;const y=s<<2|l>>4;if(r.push(y),h!==64){const R=l<<4&240|h>>2;if(r.push(R),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QS=function(t){const e=S_(t);return A_.encodeByteArray(e,!0)},ml=function(t){return QS(t).replace(/\./g,"")},C_=function(t){try{return A_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=()=>JS().__FIREBASE_DEFAULTS__,XS=()=>{if(typeof process>"u"||typeof Mm>"u")return;const t=Mm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&C_(t[1]);return e&&JSON.parse(e)},Zl=()=>{try{return GS()||YS()||XS()||ZS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},R_=t=>{var e,n;return(n=(e=Zl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},e1=t=>{const e=R_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},P_=()=>{var t;return(t=Zl())==null?void 0:t.config},k_=t=>{var e;return(e=Zl())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ml(JSON.stringify(n)),ml(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function i1(){var e;const t=(e=Zl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function s1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function o1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function a1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function l1(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function u1(){return!i1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function c1(){try{return typeof indexedDB=="object"}catch{return!1}}function h1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=d1,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?f1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,l,r)}}function f1(t,e){return t.replace(p1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const p1=/\{\$([^}]+)}/g;function m1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bm(s)&&bm(o)){if(!jr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function g1(t,e){const n=new y1(t,e);return n.subscribe.bind(n)}class y1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");v1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sc),i.error===void 0&&(i.error=sc),i.complete===void 0&&(i.complete=sc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function N_(t){return(await fetch(t,{credentials:"include"})).ok}class Ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new t1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(w1(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:E1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E1(t){return t===Ir?void 0:t}function w1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const I1={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},S1=Z.INFO,A1={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},C1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=A1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dd{constructor(e){this.name=e,this._logLevel=S1,this._logHandler=C1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const R1=(t,e)=>e.some(n=>t instanceof n);let jm,Um;function P1(){return jm||(jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k1(){return Um||(Um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x_=new WeakMap,fh=new WeakMap,O_=new WeakMap,oc=new WeakMap,Ld=new WeakMap;function N1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&x_.set(n,t)}).catch(()=>{}),Ld.set(e,t),e}function x1(t){if(fh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fh.set(t,e)}let ph={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||O_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O1(t){ph=t(ph)}function D1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return O_.set(r,e.sort?e.sort():[e]),Xn(r)}:k1().includes(t)?function(...e){return t.apply(ac(this),e),Xn(x_.get(this))}:function(...e){return Xn(t.apply(ac(this),e))}}function L1(t){return typeof t=="function"?D1(t):(t instanceof IDBTransaction&&x1(t),R1(t,P1())?new Proxy(t,ph):t)}function Xn(t){if(t instanceof IDBRequest)return N1(t);if(oc.has(t))return oc.get(t);const e=L1(t);return e!==t&&(oc.set(t,e),Ld.set(e,t)),e}const ac=t=>Ld.get(t);function V1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Xn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Xn(o.result),u.oldVersion,u.newVersion,Xn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const M1=["get","getKey","getAll","getAllKeys","count"],b1=["put","add","delete","clear"],lc=new Map;function Fm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=b1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||M1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return lc.set(e,s),s}O1(t=>({...t,get:(e,n,r)=>Fm(e,n)||t.get(e,n,r),has:(e,n)=>!!Fm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(U1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function U1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mh="@firebase/app",zm="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Dd("@firebase/app"),F1="@firebase/app-compat",z1="@firebase/analytics-compat",B1="@firebase/analytics",$1="@firebase/app-check-compat",H1="@firebase/app-check",W1="@firebase/auth",G1="@firebase/auth-compat",q1="@firebase/database",K1="@firebase/data-connect",Q1="@firebase/database-compat",J1="@firebase/functions",Y1="@firebase/functions-compat",X1="@firebase/installations",Z1="@firebase/installations-compat",eA="@firebase/messaging",tA="@firebase/messaging-compat",nA="@firebase/performance",rA="@firebase/performance-compat",iA="@firebase/remote-config",sA="@firebase/remote-config-compat",oA="@firebase/storage",aA="@firebase/storage-compat",lA="@firebase/firestore",uA="@firebase/ai",cA="@firebase/firestore-compat",hA="firebase",dA="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="[DEFAULT]",fA={[mh]:"fire-core",[F1]:"fire-core-compat",[B1]:"fire-analytics",[z1]:"fire-analytics-compat",[H1]:"fire-app-check",[$1]:"fire-app-check-compat",[W1]:"fire-auth",[G1]:"fire-auth-compat",[q1]:"fire-rtdb",[K1]:"fire-data-connect",[Q1]:"fire-rtdb-compat",[J1]:"fire-fn",[Y1]:"fire-fn-compat",[X1]:"fire-iid",[Z1]:"fire-iid-compat",[eA]:"fire-fcm",[tA]:"fire-fcm-compat",[nA]:"fire-perf",[rA]:"fire-perf-compat",[iA]:"fire-rc",[sA]:"fire-rc-compat",[oA]:"fire-gcs",[aA]:"fire-gcs-compat",[lA]:"fire-fst",[cA]:"fire-fst-compat",[uA]:"fire-vertex","fire-js":"fire-js",[hA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Map,pA=new Map,yh=new Map;function Bm(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mi(t){const e=t.name;if(yh.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;yh.set(e,t);for(const n of gl.values())Bm(n,t);for(const n of pA.values())Bm(n,t);return!0}function Vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Co("app","Firebase",mA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=dA;function D_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=P_()),!n)throw Zn.create("no-options");const s=gl.get(i);if(s){if(jr(n,s.options)&&jr(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const o=new T1(i);for(const u of yh.values())o.addComponent(u);const l=new gA(n,r,o);return gl.set(i,l),l}function L_(t=gh){const e=gl.get(t);if(!e&&t===gh&&P_())return D_();if(!e)throw Zn.create("no-app",{appName:t});return e}function er(t,e,n){let r=fA[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(o.join(" "));return}Mi(new Ur(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="firebase-heartbeat-database",vA=1,fo="firebase-heartbeat-store";let uc=null;function V_(){return uc||(uc=V1(yA,vA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),uc}async function _A(t){try{const n=(await V_()).transaction(fo),r=await n.objectStore(fo).get(M_(t));return await n.done,r}catch(e){if(e instanceof Sn)wn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function $m(t,e){try{const r=(await V_()).transaction(fo,"readwrite");await r.objectStore(fo).put(e,M_(t)),await r.done}catch(n){if(n instanceof Sn)wn.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function M_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=1024,wA=30;class TA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>wA){const o=AA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hm(),{heartbeatsToSend:r,unsentEntries:i}=IA(this._heartbeatsCache.heartbeats),s=ml(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function Hm(){return new Date().toISOString().substring(0,10)}function IA(t,e=EA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c1()?h1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _A(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return $m(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return $m(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wm(t){return ml(JSON.stringify({version:2,heartbeats:t})).length}function AA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){Mi(new Ur("platform-logger",e=>new j1(e),"PRIVATE")),Mi(new Ur("heartbeat",e=>new TA(e),"PRIVATE")),er(mh,zm,t),er(mh,zm,"esm2020"),er("fire-js","")}CA("");function b_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RA=b_,j_=new Co("auth","Firebase",b_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Dd("@firebase/auth");function PA(t,...e){yl.logLevel<=Z.WARN&&yl.warn(`Auth (${qi}): ${t}`,...e)}function Va(t,...e){yl.logLevel<=Z.ERROR&&yl.error(`Auth (${qi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw bd(t,...e)}function Bt(t,...e){return bd(t,...e)}function Md(t,e,n){const r={...RA(),[e]:n};return new Co("auth","Firebase",r).create(e,{appName:t.name})}function pn(t){return Md(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(t,"argument-error"),Md(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return j_.create(t,...e)}function G(t,e,...n){if(!t)throw bd(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function Tn(t,e){t||hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function NA(){return Gm()==="http:"||Gm()==="https:"}function Gm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NA()||o1()||"connection"in navigator)?navigator.onLine:!0}function OA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=r1()||a1()}get(){return xA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VA=new ko(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function An(t,e,n,r,i={}){return F_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ro({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return s1()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Po(t.emulatorConfig.host)&&(h.credentials="include"),U_.fetch()(await z_(t,t.config.apiHost,n,l),h)})}async function F_(t,e,n){t._canInitEmulator=!1;const r={...DA,...e};try{const i=new bA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ma(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Md(t,p,h);kt(t,p)}}catch(i){if(i instanceof Sn)throw i;kt(t,"network-request-failed",{message:String(i)})}}async function No(t,e,n,r,i={}){const s=await An(t,e,n,r,i);return"mfaPendingCredential"in s&&kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function z_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?jd(t.config,i):`${t.config.apiScheme}://${i}`;return LA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function MA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),VA.get())})}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bt(t,e,r);return i.customData._tokenResponse=n,i}function qm(t){return t!==void 0&&t.enterprise!==void 0}class jA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return MA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function UA(t,e){return An(t,"GET","/v2/recaptchaConfig",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e){return An(t,"POST","/v1/accounts:delete",e)}async function vl(t,e){return An(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zA(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=Ud(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zs(cc(i.auth_time)),issuedAtTime:zs(cc(i.iat)),expirationTime:zs(cc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cc(t){return Number(t)*1e3}function Ud(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const i=C_(n);return i?JSON.parse(i):(Va("Failed to decode base64 JWT payload"),null)}catch(i){return Va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Km(t){const e=Ud(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&BA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){var m;const e=t.auth,n=await t.getIdToken(),r=await bi(t,vl(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?B_(i.providerUserInfo):[],o=WA(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new _h(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function HA(t){const e=rt(t);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function B_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(t,e){const n=await F_(t,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await z_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Po(t.emulatorConfig.host)&&(u.credentials="include"),U_.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qA(t,e){return An(t,"POST","/v2/accounts:revokeToken",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Km(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await GA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ii;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new $A(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _h(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zA(this,e)}reload(){return HA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gt(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await bi(this,FA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:R,providerData:P,stsTokenManager:x}=n;G(m&&x,e,"internal-error");const L=Ii.fromJSON(this.name,x);G(typeof m=="string",e,"internal-error"),Ln(r,e.name),Ln(i,e.name),G(typeof y=="boolean",e,"internal-error"),G(typeof R=="boolean",e,"internal-error"),Ln(s,e.name),Ln(o,e.name),Ln(l,e.name),Ln(u,e.name),Ln(h,e.name),Ln(p,e.name);const I=new jt({uid:m,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:R,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:L,createdAt:h,lastLoginAt:p});return P&&Array.isArray(P)&&(I.providerData=P.map(_=>({..._}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ii;i.updateFromServerResponse(n);const s=new jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _l(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?B_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ii;l.updateFromIdToken(r);const u=new jt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _h(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new Map;function dn(t){Tn(t instanceof Function,"Expected a class definition");let e=Qm.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$_.type="NONE";const Jm=$_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t,e,n){return`firebase:${t}:${e}:${n}`}class Si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ma(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ma("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await vl(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Si(dn(Jm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||dn(Jm);const o=Ma(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){let m;if(typeof p=="string"){const y=await vl(e,{idToken:p}).catch(()=>{});if(!y)break;m=await jt._fromGetAccountInfoResponse(e,y,p)}else m=jt._fromJSON(e,p);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Si(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Si(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q_(e))return"Blackberry";if(J_(e))return"Webos";if(W_(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function H_(t=Xe()){return/firefox\//i.test(t)}function W_(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(t=Xe()){return/crios\//i.test(t)}function q_(t=Xe()){return/iemobile/i.test(t)}function K_(t=Xe()){return/android/i.test(t)}function Q_(t=Xe()){return/blackberry/i.test(t)}function J_(t=Xe()){return/webos/i.test(t)}function Fd(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KA(t=Xe()){var e;return Fd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function QA(){return l1()&&document.documentMode===10}function Y_(t=Xe()){return Fd(t)||K_(t)||J_(t)||Q_(t)||/windows phone/i.test(t)||q_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t,e=[]){let n;switch(t){case"Browser":n=Ym(Xe());break;case"Worker":n=`${Ym(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e={}){return An(t,"GET","/v2/passwordPolicy",hr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=6;class ZA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??XA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xm(this),this.idTokenSubscription=new Xm(this),this.beforeStateQueue=new JA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vl(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gt(this.app))return Promise.reject(pn(this));const n=e?rt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gt(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gt(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YA(this),n=new ZA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&PA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dr(t){return rt(t)}class Xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=g1(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tC(t){eu=t}function Z_(t){return eu.loadJS(t)}function nC(){return eu.recaptchaEnterpriseScript}function rC(){return eu.gapiScript}function iC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class sC{constructor(){this.enterprise=new oC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class oC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const aC="recaptcha-enterprise",eE="NO_RECAPTCHA";class lC{constructor(e){this.type=aC,this.auth=dr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{UA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new jA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;qm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(eE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&qm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=nC();u.length!==0&&(u+=l),Z_(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Zm(t,e,n,r=!1,i=!1){const s=new lC(t);let o;if(i)o=eE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Eh(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Zm(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t,e){const n=Vd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(jr(s,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function cC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hC(t,e,n){const r=dr(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=tE(e),{host:o,port:l}=dC(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(jr(h,r.config.emulator)&&jr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Po(o)?N_(`${s}//${o}${u}`):fC()}function tE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dC(t){const e=tE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:eg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:eg(o)}}}function eg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function pC(t,e){return An(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e){return No(t,"POST","/v1/accounts:signInWithPassword",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){return No(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}async function yC(t,e){return No(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends zd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eh(e,n,"signInWithPassword",mC);case"emailLink":return gC(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eh(e,r,"signUpPassword",pC);case"emailLink":return yC(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e){return No(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="http://localhost";class Fr extends zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:vC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EC(t){const e=ks(Ns(t)).link,n=e?ks(Ns(e)).deep_link_id:null,r=ks(Ns(t)).deep_link_id;return(r?ks(Ns(r)).link:null)||r||n||e||t}class Bd{constructor(e){const n=ks(Ns(e)),r=n.apiKey??null,i=n.oobCode??null,s=_C(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=EC(e);try{return new Bd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.providerId=Ki.PROVIDER_ID}static credential(e,n){return po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bd.parseLink(n);return G(r,"argument-error"),po._fromEmailAndCode(e,r.code,r.tenantId)}}Ki.PROVIDER_ID="password";Ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends $d{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends xo{constructor(){super("facebook.com")}static credential(e){return Fr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends xo{constructor(){super("github.com")}static credential(e){return Fr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends xo{constructor(){super("twitter.com")}static credential(e,n){return Fr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(t,e){return No(t,"POST","/v1/accounts:signUp",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jt._fromIdTokenResponse(e,r,i),o=tg(r);return new zr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tg(r);return new zr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function tg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Sn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new El(e,n,r,i)}}function nE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(t,s,e,r):s})}async function TC(t,e,n=!1){const r=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e,n=!1){const{auth:r}=t;if(gt(r.app))return Promise.reject(pn(r));const i="reauthenticate";try{const s=await bi(t,nE(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Ud(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),zr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(t,e,n=!1){if(gt(t.app))return Promise.reject(pn(t));const r="signIn",i=await nE(t,r,e),s=await zr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function SC(t,e){return rE(dr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(t){const e=dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AC(t,e,n){if(gt(t.app))return Promise.reject(pn(t));const r=dr(t),o=await Eh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&iE(t),u}),l=await zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function CC(t,e,n){return gt(t.app)?Promise.reject(pn(t)):SC(rt(t),Ki.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e){return An(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=rt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await bi(r,RC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function kC(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function NC(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function xC(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function OC(t){return rt(t).signOut()}const wl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wl,"1"),this.storage.removeItem(wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=1e3,LC=10;class oE extends sE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Y_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oE.type="LOCAL";const VC=oE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE extends sE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aE.type="SESSION";const lE=aE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await MC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Hd("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function jC(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function UC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function zC(){return uE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="firebaseLocalStorageDb",BC=1,Tl="firebaseLocalStorage",hE="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nu(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function $C(){const t=indexedDB.deleteDatabase(cE);return new Oo(t).toPromise()}function wh(){const t=indexedDB.open(cE,BC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:hE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await $C(),e(await wh()))})})}async function ng(t,e,n){const r=nu(t,!0).put({[hE]:e,value:n});return new Oo(r).toPromise()}async function HC(t,e){const n=nu(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function rg(t,e){const n=nu(t,!0).delete(e);return new Oo(n).toPromise()}const WC=800,GC=3;class dE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tu._getInstance(zC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await UC(),!this.activeServiceWorker)return;this.sender=new bC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wh();return await ng(e,wl,"1"),await rg(e,wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ng(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nu(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dE.type="LOCAL";const qC=dE;new ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t,e){return e?dn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KC(t){return rE(t.auth,new Wd(t),t.bypassAuthState)}function QC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),IC(n,new Wd(t),t.bypassAuthState)}async function JC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),TC(n,new Wd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KC;case"linkViaPopup":case"linkViaRedirect":return JC;case"reauthViaPopup":case"reauthViaRedirect":return QC;default:kt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new ko(2e3,1e4);async function hc(t,e,n){if(gt(t.app))return Promise.reject(Bt(t,"operation-not-supported-in-this-environment"));const r=dr(t);kA(t,e,$d);const i=fE(r,n);return new Rr(r,"signInViaPopup",e,i).executeNotNull()}class Rr extends pE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YC.get())};e()}}Rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="pendingRedirect",ba=new Map;class ZC extends pE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ba.get(this.auth._key());if(!e){try{const r=await eR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ba.set(this.auth._key(),e)}return this.bypassAuthState||ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eR(t,e){const n=rR(e),r=nR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tR(t,e){ba.set(t._key(),e)}function nR(t){return dn(t._redirectPersistence)}function rR(t){return Ma(XC,t.config.apiKey,t.name)}async function iR(t,e,n=!1){if(gt(t.app))return Promise.reject(pn(t));const r=dr(t),i=fE(r,e),o=await new ZC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=10*60*1e3;class oR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ig(e))}saveEventToCache(e){this.cachedEventUids.add(ig(e)),this.lastProcessedEventTime=Date.now()}}function ig(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,e={}){return An(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cR=/^https?/;async function hR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lR(t);for(const n of e)try{if(dR(n))return}catch{}kt(t,"unauthorized-domain")}function dR(t){const e=vh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cR.test(n))return!1;if(uR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new ko(3e4,6e4);function sg(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pR(t){return new Promise((e,n)=>{var i,s,o;function r(){sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sg(),n(Bt(t,"network-request-failed"))},timeout:fR.get()})}if((s=(i=Xt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Xt().gapi)!=null&&o.load)r();else{const l=iC("iframefcb");return Xt()[l]=()=>{gapi.load?r():n(Bt(t,"network-request-failed"))},Z_(`${rC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ja=null,e})}let ja=null;function mR(t){return ja=ja||pR(t),ja}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=new ko(5e3,15e3),yR="__/auth/iframe",vR="emulator/auth/iframe",_R={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ER=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wR(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jd(e,vR):`https://${t.config.authDomain}/${yR}`,r={apiKey:e.apiKey,appName:t.name,v:qi},i=ER.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ro(r).slice(1)}`}async function TR(t){const e=await mR(t),n=Xt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:wR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_R,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),l=Xt().setTimeout(()=>{s(o)},gR.get());function u(){Xt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SR=500,AR=600,CR="_blank",RR="http://localhost";class og{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PR(t,e,n,r=SR,i=AR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...IR,width:r.toString(),height:i.toString(),top:s,left:o},h=Xe().toLowerCase();n&&(l=G_(h)?CR:n),H_(h)&&(e=e||RR,u.scrollbars="yes");const p=Object.entries(u).reduce((y,[R,P])=>`${y}${R}=${P},`,"");if(KA(h)&&l!=="_self")return kR(e||"",l),new og(null);const m=window.open(e||"",l,p);G(m,t,"popup-blocked");try{m.focus()}catch{}return new og(m)}function kR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="__/auth/handler",xR="emulator/auth/handler",OR=encodeURIComponent("fac");async function ag(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qi,eventId:i};if(e instanceof $d){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",m1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof xo){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${OR}=${encodeURIComponent(u)}`:"";return`${DR(t)}?${Ro(l).slice(1)}${h}`}function DR({config:t}){return t.emulator?jd(t,xR):`https://${t.authDomain}/${NR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="webStorageSupport";class LR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lE,this._completeRedirectFn=iR,this._overrideRedirectResult=tR}async _openPopup(e,n,r,i){var o;Tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ag(e,n,r,vh(),i);return PR(e,s,Hd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ag(e,n,r,vh(),i);return jC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TR(e),r=new oR(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[dc];s!==void 0&&n(!!s),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Y_()||W_()||Fd()}}const VR=LR;var lg="@firebase/auth",ug="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jR(t){Mi(new Ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X_(t)},h=new eC(r,i,s,u);return cC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mi(new Ur("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(r=>new MR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(lg,ug,bR(t)),er(lg,ug,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=5*60,FR=k_("authIdTokenMaxAge")||UR;let cg=null;const zR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FR)return;const i=n==null?void 0:n.token;cg!==i&&(cg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function BR(t=L_()){const e=Vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uC(t,{popupRedirectResolver:VR,persistence:[qC,VC,lE]}),r=k_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=zR(s.toString());NC(n,o,()=>o(n.currentUser)),kC(n,l=>o(l))}}const i=R_("auth");return i&&hC(n,`http://${i}`),n}function $R(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}tC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$R().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jR("Browser");var HR="firebase",WR="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(HR,WR,"app");var hg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gd;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function w(){}w.prototype=v.prototype,E.F=v.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(S,A,k){for(var T=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)T[Ve-2]=arguments[Ve];return v.prototype[A].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,w){w||(w=0);const S=Array(16);if(typeof v=="string")for(var A=0;A<16;++A)S[A]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(A=0;A<16;++A)S[A]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=E.g[0],w=E.g[1],A=E.g[2];let k=E.g[3],T;T=v+(k^w&(A^k))+S[0]+3614090360&4294967295,v=w+(T<<7&4294967295|T>>>25),T=k+(A^v&(w^A))+S[1]+3905402710&4294967295,k=v+(T<<12&4294967295|T>>>20),T=A+(w^k&(v^w))+S[2]+606105819&4294967295,A=k+(T<<17&4294967295|T>>>15),T=w+(v^A&(k^v))+S[3]+3250441966&4294967295,w=A+(T<<22&4294967295|T>>>10),T=v+(k^w&(A^k))+S[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=k+(A^v&(w^A))+S[5]+1200080426&4294967295,k=v+(T<<12&4294967295|T>>>20),T=A+(w^k&(v^w))+S[6]+2821735955&4294967295,A=k+(T<<17&4294967295|T>>>15),T=w+(v^A&(k^v))+S[7]+4249261313&4294967295,w=A+(T<<22&4294967295|T>>>10),T=v+(k^w&(A^k))+S[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=k+(A^v&(w^A))+S[9]+2336552879&4294967295,k=v+(T<<12&4294967295|T>>>20),T=A+(w^k&(v^w))+S[10]+4294925233&4294967295,A=k+(T<<17&4294967295|T>>>15),T=w+(v^A&(k^v))+S[11]+2304563134&4294967295,w=A+(T<<22&4294967295|T>>>10),T=v+(k^w&(A^k))+S[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=k+(A^v&(w^A))+S[13]+4254626195&4294967295,k=v+(T<<12&4294967295|T>>>20),T=A+(w^k&(v^w))+S[14]+2792965006&4294967295,A=k+(T<<17&4294967295|T>>>15),T=w+(v^A&(k^v))+S[15]+1236535329&4294967295,w=A+(T<<22&4294967295|T>>>10),T=v+(A^k&(w^A))+S[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^A&(v^w))+S[6]+3225465664&4294967295,k=v+(T<<9&4294967295|T>>>23),T=A+(v^w&(k^v))+S[11]+643717713&4294967295,A=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(A^k))+S[0]+3921069994&4294967295,w=A+(T<<20&4294967295|T>>>12),T=v+(A^k&(w^A))+S[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^A&(v^w))+S[10]+38016083&4294967295,k=v+(T<<9&4294967295|T>>>23),T=A+(v^w&(k^v))+S[15]+3634488961&4294967295,A=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(A^k))+S[4]+3889429448&4294967295,w=A+(T<<20&4294967295|T>>>12),T=v+(A^k&(w^A))+S[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^A&(v^w))+S[14]+3275163606&4294967295,k=v+(T<<9&4294967295|T>>>23),T=A+(v^w&(k^v))+S[3]+4107603335&4294967295,A=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(A^k))+S[8]+1163531501&4294967295,w=A+(T<<20&4294967295|T>>>12),T=v+(A^k&(w^A))+S[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^A&(v^w))+S[2]+4243563512&4294967295,k=v+(T<<9&4294967295|T>>>23),T=A+(v^w&(k^v))+S[7]+1735328473&4294967295,A=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(A^k))+S[12]+2368359562&4294967295,w=A+(T<<20&4294967295|T>>>12),T=v+(w^A^k)+S[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^A)+S[8]+2272392833&4294967295,k=v+(T<<11&4294967295|T>>>21),T=A+(k^v^w)+S[11]+1839030562&4294967295,A=k+(T<<16&4294967295|T>>>16),T=w+(A^k^v)+S[14]+4259657740&4294967295,w=A+(T<<23&4294967295|T>>>9),T=v+(w^A^k)+S[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^A)+S[4]+1272893353&4294967295,k=v+(T<<11&4294967295|T>>>21),T=A+(k^v^w)+S[7]+4139469664&4294967295,A=k+(T<<16&4294967295|T>>>16),T=w+(A^k^v)+S[10]+3200236656&4294967295,w=A+(T<<23&4294967295|T>>>9),T=v+(w^A^k)+S[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^A)+S[0]+3936430074&4294967295,k=v+(T<<11&4294967295|T>>>21),T=A+(k^v^w)+S[3]+3572445317&4294967295,A=k+(T<<16&4294967295|T>>>16),T=w+(A^k^v)+S[6]+76029189&4294967295,w=A+(T<<23&4294967295|T>>>9),T=v+(w^A^k)+S[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^A)+S[12]+3873151461&4294967295,k=v+(T<<11&4294967295|T>>>21),T=A+(k^v^w)+S[15]+530742520&4294967295,A=k+(T<<16&4294967295|T>>>16),T=w+(A^k^v)+S[2]+3299628645&4294967295,w=A+(T<<23&4294967295|T>>>9),T=v+(A^(w|~k))+S[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~A))+S[7]+1126891415&4294967295,k=v+(T<<10&4294967295|T>>>22),T=A+(v^(k|~w))+S[14]+2878612391&4294967295,A=k+(T<<15&4294967295|T>>>17),T=w+(k^(A|~v))+S[5]+4237533241&4294967295,w=A+(T<<21&4294967295|T>>>11),T=v+(A^(w|~k))+S[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~A))+S[3]+2399980690&4294967295,k=v+(T<<10&4294967295|T>>>22),T=A+(v^(k|~w))+S[10]+4293915773&4294967295,A=k+(T<<15&4294967295|T>>>17),T=w+(k^(A|~v))+S[1]+2240044497&4294967295,w=A+(T<<21&4294967295|T>>>11),T=v+(A^(w|~k))+S[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~A))+S[15]+4264355552&4294967295,k=v+(T<<10&4294967295|T>>>22),T=A+(v^(k|~w))+S[6]+2734768916&4294967295,A=k+(T<<15&4294967295|T>>>17),T=w+(k^(A|~v))+S[13]+1309151649&4294967295,w=A+(T<<21&4294967295|T>>>11),T=v+(A^(w|~k))+S[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~A))+S[11]+3174756917&4294967295,k=v+(T<<10&4294967295|T>>>22),T=A+(v^(k|~w))+S[2]+718787259&4294967295,A=k+(T<<15&4294967295|T>>>17),T=w+(k^(A|~v))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.v=function(E,v){v===void 0&&(v=E.length);const w=v-this.blockSize,S=this.C;let A=this.h,k=0;for(;k<v;){if(A==0)for(;k<=w;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<v;)if(S[A++]=E.charCodeAt(k++),A==this.blockSize){i(this,S),A=0;break}}else for(;k<v;)if(S[A++]=E[k++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=v},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;v=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=v&255,v/=256;for(this.v(E),E=Array(16),v=0,w=0;w<4;++w)for(let S=0;S<32;S+=8)E[v++]=this.g[w]>>>S&255;return E};function s(E,v){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=v(E)}function o(E,v){this.h=v;const w=[];let S=!0;for(let A=E.length-1;A>=0;A--){const k=E[A]|0;S&&k==v||(w[A]=k,S=!1)}this.g=w}var l={};function u(E){return-128<=E&&E<128?s(E,function(v){return new o([v|0],v<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return L(h(-E));const v=[];let w=1;for(let S=0;E>=w;S++)v[S]=E/w|0,w*=4294967296;return new o(v,0)}function p(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return L(p(E.substring(1),v));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(v,8));let S=m;for(let k=0;k<E.length;k+=8){var A=Math.min(8,E.length-k);const T=parseInt(E.substring(k,k+A),v);A<8?(A=h(Math.pow(v,A)),S=S.j(A).add(h(T))):(S=S.j(w),S=S.add(h(T)))}return S}var m=u(0),y=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-L(this).m();let E=0,v=1;for(let w=0;w<this.g.length;w++){const S=this.i(w);E+=(S>=0?S:4294967296+S)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(x(this))return"-"+L(this).toString(E);const v=h(Math.pow(E,6));var w=this;let S="";for(;;){const A=D(w,v).g;w=I(w,A.j(v));let k=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=A,P(w))return k+S;for(;k.length<6;)k="0"+k;S=k+S}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(let v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function x(E){return E.h==-1}t.l=function(E){return E=I(this,E),x(E)?-1:P(E)?0:1};function L(E){const v=E.g.length,w=[];for(let S=0;S<v;S++)w[S]=~E.g[S];return new o(w,~E.h).add(y)}t.abs=function(){return x(this)?L(this):this},t.add=function(E){const v=Math.max(this.g.length,E.g.length),w=[];let S=0;for(let A=0;A<=v;A++){let k=S+(this.i(A)&65535)+(E.i(A)&65535),T=(k>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);S=T>>>16,k&=65535,T&=65535,w[A]=T<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(E,v){return E.add(L(v))}t.j=function(E){if(P(this)||P(E))return m;if(x(this))return x(E)?L(this).j(L(E)):L(L(this).j(E));if(x(E))return L(this.j(L(E)));if(this.l(R)<0&&E.l(R)<0)return h(this.m()*E.m());const v=this.g.length+E.g.length,w=[];for(var S=0;S<2*v;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<E.g.length;A++){const k=this.i(S)>>>16,T=this.i(S)&65535,Ve=E.i(A)>>>16,nn=E.i(A)&65535;w[2*S+2*A]+=T*nn,_(w,2*S+2*A),w[2*S+2*A+1]+=k*nn,_(w,2*S+2*A+1),w[2*S+2*A+1]+=T*Ve,_(w,2*S+2*A+1),w[2*S+2*A+2]+=k*Ve,_(w,2*S+2*A+2)}for(E=0;E<v;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=v;E<2*v;E++)w[E]=0;return new o(w,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function C(E,v){this.g=E,this.h=v}function D(E,v){if(P(v))throw Error("division by zero");if(P(E))return new C(m,m);if(x(E))return v=D(L(E),v),new C(L(v.g),L(v.h));if(x(v))return v=D(E,L(v)),new C(L(v.g),v.h);if(E.g.length>30){if(x(E)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var w=y,S=v;S.l(E)<=0;)w=M(w),S=M(S);var A=z(w,1),k=z(S,1);for(S=z(S,2),w=z(w,2);!P(S);){var T=k.add(S);T.l(E)<=0&&(A=A.add(w),k=T),S=z(S,1),w=z(w,1)}return v=I(E,A.j(v)),new C(A,v)}for(A=m;E.l(v)>=0;){for(w=Math.max(1,Math.floor(E.m()/v.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),k=h(w),T=k.j(v);x(T)||T.l(E)>0;)w-=S,k=h(w),T=k.j(v);P(k)&&(k=y),A=A.add(k),E=I(E,T)}return new C(A,E)}t.B=function(E){return D(this,E).h},t.and=function(E){const v=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<v;S++)w[S]=this.i(S)&E.i(S);return new o(w,this.h&E.h)},t.or=function(E){const v=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<v;S++)w[S]=this.i(S)|E.i(S);return new o(w,this.h|E.h)},t.xor=function(E){const v=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<v;S++)w[S]=this.i(S)^E.i(S);return new o(w,this.h^E.h)};function M(E){const v=E.g.length+1,w=[];for(let S=0;S<v;S++)w[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(w,E.h)}function z(E,v){const w=v>>5;v%=32;const S=E.g.length-w,A=[];for(let k=0;k<S;k++)A[k]=v>0?E.i(k+w)>>>v|E.i(k+w+1)<<32-v:E.i(k+w);return new o(A,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Gd=o}).apply(typeof hg<"u"?hg:typeof self<"u"?self:typeof window<"u"?window:{});var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gE,xs,yE,Ua,Th,vE,_E,EE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ga=="object"&&ga];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function p(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,N,O){for(var F=Array(arguments.length-2),J=2;J<arguments.length;J++)F[J-2]=arguments[J];return c.prototype[N].apply(g,F)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function R(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function P(a,c){for(let g=1;g<arguments.length;g++){const N=arguments[g];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const O=N.length||0;a.length=d+O;for(let F=0;F<O;F++)a[d+F]=N[F]}else a.push(N)}}class x{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(a){o.setTimeout(()=>{throw a},0)}function I(){var a=E;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class _{constructor(){this.h=this.g=null}add(c,d){const g=C.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var C=new x(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,z=!1,E=new _,v=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(w)}};function w(){for(var a;a=I();){try{a.h.call(a.g)}catch(d){L(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}z=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Ve(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}m(Ve,A),Ve.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ve.Z.h.call(this)},Ve.prototype.h=function(){Ve.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nn="closure_listenable_"+(Math.random()*1e6|0),Yi=0;function Xi(a,c,d,g,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=N,this.key=++Yi,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function q(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function Q(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function ce(a){const c={};for(const d in a)c[d]=a[d];return c}const we="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fr(a,c){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let O=0;O<we.length;O++)d=we[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Tt(a){this.src=a,this.g={},this.h=0}Tt.prototype.add=function(a,c,d,g,N){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const F=Nt(a,c,g,N);return F>-1?(c=a[F],d||(c.fa=!1)):(c=new Xi(c,this.src,O,!!g,N),c.fa=d,a.push(c)),c};function pr(a,c){const d=c.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,c,void 0),O;(O=N>=0)&&Array.prototype.splice.call(g,N,1),O&&(B(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Nt(a,c,d,g){for(let N=0;N<a.length;++N){const O=a[N];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==g)return N}return-1}var Cn="closure_lm_"+(Math.random()*1e6|0),hu={};function yf(a,c,d,g,N){if(Array.isArray(c)){for(let O=0;O<c.length;O++)yf(a,c[O],d,g,N);return null}return d=Ef(d),a&&a[nn]?a.J(c,d,l(g)?!!g.capture:!1,N):Pw(a,c,d,!1,g,N)}function Pw(a,c,d,g,N,O){if(!c)throw Error("Invalid event type");const F=l(N)?!!N.capture:!!N;let J=fu(a);if(J||(a[Cn]=J=new Tt(a)),d=J.add(c,d,g,F,O),d.proxy)return d;if(g=kw(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)k||(N=F),N===void 0&&(N=!1),a.addEventListener(c.toString(),g,N);else if(a.attachEvent)a.attachEvent(_f(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function kw(){function a(d){return c.call(a.src,a.listener,d)}const c=Nw;return a}function vf(a,c,d,g,N){if(Array.isArray(c))for(var O=0;O<c.length;O++)vf(a,c[O],d,g,N);else g=l(g)?!!g.capture:!!g,d=Ef(d),a&&a[nn]?(a=a.i,O=String(c).toString(),O in a.g&&(c=a.g[O],d=Nt(c,d,g,N),d>-1&&(B(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[O],a.h--)))):a&&(a=fu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Nt(c,d,g,N)),(d=a>-1?c[a]:null)&&du(d))}function du(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[nn])pr(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(_f(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=fu(c))?(pr(d,a),d.h==0&&(d.src=null,c[Cn]=null)):B(a)}}}function _f(a){return a in hu?hu[a]:hu[a]="on"+a}function Nw(a,c){if(a.da)a=!0;else{c=new Ve(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&du(a),a=d.call(g,c)}return a}function fu(a){return a=a[Cn],a instanceof Tt?a:null}var pu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ef(a){return typeof a=="function"?a:(a[pu]||(a[pu]=function(c){return a.handleEvent(c)}),a[pu])}function $e(){S.call(this),this.i=new Tt(this),this.M=this,this.G=null}m($e,S),$e.prototype[nn]=!0,$e.prototype.removeEventListener=function(a,c,d,g){vf(this,a,c,d,g)};function Ze(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var N=c;c=new A(g,a),fr(c,N)}N=!0;let O,F;if(d)for(F=d.length-1;F>=0;F--)O=c.g=d[F],N=Fo(O,g,!0,c)&&N;if(O=c.g=a,N=Fo(O,g,!0,c)&&N,N=Fo(O,g,!1,c)&&N,d)for(F=0;F<d.length;F++)O=c.g=d[F],N=Fo(O,g,!1,c)&&N}$e.prototype.N=function(){if($e.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)B(d[g]);delete a.g[c],a.h--}}this.G=null},$e.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},$e.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function Fo(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let N=!0;for(let O=0;O<c.length;++O){const F=c[O];if(F&&!F.da&&F.capture==d){const J=F.listener,Re=F.ha||F.src;F.fa&&pr(a.i,F),N=J.call(Re,g)!==!1&&N}}return N&&!g.defaultPrevented}function xw(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function wf(a){a.g=xw(()=>{a.g=null,a.i&&(a.i=!1,wf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Ow extends S{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:wf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(a){S.call(this),this.h=a,this.g={}}m(Zi,S);var Tf=[];function If(a){q(a.g,function(c,d){this.g.hasOwnProperty(d)&&du(c)},a),a.g={}}Zi.prototype.N=function(){Zi.Z.N.call(this),If(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mu=o.JSON.stringify,Dw=o.JSON.parse,Lw=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Sf(){}function Af(){}var es={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gu(){A.call(this,"d")}m(gu,A);function yu(){A.call(this,"c")}m(yu,A);var mr={},Cf=null;function zo(){return Cf=Cf||new $e}mr.Ia="serverreachability";function Rf(a){A.call(this,mr.Ia,a)}m(Rf,A);function ts(a){const c=zo();Ze(c,new Rf(c))}mr.STAT_EVENT="statevent";function Pf(a,c){A.call(this,mr.STAT_EVENT,a),this.stat=c}m(Pf,A);function et(a){const c=zo();Ze(c,new Pf(c,a))}mr.Ja="timingevent";function kf(a,c){A.call(this,mr.Ja,a),this.size=c}m(kf,A);function ns(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function rs(){this.g=!0}rs.prototype.ua=function(){this.g=!1};function Vw(a,c,d,g,N,O){a.info(function(){if(a.g)if(O){var F="",J=O.split("&");for(let ie=0;ie<J.length;ie++){var Re=J[ie].split("=");if(Re.length>1){const Ne=Re[0];Re=Re[1];const Wt=Ne.split("_");F=Wt.length>=2&&Wt[1]=="type"?F+(Ne+"="+Re+"&"):F+(Ne+"=redacted&")}}}else F=null;else F=O;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+c+`
`+d+`
`+F})}function Mw(a,c,d,g,N,O,F){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+c+`
`+d+`
`+O+" "+F})}function Xr(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+jw(a,d)+(g?" "+g:"")})}function bw(a,c){a.info(function(){return"TIMEOUT: "+c})}rs.prototype.info=function(){};function jw(a,c){if(!a.g)return c;if(!c)return null;try{const O=JSON.parse(c);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var d=O[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let F=1;F<g.length;F++)g[F]=""}}}}return mu(O)}catch{return c}}var Bo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Nf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},xf;function vu(){}m(vu,Sf),vu.prototype.g=function(){return new XMLHttpRequest},xf=new vu;function is(a){return encodeURIComponent(String(a))}function Uw(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Rn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new Zi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Of}function Of(){this.i=null,this.g="",this.h=!1}var Df={},_u={};function Eu(a,c,d){a.M=1,a.A=Ho(Ht(c)),a.u=d,a.R=!0,Lf(a,null)}function Lf(a,c){a.F=Date.now(),$o(a),a.B=Ht(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),qf(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Of,a.g=hp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new Ow(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Tf[0]=N.toString()),N=Tf);for(let O=0;O<N.length;O++){const F=yf(d,N[O],g||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.J?ce(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),ts(),Vw(a.i,a.v,a.B,a.l,a.S,a.u)}Rn.prototype.ba=function(a){a=a.target;const c=this.O;c&&Nn(a)==3?c.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const J=Nn(this.g),Re=this.g.ya(),ie=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||ep(this.g)))){this.K||J!=4||Re==7||(Re==8||ie<=0?ts(3):ts(2)),wu(this);var c=this.g.ca();this.X=c;var d=Fw(this);if(this.o=c==200,Mw(this.i,this.v,this.B,this.l,this.S,J,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var O=g;break t}}O=null}if(a=O)Xr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tu(this,a);else{this.o=!1,this.m=3,et(12),gr(this),ss(this);break e}}if(this.R){a=!0;let Ne;for(;!this.K&&this.C<d.length;)if(Ne=zw(this,d),Ne==_u){J==4&&(this.m=4,et(14),a=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==Df){this.m=4,et(15),Xr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Xr(this.i,this.l,Ne,null),Tu(this,Ne);if(Vf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||d.length!=0||this.h.h||(this.m=1,et(16),a=!1),this.o=this.o&&a,!a)Xr(this.i,this.l,d,"[Invalid Chunked Response]"),gr(this),ss(this);else if(d.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Nu(F),F.P=!0,et(11))}}else Xr(this.i,this.l,d,null),Tu(this,d);J==4&&gr(this),this.o&&!this.K&&(J==4?ap(this.j,this):(this.o=!1,$o(this)))}else t0(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,et(12)):(this.m=0,et(13)),gr(this),ss(this)}}}catch{}finally{}};function Fw(a){if(!Vf(a))return a.g.la();const c=ep(a.g);if(c==="")return"";let d="";const g=c.length,N=Nn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return gr(a),ss(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<g;O++)a.h.h=!0,d+=a.h.i.decode(c[O],{stream:!(N&&O==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Vf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function zw(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?_u:(d=Number(c.substring(d,g)),isNaN(d)?Df:(g+=1,g+d>c.length?_u:(c=c.slice(g,g+d),a.C=g+d,c)))}Rn.prototype.cancel=function(){this.K=!0,gr(this)};function $o(a){a.T=Date.now()+a.H,Mf(a,a.H)}function Mf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ns(h(a.aa,a),c)}function wu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Rn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(bw(this.i,this.B),this.M!=2&&(ts(),et(17)),gr(this),this.m=2,ss(this)):Mf(this,this.T-a)};function ss(a){a.j.I==0||a.K||ap(a.j,a)}function gr(a){wu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,If(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Tu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Iu(d.h,a))){if(!a.L&&Iu(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Qo(d),qo(d);else break e;ku(d),et(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ns(h(d.Va,d),6e3));Uf(d.h)<=1&&d.ta&&(d.ta=void 0)}else vr(d,11)}else if((a.L||d.g==a)&&Qo(d),!T(c))for(N=d.Ba.g.parse(c),c=0;c<N.length;c++){let ie=N[c];const Ne=ie[0];if(!(Ne<=d.K))if(d.K=Ne,ie=ie[1],d.I==2)if(ie[0]=="c"){d.M=ie[1],d.ba=ie[2];const Wt=ie[3];Wt!=null&&(d.ka=Wt,d.j.info("VER="+d.ka));const _r=ie[4];_r!=null&&(d.za=_r,d.j.info("SVER="+d.za));const xn=ie[5];xn!=null&&typeof xn=="number"&&xn>0&&(g=1.5*xn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const On=a.g;if(On){const Yo=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yo){var O=g.h;O.g||Yo.indexOf("spdy")==-1&&Yo.indexOf("quic")==-1&&Yo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Su(O,O.h),O.h=null))}if(g.G){const xu=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;xu&&(g.wa=xu,ae(g.J,g.G,xu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var F=a;if(g.na=cp(g,g.L?g.ba:null,g.W),F.L){Ff(g.h,F);var J=F,Re=g.O;Re&&(J.H=Re),J.D&&(wu(J),$o(J)),g.g=F}else sp(g);d.i.length>0&&Ko(d)}else ie[0]!="stop"&&ie[0]!="close"||vr(d,7);else d.I==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?vr(d,7):Pu(d):ie[0]!="noop"&&d.l&&d.l.qa(ie),d.A=0)}}ts(4)}catch{}}var Bw=class{constructor(a,c){this.g=a,this.map=c}};function bf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Uf(a){return a.h?1:a.g?a.g.size:0}function Iu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Su(a,c){a.g?a.g.add(c):a.h=c}function Ff(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}bf.prototype.cancel=function(){if(this.i=zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zf(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return R(a.i)}var Bf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $w(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let N,O=null;g>=0?(N=a[d].substring(0,g),O=a[d].substring(g+1)):N=a[d],c(N,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Pn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Pn?(this.l=a.l,os(this,a.j),this.o=a.o,this.g=a.g,as(this,a.u),this.h=a.h,Au(this,Kf(a.i)),this.m=a.m):a&&(c=String(a).match(Bf))?(this.l=!1,os(this,c[1]||"",!0),this.o=ls(c[2]||""),this.g=ls(c[3]||"",!0),as(this,c[4]),this.h=ls(c[5]||"",!0),Au(this,c[6]||"",!0),this.m=ls(c[7]||"")):(this.l=!1,this.i=new cs(null,this.l))}Pn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(us(c,$f,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(us(c,$f,!0),"@"),a.push(is(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(us(d,d.charAt(0)=="/"?Gw:Ww,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",us(d,Kw)),a.join("")},Pn.prototype.resolve=function(a){const c=Ht(this);let d=!!a.j;d?os(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)as(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=c.h.lastIndexOf("/");N!=-1&&(g=c.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const O=[];for(let F=0;F<N.length;){const J=N[F++];J=="."?g&&F==N.length&&O.push(""):J==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),g&&F==N.length&&O.push("")):(O.push(J),g=!0)}g=O.join("/")}else g=N}return d?c.h=g:d=a.i.toString()!=="",d?Au(c,Kf(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Ht(a){return new Pn(a)}function os(a,c,d){a.j=d?ls(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function as(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Au(a,c,d){c instanceof cs?(a.i=c,Qw(a.i,a.l)):(d||(c=us(c,qw)),a.i=new cs(c,a.l))}function ae(a,c,d){a.i.set(c,d)}function Ho(a){return ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ls(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function us(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Hw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Hw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $f=/[#\/\?@]/g,Ww=/[#\?:]/g,Gw=/[#\?]/g,qw=/[#\?@]/g,Kw=/#/g;function cs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function yr(a){a.g||(a.g=new Map,a.h=0,a.i&&$w(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=cs.prototype,t.add=function(a,c){yr(this),this.i=null,a=Zr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Hf(a,c){yr(a),c=Zr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Wf(a,c){return yr(a),c=Zr(a,c),a.g.has(c)}t.forEach=function(a,c){yr(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(c,N,g,this)},this)},this)};function Gf(a,c){yr(a);let d=[];if(typeof c=="string")Wf(a,c)&&(d=d.concat(a.g.get(Zr(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return yr(this),this.i=null,a=Zr(this,a),Wf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=Gf(this,a),a.length>0?String(a[0]):c):c};function qf(a,c,d){Hf(a,c),d.length>0&&(a.i=null,a.g.set(Zr(a,c),R(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const N=is(d);d=Gf(this,d);for(let O=0;O<d.length;O++){let F=N;d[O]!==""&&(F+="="+is(d[O])),a.push(F)}}return this.i=a.join("&")};function Kf(a){const c=new cs;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Zr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Qw(a,c){c&&!a.j&&(yr(a),a.i=null,a.g.forEach(function(d,g){const N=g.toLowerCase();g!=N&&(Hf(this,g),qf(this,N,d))},a)),a.j=c}function Jw(a,c){const d=new rs;if(o.Image){const g=new Image;g.onload=p(kn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=p(kn,d,"TestLoadImage: error",!1,c,g),g.onabort=p(kn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=p(kn,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function Yw(a,c){const d=new rs,g=new AbortController,N=setTimeout(()=>{g.abort(),kn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(N),O.ok?kn(d,"TestPingServer: ok",!0,c):kn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),kn(d,"TestPingServer: error",!1,c)})}function kn(a,c,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function Xw(){this.g=new Lw}function Cu(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Cu,Sf),Cu.prototype.g=function(){return new Wo(this.i,this.h)};function Wo(a,c){$e.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Wo,$e),t=Wo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,ds(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qf(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qf(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?hs(this):ds(this),this.readyState==3&&Qf(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,hs(this))},t.Na=function(a){this.g&&(this.response=a,hs(this))},t.ga=function(){this.g&&hs(this)};function hs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ds(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jf(a){let c="";return q(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Ru(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Jf(d),typeof a=="string"?d!=null&&is(d):ae(a,c,d))}function ve(a){$e.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ve,$e);var Zw=/^https?$/i,e0=["POST","PUT"];t=ve.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xf.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){Yf(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(e0,c,void 0)>=0)||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,F]of d)this.g.setRequestHeader(O,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Yf(this,O)}};function Yf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Xf(a),Go(a)}function Xf(a){a.A||(a.A=!0,Ze(a,"complete"),Ze(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ze(this,"complete"),Ze(this,"abort"),Go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Go(this,!0)),ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Zf(this):this.Xa())},t.Xa=function(){Zf(this)};function Zf(a){if(a.h&&typeof s<"u"){if(a.v&&Nn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ze(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=O===0){let F=String(a.D).match(Bf)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),g=!Zw.test(F?F.toLowerCase():"")}d=g}if(d)Ze(a,"complete"),Ze(a,"success");else{a.o=6;try{var N=Nn(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Xf(a)}}finally{Go(a)}}}}function Go(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||Ze(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Nn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Dw(c)}};function ep(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function t0(a){const c={};a=(a.g&&Nn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=Uw(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[N]||[];c[N]=O,O.push(d)}Q(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function fs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function tp(a){this.za=0,this.i=[],this.j=new rs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=fs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=fs("baseRetryDelayMs",5e3,a),this.Za=fs("retryDelaySeedMs",1e4,a),this.Ta=fs("forwardChannelMaxRetries",2,a),this.va=fs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new bf(a&&a.concurrentRequestLimit),this.Ba=new Xw,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=tp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){et(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=cp(this,null,this.W),Ko(this)};function Pu(a){if(np(a),a.I==3){var c=a.V++,d=Ht(a.J);if(ae(d,"SID",a.M),ae(d,"RID",c),ae(d,"TYPE","terminate"),ps(a,d),c=new Rn(a,a.j,c),c.M=2,c.A=Ho(Ht(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=hp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),$o(c)}up(a)}function qo(a){a.g&&(Nu(a),a.g.cancel(),a.g=null)}function np(a){qo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Qo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ko(a){if(!jf(a.h)&&!a.m){a.m=!0;var c=a.Ea;M||v(),z||(M(),z=!0),E.add(c,a),a.D=0}}function n0(a,c){return Uf(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ns(h(a.Ea,a,c),lp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Rn(this,this.j,a);let O=this.o;if(this.U&&(O?(O=ce(O),fr(O,this.U)):O=this.U),this.u!==null||this.R||(N.J=O,O=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=ip(this,N,c),d=Ht(this.J),ae(d,"RID",a),ae(d,"CVER",22),this.G&&ae(d,"X-HTTP-Session-Id",this.G),ps(this,d),O&&(this.R?c="headers="+is(Jf(O))+"&"+c:this.u&&Ru(d,this.u,O)),Su(this.h,N),this.Ra&&ae(d,"TYPE","init"),this.S?(ae(d,"$req",c),ae(d,"SID","null"),N.U=!0,Eu(N,d,null)):Eu(N,d,c),this.I=2}}else this.I==3&&(a?rp(this,a):this.i.length==0||jf(this.h)||rp(this))};function rp(a,c){var d;c?d=c.l:d=a.V++;const g=Ht(a.J);ae(g,"SID",a.M),ae(g,"RID",d),ae(g,"AID",a.K),ps(a,g),a.u&&a.o&&Ru(g,a.u,a.o),d=new Rn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=ip(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Su(a.h,d),Eu(d,g,c)}function ps(a,c){a.H&&q(a.H,function(d,g){ae(c,g,d)}),a.l&&q({},function(d,g){ae(c,g,d)})}function ip(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var N=a.i;let J=-1;for(;;){const Re=["count="+d];J==-1?d>0?(J=N[0].g,Re.push("ofs="+J)):J=0:Re.push("ofs="+J);let ie=!0;for(let Ne=0;Ne<d;Ne++){var O=N[Ne].g;const Wt=N[Ne].map;if(O-=J,O<0)J=Math.max(0,N[Ne].g-100),ie=!1;else try{O="req"+O+"_"||"";try{var F=Wt instanceof Map?Wt:Object.entries(Wt);for(const[_r,xn]of F){let On=xn;l(xn)&&(On=mu(xn)),Re.push(O+_r+"="+encodeURIComponent(On))}}catch(_r){throw Re.push(O+"type="+encodeURIComponent("_badmap")),_r}}catch{g&&g(Wt)}}if(ie){F=Re.join("&");break e}}F=void 0}return a=a.i.splice(0,d),c.G=a,F}function sp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;M||v(),z||(M(),z=!0),E.add(c,a),a.A=0}}function ku(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ns(h(a.Da,a),lp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,op(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ns(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,et(10),qo(this),op(this))};function Nu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function op(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Ht(a.na);ae(c,"RID","rpc"),ae(c,"SID",a.M),ae(c,"AID",a.K),ae(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&ae(c,"TO",a.ia),ae(c,"TYPE","xmlhttp"),ps(a,c),a.u&&a.o&&Ru(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ho(Ht(c)),d.u=null,d.R=!0,Lf(d,a)}t.Va=function(){this.C!=null&&(this.C=null,qo(this),ku(this),et(19))};function Qo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ap(a,c){var d=null;if(a.g==c){Qo(a),Nu(a),a.g=null;var g=2}else if(Iu(a.h,c))d=c.G,Ff(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var N=a.D;g=zo(),Ze(g,new kf(g,d)),Ko(a)}else sp(a);else if(N=c.m,N==3||N==0&&c.X>0||!(g==1&&n0(a,c)||g==2&&ku(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),N){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function lp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function vr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const N=!g;g=new Pn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||os(g,"https"),Ho(g),N?Jw(g.toString(),d):Yw(g.toString(),d)}else et(2);a.I=0,a.l&&a.l.pa(c),up(a),np(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function up(a){if(a.I=0,a.ja=[],a.l){const c=zf(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.oa()}}function cp(a,c,d){var g=d instanceof Pn?Ht(d):new Pn(d);if(g.g!="")c&&(g.g=c+"."+g.g),as(g,g.u);else{var N=o.location;g=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;const O=new Pn(null);g&&os(O,g),c&&(O.g=c),N&&as(O,N),d&&(O.h=d),g=O}return d=a.G,c=a.wa,d&&c&&ae(g,d,c),ae(g,"VER",a.ka),ps(a,g),g}function hp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new ve(new Cu({ab:d})):new ve(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dp(){}t=dp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Jo(){}Jo.prototype.g=function(a,c){return new pt(a,c)};function pt(a,c){$e.call(this),this.g=new tp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ei(this)}m(pt,$e),pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Pu(this.g)},pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=mu(a),a=d);c.i.push(new Bw(c.Ya++,a)),c.I==3&&Ko(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,Pu(this.g),delete this.g,pt.Z.N.call(this)};function fp(a){gu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}m(fp,gu);function pp(){yu.call(this),this.status=1}m(pp,yu);function ei(a){this.g=a}m(ei,dp),ei.prototype.ra=function(){Ze(this.g,"a")},ei.prototype.qa=function(a){Ze(this.g,new fp(a))},ei.prototype.pa=function(a){Ze(this.g,new pp)},ei.prototype.oa=function(){Ze(this.g,"b")},Jo.prototype.createWebChannel=Jo.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,EE=function(){return new Jo},_E=function(){return zo()},vE=mr,Th={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Bo.NO_ERROR=0,Bo.TIMEOUT=8,Bo.HTTP_ERROR=6,Ua=Bo,Nf.COMPLETE="complete",yE=Nf,Af.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",$e.prototype.listen=$e.prototype.J,xs=Af,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,gE=ve}).apply(typeof ga<"u"?ga:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi="12.11.0";function GR(t){Qi=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Dd("@firebase/firestore");function ni(){return Br.logLevel}function H(t,...e){if(Br.logLevel<=Z.DEBUG){const n=e.map(qd);Br.debug(`Firestore (${Qi}): ${t}`,...n)}}function $r(t,...e){if(Br.logLevel<=Z.ERROR){const n=e.map(qd);Br.error(`Firestore (${Qi}): ${t}`,...n)}}function mo(t,...e){if(Br.logLevel<=Z.WARN){const n=e.map(qd);Br.warn(`Firestore (${Qi}): ${t}`,...n)}}function qd(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,wE(t,r,n)}function wE(t,e,n){let r=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw $r(r),new Error(r)}function Ee(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||wE(e,i,r)}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class KR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QR{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string",31837,{l:r}),new TE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string",2055,{h:e}),new qe(e)}}class JR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class YR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new JR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ee(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new dg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new dg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=ZR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Ih(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return fc(i)===fc(s)?ne(i,s):fc(i)?1:-1}return ne(t.length,e.length)}const eP=55296,tP=57343;function fc(t){const e=t.charCodeAt(0);return e>=eP&&e<=tP}function ji(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="__name__";class Kt{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Kt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Kt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=Kt.isNumericId(e),i=Kt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Kt.extractNumericId(e).compare(Kt.extractNumericId(n)):Ih(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gd.fromString(e.substring(4,e.length-2))}}class me extends Kt{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const nP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Kt{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return nP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fg}static keyField(){return new Ue([fg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(me.fromString(e))}static fromName(e){return new K(me.fromString(e).popFirst(5))}static empty(){return new K(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e,n){if(!n)throw new W(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rP(t,e,n,r){if(e===!0&&r===!0)throw new W(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pg(t){if(!K.isDocumentKey(t))throw new W(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mg(t){if(K.isDocumentKey(t))throw new W(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function SE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Qd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function AE(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qd(t);throw new W(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,e){const n={typeString:t};return e&&(n.value=e),n}function Do(t,e){if(!SE(t))throw new W(b.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(b.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=-62135596800,yg=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*yg);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<gg)throw new W(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yg}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Do(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Ae("string",fe._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new fe(0,0))}static max(){return new he(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=-1;function iP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new ir(i,K.empty(),e)}function sP(t){return new ir(t.readTime,t.key,go)}class ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ir(he.min(),K.empty(),go)}static max(){return new ir(he.max(),K.empty(),go)}}function oP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jd(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==aP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function uP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Lo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=-1;function Zd(t){return t==null}function Il(t){return t===0&&1/t==-1/0}function cP(t){return typeof t=="number"&&Number.isInteger(t)&&!Il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="";function hP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=vg(e)),e=dP(t.get(n),e);return vg(e)}function dP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case CE:n+="";break;default:n+=s}}return n}function vg(t){return t+CE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function RE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new ft(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ya(this.root,e,this.comparator,!0)}}class ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??be.EMPTY,this.right=s??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Eg(this.data.getIterator())}getIteratorFrom(e){return new Eg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Eg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new ze(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new fP("Invalid base64 string: "+s):s}}(e);return new en(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new en(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const pP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(Ee(!!t,39018),typeof t=="string"){let e=0;const n=pP.exec(t);if(Ee(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ui(t){return typeof t=="string"?en.fromBase64String(t):en.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="server_timestamp",kE="__type__",NE="__previous_value__",xE="__local_write_time__";function ef(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[kE])==null?void 0:r.stringValue)===PE}function tf(t){const e=t.mapValue.fields[NE];return ef(e)?tf(e):e}function Sl(t){const e=Hr(t.mapValue.fields[xE].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n,r,i,s,o,l,u,h,p,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=m}}const Al="(default)";class Cl{constructor(e,n){this.projectId=e,this.database=n||Al}static empty(){return new Cl("","")}get isDefaultDatabase(){return this.database===Al}isEqual(e){return e instanceof Cl&&e.projectId===this.projectId&&e.database===this.database}}function gP(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cl(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="__type__",yP="__max__",va={mapValue:{}},DE="__vector__",Sh="value";function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ef(t)?4:_P(t)?9007199254740991:vP(t)?10:11:Y(28295,{value:t})}function tn(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sl(t).isEqual(Sl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hr(i.timestampValue),l=Hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ui(i.bytesValue).isEqual(Ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=je(i.doubleValue),l=je(s.doubleValue);return o===l?Il(o)===Il(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(_g(o)!==_g(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function yo(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=Wr(t),r=Wr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=je(s.integerValue||s.doubleValue),u=je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return wg(t.timestampValue,e.timestampValue);case 4:return wg(Sl(t),Sl(e));case 5:return Ih(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ui(s),u=Ui(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=ne(l[h],u[h]);if(p!==0)return p}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(je(s.latitude),je(o.latitude));return l!==0?l:ne(je(s.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Tg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var y,R,P,x;const l=s.fields||{},u=o.fields||{},h=(y=l[Sh])==null?void 0:y.arrayValue,p=(R=u[Sh])==null?void 0:R.arrayValue,m=ne(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((x=p==null?void 0:p.values)==null?void 0:x.length)||0);return m!==0?m:Tg(h,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===va.mapValue&&o===va.mapValue)return 0;if(s===va.mapValue)return 1;if(o===va.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const y=Ih(u[m],p[m]);if(y!==0)return y;const R=Fi(l[u[m]],h[p[m]]);if(R!==0)return R}return ne(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function wg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Hr(t),r=Hr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Tg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Fi(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function zi(t){return Ah(t)}function Ah(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ah(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ah(n.fields[o])}`;return i+"}"}(t.mapValue):Y(61005,{value:t})}function Fa(t){switch(Wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tf(t);return e?16+Fa(e):16;case 5:return 2*t.stringValue.length;case 6:return Ui(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Fa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ji(r.fields,(s,o)=>{i+=s.length+Fa(o)}),i}(t.mapValue);default:throw Y(13486,{value:t})}}function Ch(t){return!!t&&"integerValue"in t}function nf(t){return!!t&&"arrayValue"in t}function za(t){return!!t&&"mapValue"in t}function vP(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[OE])==null?void 0:r.stringValue)===DE}function Bs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ji(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bs(t.arrayValue.values[n]);return e}return{...t}}function _P(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===yP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Bs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];za(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ji(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(Bs(this.value))}}function LE(t){const e=[];return Ji(t.fields,(n,r)=>{const i=new Ue([n]);if(za(r)){const s=LE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Vt(e,0,he.min(),he.min(),he.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Vt(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Vt(e,2,n,he.min(),he.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,he.min(),he.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.position=e,this.inclusive=n}}function Ig(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function EP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{}class De extends VE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TP(e,n,r):n==="array-contains"?new AP(e,r):n==="in"?new CP(e,r):n==="not-in"?new RP(e,r):n==="array-contains-any"?new PP(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IP(e,r):new SP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Fi(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(Fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sr extends VE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new sr(e,n)}matches(e){return ME(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ME(t){return t.op==="and"}function bE(t){return wP(t)&&ME(t)}function wP(t){for(const e of t.filters)if(e instanceof sr)return!1;return!0}function Rh(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+zi(t.value);if(bE(t))return t.filters.map(e=>Rh(e)).join(",");{const e=t.filters.map(n=>Rh(n)).join(",");return`${t.op}(${e})`}}function jE(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof sr?function(r,i){return i instanceof sr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&jE(o,i.filters[l]),!0):!1}(t,e):void Y(19439)}function UE(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${zi(n.value)}`}(t):t instanceof sr?function(n){return n.op.toString()+" {"+n.getFilters().map(UE).join(" ,")+"}"}(t):"Filter"}class TP extends De{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class IP extends De{constructor(e,n){super(e,"in",n),this.keys=FE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SP extends De{constructor(e,n){super(e,"not-in",n),this.keys=FE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class AP extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nf(n)&&yo(n.arrayValue,this.value)}}class CP extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yo(this.value.arrayValue,n)}}class RP extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!yo(this.value.arrayValue,n)}}class PP extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Ag(t,e=null,n=[],r=[],i=null,s=null,o=null){return new kP(t,e,n,r,i,s,o)}function rf(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zi(r)).join(",")),e.Te=n}return e.Te}function sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!EP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sg(t.startAt,e.startAt)&&Sg(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function NP(t,e,n,r,i,s,o,l){return new ru(t,e,n,r,i,s,o,l)}function xP(t){return new ru(t)}function Cg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function OP(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function DP(t){return t.collectionGroup!==null}function $s(t){const e=oe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(Ue.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Pl(s,r))}),n.has(Ue.keyField().canonicalString())||e.Ee.push(new Pl(Ue.keyField(),r))}return e.Ee}function Or(t){const e=oe(t);return e.Ie||(e.Ie=LP(e,$s(t))),e.Ie}function LP(t,e){if(t.limitType==="F")return Ag(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pl(i.field,s)});const n=t.endAt?new Rl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rl(t.startAt.position,t.startAt.inclusive):null;return Ag(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ph(t,e,n){return new ru(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zE(t,e){return sf(Or(t),Or(e))&&t.limitType===e.limitType}function BE(t){return`${rf(Or(t))}|lt:${t.limitType}`}function Is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>UE(i)).join(", ")}]`),Zd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>zi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>zi(i)).join(",")),`Target(${r})`}(Or(t))}; limitType=${t.limitType})`}function of(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of $s(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ig(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,$s(r),i)||r.endAt&&!function(o,l,u){const h=Ig(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,$s(r),i))}(t,e)}function VP(t){return(e,n)=>{let r=!1;for(const i of $s(t)){const s=MP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function MP(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Fi(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ji(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return RE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=new ft(K.comparator);function kl(){return bP}const $E=new ft(K.comparator);function _a(...t){let e=$E;for(const n of t)e=e.insert(n.key,n);return e}function HE(t){let e=$E;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return Hs()}function WE(){return Hs()}function Hs(){return new Jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const jP=new ft(K.comparator),UP=new ze(K.comparator);function Qe(...t){let e=UP;for(const n of t)e=e.add(n);return e}const FP=new ze(ne);function zP(){return FP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function GE(t){return{integerValue:""+t}}function BP(t,e){return cP(e)?GE(e):af(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this._=void 0}}function $P(t,e,n){return t instanceof Nl?function(i,s){const o={fields:{[kE]:{stringValue:PE},[xE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ef(s)&&(s=tf(s)),s&&(o.fields[NE]=s),{mapValue:o}}(n,e):t instanceof vo?KE(t,e):t instanceof _o?QE(t,e):function(i,s){const o=qE(i,s),l=Rg(o)+Rg(i.Ae);return Ch(o)&&Ch(i.Ae)?GE(l):af(i.serializer,l)}(t,e)}function HP(t,e,n){return t instanceof vo?KE(t,e):t instanceof _o?QE(t,e):n}function qE(t,e){return t instanceof xl?function(r){return Ch(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Nl extends iu{}class vo extends iu{constructor(e){super(),this.elements=e}}function KE(t,e){const n=JE(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends iu{constructor(e){super(),this.elements=e}}function QE(t,e){let n=JE(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class xl extends iu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Rg(t){return je(t.integerValue||t.doubleValue)}function JE(t){return nf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof vo&&i instanceof vo||r instanceof _o&&i instanceof _o?ji(r.elements,i.elements,tn):r instanceof xl&&i instanceof xl?tn(r.Ae,i.Ae):r instanceof Nl&&i instanceof Nl}(t.transform,e.transform)}class GP{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class su{}function YE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ZE(t.key,mn.none()):new Vo(t.key,t.data,mn.none());{const n=t.data,r=Mt.empty();let i=new ze(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yr(t.key,r,new Ut(i.toArray()),mn.none())}}function qP(t,e,n){t instanceof Vo?function(i,s,o){const l=i.value.clone(),u=kg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Yr?function(i,s,o){if(!Ba(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=kg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(XE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ws(t,e,n,r){return t instanceof Vo?function(s,o,l,u){if(!Ba(s.precondition,o))return l;const h=s.value.clone(),p=Ng(s.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yr?function(s,o,l,u){if(!Ba(s.precondition,o))return l;const h=Ng(s.fieldTransforms,u,o),p=o.data;return p.setAll(XE(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Ba(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function KP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qE(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function Pg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ji(r,i,(s,o)=>WP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vo extends su{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yr extends su{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function XE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kg(t,e,n){const r=new Map;Ee(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,HP(o,l,n[i]))}return r}function Ng(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$P(s,o,e))}return r}class ZE extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QP extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&qP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=WE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=YE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Qe())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>Pg(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>Pg(n,r))}}class lf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return jP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new lf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,ee;function XP(t){switch(t){case b.OK:return Y(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function ZP(t){if(t===void 0)return $r("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ie.OK:return b.OK;case Ie.CANCELLED:return b.CANCELLED;case Ie.UNKNOWN:return b.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return b.INTERNAL;case Ie.UNAVAILABLE:return b.UNAVAILABLE;case Ie.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ie.NOT_FOUND:return b.NOT_FOUND;case Ie.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ie.ABORTED:return b.ABORTED;case Ie.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ie.DATA_LOSS:return b.DATA_LOSS;default:return Y(39323,{code:t})}}(ee=Ie||(Ie={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Gd([4294967295,4294967295],0);class ek{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nk(t,e){return kh(t,e.toTimestamp())}function Ci(t){return Ee(!!t,49232),he.fromTimestamp(function(n){const r=Hr(n);return new fe(r.seconds,r.nanos)}(t))}function ew(t,e){return Nh(t,e).canonicalString()}function Nh(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function rk(t){const e=me.fromString(t);return Ee(hk(e),10190,{key:e.toString()}),e}function xh(t,e){return ew(t.databaseId,e.path)}function ik(t){const e=rk(t);return e.length===4?me.emptyPath():ok(e)}function sk(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ok(t){return Ee(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function xg(t,e,n){return{name:xh(t,e),fields:n.value.mapValue.fields}}function ak(t,e){let n;if(e instanceof Vo)n={update:xg(t,e.key,e.value)};else if(e instanceof ZE)n={delete:xh(t,e.key)};else if(e instanceof Yr)n={update:xg(t,e.key,e.data),updateMask:ck(e.fieldMask)};else{if(!(e instanceof QP))return Y(16599,{dt:e.type});n={verify:xh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(t,e.precondition)),n}function lk(t,e){return t&&t.length>0?(Ee(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Ci(i.updateTime):Ci(s);return o.isEqual(he.min())&&(o=Ci(s)),new GP(o,i.transformResults||[])}(n,e))):[]}function uk(t){let e=ik(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const y=tw(m);return y instanceof sr&&bE(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(P){return new Pl(ri(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Zd(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,R=m.values||[];return new Rl(R,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,R=m.values||[];return new Rl(R,y)}(n.endAt)),NP(e,i,o,s,l,"F",u,h)}function tw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ri(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ri(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ri(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ri(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return De.create(ri(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sr.create(n.compositeFilter.filters.map(r=>tw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function ri(t){return Ue.fromServerFormat(t.fieldPath)}function ck(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function nw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.yt=e}}function fk(t){const e=uk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ph(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.bn=new mk}addToCollectionParentIndex(e,n){return this.bn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(ir.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class mk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rw=41943040;class at{static withCacheSize(e){return new at(e,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at.DEFAULT_COLLECTION_PERCENTILE=10,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,at.DEFAULT=new at(rw,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),at.DISABLED=new at(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Bi(0)}static ar(){return new Bi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="LruGarbageCollector",gk=1048576;function Lg([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class yk{constructor(e){this.Pr=e,this.buffer=new ze(Lg),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Lg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Dg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Lo(n)?H(Dg,"Ignoring IndexedDB error during garbage collection: ",n):await Jd(n)}await this.Ar(3e5)})}}class _k{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Yd.ce);const r=new yk(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Og)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Og):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),ni()<=Z.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Ek(t,e){return new _k(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.changes=new Jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ws(r.mutation,i,Ut.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Qe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Qe()){const i=Pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=_a();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Qe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=kl();const o=Hs(),l=function(){return Hs()}();return n.forEach((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Yr)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Ws(p.mutation,h,p.mutation.getFieldMask(),fe.now())):o.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>l.set(h,new Tk(p,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Hs();let i=new ft((o,l)=>o-l),s=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||Ut.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(i.get(l.batchId)||Qe()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=WE();p.forEach(y=>{if(!s.has(y)){const R=YE(n.get(y),r.get(y));R!==null&&m.set(y,R),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return OP(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Pr());let l=go,u=s;return o.next(h=>V.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{u=u.insert(p,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Qe())).next(p=>({batchId:l,changes:HE(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=_a();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=_a();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const h=function(m,y){return new ru(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,Vt.newInvalidDocument(p)))});let l=_a();return o.forEach((u,h)=>{const p=s.get(u);p!==void 0&&Ws(p.mutation,h,Ut.empty(),fe.now()),of(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return V.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ci(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:fk(i.bundledQuery),readTime:Ci(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.overlays=new ft(K.comparator),this.Lr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Pr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ft((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=Pr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Pr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return V.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YP(n,r));let s=this.Lr.get(n);s===void 0&&(s=Qe(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.sessionToken=en.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.kr=new ze(xe.qr),this.Kr=new ze(xe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new xe(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new xe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new me([])),r=new xe(n,e),i=new xe(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new K(new me([])),r=new xe(n,e),i=new xe(n,e+1);let s=Qe();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new xe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return K.comparator(e.key,n.key)||ne(e.Jr,n.Jr)}static Ur(e,n){return ne(e.Jr,n.Jr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new ze(xe.qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new xe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Xd:this.Yn-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new xe(n,0),i=new xe(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ne);return n.forEach(i=>{const s=new xe(i,0),o=new xe(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),V.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new xe(new K(s),0);let l=new ze(ne);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Jr)),!0)},o),V.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return V.forEach(n.mutations,i=>{const s=new xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new xe(n,0),i=this.Hr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.ti=e,this.docs=function(){return new ft(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=kl();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kl();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||oP(sP(p),r)<=0||(i.has(p.key)||of(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y(9500)}ni(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kk(this)}getSize(e){return V.resolve(this.size)}}class kk extends wk{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.persistence=e,this.ri=new Jr(n=>rf(n),sf),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.ii=0,this.si=new uf,this.targetCount=0,this.oi=Bi._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),V.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Bi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.lr(n),V.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,n){this._i={},this.overlays={},this.ai=new Yd(0),this.ui=!1,this.ui=!0,this.ci=new Ck,this.referenceDelegate=e(this),this.li=new Nk(this),this.indexManager=new pk,this.remoteDocumentCache=function(i){return new Pk(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new dk(n),this.Pi=new Sk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ak,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Rk(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new xk(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return V.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class xk extends lP{constructor(e){super(),this.currentSequenceNumber=e}}class cf{constructor(e){this.persistence=e,this.Ri=new uf,this.Ai=null}static Vi(e){return new cf(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,r=>{const i=K.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Ol{constructor(e,n){this.persistence=e,this.fi=new Jr(r=>hP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Ek(this,n)}static Vi(e,n){return new Ol(e,n)}Ti(){}Ei(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return V.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,he.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fa(e.data.value)),n}wr(e,n,r){return V.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=Qe(),i=Qe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return u1()?8:uP(Xe())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ok;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ni()<=Z.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(ni()<=Z.DEBUG&&H("QueryEngine","Query:",Is(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ni()<=Z.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Or(n))):V.resolve())}gs(e,n){if(Cg(n))return V.resolve(null);let r=Or(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ph(n,null,"F"),r=Or(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Qe(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,Ph(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return Cg(n)||i.isEqual(he.min())?V.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?V.resolve(null):(ni()<=Z.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Is(n)),this.Ds(e,o,n,iP(i,go)).next(l=>l))})}Ss(e,n){let r=new ze(VP(e));return n.forEach((i,s)=>{of(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ni()<=Z.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Is(n)),this.fs.getDocumentsMatchingQuery(e,n,ir.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="LocalStore";class Vk{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new ft(ne),this.Fs=new Jr(s=>rf(s),sf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ik(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function Mk(t,e,n,r){return new Vk(t,e,n,r)}async function sw(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Qe();for(const h of i){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function bk(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,y=m.keys();let R=V.resolve();return y.forEach(P=>{R=R.next(()=>p.getEntry(u,P)).next(x=>{const L=h.docVersions.get(P);Ee(L!==null,48541),x.version.compareTo(L)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),p.addEntry(x)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Qe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jk(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function Uk(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Vg{constructor(){this.activeTargetIds=zP()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fk{constructor(){this.vo=new Vg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Vg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="ConnectivityMonitor";class bg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(Mg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(Mg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea=null;function Oh(){return Ea===null?Ea=function(){return 268435456+Math.round(2147483648*Math.random())}():Ea++,"0x"+Ea.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="RestConnection",Bk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class $k{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Al?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Oh(),l=this.Qo(e,n.toUriEncodedString());H(pc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),p=Po(h);return this.zo(e,l,u,r,p).then(m=>(H(pc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw mo(pc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=Bk[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection",Ss=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Ri extends $k{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ri.c_){const e=_E();Ss(e,vE.STAT_EVENT,n=>{n.stat===Th.PROXY?H(Ge,"STAT_EVENT: detected buffering proxy"):n.stat===Th.NOPROXY&&H(Ge,"STAT_EVENT: detected no buffering proxy")}),Ri.c_=!0}}zo(e,n,r,i,s){const o=Oh();return new Promise((l,u)=>{const h=new gE;h.setWithCredentials(!0),h.listenOnce(yE.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ua.NO_ERROR:const m=h.getResponseJson();H(Ge,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Ua.TIMEOUT:H(Ge,`RPC '${e}' ${o} timed out`),u(new W(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ua.HTTP_ERROR:const y=h.getStatus();if(H(Ge,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const x=function(I){const _=I.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(_)>=0?_:b.UNKNOWN}(P.status);u(new W(x,P.message))}else u(new W(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new W(b.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(Ge,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);H(Ge,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",p,r,15)})}T_(e,n,r){const i=Oh(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");H(Ge,`Creating RPC '${e}' stream ${i}: ${h}`,l);const p=o.createWebChannel(h,l);this.E_(p);let m=!1,y=!1;const R=new Hk({Jo:P=>{y?H(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(H(Ge,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Ge,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},Ho:()=>p.close()});return Ss(p,xs.EventType.OPEN,()=>{y||(H(Ge,`RPC '${e}' stream ${i} transport opened.`),R.i_())}),Ss(p,xs.EventType.CLOSE,()=>{y||(y=!0,H(Ge,`RPC '${e}' stream ${i} transport closed`),R.o_(),this.I_(p))}),Ss(p,xs.EventType.ERROR,P=>{y||(y=!0,mo(Ge,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),R.o_(new W(b.UNAVAILABLE,"The operation could not be completed")))}),Ss(p,xs.EventType.MESSAGE,P=>{var x;if(!y){const L=P.data[0];Ee(!!L,16349);const I=L,_=(I==null?void 0:I.error)||((x=I[0])==null?void 0:x.error);if(_){H(Ge,`RPC '${e}' stream ${i} received error:`,_);const C=_.status;let D=function(E){const v=Ie[E];if(v!==void 0)return ZP(v)}(C),M=_.message;C==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&mo(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=b.INTERNAL,M="Unknown error status: "+C+" with message "+_.message),y=!0,R.o_(new W(D,M)),p.close()}else H(Ge,`RPC '${e}' stream ${i} received:`,L),R.__(L)}}),Ri.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return EE()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t){return new Ri(t)}function mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t){return new ek(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ri.c_=!1;class ow{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="PersistentStream";class Gk{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ow(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(jg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(jg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qk extends Gk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=lk(e.writeResults,e.commitTime),r=Ci(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=sk(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ak(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{}class Qk extends Kk{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Nh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(b.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Nh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(b.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Jk(t,e,n,r){return new Qk(t,e,n,r)}class Yk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?($r(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="RemoteStore";class Xk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{jo(this)&&(H(Mo,"Restarting streams for network reachability change."),await async function(u){const h=oe(u);h.Ia.add(4),await bo(h),h.Va.set("Unknown"),h.Ia.delete(4),await au(h)}(this))})}),this.Va=new Yk(r,i)}}async function au(t){if(jo(t))for(const e of t.Ra)await e(!0)}async function bo(t){for(const e of t.Ra)await e(!1)}function jo(t){return oe(t).Ia.size===0}async function aw(t,e,n){if(!Lo(e))throw e;t.Ia.add(1),await bo(t),t.Va.set("Offline"),n||(n=()=>jk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(Mo,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await au(t)})}function lw(t,e){return e().catch(n=>aw(t,n,e))}async function lu(t){const e=oe(t),n=or(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xd;for(;Zk(e);)try{const i=await Uk(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,eN(e,i)}catch(i){await aw(e,i)}uw(e)&&cw(e)}function Zk(t){return jo(t)&&t.Ta.length<10}function eN(t,e){t.Ta.push(e);const n=or(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function uw(t){return jo(t)&&!or(t).x_()&&t.Ta.length>0}function cw(t){or(t).start()}async function tN(t){or(t).ra()}async function nN(t){const e=or(t);for(const n of t.Ta)e.ea(n.mutations)}async function rN(t,e,n){const r=t.Ta.shift(),i=lf.from(r,e,n);await lw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lu(t)}async function iN(t,e){e&&or(t).Y_&&await async function(r,i){if(function(o){return XP(o)&&o!==b.ABORTED}(i.code)){const s=r.Ta.shift();or(r).B_(),await lw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await lu(r)}}(t,e),uw(t)&&cw(t)}async function Ug(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),H(Mo,"RemoteStore received new credentials");const r=jo(n);n.Ia.add(3),await bo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await au(n)}async function sN(t,e){const n=oe(t);e?(n.Ia.delete(2),await au(n)):e||(n.Ia.add(2),await bo(n),n.Va.set("Unknown"))}function or(t){return t.fa||(t.fa=function(n,r,i){const s=oe(n);return s.sa(),new qk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:tN.bind(null,t),t_:iN.bind(null,t),ta:nN.bind(null,t),na:rN.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await lu(t)):(await t.fa.stop(),t.Ta.length>0&&(H(Mo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new df(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hw(t,e){if($r("AsyncQueue",`${e}: ${t}`),Lo(t))return new W(b.UNAVAILABLE,`${e}: ${t}`);throw t}class oN{constructor(){this.queries=Fg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=Fg(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(b.ABORTED,"Firestore shutting down"))}}function Fg(){return new Jr(t=>BE(t),zE)}function aN(t){t.Ca.forEach(e=>{e.next()})}var zg,Bg;(Bg=zg||(zg={})).Ma="default",Bg.Cache="cache";const lN="SyncEngine";class uN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Jr(l=>BE(l),zE),this.Eu=new Map,this.Iu=new Set,this.Ru=new ft(K.comparator),this.Au=new Map,this.Vu=new uf,this.du={},this.mu=new Map,this.fu=Bi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function cN(t,e,n){const r=pN(t);try{const i=await function(o,l){const u=oe(o),h=fe.now(),p=l.reduce((R,P)=>R.add(P.key),Qe());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=kl(),x=Qe();return u.xs.getEntries(R,p).next(L=>{P=L,P.forEach((I,_)=>{_.isValidDocument()||(x=x.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,P)).next(L=>{m=L;const I=[];for(const _ of l){const C=KP(_,m.get(_.key).overlayedDocument);C!=null&&I.push(new Yr(_.key,C,LE(C.value.mapValue),mn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,I,l)}).next(L=>{y=L;const I=L.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(R,L.batchId,I)})}).then(()=>({batchId:y.batchId,changes:HE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new ft(ne)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await uu(r,i.changes),await lu(r.remoteStore)}catch(i){const s=hw(i,"Failed to persist write");n.reject(s)}}function $g(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const y of m.Sa)y.va(l)&&(h=!0)}),h&&aN(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hN(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await bk(n.localStore,e);fw(n,r,null),dw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uu(n,i)}catch(i){await Jd(i)}}async function dN(t,e,n){const r=oe(t);try{const i=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(Ee(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);fw(r,e,n),dw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uu(r,i)}catch(i){await Jd(i)}}function dw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function fw(t,e,n){const r=oe(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}async function uu(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=hf.Is(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,h){const p=oe(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,y=>V.forEach(y.Ts,R=>p.persistence.referenceDelegate.addReference(m,y.targetId,R)).next(()=>V.forEach(y.Es,R=>p.persistence.referenceDelegate.removeReference(m,y.targetId,R)))))}catch(m){if(!Lo(m))throw m;H(Lk,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const R=p.vs.get(y),P=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(P);p.vs=p.vs.insert(y,x)}}}(r.localStore,s))}async function fN(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){H(lN,"User change. New user:",e.toKey());const r=await sw(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(b.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uu(n,r.Ns)}}function pN(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dN.bind(null,e),e}class Dl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ou(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Mk(this.persistence,new Dk,e.initialUser,this.serializer)}Cu(e){return new iw(cf.Vi,this.serializer)}Du(e){return new Fk}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Dl.provider={build:()=>new Dl};class mN extends Dl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ee(this.persistence.referenceDelegate instanceof Ol,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new vk(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?at.withCacheSize(this.cacheSizeBytes):at.DEFAULT;return new iw(r=>Ol.Vi(r,n),this.serializer)}}class Dh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$g(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fN.bind(null,this.syncEngine),await sN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oN}()}createDatastore(e){const n=ou(e.databaseInfo.databaseId),r=Wk(e.databaseInfo);return Jk(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Xk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>$g(this.syncEngine,n,0),function(){return bg.v()?new bg:new zk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,p){const m=new uN(i,s,o,l,u,h);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);H(Mo,"RemoteStore shutting down."),s.Ia.add(5),await bo(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Dh.provider={build:()=>new Dh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="FirestoreClient";class gN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=Kd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hw(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gc(t,e){t.asyncQueue.verifyOperationInProgress(),H(ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yN(t);H(ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ug(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ug(e.remoteStore,i)),t._onlineComponents=e}async function yN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(ar,"Using user provided OfflineComponentProvider");try{await gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;mo("Error using user provided cache. Falling back to memory cache: "+n),await gc(t,new Dl)}}else H(ar,"Using default OfflineComponentProvider"),await gc(t,new mN(void 0));return t._offlineComponents}async function vN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(ar,"Using user provided OnlineComponentProvider"),await Hg(t,t._uninitializedComponentsProvider._online)):(H(ar,"Using default OnlineComponentProvider"),await Hg(t,new Dh))),t._onlineComponents}function _N(t){return vN(t).then(e=>e.syncEngine)}function EN(t,e){const n=new xr;return t.asyncQueue.enqueueAndForget(async()=>cN(await _N(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN="ComponentProvider",Wg=new Map;function TN(t,e,n,r,i){return new mP(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,pw(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="firestore.googleapis.com",Gg=!0;class qg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mw,this.ssl=Gg}else this.host=e.host,this.ssl=e.ssl??Gg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gk)throw new W(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qR;switch(r.type){case"firstParty":return new YR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wg.get(n);r&&(H(wN,"Removing Datastore"),Wg.delete(n),r.terminate())}(this),Promise.resolve()}}function IN(t,e,n,r={}){var h;t=AE(t,cu);const i=Po(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&N_(`https://${l}`),s.host!==mw&&s.host!==l&&mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!jr(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=qe.MOCK_USER;else{p=n1(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new W(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new qe(y)}t._authCredentials=new KR(new TE(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ff(this.firestore,e,this._query)}}class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}toJSON(){return{type:Je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Do(n,Je._jsonSchema))return new Je(e,r||null,new K(me.fromString(n.referencePath)))}}Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:Ae("string",Je._jsonSchemaVersion),referencePath:Ae("string")};class tr extends ff{constructor(e,n,r){super(e,n,xP(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new K(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function SN(t,e,...n){if(t=rt(t),IE("collection","path",e),t instanceof cu){const r=me.fromString(e,...n);return mg(r),new tr(t,null,r)}{if(!(t instanceof Je||t instanceof tr))throw new W(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return mg(r),new tr(t.firestore,null,r)}}function AN(t,e,...n){if(t=rt(t),arguments.length===1&&(e=Kd.newId()),IE("doc","path",e),t instanceof cu){const r=me.fromString(e,...n);return pg(r),new Je(t,null,new K(r))}{if(!(t instanceof Je||t instanceof tr))throw new W(b.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return pg(r),new Je(t.firestore,t instanceof tr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="AsyncQueue";class Qg{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ow(this,"async_queue_retry"),this._c=()=>{const r=mc();r&&H(Kg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new xr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Lo(e))throw e;H(Kg,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,$r("INTERNAL UNHANDLED ERROR: ",Jg(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=df.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Y(47125,{Pc:Jg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Jg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class gw extends cu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Qg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qg(e),this._firestoreClient=void 0,await e}}}function CN(t,e){const n=typeof t=="object"?t:L_(),r=typeof t=="string"?t:Al,i=Vd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=e1("firestore");s&&IN(i,...s)}return i}function RN(t){if(t._terminated)throw new W(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PN(t),t._firestoreClient}function PN(t){var r,i,s,o;const e=t._freezeSettings(),n=TN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new gN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(en.fromBase64String(e))}catch(n){throw new W(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bt(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Do(e,bt._jsonSchema))return bt.fromBase64String(e.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:Ae("string",bt._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(Do(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Ae("string",gn._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Do(e,Zt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Zt(e.vectorValues);throw new W(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zt._jsonSchemaVersion="firestore/vectorValue/1.0",Zt._jsonSchema={type:Ae("string",Zt._jsonSchemaVersion),vectorValues:Ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=/^__.*__$/;class NN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vo(e,this.data,n,this.fieldTransforms)}}function _w(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:t})}}class pf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new pf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ll(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(_w(this.dataSource)&&kN.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class xN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ou(e)}A(e,n,r,i=!1){return new pf({dataSource:e,methodName:n,targetDoc:r,path:Ue.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ON(t){const e=t._freezeSettings(),n=ou(t._databaseId);return new xN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DN(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);Iw("Data must be an object, but it was:",o,r);const l=ww(r,o);let u,h;if(s.merge)u=new Ut(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const y=mf(e,m,n);if(!o.contains(y))throw new W(b.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);MN(p,y)||p.push(y)}u=new Ut(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new NN(new Mt(l),u,h)}function Ew(t,e){if(Tw(t=rt(t)))return Iw("Unsupported field value:",e,t),ww(t,e);if(t instanceof vw)return function(r,i){if(!_w(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ew(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:kh(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:kh(i.serializer,s)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bt)return{bytesValue:tk(i.serializer,r._byteString)};if(r instanceof Je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ew(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zt)return function(o,l){const u=o instanceof Zt?o.toArray():o;return{mapValue:{fields:{[OE]:{stringValue:DE},[Sh]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.yc("VectorValues must only contain numeric values.");return af(l.serializer,p)})}}}}}}(r,i);if(nw(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Qd(r)}`)}(t,e)}function ww(t,e){const n={};return RE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ji(t,(r,i)=>{const s=Ew(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Tw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof gn||t instanceof bt||t instanceof Je||t instanceof vw||t instanceof Zt||nw(t))}function Iw(t,e,n){if(!Tw(n)||!SE(n)){const r=Qd(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function mf(t,e,n){if((e=rt(e))instanceof yw)return e._internalPath;if(typeof e=="string")return VN(t,e);throw Ll("Field path arguments must be of type string or ",t,!1,void 0,n)}const LN=new RegExp("[~\\*/\\[\\]]");function VN(t,e,n){if(e.search(LN)>=0)throw Ll(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yw(...e.split("."))._internalPath}catch{throw Ll(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ll(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(b.INVALID_ARGUMENT,l+t+u)}function MN(t,e){return t.some(n=>n.isEqual(e))}const Yg="@firebase/firestore",Xg="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(mf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bN extends Sw{data(){return super.data()}}function jN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class wa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pi extends Sw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Pi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Pi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pi._jsonSchema={type:Ae("string",Pi._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class $a extends Pi{data(e={}){return super.data(e)}}class Gs{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new wa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new wa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new $a(i._firestore,i._userDataWriter,l.doc.key,l.doc,new wa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new $a(i._firestore,i._userDataWriter,l.doc.key,l.doc,new wa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:UN(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function UN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gs._jsonSchemaVersion="firestore/querySnapshot/1.0",Gs._jsonSchema={type:Ae("string",Gs._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};function FN(t,e){const n=AE(t.firestore,gw),r=AN(t),i=jN(t.converter,e),s=ON(t.firestore);return zN(n,[DN(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function zN(t,e){const n=RN(t);return EN(n,e)}(function(e,n=!0){GR(qi),Mi(new Ur("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new gw(new QR(r.getProvider("auth-internal")),new XR(o,r.getProvider("app-check-internal")),gP(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),er(Yg,Xg,e),er(Yg,Xg,"esm2020")})();const BN={apiKey:"AIzaSyAtgrCrXy0-3RiEq9KPLRHnS5xw20u6zLA",authDomain:"valhalla-box-gym-app.firebaseapp.com",projectId:"valhalla-box-gym-app",storageBucket:"valhalla-box-gym-app.firebasestorage.app",messagingSenderId:"304953173191",appId:"1:304953173191:web:60c58812478a2524890ae2"},Aw=D_(BN),Er=BR(Aw),$N=CN(Aw),Cw=j.createContext(),Uo=()=>j.useContext(Cw),HN=({children:t})=>{const[e,n]=j.useState(null),[r,i]=j.useState(!0),[s,o]=j.useState(!1),l=async(P,x,L)=>{const I=await AC(Er,P,x);return await PC(I.user,{displayName:L}),I},u=(P,x)=>CC(Er,P,x),h=()=>{const P=new an;return hc(Er,P)},p=()=>{const P=new on;return hc(Er,P)},m=()=>{const P=new ln;return hc(Er,P)},y=()=>OC(Er);j.useEffect(()=>xC(Er,x=>{n(x),i(!1)}),[]);const R={currentUser:e,login:u,loginWithGoogle:h,loginWithFacebook:p,loginWithTwitter:m,signup:l,logout:y,isAuthModalOpen:s,setIsAuthModalOpen:o};return f.jsx(Cw.Provider,{value:R,children:!r&&t})},Rw=j.createContext(),gf=()=>j.useContext(Rw),WN=({children:t})=>{const[e,n]=j.useState(()=>{const y=localStorage.getItem("valhalla_cart");return y?JSON.parse(y):[]}),[r,i]=j.useState(!1);j.useEffect(()=>{localStorage.setItem("valhalla_cart",JSON.stringify(e))},[e]);const s=y=>{n(R=>R.find(x=>x.id===y.id)?R.map(x=>x.id===y.id?{...x,quantity:x.quantity+1}:x):[...R,{...y,quantity:1}]),i(!0)},o=y=>{n(R=>R.filter(P=>P.id!==y))},l=(y,R)=>{R<1||n(P=>P.map(x=>x.id===y?{...x,quantity:R}:x))},u=()=>{n([])},h=e.reduce((y,R)=>y+R.price*R.quantity,0),p=e.reduce((y,R)=>y+R.quantity,0),m={cart:e,addToCart:s,removeFromCart:o,updateQuantity:l,clearCart:u,cartTotal:h,cartCount:p,isCartOpen:r,setIsCartOpen:i};return f.jsx(Rw.Provider,{value:m,children:t})},GN=({isOpen:t,onClose:e})=>{const{login:n,signup:r,loginWithGoogle:i,loginWithFacebook:s,loginWithTwitter:o}=Uo(),[l,u]=j.useState(!0),[h,p]=j.useState(""),[m,y]=j.useState(""),[R,P]=j.useState(""),[x,L]=j.useState(""),[I,_]=j.useState(!1);if(!t)return null;const C=async M=>{M.preventDefault(),L(""),_(!0);try{l?await n(h,m):await r(h,m,R||"Guerrero"),e()}catch(z){L(z.code==="auth/email-already-in-use"?"El guerrero ya está registrado en nuestros salones.":z.code==="auth/wrong-password"||z.code==="auth/user-not-found"||z.code==="auth/invalid-credential"?"Credenciales incorrectas. ¿Olvidaste tu juramento?":"Error al conectar con los dioses. Intenta de nuevo.")}_(!1)},D=async(M,z)=>{L(""),_(!0);try{await M(),e()}catch{L(`Error al conectar con ${z}. Intenta nuevamente.`)}_(!1)};return f.jsx("div",{className:"auth-modal-overlay",onClick:e,children:f.jsxs("div",{className:"auth-modal-content",onClick:M=>M.stopPropagation(),children:[f.jsx("button",{className:"auth-close-btn",onClick:e,children:f.jsx(Od,{size:24})}),f.jsxs("div",{className:"auth-header",children:[f.jsx(xd,{className:"text-gold mb-2 mx-auto",size:32}),f.jsx("h2",{children:l?"ENTRA AL VALHALLA":"ÚNETE A LA TRIBU"}),f.jsx("p",{className:"text-muted",children:l?"Regresa a tu lugar de entrenamiento":"Forja tu legado con nosotros"})]}),x&&f.jsx("div",{className:"auth-error",children:x}),f.jsxs("form",{onSubmit:C,className:"auth-form",children:[!l&&f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Nombre de Guerrero"}),f.jsx("input",{type:"text",value:R,onChange:M=>P(M.target.value),placeholder:"Ej. Ragnar",required:!l})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Correo Electrónico"}),f.jsx("input",{type:"email",value:h,onChange:M=>p(M.target.value),placeholder:"tu@correo.com",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Contraseña secreta"}),f.jsx("input",{type:"password",value:m,onChange:M=>y(M.target.value),placeholder:"••••••••",required:!0,minLength:"6"})]}),f.jsx("button",{type:"submit",className:"btn-primary w-100 mt-2",disabled:I,children:I?"CARGANDO...":l?"INICIAR SESIÓN":"FORJAR ALIANZA"})]}),f.jsxs("div",{className:"divider-container",children:[f.jsx("div",{className:"divider-line"}),f.jsx("span",{className:"divider-text",children:"O ENTRA CON"}),f.jsx("div",{className:"divider-line"})]}),f.jsxs("div",{className:"social-btn-group",children:[f.jsxs("button",{type:"button",className:"google-btn w-100",onClick:()=>D(i,"Google"),disabled:I,children:[f.jsxs("svg",{className:"google-icon",viewBox:"0 0 24 24",children:[f.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),f.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),f.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),f.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continuar con Google"]}),f.jsxs("button",{type:"button",className:"google-btn facebook-btn w-100",onClick:()=>D(s,"Facebook"),disabled:I,children:[f.jsx("svg",{className:"google-icon",viewBox:"0 0 24 24",children:f.jsx("path",{fill:"#1877F2",d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),"Continuar con Facebook"]}),f.jsxs("button",{type:"button",className:"google-btn twitter-btn w-100",onClick:()=>D(o,"Twitter/X"),disabled:I,children:[f.jsx("svg",{className:"google-icon",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),"Continuar con Twitter / X"]})]}),f.jsx("div",{className:"auth-toggle",children:f.jsxs("p",{children:[l?"¿Aún no eres miembro? ":"¿Ya tienes un lugar en la mesa? ",f.jsx("button",{type:"button",className:"toggle-mode-btn",onClick:()=>{u(!l),L("")},children:l?"Regístrate aquí":"Inicia Sesión"})]})})]})})},qN=()=>{const{cart:t,removeFromCart:e,updateQuantity:n,cartTotal:r,clearCart:i,isCartOpen:s,setIsCartOpen:o}=gf(),{currentUser:l,setIsAuthModalOpen:u}=Uo(),[h,p]=j.useState(!1);if(!s)return null;const m=async()=>{if(!l){o(!1),u(!0);return}if(t.length!==0){p(!0);try{const y={userId:l.uid,userName:l.displayName||"Guerrero Valhalla",userEmail:l.email,items:t,total:r,date:new Date().toISOString(),status:"pending"};FN(SN($N,"orders"),y).catch(x=>console.error("Error BD:",x));const R=`¡Skål! Soy ${y.userName}, y quiero forjar mi armadura con este pedido:

`+t.map(x=>`- ${x.quantity}x ${x.name} ($${x.price}) = $${x.quantity*x.price}`).join(`
`)+`

Total del Botín: $${r}`,P=`https://wa.me/542317533963?text=${encodeURIComponent(R)}`;i(),o(!1),p(!1),window.open(P,"_blank")}catch(y){console.error("Error procesando el pedido:",y),alert("Hubo un error al forjar tu pedido. Intenta nuevamente.")}p(!1)}};return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"cart-overlay",onClick:()=>o(!1)}),f.jsxs("div",{className:"cart-drawer",children:[f.jsxs("div",{className:"cart-header",children:[f.jsx("h2",{children:"TU BOTÍN"}),f.jsx("button",{className:"cart-close",onClick:()=>o(!1),children:f.jsx(Od,{size:24})})]}),f.jsx("div",{className:"cart-items",children:t.length===0?f.jsxs("div",{className:"cart-empty",children:[f.jsx(zS,{size:48,className:"text-muted mx-auto mb-3"}),f.jsx("p",{children:"Tu botín está vacío, guerrero."}),f.jsx("button",{className:"btn-outline w-100 mt-4",onClick:()=>o(!1),children:"VOLVER A LA ARMERÍA"})]}):t.map(y=>f.jsxs("div",{className:"cart-item",children:[f.jsx("div",{className:"cart-item-img",style:{backgroundImage:`url(${y.image})`}}),f.jsxs("div",{className:"cart-item-details",children:[f.jsx("h4",{children:y.name}),f.jsxs("p",{className:"text-gold font-bold",children:["$",y.price]}),f.jsxs("div",{className:"cart-item-controls",children:[f.jsxs("div",{className:"quantity-ctrl",children:[f.jsx("button",{onClick:()=>n(y.id,y.quantity-1),children:"-"}),f.jsx("span",{children:y.quantity}),f.jsx("button",{onClick:()=>n(y.id,y.quantity+1),children:"+"})]}),f.jsx("button",{className:"remove-btn",onClick:()=>e(y.id),children:f.jsx(HS,{size:18})})]})]})]},y.id))}),t.length>0&&f.jsxs("div",{className:"cart-footer",children:[f.jsxs("div",{className:"cart-total",children:[f.jsx("span",{children:"Total del Botín:"}),f.jsxs("span",{className:"text-gold font-bold",children:["$",r]})]}),f.jsx("button",{className:"btn-primary w-100 mt-3 d-flex align-center justify-center gap-2",onClick:m,disabled:h,children:h?"PROCESANDO...":"RECLAMAR BOTÍN"}),f.jsx("p",{className:"text-muted text-center mt-2",style:{fontSize:"0.8rem"},children:"Finalizarás el pedido por WhatsApp directamente con La Tribu."})]})]})]})},KN=()=>{var R;const[t,e]=j.useState(!1),[n,r]=j.useState(!1),[i,s]=j.useState(!0),{currentUser:o,logout:l,isAuthModalOpen:u,setIsAuthModalOpen:h}=Uo(),{cartCount:p,setIsCartOpen:m}=gf();j.useEffect(()=>{localStorage.getItem("theme")==="light"&&(s(!1),document.documentElement.setAttribute("data-theme","light"))},[]);const y=()=>{const P=i?"light":"dark";s(!i),document.documentElement.setAttribute("data-theme",P),localStorage.setItem("theme",P)};return j.useEffect(()=>{const P=()=>e(window.scrollY>50);return window.addEventListener("scroll",P),()=>window.removeEventListener("scroll",P)},[]),j.useEffect(()=>{const P=()=>{window.innerWidth>768&&n&&r(!1)};return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[n]),f.jsxs(f.Fragment,{children:[f.jsx(GN,{isOpen:u,onClose:()=>h(!1)}),f.jsx(qN,{}),f.jsxs("nav",{className:`navbar ${t?"scrolled":""}`,children:[f.jsxs("div",{className:"navbar-container",children:[f.jsxs(Ti,{to:"/",className:"logo-container",children:[f.jsx(xd,{className:"logo-icon",size:32}),f.jsxs("span",{className:"logo-text",children:[f.jsx("span",{className:"logo-valhalla",children:"VALHALLA"}),f.jsx("span",{className:"logo-boxgym text-gold",children:"BOX GYM"})]})]}),f.jsxs("div",{className:"nav-links desktop-only",children:[f.jsx("a",{href:"/#philosophy",children:"La Tribu"}),f.jsx("a",{href:"/#services",children:"Entrenamiento"}),f.jsx("a",{href:"/#schedule",children:"Horarios"}),f.jsx("a",{href:"/#pricing",children:"Tarifas"}),f.jsx(Ti,{to:"/armeria",children:"Armería"}),f.jsx("button",{onClick:y,className:"theme-toggle-btn","aria-label":"Toggle Theme",children:i?f.jsx(Vm,{size:20}):f.jsx(Dm,{size:20})}),f.jsxs("button",{onClick:()=>m(!0),className:"cart-toggle-btn",children:[f.jsx(Lm,{size:20}),p>0&&f.jsx("span",{className:"cart-badge",children:p})]}),o?f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[f.jsx("span",{className:"text-gold",style:{fontSize:"0.9rem",fontWeight:"bold"},children:((R=o.displayName)==null?void 0:R.split(" ")[0])||"Guerrero"}),f.jsx("button",{onClick:l,className:"btn-outline nav-btn",style:{padding:"0.5rem 1rem",fontSize:"0.8rem"},children:"SALIR"})]}):f.jsx("button",{onClick:()=>h(!0),className:"btn-primary nav-btn",children:"Únete Ahora"})]}),f.jsxs("div",{className:"mobile-only",children:[f.jsxs("button",{onClick:()=>m(!0),className:"cart-toggle-btn",style:{marginRight:"0.5rem"},children:[f.jsx(Lm,{size:24}),p>0&&f.jsx("span",{className:"cart-badge",children:p})]}),f.jsx("button",{onClick:y,className:"theme-toggle-btn",children:i?f.jsx(Vm,{size:24}):f.jsx(Dm,{size:24})}),f.jsx("button",{className:"mobile-menu-btn",onClick:()=>r(!n),children:n?f.jsx(Od,{size:28}):f.jsx(FS,{size:28})})]})]}),n&&f.jsxs("div",{className:"mobile-menu",children:[f.jsx("a",{href:"/#philosophy",onClick:()=>r(!1),children:"La Tribu"}),f.jsx("a",{href:"/#services",onClick:()=>r(!1),children:"Entrenamiento"}),f.jsx("a",{href:"/#schedule",onClick:()=>r(!1),children:"Horarios"}),f.jsx("a",{href:"/#pricing",onClick:()=>r(!1),children:"Tarifas"}),f.jsx(Ti,{to:"/armeria",onClick:()=>r(!1),children:"Armería"}),o?f.jsx("button",{onClick:()=>{l(),r(!1)},className:"btn-outline mobile-btn",children:"SALIR DE LA CUENTA"}):f.jsx("button",{onClick:()=>{h(!0),r(!1)},className:"btn-primary mobile-btn",children:"Únete Ahora"})]})]})]})},QN="542317533963",JN="https://www.google.com/maps/search/Urquiza+671,+9+de+Julio,+Buenos+Aires,+Argentina",YN="https://www.instagram.com/valhallaboxgym",XN=()=>f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",className:"contact-icon",style:{color:"#25D366",flexShrink:0},children:f.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),ZN=()=>{const t=()=>{window.open(`https://wa.me/${QN}?text=${encodeURIComponent(`⚔️ ¡Skål! Me acerco desde las tierras del sur para conocer el Valhalla Box Gym.
Quiero más información sobre el salón de los guerreros. ¡Que Odin guíe mi camino! 🪓🛡️`)}`,"_blank")};return f.jsx("footer",{className:"footer-section",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"footer-grid",children:[f.jsxs("div",{className:"footer-brand",children:[f.jsxs("div",{className:"logo-container mb-4",children:[f.jsx(xd,{className:"logo-icon",size:32}),f.jsxs("span",{className:"logo-text",children:["VALHALLA ",f.jsx("span",{className:"text-gold",children:"BOX GYM"})]})]}),f.jsx("p",{className:"text-muted",children:"Forjando guerreros a través de disciplina, fuerza y comunidad."})]}),f.jsxs("div",{className:"footer-links",children:[f.jsx("h4",{children:"Navegación"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"#home",children:"Inicio"})}),f.jsx("li",{children:f.jsx("a",{href:"#philosophy",children:"La Tribu"})}),f.jsx("li",{children:f.jsx("a",{href:"#services",children:"Clases"})}),f.jsx("li",{children:f.jsx("a",{href:"#pricing",children:"Tarifas"})})]})]}),f.jsxs("div",{className:"footer-contact",children:[f.jsx("h4",{children:"Encuéntranos"}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx(US,{size:20,className:"contact-icon"}),f.jsx("a",{href:JN,target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"Urquiza 671, 9 de Julio (6500)"})]}),f.jsxs("li",{children:[f.jsx(XN,{}),f.jsx("button",{onClick:t,className:"contact-link contact-btn",children:"+54 2317 533963"})]}),f.jsxs("li",{children:[f.jsx(jS,{size:20,className:"contact-icon"}),f.jsx("a",{href:YN,target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"Instagram"})]})]})]})]}),f.jsx("div",{className:"footer-bottom",children:f.jsxs("p",{className:"text-muted",children:["© ",new Date().getFullYear()," Valhalla Box Gym. Todos los derechos reservados."]})})]})})},ex=()=>f.jsxs("section",{className:"hero-section",id:"home",children:[f.jsx("div",{className:"hero-overlay"}),f.jsxs("div",{className:"hero-content container",children:[f.jsxs("h1",{className:"hero-title animate-fade-in",children:["FORJA TU ",f.jsx("span",{className:"text-gold",children:"LEYENDA"}),".",f.jsx("br",{}),"ENTRENA COMO UN DIOS."]}),f.jsx("p",{className:"hero-subtitle animate-fade-in delay-100",children:"En Valhalla Box Gym no es solo sudor, es honor. Únete a la tribu definitiva de guerreros modernos."}),f.jsxs("div",{className:"hero-actions animate-fade-in delay-200",children:[f.jsx("a",{href:"/#pricing",className:"btn-primary",children:"TU CAMBIO COMIENZA HOY"}),f.jsx(Ti,{to:"/instalaciones",className:"btn-outline",children:"Ver Instalaciones"})]})]})]}),tx=()=>f.jsx("section",{className:"philosophy-section",id:"philosophy",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"philosophy-grid",children:[f.jsxs("div",{className:"philosophy-text",children:[f.jsxs("h2",{children:["NUESTRA ",f.jsx("span",{className:"text-gold",children:"FILOSOFÍA"})]}),f.jsx("div",{className:"divider"}),f.jsx("p",{children:'"En Valhalla Box Gym no solo entrenamos el cuerpo; forjamos el espíritu de guerrero. Creemos en la disciplina, el trabajo duro y la comunidad. Aquí no hay espejos de vanidad, solo acero, sudor y el sonido de progreso."'})]}),f.jsxs("div",{className:"philosophy-features",children:[f.jsxs("div",{className:"feature-item",children:[f.jsx("div",{className:"feature-icon",children:f.jsx(BS,{size:32})}),f.jsxs("div",{children:[f.jsx("h3",{children:"Honor & Respeto"}),f.jsx("p",{children:"Compite contigo mismo, respeta a tus hermanos de armas."})]})]}),f.jsxs("div",{className:"feature-item",children:[f.jsx("div",{className:"feature-icon",children:f.jsx($S,{size:32})}),f.jsxs("div",{children:[f.jsx("h3",{children:"Intensidad Real"}),f.jsx("p",{children:"Entrenamientos diseñados para desafiar tus límites físicos y mentales."})]})]}),f.jsxs("div",{className:"feature-item",children:[f.jsx("div",{className:"feature-icon",children:f.jsx(WS,{size:32})}),f.jsxs("div",{children:[f.jsx("h3",{children:"La Tribu"}),f.jsx("p",{children:"Apoyo constante de la comunidad para asegurar que nadie se quede atrás."})]})]})]})]})})}),nx=()=>{const t=[{id:1,title:"MUSCULACIÓN",image:"/assets/images/strength.png",description:"fuerza y desarrollo libre"},{id:2,title:"GAP",image:"/assets/images/functional.png",description:"glúteos, abdomen y piernas"},{id:3,title:"KICKBOXING",image:"/assets/images/striking.png",description:"combate y striking"}];return f.jsx("section",{className:"services-section",id:"services",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header text-center",children:[f.jsxs("h2",{children:["NUESTRAS ",f.jsx("span",{className:"text-gold",children:"DISCIPLINAS"})]}),f.jsx("p",{className:"subtitle",children:"ELIGE TU CAMPO DE BATALLA"})]}),f.jsx("div",{className:"services-grid",children:t.map(e=>f.jsxs("div",{className:"service-card",children:[f.jsx("div",{className:"service-image",style:{backgroundImage:`url(${e.image})`},children:f.jsx("div",{className:"service-overlay"})}),f.jsxs("div",{className:"service-content",children:[f.jsx("h3",{children:e.title}),f.jsx("p",{children:e.description})]})]},e.id))}),f.jsxs("div",{className:"services-cta text-center mt-5",children:[f.jsx("p",{className:"cta-text",children:"¿Listo para entrar al Valhalla? No dejes para mañana el guerrero que puedes ser hoy."}),f.jsx("a",{href:"#pricing",className:"btn-primary",style:{display:"inline-block",textDecoration:"none"},children:"VER TARIFAS"})]})]})})},rx=()=>f.jsx("section",{className:"about-section",id:"about",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"about-story",children:[f.jsxs("h2",{children:["EL ORIGEN DEL ",f.jsx("span",{className:"text-gold",children:"VALHALLA"})]}),f.jsx("div",{className:"divider mx-auto"}),f.jsx("p",{children:'Valhalla Box Gym nació de la pasión por el entrenamiento real. Cansados de los gimnasios comerciales donde pasas desapercibido entre máquinas de poleas, decidimos construir un verdadero "Bastión del Norte". Un lugar donde puedes gritar al levantar pesado, donde soltar barras no es un delito, y donde todos conocen tu nombre.'})]}),f.jsxs("div",{className:"jarls-section mt-5",children:[f.jsxs("h2",{className:"text-center mb-4",children:["NUESTROS ",f.jsx("span",{className:"text-gold",children:"JARLS"})]}),f.jsx("p",{className:"text-center subtitle mb-5",children:"LOS ENTRENADORES QUE TE GUIARÁN EN BATALLA"}),f.jsxs("div",{className:"trainers-grid",children:[f.jsxs("div",{className:"trainer-card",children:[f.jsx("div",{className:"trainer-img",style:{backgroundImage:"url('/assets/images/trainer.png')"}}),f.jsxs("div",{className:"trainer-info",children:[f.jsx("h3",{children:"NACHO"}),f.jsx("p",{className:"specialty",children:"Head Coach & Strength"}),f.jsx("p",{className:"quote",children:'"El hierro no miente. Te da exactamente lo que le entregas."'})]})]}),f.jsxs("div",{className:"trainer-card",children:[f.jsx("div",{className:"trainer-img",style:{backgroundImage:"url('/assets/images/lautaro.png')"}}),f.jsxs("div",{className:"trainer-info",children:[f.jsx("h3",{children:"LAUTARO"}),f.jsx("p",{className:"specialty",children:"Functional & Agility"}),f.jsx("p",{className:"quote",children:'"La motivación es temporal. La disciplina te hace leyenda."'})]})]}),f.jsxs("div",{className:"trainer-card",children:[f.jsx("div",{className:"trainer-img",style:{backgroundImage:"url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop')"}}),f.jsxs("div",{className:"trainer-info",children:[f.jsx("h3",{children:"SANTINO"}),f.jsx("p",{className:"specialty",children:"Striking Specialist"}),f.jsx("p",{className:"quote",children:'"Entrena tan duro que la vida real parezca fácil."'})]})]})]})]})]})}),ix=()=>{const[t,e]=j.useState("All"),n=[{day:"Lunes",time:"08:00 AM",name:"MUSCULACIÓN",trainer:"Lautaro",type:"Musculación"},{day:"Lunes",time:"13:00 PM",name:"GAP",trainer:"Nacho",type:"GAP"},{day:"Lunes",time:"19:00 PM",name:"MUSCULACIÓN",trainer:"Santino",type:"Musculación"},{day:"Martes",time:"08:00 AM",name:"MUSCULACIÓN",trainer:"Lautaro",type:"Musculación"},{day:"Martes",time:"13:00 PM",name:"GAP",trainer:"Nacho",type:"GAP"},{day:"Martes",time:"20:00 PM",name:"KICKBOXING",trainer:"Nacho",type:"Kickboxing"},{day:"Miércoles",time:"08:00 AM",name:"MUSCULACIÓN",trainer:"Lautaro",type:"Musculación"},{day:"Miércoles",time:"13:00 PM",name:"GAP",trainer:"Nacho",type:"GAP"},{day:"Miércoles",time:"19:00 PM",name:"MUSCULACIÓN",trainer:"Santino",type:"Musculación"},{day:"Jueves",time:"08:00 AM",name:"MUSCULACIÓN",trainer:"Lautaro",type:"Musculación"},{day:"Jueves",time:"13:00 PM",name:"GAP",trainer:"Nacho",type:"GAP"},{day:"Jueves",time:"20:00 PM",name:"KICKBOXING",trainer:"Nacho",type:"Kickboxing"},{day:"Viernes",time:"08:00 AM",name:"MUSCULACIÓN",trainer:"Lautaro",type:"Musculación"},{day:"Viernes",time:"13:00 PM",name:"GAP",trainer:"Nacho",type:"GAP"},{day:"Viernes",time:"19:00 PM",name:"MUSCULACIÓN",trainer:"Santino",type:"Musculación"}],r=["All","Musculación","GAP","Kickboxing"],i=t==="All"?n:n.filter(s=>s.type===t);return f.jsx("section",{className:"schedule-section",id:"schedule",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header text-center",children:[f.jsxs("h2",{children:["HORARIOS DE ",f.jsx("span",{className:"text-gold",children:"BATALLA"})]}),f.jsx("p",{className:"subtitle",children:"PREPÁRATE PARA LA ACCIÓN"})]}),f.jsx("div",{className:"filter-container",children:r.map(s=>f.jsx("button",{className:`filter-btn ${t===s?"active":""}`,onClick:()=>e(s),children:s==="All"?"TODAS":s.toUpperCase()},s))}),f.jsxs("div",{className:"schedule-table-container",children:[f.jsxs("table",{className:"schedule-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Día"}),f.jsx("th",{children:"Hora"}),f.jsx("th",{children:"Clase"}),f.jsx("th",{children:"Entrenador"}),f.jsx("th",{children:"Acción"})]})}),f.jsx("tbody",{children:i.map((s,o)=>f.jsxs("tr",{children:[f.jsx("td",{className:"font-bold",children:s.day}),f.jsx("td",{className:"text-gold",children:s.time}),f.jsx("td",{children:s.name}),f.jsx("td",{className:"text-muted",children:s.trainer}),f.jsx("td",{children:f.jsx("button",{className:"book-btn",children:"RESERVAR"})})]},o))})]}),i.length===0&&f.jsx("div",{className:"text-center mt-4 text-muted",children:"No hay clases programadas para este filtro."})]})]})})},sx="542317533963",ox=[{id:"escaldo",name:"ESCALDO",desc:"Solo la planilla de entrenamiento",price:"15.000",period:"/mes",features:["Planilla de entrenamiento semanal","Guía de ejercicios en PDF","Acceso al grupo de guerreros"],btnClass:"btn-outline",popular:!1},{id:"guerrero",name:"GUERRERO",desc:"Para los que inician su camino",price:"25.000",period:"/mes",features:["3 Clases por semana","Acceso a zona funcional","Plan básico de introducción"],btnClass:"btn-outline",popular:!1},{id:"vikingo",name:"VIKINGO",desc:"Para los guerreros consistentes",price:"32.000",period:"/mes",features:["Clases ILIMITADAS","Acceso libre al box","Acceso a talleres mensuales","1 Evaluación física al mes"],btnClass:"btn-primary",popular:!0},{id:"berserker",name:"BERSERKER",desc:"Dedicación absoluta",price:"42.000",period:"/mes",features:["Todo el Plan Vikingo","2 Sesiones Personales/mes","Plan nutricional adaptado","Recuperación (masaje mensual)"],btnClass:"btn-outline",popular:!1}],ax=()=>{const{currentUser:t,setIsAuthModalOpen:e}=Uo(),n=r=>{if(!t){e(!0);return}const s=`⚔️ ¡Skål! Soy ${t.displayName||"Guerrero"}, guerrero del Valhalla Box Gym.
He decidido forjar mi camino con el plan *${r.name}* ($${r.price}/mes).

¡Que Odin guíe mi entrenamiento y Mjolnir forje mi fuerza! 🪓🛡️`,o=`https://wa.me/${sx}?text=${encodeURIComponent(s)}`;window.open(o,"_blank")};return f.jsx("section",{className:"pricing-section",id:"pricing",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header text-center",children:[f.jsxs("h2",{children:["INGRESO AL ",f.jsx("span",{className:"text-gold",children:"SALÓN"})]}),f.jsx("p",{className:"subtitle",children:"ELIGE TU TRIBUTO"})]}),f.jsx("div",{className:"pricing-grid pricing-grid-4",children:ox.map(r=>f.jsxs("div",{className:`pricing-card plan-${r.id}${r.popular?" popular":""}`,children:[r.popular&&f.jsx("div",{className:"popular-badge",children:"RECOMENDADA"}),f.jsxs("div",{className:"pricing-card-left",children:[f.jsx("h3",{children:r.name}),f.jsx("p",{className:"plan-desc",children:r.desc}),f.jsxs("div",{className:"price",children:[f.jsx("span",{className:"currency",children:"$"}),f.jsx("span",{className:"amount",children:r.price}),f.jsx("span",{className:"period",children:r.period})]}),f.jsx("button",{className:`${r.btnClass} w-100`,onClick:()=>n(r),children:"SELECCIONAR"})]}),f.jsxs("div",{className:"pricing-card-right",children:[f.jsx("ul",{className:"plan-features",children:r.features.map((i,s)=>f.jsxs("li",{children:[f.jsx(bS,{size:20,className:"check-icon"})," ",i]},s))}),f.jsx("button",{className:`${r.btnClass} w-100 seleccionar-mobile`,onClick:()=>n(r),children:"SELECCIONAR"})]})]},r.id))}),f.jsxs("div",{className:"faq-section mt-5",children:[f.jsx("h3",{className:"text-center mb-4",children:"Preguntas Frecuentes"}),f.jsxs("div",{className:"faq-grid",children:[f.jsxs("div",{className:"faq-item",children:[f.jsx("h4",{children:"¿Hay cuota de inscripción (matrícula)?"}),f.jsx("p",{className:"text-muted",children:"No. Creemos en la transparencia. Pagas lo que usas, sin cargos ocultos."})]}),f.jsxs("div",{className:"faq-item",children:[f.jsx("h4",{children:"¿Puedo cancelar en cualquier momento?"}),f.jsx("p",{className:"text-muted",children:"Sí, puedes cancelar tu membresía con un aviso de 15 días antes del próximo ciclo de facturación."})]})]})]})]})})},lx=()=>f.jsxs(f.Fragment,{children:[f.jsx(ex,{}),f.jsx(tx,{}),f.jsx(nx,{}),f.jsx(rx,{}),f.jsx(ix,{}),f.jsx(ax,{})]}),ux=()=>{j.useEffect(()=>{window.scrollTo(0,0)},[]);const t=[{id:1,image:"/assets/images/facility_weights.png",title:"ZONA DE HIERRO Y FUERZA",desc:"Donde se forjan los verdaderos levantamientos."},{id:2,image:"/assets/images/facility_functional.png",title:"ZONA FUNCIONAL",desc:"Espacio abierto para WODs, saltos, y velocidad."},{id:3,image:"/assets/images/facility_striking.png",title:"ZONA DE STRIKING",desc:"Equipamiento pesado para deportes de contacto."}];return f.jsxs("div",{className:"facilities-page",children:[f.jsxs("div",{className:"facilities-header",children:[f.jsx("div",{className:"facilities-overlay"}),f.jsxs("div",{className:"container relative z-10 text-center pt-24 pb-12",children:[f.jsxs(Ti,{to:"/",className:"back-link",children:[f.jsx(I_,{size:20})," Volver a Inicio"]}),f.jsxs("h1",{className:"page-title mt-4",children:["NUESTRAS ",f.jsx("span",{className:"text-gold",children:"INSTALACIONES"})]}),f.jsx("p",{className:"page-subtitle",children:"El terreno sagrado donde las leyendas sudan y sangran."})]})]}),f.jsx("div",{className:"container py-12",children:f.jsx("div",{className:"facilities-gallery",children:t.map(e=>f.jsxs("div",{className:"facility-card",children:[f.jsx("div",{className:"facility-image",style:{backgroundImage:`url(${e.image})`}}),f.jsxs("div",{className:"facility-info",children:[f.jsx("h3",{children:e.title}),f.jsx("p",{children:e.desc})]})]},e.id))})})]})},cx=()=>{const{addToCart:t}=gf(),{currentUser:e,setIsAuthModalOpen:n}=Uo();j.useEffect(()=>{window.scrollTo(0,0)},[]);const r=[{id:1,name:"Camiseta Berserker Oversize",price:"15000",tag:"Más Vendido",image:"/assets/images/products/tshirt.png"},{id:2,name:"Musculosa Stringer Valhalla",price:"14000",tag:"Entrenamiento",image:"/assets/images/products/tanktop.png"},{id:3,name:"Pantalón Corto Táctico",price:"25000",tag:"Nuevo",image:"/assets/images/products/shorts.png"},{id:4,name:"Jogger de Fuerza (Pantalón Largo)",price:"32000",tag:"Invierno",image:"/assets/images/products/joggers.png"}],i=s=>{if(!e){n(!0);return}t({...s,price:parseFloat(s.price)})};return f.jsxs("div",{className:"armeria-page",children:[f.jsxs("div",{className:"armeria-header",children:[f.jsx("div",{className:"armeria-overlay"}),f.jsxs("div",{className:"container relative z-10 text-center pt-24 pb-12",children:[f.jsxs(Ti,{to:"/",className:"back-link",children:[f.jsx(I_,{size:20})," Volver a Inicio"]}),f.jsxs("h1",{className:"page-title mt-4",children:["LA ",f.jsx("span",{className:"text-gold",children:"ARMERÍA"})]}),f.jsx("p",{className:"page-subtitle",children:"VÍSTETE PARA LA BATALLA. PIEL DE BERSERKER PARA GUERREROS MODERNOS."})]})]}),f.jsx("div",{className:"container py-12",children:f.jsx("div",{className:"armeria-grid",children:r.map(s=>f.jsxs("div",{className:"product-card",children:[f.jsx("div",{className:"product-image-container",children:f.jsx("img",{src:s.image,alt:s.name,className:"product-image"})}),f.jsxs("div",{className:"product-info",children:[f.jsx("span",{className:"product-tag",children:s.tag}),f.jsx("h3",{children:s.name}),f.jsxs("p",{className:"product-price text-gold",children:["$",s.price]}),f.jsx("button",{className:"btn-outline product-btn",onClick:()=>i(s),children:"Agregar al Botín"})]})]},s.id))})})]})};function hx(){return f.jsx(HN,{children:f.jsx(WN,{children:f.jsxs("div",{className:"app-container",children:[f.jsx(KN,{}),f.jsxs(SS,{children:[f.jsx(La,{path:"/",element:f.jsx(lx,{})}),f.jsx(La,{path:"/instalaciones",element:f.jsx(ux,{})}),f.jsx(La,{path:"/armeria",element:f.jsx(cx,{})})]}),f.jsx(ZN,{})]})})})}yc.createRoot(document.getElementById("root")).render(f.jsx(uy.StrictMode,{children:f.jsx(xS,{children:f.jsx(hx,{})})}));
