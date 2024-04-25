import{as as qe,e as je,g as xe,r as y,o as Z,c as Se,w as _,a as h,b as q,f as fe,i as Ae,F as Ce,t as Ne,d as Te}from"./index-43f158f4.js";import{_ as ke}from"./BaseLeftRightPart.vue_vue_type_style_index_0_lang-52376ca7.js";const Ie="/assets/algolia-2b075c21.png";var me={exports:{}};/*! algoliasearch-lite.umd.js | 4.14.2 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */(function(ee,te){(function(U,J){ee.exports=J()})(qe,function(){function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?J(Object(r),!0).forEach(function(n){U(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function W(e,t){if(e==null)return{};var r,n,a=function(s,c){if(s==null)return{};var l,m,p={},b=Object.keys(s);for(m=0;m<b.length;m++)l=b[m],c.indexOf(l)>=0||(p[l]=s[l]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function C(e,t){return function(r){if(Array.isArray(r))return r}(e)||function(r,n){if(Symbol.iterator in Object(r)||Object.prototype.toString.call(r)==="[object Arguments]"){var a=[],o=!0,s=!1,c=void 0;try{for(var l,m=r[Symbol.iterator]();!(o=(l=m.next()).done)&&(a.push(l.value),!n||a.length!==n);o=!0);}catch(p){s=!0,c=p}finally{try{o||m.return==null||m.return()}finally{if(s)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function T(e){return function(t){if(Array.isArray(t)){for(var r=0,n=new Array(t.length);r<t.length;r++)n[r]=t[r];return n}}(e)||function(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function K(e){var t,r="algoliasearch-client-js-".concat(e.key),n=function(){return t===void 0&&(t=e.localStorage||window.localStorage),t},a=function(){return JSON.parse(n().getItem(r)||"{}")};return{get:function(o,s){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then(function(){var l=JSON.stringify(o),m=a()[l];return Promise.all([m||s(),m!==void 0])}).then(function(l){var m=C(l,2),p=m[0],b=m[1];return Promise.all([p,b||c.miss(p)])}).then(function(l){return C(l,1)[0]})},set:function(o,s){return Promise.resolve().then(function(){var c=a();return c[JSON.stringify(o)]=s,n().setItem(r,JSON.stringify(c)),s})},delete:function(o){return Promise.resolve().then(function(){var s=a();delete s[JSON.stringify(o)],n().setItem(r,JSON.stringify(s))})},clear:function(){return Promise.resolve().then(function(){n().removeItem(r)})}}}function N(e){var t=T(e.caches),r=t.shift();return r===void 0?{get:function(n,a){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},s=a();return s.then(function(c){return Promise.all([c,o.miss(c)])}).then(function(c){return C(c,1)[0]})},set:function(n,a){return Promise.resolve(a)},delete:function(n){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(n,a){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(n,a,o).catch(function(){return N({caches:t}).get(n,a,o)})},set:function(n,a){return r.set(n,a).catch(function(){return N({caches:t}).set(n,a)})},delete:function(n){return r.delete(n).catch(function(){return N({caches:t}).delete(n)})},clear:function(){return r.clear().catch(function(){return N({caches:t}).clear()})}}}function F(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},o=JSON.stringify(r);if(o in t)return Promise.resolve(e.serializable?JSON.parse(t[o]):t[o]);var s=n(),c=a&&a.miss||function(){return Promise.resolve()};return s.then(function(l){return c(l)}).then(function(){return s})},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(r){return delete t[JSON.stringify(r)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function H(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function R(e,t){return t&&Object.keys(t).forEach(function(r){e[r]=t[r](e)}),e}function k(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=0;return e.replace(/%s/g,function(){return encodeURIComponent(r[a++])})}var I={WithinQueryParameters:0,WithinHeaders:1};function L(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach(function(a){["timeout","headers","queryParameters","data","cacheable"].indexOf(a)===-1&&(n[a]=r[a])}),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var x={Read:1,Write:2,Any:3},Q=1,X=2,V=3;function $(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Q;return u(u({},e),{},{status:t,lastUpdate:Date.now()})}function S(e){return typeof e=="string"?{protocol:"https",url:e,accept:x.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||x.Any}}var B="GET",M="POST";function de(e,t){return Promise.all(t.map(function(r){return e.get(r,function(){return Promise.resolve($(r))})})).then(function(r){var n=r.filter(function(s){return function(c){return c.status===Q||Date.now()-c.lastUpdate>12e4}(s)}),a=r.filter(function(s){return function(c){return c.status===V&&Date.now()-c.lastUpdate<=12e4}(s)}),o=[].concat(T(n),T(a));return{getTimeout:function(s,c){return(a.length===0&&s===0?1:a.length+3+s)*c},statelessHosts:o.length>0?o.map(function(s){return S(s)}):t}})}function re(e,t,r,n){var a=[],o=function(g,P){if(!(g.method===B||g.data===void 0&&P.data===void 0)){var f=Array.isArray(g.data)?g.data:u(u({},g.data),P.data);return JSON.stringify(f)}}(r,n),s=function(g,P){var f=u(u({},g.headers),P.headers),v={};return Object.keys(f).forEach(function(j){var O=f[j];v[j.toLowerCase()]=O}),v}(e,n),c=r.method,l=r.method!==B?{}:u(u({},r.data),n.data),m=u(u(u({"x-algolia-agent":e.userAgent.value},e.queryParameters),l),n.queryParameters),p=0,b=function g(P,f){var v=P.pop();if(v===void 0)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:ae(a)};var j={data:o,headers:s,method:c,url:pe(v,r.path,m),connectTimeout:f(p,e.timeouts.connect),responseTimeout:f(p,n.timeout)},O=function(d){var i={request:j,response:d,host:v,triesLeft:P.length};return a.push(i),i},z={onSuccess:function(d){return function(i){try{return JSON.parse(i.content)}catch(w){throw function(A,E){return{name:"DeserializationError",message:A,response:E}}(w.message,i)}}(d)},onRetry:function(d){var i=O(d);return d.isTimedOut&&p++,Promise.all([e.logger.info("Retryable failure",oe(i)),e.hostsCache.set(v,$(v,d.isTimedOut?V:X))]).then(function(){return g(P,f)})},onFail:function(d){throw O(d),function(i,w){var A=i.content,E=i.status,D=A;try{D=JSON.parse(A).message}catch{}return function(G,Y,we){return{name:"ApiError",message:G,status:Y,transporterStackTrace:we}}(D,E,w)}(d,ae(a))}};return e.requester.send(j).then(function(d){return function(i,w){return function(A){var E=A.status;return A.isTimedOut||function(D){var G=D.isTimedOut,Y=D.status;return!G&&~~Y==0}(A)||~~(E/100)!=2&&~~(E/100)!=4}(i)?w.onRetry(i):~~(i.status/100)==2?w.onSuccess(i):w.onFail(i)}(d,z)})};return de(e.hostsCache,t).then(function(g){return b(T(g.statelessHosts).reverse(),g.getTimeout)})}function he(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(r){var n="; ".concat(r.segment).concat(r.version!==void 0?" (".concat(r.version,")"):"");return t.value.indexOf(n)===-1&&(t.value="".concat(t.value).concat(n)),t}};return t}function pe(e,t,r){var n=ne(r),a="".concat(e.protocol,"://").concat(e.url,"/").concat(t.charAt(0)==="/"?t.substr(1):t);return n.length&&(a+="?".concat(n)),a}function ne(e){return Object.keys(e).map(function(t){return k("%s=%s",t,(r=e[t],Object.prototype.toString.call(r)==="[object Object]"||Object.prototype.toString.call(r)==="[object Array]"?JSON.stringify(e[t]):e[t]));var r}).join("&")}function ae(e){return e.map(function(t){return oe(t)})}function oe(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return u(u({},e),{},{request:u(u({},e.request),{},{headers:u(u({},e.request.headers),t)})})}var ge=function(e){var t=e.appId,r=function(a,o,s){var c={"x-algolia-api-key":s,"x-algolia-application-id":o};return{headers:function(){return a===I.WithinHeaders?c:{}},queryParameters:function(){return a===I.WithinQueryParameters?c:{}}}}(e.authMode!==void 0?e.authMode:I.WithinHeaders,t,e.apiKey),n=function(a){var o=a.hostsCache,s=a.logger,c=a.requester,l=a.requestsCache,m=a.responsesCache,p=a.timeouts,b=a.userAgent,g=a.hosts,P=a.queryParameters,f={hostsCache:o,logger:s,requester:c,requestsCache:l,responsesCache:m,timeouts:p,userAgent:b,headers:a.headers,queryParameters:P,hosts:g.map(function(v){return S(v)}),read:function(v,j){var O=L(j,f.timeouts.read),z=function(){return re(f,f.hosts.filter(function(i){return(i.accept&x.Read)!=0}),v,O)};if((O.cacheable!==void 0?O.cacheable:v.cacheable)!==!0)return z();var d={request:v,mappedRequestOptions:O,transporter:{queryParameters:f.queryParameters,headers:f.headers}};return f.responsesCache.get(d,function(){return f.requestsCache.get(d,function(){return f.requestsCache.set(d,z()).then(function(i){return Promise.all([f.requestsCache.delete(d),i])},function(i){return Promise.all([f.requestsCache.delete(d),Promise.reject(i)])}).then(function(i){var w=C(i,2);return w[0],w[1]})})},{miss:function(i){return f.responsesCache.set(d,i)}})},write:function(v,j){return re(f,f.hosts.filter(function(O){return(O.accept&x.Write)!=0}),v,L(j,f.timeouts.write))}};return f}(u(u({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:x.Read},{url:"".concat(t,".algolia.net"),accept:x.Write}].concat(H([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:u(u(u({},r.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:u(u({},r.queryParameters()),e.queryParameters)}));return R({transporter:n,appId:t,addAlgoliaAgent:function(a,o){n.userAgent.add({segment:a,version:o})},clearCache:function(){return Promise.all([n.requestsCache.clear(),n.responsesCache.clear()]).then(function(){})}},e.methods)},ve=function(e){return function(t,r){return t.method===B?e.transporter.read(t,r):e.transporter.write(t,r)}},se=function(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return R(n,r.methods)}},ce=function(e){return function(t,r){var n=t.map(function(a){return u(u({},a),{},{params:ne(a.params||{})})});return e.transporter.read({method:M,path:"1/indexes/*/queries",data:{requests:n},cacheable:!0},r)}},ue=function(e){return function(t,r){return Promise.all(t.map(function(n){var a=n.params,o=a.facetName,s=a.facetQuery,c=W(a,["facetName","facetQuery"]);return se(e)(n.indexName,{methods:{searchForFacetValues:ie}}).searchForFacetValues(o,s,u(u({},r),c))}))}},ye=function(e){return function(t,r,n){return e.transporter.read({method:M,path:k("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n)}},_e=function(e){return function(t,r){return e.transporter.read({method:M,path:k("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},ie=function(e){return function(t,r,n){return e.transporter.read({method:M,path:k("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},be=1,Oe=2,Pe=3;function le(e,t,r){var n,a={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(o){return new Promise(function(s){var c=new XMLHttpRequest;c.open(o.method,o.url,!0),Object.keys(o.headers).forEach(function(b){return c.setRequestHeader(b,o.headers[b])});var l,m=function(b,g){return setTimeout(function(){c.abort(),s({status:0,content:g,isTimedOut:!0})},1e3*b)},p=m(o.connectTimeout,"Connection timeout");c.onreadystatechange=function(){c.readyState>c.OPENED&&l===void 0&&(clearTimeout(p),l=m(o.responseTimeout,"Socket timeout"))},c.onerror=function(){c.status===0&&(clearTimeout(p),clearTimeout(l),s({content:c.responseText||"Network request failed",status:c.status,isTimedOut:!1}))},c.onload=function(){clearTimeout(p),clearTimeout(l),s({content:c.responseText,status:c.status,isTimedOut:!1})},c.send(o.data)})}},logger:(n=Pe,{debug:function(o,s){return be>=n&&console.debug(o,s),Promise.resolve()},info:function(o,s){return Oe>=n&&console.info(o,s),Promise.resolve()},error:function(o,s){return console.error(o,s),Promise.resolve()}}),responsesCache:F(),requestsCache:F({serializable:!1}),hostsCache:N({caches:[K({key:"".concat("4.14.2","-").concat(e)}),F()]}),userAgent:he("4.14.2").add({segment:"Browser",version:"lite"}),authMode:I.WithinQueryParameters};return ge(u(u(u({},a),r),{},{methods:{search:ce,searchForFacetValues:ue,multipleQueries:ce,multipleSearchForFacetValues:ue,customRequest:ve,initIndex:function(o){return function(s){return se(o)(s,{methods:{search:_e,searchForFacetValues:ie,findAnswers:ye}})}}}}))}return le.version="4.14.2",le})})(me);const Ee=me.exports,Je=q("h2",{class:"subtitle-1 font-weight-medium"},"Brands",-1),Fe=q("h2",{class:"subtitle-1 font-weight-medium mt-5 border-top pt-5"}," Price sort ",-1),Re=q("div",{class:"text-center mt-5"},[q("img",{src:Ie,width:"100"})],-1),De={class:"pa-4"},We={class:"pa-5"},He={class:"v-row"},Le={class:"product-img"},Qe=["src","alt"],Be=je({__name:"Listing",setup(ee){const te=xe(Ee("B1G2GM9NG0","aadef574be1f9252bb48d4ea09b5cfe5"));return(U,J)=>{const u=y("ais-clear-refinements"),W=y("v-btn"),C=y("v-card-text"),T=y("ais-refinement-list"),K=y("ais-numeric-menu"),N=y("ais-configure"),F=y("ais-search-box"),H=y("v-col"),R=y("v-row"),k=y("v-divider"),I=y("ais-hits"),L=y("perfect-scrollbar"),x=y("ais-pagination"),Q=y("ais-instant-search"),X=y("v-card");return Z(),Se(X,{class:"contact-app"},{default:_(()=>[h(Q,{"index-name":"demo_ecommerce","search-client":te.value},{default:_(()=>[h(ke,null,{leftpart:_(()=>[h(C,{class:"border-bottom pa-4"},{default:_(()=>[h(W,{block:"",depressed:"",color:"primary",dark:""},{default:_(()=>[h(u)]),_:1})]),_:1}),h(C,null,{default:_(()=>[Je,h(T,{attribute:"brand",class:"mt-3",searchable:""}),Fe,h(K,{attribute:"price",items:[{label:"All"},{label:"<= 10$",end:10},{label:"10$ - 100$",start:10,end:100},{label:"100$ - 500$",start:100,end:500},{label:">= 500$",start:500}]}),h(N,{hitsPerPage:12})]),_:1}),Re]),rightpart:_(()=>[q("div",De,[h(R,null,{default:_(()=>[h(H,{lg:"6"},{default:_(()=>[h(F)]),_:1})]),_:1})]),h(k),q("div",We,[h(R,null,{default:_(()=>[h(H,{cols:"12"},{default:_(()=>[h(L,{class:"listbox"},{default:_(()=>[h(I,null,{default:_(({items:V,sendEvent:$})=>[q("div",He,[(Z(!0),fe(Ce,null,Ae(V,S=>(Z(),fe("div",{key:S.objectID,class:"v-col-4"},[q("div",Le,[q("img",{src:S.image,alt:S.name,class:""},null,8,Qe)]),q("h4",null,Ne(S.name),1),h(W,{class:"mt-2",color:"secondary",onClick:B=>$("click",S,"Item Added")},{default:_(()=>[Te(" Add to cart ")]),_:2},1032,["onClick"])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),h(x)])]),_:1})]),_:1},8,["search-client"])]),_:1})}}});export{Be as default};
