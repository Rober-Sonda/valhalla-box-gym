function iw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ey={exports:{}},bl={},ty={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),ow=Symbol.for("react.portal"),aw=Symbol.for("react.fragment"),lw=Symbol.for("react.strict_mode"),uw=Symbol.for("react.profiler"),cw=Symbol.for("react.provider"),hw=Symbol.for("react.context"),dw=Symbol.for("react.forward_ref"),fw=Symbol.for("react.suspense"),pw=Symbol.for("react.memo"),mw=Symbol.for("react.lazy"),gp=Symbol.iterator;function gw(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var ny={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ry=Object.assign,iy={};function $i(t,e,n){this.props=t,this.context=e,this.refs=iy,this.updater=n||ny}$i.prototype.isReactComponent={};$i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sy(){}sy.prototype=$i.prototype;function Vh(t,e,n){this.props=t,this.context=e,this.refs=iy,this.updater=n||ny}var Mh=Vh.prototype=new sy;Mh.constructor=Vh;ry(Mh,$i.prototype);Mh.isPureReactComponent=!0;var yp=Array.isArray,oy=Object.prototype.hasOwnProperty,bh={current:null},ay={key:!0,ref:!0,__self:!0,__source:!0};function ly(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)oy.call(e,r)&&!ay.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:To,type:t,key:s,ref:o,props:i,_owner:bh.current}}function yw(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function vw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function Lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vw(""+t.key):e.toString(36)}function Sa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case To:case ow:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Lu(o,0):r,yp(i)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),Sa(i,e,n,"",function(h){return h})):i!=null&&(jh(i)&&(i=yw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Lu(s,l);o+=Sa(s,e,n,u,i)}else if(u=gw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Lu(s,l++),o+=Sa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zo(t,e,n){if(t==null)return t;var r=[],i=0;return Sa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _w(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},Aa={transition:null},Ew={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:bh};function uy(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Zo,forEach:function(t,e,n){Zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zo(t,function(){e++}),e},toArray:function(t){return Zo(t,function(e){return e})||[]},only:function(t){if(!jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=$i;X.Fragment=aw;X.Profiler=uw;X.PureComponent=Vh;X.StrictMode=lw;X.Suspense=fw;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ew;X.act=uy;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ry({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)oy.call(e,u)&&!ay.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:To,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:hw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cw,_context:t},t.Consumer=t};X.createElement=ly;X.createFactory=function(t){var e=ly.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:dw,render:t}};X.isValidElement=jh;X.lazy=function(t){return{$$typeof:mw,_payload:{_status:-1,_result:t},_init:_w}};X.memo=function(t,e){return{$$typeof:pw,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=Aa.transition;Aa.transition={};try{t()}finally{Aa.transition=e}};X.unstable_act=uy;X.useCallback=function(t,e){return it.current.useCallback(t,e)};X.useContext=function(t){return it.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return it.current.useDeferredValue(t)};X.useEffect=function(t,e){return it.current.useEffect(t,e)};X.useId=function(){return it.current.useId()};X.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return it.current.useMemo(t,e)};X.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};X.useRef=function(t){return it.current.useRef(t)};X.useState=function(t){return it.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return it.current.useTransition()};X.version="18.3.1";ty.exports=X;var b=ty.exports;const cy=sw(b),ww=iw({__proto__:null,default:cy},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tw=b,Iw=Symbol.for("react.element"),Sw=Symbol.for("react.fragment"),Aw=Object.prototype.hasOwnProperty,Cw=Tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kw={key:!0,ref:!0,__self:!0,__source:!0};function hy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Aw.call(e,r)&&!kw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Iw,type:t,key:s,ref:o,props:i,_owner:Cw.current}}bl.Fragment=Sw;bl.jsx=hy;bl.jsxs=hy;ey.exports=bl;var f=ey.exports,vc={},dy={exports:{}},Et={},fy={exports:{}},py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var Q=B.length;B.push(q);e:for(;0<Q;){var ce=Q-1>>>1,we=B[ce];if(0<i(we,q))B[ce]=q,B[Q]=we,Q=ce;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var q=B[0],Q=B.pop();if(Q!==q){B[0]=Q;e:for(var ce=0,we=B.length,mr=we>>>1;ce<mr;){var Tt=2*(ce+1)-1,gr=B[Tt],Nt=Tt+1,kn=B[Nt];if(0>i(gr,Q))Nt<we&&0>i(kn,gr)?(B[ce]=kn,B[Nt]=Q,ce=Nt):(B[ce]=gr,B[Tt]=Q,ce=Tt);else if(Nt<we&&0>i(kn,Q))B[ce]=kn,B[Nt]=Q,ce=Nt;else break e}}return q}function i(B,q){var Q=B.sortIndex-q.sortIndex;return Q!==0?Q:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,y=3,k=!1,R=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=B)r(h),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(h)}}function L(B){if(P=!1,A(B),!R)if(n(u)!==null)R=!0,Xi(U);else{var q=n(h);q!==null&&Zi(L,q.startTime-B)}}function U(B,q){R=!1,P&&(P=!1,I(v),v=-1),k=!0;var Q=y;try{for(A(q),m=n(u);m!==null&&(!(m.expirationTime>q)||B&&!C());){var ce=m.callback;if(typeof ce=="function"){m.callback=null,y=m.priorityLevel;var we=ce(m.expirationTime<=q);q=t.unstable_now(),typeof we=="function"?m.callback=we:m===n(u)&&r(u),A(q)}else r(u);m=n(u)}if(m!==null)var mr=!0;else{var Tt=n(h);Tt!==null&&Zi(L,Tt.startTime-q),mr=!1}return mr}finally{m=null,y=Q,k=!1}}var F=!1,E=null,v=-1,w=5,S=-1;function C(){return!(t.unstable_now()-S<w)}function N(){if(E!==null){var B=t.unstable_now();S=B;var q=!0;try{q=E(!0,B)}finally{q?T():(F=!1,E=null)}}else F=!1}var T;if(typeof _=="function")T=function(){_(N)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,nn=Ve.port2;Ve.port1.onmessage=N,T=function(){nn.postMessage(null)}}else T=function(){D(N,0)};function Xi(B){E=B,F||(F=!0,T())}function Zi(B,q){v=D(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||k||(R=!0,Xi(U))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var Q=y;y=q;try{return B()}finally{y=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=y;y=B;try{return q()}finally{y=Q}},t.unstable_scheduleCallback=function(B,q,Q){var ce=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ce+Q:ce):Q=ce,B){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=Q+we,B={id:p++,callback:q,priorityLevel:B,startTime:Q,expirationTime:we,sortIndex:-1},Q>ce?(B.sortIndex=Q,e(h,B),n(u)===null&&B===n(h)&&(P?(I(v),v=-1):P=!0,Zi(L,Q-ce))):(B.sortIndex=we,e(u,B),R||k||(R=!0,Xi(U))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var q=y;return function(){var Q=y;y=q;try{return B.apply(this,arguments)}finally{y=Q}}}})(py);fy.exports=py;var Rw=fy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pw=b,_t=Rw;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var my=new Set,Qs={};function Gr(t,e){Pi(t,e),Pi(t+"Capture",e)}function Pi(t,e){for(Qs[t]=e,t=0;t<e.length;t++)my.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,Nw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_p={},Ep={};function xw(t){return _c.call(Ep,t)?!0:_c.call(_p,t)?!1:Nw.test(t)?Ep[t]=!0:(_p[t]=!0,!1)}function Ow(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dw(t,e,n,r){if(e===null||typeof e>"u"||Ow(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function Fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uh,Fh);Be[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uh,Fh);Be[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uh,Fh);Be[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function zh(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dw(e,n,i,r)&&(n=null),r||i===null?xw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=Pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),ii=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),Ec=Symbol.for("react.profiler"),gy=Symbol.for("react.provider"),yy=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),Tc=Symbol.for("react.suspense_list"),Hh=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),vy=Symbol.for("react.offscreen"),wp=Symbol.iterator;function gs(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Vu;function Cs(t){if(Vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vu=e&&e[1]||""}return`
`+Vu+t}var Mu=!1;function bu(t,e){if(!t||Mu)return"";Mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Cs(t):""}function Lw(t){switch(t.tag){case 5:return Cs(t.type);case 16:return Cs("Lazy");case 13:return Cs("Suspense");case 19:return Cs("SuspenseList");case 0:case 2:case 15:return t=bu(t.type,!1),t;case 11:return t=bu(t.type.render,!1),t;case 1:return t=bu(t.type,!0),t;default:return""}}function Ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case si:return"Fragment";case ii:return"Portal";case Ec:return"Profiler";case Bh:return"StrictMode";case wc:return"Suspense";case Tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yy:return(t.displayName||"Context")+".Consumer";case gy:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hh:return e=t.displayName||null,e!==null?e:Ic(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return Ic(t(e))}catch{}}return null}function Vw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ic(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _y(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mw(t){var e=_y(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ta(t){t._valueTracker||(t._valueTracker=Mw(t))}function Ey(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_y(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sc(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wy(t,e){e=e.checked,e!=null&&zh(t,"checked",e,!1)}function Ac(t,e){wy(t,e);var n=ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cc(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cc(t,e,n){(e!=="number"||Ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ks=Array.isArray;function gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(ks(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function Ty(t,e){var n=ir(e.value),r=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ap(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var na,Sy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bw=["Webkit","ms","Moz","O"];Object.keys(Ds).forEach(function(t){bw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ds[e]=Ds[t]})});function Ay(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ds.hasOwnProperty(t)&&Ds[t]?(""+e).trim():e+"px"}function Cy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ay(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jw=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(t,e){if(e){if(jw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Nc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function Wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oc=null,yi=null,vi=null;function Cp(t){if(t=Ao(t)){if(typeof Oc!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Bl(e),Oc(t.stateNode,t.type,e))}}function ky(t){yi?vi?vi.push(t):vi=[t]:yi=t}function Ry(){if(yi){var t=yi,e=vi;if(vi=yi=null,Cp(t),e)for(t=0;t<e.length;t++)Cp(e[t])}}function Py(t,e){return t(e)}function Ny(){}var ju=!1;function xy(t,e,n){if(ju)return t(e,n);ju=!0;try{return Py(t,e,n)}finally{ju=!1,(yi!==null||vi!==null)&&(Ny(),Ry())}}function Ys(t,e){var n=t.stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Dc=!1;if(yn)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Dc=!1}function Uw(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Ls=!1,qa=null,Ka=!1,Lc=null,Fw={onError:function(t){Ls=!0,qa=t}};function zw(t,e,n,r,i,s,o,l,u){Ls=!1,qa=null,Uw.apply(Fw,arguments)}function Bw(t,e,n,r,i,s,o,l,u){if(zw.apply(this,arguments),Ls){if(Ls){var h=qa;Ls=!1,qa=null}else throw Error(j(198));Ka||(Ka=!0,Lc=h)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Oy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kp(t){if(qr(t)!==t)throw Error(j(188))}function $w(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kp(i),t;if(s===r)return kp(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Dy(t){return t=$w(t),t!==null?Ly(t):null}function Ly(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ly(t);if(e!==null)return e;t=t.sibling}return null}var Vy=_t.unstable_scheduleCallback,Rp=_t.unstable_cancelCallback,Hw=_t.unstable_shouldYield,Ww=_t.unstable_requestPaint,Te=_t.unstable_now,Gw=_t.unstable_getCurrentPriorityLevel,Gh=_t.unstable_ImmediatePriority,My=_t.unstable_UserBlockingPriority,Qa=_t.unstable_NormalPriority,qw=_t.unstable_LowPriority,by=_t.unstable_IdlePriority,jl=null,Jt=null;function Kw(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Yw,Qw=Math.log,Jw=Math.LN2;function Yw(t){return t>>>=0,t===0?32:31-(Qw(t)/Jw|0)|0}var ra=64,ia=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Rs(l):(s&=o,s!==0&&(r=Rs(s)))}else o=n&~i,o!==0?r=Rs(o):s!==0&&(r=Rs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function Xw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=Xw(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Vc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jy(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function eT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function Uy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fy,Kh,zy,By,$y,Mc=!1,sa=[],Wn=null,Gn=null,qn=null,Xs=new Map,Zs=new Map,Un=[],tT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,e){switch(t){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Xs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ao(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nT(t,e,n,r,i){switch(e){case"focusin":return Wn=vs(Wn,t,e,n,r,i),!0;case"dragenter":return Gn=vs(Gn,t,e,n,r,i),!0;case"mouseover":return qn=vs(qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xs.set(s,vs(Xs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zs.set(s,vs(Zs.get(s)||null,t,e,n,r,i)),!0}return!1}function Hy(t){var e=Ar(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=Oy(n),e!==null){t.blockedOn=e,$y(t.priority,function(){zy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return e=Ao(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Np(t,e,n){Ca(t)&&n.delete(e)}function rT(){Mc=!1,Wn!==null&&Ca(Wn)&&(Wn=null),Gn!==null&&Ca(Gn)&&(Gn=null),qn!==null&&Ca(qn)&&(qn=null),Xs.forEach(Np),Zs.forEach(Np)}function _s(t,e){t.blockedOn===e&&(t.blockedOn=null,Mc||(Mc=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,rT)))}function eo(t){function e(i){return _s(i,t)}if(0<sa.length){_s(sa[0],t);for(var n=1;n<sa.length;n++){var r=sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wn!==null&&_s(Wn,t),Gn!==null&&_s(Gn,t),qn!==null&&_s(qn,t),Xs.forEach(e),Zs.forEach(e),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Hy(n),n.blockedOn===null&&Un.shift()}var _i=Sn.ReactCurrentBatchConfig,Ya=!0;function iT(t,e,n,r){var i=re,s=_i.transition;_i.transition=null;try{re=1,Qh(t,e,n,r)}finally{re=i,_i.transition=s}}function sT(t,e,n,r){var i=re,s=_i.transition;_i.transition=null;try{re=4,Qh(t,e,n,r)}finally{re=i,_i.transition=s}}function Qh(t,e,n,r){if(Ya){var i=bc(t,e,n,r);if(i===null)Qu(t,e,r,Xa,n),Pp(t,r);else if(nT(i,t,e,n,r))r.stopPropagation();else if(Pp(t,r),e&4&&-1<tT.indexOf(t)){for(;i!==null;){var s=Ao(i);if(s!==null&&Fy(s),s=bc(t,e,n,r),s===null&&Qu(t,e,r,Xa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qu(t,e,r,null,n)}}var Xa=null;function bc(t,e,n,r){if(Xa=null,t=Wh(r),t=Ar(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Oy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xa=t,null}function Wy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gw()){case Gh:return 1;case My:return 4;case Qa:case qw:return 16;case by:return 536870912;default:return 16}default:return 16}}var Bn=null,Jh=null,ka=null;function Gy(){if(ka)return ka;var t,e=Jh,n=e.length,r,i="value"in Bn?Bn.value:Bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ka=i.slice(t,1<r?1-r:void 0)}function Ra(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function xp(){return!1}function wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:xp,this.isPropagationStopped=xp,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=wt(Hi),So=ye({},Hi,{view:0,detail:0}),oT=wt(So),Fu,zu,Es,Ul=ye({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Es&&(Es&&t.type==="mousemove"?(Fu=t.screenX-Es.screenX,zu=t.screenY-Es.screenY):zu=Fu=0,Es=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Op=wt(Ul),aT=ye({},Ul,{dataTransfer:0}),lT=wt(aT),uT=ye({},So,{relatedTarget:0}),Bu=wt(uT),cT=ye({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),hT=wt(cT),dT=ye({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fT=wt(dT),pT=ye({},Hi,{data:0}),Dp=wt(pT),mT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yT[t])?!!e[t]:!1}function Xh(){return vT}var _T=ye({},So,{key:function(t){if(t.key){var e=mT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?Ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ET=wt(_T),wT=ye({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=wt(wT),TT=ye({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),IT=wt(TT),ST=ye({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),AT=wt(ST),CT=ye({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kT=wt(CT),RT=[9,13,27,32],Zh=yn&&"CompositionEvent"in window,Vs=null;yn&&"documentMode"in document&&(Vs=document.documentMode);var PT=yn&&"TextEvent"in window&&!Vs,qy=yn&&(!Zh||Vs&&8<Vs&&11>=Vs),Vp=" ",Mp=!1;function Ky(t,e){switch(t){case"keyup":return RT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oi=!1;function NT(t,e){switch(t){case"compositionend":return Qy(e);case"keypress":return e.which!==32?null:(Mp=!0,Vp);case"textInput":return t=e.data,t===Vp&&Mp?null:t;default:return null}}function xT(t,e){if(oi)return t==="compositionend"||!Zh&&Ky(t,e)?(t=Gy(),ka=Jh=Bn=null,oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qy&&e.locale!=="ko"?null:e.data;default:return null}}var OT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OT[t.type]:e==="textarea"}function Jy(t,e,n,r){ky(r),e=Za(e,"onChange"),0<e.length&&(n=new Yh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ms=null,to=null;function DT(t){av(t,0)}function Fl(t){var e=ui(t);if(Ey(e))return t}function LT(t,e){if(t==="change")return e}var Yy=!1;if(yn){var $u;if(yn){var Hu="oninput"in document;if(!Hu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Hu=typeof jp.oninput=="function"}$u=Hu}else $u=!1;Yy=$u&&(!document.documentMode||9<document.documentMode)}function Up(){Ms&&(Ms.detachEvent("onpropertychange",Xy),to=Ms=null)}function Xy(t){if(t.propertyName==="value"&&Fl(to)){var e=[];Jy(e,to,t,Wh(t)),xy(DT,e)}}function VT(t,e,n){t==="focusin"?(Up(),Ms=e,to=n,Ms.attachEvent("onpropertychange",Xy)):t==="focusout"&&Up()}function MT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(to)}function bT(t,e){if(t==="click")return Fl(e)}function jT(t,e){if(t==="input"||t==="change")return Fl(e)}function UT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:UT;function no(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_c.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,e){var n=Fp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fp(n)}}function Zy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ev(){for(var t=window,e=Ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ga(t.document)}return e}function ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FT(t){var e=ev(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zy(n.ownerDocument.documentElement,n)){if(r!==null&&ed(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zp(n,s);var o=zp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zT=yn&&"documentMode"in document&&11>=document.documentMode,ai=null,jc=null,bs=null,Uc=!1;function Bp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uc||ai==null||ai!==Ga(r)||(r=ai,"selectionStart"in r&&ed(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bs&&no(bs,r)||(bs=r,r=Za(jc,"onSelect"),0<r.length&&(e=new Yh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ai)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var li={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Wu={},tv={};yn&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function zl(t){if(Wu[t])return Wu[t];if(!li[t])return t;var e=li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tv)return Wu[t]=e[n];return t}var nv=zl("animationend"),rv=zl("animationiteration"),iv=zl("animationstart"),sv=zl("transitionend"),ov=new Map,$p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){ov.set(t,e),Gr(e,[t])}for(var Gu=0;Gu<$p.length;Gu++){var qu=$p[Gu],BT=qu.toLowerCase(),$T=qu[0].toUpperCase()+qu.slice(1);cr(BT,"on"+$T)}cr(nv,"onAnimationEnd");cr(rv,"onAnimationIteration");cr(iv,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(sv,"onTransitionEnd");Pi("onMouseEnter",["mouseout","mouseover"]);Pi("onMouseLeave",["mouseout","mouseover"]);Pi("onPointerEnter",["pointerout","pointerover"]);Pi("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));function Hp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Bw(r,e,void 0,t),t.currentTarget=null}function av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Hp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Hp(i,l,h),s=u}}}if(Ka)throw t=Lc,Ka=!1,Lc=null,t}function le(t,e){var n=e[Hc];n===void 0&&(n=e[Hc]=new Set);var r=t+"__bubble";n.has(r)||(lv(e,t,2,!1),n.add(r))}function Ku(t,e,n){var r=0;e&&(r|=4),lv(n,t,r,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[la]){t[la]=!0,my.forEach(function(n){n!=="selectionchange"&&(HT.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[la]||(e[la]=!0,Ku("selectionchange",!1,e))}}function lv(t,e,n,r){switch(Wy(e)){case 1:var i=iT;break;case 4:i=sT;break;default:i=Qh}n=i.bind(null,e,n,t),i=void 0,!Dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ar(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}xy(function(){var h=s,p=Wh(n),m=[];e:{var y=ov.get(t);if(y!==void 0){var k=Yh,R=t;switch(t){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":k=ET;break;case"focusin":R="focus",k=Bu;break;case"focusout":R="blur",k=Bu;break;case"beforeblur":case"afterblur":k=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=lT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=IT;break;case nv:case rv:case iv:k=hT;break;case sv:k=AT;break;case"scroll":k=oT;break;case"wheel":k=kT;break;case"copy":case"cut":case"paste":k=fT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Lp}var P=(e&4)!==0,D=!P&&t==="scroll",I=P?y!==null?y+"Capture":null:y;P=[];for(var _=h,A;_!==null;){A=_;var L=A.stateNode;if(A.tag===5&&L!==null&&(A=L,I!==null&&(L=Ys(_,I),L!=null&&P.push(io(_,L,A)))),D)break;_=_.return}0<P.length&&(y=new k(y,R,null,n,p),m.push({event:y,listeners:P}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",y&&n!==xc&&(R=n.relatedTarget||n.fromElement)&&(Ar(R)||R[vn]))break e;if((k||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,k?(R=n.relatedTarget||n.toElement,k=h,R=R?Ar(R):null,R!==null&&(D=qr(R),R!==D||R.tag!==5&&R.tag!==6)&&(R=null)):(k=null,R=h),k!==R)){if(P=Op,L="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Lp,L="onPointerLeave",I="onPointerEnter",_="pointer"),D=k==null?y:ui(k),A=R==null?y:ui(R),y=new P(L,_+"leave",k,n,p),y.target=D,y.relatedTarget=A,L=null,Ar(p)===h&&(P=new P(I,_+"enter",R,n,p),P.target=A,P.relatedTarget=D,L=P),D=L,k&&R)t:{for(P=k,I=R,_=0,A=P;A;A=ti(A))_++;for(A=0,L=I;L;L=ti(L))A++;for(;0<_-A;)P=ti(P),_--;for(;0<A-_;)I=ti(I),A--;for(;_--;){if(P===I||I!==null&&P===I.alternate)break t;P=ti(P),I=ti(I)}P=null}else P=null;k!==null&&Wp(m,y,k,P,!1),R!==null&&D!==null&&Wp(m,D,R,P,!0)}}e:{if(y=h?ui(h):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var U=LT;else if(bp(y))if(Yy)U=jT;else{U=MT;var F=VT}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=bT);if(U&&(U=U(t,h))){Jy(m,U,n,p);break e}F&&F(t,y,h),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&Cc(y,"number",y.value)}switch(F=h?ui(h):window,t){case"focusin":(bp(F)||F.contentEditable==="true")&&(ai=F,jc=h,bs=null);break;case"focusout":bs=jc=ai=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Bp(m,n,p);break;case"selectionchange":if(zT)break;case"keydown":case"keyup":Bp(m,n,p)}var E;if(Zh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else oi?Ky(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(qy&&n.locale!=="ko"&&(oi||v!=="onCompositionStart"?v==="onCompositionEnd"&&oi&&(E=Gy()):(Bn=p,Jh="value"in Bn?Bn.value:Bn.textContent,oi=!0)),F=Za(h,v),0<F.length&&(v=new Dp(v,t,null,n,p),m.push({event:v,listeners:F}),E?v.data=E:(E=Qy(n),E!==null&&(v.data=E)))),(E=PT?NT(t,n):xT(t,n))&&(h=Za(h,"onBeforeInput"),0<h.length&&(p=new Dp("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=E))}av(m,e)})}function io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Za(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ys(t,n),s!=null&&r.unshift(io(t,s,i)),s=Ys(t,e),s!=null&&r.push(io(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Ys(n,s),u!=null&&o.unshift(io(n,u,l))):i||(u=Ys(n,s),u!=null&&o.push(io(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var WT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function Gp(t){return(typeof t=="string"?t:""+t).replace(WT,`
`).replace(GT,"")}function ua(t,e,n){if(e=Gp(e),Gp(t)!==e&&n)throw Error(j(425))}function el(){}var Fc=null,zc=null;function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,qT=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,KT=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(t){return qp.resolve(null).then(t).catch(QT)}:$c;function QT(t){setTimeout(function(){throw t})}function Ju(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);eo(e)}function Kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wi=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Wi,so="__reactProps$"+Wi,vn="__reactContainer$"+Wi,Hc="__reactEvents$"+Wi,JT="__reactListeners$"+Wi,YT="__reactHandles$"+Wi;function Ar(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kp(t);t!==null;){if(n=t[Qt])return n;t=Kp(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Qt]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Bl(t){return t[so]||null}var Wc=[],ci=-1;function hr(t){return{current:t}}function ue(t){0>ci||(t.current=Wc[ci],Wc[ci]=null,ci--)}function se(t,e){ci++,Wc[ci]=t.current,t.current=e}var sr={},Ye=hr(sr),ct=hr(!1),Lr=sr;function Ni(t,e){var n=t.type.contextTypes;if(!n)return sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function tl(){ue(ct),ue(Ye)}function Qp(t,e,n){if(Ye.current!==sr)throw Error(j(168));se(Ye,e),se(ct,n)}function uv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,Vw(t)||"Unknown",i));return ye({},n,r)}function nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Lr=Ye.current,se(Ye,t),se(ct,ct.current),!0}function Jp(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=uv(t,e,Lr),r.__reactInternalMemoizedMergedChildContext=t,ue(ct),ue(Ye),se(Ye,t)):ue(ct),se(ct,n)}var sn=null,$l=!1,Yu=!1;function cv(t){sn===null?sn=[t]:sn.push(t)}function XT(t){$l=!0,cv(t)}function dr(){if(!Yu&&sn!==null){Yu=!0;var t=0,e=re;try{var n=sn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sn=null,$l=!1}catch(i){throw sn!==null&&(sn=sn.slice(t+1)),Vy(Gh,dr),i}finally{re=e,Yu=!1}}return null}var hi=[],di=0,rl=null,il=0,It=[],St=0,Vr=null,un=1,cn="";function Tr(t,e){hi[di++]=il,hi[di++]=rl,rl=t,il=e}function hv(t,e,n){It[St++]=un,It[St++]=cn,It[St++]=Vr,Vr=t;var r=un;t=cn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,un=1<<32-Ft(e)+i|n<<i|r,cn=s+t}else un=1<<s|n<<i|r,cn=t}function td(t){t.return!==null&&(Tr(t,1),hv(t,1,0))}function nd(t){for(;t===rl;)rl=hi[--di],hi[di]=null,il=hi[--di],hi[di]=null;for(;t===Vr;)Vr=It[--St],It[St]=null,cn=It[--St],It[St]=null,un=It[--St],It[St]=null}var vt=null,yt=null,de=!1,Lt=null;function dv(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,yt=Kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,yt=null,!0):!1;default:return!1}}function Gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qc(t){if(de){var e=yt;if(e){var n=e;if(!Yp(t,e)){if(Gc(t))throw Error(j(418));e=Kn(n.nextSibling);var r=vt;e&&Yp(t,e)?dv(r,n):(t.flags=t.flags&-4097|2,de=!1,vt=t)}}else{if(Gc(t))throw Error(j(418));t.flags=t.flags&-4097|2,de=!1,vt=t}}}function Xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function ca(t){if(t!==vt)return!1;if(!de)return Xp(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bc(t.type,t.memoizedProps)),e&&(e=yt)){if(Gc(t))throw fv(),Error(j(418));for(;e;)dv(t,e),e=Kn(e.nextSibling)}if(Xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yt=Kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yt=null}}else yt=vt?Kn(t.stateNode.nextSibling):null;return!0}function fv(){for(var t=yt;t;)t=Kn(t.nextSibling)}function xi(){yt=vt=null,de=!1}function rd(t){Lt===null?Lt=[t]:Lt.push(t)}var ZT=Sn.ReactCurrentBatchConfig;function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zp(t){var e=t._init;return e(t._payload)}function pv(t){function e(I,_){if(t){var A=I.deletions;A===null?(I.deletions=[_],I.flags|=16):A.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=Xn(I,_),I.index=0,I.sibling=null,I}function s(I,_,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<_?(I.flags|=2,_):A):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,A,L){return _===null||_.tag!==6?(_=ic(A,I.mode,L),_.return=I,_):(_=i(_,A),_.return=I,_)}function u(I,_,A,L){var U=A.type;return U===si?p(I,_,A.props.children,L,A.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===bn&&Zp(U)===_.type)?(L=i(_,A.props),L.ref=ws(I,_,A),L.return=I,L):(L=Va(A.type,A.key,A.props,null,I.mode,L),L.ref=ws(I,_,A),L.return=I,L)}function h(I,_,A,L){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=sc(A,I.mode,L),_.return=I,_):(_=i(_,A.children||[]),_.return=I,_)}function p(I,_,A,L,U){return _===null||_.tag!==7?(_=xr(A,I.mode,L,U),_.return=I,_):(_=i(_,A),_.return=I,_)}function m(I,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ic(""+_,I.mode,A),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ea:return A=Va(_.type,_.key,_.props,null,I.mode,A),A.ref=ws(I,null,_),A.return=I,A;case ii:return _=sc(_,I.mode,A),_.return=I,_;case bn:var L=_._init;return m(I,L(_._payload),A)}if(ks(_)||gs(_))return _=xr(_,I.mode,A,null),_.return=I,_;ha(I,_)}return null}function y(I,_,A,L){var U=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return U!==null?null:l(I,_,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ea:return A.key===U?u(I,_,A,L):null;case ii:return A.key===U?h(I,_,A,L):null;case bn:return U=A._init,y(I,_,U(A._payload),L)}if(ks(A)||gs(A))return U!==null?null:p(I,_,A,L,null);ha(I,A)}return null}function k(I,_,A,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(A)||null,l(_,I,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ea:return I=I.get(L.key===null?A:L.key)||null,u(_,I,L,U);case ii:return I=I.get(L.key===null?A:L.key)||null,h(_,I,L,U);case bn:var F=L._init;return k(I,_,A,F(L._payload),U)}if(ks(L)||gs(L))return I=I.get(A)||null,p(_,I,L,U,null);ha(_,L)}return null}function R(I,_,A,L){for(var U=null,F=null,E=_,v=_=0,w=null;E!==null&&v<A.length;v++){E.index>v?(w=E,E=null):w=E.sibling;var S=y(I,E,A[v],L);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(I,E),_=s(S,_,v),F===null?U=S:F.sibling=S,F=S,E=w}if(v===A.length)return n(I,E),de&&Tr(I,v),U;if(E===null){for(;v<A.length;v++)E=m(I,A[v],L),E!==null&&(_=s(E,_,v),F===null?U=E:F.sibling=E,F=E);return de&&Tr(I,v),U}for(E=r(I,E);v<A.length;v++)w=k(E,I,v,A[v],L),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?v:w.key),_=s(w,_,v),F===null?U=w:F.sibling=w,F=w);return t&&E.forEach(function(C){return e(I,C)}),de&&Tr(I,v),U}function P(I,_,A,L){var U=gs(A);if(typeof U!="function")throw Error(j(150));if(A=U.call(A),A==null)throw Error(j(151));for(var F=U=null,E=_,v=_=0,w=null,S=A.next();E!==null&&!S.done;v++,S=A.next()){E.index>v?(w=E,E=null):w=E.sibling;var C=y(I,E,S.value,L);if(C===null){E===null&&(E=w);break}t&&E&&C.alternate===null&&e(I,E),_=s(C,_,v),F===null?U=C:F.sibling=C,F=C,E=w}if(S.done)return n(I,E),de&&Tr(I,v),U;if(E===null){for(;!S.done;v++,S=A.next())S=m(I,S.value,L),S!==null&&(_=s(S,_,v),F===null?U=S:F.sibling=S,F=S);return de&&Tr(I,v),U}for(E=r(I,E);!S.done;v++,S=A.next())S=k(E,I,v,S.value,L),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),_=s(S,_,v),F===null?U=S:F.sibling=S,F=S);return t&&E.forEach(function(N){return e(I,N)}),de&&Tr(I,v),U}function D(I,_,A,L){if(typeof A=="object"&&A!==null&&A.type===si&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case ea:e:{for(var U=A.key,F=_;F!==null;){if(F.key===U){if(U=A.type,U===si){if(F.tag===7){n(I,F.sibling),_=i(F,A.props.children),_.return=I,I=_;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===bn&&Zp(U)===F.type){n(I,F.sibling),_=i(F,A.props),_.ref=ws(I,F,A),_.return=I,I=_;break e}n(I,F);break}else e(I,F);F=F.sibling}A.type===si?(_=xr(A.props.children,I.mode,L,A.key),_.return=I,I=_):(L=Va(A.type,A.key,A.props,null,I.mode,L),L.ref=ws(I,_,A),L.return=I,I=L)}return o(I);case ii:e:{for(F=A.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(I,_.sibling),_=i(_,A.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=sc(A,I.mode,L),_.return=I,I=_}return o(I);case bn:return F=A._init,D(I,_,F(A._payload),L)}if(ks(A))return R(I,_,A,L);if(gs(A))return P(I,_,A,L);ha(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,A),_.return=I,I=_):(n(I,_),_=ic(A,I.mode,L),_.return=I,I=_),o(I)):n(I,_)}return D}var Oi=pv(!0),mv=pv(!1),sl=hr(null),ol=null,fi=null,id=null;function sd(){id=fi=ol=null}function od(t){var e=sl.current;ue(sl),t._currentValue=e}function Kc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ei(t,e){ol=t,id=fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(id!==t)if(t={context:t,memoizedValue:e,next:null},fi===null){if(ol===null)throw Error(j(308));fi=t,ol.dependencies={lanes:0,firstContext:t}}else fi=fi.next=t;return e}var Cr=null;function ad(t){Cr===null?Cr=[t]:Cr.push(t)}function gv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ad(e)):(n.next=i.next,i.next=n),e.interleaved=n,_n(t,r)}function _n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jn=!1;function ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_n(t,n)}return i=r.interleaved,i===null?(e.next=e,ad(r)):(e.next=i.next,i.next=e),r.interleaved=e,_n(t,n)}function Pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qh(t,n)}}function em(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function al(t,e,n,r){var i=t.updateQueue;jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=h=u=null,l=s;do{var y=l.lane,k=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(y=e,k=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){m=R.call(k,m,y);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,y=typeof R=="function"?R.call(k,m,y):R,y==null)break e;m=ye({},m,y);break e;case 2:jn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=k,u=m):p=p.next=k,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=m}}function tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Co={},Yt=hr(Co),oo=hr(Co),ao=hr(Co);function kr(t){if(t===Co)throw Error(j(174));return t}function ud(t,e){switch(se(ao,e),se(oo,t),se(Yt,Co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rc(e,t)}ue(Yt),se(Yt,e)}function Di(){ue(Yt),ue(oo),ue(ao)}function vv(t){kr(ao.current);var e=kr(Yt.current),n=Rc(e,t.type);e!==n&&(se(oo,t),se(Yt,n))}function cd(t){oo.current===t&&(ue(Yt),ue(oo))}var pe=hr(0);function ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function hd(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var Na=Sn.ReactCurrentDispatcher,Zu=Sn.ReactCurrentBatchConfig,Mr=0,ge=null,Re=null,Oe=null,ul=!1,js=!1,lo=0,eI=0;function He(){throw Error(j(321))}function dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function fd(t,e,n,r,i,s){if(Mr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?iI:sI,t=n(r,i),js){s=0;do{if(js=!1,lo=0,25<=s)throw Error(j(301));s+=1,Oe=Re=null,e.updateQueue=null,Na.current=oI,t=n(r,i)}while(js)}if(Na.current=cl,e=Re!==null&&Re.next!==null,Mr=0,Oe=Re=ge=null,ul=!1,e)throw Error(j(300));return t}function pd(){var t=lo!==0;return lo=0,t}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ge.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Rt(){if(Re===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=Oe===null?ge.memoizedState:Oe.next;if(e!==null)Oe=e,Re=t;else{if(t===null)throw Error(j(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Oe===null?ge.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function uo(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=Rt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var p=h.lane;if((Mr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ge.lanes|=p,br|=p}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=Rt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _v(){}function Ev(t,e){var n=ge,r=Rt(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,md(Iv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,co(9,Tv.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(j(349));Mr&30||wv(n,e,i)}return i}function wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tv(t,e,n,r){e.value=n,e.getSnapshot=r,Sv(e)&&Av(t)}function Iv(t,e,n){return n(function(){Sv(e)&&Av(t)})}function Sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function Av(t){var e=_n(t,1);e!==null&&zt(e,t,1,-1)}function nm(t){var e=qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:t},e.queue=t,t=t.dispatch=rI.bind(null,ge,t),[e.memoizedState,t]}function co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Cv(){return Rt().memoizedState}function xa(t,e,n,r){var i=qt();ge.flags|=t,i.memoizedState=co(1|e,n,void 0,r===void 0?null:r)}function Hl(t,e,n,r){var i=Rt();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&dd(r,o.deps)){i.memoizedState=co(e,n,s,r);return}}ge.flags|=t,i.memoizedState=co(1|e,n,s,r)}function rm(t,e){return xa(8390656,8,t,e)}function md(t,e){return Hl(2048,8,t,e)}function kv(t,e){return Hl(4,2,t,e)}function Rv(t,e){return Hl(4,4,t,e)}function Pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nv(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,Pv.bind(null,e,t),n)}function gd(){}function xv(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ov(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dv(t,e,n){return Mr&21?($t(n,e)||(n=jy(),ge.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function tI(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Zu.transition;Zu.transition={};try{t(!1),e()}finally{re=n,Zu.transition=r}}function Lv(){return Rt().memoizedState}function nI(t,e,n){var r=Yn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vv(t))Mv(e,n);else if(n=gv(t,e,n,r),n!==null){var i=nt();zt(n,t,r,i),bv(n,e,r)}}function rI(t,e,n){var r=Yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vv(t))Mv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,ad(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=gv(t,e,i,r),n!==null&&(i=nt(),zt(n,t,r,i),bv(n,e,r))}}function Vv(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function Mv(t,e){js=ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qh(t,n)}}var cl={readContext:kt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},iI={readContext:kt,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xa(4194308,4,Pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return xa(4,2,t,e)},useMemo:function(t,e){var n=qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nI.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:nm,useDebugValue:gd,useDeferredValue:function(t){return qt().memoizedState=t},useTransition:function(){var t=nm(!1),e=t[0];return t=tI.bind(null,t[1]),qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=qt();if(de){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Le===null)throw Error(j(349));Mr&30||wv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rm(Iv.bind(null,r,s,t),[t]),r.flags|=2048,co(9,Tv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qt(),e=Le.identifierPrefix;if(de){var n=cn,r=un;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sI={readContext:kt,useCallback:xv,useContext:kt,useEffect:md,useImperativeHandle:Nv,useInsertionEffect:kv,useLayoutEffect:Rv,useMemo:Ov,useReducer:ec,useRef:Cv,useState:function(){return ec(uo)},useDebugValue:gd,useDeferredValue:function(t){var e=Rt();return Dv(e,Re.memoizedState,t)},useTransition:function(){var t=ec(uo)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:_v,useSyncExternalStore:Ev,useId:Lv,unstable_isNewReconciler:!1},oI={readContext:kt,useCallback:xv,useContext:kt,useEffect:md,useImperativeHandle:Nv,useInsertionEffect:kv,useLayoutEffect:Rv,useMemo:Ov,useReducer:tc,useRef:Cv,useState:function(){return tc(uo)},useDebugValue:gd,useDeferredValue:function(t){var e=Rt();return Re===null?e.memoizedState=t:Dv(e,Re.memoizedState,t)},useTransition:function(){var t=tc(uo)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:_v,useSyncExternalStore:Ev,useId:Lv,unstable_isNewReconciler:!1};function Ot(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=Yn(t),s=fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qn(t,s,i),e!==null&&(zt(e,t,i,r),Pa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=Yn(t),s=fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qn(t,s,i),e!==null&&(zt(e,t,i,r),Pa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=Yn(t),i=fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qn(t,i,r),e!==null&&(zt(e,t,r,n),Pa(e,t,r))}};function im(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!no(n,r)||!no(i,s):!0}function jv(t,e,n){var r=!1,i=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=ht(e)?Lr:Ye.current,r=e.contextTypes,s=(r=r!=null)?Ni(t,i):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function Jc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ld(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=ht(e)?Lr:Ye.current,i.context=Ni(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wl.enqueueReplaceState(i,i.state,null),al(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Li(t,e){try{var n="",r=e;do n+=Lw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aI=typeof WeakMap=="function"?WeakMap:Map;function Uv(t,e,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dl||(dl=!0,ah=r),Yc(t,e)},n}function Fv(t,e,n){n=fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yc(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function om(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wI.bind(null,t,e,n),e.then(t,t))}function am(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fn(-1,1),e.tag=2,Qn(n,e,1))),n.lanes|=1),t)}var lI=Sn.ReactCurrentOwner,ut=!1;function tt(t,e,n,r){e.child=t===null?mv(e,null,n,r):Oi(e,t.child,n,r)}function um(t,e,n,r,i){n=n.render;var s=e.ref;return Ei(e,i),r=fd(t,e,n,r,s,i),n=pd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(de&&n&&td(e),e.flags|=1,tt(t,e,r,i),e.child)}function cm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zv(t,e,s,r,i)):(t=Va(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function zv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(no(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,En(t,e,i)}return Xc(t,e,n,r,i)}function Bv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(mi,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(mi,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(mi,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(mi,mt),mt|=r;return tt(t,e,i,n),e.child}function $v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xc(t,e,n,r,i){var s=ht(n)?Lr:Ye.current;return s=Ni(e,s),Ei(e,i),n=fd(t,e,n,r,s,i),r=pd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(de&&r&&td(e),e.flags|=1,tt(t,e,n,i),e.child)}function hm(t,e,n,r,i){if(ht(n)){var s=!0;nl(e)}else s=!1;if(Ei(e,i),e.stateNode===null)Oa(t,e),jv(e,n,r),Jc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=kt(h):(h=ht(n)?Lr:Ye.current,h=Ni(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&sm(e,o,r,h),jn=!1;var y=e.memoizedState;o.state=y,al(e,r,o,i),u=e.memoizedState,l!==r||y!==u||ct.current||jn?(typeof p=="function"&&(Qc(e,n,p,r),u=e.memoizedState),(l=jn||im(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ot(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=kt(u):(u=ht(n)?Lr:Ye.current,u=Ni(e,u));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&sm(e,o,r,u),jn=!1,y=e.memoizedState,o.state=y,al(e,r,o,i);var R=e.memoizedState;l!==m||y!==R||ct.current||jn?(typeof k=="function"&&(Qc(e,n,k,r),R=e.memoizedState),(h=jn||im(e,n,h,r,y,R,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Zc(t,e,n,r,s,i)}function Zc(t,e,n,r,i,s){$v(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jp(e,n,!1),En(t,e,s);r=e.stateNode,lI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oi(e,t.child,null,s),e.child=Oi(e,null,l,s)):tt(t,e,l,s),e.memoizedState=r.state,i&&Jp(e,n,!0),e.child}function Hv(t){var e=t.stateNode;e.pendingContext?Qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qp(t,e.context,!1),ud(t,e.containerInfo)}function dm(t,e,n,r,i){return xi(),rd(i),e.flags|=256,tt(t,e,n,r),e.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wv(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(pe,i&1),t===null)return qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,r,0,null),t=xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=th(n),e.memoizedState=eh,t):yd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Xn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Xn(l,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=eh,r}return s=t.child,t=s.sibling,r=Xn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yd(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,r){return r!==null&&rd(r),Oi(e,t.child,null,n),t=yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nc(Error(j(422))),da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Kl({mode:"visible",children:r.children},i,0,null),s=xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oi(e,t.child,null,o),e.child.memoizedState=th(o),e.memoizedState=eh,s);if(!(e.mode&1))return da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=nc(s,r,void 0),da(t,e,o,r)}if(l=(o&t.childLanes)!==0,ut||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_n(t,i),zt(r,t,i,-1))}return Id(),r=nc(Error(j(421))),da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=TI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,yt=Kn(i.nextSibling),vt=e,de=!0,Lt=null,t!==null&&(It[St++]=un,It[St++]=cn,It[St++]=Vr,un=t.id,cn=t.overflow,Vr=e),e=yd(e,r.children),e.flags|=4096,e)}function fm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kc(t.return,e,n)}function rc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fm(t,n,e);else if(t.tag===19)fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ll(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ll(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rc(e,!0,n,null,s);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cI(t,e,n){switch(e.tag){case 3:Hv(e),xi();break;case 5:vv(e);break;case 1:ht(e.type)&&nl(e);break;case 4:ud(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(sl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?Wv(t,e,n):(se(pe,pe.current&1),t=En(t,e,n),t!==null?t.sibling:null);se(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Gv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Bv(t,e,n)}return En(t,e,n)}var qv,nh,Kv,Qv;qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nh=function(){};Kv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kr(Yt.current);var s=null;switch(n){case"input":i=Sc(t,i),r=Sc(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=kc(t,i),r=kc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=el)}Pc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Qs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&le("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Qv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ts(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hI(t,e,n){var r=e.pendingProps;switch(nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return ht(e.type)&&tl(),We(e),null;case 3:return r=e.stateNode,Di(),ue(ct),ue(Ye),hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Lt!==null&&(ch(Lt),Lt=null))),nh(t,e),We(e),null;case 5:cd(e);var i=kr(ao.current);if(n=e.type,t!==null&&e.stateNode!=null)Kv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return We(e),null}if(t=kr(Yt.current),ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[so]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Ps.length;i++)le(Ps[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Tp(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Sp(r,s),le("invalid",r)}Pc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",""+l]):Qs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":ta(r),Ip(r,s,!0);break;case"textarea":ta(r),Ap(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=el)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[so]=r,qv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nc(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ps.length;i++)le(Ps[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":Tp(t,r),i=Sc(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),le("invalid",t);break;case"textarea":Sp(t,r),i=kc(t,r),le("invalid",t);break;default:i=r}Pc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Cy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Sy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Js(t,u):typeof u=="number"&&Js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&le("scroll",t):u!=null&&zh(t,s,u,o))}switch(n){case"input":ta(t),Ip(t,r,!1);break;case"textarea":ta(t),Ap(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)Qv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=kr(ao.current),kr(Yt.current),ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return We(e),null;case 13:if(ue(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&yt!==null&&e.mode&1&&!(e.flags&128))fv(),xi(),e.flags|=98560,s=!1;else if(s=ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Qt]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else Lt!==null&&(ch(Lt),Lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Pe===0&&(Pe=3):Id())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Di(),nh(t,e),t===null&&ro(e.stateNode.containerInfo),We(e),null;case 10:return od(e.type._context),We(e),null;case 17:return ht(e.type)&&tl(),We(e),null;case 19:if(ue(pe),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ts(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ll(t),o!==null){for(e.flags|=128,Ts(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Vi&&(e.flags|=128,r=!0,Ts(s,!1),e.lanes=4194304)}else{if(!r)if(t=ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return We(e),null}else 2*Te()-s.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,Ts(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=pe.current,se(pe,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return Td(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function dI(t,e){switch(nd(e),e.tag){case 1:return ht(e.type)&&tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(),ue(ct),ue(Ye),hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cd(e),null;case 13:if(ue(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(pe),null;case 4:return Di(),null;case 10:return od(e.type._context),null;case 22:case 23:return Td(),null;case 24:return null;default:return null}}var fa=!1,Ke=!1,fI=typeof WeakSet=="function"?WeakSet:Set,$=null;function pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function rh(t,e,n){try{n()}catch(r){_e(t,e,r)}}var pm=!1;function pI(t,e){if(Fc=Ya,t=ev(),ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,y=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(k=m.firstChild)!==null;)y=m,m=k;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++p===r&&(u=o),(k=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zc={focusedElem:t,selectionRange:n},Ya=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,D=R.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?P:Ot(e.type,P),D);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(L){_e(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=pm,pm=!1,R}function Us(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rh(e,n,s)}i=i.next}while(i!==r)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jv(t){var e=t.alternate;e!==null&&(t.alternate=null,Jv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[so],delete e[Hc],delete e[JT],delete e[YT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yv(t){return t.tag===5||t.tag===3||t.tag===4}function mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=el));else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}function oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(oh(t,e,n),t=t.sibling;t!==null;)oh(t,e,n),t=t.sibling}var Me=null,Dt=!1;function Ln(t,e,n){for(n=n.child;n!==null;)Xv(t,e,n),n=n.sibling}function Xv(t,e,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Ke||pi(n,e);case 6:var r=Me,i=Dt;Me=null,Ln(t,e,n),Me=r,Dt=i,Me!==null&&(Dt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Dt?(t=Me,n=n.stateNode,t.nodeType===8?Ju(t.parentNode,n):t.nodeType===1&&Ju(t,n),eo(t)):Ju(Me,n.stateNode));break;case 4:r=Me,i=Dt,Me=n.stateNode.containerInfo,Dt=!0,Ln(t,e,n),Me=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rh(n,e,o),i=i.next}while(i!==r)}Ln(t,e,n);break;case 1:if(!Ke&&(pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}Ln(t,e,n);break;case 21:Ln(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Ln(t,e,n),Ke=r):Ln(t,e,n);break;default:Ln(t,e,n)}}function gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fI),e.forEach(function(r){var i=II.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Dt=!1;break e;case 3:Me=l.stateNode.containerInfo,Dt=!0;break e;case 4:Me=l.stateNode.containerInfo,Dt=!0;break e}l=l.return}if(Me===null)throw Error(j(160));Xv(s,o,i),Me=null,Dt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){_e(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zv(e,t),e=e.sibling}function Zv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),Gt(t),r&4){try{Us(3,t,t.return),Gl(3,t)}catch(P){_e(t,t.return,P)}try{Us(5,t,t.return)}catch(P){_e(t,t.return,P)}}break;case 1:xt(e,t),Gt(t),r&512&&n!==null&&pi(n,n.return);break;case 5:if(xt(e,t),Gt(t),r&512&&n!==null&&pi(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(P){_e(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&wy(i,s),Nc(l,o);var h=Nc(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Cy(i,m):p==="dangerouslySetInnerHTML"?Sy(i,m):p==="children"?Js(i,m):zh(i,p,m,h)}switch(l){case"input":Ac(i,s);break;case"textarea":Ty(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?gi(i,!!s.multiple,k,!1):y!==!!s.multiple&&(s.defaultValue!=null?gi(i,!!s.multiple,s.defaultValue,!0):gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[so]=s}catch(P){_e(t,t.return,P)}}break;case 6:if(xt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){_e(t,t.return,P)}}break;case 3:if(xt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(P){_e(t,t.return,P)}break;case 4:xt(e,t),Gt(t);break;case 13:xt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ed=Te())),r&4&&gm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(h=Ke)||p,xt(e,t),Ke=h):xt(e,t),Gt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for($=t,p=t.child;p!==null;){for(m=$=p;$!==null;){switch(y=$,k=y.child,y.tag){case 0:case 11:case 14:case 15:Us(4,y,y.return);break;case 1:pi(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){_e(r,n,P)}}break;case 5:pi(y,y.return);break;case 22:if(y.memoizedState!==null){vm(m);continue}}k!==null?(k.return=y,$=k):vm(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ay("display",o))}catch(P){_e(t,t.return,P)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){_e(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:xt(e,t),Gt(t),r&4&&gm(t);break;case 21:break;default:xt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yv(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var s=mm(t);oh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=mm(t);sh(t,l,o);break;default:throw Error(j(161))}}catch(u){_e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mI(t,e,n){$=t,e_(t)}function e_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ke;l=fa;var h=Ke;if(fa=o,(Ke=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?_m(i):u!==null?(u.return=o,$=u):_m(i);for(;s!==null;)$=s,e_(s),s=s.sibling;$=i,fa=l,Ke=h}ym(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):ym(t)}}function ym(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||Gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ot(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&eo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Ke||e.flags&512&&ih(e)}catch(y){_e(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function vm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function _m(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(u){_e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){_e(e,i,u)}}var s=e.return;try{ih(e)}catch(u){_e(e,s,u)}break;case 5:var o=e.return;try{ih(e)}catch(u){_e(e,o,u)}}}catch(u){_e(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var gI=Math.ceil,hl=Sn.ReactCurrentDispatcher,vd=Sn.ReactCurrentOwner,Ct=Sn.ReactCurrentBatchConfig,te=0,Le=null,Se=null,Fe=0,mt=0,mi=hr(0),Pe=0,ho=null,br=0,ql=0,_d=0,Fs=null,lt=null,Ed=0,Vi=1/0,rn=null,dl=!1,ah=null,Jn=null,pa=!1,$n=null,fl=0,zs=0,lh=null,Da=-1,La=0;function nt(){return te&6?Te():Da!==-1?Da:Da=Te()}function Yn(t){return t.mode&1?te&2&&Fe!==0?Fe&-Fe:ZT.transition!==null?(La===0&&(La=jy()),La):(t=re,t!==0||(t=window.event,t=t===void 0?16:Wy(t.type)),t):1}function zt(t,e,n,r){if(50<zs)throw zs=0,lh=null,Error(j(185));Io(t,n,r),(!(te&2)||t!==Le)&&(t===Le&&(!(te&2)&&(ql|=n),Pe===4&&Fn(t,Fe)),dt(t,r),n===1&&te===0&&!(e.mode&1)&&(Vi=Te()+500,$l&&dr()))}function dt(t,e){var n=t.callbackNode;Zw(t,e);var r=Ja(t,t===Le?Fe:0);if(r===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?XT(Em.bind(null,t)):cv(Em.bind(null,t)),KT(function(){!(te&6)&&dr()}),n=null;else{switch(Uy(r)){case 1:n=Gh;break;case 4:n=My;break;case 16:n=Qa;break;case 536870912:n=by;break;default:n=Qa}n=l_(n,t_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t_(t,e){if(Da=-1,La=0,te&6)throw Error(j(327));var n=t.callbackNode;if(wi()&&t.callbackNode!==n)return null;var r=Ja(t,t===Le?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pl(t,r);else{e=r;var i=te;te|=2;var s=r_();(Le!==t||Fe!==e)&&(rn=null,Vi=Te()+500,Nr(t,e));do try{_I();break}catch(l){n_(t,l)}while(!0);sd(),hl.current=s,te=i,Se!==null?e=0:(Le=null,Fe=0,e=Pe)}if(e!==0){if(e===2&&(i=Vc(t),i!==0&&(r=i,e=uh(t,i))),e===1)throw n=ho,Nr(t,0),Fn(t,r),dt(t,Te()),n;if(e===6)Fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!yI(i)&&(e=pl(t,r),e===2&&(s=Vc(t),s!==0&&(r=s,e=uh(t,s))),e===1))throw n=ho,Nr(t,0),Fn(t,r),dt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Ir(t,lt,rn);break;case 3:if(Fn(t,r),(r&130023424)===r&&(e=Ed+500-Te(),10<e)){if(Ja(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$c(Ir.bind(null,t,lt,rn),e);break}Ir(t,lt,rn);break;case 4:if(Fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gI(r/1960))-r,10<r){t.timeoutHandle=$c(Ir.bind(null,t,lt,rn),r);break}Ir(t,lt,rn);break;case 5:Ir(t,lt,rn);break;default:throw Error(j(329))}}}return dt(t,Te()),t.callbackNode===n?t_.bind(null,t):null}function uh(t,e){var n=Fs;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=pl(t,e),t!==2&&(e=lt,lt=n,e!==null&&ch(e)),t}function ch(t){lt===null?lt=t:lt.push.apply(lt,t)}function yI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fn(t,e){for(e&=~_d,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function Em(t){if(te&6)throw Error(j(327));wi();var e=Ja(t,0);if(!(e&1))return dt(t,Te()),null;var n=pl(t,e);if(t.tag!==0&&n===2){var r=Vc(t);r!==0&&(e=r,n=uh(t,r))}if(n===1)throw n=ho,Nr(t,0),Fn(t,e),dt(t,Te()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,lt,rn),dt(t,Te()),null}function wd(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(Vi=Te()+500,$l&&dr())}}function jr(t){$n!==null&&$n.tag===0&&!(te&6)&&wi();var e=te;te|=1;var n=Ct.transition,r=re;try{if(Ct.transition=null,re=1,t)return t()}finally{re=r,Ct.transition=n,te=e,!(te&6)&&dr()}}function Td(){mt=mi.current,ue(mi)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qT(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(nd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:Di(),ue(ct),ue(Ye),hd();break;case 5:cd(r);break;case 4:Di();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:od(r.type._context);break;case 22:case 23:Td()}n=n.return}if(Le=t,Se=t=Xn(t.current,null),Fe=mt=e,Pe=0,ho=null,_d=ql=br=0,lt=Fs=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Cr=null}return t}function n_(t,e){do{var n=Se;try{if(sd(),Na.current=cl,ul){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ul=!1}if(Mr=0,Oe=Re=ge=null,js=!1,lo=0,vd.current=null,n===null||n.return===null){Pe=1,ho=e,Se=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Fe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=am(o);if(k!==null){k.flags&=-257,lm(k,o,l,s,e),k.mode&1&&om(s,h,e),e=k,u=h;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){om(s,h,e),Id();break e}u=Error(j(426))}}else if(de&&l.mode&1){var D=am(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),lm(D,o,l,s,e),rd(Li(u,l));break e}}s=u=Li(u,l),Pe!==4&&(Pe=2),Fs===null?Fs=[s]:Fs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Uv(s,u,e);em(s,I);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Jn===null||!Jn.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=Fv(s,l,e);em(s,L);break e}}s=s.return}while(s!==null)}s_(n)}catch(U){e=U,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function r_(){var t=hl.current;return hl.current=cl,t===null?cl:t}function Id(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Le===null||!(br&268435455)&&!(ql&268435455)||Fn(Le,Fe)}function pl(t,e){var n=te;te|=2;var r=r_();(Le!==t||Fe!==e)&&(rn=null,Nr(t,e));do try{vI();break}catch(i){n_(t,i)}while(!0);if(sd(),te=n,hl.current=r,Se!==null)throw Error(j(261));return Le=null,Fe=0,Pe}function vI(){for(;Se!==null;)i_(Se)}function _I(){for(;Se!==null&&!Hw();)i_(Se)}function i_(t){var e=a_(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?s_(t):Se=e,vd.current=null}function s_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dI(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Se=null;return}}else if(n=hI(n,e,mt),n!==null){Se=n;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);Pe===0&&(Pe=5)}function Ir(t,e,n){var r=re,i=Ct.transition;try{Ct.transition=null,re=1,EI(t,e,n,r)}finally{Ct.transition=i,re=r}return null}function EI(t,e,n,r){do wi();while($n!==null);if(te&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eT(t,s),t===Le&&(Se=Le=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pa||(pa=!0,l_(Qa,function(){return wi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=re;re=1;var l=te;te|=4,vd.current=null,pI(t,n),Zv(n,t),FT(zc),Ya=!!Fc,zc=Fc=null,t.current=n,mI(n),Ww(),te=l,re=o,Ct.transition=s}else t.current=n;if(pa&&(pa=!1,$n=t,fl=i),s=t.pendingLanes,s===0&&(Jn=null),Kw(n.stateNode),dt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dl)throw dl=!1,t=ah,ah=null,t;return fl&1&&t.tag!==0&&wi(),s=t.pendingLanes,s&1?t===lh?zs++:(zs=0,lh=t):zs=0,dr(),null}function wi(){if($n!==null){var t=Uy(fl),e=Ct.transition,n=re;try{if(Ct.transition=null,re=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,fl=0,te&6)throw Error(j(331));var i=te;for(te|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:Us(8,p,s)}var m=p.child;if(m!==null)m.return=p,$=m;else for(;$!==null;){p=$;var y=p.sibling,k=p.return;if(Jv(p),p===h){$=null;break}if(y!==null){y.return=k,$=y;break}$=k}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Us(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gl(9,l)}}catch(U){_e(l,l.return,U)}if(l===o){$=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,$=L;break e}$=l.return}}if(te=i,dr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(jl,t)}catch{}r=!0}return r}finally{re=n,Ct.transition=e}}return!1}function wm(t,e,n){e=Li(n,e),e=Uv(t,e,1),t=Qn(t,e,1),e=nt(),t!==null&&(Io(t,1,e),dt(t,e))}function _e(t,e,n){if(t.tag===3)wm(t,t,n);else for(;e!==null;){if(e.tag===3){wm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=Li(n,t),t=Fv(e,t,1),e=Qn(e,t,1),t=nt(),e!==null&&(Io(e,1,t),dt(e,t));break}}e=e.return}}function wI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(Fe&n)===n&&(Pe===4||Pe===3&&(Fe&130023424)===Fe&&500>Te()-Ed?Nr(t,0):_d|=n),dt(t,e)}function o_(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=nt();t=_n(t,e),t!==null&&(Io(t,e,n),dt(t,n))}function TI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o_(t,n)}function II(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),o_(t,n)}var a_;a_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,cI(t,e,n);ut=!!(t.flags&131072)}else ut=!1,de&&e.flags&1048576&&hv(e,il,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Oa(t,e),t=e.pendingProps;var i=Ni(e,Ye.current);Ei(e,n),i=fd(null,e,r,t,i,n);var s=pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,nl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ld(e),i.updater=Wl,e.stateNode=i,i._reactInternals=e,Jc(e,r,t,n),e=Zc(null,e,r,!0,s,n)):(e.tag=0,de&&s&&td(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Oa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AI(r),t=Ot(r,t),i){case 0:e=Xc(null,e,r,t,n);break e;case 1:e=hm(null,e,r,t,n);break e;case 11:e=um(null,e,r,t,n);break e;case 14:e=cm(null,e,r,Ot(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Xc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),hm(t,e,r,i,n);case 3:e:{if(Hv(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yv(t,e),al(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Li(Error(j(423)),e),e=dm(t,e,r,n,i);break e}else if(r!==i){i=Li(Error(j(424)),e),e=dm(t,e,r,n,i);break e}else for(yt=Kn(e.stateNode.containerInfo.firstChild),vt=e,de=!0,Lt=null,n=mv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){e=En(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return vv(e),t===null&&qc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bc(r,i)?o=null:s!==null&&Bc(r,s)&&(e.flags|=32),$v(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&qc(e),null;case 13:return Wv(t,e,n);case 4:return ud(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oi(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),um(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(sl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!ct.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=fn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ei(e,n),i=kt(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=Ot(r,e.pendingProps),i=Ot(r.type,i),cm(t,e,r,i,n);case 15:return zv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Oa(t,e),e.tag=1,ht(r)?(t=!0,nl(e)):t=!1,Ei(e,n),jv(e,r,i),Jc(e,r,i,n),Zc(null,e,r,!0,t,n);case 19:return Gv(t,e,n);case 22:return Bv(t,e,n)}throw Error(j(156,e.tag))};function l_(t,e){return Vy(t,e)}function SI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new SI(t,e,n,r)}function Sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AI(t){if(typeof t=="function")return Sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===Hh)return 14}return 2}function Xn(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case si:return xr(n.children,i,s,e);case Bh:o=8,i|=8;break;case Ec:return t=At(12,n,e,i|2),t.elementType=Ec,t.lanes=s,t;case wc:return t=At(13,n,e,i),t.elementType=wc,t.lanes=s,t;case Tc:return t=At(19,n,e,i),t.elementType=Tc,t.lanes=s,t;case vy:return Kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gy:o=10;break e;case yy:o=9;break e;case $h:o=11;break e;case Hh:o=14;break e;case bn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function Kl(t,e,n,r){return t=At(22,t,r,e),t.elementType=vy,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ad(t,e,n,r,i,s,o,l,u){return t=new CI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ld(s),t}function kI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function u_(t){if(!t)return sr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(ht(n))return uv(t,n,e)}return e}function c_(t,e,n,r,i,s,o,l,u){return t=Ad(n,r,!0,t,i,s,o,l,u),t.context=u_(null),n=t.current,r=nt(),i=Yn(n),s=fn(r,i),s.callback=e??null,Qn(n,s,i),t.current.lanes=i,Io(t,i,r),dt(t,r),t}function Ql(t,e,n,r){var i=e.current,s=nt(),o=Yn(i);return n=u_(n),e.context===null?e.context=n:e.pendingContext=n,e=fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qn(i,e,o),t!==null&&(zt(t,i,o,s),Pa(t,i,o)),o}function ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cd(t,e){Tm(t,e),(t=t.alternate)&&Tm(t,e)}function RI(){return null}var h_=typeof reportError=="function"?reportError:function(t){console.error(t)};function kd(t){this._internalRoot=t}Jl.prototype.render=kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Ql(t,e,null,null)};Jl.prototype.unmount=kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){Ql(null,t,null,null)}),e[vn]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=By();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&Hy(t)}};function Rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Im(){}function PI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ml(o);s.call(h)}}var o=c_(e,r,t,0,null,!1,!1,"",Im);return t._reactRootContainer=o,t[vn]=o.current,ro(t.nodeType===8?t.parentNode:t),jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=ml(u);l.call(h)}}var u=Ad(t,0,!1,null,null,!1,!1,"",Im);return t._reactRootContainer=u,t[vn]=u.current,ro(t.nodeType===8?t.parentNode:t),jr(function(){Ql(e,u,n,r)}),u}function Xl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ml(o);l.call(u)}}Ql(e,o,t,i)}else o=PI(n,e,t,i,r);return ml(o)}Fy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rs(e.pendingLanes);n!==0&&(qh(e,n|1),dt(e,Te()),!(te&6)&&(Vi=Te()+500,dr()))}break;case 13:jr(function(){var r=_n(t,1);if(r!==null){var i=nt();zt(r,t,1,i)}}),Cd(t,1)}};Kh=function(t){if(t.tag===13){var e=_n(t,134217728);if(e!==null){var n=nt();zt(e,t,134217728,n)}Cd(t,134217728)}};zy=function(t){if(t.tag===13){var e=Yn(t),n=_n(t,e);if(n!==null){var r=nt();zt(n,t,e,r)}Cd(t,e)}};By=function(){return re};$y=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Oc=function(t,e,n){switch(e){case"input":if(Ac(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bl(r);if(!i)throw Error(j(90));Ey(r),Ac(r,i)}}}break;case"textarea":Ty(t,n);break;case"select":e=n.value,e!=null&&gi(t,!!n.multiple,e,!1)}};Py=wd;Ny=jr;var NI={usingClientEntryPoint:!1,Events:[Ao,ui,Bl,ky,Ry,wd]},Is={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xI={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dy(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||RI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{jl=ma.inject(xI),Jt=ma}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NI;Et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(e))throw Error(j(200));return kI(t,e,null,n)};Et.createRoot=function(t,e){if(!Rd(t))throw Error(j(299));var n=!1,r="",i=h_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ad(t,1,!1,null,null,n,!1,r,i),t[vn]=e.current,ro(t.nodeType===8?t.parentNode:t),new kd(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Dy(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return jr(t)};Et.hydrate=function(t,e,n){if(!Yl(e))throw Error(j(200));return Xl(null,t,e,!0,n)};Et.hydrateRoot=function(t,e,n){if(!Rd(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=h_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c_(e,null,t,1,n??null,i,!1,s,o),t[vn]=e.current,ro(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jl(e)};Et.render=function(t,e,n){if(!Yl(e))throw Error(j(200));return Xl(null,t,e,!1,n)};Et.unmountComponentAtNode=function(t){if(!Yl(t))throw Error(j(40));return t._reactRootContainer?(jr(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};Et.unstable_batchedUpdates=wd;Et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yl(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Xl(t,e,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function d_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d_)}catch(t){console.error(t)}}d_(),dy.exports=Et;var OI=dy.exports,Sm=OI;vc.createRoot=Sm.createRoot,vc.hydrateRoot=Sm.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fo.apply(this,arguments)}var Hn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hn||(Hn={}));const Am="popstate";function DI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return hh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gl(i)}return VI(e,n,null,t)}function Ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Pd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LI(){return Math.random().toString(36).substr(2,8)}function Cm(t,e){return{usr:t.state,key:t.key,idx:e}}function hh(t,e,n,r){return n===void 0&&(n=null),fo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gi(e):e,{state:n,key:e&&e.key||r||LI()})}function gl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function VI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Hn.Pop,u=null,h=p();h==null&&(h=0,o.replaceState(fo({},o.state,{idx:h}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=Hn.Pop;let D=p(),I=D==null?null:D-h;h=D,u&&u({action:l,location:P.location,delta:I})}function y(D,I){l=Hn.Push;let _=hh(P.location,D,I);h=p()+1;let A=Cm(_,h),L=P.createHref(_);try{o.pushState(A,"",L)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(L)}s&&u&&u({action:l,location:P.location,delta:1})}function k(D,I){l=Hn.Replace;let _=hh(P.location,D,I);h=p();let A=Cm(_,h),L=P.createHref(_);o.replaceState(A,"",L),s&&u&&u({action:l,location:P.location,delta:0})}function R(D){let I=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof D=="string"?D:gl(D);return _=_.replace(/ $/,"%20"),Ce(I,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,I)}let P={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Am,m),u=D,()=>{i.removeEventListener(Am,m),u=null}},createHref(D){return e(i,D)},createURL:R,encodeLocation(D){let I=R(D);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:y,replace:k,go(D){return o.go(D)}};return P}var km;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(km||(km={}));function MI(t,e,n){return n===void 0&&(n="/"),bI(t,e,n)}function bI(t,e,n,r){let i=typeof e=="string"?Gi(e):e,s=Nd(i.pathname||"/",n);if(s==null)return null;let o=f_(t);jI(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=JI(s);l=qI(o[u],h)}return l}function f_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ce(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Zn([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(Ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),f_(s.children,e,p,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:WI(h,s.index),routesMeta:p})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of p_(s.path))i(s,o,u)}),e}function p_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=p_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function jI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:GI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UI=/^:[\w-]+$/,FI=3,zI=2,BI=1,$I=10,HI=-2,Rm=t=>t==="*";function WI(t,e){let n=t.split("/"),r=n.length;return n.some(Rm)&&(r+=HI),e&&(r+=zI),n.filter(i=>!Rm(i)).reduce((i,s)=>i+(UI.test(s)?FI:s===""?BI:$I),r)}function GI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qI(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",m=KI({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},p),y=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Zn([s,m.pathname]),pathnameBase:t1(Zn([s,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(s=Zn([s,m.pathnameBase]))}return o}function KI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=QI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,p,m)=>{let{paramName:y,isOptional:k}=p;if(y==="*"){let P=l[m]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=l[m];return k&&!R?h[y]=void 0:h[y]=(R||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function QI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Pd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function JI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Pd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Nd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const YI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,XI=t=>YI.test(t);function ZI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gi(t):t,s;if(n)if(XI(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Pd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Pm(n.substring(1),"/"):s=Pm(n,e)}else s=e;return{pathname:s,search:n1(r),hash:r1(i)}}function Pm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function m_(t,e){let n=e1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function g_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gi(t):(i=fo({},t),Ce(!i.pathname||!i.pathname.includes("?"),oc("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),oc("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),oc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}l=m>=0?e[m]:"/"}let u=ZI(i,l),h=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||p)&&(u.pathname+="/"),u}const Zn=t=>t.join("/").replace(/\/\/+/g,"/"),t1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),n1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,r1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function i1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const y_=["post","put","patch","delete"];new Set(y_);const s1=["get",...y_];new Set(s1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},po.apply(this,arguments)}const xd=b.createContext(null),o1=b.createContext(null),Kr=b.createContext(null),Zl=b.createContext(null),Qr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),v_=b.createContext(null);function a1(t,e){let{relative:n}=e===void 0?{}:e;ko()||Ce(!1);let{basename:r,navigator:i}=b.useContext(Kr),{hash:s,pathname:o,search:l}=E_(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Zn([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ko(){return b.useContext(Zl)!=null}function eu(){return ko()||Ce(!1),b.useContext(Zl).location}function __(t){b.useContext(Kr).static||b.useLayoutEffect(t)}function l1(){let{isDataRoute:t}=b.useContext(Qr);return t?w1():u1()}function u1(){ko()||Ce(!1);let t=b.useContext(xd),{basename:e,future:n,navigator:r}=b.useContext(Kr),{matches:i}=b.useContext(Qr),{pathname:s}=eu(),o=JSON.stringify(m_(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return __(()=>{l.current=!0}),b.useCallback(function(h,p){if(p===void 0&&(p={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let m=g_(h,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Zn([e,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[e,r,o,s,t])}function E_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(Kr),{matches:i}=b.useContext(Qr),{pathname:s}=eu(),o=JSON.stringify(m_(i,r.v7_relativeSplatPath));return b.useMemo(()=>g_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function c1(t,e){return h1(t,e)}function h1(t,e,n,r){ko()||Ce(!1);let{navigator:i}=b.useContext(Kr),{matches:s}=b.useContext(Qr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=eu(),p;if(e){var m;let D=typeof e=="string"?Gi(e):e;u==="/"||(m=D.pathname)!=null&&m.startsWith(u)||Ce(!1),p=D}else p=h;let y=p.pathname||"/",k=y;if(u!=="/"){let D=u.replace(/^\//,"").split("/");k="/"+y.replace(/^\//,"").split("/").slice(D.length).join("/")}let R=MI(t,{pathname:k}),P=g1(R&&R.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:Zn([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:Zn([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&P?b.createElement(Zl.Provider,{value:{location:po({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Hn.Pop}},P):P}function d1(){let t=E1(),e=i1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const f1=b.createElement(d1,null);class p1 extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Qr.Provider,{value:this.props.routeContext},b.createElement(v_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m1(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(xd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Qr.Provider,{value:e},r)}function g1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||Ce(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:y,errors:k}=n,R=m.route.loader&&y[m.route.id]===void 0&&(!k||k[m.route.id]===void 0);if(m.route.lazy||R){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,m,y)=>{let k,R=!1,P=null,D=null;n&&(k=l&&m.route.id?l[m.route.id]:void 0,P=m.route.errorElement||f1,u&&(h<0&&y===0?(T1("route-fallback"),R=!0,D=null):h===y&&(R=!0,D=m.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,y+1)),_=()=>{let A;return k?A=P:R?A=D:m.route.Component?A=b.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=p,b.createElement(m1,{match:m,routeContext:{outlet:p,matches:I,isDataRoute:n!=null},children:A})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?b.createElement(p1,{location:n.location,revalidation:n.revalidation,component:P,error:k,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):_()},null)}var w_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(w_||{}),T_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(T_||{});function y1(t){let e=b.useContext(xd);return e||Ce(!1),e}function v1(t){let e=b.useContext(o1);return e||Ce(!1),e}function _1(t){let e=b.useContext(Qr);return e||Ce(!1),e}function I_(t){let e=_1(),n=e.matches[e.matches.length-1];return n.route.id||Ce(!1),n.route.id}function E1(){var t;let e=b.useContext(v_),n=v1(),r=I_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function w1(){let{router:t}=y1(w_.UseNavigateStable),e=I_(T_.UseNavigateStable),n=b.useRef(!1);return __(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,po({fromRouteId:e},s)))},[t,e])}const Nm={};function T1(t,e,n){Nm[t]||(Nm[t]=!0)}function I1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ma(t){Ce(!1)}function S1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Hn.Pop,navigator:s,static:o=!1,future:l}=t;ko()&&Ce(!1);let u=e.replace(/^\/*/,"/"),h=b.useMemo(()=>({basename:u,navigator:s,static:o,future:po({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Gi(r));let{pathname:p="/",search:m="",hash:y="",state:k=null,key:R="default"}=r,P=b.useMemo(()=>{let D=Nd(p,u);return D==null?null:{location:{pathname:D,search:m,hash:y,state:k,key:R},navigationType:i}},[u,p,m,y,k,R,i]);return P==null?null:b.createElement(Kr.Provider,{value:h},b.createElement(Zl.Provider,{children:n,value:P}))}function A1(t){let{children:e,location:n}=t;return c1(dh(e),n)}new Promise(()=>{});function dh(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,dh(r.props.children,s));return}r.type!==Ma&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fh(){return fh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fh.apply(this,arguments)}function C1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function k1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function R1(t,e){return t.button===0&&(!e||e==="_self")&&!k1(t)}const P1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],N1="6";try{window.__reactRouterVersion=N1}catch{}const x1="startTransition",xm=ww[x1];function O1(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=DI({window:i,v5Compat:!0}));let o=s.current,[l,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},p=b.useCallback(m=>{h&&xm?xm(()=>u(m)):u(m)},[u,h]);return b.useLayoutEffect(()=>o.listen(p),[o,p]),b.useEffect(()=>I1(r),[r]),b.createElement(S1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const D1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ti=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:p,viewTransition:m}=e,y=C1(e,P1),{basename:k}=b.useContext(Kr),R,P=!1;if(typeof h=="string"&&L1.test(h)&&(R=h,D1))try{let A=new URL(window.location.href),L=h.startsWith("//")?new URL(A.protocol+h):new URL(h),U=Nd(L.pathname,k);L.origin===A.origin&&U!=null?h=U+L.search+L.hash:P=!0}catch{}let D=a1(h,{relative:i}),I=V1(h,{replace:o,state:l,target:u,preventScrollReset:p,relative:i,viewTransition:m});function _(A){r&&r(A),A.defaultPrevented||I(A)}return b.createElement("a",fh({},y,{href:R||D,onClick:P||s?r:_,ref:n,target:u}))});var Om;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Om||(Om={}));var Dm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dm||(Dm={}));function V1(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=l1(),h=eu(),p=E_(t,{relative:o});return b.useCallback(m=>{if(R1(m,n)){m.preventDefault();let y=r!==void 0?r:gl(h)===gl(p);u(t,{replace:y,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[h,u,p,r,i,n,t,s,o,l])}/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ot=(t,e)=>{const n=b.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},p)=>b.createElement("svg",{ref:p,...M1,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${b1(t)}`,l].join(" "),...h},[...e.map(([m,y])=>b.createElement(m,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=ot("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=ot("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ot("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=ot("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=ot("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=ot("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=ot("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=ot("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=ot("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=ot("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=ot("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=ot("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=ot("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=ot("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=ot("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),q1=()=>{};var bm={};/**
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
 */const A_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},K1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},C_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(y=64)),r.push(n[p],n[m],n[y],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(A_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):K1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new Q1;const y=s<<2|l>>4;if(r.push(y),h!==64){const k=l<<4&240|h>>2;if(r.push(k),m!==64){const R=h<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Q1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const J1=function(t){const e=A_(t);return C_.encodeByteArray(e,!0)},yl=function(t){return J1(t).replace(/\./g,"")},k_=function(t){try{return C_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Y1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const X1=()=>Y1().__FIREBASE_DEFAULTS__,Z1=()=>{if(typeof process>"u"||typeof bm>"u")return;const t=bm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&k_(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return q1()||X1()||Z1()||eS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},R_=t=>{var e,n;return(n=(e=tu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},tS=t=>{const e=R_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},P_=()=>{var t;return(t=tu())==null?void 0:t.config},N_=t=>{var e;return(e=tu())==null?void 0:e[`_${t}`]};/**
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
 */class nS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function rS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[yl(JSON.stringify(n)),yl(JSON.stringify(o)),""].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function sS(){var e;const t=(e=tu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uS(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cS(){return!sS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hS(){try{return typeof indexedDB=="object"}catch{return!1}}function dS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const fS="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fS,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function pS(t,e){return t.replace(mS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mS=/\{\$([^}]+)}/g;function gS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(jm(s)&&jm(o)){if(!Ur(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jm(t){return t!==null&&typeof t=="object"}/**
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
 */function Po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yS(t,e){const n=new vS(t,e);return n.subscribe.bind(n)}class vS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_S(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ac),i.error===void 0&&(i.error=ac),i.complete===void 0&&(i.complete=ac);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _S(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ac(){}/**
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
 */function No(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function x_(t){return(await fetch(t,{credentials:"include"})).ok}class Fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sr="[DEFAULT]";/**
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
 */class ES{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TS(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wS(t){return t===Sr?void 0:t}function TS(t){return t.instantiationMode==="EAGER"}/**
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
 */class IS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ES(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const SS={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},AS=Z.INFO,CS={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},kS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ld{constructor(e){this.name=e,this._logLevel=AS,this._logHandler=kS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const RS=(t,e)=>e.some(n=>t instanceof n);let Um,Fm;function PS(){return Um||(Um=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NS(){return Fm||(Fm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O_=new WeakMap,ph=new WeakMap,D_=new WeakMap,lc=new WeakMap,Vd=new WeakMap;function xS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&O_.set(n,t)}).catch(()=>{}),Vd.set(e,t),e}function OS(t){if(ph.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ph.set(t,e)}let mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||D_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DS(t){mh=t(mh)}function LS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uc(this),e,...n);return D_.set(r,e.sort?e.sort():[e]),er(r)}:NS().includes(t)?function(...e){return t.apply(uc(this),e),er(O_.get(this))}:function(...e){return er(t.apply(uc(this),e))}}function VS(t){return typeof t=="function"?LS(t):(t instanceof IDBTransaction&&OS(t),RS(t,PS())?new Proxy(t,mh):t)}function er(t){if(t instanceof IDBRequest)return xS(t);if(lc.has(t))return lc.get(t);const e=VS(t);return e!==t&&(lc.set(t,e),Vd.set(e,t)),e}const uc=t=>Vd.get(t);function MS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(er(o.result),u.oldVersion,u.newVersion,er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const bS=["get","getKey","getAll","getAllKeys","count"],jS=["put","add","delete","clear"],cc=new Map;function zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return cc.set(e,s),s}DS(t=>({...t,get:(e,n,r)=>zm(e,n)||t.get(e,n,r),has:(e,n)=>!!zm(e,n)||t.has(e,n)}));/**
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
 */class US{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gh="@firebase/app",Bm="0.14.10";/**
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
 */const wn=new Ld("@firebase/app"),zS="@firebase/app-compat",BS="@firebase/analytics-compat",$S="@firebase/analytics",HS="@firebase/app-check-compat",WS="@firebase/app-check",GS="@firebase/auth",qS="@firebase/auth-compat",KS="@firebase/database",QS="@firebase/data-connect",JS="@firebase/database-compat",YS="@firebase/functions",XS="@firebase/functions-compat",ZS="@firebase/installations",eA="@firebase/installations-compat",tA="@firebase/messaging",nA="@firebase/messaging-compat",rA="@firebase/performance",iA="@firebase/performance-compat",sA="@firebase/remote-config",oA="@firebase/remote-config-compat",aA="@firebase/storage",lA="@firebase/storage-compat",uA="@firebase/firestore",cA="@firebase/ai",hA="@firebase/firestore-compat",dA="firebase",fA="12.11.0";/**
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
 */const yh="[DEFAULT]",pA={[gh]:"fire-core",[zS]:"fire-core-compat",[$S]:"fire-analytics",[BS]:"fire-analytics-compat",[WS]:"fire-app-check",[HS]:"fire-app-check-compat",[GS]:"fire-auth",[qS]:"fire-auth-compat",[KS]:"fire-rtdb",[QS]:"fire-data-connect",[JS]:"fire-rtdb-compat",[YS]:"fire-fn",[XS]:"fire-fn-compat",[ZS]:"fire-iid",[eA]:"fire-iid-compat",[tA]:"fire-fcm",[nA]:"fire-fcm-compat",[rA]:"fire-perf",[iA]:"fire-perf-compat",[sA]:"fire-rc",[oA]:"fire-rc-compat",[aA]:"fire-gcs",[lA]:"fire-gcs-compat",[uA]:"fire-fst",[hA]:"fire-fst-compat",[cA]:"fire-vertex","fire-js":"fire-js",[dA]:"fire-js-all"};/**
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
 */const vl=new Map,mA=new Map,vh=new Map;function $m(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mi(t){const e=t.name;if(vh.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;vh.set(e,t);for(const n of vl.values())$m(n,t);for(const n of mA.values())$m(n,t);return!0}function Md(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const gA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Ro("app","Firebase",gA);/**
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
 */class yA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
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
 */const qi=fA;function L_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:yh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw tr.create("bad-app-name",{appName:String(i)});if(n||(n=P_()),!n)throw tr.create("no-options");const s=vl.get(i);if(s){if(Ur(n,s.options)&&Ur(r,s.config))return s;throw tr.create("duplicate-app",{appName:i})}const o=new IS(i);for(const u of vh.values())o.addComponent(u);const l=new yA(n,r,o);return vl.set(i,l),l}function V_(t=yh){const e=vl.get(t);if(!e&&t===yh&&P_())return L_();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){let r=pA[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(o.join(" "));return}Mi(new Fr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const vA="firebase-heartbeat-database",_A=1,mo="firebase-heartbeat-store";let hc=null;function M_(){return hc||(hc=MS(vA,_A,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),hc}async function EA(t){try{const n=(await M_()).transaction(mo),r=await n.objectStore(mo).get(b_(t));return await n.done,r}catch(e){if(e instanceof An)wn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function Hm(t,e){try{const r=(await M_()).transaction(mo,"readwrite");await r.objectStore(mo).put(e,b_(t)),await r.done}catch(n){if(n instanceof An)wn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function b_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wA=1024,TA=30;class IA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>TA){const o=CA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wm(),{heartbeatsToSend:r,unsentEntries:i}=SA(this._heartbeatsCache.heartbeats),s=yl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function Wm(){return new Date().toISOString().substring(0,10)}function SA(t,e=wA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hS()?dS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gm(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}function CA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function kA(t){Mi(new Fr("platform-logger",e=>new US(e),"PRIVATE")),Mi(new Fr("heartbeat",e=>new IA(e),"PRIVATE")),nr(gh,Bm,t),nr(gh,Bm,"esm2020"),nr("fire-js","")}kA("");function j_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RA=j_,U_=new Ro("auth","Firebase",j_());/**
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
 */const _l=new Ld("@firebase/auth");function PA(t,...e){_l.logLevel<=Z.WARN&&_l.warn(`Auth (${qi}): ${t}`,...e)}function ba(t,...e){_l.logLevel<=Z.ERROR&&_l.error(`Auth (${qi}): ${t}`,...e)}/**
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
 */function Pt(t,...e){throw jd(t,...e)}function Bt(t,...e){return jd(t,...e)}function bd(t,e,n){const r={...RA(),[e]:n};return new Ro("auth","Firebase",r).create(e,{appName:t.name})}function pn(t){return bd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function NA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Pt(t,"argument-error"),bd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return U_.create(t,...e)}function G(t,e,...n){if(!t)throw jd(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ba(e),new Error(e)}function Tn(t,e){t||hn(e)}/**
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
 */function _h(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function xA(){return qm()==="http:"||qm()==="https:"}function qm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function OA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xA()||aS()||"connection"in navigator)?navigator.onLine:!0}function DA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=iS()||lS()}get(){return OA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ud(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class F_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],MA=new xo(3e4,6e4);function fr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Cn(t,e,n,r,i={}){return z_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Po({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return oS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&No(t.emulatorConfig.host)&&(h.credentials="include"),F_.fetch()(await B_(t,t.config.apiHost,n,l),h)})}async function z_(t,e,n){t._canInitEmulator=!1;const r={...LA,...e};try{const i=new jA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ga(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bd(t,p,h);Pt(t,p)}}catch(i){if(i instanceof An)throw i;Pt(t,"network-request-failed",{message:String(i)})}}async function Oo(t,e,n,r,i={}){const s=await Cn(t,e,n,r,i);return"mfaPendingCredential"in s&&Pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function B_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ud(t.config,i):`${t.config.apiScheme}://${i}`;return VA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function bA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),MA.get())})}}function ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bt(t,e,r);return i.customData._tokenResponse=n,i}function Km(t){return t!==void 0&&t.enterprise!==void 0}class UA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function FA(t,e){return Cn(t,"GET","/v2/recaptchaConfig",fr(t,e))}/**
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
 */async function zA(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function El(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BA(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=Fd(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bs(dc(i.auth_time)),issuedAtTime:Bs(dc(i.iat)),expirationTime:Bs(dc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dc(t){return Number(t)*1e3}function Fd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ba("JWT malformed, contained fewer than 3 sections"),null;try{const i=k_(n);return i?JSON.parse(i):(ba("Failed to decode base64 JWT payload"),null)}catch(i){return ba("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qm(t){const e=Fd(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&$A(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $A({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Eh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await bi(t,El(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?$_(i.providerUserInfo):[],o=GA(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Eh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function WA(t){const e=rt(t);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function qA(t,e){const n=await z_(t,{},async()=>{const r=Po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await B_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&No(t.emulatorConfig.host)&&(u.credentials="include"),F_.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KA(t,e){return Cn(t,"POST","/v2/accounts:revokeToken",fr(t,e))}/**
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
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Qm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ii;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
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
 */function Vn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new HA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Eh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BA(this,e)}reload(){return WA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gt(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await bi(this,zA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:R,stsTokenManager:P}=n;G(m&&P,e,"internal-error");const D=Ii.fromJSON(this.name,P);G(typeof m=="string",e,"internal-error"),Vn(r,e.name),Vn(i,e.name),G(typeof y=="boolean",e,"internal-error"),G(typeof k=="boolean",e,"internal-error"),Vn(s,e.name),Vn(o,e.name),Vn(l,e.name),Vn(u,e.name),Vn(h,e.name),Vn(p,e.name);const I=new jt({uid:m,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:h,lastLoginAt:p});return R&&Array.isArray(R)&&(I.providerData=R.map(_=>({..._}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ii;i.updateFromServerResponse(n);const s=new jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ii;l.updateFromIdToken(r);const u=new jt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Eh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Jm=new Map;function dn(t){Tn(t instanceof Function,"Expected a class definition");let e=Jm.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jm.set(t,e),e)}/**
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
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const Ym=H_;/**
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
 */function ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await El(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Si(dn(Ym),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||dn(Ym);const o=ja(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){let m;if(typeof p=="string"){const y=await El(e,{idToken:p}).catch(()=>{});if(!y)break;m=await jt._fromGetAccountInfoResponse(e,y,p)}else m=jt._fromJSON(e,p);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Si(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Si(s,e,r))}}/**
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
 */function Xm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J_(e))return"Blackberry";if(Y_(e))return"Webos";if(G_(e))return"Safari";if((e.includes("chrome/")||q_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function W_(t=Xe()){return/firefox\//i.test(t)}function G_(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q_(t=Xe()){return/crios\//i.test(t)}function K_(t=Xe()){return/iemobile/i.test(t)}function Q_(t=Xe()){return/android/i.test(t)}function J_(t=Xe()){return/blackberry/i.test(t)}function Y_(t=Xe()){return/webos/i.test(t)}function zd(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QA(t=Xe()){var e;return zd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function JA(){return uS()&&document.documentMode===10}function X_(t=Xe()){return zd(t)||Q_(t)||Y_(t)||J_(t)||/windows phone/i.test(t)||K_(t)}/**
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
 */function Z_(t,e=[]){let n;switch(t){case"Browser":n=Xm(Xe());break;case"Worker":n=`${Xm(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qi}/${r}`}/**
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
 */class YA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function XA(t,e={}){return Cn(t,"GET","/v2/passwordPolicy",fr(t,e))}/**
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
 */const ZA=6;class eC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ZA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class tC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zm(this),this.idTokenSubscription=new Zm(this),this.beforeStateQueue=new YA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await El(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gt(this.app))return Promise.reject(pn(this));const n=e?rt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gt(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gt(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XA(this),n=new eC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&PA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function pr(t){return rt(t)}class Zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=yS(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nC(t){nu=t}function eE(t){return nu.loadJS(t)}function rC(){return nu.recaptchaEnterpriseScript}function iC(){return nu.gapiScript}function sC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class oC{constructor(){this.enterprise=new aC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class aC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const lC="recaptcha-enterprise",tE="NO_RECAPTCHA";class uC{constructor(e){this.type=lC,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{FA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new UA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Km(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(tE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new oC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Km(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=rC();u.length!==0&&(u+=l),eE(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function eg(t,e,n,r=!1,i=!1){const s=new uC(t);let o;if(i)o=tE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function wh(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await eg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await eg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function cC(t,e){const n=Md(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ur(s,e??{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function hC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dC(t,e,n){const r=pr(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=nE(e),{host:o,port:l}=fC(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Ur(h,r.config.emulator)&&Ur(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,No(o)?x_(`${s}//${o}${u}`):pC()}function nE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fC(t){const e=nE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tg(o)}}}function tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function mC(t,e){return Cn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function gC(t,e){return Oo(t,"POST","/v1/accounts:signInWithPassword",fr(t,e))}/**
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
 */async function yC(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}async function vC(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}/**
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
 */class go extends Bd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wh(e,n,"signInWithPassword",gC);case"emailLink":return yC(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wh(e,r,"signUpPassword",mC);case"emailLink":return vC(e,{idToken:n,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ai(t,e){return Oo(t,"POST","/v1/accounts:signInWithIdp",fr(t,e))}/**
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
 */const _C="http://localhost";class In extends Bd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new In(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:_C,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Po(n)}return e}}/**
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
 */function EC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wC(t){const e=Ns(xs(t)).link,n=e?Ns(xs(e)).deep_link_id:null,r=Ns(xs(t)).deep_link_id;return(r?Ns(xs(r)).link:null)||r||n||e||t}class $d{constructor(e){const n=Ns(xs(e)),r=n.apiKey??null,i=n.oobCode??null,s=EC(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=wC(e);try{return new $d(n)}catch{return null}}}/**
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
 */class Ki{constructor(){this.providerId=Ki.PROVIDER_ID}static credential(e,n){return go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$d.parseLink(n);return G(r,"argument-error"),go._fromEmailAndCode(e,r.code,r.tenantId)}}Ki.PROVIDER_ID="password";Ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qi extends Hd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class $s extends Qi{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return G("providerId"in n&&"signInMethod"in n,"argument-error"),In._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),In._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return $s.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return $s.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new $s(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class on extends Qi{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
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
 */class an extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return In._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
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
 */class zn extends Qi{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
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
 */class ln extends Qi{constructor(){super("twitter.com")}static credential(e,n){return In._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
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
 */async function TC(t,e){return Oo(t,"POST","/v1/accounts:signUp",fr(t,e))}/**
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
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jt._fromIdTokenResponse(e,r,i),o=ng(r);return new zr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ng(r);return new zr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tl extends An{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tl(e,n,r,i)}}function rE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(t,s,e,r):s})}async function IC(t,e,n=!1){const r=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
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
 */async function SC(t,e,n=!1){const{auth:r}=t;if(gt(r.app))return Promise.reject(pn(r));const i="reauthenticate";try{const s=await bi(t,rE(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Fd(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),zr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pt(r,"user-mismatch"),s}}/**
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
 */async function iE(t,e,n=!1){if(gt(t.app))return Promise.reject(pn(t));const r="signIn",i=await rE(t,r,e),s=await zr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function AC(t,e){return iE(pr(t),e)}/**
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
 */async function sE(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CC(t,e,n){if(gt(t.app))return Promise.reject(pn(t));const r=pr(t),o=await wh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&sE(t),u}),l=await zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function kC(t,e,n){return gt(t.app)?Promise.reject(pn(t)):AC(rt(t),Ki.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sE(t),r})}/**
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
 */async function RC(t,e){return Cn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function PC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=rt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await bi(r,RC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function NC(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function xC(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function OC(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function DC(t){return rt(t).signOut()}const Il="__sak";/**
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
 */class oE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const LC=1e3,VC=10;class aE extends oE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,VC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aE.type="LOCAL";const MC=aE;/**
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
 */class lE extends oE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lE.type="SESSION";const uE=lE;/**
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
 */function bC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await bC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ru.receivers=[];/**
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
 */function Wd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Wd("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xt(){return window}function UC(t){Xt().location.href=t}/**
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
 */function cE(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function FC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function BC(){return cE()?self:null}/**
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
 */const hE="firebaseLocalStorageDb",$C=1,Sl="firebaseLocalStorage",dE="fbase_key";class Do{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function iu(t,e){return t.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function HC(){const t=indexedDB.deleteDatabase(hE);return new Do(t).toPromise()}function Th(){const t=indexedDB.open(hE,$C);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sl,{keyPath:dE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sl)?e(r):(r.close(),await HC(),e(await Th()))})})}async function rg(t,e,n){const r=iu(t,!0).put({[dE]:e,value:n});return new Do(r).toPromise()}async function WC(t,e){const n=iu(t,!1).get(e),r=await new Do(n).toPromise();return r===void 0?null:r.value}function ig(t,e){const n=iu(t,!0).delete(e);return new Do(n).toPromise()}const GC=800,qC=3;class fE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ru._getInstance(BC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await FC(),!this.activeServiceWorker)return;this.sender=new jC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Th();return await rg(e,Il,"1"),await ig(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ig(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=iu(i,!1).getAll();return new Do(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fE.type="LOCAL";const KC=fE;new xo(3e4,6e4);/**
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
 */function pE(t,e){return e?dn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gd extends Bd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QC(t){return iE(t.auth,new Gd(t),t.bypassAuthState)}function JC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),SC(n,new Gd(t),t.bypassAuthState)}async function YC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),IC(n,new Gd(t),t.bypassAuthState)}/**
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
 */class mE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QC;case"linkViaPopup":case"linkViaRedirect":return YC;case"reauthViaPopup":case"reauthViaRedirect":return JC;default:Pt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XC=new xo(2e3,1e4);async function ya(t,e,n){if(gt(t.app))return Promise.reject(Bt(t,"operation-not-supported-in-this-environment"));const r=pr(t);NA(t,e,Hd);const i=pE(r,n);return new Rr(r,"signInViaPopup",e,i).executeNotNull()}class Rr extends mE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XC.get())};e()}}Rr.currentPopupAction=null;/**
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
 */const ZC="pendingRedirect",Ua=new Map;class ek extends mE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await tk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tk(t,e){const n=ik(e),r=rk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nk(t,e){Ua.set(t._key(),e)}function rk(t){return dn(t._redirectPersistence)}function ik(t){return ja(ZC,t.config.apiKey,t.name)}async function sk(t,e,n=!1){if(gt(t.app))return Promise.reject(pn(t));const r=pr(t),i=pE(r,e),o=await new ek(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ok=10*60*1e3;class ak{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ok&&this.cachedEventUids.clear(),this.cachedEventUids.has(sg(e))}saveEventToCache(e){this.cachedEventUids.add(sg(e)),this.lastProcessedEventTime=Date.now()}}function sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gE(t);default:return!1}}/**
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
 */async function uk(t,e={}){return Cn(t,"GET","/v1/projects",e)}/**
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
 */const ck=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hk=/^https?/;async function dk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uk(t);for(const n of e)try{if(fk(n))return}catch{}Pt(t,"unauthorized-domain")}function fk(t){const e=_h(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hk.test(n))return!1;if(ck.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const pk=new xo(3e4,6e4);function og(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mk(t){return new Promise((e,n)=>{var i,s,o;function r(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n(Bt(t,"network-request-failed"))},timeout:pk.get()})}if((s=(i=Xt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Xt().gapi)!=null&&o.load)r();else{const l=sC("iframefcb");return Xt()[l]=()=>{gapi.load?r():n(Bt(t,"network-request-failed"))},eE(`${iC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function gk(t){return Fa=Fa||mk(t),Fa}/**
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
 */const yk=new xo(5e3,15e3),vk="__/auth/iframe",_k="emulator/auth/iframe",Ek={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tk(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ud(e,_k):`https://${t.config.authDomain}/${vk}`,r={apiKey:e.apiKey,appName:t.name,v:qi},i=wk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Po(r).slice(1)}`}async function Ik(t){const e=await gk(t),n=Xt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Tk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ek,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),l=Xt().setTimeout(()=>{s(o)},yk.get());function u(){Xt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Sk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ak=500,Ck=600,kk="_blank",Rk="http://localhost";class ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pk(t,e,n,r=Ak,i=Ck){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Sk,width:r.toString(),height:i.toString(),top:s,left:o},h=Xe().toLowerCase();n&&(l=q_(h)?kk:n),W_(h)&&(e=e||Rk,u.scrollbars="yes");const p=Object.entries(u).reduce((y,[k,R])=>`${y}${k}=${R},`,"");if(QA(h)&&l!=="_self")return Nk(e||"",l),new ag(null);const m=window.open(e||"",l,p);G(m,t,"popup-blocked");try{m.focus()}catch{}return new ag(m)}function Nk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xk="__/auth/handler",Ok="emulator/auth/handler",Dk=encodeURIComponent("fac");async function lg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qi,eventId:i};if(e instanceof Hd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Qi){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${Dk}=${encodeURIComponent(u)}`:"";return`${Lk(t)}?${Po(l).slice(1)}${h}`}function Lk({config:t}){return t.emulator?Ud(t,Ok):`https://${t.authDomain}/${xk}`}/**
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
 */const fc="webStorageSupport";class Vk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uE,this._completeRedirectFn=sk,this._overrideRedirectResult=nk}async _openPopup(e,n,r,i){var o;Tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await lg(e,n,r,_h(),i);return Pk(e,s,Wd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lg(e,n,r,_h(),i);return UC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ik(e),r=new ak(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fc,{type:fc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[fc];s!==void 0&&n(!!s),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X_()||G_()||zd()}}const Mk=Vk;var ug="@firebase/auth",cg="1.12.2";/**
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
 */class bk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Uk(t){Mi(new Fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z_(t)},h=new tC(r,i,s,u);return hC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mi(new Fr("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new bk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(ug,cg,jk(t)),nr(ug,cg,"esm2020")}/**
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
 */const Fk=5*60,zk=N_("authIdTokenMaxAge")||Fk;let hg=null;const Bk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zk)return;const i=n==null?void 0:n.token;hg!==i&&(hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $k(t=V_()){const e=Md(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cC(t,{popupRedirectResolver:Mk,persistence:[KC,MC,uE]}),r=N_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Bk(s.toString());xC(n,o,()=>o(n.currentUser)),NC(n,l=>o(l))}}const i=R_("auth");return i&&dC(n,`http://${i}`),n}function Hk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}nC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Hk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Uk("Browser");var Wk="firebase",Gk="12.11.0";/**
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
 */nr(Wk,Gk,"app");var dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qd;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function w(){}w.prototype=v.prototype,E.F=v.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(S,C,N){for(var T=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)T[Ve-2]=arguments[Ve];return v.prototype[C].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,w){w||(w=0);const S=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)S[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;C<16;++C)S[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=E.g[0],w=E.g[1],C=E.g[2];let N=E.g[3],T;T=v+(N^w&(C^N))+S[0]+3614090360&4294967295,v=w+(T<<7&4294967295|T>>>25),T=N+(C^v&(w^C))+S[1]+3905402710&4294967295,N=v+(T<<12&4294967295|T>>>20),T=C+(w^N&(v^w))+S[2]+606105819&4294967295,C=N+(T<<17&4294967295|T>>>15),T=w+(v^C&(N^v))+S[3]+3250441966&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(N^w&(C^N))+S[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=N+(C^v&(w^C))+S[5]+1200080426&4294967295,N=v+(T<<12&4294967295|T>>>20),T=C+(w^N&(v^w))+S[6]+2821735955&4294967295,C=N+(T<<17&4294967295|T>>>15),T=w+(v^C&(N^v))+S[7]+4249261313&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(N^w&(C^N))+S[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=N+(C^v&(w^C))+S[9]+2336552879&4294967295,N=v+(T<<12&4294967295|T>>>20),T=C+(w^N&(v^w))+S[10]+4294925233&4294967295,C=N+(T<<17&4294967295|T>>>15),T=w+(v^C&(N^v))+S[11]+2304563134&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(N^w&(C^N))+S[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=N+(C^v&(w^C))+S[13]+4254626195&4294967295,N=v+(T<<12&4294967295|T>>>20),T=C+(w^N&(v^w))+S[14]+2792965006&4294967295,C=N+(T<<17&4294967295|T>>>15),T=w+(v^C&(N^v))+S[15]+1236535329&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(C^N&(w^C))+S[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=N+(w^C&(v^w))+S[6]+3225465664&4294967295,N=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(N^v))+S[11]+643717713&4294967295,C=N+(T<<14&4294967295|T>>>18),T=w+(N^v&(C^N))+S[0]+3921069994&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^N&(w^C))+S[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=N+(w^C&(v^w))+S[10]+38016083&4294967295,N=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(N^v))+S[15]+3634488961&4294967295,C=N+(T<<14&4294967295|T>>>18),T=w+(N^v&(C^N))+S[4]+3889429448&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^N&(w^C))+S[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=N+(w^C&(v^w))+S[14]+3275163606&4294967295,N=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(N^v))+S[3]+4107603335&4294967295,C=N+(T<<14&4294967295|T>>>18),T=w+(N^v&(C^N))+S[8]+1163531501&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^N&(w^C))+S[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=N+(w^C&(v^w))+S[2]+4243563512&4294967295,N=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(N^v))+S[7]+1735328473&4294967295,C=N+(T<<14&4294967295|T>>>18),T=w+(N^v&(C^N))+S[12]+2368359562&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(w^C^N)+S[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=N+(v^w^C)+S[8]+2272392833&4294967295,N=v+(T<<11&4294967295|T>>>21),T=C+(N^v^w)+S[11]+1839030562&4294967295,C=N+(T<<16&4294967295|T>>>16),T=w+(C^N^v)+S[14]+4259657740&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^N)+S[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=N+(v^w^C)+S[4]+1272893353&4294967295,N=v+(T<<11&4294967295|T>>>21),T=C+(N^v^w)+S[7]+4139469664&4294967295,C=N+(T<<16&4294967295|T>>>16),T=w+(C^N^v)+S[10]+3200236656&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^N)+S[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=N+(v^w^C)+S[0]+3936430074&4294967295,N=v+(T<<11&4294967295|T>>>21),T=C+(N^v^w)+S[3]+3572445317&4294967295,C=N+(T<<16&4294967295|T>>>16),T=w+(C^N^v)+S[6]+76029189&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^N)+S[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=N+(v^w^C)+S[12]+3873151461&4294967295,N=v+(T<<11&4294967295|T>>>21),T=C+(N^v^w)+S[15]+530742520&4294967295,C=N+(T<<16&4294967295|T>>>16),T=w+(C^N^v)+S[2]+3299628645&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(C^(w|~N))+S[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=N+(w^(v|~C))+S[7]+1126891415&4294967295,N=v+(T<<10&4294967295|T>>>22),T=C+(v^(N|~w))+S[14]+2878612391&4294967295,C=N+(T<<15&4294967295|T>>>17),T=w+(N^(C|~v))+S[5]+4237533241&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~N))+S[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=N+(w^(v|~C))+S[3]+2399980690&4294967295,N=v+(T<<10&4294967295|T>>>22),T=C+(v^(N|~w))+S[10]+4293915773&4294967295,C=N+(T<<15&4294967295|T>>>17),T=w+(N^(C|~v))+S[1]+2240044497&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~N))+S[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=N+(w^(v|~C))+S[15]+4264355552&4294967295,N=v+(T<<10&4294967295|T>>>22),T=C+(v^(N|~w))+S[6]+2734768916&4294967295,C=N+(T<<15&4294967295|T>>>17),T=w+(N^(C|~v))+S[13]+1309151649&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~N))+S[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=N+(w^(v|~C))+S[11]+3174756917&4294967295,N=v+(T<<10&4294967295|T>>>22),T=C+(v^(N|~w))+S[2]+718787259&4294967295,C=N+(T<<15&4294967295|T>>>17),T=w+(N^(C|~v))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.v=function(E,v){v===void 0&&(v=E.length);const w=v-this.blockSize,S=this.C;let C=this.h,N=0;for(;N<v;){if(C==0)for(;N<=w;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<v;)if(S[C++]=E.charCodeAt(N++),C==this.blockSize){i(this,S),C=0;break}}else for(;N<v;)if(S[C++]=E[N++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=v},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;v=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=v&255,v/=256;for(this.v(E),E=Array(16),v=0,w=0;w<4;++w)for(let S=0;S<32;S+=8)E[v++]=this.g[w]>>>S&255;return E};function s(E,v){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=v(E)}function o(E,v){this.h=v;const w=[];let S=!0;for(let C=E.length-1;C>=0;C--){const N=E[C]|0;S&&N==v||(w[C]=N,S=!1)}this.g=w}var l={};function u(E){return-128<=E&&E<128?s(E,function(v){return new o([v|0],v<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return D(h(-E));const v=[];let w=1;for(let S=0;E>=w;S++)v[S]=E/w|0,w*=4294967296;return new o(v,0)}function p(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return D(p(E.substring(1),v));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(v,8));let S=m;for(let N=0;N<E.length;N+=8){var C=Math.min(8,E.length-N);const T=parseInt(E.substring(N,N+C),v);C<8?(C=h(Math.pow(v,C)),S=S.j(C).add(h(T))):(S=S.j(w),S=S.add(h(T)))}return S}var m=u(0),y=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();let E=0,v=1;for(let w=0;w<this.g.length;w++){const S=this.i(w);E+=(S>=0?S:4294967296+S)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(P(this))return"-"+D(this).toString(E);const v=h(Math.pow(E,6));var w=this;let S="";for(;;){const C=L(w,v).g;w=I(w,C.j(v));let N=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=C,R(w))return N+S;for(;N.length<6;)N="0"+N;S=N+S}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=I(this,E),P(E)?-1:R(E)?0:1};function D(E){const v=E.g.length,w=[];for(let S=0;S<v;S++)w[S]=~E.g[S];return new o(w,~E.h).add(y)}t.abs=function(){return P(this)?D(this):this},t.add=function(E){const v=Math.max(this.g.length,E.g.length),w=[];let S=0;for(let C=0;C<=v;C++){let N=S+(this.i(C)&65535)+(E.i(C)&65535),T=(N>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);S=T>>>16,N&=65535,T&=65535,w[C]=T<<16|N}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(E,v){return E.add(D(v))}t.j=function(E){if(R(this)||R(E))return m;if(P(this))return P(E)?D(this).j(D(E)):D(D(this).j(E));if(P(E))return D(this.j(D(E)));if(this.l(k)<0&&E.l(k)<0)return h(this.m()*E.m());const v=this.g.length+E.g.length,w=[];for(var S=0;S<2*v;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(let C=0;C<E.g.length;C++){const N=this.i(S)>>>16,T=this.i(S)&65535,Ve=E.i(C)>>>16,nn=E.i(C)&65535;w[2*S+2*C]+=T*nn,_(w,2*S+2*C),w[2*S+2*C+1]+=N*nn,_(w,2*S+2*C+1),w[2*S+2*C+1]+=T*Ve,_(w,2*S+2*C+1),w[2*S+2*C+2]+=N*Ve,_(w,2*S+2*C+2)}for(E=0;E<v;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=v;E<2*v;E++)w[E]=0;return new o(w,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function A(E,v){this.g=E,this.h=v}function L(E,v){if(R(v))throw Error("division by zero");if(R(E))return new A(m,m);if(P(E))return v=L(D(E),v),new A(D(v.g),D(v.h));if(P(v))return v=L(E,D(v)),new A(D(v.g),v.h);if(E.g.length>30){if(P(E)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var w=y,S=v;S.l(E)<=0;)w=U(w),S=U(S);var C=F(w,1),N=F(S,1);for(S=F(S,2),w=F(w,2);!R(S);){var T=N.add(S);T.l(E)<=0&&(C=C.add(w),N=T),S=F(S,1),w=F(w,1)}return v=I(E,C.j(v)),new A(C,v)}for(C=m;E.l(v)>=0;){for(w=Math.max(1,Math.floor(E.m()/v.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),N=h(w),T=N.j(v);P(T)||T.l(E)>0;)w-=S,N=h(w),T=N.j(v);R(N)&&(N=y),C=C.add(N),E=I(E,T)}return new A(C,E)}t.B=function(E){return L(this,E).h},t.and=function(E){const v=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<v;S++)w[S]=this.i(S)&E.i(S);return new o(w,this.h&E.h)},t.or=function(E){const v=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<v;S++)w[S]=this.i(S)|E.i(S);return new o(w,this.h|E.h)},t.xor=function(E){const v=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<v;S++)w[S]=this.i(S)^E.i(S);return new o(w,this.h^E.h)};function U(E){const v=E.g.length+1,w=[];for(let S=0;S<v;S++)w[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(w,E.h)}function F(E,v){const w=v>>5;v%=32;const S=E.g.length-w,C=[];for(let N=0;N<S;N++)C[N]=v>0?E.i(N+w)>>>v|E.i(N+w+1)<<32-v:E.i(N+w);return new o(C,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,qd=o}).apply(typeof dg<"u"?dg:typeof self<"u"?self:typeof window<"u"?window:{});var va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yE,Os,vE,za,Ih,_E,EE,wE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof va=="object"&&va];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in d))break e;d=d[x]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function p(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,x,O){for(var z=Array(arguments.length-2),J=2;J<arguments.length;J++)z[J-2]=arguments[J];return c.prototype[x].apply(g,z)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function R(a,c){for(let g=1;g<arguments.length;g++){const x=arguments[g];var d=typeof x;if(d=d!="object"?d:x?Array.isArray(x)?"array":d:"null",d=="array"||d=="object"&&typeof x.length=="number"){d=a.length||0;const O=x.length||0;a.length=d+O;for(let z=0;z<O;z++)a[d+z]=x[z]}else a.push(x)}}class P{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(a){o.setTimeout(()=>{throw a},0)}function I(){var a=E;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class _{constructor(){this.h=this.g=null}add(c,d){const g=A.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var A=new P(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let U,F=!1,E=new _,v=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(w)}};function w(){for(var a;a=I();){try{a.h.call(a.g)}catch(d){D(d)}var c=A;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}F=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Ve(a,c){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}m(Ve,C),Ve.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ve.Z.h.call(this)},Ve.prototype.h=function(){Ve.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nn="closure_listenable_"+(Math.random()*1e6|0),Xi=0;function Zi(a,c,d,g,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=x,this.key=++Xi,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function q(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function Q(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function ce(a){const c={};for(const d in a)c[d]=a[d];return c}const we="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mr(a,c){let d,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(d in g)a[d]=g[d];for(let O=0;O<we.length;O++)d=we[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Tt(a){this.src=a,this.g={},this.h=0}Tt.prototype.add=function(a,c,d,g,x){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const z=Nt(a,c,g,x);return z>-1?(c=a[z],d||(c.fa=!1)):(c=new Zi(c,this.src,O,!!g,x),c.fa=d,a.push(c)),c};function gr(a,c){const d=c.type;if(d in a.g){var g=a.g[d],x=Array.prototype.indexOf.call(g,c,void 0),O;(O=x>=0)&&Array.prototype.splice.call(g,x,1),O&&(B(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Nt(a,c,d,g){for(let x=0;x<a.length;++x){const O=a[x];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==g)return x}return-1}var kn="closure_lm_"+(Math.random()*1e6|0),fu={};function vf(a,c,d,g,x){if(Array.isArray(c)){for(let O=0;O<c.length;O++)vf(a,c[O],d,g,x);return null}return d=wf(d),a&&a[nn]?a.J(c,d,l(g)?!!g.capture:!1,x):P0(a,c,d,!1,g,x)}function P0(a,c,d,g,x,O){if(!c)throw Error("Invalid event type");const z=l(x)?!!x.capture:!!x;let J=mu(a);if(J||(a[kn]=J=new Tt(a)),d=J.add(c,d,g,z,O),d.proxy)return d;if(g=N0(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)N||(x=z),x===void 0&&(x=!1),a.addEventListener(c.toString(),g,x);else if(a.attachEvent)a.attachEvent(Ef(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function N0(){function a(d){return c.call(a.src,a.listener,d)}const c=x0;return a}function _f(a,c,d,g,x){if(Array.isArray(c))for(var O=0;O<c.length;O++)_f(a,c[O],d,g,x);else g=l(g)?!!g.capture:!!g,d=wf(d),a&&a[nn]?(a=a.i,O=String(c).toString(),O in a.g&&(c=a.g[O],d=Nt(c,d,g,x),d>-1&&(B(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[O],a.h--)))):a&&(a=mu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Nt(c,d,g,x)),(d=a>-1?c[a]:null)&&pu(d))}function pu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[nn])gr(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Ef(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=mu(c))?(gr(d,a),d.h==0&&(d.src=null,c[kn]=null)):B(a)}}}function Ef(a){return a in fu?fu[a]:fu[a]="on"+a}function x0(a,c){if(a.da)a=!0;else{c=new Ve(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&pu(a),a=d.call(g,c)}return a}function mu(a){return a=a[kn],a instanceof Tt?a:null}var gu="__closure_events_fn_"+(Math.random()*1e9>>>0);function wf(a){return typeof a=="function"?a:(a[gu]||(a[gu]=function(c){return a.handleEvent(c)}),a[gu])}function $e(){S.call(this),this.i=new Tt(this),this.M=this,this.G=null}m($e,S),$e.prototype[nn]=!0,$e.prototype.removeEventListener=function(a,c,d,g){_f(this,a,c,d,g)};function Ze(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new C(c,a);else if(c instanceof C)c.target=c.target||a;else{var x=c;c=new C(g,a),mr(c,x)}x=!0;let O,z;if(d)for(z=d.length-1;z>=0;z--)O=c.g=d[z],x=zo(O,g,!0,c)&&x;if(O=c.g=a,x=zo(O,g,!0,c)&&x,x=zo(O,g,!1,c)&&x,d)for(z=0;z<d.length;z++)O=c.g=d[z],x=zo(O,g,!1,c)&&x}$e.prototype.N=function(){if($e.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)B(d[g]);delete a.g[c],a.h--}}this.G=null},$e.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},$e.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function zo(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let x=!0;for(let O=0;O<c.length;++O){const z=c[O];if(z&&!z.da&&z.capture==d){const J=z.listener,ke=z.ha||z.src;z.fa&&gr(a.i,z),x=J.call(ke,g)!==!1&&x}}return x&&!g.defaultPrevented}function O0(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Tf(a){a.g=O0(()=>{a.g=null,a.i&&(a.i=!1,Tf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class D0 extends S{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Tf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(a){S.call(this),this.h=a,this.g={}}m(es,S);var If=[];function Sf(a){q(a.g,function(c,d){this.g.hasOwnProperty(d)&&pu(c)},a),a.g={}}es.prototype.N=function(){es.Z.N.call(this),Sf(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yu=o.JSON.stringify,L0=o.JSON.parse,V0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Af(){}function Cf(){}var ts={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vu(){C.call(this,"d")}m(vu,C);function _u(){C.call(this,"c")}m(_u,C);var yr={},kf=null;function Bo(){return kf=kf||new $e}yr.Ia="serverreachability";function Rf(a){C.call(this,yr.Ia,a)}m(Rf,C);function ns(a){const c=Bo();Ze(c,new Rf(c))}yr.STAT_EVENT="statevent";function Pf(a,c){C.call(this,yr.STAT_EVENT,a),this.stat=c}m(Pf,C);function et(a){const c=Bo();Ze(c,new Pf(c,a))}yr.Ja="timingevent";function Nf(a,c){C.call(this,yr.Ja,a),this.size=c}m(Nf,C);function rs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function is(){this.g=!0}is.prototype.ua=function(){this.g=!1};function M0(a,c,d,g,x,O){a.info(function(){if(a.g)if(O){var z="",J=O.split("&");for(let ie=0;ie<J.length;ie++){var ke=J[ie].split("=");if(ke.length>1){const Ne=ke[0];ke=ke[1];const Wt=Ne.split("_");z=Wt.length>=2&&Wt[1]=="type"?z+(Ne+"="+ke+"&"):z+(Ne+"=redacted&")}}}else z=null;else z=O;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+c+`
`+d+`
`+z})}function b0(a,c,d,g,x,O,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+c+`
`+d+`
`+O+" "+z})}function Xr(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+U0(a,d)+(g?" "+g:"")})}function j0(a,c){a.info(function(){return"TIMEOUT: "+c})}is.prototype.info=function(){};function U0(a,c){if(!a.g)return c;if(!c)return null;try{const O=JSON.parse(c);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var d=O[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var x=g[0];if(x!="noop"&&x!="stop"&&x!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return yu(O)}catch{return c}}var $o={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},xf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Of;function Eu(){}m(Eu,Af),Eu.prototype.g=function(){return new XMLHttpRequest},Of=new Eu;function ss(a){return encodeURIComponent(String(a))}function F0(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Rn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new es(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Df}function Df(){this.i=null,this.g="",this.h=!1}var Lf={},wu={};function Tu(a,c,d){a.M=1,a.A=Wo(Ht(c)),a.u=d,a.R=!0,Vf(a,null)}function Vf(a,c){a.F=Date.now(),Ho(a),a.B=Ht(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Kf(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Df,a.g=dp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new D0(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(If[0]=x.toString()),x=If);for(let O=0;O<x.length;O++){const z=vf(d,x[O],g||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.J?ce(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),ns(),M0(a.i,a.v,a.B,a.l,a.S,a.u)}Rn.prototype.ba=function(a){a=a.target;const c=this.O;c&&xn(a)==3?c.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const J=xn(this.g),ke=this.g.ya(),ie=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||tp(this.g)))){this.K||J!=4||ke==7||(ke==8||ie<=0?ns(3):ns(2)),Iu(this);var c=this.g.ca();this.X=c;var d=z0(this);if(this.o=c==200,b0(this.i,this.v,this.B,this.l,this.S,J,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,x=this.g;if((g=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var O=g;break t}}O=null}if(a=O)Xr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Su(this,a);else{this.o=!1,this.m=3,et(12),vr(this),os(this);break e}}if(this.R){a=!0;let Ne;for(;!this.K&&this.C<d.length;)if(Ne=B0(this,d),Ne==wu){J==4&&(this.m=4,et(14),a=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==Lf){this.m=4,et(15),Xr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Xr(this.i,this.l,Ne,null),Su(this,Ne);if(Mf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||d.length!=0||this.h.h||(this.m=1,et(16),a=!1),this.o=this.o&&a,!a)Xr(this.i,this.l,d,"[Invalid Chunked Response]"),vr(this),os(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ou(z),z.P=!0,et(11))}}else Xr(this.i,this.l,d,null),Su(this,d);J==4&&vr(this),this.o&&!this.K&&(J==4?lp(this.j,this):(this.o=!1,Ho(this)))}else nw(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,et(12)):(this.m=0,et(13)),vr(this),os(this)}}}catch{}finally{}};function z0(a){if(!Mf(a))return a.g.la();const c=tp(a.g);if(c==="")return"";let d="";const g=c.length,x=xn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return vr(a),os(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<g;O++)a.h.h=!0,d+=a.h.i.decode(c[O],{stream:!(x&&O==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Mf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function B0(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?wu:(d=Number(c.substring(d,g)),isNaN(d)?Lf:(g+=1,g+d>c.length?wu:(c=c.slice(g,g+d),a.C=g+d,c)))}Rn.prototype.cancel=function(){this.K=!0,vr(this)};function Ho(a){a.T=Date.now()+a.H,bf(a,a.H)}function bf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=rs(h(a.aa,a),c)}function Iu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Rn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(j0(this.i,this.B),this.M!=2&&(ns(),et(17)),vr(this),this.m=2,os(this)):bf(this,this.T-a)};function os(a){a.j.I==0||a.K||lp(a.j,a)}function vr(a){Iu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Sf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Su(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Au(d.h,a))){if(!a.L&&Au(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Jo(d),Ko(d);else break e;xu(d),et(18)}}else d.xa=x[1],0<d.xa-d.K&&x[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=rs(h(d.Va,d),6e3));Ff(d.h)<=1&&d.ta&&(d.ta=void 0)}else Er(d,11)}else if((a.L||d.g==a)&&Jo(d),!T(c))for(x=d.Ba.g.parse(c),c=0;c<x.length;c++){let ie=x[c];const Ne=ie[0];if(!(Ne<=d.K))if(d.K=Ne,ie=ie[1],d.I==2)if(ie[0]=="c"){d.M=ie[1],d.ba=ie[2];const Wt=ie[3];Wt!=null&&(d.ka=Wt,d.j.info("VER="+d.ka));const wr=ie[4];wr!=null&&(d.za=wr,d.j.info("SVER="+d.za));const On=ie[5];On!=null&&typeof On=="number"&&On>0&&(g=1.5*On,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Dn=a.g;if(Dn){const Xo=Dn.g?Dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xo){var O=g.h;O.g||Xo.indexOf("spdy")==-1&&Xo.indexOf("quic")==-1&&Xo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Cu(O,O.h),O.h=null))}if(g.G){const Du=Dn.g?Dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Du&&(g.wa=Du,ae(g.J,g.G,Du))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var z=a;if(g.na=hp(g,g.L?g.ba:null,g.W),z.L){zf(g.h,z);var J=z,ke=g.O;ke&&(J.H=ke),J.D&&(Iu(J),Ho(J)),g.g=z}else op(g);d.i.length>0&&Qo(d)}else ie[0]!="stop"&&ie[0]!="close"||Er(d,7);else d.I==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Er(d,7):Nu(d):ie[0]!="noop"&&d.l&&d.l.qa(ie),d.A=0)}}ns(4)}catch{}}var $0=class{constructor(a,c){this.g=a,this.map=c}};function jf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Uf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ff(a){return a.h?1:a.g?a.g.size:0}function Au(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Cu(a,c){a.g?a.g.add(c):a.h=c}function zf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}jf.prototype.cancel=function(){if(this.i=Bf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bf(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return k(a.i)}var $f=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function H0(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let x,O=null;g>=0?(x=a[d].substring(0,g),O=a[d].substring(g+1)):x=a[d],c(x,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Pn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Pn?(this.l=a.l,as(this,a.j),this.o=a.o,this.g=a.g,ls(this,a.u),this.h=a.h,ku(this,Qf(a.i)),this.m=a.m):a&&(c=String(a).match($f))?(this.l=!1,as(this,c[1]||"",!0),this.o=us(c[2]||""),this.g=us(c[3]||"",!0),ls(this,c[4]),this.h=us(c[5]||"",!0),ku(this,c[6]||"",!0),this.m=us(c[7]||"")):(this.l=!1,this.i=new hs(null,this.l))}Pn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(cs(c,Hf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(cs(c,Hf,!0),"@"),a.push(ss(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(cs(d,d.charAt(0)=="/"?q0:G0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",cs(d,Q0)),a.join("")},Pn.prototype.resolve=function(a){const c=Ht(this);let d=!!a.j;d?as(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)ls(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var x=c.h.lastIndexOf("/");x!=-1&&(g=c.h.slice(0,x+1)+g)}if(x=g,x==".."||x==".")g="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){g=x.lastIndexOf("/",0)==0,x=x.split("/");const O=[];for(let z=0;z<x.length;){const J=x[z++];J=="."?g&&z==x.length&&O.push(""):J==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),g&&z==x.length&&O.push("")):(O.push(J),g=!0)}g=O.join("/")}else g=x}return d?c.h=g:d=a.i.toString()!=="",d?ku(c,Qf(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Ht(a){return new Pn(a)}function as(a,c,d){a.j=d?us(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ls(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function ku(a,c,d){c instanceof hs?(a.i=c,J0(a.i,a.l)):(d||(c=cs(c,K0)),a.i=new hs(c,a.l))}function ae(a,c,d){a.i.set(c,d)}function Wo(a){return ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function us(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function cs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,W0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function W0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hf=/[#\/\?@]/g,G0=/[#\?:]/g,q0=/[#\?]/g,K0=/[#\?@]/g,Q0=/#/g;function hs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function _r(a){a.g||(a.g=new Map,a.h=0,a.i&&H0(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=hs.prototype,t.add=function(a,c){_r(this),this.i=null,a=Zr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Wf(a,c){_r(a),c=Zr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Gf(a,c){return _r(a),c=Zr(a,c),a.g.has(c)}t.forEach=function(a,c){_r(this),this.g.forEach(function(d,g){d.forEach(function(x){a.call(c,x,g,this)},this)},this)};function qf(a,c){_r(a);let d=[];if(typeof c=="string")Gf(a,c)&&(d=d.concat(a.g.get(Zr(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return _r(this),this.i=null,a=Zr(this,a),Gf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=qf(this,a),a.length>0?String(a[0]):c):c};function Kf(a,c,d){Wf(a,c),d.length>0&&(a.i=null,a.g.set(Zr(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const x=ss(d);d=qf(this,d);for(let O=0;O<d.length;O++){let z=x;d[O]!==""&&(z+="="+ss(d[O])),a.push(z)}}return this.i=a.join("&")};function Qf(a){const c=new hs;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Zr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function J0(a,c){c&&!a.j&&(_r(a),a.i=null,a.g.forEach(function(d,g){const x=g.toLowerCase();g!=x&&(Wf(this,g),Kf(this,x,d))},a)),a.j=c}function Y0(a,c){const d=new is;if(o.Image){const g=new Image;g.onload=p(Nn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=p(Nn,d,"TestLoadImage: error",!1,c,g),g.onabort=p(Nn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=p(Nn,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function X0(a,c){const d=new is,g=new AbortController,x=setTimeout(()=>{g.abort(),Nn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(x),O.ok?Nn(d,"TestPingServer: ok",!0,c):Nn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Nn(d,"TestPingServer: error",!1,c)})}function Nn(a,c,d,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(d)}catch{}}function Z0(){this.g=new V0}function Ru(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Ru,Af),Ru.prototype.g=function(){return new Go(this.i,this.h)};function Go(a,c){$e.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Go,$e),t=Go.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,fs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jf(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jf(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ds(this):fs(this),this.readyState==3&&Jf(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ds(this))},t.Na=function(a){this.g&&(this.response=a,ds(this))},t.ga=function(){this.g&&ds(this)};function ds(a){a.readyState=4,a.l=null,a.j=null,a.B=null,fs(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yf(a){let c="";return q(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Pu(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Yf(d),typeof a=="string"?d!=null&&ss(d):ae(a,c,d))}function ve(a){$e.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ve,$e);var ew=/^https?$/i,tw=["POST","PUT"];t=ve.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Of.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){Xf(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)d.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(tw,c,void 0)>=0)||g||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of d)this.g.setRequestHeader(O,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Xf(this,O)}};function Xf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Zf(a),qo(a)}function Zf(a){a.A||(a.A=!0,Ze(a,"complete"),Ze(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ze(this,"complete"),Ze(this,"abort"),qo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qo(this,!0)),ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ep(this):this.Xa())},t.Xa=function(){ep(this)};function ep(a){if(a.h&&typeof s<"u"){if(a.v&&xn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ze(a,"readystatechange"),xn(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=O===0){let z=String(a.D).match($f)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!ew.test(z?z.toLowerCase():"")}d=g}if(d)Ze(a,"complete"),Ze(a,"success");else{a.o=6;try{var x=xn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",Zf(a)}}finally{qo(a)}}}}function qo(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||Ze(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return xn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),L0(c)}};function tp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function nw(a){const c={};a=(a.g&&xn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=F0(a[g]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[x]||[];c[x]=O,O.push(d)}Q(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ps(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function np(a){this.za=0,this.i=[],this.j=new is,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ps("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ps("baseRetryDelayMs",5e3,a),this.Za=ps("retryDelaySeedMs",1e4,a),this.Ta=ps("forwardChannelMaxRetries",2,a),this.va=ps("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new jf(a&&a.concurrentRequestLimit),this.Ba=new Z0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=np.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){et(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=hp(this,null,this.W),Qo(this)};function Nu(a){if(rp(a),a.I==3){var c=a.V++,d=Ht(a.J);if(ae(d,"SID",a.M),ae(d,"RID",c),ae(d,"TYPE","terminate"),ms(a,d),c=new Rn(a,a.j,c),c.M=2,c.A=Wo(Ht(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=dp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ho(c)}cp(a)}function Ko(a){a.g&&(Ou(a),a.g.cancel(),a.g=null)}function rp(a){Ko(a),a.v&&(o.clearTimeout(a.v),a.v=null),Jo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Qo(a){if(!Uf(a.h)&&!a.m){a.m=!0;var c=a.Ea;U||v(),F||(U(),F=!0),E.add(c,a),a.D=0}}function rw(a,c){return Ff(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=rs(h(a.Ea,a,c),up(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new Rn(this,this.j,a);let O=this.o;if(this.U&&(O?(O=ce(O),mr(O,this.U)):O=this.U),this.u!==null||this.R||(x.J=O,O=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=sp(this,x,c),d=Ht(this.J),ae(d,"RID",a),ae(d,"CVER",22),this.G&&ae(d,"X-HTTP-Session-Id",this.G),ms(this,d),O&&(this.R?c="headers="+ss(Yf(O))+"&"+c:this.u&&Pu(d,this.u,O)),Cu(this.h,x),this.Ra&&ae(d,"TYPE","init"),this.S?(ae(d,"$req",c),ae(d,"SID","null"),x.U=!0,Tu(x,d,null)):Tu(x,d,c),this.I=2}}else this.I==3&&(a?ip(this,a):this.i.length==0||Uf(this.h)||ip(this))};function ip(a,c){var d;c?d=c.l:d=a.V++;const g=Ht(a.J);ae(g,"SID",a.M),ae(g,"RID",d),ae(g,"AID",a.K),ms(a,g),a.u&&a.o&&Pu(g,a.u,a.o),d=new Rn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=sp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Cu(a.h,d),Tu(d,g,c)}function ms(a,c){a.H&&q(a.H,function(d,g){ae(c,g,d)}),a.l&&q({},function(d,g){ae(c,g,d)})}function sp(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var x=a.i;let J=-1;for(;;){const ke=["count="+d];J==-1?d>0?(J=x[0].g,ke.push("ofs="+J)):J=0:ke.push("ofs="+J);let ie=!0;for(let Ne=0;Ne<d;Ne++){var O=x[Ne].g;const Wt=x[Ne].map;if(O-=J,O<0)J=Math.max(0,x[Ne].g-100),ie=!1;else try{O="req"+O+"_"||"";try{var z=Wt instanceof Map?Wt:Object.entries(Wt);for(const[wr,On]of z){let Dn=On;l(On)&&(Dn=yu(On)),ke.push(O+wr+"="+encodeURIComponent(Dn))}}catch(wr){throw ke.push(O+"type="+encodeURIComponent("_badmap")),wr}}catch{g&&g(Wt)}}if(ie){z=ke.join("&");break e}}z=void 0}return a=a.i.splice(0,d),c.G=a,z}function op(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;U||v(),F||(U(),F=!0),E.add(c,a),a.A=0}}function xu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=rs(h(a.Da,a),up(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ap(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=rs(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,et(10),Ko(this),ap(this))};function Ou(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ap(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Ht(a.na);ae(c,"RID","rpc"),ae(c,"SID",a.M),ae(c,"AID",a.K),ae(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&ae(c,"TO",a.ia),ae(c,"TYPE","xmlhttp"),ms(a,c),a.u&&a.o&&Pu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Wo(Ht(c)),d.u=null,d.R=!0,Vf(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ko(this),xu(this),et(19))};function Jo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function lp(a,c){var d=null;if(a.g==c){Jo(a),Ou(a),a.g=null;var g=2}else if(Au(a.h,c))d=c.G,zf(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var x=a.D;g=Bo(),Ze(g,new Nf(g,d)),Qo(a)}else op(a);else if(x=c.m,x==3||x==0&&c.X>0||!(g==1&&rw(a,c)||g==2&&xu(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),x){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function up(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Er(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const x=!g;g=new Pn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||as(g,"https"),Wo(g),x?Y0(g.toString(),d):X0(g.toString(),d)}else et(2);a.I=0,a.l&&a.l.pa(c),cp(a),rp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function cp(a){if(a.I=0,a.ja=[],a.l){const c=Bf(a.h);(c.length!=0||a.i.length!=0)&&(R(a.ja,c),R(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function hp(a,c,d){var g=d instanceof Pn?Ht(d):new Pn(d);if(g.g!="")c&&(g.g=c+"."+g.g),ls(g,g.u);else{var x=o.location;g=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;const O=new Pn(null);g&&as(O,g),c&&(O.g=c),x&&ls(O,x),d&&(O.h=d),g=O}return d=a.G,c=a.wa,d&&c&&ae(g,d,c),ae(g,"VER",a.ka),ms(a,g),g}function dp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new ve(new Ru({ab:d})):new ve(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fp(){}t=fp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Yo(){}Yo.prototype.g=function(a,c){return new pt(a,c)};function pt(a,c){$e.call(this),this.g=new np(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ei(this)}m(pt,$e),pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Nu(this.g)},pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=yu(a),a=d);c.i.push(new $0(c.Ya++,a)),c.I==3&&Qo(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,Nu(this.g),delete this.g,pt.Z.N.call(this)};function pp(a){vu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}m(pp,vu);function mp(){_u.call(this),this.status=1}m(mp,_u);function ei(a){this.g=a}m(ei,fp),ei.prototype.ra=function(){Ze(this.g,"a")},ei.prototype.qa=function(a){Ze(this.g,new pp(a))},ei.prototype.pa=function(a){Ze(this.g,new mp)},ei.prototype.oa=function(){Ze(this.g,"b")},Yo.prototype.createWebChannel=Yo.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,wE=function(){return new Yo},EE=function(){return Bo()},_E=yr,Ih={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$o.NO_ERROR=0,$o.TIMEOUT=8,$o.HTTP_ERROR=6,za=$o,xf.COMPLETE="complete",vE=xf,Cf.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",$e.prototype.listen=$e.prototype.J,Os=Cf,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,yE=ve}).apply(typeof va<"u"?va:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Ji="12.11.0";function qk(t){Ji=t}/**
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
 */const Br=new Ld("@firebase/firestore");function ni(){return Br.logLevel}function H(t,...e){if(Br.logLevel<=Z.DEBUG){const n=e.map(Kd);Br.debug(`Firestore (${Ji}): ${t}`,...n)}}function $r(t,...e){if(Br.logLevel<=Z.ERROR){const n=e.map(Kd);Br.error(`Firestore (${Ji}): ${t}`,...n)}}function yo(t,...e){if(Br.logLevel<=Z.WARN){const n=e.map(Kd);Br.warn(`Firestore (${Ji}): ${t}`,...n)}}function Kd(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,TE(t,r,n)}function TE(t,e,n){let r=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw $r(r),new Error(r)}function Ee(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||TE(e,i,r)}function oe(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class IE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class Qk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jk{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string",31837,{l:r}),new IE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string",2055,{h:e}),new qe(e)}}class Yk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Xk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Yk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ee(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new fg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Qd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=eR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Sh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return pc(i)===pc(s)?ne(i,s):pc(i)?1:-1}return ne(t.length,e.length)}const tR=55296,nR=57343;function pc(t){const e=t.charCodeAt(0);return e>=tR&&e<=nR}function ji(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const pg="__name__";class Kt{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Kt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Kt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=Kt.isNumericId(e),i=Kt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Kt.extractNumericId(e).compare(Kt.extractNumericId(n)):Sh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qd.fromString(e.substring(4,e.length-2))}}class me extends Kt{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const rR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Kt{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return rR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pg}static keyField(){return new Ue([pg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
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
 */function SE(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iR(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mg(t){if(!K.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gg(t){if(K.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function AE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Jd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function CE(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jd(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ae(t,e){const n={typeString:t};return e&&(n.value=e),n}function Lo(t,e){if(!AE(t))throw new W(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const yg=-62135596800,vg=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*vg);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yg)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vg}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lo(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Ae("string",fe._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
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
 */const vo=-1;function sR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new or(i,K.empty(),e)}function oR(t){return new or(t.readTime,t.key,vo)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(he.min(),K.empty(),vo)}static max(){return new or(he.max(),K.empty(),vo)}}function aR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const lR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yd(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==lR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function cR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xd.ce=-1;/**
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
 */const Zd=-1;function ef(t){return t==null}function Al(t){return t===0&&1/t==-1/0}function hR(t){return typeof t=="number"&&Number.isInteger(t)&&!Al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const kE="";function dR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_g(e)),e=fR(t.get(n),e);return _g(e)}function fR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case kE:n+="";break;default:n+=s}}return n}function _g(t){return t+kE+""}/**
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
 */function Eg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function RE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ft{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new ft(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??be.EMPTY,this.right=s??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wg(this.data.getIterator())}getIteratorFrom(e){return new wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pR("Invalid base64 string: "+s):s}}(e);return new en(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new en(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const mR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(Ee(!!t,39018),typeof t=="string"){let e=0;const n=mR.exec(t);if(Ee(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ui(t){return typeof t=="string"?en.fromBase64String(t):en.fromUint8Array(t)}/**
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
 */const PE="server_timestamp",NE="__type__",xE="__previous_value__",OE="__local_write_time__";function tf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[NE])==null?void 0:r.stringValue)===PE}function nf(t){const e=t.mapValue.fields[xE];return tf(e)?nf(e):e}function Cl(t){const e=Hr(t.mapValue.fields[OE].timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class gR{constructor(e,n,r,i,s,o,l,u,h,p,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=m}}const kl="(default)";class Rl{constructor(e,n){this.projectId=e,this.database=n||kl}static empty(){return new Rl("","")}get isDefaultDatabase(){return this.database===kl}isEqual(e){return e instanceof Rl&&e.projectId===this.projectId&&e.database===this.database}}function yR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rl(t.options.projectId,e)}/**
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
 */const DE="__type__",vR="__max__",Ea={mapValue:{}},LE="__vector__",Ah="value";function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tf(t)?4:ER(t)?9007199254740991:_R(t)?10:11:Y(28295,{value:t})}function tn(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Cl(t).isEqual(Cl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hr(i.timestampValue),l=Hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ui(i.bytesValue).isEqual(Ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=je(i.doubleValue),l=je(s.doubleValue);return o===l?Al(o)===Al(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Eg(o)!==Eg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function _o(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=Wr(t),r=Wr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=je(s.integerValue||s.doubleValue),u=je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Tg(t.timestampValue,e.timestampValue);case 4:return Tg(Cl(t),Cl(e));case 5:return Sh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ui(s),u=Ui(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=ne(l[h],u[h]);if(p!==0)return p}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(je(s.latitude),je(o.latitude));return l!==0?l:ne(je(s.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ig(t.arrayValue,e.arrayValue);case 10:return function(s,o){var y,k,R,P;const l=s.fields||{},u=o.fields||{},h=(y=l[Ah])==null?void 0:y.arrayValue,p=(k=u[Ah])==null?void 0:k.arrayValue,m=ne(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((P=p==null?void 0:p.values)==null?void 0:P.length)||0);return m!==0?m:Ig(h,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ea.mapValue&&o===Ea.mapValue)return 0;if(s===Ea.mapValue)return 1;if(o===Ea.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const y=Sh(u[m],p[m]);if(y!==0)return y;const k=Fi(l[u[m]],h[p[m]]);if(k!==0)return k}return ne(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function Tg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Hr(t),r=Hr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Ig(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Fi(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function zi(t){return Ch(t)}function Ch(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ch(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ch(n.fields[o])}`;return i+"}"}(t.mapValue):Y(61005,{value:t})}function Ba(t){switch(Wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nf(t);return e?16+Ba(e):16;case 5:return 2*t.stringValue.length;case 6:return Ui(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ba(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Yi(r.fields,(s,o)=>{i+=s.length+Ba(o)}),i}(t.mapValue);default:throw Y(13486,{value:t})}}function kh(t){return!!t&&"integerValue"in t}function rf(t){return!!t&&"arrayValue"in t}function $a(t){return!!t&&"mapValue"in t}function _R(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[DE])==null?void 0:r.stringValue)===LE}function Hs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return{...t}}function ER(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===vR}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Hs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$a(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(Hs(this.value))}}function VE(t){const e=[];return Yi(t.fields,(n,r)=>{const i=new Ue([n]);if($a(r)){const s=VE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ut(e)}/**
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
 */class Pl{constructor(e,n){this.position=e,this.inclusive=n}}function Sg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ag(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Nl{constructor(e,n="asc"){this.field=e,this.dir=n}}function wR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ME{}class De extends ME{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new IR(e,n,r):n==="array-contains"?new CR(e,r):n==="in"?new kR(e,r):n==="not-in"?new RR(e,r):n==="array-contains-any"?new PR(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new SR(e,r):new AR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Fi(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(Fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends ME{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ar(e,n)}matches(e){return bE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bE(t){return t.op==="and"}function jE(t){return TR(t)&&bE(t)}function TR(t){for(const e of t.filters)if(e instanceof ar)return!1;return!0}function Rh(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+zi(t.value);if(jE(t))return t.filters.map(e=>Rh(e)).join(",");{const e=t.filters.map(n=>Rh(n)).join(",");return`${t.op}(${e})`}}function UE(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof ar?function(r,i){return i instanceof ar&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&UE(o,i.filters[l]),!0):!1}(t,e):void Y(19439)}function FE(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${zi(n.value)}`}(t):t instanceof ar?function(n){return n.op.toString()+" {"+n.getFilters().map(FE).join(" ,")+"}"}(t):"Filter"}class IR extends De{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class SR extends De{constructor(e,n){super(e,"in",n),this.keys=zE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AR extends De{constructor(e,n){super(e,"not-in",n),this.keys=zE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class CR extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rf(n)&&_o(n.arrayValue,this.value)}}class kR extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class RR extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!_o(this.value.arrayValue,n)}}class PR extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_o(this.value.arrayValue,r))}}/**
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
 */class NR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Cg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new NR(t,e,n,r,i,s,o)}function sf(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ef(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zi(r)).join(",")),e.Te=n}return e.Te}function of(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!UE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ag(t.startAt,e.startAt)&&Ag(t.endAt,e.endAt)}/**
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
 */class su{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function xR(t,e,n,r,i,s,o,l){return new su(t,e,n,r,i,s,o,l)}function OR(t){return new su(t)}function kg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DR(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function LR(t){return t.collectionGroup!==null}function Ws(t){const e=oe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(Ue.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Nl(s,r))}),n.has(Ue.keyField().canonicalString())||e.Ee.push(new Nl(Ue.keyField(),r))}return e.Ee}function Dr(t){const e=oe(t);return e.Ie||(e.Ie=VR(e,Ws(t))),e.Ie}function VR(t,e){if(t.limitType==="F")return Cg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nl(i.field,s)});const n=t.endAt?new Pl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pl(t.startAt.position,t.startAt.inclusive):null;return Cg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ph(t,e,n){return new su(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function BE(t,e){return of(Dr(t),Dr(e))&&t.limitType===e.limitType}function $E(t){return`${sf(Dr(t))}|lt:${t.limitType}`}function Ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>FE(i)).join(", ")}]`),ef(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>zi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>zi(i)).join(",")),`Target(${r})`}(Dr(t))}; limitType=${t.limitType})`}function af(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ws(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Sg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ws(r),i)||r.endAt&&!function(o,l,u){const h=Sg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ws(r),i))}(t,e)}function MR(t){return(e,n)=>{let r=!1;for(const i of Ws(t)){const s=bR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bR(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Fi(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
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
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return RE(this.inner)}size(){return this.innerSize}}/**
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
 */const jR=new ft(K.comparator);function xl(){return jR}const HE=new ft(K.comparator);function wa(...t){let e=HE;for(const n of t)e=e.insert(n.key,n);return e}function WE(t){let e=HE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return Gs()}function GE(){return Gs()}function Gs(){return new Jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const UR=new ft(K.comparator),FR=new ze(K.comparator);function Qe(...t){let e=FR;for(const n of t)e=e.add(n);return e}const zR=new ze(ne);function BR(){return zR}/**
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
 */function lf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Al(e)?"-0":e}}function qE(t){return{integerValue:""+t}}function $R(t,e){return hR(e)?qE(e):lf(t,e)}/**
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
 */class ou{constructor(){this._=void 0}}function HR(t,e,n){return t instanceof Ol?function(i,s){const o={fields:{[NE]:{stringValue:PE},[OE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&tf(s)&&(s=nf(s)),s&&(o.fields[xE]=s),{mapValue:o}}(n,e):t instanceof Eo?QE(t,e):t instanceof wo?JE(t,e):function(i,s){const o=KE(i,s),l=Rg(o)+Rg(i.Ae);return kh(o)&&kh(i.Ae)?qE(l):lf(i.serializer,l)}(t,e)}function WR(t,e,n){return t instanceof Eo?QE(t,e):t instanceof wo?JE(t,e):n}function KE(t,e){return t instanceof Dl?function(r){return kh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ol extends ou{}class Eo extends ou{constructor(e){super(),this.elements=e}}function QE(t,e){const n=YE(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class wo extends ou{constructor(e){super(),this.elements=e}}function JE(t,e){let n=YE(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class Dl extends ou{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Rg(t){return je(t.integerValue||t.doubleValue)}function YE(t){return rf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Eo&&i instanceof Eo||r instanceof wo&&i instanceof wo?ji(r.elements,i.elements,tn):r instanceof Dl&&i instanceof Dl?tn(r.Ae,i.Ae):r instanceof Ol&&i instanceof Ol}(t.transform,e.transform)}class qR{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class au{}function XE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new e0(t.key,mn.none()):new Mo(t.key,t.data,mn.none());{const n=t.data,r=Mt.empty();let i=new ze(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yr(t.key,r,new Ut(i.toArray()),mn.none())}}function KR(t,e,n){t instanceof Mo?function(i,s,o){const l=i.value.clone(),u=Ng(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Yr?function(i,s,o){if(!Ha(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ng(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ZE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qs(t,e,n,r){return t instanceof Mo?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=s.value.clone(),p=xg(s.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yr?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=xg(s.fieldTransforms,u,o),p=o.data;return p.setAll(ZE(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Ha(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function QR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=KE(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function Pg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ji(r,i,(s,o)=>GR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mo extends au{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yr extends au{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ng(t,e,n){const r=new Map;Ee(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,WR(o,l,n[i]))}return r}function xg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,HR(s,o,e))}return r}class e0 extends au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JR extends au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class YR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&KR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=GE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=XE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Qe())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>Pg(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>Pg(n,r))}}class uf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return UR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new uf(e,n,r,i)}}/**
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
 */class XR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Ie,ee;function ZR(t){switch(t){case M.OK:return Y(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function eP(t){if(t===void 0)return $r("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ie.OK:return M.OK;case Ie.CANCELLED:return M.CANCELLED;case Ie.UNKNOWN:return M.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return M.INTERNAL;case Ie.UNAVAILABLE:return M.UNAVAILABLE;case Ie.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ie.NOT_FOUND:return M.NOT_FOUND;case Ie.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ie.ABORTED:return M.ABORTED;case Ie.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ie.DATA_LOSS:return M.DATA_LOSS;default:return Y(39323,{code:t})}}(ee=Ie||(Ie={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new qd([4294967295,4294967295],0);class tP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rP(t,e){return Nh(t,e.toTimestamp())}function Ci(t){return Ee(!!t,49232),he.fromTimestamp(function(n){const r=Hr(n);return new fe(r.seconds,r.nanos)}(t))}function t0(t,e){return xh(t,e).canonicalString()}function xh(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iP(t){const e=me.fromString(t);return Ee(dP(e),10190,{key:e.toString()}),e}function Oh(t,e){return t0(t.databaseId,e.path)}function sP(t){const e=iP(t);return e.length===4?me.emptyPath():aP(e)}function oP(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aP(t){return Ee(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Og(t,e,n){return{name:Oh(t,e),fields:n.value.mapValue.fields}}function lP(t,e){let n;if(e instanceof Mo)n={update:Og(t,e.key,e.value)};else if(e instanceof e0)n={delete:Oh(t,e.key)};else if(e instanceof Yr)n={update:Og(t,e.key,e.data),updateMask:hP(e.fieldMask)};else{if(!(e instanceof JR))return Y(16599,{dt:e.type});n={verify:Oh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ol)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Dl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:rP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(t,e.precondition)),n}function uP(t,e){return t&&t.length>0?(Ee(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Ci(i.updateTime):Ci(s);return o.isEqual(he.min())&&(o=Ci(s)),new qR(o,i.transformResults||[])}(n,e))):[]}function cP(t){let e=sP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const y=n0(m);return y instanceof ar&&jE(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(R){return new Nl(ri(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,ef(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,k=m.values||[];return new Pl(k,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,k=m.values||[];return new Pl(k,y)}(n.endAt)),xR(e,i,o,s,l,"F",u,h)}function n0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ri(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ri(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ri(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ri(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return De.create(ri(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ar.create(n.compositeFilter.filters.map(r=>n0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function ri(t){return Ue.fromServerFormat(t.fieldPath)}function hP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function r0(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class fP{constructor(e){this.yt=e}}function pP(t){const e=cP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ph(e,e.limit,"L"):e}/**
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
 */class mP{constructor(){this.bn=new gP}addToCollectionParentIndex(e,n){return this.bn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(or.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class gP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(me.comparator)).toArray()}}/**
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
 */const Dg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},i0=41943040;class at{static withCacheSize(e){return new at(e,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */at.DEFAULT_COLLECTION_PERCENTILE=10,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,at.DEFAULT=new at(i0,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),at.DISABLED=new at(-1,0,0);/**
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
 */const Lg="LruGarbageCollector",yP=1048576;function Vg([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class vP{constructor(e){this.Pr=e,this.buffer=new ze(Vg),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class _P{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Lg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vo(n)?H(Lg,"Ignoring IndexedDB error during garbage collection: ",n):await Yd(n)}await this.Ar(3e5)})}}class EP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Xd.ce);const r=new vP(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Dg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dg):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),ni()<=Z.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function wP(t,e){return new EP(t,e)}/**
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
 */class TP{constructor(){this.changes=new Jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class IP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class SP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&qs(r.mutation,i,Ut.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Qe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Qe()){const i=Pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Qe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=xl();const o=Gs(),l=function(){return Gs()}();return n.forEach((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Yr)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),qs(p.mutation,h,p.mutation.getFieldMask(),fe.now())):o.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>l.set(h,new IP(p,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Gs();let i=new ft((o,l)=>o-l),s=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||Ut.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(i.get(l.batchId)||Qe()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=GE();p.forEach(y=>{if(!s.has(y)){const k=XE(n.get(y),r.get(y));k!==null&&m.set(y,k),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return DR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Pr());let l=vo,u=s;return o.next(h=>V.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{u=u.insert(p,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Qe())).next(p=>({batchId:l,changes:WE(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=wa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=wa();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const h=function(m,y){return new su(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,Vt.newInvalidDocument(p)))});let l=wa();return o.forEach((u,h)=>{const p=s.get(u);p!==void 0&&qs(p.mutation,h,Ut.empty(),fe.now()),af(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class AP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return V.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ci(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:pP(i.bundledQuery),readTime:Ci(i.readTime)}}(n)),V.resolve()}}/**
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
 */class CP{constructor(){this.overlays=new ft(K.comparator),this.Lr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Pr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ft((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=Pr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Pr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return V.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new XR(n,r));let s=this.Lr.get(n);s===void 0&&(s=Qe(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class kP{constructor(){this.sessionToken=en.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class cf{constructor(){this.kr=new ze(xe.qr),this.Kr=new ze(xe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new xe(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new xe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new me([])),r=new xe(n,e),i=new xe(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new K(new me([])),r=new xe(n,e),i=new xe(n,e+1);let s=Qe();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new xe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return K.comparator(e.key,n.key)||ne(e.Jr,n.Jr)}static Ur(e,n){return ne(e.Jr,n.Jr)||K.comparator(e.key,n.key)}}/**
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
 */class RP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new ze(xe.qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new xe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Zd:this.Yn-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new xe(n,0),i=new xe(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ne);return n.forEach(i=>{const s=new xe(i,0),o=new xe(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),V.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new xe(new K(s),0);let l=new ze(ne);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Jr)),!0)},o),V.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return V.forEach(n.mutations,i=>{const s=new xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new xe(n,0),i=this.Hr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class PP{constructor(e){this.ti=e,this.docs=function(){return new ft(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=xl();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xl();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||aR(oR(p),r)<=0||(i.has(p.key)||af(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y(9500)}ni(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new NP(this)}getSize(e){return V.resolve(this.size)}}class NP extends TP{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class xP{constructor(e){this.persistence=e,this.ri=new Jr(n=>sf(n),of),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.ii=0,this.si=new cf,this.targetCount=0,this.oi=Bi._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),V.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Bi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.lr(n),V.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.si.containsKey(n))}}/**
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
 */class s0{constructor(e,n){this._i={},this.overlays={},this.ai=new Xd(0),this.ui=!1,this.ui=!0,this.ci=new kP,this.referenceDelegate=e(this),this.li=new xP(this),this.indexManager=new mP,this.remoteDocumentCache=function(i){return new PP(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new fP(n),this.Pi=new AP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new RP(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new OP(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return V.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class OP extends uR{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Ri=new cf,this.Ai=null}static Vi(e){return new hf(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,r=>{const i=K.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Ll{constructor(e,n){this.persistence=e,this.fi=new Jr(r=>dR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=wP(this,n)}static Vi(e,n){return new Ll(e,n)}Ti(){}Ei(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return V.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,he.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ba(e.data.value)),n}wr(e,n,r){return V.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class df{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=Qe(),i=Qe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new df(e,n.fromCache,r,i)}}/**
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
 */class DP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class LP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return cS()?8:cR(Xe())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new DP;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ni()<=Z.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(ni()<=Z.DEBUG&&H("QueryEngine","Query:",Ss(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ni()<=Z.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dr(n))):V.resolve())}gs(e,n){if(kg(n))return V.resolve(null);let r=Dr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ph(n,null,"F"),r=Dr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Qe(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,Ph(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return kg(n)||i.isEqual(he.min())?V.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?V.resolve(null):(ni()<=Z.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ss(n)),this.Ds(e,o,n,sR(i,vo)).next(l=>l))})}Ss(e,n){let r=new ze(MR(e));return n.forEach((i,s)=>{af(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ni()<=Z.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ss(n)),this.fs.getDocumentsMatchingQuery(e,n,or.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const VP="LocalStore";class MP{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new ft(ne),this.Fs=new Jr(s=>sf(s),of),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function bP(t,e,n,r){return new MP(t,e,n,r)}async function o0(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Qe();for(const h of i){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function jP(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,y=m.keys();let k=V.resolve();return y.forEach(R=>{k=k.next(()=>p.getEntry(u,R)).next(P=>{const D=h.docVersions.get(R);Ee(D!==null,48541),P.version.compareTo(D)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),p.addEntry(P)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Qe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UP(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function FP(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Mg{constructor(){this.activeTargetIds=BR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zP{constructor(){this.vo=new Mg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Mg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BP{Mo(e){}shutdown(){}}/**
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
 */const bg="ConnectivityMonitor";class jg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(bg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(bg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ta=null;function Dh(){return Ta===null?Ta=function(){return 268435456+Math.round(2147483648*Math.random())}():Ta++,"0x"+Ta.toString(16)}/**
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
 */const mc="RestConnection",$P={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class HP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===kl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Dh(),l=this.Qo(e,n.toUriEncodedString());H(mc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),p=No(h);return this.zo(e,l,u,r,p).then(m=>(H(mc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw yo(mc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ji}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=$P[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class WP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ge="WebChannelConnection",As=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ki extends HP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ki.c_){const e=EE();As(e,_E.STAT_EVENT,n=>{n.stat===Ih.PROXY?H(Ge,"STAT_EVENT: detected buffering proxy"):n.stat===Ih.NOPROXY&&H(Ge,"STAT_EVENT: detected no buffering proxy")}),ki.c_=!0}}zo(e,n,r,i,s){const o=Dh();return new Promise((l,u)=>{const h=new yE;h.setWithCredentials(!0),h.listenOnce(vE.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case za.NO_ERROR:const m=h.getResponseJson();H(Ge,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case za.TIMEOUT:H(Ge,`RPC '${e}' ${o} timed out`),u(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case za.HTTP_ERROR:const y=h.getStatus();if(H(Ge,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const R=k==null?void 0:k.error;if(R&&R.status&&R.message){const P=function(I){const _=I.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(_)>=0?_:M.UNKNOWN}(R.status);u(new W(P,R.message))}else u(new W(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new W(M.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(Ge,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);H(Ge,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",p,r,15)})}T_(e,n,r){const i=Dh(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");H(Ge,`Creating RPC '${e}' stream ${i}: ${h}`,l);const p=o.createWebChannel(h,l);this.E_(p);let m=!1,y=!1;const k=new WP({Jo:R=>{y?H(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(H(Ge,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Ge,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},Ho:()=>p.close()});return As(p,Os.EventType.OPEN,()=>{y||(H(Ge,`RPC '${e}' stream ${i} transport opened.`),k.i_())}),As(p,Os.EventType.CLOSE,()=>{y||(y=!0,H(Ge,`RPC '${e}' stream ${i} transport closed`),k.o_(),this.I_(p))}),As(p,Os.EventType.ERROR,R=>{y||(y=!0,yo(Ge,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),k.o_(new W(M.UNAVAILABLE,"The operation could not be completed")))}),As(p,Os.EventType.MESSAGE,R=>{var P;if(!y){const D=R.data[0];Ee(!!D,16349);const I=D,_=(I==null?void 0:I.error)||((P=I[0])==null?void 0:P.error);if(_){H(Ge,`RPC '${e}' stream ${i} received error:`,_);const A=_.status;let L=function(E){const v=Ie[E];if(v!==void 0)return eP(v)}(A),U=_.message;A==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&yo(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=M.INTERNAL,U="Unknown error status: "+A+" with message "+_.message),y=!0,k.o_(new W(L,U)),p.close()}else H(Ge,`RPC '${e}' stream ${i} received:`,D),k.__(D)}}),ki.u_(),setTimeout(()=>{k.s_()},0),k}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return wE()}}/**
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
 */function GP(t){return new ki(t)}function gc(){return typeof document<"u"?document:null}/**
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
 */function lu(t){return new tP(t,!0)}/**
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
 */ki.c_=!1;class a0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Ug="PersistentStream";class qP{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new a0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(Ug,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(Ug,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KP extends qP{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=uP(e.writeResults,e.commitTime),r=Ci(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=oP(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lP(this.serializer,r))};this.q_(n)}}/**
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
 */class QP{}class JP extends QP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,xh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,xh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function YP(t,e,n,r){return new JP(t,e,n,r)}class XP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const bo="RemoteStore";class ZP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Uo(this)&&(H(bo,"Restarting streams for network reachability change."),await async function(u){const h=oe(u);h.Ia.add(4),await jo(h),h.Va.set("Unknown"),h.Ia.delete(4),await uu(h)}(this))})}),this.Va=new XP(r,i)}}async function uu(t){if(Uo(t))for(const e of t.Ra)await e(!0)}async function jo(t){for(const e of t.Ra)await e(!1)}function Uo(t){return oe(t).Ia.size===0}async function l0(t,e,n){if(!Vo(e))throw e;t.Ia.add(1),await jo(t),t.Va.set("Offline"),n||(n=()=>UP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(bo,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await uu(t)})}function u0(t,e){return e().catch(n=>l0(t,n,e))}async function cu(t){const e=oe(t),n=lr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zd;for(;eN(e);)try{const i=await FP(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,tN(e,i)}catch(i){await l0(e,i)}c0(e)&&h0(e)}function eN(t){return Uo(t)&&t.Ta.length<10}function tN(t,e){t.Ta.push(e);const n=lr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function c0(t){return Uo(t)&&!lr(t).x_()&&t.Ta.length>0}function h0(t){lr(t).start()}async function nN(t){lr(t).ra()}async function rN(t){const e=lr(t);for(const n of t.Ta)e.ea(n.mutations)}async function iN(t,e,n){const r=t.Ta.shift(),i=uf.from(r,e,n);await u0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cu(t)}async function sN(t,e){e&&lr(t).Y_&&await async function(r,i){if(function(o){return ZR(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();lr(r).B_(),await u0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cu(r)}}(t,e),c0(t)&&h0(t)}async function Fg(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),H(bo,"RemoteStore received new credentials");const r=Uo(n);n.Ia.add(3),await jo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await uu(n)}async function oN(t,e){const n=oe(t);e?(n.Ia.delete(2),await uu(n)):e||(n.Ia.add(2),await jo(n),n.Va.set("Unknown"))}function lr(t){return t.fa||(t.fa=function(n,r,i){const s=oe(n);return s.sa(),new KP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:nN.bind(null,t),t_:sN.bind(null,t),ta:rN.bind(null,t),na:iN.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await cu(t)):(await t.fa.stop(),t.Ta.length>0&&(H(bo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class ff{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new ff(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function d0(t,e){if($r("AsyncQueue",`${e}: ${t}`),Vo(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}class aN{constructor(){this.queries=zg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=zg(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function zg(){return new Jr(t=>$E(t),BE)}function lN(t){t.Ca.forEach(e=>{e.next()})}var Bg,$g;($g=Bg||(Bg={})).Ma="default",$g.Cache="cache";const uN="SyncEngine";class cN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Jr(l=>$E(l),BE),this.Eu=new Map,this.Iu=new Set,this.Ru=new ft(K.comparator),this.Au=new Map,this.Vu=new cf,this.du={},this.mu=new Map,this.fu=Bi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function hN(t,e,n){const r=mN(t);try{const i=await function(o,l){const u=oe(o),h=fe.now(),p=l.reduce((k,R)=>k.add(R.key),Qe());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let R=xl(),P=Qe();return u.xs.getEntries(k,p).next(D=>{R=D,R.forEach((I,_)=>{_.isValidDocument()||(P=P.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,R)).next(D=>{m=D;const I=[];for(const _ of l){const A=QR(_,m.get(_.key).overlayedDocument);A!=null&&I.push(new Yr(_.key,A,VE(A.value.mapValue),mn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,I,l)}).next(D=>{y=D;const I=D.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(k,D.batchId,I)})}).then(()=>({batchId:y.batchId,changes:WE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new ft(ne)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await hu(r,i.changes),await cu(r.remoteStore)}catch(i){const s=d0(i,"Failed to persist write");n.reject(s)}}function Hg(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const y of m.Sa)y.va(l)&&(h=!0)}),h&&lN(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dN(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await jP(n.localStore,e);p0(n,r,null),f0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hu(n,i)}catch(i){await Yd(i)}}async function fN(t,e,n){const r=oe(t);try{const i=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(Ee(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);p0(r,e,n),f0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await hu(r,i)}catch(i){await Yd(i)}}function f0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function p0(t,e,n){const r=oe(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}async function hu(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=df.Is(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,h){const p=oe(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,y=>V.forEach(y.Ts,k=>p.persistence.referenceDelegate.addReference(m,y.targetId,k)).next(()=>V.forEach(y.Es,k=>p.persistence.referenceDelegate.removeReference(m,y.targetId,k)))))}catch(m){if(!Vo(m))throw m;H(VP,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const k=p.vs.get(y),R=k.snapshotVersion,P=k.withLastLimboFreeSnapshotVersion(R);p.vs=p.vs.insert(y,P)}}}(r.localStore,s))}async function pN(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){H(uN,"User change. New user:",e.toKey());const r=await o0(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hu(n,r.Ns)}}function mN(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fN.bind(null,e),e}class Vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return bP(this.persistence,new LP,e.initialUser,this.serializer)}Cu(e){return new s0(hf.Vi,this.serializer)}Du(e){return new zP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vl.provider={build:()=>new Vl};class gN extends Vl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ee(this.persistence.referenceDelegate instanceof Ll,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _P(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?at.withCacheSize(this.cacheSizeBytes):at.DEFAULT;return new s0(r=>Ll.Vi(r,n),this.serializer)}}class Lh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pN.bind(null,this.syncEngine),await oN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aN}()}createDatastore(e){const n=lu(e.databaseInfo.databaseId),r=GP(e.databaseInfo);return YP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new ZP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Hg(this.syncEngine,n,0),function(){return jg.v()?new jg:new BP}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,p){const m=new cN(i,s,o,l,u,h);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);H(bo,"RemoteStore shutting down."),s.Ia.add(5),await jo(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Lh.provider={build:()=>new Lh};/**
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
 */const ur="FirestoreClient";class yN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=Qd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(ur,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(ur,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=d0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yc(t,e){t.asyncQueue.verifyOperationInProgress(),H(ur,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await o0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vN(t);H(ur,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Fg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Fg(e.remoteStore,i)),t._onlineComponents=e}async function vN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(ur,"Using user provided OfflineComponentProvider");try{await yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;yo("Error using user provided cache. Falling back to memory cache: "+n),await yc(t,new Vl)}}else H(ur,"Using default OfflineComponentProvider"),await yc(t,new gN(void 0));return t._offlineComponents}async function _N(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(ur,"Using user provided OnlineComponentProvider"),await Wg(t,t._uninitializedComponentsProvider._online)):(H(ur,"Using default OnlineComponentProvider"),await Wg(t,new Lh))),t._onlineComponents}function EN(t){return _N(t).then(e=>e.syncEngine)}function wN(t,e){const n=new Or;return t.asyncQueue.enqueueAndForget(async()=>hN(await EN(t),e,n)),n.promise}/**
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
 */function m0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const TN="ComponentProvider",Gg=new Map;function IN(t,e,n,r,i){return new gR(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,m0(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const g0="firestore.googleapis.com",qg=!0;class Kg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=g0,this.ssl=qg}else this.host=e.host,this.ssl=e.ssl??qg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=i0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yP)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=m0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class du{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Kk;switch(r.type){case"firstParty":return new Xk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gg.get(n);r&&(H(TN,"Removing Datastore"),Gg.delete(n),r.terminate())}(this),Promise.resolve()}}function SN(t,e,n,r={}){var h;t=CE(t,du);const i=No(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&x_(`https://${l}`),s.host!==g0&&s.host!==l&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Ur(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=qe.MOCK_USER;else{p=rS(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new qe(y)}t._authCredentials=new Qk(new IE(p,m))}}/**
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
 */class pf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pf(this.firestore,e,this._query)}}class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}toJSON(){return{type:Je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Lo(n,Je._jsonSchema))return new Je(e,r||null,new K(me.fromString(n.referencePath)))}}Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:Ae("string",Je._jsonSchemaVersion),referencePath:Ae("string")};class rr extends pf{constructor(e,n,r){super(e,n,OR(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new K(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function AN(t,e,...n){if(t=rt(t),SE("collection","path",e),t instanceof du){const r=me.fromString(e,...n);return gg(r),new rr(t,null,r)}{if(!(t instanceof Je||t instanceof rr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return gg(r),new rr(t.firestore,null,r)}}function CN(t,e,...n){if(t=rt(t),arguments.length===1&&(e=Qd.newId()),SE("doc","path",e),t instanceof du){const r=me.fromString(e,...n);return mg(r),new Je(t,null,new K(r))}{if(!(t instanceof Je||t instanceof rr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return mg(r),new Je(t.firestore,t instanceof rr?t.converter:null,new K(r))}}/**
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
 */const Qg="AsyncQueue";class Jg{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new a0(this,"async_queue_retry"),this._c=()=>{const r=gc();r&&H(Qg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=gc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Or;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Vo(e))throw e;H(Qg,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,$r("INTERNAL UNHANDLED ERROR: ",Yg(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=ff.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Y(47125,{Pc:Yg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Yg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class y0 extends du{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Jg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jg(e),this._firestoreClient=void 0,await e}}}function kN(t,e){const n=typeof t=="object"?t:V_(),r=typeof t=="string"?t:kl,i=Md(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=tS("firestore");s&&SN(i,...s)}return i}function RN(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PN(t),t._firestoreClient}function PN(t){var r,i,s,o;const e=t._freezeSettings(),n=IN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new yN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(en.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bt(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lo(e,bt._jsonSchema))return bt.fromBase64String(e.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:Ae("string",bt._jsonSchemaVersion),bytes:Ae("string")};/**
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
 */class v0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _0{constructor(e){this._methodName=e}}/**
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
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(Lo(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Ae("string",gn._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
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
 */class Zt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lo(e,Zt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Zt(e.vectorValues);throw new W(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zt._jsonSchemaVersion="firestore/vectorValue/1.0",Zt._jsonSchema={type:Ae("string",Zt._jsonSchemaVersion),vectorValues:Ae("object")};/**
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
 */const NN=/^__.*__$/;class xN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mo(e,this.data,n,this.fieldTransforms)}}function E0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:t})}}class mf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new mf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ml(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(E0(this.dataSource)&&NN.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class ON{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lu(e)}A(e,n,r,i=!1){return new mf({dataSource:e,methodName:n,targetDoc:r,path:Ue.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function DN(t){const e=t._freezeSettings(),n=lu(t._databaseId);return new ON(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LN(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);S0("Data must be an object, but it was:",o,r);const l=T0(r,o);let u,h;if(s.merge)u=new Ut(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const y=gf(e,m,n);if(!o.contains(y))throw new W(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);bN(p,y)||p.push(y)}u=new Ut(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new xN(new Mt(l),u,h)}function w0(t,e){if(I0(t=rt(t)))return S0("Unsupported field value:",e,t),T0(t,e);if(t instanceof _0)return function(r,i){if(!E0(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=w0(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $R(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:Nh(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nh(i.serializer,s)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bt)return{bytesValue:nP(i.serializer,r._byteString)};if(r instanceof Je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:t0(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zt)return function(o,l){const u=o instanceof Zt?o.toArray():o;return{mapValue:{fields:{[DE]:{stringValue:LE},[Ah]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.yc("VectorValues must only contain numeric values.");return lf(l.serializer,p)})}}}}}}(r,i);if(r0(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Jd(r)}`)}(t,e)}function T0(t,e){const n={};return RE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(t,(r,i)=>{const s=w0(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function I0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof gn||t instanceof bt||t instanceof Je||t instanceof _0||t instanceof Zt||r0(t))}function S0(t,e,n){if(!I0(n)||!AE(n)){const r=Jd(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function gf(t,e,n){if((e=rt(e))instanceof v0)return e._internalPath;if(typeof e=="string")return MN(t,e);throw Ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const VN=new RegExp("[~\\*/\\[\\]]");function MN(t,e,n){if(e.search(VN)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new v0(...e.split("."))._internalPath}catch{throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function bN(t,e){return t.some(n=>n.isEqual(e))}const Xg="@firebase/firestore",Zg="4.13.0";/**
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
 */class A0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(gf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jN extends A0{data(){return super.data()}}function UN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ia{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ri extends A0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ri._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ri._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ri._jsonSchema={type:Ae("string",Ri._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Wa extends Ri{data(e={}){return super.data(e)}}class Ks{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ia(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wa(this._firestore,this._userDataWriter,r.key,r,new Ia(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Wa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ia(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Wa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ia(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:FN(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ks._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function FN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */Ks._jsonSchemaVersion="firestore/querySnapshot/1.0",Ks._jsonSchema={type:Ae("string",Ks._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};function zN(t,e){const n=CE(t.firestore,y0),r=CN(t),i=UN(t.converter,e),s=DN(t.firestore);return BN(n,[LN(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function BN(t,e){const n=RN(t);return wN(n,e)}(function(e,n=!0){qk(qi),Mi(new Fr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new y0(new Jk(r.getProvider("auth-internal")),new Zk(o,r.getProvider("app-check-internal")),yR(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),nr(Xg,Zg,e),nr(Xg,Zg,"esm2020")})();const $N={apiKey:"AIzaSyAtgrCrXy0-3RiEq9KPLRHnS5xw20u6zLA",authDomain:"valhalla-box-gym-app.firebaseapp.com",projectId:"valhalla-box-gym-app",storageBucket:"valhalla-box-gym-app.firebasestorage.app",messagingSenderId:"304953173191",appId:"1:304953173191:web:60c58812478a2524890ae2"},C0=L_($N),Mn=$k(C0),HN=kN(C0),k0=b.createContext(),Fo=()=>b.useContext(k0),WN=({children:t})=>{const[e,n]=b.useState(null),[r,i]=b.useState(!0),[s,o]=b.useState(!1),l=async(P,D,I)=>{const _=await CC(Mn,P,D);return await PC(_.user,{displayName:I}),_},u=(P,D)=>kC(Mn,P,D),h=()=>{const P=new an;return ya(Mn,P)},p=()=>{const P=new on;return ya(Mn,P)},m=()=>{const P=new ln;return ya(Mn,P)},y=()=>{const P=new $s("tiktok.com");return ya(Mn,P)},k=()=>DC(Mn);b.useEffect(()=>OC(Mn,D=>{n(D),i(!1)}),[]);const R={currentUser:e,login:u,loginWithGoogle:h,loginWithFacebook:p,loginWithTwitter:m,loginWithTiktok:y,signup:l,logout:k,isAuthModalOpen:s,setIsAuthModalOpen:o};return f.jsx(k0.Provider,{value:R,children:!r&&t})},R0=b.createContext(),yf=()=>b.useContext(R0),GN=({children:t})=>{const[e,n]=b.useState(()=>{const y=localStorage.getItem("valhalla_cart");return y?JSON.parse(y):[]}),[r,i]=b.useState(!1);b.useEffect(()=>{localStorage.setItem("valhalla_cart",JSON.stringify(e))},[e]);const s=y=>{n(k=>k.find(P=>P.id===y.id)?k.map(P=>P.id===y.id?{...P,quantity:P.quantity+1}:P):[...k,{...y,quantity:1}]),i(!0)},o=y=>{n(k=>k.filter(R=>R.id!==y))},l=(y,k)=>{k<1||n(R=>R.map(P=>P.id===y?{...P,quantity:k}:P))},u=()=>{n([])},h=e.reduce((y,k)=>y+k.price*k.quantity,0),p=e.reduce((y,k)=>y+k.quantity,0),m={cart:e,addToCart:s,removeFromCart:o,updateQuantity:l,clearCart:u,cartTotal:h,cartCount:p,isCartOpen:r,setIsCartOpen:i};return f.jsx(R0.Provider,{value:m,children:t})},qN=({isOpen:t,onClose:e})=>{const{login:n,signup:r,loginWithGoogle:i,loginWithFacebook:s,loginWithTwitter:o,loginWithTiktok:l}=Fo(),[u,h]=b.useState(!0),[p,m]=b.useState(""),[y,k]=b.useState(""),[R,P]=b.useState(""),[D,I]=b.useState(""),[_,A]=b.useState(!1);if(!t)return null;const L=async F=>{F.preventDefault(),I(""),A(!0);try{u?await n(p,y):await r(p,y,R||"Guerrero"),e()}catch(E){I(E.code==="auth/email-already-in-use"?"El guerrero ya está registrado en nuestros salones.":E.code==="auth/wrong-password"||E.code==="auth/user-not-found"||E.code==="auth/invalid-credential"?"Credenciales incorrectas. ¿Olvidaste tu juramento?":"Error al conectar con los dioses. Intenta de nuevo.")}A(!1)},U=async(F,E)=>{I(""),A(!0);try{await F(),e()}catch{I(`Error al conectar con ${E}. Intenta nuevamente.`)}A(!1)};return f.jsx("div",{className:"auth-modal-overlay",onClick:e,children:f.jsxs("div",{className:"auth-modal-content",onClick:F=>F.stopPropagation(),children:[f.jsx("button",{className:"auth-close-btn",onClick:e,children:f.jsx(Dd,{size:24})}),f.jsxs("div",{className:"auth-header",children:[f.jsx(Od,{className:"text-gold mb-2 mx-auto",size:32}),f.jsx("h2",{children:u?"ENTRA AL VALHALLA":"ÚNETE A LA TRIBU"}),f.jsx("p",{className:"text-muted",children:u?"Regresa a tu lugar de entrenamiento":"Forja tu legado con nosotros"})]}),D&&f.jsx("div",{className:"auth-error",children:D}),f.jsxs("form",{onSubmit:L,className:"auth-form",children:[!u&&f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Nombre de Guerrero"}),f.jsx("input",{type:"text",value:R,onChange:F=>P(F.target.value),placeholder:"Ej. Ragnar",required:!u})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Correo Electrónico"}),f.jsx("input",{type:"email",value:p,onChange:F=>m(F.target.value),placeholder:"tu@correo.com",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Contraseña secreta"}),f.jsx("input",{type:"password",value:y,onChange:F=>k(F.target.value),placeholder:"••••••••",required:!0,minLength:"6"})]}),f.jsx("button",{type:"submit",className:"btn-primary w-100 mt-2",disabled:_,children:_?"CARGANDO...":u?"INICIAR SESIÓN":"FORJAR ALIANZA"})]}),f.jsxs("div",{className:"divider-container",children:[f.jsx("div",{className:"divider-line"}),f.jsx("span",{className:"divider-text",children:"O ENTRA CON"}),f.jsx("div",{className:"divider-line"})]}),f.jsxs("div",{className:"social-btn-group",children:[f.jsxs("button",{type:"button",className:"google-btn w-100",onClick:()=>U(i,"Google"),disabled:_,children:[f.jsxs("svg",{className:"google-icon",viewBox:"0 0 24 24",children:[f.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),f.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),f.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),f.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continuar con Google"]}),f.jsxs("button",{type:"button",className:"google-btn facebook-btn w-100",onClick:()=>U(s,"Facebook"),disabled:_,children:[f.jsx("svg",{className:"google-icon",viewBox:"0 0 24 24",children:f.jsx("path",{fill:"#1877F2",d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),"Continuar con Facebook"]}),f.jsxs("button",{type:"button",className:"google-btn twitter-btn w-100",onClick:()=>U(o,"Twitter/X"),disabled:_,children:[f.jsx("svg",{className:"google-icon",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),"Continuar con Twitter / X"]}),f.jsxs("button",{type:"button",className:"google-btn tiktok-btn w-100",onClick:()=>U(l,"TikTok"),disabled:_,children:[f.jsx("svg",{className:"google-icon",viewBox:"0 0 448 512",fill:"currentColor",children:f.jsx("path",{d:"M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"})}),"Continuar con TikTok"]})]}),f.jsx("div",{className:"auth-toggle",children:f.jsxs("p",{children:[u?"¿Aún no eres miembro? ":"¿Ya tienes un lugar en la mesa? ",f.jsx("button",{type:"button",className:"toggle-mode-btn",onClick:()=>{h(!u),I("")},children:u?"Regístrate aquí":"Inicia Sesión"})]})})]})})},KN=()=>{const{cart:t,removeFromCart:e,updateQuantity:n,cartTotal:r,clearCart:i,isCartOpen:s,setIsCartOpen:o}=yf(),{currentUser:l,setIsAuthModalOpen:u}=Fo(),[h,p]=b.useState(!1);if(!s)return null;const m=async()=>{if(!l){o(!1),u(!0);return}if(t.length!==0){p(!0);try{const y={userId:l.uid,userName:l.displayName||"Guerrero Valhalla",userEmail:l.email,items:t,total:r,date:new Date().toISOString(),status:"pending"};zN(AN(HN,"orders"),y).catch(P=>console.error("Error BD:",P));const k=`¡Skål! Soy ${y.userName}, y quiero forjar mi armadura con este pedido:

`+t.map(P=>`- ${P.quantity}x ${P.name} ($${P.price}) = $${P.quantity*P.price}`).join(`
`)+`

Total del Botín: $${r}`,R=`https://wa.me/542317533963?text=${encodeURIComponent(k)}`;i(),o(!1),p(!1),window.open(R,"_blank")}catch(y){console.error("Error procesando el pedido:",y),alert("Hubo un error al forjar tu pedido. Intenta nuevamente.")}p(!1)}};return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"cart-overlay",onClick:()=>o(!1)}),f.jsxs("div",{className:"cart-drawer",children:[f.jsxs("div",{className:"cart-header",children:[f.jsx("h2",{children:"TU BOTÍN"}),f.jsx("button",{className:"cart-close",onClick:()=>o(!1),children:f.jsx(Dd,{size:24})})]}),f.jsx("div",{className:"cart-items",children:t.length===0?f.jsxs("div",{className:"cart-empty",children:[f.jsx(B1,{size:48,className:"text-muted mx-auto mb-3"}),f.jsx("p",{children:"Tu botín está vacío, guerrero."}),f.jsx("button",{className:"btn-outline w-100 mt-4",onClick:()=>o(!1),children:"VOLVER A LA ARMERÍA"})]}):t.map(y=>f.jsxs("div",{className:"cart-item",children:[f.jsx("div",{className:"cart-item-img",style:{backgroundImage:`url(${y.image})`}}),f.jsxs("div",{className:"cart-item-details",children:[f.jsx("h4",{children:y.name}),f.jsxs("p",{className:"text-gold font-bold",children:["$",y.price]}),f.jsxs("div",{className:"cart-item-controls",children:[f.jsxs("div",{className:"quantity-ctrl",children:[f.jsx("button",{onClick:()=>n(y.id,y.quantity-1),children:"-"}),f.jsx("span",{children:y.quantity}),f.jsx("button",{onClick:()=>n(y.id,y.quantity+1),children:"+"})]}),f.jsx("button",{className:"remove-btn",onClick:()=>e(y.id),children:f.jsx(W1,{size:18})})]})]})]},y.id))}),t.length>0&&f.jsxs("div",{className:"cart-footer",children:[f.jsxs("div",{className:"cart-total",children:[f.jsx("span",{children:"Total del Botín:"}),f.jsxs("span",{className:"text-gold font-bold",children:["$",r]})]}),f.jsx("button",{className:"btn-primary w-100 mt-3 d-flex align-center justify-center gap-2",onClick:m,disabled:h,children:h?"PROCESANDO...":"RECLAMAR BOTÍN"}),f.jsx("p",{className:"text-muted text-center mt-2",style:{fontSize:"0.8rem"},children:"Finalizarás el pedido por WhatsApp directamente con La Tribu."})]})]})]})},QN=()=>{var k;const[t,e]=b.useState(!1),[n,r]=b.useState(!1),[i,s]=b.useState(!0),{currentUser:o,logout:l,isAuthModalOpen:u,setIsAuthModalOpen:h}=Fo(),{cartCount:p,setIsCartOpen:m}=yf();b.useEffect(()=>{localStorage.getItem("theme")==="light"&&(s(!1),document.documentElement.setAttribute("data-theme","light"))},[]);const y=()=>{const R=i?"light":"dark";s(!i),document.documentElement.setAttribute("data-theme",R),localStorage.setItem("theme",R)};return b.useEffect(()=>{const R=()=>e(window.scrollY>50);return window.addEventListener("scroll",R),()=>window.removeEventListener("scroll",R)},[]),b.useEffect(()=>{const R=()=>{window.innerWidth>768&&n&&r(!1)};return window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[n]),f.jsxs(f.Fragment,{children:[f.jsx(qN,{isOpen:u,onClose:()=>h(!1)}),f.jsx(KN,{}),f.jsxs("nav",{className:`navbar ${t?"scrolled":""}`,children:[f.jsxs("div",{className:"navbar-container",children:[f.jsxs(Ti,{to:"/",className:"logo-container",children:[f.jsx(Od,{className:"logo-icon",size:32}),f.jsxs("span",{className:"logo-text",children:[f.jsx("span",{className:"logo-valhalla",children:"VALHALLA"}),f.jsx("span",{className:"logo-boxgym text-gold",children:"BOX GYM"})]})]}),f.jsxs("div",{className:"nav-links desktop-only",children:[f.jsx("a",{href:"/#philosophy",children:"La Tribu"}),f.jsx("a",{href:"/#services",children:"Entrenamiento"}),f.jsx("a",{href:"/#schedule",children:"Horarios"}),f.jsx("a",{href:"/#pricing",children:"Tarifas"}),f.jsx(Ti,{to:"/armeria",children:"Armería"}),f.jsx("button",{onClick:y,className:"theme-toggle-btn","aria-label":"Toggle Theme",children:i?f.jsx(Mm,{size:20}):f.jsx(Lm,{size:20})}),f.jsxs("button",{onClick:()=>m(!0),className:"cart-toggle-btn",children:[f.jsx(Vm,{size:20}),p>0&&f.jsx("span",{className:"cart-badge",children:p})]}),o?f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[f.jsx("span",{className:"text-gold",style:{fontSize:"0.9rem",fontWeight:"bold"},children:((k=o.displayName)==null?void 0:k.split(" ")[0])||"Guerrero"}),f.jsx("button",{onClick:l,className:"btn-outline nav-btn",style:{padding:"0.5rem 1rem",fontSize:"0.8rem"},children:"SALIR"})]}):f.jsx("button",{onClick:()=>h(!0),className:"btn-primary nav-btn",children:"Únete Ahora"})]}),f.jsxs("div",{className:"mobile-only",children:[f.jsxs("button",{onClick:()=>m(!0),className:"cart-toggle-btn",style:{marginRight:"0.5rem"},children:[f.jsx(Vm,{size:24}),p>0&&f.jsx("span",{className:"cart-badge",children:p})]}),f.jsx("button",{onClick:y,className:"theme-toggle-btn",children:i?f.jsx(Mm,{size:24}):f.jsx(Lm,{size:24})}),f.jsx("button",{className:"mobile-menu-btn",onClick:()=>r(!n),children:n?f.jsx(Dd,{size:28}):f.jsx(z1,{size:28})})]})]}),n&&f.jsxs("div",{className:"mobile-menu",children:[f.jsx("a",{href:"/#philosophy",onClick:()=>r(!1),children:"La Tribu"}),f.jsx("a",{href:"/#services",onClick:()=>r(!1),children:"Entrenamiento"}),f.jsx("a",{href:"/#schedule",onClick:()=>r(!1),children:"Horarios"}),f.jsx("a",{href:"/#pricing",onClick:()=>r(!1),children:"Tarifas"}),f.jsx(Ti,{to:"/armeria",onClick:()=>r(!1),children:"Armería"}),o?f.jsx("button",{onClick:()=>{l(),r(!1)},className:"btn-outline mobile-btn",children:"SALIR DE LA CUENTA"}):f.jsx("button",{onClick:()=>{h(!0),r(!1)},className:"btn-primary mobile-btn",children:"Únete Ahora"})]})]})]})},JN="542317533963",YN="https://www.google.com/maps/search/Urquiza+671,+9+de+Julio,+Buenos+Aires,+Argentina",XN="https://www.instagram.com/valhallaboxgym",ZN=()=>f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",className:"contact-icon",style:{color:"#25D366",flexShrink:0},children:f.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),e2=()=>{const t=()=>{window.open(`https://wa.me/${JN}?text=${encodeURIComponent(`⚔️ ¡Skål! Me acerco desde las tierras del sur para conocer el Valhalla Box Gym.
Quiero más información sobre el salón de los guerreros. ¡Que Odin guíe mi camino! 🪓🛡️`)}`,"_blank")};return f.jsx("footer",{className:"footer-section",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"footer-grid",children:[f.jsxs("div",{className:"footer-brand",children:[f.jsxs("div",{className:"logo-container mb-4",children:[f.jsx(Od,{className:"logo-icon",size:32}),f.jsxs("span",{className:"logo-text",children:["VALHALLA ",f.jsx("span",{className:"text-gold",children:"BOX GYM"})]})]}),f.jsx("p",{className:"text-muted",children:"Forjando guerreros a través de disciplina, fuerza y comunidad."})]}),f.jsxs("div",{className:"footer-links",children:[f.jsx("h4",{children:"Navegación"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"#home",children:"Inicio"})}),f.jsx("li",{children:f.jsx("a",{href:"#philosophy",children:"La Tribu"})}),f.jsx("li",{children:f.jsx("a",{href:"#services",children:"Clases"})}),f.jsx("li",{children:f.jsx("a",{href:"#pricing",children:"Tarifas"})})]})]}),f.jsxs("div",{className:"footer-contact",children:[f.jsx("h4",{children:"Encuéntranos"}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx(F1,{size:20,className:"contact-icon"}),f.jsx("a",{href:YN,target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"Urquiza 671, 9 de Julio (6500)"})]}),f.jsxs("li",{children:[f.jsx(ZN,{}),f.jsx("button",{onClick:t,className:"contact-link contact-btn",children:"+54 2317 533963"})]}),f.jsxs("li",{children:[f.jsx(U1,{size:20,className:"contact-icon"}),f.jsx("a",{href:XN,target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"Instagram"})]})]})]})]}),f.jsx("div",{className:"footer-bottom",children:f.jsxs("p",{className:"text-muted",children:["© ",new Date().getFullYear()," Valhalla Box Gym. Todos los derechos reservados."]})})]})})},t2=()=>f.jsxs("section",{className:"hero-section",id:"home",children:[f.jsx("div",{className:"hero-overlay"}),f.jsxs("div",{className:"hero-content container",children:[f.jsxs("h1",{className:"hero-title animate-fade-in",children:["FORJA TU ",f.jsx("span",{className:"text-gold",children:"LEYENDA"}),".",f.jsx("br",{}),"ENTRENA COMO UN DIOS."]}),f.jsx("p",{className:"hero-subtitle animate-fade-in delay-100",children:"En Valhalla Box Gym no es solo sudor, es honor. Únete a la tribu definitiva de guerreros."}),f.jsxs("div",{className:"hero-actions animate-fade-in delay-200",children:[f.jsx("a",{href:"/#pricing",className:"btn-primary",children:"TU CAMBIO COMIENZA HOY"}),f.jsx(Ti,{to:"/instalaciones",className:"btn-outline",children:"Ver Instalaciones"})]})]})]}),n2=()=>f.jsx("section",{className:"philosophy-section",id:"philosophy",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"philosophy-grid",children:[f.jsxs("div",{className:"philosophy-text",children:[f.jsxs("h2",{children:["NUESTRA ",f.jsx("span",{className:"text-gold",children:"FILOSOFÍA"})]}),f.jsx("div",{className:"divider"}),f.jsx("p",{children:'"En Valhalla Box Gym no solo entrenamos el cuerpo; forjamos el espíritu de guerrero. Creemos en la disciplina, el trabajo duro y la comunidad. Aquí no hay espejos de vanidad, solo acero, sudor y el sonido de progreso."'})]}),f.jsxs("div",{className:"philosophy-features",children:[f.jsxs("div",{className:"feature-item",children:[f.jsx("div",{className:"feature-icon",children:f.jsx($1,{size:32})}),f.jsxs("div",{children:[f.jsx("h3",{children:"Honor & Respeto"}),f.jsx("p",{children:"Compite contigo mismo, respeta a tus hermanos de armas."})]})]}),f.jsxs("div",{className:"feature-item",children:[f.jsx("div",{className:"feature-icon",children:f.jsx(H1,{size:32})}),f.jsxs("div",{children:[f.jsx("h3",{children:"Intensidad Real"}),f.jsx("p",{children:"Entrenamientos diseñados para desafiar tus límites físicos y mentales."})]})]}),f.jsxs("div",{className:"feature-item",children:[f.jsx("div",{className:"feature-icon",children:f.jsx(G1,{size:32})}),f.jsxs("div",{children:[f.jsx("h3",{children:"La Tribu"}),f.jsx("p",{children:"Apoyo constante de la comunidad para asegurar que nadie se quede atrás."})]})]})]})]})})}),r2=()=>{const t=[{id:1,title:"MUSCULACIÓN",image:"/assets/images/strength.png",description:"fuerza y desarrollo libre"},{id:2,title:"GAP",image:"/assets/images/functional.png",description:"glúteos, abdomen y piernas"},{id:3,title:"KICKBOXING",image:"/assets/images/striking.png",description:"combate y striking"}];return f.jsx("section",{className:"services-section",id:"services",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header text-center",children:[f.jsxs("h2",{children:["NUESTRAS ",f.jsx("span",{className:"text-gold",children:"DISCIPLINAS"})]}),f.jsx("p",{className:"subtitle",children:"ELIGE TU CAMPO DE BATALLA"})]}),f.jsx("div",{className:"services-grid",children:t.map(e=>f.jsxs("div",{className:"service-card",children:[f.jsx("div",{className:"service-image",style:{backgroundImage:`url(${e.image})`},children:f.jsx("div",{className:"service-overlay"})}),f.jsxs("div",{className:"service-content",children:[f.jsx("h3",{children:e.title}),f.jsx("p",{children:e.description})]})]},e.id))}),f.jsxs("div",{className:"services-cta text-center mt-5",children:[f.jsx("p",{className:"cta-text",children:"¿Listo para entrar al Valhalla? No dejes para mañana el guerrero que puedes ser hoy."}),f.jsx("a",{href:"#pricing",className:"btn-primary",style:{display:"inline-block",textDecoration:"none"},children:"VER TARIFAS"})]})]})})},i2=()=>f.jsx("section",{className:"about-section",id:"about",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"about-story",children:[f.jsxs("h2",{children:["EL ORIGEN DEL ",f.jsx("span",{className:"text-gold",children:"VALHALLA"})]}),f.jsx("div",{className:"divider mx-auto"}),f.jsx("p",{children:'Valhalla Box Gym nació de la pasión por el entrenamiento real. Cansados de los gimnasios comerciales donde pasas desapercibido entre máquinas de poleas, decidimos construir un verdadero "Bastión del Norte". Un lugar donde puedes gritar al levantar pesado, donde soltar barras no es un delito, y donde todos conocen tu nombre.'})]}),f.jsxs("div",{className:"jarls-section mt-5",children:[f.jsxs("h2",{className:"text-center mb-4",children:["NUESTROS ",f.jsx("span",{className:"text-gold",children:"JARLS"})]}),f.jsx("p",{className:"text-center subtitle mb-5",children:"LOS ENTRENADORES QUE TE GUIARÁN EN BATALLA"}),f.jsxs("div",{className:"trainers-grid",children:[f.jsxs("div",{className:"trainer-card",children:[f.jsx("div",{className:"trainer-img",style:{backgroundImage:"url('/assets/images/trainer.png')"}}),f.jsxs("div",{className:"trainer-info",children:[f.jsx("h3",{children:"NACHO"}),f.jsx("p",{className:"specialty",children:"Head Coach & Strength"}),f.jsx("p",{className:"quote",children:'"El hierro no miente. Te da exactamente lo que le entregas."'})]})]}),f.jsxs("div",{className:"trainer-card",children:[f.jsx("div",{className:"trainer-img",style:{backgroundImage:"url('/assets/images/lautaro.png')"}}),f.jsxs("div",{className:"trainer-info",children:[f.jsx("h3",{children:"LAUTARO"}),f.jsx("p",{className:"specialty",children:"Functional & Agility"}),f.jsx("p",{className:"quote",children:'"La motivación es temporal. La disciplina te hace leyenda."'})]})]}),f.jsxs("div",{className:"trainer-card",children:[f.jsx("div",{className:"trainer-img",style:{backgroundImage:"url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop')"}}),f.jsxs("div",{className:"trainer-info",children:[f.jsx("h3",{children:"SANTINO"}),f.jsx("p",{className:"specialty",children:"Striking Specialist"}),f.jsx("p",{className:"quote",children:'"Entrena tan duro que la vida real parezca fácil."'})]})]})]})]})]})}),s2=()=>{const[t,e]=b.useState("All"),n=[{day:"Lunes",time:"08:00 AM",name:"MUSCULACIÓN",trainer:"Lautaro",type:"Musculación"},{day:"Lunes",time:"13:00 PM",name:"GAP",trainer:"Nacho",type:"GAP"},{day:"Lunes",time:"19:00 PM",name:"MUSCULACIÓN",trainer:"Santino",type:"Musculación"},{day:"Martes",time:"08:00 AM",name:"MUSCULACIÓN",trainer:"Lautaro",type:"Musculación"},{day:"Martes",time:"13:00 PM",name:"GAP",trainer:"Nacho",type:"GAP"},{day:"Martes",time:"20:00 PM",name:"KICKBOXING",trainer:"Nacho",type:"Kickboxing"},{day:"Miércoles",time:"08:00 AM",name:"MUSCULACIÓN",trainer:"Lautaro",type:"Musculación"},{day:"Miércoles",time:"13:00 PM",name:"GAP",trainer:"Nacho",type:"GAP"},{day:"Miércoles",time:"19:00 PM",name:"MUSCULACIÓN",trainer:"Santino",type:"Musculación"},{day:"Jueves",time:"08:00 AM",name:"MUSCULACIÓN",trainer:"Lautaro",type:"Musculación"},{day:"Jueves",time:"13:00 PM",name:"GAP",trainer:"Nacho",type:"GAP"},{day:"Jueves",time:"20:00 PM",name:"KICKBOXING",trainer:"Nacho",type:"Kickboxing"},{day:"Viernes",time:"08:00 AM",name:"MUSCULACIÓN",trainer:"Lautaro",type:"Musculación"},{day:"Viernes",time:"13:00 PM",name:"GAP",trainer:"Nacho",type:"GAP"},{day:"Viernes",time:"19:00 PM",name:"MUSCULACIÓN",trainer:"Santino",type:"Musculación"}],r=["All","Musculación","GAP","Kickboxing"],i=t==="All"?n:n.filter(s=>s.type===t);return f.jsx("section",{className:"schedule-section",id:"schedule",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header text-center",children:[f.jsxs("h2",{children:["HORARIOS DE ",f.jsx("span",{className:"text-gold",children:"BATALLA"})]}),f.jsx("p",{className:"subtitle",children:"PREPÁRATE PARA LA ACCIÓN"})]}),f.jsx("div",{className:"filter-container",children:r.map(s=>f.jsx("button",{className:`filter-btn ${t===s?"active":""}`,onClick:()=>e(s),children:s==="All"?"TODAS":s.toUpperCase()},s))}),f.jsxs("div",{className:"schedule-table-container",children:[f.jsxs("table",{className:"schedule-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Día"}),f.jsx("th",{children:"Hora"}),f.jsx("th",{children:"Clase"}),f.jsx("th",{children:"Entrenador"}),f.jsx("th",{children:"Acción"})]})}),f.jsx("tbody",{children:i.map((s,o)=>f.jsxs("tr",{children:[f.jsx("td",{className:"font-bold",children:s.day}),f.jsx("td",{className:"text-gold",children:s.time}),f.jsx("td",{children:s.name}),f.jsx("td",{className:"text-muted",children:s.trainer}),f.jsx("td",{children:f.jsx("button",{className:"book-btn",children:"RESERVAR"})})]},o))})]}),i.length===0&&f.jsx("div",{className:"text-center mt-4 text-muted",children:"No hay clases programadas para este filtro."})]})]})})},o2="542317533963",a2=[{id:"escaldo",name:"ESCALDO",desc:"Solo la planilla de entrenamiento",price:"15.000",period:"/mes",features:["Planilla de entrenamiento semanal","Guía de ejercicios en PDF","Acceso al grupo de guerreros"],btnClass:"btn-outline",popular:!1},{id:"guerrero",name:"GUERRERO",desc:"Para los que inician su camino",price:"25.000",period:"/mes",features:["3 Clases por semana","Acceso a zona funcional","Plan básico de introducción"],btnClass:"btn-outline",popular:!1},{id:"vikingo",name:"VIKINGO",desc:"Para los guerreros consistentes",price:"32.000",period:"/mes",features:["Clases ILIMITADAS","Acceso libre al box","Acceso a talleres mensuales","1 Evaluación física al mes"],btnClass:"btn-primary",popular:!0},{id:"berserker",name:"BERSERKER",desc:"Dedicación absoluta",price:"42.000",period:"/mes",features:["Todo el Plan Vikingo","2 Sesiones Personales/mes","Plan nutricional adaptado","Recuperación (masaje mensual)"],btnClass:"btn-outline",popular:!1}],l2=()=>{const{currentUser:t,setIsAuthModalOpen:e}=Fo(),n=r=>{if(!t){e(!0);return}const s=`⚔️ ¡Skål! Soy ${t.displayName||"Guerrero"}, guerrero del Valhalla Box Gym.
He decidido forjar mi camino con el plan *${r.name}* ($${r.price}/mes).

¡Que Odin guíe mi entrenamiento y Mjolnir forje mi fuerza! 🪓🛡️`,o=`https://wa.me/${o2}?text=${encodeURIComponent(s)}`;window.open(o,"_blank")};return f.jsx("section",{className:"pricing-section",id:"pricing",children:f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"section-header text-center",children:[f.jsxs("h2",{children:["INGRESO AL ",f.jsx("span",{className:"text-gold",children:"SALÓN"})]}),f.jsx("p",{className:"subtitle",children:"ELIGE TU TRIBUTO"})]}),f.jsx("div",{className:"pricing-grid pricing-grid-4",children:a2.map(r=>f.jsxs("div",{className:`pricing-card plan-${r.id}${r.popular?" popular":""}`,children:[r.popular&&f.jsx("div",{className:"popular-badge",children:"RECOMENDADA"}),f.jsxs("div",{className:"pricing-card-left",children:[f.jsx("h3",{children:r.name}),f.jsx("p",{className:"plan-desc",children:r.desc}),f.jsxs("div",{className:"price",children:[f.jsx("span",{className:"currency",children:"$"}),f.jsx("span",{className:"amount",children:r.price}),f.jsx("span",{className:"period",children:r.period})]}),f.jsx("button",{className:`${r.btnClass} w-100`,onClick:()=>n(r),children:"SELECCIONAR"})]}),f.jsxs("div",{className:"pricing-card-right",children:[f.jsx("ul",{className:"plan-features",children:r.features.map((i,s)=>f.jsxs("li",{children:[f.jsx(j1,{size:20,className:"check-icon"})," ",i]},s))}),f.jsx("button",{className:`${r.btnClass} w-100 seleccionar-mobile`,onClick:()=>n(r),children:"SELECCIONAR"})]})]},r.id))}),f.jsxs("div",{className:"faq-section mt-5",children:[f.jsx("h3",{className:"text-center mb-4",children:"Preguntas Frecuentes"}),f.jsxs("div",{className:"faq-grid",children:[f.jsxs("div",{className:"faq-item",children:[f.jsx("h4",{children:"¿Hay cuota de inscripción (matrícula)?"}),f.jsx("p",{className:"text-muted",children:"No. Creemos en la transparencia. Pagas lo que usas, sin cargos ocultos."})]}),f.jsxs("div",{className:"faq-item",children:[f.jsx("h4",{children:"¿Puedo cancelar en cualquier momento?"}),f.jsx("p",{className:"text-muted",children:"Sí, puedes cancelar tu membresía con un aviso de 15 días antes del próximo ciclo de facturación."})]})]})]})]})})},u2=()=>f.jsxs(f.Fragment,{children:[f.jsx(t2,{}),f.jsx(n2,{}),f.jsx(r2,{}),f.jsx(i2,{}),f.jsx(s2,{}),f.jsx(l2,{})]}),c2=()=>{b.useEffect(()=>{window.scrollTo(0,0)},[]);const t=[{id:1,image:"/assets/images/facility_weights.png",title:"ZONA DE HIERRO Y FUERZA",desc:"Donde se forjan los verdaderos levantamientos."},{id:2,image:"/assets/images/facility_functional.png",title:"ZONA FUNCIONAL",desc:"Espacio abierto para WODs, saltos, y velocidad."},{id:3,image:"/assets/images/facility_striking.png",title:"ZONA DE STRIKING",desc:"Equipamiento pesado para deportes de contacto."}];return f.jsxs("div",{className:"facilities-page",children:[f.jsxs("div",{className:"facilities-header",children:[f.jsx("div",{className:"facilities-overlay"}),f.jsxs("div",{className:"container relative z-10 text-center pt-24 pb-12",children:[f.jsxs(Ti,{to:"/",className:"back-link",children:[f.jsx(S_,{size:20})," Volver a Inicio"]}),f.jsxs("h1",{className:"page-title mt-4",children:["NUESTRAS ",f.jsx("span",{className:"text-gold",children:"INSTALACIONES"})]}),f.jsx("p",{className:"page-subtitle",children:"El terreno sagrado donde las leyendas sudan y sangran."})]})]}),f.jsx("div",{className:"container py-12",children:f.jsx("div",{className:"facilities-gallery",children:t.map(e=>f.jsxs("div",{className:"facility-card",children:[f.jsx("div",{className:"facility-image",style:{backgroundImage:`url(${e.image})`}}),f.jsxs("div",{className:"facility-info",children:[f.jsx("h3",{children:e.title}),f.jsx("p",{children:e.desc})]})]},e.id))})})]})},h2=()=>{const{addToCart:t}=yf(),{currentUser:e,setIsAuthModalOpen:n}=Fo();b.useEffect(()=>{window.scrollTo(0,0)},[]);const r=[{id:1,name:"Camiseta Berserker Oversize",price:"15000",tag:"Más Vendido",image:"/assets/images/products/tshirt.png"},{id:2,name:"Musculosa Stringer Valhalla",price:"14000",tag:"Entrenamiento",image:"/assets/images/products/tanktop.png"},{id:3,name:"Pantalón Corto Táctico",price:"25000",tag:"Nuevo",image:"/assets/images/products/shorts.png"},{id:4,name:"Jogger de Fuerza (Pantalón Largo)",price:"32000",tag:"Invierno",image:"/assets/images/products/joggers.png"}],i=s=>{if(!e){n(!0);return}t({...s,price:parseFloat(s.price)})};return f.jsxs("div",{className:"armeria-page",children:[f.jsxs("div",{className:"armeria-header",children:[f.jsx("div",{className:"armeria-overlay"}),f.jsxs("div",{className:"container relative z-10 text-center pt-24 pb-12",children:[f.jsxs(Ti,{to:"/",className:"back-link",children:[f.jsx(S_,{size:20})," Volver a Inicio"]}),f.jsxs("h1",{className:"page-title mt-4",children:["LA ",f.jsx("span",{className:"text-gold",children:"ARMERÍA"})]}),f.jsx("p",{className:"page-subtitle",children:"VÍSTETE PARA LA BATALLA. PIEL DE BERSERKER PARA GUERREROS."})]})]}),f.jsx("div",{className:"container py-12",children:f.jsx("div",{className:"armeria-grid",children:r.map(s=>f.jsxs("div",{className:"product-card",children:[f.jsx("div",{className:"product-image-container",children:f.jsx("img",{src:s.image,alt:s.name,className:"product-image"})}),f.jsxs("div",{className:"product-info",children:[f.jsx("span",{className:"product-tag",children:s.tag}),f.jsx("h3",{children:s.name}),f.jsxs("p",{className:"product-price text-gold",children:["$",s.price]}),f.jsx("button",{className:"btn-outline product-btn",onClick:()=>i(s),children:"Agregar al Botín"})]})]},s.id))})})]})};function d2(){return f.jsx(WN,{children:f.jsx(GN,{children:f.jsxs("div",{className:"app-container",children:[f.jsx(QN,{}),f.jsxs(A1,{children:[f.jsx(Ma,{path:"/",element:f.jsx(u2,{})}),f.jsx(Ma,{path:"/instalaciones",element:f.jsx(c2,{})}),f.jsx(Ma,{path:"/armeria",element:f.jsx(h2,{})})]}),f.jsx(e2,{})]})})})}vc.createRoot(document.getElementById("root")).render(f.jsx(cy.StrictMode,{children:f.jsx(O1,{children:f.jsx(d2,{})})}));
