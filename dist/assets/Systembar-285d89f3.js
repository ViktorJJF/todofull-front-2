import{_ as b}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-545e7c64.js";import{_ as u}from"./BaseCard.vue_vue_type_script_setup_true_lang-8f720d92.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{r as o,o as _,f as m,b as a,a as t,w as e,e as h,g as p,F as v}from"./index-3b991a8b.js";const y={},g=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can optionally change the color of the v-system-bar by using the color prop. ",-1),x={class:"mt-6"},w=a("span",{class:"ml-2"},"08:30",-1),$=a("span",{class:"ml-2"},"18:30",-1),S=a("span",{class:"ml-2"},"13:24",-1);function k(d,i){const s=o("v-icon"),c=o("v-system-bar"),n=o("v-layout");return _(),m("div",null,[g,a("div",x,[t(n,{style:{height:"50px"}},{default:e(()=>[t(c,{color:"primary"},{default:e(()=>[t(s,{icon:"mdi-wifi-strength-4",class:"ml-2"}),t(s,{icon:"mdi-signal-cellular-outline",class:"ml-2"}),t(s,{icon:"mdi-battery",class:"ml-2"}),w]),_:1})]),_:1}),t(n,{style:{height:"50px"}},{default:e(()=>[t(c,{color:"secondary"},{default:e(()=>[t(s,{icon:"mdi-wifi-strength-2",class:"ml-2"}),t(s,{icon:"mdi-signal-cellular-outline",class:"ml-2"}),t(s,{icon:"mdi-battery",class:"ml-2"}),$]),_:1})]),_:1}),t(n,{style:{height:"50px"}},{default:e(()=>[t(c,{color:"warning"},{default:e(()=>[t(s,{icon:"mdi-wifi-strength-3",class:"ml-2"}),t(s,{icon:"mdi-signal-cellular-outline",class:"ml-2"}),t(s,{icon:"mdi-battery",class:"ml-2"}),S]),_:1})]),_:1})])])}const C=f(y,[["render",k]]),B={},F=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," A window bar with window controls and status info. ",-1),N={class:"mt-6"},V=a("span",null,"10 unread messages",-1);function W(d,i){const s=o("v-icon"),c=o("v-spacer"),n=o("v-btn"),l=o("v-system-bar"),r=o("v-layout");return _(),m("div",null,[F,a("div",N,[t(r,{style:{height:"50px"}},{default:e(()=>[t(l,{window:""},{default:e(()=>[t(s,{icon:"mdi-message",class:"mr-2"}),V,t(c),t(n,{icon:"mdi-minus",color:"warning",variant:"text"}),t(n,{icon:"mdi-checkbox-blank-outline",variant:"text",color:"secondary",class:"ml-2"}),t(n,{icon:"mdi-close",color:"error",variant:"text",class:"ml-2"})]),_:1})]),_:1})])])}const A=f(B,[["render",W]]),q=h({__name:"Systembar",setup(d){const i=p({title:"Systembar"}),s=p([{text:"Ui Components",disabled:!1,to:"#"},{text:"Systembar",disabled:!0}]);return(c,n)=>{const l=o("v-col"),r=o("v-row");return _(),m(v,null,[t(b,{title:i.value.title,breadcrumbs:s.value},null,8,["title","breadcrumbs"]),t(r,null,{default:e(()=>[t(l,{cols:"12",sm:"12"},{default:e(()=>[t(u,{heading:"Systembar - Color"},{default:e(()=>[t(C)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12"},{default:e(()=>[t(u,{heading:"Systembar - Window"},{default:e(()=>[t(A)]),_:1})]),_:1})]),_:1})],64)}}});export{q as default};
