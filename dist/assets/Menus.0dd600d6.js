import{_ as B}from"./BaseBreadcrumb.c378a3ec.js";import{_ as y}from"./BaseCard.802f9fad.js";import{e as C,g as a,r as n,o as c,f as x,b as f,a as t,w as e,m as M,d as p,F as g,j as $,c as A,t as T,n as D}from"./index.5144a4a6.js";const P=f("p",{class:"text-subtitle-1 text-grey-darken-1"}," Menu can be offset relative to the activator by using the anchor prop. ",-1),E={class:"text-center mt-4"},F=C({__name:"MenusAnchor",setup(w){const s=a([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]),i=a(["top","bottom","start","end","center"]),d=a("end");return(h,o)=>{const l=n("v-select"),_=n("v-btn"),m=n("v-list-item-title"),u=n("v-list-item"),v=n("v-list"),b=n("v-menu");return c(),x(g,null,[P,f("div",E,[t(l,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=k=>d.value=k),items:i.value,label:"Anchor"},null,8,["modelValue","items"]),t(b,{anchor:d.value},{activator:e(({props:k})=>[t(_,M({color:"primary",dark:""},k),{default:e(()=>[p(" Dropdown ")]),_:2},1040)]),default:e(()=>[t(v,null,{default:e(()=>[(c(!0),x(g,null,$(s.value,(k,V)=>(c(),A(u,{key:V},{default:e(()=>[t(m,null,{default:e(()=>[p(T(k.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["anchor"])])],64)}}}),N=f("p",{class:"text-subtitle-1 text-grey-darken-1"}," Menus can be accessed using hover instead of clicking with the open-on-hover prop. ",-1),H={class:"text-center mt-4"},L=C({__name:"MenusHover",setup(w){const s=a([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]);return(i,d)=>{const h=n("v-btn"),o=n("v-list-item-title"),l=n("v-list-item"),_=n("v-list"),m=n("v-menu");return c(),x(g,null,[N,f("div",H,[t(m,{"open-on-hover":""},{activator:e(({props:u})=>[t(h,M({color:"secondary"},u),{default:e(()=>[p(" Dropdown ")]),_:2},1040)]),default:e(()=>[t(_,null,{default:e(()=>[(c(!0),x(g,null,$(s.value,(u,v)=>(c(),A(l,{key:v},{default:e(()=>[t(o,null,{default:e(()=>[p(T(u.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])],64)}}}),S=f("p",{class:"text-subtitle-1 text-grey-darken-1"}," With the new v-slot syntax, nested activators such as those seen with a v-menu and v-tooltip attached to the same activator button, need a particular setup in order to function correctly. ",-1),z={class:"text-center mt-4"},I=f("span",null,"I'm A Tooltip",-1),J=C({__name:"MenusActivatorTooltip",setup(w){const s=a([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]);return M(),(i,d)=>{const h=n("v-btn"),o=n("v-tooltip"),l=n("v-list-item-title"),_=n("v-list-item"),m=n("v-list"),u=n("v-menu");return c(),x(g,null,[S,f("div",z,[t(u,null,{activator:e(({props:v})=>[t(o,{anchor:"top"},{activator:e(({props:b})=>[t(h,M({color:"primary"},M(v,b)),{default:e(()=>[p(" Dropdown w/ Tooltip ")]),_:2},1040)]),default:e(()=>[I]),_:2},1024)]),default:e(()=>[t(m,null,{default:e(()=>[(c(!0),x(g,null,$(s.value,(v,b)=>(c(),A(_,{key:b},{default:e(()=>[t(l,null,{default:e(()=>[p(T(v.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])],64)}}}),W=f("p",{class:"text-subtitle-1 text-grey-darken-1"}," A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents. ",-1),q={class:"text-center mt-4"},G=C({__name:"MenusPopover",setup(w){const s=a(!0),i=a(!0),d=a(!0),h=a(!0);return(o,l)=>{const _=n("v-btn"),m=n("v-list-item"),u=n("v-list"),v=n("v-divider"),b=n("v-switch"),k=n("v-spacer"),V=n("v-card-actions"),U=n("v-card"),j=n("v-menu");return c(),x(g,null,[W,f("div",q,[t(j,{modelValue:i.value,"onUpdate:modelValue":l[5]||(l[5]=r=>i.value=r),"close-on-content-click":!1,anchor:"top"},{activator:e(({props:r})=>[t(_,M({color:"secondary"},r),{default:e(()=>[p(" Menu as Popover ")]),_:2},1040)]),default:e(()=>[t(U,{"min-width":"300"},{default:e(()=>[t(u,null,{default:e(()=>[t(m,{"prepend-avatar":"https://cdn.vuetifyjs.com/images/john.jpg",title:"John Leider",subtitle:"Founder of Vuetify"},{append:e(()=>[t(_,{variant:"text",class:D(s.value?"text-red":""),icon:"mdi-heart",onClick:l[0]||(l[0]=r=>s.value=!s.value)},null,8,["class"])]),_:1})]),_:1}),t(v),t(u,null,{default:e(()=>[t(m,null,{default:e(()=>[t(b,{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=r=>d.value=r),color:"purple",label:"Enable messages","hide-details":""},null,8,["modelValue"])]),_:1}),t(m,null,{default:e(()=>[t(b,{modelValue:h.value,"onUpdate:modelValue":l[2]||(l[2]=r=>h.value=r),color:"purple",label:"Enable hints","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),t(V,null,{default:e(()=>[t(k),t(_,{text:"",onClick:l[3]||(l[3]=r=>i.value=!1)},{default:e(()=>[p(" Cancel ")]),_:1}),t(_,{color:"primary",text:"",onClick:l[4]||(l[4]=r=>i.value=!1)},{default:e(()=>[p(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),R=C({__name:"Menus",setup(w){const s=a({title:"Menus"}),i=a([{text:"Ui Components",disabled:!1,to:"#"},{text:"Menus",disabled:!0}]);return(d,h)=>{const o=n("v-col"),l=n("v-row");return c(),x(g,null,[t(B,{title:s.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),t(l,null,{default:e(()=>[t(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Anchor"},{default:e(()=>[t(F)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Hover"},{default:e(()=>[t(L)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Activator and tooltip"},{default:e(()=>[t(J)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Popover"},{default:e(()=>[t(G)]),_:1})]),_:1})]),_:1})],64)}}});export{R as default};