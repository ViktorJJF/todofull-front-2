import{_ as g}from"./BaseBreadcrumb.5c371145.js";import{_ as h}from"./BaseCard.0debe86d.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as m,f as u,b as r,a as t,w as o,d as a,F as f,e as b,g as d,m as T}from"./index.aed0d878.js";const w={},y=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use the anchor prop to specify on which side of the element the tooltip should show. ",-1),V={class:"d-flex align-center flex-wrap gap-2 mt-4"};function $(v,n){const l=s("v-tooltip"),e=s("v-btn");return m(),u(f,null,[y,r("div",V,[t(e,{color:"primary"},{default:o(()=>[a(" Start "),t(l,{activator:"parent",anchor:"start"},{default:o(()=>[a("Tooltip")]),_:1})]),_:1}),t(e,{color:"secondary"},{default:o(()=>[a(" End "),t(l,{activator:"parent",anchor:"end"},{default:o(()=>[a("Tooltip")]),_:1})]),_:1}),t(e,{color:"warning"},{default:o(()=>[a(" Top "),t(l,{activator:"parent",anchor:"top"},{default:o(()=>[a("Tooltip")]),_:1})]),_:1}),t(e,{color:"error"},{default:o(()=>[a(" Bottom "),t(l,{activator:"parent",anchor:"bottom"},{default:o(()=>[a("Tooltip")]),_:1})]),_:1})])],64)}var k=x(w,[["render",$]]);const C=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," Tooltip visibility can be programmatically changed using v-model. ",-1),B={class:"mt-4 d-flex gap-2"},N=r("span",null,"Programmatic tooltip",-1),U=b({__name:"TooltipsVisibility",setup(v){const n=d(!1);return(l,e)=>{const _=s("v-btn"),c=s("v-icon"),p=s("v-tooltip");return m(),u(f,null,[C,r("div",B,[t(_,{onClick:e[0]||(e[0]=i=>n.value=!n.value)},{default:o(()=>[a(" toggle ")]),_:1}),t(p,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=i=>n.value=i),top:""},{activator:o(({props:i})=>[t(_,T({class:"ml-5",icon:""},i),{default:o(()=>[t(c,null,{default:o(()=>[a(" mdi-cart ")]),_:1})]),_:2},1040)]),default:o(()=>[N]),_:1},8,["modelValue"])])],64)}}}),S=b({__name:"Tooltips",setup(v){const n=d({title:"Tooltips"}),l=d([{text:"Ui Components",disabled:!1,to:"#"},{text:"Tooltips",disabled:!0}]);return(e,_)=>{const c=s("v-col"),p=s("v-row");return m(),u(f,null,[t(g,{title:n.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),t(p,null,{default:o(()=>[t(c,{cols:"12",sm:"12"},{default:o(()=>[t(h,{heading:"Anchor"},{default:o(()=>[t(k)]),_:1})]),_:1}),t(c,{cols:"12",sm:"12"},{default:o(()=>[t(h,{heading:"Visibility"},{default:o(()=>[t(U)]),_:1})]),_:1})]),_:1})],64)}}});export{S as default};