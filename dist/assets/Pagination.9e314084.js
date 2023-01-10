import{_ as h}from"./BaseBreadcrumb.51cce433.js";import{_ as p}from"./BaseCard.63286a8c.js";import{m as g,r as i,o as r,n as u,f as l,a as e,bs as d,F as c,w as a,b as o,V as x,e as f}from"./index.ac5b851b.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const v=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop allows you to render pagination buttons with alternative styles. ",-1),V={class:"text-center mt-6"},$=g({__name:"PaginationRounded",setup(_){const t=i(1);return(m,n)=>(r(),u(c,null,[v,l("div",V,[e(d,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s),length:4,rounded:"circle"},null,8,["modelValue"]),e(d,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=s=>t.value=s),length:4,rounded:"0"},null,8,["modelValue"])])],64))}}),P={},y=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," Pagination items can be manually deactivated using the disabled prop. ",-1),w={class:"text-center mt-6"};function k(_,t){return r(),u(c,null,[y,l("div",w,[e(d,{length:3,disabled:""})])],64)}var U=b(P,[["render",k]]);const C=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," Previous and next page icons can be customized with the prev-icon and next-icon props. ",-1),B={class:"text-center mt-6"},R=g({__name:"PaginationIcons",setup(_){const t=i(1);return(m,n)=>(r(),u(c,null,[C,l("div",B,[e(d,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s),length:4,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue"])])],64))}}),D=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the length prop you can set the length of v-pagination, if the number of page buttons exceeds the parent container, it will truncate the list. ",-1),F={class:"text-center mt-6"},I=g({__name:"PaginationLength",setup(_){const t=i(1);return(m,n)=>(r(),u(c,null,[D,l("div",F,[e(f,{justify:"center"},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(x,{class:"max-width"},{default:a(()=>[e(d,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s),length:15},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])],64))}}),E=g({__name:"Pagination",setup(_){const t=i({title:"Pagination"}),m=i([{text:"Ui Components",disabled:!1,to:"#"},{text:"Pagination",disabled:!0}]);return(n,s)=>(r(),u(c,null,[e(h,{title:t.value.title,breadcrumbs:m.value},null,8,["title","breadcrumbs"]),e(f,null,{default:a(()=>[e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Rounded"},{default:a(()=>[e($)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Disabled"},{default:a(()=>[e(U)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Icons"},{default:a(()=>[e(R)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Length"},{default:a(()=>[e(I)]),_:1})]),_:1})]),_:1})],64))}});export{E as default};
