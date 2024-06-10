import{_ as S}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-a2c56a64.js";import{_ as C}from"./BaseCard.vue_vue_type_script_setup_true_lang-5bbdf108.js";import{f,h as i,r as o,o as a,g as r,a as t,w as e,d as u,b as d,F as p,j as b,c as h,t as k}from"./index-14e84a03.js";const D=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with column prop can wrap their chips. ",-1),F={class:"pa-4"},M=f({__name:"GrpChipColumn",setup(g){const c=i(["Work","Home Improvement","Vacation","Food","Drawers","Shopping","Art","Tech","Creative Writing"]);return(m,x)=>{const s=o("v-icon"),n=o("v-btn"),_=o("v-sheet"),l=o("v-chip"),w=o("v-chip-group");return a(),r(p,null,[D,t(_,{elevation:"10",rounded:"xl",class:"mt-6"},{default:e(()=>[t(_,{class:"pa-3 primary text-right",dark:"",rounded:"t-xl"},{default:e(()=>[t(n,{icon:""},{default:e(()=>[t(s,null,{default:e(()=>[u("mdi-content-save-cog-outline")]),_:1})]),_:1}),t(n,{class:"ml-2",icon:""},{default:e(()=>[t(s,null,{default:e(()=>[u("mdi-check-bold")]),_:1})]),_:1})]),_:1}),d("div",F,[t(w,{"active-class":"primary--text",column:""},{default:e(()=>[(a(!0),r(p,null,b(c.value,y=>(a(),h(l,{key:y},{default:e(()=>[u(k(y),1)]),_:2},1024))),128))]),_:1})])]),_:1})],64)}}}),W=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with mandatory prop must always have a value selected. ",-1),H=f({__name:"GrpChipMandatory",setup(g){const c=i(["Work","Home","Vacation","Drawers","Shopping"]);return(m,x)=>{const s=o("v-chip"),n=o("v-chip-group"),_=o("v-sheet");return a(),r(p,null,[W,t(_,{elevation:"10",class:"py-4 px-1 mt-6"},{default:e(()=>[t(n,{mandatory:"","active-class":"primary--text"},{default:e(()=>[(a(!0),r(p,null,b(c.value,l=>(a(),h(s,{key:l},{default:e(()=>[u(k(l),1)]),_:2},1024))),128))]),_:1})]),_:1})],64)}}}),N=d("h2",{class:"text-h5"},"Shirt Blouse",-1),A=d("span",{class:"text-h6"},"$44.50",-1),P=d("span",{class:"subheading"},"Select size",-1),T=f({__name:"GrpChipProductCard",setup(g){const c=i("08"),m=i(["04","06","08","10","12","14"]);return(x,s)=>{const n=o("v-spacer"),_=o("v-card-title"),l=o("v-divider"),w=o("v-chip"),y=o("v-chip-group"),$=o("v-card-text"),V=o("v-btn"),G=o("v-card-actions"),B=o("v-card");return a(),h(B,null,{default:e(()=>[t(_,null,{default:e(()=>[N,t(n),A]),_:1}),t(l,{class:"mx-4"}),t($,null,{default:e(()=>[P,t(y,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=v=>c.value=v),"active-class":"deep-purple--text text--accent-4",mandatory:""},{default:e(()=>[(a(!0),r(p,null,b(m.value,v=>(a(),h(w,{key:v,value:v},{default:e(()=>[u(k(v),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(G,null,{default:e(()=>[t(V,{block:"",color:"secondary"},{default:e(()=>[u(" Add to Cart ")]),_:1})]),_:1})]),_:1})}}}),U=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," Chip groups with multiple prop can have many values selected. ",-1),j=f({__name:"GrpChipMultiple",setup(g){const c=i(["Work","Home","Vacation","Food","Drawers"]);return(m,x)=>{const s=o("v-chip"),n=o("v-chip-group"),_=o("v-sheet");return a(),r(p,null,[U,t(_,{elevation:"10",class:"py-4 px-1 mt-6"},{default:e(()=>[t(n,{multiple:"","active-class":"primary--text"},{default:e(()=>[(a(!0),r(p,null,b(c.value,l=>(a(),h(s,{key:l},{default:e(()=>[u(k(l),1)]),_:2},1024))),128))]),_:1})]),_:1})],64)}}}),q=f({__name:"ChipGroups",setup(g){const c=i({title:"Chip Groups"}),m=i([{text:"Ui Components",disabled:!1,to:"#"},{text:"Chip Groups",disabled:!0}]);return(x,s)=>{const n=o("v-col"),_=o("v-row");return a(),r(p,null,[t(S,{title:c.value.title,breadcrumbs:m.value},null,8,["title","breadcrumbs"]),t(_,null,{default:e(()=>[t(n,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(C,{heading:"Column"},{default:e(()=>[t(M)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(C,{heading:"Product Card"},{default:e(()=>[t(T)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(C,{heading:"Mandatory"},{default:e(()=>[t(H)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(C,{heading:"Multiple"},{default:e(()=>[t(j)]),_:1})]),_:1})]),_:1})],64)}}});export{q as default};
