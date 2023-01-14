import{_ as G}from"./BaseBreadcrumb.c1b3a01d.js";import{_ as h}from"./BaseCard.df6d96ee.js";import{m as _,r,o as s,c as n,w as l,a as e,bp as v,n as m,F as f,v as w,bq as y,d as x,D as $,f as V,bd as k,l as C,L as b,K as S,b as g,e as z}from"./index.270d3377.js";const U={class:"d-flex fill-height align-center justify-center"},j=_({__name:"GrpSlideActiveClass",setup(p){const a=r(null);return(d,o)=>(s(),n(S,{class:"mx-auto",elevation:"3","max-width":"800"},{default:l(()=>[e(v,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t),class:"pa-4","selected-class":"bg-success","show-arrows":""},{default:l(()=>[(s(),m(f,null,w(15,t=>e(y,{key:t},{default:l(({isSelected:i,toggle:u,selectedClass:c})=>[e(x,{color:"grey-lighten-1",class:$(["ma-4",c]),height:"200",width:"100",onClick:u},{default:l(()=>[V("div",U,[e(k,null,{default:l(()=>[i?(s(),n(C,{key:0,color:"white",size:"48",icon:"mdi-close-circle-outline"})):b("",!0)]),_:2},1024)])]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1}))}}),I={class:"d-flex fill-height align-center justify-center"},B=_({__name:"GrpSlideCenteredActiveItem",setup(p){const a=r(null);return(d,o)=>(s(),n(S,{class:"mx-auto",elevation:"8","max-width":"800"},{default:l(()=>[e(v,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t),class:"pa-4","center-active":"","show-arrows":""},{default:l(()=>[(s(),m(f,null,w(15,t=>e(y,{key:t},{default:l(({isSelected:i,toggle:u})=>[e(x,{color:i?"primary":"grey-lighten-1",class:"ma-4",height:"200",width:"100",onClick:u},{default:l(()=>[V("div",I,[e(k,null,{default:l(()=>[i?(s(),n(C,{key:0,color:"white",size:"48",icon:"mdi-close-circle-outline"})):b("",!0)]),_:2},1024)])]),_:2},1032,["color","onClick"])]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1}))}}),M={class:"d-flex fill-height align-center justify-center"},A=_({__name:"GrpSlideCustomIcons",setup(p){const a=r(null);return(d,o)=>(s(),n(S,{class:"mx-auto",elevation:"8","max-width":"800"},{default:l(()=>[e(v,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t),class:"pa-4","prev-icon":"mdi-minus","next-icon":"mdi-plus","selected-class":"bg-primary","show-arrows":""},{default:l(()=>[(s(),m(f,null,w(15,t=>e(y,{key:t},{default:l(({isSelected:i,toggle:u,selectedClass:c})=>[e(x,{color:"grey-lighten-1",class:$(["ma-4",c]),height:"200",width:"100",onClick:u},{default:l(()=>[V("div",M,[e(k,null,{default:l(()=>[i?(s(),n(C,{key:0,color:"white",size:"48",icon:"mdi-close-circle-outline"})):b("",!0)]),_:2},1024)])]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1}))}}),N={class:"d-flex fill-height align-center justify-center"},F=_({__name:"GrpSlideMandatory",setup(p){const a=r(null);return(d,o)=>(s(),n(S,{class:"mx-auto",elevation:"8","max-width":"800"},{default:l(()=>[e(v,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t),class:"pa-4","selected-class":"bg-primary",mandatory:"","show-arrows":""},{default:l(()=>[(s(),m(f,null,w(15,t=>e(y,{key:t},{default:l(({isSelected:i,toggle:u,selectedClass:c})=>[e(x,{color:"grey-lighten-1",class:$(["ma-4",c]),height:"200",width:"100",onClick:u},{default:l(()=>[V("div",N,[e(k,null,{default:l(()=>[i?(s(),n(C,{key:0,color:"white",size:"48",icon:"mdi-close-circle-outline"})):b("",!0)]),_:2},1024)])]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1}))}}),L={class:"d-flex fill-height align-center justify-center"},q=_({__name:"GrpSlideMultiple",setup(p){const a=r([]);return(d,o)=>(s(),n(S,{class:"mx-auto",elevation:"8","max-width":"800"},{default:l(()=>[e(v,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t),class:"pa-4","selected-class":"bg-primary",multiple:"","show-arrows":""},{default:l(()=>[(s(),m(f,null,w(15,t=>e(y,{key:t},{default:l(({isSelected:i,toggle:u,selectedClass:c})=>[e(x,{color:"grey-lighten-1",class:$(["ma-4",c]),height:"200",width:"100",onClick:u},{default:l(()=>[V("div",L,[e(k,null,{default:l(()=>[i?(s(),n(C,{key:0,color:"white",size:"48",icon:"mdi-close-circle-outline"})):b("",!0)]),_:2},1024)])]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1}))}}),R=_({__name:"SlideGroups",setup(p){const a=r({title:"Slide Groups"}),d=r([{text:"Ui Components",disabled:!1,to:"#"},{text:"Slide Groups",disabled:!0}]);return(o,t)=>(s(),m(f,null,[e(G,{title:a.value.title,breadcrumbs:d.value},null,8,["title","breadcrumbs"]),e(z,null,{default:l(()=>[e(g,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Active class"},{default:l(()=>[e(j)]),_:1})]),_:1}),e(g,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Center active"},{default:l(()=>[e(B)]),_:1})]),_:1}),e(g,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Custom Icons"},{default:l(()=>[e(A)]),_:1})]),_:1}),e(g,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Mandatory"},{default:l(()=>[e(F)]),_:1})]),_:1}),e(g,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Multiple"},{default:l(()=>[e(q)]),_:1})]),_:1})]),_:1})],64))}});export{R as default};
