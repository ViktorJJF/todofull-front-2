import{_ as i,e as u,g as d,r as c,o as m,f as _,j as s,b as a,a as e,F as b,w as r,d as x,t as g}from"./index-115c962b.js";import{B}from"./BaseBreadcrumb-7bc27961.js";import{B as p}from"./BaseCard-abe5e4bc.js";const k=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Breadcrumbs separator can be set using divider property. ",-1),D={class:"mt-6"},L=u({__name:"BreadcrumbDivider",setup(f){const t=d([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(l,v)=>{const o=c("v-breadcrumbs");return m(),_(b,null,[s(" ----------------------------------------------------------------------------- "),s(" Divider "),s(" ----------------------------------------------------------------------------- "),a("div",null,[k,a("div",D,[e(o,{items:t.value,divider:"-"},null,8,["items"]),e(o,{items:t.value,divider:"."},null,8,["items"])])])],2112)}}}),y=i(L,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/breadcrumb/BreadcrumbDivider.vue"]]),C=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Large breadcrumbs have larger font size. ",-1),I={class:"mt-6"},$=u({__name:"BreadcrumbLarge",setup(f){const t=d([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(l,v)=>{const o=c("v-breadcrumbs");return m(),_(b,null,[s(" ----------------------------------------------------------------------------- "),s(" Large "),s(" ----------------------------------------------------------------------------- "),a("div",null,[C,a("div",I,[e(o,{items:t.value},null,8,["items"]),e(o,{items:t.value,large:""},null,8,["items"])])])],2112)}}}),j=i($,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/breadcrumb/BreadcrumbLarge.vue"]]),w=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," For the icon variant, breadcrumbs can use any icon in Material Design Icons. ",-1),T={class:"mt-6"},N=u({__name:"BreadcrumbIcons",setup(f){const t=d([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(l,v)=>{const o=c("v-icon"),n=c("v-breadcrumbs");return m(),_(b,null,[s(" ----------------------------------------------------------------------------- "),s(" Icons "),s(" ----------------------------------------------------------------------------- "),a("div",null,[w,a("div",T,[e(n,{items:t.value},{divider:r(()=>[e(o,{icon:"mdi-forward"})]),_:1},8,["items"]),e(n,{items:t.value},{divider:r(()=>[e(o,{icon:"mdi-chevron-right"})]),_:1},8,["items"])])])],2112)}}}),V=i(N,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/breadcrumb/BreadcrumbIcons.vue"]]),F=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can use the item slot to customize each breadcrumb. ",-1),z={class:"mt-6"},U=u({__name:"BreadcrumbItem",setup(f){const t=d([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(l,v)=>{const o=c("v-breadcrumbs");return m(),_(b,null,[s(" ----------------------------------------------------------------------------- "),s(" Item "),s(" ----------------------------------------------------------------------------- "),a("div",null,[F,a("div",z,[e(o,{items:t.value},{text:r(({item:n})=>[x(g(n.text.toUpperCase()),1)]),_:1},8,["items"])])])],2112)}}}),E=i(U,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/breadcrumb/BreadcrumbItem.vue"]]),M=u({__name:"Breadcrumb",setup(f){const t=d({title:"Breadcrumb"}),l=d([{text:"Ui Components",disabled:!1,to:"#"},{text:"Breadcrumb",disabled:!0}]);return(v,o)=>{const n=c("v-col"),h=c("v-row");return m(),_(b,null,[e(B,{title:t.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),e(h,null,{default:r(()=>[e(n,{cols:"12",sm:"12",lg:"6"},{default:r(()=>[e(p,{heading:"Divider"},{default:r(()=>[e(y)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6"},{default:r(()=>[e(p,{heading:"Large"},{default:r(()=>[e(j)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:r(()=>[e(p,{heading:"Icons"},{default:r(()=>[e(V)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:r(()=>[e(p,{heading:"Items"},{default:r(()=>[e(E)]),_:1})]),_:1})]),_:1})],64)}}}),A=i(M,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Breadcrumb.vue"]]);export{A as default};
