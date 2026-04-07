function bT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function jT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var l_={exports:{}},iu={},u_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),UT=Symbol.for("react.portal"),FT=Symbol.for("react.fragment"),zT=Symbol.for("react.strict_mode"),BT=Symbol.for("react.profiler"),$T=Symbol.for("react.provider"),WT=Symbol.for("react.context"),HT=Symbol.for("react.forward_ref"),qT=Symbol.for("react.suspense"),GT=Symbol.for("react.memo"),KT=Symbol.for("react.lazy"),hm=Symbol.iterator;function QT(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var c_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,d_={};function li(t,e,n){this.props=t,this.context=e,this.refs=d_,this.updater=n||c_}li.prototype.isReactComponent={};li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function f_(){}f_.prototype=li.prototype;function vd(t,e,n){this.props=t,this.context=e,this.refs=d_,this.updater=n||c_}var Ed=vd.prototype=new f_;Ed.constructor=vd;h_(Ed,li.prototype);Ed.isPureReactComponent=!0;var dm=Array.isArray,p_=Object.prototype.hasOwnProperty,wd={current:null},m_={key:!0,ref:!0,__self:!0,__source:!0};function g_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)p_.call(e,r)&&!m_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:qo,type:t,key:i,ref:o,props:s,_owner:wd.current}}function YT(t,e){return{$$typeof:qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Td(t){return typeof t=="object"&&t!==null&&t.$$typeof===qo}function JT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fm=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JT(""+t.key):e.toString(36)}function Ha(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qo:case UT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+uc(o,0):r,dm(s)?(n="",t!=null&&(n=t.replace(fm,"$&/")+"/"),Ha(s,e,n,"",function(c){return c})):s!=null&&(Td(s)&&(s=YT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(fm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",dm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+uc(i,l);o+=Ha(i,e,n,u,s)}else if(u=QT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+uc(i,l++),o+=Ha(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var r=[],s=0;return Ha(t,r,"","",function(i){return e.call(n,i,s++)}),r}function XT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},qa={transition:null},ZT={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:qa,ReactCurrentOwner:wd};function y_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!Td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=li;ee.Fragment=FT;ee.Profiler=BT;ee.PureComponent=vd;ee.StrictMode=zT;ee.Suspense=qT;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZT;ee.act=y_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=h_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=wd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)p_.call(e,u)&&!m_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:qo,type:t.type,key:s,ref:i,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:WT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$T,_context:t},t.Consumer=t};ee.createElement=g_;ee.createFactory=function(t){var e=g_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:HT,render:t}};ee.isValidElement=Td;ee.lazy=function(t){return{$$typeof:KT,_payload:{_status:-1,_result:t},_init:XT}};ee.memo=function(t,e){return{$$typeof:GT,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};ee.unstable_act=y_;ee.useCallback=function(t,e){return ut.current.useCallback(t,e)};ee.useContext=function(t){return ut.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ut.current.useEffect(t,e)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ut.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ee.useRef=function(t){return ut.current.useRef(t)};ee.useState=function(t){return ut.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";u_.exports=ee;var M=u_.exports;const __=jT(M),eI=bT({__proto__:null,default:__},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tI=M,nI=Symbol.for("react.element"),rI=Symbol.for("react.fragment"),sI=Object.prototype.hasOwnProperty,iI=tI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oI={key:!0,ref:!0,__self:!0,__source:!0};function v_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sI.call(e,r)&&!oI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:nI,type:t,key:i,ref:o,props:s,_owner:iI.current}}iu.Fragment=rI;iu.jsx=v_;iu.jsxs=v_;l_.exports=iu;var d=l_.exports,Jc={},E_={exports:{}},Tt={},w_={exports:{}},T_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var X=B.length;B.push(Q);e:for(;0<X;){var me=X-1>>>1,Ie=B[me];if(0<s(Ie,Q))B[me]=Q,B[X]=Ie,X=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],X=B.pop();if(X!==Q){B[0]=X;e:for(var me=0,Ie=B.length,Pr=Ie>>>1;me<Pr;){var St=2*(me+1)-1,Nr=B[St],Lt=St+1,bn=B[Lt];if(0>s(Nr,X))Lt<Ie&&0>s(bn,Nr)?(B[me]=bn,B[Lt]=X,me=Lt):(B[me]=Nr,B[St]=X,me=St);else if(Lt<Ie&&0>s(bn,X))B[me]=bn,B[Lt]=X,me=Lt;else break e}}return Q}function s(B,Q){var X=B.sortIndex-Q.sortIndex;return X!==0?X:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,g=3,S=!1,R=!1,x=!1,D=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function L(B){if(x=!1,A(B),!R)if(n(u)!==null)R=!0,vi(j);else{var Q=n(c);Q!==null&&Ei(L,Q.startTime-B)}}function j(B,Q){R=!1,x&&(x=!1,w(_),_=-1),S=!0;var X=g;try{for(A(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||B&&!k());){var me=m.callback;if(typeof me=="function"){m.callback=null,g=m.priorityLevel;var Ie=me(m.expirationTime<=Q);Q=t.unstable_now(),typeof Ie=="function"?m.callback=Ie:m===n(u)&&r(u),A(Q)}else r(u);m=n(u)}if(m!==null)var Pr=!0;else{var St=n(c);St!==null&&Ei(L,St.startTime-Q),Pr=!1}return Pr}finally{m=null,g=X,S=!1}}var F=!1,E=null,_=-1,T=5,C=-1;function k(){return!(t.unstable_now()-C<T)}function P(){if(E!==null){var B=t.unstable_now();C=B;var Q=!0;try{Q=E(!0,B)}finally{Q?I():(F=!1,E=null)}}else F=!1}var I;if(typeof v=="function")I=function(){v(P)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,pn=ze.port2;ze.port1.onmessage=P,I=function(){pn.postMessage(null)}}else I=function(){D(P,0)};function vi(B){E=B,F||(F=!0,I())}function Ei(B,Q){_=D(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,vi(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var X=g;g=Q;try{return B()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=g;g=B;try{return Q()}finally{g=X}},t.unstable_scheduleCallback=function(B,Q,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,B){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=X+Ie,B={id:p++,callback:Q,priorityLevel:B,startTime:X,expirationTime:Ie,sortIndex:-1},X>me?(B.sortIndex=X,e(c,B),n(u)===null&&B===n(c)&&(x?(w(_),_=-1):x=!0,Ei(L,X-me))):(B.sortIndex=Ie,e(u,B),R||S||(R=!0,vi(j))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var Q=g;return function(){var X=g;g=Q;try{return B.apply(this,arguments)}finally{g=X}}}})(T_);w_.exports=T_;var aI=w_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI=M,wt=aI;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I_=new Set,_o={};function os(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(_o[t]=e,t=0;t<e.length;t++)I_.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,uI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pm={},mm={};function cI(t){return Xc.call(mm,t)?!0:Xc.call(pm,t)?!1:uI.test(t)?mm[t]=!0:(pm[t]=!0,!1)}function hI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dI(t,e,n,r){if(e===null||typeof e>"u"||hI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Id=/[\-:]([a-z])/g;function Sd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Id,Sd);qe[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Id,Sd);qe[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Id,Sd);qe[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,r){var s=qe.hasOwnProperty(e)?qe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dI(e,n,s,r)&&(n=null),r||s===null?cI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=lI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),S_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),C_=Symbol.for("react.offscreen"),gm=Symbol.iterator;function bi(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,cc;function qi(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var hc=!1;function dc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qi(t):""}function fI(t){switch(t.tag){case 5:return qi(t.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 2:case 15:return t=dc(t.type,!1),t;case 11:return t=dc(t.type.render,!1),t;case 1:return t=dc(t.type,!0),t;default:return""}}function nh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ss:return"Portal";case Zc:return"Profiler";case Cd:return"StrictMode";case eh:return"Suspense";case th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A_:return(t.displayName||"Context")+".Consumer";case S_:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rd:return e=t.displayName||null,e!==null?e:nh(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return nh(t(e))}catch{}}return null}function pI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nh(e);case 8:return e===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function k_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mI(t){var e=k_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ia(t){t._valueTracker||(t._valueTracker=mI(t))}function R_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=k_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ym(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function x_(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function sh(t,e){x_(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&ih(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ih(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gi=Array.isArray;function Ms(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function oh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Gi(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function P_(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function N_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?N_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,D_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gI=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){gI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function O_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function L_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=O_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var yI=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lh(t,e){if(e){if(yI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ch=null;function xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hh=null,bs=null,js=null;function wm(t){if(t=Qo(t)){if(typeof hh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=cu(e),hh(t.stateNode,t.type,e))}}function V_(t){bs?js?js.push(t):js=[t]:bs=t}function M_(){if(bs){var t=bs,e=js;if(js=bs=null,wm(t),e)for(t=0;t<e.length;t++)wm(e[t])}}function b_(t,e){return t(e)}function j_(){}var fc=!1;function U_(t,e,n){if(fc)return t(e,n);fc=!0;try{return b_(t,e,n)}finally{fc=!1,(bs!==null||js!==null)&&(j_(),M_())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var r=cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var dh=!1;if(An)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){dh=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{dh=!1}function _I(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var ro=!1,pl=null,ml=!1,fh=null,vI={onError:function(t){ro=!0,pl=t}};function EI(t,e,n,r,s,i,o,l,u){ro=!1,pl=null,_I.apply(vI,arguments)}function wI(t,e,n,r,s,i,o,l,u){if(EI.apply(this,arguments),ro){if(ro){var c=pl;ro=!1,pl=null}else throw Error(U(198));ml||(ml=!0,fh=c)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function F_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tm(t){if(as(t)!==t)throw Error(U(188))}function TI(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Tm(s),t;if(i===r)return Tm(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function z_(t){return t=TI(t),t!==null?B_(t):null}function B_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=B_(t);if(e!==null)return e;t=t.sibling}return null}var $_=wt.unstable_scheduleCallback,Im=wt.unstable_cancelCallback,II=wt.unstable_shouldYield,SI=wt.unstable_requestPaint,Ae=wt.unstable_now,AI=wt.unstable_getCurrentPriorityLevel,Pd=wt.unstable_ImmediatePriority,W_=wt.unstable_UserBlockingPriority,gl=wt.unstable_NormalPriority,CI=wt.unstable_LowPriority,H_=wt.unstable_IdlePriority,ou=null,Zt=null;function kI(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:PI,RI=Math.log,xI=Math.LN2;function PI(t){return t>>>=0,t===0?32:31-(RI(t)/xI|0)|0}var Aa=64,Ca=4194304;function Ki(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ki(l):(i&=o,i!==0&&(r=Ki(i)))}else o=n&~s,o!==0?r=Ki(o):i!==0&&(r=Ki(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),s=1<<n,r|=t[n],e&=~s;return r}function NI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Bt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=NI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q_(){var t=Aa;return Aa<<=1,!(Aa&4194240)&&(Aa=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function OI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Bt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function G_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K_,Dd,Q_,Y_,J_,mh=!1,ka=[],nr=null,rr=null,sr=null,wo=new Map,To=new Map,Qn=[],LI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(e.pointerId)}}function Ui(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Qo(e),e!==null&&Dd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function VI(t,e,n,r,s){switch(e){case"focusin":return nr=Ui(nr,t,e,n,r,s),!0;case"dragenter":return rr=Ui(rr,t,e,n,r,s),!0;case"mouseover":return sr=Ui(sr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return wo.set(i,Ui(wo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,To.set(i,Ui(To.get(i)||null,t,e,n,r,s)),!0}return!1}function X_(t){var e=Fr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=F_(n),e!==null){t.blockedOn=e,J_(t.priority,function(){Q_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ch=r,n.target.dispatchEvent(r),ch=null}else return e=Qo(n),e!==null&&Dd(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){Ga(t)&&n.delete(e)}function MI(){mh=!1,nr!==null&&Ga(nr)&&(nr=null),rr!==null&&Ga(rr)&&(rr=null),sr!==null&&Ga(sr)&&(sr=null),wo.forEach(Am),To.forEach(Am)}function Fi(t,e){t.blockedOn===e&&(t.blockedOn=null,mh||(mh=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,MI)))}function Io(t){function e(s){return Fi(s,t)}if(0<ka.length){Fi(ka[0],t);for(var n=1;n<ka.length;n++){var r=ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Fi(nr,t),rr!==null&&Fi(rr,t),sr!==null&&Fi(sr,t),wo.forEach(e),To.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)X_(n),n.blockedOn===null&&Qn.shift()}var Us=On.ReactCurrentBatchConfig,_l=!0;function bI(t,e,n,r){var s=ae,i=Us.transition;Us.transition=null;try{ae=1,Od(t,e,n,r)}finally{ae=s,Us.transition=i}}function jI(t,e,n,r){var s=ae,i=Us.transition;Us.transition=null;try{ae=4,Od(t,e,n,r)}finally{ae=s,Us.transition=i}}function Od(t,e,n,r){if(_l){var s=gh(t,e,n,r);if(s===null)Sc(t,e,r,vl,n),Sm(t,r);else if(VI(s,t,e,n,r))r.stopPropagation();else if(Sm(t,r),e&4&&-1<LI.indexOf(t)){for(;s!==null;){var i=Qo(s);if(i!==null&&K_(i),i=gh(t,e,n,r),i===null&&Sc(t,e,r,vl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Sc(t,e,r,null,n)}}var vl=null;function gh(t,e,n,r){if(vl=null,t=xd(r),t=Fr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=F_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function Z_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AI()){case Pd:return 1;case W_:return 4;case gl:case CI:return 16;case H_:return 536870912;default:return 16}default:return 16}}var Xn=null,Ld=null,Ka=null;function ev(){if(Ka)return Ka;var t,e=Ld,n=e.length,r,s="value"in Xn?Xn.value:Xn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ka=s.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function Cm(){return!1}function It(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ra:Cm,this.isPropagationStopped=Cm,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=It(ui),Ko=ve({},ui,{view:0,detail:0}),UI=It(Ko),mc,gc,zi,au=ve({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zi&&(zi&&t.type==="mousemove"?(mc=t.screenX-zi.screenX,gc=t.screenY-zi.screenY):gc=mc=0,zi=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),km=It(au),FI=ve({},au,{dataTransfer:0}),zI=It(FI),BI=ve({},Ko,{relatedTarget:0}),yc=It(BI),$I=ve({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),WI=It($I),HI=ve({},ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qI=It(HI),GI=ve({},ui,{data:0}),Rm=It(GI),KI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YI[t])?!!e[t]:!1}function Md(){return JI}var XI=ve({},Ko,{key:function(t){if(t.key){var e=KI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZI=It(XI),e1=ve({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=It(e1),t1=ve({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),n1=It(t1),r1=ve({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=It(r1),i1=ve({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o1=It(i1),a1=[9,13,27,32],bd=An&&"CompositionEvent"in window,so=null;An&&"documentMode"in document&&(so=document.documentMode);var l1=An&&"TextEvent"in window&&!so,tv=An&&(!bd||so&&8<so&&11>=so),Pm=" ",Nm=!1;function nv(t,e){switch(t){case"keyup":return a1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function u1(t,e){switch(t){case"compositionend":return rv(e);case"keypress":return e.which!==32?null:(Nm=!0,Pm);case"textInput":return t=e.data,t===Pm&&Nm?null:t;default:return null}}function c1(t,e){if(Cs)return t==="compositionend"||!bd&&nv(t,e)?(t=ev(),Ka=Ld=Xn=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tv&&e.locale!=="ko"?null:e.data;default:return null}}var h1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h1[t.type]:e==="textarea"}function sv(t,e,n,r){V_(r),e=El(e,"onChange"),0<e.length&&(n=new Vd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var io=null,So=null;function d1(t){mv(t,0)}function lu(t){var e=xs(t);if(R_(e))return t}function f1(t,e){if(t==="change")return e}var iv=!1;if(An){var _c;if(An){var vc="oninput"in document;if(!vc){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),vc=typeof Om.oninput=="function"}_c=vc}else _c=!1;iv=_c&&(!document.documentMode||9<document.documentMode)}function Lm(){io&&(io.detachEvent("onpropertychange",ov),So=io=null)}function ov(t){if(t.propertyName==="value"&&lu(So)){var e=[];sv(e,So,t,xd(t)),U_(d1,e)}}function p1(t,e,n){t==="focusin"?(Lm(),io=e,So=n,io.attachEvent("onpropertychange",ov)):t==="focusout"&&Lm()}function m1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(So)}function g1(t,e){if(t==="click")return lu(e)}function y1(t,e){if(t==="input"||t==="change")return lu(e)}function _1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:_1;function Ao(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Xc.call(e,s)||!qt(t[s],e[s]))return!1}return!0}function Vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,e){var n=Vm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vm(n)}}function av(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?av(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lv(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v1(t){var e=lv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&av(n.ownerDocument.documentElement,n)){if(r!==null&&jd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Mm(n,i);var o=Mm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var E1=An&&"documentMode"in document&&11>=document.documentMode,ks=null,yh=null,oo=null,_h=!1;function bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||ks==null||ks!==fl(r)||(r=ks,"selectionStart"in r&&jd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&Ao(oo,r)||(oo=r,r=El(yh,"onSelect"),0<r.length&&(e=new Vd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ks)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Ec={},uv={};An&&(uv=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function uu(t){if(Ec[t])return Ec[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uv)return Ec[t]=e[n];return t}var cv=uu("animationend"),hv=uu("animationiteration"),dv=uu("animationstart"),fv=uu("transitionend"),pv=new Map,jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){pv.set(t,e),os(e,[t])}for(var wc=0;wc<jm.length;wc++){var Tc=jm[wc],w1=Tc.toLowerCase(),T1=Tc[0].toUpperCase()+Tc.slice(1);Cr(w1,"on"+T1)}Cr(cv,"onAnimationEnd");Cr(hv,"onAnimationIteration");Cr(dv,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(fv,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function Um(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wI(r,e,void 0,t),t.currentTarget=null}function mv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Um(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Um(s,l,c),i=u}}}if(ml)throw t=fh,ml=!1,fh=null,t}function he(t,e){var n=e[Ih];n===void 0&&(n=e[Ih]=new Set);var r=t+"__bubble";n.has(r)||(gv(e,t,2,!1),n.add(r))}function Ic(t,e,n){var r=0;e&&(r|=4),gv(n,t,r,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[Pa]){t[Pa]=!0,I_.forEach(function(n){n!=="selectionchange"&&(I1.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,Ic("selectionchange",!1,e))}}function gv(t,e,n,r){switch(Z_(e)){case 1:var s=bI;break;case 4:s=jI;break;default:s=Od}n=s.bind(null,e,n,t),s=void 0,!dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Sc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Fr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}U_(function(){var c=i,p=xd(n),m=[];e:{var g=pv.get(t);if(g!==void 0){var S=Vd,R=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":S=ZI;break;case"focusin":R="focus",S=yc;break;case"focusout":R="blur",S=yc;break;case"beforeblur":case"afterblur":S=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=zI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=n1;break;case cv:case hv:case dv:S=WI;break;case fv:S=s1;break;case"scroll":S=UI;break;case"wheel":S=o1;break;case"copy":case"cut":case"paste":S=qI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=xm}var x=(e&4)!==0,D=!x&&t==="scroll",w=x?g!==null?g+"Capture":null:g;x=[];for(var v=c,A;v!==null;){A=v;var L=A.stateNode;if(A.tag===5&&L!==null&&(A=L,w!==null&&(L=Eo(v,w),L!=null&&x.push(ko(v,L,A)))),D)break;v=v.return}0<x.length&&(g=new S(g,R,null,n,p),m.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==ch&&(R=n.relatedTarget||n.fromElement)&&(Fr(R)||R[Cn]))break e;if((S||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=c,R=R?Fr(R):null,R!==null&&(D=as(R),R!==D||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=c),S!==R)){if(x=km,L="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=xm,L="onPointerLeave",w="onPointerEnter",v="pointer"),D=S==null?g:xs(S),A=R==null?g:xs(R),g=new x(L,v+"leave",S,n,p),g.target=D,g.relatedTarget=A,L=null,Fr(p)===c&&(x=new x(w,v+"enter",R,n,p),x.target=A,x.relatedTarget=D,L=x),D=L,S&&R)t:{for(x=S,w=R,v=0,A=x;A;A=_s(A))v++;for(A=0,L=w;L;L=_s(L))A++;for(;0<v-A;)x=_s(x),v--;for(;0<A-v;)w=_s(w),A--;for(;v--;){if(x===w||w!==null&&x===w.alternate)break t;x=_s(x),w=_s(w)}x=null}else x=null;S!==null&&Fm(m,g,S,x,!1),R!==null&&D!==null&&Fm(m,D,R,x,!0)}}e:{if(g=c?xs(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var j=f1;else if(Dm(g))if(iv)j=y1;else{j=m1;var F=p1}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=g1);if(j&&(j=j(t,c))){sv(m,j,n,p);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&ih(g,"number",g.value)}switch(F=c?xs(c):window,t){case"focusin":(Dm(F)||F.contentEditable==="true")&&(ks=F,yh=c,oo=null);break;case"focusout":oo=yh=ks=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,bm(m,n,p);break;case"selectionchange":if(E1)break;case"keydown":case"keyup":bm(m,n,p)}var E;if(bd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Cs?nv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(tv&&n.locale!=="ko"&&(Cs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Cs&&(E=ev()):(Xn=p,Ld="value"in Xn?Xn.value:Xn.textContent,Cs=!0)),F=El(c,_),0<F.length&&(_=new Rm(_,t,null,n,p),m.push({event:_,listeners:F}),E?_.data=E:(E=rv(n),E!==null&&(_.data=E)))),(E=l1?u1(t,n):c1(t,n))&&(c=El(c,"onBeforeInput"),0<c.length&&(p=new Rm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=E))}mv(m,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function El(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Eo(t,n),i!=null&&r.unshift(ko(t,i,s)),i=Eo(t,e),i!=null&&r.push(ko(t,i,s))),t=t.return}return r}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Eo(n,i),u!=null&&o.unshift(ko(n,u,l))):s||(u=Eo(n,i),u!=null&&o.push(ko(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S1=/\r\n?/g,A1=/\u0000|\uFFFD/g;function zm(t){return(typeof t=="string"?t:""+t).replace(S1,`
`).replace(A1,"")}function Na(t,e,n){if(e=zm(e),zm(t)!==e&&n)throw Error(U(425))}function wl(){}var vh=null,Eh=null;function wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Th=typeof setTimeout=="function"?setTimeout:void 0,C1=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(t){return Bm.resolve(null).then(t).catch(R1)}:Th;function R1(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Io(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Io(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $m(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ci=Math.random().toString(36).slice(2),Xt="__reactFiber$"+ci,Ro="__reactProps$"+ci,Cn="__reactContainer$"+ci,Ih="__reactEvents$"+ci,x1="__reactListeners$"+ci,P1="__reactHandles$"+ci;function Fr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$m(t);t!==null;){if(n=t[Xt])return n;t=$m(t)}return e}t=n,n=t.parentNode}return null}function Qo(t){return t=t[Xt]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function cu(t){return t[Ro]||null}var Sh=[],Ps=-1;function kr(t){return{current:t}}function pe(t){0>Ps||(t.current=Sh[Ps],Sh[Ps]=null,Ps--)}function ue(t,e){Ps++,Sh[Ps]=t.current,t.current=e}var yr={},tt=kr(yr),pt=kr(!1),Kr=yr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function mt(t){return t=t.childContextTypes,t!=null}function Tl(){pe(pt),pe(tt)}function Wm(t,e,n){if(tt.current!==yr)throw Error(U(168));ue(tt,e),ue(pt,n)}function yv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,pI(t)||"Unknown",s));return ve({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Kr=tt.current,ue(tt,t),ue(pt,pt.current),!0}function Hm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=yv(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,pe(pt),pe(tt),ue(tt,t)):pe(pt),ue(pt,n)}var gn=null,hu=!1,Cc=!1;function _v(t){gn===null?gn=[t]:gn.push(t)}function N1(t){hu=!0,_v(t)}function Rr(){if(!Cc&&gn!==null){Cc=!0;var t=0,e=ae;try{var n=gn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,hu=!1}catch(s){throw gn!==null&&(gn=gn.slice(t+1)),$_(Pd,Rr),s}finally{ae=e,Cc=!1}}return null}var Ns=[],Ds=0,Sl=null,Al=0,At=[],Ct=0,Qr=null,En=1,wn="";function br(t,e){Ns[Ds++]=Al,Ns[Ds++]=Sl,Sl=t,Al=e}function vv(t,e,n){At[Ct++]=En,At[Ct++]=wn,At[Ct++]=Qr,Qr=t;var r=En;t=wn;var s=32-Bt(r)-1;r&=~(1<<s),n+=1;var i=32-Bt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,En=1<<32-Bt(e)+s|n<<s|r,wn=i+t}else En=1<<i|n<<s|r,wn=t}function Ud(t){t.return!==null&&(br(t,1),vv(t,1,0))}function Fd(t){for(;t===Sl;)Sl=Ns[--Ds],Ns[Ds]=null,Al=Ns[--Ds],Ns[Ds]=null;for(;t===Qr;)Qr=At[--Ct],At[Ct]=null,wn=At[--Ct],At[Ct]=null,En=At[--Ct],At[Ct]=null}var Et=null,vt=null,ge=!1,jt=null;function Ev(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,vt=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:En,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,vt=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(ge){var e=vt;if(e){var n=e;if(!qm(t,e)){if(Ah(t))throw Error(U(418));e=ir(n.nextSibling);var r=Et;e&&qm(t,e)?Ev(r,n):(t.flags=t.flags&-4097|2,ge=!1,Et=t)}}else{if(Ah(t))throw Error(U(418));t.flags=t.flags&-4097|2,ge=!1,Et=t}}}function Gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Da(t){if(t!==Et)return!1;if(!ge)return Gm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wh(t.type,t.memoizedProps)),e&&(e=vt)){if(Ah(t))throw wv(),Error(U(418));for(;e;)Ev(t,e),e=ir(e.nextSibling)}if(Gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=Et?ir(t.stateNode.nextSibling):null;return!0}function wv(){for(var t=vt;t;)t=ir(t.nextSibling)}function Ys(){vt=Et=null,ge=!1}function zd(t){jt===null?jt=[t]:jt.push(t)}var D1=On.ReactCurrentBatchConfig;function Bi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Km(t){var e=t._init;return e(t._payload)}function Tv(t){function e(w,v){if(t){var A=w.deletions;A===null?(w.deletions=[v],w.flags|=16):A.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function s(w,v){return w=ur(w,v),w.index=0,w.sibling=null,w}function i(w,v,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<v?(w.flags|=2,v):A):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,A,L){return v===null||v.tag!==6?(v=Oc(A,w.mode,L),v.return=w,v):(v=s(v,A),v.return=w,v)}function u(w,v,A,L){var j=A.type;return j===As?p(w,v,A.props.children,L,A.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Gn&&Km(j)===v.type)?(L=s(v,A.props),L.ref=Bi(w,v,A),L.return=w,L):(L=nl(A.type,A.key,A.props,null,w.mode,L),L.ref=Bi(w,v,A),L.return=w,L)}function c(w,v,A,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=Lc(A,w.mode,L),v.return=w,v):(v=s(v,A.children||[]),v.return=w,v)}function p(w,v,A,L,j){return v===null||v.tag!==7?(v=qr(A,w.mode,L,j),v.return=w,v):(v=s(v,A),v.return=w,v)}function m(w,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Oc(""+v,w.mode,A),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ta:return A=nl(v.type,v.key,v.props,null,w.mode,A),A.ref=Bi(w,null,v),A.return=w,A;case Ss:return v=Lc(v,w.mode,A),v.return=w,v;case Gn:var L=v._init;return m(w,L(v._payload),A)}if(Gi(v)||bi(v))return v=qr(v,w.mode,A,null),v.return=w,v;Oa(w,v)}return null}function g(w,v,A,L){var j=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(w,v,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ta:return A.key===j?u(w,v,A,L):null;case Ss:return A.key===j?c(w,v,A,L):null;case Gn:return j=A._init,g(w,v,j(A._payload),L)}if(Gi(A)||bi(A))return j!==null?null:p(w,v,A,L,null);Oa(w,A)}return null}function S(w,v,A,L,j){if(typeof L=="string"&&L!==""||typeof L=="number")return w=w.get(A)||null,l(v,w,""+L,j);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ta:return w=w.get(L.key===null?A:L.key)||null,u(v,w,L,j);case Ss:return w=w.get(L.key===null?A:L.key)||null,c(v,w,L,j);case Gn:var F=L._init;return S(w,v,A,F(L._payload),j)}if(Gi(L)||bi(L))return w=w.get(A)||null,p(v,w,L,j,null);Oa(v,L)}return null}function R(w,v,A,L){for(var j=null,F=null,E=v,_=v=0,T=null;E!==null&&_<A.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var C=g(w,E,A[_],L);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(w,E),v=i(C,v,_),F===null?j=C:F.sibling=C,F=C,E=T}if(_===A.length)return n(w,E),ge&&br(w,_),j;if(E===null){for(;_<A.length;_++)E=m(w,A[_],L),E!==null&&(v=i(E,v,_),F===null?j=E:F.sibling=E,F=E);return ge&&br(w,_),j}for(E=r(w,E);_<A.length;_++)T=S(E,w,_,A[_],L),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),v=i(T,v,_),F===null?j=T:F.sibling=T,F=T);return t&&E.forEach(function(k){return e(w,k)}),ge&&br(w,_),j}function x(w,v,A,L){var j=bi(A);if(typeof j!="function")throw Error(U(150));if(A=j.call(A),A==null)throw Error(U(151));for(var F=j=null,E=v,_=v=0,T=null,C=A.next();E!==null&&!C.done;_++,C=A.next()){E.index>_?(T=E,E=null):T=E.sibling;var k=g(w,E,C.value,L);if(k===null){E===null&&(E=T);break}t&&E&&k.alternate===null&&e(w,E),v=i(k,v,_),F===null?j=k:F.sibling=k,F=k,E=T}if(C.done)return n(w,E),ge&&br(w,_),j;if(E===null){for(;!C.done;_++,C=A.next())C=m(w,C.value,L),C!==null&&(v=i(C,v,_),F===null?j=C:F.sibling=C,F=C);return ge&&br(w,_),j}for(E=r(w,E);!C.done;_++,C=A.next())C=S(E,w,_,C.value,L),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?_:C.key),v=i(C,v,_),F===null?j=C:F.sibling=C,F=C);return t&&E.forEach(function(P){return e(w,P)}),ge&&br(w,_),j}function D(w,v,A,L){if(typeof A=="object"&&A!==null&&A.type===As&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ta:e:{for(var j=A.key,F=v;F!==null;){if(F.key===j){if(j=A.type,j===As){if(F.tag===7){n(w,F.sibling),v=s(F,A.props.children),v.return=w,w=v;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Gn&&Km(j)===F.type){n(w,F.sibling),v=s(F,A.props),v.ref=Bi(w,F,A),v.return=w,w=v;break e}n(w,F);break}else e(w,F);F=F.sibling}A.type===As?(v=qr(A.props.children,w.mode,L,A.key),v.return=w,w=v):(L=nl(A.type,A.key,A.props,null,w.mode,L),L.ref=Bi(w,v,A),L.return=w,w=L)}return o(w);case Ss:e:{for(F=A.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(w,v.sibling),v=s(v,A.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Lc(A,w.mode,L),v.return=w,w=v}return o(w);case Gn:return F=A._init,D(w,v,F(A._payload),L)}if(Gi(A))return R(w,v,A,L);if(bi(A))return x(w,v,A,L);Oa(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(n(w,v.sibling),v=s(v,A),v.return=w,w=v):(n(w,v),v=Oc(A,w.mode,L),v.return=w,w=v),o(w)):n(w,v)}return D}var Js=Tv(!0),Iv=Tv(!1),Cl=kr(null),kl=null,Os=null,Bd=null;function $d(){Bd=Os=kl=null}function Wd(t){var e=Cl.current;pe(Cl),t._currentValue=e}function kh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){kl=t,Bd=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(Bd!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(kl===null)throw Error(U(308));Os=t,kl.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var zr=null;function Hd(t){zr===null?zr=[t]:zr.push(t)}function Sv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Hd(e)):(n.next=s.next,s.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kn=!1;function qd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,kn(t,n)}return s=r.interleaved,s===null?(e.next=e,Hd(r)):(e.next=s.next,s.next=e),r.interleaved=e,kn(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}function Qm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,r){var s=t.updateQueue;Kn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=c=u=null,l=i;do{var g=l.lane,S=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,x=l;switch(g=e,S=n,x.tag){case 1:if(R=x.payload,typeof R=="function"){m=R.call(S,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=x.payload,g=typeof R=="function"?R.call(S,m,g):R,g==null)break e;m=ve({},m,g);break e;case 2:Kn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=S,u=m):p=p.next=S,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=m}}function Ym(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Yo={},en=kr(Yo),xo=kr(Yo),Po=kr(Yo);function Br(t){if(t===Yo)throw Error(U(174));return t}function Gd(t,e){switch(ue(Po,e),ue(xo,t),ue(en,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ah(e,t)}pe(en),ue(en,e)}function Xs(){pe(en),pe(xo),pe(Po)}function Cv(t){Br(Po.current);var e=Br(en.current),n=ah(e,t.type);e!==n&&(ue(xo,t),ue(en,n))}function Kd(t){xo.current===t&&(pe(en),pe(xo))}var ye=kr(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function Qd(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var Ja=On.ReactCurrentDispatcher,Rc=On.ReactCurrentBatchConfig,Yr=0,_e=null,De=null,Ue=null,Pl=!1,ao=!1,No=0,O1=0;function Qe(){throw Error(U(321))}function Yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function Jd(t,e,n,r,s,i){if(Yr=i,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?b1:j1,t=n(r,s),ao){i=0;do{if(ao=!1,No=0,25<=i)throw Error(U(301));i+=1,Ue=De=null,e.updateQueue=null,Ja.current=U1,t=n(r,s)}while(ao)}if(Ja.current=Nl,e=De!==null&&De.next!==null,Yr=0,Ue=De=_e=null,Pl=!1,e)throw Error(U(300));return t}function Xd(){var t=No!==0;return No=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?_e.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Dt(){if(De===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Ue===null?_e.memoizedState:Ue.next;if(e!==null)Ue=e,De=t;else{if(t===null)throw Error(U(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ue===null?_e.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Do(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=De,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var p=c.lane;if((Yr&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,_e.lanes|=p,Jr|=p}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,_e.lanes|=i,Jr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);qt(i,e.memoizedState)||(ft=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function kv(){}function Rv(t,e){var n=_e,r=Dt(),s=e(),i=!qt(r.memoizedState,s);if(i&&(r.memoizedState=s,ft=!0),r=r.queue,Zd(Nv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Oo(9,Pv.bind(null,n,r,s,e),void 0,null),Fe===null)throw Error(U(349));Yr&30||xv(n,e,s)}return s}function xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pv(t,e,n,r){e.value=n,e.getSnapshot=r,Dv(e)&&Ov(t)}function Nv(t,e,n){return n(function(){Dv(e)&&Ov(t)})}function Dv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function Ov(t){var e=kn(t,1);e!==null&&$t(e,t,1,-1)}function Jm(t){var e=Yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=M1.bind(null,_e,t),[e.memoizedState,t]}function Oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Lv(){return Dt().memoizedState}function Xa(t,e,n,r){var s=Yt();_e.flags|=t,s.memoizedState=Oo(1|e,n,void 0,r===void 0?null:r)}function du(t,e,n,r){var s=Dt();r=r===void 0?null:r;var i=void 0;if(De!==null){var o=De.memoizedState;if(i=o.destroy,r!==null&&Yd(r,o.deps)){s.memoizedState=Oo(e,n,i,r);return}}_e.flags|=t,s.memoizedState=Oo(1|e,n,i,r)}function Xm(t,e){return Xa(8390656,8,t,e)}function Zd(t,e){return du(2048,8,t,e)}function Vv(t,e){return du(4,2,t,e)}function Mv(t,e){return du(4,4,t,e)}function bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jv(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,bv.bind(null,e,t),n)}function ef(){}function Uv(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fv(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return Yr&21?(qt(n,e)||(n=q_(),_e.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function L1(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Rc.transition;Rc.transition={};try{t(!1),e()}finally{ae=n,Rc.transition=r}}function Bv(){return Dt().memoizedState}function V1(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$v(t))Wv(e,n);else if(n=Sv(t,e,n,r),n!==null){var s=lt();$t(n,t,r,s),Hv(n,e,r)}}function M1(t,e,n){var r=lr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($v(t))Wv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(s.next=s,Hd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Sv(t,e,s,r),n!==null&&(s=lt(),$t(n,t,r,s),Hv(n,e,r))}}function $v(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function Wv(t,e){ao=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}var Nl={readContext:Nt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},b1={readContext:Nt,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:Xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=Yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=V1.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:Jm,useDebugValue:ef,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=Jm(!1),e=t[0];return t=L1.bind(null,t[1]),Yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,s=Yt();if(ge){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Fe===null)throw Error(U(349));Yr&30||xv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Xm(Nv.bind(null,r,i,t),[t]),r.flags|=2048,Oo(9,Pv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Yt(),e=Fe.identifierPrefix;if(ge){var n=wn,r=En;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=O1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},j1={readContext:Nt,useCallback:Uv,useContext:Nt,useEffect:Zd,useImperativeHandle:jv,useInsertionEffect:Vv,useLayoutEffect:Mv,useMemo:Fv,useReducer:xc,useRef:Lv,useState:function(){return xc(Do)},useDebugValue:ef,useDeferredValue:function(t){var e=Dt();return zv(e,De.memoizedState,t)},useTransition:function(){var t=xc(Do)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Rv,useId:Bv,unstable_isNewReconciler:!1},U1={readContext:Nt,useCallback:Uv,useContext:Nt,useEffect:Zd,useImperativeHandle:jv,useInsertionEffect:Vv,useLayoutEffect:Mv,useMemo:Fv,useReducer:Pc,useRef:Lv,useState:function(){return Pc(Do)},useDebugValue:ef,useDeferredValue:function(t){var e=Dt();return De===null?e.memoizedState=t:zv(e,De.memoizedState,t)},useTransition:function(){var t=Pc(Do)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Rv,useId:Bv,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),s=lr(t),i=Sn(r,s);i.payload=e,n!=null&&(i.callback=n),e=or(t,i,s),e!==null&&($t(e,t,s,r),Ya(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),s=lr(t),i=Sn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=or(t,i,s),e!==null&&($t(e,t,s,r),Ya(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=lr(t),s=Sn(n,r);s.tag=2,e!=null&&(s.callback=e),e=or(t,s,r),e!==null&&($t(e,t,r,n),Ya(e,t,r))}};function Zm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,r)||!Ao(s,i):!0}function qv(t,e,n){var r=!1,s=yr,i=e.contextType;return typeof i=="object"&&i!==null?i=Nt(i):(s=mt(e)?Kr:tt.current,r=e.contextTypes,i=(r=r!=null)?Qs(t,s):yr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function eg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function xh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},qd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Nt(i):(i=mt(e)?Kr:tt.current,s.context=Qs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Rh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&fu.enqueueReplaceState(s,s.state,null),Rl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",r=e;do n+=fI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F1=typeof WeakMap=="function"?WeakMap:Map;function Gv(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,Fh=r),Ph(t,e)},n}function Kv(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Ph(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ph(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new F1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=eS.bind(null,t,e,n),e.then(t,t))}function ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var z1=On.ReactCurrentOwner,ft=!1;function ot(t,e,n,r){e.child=t===null?Iv(e,null,n,r):Js(e,t.child,n,r)}function sg(t,e,n,r,s){n=n.render;var i=e.ref;return Fs(e,s),r=Jd(t,e,n,r,i,s),n=Xd(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rn(t,e,s)):(ge&&n&&Ud(e),e.flags|=1,ot(t,e,r,s),e.child)}function ig(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!uf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Qv(t,e,i,r,s)):(t=nl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,r)&&t.ref===e.ref)return Rn(t,e,s)}return e.flags|=1,t=ur(i,r),t.ref=e.ref,t.return=e,e.child=t}function Qv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ao(i,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,Rn(t,e,s)}return Nh(t,e,n,r,s)}function Yv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Vs,_t),_t|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(Vs,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ue(Vs,_t),_t|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ue(Vs,_t),_t|=r;return ot(t,e,s,n),e.child}function Jv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nh(t,e,n,r,s){var i=mt(n)?Kr:tt.current;return i=Qs(e,i),Fs(e,s),n=Jd(t,e,n,r,i,s),r=Xd(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rn(t,e,s)):(ge&&r&&Ud(e),e.flags|=1,ot(t,e,n,s),e.child)}function og(t,e,n,r,s){if(mt(n)){var i=!0;Il(e)}else i=!1;if(Fs(e,s),e.stateNode===null)Za(t,e),qv(e,n,r),xh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nt(c):(c=mt(n)?Kr:tt.current,c=Qs(e,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&eg(e,o,r,c),Kn=!1;var g=e.memoizedState;o.state=g,Rl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||pt.current||Kn?(typeof p=="function"&&(Rh(e,n,p,r),u=e.memoizedState),(l=Kn||Zm(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Av(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Nt(u):(u=mt(n)?Kr:tt.current,u=Qs(e,u));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&eg(e,o,r,u),Kn=!1,g=e.memoizedState,o.state=g,Rl(e,r,o,s);var R=e.memoizedState;l!==m||g!==R||pt.current||Kn?(typeof S=="function"&&(Rh(e,n,S,r),R=e.memoizedState),(c=Kn||Zm(e,n,c,r,g,R,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Dh(t,e,n,r,i,s)}function Dh(t,e,n,r,s,i){Jv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Hm(e,n,!1),Rn(t,e,i);r=e.stateNode,z1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,i),e.child=Js(e,null,l,i)):ot(t,e,l,i),e.memoizedState=r.state,s&&Hm(e,n,!0),e.child}function Xv(t){var e=t.stateNode;e.pendingContext?Wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wm(t,e.context,!1),Gd(t,e.containerInfo)}function ag(t,e,n,r,s){return Ys(),zd(s),e.flags|=256,ot(t,e,n,r),e.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function Lh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zv(t,e,n){var r=e.pendingProps,s=ye.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ue(ye,s&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=gu(o,r,0,null),t=qr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Lh(n),e.memoizedState=Oh,t):tf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return B1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ur(l,i):(i=qr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Lh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Oh,r}return i=t.child,t=i.sibling,r=ur(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tf(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&zd(r),Js(e,t.child,null,n),t=tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function B1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Nc(Error(U(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=gu({mode:"visible",children:r.children},s,0,null),i=qr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Js(e,t.child,null,o),e.child.memoizedState=Lh(o),e.memoizedState=Oh,i);if(!(e.mode&1))return La(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=Nc(i,r,void 0),La(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=Fe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,kn(t,s),$t(r,t,s,-1))}return lf(),r=Nc(Error(U(421))),La(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=tS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,vt=ir(s.nextSibling),Et=e,ge=!0,jt=null,t!==null&&(At[Ct++]=En,At[Ct++]=wn,At[Ct++]=Qr,En=t.id,wn=t.overflow,Qr=e),e=tf(e,r.children),e.flags|=4096,e)}function lg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kh(t.return,e,n)}function Dc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function e0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ot(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lg(t,n,e);else if(t.tag===19)lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ye,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Dc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&xl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Dc(e,!0,n,null,i);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $1(t,e,n){switch(e.tag){case 3:Xv(e),Ys();break;case 5:Cv(e);break;case 1:mt(e.type)&&Il(e);break;case 4:Gd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ue(Cl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?Zv(t,e,n):(ue(ye,ye.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);ue(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return e0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ue(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,Yv(t,e,n)}return Rn(t,e,n)}var t0,Vh,n0,r0;t0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vh=function(){};n0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Br(en.current);var i=null;switch(n){case"input":s=rh(t,s),r=rh(t,r),i=[];break;case"select":s=ve({},s,{value:void 0}),r=ve({},r,{value:void 0}),i=[];break;case"textarea":s=oh(t,s),r=oh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wl)}lh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&he("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};r0=function(t,e,n,r){n!==r&&(e.flags|=4)};function $i(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function W1(t,e,n){var r=e.pendingProps;switch(Fd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return mt(e.type)&&Tl(),Ye(e),null;case 3:return r=e.stateNode,Xs(),pe(pt),pe(tt),Qd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&($h(jt),jt=null))),Vh(t,e),Ye(e),null;case 5:Kd(e);var s=Br(Po.current);if(n=e.type,t!==null&&e.stateNode!=null)n0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Ye(e),null}if(t=Br(en.current),Da(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Xt]=e,r[Ro]=i,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(s=0;s<Qi.length;s++)he(Qi[s],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":ym(r,i),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},he("invalid",r);break;case"textarea":vm(r,i),he("invalid",r)}lh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Na(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Na(r.textContent,l,t),s=["children",""+l]):_o.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Ia(r),_m(r,i,!0);break;case"textarea":Ia(r),Em(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=N_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[Ro]=r,t0(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,r),n){case"dialog":he("cancel",t),he("close",t),s=r;break;case"iframe":case"object":case"embed":he("load",t),s=r;break;case"video":case"audio":for(s=0;s<Qi.length;s++)he(Qi[s],t);s=r;break;case"source":he("error",t),s=r;break;case"img":case"image":case"link":he("error",t),he("load",t),s=r;break;case"details":he("toggle",t),s=r;break;case"input":ym(t,r),s=rh(t,r),he("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ve({},r,{value:void 0}),he("invalid",t);break;case"textarea":vm(t,r),s=oh(t,r),he("invalid",t);break;default:s=r}lh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?L_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&D_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vo(t,u):typeof u=="number"&&vo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_o.hasOwnProperty(i)?u!=null&&i==="onScroll"&&he("scroll",t):u!=null&&Ad(t,i,u,o))}switch(n){case"input":Ia(t),_m(t,r,!1);break;case"textarea":Ia(t),Em(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ms(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)r0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Br(Po.current),Br(en.current),Da(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(i=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:Na(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Ye(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&vt!==null&&e.mode&1&&!(e.flags&128))wv(),Ys(),e.flags|=98560,i=!1;else if(i=Da(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[Xt]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),i=!1}else jt!==null&&($h(jt),jt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Le===0&&(Le=3):lf())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Xs(),Vh(t,e),t===null&&Co(e.stateNode.containerInfo),Ye(e),null;case 10:return Wd(e.type._context),Ye(e),null;case 17:return mt(e.type)&&Tl(),Ye(e),null;case 19:if(pe(ye),i=e.memoizedState,i===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)$i(i,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xl(t),o!==null){for(e.flags|=128,$i(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ye,ye.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ae()>ei&&(e.flags|=128,r=!0,$i(i,!1),e.lanes=4194304)}else{if(!r)if(t=xl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$i(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ge)return Ye(e),null}else 2*Ae()-i.renderingStartTime>ei&&n!==1073741824&&(e.flags|=128,r=!0,$i(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ue(ye,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return af(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function H1(t,e){switch(Fd(e),e.tag){case 1:return mt(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),pe(pt),pe(tt),Qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kd(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Xs(),null;case 10:return Wd(e.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Va=!1,Ze=!1,q1=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Mh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var ug=!1;function G1(t,e){if(vh=_l,t=lv(),jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=t,g=null;t:for(;;){for(var S;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++p===r&&(u=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eh={focusedElem:t,selectionRange:n},_l=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var x=R.memoizedProps,D=R.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?x:Mt(e.type,x),D);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(L){Te(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return R=ug,ug=!1,R}function lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Mh(e,n,i)}s=s.next}while(s!==r)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function s0(t){var e=t.alternate;e!==null&&(t.alternate=null,s0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[Ro],delete e[Ih],delete e[x1],delete e[P1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i0(t){return t.tag===5||t.tag===3||t.tag===4}function cg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}function Uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}var Be=null,bt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)o0(t,e,n),n=n.sibling}function o0(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:Ze||Ls(n,e);case 6:var r=Be,s=bt;Be=null,Wn(t,e,n),Be=r,bt=s,Be!==null&&(bt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(bt?(t=Be,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),Io(t)):Ac(Be,n.stateNode));break;case 4:r=Be,s=bt,Be=n.stateNode.containerInfo,bt=!0,Wn(t,e,n),Be=r,bt=s;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mh(n,e,o),s=s.next}while(s!==r)}Wn(t,e,n);break;case 1:if(!Ze&&(Ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Wn(t,e,n),Ze=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new q1),e.forEach(function(r){var s=nS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,bt=!1;break e;case 3:Be=l.stateNode.containerInfo,bt=!0;break e;case 4:Be=l.stateNode.containerInfo,bt=!0;break e}l=l.return}if(Be===null)throw Error(U(160));o0(i,o,s),Be=null,bt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Te(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)a0(e,t),e=e.sibling}function a0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Qt(t),r&4){try{lo(3,t,t.return),pu(3,t)}catch(x){Te(t,t.return,x)}try{lo(5,t,t.return)}catch(x){Te(t,t.return,x)}}break;case 1:Vt(e,t),Qt(t),r&512&&n!==null&&Ls(n,n.return);break;case 5:if(Vt(e,t),Qt(t),r&512&&n!==null&&Ls(n,n.return),t.flags&32){var s=t.stateNode;try{vo(s,"")}catch(x){Te(t,t.return,x)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&x_(s,i),uh(l,o);var c=uh(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?L_(s,m):p==="dangerouslySetInnerHTML"?D_(s,m):p==="children"?vo(s,m):Ad(s,p,m,c)}switch(l){case"input":sh(s,i);break;case"textarea":P_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Ms(s,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ms(s,!!i.multiple,i.defaultValue,!0):Ms(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ro]=i}catch(x){Te(t,t.return,x)}}break;case 6:if(Vt(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(x){Te(t,t.return,x)}}break;case 3:if(Vt(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Io(e.containerInfo)}catch(x){Te(t,t.return,x)}break;case 4:Vt(e,t),Qt(t);break;case 13:Vt(e,t),Qt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(sf=Ae())),r&4&&hg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(c=Ze)||p,Vt(e,t),Ze=c):Vt(e,t),Qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(W=t,p=t.child;p!==null;){for(m=W=p;W!==null;){switch(g=W,S=g.child,g.tag){case 0:case 11:case 14:case 15:lo(4,g,g.return);break;case 1:Ls(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(x){Te(r,n,x)}}break;case 5:Ls(g,g.return);break;case 22:if(g.memoizedState!==null){fg(m);continue}}S!==null?(S.return=g,W=S):fg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=O_("display",o))}catch(x){Te(t,t.return,x)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){Te(t,t.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Vt(e,t),Qt(t),r&4&&hg(t);break;case 21:break;default:Vt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(vo(s,""),r.flags&=-33);var i=cg(t);Uh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=cg(t);jh(t,l,o);break;default:throw Error(U(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function K1(t,e,n){W=t,l0(t)}function l0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Va;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=Va;var c=Ze;if(Va=o,(Ze=u)&&!c)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?pg(s):u!==null?(u.return=o,W=u):pg(s);for(;i!==null;)W=i,l0(i),i=i.sibling;W=s,Va=l,Ze=c}dg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):dg(t)}}function dg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ym(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ym(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Io(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ze||e.flags&512&&bh(e)}catch(g){Te(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function fg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function pg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Te(e,s,u)}}var i=e.return;try{bh(e)}catch(u){Te(e,i,u)}break;case 5:var o=e.return;try{bh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var Q1=Math.ceil,Dl=On.ReactCurrentDispatcher,nf=On.ReactCurrentOwner,Pt=On.ReactCurrentBatchConfig,ie=0,Fe=null,ke=null,He=0,_t=0,Vs=kr(0),Le=0,Lo=null,Jr=0,mu=0,rf=0,uo=null,dt=null,sf=0,ei=1/0,mn=null,Ol=!1,Fh=null,ar=null,Ma=!1,Zn=null,Ll=0,co=0,zh=null,el=-1,tl=0;function lt(){return ie&6?Ae():el!==-1?el:el=Ae()}function lr(t){return t.mode&1?ie&2&&He!==0?He&-He:D1.transition!==null?(tl===0&&(tl=q_()),tl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Z_(t.type)),t):1}function $t(t,e,n,r){if(50<co)throw co=0,zh=null,Error(U(185));Go(t,n,r),(!(ie&2)||t!==Fe)&&(t===Fe&&(!(ie&2)&&(mu|=n),Le===4&&Yn(t,He)),gt(t,r),n===1&&ie===0&&!(e.mode&1)&&(ei=Ae()+500,hu&&Rr()))}function gt(t,e){var n=t.callbackNode;DI(t,e);var r=yl(t,t===Fe?He:0);if(r===0)n!==null&&Im(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Im(n),e===1)t.tag===0?N1(mg.bind(null,t)):_v(mg.bind(null,t)),k1(function(){!(ie&6)&&Rr()}),n=null;else{switch(G_(r)){case 1:n=Pd;break;case 4:n=W_;break;case 16:n=gl;break;case 536870912:n=H_;break;default:n=gl}n=g0(n,u0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function u0(t,e){if(el=-1,tl=0,ie&6)throw Error(U(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=yl(t,t===Fe?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vl(t,r);else{e=r;var s=ie;ie|=2;var i=h0();(Fe!==t||He!==e)&&(mn=null,ei=Ae()+500,Hr(t,e));do try{X1();break}catch(l){c0(t,l)}while(!0);$d(),Dl.current=i,ie=s,ke!==null?e=0:(Fe=null,He=0,e=Le)}if(e!==0){if(e===2&&(s=ph(t),s!==0&&(r=s,e=Bh(t,s))),e===1)throw n=Lo,Hr(t,0),Yn(t,r),gt(t,Ae()),n;if(e===6)Yn(t,r);else{if(s=t.current.alternate,!(r&30)&&!Y1(s)&&(e=Vl(t,r),e===2&&(i=ph(t),i!==0&&(r=i,e=Bh(t,i))),e===1))throw n=Lo,Hr(t,0),Yn(t,r),gt(t,Ae()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:jr(t,dt,mn);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=sf+500-Ae(),10<e)){if(yl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Th(jr.bind(null,t,dt,mn),e);break}jr(t,dt,mn);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Bt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Q1(r/1960))-r,10<r){t.timeoutHandle=Th(jr.bind(null,t,dt,mn),r);break}jr(t,dt,mn);break;case 5:jr(t,dt,mn);break;default:throw Error(U(329))}}}return gt(t,Ae()),t.callbackNode===n?u0.bind(null,t):null}function Bh(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=dt,dt=n,e!==null&&$h(e)),t}function $h(t){dt===null?dt=t:dt.push.apply(dt,t)}function Y1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!qt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~rf,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function mg(t){if(ie&6)throw Error(U(327));zs();var e=yl(t,0);if(!(e&1))return gt(t,Ae()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var r=ph(t);r!==0&&(e=r,n=Bh(t,r))}if(n===1)throw n=Lo,Hr(t,0),Yn(t,e),gt(t,Ae()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,dt,mn),gt(t,Ae()),null}function of(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(ei=Ae()+500,hu&&Rr())}}function Xr(t){Zn!==null&&Zn.tag===0&&!(ie&6)&&zs();var e=ie;ie|=1;var n=Pt.transition,r=ae;try{if(Pt.transition=null,ae=1,t)return t()}finally{ae=r,Pt.transition=n,ie=e,!(ie&6)&&Rr()}}function af(){_t=Vs.current,pe(Vs)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,C1(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Fd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Xs(),pe(pt),pe(tt),Qd();break;case 5:Kd(r);break;case 4:Xs();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Wd(r.type._context);break;case 22:case 23:af()}n=n.return}if(Fe=t,ke=t=ur(t.current,null),He=_t=e,Le=0,Lo=null,rf=mu=Jr=0,dt=uo=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}zr=null}return t}function c0(t,e){do{var n=ke;try{if($d(),Ja.current=Nl,Pl){for(var r=_e.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Pl=!1}if(Yr=0,Ue=De=_e=null,ao=!1,No=0,nf.current=null,n===null||n.return===null){Le=1,Lo=e,ke=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=ng(o);if(S!==null){S.flags&=-257,rg(S,o,l,i,e),S.mode&1&&tg(i,c,e),e=S,u=c;var R=e.updateQueue;if(R===null){var x=new Set;x.add(u),e.updateQueue=x}else R.add(u);break e}else{if(!(e&1)){tg(i,c,e),lf();break e}u=Error(U(426))}}else if(ge&&l.mode&1){var D=ng(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),rg(D,o,l,i,e),zd(Zs(u,l));break e}}i=u=Zs(u,l),Le!==4&&(Le=2),uo===null?uo=[i]:uo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=Gv(i,u,e);Qm(i,w);break e;case 1:l=u;var v=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ar===null||!ar.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var L=Kv(i,l,e);Qm(i,L);break e}}i=i.return}while(i!==null)}f0(n)}catch(j){e=j,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function h0(){var t=Dl.current;return Dl.current=Nl,t===null?Nl:t}function lf(){(Le===0||Le===3||Le===2)&&(Le=4),Fe===null||!(Jr&268435455)&&!(mu&268435455)||Yn(Fe,He)}function Vl(t,e){var n=ie;ie|=2;var r=h0();(Fe!==t||He!==e)&&(mn=null,Hr(t,e));do try{J1();break}catch(s){c0(t,s)}while(!0);if($d(),ie=n,Dl.current=r,ke!==null)throw Error(U(261));return Fe=null,He=0,Le}function J1(){for(;ke!==null;)d0(ke)}function X1(){for(;ke!==null&&!II();)d0(ke)}function d0(t){var e=m0(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?f0(t):ke=e,nf.current=null}function f0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H1(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,ke=null;return}}else if(n=W1(n,e,_t),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Le===0&&(Le=5)}function jr(t,e,n){var r=ae,s=Pt.transition;try{Pt.transition=null,ae=1,Z1(t,e,n,r)}finally{Pt.transition=s,ae=r}return null}function Z1(t,e,n,r){do zs();while(Zn!==null);if(ie&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(OI(t,i),t===Fe&&(ke=Fe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,g0(gl,function(){return zs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pt.transition,Pt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,nf.current=null,G1(t,n),a0(n,t),v1(Eh),_l=!!vh,Eh=vh=null,t.current=n,K1(n),SI(),ie=l,ae=o,Pt.transition=i}else t.current=n;if(Ma&&(Ma=!1,Zn=t,Ll=s),i=t.pendingLanes,i===0&&(ar=null),kI(n.stateNode),gt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ol)throw Ol=!1,t=Fh,Fh=null,t;return Ll&1&&t.tag!==0&&zs(),i=t.pendingLanes,i&1?t===zh?co++:(co=0,zh=t):co=0,Rr(),null}function zs(){if(Zn!==null){var t=G_(Ll),e=Pt.transition,n=ae;try{if(Pt.transition=null,ae=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,Ll=0,ie&6)throw Error(U(331));var s=ie;for(ie|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var p=W;switch(p.tag){case 0:case 11:case 15:lo(8,p,i)}var m=p.child;if(m!==null)m.return=p,W=m;else for(;W!==null;){p=W;var g=p.sibling,S=p.return;if(s0(p),p===c){W=null;break}if(g!==null){g.return=S,W=g;break}W=S}}}var R=i.alternate;if(R!==null){var x=R.child;if(x!==null){R.child=null;do{var D=x.sibling;x.sibling=null,x=D}while(x!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:lo(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,W=w;break e}W=i.return}}var v=t.current;for(W=v;W!==null;){o=W;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,W=A;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pu(9,l)}}catch(j){Te(l,l.return,j)}if(l===o){W=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,W=L;break e}W=l.return}}if(ie=s,Rr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(ou,t)}catch{}r=!0}return r}finally{ae=n,Pt.transition=e}}return!1}function gg(t,e,n){e=Zs(n,e),e=Gv(t,e,1),t=or(t,e,1),e=lt(),t!==null&&(Go(t,1,e),gt(t,e))}function Te(t,e,n){if(t.tag===3)gg(t,t,n);else for(;e!==null;){if(e.tag===3){gg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Zs(n,t),t=Kv(e,t,1),e=or(e,t,1),t=lt(),e!==null&&(Go(e,1,t),gt(e,t));break}}e=e.return}}function eS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(He&n)===n&&(Le===4||Le===3&&(He&130023424)===He&&500>Ae()-sf?Hr(t,0):rf|=n),gt(t,e)}function p0(t,e){e===0&&(t.mode&1?(e=Ca,Ca<<=1,!(Ca&130023424)&&(Ca=4194304)):e=1);var n=lt();t=kn(t,e),t!==null&&(Go(t,e,n),gt(t,n))}function tS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),p0(t,n)}function nS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),p0(t,n)}var m0;m0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,$1(t,e,n);ft=!!(t.flags&131072)}else ft=!1,ge&&e.flags&1048576&&vv(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Za(t,e),t=e.pendingProps;var s=Qs(e,tt.current);Fs(e,n),s=Jd(null,e,r,t,s,n);var i=Xd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(i=!0,Il(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,qd(e),s.updater=fu,e.stateNode=s,s._reactInternals=e,xh(e,r,t,n),e=Dh(null,e,r,!0,i,n)):(e.tag=0,ge&&i&&Ud(e),ot(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=sS(r),t=Mt(r,t),s){case 0:e=Nh(null,e,r,t,n);break e;case 1:e=og(null,e,r,t,n);break e;case 11:e=sg(null,e,r,t,n);break e;case 14:e=ig(null,e,r,Mt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mt(r,s),Nh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mt(r,s),og(t,e,r,s,n);case 3:e:{if(Xv(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Av(t,e),Rl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Zs(Error(U(423)),e),e=ag(t,e,r,n,s);break e}else if(r!==s){s=Zs(Error(U(424)),e),e=ag(t,e,r,n,s);break e}else for(vt=ir(e.stateNode.containerInfo.firstChild),Et=e,ge=!0,jt=null,n=Iv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),r===s){e=Rn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return Cv(e),t===null&&Ch(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,wh(r,s)?o=null:i!==null&&wh(r,i)&&(e.flags|=32),Jv(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return Zv(t,e,n);case 4:return Gd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Js(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mt(r,s),sg(t,e,r,s,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ue(Cl,r._currentValue),r._currentValue=o,i!==null)if(qt(i.value,o)){if(i.children===s.children&&!pt.current){e=Rn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Sn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),kh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),kh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ot(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Fs(e,n),s=Nt(s),r=r(s),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,s=Mt(r,e.pendingProps),s=Mt(r.type,s),ig(t,e,r,s,n);case 15:return Qv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mt(r,s),Za(t,e),e.tag=1,mt(r)?(t=!0,Il(e)):t=!1,Fs(e,n),qv(e,r,s),xh(e,r,s,n),Dh(null,e,r,!0,t,n);case 19:return e0(t,e,n);case 22:return Yv(t,e,n)}throw Error(U(156,e.tag))};function g0(t,e){return $_(t,e)}function rS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new rS(t,e,n,r)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sS(t){if(typeof t=="function")return uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===Rd)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")uf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case As:return qr(n.children,s,i,e);case Cd:o=8,s|=8;break;case Zc:return t=xt(12,n,e,s|2),t.elementType=Zc,t.lanes=i,t;case eh:return t=xt(13,n,e,s),t.elementType=eh,t.lanes=i,t;case th:return t=xt(19,n,e,s),t.elementType=th,t.lanes=i,t;case C_:return gu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S_:o=10;break e;case A_:o=9;break e;case kd:o=11;break e;case Rd:o=14;break e;case Gn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=xt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function qr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function gu(t,e,n,r){return t=xt(22,t,r,e),t.elementType=C_,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function Lc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function cf(t,e,n,r,s,i,o,l,u){return t=new iS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=xt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qd(i),t}function oS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function y0(t){if(!t)return yr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(mt(n))return yv(t,n,e)}return e}function _0(t,e,n,r,s,i,o,l,u){return t=cf(n,r,!0,t,s,i,o,l,u),t.context=y0(null),n=t.current,r=lt(),s=lr(n),i=Sn(r,s),i.callback=e??null,or(n,i,s),t.current.lanes=s,Go(t,s,r),gt(t,r),t}function yu(t,e,n,r){var s=e.current,i=lt(),o=lr(s);return n=y0(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(s,e,o),t!==null&&($t(t,s,o,i),Ya(t,s,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hf(t,e){yg(t,e),(t=t.alternate)&&yg(t,e)}function aS(){return null}var v0=typeof reportError=="function"?reportError:function(t){console.error(t)};function df(t){this._internalRoot=t}_u.prototype.render=df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));yu(t,e,null,null)};_u.prototype.unmount=df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){yu(null,t,null,null)}),e[Cn]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var e=Y_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&X_(t)}};function ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function lS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Ml(o);i.call(c)}}var o=_0(e,r,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[Cn]=o.current,Co(t.nodeType===8?t.parentNode:t),Xr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Ml(u);l.call(c)}}var u=cf(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=u,t[Cn]=u.current,Co(t.nodeType===8?t.parentNode:t),Xr(function(){yu(e,u,n,r)}),u}function Eu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Ml(o);l.call(u)}}yu(e,o,t,s)}else o=lS(n,e,t,s,r);return Ml(o)}K_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ki(e.pendingLanes);n!==0&&(Nd(e,n|1),gt(e,Ae()),!(ie&6)&&(ei=Ae()+500,Rr()))}break;case 13:Xr(function(){var r=kn(t,1);if(r!==null){var s=lt();$t(r,t,1,s)}}),hf(t,1)}};Dd=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=lt();$t(e,t,134217728,n)}hf(t,134217728)}};Q_=function(t){if(t.tag===13){var e=lr(t),n=kn(t,e);if(n!==null){var r=lt();$t(n,t,e,r)}hf(t,e)}};Y_=function(){return ae};J_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};hh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=cu(r);if(!s)throw Error(U(90));R_(r),sh(r,s)}}}break;case"textarea":P_(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};b_=of;j_=Xr;var uS={usingClientEntryPoint:!1,Events:[Qo,xs,cu,V_,M_,of]},Wi={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cS={bundleType:Wi.bundleType,version:Wi.version,rendererPackageName:Wi.rendererPackageName,rendererConfig:Wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=z_(t),t===null?null:t.stateNode},findFiberByHostInstance:Wi.findFiberByHostInstance||aS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{ou=ba.inject(cS),Zt=ba}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(e))throw Error(U(200));return oS(t,e,null,n)};Tt.createRoot=function(t,e){if(!ff(t))throw Error(U(299));var n=!1,r="",s=v0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=cf(t,1,!1,null,null,n,!1,r,s),t[Cn]=e.current,Co(t.nodeType===8?t.parentNode:t),new df(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=z_(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Xr(t)};Tt.hydrate=function(t,e,n){if(!vu(e))throw Error(U(200));return Eu(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!ff(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=v0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_0(e,null,t,1,n??null,s,!1,i,o),t[Cn]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new _u(e)};Tt.render=function(t,e,n){if(!vu(e))throw Error(U(200));return Eu(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!vu(t))throw Error(U(40));return t._reactRootContainer?(Xr(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Tt.unstable_batchedUpdates=of;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Eu(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function E0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E0)}catch(t){console.error(t)}}E0(),E_.exports=Tt;var hS=E_.exports,vg=hS;Jc.createRoot=vg.createRoot,Jc.hydrateRoot=vg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vo.apply(this,arguments)}var er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(er||(er={}));const Eg="popstate";function dS(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return Wh("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:bl(s)}return pS(e,n,null,t)}function xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fS(){return Math.random().toString(36).substr(2,8)}function wg(t,e){return{usr:t.state,key:t.key,idx:e}}function Wh(t,e,n,r){return n===void 0&&(n=null),Vo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?hi(e):e,{state:n,key:e&&e.key||r||fS()})}function bl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function hi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function pS(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=er.Pop,u=null,c=p();c==null&&(c=0,o.replaceState(Vo({},o.state,{idx:c}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=er.Pop;let D=p(),w=D==null?null:D-c;c=D,u&&u({action:l,location:x.location,delta:w})}function g(D,w){l=er.Push;let v=Wh(x.location,D,w);c=p()+1;let A=wg(v,c),L=x.createHref(v);try{o.pushState(A,"",L)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(L)}i&&u&&u({action:l,location:x.location,delta:1})}function S(D,w){l=er.Replace;let v=Wh(x.location,D,w);c=p();let A=wg(v,c),L=x.createHref(v);o.replaceState(A,"",L),i&&u&&u({action:l,location:x.location,delta:0})}function R(D){let w=s.location.origin!=="null"?s.location.origin:s.location.href,v=typeof D=="string"?D:bl(D);return v=v.replace(/ $/,"%20"),xe(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let x={get action(){return l},get location(){return t(s,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Eg,m),u=D,()=>{s.removeEventListener(Eg,m),u=null}},createHref(D){return e(s,D)},createURL:R,encodeLocation(D){let w=R(D);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:S,go(D){return o.go(D)}};return x}var Tg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Tg||(Tg={}));function mS(t,e,n){return n===void 0&&(n="/"),gS(t,e,n)}function gS(t,e,n,r){let s=typeof e=="string"?hi(e):e,i=mf(s.pathname||"/",n);if(i==null)return null;let o=w0(t);yS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=xS(i);l=CS(o[u],c)}return l}function w0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(xe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=cr([r,u.relativePath]),p=n.concat(u);i.children&&i.children.length>0&&(xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),w0(i.children,e,p,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:SS(c,i.index),routesMeta:p})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let u of T0(i.path))s(i,o,u)}),e}function T0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=T0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function yS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:AS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _S=/^:[\w-]+$/,vS=3,ES=2,wS=1,TS=10,IS=-2,Ig=t=>t==="*";function SS(t,e){let n=t.split("/"),r=n.length;return n.some(Ig)&&(r+=IS),e&&(r+=ES),n.filter(s=>!Ig(s)).reduce((s,i)=>s+(_S.test(i)?vS:i===""?wS:TS),r)}function AS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function CS(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,p=i==="/"?e:e.slice(i.length)||"/",m=kS({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),g=u.route;if(!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:cr([i,m.pathname]),pathnameBase:LS(cr([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=cr([i,m.pathnameBase]))}return o}function kS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=RS(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((c,p,m)=>{let{paramName:g,isOptional:S}=p;if(g==="*"){let x=l[m]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const R=l[m];return S&&!R?c[g]=void 0:c[g]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function RS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),pf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function xS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const PS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NS=t=>PS.test(t);function DS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?hi(t):t,i;if(n)if(NS(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),pf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Sg(n.substring(1),"/"):i=Sg(n,e)}else i=e;return{pathname:i,search:VS(r),hash:MS(s)}}function Sg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Vc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function I0(t,e){let n=OS(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function S0(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=hi(t):(s=Vo({},t),xe(!s.pathname||!s.pathname.includes("?"),Vc("?","pathname","search",s)),xe(!s.pathname||!s.pathname.includes("#"),Vc("#","pathname","hash",s)),xe(!s.search||!s.search.includes("#"),Vc("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=DS(s,l),c=o&&o!=="/"&&o.endsWith("/"),p=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),LS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),VS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const A0=["post","put","patch","delete"];new Set(A0);const jS=["get",...A0];new Set(jS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mo.apply(this,arguments)}const gf=M.createContext(null),US=M.createContext(null),ls=M.createContext(null),wu=M.createContext(null),xr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),C0=M.createContext(null);function FS(t,e){let{relative:n}=e===void 0?{}:e;Jo()||xe(!1);let{basename:r,navigator:s}=M.useContext(ls),{hash:i,pathname:o,search:l}=R0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:cr([r,o])),s.createHref({pathname:u,search:l,hash:i})}function Jo(){return M.useContext(wu)!=null}function Xo(){return Jo()||xe(!1),M.useContext(wu).location}function k0(t){M.useContext(ls).static||M.useLayoutEffect(t)}function yf(){let{isDataRoute:t}=M.useContext(xr);return t?eA():zS()}function zS(){Jo()||xe(!1);let t=M.useContext(gf),{basename:e,future:n,navigator:r}=M.useContext(ls),{matches:s}=M.useContext(xr),{pathname:i}=Xo(),o=JSON.stringify(I0(s,n.v7_relativeSplatPath)),l=M.useRef(!1);return k0(()=>{l.current=!0}),M.useCallback(function(c,p){if(p===void 0&&(p={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=S0(c,JSON.parse(o),i,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:cr([e,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[e,r,o,i,t])}function BS(){let{matches:t}=M.useContext(xr),e=t[t.length-1];return e?e.params:{}}function R0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(ls),{matches:s}=M.useContext(xr),{pathname:i}=Xo(),o=JSON.stringify(I0(s,r.v7_relativeSplatPath));return M.useMemo(()=>S0(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function $S(t,e){return WS(t,e)}function WS(t,e,n,r){Jo()||xe(!1);let{navigator:s}=M.useContext(ls),{matches:i}=M.useContext(xr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Xo(),p;if(e){var m;let D=typeof e=="string"?hi(e):e;u==="/"||(m=D.pathname)!=null&&m.startsWith(u)||xe(!1),p=D}else p=c;let g=p.pathname||"/",S=g;if(u!=="/"){let D=u.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(D.length).join("/")}let R=mS(t,{pathname:S}),x=QS(R&&R.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:cr([u,s.encodeLocation?s.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:cr([u,s.encodeLocation?s.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),i,n,r);return e&&x?M.createElement(wu.Provider,{value:{location:Mo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:er.Pop}},x):x}function HS(){let t=ZS(),e=bS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:s},n):null,null)}const qS=M.createElement(HS,null);class GS extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(xr.Provider,{value:this.props.routeContext},M.createElement(C0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KS(t){let{routeContext:e,match:n,children:r}=t,s=M.useContext(gf);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(xr.Provider,{value:e},r)}function QS(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||xe(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=p),m.route.id){let{loaderData:g,errors:S}=n,R=m.route.loader&&g[m.route.id]===void 0&&(!S||S[m.route.id]===void 0);if(m.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((p,m,g)=>{let S,R=!1,x=null,D=null;n&&(S=l&&m.route.id?l[m.route.id]:void 0,x=m.route.errorElement||qS,u&&(c<0&&g===0?(tA("route-fallback"),R=!0,D=null):c===g&&(R=!0,D=m.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),v=()=>{let A;return S?A=x:R?A=D:m.route.Component?A=M.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=p,M.createElement(KS,{match:m,routeContext:{outlet:p,matches:w,isDataRoute:n!=null},children:A})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?M.createElement(GS,{location:n.location,revalidation:n.revalidation,component:x,error:S,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var x0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(x0||{}),P0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(P0||{});function YS(t){let e=M.useContext(gf);return e||xe(!1),e}function JS(t){let e=M.useContext(US);return e||xe(!1),e}function XS(t){let e=M.useContext(xr);return e||xe(!1),e}function N0(t){let e=XS(),n=e.matches[e.matches.length-1];return n.route.id||xe(!1),n.route.id}function ZS(){var t;let e=M.useContext(C0),n=JS(),r=N0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function eA(){let{router:t}=YS(x0.UseNavigateStable),e=N0(P0.UseNavigateStable),n=M.useRef(!1);return k0(()=>{n.current=!0}),M.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Mo({fromRouteId:e},i)))},[t,e])}const Ag={};function tA(t,e,n){Ag[t]||(Ag[t]=!0)}function nA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function vs(t){xe(!1)}function rA(t){let{basename:e="/",children:n=null,location:r,navigationType:s=er.Pop,navigator:i,static:o=!1,future:l}=t;Jo()&&xe(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:i,static:o,future:Mo({v7_relativeSplatPath:!1},l)}),[u,l,i,o]);typeof r=="string"&&(r=hi(r));let{pathname:p="/",search:m="",hash:g="",state:S=null,key:R="default"}=r,x=M.useMemo(()=>{let D=mf(p,u);return D==null?null:{location:{pathname:D,search:m,hash:g,state:S,key:R},navigationType:s}},[u,p,m,g,S,R,s]);return x==null?null:M.createElement(ls.Provider,{value:c},M.createElement(wu.Provider,{children:n,value:x}))}function sA(t){let{children:e,location:n}=t;return $S(Hh(e),n)}new Promise(()=>{});function Hh(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,s)=>{if(!M.isValidElement(r))return;let i=[...e,s];if(r.type===M.Fragment){n.push.apply(n,Hh(r.props.children,i));return}r.type!==vs&&xe(!1),!r.props.index||!r.props.children||xe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Hh(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qh(){return qh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qh.apply(this,arguments)}function iA(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function oA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function aA(t,e){return t.button===0&&(!e||e==="_self")&&!oA(t)}function Gh(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function lA(t,e){let n=Gh(t);return e&&e.forEach((r,s)=>{n.has(s)||e.getAll(s).forEach(i=>{n.append(s,i)})}),n}const uA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cA="6";try{window.__reactRouterVersion=cA}catch{}const hA="startTransition",Cg=eI[hA];function dA(t){let{basename:e,children:n,future:r,window:s}=t,i=M.useRef();i.current==null&&(i.current=dS({window:s,v5Compat:!0}));let o=i.current,[l,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},p=M.useCallback(m=>{c&&Cg?Cg(()=>u(m)):u(m)},[u,c]);return M.useLayoutEffect(()=>o.listen(p),[o,p]),M.useEffect(()=>nA(r),[r]),M.createElement(rA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const fA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bs=M.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:u,to:c,preventScrollReset:p,viewTransition:m}=e,g=iA(e,uA),{basename:S}=M.useContext(ls),R,x=!1;if(typeof c=="string"&&pA.test(c)&&(R=c,fA))try{let A=new URL(window.location.href),L=c.startsWith("//")?new URL(A.protocol+c):new URL(c),j=mf(L.pathname,S);L.origin===A.origin&&j!=null?c=j+L.search+L.hash:x=!0}catch{}let D=FS(c,{relative:s}),w=mA(c,{replace:o,state:l,target:u,preventScrollReset:p,relative:s,viewTransition:m});function v(A){r&&r(A),A.defaultPrevented||w(A)}return M.createElement("a",qh({},g,{href:R||D,onClick:x||i?r:v,ref:n,target:u}))});var kg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(kg||(kg={}));var Rg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rg||(Rg={}));function mA(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:l}=e===void 0?{}:e,u=yf(),c=Xo(),p=R0(t,{relative:o});return M.useCallback(m=>{if(aA(m,n)){m.preventDefault();let g=r!==void 0?r:bl(c)===bl(p);u(t,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:l})}},[c,u,p,r,s,n,t,i,o,l])}function gA(t){let e=M.useRef(Gh(t)),n=M.useRef(!1),r=Xo(),s=M.useMemo(()=>lA(r.search,n.current?null:e.current),[r.search]),i=yf(),o=M.useCallback((l,u)=>{const c=Gh(typeof l=="function"?l(s):l);n.current=!0,i("?"+c,u)},[i,s]);return[s,o]}/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Pe=(t,e)=>{const n=M.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...c},p)=>M.createElement("svg",{ref:p,...yA,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${_A(t)}`,l].join(" "),...c},[...e.map(([m,g])=>M.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=Pe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=Pe("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=Pe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=Pe("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=Pe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=Pe("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=Pe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=Pe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=Pe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=Pe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=Pe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=Pe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=Pe("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=Pe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=Pe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=Pe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=Pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=Pe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=Pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=Pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),OA=()=>{};var Ng={};/**
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
 */const O0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},LA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},L0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(g=64)),r.push(n[p],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(O0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new VA;const g=i<<2|l>>4;if(r.push(g),c!==64){const S=l<<4&240|c>>2;if(r.push(S),m!==64){const R=c<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MA=function(t){const e=O0(t);return L0.encodeByteArray(e,!0)},jl=function(t){return MA(t).replace(/\./g,"")},V0=function(t){try{return L0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jA=()=>bA().__FIREBASE_DEFAULTS__,UA=()=>{if(typeof process>"u"||typeof Ng>"u")return;const t=Ng.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&V0(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return OA()||jA()||UA()||FA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M0=t=>{var e,n;return(n=(e=Iu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},b0=t=>{const e=M0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},j0=()=>{var t;return(t=Iu())==null?void 0:t.config},U0=t=>{var e;return(e=Iu())==null?void 0:e[`_${t}`]};/**
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
 */class zA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function F0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[jl(JSON.stringify(n)),jl(JSON.stringify(o)),""].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function $A(){var e;const t=(e=Iu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GA(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KA(){return!$A()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QA(){try{return typeof indexedDB=="object"}catch{return!1}}function YA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const JA="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JA,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?XA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new dn(s,l,r)}}function XA(t,e){return t.replace(ZA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ZA=/\{\$([^}]+)}/g;function eC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Dg(i)&&Dg(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dg(t){return t!==null&&typeof t=="object"}/**
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
 */function ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ji(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tC(t,e){const n=new nC(t,e);return n.subscribe.bind(n)}class nC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bc),s.error===void 0&&(s.error=bc),s.complete===void 0&&(s.complete=bc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
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
 */function di(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _f(t){return(await fetch(t,{credentials:"include"})).ok}class _r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ur="[DEFAULT]";/**
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
 */class sC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oC(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iC(t){return t===Ur?void 0:t}function oC(t){return t.instantiationMode==="EAGER"}/**
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
 */class aC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const lC={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},uC=te.INFO,cC={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},hC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vf{constructor(e){this.name=e,this._logLevel=uC,this._logHandler=hC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const dC=(t,e)=>e.some(n=>t instanceof n);let Og,Lg;function fC(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pC(){return Lg||(Lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z0=new WeakMap,Kh=new WeakMap,B0=new WeakMap,jc=new WeakMap,Ef=new WeakMap;function mC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&z0.set(n,t)}).catch(()=>{}),Ef.set(e,t),e}function gC(t){if(Kh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kh.set(t,e)}let Qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||B0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yC(t){Qh=t(Qh)}function _C(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uc(this),e,...n);return B0.set(r,e.sort?e.sort():[e]),hr(r)}:pC().includes(t)?function(...e){return t.apply(Uc(this),e),hr(z0.get(this))}:function(...e){return hr(t.apply(Uc(this),e))}}function vC(t){return typeof t=="function"?_C(t):(t instanceof IDBTransaction&&gC(t),dC(t,fC())?new Proxy(t,Qh):t)}function hr(t){if(t instanceof IDBRequest)return mC(t);if(jc.has(t))return jc.get(t);const e=vC(t);return e!==t&&(jc.set(t,e),Ef.set(e,t)),e}const Uc=t=>Ef.get(t);function EC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const wC=["get","getKey","getAll","getAllKeys","count"],TC=["put","add","delete","clear"],Fc=new Map;function Vg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=TC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wC.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Fc.set(e,i),i}yC(t=>({...t,get:(e,n,r)=>Vg(e,n)||t.get(e,n,r),has:(e,n)=>!!Vg(e,n)||t.has(e,n)}));/**
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
 */class IC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yh="@firebase/app",Mg="0.14.10";/**
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
 */const xn=new vf("@firebase/app"),AC="@firebase/app-compat",CC="@firebase/analytics-compat",kC="@firebase/analytics",RC="@firebase/app-check-compat",xC="@firebase/app-check",PC="@firebase/auth",NC="@firebase/auth-compat",DC="@firebase/database",OC="@firebase/data-connect",LC="@firebase/database-compat",VC="@firebase/functions",MC="@firebase/functions-compat",bC="@firebase/installations",jC="@firebase/installations-compat",UC="@firebase/messaging",FC="@firebase/messaging-compat",zC="@firebase/performance",BC="@firebase/performance-compat",$C="@firebase/remote-config",WC="@firebase/remote-config-compat",HC="@firebase/storage",qC="@firebase/storage-compat",GC="@firebase/firestore",KC="@firebase/ai",QC="@firebase/firestore-compat",YC="firebase",JC="12.11.0";/**
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
 */const Jh="[DEFAULT]",XC={[Yh]:"fire-core",[AC]:"fire-core-compat",[kC]:"fire-analytics",[CC]:"fire-analytics-compat",[xC]:"fire-app-check",[RC]:"fire-app-check-compat",[PC]:"fire-auth",[NC]:"fire-auth-compat",[DC]:"fire-rtdb",[OC]:"fire-data-connect",[LC]:"fire-rtdb-compat",[VC]:"fire-fn",[MC]:"fire-fn-compat",[bC]:"fire-iid",[jC]:"fire-iid-compat",[UC]:"fire-fcm",[FC]:"fire-fcm-compat",[zC]:"fire-perf",[BC]:"fire-perf-compat",[$C]:"fire-rc",[WC]:"fire-rc-compat",[HC]:"fire-gcs",[qC]:"fire-gcs-compat",[GC]:"fire-fst",[QC]:"fire-fst-compat",[KC]:"fire-vertex","fire-js":"fire-js",[YC]:"fire-js-all"};/**
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
 */const Ul=new Map,ZC=new Map,Xh=new Map;function bg(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(Xh.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Xh.set(e,t);for(const n of Ul.values())bg(n,t);for(const n of ZC.values())bg(n,t);return!0}function Su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function at(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ek={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new Zo("app","Firebase",ek);/**
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
 */class tk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const us=JC;function $0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Jh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw dr.create("bad-app-name",{appName:String(s)});if(n||(n=j0()),!n)throw dr.create("no-options");const i=Ul.get(s);if(i){if(es(n,i.options)&&es(r,i.config))return i;throw dr.create("duplicate-app",{appName:s})}const o=new aC(s);for(const u of Xh.values())o.addComponent(u);const l=new tk(n,r,o);return Ul.set(s,l),l}function wf(t=Jh){const e=Ul.get(t);if(!e&&t===Jh&&j0())return $0();if(!e)throw dr.create("no-app",{appName:t});return e}function tn(t,e,n){let r=XC[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(o.join(" "));return}ts(new _r(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const nk="firebase-heartbeat-database",rk=1,bo="firebase-heartbeat-store";let zc=null;function W0(){return zc||(zc=EC(nk,rk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),zc}async function sk(t){try{const n=(await W0()).transaction(bo),r=await n.objectStore(bo).get(H0(t));return await n.done,r}catch(e){if(e instanceof dn)xn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function jg(t,e){try{const r=(await W0()).transaction(bo,"readwrite");await r.objectStore(bo).put(e,H0(t)),await r.done}catch(n){if(n instanceof dn)xn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function H0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ik=1024,ok=30;class ak{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ug();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ok){const o=ck(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ug(),{heartbeatsToSend:r,unsentEntries:s}=lk(this._heartbeatsCache.heartbeats),i=jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function Ug(){return new Date().toISOString().substring(0,10)}function lk(t,e=ik){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QA()?YA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fg(t){return jl(JSON.stringify({version:2,heartbeats:t})).length}function ck(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function hk(t){ts(new _r("platform-logger",e=>new IC(e),"PRIVATE")),ts(new _r("heartbeat",e=>new ak(e),"PRIVATE")),tn(Yh,Mg,t),tn(Yh,Mg,"esm2020"),tn("fire-js","")}hk("");function q0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dk=q0,G0=new Zo("auth","Firebase",q0());/**
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
 */const Fl=new vf("@firebase/auth");function fk(t,...e){Fl.logLevel<=te.WARN&&Fl.warn(`Auth (${us}): ${t}`,...e)}function rl(t,...e){Fl.logLevel<=te.ERROR&&Fl.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function Ot(t,...e){throw If(t,...e)}function Wt(t,...e){return If(t,...e)}function Tf(t,e,n){const r={...dk(),[e]:n};return new Zo("auth","Firebase",r).create(e,{appName:t.name})}function nn(t){return Tf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ot(t,"argument-error"),Tf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function If(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return G0.create(t,...e)}function G(t,e,...n){if(!t)throw If(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rl(e),new Error(e)}function Pn(t,e){t||Tn(e)}/**
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
 */function Zh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function mk(){return zg()==="http:"||zg()==="https:"}function zg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function gk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mk()||HA()||"connection"in navigator)?navigator.onLine:!0}function yk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=BA()||qA()}get(){return gk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sf(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class K0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ek=new ta(3e4,6e4);function Ln(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Vn(t,e,n,r,s={}){return Q0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ea({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return WA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&di(t.emulatorConfig.host)&&(c.credentials="include"),K0.fetch()(await Y0(t,t.config.apiHost,n,l),c)})}async function Q0(t,e,n){t._canInitEmulator=!1;const r={..._k,...e};try{const s=new Tk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ja(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ja(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Tf(t,p,c);Ot(t,p)}}catch(s){if(s instanceof dn)throw s;Ot(t,"network-request-failed",{message:String(s)})}}async function fi(t,e,n,r,s={}){const i=await Vn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Y0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Sf(t.config,s):`${t.config.apiScheme}://${s}`;return vk.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function wk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Tk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wt(this.auth,"network-request-failed")),Ek.get())})}}function ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Wt(t,e,r);return s.customData._tokenResponse=n,s}function Bg(t){return t!==void 0&&t.enterprise!==void 0}class Ik{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sk(t,e){return Vn(t,"GET","/v2/recaptchaConfig",Ln(t,e))}/**
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
 */async function Ak(t,e){return Vn(t,"POST","/v1/accounts:delete",e)}async function zl(t,e){return Vn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ck(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Af(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ho(Bc(s.auth_time)),issuedAtTime:ho(Bc(s.iat)),expirationTime:ho(Bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function Af(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const s=V0(n);return s?JSON.parse(s):(rl("Failed to decode base64 JWT payload"),null)}catch(s){return rl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $g(t){const e=Af(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ti(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&kk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Rk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ho(this.lastLoginAt),this.creationTime=ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await ti(t,zl(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?J0(s.providerUserInfo):[],o=Pk(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ed(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function xk(t){const e=rt(t);await Bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function J0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Nk(t,e){const n=await Q0(t,{},async()=>{const r=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Y0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&di(t.emulatorConfig.host)&&(u.credentials="include"),K0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dk(t,e){return Vn(t,"POST","/v2/accounts:revokeToken",Ln(t,e))}/**
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
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=$g(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Nk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $s;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function Hn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Rk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ed(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ti(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ck(this,e)}reload(){return xk(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(nn(this.auth));const e=await this.getIdToken();return await ti(this,Ak(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:S,providerData:R,stsTokenManager:x}=n;G(m&&x,e,"internal-error");const D=$s.fromJSON(this.name,x);G(typeof m=="string",e,"internal-error"),Hn(r,e.name),Hn(s,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof S=="boolean",e,"internal-error"),Hn(i,e.name),Hn(o,e.name),Hn(l,e.name),Hn(u,e.name),Hn(c,e.name),Hn(p,e.name);const w=new Ut({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:p});return R&&Array.isArray(R)&&(w.providerData=R.map(v=>({...v}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new $s;s.updateFromServerResponse(n);const i=new Ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?J0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new $s;l.updateFromIdToken(r);const u=new Ut({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ed(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const Wg=new Map;function In(t){Pn(t instanceof Function,"Expected a class definition");let e=Wg.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wg.set(t,e),e)}/**
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
 */class X0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}X0.type="NONE";const Hg=X0;/**
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
 */function sl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sl(this.userKey,s.apiKey,i),this.fullPersistenceKey=sl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zl(this.auth,{idToken:e}).catch(()=>{});return n?Ut._fromGetAccountInfoResponse(this.auth,n,e):null}return Ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ws(In(Hg),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||In(Hg);const o=sl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const p=await c._get(o);if(p){let m;if(typeof p=="string"){const g=await zl(e,{idToken:p}).catch(()=>{});if(!g)break;m=await Ut._fromGetAccountInfoResponse(e,g,p)}else m=Ut._fromJSON(e,p);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ws(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ws(i,e,r))}}/**
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
 */function qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sE(e))return"Blackberry";if(iE(e))return"Webos";if(eE(e))return"Safari";if((e.includes("chrome/")||tE(e))&&!e.includes("edge/"))return"Chrome";if(rE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Z0(t=nt()){return/firefox\//i.test(t)}function eE(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tE(t=nt()){return/crios\//i.test(t)}function nE(t=nt()){return/iemobile/i.test(t)}function rE(t=nt()){return/android/i.test(t)}function sE(t=nt()){return/blackberry/i.test(t)}function iE(t=nt()){return/webos/i.test(t)}function Cf(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ok(t=nt()){var e;return Cf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Lk(){return GA()&&document.documentMode===10}function oE(t=nt()){return Cf(t)||rE(t)||iE(t)||sE(t)||/windows phone/i.test(t)||nE(t)}/**
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
 */function aE(t,e=[]){let n;switch(t){case"Browser":n=qg(nt());break;case"Worker":n=`${qg(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class Vk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Mk(t,e={}){return Vn(t,"GET","/v2/passwordPolicy",Ln(t,e))}/**
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
 */const bk=6;class jk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Uk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new Vk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zl(this,{idToken:e}),r=await Ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(at(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(nn(this));const n=e?rt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mk(this),n=new jk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Dk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&fk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Mn(t){return rt(t)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=tC(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Au={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fk(t){Au=t}function lE(t){return Au.loadJS(t)}function zk(){return Au.recaptchaEnterpriseScript}function Bk(){return Au.gapiScript}function $k(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Wk{constructor(){this.enterprise=new Hk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Hk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qk="recaptcha-enterprise",uE="NO_RECAPTCHA";class Gk{constructor(e){this.type=qk,this.auth=Mn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Sk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ik(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Bg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(uE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Wk().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Bg(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=zk();u.length!==0&&(u+=l),lE(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Kg(t,e,n,r=!1,s=!1){const i=new Gk(t);let o;if(s)o=uE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function td(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Kg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Kg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function Kk(t,e){const n=Su(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(es(i,e??{}))return s;Ot(s,"already-initialized")}return n.initialize({options:e})}function Qk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Yk(t,e,n){const r=Mn(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cE(e),{host:o,port:l}=Jk(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(es(c,r.config.emulator)&&es(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,di(o)?_f(`${i}//${o}${u}`):Xk()}function cE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jk(t){const e=cE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qg(o)}}}function Qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class kf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function Zk(t,e){return Vn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function eR(t,e){return fi(t,"POST","/v1/accounts:signInWithPassword",Ln(t,e))}/**
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
 */async function tR(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}async function nR(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}/**
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
 */class jo extends kf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return td(e,n,"signInWithPassword",eR);case"emailLink":return tR(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return td(e,r,"signUpPassword",Zk);case"emailLink":return nR(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Hs(t,e){return fi(t,"POST","/v1/accounts:signInWithIdp",Ln(t,e))}/**
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
 */const rR="http://localhost";class ns extends kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hs(e,n)}buildRequest(){const e={requestUri:rR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ea(n)}return e}}/**
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
 */function sR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iR(t){const e=Yi(Ji(t)).link,n=e?Yi(Ji(e)).deep_link_id:null,r=Yi(Ji(t)).deep_link_id;return(r?Yi(Ji(r)).link:null)||r||n||e||t}class Rf{constructor(e){const n=Yi(Ji(e)),r=n.apiKey??null,s=n.oobCode??null,i=sR(n.mode??null);G(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=iR(e);try{return new Rf(n)}catch{return null}}}/**
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
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,n){return jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rf.parseLink(n);return G(r,"argument-error"),jo._fromEmailAndCode(e,r.code,r.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class na extends xf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yn extends na{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
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
 */class _n extends na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class Jn extends na{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class vn extends na{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */async function oR(t,e){return fi(t,"POST","/v1/accounts:signUp",Ln(t,e))}/**
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
 */class vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ut._fromIdTokenResponse(e,r,s),o=Yg(r);return new vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Yg(r);return new vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $l extends dn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$l.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $l(e,n,r,s)}}function hE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$l._fromErrorAndOperation(t,i,e,r):i})}async function aR(t,e,n=!1){const r=await ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vr._forOperation(t,"link",r)}/**
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
 */async function lR(t,e,n=!1){const{auth:r}=t;if(at(r.app))return Promise.reject(nn(r));const s="reauthenticate";try{const i=await ti(t,hE(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=Af(i.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),i}}/**
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
 */async function dE(t,e,n=!1){if(at(t.app))return Promise.reject(nn(t));const r="signIn",s=await hE(t,r,e),i=await vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function uR(t,e){return dE(Mn(t),e)}/**
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
 */async function cR(t,e){return fi(t,"POST","/v1/accounts:signInWithCustomToken",Ln(t,e))}/**
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
 */async function hR(t,e){if(at(t.app))return Promise.reject(nn(t));const n=Mn(t),r=await cR(n,{token:e,returnSecureToken:!0}),s=await vr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}/**
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
 */async function fE(t){const e=Mn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dR(t,e,n){if(at(t.app))return Promise.reject(nn(t));const r=Mn(t),o=await td(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&fE(t),u}),l=await vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function fR(t,e,n){return at(t.app)?Promise.reject(nn(t)):uR(rt(t),pi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fE(t),r})}/**
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
 */async function pR(t,e){return Vn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=rt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ti(r,pR(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function gR(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function yR(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function _R(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function vR(t){return rt(t).signOut()}const Wl="__sak";/**
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
 */class pE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ER=1e3,wR=10;class mE extends pE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Lk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ER)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mE.type="LOCAL";const TR=mE;/**
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
 */class gE extends pE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gE.type="SESSION";const yE=gE;/**
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
 */function IR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await IR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
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
 */function Pf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class SR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Pf("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function AR(t){rn().location.href=t}/**
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
 */function _E(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function CR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function RR(){return _E()?self:null}/**
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
 */const vE="firebaseLocalStorageDb",xR=1,Hl="firebaseLocalStorage",EE="fbase_key";class ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ku(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function PR(){const t=indexedDB.deleteDatabase(vE);return new ra(t).toPromise()}function nd(){const t=indexedDB.open(vE,xR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:EE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await PR(),e(await nd()))})})}async function Jg(t,e,n){const r=ku(t,!0).put({[EE]:e,value:n});return new ra(r).toPromise()}async function NR(t,e){const n=ku(t,!1).get(e),r=await new ra(n).toPromise();return r===void 0?null:r.value}function Xg(t,e){const n=ku(t,!0).delete(e);return new ra(n).toPromise()}const DR=800,OR=3;class wE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _E()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(RR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await CR(),!this.activeServiceWorker)return;this.sender=new SR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await Jg(e,Wl,"1"),await Xg(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ku(s,!1).getAll();return new ra(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wE.type="LOCAL";const LR=wE;new ta(3e4,6e4);/**
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
 */function TE(t,e){return e?In(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nf extends kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VR(t){return dE(t.auth,new Nf(t),t.bypassAuthState)}function MR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),lR(n,new Nf(t),t.bypassAuthState)}async function bR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),aR(n,new Nf(t),t.bypassAuthState)}/**
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
 */class IE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VR;case"linkViaPopup":case"linkViaRedirect":return bR;case"reauthViaPopup":case"reauthViaRedirect":return MR;default:Ot(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jR=new ta(2e3,1e4);async function $c(t,e,n){if(at(t.app))return Promise.reject(Wt(t,"operation-not-supported-in-this-environment"));const r=Mn(t);pk(t,e,xf);const s=TE(r,n);return new $r(r,"signInViaPopup",e,s).executeNotNull()}class $r extends IE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Pf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jR.get())};e()}}$r.currentPopupAction=null;/**
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
 */const UR="pendingRedirect",il=new Map;class FR extends IE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const r=await zR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zR(t,e){const n=WR(e),r=$R(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function BR(t,e){il.set(t._key(),e)}function $R(t){return In(t._redirectPersistence)}function WR(t){return sl(UR,t.config.apiKey,t.name)}async function HR(t,e,n=!1){if(at(t.app))return Promise.reject(nn(t));const r=Mn(t),s=TE(r,e),o=await new FR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qR=10*60*1e3;class GR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!SE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zg(e))}saveEventToCache(e){this.cachedEventUids.add(Zg(e)),this.lastProcessedEventTime=Date.now()}}function Zg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function SE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SE(t);default:return!1}}/**
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
 */async function QR(t,e={}){return Vn(t,"GET","/v1/projects",e)}/**
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
 */const YR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JR=/^https?/;async function XR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QR(t);for(const n of e)try{if(ZR(n))return}catch{}Ot(t,"unauthorized-domain")}function ZR(t){const e=Zh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JR.test(n))return!1;if(YR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ex=new ta(3e4,6e4);function ey(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tx(t){return new Promise((e,n)=>{var s,i,o;function r(){ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ey(),n(Wt(t,"network-request-failed"))},timeout:ex.get()})}if((i=(s=rn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=rn().gapi)!=null&&o.load)r();else{const l=$k("iframefcb");return rn()[l]=()=>{gapi.load?r():n(Wt(t,"network-request-failed"))},lE(`${Bk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ol=null,e})}let ol=null;function nx(t){return ol=ol||tx(t),ol}/**
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
 */const rx=new ta(5e3,15e3),sx="__/auth/iframe",ix="emulator/auth/iframe",ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ax=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lx(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sf(e,ix):`https://${t.config.authDomain}/${sx}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=ax.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ea(r).slice(1)}`}async function ux(t){const e=await nx(t),n=rn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:lx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ox,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),l=rn().setTimeout(()=>{i(o)},rx.get());function u(){rn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const cx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hx=500,dx=600,fx="_blank",px="http://localhost";class ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mx(t,e,n,r=hx,s=dx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...cx,width:r.toString(),height:s.toString(),top:i,left:o},c=nt().toLowerCase();n&&(l=tE(c)?fx:n),Z0(c)&&(e=e||px,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[S,R])=>`${g}${S}=${R},`,"");if(Ok(c)&&l!=="_self")return gx(e||"",l),new ty(null);const m=window.open(e||"",l,p);G(m,t,"popup-blocked");try{m.focus()}catch{}return new ty(m)}function gx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yx="__/auth/handler",_x="emulator/auth/handler",vx=encodeURIComponent("fac");async function ny(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof xf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof na){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),c=u?`#${vx}=${encodeURIComponent(u)}`:"";return`${Ex(t)}?${ea(l).slice(1)}${c}`}function Ex({config:t}){return t.emulator?Sf(t,_x):`https://${t.authDomain}/${yx}`}/**
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
 */const Wc="webStorageSupport";class wx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yE,this._completeRedirectFn=HR,this._overrideRedirectResult=BR}async _openPopup(e,n,r,s){var o;Pn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await ny(e,n,r,Zh(),s);return mx(e,i,Pf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ny(e,n,r,Zh(),s);return AR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ux(e),r=new GR(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Wc];i!==void 0&&n(!!i),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oE()||eE()||Cf()}}const Tx=wx;var ry="@firebase/auth",sy="1.12.2";/**
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
 */class Ix{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ax(t){ts(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aE(t)},c=new Uk(r,s,i,u);return Qk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new _r("auth-internal",e=>{const n=Mn(e.getProvider("auth").getImmediate());return(r=>new Ix(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(ry,sy,Sx(t)),tn(ry,sy,"esm2020")}/**
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
 */const Cx=5*60,kx=U0("authIdTokenMaxAge")||Cx;let iy=null;const Rx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kx)return;const s=n==null?void 0:n.token;iy!==s&&(iy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xx(t=wf()){const e=Su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Kk(t,{popupRedirectResolver:Tx,persistence:[LR,TR,yE]}),r=U0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Rx(i.toString());yR(n,o,()=>o(n.currentUser)),gR(n,l=>o(l))}}const s=M0("auth");return s&&Yk(n,`http://${s}`),n}function Px(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Fk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Wt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Px().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ax("Browser");var Nx="firebase",Dx="12.11.0";/**
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
 */tn(Nx,Dx,"app");var oy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fr,AE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.F=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(C,k,P){for(var I=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)I[ze-2]=arguments[ze];return _.prototype[k].apply(C,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,T){T||(T=0);const C=Array(16);if(typeof _=="string")for(var k=0;k<16;++k)C[k]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(k=0;k<16;++k)C[k]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],k=E.g[2];let P=E.g[3],I;I=_+(P^T&(k^P))+C[0]+3614090360&4294967295,_=T+(I<<7&4294967295|I>>>25),I=P+(k^_&(T^k))+C[1]+3905402710&4294967295,P=_+(I<<12&4294967295|I>>>20),I=k+(T^P&(_^T))+C[2]+606105819&4294967295,k=P+(I<<17&4294967295|I>>>15),I=T+(_^k&(P^_))+C[3]+3250441966&4294967295,T=k+(I<<22&4294967295|I>>>10),I=_+(P^T&(k^P))+C[4]+4118548399&4294967295,_=T+(I<<7&4294967295|I>>>25),I=P+(k^_&(T^k))+C[5]+1200080426&4294967295,P=_+(I<<12&4294967295|I>>>20),I=k+(T^P&(_^T))+C[6]+2821735955&4294967295,k=P+(I<<17&4294967295|I>>>15),I=T+(_^k&(P^_))+C[7]+4249261313&4294967295,T=k+(I<<22&4294967295|I>>>10),I=_+(P^T&(k^P))+C[8]+1770035416&4294967295,_=T+(I<<7&4294967295|I>>>25),I=P+(k^_&(T^k))+C[9]+2336552879&4294967295,P=_+(I<<12&4294967295|I>>>20),I=k+(T^P&(_^T))+C[10]+4294925233&4294967295,k=P+(I<<17&4294967295|I>>>15),I=T+(_^k&(P^_))+C[11]+2304563134&4294967295,T=k+(I<<22&4294967295|I>>>10),I=_+(P^T&(k^P))+C[12]+1804603682&4294967295,_=T+(I<<7&4294967295|I>>>25),I=P+(k^_&(T^k))+C[13]+4254626195&4294967295,P=_+(I<<12&4294967295|I>>>20),I=k+(T^P&(_^T))+C[14]+2792965006&4294967295,k=P+(I<<17&4294967295|I>>>15),I=T+(_^k&(P^_))+C[15]+1236535329&4294967295,T=k+(I<<22&4294967295|I>>>10),I=_+(k^P&(T^k))+C[1]+4129170786&4294967295,_=T+(I<<5&4294967295|I>>>27),I=P+(T^k&(_^T))+C[6]+3225465664&4294967295,P=_+(I<<9&4294967295|I>>>23),I=k+(_^T&(P^_))+C[11]+643717713&4294967295,k=P+(I<<14&4294967295|I>>>18),I=T+(P^_&(k^P))+C[0]+3921069994&4294967295,T=k+(I<<20&4294967295|I>>>12),I=_+(k^P&(T^k))+C[5]+3593408605&4294967295,_=T+(I<<5&4294967295|I>>>27),I=P+(T^k&(_^T))+C[10]+38016083&4294967295,P=_+(I<<9&4294967295|I>>>23),I=k+(_^T&(P^_))+C[15]+3634488961&4294967295,k=P+(I<<14&4294967295|I>>>18),I=T+(P^_&(k^P))+C[4]+3889429448&4294967295,T=k+(I<<20&4294967295|I>>>12),I=_+(k^P&(T^k))+C[9]+568446438&4294967295,_=T+(I<<5&4294967295|I>>>27),I=P+(T^k&(_^T))+C[14]+3275163606&4294967295,P=_+(I<<9&4294967295|I>>>23),I=k+(_^T&(P^_))+C[3]+4107603335&4294967295,k=P+(I<<14&4294967295|I>>>18),I=T+(P^_&(k^P))+C[8]+1163531501&4294967295,T=k+(I<<20&4294967295|I>>>12),I=_+(k^P&(T^k))+C[13]+2850285829&4294967295,_=T+(I<<5&4294967295|I>>>27),I=P+(T^k&(_^T))+C[2]+4243563512&4294967295,P=_+(I<<9&4294967295|I>>>23),I=k+(_^T&(P^_))+C[7]+1735328473&4294967295,k=P+(I<<14&4294967295|I>>>18),I=T+(P^_&(k^P))+C[12]+2368359562&4294967295,T=k+(I<<20&4294967295|I>>>12),I=_+(T^k^P)+C[5]+4294588738&4294967295,_=T+(I<<4&4294967295|I>>>28),I=P+(_^T^k)+C[8]+2272392833&4294967295,P=_+(I<<11&4294967295|I>>>21),I=k+(P^_^T)+C[11]+1839030562&4294967295,k=P+(I<<16&4294967295|I>>>16),I=T+(k^P^_)+C[14]+4259657740&4294967295,T=k+(I<<23&4294967295|I>>>9),I=_+(T^k^P)+C[1]+2763975236&4294967295,_=T+(I<<4&4294967295|I>>>28),I=P+(_^T^k)+C[4]+1272893353&4294967295,P=_+(I<<11&4294967295|I>>>21),I=k+(P^_^T)+C[7]+4139469664&4294967295,k=P+(I<<16&4294967295|I>>>16),I=T+(k^P^_)+C[10]+3200236656&4294967295,T=k+(I<<23&4294967295|I>>>9),I=_+(T^k^P)+C[13]+681279174&4294967295,_=T+(I<<4&4294967295|I>>>28),I=P+(_^T^k)+C[0]+3936430074&4294967295,P=_+(I<<11&4294967295|I>>>21),I=k+(P^_^T)+C[3]+3572445317&4294967295,k=P+(I<<16&4294967295|I>>>16),I=T+(k^P^_)+C[6]+76029189&4294967295,T=k+(I<<23&4294967295|I>>>9),I=_+(T^k^P)+C[9]+3654602809&4294967295,_=T+(I<<4&4294967295|I>>>28),I=P+(_^T^k)+C[12]+3873151461&4294967295,P=_+(I<<11&4294967295|I>>>21),I=k+(P^_^T)+C[15]+530742520&4294967295,k=P+(I<<16&4294967295|I>>>16),I=T+(k^P^_)+C[2]+3299628645&4294967295,T=k+(I<<23&4294967295|I>>>9),I=_+(k^(T|~P))+C[0]+4096336452&4294967295,_=T+(I<<6&4294967295|I>>>26),I=P+(T^(_|~k))+C[7]+1126891415&4294967295,P=_+(I<<10&4294967295|I>>>22),I=k+(_^(P|~T))+C[14]+2878612391&4294967295,k=P+(I<<15&4294967295|I>>>17),I=T+(P^(k|~_))+C[5]+4237533241&4294967295,T=k+(I<<21&4294967295|I>>>11),I=_+(k^(T|~P))+C[12]+1700485571&4294967295,_=T+(I<<6&4294967295|I>>>26),I=P+(T^(_|~k))+C[3]+2399980690&4294967295,P=_+(I<<10&4294967295|I>>>22),I=k+(_^(P|~T))+C[10]+4293915773&4294967295,k=P+(I<<15&4294967295|I>>>17),I=T+(P^(k|~_))+C[1]+2240044497&4294967295,T=k+(I<<21&4294967295|I>>>11),I=_+(k^(T|~P))+C[8]+1873313359&4294967295,_=T+(I<<6&4294967295|I>>>26),I=P+(T^(_|~k))+C[15]+4264355552&4294967295,P=_+(I<<10&4294967295|I>>>22),I=k+(_^(P|~T))+C[6]+2734768916&4294967295,k=P+(I<<15&4294967295|I>>>17),I=T+(P^(k|~_))+C[13]+1309151649&4294967295,T=k+(I<<21&4294967295|I>>>11),I=_+(k^(T|~P))+C[4]+4149444226&4294967295,_=T+(I<<6&4294967295|I>>>26),I=P+(T^(_|~k))+C[11]+3174756917&4294967295,P=_+(I<<10&4294967295|I>>>22),I=k+(_^(P|~T))+C[2]+718787259&4294967295,k=P+(I<<15&4294967295|I>>>17),I=T+(P^(k|~_))+C[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+k&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const T=_-this.blockSize,C=this.C;let k=this.h,P=0;for(;P<_;){if(k==0)for(;P<=T;)s(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<_;)if(C[k++]=E.charCodeAt(P++),k==this.blockSize){s(this,C),k=0;break}}else for(;P<_;)if(C[k++]=E[P++],k==this.blockSize){s(this,C),k=0;break}}this.h=k,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,T=0;T<4;++T)for(let C=0;C<32;C+=8)E[_++]=this.g[T]>>>C&255;return E};function i(E,_){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;const T=[];let C=!0;for(let k=E.length-1;k>=0;k--){const P=E[k]|0;C&&P==_||(T[k]=P,C=!1)}this.g=T}var l={};function u(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return D(c(-E));const _=[];let T=1;for(let C=0;E>=T;C++)_[C]=E/T|0,T*=4294967296;return new o(_,0)}function p(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return D(p(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(_,8));let C=m;for(let P=0;P<E.length;P+=8){var k=Math.min(8,E.length-P);const I=parseInt(E.substring(P,P+k),_);k<8?(k=c(Math.pow(_,k)),C=C.j(k).add(c(I))):(C=C.j(T),C=C.add(c(I)))}return C}var m=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-D(this).m();let E=0,_=1;for(let T=0;T<this.g.length;T++){const C=this.i(T);E+=(C>=0?C:4294967296+C)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(x(this))return"-"+D(this).toString(E);const _=c(Math.pow(E,6));var T=this;let C="";for(;;){const k=L(T,_).g;T=w(T,k.j(_));let P=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=k,R(T))return P+C;for(;P.length<6;)P="0"+P;C=P+C}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function x(E){return E.h==-1}t.l=function(E){return E=w(this,E),x(E)?-1:R(E)?0:1};function D(E){const _=E.g.length,T=[];for(let C=0;C<_;C++)T[C]=~E.g[C];return new o(T,~E.h).add(g)}t.abs=function(){return x(this)?D(this):this},t.add=function(E){const _=Math.max(this.g.length,E.g.length),T=[];let C=0;for(let k=0;k<=_;k++){let P=C+(this.i(k)&65535)+(E.i(k)&65535),I=(P>>>16)+(this.i(k)>>>16)+(E.i(k)>>>16);C=I>>>16,P&=65535,I&=65535,T[k]=I<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,_){return E.add(D(_))}t.j=function(E){if(R(this)||R(E))return m;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(this.l(S)<0&&E.l(S)<0)return c(this.m()*E.m());const _=this.g.length+E.g.length,T=[];for(var C=0;C<2*_;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(let k=0;k<E.g.length;k++){const P=this.i(C)>>>16,I=this.i(C)&65535,ze=E.i(k)>>>16,pn=E.i(k)&65535;T[2*C+2*k]+=I*pn,v(T,2*C+2*k),T[2*C+2*k+1]+=P*pn,v(T,2*C+2*k+1),T[2*C+2*k+1]+=I*ze,v(T,2*C+2*k+1),T[2*C+2*k+2]+=P*ze,v(T,2*C+2*k+2)}for(E=0;E<_;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=_;E<2*_;E++)T[E]=0;return new o(T,0)};function v(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function A(E,_){this.g=E,this.h=_}function L(E,_){if(R(_))throw Error("division by zero");if(R(E))return new A(m,m);if(x(E))return _=L(D(E),_),new A(D(_.g),D(_.h));if(x(_))return _=L(E,D(_)),new A(D(_.g),_.h);if(E.g.length>30){if(x(E)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var T=g,C=_;C.l(E)<=0;)T=j(T),C=j(C);var k=F(T,1),P=F(C,1);for(C=F(C,2),T=F(T,2);!R(C);){var I=P.add(C);I.l(E)<=0&&(k=k.add(T),P=I),C=F(C,1),T=F(T,1)}return _=w(E,k.j(_)),new A(k,_)}for(k=m;E.l(_)>=0;){for(T=Math.max(1,Math.floor(E.m()/_.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),P=c(T),I=P.j(_);x(I)||I.l(E)>0;)T-=C,P=c(T),I=P.j(_);R(P)&&(P=g),k=k.add(P),E=w(E,I)}return new A(k,E)}t.B=function(E){return L(this,E).h},t.and=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let C=0;C<_;C++)T[C]=this.i(C)&E.i(C);return new o(T,this.h&E.h)},t.or=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let C=0;C<_;C++)T[C]=this.i(C)|E.i(C);return new o(T,this.h|E.h)},t.xor=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let C=0;C<_;C++)T[C]=this.i(C)^E.i(C);return new o(T,this.h^E.h)};function j(E){const _=E.g.length+1,T=[];for(let C=0;C<_;C++)T[C]=E.i(C)<<1|E.i(C-1)>>>31;return new o(T,E.h)}function F(E,_){const T=_>>5;_%=32;const C=E.g.length-T,k=[];for(let P=0;P<C;P++)k[P]=_>0?E.i(P+T)>>>_|E.i(P+T+1)<<32-_:E.i(P+T);return new o(k,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,AE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,fr=o}).apply(typeof oy<"u"?oy:typeof self<"u"?self:typeof window<"u"?window:{});var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var CE,Xi,kE,al,rd,RE,xE,PE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ua=="object"&&Ua];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in f))break e;f=f[N]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function p(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,N,O){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return h.prototype[N].apply(y,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function R(a,h){for(let y=1;y<arguments.length;y++){const N=arguments[y];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=a.length||0;const O=N.length||0;a.length=f+O;for(let z=0;z<O;z++)a[f+z]=N[z]}else a.push(N)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function w(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const y=A.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var A=new x(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let j,F=!1,E=new v,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(T)}};function T(){for(var a;a=w();){try{a.h.call(a.g)}catch(f){D(f)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function ze(a,h){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(ze,k),ze.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ze.Z.h.call(this)},ze.prototype.h=function(){ze.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pn="closure_listenable_"+(Math.random()*1e6|0),vi=0;function Ei(a,h,f,y,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=N,this.key=++vi,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function X(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function me(a){const h={};for(const f in a)h[f]=a[f];return h}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pr(a,h){let f,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(f in y)a[f]=y[f];for(let O=0;O<Ie.length;O++)f=Ie[O],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function St(a){this.src=a,this.g={},this.h=0}St.prototype.add=function(a,h,f,y,N){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const z=Lt(a,h,y,N);return z>-1?(h=a[z],f||(h.fa=!1)):(h=new Ei(h,this.src,O,!!y,N),h.fa=f,a.push(h)),h};function Nr(a,h){const f=h.type;if(f in a.g){var y=a.g[f],N=Array.prototype.indexOf.call(y,h,void 0),O;(O=N>=0)&&Array.prototype.splice.call(y,N,1),O&&(B(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Lt(a,h,f,y){for(let N=0;N<a.length;++N){const O=a[N];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==y)return N}return-1}var bn="closure_lm_"+(Math.random()*1e6|0),Bu={};function fp(a,h,f,y,N){if(Array.isArray(h)){for(let O=0;O<h.length;O++)fp(a,h[O],f,y,N);return null}return f=gp(f),a&&a[pn]?a.J(h,f,l(y)?!!y.capture:!1,N):lT(a,h,f,!1,y,N)}function lT(a,h,f,y,N,O){if(!h)throw Error("Invalid event type");const z=l(N)?!!N.capture:!!N;let Z=Wu(a);if(Z||(a[bn]=Z=new St(a)),f=Z.add(h,f,y,z,O),f.proxy)return f;if(y=uT(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)P||(N=z),N===void 0&&(N=!1),a.addEventListener(h.toString(),y,N);else if(a.attachEvent)a.attachEvent(mp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function uT(){function a(f){return h.call(a.src,a.listener,f)}const h=cT;return a}function pp(a,h,f,y,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)pp(a,h[O],f,y,N);else y=l(y)?!!y.capture:!!y,f=gp(f),a&&a[pn]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],f=Lt(h,f,y,N),f>-1&&(B(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=Wu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Lt(h,f,y,N)),(f=a>-1?h[a]:null)&&$u(f))}function $u(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[pn])Nr(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(mp(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Wu(h))?(Nr(f,a),f.h==0&&(f.src=null,h[bn]=null)):B(a)}}}function mp(a){return a in Bu?Bu[a]:Bu[a]="on"+a}function cT(a,h){if(a.da)a=!0;else{h=new ze(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&$u(a),a=f.call(y,h)}return a}function Wu(a){return a=a[bn],a instanceof St?a:null}var Hu="__closure_events_fn_"+(Math.random()*1e9>>>0);function gp(a){return typeof a=="function"?a:(a[Hu]||(a[Hu]=function(h){return a.handleEvent(h)}),a[Hu])}function Ke(){C.call(this),this.i=new St(this),this.M=this,this.G=null}m(Ke,C),Ke.prototype[pn]=!0,Ke.prototype.removeEventListener=function(a,h,f,y){pp(this,a,h,f,y)};function st(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new k(h,a);else if(h instanceof k)h.target=h.target||a;else{var N=h;h=new k(y,a),Pr(h,N)}N=!0;let O,z;if(f)for(z=f.length-1;z>=0;z--)O=h.g=f[z],N=ua(O,y,!0,h)&&N;if(O=h.g=a,N=ua(O,y,!0,h)&&N,N=ua(O,y,!1,h)&&N,f)for(z=0;z<f.length;z++)O=h.g=f[z],N=ua(O,y,!1,h)&&N}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)B(f[y]);delete a.g[h],a.h--}}this.G=null},Ke.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Ke.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function ua(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let O=0;O<h.length;++O){const z=h[O];if(z&&!z.da&&z.capture==f){const Z=z.listener,Ne=z.ha||z.src;z.fa&&Nr(a.i,z),N=Z.call(Ne,y)!==!1&&N}}return N&&!y.defaultPrevented}function hT(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function yp(a){a.g=hT(()=>{a.g=null,a.i&&(a.i=!1,yp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class dT extends C{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:yp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(a){C.call(this),this.h=a,this.g={}}m(wi,C);var _p=[];function vp(a){Q(a.g,function(h,f){this.g.hasOwnProperty(f)&&$u(h)},a),a.g={}}wi.prototype.N=function(){wi.Z.N.call(this),vp(this)},wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qu=o.JSON.stringify,fT=o.JSON.parse,pT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ep(){}function wp(){}var Ti={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Gu(){k.call(this,"d")}m(Gu,k);function Ku(){k.call(this,"c")}m(Ku,k);var Dr={},Tp=null;function ca(){return Tp=Tp||new Ke}Dr.Ia="serverreachability";function Ip(a){k.call(this,Dr.Ia,a)}m(Ip,k);function Ii(a){const h=ca();st(h,new Ip(h))}Dr.STAT_EVENT="statevent";function Sp(a,h){k.call(this,Dr.STAT_EVENT,a),this.stat=h}m(Sp,k);function it(a){const h=ca();st(h,new Sp(h,a))}Dr.Ja="timingevent";function Ap(a,h){k.call(this,Dr.Ja,a),this.size=h}m(Ap,k);function Si(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ai(){this.g=!0}Ai.prototype.ua=function(){this.g=!1};function mT(a,h,f,y,N,O){a.info(function(){if(a.g)if(O){var z="",Z=O.split("&");for(let le=0;le<Z.length;le++){var Ne=Z[le].split("=");if(Ne.length>1){const be=Ne[0];Ne=Ne[1];const Kt=be.split("_");z=Kt.length>=2&&Kt[1]=="type"?z+(be+"="+Ne+"&"):z+(be+"=redacted&")}}}else z=null;else z=O;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+f+`
`+z})}function gT(a,h,f,y,N,O,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+f+`
`+O+" "+z})}function ms(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+_T(a,f)+(y?" "+y:"")})}function yT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ai.prototype.info=function(){};function _T(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var f=O[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var N=y[0];if(N!="noop"&&N!="stop"&&N!="close")for(let z=1;z<y.length;z++)y[z]=""}}}}return qu(O)}catch{return h}}var ha={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Cp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},kp;function Qu(){}m(Qu,Ep),Qu.prototype.g=function(){return new XMLHttpRequest},kp=new Qu;function Ci(a){return encodeURIComponent(String(a))}function vT(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function jn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new wi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Rp}function Rp(){this.i=null,this.g="",this.h=!1}var xp={},Yu={};function Ju(a,h,f){a.M=1,a.A=fa(Gt(h)),a.u=f,a.R=!0,Pp(a,null)}function Pp(a,h){a.F=Date.now(),da(a),a.B=Gt(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),$p(f.i,"t",y),a.C=0,f=a.j.L,a.h=new Rp,a.g=am(a.j,f?h:null,!a.u),a.P>0&&(a.O=new dT(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(_p[0]=N.toString()),N=_p);for(let O=0;O<N.length;O++){const z=fp(f,N[O],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ii(),mT(a.i,a.v,a.B,a.l,a.S,a.u)}jn.prototype.ba=function(a){a=a.target;const h=this.O;h&&zn(a)==3?h.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=zn(this.g),Ne=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Yp(this.g)))){this.K||Z!=4||Ne==7||(Ne==8||le<=0?Ii(3):Ii(2)),Xu(this);var h=this.g.ca();this.X=h;var f=ET(this);if(this.o=h==200,gT(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,N=this.g;if((y=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(y)){var O=y;break t}}O=null}if(a=O)ms(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Zu(this,a);else{this.o=!1,this.m=3,it(12),Or(this),ki(this);break e}}if(this.R){a=!0;let be;for(;!this.K&&this.C<f.length;)if(be=wT(this,f),be==Yu){Z==4&&(this.m=4,it(14),a=!1),ms(this.i,this.l,null,"[Incomplete Response]");break}else if(be==xp){this.m=4,it(15),ms(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else ms(this.i,this.l,be,null),Zu(this,be);if(Np(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||f.length!=0||this.h.h||(this.m=1,it(16),a=!1),this.o=this.o&&a,!a)ms(this.i,this.l,f,"[Invalid Chunked Response]"),Or(this),ki(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ac(z),z.P=!0,it(11))}}else ms(this.i,this.l,f,null),Zu(this,f);Z==4&&Or(this),this.o&&!this.K&&(Z==4?rm(this.j,this):(this.o=!1,da(this)))}else VT(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),Or(this),ki(this)}}}catch{}finally{}};function ET(a){if(!Np(a))return a.g.la();const h=Yp(a.g);if(h==="")return"";let f="";const y=h.length,N=zn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Or(a),ki(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<y;O++)a.h.h=!0,f+=a.h.i.decode(h[O],{stream:!(N&&O==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Np(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function wT(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Yu:(f=Number(h.substring(f,y)),isNaN(f)?xp:(y+=1,y+f>h.length?Yu:(h=h.slice(y,y+f),a.C=y+f,h)))}jn.prototype.cancel=function(){this.K=!0,Or(this)};function da(a){a.T=Date.now()+a.H,Dp(a,a.H)}function Dp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Si(c(a.aa,a),h)}function Xu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}jn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(yT(this.i,this.B),this.M!=2&&(Ii(),it(17)),Or(this),this.m=2,ki(this)):Dp(this,this.T-a)};function ki(a){a.j.I==0||a.K||rm(a.j,a)}function Or(a){Xu(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,vp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Zu(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||ec(f.h,a))){if(!a.L&&ec(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)_a(f),ga(f);else break e;oc(f),it(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Si(c(f.Va,f),6e3));Vp(f.h)<=1&&f.ta&&(f.ta=void 0)}else Vr(f,11)}else if((a.L||f.g==a)&&_a(f),!I(h))for(N=f.Ba.g.parse(h),h=0;h<N.length;h++){let le=N[h];const be=le[0];if(!(be<=f.K))if(f.K=be,le=le[1],f.I==2)if(le[0]=="c"){f.M=le[1],f.ba=le[2];const Kt=le[3];Kt!=null&&(f.ka=Kt,f.j.info("VER="+f.ka));const Mr=le[4];Mr!=null&&(f.za=Mr,f.j.info("SVER="+f.za));const Bn=le[5];Bn!=null&&typeof Bn=="number"&&Bn>0&&(y=1.5*Bn,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const $n=a.g;if($n){const Ea=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ea){var O=y.h;O.g||Ea.indexOf("spdy")==-1&&Ea.indexOf("quic")==-1&&Ea.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(tc(O,O.h),O.h=null))}if(y.G){const lc=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;lc&&(y.wa=lc,ce(y.J,y.G,lc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var z=a;if(y.na=om(y,y.L?y.ba:null,y.W),z.L){Mp(y.h,z);var Z=z,Ne=y.O;Ne&&(Z.H=Ne),Z.D&&(Xu(Z),da(Z)),y.g=z}else tm(y);f.i.length>0&&ya(f)}else le[0]!="stop"&&le[0]!="close"||Vr(f,7);else f.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Vr(f,7):ic(f):le[0]!="noop"&&f.l&&f.l.qa(le),f.A=0)}}Ii(4)}catch{}}var TT=class{constructor(a,h){this.g=a,this.map=h}};function Op(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Lp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vp(a){return a.h?1:a.g?a.g.size:0}function ec(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function tc(a,h){a.g?a.g.add(h):a.h=h}function Mp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Op.prototype.cancel=function(){if(this.i=bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return S(a.i)}var jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IT(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let N,O=null;y>=0?(N=a[f].substring(0,y),O=a[f].substring(y+1)):N=a[f],h(N,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Un(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Un?(this.l=a.l,Ri(this,a.j),this.o=a.o,this.g=a.g,xi(this,a.u),this.h=a.h,nc(this,Wp(a.i)),this.m=a.m):a&&(h=String(a).match(jp))?(this.l=!1,Ri(this,h[1]||"",!0),this.o=Pi(h[2]||""),this.g=Pi(h[3]||"",!0),xi(this,h[4]),this.h=Pi(h[5]||"",!0),nc(this,h[6]||"",!0),this.m=Pi(h[7]||"")):(this.l=!1,this.i=new Di(null,this.l))}Un.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ni(h,Up,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ni(h,Up,!0),"@"),a.push(Ci(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ni(f,f.charAt(0)=="/"?CT:AT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ni(f,RT)),a.join("")},Un.prototype.resolve=function(a){const h=Gt(this);let f=!!a.j;f?Ri(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)xi(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var N=h.h.lastIndexOf("/");N!=-1&&(y=h.h.slice(0,N+1)+y)}if(N=y,N==".."||N==".")y="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){y=N.lastIndexOf("/",0)==0,N=N.split("/");const O=[];for(let z=0;z<N.length;){const Z=N[z++];Z=="."?y&&z==N.length&&O.push(""):Z==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),y&&z==N.length&&O.push("")):(O.push(Z),y=!0)}y=O.join("/")}else y=N}return f?h.h=y:f=a.i.toString()!=="",f?nc(h,Wp(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Gt(a){return new Un(a)}function Ri(a,h,f){a.j=f?Pi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function xi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function nc(a,h,f){h instanceof Di?(a.i=h,xT(a.i,a.l)):(f||(h=Ni(h,kT)),a.i=new Di(h,a.l))}function ce(a,h,f){a.i.set(h,f)}function fa(a){return ce(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Pi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ni(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,ST),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ST(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Up=/[#\/\?@]/g,AT=/[#\?:]/g,CT=/[#\?]/g,kT=/[#\?@]/g,RT=/#/g;function Di(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Lr(a){a.g||(a.g=new Map,a.h=0,a.i&&IT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Di.prototype,t.add=function(a,h){Lr(this),this.i=null,a=gs(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Fp(a,h){Lr(a),h=gs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function zp(a,h){return Lr(a),h=gs(a,h),a.g.has(h)}t.forEach=function(a,h){Lr(this),this.g.forEach(function(f,y){f.forEach(function(N){a.call(h,N,y,this)},this)},this)};function Bp(a,h){Lr(a);let f=[];if(typeof h=="string")zp(a,h)&&(f=f.concat(a.g.get(gs(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Lr(this),this.i=null,a=gs(this,a),zp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Bp(this,a),a.length>0?String(a[0]):h):h};function $p(a,h,f){Fp(a,h),f.length>0&&(a.i=null,a.g.set(gs(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const N=Ci(f);f=Bp(this,f);for(let O=0;O<f.length;O++){let z=N;f[O]!==""&&(z+="="+Ci(f[O])),a.push(z)}}return this.i=a.join("&")};function Wp(a){const h=new Di;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function gs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function xT(a,h){h&&!a.j&&(Lr(a),a.i=null,a.g.forEach(function(f,y){const N=y.toLowerCase();y!=N&&(Fp(this,y),$p(this,N,f))},a)),a.j=h}function PT(a,h){const f=new Ai;if(o.Image){const y=new Image;y.onload=p(Fn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=p(Fn,f,"TestLoadImage: error",!1,h,y),y.onabort=p(Fn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=p(Fn,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function NT(a,h){const f=new Ai,y=new AbortController,N=setTimeout(()=>{y.abort(),Fn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(N),O.ok?Fn(f,"TestPingServer: ok",!0,h):Fn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Fn(f,"TestPingServer: error",!1,h)})}function Fn(a,h,f,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(f)}catch{}}function DT(){this.g=new pT}function rc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(rc,Ep),rc.prototype.g=function(){return new pa(this.i,this.h)};function pa(a,h){Ke.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(pa,Ke),t=pa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Li(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Hp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Hp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Oi(this):Li(this),this.readyState==3&&Hp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Oi(this))},t.Na=function(a){this.g&&(this.response=a,Oi(this))},t.ga=function(){this.g&&Oi(this)};function Oi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Li(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qp(a){let h="";return Q(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function sc(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=qp(f),typeof a=="string"?f!=null&&Ci(f):ce(a,h,f))}function we(a){Ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(we,Ke);var OT=/^https?$/i,LT=["POST","PUT"];t=we.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():kp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Gp(this,O);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)f.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())f.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(LT,h,void 0)>=0)||y||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of f)this.g.setRequestHeader(O,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Gp(this,O)}};function Gp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Kp(a),ma(a)}function Kp(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,st(this,"complete"),st(this,"abort"),ma(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ma(this,!0)),we.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Qp(this):this.Xa())},t.Xa=function(){Qp(this)};function Qp(a){if(a.h&&typeof i<"u"){if(a.v&&zn(a)==4)setTimeout(a.Ca.bind(a),0);else if(st(a,"readystatechange"),zn(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=O===0){let z=String(a.D).match(jp)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),y=!OT.test(z?z.toLowerCase():"")}f=y}if(f)st(a,"complete"),st(a,"success");else{a.o=6;try{var N=zn(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Kp(a)}}finally{ma(a)}}}}function ma(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||st(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function zn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return zn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),fT(h)}};function Yp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function VT(a){const h={};a=(a.g&&zn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var f=vT(a[y]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[N]||[];h[N]=O,O.push(f)}X(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Jp(a){this.za=0,this.i=[],this.j=new Ai,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vi("baseRetryDelayMs",5e3,a),this.Za=Vi("retryDelaySeedMs",1e4,a),this.Ta=Vi("forwardChannelMaxRetries",2,a),this.va=Vi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Op(a&&a.concurrentRequestLimit),this.Ba=new DT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Jp.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){it(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=om(this,null,this.W),ya(this)};function ic(a){if(Xp(a),a.I==3){var h=a.V++,f=Gt(a.J);if(ce(f,"SID",a.M),ce(f,"RID",h),ce(f,"TYPE","terminate"),Mi(a,f),h=new jn(a,a.j,h),h.M=2,h.A=fa(Gt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=am(h.j,null),h.g.ea(h.A)),h.F=Date.now(),da(h)}im(a)}function ga(a){a.g&&(ac(a),a.g.cancel(),a.g=null)}function Xp(a){ga(a),a.v&&(o.clearTimeout(a.v),a.v=null),_a(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ya(a){if(!Lp(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),F||(j(),F=!0),E.add(h,a),a.D=0}}function MT(a,h){return Vp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Si(c(a.Ea,a,h),sm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new jn(this,this.j,a);let O=this.o;if(this.U&&(O?(O=me(O),Pr(O,this.U)):O=this.U),this.u!==null||this.R||(N.J=O,O=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=em(this,N,h),f=Gt(this.J),ce(f,"RID",a),ce(f,"CVER",22),this.G&&ce(f,"X-HTTP-Session-Id",this.G),Mi(this,f),O&&(this.R?h="headers="+Ci(qp(O))+"&"+h:this.u&&sc(f,this.u,O)),tc(this.h,N),this.Ra&&ce(f,"TYPE","init"),this.S?(ce(f,"$req",h),ce(f,"SID","null"),N.U=!0,Ju(N,f,null)):Ju(N,f,h),this.I=2}}else this.I==3&&(a?Zp(this,a):this.i.length==0||Lp(this.h)||Zp(this))};function Zp(a,h){var f;h?f=h.l:f=a.V++;const y=Gt(a.J);ce(y,"SID",a.M),ce(y,"RID",f),ce(y,"AID",a.K),Mi(a,y),a.u&&a.o&&sc(y,a.u,a.o),f=new jn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=em(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),tc(a.h,f),Ju(f,y,h)}function Mi(a,h){a.H&&Q(a.H,function(f,y){ce(h,y,f)}),a.l&&Q({},function(f,y){ce(h,y,f)})}function em(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let Z=-1;for(;;){const Ne=["count="+f];Z==-1?f>0?(Z=N[0].g,Ne.push("ofs="+Z)):Z=0:Ne.push("ofs="+Z);let le=!0;for(let be=0;be<f;be++){var O=N[be].g;const Kt=N[be].map;if(O-=Z,O<0)Z=Math.max(0,N[be].g-100),le=!1;else try{O="req"+O+"_"||"";try{var z=Kt instanceof Map?Kt:Object.entries(Kt);for(const[Mr,Bn]of z){let $n=Bn;l(Bn)&&($n=qu(Bn)),Ne.push(O+Mr+"="+encodeURIComponent($n))}}catch(Mr){throw Ne.push(O+"type="+encodeURIComponent("_badmap")),Mr}}catch{y&&y(Kt)}}if(le){z=Ne.join("&");break e}}z=void 0}return a=a.i.splice(0,f),h.G=a,z}function tm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),F||(j(),F=!0),E.add(h,a),a.A=0}}function oc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Si(c(a.Da,a),sm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,nm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Si(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),ga(this),nm(this))};function ac(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function nm(a){a.g=new jn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Gt(a.na);ce(h,"RID","rpc"),ce(h,"SID",a.M),ce(h,"AID",a.K),ce(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ce(h,"TO",a.ia),ce(h,"TYPE","xmlhttp"),Mi(a,h),a.u&&a.o&&sc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=fa(Gt(h)),f.u=null,f.R=!0,Pp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,ga(this),oc(this),it(19))};function _a(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function rm(a,h){var f=null;if(a.g==h){_a(a),ac(a),a.g=null;var y=2}else if(ec(a.h,h))f=h.G,Mp(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;y=ca(),st(y,new Ap(y,f)),ya(a)}else tm(a);else if(N=h.m,N==3||N==0&&h.X>0||!(y==1&&MT(a,h)||y==2&&oc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function sm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Vr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const N=!y;y=new Un(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ri(y,"https"),fa(y),N?PT(y.toString(),f):NT(y.toString(),f)}else it(2);a.I=0,a.l&&a.l.pa(h),im(a),Xp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function im(a){if(a.I=0,a.ja=[],a.l){const h=bp(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function om(a,h,f){var y=f instanceof Un?Gt(f):new Un(f);if(y.g!="")h&&(y.g=h+"."+y.g),xi(y,y.u);else{var N=o.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const O=new Un(null);y&&Ri(O,y),h&&(O.g=h),N&&xi(O,N),f&&(O.h=f),y=O}return f=a.G,h=a.wa,f&&h&&ce(y,f,h),ce(y,"VER",a.ka),Mi(a,y),y}function am(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new we(new rc({ab:f})):new we(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lm(){}t=lm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function va(){}va.prototype.g=function(a,h){return new yt(a,h)};function yt(a,h){Ke.call(this),this.g=new Jp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ys(this)}m(yt,Ke),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){ic(this.g)},yt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=qu(a),a=f);h.i.push(new TT(h.Ya++,a)),h.I==3&&ya(h)},yt.prototype.N=function(){this.g.l=null,delete this.j,ic(this.g),delete this.g,yt.Z.N.call(this)};function um(a){Gu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(um,Gu);function cm(){Ku.call(this),this.status=1}m(cm,Ku);function ys(a){this.g=a}m(ys,lm),ys.prototype.ra=function(){st(this.g,"a")},ys.prototype.qa=function(a){st(this.g,new um(a))},ys.prototype.pa=function(a){st(this.g,new cm)},ys.prototype.oa=function(){st(this.g,"b")},va.prototype.createWebChannel=va.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,PE=function(){return new va},xE=function(){return ca()},RE=Dr,rd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ha.NO_ERROR=0,ha.TIMEOUT=8,ha.HTTP_ERROR=6,al=ha,Cp.COMPLETE="complete",kE=Cp,wp.EventType=Ti,Ti.OPEN="a",Ti.CLOSE="b",Ti.ERROR="c",Ti.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,Xi=wp,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,CE=we}).apply(typeof Ua<"u"?Ua:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let mi="12.11.0";function Ox(t){mi=t}/**
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
 */const rs=new vf("@firebase/firestore");function Es(){return rs.logLevel}function $(t,...e){if(rs.logLevel<=te.DEBUG){const n=e.map(Df);rs.debug(`Firestore (${mi}): ${t}`,...n)}}function Nn(t,...e){if(rs.logLevel<=te.ERROR){const n=e.map(Df);rs.error(`Firestore (${mi}): ${t}`,...n)}}function ss(t,...e){if(rs.logLevel<=te.WARN){const n=e.map(Df);rs.warn(`Firestore (${mi}): ${t}`,...n)}}function Df(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,NE(t,r,n)}function NE(t,e,n){let r=`FIRESTORE (${mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Nn(r),new Error(r)}function oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||NE(e,s,r)}function J(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class DE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class Vx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mx{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new DE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class bx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class jx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new bx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ay{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ux{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,at(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ay(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ay(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Fx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Fx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function sd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Hc(s)===Hc(i)?ne(s,i):Hc(s)?1:-1}return ne(t.length,e.length)}const zx=55296,Bx=57343;function Hc(t){const e=t.charCodeAt(0);return e>=zx&&e<=Bx}function ni(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const ly="__name__";class Jt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Jt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ne(e.length,n.length)}static compareSegments(e,n){const r=Jt.isNumericId(e),s=Jt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Jt.extractNumericId(e).compare(Jt.extractNumericId(n)):sd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fr.fromString(e.substring(4,e.length-2))}}class de extends Jt{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new de(n)}static emptyPath(){return new de([])}}const $x=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Jt{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return $x.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ly}static keyField(){return new We([ly])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(de.fromString(e))}static fromName(e){return new q(de.fromString(e).popFirst(5))}static empty(){return new q(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new de(e.slice()))}}/**
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
 */function OE(t,e,n){if(!n)throw new H(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wx(t,e,n,r){if(e===!0&&r===!0)throw new H(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uy(t){if(!q.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cy(t){if(q.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function LE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Lf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function ri(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lf(t);throw new H(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Re(t,e){const n={typeString:t};return e&&(n.value=e),n}function sa(t,e){if(!LE(t))throw new H(b.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new H(b.INVALID_ARGUMENT,n);return!0}/**
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
 */const hy=-62135596800,dy=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*dy);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hy)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dy}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(sa(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Re("string",fe._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new fe(0,0))}static max(){return new Y(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uo=-1;function Hx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new Er(s,q.empty(),e)}function qx(t){return new Er(t.readTime,t.key,Uo)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(Y.min(),q.empty(),Uo)}static max(){return new Er(Y.max(),q.empty(),Uo)}}function Gx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const Kx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gi(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Kx)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(p=>{o[c]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Yx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ru{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ru.ce=-1;/**
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
 */const Vf=-1;function xu(t){return t==null}function ql(t){return t===0&&1/t==-1/0}function Jx(t){return typeof t=="number"&&Number.isInteger(t)&&!ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const VE="";function Xx(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=fy(e)),e=Zx(t.get(n),e);return fy(e)}function Zx(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case VE:n+="";break;default:n+=i}}return n}function fy(t){return t+VE+""}/**
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
 */function py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ME(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fa(this.root,e,this.comparator,!0)}}class Fa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $e(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new my(this.data.getIterator())}getIteratorFrom(e){return new my(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class my{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new Me(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class bE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bE("Invalid base64 string: "+i):i}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const e2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=e2.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */const jE="server_timestamp",UE="__type__",FE="__previous_value__",zE="__local_write_time__";function Mf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[UE])==null?void 0:r.stringValue)===jE}function Pu(t){const e=t.mapValue.fields[FE];return Mf(e)?Pu(e):e}function Fo(t){const e=wr(t.mapValue.fields[zE].timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class t2{constructor(e,n,r,s,i,o,l,u,c,p,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=p,this.apiKey=m}}const Gl="(default)";class zo{constructor(e,n){this.projectId=e,this.database=n||Gl}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database===Gl}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}function n2(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(t.options.projectId,e)}/**
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
 */const BE="__type__",r2="__max__",za={mapValue:{}},$E="__vector__",Kl="value";function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mf(t)?4:i2(t)?9007199254740991:s2(t)?10:11:K(28295,{value:t})}function un(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fo(t).isEqual(Fo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=wr(s.timestampValue),l=wr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Se(s.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Se(s.integerValue)===Se(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Se(s.doubleValue),l=Se(i.doubleValue);return o===l?ql(o)===ql(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ni(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(py(o)!==py(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!un(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Bo(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function si(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Se(i.integerValue||i.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return gy(t.timestampValue,e.timestampValue);case 4:return gy(Fo(t),Fo(e));case 5:return sd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Tr(i),u=Tr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=ne(l[c],u[c]);if(p!==0)return p}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ne(Se(i.latitude),Se(o.latitude));return l!==0?l:ne(Se(i.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,S,R,x;const l=i.fields||{},u=o.fields||{},c=(g=l[Kl])==null?void 0:g.arrayValue,p=(S=u[Kl])==null?void 0:S.arrayValue,m=ne(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((x=p==null?void 0:p.values)==null?void 0:x.length)||0);return m!==0?m:yy(c,p)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===za.mapValue&&o===za.mapValue)return 0;if(i===za.mapValue)return 1;if(o===za.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=sd(u[m],p[m]);if(g!==0)return g;const S=si(l[u[m]],c[p[m]]);if(S!==0)return S}return ne(u.length,p.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function gy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=wr(t),r=wr(e),s=ne(n.seconds,r.seconds);return s!==0?s:ne(n.nanos,r.nanos)}function yy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=si(n[s],r[s]);if(i)return i}return ne(n.length,r.length)}function ii(t){return id(t)}function id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=id(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${id(n.fields[o])}`;return s+"}"}(t.mapValue):K(61005,{value:t})}function ll(t){switch(Ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pu(t);return e?16+ll(e):16;case 5:return 2*t.stringValue.length;case 6:return Tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ll(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return cs(r.fields,(i,o)=>{s+=i.length+ll(o)}),s}(t.mapValue);default:throw K(13486,{value:t})}}function od(t){return!!t&&"integerValue"in t}function bf(t){return!!t&&"arrayValue"in t}function _y(t){return!!t&&"nullValue"in t}function vy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function s2(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[BE])==null?void 0:r.stringValue)===$E}function fo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fo(t.arrayValue.values[n]);return e}return{...t}}function i2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===r2}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fo(n)}setAll(e){let n=We.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=fo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ul(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(fo(this.value))}}function WE(t){const e=[];return cs(t.fields,(n,r)=>{const s=new We([n]);if(ul(r)){const i=WE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
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
 */class et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,Y.min(),Y.min(),Y.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,Y.min(),Y.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Y.min(),Y.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ql{constructor(e,n){this.position=e,this.inclusive=n}}function Ey(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=si(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yl{constructor(e,n="asc"){this.field=e,this.dir=n}}function o2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class HE{}class Oe extends HE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new l2(e,n,r):n==="array-contains"?new h2(e,r):n==="in"?new d2(e,r):n==="not-in"?new f2(e,r):n==="array-contains-any"?new p2(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new u2(e,r):new c2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(si(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends HE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new cn(e,n)}matches(e){return qE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qE(t){return t.op==="and"}function GE(t){return a2(t)&&qE(t)}function a2(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function ad(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+ii(t.value);if(GE(t))return t.filters.map(e=>ad(e)).join(",");{const e=t.filters.map(n=>ad(n)).join(",");return`${t.op}(${e})`}}function KE(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(t,e):t instanceof cn?function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&KE(o,s.filters[l]),!0):!1}(t,e):void K(19439)}function QE(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ii(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(QE).join(" ,")+"}"}(t):"Filter"}class l2 extends Oe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class u2 extends Oe{constructor(e,n){super(e,"in",n),this.keys=YE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class c2 extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=YE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function YE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class h2 extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bf(n)&&Bo(n.arrayValue,this.value)}}class d2 extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bo(this.value.arrayValue,n)}}class f2 extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bo(this.value.arrayValue,n)}}class p2 extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bo(this.value.arrayValue,r))}}/**
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
 */class m2{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Ty(t,e=null,n=[],r=[],s=null,i=null,o=null){return new m2(t,e,n,r,s,i,o)}function jf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ii(r)).join(",")),e.Te=n}return e.Te}function Uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!o2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!KE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wy(t.startAt,e.startAt)&&wy(t.endAt,e.endAt)}function ld(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Nu{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function g2(t,e,n,r,s,i,o,l){return new Nu(t,e,n,r,s,i,o,l)}function Ff(t){return new Nu(t)}function Iy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function y2(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function _2(t){return t.collectionGroup!==null}function po(t){const e=J(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Yl(i,r))}),n.has(We.keyField().canonicalString())||e.Ee.push(new Yl(We.keyField(),r))}return e.Ee}function sn(t){const e=J(t);return e.Ie||(e.Ie=v2(e,po(t))),e.Ie}function v2(t,e){if(t.limitType==="F")return Ty(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yl(s.field,i)});const n=t.endAt?new Ql(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ql(t.startAt.position,t.startAt.inclusive):null;return Ty(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ud(t,e,n){return new Nu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Du(t,e){return Uf(sn(t),sn(e))&&t.limitType===e.limitType}function JE(t){return`${jf(sn(t))}|lt:${t.limitType}`}function ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>QE(s)).join(", ")}]`),xu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ii(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ii(s)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of po(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Ey(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,po(r),s)||r.endAt&&!function(o,l,u){const c=Ey(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,po(r),s))}(t,e)}function E2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XE(t){return(e,n)=>{let r=!1;for(const s of po(t)){const i=w2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function w2(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?si(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ME(this.inner)}size(){return this.innerSize}}/**
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
 */const T2=new Ee(q.comparator);function Dn(){return T2}const ZE=new Ee(q.comparator);function Zi(...t){let e=ZE;for(const n of t)e=e.insert(n.key,n);return e}function ew(t){let e=ZE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return mo()}function tw(){return mo()}function mo(){return new hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const I2=new Ee(q.comparator),S2=new Me(q.comparator);function re(...t){let e=S2;for(const n of t)e=e.add(n);return e}const A2=new Me(ne);function C2(){return A2}/**
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
 */function zf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ql(e)?"-0":e}}function nw(t){return{integerValue:""+t}}function k2(t,e){return Jx(e)?nw(e):zf(t,e)}/**
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
 */class Lu{constructor(){this._=void 0}}function R2(t,e,n){return t instanceof $o?function(s,i){const o={fields:{[UE]:{stringValue:jE},[zE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mf(i)&&(i=Pu(i)),i&&(o.fields[FE]=i),{mapValue:o}}(n,e):t instanceof Wo?sw(t,e):t instanceof Ho?iw(t,e):function(s,i){const o=rw(s,i),l=Sy(o)+Sy(s.Ae);return od(o)&&od(s.Ae)?nw(l):zf(s.serializer,l)}(t,e)}function x2(t,e,n){return t instanceof Wo?sw(t,e):t instanceof Ho?iw(t,e):n}function rw(t,e){return t instanceof Jl?function(r){return od(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class $o extends Lu{}class Wo extends Lu{constructor(e){super(),this.elements=e}}function sw(t,e){const n=ow(e);for(const r of t.elements)n.some(s=>un(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ho extends Lu{constructor(e){super(),this.elements=e}}function iw(t,e){let n=ow(e);for(const r of t.elements)n=n.filter(s=>!un(s,r));return{arrayValue:{values:n}}}class Jl extends Lu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Sy(t){return Se(t.integerValue||t.doubleValue)}function ow(t){return bf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class P2{constructor(e,n){this.field=e,this.transform=n}}function N2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Wo&&s instanceof Wo||r instanceof Ho&&s instanceof Ho?ni(r.elements,s.elements,un):r instanceof Jl&&s instanceof Jl?un(r.Ae,s.Ae):r instanceof $o&&s instanceof $o}(t.transform,e.transform)}class D2{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vu{}function aw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uw(t.key,on.none()):new ia(t.key,t.data,on.none());{const n=t.data,r=kt.empty();let s=new Me(We.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ds(t.key,r,new Ft(s.toArray()),on.none())}}function O2(t,e,n){t instanceof ia?function(s,i,o){const l=s.value.clone(),u=Cy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ds?function(s,i,o){if(!cl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Cy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(lw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function go(t,e,n,r){return t instanceof ia?function(i,o,l,u){if(!cl(i.precondition,o))return l;const c=i.value.clone(),p=ky(i.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ds?function(i,o,l,u){if(!cl(i.precondition,o))return l;const c=ky(i.fieldTransforms,u,o),p=o.data;return p.setAll(lw(i)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return cl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function L2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=rw(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function Ay(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ni(r,s,(i,o)=>N2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ia extends Vu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ds extends Vu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cy(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,x2(o,l,n[s]))}return r}function ky(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,R2(i,o,e))}return r}class uw extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class V2 extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class M2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&O2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=aw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ni(this.mutations,e.mutations,(n,r)=>Ay(n,r))&&ni(this.baseMutations,e.baseMutations,(n,r)=>Ay(n,r))}}class Bf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return I2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bf(e,n,r,s)}}/**
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
 */class b2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class j2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,se;function U2(t){switch(t){case b.OK:return K(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function cw(t){if(t===void 0)return Nn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ce.OK:return b.OK;case Ce.CANCELLED:return b.CANCELLED;case Ce.UNKNOWN:return b.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return b.INTERNAL;case Ce.UNAVAILABLE:return b.UNAVAILABLE;case Ce.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ce.NOT_FOUND:return b.NOT_FOUND;case Ce.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ce.ABORTED:return b.ABORTED;case Ce.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ce.DATA_LOSS:return b.DATA_LOSS;default:return K(39323,{code:t})}}(se=Ce||(Ce={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function F2(){return new TextEncoder}/**
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
 */const z2=new fr([4294967295,4294967295],0);function Ry(t){const e=F2().encode(t),n=new AE;return n.update(e),new Uint8Array(n.digest())}function xy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new fr([n,r],0),new fr([s,i],0)]}class $f{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(r<0)throw new eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=fr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(fr.fromNumber(r)));return s.compare(z2)===1&&(s=new fr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ry(e),[r,s]=xy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new $f(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ry(e),[r,s]=xy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mu(Y.min(),s,new Ee(ne),Dn(),re())}}class oa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oa(r,n,re(),re(),re())}}/**
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
 */class hl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class hw{constructor(e,n){this.targetId=e,this.Ce=n}}class dw{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Py{constructor(){this.ve=0,this.Fe=Ny(),this.Me=Ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}}),new oa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Ny()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class B2{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dn(),this.Je=Ba(),this.He=Ba(),this.Ze=new Ee(ne)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(ld(i))if(r===0){const o=new q(i.path);this.et(n,o,et.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Tr(r).toUint8Array()}catch(u){if(u instanceof bE)return ss("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new $f(o,s,i)}catch(u){return ss(u instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&ld(l.target)){const u=new q(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,et.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=re();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Mu(e,n,this.Ze,this.je,r);return this.je=Dn(),this.Je=Ba(),this.He=Ba(),this.Ze=new Ee(ne),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Py,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Me(ne),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Me(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Py),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ba(){return new Ee(q.comparator)}function Ny(){return new Ee(q.comparator)}const $2={asc:"ASCENDING",desc:"DESCENDING"},W2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},H2={and:"AND",or:"OR"};class q2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cd(t,e){return t.useProto3Json||xu(e)?e:{value:e}}function Xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function G2(t,e){return Xl(t,e.toTimestamp())}function an(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=wr(n);return new fe(r.seconds,r.nanos)}(t))}function Wf(t,e){return hd(t,e).canonicalString()}function hd(t,e){const n=function(s){return new de(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function pw(t){const e=de.fromString(t);return oe(vw(e),10190,{key:e.toString()}),e}function dd(t,e){return Wf(t.databaseId,e.path)}function qc(t,e){const n=pw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(gw(n))}function mw(t,e){return Wf(t.databaseId,e)}function K2(t){const e=pw(t);return e.length===4?de.emptyPath():gw(e)}function fd(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gw(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Dy(t,e,n){return{name:dd(t,e),fields:n.value.mapValue.fields}}function Q2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,p){return c.useProto3Json?(oe(p===void 0||typeof p=="string",58123),Ge.fromBase64String(p||"")):(oe(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ge.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const p=c.code===void 0?b.UNKNOWN:cw(c.code);return new H(p,c.message||"")}(o);n=new dw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qc(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):Y.min(),l=new kt({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(s,i,o,l),c=r.targetIds||[],p=r.removedTargetIds||[];n=new hl(c,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qc(t,r.document),i=r.readTime?an(r.readTime):Y.min(),o=et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new hl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qc(t,r.document),i=r.removedTargetIds||[];n=new hl([],i,s,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new j2(s,i),l=r.targetId;n=new hw(l,o)}}return n}function Y2(t,e){let n;if(e instanceof ia)n={update:Dy(t,e.key,e.value)};else if(e instanceof uw)n={delete:dd(t,e.key)};else if(e instanceof ds)n={update:Dy(t,e.key,e.data),updateMask:iP(e.fieldMask)};else{if(!(e instanceof V2))return K(16599,{dt:e.type});n={verify:dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof $o)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Jl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:G2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)}(t,e.precondition)),n}function J2(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(Y.min())&&(o=an(i)),new D2(o,s.transformResults||[])}(n,e))):[]}function X2(t,e){return{documents:[mw(t,e.path)]}}function Z2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=mw(t,s);const i=function(c){if(c.length!==0)return _w(cn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(p=>function(g){return{field:Ts(g.field),direction:nP(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=cd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function eP(t){let e=K2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){oe(r===1,65062);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=yw(m);return g instanceof cn&&GE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new Yl(Is(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,xu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,S=m.values||[];return new Ql(S,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,S=m.values||[];return new Ql(S,g)}(n.endAt)),g2(e,s,o,i,l,"F",u,c)}function tP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Is(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Is(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Is(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Is(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Is(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>yw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function nP(t){return $2[t]}function rP(t){return W2[t]}function sP(t){return H2[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function Is(t){return We.fromServerFormat(t.fieldPath)}function _w(t){return t instanceof Oe?function(n){if(n.op==="=="){if(vy(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NAN"}};if(_y(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vy(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NAN"}};if(_y(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(n.field),op:rP(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(s=>_w(s));return r.length===1?r[0]:{compositeFilter:{op:sP(n.op),filters:r}}}(t):K(54877,{filter:t})}function iP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Ew(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class tr{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oP{constructor(e){this.yt=e}}function aP(t){const e=eP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ud(e,e.limit,"L"):e}/**
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
 */class lP{constructor(){this.bn=new uP}addToCollectionParentIndex(e,n){return this.bn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Er.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class uP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Me(de.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Me(de.comparator)).toArray()}}/**
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
 */const Oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ww=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(ww,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
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
 */class oi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new oi(0)}static ar(){return new oi(-1)}}/**
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
 */const Ly="LruGarbageCollector",cP=1048576;function Vy([t,e],[n,r]){const s=ne(t,n);return s===0?ne(e,r):s}class hP{constructor(e){this.Pr=e,this.buffer=new Me(Vy),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class dP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(Ly,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){yi(n)?$(Ly,"Ignoring IndexedDB error during garbage collection: ",n):await gi(n)}await this.Ar(3e5)})}}class fP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Ru.ce);const r=new hP(n);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Oy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Es()<=te.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function pP(t,e){return new fP(t,e)}/**
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
 */class mP{constructor(){this.changes=new hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class yP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&go(r.mutation,s,Ft.empty(),fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=Wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Zi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Dn();const o=mo(),l=function(){return mo()}();return n.forEach((u,c)=>{const p=r.get(c.key);s.has(c.key)&&(p===void 0||p.mutation instanceof ds)?i=i.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),go(p.mutation,c,p.mutation.getFieldMask(),fe.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>l.set(c,new gP(p,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=mo();let s=new Ee((o,l)=>o-l),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||Ft.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(s.get(l.batchId)||re()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=tw();p.forEach(g=>{if(!i.has(g)){const S=aw(n.get(g),r.get(g));S!==null&&m.set(g,S),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return y2(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(Wr());let l=Uo,u=i;return o.next(c=>V.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,re())).next(p=>({batchId:l,changes:ew(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=Zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Zi();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const c=function(m,g){return new Nu(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,et.newInvalidDocument(p)))});let l=Zi();return o.forEach((u,c)=>{const p=i.get(u);p!==void 0&&go(p.mutation,c,Ft.empty(),fe.now()),Ou(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class _P{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return V.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:aP(s.bundledQuery),readTime:an(s.readTime)}}(n)),V.resolve()}}/**
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
 */class vP{constructor(){this.overlays=new Ee(q.comparator),this.Lr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=Wr(),i=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ee((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=i.get(c.largestBatchId);p===null&&(p=Wr(),i=i.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=Wr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=s)););return V.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new b2(n,r));let i=this.Lr.get(n);i===void 0&&(i=re(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class EP{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Hf{constructor(){this.kr=new Me(je.qr),this.Kr=new Me(je.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new je(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new je(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new q(new de([])),r=new je(n,e),s=new je(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new q(new de([])),r=new je(n,e),s=new je(n,e+1);let i=re();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return q.comparator(e.key,n.key)||ne(e.Jr,n.Jr)}static Ur(e,n){return ne(e.Jr,n.Jr)||q.comparator(e.key,n.key)}}/**
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
 */class wP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Me(je.qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new M2(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Vf:this.Yn-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),s=new je(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(ne);return n.forEach(s=>{const i=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),V.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new je(new q(i),0);let l=new Me(ne);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Jr)),!0)},o),V.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return V.forEach(n.mutations,s=>{const i=new je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new je(n,0),s=this.Hr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class TP{constructor(e){this.ti=e,this.docs=function(){return new Ee(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Gx(qx(p),r)<=0||(s.has(p.key)||Ou(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K(9500)}ni(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new IP(this)}getSize(e){return V.resolve(this.size)}}class IP extends mP{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class SP{constructor(e){this.persistence=e,this.ri=new hs(n=>jf(n),Uf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new Hf,this.targetCount=0,this.oi=oi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),V.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new oi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.lr(n),V.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.si.containsKey(n))}}/**
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
 */class Tw{constructor(e,n){this._i={},this.overlays={},this.ai=new Ru(0),this.ui=!1,this.ui=!0,this.ci=new EP,this.referenceDelegate=e(this),this.li=new SP(this),this.indexManager=new lP,this.remoteDocumentCache=function(s){return new TP(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new oP(n),this.Pi=new _P(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new wP(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new AP(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return V.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class AP extends Qx{constructor(e){super(),this.currentSequenceNumber=e}}class qf{constructor(e){this.persistence=e,this.Ri=new Hf,this.Ai=null}static Vi(e){return new qf(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,r=>{const s=q.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Zl{constructor(e,n){this.persistence=e,this.fi=new hs(r=>Xx(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=pP(this,n)}static Vi(e,n){return new Zl(e,n)}Ti(){}Ei(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return V.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ll(e.data.value)),n}wr(e,n,r){return V.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Gf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gf(e,n.fromCache,r,s)}}/**
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
 */class CP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return KA()?8:Yx(nt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new CP;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Es()<=te.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Es()<=te.DEBUG&&$("QueryEngine","Query:",ws(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Es()<=te.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):V.resolve())}gs(e,n){if(Iy(n))return V.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ud(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,ud(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return Iy(n)||s.isEqual(Y.min())?V.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?V.resolve(null):(Es()<=te.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ws(n)),this.Ds(e,o,n,Hx(s,Uo)).next(l=>l))})}Ss(e,n){let r=new Me(XE(e));return n.forEach((s,i)=>{Ou(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Es()<=te.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ws(n)),this.fs.getDocumentsMatchingQuery(e,n,Er.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Kf="LocalStore",RP=3e8;class xP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ee(ne),this.Fs=new hs(i=>jf(i),Uf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function PP(t,e,n,r){return new xP(t,e,n,r)}async function Iw(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=re();for(const c of s){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of i){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function NP(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,g=m.keys();let S=V.resolve();return g.forEach(R=>{S=S.next(()=>p.getEntry(u,R)).next(x=>{const D=c.docVersions.get(R);oe(D!==null,48541),x.version.compareTo(D)<0&&(m.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),p.addEntry(x)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Sw(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function DP(t,e){const n=J(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,p.addedDocuments,m)));let S=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Ge.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(m,S),function(x,D,w){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=RP?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,S,p)&&l.push(n.li.updateTargetData(i,S))});let u=Dn(),c=re();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(OP(i,o,e.documentUpdates).next(p=>{u=p.Bs,c=p.Ls})),!r.isEqual(Y.min())){const p=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function OP(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Kf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function LP(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Vf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VP(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function pd(t,e,n){const r=J(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!yi(o))throw o;$(Kf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function My(t,e,n){const r=J(t);let s=Y.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,p){const m=J(u),g=m.Fs.get(p);return g!==void 0?V.resolve(m.vs.get(g)):m.li.getTargetData(c,p)}(r,o,sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:re())).next(l=>(MP(r,E2(e),l),{documents:l,ks:i})))}function MP(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class by{constructor(){this.activeTargetIds=C2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bP{constructor(){this.vo=new by,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new by,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jP{Mo(e){}shutdown(){}}/**
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
 */const jy="ConnectivityMonitor";class Uy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(jy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(jy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $a=null;function md(){return $a===null?$a=function(){return 268435456+Math.round(2147483648*Math.random())}():$a++,"0x"+$a.toString(16)}/**
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
 */const Gc="RestConnection",UP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class FP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Gl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=md(),l=this.Qo(e,n.toUriEncodedString());$(Gc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),p=di(c);return this.zo(e,l,u,r,p).then(m=>($(Gc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ss(Gc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=UP[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class zP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Je="WebChannelConnection",Hi=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class qs extends FP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qs.c_){const e=xE();Hi(e,RE.STAT_EVENT,n=>{n.stat===rd.PROXY?$(Je,"STAT_EVENT: detected buffering proxy"):n.stat===rd.NOPROXY&&$(Je,"STAT_EVENT: detected no buffering proxy")}),qs.c_=!0}}zo(e,n,r,s,i){const o=md();return new Promise((l,u)=>{const c=new CE;c.setWithCredentials(!0),c.listenOnce(kE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case al.NO_ERROR:const m=c.getResponseJson();$(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case al.TIMEOUT:$(Je,`RPC '${e}' ${o} timed out`),u(new H(b.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const g=c.getStatus();if($(Je,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S==null?void 0:S.error;if(R&&R.status&&R.message){const x=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(v)>=0?v:b.UNKNOWN}(R.status);u(new H(x,R.message))}else u(new H(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(b.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(Je,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);$(Je,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",p,r,15)})}T_(e,n,r){const s=md(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");$(Je,`Creating RPC '${e}' stream ${s}: ${c}`,l);const p=o.createWebChannel(c,l);this.E_(p);let m=!1,g=!1;const S=new zP({Jo:R=>{g?$(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(m||($(Je,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),$(Je,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Ho:()=>p.close()});return Hi(p,Xi.EventType.OPEN,()=>{g||($(Je,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),Hi(p,Xi.EventType.CLOSE,()=>{g||(g=!0,$(Je,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.I_(p))}),Hi(p,Xi.EventType.ERROR,R=>{g||(g=!0,ss(Je,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),S.o_(new H(b.UNAVAILABLE,"The operation could not be completed")))}),Hi(p,Xi.EventType.MESSAGE,R=>{var x;if(!g){const D=R.data[0];oe(!!D,16349);const w=D,v=(w==null?void 0:w.error)||((x=w[0])==null?void 0:x.error);if(v){$(Je,`RPC '${e}' stream ${s} received error:`,v);const A=v.status;let L=function(E){const _=Ce[E];if(_!==void 0)return cw(_)}(A),j=v.message;A==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&ss(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=b.INTERNAL,j="Unknown error status: "+A+" with message "+v.message),g=!0,S.o_(new H(L,j)),p.close()}else $(Je,`RPC '${e}' stream ${s} received:`,D),S.__(D)}}),qs.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return PE()}}/**
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
 */function BP(t){return new qs(t)}function Kc(){return typeof document<"u"?document:null}/**
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
 */function bu(t){return new q2(t,!0)}/**
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
 */qs.c_=!1;class Aw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Fy="PersistentStream";class Cw{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Aw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new H(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(Fy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():($(Fy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $P extends Cw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Q2(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?an(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=fd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=ld(u)?{documents:X2(i,u)}:{query:Z2(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=fw(i,o.resumeToken);const c=cd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Xl(i,o.snapshotVersion.toTimestamp());const c=cd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=tP(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=fd(this.serializer),n.removeTarget=e,this.q_(n)}}class WP extends Cw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=J2(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=fd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Y2(this.serializer,r))};this.q_(n)}}/**
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
 */class HP{}class qP extends HP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,hd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(b.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,hd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(b.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function GP(t,e,n,r){return new qP(t,e,n,r)}class KP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nn(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const is="RemoteStore";class QP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{fs(this)&&($(is,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ia.add(4),await aa(c),c.Va.set("Unknown"),c.Ia.delete(4),await ju(c)}(this))})}),this.Va=new KP(r,s)}}async function ju(t){if(fs(t))for(const e of t.Ra)await e(!0)}async function aa(t){for(const e of t.Ra)await e(!1)}function kw(t,e){const n=J(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Xf(n)?Jf(n):_i(n).O_()&&Yf(n,e))}function Qf(t,e){const n=J(t),r=_i(n);n.Ea.delete(e),r.O_()&&Rw(n,e),n.Ea.size===0&&(r.O_()?r.L_():fs(n)&&n.Va.set("Unknown"))}function Yf(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_i(t).Z_(e)}function Rw(t,e){t.da.$e(e),_i(t).X_(e)}function Jf(t){t.da=new B2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),_i(t).start(),t.Va.ua()}function Xf(t){return fs(t)&&!_i(t).x_()&&t.Ea.size>0}function fs(t){return J(t).Ia.size===0}function xw(t){t.da=void 0}async function YP(t){t.Va.set("Online")}async function JP(t){t.Ea.forEach((e,n)=>{Yf(t,e)})}async function XP(t,e){xw(t),Xf(t)?(t.Va.ha(e),Jf(t)):t.Va.set("Unknown")}async function ZP(t,e,n){if(t.Va.set("Online"),e instanceof dw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){$(is,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eu(t,r)}else if(e instanceof hl?t.da.Xe(e):e instanceof hw?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await Sw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ea.get(c);p&&i.Ea.set(c,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const p=i.Ea.get(u);if(!p)return;i.Ea.set(u,p.withResumeToken(Ge.EMPTY_BYTE_STRING,p.snapshotVersion)),Rw(i,u);const m=new tr(p.target,u,c,p.sequenceNumber);Yf(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(is,"Failed to raise snapshot:",r),await eu(t,r)}}async function eu(t,e,n){if(!yi(e))throw e;t.Ia.add(1),await aa(t),t.Va.set("Offline"),n||(n=()=>Sw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(is,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await ju(t)})}function Pw(t,e){return e().catch(n=>eu(t,n,e))}async function Uu(t){const e=J(t),n=Sr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vf;for(;eN(e);)try{const s=await LP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,tN(e,s)}catch(s){await eu(e,s)}Nw(e)&&Dw(e)}function eN(t){return fs(t)&&t.Ta.length<10}function tN(t,e){t.Ta.push(e);const n=Sr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Nw(t){return fs(t)&&!Sr(t).x_()&&t.Ta.length>0}function Dw(t){Sr(t).start()}async function nN(t){Sr(t).ra()}async function rN(t){const e=Sr(t);for(const n of t.Ta)e.ea(n.mutations)}async function sN(t,e,n){const r=t.Ta.shift(),s=Bf.from(r,e,n);await Pw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Uu(t)}async function iN(t,e){e&&Sr(t).Y_&&await async function(r,s){if(function(o){return U2(o)&&o!==b.ABORTED}(s.code)){const i=r.Ta.shift();Sr(r).B_(),await Pw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Uu(r)}}(t,e),Nw(t)&&Dw(t)}async function zy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$(is,"RemoteStore received new credentials");const r=fs(n);n.Ia.add(3),await aa(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await ju(n)}async function oN(t,e){const n=J(t);e?(n.Ia.delete(2),await ju(n)):e||(n.Ia.add(2),await aa(n),n.Va.set("Unknown"))}function _i(t){return t.ma||(t.ma=function(n,r,s){const i=J(n);return i.sa(),new $P(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:YP.bind(null,t),Yo:JP.bind(null,t),t_:XP.bind(null,t),H_:ZP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Xf(t)?Jf(t):t.Va.set("Unknown")):(await t.ma.stop(),xw(t))})),t.ma}function Sr(t){return t.fa||(t.fa=function(n,r,s){const i=J(n);return i.sa(),new WP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:nN.bind(null,t),t_:iN.bind(null,t),ta:rN.bind(null,t),na:sN.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Uu(t)):(await t.fa.stop(),t.Ta.length>0&&($(is,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Zf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Zf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ep(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),yi(t))return new H(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gs{static emptySet(e){return new Gs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Zi(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class By{constructor(){this.ga=new Ee(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ai{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ai(e,n,Gs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class aN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class lN{constructor(){this.queries=$y(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=$y(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new H(b.ABORTED,"Firestore shutting down"))}}function $y(){return new hs(t=>JE(t),Du)}async function uN(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new aN,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=ep(o,`Initialization of query '${ws(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&tp(n)}async function cN(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hN(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&tp(n)}function dN(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function tp(t){t.Ca.forEach(e=>{e.next()})}var gd,Wy;(Wy=gd||(gd={})).Ma="default",Wy.Cache="cache";class fN{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==gd.Cache}}/**
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
 */class Ow{constructor(e){this.key=e}}class Lw{constructor(e){this.key=e}}class pN{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=XE(e),this.tu=new Gs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new By,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),S=Ou(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;g&&S?g.data.isEqual(S.data)?R!==x&&(r.track({type:3,doc:S}),D=!0):this.su(g,S)||(r.track({type:2,doc:S}),D=!0,(u&&this.eu(S,u)>0||c&&this.eu(S,c)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),D=!0):g&&!S&&(r.track({type:1,doc:g}),D=!0,(u||c)&&(l=!0)),D&&(S?(o=o.add(S),i=x?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,bs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(S,R){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:D})}};return x(S)-x(R)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new ai(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new By,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Lw(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Ow(r))}),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ai.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const np="SyncEngine";class mN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gN{constructor(e){this.key=e,this.hu=!1}}class yN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new hs(l=>JE(l),Du),this.Eu=new Map,this.Iu=new Set,this.Ru=new Ee(q.comparator),this.Au=new Map,this.Vu=new Hf,this.du={},this.mu=new Map,this.fu=oi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function _N(t,e,n=!0){const r=Fw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Vw(r,e,n,!0),s}async function vN(t,e){const n=Fw(t);await Vw(n,e,!0,!1)}async function Vw(t,e,n,r){const s=await VP(t.localStore,sn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await EN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&kw(t.remoteStore,s),l}async function EN(t,e,n,r,s){t.pu=(m,g,S)=>async function(x,D,w,v){let A=D.view.ru(w);A.bs&&(A=await My(x.localStore,D.query,!1).then(({documents:E})=>D.view.ru(E,A)));const L=v&&v.targetChanges.get(D.targetId),j=v&&v.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(A,x.isPrimaryClient,L,j);return qy(x,D.targetId,F.au),F.snapshot}(t,m,g,S);const i=await My(t.localStore,e,!0),o=new pN(e,i.ks),l=o.ru(i.documents),u=oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);qy(t,n,c.au);const p=new mN(e,n,o);return t.Tu.set(e,p),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function wN(t,e,n){const r=J(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!Du(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Qf(r.remoteStore,s.targetId),yd(r,s.targetId)}).catch(gi)):(yd(r,s.targetId),await pd(r.localStore,s.targetId,!0))}async function TN(t,e){const n=J(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qf(n.remoteStore,r.targetId))}async function IN(t,e,n){const r=PN(t);try{const s=await function(o,l){const u=J(o),c=fe.now(),p=l.reduce((S,R)=>S.add(R.key),re());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=Dn(),x=re();return u.xs.getEntries(S,p).next(D=>{R=D,R.forEach((w,v)=>{v.isValidDocument()||(x=x.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(D=>{m=D;const w=[];for(const v of l){const A=L2(v,m.get(v.key).overlayedDocument);A!=null&&w.push(new ds(v.key,A,WE(A.value.mapValue),on.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,w,l)}).next(D=>{g=D;const w=D.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(S,D.batchId,w)})}).then(()=>({batchId:g.batchId,changes:ew(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Ee(ne)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await la(r,s.changes),await Uu(r.remoteStore)}catch(s){const i=ep(s,"Failed to persist write");n.reject(i)}}async function Mw(t,e){const n=J(t);try{const r=await DP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?oe(o.hu,14607):s.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await la(n,r,e)}catch(r){await gi(r)}}function Hy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&tp(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SN(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ee(q.comparator);o=o.insert(i,et.newNoDocument(i,Y.min()));const l=re().add(i),u=new Mu(Y.min(),new Map,new Ee(ne),o,l);await Mw(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),rp(r)}else await pd(r.localStore,e,!1).then(()=>yd(r,e,n)).catch(gi)}async function AN(t,e){const n=J(t),r=e.batch.batchId;try{const s=await NP(n.localStore,e);jw(n,r,null),bw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await la(n,s)}catch(s){await gi(s)}}async function CN(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(oe(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,e);jw(r,e,n),bw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await la(r,s)}catch(s){await gi(s)}}function bw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function jw(t,e,n){const r=J(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function yd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Uw(t,r)})}function Uw(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Qf(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),rp(t))}function qy(t,e,n){for(const r of n)r instanceof Ow?(t.Vu.addReference(r.key,e),kN(t,r)):r instanceof Lw?($(np,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Uw(t,r.key)):K(19791,{wu:r})}function kN(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||($(np,"New document in limbo: "+n),t.Iu.add(r),rp(t))}function rp(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new q(de.fromString(e)),r=t.fu.next();t.Au.set(r,new gN(n)),t.Ru=t.Ru.insert(n,r),kw(t.remoteStore,new tr(sn(Ff(n.path)),r,"TargetPurposeLimboResolution",Ru.ce))}}async function la(t,e,n){const r=J(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Gf.Is(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const p=J(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(c,g=>V.forEach(g.Ts,S=>p.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>V.forEach(g.Es,S=>p.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!yi(m))throw m;$(Kf,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const S=p.vs.get(g),R=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(R);p.vs=p.vs.insert(g,x)}}}(r.localStore,i))}async function RN(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$(np,"User change. New user:",e.toKey());const r=await Iw(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(b.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await la(n,r.Ns)}}function xN(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let s=re();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Fw(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SN.bind(null,e),e.Pu.H_=hN.bind(null,e.eventManager),e.Pu.yu=dN.bind(null,e.eventManager),e}function PN(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CN.bind(null,e),e}class tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return PP(this.persistence,new kP,e.initialUser,this.serializer)}Cu(e){return new Tw(qf.Vi,this.serializer)}Du(e){return new bP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tu.provider={build:()=>new tu};class NN extends tu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof Zl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Tw(r=>Zl.Vi(r,n),this.serializer)}}class _d{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RN.bind(null,this.syncEngine),await oN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lN}()}createDatastore(e){const n=bu(e.databaseInfo.databaseId),r=BP(e.databaseInfo);return GP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new QP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Hy(this.syncEngine,n,0),function(){return Uy.v()?new Uy:new jP}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,p){const m=new yN(s,i,o,l,u,c);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);$(is,"RemoteStore shutting down."),i.Ia.add(5),await aa(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}_d.provider={build:()=>new _d};/**
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
 */class DN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ar="FirestoreClient";class ON{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=Of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{$(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ep(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qc(t,e){t.asyncQueue.verifyOperationInProgress(),$(Ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Iw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LN(t);$(Ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>zy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>zy(e.remoteStore,s)),t._onlineComponents=e}async function LN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Ar,"Using user provided OfflineComponentProvider");try{await Qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ss("Error using user provided cache. Falling back to memory cache: "+n),await Qc(t,new tu)}}else $(Ar,"Using default OfflineComponentProvider"),await Qc(t,new NN(void 0));return t._offlineComponents}async function zw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Ar,"Using user provided OnlineComponentProvider"),await Gy(t,t._uninitializedComponentsProvider._online)):($(Ar,"Using default OnlineComponentProvider"),await Gy(t,new _d))),t._onlineComponents}function VN(t){return zw(t).then(e=>e.syncEngine)}async function MN(t){const e=await zw(t),n=e.eventManager;return n.onListen=_N.bind(null,e.syncEngine),n.onUnlisten=wN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TN.bind(null,e.syncEngine),n}function bN(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const p=new DN({next:g=>{p.Nu(),o.enqueueAndForget(()=>cN(i,m));const S=g.docs.has(l);!S&&g.fromCache?c.reject(new H(b.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&u&&u.source==="server"?c.reject(new H(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new fN(Ff(l.path),p,{includeMetadataChanges:!0,qa:!0});return uN(i,m)}(await MN(t),t.asyncQueue,e,n,r)),r.promise}function jN(t,e){const n=new pr;return t.asyncQueue.enqueueAndForget(async()=>IN(await VN(t),e,n)),n.promise}/**
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
 */function Bw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const UN="ComponentProvider",Ky=new Map;function FN(t,e,n,r,s){return new t2(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Bw(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const $w="firestore.googleapis.com",Qy=!0;class Yy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$w,this.ssl=Qy}else this.host=e.host,this.ssl=e.ssl??Qy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ww;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cP)throw new H(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lx;switch(r.type){case"firstParty":return new jx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ky.get(n);r&&($(UN,"Removing Datastore"),Ky.delete(n),r.terminate())}(this),Promise.resolve()}}function zN(t,e,n,r={}){var c;t=ri(t,Fu);const s=di(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&_f(`https://${l}`),i.host!==$w&&i.host!==l&&ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!es(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=Xe.MOCK_USER;else{p=F0(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Xe(g)}t._authCredentials=new Vx(new DE(p,m))}}/**
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
 */class sp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sp(this.firestore,e,this._query)}}class Ve{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(sa(n,Ve._jsonSchema))return new Ve(e,r||null,new q(de.fromString(n.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:Re("string",Ve._jsonSchemaVersion),referencePath:Re("string")};class mr extends sp{constructor(e,n,r){super(e,n,Ff(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new q(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function Ww(t,e,...n){if(t=rt(t),OE("collection","path",e),t instanceof Fu){const r=de.fromString(e,...n);return cy(r),new mr(t,null,r)}{if(!(t instanceof Ve||t instanceof mr))throw new H(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return cy(r),new mr(t.firestore,null,r)}}function ip(t,e,...n){if(t=rt(t),arguments.length===1&&(e=Of.newId()),OE("doc","path",e),t instanceof Fu){const r=de.fromString(e,...n);return uy(r),new Ve(t,null,new q(r))}{if(!(t instanceof Ve||t instanceof mr))throw new H(b.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return uy(r),new Ve(t.firestore,t instanceof mr?t.converter:null,new q(r))}}/**
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
 */const Jy="AsyncQueue";class Xy{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Aw(this,"async_queue_retry"),this._c=()=>{const r=Kc();r&&$(Jy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Kc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new pr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!yi(e))throw e;$(Jy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Nn("INTERNAL UNHANDLED ERROR: ",Zy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Zf.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&K(47125,{Pc:Zy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Zy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class zu extends Fu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xy(e),this._firestoreClient=void 0,await e}}}function BN(t,e){const n=typeof t=="object"?t:wf(),r=typeof t=="string"?t:Gl,s=Su(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=b0("firestore");i&&zN(s,...i)}return s}function Hw(t){if(t._terminated)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$N(t),t._firestoreClient}function $N(t){var r,s,i,o;const e=t._freezeSettings(),n=FN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ON(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Ge.fromBase64String(e))}catch(n){throw new H(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(sa(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Re("string",Rt._jsonSchemaVersion),bytes:Re("string")};/**
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
 */class qw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class op{constructor(e){this._methodName=e}}/**
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
 */class ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(sa(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:Re("string",ln._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};/**
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
 */class Ht{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(sa(e,Ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ht(e.vectorValues);throw new H(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:Re("string",Ht._jsonSchemaVersion),vectorValues:Re("object")};/**
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
 */const WN=/^__.*__$/;class HN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new ia(e,this.data,n,this.fieldTransforms)}}function Gw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class ap{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return nu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Gw(this.dataSource)&&WN.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class qN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bu(e)}A(e,n,r,s=!1){return new ap({dataSource:e,methodName:n,targetDoc:r,path:We.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kw(t){const e=t._freezeSettings(),n=bu(t._databaseId);return new qN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qw(t,e,n,r,s,i={}){const o=t.A(i.merge||i.mergeFields?2:0,e,n,s);Zw("Data must be an object, but it was:",o,r);const l=Jw(r,o);let u,c;if(i.merge)u=new Ft(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=up(e,m,n);if(!o.contains(g))throw new H(b.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);QN(p,g)||p.push(g)}u=new Ft(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new HN(new kt(l),u,c)}class lp extends op{_toFieldTransform(e){return new P2(e.path,new $o)}isEqual(e){return e instanceof lp}}function Yw(t,e){if(Xw(t=rt(t)))return Zw("Unsupported field value:",e,t),Jw(t,e);if(t instanceof op)return function(r,s){if(!Gw(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Yw(l,s.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return k2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:Xl(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xl(s.serializer,i)}}if(r instanceof ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:fw(s.serializer,r._byteString)};if(r instanceof Ve){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ht)return function(o,l){const u=o instanceof Ht?o.toArray():o;return{mapValue:{fields:{[BE]:{stringValue:$E},[Kl]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.yc("VectorValues must only contain numeric values.");return zf(l.serializer,p)})}}}}}}(r,s);if(Ew(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Lf(r)}`)}(t,e)}function Jw(t,e){const n={};return ME(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,s)=>{const i=Yw(s,e.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Xw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof ln||t instanceof Rt||t instanceof Ve||t instanceof op||t instanceof Ht||Ew(t))}function Zw(t,e,n){if(!Xw(n)||!LE(n)){const r=Lf(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function up(t,e,n){if((e=rt(e))instanceof qw)return e._internalPath;if(typeof e=="string")return KN(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const GN=new RegExp("[~\\*/\\[\\]]");function KN(t,e,n){if(e.search(GN)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qw(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(b.INVALID_ARGUMENT,l+t+u)}function QN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class YN{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Kl].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Se(o.doubleValue));return new Ht(n)}convertGeoPoint(e){return new ln(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const n=wr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);oe(vw(r),9688,{name:e});const s=new zo(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||Nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class JN extends YN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function XN(){return new lp("serverTimestamp")}const e_="@firebase/firestore",t_="4.13.0";/**
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
 */class eT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(up("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZN extends eT{data(){return super.data()}}function tT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gr extends eT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(up("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gr._jsonSchema={type:Re("string",Gr._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class dl extends Gr{data(e={}){return super.data(e)}}class yo{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new to(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new dl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new to(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new dl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new to(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,p=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:eD(l.type),doc:u,oldIndex:c,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */yo._jsonSchemaVersion="firestore/querySnapshot/1.0",yo._jsonSchema={type:Re("string",yo._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};/**
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
 */function tD(t){t=ri(t,Ve);const e=ri(t.firestore,zu),n=Hw(e);return bN(n,t._key).then(r=>sD(e,t,r))}function nD(t,e,n){t=ri(t,Ve);const r=ri(t.firestore,zu),s=tT(t.converter,e),i=Kw(r);return nT(r,[Qw(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function rD(t,e){const n=ri(t.firestore,zu),r=ip(t),s=tT(t.converter,e),i=Kw(t.firestore);return nT(n,[Qw(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function nT(t,e){const n=Hw(t);return jN(n,e)}function sD(t,e,n){const r=n.docs.get(e._key),s=new JN(t);return new Gr(t,s,e._key,r,new to(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){Ox(us),ts(new _r("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new zu(new Mx(r.getProvider("auth-internal")),new Ux(o,r.getProvider("app-check-internal")),n2(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),tn(e_,t_,e),tn(e_,t_,"esm2020")})();/**
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
 */const rT="firebasestorage.googleapis.com",iD="storageBucket",oD=2*60*1e3,aD=10*60*1e3;/**
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
 */class fn extends dn{constructor(e,n,r=0){super(Yc(e),`Firebase Storage: ${n} (${Yc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var hn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(hn||(hn={}));function Yc(t){return"storage/"+t}function lD(){const t="An unknown error occurred, please check the error payload for server response.";return new fn(hn.UNKNOWN,t)}function uD(){return new fn(hn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cD(){return new fn(hn.CANCELED,"User canceled the upload/download.")}function hD(t){return new fn(hn.INVALID_URL,"Invalid URL '"+t+"'.")}function dD(t){return new fn(hn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function n_(t){return new fn(hn.INVALID_ARGUMENT,t)}function sT(){return new fn(hn.APP_DELETED,"The Firebase app was deleted.")}function fD(t){return new fn(hn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=zt.makeFromUrl(e,n)}catch{return new zt(e,"")}if(r.path==="")return r;throw dD(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${p}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},x=n===rT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",w=new RegExp(`^https?://${x}/${s}/${D}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:S,indices:R,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<A.length;L++){const j=A[L],F=j.regex.exec(e);if(F){const E=F[j.indices.bucket];let _=F[j.indices.path];_||(_=""),r=new zt(E,_),j.postModify(r);break}}if(r==null)throw hD(e);return r}}class pD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function mD(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function p(...D){c||(c=!0,e.apply(null,D))}function m(D){s=setTimeout(()=>{s=null,t(S,u())},D)}function g(){i&&clearTimeout(i)}function S(D,...w){if(c){g();return}if(D){g(),p.call(null,D,...w);return}if(u()||o){g(),p.call(null,D,...w);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,m(A)}let R=!1;function x(D){R||(R=!0,g(),!c&&(s!==null?(D||(l=2),clearTimeout(s),m(0)):D||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,x(!0)},n),x}function gD(t){t(!1)}/**
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
 */function yD(t){return t!==void 0}function r_(t,e,n,r){if(r<e)throw n_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw n_(`Invalid value for '${t}'. Expected ${n} or less.`)}function _D(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ru;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ru||(ru={}));/**
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
 */function vD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class ED{constructor(e,n,r,s,i,o,l,u,c,p,m,g=!0,S=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=p,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,x)=>{this.resolve_=R,this.reject_=x,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Wa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ru.NO_ERROR,u=i.getStatus();if(!l||vD(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===ru.ABORT;r(!1,new Wa(!1,null,p));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Wa(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());yD(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=lD();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?sT():cD();o(u)}else{const u=uD();o(u)}};this.canceled_?n(!1,new Wa(!1,null,!0)):this.backoffId_=mD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function wD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function TD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ID(t,e){e&&(t["X-Firebase-GMPID"]=e)}function SD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function AD(t,e,n,r,s,i,o=!0,l=!1){const u=_D(t.urlParams),c=t.url+u,p=Object.assign({},t.headers);return ID(p,e),wD(p,n),TD(p,i),SD(p,r),new ED(c,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function CD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class su{constructor(e,n){this._service=e,n instanceof zt?this._location=n:this._location=zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new su(e,n)}get root(){const e=new zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kD(this._location.path)}get storage(){return this._service}get parent(){const e=CD(this._location.path);if(e===null)return null;const n=new zt(this._location.bucket,e);return new su(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fD(e)}}function s_(t,e){const n=e==null?void 0:e[iD];return n==null?null:zt.makeFromBucketSpec(n,t)}function RD(t,e,n,r={}){t.host=`${e}:${n}`;const s=di(e);s&&_f(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:F0(i,t.app.options.projectId))}class xD{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=rT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oD,this._maxUploadRetryTime=aD,this._requests=new Set,s!=null?this._bucket=zt.makeFromBucketSpec(s,this._host):this._bucket=s_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=zt.makeFromBucketSpec(this._url,e):this._bucket=s_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){r_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){r_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new su(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new pD(sT());{const o=AD(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const i_="@firebase/storage",o_="0.14.2";/**
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
 */const iT="storage";function PD(t=wf(),e){t=rt(t);const r=Su(t,iT).getImmediate({identifier:e}),s=b0("storage");return s&&ND(r,...s),r}function ND(t,e,n,r={}){RD(t,e,n,r)}function DD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new xD(n,r,s,e,us)}function OD(){ts(new _r(iT,DD,"PUBLIC").setMultipleInstances(!0)),tn(i_,o_,""),tn(i_,o_,"esm2020")}OD();const LD={apiKey:"AIzaSyAtgrCrXy0-3RiEq9KPLRHnS5xw20u6zLA",authDomain:"valhalla-box-gym-app.firebaseapp.com",projectId:"valhalla-box-gym-app",storageBucket:"valhalla-box-gym-app.firebasestorage.app",messagingSenderId:"304953173191",appId:"1:304953173191:web:60c58812478a2524890ae2"},cp=$0(LD),qn=xx(cp),hp=BN(cp);PD(cp);const oT=M.createContext(),ps=()=>M.useContext(oT),VD=({children:t})=>{const[e,n]=M.useState(null),[r,s]=M.useState(!0),[i,o]=M.useState(!1),l=async(D,w,v)=>{const A=await dR(qn,D,w);return await mR(A.user,{displayName:v}),A},u=(D,w)=>fR(qn,D,w),c=()=>{const D=new _n;return $c(qn,D)},p=()=>{const D=new yn;return $c(qn,D)},m=()=>{const D=new vn;return $c(qn,D)},g=()=>{alert("Inició el flujo de TikTok, actualmente desactivado.")},S=()=>{console.log("Instagram OAuth redirigido a Facebook Login en la UI.")},R=()=>vR(qn);M.useEffect(()=>_R(qn,w=>{n(w),s(!1)}),[]);const x={currentUser:e,login:u,loginWithGoogle:c,loginWithFacebook:p,loginWithTwitter:m,loginWithTiktok:g,loginWithInstagram:S,signup:l,loginWithCustomToken:D=>Object.keys(D).length?hR(qn,D):null,logout:R,isAuthModalOpen:i,setIsAuthModalOpen:o};return d.jsx(oT.Provider,{value:x,children:!r&&t})},aT=M.createContext(),dp=()=>M.useContext(aT),MD=({children:t})=>{const[e,n]=M.useState(()=>{const g=localStorage.getItem("valhalla_cart");return g?JSON.parse(g):[]}),[r,s]=M.useState(!1);M.useEffect(()=>{localStorage.setItem("valhalla_cart",JSON.stringify(e))},[e]);const i=g=>{n(S=>S.find(x=>x.id===g.id)?S.map(x=>x.id===g.id?{...x,quantity:x.quantity+1}:x):[...S,{...g,quantity:1}]),s(!0)},o=g=>{n(S=>S.filter(R=>R.id!==g))},l=(g,S)=>{S<1||n(R=>R.map(x=>x.id===g?{...x,quantity:S}:x))},u=()=>{n([])},c=e.reduce((g,S)=>g+S.price*S.quantity,0),p=e.reduce((g,S)=>g+S.quantity,0),m={cart:e,addToCart:i,removeFromCart:o,updateQuantity:l,clearCart:u,cartTotal:c,cartCount:p,isCartOpen:r,setIsCartOpen:s};return d.jsx(aT.Provider,{value:m,children:t})},bD=({isOpen:t,onClose:e})=>{const{login:n,signup:r,loginWithGoogle:s,loginWithFacebook:i,loginWithTwitter:o,loginWithTiktok:l,loginWithInstagram:u}=ps(),[c,p]=M.useState(!0),[m,g]=M.useState(""),[S,R]=M.useState(""),[x,D]=M.useState(""),[w,v]=M.useState(""),[A,L]=M.useState(!1);if(!t)return null;const j=async E=>{E.preventDefault(),v(""),L(!0);try{c?await n(m,S):await r(m,S,x||"Guerrero"),e()}catch(_){v(_.code==="auth/email-already-in-use"?"El guerrero ya está registrado en nuestros salones.":_.code==="auth/wrong-password"||_.code==="auth/user-not-found"||_.code==="auth/invalid-credential"?"Credenciales incorrectas. ¿Olvidaste tu juramento?":"Error al conectar con los dioses. Intenta de nuevo.")}L(!1)},F=async(E,_)=>{v(""),L(!0);try{await E(),e()}catch{v(`Error al conectar con ${_}. Intenta nuevamente.`)}L(!1)};return d.jsx("div",{className:"auth-modal-overlay",onClick:e,children:d.jsxs("div",{className:"auth-modal-content",onClick:E=>E.stopPropagation(),children:[d.jsx("button",{className:"auth-close-btn",onClick:e,children:d.jsx(Tu,{size:24})}),d.jsxs("div",{className:"auth-header",children:[d.jsx(Zr,{className:"text-gold mb-2 mx-auto",size:32}),d.jsx("h2",{children:c?"ENTRA AL VALHALLA":"ÚNETE A LA TRIBU"}),d.jsx("p",{className:"text-muted",children:c?"Regresa a tu lugar de entrenamiento":"Forja tu legado con nosotros"})]}),w&&d.jsx("div",{className:"auth-error",children:w}),d.jsxs("form",{onSubmit:j,className:"auth-form",children:[!c&&d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Nombre de Guerrero"}),d.jsx("input",{type:"text",value:x,onChange:E=>D(E.target.value),placeholder:"Ej. Ragnar",required:!c})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Correo Electrónico"}),d.jsx("input",{type:"email",value:m,onChange:E=>g(E.target.value),placeholder:"tu@correo.com",required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Contraseña secreta"}),d.jsx("input",{type:"password",value:S,onChange:E=>R(E.target.value),placeholder:"••••••••",required:!0,minLength:"6"})]}),d.jsx("button",{type:"submit",className:"btn-primary w-100 mt-2",disabled:A,children:A?"CARGANDO...":c?"INICIAR SESIÓN":"FORJAR ALIANZA"})]}),d.jsxs("div",{className:"divider-container",children:[d.jsx("div",{className:"divider-line"}),d.jsx("span",{className:"divider-text",children:"O ENTRA CON"}),d.jsx("div",{className:"divider-line"})]}),d.jsxs("div",{className:"social-btn-group",children:[d.jsxs("button",{type:"button",className:"google-btn w-100",onClick:()=>F(s,"Google"),disabled:A,children:[d.jsxs("svg",{className:"google-icon",viewBox:"0 0 24 24",children:[d.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),d.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),d.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),d.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continuar con Google"]}),d.jsxs("button",{type:"button",className:"google-btn facebook-btn w-100",onClick:()=>F(i,"Facebook"),disabled:A,children:[d.jsx("svg",{className:"google-icon",viewBox:"0 0 24 24",children:d.jsx("path",{fill:"#1877F2",d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),"Continuar con Facebook"]}),d.jsxs("button",{type:"button",className:"google-btn instagram-btn w-100",onClick:()=>F(i,"Instagram(Vía Facebook)"),disabled:A,children:[d.jsx("svg",{className:"google-icon",viewBox:"0 0 448 512",fill:"currentColor",children:d.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})}),"Continuar con Instagram"]})]}),d.jsx("div",{className:"auth-toggle",children:d.jsxs("p",{children:[c?"¿Aún no eres miembro? ":"¿Ya tienes un lugar en la mesa? ",d.jsx("button",{type:"button",className:"toggle-mode-btn",onClick:()=>{p(!c),v("")},children:c?"Regístrate aquí":"Inicia Sesión"})]})})]})})},jD=()=>{const{cart:t,removeFromCart:e,updateQuantity:n,cartTotal:r,clearCart:s,isCartOpen:i,setIsCartOpen:o}=dp(),{currentUser:l,setIsAuthModalOpen:u}=ps(),[c,p]=M.useState(!1);if(!i)return null;const m=async()=>{if(!l){o(!1),u(!0);return}if(t.length!==0){p(!0);try{const g={userId:l.uid,userName:l.displayName||"Guerrero Valhalla",userEmail:l.email,items:t,total:r,date:new Date().toISOString(),status:"pending"};rD(Ww(hp,"orders"),g).catch(x=>console.error("Error BD:",x));const S=`¡Skål! Soy ${g.userName}, y quiero forjar mi armadura con este pedido:

`+t.map(x=>`- ${x.quantity}x ${x.name} ($${x.price}) = $${x.quantity*x.price}`).join(`
`)+`

Total del Botín: $${r}`,R=`https://wa.me/542317533963?text=${encodeURIComponent(S)}`;s(),o(!1),p(!1),window.open(R,"_blank")}catch(g){console.error("Error procesando el pedido:",g),alert("Hubo un error al forjar tu pedido. Intenta nuevamente.")}p(!1)}};return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"cart-overlay",onClick:()=>o(!1)}),d.jsxs("div",{className:"cart-drawer",children:[d.jsxs("div",{className:"cart-header",children:[d.jsx("h2",{children:"TU BOTÍN"}),d.jsx("button",{className:"cart-close",onClick:()=>o(!1),children:d.jsx(Tu,{size:24})})]}),d.jsx("div",{className:"cart-items",children:t.length===0?d.jsxs("div",{className:"cart-empty",children:[d.jsx(RA,{size:48,className:"text-muted mx-auto mb-3"}),d.jsx("p",{children:"Tu botín está vacío, guerrero."}),d.jsx("button",{className:"btn-outline w-100 mt-4",onClick:()=>o(!1),children:"VOLVER A LA ARMERÍA"})]}):t.map(g=>d.jsxs("div",{className:"cart-item",children:[d.jsx("div",{className:"cart-item-img",style:{backgroundImage:`url(${g.image})`}}),d.jsxs("div",{className:"cart-item-details",children:[d.jsx("h4",{children:g.name}),d.jsxs("p",{className:"text-gold font-bold",children:["$",g.price]}),d.jsxs("div",{className:"cart-item-controls",children:[d.jsxs("div",{className:"quantity-ctrl",children:[d.jsx("button",{onClick:()=>n(g.id,g.quantity-1),children:"-"}),d.jsx("span",{children:g.quantity}),d.jsx("button",{onClick:()=>n(g.id,g.quantity+1),children:"+"})]}),d.jsx("button",{className:"remove-btn",onClick:()=>e(g.id),children:d.jsx(NA,{size:18})})]})]})]},g.id))}),t.length>0&&d.jsxs("div",{className:"cart-footer",children:[d.jsxs("div",{className:"cart-total",children:[d.jsx("span",{children:"Total del Botín:"}),d.jsxs("span",{className:"text-gold font-bold",children:["$",r]})]}),d.jsx("button",{className:"btn-primary w-100 mt-3 d-flex align-center justify-center gap-2",onClick:m,disabled:c,children:c?"PROCESANDO...":"RECLAMAR BOTÍN"}),d.jsx("p",{className:"text-muted text-center mt-2",style:{fontSize:"0.8rem"},children:"Finalizarás el pedido por WhatsApp directamente con La Tribu."})]})]})]})},a_=({size:t=24})=>d.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M12 22C7 22 4 18 4 13c0-3 2-6 3.5-7.5.5-.5.8-1.2.8-1.9V3h7.4v.6c0 .7.3 1.4.8 1.9C18 7 20 10 20 13c0 5-3 9-8 9z"}),d.jsx("path",{d:"M8 7h8"}),d.jsx("path",{d:"M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",fill:"var(--accent-gold, #C5A059)",stroke:"none"}),d.jsx("path",{d:"M12 12.5v3M10.5 14h3",stroke:"var(--bg-dark, #0a0a0a)",strokeWidth:"1.5"})]}),UD=()=>{var S;const[t,e]=M.useState(!1),[n,r]=M.useState(!1),[s,i]=M.useState(!0),{currentUser:o,logout:l,isAuthModalOpen:u,setIsAuthModalOpen:c}=ps(),{cartCount:p,setIsCartOpen:m}=dp();M.useEffect(()=>{localStorage.getItem("theme")==="light"&&(i(!1),document.documentElement.setAttribute("data-theme","light"))},[]);const g=()=>{const R=s?"light":"dark";i(!s),document.documentElement.setAttribute("data-theme",R),localStorage.setItem("theme",R)};return M.useEffect(()=>{const R=()=>e(window.scrollY>50);return window.addEventListener("scroll",R),()=>window.removeEventListener("scroll",R)},[]),M.useEffect(()=>{const R=()=>{window.innerWidth>768&&n&&r(!1)};return window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[n]),d.jsxs(d.Fragment,{children:[d.jsx(bD,{isOpen:u,onClose:()=>c(!1)}),d.jsx(jD,{}),d.jsxs("nav",{className:`navbar ${t?"scrolled":""}`,children:[d.jsxs("div",{className:"navbar-container",children:[d.jsxs(Bs,{to:"/",className:"logo-container",children:[d.jsx(Zr,{className:"logo-icon",size:32}),d.jsxs("span",{className:"logo-text",children:[d.jsx("span",{className:"logo-valhalla",children:"VALHALLA"}),d.jsx("span",{className:"logo-boxgym text-gold",children:"BOX GYM"})]})]}),d.jsxs("div",{className:"nav-links desktop-only",children:[d.jsx("a",{href:"/#philosophy",children:"La Tribu"}),d.jsx("a",{href:"/#services",children:"Entrenamiento"}),d.jsx("a",{href:"/#schedule",children:"Horarios"}),d.jsx("a",{href:"/#pricing",children:"Tarifas"}),d.jsx(Bs,{to:"/armeria",children:"Armería"}),d.jsx("button",{onClick:g,className:"theme-toggle-btn","aria-label":"Toggle Theme",children:s?d.jsx(Pg,{size:20}):d.jsx(xg,{size:20})}),d.jsxs("button",{onClick:()=>m(!0),className:"cart-toggle-btn",children:[d.jsx(a_,{size:22}),p>0&&d.jsx("span",{className:"cart-badge",children:p})]}),o?d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[d.jsx("span",{className:"text-gold",style:{fontSize:"0.9rem",fontWeight:"bold"},children:((S=o.displayName)==null?void 0:S.split(" ")[0])||"Guerrero"}),d.jsx("button",{onClick:l,className:"btn-outline nav-btn",style:{padding:"0.5rem 1rem",fontSize:"0.8rem"},children:"SALIR"})]}):d.jsx("button",{onClick:()=>c(!0),className:"btn-primary nav-btn",children:"Únete Ahora"})]}),d.jsxs("div",{className:"mobile-only",children:[d.jsxs("button",{onClick:()=>m(!0),className:"cart-toggle-btn",style:{marginRight:"0.5rem"},children:[d.jsx(a_,{size:24}),p>0&&d.jsx("span",{className:"cart-badge",children:p})]}),d.jsx("button",{onClick:g,className:"theme-toggle-btn",children:s?d.jsx(Pg,{size:24}):d.jsx(xg,{size:24})}),d.jsx("button",{className:"mobile-menu-btn",onClick:()=>r(!n),children:n?d.jsx(Tu,{size:28}):d.jsx(CA,{size:28})})]})]}),n&&d.jsxs("div",{className:"mobile-menu",children:[d.jsx("a",{href:"/#philosophy",onClick:()=>r(!1),children:"La Tribu"}),d.jsx("a",{href:"/#services",onClick:()=>r(!1),children:"Entrenamiento"}),d.jsx("a",{href:"/#schedule",onClick:()=>r(!1),children:"Horarios"}),d.jsx("a",{href:"/#pricing",onClick:()=>r(!1),children:"Tarifas"}),d.jsx(Bs,{to:"/armeria",onClick:()=>r(!1),children:"Armería"}),o?d.jsx("button",{onClick:()=>{l(),r(!1)},className:"btn-outline mobile-btn",children:"SALIR DE LA CUENTA"}):d.jsx("button",{onClick:()=>{c(!0),r(!1)},className:"btn-primary mobile-btn",children:"Únete Ahora"})]})]})]})},FD="542317533963",zD="https://www.google.com/maps/search/Urquiza+671,+9+de+Julio,+Buenos+Aires,+Argentina",BD="https://www.instagram.com/valhallaboxgym",$D=()=>d.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",className:"contact-icon",style:{flexShrink:0},children:d.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),WD=()=>{const t=()=>{window.open(`https://wa.me/${FD}?text=${encodeURIComponent(`⚔️ ¡Skål! Me acerco desde las tierras del sur para conocer el Valhalla Box Gym.
Quiero más información sobre el salón de los guerreros. ¡Que Odin guíe mi camino! 🪓🛡️`)}`,"_blank")};return d.jsx("footer",{className:"footer-section",children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"footer-grid",children:[d.jsxs("div",{className:"footer-brand",children:[d.jsxs("div",{className:"logo-container mb-4",children:[d.jsx(Zr,{className:"logo-icon",size:32}),d.jsxs("span",{className:"logo-text",children:["VALHALLA ",d.jsx("span",{className:"text-gold",children:"BOX GYM"})]})]}),d.jsx("p",{className:"text-muted",children:"Forjando guerreros a través de disciplina, fuerza y comunidad."})]}),d.jsxs("div",{className:"footer-links",children:[d.jsx("h4",{children:"Navegación"}),d.jsxs("ul",{children:[d.jsx("li",{children:d.jsx("a",{href:"#home",children:"Inicio"})}),d.jsx("li",{children:d.jsx("a",{href:"#philosophy",children:"La Tribu"})}),d.jsx("li",{children:d.jsx("a",{href:"#services",children:"Clases"})}),d.jsx("li",{children:d.jsx("a",{href:"#pricing",children:"Tarifas"})})]})]}),d.jsxs("div",{className:"footer-contact",children:[d.jsx("h4",{children:"Encuéntranos"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(D0,{size:20,className:"contact-icon"}),d.jsx("a",{href:zD,target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"Urquiza 671, 9 de Julio (6500)"})]}),d.jsxs("li",{children:[d.jsx($D,{}),d.jsx("button",{onClick:t,className:"contact-link contact-btn",children:"Escríbenos por WhatsApp"})]}),d.jsxs("li",{children:[d.jsx(IA,{size:20,className:"contact-icon"}),d.jsx("a",{href:BD,target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:"Instagram"})]})]})]})]}),d.jsx("div",{className:"footer-bottom",children:d.jsxs("p",{className:"text-muted",children:["© ",new Date().getFullYear()," Valhalla Box Gym. Todos los derechos reservados."]})})]})})},HD=()=>d.jsxs("section",{className:"hero-section",id:"home",children:[d.jsx("div",{className:"hero-overlay"}),d.jsxs("div",{className:"hero-content container",children:[d.jsxs("h1",{className:"hero-title animate-fade-in",children:["FORJA TU ",d.jsx("span",{className:"text-gold",children:"LEYENDA"}),".",d.jsx("br",{}),"ENTRENA COMO UN DIOS."]}),d.jsx("p",{className:"hero-subtitle mb-8 animate-fade-in delay-200",children:"En Valhalla Box Gym no es solo sudor, es honor. Únete a nuestra tribu de guerreros."}),d.jsxs("div",{className:"hero-actions animate-fade-in delay-200",children:[d.jsx("a",{href:"/#pricing",className:"btn-primary",children:"TU CAMBIO COMIENZA HOY"}),d.jsx(Bs,{to:"/instalaciones",className:"btn-outline",children:"Ver Instalaciones"})]})]})]}),qD=()=>d.jsx("section",{className:"philosophy-section",id:"philosophy",children:d.jsx("div",{className:"container",children:d.jsxs("div",{className:"philosophy-grid",children:[d.jsxs("div",{className:"philosophy-text",children:[d.jsxs("h2",{children:["NUESTRA ",d.jsx("span",{className:"text-gold",children:"FILOSOFÍA"})]}),d.jsx("div",{className:"divider"}),d.jsx("p",{children:'"En Valhalla Box Gym no solo entrenamos el cuerpo; forjamos el espíritu de guerrero. Creemos en la disciplina, el trabajo duro y la comunidad. Aquí no hay espejos de vanidad, solo acero, sudor y el sonido del progreso."'})]}),d.jsxs("div",{className:"philosophy-features",children:[d.jsxs("div",{className:"feature-item",children:[d.jsx("div",{className:"feature-icon",children:d.jsx(xA,{size:32})}),d.jsxs("div",{children:[d.jsx("h3",{children:"Honor & Respeto"}),d.jsx("p",{children:"Compite contigo mismo, respeta a tus hermanos de armas."})]})]}),d.jsxs("div",{className:"feature-item",children:[d.jsx("div",{className:"feature-icon",children:d.jsx(PA,{size:32})}),d.jsxs("div",{children:[d.jsx("h3",{children:"Intensidad Real"}),d.jsx("p",{children:"Entrenamientos diseñados para desafiar tus límites físicos y mentales."})]})]}),d.jsxs("div",{className:"feature-item",children:[d.jsx("div",{className:"feature-icon",children:d.jsx(DA,{size:32})}),d.jsxs("div",{children:[d.jsx("h3",{children:"La Tribu"}),d.jsx("p",{children:"Apoyo constante de la comunidad para asegurar que nadie se quede atrás."})]})]})]})]})})}),GD=()=>{const t=[{id:1,title:"MUSCULACIÓN",image:"/assets/images/strength.png",description:"fuerza y desarrollo libre"},{id:2,title:"GAP",image:"/assets/images/gap.png",description:"glúteos, abdomen y piernas"},{id:3,title:"CROSSTRAINING",image:"/assets/images/crosstraining.png",description:"entrenamiento de alta intensidad"},{id:4,title:"KICKBOXING",image:"/assets/images/striking.png",description:"combate y striking"}];return d.jsx("section",{className:"services-section",id:"services",children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"section-header text-center",children:[d.jsxs("h2",{children:["NUESTRAS ",d.jsx("span",{className:"text-gold",children:"DISCIPLINAS"})]}),d.jsx("p",{className:"subtitle",children:"ELIGE TU CAMPO DE BATALLA"})]}),d.jsx("div",{className:"services-grid",children:t.map(e=>d.jsxs("div",{className:"service-card",children:[d.jsx("div",{className:"service-image",style:{backgroundImage:`url(${e.image})`},children:d.jsx("div",{className:"service-overlay"})}),d.jsxs("div",{className:"service-content",children:[d.jsx("h3",{children:e.title}),d.jsx("p",{children:e.description})]})]},e.id))}),d.jsxs("div",{className:"services-cta text-center mt-5",children:[d.jsx("p",{className:"cta-text",children:"¿Listo para entrar al Valhalla? No dejes para mañana el guerrero que puedes ser hoy."}),d.jsx("a",{href:"#pricing",className:"btn-primary",style:{display:"inline-block",textDecoration:"none"},children:"VER TARIFAS"})]})]})})},KD=()=>d.jsx("section",{className:"about-section",id:"about",children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"about-story",children:[d.jsxs("h2",{children:["EL ORIGEN DEL ",d.jsx("span",{className:"text-gold",children:"VALHALLA"})]}),d.jsx("div",{className:"divider mx-auto"}),d.jsx("p",{children:'Valhalla Box Gym nació de la pasión por el entrenamiento real. Cansados de los gimnasios comerciales donde pasas desapercibido entre máquinas de poleas, decidimos construir un verdadero "Bastión del Norte". Un lugar donde puedes gritar al levantar pesado, donde soltar barras no es un delito, y donde todos conocen tu nombre.'})]}),d.jsxs("div",{className:"jarls-section mt-5",children:[d.jsxs("h2",{className:"text-center mb-4",children:["NUESTROS ",d.jsx("span",{className:"text-gold",children:"JARLS"})]}),d.jsx("p",{className:"text-center subtitle mb-5",children:"LOS ENTRENADORES QUE TE GUIARÁN EN BATALLA"}),d.jsxs("div",{className:"trainers-grid",children:[d.jsxs("div",{className:"trainer-card",children:[d.jsx("div",{className:"trainer-img",style:{backgroundImage:"url('/assets/images/trainer.png')"}}),d.jsxs("div",{className:"trainer-info",children:[d.jsx("h3",{children:"NACHO"}),d.jsx("p",{className:"specialty",children:"Head Coach & Strength"}),d.jsx("p",{className:"quote",children:'"El hierro no miente. Te da exactamente lo que le entregas."'})]})]}),d.jsxs("div",{className:"trainer-card",children:[d.jsx("div",{className:"trainer-img",style:{backgroundImage:"url('/assets/images/lautaro.png')"}}),d.jsxs("div",{className:"trainer-info",children:[d.jsx("h3",{children:"LAUTARO"}),d.jsx("p",{className:"specialty",children:"Functional & Agility"}),d.jsx("p",{className:"quote",children:'"La motivación es temporal. La disciplina te hace leyenda."'})]})]}),d.jsxs("div",{className:"trainer-card",children:[d.jsx("div",{className:"trainer-img",style:{backgroundImage:"url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop')"}}),d.jsxs("div",{className:"trainer-info",children:[d.jsx("h3",{children:"SANTINO"}),d.jsx("p",{className:"specialty",children:"Striking Specialist"}),d.jsx("p",{className:"quote",children:'"Entrena tan duro que la vida real parezca fácil."'})]})]})]})]})]})}),QD=t=>d.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeLinecap:"round",...t,children:[d.jsx("path",{d:"M 25 15 L 75 15 L 85 32 C 85 68, 70 88, 50 97 C 30 88, 15 68, 15 32 Z",strokeWidth:"5",fill:"currentColor",fillOpacity:"0.12"}),d.jsx("path",{d:"M 30 22 L 70 22 L 78 35 C 78 65, 65 83, 50 90 C 35 83, 22 65, 22 35 Z",strokeWidth:"2",strokeDasharray:"3 5",opacity:"0.4"}),d.jsx("path",{d:"M 50 15 L 50 97",strokeWidth:"4"}),d.jsx("path",{d:"M 15 32 L 85 32",strokeWidth:"3"}),d.jsx("path",{d:"M 20 50 L 80 50",strokeWidth:"2",opacity:"0.5"}),d.jsx("circle",{cx:"50",cy:"41",r:"11",strokeWidth:"4",fill:"#0a0a0c"}),d.jsx("circle",{cx:"50",cy:"41",r:"3",fill:"currentColor"}),d.jsx("circle",{cx:"21",cy:"24",r:"1.5",fill:"currentColor",strokeWidth:"1"}),d.jsx("circle",{cx:"79",cy:"24",r:"1.5",fill:"currentColor",strokeWidth:"1"}),d.jsx("circle",{cx:"32",cy:"32",r:"1.5",fill:"currentColor",strokeWidth:"1"}),d.jsx("circle",{cx:"68",cy:"32",r:"1.5",fill:"currentColor",strokeWidth:"1"}),d.jsx("circle",{cx:"50",cy:"50",r:"1.5",fill:"currentColor",strokeWidth:"1"}),d.jsx("circle",{cx:"50",cy:"65",r:"1.5",fill:"currentColor",strokeWidth:"1"}),d.jsx("path",{d:"M 35 60 L 42 72 M 68 38 L 62 48 M 28 80 L 32 85",strokeWidth:"1.5",opacity:"0.4",strokeDasharray:"1 2"})]}),YD=t=>d.jsx("svg",{viewBox:"0 0 100 100",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeLinecap:"round",...t,children:d.jsxs("g",{transform:"rotate(45 50 50)",children:[d.jsx("path",{d:"M 40 70 L 46 12 L 50 3 L 50 70 Z",strokeWidth:"2",fill:"currentColor",fillOpacity:"0.25"}),d.jsx("path",{d:"M 60 70 L 54 12 L 50 3 L 50 70 Z",strokeWidth:"2",fill:"currentColor",fillOpacity:"0.08"}),d.jsx("path",{d:"M 50 15 L 50 68",strokeWidth:"4",opacity:"0.6"}),d.jsx("path",{d:"M 48 18 L 48 65 M 52 18 L 52 65",strokeWidth:"1.5",opacity:"0.4"}),d.jsx("rect",{x:"26",y:"70",width:"48",height:"6",rx:"2",strokeWidth:"3",fill:"#0a0a0c"}),d.jsx("circle",{cx:"30",cy:"73",r:"1.5",fill:"currentColor"}),d.jsx("circle",{cx:"70",cy:"73",r:"1.5",fill:"currentColor"}),d.jsx("path",{d:"M 40 70 L 40 76 M 60 70 L 60 76",strokeWidth:"2",opacity:"0.5"}),d.jsx("rect",{x:"43",y:"76",width:"14",height:"15",strokeWidth:"3",fill:"currentColor",fillOpacity:"0.15"}),d.jsx("path",{d:"M 43 78 L 57 80 M 43 82 L 57 84 M 43 86 L 57 88",strokeWidth:"2",opacity:"0.9"}),d.jsx("path",{d:"M 57 78 L 43 80 M 57 82 L 43 84 M 57 86 L 43 88",strokeWidth:"2",opacity:"0.5"}),d.jsx("path",{d:"M 38 91 C 45 100, 55 100, 62 91 Z",strokeWidth:"3",fill:"currentColor",fillOpacity:"0.2"}),d.jsx("circle",{cx:"43",cy:"94",r:"2.5",strokeWidth:"2",fill:"#0a0a0c"}),d.jsx("circle",{cx:"50",cy:"96",r:"3",strokeWidth:"2",fill:"#0a0a0c"}),d.jsx("circle",{cx:"57",cy:"94",r:"2.5",strokeWidth:"2",fill:"#0a0a0c"}),d.jsx("path",{d:"M 50 30 L 47 35 M 50 42 L 53 47 M 47 52 L 53 52 M 50 58 L 47 62 L 53 62",strokeWidth:"2",opacity:"0.4"}),d.jsx("circle",{cx:"50",cy:"25",r:"1",fill:"currentColor",opacity:"0.5"})]})}),JD=t=>d.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeLinecap:"round",...t,children:[d.jsx("path",{d:"M45 15 L55 15 L52 2 L48 2 Z",strokeWidth:"3",fill:"currentColor",fillOpacity:"0.3"}),d.jsx("path",{d:"M46 55 L54 55 L52 95 L48 95 Z",strokeWidth:"3",fill:"currentColor",fillOpacity:"0.2"}),d.jsx("path",{d:"M46 95 L54 95 L50 100 Z",strokeWidth:"3",fill:"currentColor"}),d.jsx("path",{d:"M47 60 L51 63 M47 65 L51 68 M47 70 L51 73 M47 75 L51 78 M47 80 L51 83 M47 85 L51 88",strokeWidth:"2",opacity:"0.8"}),d.jsx("rect",{x:"42",y:"15",width:"16",height:"40",rx:"2",strokeWidth:"3",fill:"#0a0a0c"}),d.jsx("line",{x1:"42",y1:"20",x2:"58",y2:"20",strokeWidth:"2",opacity:"0.6"}),d.jsx("line",{x1:"42",y1:"50",x2:"58",y2:"50",strokeWidth:"2",opacity:"0.6"}),d.jsx("circle",{cx:"50",cy:"25",r:"2",strokeWidth:"2",fill:"currentColor"}),d.jsx("circle",{cx:"50",cy:"35",r:"3",strokeWidth:"3",fill:"currentColor",fillOpacity:"0.5"}),d.jsx("circle",{cx:"50",cy:"45",r:"2",strokeWidth:"2",fill:"currentColor"}),d.jsx("path",{d:"M42 20 C 25 10, 15 5, 10 5 C 0 25, 0 45, 10 65 C 15 65, 25 60, 42 50 Z",strokeWidth:"4",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M18 11 C 10 25, 10 45, 18 59",strokeWidth:"2",opacity:"0.6"}),d.jsx("path",{d:"M35 28 L 26 28 L 22 35 L 26 42 L 35 42 Z",strokeWidth:"2",opacity:"0.4"}),d.jsx("path",{d:"M58 20 C 75 10, 85 5, 90 5 C 100 25, 100 45, 90 65 C 85 65, 75 60, 58 50 Z",strokeWidth:"4",fill:"currentColor",fillOpacity:"0.1"}),d.jsx("path",{d:"M82 11 C 90 25, 90 45, 82 59",strokeWidth:"2",opacity:"0.6"}),d.jsx("path",{d:"M65 28 L 74 28 L 78 35 L 74 42 L 65 42 Z",strokeWidth:"2",opacity:"0.4"}),d.jsx("path",{d:"M35 20 L25 15 M35 50 L25 55",strokeWidth:"2",opacity:"0.3",strokeDasharray:"2 2"}),d.jsx("path",{d:"M65 20 L75 15 M65 50 L75 55",strokeWidth:"2",opacity:"0.3",strokeDasharray:"2 2"})]}),XD=t=>d.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeLinecap:"round",...t,children:[d.jsx("path",{d:"M 15 50 C 5 70, 15 90, 25 100 C 35 85, 45 95, 50 90 C 55 95, 65 85, 75 100 C 85 90, 95 70, 85 50 Z",strokeWidth:"2",opacity:"0.25",strokeDasharray:"2 3"}),d.jsx("path",{d:"M 18 45 C -15 30, -5 -10, 15 5 C 10 20, 20 28, 30 35 Z",strokeWidth:"4",fill:"currentColor",fillOpacity:"0.12"}),d.jsx("path",{d:"M 5 22 C 10 32, 15 37, 25 40 M 8 13 C 12 25, 18 30, 24 35",strokeWidth:"1.5",opacity:"0.6"}),d.jsx("path",{d:"M 82 45 C 115 30, 105 -10, 85 5 C 90 20, 80 28, 70 35 Z",strokeWidth:"4",fill:"currentColor",fillOpacity:"0.12"}),d.jsx("path",{d:"M 95 22 C 90 32, 85 37, 75 40 M 92 13 C 88 25, 82 30, 76 35",strokeWidth:"1.5",opacity:"0.6"}),d.jsx("path",{d:"M 18 50 C 18 10, 40 5, 50 5 C 60 5, 82 10, 82 50 Z",strokeWidth:"5",fill:"currentColor",fillOpacity:"0.18"}),d.jsx("path",{d:"M 50 5 L 50 45",strokeWidth:"6"}),d.jsx("path",{d:"M 18 35 Q 50 20, 82 35",strokeWidth:"5"}),d.jsx("circle",{cx:"50",cy:"15",r:"2.5",fill:"currentColor"}),d.jsx("circle",{cx:"50",cy:"28",r:"2.5",fill:"currentColor"}),d.jsx("path",{d:"M 12 45 C 12 70, 25 75, 35 72 L 40 85 L 47 75 L 53 75 L 60 85 L 65 72 C 75 75, 88 70, 88 45 Z",strokeWidth:"5",fill:"#0a0a0c"}),d.jsx("path",{d:"M 22 55 L 35 58 C 40 50, 50 50, 50 50 C 50 50, 60 50, 65 58 L 78 55 Z",strokeWidth:"2.5",opacity:"0.5"}),d.jsx("line",{x1:"26",y1:"50",x2:"40",y2:"56",strokeWidth:"4"}),d.jsx("line",{x1:"74",y1:"50",x2:"60",y2:"56",strokeWidth:"4"}),d.jsx("circle",{cx:"38",cy:"56",r:"3",fill:"currentColor"}),d.jsx("circle",{cx:"62",cy:"56",r:"3",fill:"currentColor"}),d.jsx("path",{d:"M 26 68 L 28 92 L 35 72",strokeWidth:"3",fill:"currentColor",fillOpacity:"0.4"}),d.jsx("path",{d:"M 74 68 L 72 92 L 65 72",strokeWidth:"3",fill:"currentColor",fillOpacity:"0.4"}),d.jsx("path",{d:"M 23 20 L 30 32 M 27 17 L 34 29 M 31 15 L 38 27",strokeWidth:"2",opacity:"0.6",strokeDasharray:"3 3"})]}),ZD=t=>d.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeLinecap:"round",...t,children:[d.jsx("path",{d:"M22 45 C 5 25, 5 5, 15 5 C 20 20, 25 35, 30 40",strokeWidth:"5"}),d.jsx("path",{d:"M78 45 C 95 25, 95 5, 85 5 C 80 20, 75 35, 70 40",strokeWidth:"5"}),d.jsx("path",{d:"M20 65 C 20 20, 80 20, 80 65",strokeWidth:"7",fill:"currentColor",fillOpacity:"0.05"}),d.jsx("line",{x1:"12",y1:"65",x2:"88",y2:"65",strokeWidth:"10"}),d.jsx("circle",{cx:"25",cy:"65",r:"2",strokeWidth:"3",fill:"#0a0a0c"}),d.jsx("circle",{cx:"50",cy:"65",r:"2",strokeWidth:"3",fill:"#0a0a0c"}),d.jsx("circle",{cx:"75",cy:"65",r:"2",strokeWidth:"3",fill:"#0a0a0c"}),d.jsx("path",{d:"M35 65 C 35 85, 45 90, 50 95 C 55 90, 65 85, 65 65",strokeWidth:"6"}),d.jsx("path",{d:"M25 65 C 25 80, 35 85, 35 65",strokeWidth:"5"}),d.jsx("path",{d:"M75 65 C 75 80, 65 85, 65 65",strokeWidth:"5"})]}),eO=()=>{const[t,e]=M.useState("Musculación"),n=[{name:"Musculación",schedules:[{days:"Lunes a Viernes",time:`08:00 a 10:00
13:00 a 21:30`,trainer:"Lautaro, Santino & Nacho"},{days:"Sábados",time:"11:00 a 14:00",trainer:"Lautaro"}]},{name:"Crosstraining",schedules:[{days:"Lunes, Miérc y Viernes",time:`14:00 a 15:00
20:15 a 21:15`,trainer:"Santino & Nacho"}]},{name:"GAP",schedules:[{days:"Martes y Jueves",time:`14:00 a 15:00
20:00 a 21:00`,trainer:"Nacho"}]},{name:"Kickboxing",schedules:[{days:"Lunes, Miérc y Viernes",time:`13:00 a 14:00
19:15 a 20:15`,trainer:"Nacho"},{days:"Martes y Jueves",time:"19:00 a 20:00",trainer:"Nacho"}]}],r=n.find(s=>s.name===t)||n[0];return d.jsx("section",{className:"schedule-section",id:"schedule",children:d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"section-header text-center",children:[d.jsxs("h2",{children:["HORARIOS DE ",d.jsx("span",{className:"text-gold",children:"BATALLA"})]}),d.jsx("p",{className:"subtitle",children:"ELIGE TU DISCIPLINA"})]}),d.jsx("div",{className:"filter-container",children:n.map(s=>d.jsx("button",{className:`filter-btn ${t===s.name?"active":""}`,onClick:()=>e(s.name),children:s.name.toUpperCase()},s.name))}),d.jsx("div",{className:"schedule-cards",children:r.schedules.map((s,i)=>{const o=s.trainer.includes("&")||s.trainer.includes(",");return d.jsxs("div",{className:"class-card animate-fade-in",children:[d.jsx("div",{className:"watermark-container",children:d.jsx("div",{className:"jarl-watermark",children:d.jsx(ZD,{})})}),d.jsxs("div",{style:{position:"relative",zIndex:1},children:[d.jsx("h4",{className:"font-bold mb-2",children:s.days}),d.jsx("p",{className:"text-gold text-2xl font-heading mb-1",style:{whiteSpace:"pre-line"},children:s.time}),d.jsxs("p",{className:"mb-4 text-muted",children:[d.jsx("span",{className:"text-gold font-bold",children:o?"JARLS":"JARL"})," a cargo: ",d.jsx("span",{className:"text-light",children:s.trainer})]})]}),d.jsx("button",{className:"book-btn w-100",disabled:!0,style:{position:"relative",zIndex:1,opacity:.6,cursor:"not-allowed",border:"1px dashed var(--border-color)",color:"var(--text-muted)"},children:"RESERVAS PROXIMAMENTE"})]},i)})})]})})},tO="542317533963",nO=({plan:t,isOpen:e,onClose:n})=>{const{currentUser:r}=ps(),[s,i]=M.useState({nombre:"",email:"",dni:"",telefono:"",direccion:"",genero:""}),[o,l]=M.useState(!1);if(M.useEffect(()=>{r&&e&&i(p=>({...p,nombre:r.displayName||"",email:r.email||""}))},[r,e]),!e||!t)return null;const u=p=>{i({...s,[p.target.name]:p.target.value})},c=async p=>{p.preventDefault(),l(!0);try{const m=ip(Ww(hp,"inscriptions")),g=m.id,S={userId:(r==null?void 0:r.uid)||null,nombre:s.nombre,email:s.email,dni:s.dni,telefono:s.telefono,direccion:s.direccion,genero:s.genero,plan:{name:t.name,price:t.price,period:t.period||""},createdAt:XN()},R=nD(m,S),x=new Promise(A=>setTimeout(A,2e3));try{await Promise.race([R,x])}catch(A){console.warn("Ignorando error o timeout de DB para no bloquear al usuario:",A)}const D=`${window.location.origin}/inscripcion/${g}`,w=`⚔️ ¡Skål Valhalla! Soy *${s.nombre}* (DNI: ${s.dni}).
Me he registrado desde la web para el plan *${t.name}*.

🪓 *AQUÍ ESTÁ MI PASE OFICIAL DE INSCRIPCIÓN*: ${D}`,v=`https://wa.me/${tO}?text=${encodeURIComponent(w)}`;window.location.href=v,n()}catch(m){console.error("Error al generar la inscripción:",m),alert("Hubo un error en el servidor: "+m.message+`. 
Intenta de nuevo.`)}finally{l(!1)}};return d.jsx("div",{className:"auth-modal-overlay",onClick:n,children:d.jsxs("div",{className:"auth-modal-content plan-modal-content",onClick:p=>p.stopPropagation(),children:[d.jsx("button",{className:"auth-close-btn",onClick:n,type:"button",children:d.jsx(Tu,{size:24})}),d.jsxs("div",{className:"auth-header",children:[d.jsx(Zr,{className:"text-gold mb-2 mx-auto",size:32}),d.jsxs("h2",{children:["DATOS DE ",d.jsx("span",{className:"text-gold",children:"INSCRIPCIÓN"})]}),d.jsxs("p",{className:"text-muted",children:["Plan Elegido: ",d.jsxs("strong",{children:[t.name," ($",t.price,t.period,")"]})]})]}),d.jsxs("form",{onSubmit:c,className:"auth-form plan-form",children:[d.jsxs("div",{className:"form-group-row",children:[d.jsxs("div",{className:"form-group flex-fill",children:[d.jsx("label",{children:"Nombre Completo"}),d.jsx("input",{type:"text",name:"nombre",value:s.nombre,onChange:u,placeholder:"Ragnar Lothbrok",required:!0})]}),d.jsxs("div",{className:"form-group flex-fill",children:[d.jsx("label",{children:"Identificación (DNI)"}),d.jsx("input",{type:"text",name:"dni",value:s.dni,onChange:u,placeholder:"00.000.000",required:!0})]})]}),d.jsxs("div",{className:"form-group-row",children:[d.jsxs("div",{className:"form-group flex-fill",children:[d.jsx("label",{children:"Teléfono Celular"}),d.jsx("input",{type:"tel",name:"telefono",value:s.telefono,onChange:u,placeholder:"+54 9 00 0000 0000",required:!0})]}),d.jsxs("div",{className:"form-group flex-fill",children:[d.jsx("label",{children:"Dirección Terrenal"}),d.jsx("input",{type:"text",name:"direccion",value:s.direccion,onChange:u,placeholder:"Calle Vikinga 123, Ciudad",required:!0})]})]}),d.jsxs("div",{className:"form-group-row",children:[d.jsxs("div",{className:"form-group flex-fill",children:[d.jsx("label",{children:"Correo Electrónico"}),d.jsx("input",{type:"email",name:"email",value:s.email,onChange:u,placeholder:"tu@correo.com",required:!0})]}),d.jsxs("div",{className:"form-group flex-fill",children:[d.jsx("label",{children:"Género"}),d.jsxs("select",{name:"genero",value:s.genero,onChange:u,required:!0,children:[d.jsx("option",{value:"",disabled:!0,children:"Selecciona tu género"}),d.jsx("option",{value:"Masculino",children:"Masculino"}),d.jsx("option",{value:"Femenino",children:"Femenino"}),d.jsx("option",{value:"Prefiero no decirlo",children:"Prefiero no decirlo"})]})]})]}),d.jsxs("div",{className:"disclaimer-info mt-3",children:[d.jsx(TA,{size:18,className:"text-gold"}),d.jsx("span",{children:"Al forjar inscripción, tu información se subirá a nuestro sistema y se generará un enlace oficial que enviaremos a nuestro WhatsApp para asentar tu base en el Bastión."})]}),d.jsxs("div",{className:"form-actions mt-4",children:[d.jsx("button",{type:"button",className:"btn-outline w-100 d-flex-center",onClick:n,disabled:o,children:"CANCELAR"}),d.jsx("button",{type:"submit",className:"btn-primary w-100 d-flex-center",disabled:o,children:o?"FORJANDO...":"FORJAR INSCRIPCIÓN"})]})]})]})})},rO=[{id:"escaldo",name:"ESCALDO",desc:"Plan de entrenamiento más nutrición",price:"39.000",period:"/mes",features:["APP Exclusiva","Plan Nutricional","Seguimiento 100%"],btnClass:"btn-outline",popular:!1,weapon:QD},{id:"guerrero",name:"GUERRERO",desc:"Sala de Musculación",price:"37.000",period:"/mes",features:["Rutinas guiadas","APP Exclusiva","1 vez al día los 5 días (Lun-Sáb)"],btnClass:"btn-outline",popular:!1,weapon:YD},{id:"vikingo",name:"VIKINGO",desc:"Acceso exclusivo a Clases",price:"39.000",period:"/mes",features:["Kick Boxing","G.A.P","Crosstraining"],btnClass:"btn-primary",popular:!0,weapon:JD},{id:"berserker",name:"BERSERKER",desc:"Pase Libre: Musculación + Clases",price:"44.000",period:"/mes",features:["Rutinas guiadas","Clases incluidas","APP Exclusiva","De Lunes a Sábados"],btnClass:"btn-outline",popular:!1,weapon:XD}],sO=()=>{const{currentUser:t,setIsAuthModalOpen:e}=ps(),[n,r]=M.useState(null),[s,i]=M.useState(!1),o=l=>{if(!t){e(!0);return}r(l),i(!0)};return d.jsxs("section",{className:"pricing-section",id:"pricing",children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"section-header text-center",children:[d.jsxs("h2",{children:["INGRESO AL ",d.jsx("span",{className:"text-gold",children:"SALÓN"})]}),d.jsx("p",{className:"subtitle",children:"ELIGE TU TRIBUTO"})]}),d.jsx("div",{className:"pricing-grid pricing-grid-4",children:rO.map(l=>d.jsxs("div",{className:`pricing-card plan-${l.id}${l.popular?" popular":""}`,children:[d.jsx("div",{className:"watermark-container",children:d.jsx("div",{className:"card-watermark",children:d.jsx(l.weapon,{})})}),l.popular&&d.jsx("div",{className:"popular-badge",children:"RECOMENDADA"}),d.jsxs("div",{className:"pricing-card-left",children:[d.jsx("h3",{children:l.name}),d.jsx("p",{className:"plan-desc",children:l.desc}),d.jsxs("div",{className:"price-container",children:[d.jsxs("div",{className:"price main-price",children:[d.jsx("span",{className:"currency",children:"$"}),d.jsx("span",{className:"amount",children:l.price}),d.jsx("span",{className:"period",children:l.period})]}),d.jsxs("div",{className:"discount-badge",children:[d.jsx(EA,{size:16,className:"discount-icon"})," 10% OFF abonando en efectivo"]})]}),d.jsx("button",{className:`${l.btnClass} w-100`,onClick:()=>o(l),children:"SELECCIONAR"})]}),d.jsxs("div",{className:"pricing-card-right",children:[d.jsx("ul",{className:"plan-features",children:l.features.map((u,c)=>d.jsxs("li",{children:[d.jsx(wA,{size:20,className:"check-icon"})," ",u]},c))}),d.jsx("button",{className:`${l.btnClass} w-100 seleccionar-mobile`,onClick:()=>o(l),children:"SELECCIONAR"})]})]},l.id))}),d.jsxs("div",{className:"faq-section mt-5",children:[d.jsx("h3",{className:"text-center mb-4",children:"Preguntas Frecuentes"}),d.jsxs("div",{className:"faq-grid",children:[d.jsxs("div",{className:"faq-item",children:[d.jsx("h4",{children:"¿Hay cuota de inscripción (matrícula)?"}),d.jsx("p",{className:"text-muted",children:"No. Creemos en la transparencia. Pagas lo que usas, sin cargos ocultos."})]}),d.jsxs("div",{className:"faq-item",children:[d.jsx("h4",{children:"¿Puedo cancelar en cualquier momento?"}),d.jsx("p",{className:"text-muted",children:"Sí, puedes cancelar tu membresía con un aviso de 15 días antes del próximo ciclo de facturación."})]})]})]})]}),d.jsx(nO,{plan:n,isOpen:s,onClose:()=>i(!1)})]})},iO=()=>d.jsxs(d.Fragment,{children:[d.jsx(HD,{}),d.jsx(qD,{}),d.jsx(GD,{}),d.jsx(KD,{}),d.jsx(eO,{}),d.jsx(sO,{})]}),oO=()=>{M.useEffect(()=>{window.scrollTo(0,0)},[]);const t=[{id:1,image:"/assets/images/facility_weights.png",title:"ZONA DE HIERRO Y FUERZA",desc:"Donde se forjan los verdaderos levantamientos."},{id:2,image:"/assets/images/facility_functional.png",title:"ZONA FUNCIONAL",desc:"Espacio abierto para WODs, saltos, y velocidad."},{id:3,image:"/assets/images/facility_striking.png",title:"ZONA DE STRIKING",desc:"Equipamiento pesado para deportes de contacto."}];return d.jsxs("div",{className:"facilities-page",children:[d.jsxs("div",{className:"facilities-header",children:[d.jsx("div",{className:"facilities-overlay"}),d.jsxs("div",{className:"container relative z-10 text-center",style:{paddingTop:"11rem",paddingBottom:"4rem"},children:[d.jsxs("h1",{className:"page-title mt-4",children:["NUESTRAS ",d.jsx("span",{className:"text-gold",children:"INSTALACIONES"})]}),d.jsx("p",{className:"page-subtitle",children:"El terreno sagrado donde las leyendas sudan y sangran."})]})]}),d.jsx("div",{className:"container py-12",children:d.jsx("div",{className:"facilities-gallery",children:t.map(e=>d.jsxs("div",{className:"facility-card",children:[d.jsx("div",{className:"facility-image",style:{backgroundImage:`url(${e.image})`}}),d.jsxs("div",{className:"facility-info",children:[d.jsx("h3",{children:e.title}),d.jsx("p",{children:e.desc})]})]},e.id))})})]})},aO=()=>{const{addToCart:t}=dp(),{currentUser:e,setIsAuthModalOpen:n}=ps();M.useEffect(()=>{window.scrollTo(0,0)},[]);const r=[{id:1,name:"Camiseta Berserker Oversize",price:"15000",tag:"Más Vendido",image:"/assets/images/products/tshirt.png"},{id:2,name:"Musculosa Stringer Valhalla",price:"14000",tag:"Entrenamiento",image:"/assets/images/products/tanktop.png"},{id:3,name:"Pantalón Corto Táctico",price:"25000",tag:"Nuevo",image:"/assets/images/products/shorts.png"},{id:4,name:"Jogger de Fuerza (Pantalón Largo)",price:"32000",tag:"Invierno",image:"/assets/images/products/joggers.png"}],s=i=>{if(!e){n(!0);return}t({...i,price:parseFloat(i.price)})};return d.jsxs("div",{className:"armeria-page",children:[d.jsxs("div",{className:"armeria-header",children:[d.jsx("div",{className:"armeria-overlay"}),d.jsxs("div",{className:"container relative z-10 text-center",style:{paddingTop:"11rem",paddingBottom:"4rem"},children:[d.jsxs("h1",{className:"page-title mt-4",children:["LA ",d.jsx("span",{className:"text-gold",children:"ARMERÍA"})]}),d.jsx("p",{className:"page-subtitle",children:"VÍSTETE PARA LA BATALLA. ARMADURA BERSERKER PARA GUERREROS."})]})]}),d.jsx("div",{className:"container py-12",children:d.jsx("div",{className:"armeria-grid",children:r.map(i=>d.jsxs("div",{className:"product-card",children:[d.jsx("div",{className:"product-image-container",children:d.jsx("img",{src:i.image,alt:i.name,className:"product-image"})}),d.jsxs("div",{className:"product-info",children:[d.jsx("span",{className:"product-tag",children:i.tag}),d.jsx("h3",{children:i.name}),d.jsxs("p",{className:"product-price text-gold",children:["$",i.price]}),d.jsx("button",{className:"btn-outline product-btn",onClick:()=>s(i),children:"Agregar al Botín"})]})]},i.id))})})]})},lO=()=>{var u;const{id:t}=BS(),[e,n]=M.useState(!0),[r,s]=M.useState(null),[i,o]=M.useState("");if(M.useEffect(()=>{t&&(async()=>{try{const p=ip(hp,"inscriptions",t),m=new Promise((S,R)=>setTimeout(()=>R(new Error("timeout")),1e4)),g=await Promise.race([tD(p),m]);g.exists()?s(g.data()):o("El pase de inscripción no se ha encontrado. Es posible que el proceso se haya interrumpido antes de guardarse.")}catch(p){console.error("Error fetching doc:",p),p.message==="timeout"?o("La conexión con nuestra base de datos tardó demasiado. Verifica tu conexión o intenta desactivar bloqueadores de anuncios."):o("Ocurrió un error al buscar el pase. Es posible que falten permisos en la Base de Datos.")}finally{n(!1)}})()},[t]),e)return d.jsxs("div",{className:"inscripcion-view loading-view",children:[d.jsx(SA,{className:"spinner text-gold",size:48}),d.jsx("h2",{className:"mt-4",children:"RECUPERANDO PASE..."})]});if(i||!r)return d.jsxs("div",{className:"inscripcion-view error-view",children:[d.jsx(Zr,{className:"text-muted mb-4",size:48}),d.jsx("h2",{className:"text-gold",children:"ENLACE INVÁLIDO"}),d.jsx("p",{children:i}),d.jsx(Bs,{to:"/",className:"btn-primary mt-4",children:"VOLVER AL BASTIÓN"})]});const l=(u=r.createdAt)!=null&&u.toDate?r.createdAt.toDate().toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"}):"Fecha no disponible";return d.jsxs("div",{className:"inscripcion-view",children:[d.jsxs("div",{className:"inscripcion-card",children:[d.jsxs("div",{className:"inscripcion-header",children:[d.jsx(Zr,{className:"text-gold mb-2 mx-auto",size:48}),d.jsx("h1",{className:"title",children:"VALHALLA BOX GYM"}),d.jsx("div",{className:"divider"}),d.jsx("p",{className:"subtitle",children:"COMPROBANTE DE INSCRIPCIÓN AL BASTIÓN"}),d.jsx("div",{className:"divider"})]}),d.jsxs("div",{className:"plan-details",children:[d.jsxs("h2",{className:"plan-title",children:["PLAN ELEGIDO: ",d.jsx("span",{className:"text-gold",children:r.plan.name.toUpperCase()})]}),d.jsxs("p",{className:"plan-price",children:["Pase Mensual: $",r.plan.price]})]}),d.jsxs("div",{className:"user-details",children:[d.jsx("h3",{className:"section-title text-gold",children:"DATOS DEL GUERRERO"}),d.jsxs("div",{className:"data-grid",children:[d.jsxs("div",{className:"data-item",children:[d.jsx(Mc,{size:18,className:"text-gold"}),d.jsxs("div",{children:[d.jsx("span",{className:"data-label",children:"Nombre Completo"}),d.jsx("span",{className:"data-value",children:r.nombre})]})]}),d.jsxs("div",{className:"data-item",children:[d.jsx(Mc,{size:18,className:"text-gold"}),d.jsxs("div",{children:[d.jsx("span",{className:"data-label",children:"DNI / Identificación"}),d.jsx("span",{className:"data-value",children:r.dni})]})]}),d.jsxs("div",{className:"data-item",children:[d.jsx(kA,{size:18,className:"text-gold"}),d.jsxs("div",{children:[d.jsx("span",{className:"data-label",children:"Teléfono Móvil"}),d.jsx("span",{className:"data-value",children:r.telefono})]})]}),d.jsxs("div",{className:"data-item",children:[d.jsx(AA,{size:18,className:"text-gold"}),d.jsxs("div",{children:[d.jsx("span",{className:"data-label",children:"Correo Registrado"}),d.jsx("span",{className:"data-value",children:r.email})]})]}),d.jsxs("div",{className:"data-item",children:[d.jsx(D0,{size:18,className:"text-gold"}),d.jsxs("div",{children:[d.jsx("span",{className:"data-label",children:"Dirección Activa"}),d.jsx("span",{className:"data-value",children:r.direccion})]})]}),d.jsxs("div",{className:"data-item",children:[d.jsx(Mc,{size:18,className:"text-gold"}),d.jsxs("div",{children:[d.jsx("span",{className:"data-label",children:"Género"}),d.jsx("span",{className:"data-value",children:r.genero})]})]})]})]}),d.jsxs("div",{className:"inscripcion-footer",children:[d.jsx("div",{className:"divider"}),d.jsx("p",{className:"footer-text",children:"Subido al sistema y expedido por Valhalla Gym. Skål!"}),d.jsxs("p",{className:"footer-date",children:["Fecha de Iniciación: ",l]})]})]}),d.jsxs(Bs,{to:"/",className:"btn-secondary mt-4 mb-5",style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[d.jsx(vA,{size:18}),"Volver al Inicio"]})]})},uO=()=>{const[t]=gA(),{loginWithCustomToken:e}=ps(),n=yf(),[r,s]=M.useState("Procesando entrada al Valhalla...");return M.useEffect(()=>{(async()=>{const o=t.get("token"),l=t.get("error");if(l){s(`Error al forjar la alianza: ${l}`),setTimeout(()=>n("/"),3e3);return}if(o)try{await e(o),s("¡Bienvenido, guerrero!"),setTimeout(()=>n("/"),1500)}catch(u){console.error(u),s("El token tribal es inválido o ha caducado."),setTimeout(()=>n("/"),3e3)}else s("No se enviaron las llaves necesarias."),setTimeout(()=>n("/"),2e3)})()},[t,e,n]),d.jsxs("div",{className:"auth-handler-container d-flex-center flex-column min-vh-100",style:{backgroundColor:"var(--bg-dark)"},children:[d.jsx(Zr,{className:"text-gold mb-3",size:48}),d.jsx("h2",{className:"text-light",children:r}),d.jsx("p",{className:"text-muted mt-2",children:"Por favor aguarda un instante..."})]})};function cO(){return d.jsx(VD,{children:d.jsx(MD,{children:d.jsxs("div",{className:"app-container",children:[d.jsx(UD,{}),d.jsxs(sA,{children:[d.jsx(vs,{path:"/",element:d.jsx(iO,{})}),d.jsx(vs,{path:"/instalaciones",element:d.jsx(oO,{})}),d.jsx(vs,{path:"/armeria",element:d.jsx(aO,{})}),d.jsx(vs,{path:"/inscripcion/:id",element:d.jsx(lO,{})}),d.jsx(vs,{path:"/auth-callback",element:d.jsx(uO,{})})]}),d.jsx(WD,{})]})})})}Jc.createRoot(document.getElementById("root")).render(d.jsx(__.StrictMode,{children:d.jsx(dA,{children:d.jsx(cO,{})})}));
