import{_ as r,e as v,g as u,r as l,o as _,f as p,j as a,b as i,a as t,F as m,w as o}from"./index-0b78272f.js";import{B as P}from"./BaseBreadcrumb-329ddf8f.js";import{B as f}from"./BaseCard-821771b2.js";const V=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop allows you to render pagination buttons with alternative styles. ",-1),y={class:"text-center mt-6"},w=v({__name:"PaginationRounded",setup(g){const e=u(1);return(d,s)=>{const c=l("v-pagination");return _(),p(m,null,[a(" ----------------------------------------------------------------------------- "),a(" Rounded "),a(" ----------------------------------------------------------------------------- "),V,i("div",y,[t(c,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=n=>e.value=n),length:4,rounded:"circle"},null,8,["modelValue"]),t(c,{modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=n=>e.value=n),length:4,rounded:"0"},null,8,["modelValue"])])],64)}}}),C=r(w,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/pagination/PaginationRounded.vue"]]),$={},D=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Pagination items can be manually deactivated using the disabled prop. ",-1),B={class:"text-center mt-6"};function j(g,e){const d=l("v-pagination");return _(),p(m,null,[a(" ----------------------------------------------------------------------------- "),a(" Disabled "),a(" ----------------------------------------------------------------------------- "),D,i("div",B,[t(d,{length:3,disabled:""})])],64)}const k=r($,[["render",j],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/pagination/PaginationDisabled.vue"]]),T=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Previous and next page icons can be customized with the prev-icon and next-icon props. ",-1),U={class:"text-center mt-6"},I=v({__name:"PaginationIcons",setup(g){const e=u(1);return(d,s)=>{const c=l("v-pagination");return _(),p(m,null,[a(" ----------------------------------------------------------------------------- "),a(" Icons "),a(" ----------------------------------------------------------------------------- "),T,i("div",U,[t(c,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=n=>e.value=n),length:4,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue"])])],64)}}}),L=r(I,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/pagination/PaginationIcons.vue"]]),R=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the length prop you can set the length of v-pagination, if the number of page buttons exceeds the parent container, it will truncate the list. ",-1),N={class:"text-center mt-6"},F=v({__name:"PaginationLength",setup(g){const e=u(1);return(d,s)=>{const c=l("v-pagination"),n=l("v-container"),h=l("v-col"),x=l("v-row");return _(),p(m,null,[a(" ----------------------------------------------------------------------------- "),a(" Length "),a(" ----------------------------------------------------------------------------- "),R,i("div",N,[t(x,{justify:"center"},{default:o(()=>[t(h,{cols:"12"},{default:o(()=>[t(n,{class:"max-width"},{default:o(()=>[t(c,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=b=>e.value=b),length:15},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])],64)}}}),z=r(F,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/pagination/PaginationLength.vue"]]),E=v({__name:"Pagination",setup(g){const e=u({title:"Pagination"}),d=u([{text:"Ui Components",disabled:!1,to:"#"},{text:"Pagination",disabled:!0}]);return(s,c)=>{const n=l("v-col"),h=l("v-row");return _(),p(m,null,[t(P,{title:e.value.title,breadcrumbs:d.value},null,8,["title","breadcrumbs"]),t(h,null,{default:o(()=>[t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(f,{heading:"Rounded"},{default:o(()=>[t(C)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(f,{heading:"Disabled"},{default:o(()=>[t(k)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(f,{heading:"Icons"},{default:o(()=>[t(L)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(f,{heading:"Length"},{default:o(()=>[t(z)]),_:1})]),_:1})]),_:1})],64)}}}),H=r(E,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Pagination.vue"]]);export{H as default};
