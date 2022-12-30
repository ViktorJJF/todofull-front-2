import{_ as T}from"./BaseBreadcrumb.3dd6ad04.js";import{_ as b}from"./BaseCard.d221aec4.js";import{m as g,r as o,o as u,n as p,f as _,a as e,ah as B,w as t,g as f,B as v,h as d,t as x,F as m,v as M,c as y,A as h,C as w,y as $,N as C,aN as D,d as L,D as N,T as S,b6 as A,aW as U,M as P,b as k,e as j}from"./index.243e5413.js";const E=_("p",{class:"text-subtitle-1 text-grey-darken-1"}," Menu can be offset relative to the activator by using the anchor prop. ",-1),F={class:"text-center mt-4"},I=g({__name:"MenusAnchor",setup(V){const n=o([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]),r=o(["top","bottom","start","end","center"]),i=o("end");return(a,c)=>(u(),p(m,null,[E,_("div",F,[e(B,{modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=l=>i.value=l),items:r.value,label:"Anchor"},null,8,["modelValue","items"]),e(C,{anchor:i.value},{activator:t(({props:l})=>[e(f,v({color:"primary",dark:""},l),{default:t(()=>[d(" Dropdown ")]),_:2},1040)]),default:t(()=>[e(x,null,{default:t(()=>[(u(!0),p(m,null,M(n.value,(l,s)=>(u(),y(h,{key:s},{default:t(()=>[e(w,null,{default:t(()=>[d($(l.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["anchor"])])],64))}}),H=_("p",{class:"text-subtitle-1 text-grey-darken-1"}," Menus can be accessed using hover instead of clicking with the open-on-hover prop. ",-1),W={class:"text-center mt-4"},z=g({__name:"MenusHover",setup(V){const n=o([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]);return(r,i)=>(u(),p(m,null,[H,_("div",W,[e(C,{"open-on-hover":""},{activator:t(({props:a})=>[e(f,v({color:"secondary"},a),{default:t(()=>[d(" Dropdown ")]),_:2},1040)]),default:t(()=>[e(x,null,{default:t(()=>[(u(!0),p(m,null,M(n.value,(a,c)=>(u(),y(h,{key:c},{default:t(()=>[e(w,null,{default:t(()=>[d($(a.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])],64))}}),J=_("p",{class:"text-subtitle-1 text-grey-darken-1"}," With the new v-slot syntax, nested activators such as those seen with a v-menu and v-tooltip attached to the same activator button, need a particular setup in order to function correctly. ",-1),R={class:"text-center mt-4"},q=_("span",null,"I'm A Tooltip",-1),G=g({__name:"MenusActivatorTooltip",setup(V){const n=o([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]);return v(),(r,i)=>(u(),p(m,null,[J,_("div",R,[e(C,null,{activator:t(({props:a})=>[e(D,{anchor:"top"},{activator:t(({props:c})=>[e(f,v({color:"primary"},v(a,c)),{default:t(()=>[d(" Dropdown w/ Tooltip ")]),_:2},1040)]),default:t(()=>[q]),_:2},1024)]),default:t(()=>[e(x,null,{default:t(()=>[(u(!0),p(m,null,M(n.value,(a,c)=>(u(),y(h,{key:c},{default:t(()=>[e(w,null,{default:t(()=>[d($(a.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])],64))}}),K=_("p",{class:"text-subtitle-1 text-grey-darken-1"}," A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents. ",-1),O={class:"text-center mt-4"},Q=g({__name:"MenusPopover",setup(V){const n=o(!0),r=o(!0),i=o(!0),a=o(!0);return(c,l)=>(u(),p(m,null,[K,_("div",O,[e(C,{modelValue:r.value,"onUpdate:modelValue":l[5]||(l[5]=s=>r.value=s),"close-on-content-click":!1,anchor:"top"},{activator:t(({props:s})=>[e(f,v({color:"secondary"},s),{default:t(()=>[d(" Menu as Popover ")]),_:2},1040)]),default:t(()=>[e(L,{"min-width":"300"},{default:t(()=>[e(x,null,{default:t(()=>[e(h,{"prepend-avatar":"https://cdn.vuetifyjs.com/images/john.jpg",title:"John Leider",subtitle:"Founder of Vuetify"},{append:t(()=>[e(f,{variant:"text",class:N(n.value?"text-red":""),icon:"mdi-heart",onClick:l[0]||(l[0]=s=>n.value=!n.value)},null,8,["class"])]),_:1})]),_:1}),e(S),e(x,null,{default:t(()=>[e(h,null,{default:t(()=>[e(A,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=s=>i.value=s),color:"purple",label:"Enable messages","hide-details":""},null,8,["modelValue"])]),_:1}),e(h,null,{default:t(()=>[e(A,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=s=>a.value=s),color:"purple",label:"Enable hints","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(U,null,{default:t(()=>[e(P),e(f,{text:"",onClick:l[3]||(l[3]=s=>r.value=!1)},{default:t(()=>[d(" Cancel ")]),_:1}),e(f,{color:"primary",text:"",onClick:l[4]||(l[4]=s=>r.value=!1)},{default:t(()=>[d(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64))}}),ee=g({__name:"Menus",setup(V){const n=o({title:"Menus"}),r=o([{text:"Ui Components",disabled:!1,to:"#"},{text:"Menus",disabled:!0}]);return(i,a)=>(u(),p(m,null,[e(T,{title:n.value.title,breadcrumbs:r.value},null,8,["title","breadcrumbs"]),e(j,null,{default:t(()=>[e(k,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(b,{heading:"Anchor"},{default:t(()=>[e(I)]),_:1})]),_:1}),e(k,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(b,{heading:"Hover"},{default:t(()=>[e(z)]),_:1})]),_:1}),e(k,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(b,{heading:"Activator and tooltip"},{default:t(()=>[e(G)]),_:1})]),_:1}),e(k,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(b,{heading:"Popover"},{default:t(()=>[e(Q)]),_:1})]),_:1})]),_:1})],64))}});export{ee as default};
