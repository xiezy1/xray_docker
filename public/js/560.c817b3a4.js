"use strict";(self["webpackChunkdocker_xray"]=self["webpackChunkdocker_xray"]||[]).push([[560],{9560:function(e,t,n){n.r(t),n.d(t,{default:function(){return $t}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[t("el-form",{ref:"form",attrs:{"label-width":"80px"}},[t("el-form-item",{attrs:{label:"运行状态"}},[t("div",{staticClass:"xray_status"},[t("span",{class:e.xrayStatus?"green":"gary"},[e._v(e._s(e.xrayStatus?"运行中":"未运行"))])])]),t("el-form-item",{attrs:{label:"当前节点"}},[t("div",{staticClass:"xray_status"},[e._v("大师傅地方都是")])]),t("el-form-item",{attrs:{label:"选择节点"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return t("el-option",{key:e.uuid,attrs:{label:e.name,value:e.uuid}})})),1)],1)],1),t("el-row",[t("el-col",{attrs:{span:4,offset:16}},[t("el-button",{attrs:{type:"primary"},on:{click:e.updateConfig}},[e._v("确定执行")])],1)],1)],1)},o=[];n(1439),n(7585),n(5315),n(7658);function s(e,t){return function(){return e.apply(t,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:a}=Object,c=(e=>t=>{const n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),u=e=>(e=e.toLowerCase(),t=>c(t)===e),l=e=>t=>typeof t===e,{isArray:f}=Array,d=l("undefined");function p(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const h=u("ArrayBuffer");function m(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer),t}const E=l("string"),y=l("function"),g=l("number"),b=e=>null!==e&&"object"===typeof e,R=e=>!0===e||!1===e,w=e=>{if("object"!==c(e))return!1;const t=a(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},O=u("Date"),S=u("File"),A=u("Blob"),v=u("FileList"),T=e=>b(e)&&y(e.pipe),_=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=c(e))||"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},N=u("URLSearchParams"),C=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function x(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),f(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function j(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}const D=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),P=e=>!d(e)&&e!==D;function U(){const{caseless:e}=P(this)&&this||{},t={},n=(n,r)=>{const o=e&&j(t,r)||r;w(t[o])&&w(n)?t[o]=U(t[o],n):w(n)?t[o]=U({},n):f(n)?t[o]=n.slice():t[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&x(arguments[r],n);return t}const L=(e,t,n,{allOwnKeys:r}={})=>(x(t,((t,r)=>{n&&y(t)?e[r]=s(t,n):e[r]=t}),{allOwnKeys:r}),e),F=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),I=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},B=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),s=o.length;while(s-- >0)i=o[s],r&&!r(i,e,t)||c[i]||(t[i]=e[i],c[i]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},k=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},M=e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!g(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},q=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&a(Uint8Array)),z=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},H=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},V=u("HTMLFormElement"),J=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),W=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),K=u("RegExp"),G=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};x(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},X=e=>{G(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},$=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},Q=()=>{},Y=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Z="abcdefghijklmnopqrstuvwxyz",ee="0123456789",te={DIGIT:ee,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+ee},ne=(e=16,t=te.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function re(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const oe=e=>{const t=new Array(10),n=(e,r)=>{if(b(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=f(e)?[]:{};return x(e,((e,t)=>{const s=n(e,r+1);!d(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},se=u("AsyncFunction"),ie=e=>e&&(b(e)||y(e))&&y(e.then)&&y(e.catch);var ae={isArray:f,isArrayBuffer:h,isBuffer:p,isFormData:_,isArrayBufferView:m,isString:E,isNumber:g,isBoolean:R,isObject:b,isPlainObject:w,isUndefined:d,isDate:O,isFile:S,isBlob:A,isRegExp:K,isFunction:y,isStream:T,isURLSearchParams:N,isTypedArray:q,isFileList:v,forEach:x,merge:U,extend:L,trim:C,stripBOM:F,inherits:I,toFlatObject:B,kindOf:c,kindOfTest:u,endsWith:k,toArray:M,forEachEntry:z,matchAll:H,isHTMLForm:V,hasOwnProperty:W,hasOwnProp:W,reduceDescriptors:G,freezeMethods:X,toObjectSet:$,toCamelCase:J,noop:Q,toFiniteNumber:Y,findKey:j,global:D,isContextDefined:P,ALPHABET:te,generateString:ne,isSpecCompliantForm:re,toJSONObject:oe,isAsyncFn:se,isThenable:ie};n(541);function ce(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ae.inherits(ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ae.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ue=ce.prototype,le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{le[e]={value:e}})),Object.defineProperties(ce,le),Object.defineProperty(ue,"isAxiosError",{value:!0}),ce.from=(e,t,n,r,o,s)=>{const i=Object.create(ue);return ae.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ce.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var fe=ce,de=null;function pe(e){return ae.isPlainObject(e)||ae.isArray(e)}function he(e){return ae.endsWith(e,"[]")?e.slice(0,-2):e}function me(e,t,n){return e?e.concat(t).map((function(e,t){return e=he(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function Ee(e){return ae.isArray(e)&&!e.some(pe)}const ye=ae.toFlatObject(ae,{},null,(function(e){return/^is[A-Z]/.test(e)}));function ge(e,t,n){if(!ae.isObject(e))throw new TypeError("target must be an object");t=t||new(de||FormData),n=ae.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!ae.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&ae.isSpecCompliantForm(t);if(!ae.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(ae.isDate(e))return e.toISOString();if(!c&&ae.isBlob(e))throw new fe("Blob is not supported. Use a Buffer instead.");return ae.isArrayBuffer(e)||ae.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"===typeof e)if(ae.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(ae.isArray(e)&&Ee(e)||(ae.isFileList(e)||ae.endsWith(n,"[]"))&&(a=ae.toArray(e)))return n=he(n),a.forEach((function(e,r){!ae.isUndefined(e)&&null!==e&&t.append(!0===i?me([n],r,s):null===i?n:n+"[]",u(e))})),!1;return!!pe(e)||(t.append(me(o,n,s),u(e)),!1)}const f=[],d=Object.assign(ye,{defaultVisitor:l,convertValue:u,isVisitable:pe});function p(e,n){if(!ae.isUndefined(e)){if(-1!==f.indexOf(e))throw Error("Circular reference detected in "+n.join("."));f.push(e),ae.forEach(e,(function(e,r){const s=!(ae.isUndefined(e)||null===e)&&o.call(t,e,ae.isString(r)?r.trim():r,n,d);!0===s&&p(e,n?n.concat(r):[r])})),f.pop()}}if(!ae.isObject(e))throw new TypeError("data must be an object");return p(e),t}var be=ge;function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function we(e,t){this._pairs=[],e&&be(e,this,t)}const Oe=we.prototype;Oe.append=function(e,t){this._pairs.push([e,t])},Oe.toString=function(e){const t=e?function(t){return e.call(this,t,Re)}:Re;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Se=we;function Ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ve(e,t,n){if(!t)return e;const r=n&&n.encode||Ae,o=n&&n.serialize;let s;if(s=o?o(t,n):ae.isURLSearchParams(t)?t.toString():new Se(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}class Te{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ae.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var _e=Te,Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ce=(n(6229),n(7330),n(2062),"undefined"!==typeof URLSearchParams?URLSearchParams:Se),xe="undefined"!==typeof FormData?FormData:null,je="undefined"!==typeof Blob?Blob:null;const De=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),Pe=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Ue={isBrowser:!0,classes:{URLSearchParams:Ce,FormData:xe,Blob:je},isStandardBrowserEnv:De,isStandardBrowserWebWorkerEnv:Pe,protocols:["http","https","file","blob","url","data"]};function Le(e,t){return be(e,new Ue.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Ue.isNode&&ae.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function Fe(e){return ae.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Ie(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Be(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&ae.isArray(r)?r.length:s,a)return ae.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&ae.isObject(r[s])||(r[s]=[]);const c=t(e,n,r[s],o);return c&&ae.isArray(r[s])&&(r[s]=Ie(r[s])),!i}if(ae.isFormData(e)&&ae.isFunction(e.entries)){const n={};return ae.forEachEntry(e,((e,r)=>{t(Fe(e),r,n,0)})),n}return null}var ke=Be;function Me(e,t,n){if(ae.isString(e))try{return(t||JSON.parse)(e),ae.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const qe={transitional:Ne,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=ae.isObject(e);o&&ae.isHTMLForm(e)&&(e=new FormData(e));const s=ae.isFormData(e);if(s)return r&&r?JSON.stringify(ke(e)):e;if(ae.isArrayBuffer(e)||ae.isBuffer(e)||ae.isStream(e)||ae.isFile(e)||ae.isBlob(e))return e;if(ae.isArrayBufferView(e))return e.buffer;if(ae.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Le(e,this.formSerializer).toString();if((i=ae.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return be(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),Me(e)):e}],transformResponse:[function(e){const t=this.transitional||qe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&ae.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,s=!n&&r;try{return JSON.parse(e)}catch(o){if(s){if("SyntaxError"===o.name)throw fe.from(o,fe.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ue.classes.FormData,Blob:Ue.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ae.forEach(["delete","get","head","post","put","patch"],(e=>{qe.headers[e]={}}));var ze=qe;const He=ae.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ve=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&He[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const Je=Symbol("internals");function We(e){return e&&String(e).trim().toLowerCase()}function Ke(e){return!1===e||null==e?e:ae.isArray(e)?e.map(Ke):String(e)}function Ge(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const Xe=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $e(e,t,n,r,o){return ae.isFunction(r)?r.call(this,t,n):(o&&(t=n),ae.isString(t)?ae.isString(r)?-1!==t.indexOf(r):ae.isRegExp(r)?r.test(t):void 0:void 0)}function Qe(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function Ye(e,t){const n=ae.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}class Ze{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=We(t);if(!o)throw new Error("header name must be a non-empty string");const s=ae.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Ke(e))}const s=(e,t)=>ae.forEach(e,((e,n)=>o(e,n,t)));return ae.isPlainObject(e)||e instanceof this.constructor?s(e,t):ae.isString(e)&&(e=e.trim())&&!Xe(e)?s(Ve(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=We(e),e){const n=ae.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return Ge(e);if(ae.isFunction(t))return t.call(this,e,n);if(ae.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=We(e),e){const n=ae.findKey(this,e);return!(!n||void 0===this[n]||t&&!$e(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=We(e),e){const o=ae.findKey(n,e);!o||t&&!$e(n,n[o],o,t)||(delete n[o],r=!0)}}return ae.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const o=t[n];e&&!$e(this,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return ae.forEach(this,((r,o)=>{const s=ae.findKey(n,o);if(s)return t[s]=Ke(r),void delete t[o];const i=e?Qe(o):String(o).trim();i!==o&&delete t[o],t[i]=Ke(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ae.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&ae.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[Je]=this[Je]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=We(e);n[t]||(Ye(r,e),n[t]=!0)}return ae.isArray(e)?e.forEach(o):o(e),this}}Ze.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ae.reduceDescriptors(Ze.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),ae.freezeMethods(Ze);var et=Ze;function tt(e,t){const n=this||ze,r=t||n,o=et.from(r.headers);let s=r.data;return ae.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function nt(e){return!(!e||!e.__CANCEL__)}function rt(e,t,n){fe.call(this,null==e?"canceled":e,fe.ERR_CANCELED,t,n),this.name="CanceledError"}ae.inherits(rt,fe,{__CANCEL__:!0});var ot=rt;n(2801);function st(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new fe("Request failed with status code "+n.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var it=Ue.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),ae.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),ae.isString(r)&&i.push("path="+r),ae.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function at(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ct(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ut(e,t){return e&&!at(t)?ct(e,t):t}var lt=Ue.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=ae.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function ft(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function dt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;while(l!==s)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}var pt=dt;function ht(e,t){let n=0;const r=pt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a),u=s<=i;n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&u?(i-s)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const mt="undefined"!==typeof XMLHttpRequest;var Et=mt&&function(e){return new Promise((function(t,n){let r=e.data;const o=et.from(e.headers).normalize(),s=e.responseType;let i,a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}ae.isFormData(r)&&(Ue.isStandardBrowserEnv||Ue.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?ae.isString(a=o.getContentType())&&o.setContentType(a.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const l=ut(e.baseURL,e.url);function f(){if(!u)return;const r=et.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),o=s&&"text"!==s&&"json"!==s?u.response:u.responseText,i={data:o,status:u.status,statusText:u.statusText,headers:r,config:e,request:u};st((function(e){t(e),c()}),(function(e){n(e),c()}),i),u=null}if(u.open(e.method.toUpperCase(),ve(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(f)},u.onabort=function(){u&&(n(new fe("Request aborted",fe.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new fe("Network Error",fe.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Ne;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new fe(t,r.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,e,u)),u=null},Ue.isStandardBrowserEnv){const t=(e.withCredentials||lt(l))&&e.xsrfCookieName&&it.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&ae.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),ae.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&u.addEventListener("progress",ht(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",ht(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{u&&(n(!t||t.type?new ot(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const d=ft(l);d&&-1===Ue.protocols.indexOf(d)?n(new fe("Unsupported protocol "+d+":",fe.ERR_BAD_REQUEST,e)):u.send(r||null)}))};const yt={http:de,xhr:Et};ae.forEach(yt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const gt=e=>`- ${e}`,bt=e=>ae.isFunction(e)||null===e||!1===e;var Rt={getAdapter:e=>{e=ae.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!bt(n)&&(r=yt[(t=String(n)).toLowerCase()],void 0===r))throw new fe(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(gt).join("\n"):" "+gt(e[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:yt};function wt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ot(null,e)}function Ot(e){wt(e),e.headers=et.from(e.headers),e.data=tt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=Rt.getAdapter(e.adapter||ze.adapter);return t(e).then((function(t){return wt(e),t.data=tt.call(e,e.transformResponse,t),t.headers=et.from(t.headers),t}),(function(t){return nt(t)||(wt(e),t&&t.response&&(t.response.data=tt.call(e,e.transformResponse,t.response),t.response.headers=et.from(t.response.headers))),Promise.reject(t)}))}const St=e=>e instanceof et?e.toJSON():e;function At(e,t){t=t||{};const n={};function r(e,t,n){return ae.isPlainObject(e)&&ae.isPlainObject(t)?ae.merge.call({caseless:n},e,t):ae.isPlainObject(t)?ae.merge({},t):ae.isArray(t)?t.slice():t}function o(e,t,n){return ae.isUndefined(t)?ae.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!ae.isUndefined(t))return r(void 0,t)}function i(e,t){return ae.isUndefined(t)?ae.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(St(e),St(t),!0)};return ae.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);ae.isUndefined(i)&&s!==a||(n[r]=i)})),n}const vt="1.5.1",Tt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Tt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const _t={};function Nt(e,t,n){if("object"!==typeof e)throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new fe("option "+s+" must be "+n,fe.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new fe("Unknown option "+s,fe.ERR_BAD_OPTION)}}Tt.transitional=function(e,t,n){function r(e,t){return"[Axios v"+vt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new fe(r(o," has been removed"+(t?" in "+t:"")),fe.ERR_DEPRECATED);return t&&!_t[o]&&(_t[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var Ct={assertOptions:Nt,validators:Tt};const xt=Ct.validators;class jt{constructor(e){this.defaults=e,this.interceptors={request:new _e,response:new _e}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=At(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Ct.assertOptions(n,{silentJSONParsing:xt.transitional(xt.boolean),forcedJSONParsing:xt.transitional(xt.boolean),clarifyTimeoutError:xt.transitional(xt.boolean)},!1),null!=r&&(ae.isFunction(r)?t.paramsSerializer={serialize:r}:Ct.assertOptions(r,{encode:xt.function,serialize:xt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&ae.merge(o.common,o[t.method]);o&&ae.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=et.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ot.bind(this),void 0];e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(f<l)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;f=0;while(f<l){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=Ot.call(this,d)}catch(p){return Promise.reject(p)}f=0,l=c.length;while(f<l)u=u.then(c[f++],c[f++]);return u}getUri(e){e=At(this.defaults,e);const t=ut(e.baseURL,e.url);return ve(t,e.params,e.paramsSerializer)}}ae.forEach(["delete","get","head","options"],(function(e){jt.prototype[e]=function(t,n){return this.request(At(n||{},{method:e,url:t,data:(n||{}).data}))}})),ae.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(At(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}jt.prototype[e]=t(),jt.prototype[e+"Form"]=t(!0)}));var Dt=jt;class Pt{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ot(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new Pt((function(t){e=t}));return{token:t,cancel:e}}}var Ut=Pt;function Lt(e){return function(t){return e.apply(null,t)}}function Ft(e){return ae.isObject(e)&&!0===e.isAxiosError}const It={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(It).forEach((([e,t])=>{It[t]=e}));var Bt=It;function kt(e){const t=new Dt(e),n=s(Dt.prototype.request,t);return ae.extend(n,Dt.prototype,t,{allOwnKeys:!0}),ae.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return kt(At(e,t))},n}const Mt=kt(ze);Mt.Axios=Dt,Mt.CanceledError=ot,Mt.CancelToken=Ut,Mt.isCancel=nt,Mt.VERSION=vt,Mt.toFormData=be,Mt.AxiosError=fe,Mt.Cancel=Mt.CanceledError,Mt.all=function(e){return Promise.all(e)},Mt.spread=Lt,Mt.isAxiosError=Ft,Mt.mergeConfig=At,Mt.AxiosHeaders=et,Mt.formToJSON=e=>ke(ae.isHTMLForm(e)?new FormData(e):e),Mt.getAdapter=Rt.getAdapter,Mt.HttpStatusCode=Bt,Mt.default=Mt;var qt=Mt;let zt=qt.create({baseURL:"http://127.0.0.1:8002"});function Ht(){return zt.get("/getnodes").then((e=>e.data))}function Vt(e){return zt.post("/execconfig/exec",e).then((e=>e.data))}function Jt(){return zt.get("/execconfig/getStatus").then((e=>e.data))}var Wt={data(){return{options:[],value:"",xrayStatus:!0}},methods:{getNodeslist(){Ht().then((e=>{for(let t in e)this.options=this.options.concat(e[t])}))},updateConfig(){Vt({uuid:this.value}).then((e=>{console.log(e)})).finally((()=>{this.getXrayStatus()}))},getXrayStatus(){Jt().then((e=>{this.xrayStatus=e.xrayStatus}))}},mounted(){this.getNodeslist(),this.getXrayStatus()}},Kt=Wt,Gt=n(1001),Xt=(0,Gt.Z)(Kt,r,o,!1,null,"e13e64bc",null),$t=Xt.exports},5787:function(e,t,n){var r=n(7976),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new o("Incorrect invocation")}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(e,t,n){var r=n(1702),o=Error,s=r("".replace),i=function(e){return String(new o(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(i);e.exports=function(e,t){if(c&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=s(e,a,"");return e}},9587:function(e,t,n){var r=n(614),o=n(111),s=n(7674);e.exports=function(e,t,n){var i,a;return s&&r(i=t.constructor)&&i!==n&&o(a=i.prototype)&&a!==n.prototype&&s(e,a),e}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2801:function(e,t,n){var r=n(2109),o=n(7854),s=n(5005),i=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),f=n(6277),d=n(3678),p=n(1060),h=n(9781),m=n(1913),E="DOMException",y=s("Error"),g=s(E),b=function(){u(this,R);var e=arguments.length,t=f(e<1?void 0:arguments[0]),n=f(e<2?void 0:arguments[1],"Error"),r=new g(t,n),o=new y(t);return o.name=E,a(r,"stack",i(1,p(o.stack,1))),l(r,this,b),r},R=b.prototype=g.prototype,w="stack"in new y(E),O="stack"in new g(1,2),S=g&&h&&Object.getOwnPropertyDescriptor(o,E),A=!!S&&!(S.writable&&S.configurable),v=w&&!A&&!O;r({global:!0,constructor:!0,forced:m||v},{DOMException:v?b:g});var T=s(E),_=T.prototype;if(_.constructor!==T)for(var N in m||a(_,"constructor",i(1,T)),d)if(c(d,N)){var C=d[N],x=C.s;c(T,x)||a(T,x,i(6,C.c))}}}]);
//# sourceMappingURL=560.c817b3a4.js.map