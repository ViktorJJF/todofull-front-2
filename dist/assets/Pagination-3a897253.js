import{_ as x}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-a2c56a64.js";import{_ as p}from"./BaseCard.vue_vue_type_script_setup_true_lang-5bbdf108.js";import{f as g,h as _,r as s,o as r,g as d,b as l,a as e,F as u,w as a}from"./index-14e84a03.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const V=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop allows you to render pagination buttons with alternative styles. ",-1),$={class:"text-center mt-6"},w=g({__name:"PaginationRounded",setup(m){const t=_(1);return(c,o)=>{const i=s("v-pagination");return r(),d(u,null,[V,l("div",$,[e(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),length:4,rounded:"circle"},null,8,["modelValue"]),e(i,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=n=>t.value=n),length:4,rounded:"0"},null,8,["modelValue"])])],64)}}}),y={},P=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," Pagination items can be manually deactivated using the disabled prop. ",-1),k={class:"text-center mt-6"};function U(m,t){const c=s("v-pagination");return r(),d(u,null,[P,l("div",k,[e(c,{length:3,disabled:""})])],64)}const C=b(y,[["render",U]]),B=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," Previous and next page icons can be customized with the prev-icon and next-icon props. ",-1),D={class:"text-center mt-6"},F=g({__name:"PaginationIcons",setup(m){const t=_(1);return(c,o)=>{const i=s("v-pagination");return r(),d(u,null,[B,l("div",D,[e(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),length:4,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue"])])],64)}}}),I=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the length prop you can set the length of v-pagination, if the number of page buttons exceeds the parent container, it will truncate the list. ",-1),L={class:"text-center mt-6"},N=g({__name:"PaginationLength",setup(m){const t=_(1);return(c,o)=>{const i=s("v-pagination"),n=s("v-container"),f=s("v-col"),v=s("v-row");return r(),d(u,null,[I,l("div",L,[e(v,{justify:"center"},{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(n,{class:"max-width"},{default:a(()=>[e(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=h=>t.value=h),length:15},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])],64)}}}),T=g({__name:"Pagination",setup(m){const t=_({title:"Pagination"}),c=_([{text:"Ui Components",disabled:!1,to:"#"},{text:"Pagination",disabled:!0}]);return(o,i)=>{const n=s("v-col"),f=s("v-row");return r(),d(u,null,[e(x,{title:t.value.title,breadcrumbs:c.value},null,8,["title","breadcrumbs"]),e(f,null,{default:a(()=>[e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Rounded"},{default:a(()=>[e(w)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Disabled"},{default:a(()=>[e(C)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Icons"},{default:a(()=>[e(F)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Length"},{default:a(()=>[e(N)]),_:1})]),_:1})]),_:1})],64)}}});export{T as default};
