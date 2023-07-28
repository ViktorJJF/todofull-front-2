import{_,r as s,o as d,f as u,j as c,b as n,a as t,w as e,F as f,e as v,g as b}from"./index-00e4ff73.js";import{B as h}from"./BaseBreadcrumb-3f2d4220.js";import{B as y}from"./BaseCard-0b660e2c.js";const g={},w=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can optionally change the color of the v-system-bar by using the color prop. ",-1),x={class:"mt-6"},C=n("span",{class:"ml-2"},"08:30",-1),S=n("span",{class:"ml-2"},"18:30",-1),B=n("span",{class:"ml-2"},"13:24",-1);function k(p,i){const o=s("v-icon"),l=s("v-system-bar"),a=s("v-layout");return d(),u(f,null,[c(" ----------------------------------------------------------------------------- "),c(" Color "),c(" ----------------------------------------------------------------------------- "),n("div",null,[w,n("div",x,[t(a,{style:{height:"50px"}},{default:e(()=>[t(l,{color:"primary"},{default:e(()=>[t(o,{icon:"mdi-wifi-strength-4",class:"ml-2"}),t(o,{icon:"mdi-signal-cellular-outline",class:"ml-2"}),t(o,{icon:"mdi-battery",class:"ml-2"}),C]),_:1})]),_:1}),t(a,{style:{height:"50px"}},{default:e(()=>[t(l,{color:"secondary"},{default:e(()=>[t(o,{icon:"mdi-wifi-strength-2",class:"ml-2"}),t(o,{icon:"mdi-signal-cellular-outline",class:"ml-2"}),t(o,{icon:"mdi-battery",class:"ml-2"}),S]),_:1})]),_:1}),t(a,{style:{height:"50px"}},{default:e(()=>[t(l,{color:"warning"},{default:e(()=>[t(o,{icon:"mdi-wifi-strength-3",class:"ml-2"}),t(o,{icon:"mdi-signal-cellular-outline",class:"ml-2"}),t(o,{icon:"mdi-battery",class:"ml-2"}),B]),_:1})]),_:1})])])],2112)}const $=_(g,[["render",k],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/systembar/SystembarColor.vue"]]),j={},D=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," A window bar with window controls and status info. ",-1),N={class:"mt-6"},T=n("span",null,"10 unread messages",-1);function V(p,i){const o=s("v-icon"),l=s("v-spacer"),a=s("v-btn"),r=s("v-system-bar"),m=s("v-layout");return d(),u(f,null,[c(" ----------------------------------------------------------------------------- "),c(" window "),c(" ----------------------------------------------------------------------------- "),n("div",null,[D,n("div",N,[t(m,{style:{height:"50px"}},{default:e(()=>[t(r,{window:""},{default:e(()=>[t(o,{icon:"mdi-message",class:"mr-2"}),T,t(l),t(a,{icon:"mdi-minus",color:"warning",variant:"text"}),t(a,{icon:"mdi-checkbox-blank-outline",variant:"text",color:"secondary",class:"ml-2"}),t(a,{icon:"mdi-close",color:"error",variant:"text",class:"ml-2"})]),_:1})]),_:1})])])],2112)}const W=_(j,[["render",V],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/systembar/SystembarWindow.vue"]]),F=v({__name:"Systembar",setup(p){const i=b({title:"Systembar"}),o=b([{text:"Ui Components",disabled:!1,to:"#"},{text:"Systembar",disabled:!0}]);return(l,a)=>{const r=s("v-col"),m=s("v-row");return d(),u(f,null,[t(h,{title:i.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),t(m,null,{default:e(()=>[t(r,{cols:"12",sm:"12"},{default:e(()=>[t(y,{heading:"Systembar - Color"},{default:e(()=>[t($)]),_:1})]),_:1}),t(r,{cols:"12",sm:"12"},{default:e(()=>[t(y,{heading:"Systembar - Window"},{default:e(()=>[t(W)]),_:1})]),_:1})]),_:1})],64)}}}),Y=_(F,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Systembar.vue"]]);export{Y as default};
