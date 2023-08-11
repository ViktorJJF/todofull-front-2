import{_ as S}from"./BaseBreadcrumb.c378a3ec.js";import{_ as m}from"./BaseCard.802f9fad.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{r as n,o as _,f as d,b as c,a as t,w as e,d as o,e as v,g as p,F as I}from"./index.5144a4a6.js";const A={},V=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," The prop lines can be used to specify how the displayed text should be handled based on its length. ",-1),C={class:"mt-6"};function T(u,r){const s=n("v-banner-text"),a=n("v-btn"),i=n("v-banner");return _(),d("div",null,[V,c("div",C,[t(i,{lines:"one",icon:"mdi-lock",color:"primary",class:"my-3"},{actions:e(()=>[t(a,null,{default:e(()=>[o("Action")]),_:1})]),default:e(()=>[t(s,null,{default:e(()=>[o(" Banner with one line of text. ")]),_:1})]),_:1}),t(i,{lines:"two",icon:"mdi-weather-hurricane",color:"secondary",class:"my-3"},{actions:e(()=>[t(a,{color:"secondary"},{default:e(()=>[o("Action")]),_:1})]),default:e(()=>[t(s,null,{default:e(()=>[o(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1})]),_:1}),t(i,{lines:"three",icon:"$warning",color:"warning",class:"my-3"},{actions:e(()=>[t(a,{color:"warning"},{default:e(()=>[o("Action")]),_:1})]),default:e(()=>[t(s,null,{default:e(()=>[o(" Banner with three lines of text. One or two lines is preferable. Three lines should be considered the absolute maximum length on desktop in order to keep messages short and actionable. ")]),_:1})]),_:1})])])}var N=f(A,[["render",T]]);const D=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can optionally turn on the sticky prop to ensure that the content is pinned to the top of the screen. ",-1),E={class:"mt-6"},F=v({__name:"BannerSticky",setup(u){const r=p(!1);return(s,a)=>{const i=n("v-toolbar-title"),l=n("v-spacer"),h=n("v-switch"),b=n("v-toolbar"),x=n("v-btn"),y=n("v-banner"),w=n("v-sheet"),g=n("v-card-text"),B=n("v-footer"),$=n("v-card");return _(),d("div",null,[D,c("div",E,[t($,{class:"overflow-auto mx-auto","max-height":"300",width:"448"},{default:e(()=>[t(b,{color:"primary"},{default:e(()=>[t(i,null,{default:e(()=>[o("My Document")]),_:1}),t(l),c("div",null,[t(h,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=k=>r.value=k),label:"Sticky Banner","hide-details":""},null,8,["modelValue"])])]),_:1}),t(y,{sticky:r.value,lines:"one"},{text:e(()=>[o(" We can't save your edits while you are in offline mode. ")]),actions:e(()=>[t(x,{color:"secondary"},{default:e(()=>[o(" Go Online ")]),_:1})]),_:1},8,["sticky"]),t(g,{class:"bg-grey-lighten-4"},{default:e(()=>[t(w,{class:"mx-auto",height:"300"})]),_:1}),t(B,{class:"justify-center",color:"primary"},{default:e(()=>[o(" End of Content ")]),_:1})]),_:1})])])}}}),L={},O=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," Banners may have one or two text buttons that don\u2019t stand out that much. ",-1),P={class:"mt-6"};function U(u,r){const s=n("v-btn"),a=n("v-banner");return _(),d("div",null,[O,c("div",P,[t(a,{lines:"one",icon:"mdi-wifi-strength-alert-outline",color:"warning"},{text:e(()=>[o(" No Internet connection ")]),actions:e(()=>[t(s,{color:"error"},{default:e(()=>[o(" Dismiss ")]),_:1}),t(s,{color:"secondary"},{default:e(()=>[o(" Retry ")]),_:1})]),_:1})])])}var j=f(L,[["render",U]]);const z={},G=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," The icon slot allows you to to explicitly control the content and functionality within it. ",-1),M={class:"mt-6"};function R(u,r){const s=n("v-banner-text"),a=n("v-btn"),i=n("v-banner-actions"),l=n("v-banner");return _(),d("div",null,[G,c("div",M,[t(l,{lines:"one",color:"secondary",icon:"mdi-account-box"},{default:e(()=>[t(s,null,{default:e(()=>[o(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1}),t(i,null,{default:e(()=>[t(a,{color:"secondary"},{default:e(()=>[o("Action Button")]),_:1})]),_:1})]),_:1})])])}var W=f(z,[["render",R]]);const Y={},q=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," The prepend slot allows you to to explicitly control the content and functionality within it. Icons also help to emphasize a banner\u2019s message. ",-1),H={class:"mt-6"};function J(u,r){const s=n("v-banner-text"),a=n("v-btn"),i=n("v-banner-actions"),l=n("v-banner");return _(),d("div",null,[q,c("div",H,[t(l,{lines:"two",color:"secondary",icon:"mdi-account-filter"},{default:e(()=>[t(s,null,{default:e(()=>[o(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1}),t(i,null,{default:e(()=>[t(a,{variant:"text",color:"secondary"},{default:e(()=>[o("Action")]),_:1}),t(a,{variant:"text",color:"secondary"},{default:e(()=>[o("Action")]),_:1})]),_:1})]),_:1})])])}var K=f(Y,[["render",J]]);const et=v({__name:"Banner",setup(u){const r=p({title:"Banner"}),s=p([{text:"Ui Components",disabled:!1,to:"#"},{text:"Banner",disabled:!0}]);return(a,i)=>{const l=n("v-col"),h=n("v-row");return _(),d(I,null,[t(S,{title:r.value.title,breadcrumbs:s.value},null,8,["title","breadcrumbs"]),t(h,null,{default:e(()=>[t(l,{cols:"12",sm:"12"},{default:e(()=>[t(m,{heading:"Banner - Lines"},{default:e(()=>[t(N)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12"},{default:e(()=>[t(m,{heading:"Banner - Sticky"},{default:e(()=>[t(F)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12"},{default:e(()=>[t(m,{heading:"Banner - Slots"},{default:e(()=>[t(j)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12"},{default:e(()=>[t(m,{heading:"Banner - Icon"},{default:e(()=>[t(W)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12"},{default:e(()=>[t(m,{heading:"Banner - Prepand"},{default:e(()=>[t(K)]),_:1})]),_:1})]),_:1})],64)}}});export{et as default};