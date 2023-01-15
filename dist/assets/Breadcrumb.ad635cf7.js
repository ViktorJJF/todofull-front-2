import{_ as h}from"./BaseBreadcrumb.da36eaea.js";import{_ as o}from"./BaseCard.ef377dab.js";import{m as l,r as i,o as n,n as c,f as a,a as e,ak as r,w as s,l as f,h as x,y as p,b as m,e as v,F as g}from"./index.697a154f.js";const k=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Breadcrumbs separator can be set using divider property. ",-1),B={class:"mt-6"},$=l({__name:"BreadcrumbDivider",setup(_){const t=i([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(d,u)=>(n(),c("div",null,[k,a("div",B,[e(r,{items:t.value,divider:"-"},null,8,["items"]),e(r,{items:t.value,divider:"."},null,8,["items"])])]))}}),L=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Large breadcrumbs have larger font size. ",-1),y={class:"mt-6"},D=l({__name:"BreadcrumbLarge",setup(_){const t=i([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(d,u)=>(n(),c("div",null,[L,a("div",y,[e(r,{items:t.value},null,8,["items"]),e(r,{items:t.value,large:""},null,8,["items"])])]))}}),V=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," For the icon variant, breadcrumbs can use any icon in Material Design Icons. ",-1),I={class:"mt-6"},C=l({__name:"BreadcrumbIcons",setup(_){const t=i([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(d,u)=>(n(),c("div",null,[V,a("div",I,[e(r,{items:t.value},{divider:s(()=>[e(f,{icon:"mdi-forward"})]),_:1},8,["items"]),e(r,{items:t.value},{divider:s(()=>[e(f,{icon:"mdi-chevron-right"})]),_:1},8,["items"])])]))}}),w=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can use the item slot to customize each breadcrumb. ",-1),F={class:"mt-6"},N=l({__name:"BreadcrumbItem",setup(_){const t=i([{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Link 1",disabled:!1,href:"breadcrumbs_link_1"},{text:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}]);return(d,u)=>(n(),c("div",null,[w,a("div",F,[e(r,{items:t.value},{text:s(({item:b})=>[x(p(b.text.toUpperCase()),1)]),_:1},8,["items"])])]))}}),M=l({__name:"Breadcrumb",setup(_){const t=i({title:"Breadcrumb"}),d=i([{text:"Ui Components",disabled:!1,to:"#"},{text:"Breadcrumb",disabled:!0}]);return(u,b)=>(n(),c(g,null,[e(h,{title:t.value.title,breadcrumbs:d.value},null,8,["title","breadcrumbs"]),e(v,null,{default:s(()=>[e(m,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[e(o,{heading:"Divider"},{default:s(()=>[e($)]),_:1})]),_:1}),e(m,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[e(o,{heading:"Large"},{default:s(()=>[e(D)]),_:1})]),_:1}),e(m,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:s(()=>[e(o,{heading:"Icons"},{default:s(()=>[e(C)]),_:1})]),_:1}),e(m,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:s(()=>[e(o,{heading:"Items"},{default:s(()=>[e(N)]),_:1})]),_:1})]),_:1})],64))}});export{M as default};
