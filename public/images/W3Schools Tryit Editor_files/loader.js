!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){var r=t(1);r.init();var o=r.get();try{!function(){var e={scripts:[{name:"qchoice",loadModule:function(){t(4)}},{name:"adconsent",skipLoadOnExists:!0,loadModule:function(){t(5)},onLoad:{emitEvent:"adnginLoaderReady",scripts:[{name:"pbjs",obj:{que:[]},queue:"que",path:"?v="+escape(o.version)},{name:"apstag",obj:{init:function(){this._Q.push(["i",arguments])},fetchBids:function(){this._Q.push(["f",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]}},{name:"gpt",obj:{cmd:[]},queue:"cmd"},{name:"adsbygoogle",obj:[]},{name:"adngin",obj:{queue:[],metrics:{timing:{}}},queue:"queue",path:"/"+escape(o.site)+"/"+escape(o.version)+"/adngin.js"},{name:"scripts",argus:{obj:{cmd:[]},queue:"cmd"}}]}}]},n=window.performance,r=n&&n.now?function(){return Math.floor(n.now())}:function(){return-1};function i(e,t){var o=function(e){if(n&&n.getEntriesByType)for(var t=0;t<n.getEntriesByType("resource").length;t++){var r=n.getEntriesByType("resource")[t];if(e(r.name))return r}return{startTime:-1,responseEnd:-1}}(t);d[e]=d[e]||{},d[e].requested=[Math.floor(o.startTime)],d[e].loaded=[Math.floor(o.responseEnd)],d[e].ready=[r()]}function a(e,n,t){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.onload=function(){i(e,(function(e){return-1!==e.indexOf(n.toLowerCase())})),o.resources[e].loaded=!0,t&&t()},d[e]=d[e]||{},d[e].queued=[r()],o.resources=o.resources||{},o.resources[e]={scriptElement:a,loaded:!1},a.src=n,document.head.appendChild(a)}function s(e,n,t){e.scripts.forEach((function(e){var r=o.settings[e.name]||{};!Array.isArray(r)&&r.load&&n(r.objName,e),e.onLoad&&e.onLoad.scripts&&t(e.onLoad)}))}function c(e,n){var t=n.obj;if(t)if(window[e]){var r=window[e];for(var o in t)r[o]=r[o]||t[o]}else window[e]=t}function u(e,n){n.queue&&window[e][n.queue].push((function(){d[n.name]=d[n.name]||{},d[n.name].apiReady=[r()]}))}(window.adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1,window.snigelPubConf=window.snigelPubConf||{},function e(n){s(n,c,e)}(e);var l=window[o.settings.adngin.objName],d=l.metrics.timing;i("loader",(function(e){return/.*snigel.*loader.js$/i.test(e)})),function e(n){s(n,u,e)}(e),function e(n){if(!n)return!1;n.emitEvent&&(window.dispatchEvent(new CustomEvent(n.emitEvent)),l[n.emitEvent]=!0,d.loader[n.emitEvent]=[r()]),n.scripts&&n.scripts.forEach((function(n){var t=o.settings[n.name]||{};if(Array.isArray(t))t.forEach((function(e){if(void 0===e.freq||Math.floor(100*Math.random())<e.freq){var t=e.name,r=n[t]||{};c(t,r),u(t,r),a(e.name||e.url,e.url)}}));else{var r=function(){var e=!!window[t.objName];return t.load&&(!e||e&&!n.skipLoadOnExists)};r()&&n.loadModule&&n.loadModule(),r()&&t.url?function(e,n){var t=o.settings[e.name].queryParameters,r=o.settings[e.name].url+(e.path||"")+(t?"?"+t:"");a(e.name,r,n)}(n,(function(){e(n.onLoad)})):e(n.onLoad)}}))}(e)}()}catch(e){if(!0===o.passThroughException)throw e;console.error(e)}},function(e,n,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var a=t(2),s=t(3);function c(e,n){var t=function(){var t=e.getElementById("sn-session-override-warnings");t||((t=e.createElement("div")).id="sn-session-override-warnings",t.setAttribute("style","background: darkred; position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000000; padding: 0.25em; color: white; font-family: monospace; font-size: small;"),t.innerHTML="(!) Session overrides:",t.addEventListener("mouseover",(function(){this.style.opacity="0.20"})),t.addEventListener("mouseout",(function(){this.style.opacity="1"})),e.body.appendChild(t)),t.innerHTML+=n},r=e.readyState;if("interactive"===r||"complete"===r)t();else{e.addEventListener("DOMContentLoaded",(function n(){e.removeEventListener("DOMContentLoaded",n,!1),t()}),!1)}}n.init=function(){try{for(var e in window._snigelConfig=window._snigelConfig||{},s)"exp"!=e&&(window._snigelConfig[e]=s[e]);var n=window.localStorage;if(s.exp){var t,i,u=o((n.getItem("_sn_exp")||"").split(";"),2);t=u[0],i=u[1],t!=s.cfgVer&&(t=s.cfgVer,i=a.undefined),s.exp.some((function(e){if(i==e.id||i==a.undefined&&Math.random()<e.freq){var n="exp="+(i=e.id),t=e.settings.adngin.queryParameters;return e.settings.adngin.queryParameters=t?t+"&"+n:n,window._snigelConfig.settings=e.settings,!0}return!1}))||(i=0),n.setItem("_sn_exp",t+";"+i)}else n.removeItem("_sn_exp");var l=JSON.parse(window.sessionStorage.getItem("snSessionOverrides"));null!==l&&(l.products&&"object"===r(l.products)&&!Array.isArray(l.products)&&Object.entries(l.products).forEach((function(e){var n=o(e,2),t=n[0],r=n[1];s.settings[t].url=r.url,s.settings[t].queryParameters=r.queryParameters;var i=r.message||"";console.warn("Override detected: '".concat(t,"': ").concat(i)),c(document," (".concat(t,", ").concat(i,")"))})),l.adEngineCoreConfig&&(window._snigelConfig.adEngineCoreConfigOverride=l.adEngineCoreConfig,console.warn("Override detected; AdEngine coreConfig'."),c(document," (AdEngine coreConfig overriden) ")))}catch(e){}},n.get=function(){return window._snigelConfig||{}}},function(e,n){n.undefined=void 0},function(e){e.exports=JSON.parse('{"site":"w3schools.com","version":"8339-1700234105411","cfgVer":"9520","settings":{"adconsent":{"load":true,"objName":"adconsent","url":"//cdn.snigelweb.com/adconsent/adconsent.js"},"pbjs":{"load":true,"objName":"pbjs","url":"//cdn.snigelweb.com/prebid/7.53.0/prebid.js"},"gpt":{"load":true,"objName":"googletag","url":"//securepubads.g.doubleclick.net/tag/js/gpt.js"},"adngin":{"load":true,"objName":"adngin","url":"//adengine.snigelweb.com"},"apstag":{"load":true,"objName":"apstag","url":"//c.amazon-adsystem.com/aax2/apstag.js"},"scripts":[{"url":"//cdn.snigelweb.com/argus/argus.js","freq":100,"name":"argus"},{"url":"//boot.pbstck.com/v1/tag/6b8021b6-6874-4ef7-a983-9bb3141ccb5c","freq":5,"name":"pubstack"}]}}')},function(e,n){},function(e,n,t){"use strict";!function(e,n,t,r,o,i,a,s){var c=e._snigelConfig;if(c)try{t=c.settings.adconsent.objName}catch(e){}var u=void 0,l="__"+t,d={tcfeuv2:{z:1,v:2,sid:2,api:o,f:o,s:"getTCData",c:"euconsent-v2",n:"GDPR"},uspv1:{z:2,v:1,sid:6,api:a,f:a,s:"getUSPData",c:"usprivacy",n:"CCPA"},tcfcav1:{z:3,v:2,sid:5,api:t+".pipeda",f:"__tcfca",s:"getTCData",c:"caconsent",n:"PIPEDA"},usnat:{z:4,v:1,sid:7,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usconsent",n:"USNATIONAL"},usca:{z:5,v:1,sid:8,api:t+".usnat",f:"__usnat",s:"getUSData",c:"uscaconsent",n:"US-CALIFORNIA"},usco:{z:6,v:1,sid:10,api:t+".usnat",f:"__usnat",s:"getUSData",c:"uscoconsent",n:"US-COLORADO"},usct:{z:7,v:1,sid:12,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usctconsent",n:"US-CONNECTICUT"},usva:{z:8,v:1,sid:9,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usvaconsent",n:"US-VIRGINIA"},usut:{z:9,v:1,sid:11,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usutconsent",n:"US-UTAH"}},f=[1,2],p={gppVersion:"1.1",supportedAPIs:Object.keys(d).map((function(e){return d[e].sid+":"+e})),cmpStatus:"stub",cmpDisplayStatus:"disabled",cmpId:229};function g(e){return"function"==typeof e}function v(e){return"string"==typeof e}try{s=localStorage}catch(e){}var m,b,y=e.performance,h=y&&y.now?function(){return Math.floor(y.now())}:function(){return 0};function w(e){if(window.argus){var n=1===e.length&&e[0]instanceof Error?{stack:e[0].stack}:{log:e,stack:(new Error).stack};window.argus.cmd.push((function(){window.argus.queueError("adconsent",n)}))}}!function(){if(g(e.CustomEvent))return!1;function t(e,t){t=t||{bubbles:!1,cancelable:!1,detail:u};var r=n.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r}t.prototype=e.Event.prototype,e.CustomEvent=t}();try{var S=function(n,t,r,o){e.console[n]&&M.level>=t&&console[n].apply(console,function(e,n,t){return e=[].slice.call(e),n&&e.unshift(n),e.unshift("display: inline-block; color: #fff; background: "+t+"; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cAdConsent"),e}(r,n.toUpperCase()+":",o))},C=function(n){return"__gpp"===n?function(t,r,o){e[n](t,o,r,u)}:function(t,r,o){e[n](t,u,o,r)}},E=function(e,n,t){return!n||n===e.version||(j(t,null,!1),z("Wrong framework version detected: "+n),!1)},_=function(e,n,t){var r=Q.applies?u:Q.applies,o={tcString:u,tcfPolicyVersion:4,cmpId:229,cmpVersion:78,gdprApplies:r,eventStatus:!1===r?"tcloaded":u,cmpStatus:Q.status,listenerId:n,isServiceSpecific:!0,useNonStandardStacks:!1,publisherCC:U.publisherCC,purposeOneTreatment:!1};return z("Sending TCData structure:",o,t),j(t,o,!0),o},I=function(e,n,t,r,o){e.queue.push({command:n,version:t,parameter:o,callback:r})},A=function(n){for(var t=Array.isArray(n)?n:(n||"").split("."),r=t.length>1,o=t.length-1,i=t[o],a=e,s=0;s<o&&(a=a[t[s]]);s++);return{r:a,e:i,apiParts:t,api:a?a[i]:u,internal:r}},L=function(t,r){var o=A(t);if(!o.internal){!function t(r){if(!e.frames[r]){var o=n.body;if(o){var i=n.createElement("iframe");i.style.display="none",i.name=r,o.appendChild(i)}else setTimeout(t,5,r)}}(t+"Locator");var i=function(n){var r=n.data,o=v(r);try{var i=(o?JSON.parse(r):r)[t+"Call"];if(i){var a=function(e,r){try{if(n&&n.source&&n.source.postMessage){var a={};a[t+"Return"]={returnValue:e,success:r===u||r,callId:i.callId},n.source.postMessage(o?JSON.stringify(a):a,"*")}}catch(e){}};"__gpp"===t?e[t](i.command,a,i.parameter,i.version):e[t](i.command,i.version,a,i.parameter)}}catch(e){}}}o.r&&!g(o.api)&&(o.r[o.e]=function(e,n,i,a){var s=A(o.apiParts).api;if(!s.queue)return s(e,n,i,a);for(var c in r)if(e===c){var l=!0;return(0,r[c])(s,e,n,i,a)}if(!l)if("__gpp"===t){var f=(e||"none").split("."),p=2===f.length?d[f[0]]:u;if(p){var g=A(p.api);g.internal?g.api(f[1],i,n):g.api(f[1],p.v,n,i)}else G("Unknown "+t+"() API call '"+e+"'")}else o.internal?I(s,e,a,i,n):I(s,e,n,i,a)},o.r[o.e].queue=[],o.internal||(e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i)))},j=function(e,n,t){g(e)&&setTimeout((function(){e(n,t)}),0)},O=function(n,t,r,o,i){if(r||R("setConsentRegion is deprecated and should be only used in debug mode."),J.region===u)if(B[i]){for(var s in d){var c=H[s];c.applies=c.region==i,c.applies?p.currentAPI=s:(c.loaded=!0,c.status="loaded")}J.region=i,p.applicableSections=[p.currentAPI?d[p.currentAPI].sid:-1],V("Configured consent region "+B[i]),function(){if(J.region!==d.tcfeuv2.z&&N.processListeners(_),J.region!==d.uspv1.z){var n=e[a],t=n.queue;if(t){n.queue=[];for(var r=0;r<t.length;r++){var o=t[r];n(o.command,o.version,o.callback,o.parameter)}}}}()}else G("Incorrect consent region "+i)},P=function(e,n){for(var t in x.eventListeners)"id"!==t&&j(x.eventListeners[t],T(e,t,n))},k=function(e,n,t){var r=JSON.parse(JSON.stringify(p));return j(t,r,!0),r},D=function(e,n,t,r){var o=v(r)&&d[r];if(o){var i=A(o.api);return i.internal?i.api(o.s,u,t):i.api(o.s,o.v,t)}return function(e,n,t){return G(t="__gpp() API call '"+e+"': "+t),j(n,{message:t},!1),null}(n,t,"Unknown section '"+r+"'.")},T=function(e,n,t){return{eventName:e,listenerId:Number.parseInt(n),data:t,pingData:k()}},q=C(l);q.gdpr=C(o);var N=q.gdpr;N.listenerId=1,N.tcfListeners=[],N.addEventListener=function(e,n,t){if(E(Q,e,n)){z("Adding event listener "+N.listenerId,n);var r={id:N.listenerId++,callback:n||function(){}};N.tcfListeners.push(r),t(null,r.id,r.callback)}},N.removeEventListener=function(e,n,t,r,o){if(E(Q,t,r)){z("Removing event listener "+o);for(var i=0;i<N.tcfListeners.length;i++)if(N.tcfListeners[i].id==o)return N.tcfListeners.splice(i,1),void j(r,!0);R("Couldn't find listener id "+o+"."),j(r,!1)}},N.getTCData=function(e,n,t,r){if(E(Q,t,r))return _(0,0,r)},N.processListeners=function(e){for(var n=N.tcfListeners.slice(),t=0;t<n.length;t++)e(null,n[t].id,n[t].callback)},q.ccpa=C(a),q.gpp=C("__gpp");var x=q.gpp;x.eventListeners={id:0},x.fibonacciEncode=function(e){var n=function e(n,t){if(t=t||[],!n)return t;for(var r=0;n>=f[r];)++r>=f.length&&f.push(f[r-1]+f[r-2]);return t.push(r),e(n-f[r-1],t)}(e),t="";if(n.length){var r,o=0,i=n[0],a=n[o];t="1";for(var s=i;s>0;s--)r="0",s===a&&(r="1",++o<n.length&&(a=n[o])),t=r+t}return t},x.fibonacciDecode=function(e){var n=0;if(e.length>1)for(var t=0;t<e.length-1;t++)t>=f.length&&f.push(f[t-1]+f[t-2]),"1"===e.charAt(t)&&(n+=f[t]);return n},q.version=78,q.cmpId=229,q.cfg={apiBaseUrl:"https://cdn.snigelweb.com/adconsent/78",publisherCC:"US",storage:0};var U=q.cfg;q.log={levels:{off:0,error:1,warning:2,info:3,debug:4},level:2,error:function(){w(arguments),S("error",1,arguments,"#ff0000")},warn:function(){S("warn",2,arguments,"#ffe600")},info:function(){S("info",3,arguments,"#3b88a3")},debug:function(){S("debug",4,arguments,"#808080")}};var M=q.log,z=M.debug,V=M.info,R=M.warn,G=M.error;q.consent=function(){var e={regions:{0:"NONE"},region:u,api:{}};for(var n in d){var t=d[n];e.regions[t.z]=t.n,e.api[n]={region:t.z,loaded:!1,applies:u,version:t.v,status:"stub"}}return e}();var J=q.consent,B=J.regions,H=J.api,Q=H.tcfeuv2,$=H.uspv1;H.usnat,q.analytics={enabled:!1,callback:u,send:function(e){F.sendEvent(B[J.region],e,h())},sendEvent:function(n,t,r){V("Sending analytics event action"+(F.enabled?"":" disabled")+": "+n+", label: "+t+", value: "+r),F.enabled&&(F.callback||function(n){e.gtag?gtag("event",n.action,{event_category:n.category,event_label:n.label,event_value:n.value}):e.ga?ga("send",{hitType:"event",eventCategory:n.category,eventAction:n.action,eventLabel:n.label,eventValue:n.value,nonInteraction:n.nonInteraction}):R("Unable to find Google Analytics module (gtag or ga).")})({category:"AdConsent",action:n,label:t||n,value:r||0,nonInteraction:!0})}};var F=q.analytics,W=F.send;q.event={fired:{},dispatchCustomEvent:function(e,t,r){r&&X[e]||(X[e]=!0,z("Emitting custom event "+e+" with details: ",t),n.dispatchEvent(new CustomEvent(e,t)))},dispatchCustomEventConsent:function(e,n){var t={0:"N/A",1:"NoConsent",2:"PartialConsent",3:"FullConsent"};W(t[n]),J.region!=d.tcfeuv2.z&&J.region!=d.tcfcav1.z||0==e||W("Publisher"+t[e]),K.dispatchCustomEvent("cmpConsentAvailable",{detail:{consentSummary:{mapping:{0:"not available",1:"no consent",2:"partial consent",3:"full consent"},publisherConsent:e,vendorsConsent:n,gdprApplies:Q.applies,uspApplies:$.applies,currentAPI:p.currentAPI}}})}};var K=q.event,X=K.fired,Y=(b=e.location.search)?b.replace(/^\?/,"").split("&").reduce((function(e,n){var t=n.split("="),r=t[0],o=t.length>1?t[1]:u;return/\[\]$/.test(r)?(e[r=r.replace("[]","")]=e[r]||[],e[r].push(o)):e[r]=o||"",e}),{}):{},Z=("true"==Y.sn_debug?"debug":null)||("true"==Y.adconsent_debug?"debug":null)||Y.adconsent_log;if(M.level=M.levels[Z]||M.level,e[t])return void G("Stub is tried to load again!");if(e[o]||e[a]||e.__gpp)return void R("A cmp is already registered in the system. AdConsent is stopping.");e[t]=q;var ee=!1;L(o,{ping:function(e,n,t,r){var o={gdprApplies:Q.applies,cmpLoaded:Q.loaded,cmpStatus:Q.status,displayStatus:"disabled",apiVersion:"2.0",cmpVersion:78,cmpId:229,gvlVersion:u,tcfPolicyVersion:4};j(r,o,!0)},getTCData:N.getTCData,addEventListener:function(e,n,t,r,o){N.addEventListener(t,r,_)},removeEventListener:N.removeEventListener}),L(a,{getUSPData:function(e,n,t,r,o){if(!1===$.applies){if(E($,t,r)){var i={version:d.uspv1.v,uspString:d.uspv1.v+"---"};return j(r,i,!0),i}}else I(e,n,t,r,o)}}),m=function(t){var r=!0,o=p.cmpStatus;p.cmpStatus="loaded";var i=p.cmpDisplayStatus,a=t.type;if("cmpGUIShow"===a?(p.cmpDisplayStatus="visible",p.signalStatus="not ready",P("signalStatus","not ready"),r=!1):"cmpGUISubmit"===a&&(p.cmpDisplayStatus="hidden",P("sectionChange",p.currentAPI)),i!==p.cmpDisplayStatus?P("cmpDisplayStatus",p.cmpDisplayStatus):"loaded"!==o?P("cmpStatus","loaded"):r=!1,r){var c=function(t){var r={sectionId:3,gppVersion:1,parsedSections:{}},o=function(e,n,t){var r=v(e)?e:Number(e).toString(2);if(n)for(var o=(n-r.length%n)%n,i=0;i<o;i++)t?r+="0":r="0"+r;return r},i={},a=[];for(var c in d){var u=d[c];if(u&&u.c){var l="_sn_"+u.c,f=(s&&s.getItem(l)||"").split("~");if(f&&2===f.length)try{parseInt(f[0])>=(new Date).getTime()?(i[u.sid]=f[1],a.push(u.sid)):s.removeItem(l)}catch(e){}else{var p=("; "+n.cookie).split("; "+u.c+"=");p.length>=2&&(i[u.sid]=p[p.length-1].split(";").shift(),a.push(u.sid))}r.parsedSections[c]=D(0,null,null,c)}}var g="",m="";g+=o(r.sectionId,6),g+=o(r.gppVersion,6),g+=o(a.length,12);var b=0;return r.sectionList=a.sort((function(e,n){return e-n})),r.sectionList.forEach((function(e){g+=o(0,1);var n=e-b;g+=x.fibonacciEncode(n),m+="~"+i[e],b=e})),g=o(g,6,!0),r.gppString=function(n){for(var t=o(n,8,!0),r="",i=0;i<t.length;i+=8)r+=String.fromCharCode(parseInt(t.substr(i,8),2));return e.btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"")}(g)+m,r}();p.signalStatus="ready",p.sectionList=c.sectionList,p.gppString=c.gppString,p.parsedSections=c.parsedSections,P("signalStatus","ready")}},n.addEventListener("cmpGUIShow",m),n.addEventListener("cmpGUISubmit",m),n.addEventListener("cmpConsentAvailable",m),L(d.tcfcav1.api,{}),L(d.usnat.api,{}),L(l,{start:function t(r,o,i,a,c){if(J.region!==u){if(!ee)if(ee=!0,0==J.region)K.dispatchCustomEventConsent(3,3);else if(p.currentAPI){var l=n.createElement("script");l.type="text/javascript",l.async=!0,l.charset="utf-8",l.src=q.cfg.apiBaseUrl+"/adconsent"+d[p.currentAPI].f+".js",n.head.appendChild(l)}}else!function(n,t){if((!n||!n.country)&&(n=null,s)){var r=s.getItem("snconsent_geo");if(r){var o=s.getItem("snconsent_geo_exp");if(o)try{parseInt(o)>=(new Date).getTime()&&(n=JSON.parse(e.atob(r)))}catch(e){}}}if(n)t(n);else{var i=new XMLHttpRequest;i.open("GET","https://pro.ip-api.com/json/?fields=24582&key=33arzTfj1gigDqW"),i.timeout=5e3,i.onload=function(){var n=i.responseText.toLowerCase(),r=JSON.parse(n);r={country:r.countrycode,region:r.region},s&&(s.setItem("snconsent_geo",e.btoa(JSON.stringify(r))),s.setItem("snconsent_geo_exp",(new Date).getTime()+36e5)),t(r)},i.onerror=i.ontimeout=function(){t(null)},i.send()}}(c,(function(e){if(e&&(U.country=e.country?e.country.toLowerCase():null,U.region=(e.region||"").toLowerCase()),"us"===U.country)switch(U.region){case"ca":O(0,0,1,0,d.uspv1.z);break;default:O(0,0,1,0,0)}else-1!=="at be bg hr cy cz dk ee fi fr de gr hu is ie it lv li lt lu mt nl no pl pt ro sk si es se gb".indexOf(U.country)?O(0,0,1,0,d.tcfeuv2.z):(U.country||(W("ErrorGeotargeting"),G("Geotargeting failed")),O(0,0,1,0,0));t()}))},setStorageType:function(e,n,t,r,o){0!==o&&1!==o?j(r,{message:"Invalid storage type: should be 0 (cookie) or 1 (local storage)."},!1):1!==o||s?(U.storage=o,j(r,null,!0)):j(r,{message:"Storage type 'localStorage' was selected, but local storage is not available. Reverting to cookie storage."},!1)},setPublisherCC:function(e,n,t,r,o){v(o)&&2==o.length?(U.publisherCC=o.toUpperCase(),j(r,null,!0)):j(r,{message:"Invalid publisher country code detected. Ignoring call."},!1)},setConsentRegion:O,enableGoogleAnalytics:function(e,n,t,r,o){F.enabled=o===u||!!o,F.callback=r}})}catch(e){if(w(e),c&&c.passThroughException)throw e;console.error(e)}}(window,document,"adconsent",0,"__tcfapi",0,"__uspapi")}]);