import{_ as h}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-545e7c64.js";import{_ as b}from"./BaseCard.vue_vue_type_script_setup_true_lang-8f720d92.js";import{e as _,g as c,r as n,o as l,f as o,b as d,a as e,w as s,d as v,t as p,F as x}from"./index-3b991a8b.js";const g=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," Breadcrumbs separator can be set using divider property. ",-1),k={class:"mt-6"},$=_({__name:"BreadcrumbDivider",setup(m){const t=c([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(i,u)=>{const a=n("v-breadcrumbs");return l(),o("div",null,[g,d("div",k,[e(a,{items:t.value,divider:"-"},null,8,["items"]),e(a,{items:t.value,divider:"."},null,8,["items"])])])}}}),B=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," Large breadcrumbs have larger font size. ",-1),L={class:"mt-6"},D=_({__name:"BreadcrumbLarge",setup(m){const t=c([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(i,u)=>{const a=n("v-breadcrumbs");return l(),o("div",null,[B,d("div",L,[e(a,{items:t.value},null,8,["items"]),e(a,{items:t.value,large:""},null,8,["items"])])])}}}),y=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," For the icon variant, breadcrumbs can use any icon in Material Design Icons. ",-1),w={class:"mt-6"},C=_({__name:"BreadcrumbIcons",setup(m){const t=c([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(i,u)=>{const a=n("v-icon"),r=n("v-breadcrumbs");return l(),o("div",null,[y,d("div",w,[e(r,{items:t.value},{divider:s(()=>[e(a,{icon:"mdi-forward"})]),_:1},8,["items"]),e(r,{items:t.value},{divider:s(()=>[e(a,{icon:"mdi-chevron-right"})]),_:1},8,["items"])])])}}}),I=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can use the item slot to customize each breadcrumb. ",-1),F={class:"mt-6"},N=_({__name:"BreadcrumbItem",setup(m){const t=c([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(i,u)=>{const a=n("v-breadcrumbs");return l(),o("div",null,[I,d("div",F,[e(a,{items:t.value},{text:s(({item:r})=>[v(p(r.text.toUpperCase()),1)]),_:1},8,["items"])])])}}}),E=_({__name:"Breadcrumb",setup(m){const t=c({title:"Breadcrumb"}),i=c([{text:"Ui Components",disabled:!1,to:"#"},{text:"Breadcrumb",disabled:!0}]);return(u,a)=>{const r=n("v-col"),f=n("v-row");return l(),o(x,null,[e(h,{title:t.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),e(f,null,{default:s(()=>[e(r,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[e(b,{heading:"Divider"},{default:s(()=>[e($)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[e(b,{heading:"Large"},{default:s(()=>[e(D)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:s(()=>[e(b,{heading:"Icons"},{default:s(()=>[e(C)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:s(()=>[e(b,{heading:"Items"},{default:s(()=>[e(N)]),_:1})]),_:1})]),_:1})],64)}}});export{E as default};
