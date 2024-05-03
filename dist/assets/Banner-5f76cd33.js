import{_ as S}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-7651e687.js";import{_ as m}from"./BaseCard.vue_vue_type_script_setup_true_lang-83be1f68.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{r as n,o as _,f as d,b as c,a as t,w as e,d as o,e as v,g as p,F as I}from"./index-c3d8a0a1.js";const A={},V=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," The prop lines can be used to specify how the displayed text should be handled based on its length. ",-1),C={class:"mt-6"};function T(u,r){const a=n("v-banner-text"),s=n("v-btn"),i=n("v-banner");return _(),d("div",null,[V,c("div",C,[t(i,{lines:"one",icon:"mdi-lock",color:"primary",class:"my-3"},{actions:e(()=>[t(s,null,{default:e(()=>[o("Action")]),_:1})]),default:e(()=>[t(a,null,{default:e(()=>[o(" Banner with one line of text. ")]),_:1})]),_:1}),t(i,{lines:"two",icon:"mdi-weather-hurricane",color:"secondary",class:"my-3"},{actions:e(()=>[t(s,{color:"secondary"},{default:e(()=>[o("Action")]),_:1})]),default:e(()=>[t(a,null,{default:e(()=>[o(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1})]),_:1}),t(i,{lines:"three",icon:"$warning",color:"warning",class:"my-3"},{actions:e(()=>[t(s,{color:"warning"},{default:e(()=>[o("Action")]),_:1})]),default:e(()=>[t(a,null,{default:e(()=>[o(" Banner with three lines of text. One or two lines is preferable. Three lines should be considered the absolute maximum length on desktop in order to keep messages short and actionable. ")]),_:1})]),_:1})])])}const N=f(A,[["render",T]]),D=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can optionally turn on the sticky prop to ensure that the content is pinned to the top of the screen. ",-1),E={class:"mt-6"},F=v({__name:"BannerSticky",setup(u){const r=p(!1);return(a,s)=>{const i=n("v-toolbar-title"),l=n("v-spacer"),h=n("v-switch"),b=n("v-toolbar"),x=n("v-btn"),y=n("v-banner"),w=n("v-sheet"),g=n("v-card-text"),B=n("v-footer"),$=n("v-card");return _(),d("div",null,[D,c("div",E,[t($,{class:"overflow-auto mx-auto","max-height":"300",width:"448"},{default:e(()=>[t(b,{color:"primary"},{default:e(()=>[t(i,null,{default:e(()=>[o("My Document")]),_:1}),t(l),c("div",null,[t(h,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=k=>r.value=k),label:"Sticky Banner","hide-details":""},null,8,["modelValue"])])]),_:1}),t(y,{sticky:r.value,lines:"one"},{text:e(()=>[o(" We can't save your edits while you are in offline mode. ")]),actions:e(()=>[t(x,{color:"secondary"},{default:e(()=>[o(" Go Online ")]),_:1})]),_:1},8,["sticky"]),t(g,{class:"bg-grey-lighten-4"},{default:e(()=>[t(w,{class:"mx-auto",height:"300"})]),_:1}),t(B,{class:"justify-center",color:"primary"},{default:e(()=>[o(" End of Content ")]),_:1})]),_:1})])])}}}),L={},O=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," Banners may have one or two text buttons that don’t stand out that much. ",-1),P={class:"mt-6"};function U(u,r){const a=n("v-btn"),s=n("v-banner");return _(),d("div",null,[O,c("div",P,[t(s,{lines:"one",icon:"mdi-wifi-strength-alert-outline",color:"warning"},{text:e(()=>[o(" No Internet connection ")]),actions:e(()=>[t(a,{color:"error"},{default:e(()=>[o(" Dismiss ")]),_:1}),t(a,{color:"secondary"},{default:e(()=>[o(" Retry ")]),_:1})]),_:1})])])}const j=f(L,[["render",U]]),z={},G=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," The icon slot allows you to to explicitly control the content and functionality within it. ",-1),M={class:"mt-6"};function R(u,r){const a=n("v-banner-text"),s=n("v-btn"),i=n("v-banner-actions"),l=n("v-banner");return _(),d("div",null,[G,c("div",M,[t(l,{lines:"one",color:"secondary",icon:"mdi-account-box"},{default:e(()=>[t(a,null,{default:e(()=>[o(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1}),t(i,null,{default:e(()=>[t(s,{color:"secondary"},{default:e(()=>[o("Action Button")]),_:1})]),_:1})]),_:1})])])}const W=f(z,[["render",R]]),Y={},q=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," The prepend slot allows you to to explicitly control the content and functionality within it. Icons also help to emphasize a banner’s message. ",-1),H={class:"mt-6"};function J(u,r){const a=n("v-banner-text"),s=n("v-btn"),i=n("v-banner-actions"),l=n("v-banner");return _(),d("div",null,[q,c("div",H,[t(l,{lines:"two",color:"secondary",icon:"mdi-account-filter"},{default:e(()=>[t(a,null,{default:e(()=>[o(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1}),t(i,null,{default:e(()=>[t(s,{variant:"text",color:"secondary"},{default:e(()=>[o("Action")]),_:1}),t(s,{variant:"text",color:"secondary"},{default:e(()=>[o("Action")]),_:1})]),_:1})]),_:1})])])}const K=f(Y,[["render",J]]),et=v({__name:"Banner",setup(u){const r=p({title:"Banner"}),a=p([{text:"Ui Components",disabled:!1,to:"#"},{text:"Banner",disabled:!0}]);return(s,i)=>{const l=n("v-col"),h=n("v-row");return _(),d(I,null,[t(S,{title:r.value.title,breadcrumbs:a.value},null,8,["title","breadcrumbs"]),t(h,null,{default:e(()=>[t(l,{cols:"12",sm:"12"},{default:e(()=>[t(m,{heading:"Banner - Lines"},{default:e(()=>[t(N)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12"},{default:e(()=>[t(m,{heading:"Banner - Sticky"},{default:e(()=>[t(F)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12"},{default:e(()=>[t(m,{heading:"Banner - Slots"},{default:e(()=>[t(j)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12"},{default:e(()=>[t(m,{heading:"Banner - Icon"},{default:e(()=>[t(W)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12"},{default:e(()=>[t(m,{heading:"Banner - Prepand"},{default:e(()=>[t(K)]),_:1})]),_:1})]),_:1})],64)}}});export{et as default};
