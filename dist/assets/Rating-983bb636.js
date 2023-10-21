import{_ as h}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-cbe058b9.js";import{_ as m}from"./BaseCard.vue_vue_type_script_setup_true_lang-08e0cb31.js";import{e as p,g as r,r as c,o as d,f as u,b as i,a as e,F as g,w as n,d as b,t as y}from"./index-3fba6ee6.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const V=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," The v-rating component can be colored as you want, you can set both selected and not selected colors. ",-1),$={class:"d-flex flex-wrap gap-2 mt-6"},R=p({__name:"RatingColor",setup(_){const t=r(3);return(s,a)=>{const o=c("v-rating");return d(),u(g,null,[V,i("div",$,[e(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),"bg-color":"orange-lighten-1",color:"blue"},null,8,["modelValue"])])],64)}}}),w=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Clicking on a current rating value can reset the rating by using clearable prop. ",-1),k={class:"d-flex flex-wrap gap-2 mt-6"},U=p({__name:"RatingClearable",setup(_){const t=r(3);return(s,a)=>{const o=c("v-rating");return d(),u(g,null,[w,i("div",k,[e(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),clearable:""},null,8,["modelValue"])])],64)}}}),z=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," For ratings that are not meant to be changed you can use readonly prop. ",-1),C={class:"d-flex flex-wrap gap-2 mt-6"},F=p({__name:"RatingReadonly",setup(_){const t=r(3);return(s,a)=>{const o=c("v-rating");return d(),u(g,null,[z,i("div",C,[e(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),readonly:""},null,8,["modelValue"])])],64)}}}),L={class:"d-flex flex-wrap gap-2 mt-6"},S=p({__name:"RatingHover",setup(_){const t=r(3);return(s,a)=>{const o=c("v-rating");return d(),u("div",L,[e(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),hover:""},null,8,["modelValue"])])}}}),j={},I=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Control the space occupied by v-rating items using the density prop. ",-1),B={class:"d-flex flex-column align-center justify-center mt-6"};function D(_,t){const s=c("v-rating");return d(),u(g,null,[I,i("div",B,[e(s,{class:"ma-2","model-value":3,density:"default"}),e(s,{class:"ma-2","model-value":3,density:"comfortable"}),e(s,{class:"ma-2","model-value":3,density:"compact"})])],64)}const N=x(j,[["render",D]]),T=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," The v-rating component can display labels above or below each item. ",-1),A={class:"d-flex align-center justify-center flex-column mt-6"},O=p({__name:"RatingLabels",setup(_){const t=r(4);return(s,a)=>{const o=c("v-rating");return d(),u(g,null,[T,i("div",A,[e(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),class:"ma-2","item-labels":["sad","","","","happy"],"item-label-position":"top"},null,8,["modelValue"]),e(o,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=l=>t.value=l),class:"ma-2","item-labels":["sad","","","","happy"],"item-label-position":"bottom"},null,8,["modelValue"])])],64)}}}),E=i("p",{class:"text-subtitle-1 text-grey-darken-1"},"You can use custom icons.",-1),H={class:"d-flex align-center justify-center flex-column mt-6"},P=p({__name:"RatingIcons",setup(_){const t=r(3.5);return(s,a)=>{const o=c("v-rating");return d(),u(g,null,[E,i("div",H,[e(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),"empty-icon":"mdi-circle-outline","full-icon":"mdi-circle","half-icon":"mdi-circle-half","half-increments":"",hover:""},null,8,["modelValue"])])],64)}}}),Y=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Change the number of items by modifying the the length prop. ",-1),q={class:"d-flex align-center justify-center flex-column mt-6"},G=p({__name:"RatingLength",setup(_){const t=r(2);return(s,a)=>{const o=c("v-rating");return d(),u(g,null,[Y,i("div",q,[e(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),length:"10"},null,8,["modelValue"])])],64)}}}),J=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Provide a label to assistive technologies for each item. ",-1),K={class:"d-flex flex-wrap gap-2 mt-6"},M=p({__name:"RatingAriaLabel",setup(_){const t=r(4);return(s,a)=>{const o=c("v-rating");return d(),u(g,null,[J,i("div",K,[e(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),"item-aria-label":"custom icon label text {0} of {1}"},null,8,["modelValue"])])],64)}}}),Q=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating. ",-1),W={class:"mt-6"},X=p({__name:"RatingItemSlot",setup(_){const t=r(["green","purple","orange","indigo","red"]),s=r(4.5);return(a,o)=>{const l=c("v-icon"),v=c("v-rating");return d(),u(g,null,[Q,i("div",W,[e(v,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=f=>s.value=f)},{item:n(f=>[e(l,{color:f.isFilled?t.value[f.index]:"grey-lighten-1",large:""},{default:n(()=>[b(y(f.isFilled?"mdi-star-circle":"mdi-star-circle-outline"),1)]),_:2},1032,["color"])]),_:1},8,["modelValue"])])],64)}}}),Z={},ee=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Utilize the same sizing classes available in v-icon or provide your own with the size prop. ",-1),te={class:"d-flex flex-column align-center mt-6"};function le(_,t){const s=c("v-rating");return d(),u(g,null,[ee,i("div",te,[e(s,{value:"3",size:"x-small"}),e(s,{value:"3",size:"small"}),e(s,{value:"3"}),e(s,{value:"3",size:"large"}),e(s,{value:"3",size:"x-large"}),e(s,{value:"3",size:"72"})])],64)}const ae=x(Z,[["render",le]]),ce=p({__name:"Rating",setup(_){const t=r({title:"Rating"}),s=r([{text:"Ui Components",disabled:!1,to:"#"},{text:"Rating",disabled:!0}]);return(a,o)=>{const l=c("v-col"),v=c("v-row");return d(),u(g,null,[e(h,{title:t.value.title,breadcrumbs:s.value},null,8,["title","breadcrumbs"]),e(v,null,{default:n(()=>[e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Color"},{default:n(()=>[e(R)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Clearable"},{default:n(()=>[e(U)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Read Only"},{default:n(()=>[e(F)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Read Only"},{default:n(()=>[e(S)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Density"},{default:n(()=>[e(N)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Labels"},{default:n(()=>[e(O)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Icons"},{default:n(()=>[e(P)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Length"},{default:n(()=>[e(G)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Aria labels"},{default:n(()=>[e(M)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Item slot"},{default:n(()=>[e(X)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[e(m,{heading:"Size"},{default:n(()=>[e(ae)]),_:1})]),_:1})]),_:1})],64)}}});export{ce as default};
