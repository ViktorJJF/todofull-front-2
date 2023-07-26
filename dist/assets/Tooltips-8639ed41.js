import{_ as m,r as s,o as f,f as v,j as i,b as r,a as t,w as o,d as l,F as b,e as g,g as u,m as x}from"./index-0b78272f.js";import{B as y}from"./BaseBreadcrumb-329ddf8f.js";import{B as T}from"./BaseCard-821771b2.js";const V={},w=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use the anchor prop to specify on which side of the element the tooltip should show. ",-1),B={class:"d-flex align-center flex-wrap gap-2 mt-4"};function C(h,a){const n=s("v-tooltip"),e=s("v-btn");return f(),v(b,null,[i(" ----------------------------------------------------------------------------- "),i(" Anchor "),i(" ----------------------------------------------------------------------------- "),w,r("div",B,[t(e,{color:"primary"},{default:o(()=>[l(" Start "),t(n,{activator:"parent",anchor:"start"},{default:o(()=>[l("Tooltip")]),_:1})]),_:1}),t(e,{color:"secondary"},{default:o(()=>[l(" End "),t(n,{activator:"parent",anchor:"end"},{default:o(()=>[l("Tooltip")]),_:1})]),_:1}),t(e,{color:"warning"},{default:o(()=>[l(" Top "),t(n,{activator:"parent",anchor:"top"},{default:o(()=>[l("Tooltip")]),_:1})]),_:1}),t(e,{color:"error"},{default:o(()=>[l(" Bottom "),t(n,{activator:"parent",anchor:"bottom"},{default:o(()=>[l("Tooltip")]),_:1})]),_:1})])],64)}const k=m(V,[["render",C],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/tooltips/TooltipsAnchor.vue"]]),$=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," Tooltip visibility can be programmatically changed using v-model. ",-1),j={class:"mt-4 d-flex gap-2"},A=r("span",null,"Programmatic tooltip",-1),N=g({__name:"TooltipsVisibility",setup(h){const a=u(!1);return(n,e)=>{const p=s("v-btn"),c=s("v-icon"),d=s("v-tooltip");return f(),v(b,null,[i(" ----------------------------------------------------------------------------- "),i(" Visibility "),i(" ----------------------------------------------------------------------------- "),$,r("div",j,[t(p,{onClick:e[0]||(e[0]=_=>a.value=!a.value)},{default:o(()=>[l(" toggle ")]),_:1}),t(d,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=_=>a.value=_),top:""},{activator:o(({props:_})=>[t(p,x({class:"ml-5",icon:""},_),{default:o(()=>[t(c,null,{default:o(()=>[l(" mdi-cart ")]),_:1})]),_:2},1040)]),default:o(()=>[A]),_:1},8,["modelValue"])])],64)}}}),D=m(N,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/tooltips/TooltipsVisibility.vue"]]),U=g({__name:"Tooltips",setup(h){const a=u({title:"Tooltips"}),n=u([{text:"Ui Components",disabled:!1,to:"#"},{text:"Tooltips",disabled:!0}]);return(e,p)=>{const c=s("v-col"),d=s("v-row");return f(),v(b,null,[t(y,{title:a.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),t(d,null,{default:o(()=>[t(c,{cols:"12",sm:"12"},{default:o(()=>[t(T,{heading:"Anchor"},{default:o(()=>[t(k)]),_:1})]),_:1}),t(c,{cols:"12",sm:"12"},{default:o(()=>[t(T,{heading:"Visibility"},{default:o(()=>[t(D)]),_:1})]),_:1})]),_:1})],64)}}}),S=m(U,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Tooltips.vue"]]);export{S as default};
