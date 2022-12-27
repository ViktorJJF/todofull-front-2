import{_ as v}from"./BaseBreadcrumb.dbb828d0.js";import{_ as f}from"./BaseCard.63c61b5b.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,n as _,f as i,a as t,w as e,h as o,aN as n,g as l,F as u,m as g,r as c,B as x,l as T,b as h,e as V}from"./index.bf7d454a.js";const y={},w=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use the anchor prop to specify on which side of the element the tooltip should show. ",-1),$={class:"d-flex align-center flex-wrap gap-2 mt-4"};function B(p,a){return d(),_(u,null,[w,i("div",$,[t(l,{color:"primary"},{default:e(()=>[o(" Start "),t(n,{activator:"parent",anchor:"start"},{default:e(()=>[o("Tooltip")]),_:1})]),_:1}),t(l,{color:"secondary"},{default:e(()=>[o(" End "),t(n,{activator:"parent",anchor:"end"},{default:e(()=>[o("Tooltip")]),_:1})]),_:1}),t(l,{color:"warning"},{default:e(()=>[o(" Top "),t(n,{activator:"parent",anchor:"top"},{default:e(()=>[o("Tooltip")]),_:1})]),_:1}),t(l,{color:"error"},{default:e(()=>[o(" Bottom "),t(n,{activator:"parent",anchor:"bottom"},{default:e(()=>[o("Tooltip")]),_:1})]),_:1})])],64)}var k=b(y,[["render",B]]);const C=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Tooltip visibility can be programmatically changed using v-model. ",-1),N={class:"mt-4 d-flex gap-2"},U=i("span",null,"Programmatic tooltip",-1),A=g({__name:"TooltipsVisibility",setup(p){const a=c(!1);return(m,s)=>(d(),_(u,null,[C,i("div",N,[t(l,{onClick:s[0]||(s[0]=r=>a.value=!a.value)},{default:e(()=>[o(" toggle ")]),_:1}),t(n,{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=r=>a.value=r),top:""},{activator:e(({props:r})=>[t(l,x({class:"ml-5",icon:""},r),{default:e(()=>[t(T,null,{default:e(()=>[o(" mdi-cart ")]),_:1})]),_:2},1040)]),default:e(()=>[U]),_:1},8,["modelValue"])])],64))}}),R=g({__name:"Tooltips",setup(p){const a=c({title:"Tooltips"}),m=c([{text:"Ui Components",disabled:!1,to:"#"},{text:"Tooltips",disabled:!0}]);return(s,r)=>(d(),_(u,null,[t(v,{title:a.value.title,breadcrumbs:m.value},null,8,["title","breadcrumbs"]),t(V,null,{default:e(()=>[t(h,{cols:"12",sm:"12"},{default:e(()=>[t(f,{heading:"Anchor"},{default:e(()=>[t(k)]),_:1})]),_:1}),t(h,{cols:"12",sm:"12"},{default:e(()=>[t(f,{heading:"Visibility"},{default:e(()=>[t(A)]),_:1})]),_:1})]),_:1})],64))}});export{R as default};
