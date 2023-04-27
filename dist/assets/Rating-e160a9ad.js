import{_ as d,e as v,g as u,r as c,o as _,f as m,j as t,b as i,a as e,F as g,w as a,d as x,t as y}from"./index-d60222f9.js";import{B as R}from"./BaseBreadcrumb-f13326df.js";import{B as p}from"./BaseCard-a364feea.js";const V=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," The v-rating component can be colored as you want, you can set both selected and not selected colors. ",-1),$={class:"d-flex flex-wrap gap-2 mt-6"},C=v({__name:"RatingColor",setup(f){const l=u(3);return(s,o)=>{const r=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Color "),t(" ----------------------------------------------------------------------------- "),V,i("div",$,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),"bg-color":"orange-lighten-1",color:"blue"},null,8,["modelValue"])])],64)}}}),j=d(C,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingColor.vue"]]),D=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Clicking on a current rating value can reset the rating by using clearable prop. ",-1),w={class:"d-flex flex-wrap gap-2 mt-6"},T=v({__name:"RatingClearable",setup(f){const l=u(3);return(s,o)=>{const r=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Clearable "),t(" ----------------------------------------------------------------------------- "),D,i("div",w,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),clearable:""},null,8,["modelValue"])])],64)}}}),k=d(T,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingClearable.vue"]]),z=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," For ratings that are not meant to be changed you can use readonly prop. ",-1),L={class:"d-flex flex-wrap gap-2 mt-6"},U=v({__name:"RatingReadonly",setup(f){const l=u(3);return(s,o)=>{const r=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Readonly "),t(" ----------------------------------------------------------------------------- "),z,i("div",L,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),readonly:""},null,8,["modelValue"])])],64)}}}),I=d(U,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingReadonly.vue"]]),S={class:"d-flex flex-wrap gap-2 mt-6"},B=v({__name:"RatingHover",setup(f){const l=u(3);return(s,o)=>{const r=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Hover "),t(" ----------------------------------------------------------------------------- "),i("div",S,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),hover:""},null,8,["modelValue"])])],2112)}}}),A=d(B,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingHover.vue"]]),F={},H=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Control the space occupied by v-rating items using the density prop. ",-1),N={class:"d-flex flex-column align-center justify-center mt-6"};function O(f,l){const s=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Density "),t(" ----------------------------------------------------------------------------- "),H,i("div",N,[e(s,{class:"ma-2","model-value":3,density:"default"}),e(s,{class:"ma-2","model-value":3,density:"comfortable"}),e(s,{class:"ma-2","model-value":3,density:"compact"})])],64)}const E=d(F,[["render",O],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingDensity.vue"]]),P=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," The v-rating component can display labels above or below each item. ",-1),Y={class:"d-flex align-center justify-center flex-column mt-6"},q=v({__name:"RatingLabels",setup(f){const l=u(4);return(s,o)=>{const r=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Labels "),t(" ----------------------------------------------------------------------------- "),P,i("div",Y,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),class:"ma-2","item-labels":["sad","","","","happy"],"item-label-position":"top"},null,8,["modelValue"]),e(r,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=n=>l.value=n),class:"ma-2","item-labels":["sad","","","","happy"],"item-label-position":"bottom"},null,8,["modelValue"])])],64)}}}),G=d(q,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingLabels.vue"]]),J=i("p",{class:"text-subtitle-1 text-grey-darken-1"},"You can use custom icons.",-1),K={class:"d-flex align-center justify-center flex-column mt-6"},M=v({__name:"RatingIcons",setup(f){const l=u(3.5);return(s,o)=>{const r=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Icons "),t(" ----------------------------------------------------------------------------- "),J,i("div",K,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),"empty-icon":"mdi-circle-outline","full-icon":"mdi-circle","half-icon":"mdi-circle-half","half-increments":"",hover:""},null,8,["modelValue"])])],64)}}}),Q=d(M,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingIcons.vue"]]),W=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Change the number of items by modifying the the length prop. ",-1),X={class:"d-flex align-center justify-center flex-column mt-6"},Z=v({__name:"RatingLength",setup(f){const l=u(2);return(s,o)=>{const r=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Length "),t(" ----------------------------------------------------------------------------- "),W,i("div",X,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),length:"10"},null,8,["modelValue"])])],64)}}}),ee=d(Z,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingLength.vue"]]),te=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Provide a label to assistive technologies for each item. ",-1),le={class:"d-flex flex-wrap gap-2 mt-6"},ne=v({__name:"RatingAriaLabel",setup(f){const l=u(4);return(s,o)=>{const r=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Aria labels "),t(" ----------------------------------------------------------------------------- "),te,i("div",le,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),"item-aria-label":"custom icon label text {0} of {1}"},null,8,["modelValue"])])],64)}}}),oe=d(ne,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingAriaLabel.vue"]]),ae=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating. ",-1),se={class:"mt-6"},ie=v({__name:"RatingItemSlot",setup(f){const l=u(["green","purple","orange","indigo","red"]),s=u(4.5);return(o,r)=>{const n=c("v-icon"),h=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Item Slot "),t(" ----------------------------------------------------------------------------- "),ae,i("div",se,[e(h,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=b=>s.value=b)},{item:a(b=>[e(n,{color:b.isFilled?l.value[b.index]:"grey-lighten-1",large:""},{default:a(()=>[x(y(b.isFilled?"mdi-star-circle":"mdi-star-circle-outline"),1)]),_:2},1032,["color"])]),_:1},8,["modelValue"])])],64)}}}),re=d(ie,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingItemSlot.vue"]]),ce={},ue=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Utilize the same sizing classes available in v-icon or provide your own with the size prop. ",-1),de={class:"d-flex flex-column align-center mt-6"};function _e(f,l){const s=c("v-rating");return _(),m(g,null,[t(" ----------------------------------------------------------------------------- "),t(" Size "),t(" ----------------------------------------------------------------------------- "),ue,i("div",de,[e(s,{value:"3",size:"x-small"}),e(s,{value:"3",size:"small"}),e(s,{value:"3"}),e(s,{value:"3",size:"large"}),e(s,{value:"3",size:"x-large"}),e(s,{value:"3",size:"72"})])],64)}const me=d(ce,[["render",_e],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/rating/RatingSize.vue"]]),ge=v({__name:"Rating",setup(f){const l=u({title:"Rating"}),s=u([{text:"Ui Components",disabled:!1,to:"#"},{text:"Rating",disabled:!0}]);return(o,r)=>{const n=c("v-col"),h=c("v-row");return _(),m(g,null,[e(R,{title:l.value.title,breadcrumbs:s.value},null,8,["title","breadcrumbs"]),e(h,null,{default:a(()=>[e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Color"},{default:a(()=>[e(j)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Clearable"},{default:a(()=>[e(k)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Read Only"},{default:a(()=>[e(I)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Read Only"},{default:a(()=>[e(A)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Density"},{default:a(()=>[e(E)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Labels"},{default:a(()=>[e(G)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Icons"},{default:a(()=>[e(Q)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Length"},{default:a(()=>[e(ee)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Aria labels"},{default:a(()=>[e(oe)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Item slot"},{default:a(()=>[e(re)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(p,{heading:"Size"},{default:a(()=>[e(me)]),_:1})]),_:1})]),_:1})],64)}}}),be=d(ge,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Rating.vue"]]);export{be as default};
