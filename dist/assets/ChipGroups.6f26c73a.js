import{_ as w}from"./BaseBreadcrumb.dbb828d0.js";import{_ as f}from"./BaseCard.63c61b5b.js";import{m as p,r as u,o as a,n as r,a as e,w as t,K as v,g as b,l as k,h as n,f as c,aO as C,F as o,v as g,c as _,P as y,y as V,ap as $,M as G,T as S,ab as B,aW as D,d as M,b as x,e as T}from"./index.bf7d454a.js";const W=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with column prop can wrap their chips. ",-1),F={class:"pa-4"},A=p({__name:"GrpChipColumn",setup(m){const s=u(["Work","Home Improvement","Vacation","Food","Drawers","Shopping","Art","Tech","Creative Writing"]);return(d,h)=>(a(),r(o,null,[W,e(v,{elevation:"10",rounded:"xl",class:"mt-6"},{default:t(()=>[e(v,{class:"pa-3 primary text-right",dark:"",rounded:"t-xl"},{default:t(()=>[e(b,{icon:""},{default:t(()=>[e(k,null,{default:t(()=>[n("mdi-content-save-cog-outline")]),_:1})]),_:1}),e(b,{class:"ml-2",icon:""},{default:t(()=>[e(k,null,{default:t(()=>[n("mdi-check-bold")]),_:1})]),_:1})]),_:1}),c("div",F,[e(C,{"active-class":"primary--text",column:""},{default:t(()=>[(a(!0),r(o,null,g(s.value,l=>(a(),_(y,{key:l},{default:t(()=>[n(V(l),1)]),_:2},1024))),128))]),_:1})])]),_:1})],64))}}),H=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with mandatory prop must always have a value selected. ",-1),N=p({__name:"GrpChipMandatory",setup(m){const s=u(["Work","Home","Vacation","Drawers","Shopping"]);return(d,h)=>(a(),r(o,null,[H,e(v,{elevation:"10",class:"py-4 px-1 mt-6"},{default:t(()=>[e(C,{mandatory:"","active-class":"primary--text"},{default:t(()=>[(a(!0),r(o,null,g(s.value,l=>(a(),_(y,{key:l},{default:t(()=>[n(V(l),1)]),_:2},1024))),128))]),_:1})]),_:1})],64))}}),P=c("h2",{class:"text-h5"},"Shirt Blouse",-1),I=c("span",{class:"text-h6"},"$44.50",-1),U=c("span",{class:"subheading"},"Select size",-1),E=p({__name:"GrpChipProductCard",setup(m){const s=u("08"),d=u(["04","06","08","10","12","14"]);return(h,l)=>(a(),_(M,null,{default:t(()=>[e($,null,{default:t(()=>[P,e(G),I]),_:1}),e(S,{class:"mx-4"}),e(B,null,{default:t(()=>[U,e(C,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=i=>s.value=i),"active-class":"deep-purple--text text--accent-4",mandatory:""},{default:t(()=>[(a(!0),r(o,null,g(d.value,i=>(a(),_(y,{key:i,value:i},{default:t(()=>[n(V(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(D,null,{default:t(()=>[e(b,{block:"",color:"secondary"},{default:t(()=>[n(" Add to Cart ")]),_:1})]),_:1})]),_:1}))}}),K=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with multiple prop can have many values selected. ",-1),L=p({__name:"GrpChipMultiple",setup(m){const s=u(["Work","Home","Vacation","Food","Drawers"]);return(d,h)=>(a(),r(o,null,[K,e(v,{elevation:"10",class:"py-4 px-1 mt-6"},{default:t(()=>[e(C,{multiple:"","active-class":"primary--text"},{default:t(()=>[(a(!0),r(o,null,g(s.value,l=>(a(),_(y,{key:l},{default:t(()=>[n(V(l),1)]),_:2},1024))),128))]),_:1})]),_:1})],64))}}),q=p({__name:"ChipGroups",setup(m){const s=u({title:"Chip Groups"}),d=u([{text:"Ui Components",disabled:!1,to:"#"},{text:"Chip Groups",disabled:!0}]);return(h,l)=>(a(),r(o,null,[e(w,{title:s.value.title,breadcrumbs:d.value},null,8,["title","breadcrumbs"]),e(T,null,{default:t(()=>[e(x,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(f,{heading:"Column"},{default:t(()=>[e(A)]),_:1})]),_:1}),e(x,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(f,{heading:"Product Card"},{default:t(()=>[e(E)]),_:1})]),_:1}),e(x,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(f,{heading:"Mandatory"},{default:t(()=>[e(N)]),_:1})]),_:1}),e(x,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(f,{heading:"Multiple"},{default:t(()=>[e(L)]),_:1})]),_:1})]),_:1})],64))}});export{q as default};
