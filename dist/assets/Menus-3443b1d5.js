import{_ as y,e as w,g as c,r as o,o as i,f as M,j as s,b as h,a as t,w as e,m as C,d as f,F as g,k as T,c as j,t as B,n as H}from"./index-115c962b.js";import{B as U}from"./BaseBreadcrumb-7bc27961.js";import{B as A}from"./BaseCard-abe5e4bc.js";const N=h("p",{class:"text-subtitle-1 text-grey-darken-1"}," Menu can be offset relative to the activator by using the anchor prop. ",-1),E={class:"text-center mt-4"},F=w({__name:"MenusAnchor",setup(V){const a=c([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]),u=c(["top","bottom","start","end","center"]),m=c("end");return(b,l)=>{const n=o("v-select"),r=o("v-btn"),v=o("v-list-item-title"),_=o("v-list-item"),p=o("v-list"),x=o("v-menu");return i(),M(g,null,[s(" ----------------------------------------------------------------------------- "),s(" Anchor "),s(" ----------------------------------------------------------------------------- "),N,h("div",E,[t(n,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=k=>m.value=k),items:u.value,label:"Anchor"},null,8,["modelValue","items"]),t(x,{anchor:m.value},{activator:e(({props:k})=>[t(r,C({color:"primary",dark:""},k),{default:e(()=>[f(" Dropdown ")]),_:2},1040)]),default:e(()=>[t(p,null,{default:e(()=>[(i(!0),M(g,null,T(a.value,(k,$)=>(i(),j(_,{key:$},{default:e(()=>[t(v,null,{default:e(()=>[f(B(k.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["anchor"])])],64)}}}),L=y(F,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/menus/MenusAnchor.vue"]]),S=h("p",{class:"text-subtitle-1 text-grey-darken-1"}," Menus can be accessed using hover instead of clicking with the open-on-hover prop. ",-1),z={class:"text-center mt-4"},I=w({__name:"MenusHover",setup(V){const a=c([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]);return(u,m)=>{const b=o("v-btn"),l=o("v-list-item-title"),n=o("v-list-item"),r=o("v-list"),v=o("v-menu");return i(),M(g,null,[s(" ----------------------------------------------------------------------------- "),s(" Hover "),s(" ----------------------------------------------------------------------------- "),S,h("div",z,[t(v,{"open-on-hover":""},{activator:e(({props:_})=>[t(b,C({color:"secondary"},_),{default:e(()=>[f(" Dropdown ")]),_:2},1040)]),default:e(()=>[t(r,null,{default:e(()=>[(i(!0),M(g,null,T(a.value,(_,p)=>(i(),j(n,{key:p},{default:e(()=>[t(l,null,{default:e(()=>[f(B(_.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])],64)}}}),J=y(I,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/menus/MenusHover.vue"]]),W=h("p",{class:"text-subtitle-1 text-grey-darken-1"}," With the new v-slot syntax, nested activators such as those seen with a v-menu and v-tooltip attached to the same activator button, need a particular setup in order to function correctly. ",-1),q={class:"text-center mt-4"},G=h("span",null,"I'm A Tooltip",-1),K=w({__name:"MenusActivatorTooltip",setup(V){const a=c([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]);return C(),(u,m)=>{const b=o("v-btn"),l=o("v-tooltip"),n=o("v-list-item-title"),r=o("v-list-item"),v=o("v-list"),_=o("v-menu");return i(),M(g,null,[s(" ----------------------------------------------------------------------------- "),s(" Activator and tooltip "),s(" ----------------------------------------------------------------------------- "),W,h("div",q,[t(_,null,{activator:e(({props:p})=>[t(l,{anchor:"top"},{activator:e(({props:x})=>[t(b,C({color:"primary"},C(p,x)),{default:e(()=>[f(" Dropdown w/ Tooltip ")]),_:2},1040)]),default:e(()=>[G]),_:2},1024)]),default:e(()=>[t(v,null,{default:e(()=>[(i(!0),M(g,null,T(a.value,(p,x)=>(i(),j(r,{key:x},{default:e(()=>[t(n,null,{default:e(()=>[f(B(p.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])],64)}}}),O=y(K,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/menus/MenusActivatorTooltip.vue"]]),Q=h("p",{class:"text-subtitle-1 text-grey-darken-1"}," A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents. ",-1),R={class:"text-center mt-4"},X=w({__name:"MenusPopover",setup(V){const a=c(!0),u=c(!0),m=c(!0),b=c(!0);return(l,n)=>{const r=o("v-btn"),v=o("v-list-item"),_=o("v-list"),p=o("v-divider"),x=o("v-switch"),k=o("v-spacer"),$=o("v-card-actions"),D=o("v-card"),P=o("v-menu");return i(),M(g,null,[s(" ----------------------------------------------------------------------------- "),s(" Popover menu "),s(" ----------------------------------------------------------------------------- "),Q,h("div",R,[t(P,{modelValue:u.value,"onUpdate:modelValue":n[5]||(n[5]=d=>u.value=d),"close-on-content-click":!1,anchor:"top"},{activator:e(({props:d})=>[t(r,C({color:"secondary"},d),{default:e(()=>[f(" Menu as Popover ")]),_:2},1040)]),default:e(()=>[t(D,{"min-width":"300"},{default:e(()=>[t(_,null,{default:e(()=>[t(v,{"prepend-avatar":"https://cdn.vuetifyjs.com/images/john.jpg",title:"John Leider",subtitle:"Founder of Vuetify"},{append:e(()=>[t(r,{variant:"text",class:H(a.value?"text-red":""),icon:"mdi-heart",onClick:n[0]||(n[0]=d=>a.value=!a.value)},null,8,["class"])]),_:1})]),_:1}),t(p),t(_,null,{default:e(()=>[t(v,null,{default:e(()=>[t(x,{modelValue:m.value,"onUpdate:modelValue":n[1]||(n[1]=d=>m.value=d),color:"purple",label:"Enable messages","hide-details":""},null,8,["modelValue"])]),_:1}),t(v,null,{default:e(()=>[t(x,{modelValue:b.value,"onUpdate:modelValue":n[2]||(n[2]=d=>b.value=d),color:"purple",label:"Enable hints","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),t($,null,{default:e(()=>[t(k),t(r,{text:"",onClick:n[3]||(n[3]=d=>u.value=!1)},{default:e(()=>[f(" Cancel ")]),_:1}),t(r,{color:"primary",text:"",onClick:n[4]||(n[4]=d=>u.value=!1)},{default:e(()=>[f(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),Y=y(X,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/menus/MenusPopover.vue"]]),Z=w({__name:"Menus",setup(V){const a=c({title:"Menus"}),u=c([{text:"Ui Components",disabled:!1,to:"#"},{text:"Menus",disabled:!0}]);return(m,b)=>{const l=o("v-col"),n=o("v-row");return i(),M(g,null,[t(U,{title:a.value.title,breadcrumbs:u.value},null,8,["title","breadcrumbs"]),t(n,null,{default:e(()=>[t(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(A,{heading:"Anchor"},{default:e(()=>[t(L)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(A,{heading:"Hover"},{default:e(()=>[t(J)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(A,{heading:"Activator and tooltip"},{default:e(()=>[t(O)]),_:1})]),_:1}),t(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(A,{heading:"Popover"},{default:e(()=>[t(Y)]),_:1})]),_:1})]),_:1})],64)}}}),nt=y(Z,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Menus.vue"]]);export{nt as default};
