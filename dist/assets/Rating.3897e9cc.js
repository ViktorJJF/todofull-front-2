import{_ as h}from"./BaseBreadcrumb.da36eaea.js";import{_ as m}from"./BaseCard.ef377dab.js";import{m as f,r,o as c,n as d,f as n,a as e,bg as o,F as g,w as a,l as v,h as b,y,b as _,e as V}from"./index.697a154f.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const $=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," The v-rating component can be colored as you want, you can set both selected and not selected colors. ",-1),R={class:"d-flex flex-wrap gap-2 mt-6"},w=f({__name:"RatingColor",setup(u){const t=r(3);return(i,l)=>(c(),d(g,null,[$,n("div",R,[e(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),"bg-color":"orange-lighten-1",color:"blue"},null,8,["modelValue"])])],64))}}),k=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Clicking on a current rating value can reset the rating by using clearable prop. ",-1),U={class:"d-flex flex-wrap gap-2 mt-6"},z=f({__name:"RatingClearable",setup(u){const t=r(3);return(i,l)=>(c(),d(g,null,[k,n("div",U,[e(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),clearable:""},null,8,["modelValue"])])],64))}}),C=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," For ratings that are not meant to be changed you can use readonly prop. ",-1),F={class:"d-flex flex-wrap gap-2 mt-6"},I=f({__name:"RatingReadonly",setup(u){const t=r(3);return(i,l)=>(c(),d(g,null,[C,n("div",F,[e(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),readonly:""},null,8,["modelValue"])])],64))}}),L={class:"d-flex flex-wrap gap-2 mt-6"},S=f({__name:"RatingHover",setup(u){const t=r(3);return(i,l)=>(c(),d("div",L,[e(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),hover:""},null,8,["modelValue"])]))}}),j={},B=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Control the space occupied by v-rating items using the density prop. ",-1),D={class:"d-flex flex-column align-center justify-center mt-6"};function N(u,t){return c(),d(g,null,[B,n("div",D,[e(o,{class:"ma-2","model-value":3,density:"default"}),e(o,{class:"ma-2","model-value":3,density:"comfortable"}),e(o,{class:"ma-2","model-value":3,density:"compact"})])],64)}var T=x(j,[["render",N]]);const A=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," The v-rating component can display labels above or below each item. ",-1),O={class:"d-flex align-center justify-center flex-column mt-6"},E=f({__name:"RatingLabels",setup(u){const t=r(4);return(i,l)=>(c(),d(g,null,[A,n("div",O,[e(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),class:"ma-2","item-labels":["sad","","","","happy"],"item-label-position":"top"},null,8,["modelValue"]),e(o,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=s=>t.value=s),class:"ma-2","item-labels":["sad","","","","happy"],"item-label-position":"bottom"},null,8,["modelValue"])])],64))}}),H=n("p",{class:"text-subtitle-1 text-grey-darken-1"},"You can use custom icons.",-1),P={class:"d-flex align-center justify-center flex-column mt-6"},Y=f({__name:"RatingIcons",setup(u){const t=r(3.5);return(i,l)=>(c(),d(g,null,[H,n("div",P,[e(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),"empty-icon":"mdi-circle-outline","full-icon":"mdi-circle","half-icon":"mdi-circle-half","half-increments":"",hover:""},null,8,["modelValue"])])],64))}}),q=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Change the number of items by modifying the the length prop. ",-1),G={class:"d-flex align-center justify-center flex-column mt-6"},J=f({__name:"RatingLength",setup(u){const t=r(2);return(i,l)=>(c(),d(g,null,[q,n("div",G,[e(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),length:"10"},null,8,["modelValue"])])],64))}}),K=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Provide a label to assistive technologies for each item. ",-1),M={class:"d-flex flex-wrap gap-2 mt-6"},Q=f({__name:"RatingAriaLabel",setup(u){const t=r(4);return(i,l)=>(c(),d(g,null,[K,n("div",M,[e(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),"item-aria-label":"custom icon label text {0} of {1}"},null,8,["modelValue"])])],64))}}),W=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating. ",-1),X={class:"mt-6"},Z=f({__name:"RatingItemSlot",setup(u){const t=r(["green","purple","orange","indigo","red"]),i=r(4.5);return(l,s)=>(c(),d(g,null,[W,n("div",X,[e(o,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=p=>i.value=p)},{item:a(p=>[e(v,{color:p.isFilled?t.value[p.index]:"grey-lighten-1",large:""},{default:a(()=>[b(y(p.isFilled?"mdi-star-circle":"mdi-star-circle-outline"),1)]),_:2},1032,["color"])]),_:1},8,["modelValue"])])],64))}}),ee={},te=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Utilize the same sizing classes available in v-icon or provide your own with the size prop. ",-1),le={class:"d-flex flex-column align-center mt-6"};function ae(u,t){return c(),d(g,null,[te,n("div",le,[e(o,{value:"3",size:"x-small"}),e(o,{value:"3",size:"small"}),e(o,{value:"3"}),e(o,{value:"3",size:"large"}),e(o,{value:"3",size:"x-large"}),e(o,{value:"3",size:"72"})])],64)}var se=x(ee,[["render",ae]]);const ce=f({__name:"Rating",setup(u){const t=r({title:"Rating"}),i=r([{text:"Ui Components",disabled:!1,to:"#"},{text:"Rating",disabled:!0}]);return(l,s)=>(c(),d(g,null,[e(h,{title:t.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),e(V,null,{default:a(()=>[e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Color"},{default:a(()=>[e(w)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Clearable"},{default:a(()=>[e(z)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Read Only"},{default:a(()=>[e(I)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Read Only"},{default:a(()=>[e(S)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Density"},{default:a(()=>[e(T)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Labels"},{default:a(()=>[e(E)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Icons"},{default:a(()=>[e(Y)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Length"},{default:a(()=>[e(J)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Aria labels"},{default:a(()=>[e(Q)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Item slot"},{default:a(()=>[e(Z)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(m,{heading:"Size"},{default:a(()=>[e(se)]),_:1})]),_:1})]),_:1})],64))}});export{ce as default};
