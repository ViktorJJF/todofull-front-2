import{_ as N}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-3d107365.js";import{_ as b}from"./BaseCard.vue_vue_type_script_setup_true_lang-930e2dfe.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,f as r,a as t,w as e,F as i,i as k,n as V,b as g,t as I,e as q,g as w,c as T,d as C}from"./index-33b92a16.js";const U={},D=g("p",{class:"text-subtitle-1 text-grey-darken-1"}," The selected-class prop allows you to designate a CSS class applied to selected items. ",-1),E={class:"text-h6 flex-grow-1 text-center"};function F(h,f){const l=o("v-card"),d=o("v-item"),a=o("v-col"),n=o("v-row"),c=o("v-container"),u=o("v-item-group");return s(),r(i,null,[D,t(u,{"selected-class":"bg-primary",class:"mt-6"},{default:e(()=>[t(c,null,{default:e(()=>[t(n,null,{default:e(()=>[(s(),r(i,null,k(3,m=>t(a,{key:m,cols:"12",md:"4"},{default:e(()=>[t(d,null,{default:e(({isSelected:p,selectedClass:_,toggle:v})=>[t(l,{class:V(["d-flex align-center",_]),dark:"",height:"90",onClick:v},{default:e(()=>[g("div",E,I(p?"Selected":"Click Me!"),1)]),_:2},1032,["class","onClick"])]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})],64)}const L=$(U,[["render",F]]),z={},P=g("p",{class:"text-subtitle-1 text-grey-darken-1"}," mandatory item groups must have at least 1 item selected. ",-1),A={class:"text-h6 flex-grow-1 text-center"};function H(h,f){const l=o("v-scroll-y-transition"),d=o("v-card"),a=o("v-item"),n=o("v-col"),c=o("v-row"),u=o("v-container"),m=o("v-item-group");return s(),r(i,null,[P,t(m,{mandatory:"",class:"mt-6"},{default:e(()=>[t(u,null,{default:e(()=>[t(c,null,{default:e(()=>[(s(),r(i,null,k(3,p=>t(n,{key:p,cols:"12",md:"4"},{default:e(()=>[t(a,null,{default:e(({isSelected:_,toggle:v})=>[t(d,{color:_?"primary":"",class:"d-flex align-center",dark:"",height:"90",onClick:v},{default:e(()=>[t(l,null,{default:e(()=>[g("div",A,I(_?"Selected":"Click Me!"),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})],64)}const J=$(z,[["render",H]]),K={},O=g("p",{class:"text-subtitle-1 text-grey-darken-1"}," Item groups can have multiple items selected. ",-1),Q={class:"text-h6 flex-grow-1 text-center"};function R(h,f){const l=o("v-scroll-y-transition"),d=o("v-card"),a=o("v-item"),n=o("v-col"),c=o("v-row"),u=o("v-container"),m=o("v-item-group");return s(),r(i,null,[O,t(m,{multiple:"",class:"mt-6"},{default:e(()=>[t(u,null,{default:e(()=>[t(c,null,{default:e(()=>[(s(),r(i,null,k(3,p=>t(n,{key:p,cols:"12",md:"4"},{default:e(()=>[t(a,null,{default:e(({isSelected:_,toggle:v})=>[t(d,{color:_?"primary":"",class:"d-flex align-center",dark:"",height:"90",onClick:v},{default:e(()=>[t(l,null,{default:e(()=>[g("div",Q,I(_?"Selected":"Click Me!"),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})],64)}const W=$(K,[["render",R]]),X=q({__name:"GrpItemSelection",setup(h){const f=w([{src:"backgrounds/bg.jpg"},{src:"backgrounds/md.jpg"}]),l=w([]);return(d,a)=>{const n=o("v-btn"),c=o("v-img"),u=o("v-item"),m=o("v-col"),p=o("v-row"),_=o("v-item-group"),v=o("v-container"),S=o("v-card");return s(),T(S,null,{default:e(()=>[t(v,{class:"pa-1"},{default:e(()=>[t(_,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=x=>l.value=x),multiple:""},{default:e(()=>[t(p,null,{default:e(()=>[(s(!0),r(i,null,k(f.value,(x,G)=>(s(),T(m,{key:G,cols:"12",md:"6"},{default:e(()=>[t(u,null,{default:e(({isSelected:M,toggle:y})=>[t(c,{src:`https://cdn.vuetifyjs.com/images/${x.src}`,height:"150",class:"text-right pa-2",onClick:y},{default:e(()=>[t(n,{icon:M?"mdi-heart":"mdi-heart-outline"},null,8,["icon"])]),_:2},1032,["src","onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),Y={},Z=g("p",{class:"text-subtitle-1 text-grey-darken-1"}," Easily hook up a custom chip group. ",-1);function tt(h,f){const l=o("v-toolbar-title"),d=o("v-toolbar"),a=o("v-text-field"),n=o("v-textarea"),c=o("v-divider"),u=o("v-subheader"),m=o("v-chip"),p=o("v-item"),_=o("v-item-group"),v=o("v-card-text"),S=o("v-spacer"),x=o("v-btn"),G=o("v-card-actions"),M=o("v-card");return s(),r(i,null,[Z,t(M,{class:"mt-6"},{default:e(()=>[t(d,{flat:"",color:"secondary",dark:""},{default:e(()=>[t(l,null,{default:e(()=>[C("Submit a post")]),_:1})]),_:1}),t(v,null,{default:e(()=>[t(a,{variant:"filled",label:"Title",value:"My new post"}),t(n,{variant:"filled",label:"Text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"}),t(c,{class:"my-2"}),t(_,{multiple:"","selected-class":"bg-secondary"},{default:e(()=>[t(u,null,{default:e(()=>[C("Tags")]),_:1}),(s(),r(i,null,k(8,y=>t(p,{key:y},{default:e(({selectedClass:B,toggle:j})=>[t(m,{class:V(B),onClick:j},{default:e(()=>[C(" Tag "+I(y),1)]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1})]),_:1}),t(c),t(G,null,{default:e(()=>[t(S),t(x,{color:"success"},{default:e(()=>[C(" Post ")]),_:1})]),_:1})]),_:1})],64)}const et=$(Y,[["render",tt]]),st=q({__name:"ItemGroups",setup(h){const f=w({title:"Item Groups"}),l=w([{text:"Ui Components",disabled:!1,to:"#"},{text:"Item Groups",disabled:!0}]);return(d,a)=>{const n=o("v-col"),c=o("v-row");return s(),r(i,null,[t(N,{title:f.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),t(c,null,{default:e(()=>[t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(b,{heading:"Selected Item"},{default:e(()=>[t(L)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(b,{heading:"Mandatory"},{default:e(()=>[t(J)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(b,{heading:"Multiple"},{default:e(()=>[t(W)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(b,{heading:"Selection"},{default:e(()=>[t(X)]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(b,{heading:"Chips"},{default:e(()=>[t(et)]),_:1})]),_:1})]),_:1})],64)}}});export{st as default};
