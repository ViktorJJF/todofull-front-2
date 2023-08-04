import{_ as x,r as o,o as a,f as i,j as l,a as t,w as e,F as u,k as C,n as j,b as h,t as $,e as B,g as G,c as q,d as I}from"./index-c8e2a330.js";import{B as N}from"./BaseBreadcrumb-5af0134a.js";import{B as k}from"./BaseCard-780bd70a.js";const U={},E=h("p",{class:"text-subtitle-1 text-grey-darken-1"}," The selected-class prop allows you to designate a CSS class applied to selected items. ",-1),F={class:"text-h6 flex-grow-1 text-center"};function L(b,g){const c=o("v-card"),d=o("v-item"),_=o("v-col"),n=o("v-row"),s=o("v-container"),m=o("v-item-group");return a(),i(u,null,[l(" ----------------------------------------------------------------------------- "),l(" Selected "),l(" ----------------------------------------------------------------------------- "),E,t(m,{"selected-class":"bg-primary",class:"mt-6"},{default:e(()=>[t(s,null,{default:e(()=>[t(n,null,{default:e(()=>[(a(),i(u,null,C(3,p=>t(_,{key:p,cols:"12",md:"4"},{default:e(()=>[t(d,null,{default:e(({isSelected:v,selectedClass:r,toggle:f})=>[t(c,{class:j(["d-flex align-center",r]),dark:"",height:"90",onClick:f},{default:e(()=>[h("div",F,$(v?"Selected":"Click Me!"),1)]),_:2},1032,["class","onClick"])]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})],64)}const z=x(U,[["render",L],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/item-group/GrpItemSelected.vue"]]),P={},A=h("p",{class:"text-subtitle-1 text-grey-darken-1"}," mandatory item groups must have at least 1 item selected. ",-1),H={class:"text-h6 flex-grow-1 text-center"};function J(b,g){const c=o("v-scroll-y-transition"),d=o("v-card"),_=o("v-item"),n=o("v-col"),s=o("v-row"),m=o("v-container"),p=o("v-item-group");return a(),i(u,null,[l(" ----------------------------------------------------------------------------- "),l(" Mandatory "),l(" ----------------------------------------------------------------------------- "),A,t(p,{mandatory:"",class:"mt-6"},{default:e(()=>[t(m,null,{default:e(()=>[t(s,null,{default:e(()=>[(a(),i(u,null,C(3,v=>t(n,{key:v,cols:"12",md:"4"},{default:e(()=>[t(_,null,{default:e(({isSelected:r,toggle:f})=>[t(d,{color:r?"primary":"",class:"d-flex align-center",dark:"",height:"90",onClick:f},{default:e(()=>[t(c,null,{default:e(()=>[h("div",H,$(r?"Selected":"Click Me!"),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})],64)}const K=x(P,[["render",J],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/item-group/GrpItemMandatory.vue"]]),O={},Q=h("p",{class:"text-subtitle-1 text-grey-darken-1"}," Item groups can have multiple items selected. ",-1),R={class:"text-h6 flex-grow-1 text-center"};function W(b,g){const c=o("v-scroll-y-transition"),d=o("v-card"),_=o("v-item"),n=o("v-col"),s=o("v-row"),m=o("v-container"),p=o("v-item-group");return a(),i(u,null,[l(" ----------------------------------------------------------------------------- "),l(" Multiple "),l(" ----------------------------------------------------------------------------- "),Q,t(p,{multiple:"",class:"mt-6"},{default:e(()=>[t(m,null,{default:e(()=>[t(s,null,{default:e(()=>[(a(),i(u,null,C(3,v=>t(n,{key:v,cols:"12",md:"4"},{default:e(()=>[t(_,null,{default:e(({isSelected:r,toggle:f})=>[t(d,{color:r?"primary":"",class:"d-flex align-center",dark:"",height:"90",onClick:f},{default:e(()=>[t(c,null,{default:e(()=>[h("div",R,$(r?"Selected":"Click Me!"),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})],64)}const X=x(O,[["render",W],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/item-group/GrpItemMultiple.vue"]]),Y=B({__name:"GrpItemSelection",setup(b){const g=G([{src:"backgrounds/bg.jpg"},{src:"backgrounds/md.jpg"}]),c=G([]);return(d,_)=>{const n=o("v-btn"),s=o("v-img"),m=o("v-item"),p=o("v-col"),v=o("v-row"),r=o("v-item-group"),f=o("v-container"),S=o("v-card");return a(),i(u,null,[l(" ----------------------------------------------------------------------------- "),l(" selection "),l(" ----------------------------------------------------------------------------- "),t(S,null,{default:e(()=>[t(f,{class:"pa-1"},{default:e(()=>[t(r,{modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=y=>c.value=y),multiple:""},{default:e(()=>[t(v,null,{default:e(()=>[(a(!0),i(u,null,C(g.value,(y,M)=>(a(),q(p,{key:M,cols:"12",md:"6"},{default:e(()=>[t(m,null,{default:e(({isSelected:T,toggle:w})=>[t(s,{src:`https://cdn.vuetifyjs.com/images/${y.src}`,height:"150",class:"text-right pa-2",onClick:w},{default:e(()=>[t(n,{icon:T?"mdi-heart":"mdi-heart-outline"},null,8,["icon"])]),_:2},1032,["src","onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],2112)}}}),Z=x(Y,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/item-group/GrpItemSelection.vue"]]),tt={},et=h("p",{class:"text-subtitle-1 text-grey-darken-1"}," Easily hook up a custom chip group. ",-1);function ot(b,g){const c=o("v-toolbar-title"),d=o("v-toolbar"),_=o("v-text-field"),n=o("v-textarea"),s=o("v-divider"),m=o("v-subheader"),p=o("v-chip"),v=o("v-item"),r=o("v-item-group"),f=o("v-card-text"),S=o("v-spacer"),y=o("v-btn"),M=o("v-card-actions"),T=o("v-card");return a(),i(u,null,[l(" ----------------------------------------------------------------------------- "),l(" Chips "),l(" ----------------------------------------------------------------------------- "),et,t(T,{class:"mt-6"},{default:e(()=>[t(d,{flat:"",color:"secondary",dark:""},{default:e(()=>[t(c,null,{default:e(()=>[I("Submit a post")]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(_,{variant:"filled",label:"Title",value:"My new post"}),t(n,{variant:"filled",label:"Text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"}),t(s,{class:"my-2"}),t(r,{multiple:"","selected-class":"bg-secondary"},{default:e(()=>[t(m,null,{default:e(()=>[I("Tags")]),_:1}),(a(),i(u,null,C(8,w=>t(v,{key:w},{default:e(({selectedClass:D,toggle:V})=>[t(p,{class:j(D),onClick:V},{default:e(()=>[I(" Tag "+$(w),1)]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1})]),_:1}),t(s),t(M,null,{default:e(()=>[t(S),t(y,{color:"success"},{default:e(()=>[I(" Post ")]),_:1})]),_:1})]),_:1})],64)}const nt=x(tt,[["render",ot],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/item-group/GrpItemChip.vue"]]),lt=B({__name:"ItemGroups",setup(b){const g=G({title:"Item Groups"}),c=G([{text:"Ui Components",disabled:!1,to:"#"},{text:"Item Groups",disabled:!0}]);return(d,_)=>{const n=o("v-col"),s=o("v-row");return a(),i(u,null,[t(N,{title:g.value.title,breadcrumbs:c.value},null,8,["title","breadcrumbs"]),t(s,null,{default:e(()=>[t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(k,{heading:"Selected Item"},{default:e(()=>[t(z)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(k,{heading:"Mandatory"},{default:e(()=>[t(K)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(k,{heading:"Multiple"},{default:e(()=>[t(X)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(k,{heading:"Selection"},{default:e(()=>[t(Z)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(k,{heading:"Chips"},{default:e(()=>[t(nt)]),_:1})]),_:1})]),_:1})],64)}}}),_t=x(lt,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/ItemGroups.vue"]]);export{_t as default};
