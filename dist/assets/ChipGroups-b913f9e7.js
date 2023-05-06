import{_ as f,e as C,g as d,r as o,o as a,f as _,j as c,a as t,w as e,d as i,b as m,F as u,k,c as G,t as w}from"./index-162e892b.js";import{B as T}from"./BaseBreadcrumb-5b14dc38.js";import{B as b}from"./BaseCard-fb4e2d84.js";const j=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with column prop can wrap their chips. ",-1),P={class:"pa-4"},S=C({__name:"GrpChipColumn",setup(g){const s=d(["Work","Home Improvement","Vacation","Food","Drawers","Shopping","Art","Tech","Creative Writing"]);return(v,x)=>{const l=o("v-icon"),n=o("v-btn"),r=o("v-sheet"),p=o("v-chip"),B=o("v-chip-group");return a(),_(u,null,[c(" ----------------------------------------------------------------------------- "),c(" Column "),c(" ----------------------------------------------------------------------------- "),j,t(r,{elevation:"10",rounded:"xl",class:"mt-6"},{default:e(()=>[t(r,{class:"pa-3 primary text-right",dark:"",rounded:"t-xl"},{default:e(()=>[t(n,{icon:""},{default:e(()=>[t(l,null,{default:e(()=>[i("mdi-content-save-cog-outline")]),_:1})]),_:1}),t(n,{class:"ml-2",icon:""},{default:e(()=>[t(l,null,{default:e(()=>[i("mdi-check-bold")]),_:1})]),_:1})]),_:1}),m("div",P,[t(B,{"active-class":"primary--text",column:""},{default:e(()=>[(a(!0),_(u,null,k(s.value,y=>(a(),G(p,{key:y},{default:e(()=>[i(w(y),1)]),_:2},1024))),128))]),_:1})])]),_:1})],64)}}}),F=f(S,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chip-group/GrpChipColumn.vue"]]),N=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with mandatory prop must always have a value selected. ",-1),W=C({__name:"GrpChipMandatory",setup(g){const s=d(["Work","Home","Vacation","Drawers","Shopping"]);return(v,x)=>{const l=o("v-chip"),n=o("v-chip-group"),r=o("v-sheet");return a(),_(u,null,[c(" ----------------------------------------------------------------------------- "),c(" Mandatory "),c(" ----------------------------------------------------------------------------- "),N,t(r,{elevation:"10",class:"py-4 px-1 mt-6"},{default:e(()=>[t(n,{mandatory:"","active-class":"primary--text"},{default:e(()=>[(a(!0),_(u,null,k(s.value,p=>(a(),G(l,{key:p},{default:e(()=>[i(w(p),1)]),_:2},1024))),128))]),_:1})]),_:1})],64)}}}),H=f(W,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chip-group/GrpChipMandatory.vue"]]),A=m("h2",{class:"text-h5"},"Shirt Blouse",-1),U=m("span",{class:"text-h6"},"$44.50",-1),E=m("span",{class:"subheading"},"Select size",-1),I=C({__name:"GrpChipProductCard",setup(g){const s=d("08"),v=d(["04","06","08","10","12","14"]);return(x,l)=>{const n=o("v-spacer"),r=o("v-card-title"),p=o("v-divider"),B=o("v-chip"),y=o("v-chip-group"),M=o("v-card-text"),V=o("v-btn"),D=o("v-card-actions"),$=o("v-card");return a(),_(u,null,[c(" ----------------------------------------------------------------------------- "),c(" Product "),c(" ----------------------------------------------------------------------------- "),t($,null,{default:e(()=>[t(r,null,{default:e(()=>[A,t(n),U]),_:1}),t(p,{class:"mx-4"}),t(M,null,{default:e(()=>[E,t(y,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=h=>s.value=h),"active-class":"deep-purple--text text--accent-4",mandatory:""},{default:e(()=>[(a(!0),_(u,null,k(v.value,h=>(a(),G(B,{key:h,value:h},{default:e(()=>[i(w(h),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(D,null,{default:e(()=>[t(V,{block:"",color:"secondary"},{default:e(()=>[i(" Add to Cart ")]),_:1})]),_:1})]),_:1})],2112)}}}),L=f(I,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chip-group/GrpChipProductCard.vue"]]),q=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with multiple prop can have many values selected. ",-1),z=C({__name:"GrpChipMultiple",setup(g){const s=d(["Work","Home","Vacation","Food","Drawers"]);return(v,x)=>{const l=o("v-chip"),n=o("v-chip-group"),r=o("v-sheet");return a(),_(u,null,[c(" ----------------------------------------------------------------------------- "),c(" Multiple "),c(" ----------------------------------------------------------------------------- "),q,t(r,{elevation:"10",class:"py-4 px-1 mt-6"},{default:e(()=>[t(n,{multiple:"","active-class":"primary--text"},{default:e(()=>[(a(!0),_(u,null,k(s.value,p=>(a(),G(l,{key:p},{default:e(()=>[i(w(p),1)]),_:2},1024))),128))]),_:1})]),_:1})],64)}}}),J=f(z,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chip-group/GrpChipMultiple.vue"]]),K=C({__name:"ChipGroups",setup(g){const s=d({title:"Chip Groups"}),v=d([{text:"Ui Components",disabled:!1,to:"#"},{text:"Chip Groups",disabled:!0}]);return(x,l)=>{const n=o("v-col"),r=o("v-row");return a(),_(u,null,[t(T,{title:s.value.title,breadcrumbs:v.value},null,8,["title","breadcrumbs"]),t(r,null,{default:e(()=>[t(n,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(b,{heading:"Column"},{default:e(()=>[t(F)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(b,{heading:"Product Card"},{default:e(()=>[t(L)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(b,{heading:"Mandatory"},{default:e(()=>[t(H)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(b,{heading:"Multiple"},{default:e(()=>[t(J)]),_:1})]),_:1})]),_:1})],64)}}}),X=f(K,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/ChipGroups.vue"]]);export{X as default};
