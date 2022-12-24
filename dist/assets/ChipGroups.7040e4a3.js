import{_ as $}from"./BaseBreadcrumb.02b34150.js";import{_ as h}from"./BaseCard.40e43fa9.js";import{m as p,r as n,o as a,n as o,a as e,w as t,K as v,g as k,k as b,f as u,bc as g,F as r,t as V,c as _,l as c,x as y,O as C,M as w,ae as S,T as B,a0 as D,aP as T,d as F,b as W,e as x}from"./index.55ede2bf.js";const A=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with column prop can wrap their chips. ",-1),G=c("mdi-content-save-cog-outline"),H=c("mdi-check-bold"),M={class:"pa-4"},N=p({setup(m){const l=n(["Work","Home Improvement","Vacation","Food","Drawers","Shopping","Art","Tech","Creative Writing"]);return(d,f)=>(a(),o(r,null,[A,e(v,{elevation:"10",rounded:"xl",class:"mt-6"},{default:t(()=>[e(v,{class:"pa-3 primary text-right",dark:"",rounded:"t-xl"},{default:t(()=>[e(k,{icon:""},{default:t(()=>[e(b,null,{default:t(()=>[G]),_:1})]),_:1}),e(k,{class:"ml-2",icon:""},{default:t(()=>[e(b,null,{default:t(()=>[H]),_:1})]),_:1})]),_:1}),u("div",M,[e(g,{"active-class":"primary--text",column:""},{default:t(()=>[(a(!0),o(r,null,V(l.value,s=>(a(),_(C,{key:s},{default:t(()=>[c(y(s),1)]),_:2},1024))),128))]),_:1})])]),_:1})],64))}}),I=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with mandatory prop must always have a value selected. ",-1),P=p({setup(m){const l=n(["Work","Home","Vacation","Drawers","Shopping"]);return(d,f)=>(a(),o(r,null,[I,e(v,{elevation:"10",class:"py-4 px-1 mt-6"},{default:t(()=>[e(g,{mandatory:"","active-class":"primary--text"},{default:t(()=>[(a(!0),o(r,null,V(l.value,s=>(a(),_(C,{key:s},{default:t(()=>[c(y(s),1)]),_:2},1024))),128))]),_:1})]),_:1})],64))}}),U=u("h2",{class:"text-h5"},"Shirt Blouse",-1),E=u("span",{class:"text-h6"},"$44.50",-1),K=u("span",{class:"subheading"},"Select size",-1),L=c(" Add to Cart "),O=p({setup(m){const l=n("08"),d=n(["04","06","08","10","12","14"]);return(f,s)=>(a(),_(F,null,{default:t(()=>[e(S,null,{default:t(()=>[U,e(w),E]),_:1}),e(B,{class:"mx-4"}),e(D,null,{default:t(()=>[K,e(g,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=i=>l.value=i),"active-class":"deep-purple--text text--accent-4",mandatory:""},{default:t(()=>[(a(!0),o(r,null,V(d.value,i=>(a(),_(C,{key:i,value:i},{default:t(()=>[c(y(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(T,null,{default:t(()=>[e(k,{block:"",variant:"contained",color:"secondary"},{default:t(()=>[L]),_:1})]),_:1})]),_:1}))}}),R=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with multiple prop can have many values selected. ",-1),j=p({setup(m){const l=n(["Work","Home","Vacation","Food","Drawers"]);return(d,f)=>(a(),o(r,null,[R,e(v,{elevation:"10",class:"py-4 px-1 mt-6"},{default:t(()=>[e(g,{multiple:"","active-class":"primary--text"},{default:t(()=>[(a(!0),o(r,null,V(l.value,s=>(a(),_(C,{key:s},{default:t(()=>[c(y(s),1)]),_:2},1024))),128))]),_:1})]),_:1})],64))}}),Q=p({setup(m){const l=n({title:"Chip Groups"}),d=n([{text:"Ui Components",disabled:!1,to:"#"},{text:"Chip Groups",disabled:!0}]);return(f,s)=>(a(),o(r,null,[e($,{title:l.value.title,breadcrumbs:d.value},null,8,["title","breadcrumbs"]),e(W,null,{default:t(()=>[e(x,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(h,{heading:"Column"},{default:t(()=>[e(N)]),_:1})]),_:1}),e(x,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(h,{heading:"Product Card"},{default:t(()=>[e(O)]),_:1})]),_:1}),e(x,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(h,{heading:"Mandatory"},{default:t(()=>[e(P)]),_:1})]),_:1}),e(x,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(h,{heading:"Multiple"},{default:t(()=>[e(j)]),_:1})]),_:1})]),_:1})],64))}});export{Q as default};
