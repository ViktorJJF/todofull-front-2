import{_ as d,e as w,g as x,r as n,o as _,f as u,j as s,b as r,c as E,w as t,d as l,F as p,a as e,m as V,t as R}from"./index-7cedc233.js";import{B as A}from"./BaseBreadcrumb-dcb397dc.js";import{B as v}from"./BaseCard-acda8ab2.js";const M={class:"text-center"},O=w({__name:"ChipsClosable",setup(f){const c=x(!0);return(o,i)=>{const h=n("v-chip"),a=n("v-btn");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" Closable "),s(" ----------------------------------------------------------------------------- "),r("div",M,[c.value?(_(),E(h,{key:0,class:"ma-2",closable:"","onClick:close":i[0]||(i[0]=m=>c.value=!1)},{default:t(()=>[l(" Closable ")]),_:1})):s("v-if",!0),c.value?s("v-if",!0):(_(),E(a,{key:1,close:"",color:"primary",dark:"",onClick:i[1]||(i[1]=m=>c.value=!0)},{default:t(()=>[l(" Reset Chip ")]),_:1}))])],2112)}}}),W=d(O,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsClosable.vue"]]),I={},U={class:"d-flex flex-wrap gap-2"};function Y(f,c){const o=n("v-chip");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" Colored "),s(" ----------------------------------------------------------------------------- "),r("div",U,[e(o,null,{default:t(()=>[l(" Default ")]),_:1}),e(o,{color:"primary"},{default:t(()=>[l(" Primary ")]),_:1}),e(o,{color:"secondary"},{default:t(()=>[l(" Secondary ")]),_:1}),e(o,{color:"error","text-color":"white"},{default:t(()=>[l(" Error ")]),_:1}),e(o,{color:"warning","text-color":"white"},{default:t(()=>[l(" Warning ")]),_:1}),e(o,{color:"success","text-color":"white"},{default:t(()=>[l(" Success ")]),_:1})])],2112)}const F=d(I,[["render",Y],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsColored.vue"]]),J={},q={class:"text-center"};function H(f,c){const o=n("v-chip");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" Drag "),s(" ----------------------------------------------------------------------------- "),r("div",q,[e(o,{color:"secondary",draggable:""},{default:t(()=>[l(" Default ")]),_:1})])],2112)}const G=d(J,[["render",H],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsDraggable.vue"]]),K={},Q={class:"d-flex flex-wrap gap-2"};function X(f,c){const o=n("v-chip");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" Label "),s(" ----------------------------------------------------------------------------- "),r("div",Q,[e(o,{label:""},{default:t(()=>[l(" Label ")]),_:1}),e(o,{color:"primary",label:""},{default:t(()=>[l(" Primary ")]),_:1}),e(o,{color:"secondary",label:""},{default:t(()=>[l(" Secondary ")]),_:1}),e(o,{color:"error",label:""},{default:t(()=>[l(" Error ")]),_:1}),e(o,{color:"warning",label:""},{default:t(()=>[l(" Warning ")]),_:1}),e(o,{color:"success",label:""},{default:t(()=>[l(" Success ")]),_:1})])],2112)}const Z=d(K,[["render",X],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsLabel.vue"]]),ee={},te={class:"d-flex flex-wrap gap-2"};function oe(f,c){const o=n("v-chip");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" Outlined "),s(" ----------------------------------------------------------------------------- "),r("div",te,[e(o,{variant:"outlined"},{default:t(()=>[l(" Default ")]),_:1}),e(o,{variant:"outlined",color:"primary"},{default:t(()=>[l(" Primary ")]),_:1}),e(o,{variant:"outlined",color:"secondary"},{default:t(()=>[l(" Secondary ")]),_:1}),e(o,{variant:"outlined",color:"error"},{default:t(()=>[l(" Error ")]),_:1}),e(o,{variant:"outlined",color:"warning"},{default:t(()=>[l(" Warning ")]),_:1}),e(o,{variant:"outlined",color:"success"},{default:t(()=>[l(" Success ")]),_:1})])],2112)}const le=d(ee,[["render",oe],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsOutlined.vue"]]),ne={},se={class:"d-flex flex-wrap gap-2"};function ce(f,c){const o=n("v-chip");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" Size "),s(" ----------------------------------------------------------------------------- "),r("div",se,[e(o,{size:"x-small",color:"primary"},{default:t(()=>[l(" x-small ")]),_:1}),e(o,{size:"small",color:"secondary"},{default:t(()=>[l(" Small ")]),_:1}),e(o,{color:"error"},{default:t(()=>[l(" Normal ")]),_:1}),e(o,{size:"large",color:"warning"},{default:t(()=>[l(" Large ")]),_:1}),e(o,{size:"x-large",color:"success"},{default:t(()=>[l(" x-Large ")]),_:1})])],2112)}const ae=d(ne,[["render",ce],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsSize.vue"]]),ie={},re={class:"text-center"};function _e(f,c){const o=n("v-chip");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" No Ripple "),s(" ----------------------------------------------------------------------------- "),r("div",re,[e(o,{ripple:!1,color:"primary",link:""},{default:t(()=>[l(" No Ripple ")]),_:1})])],2112)}const de=d(ie,[["render",_e],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsNoRipple.vue"]]),ue={},pe={class:"d-flex flex-wrap gap-2"};function fe(f,c){const o=n("v-chip"),i=n("v-avatar");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" Icon "),s(" ----------------------------------------------------------------------------- "),r("div",pe,[e(o,{color:"primary","text-color":"white","prepend-icon":"mdi-account-circle"},{default:t(()=>[l(" Mike ")]),_:1}),e(o,{color:"secondary","text-color":"white","append-icon":"mdi-star"},{default:t(()=>[l(" Premium ")]),_:1}),e(o,{color:"warning","text-color":"white","append-icon":"mdi-cake-variant"},{default:t(()=>[l(" 1 Year ")]),_:1}),e(o,{color:"success","text-color":"white","prepend-":""},{prepend:t(()=>[e(i,{class:"green-darken-4"},{default:t(()=>[l(" 1 ")]),_:1})]),default:t(()=>[l(" Years ")]),_:1}),e(o,{closable:"",color:"error","text-color":"white","prepend-icon":"mdi-checkbox-marked-circle","model-value":!0},{default:t(()=>[l(" Confirmed ")]),_:1}),e(o,{closable:"",color:"teal","text-color":"white","close-icon":"mdi-delete","prepend-icon":"mdi-checkbox-marked-circle","model-value":!0},{default:t(()=>[l(" Confirmed ")]),_:1})])],2112)}const me=d(ue,[["render",fe],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsIcon.vue"]]),ve={},he=r("div",{class:"text-h4 mb-2"},"Welcome Home...",-1),ge=r("div",{class:"text-h6 font-weight-regular text-grey"}," Monday, 12:30 PM, Mostly Sunny ",-1),xe={class:"d-flex align-center"},be=r("span",{class:"text-body-2 text-grey"},"81° / 62°",-1);function Ce(f,c){const o=n("v-img"),i=n("v-avatar"),h=n("v-card-title"),a=n("v-divider"),m=n("v-chip"),b=n("v-card-text"),g=n("v-card");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" Action "),s(" ----------------------------------------------------------------------------- "),e(g,null,{default:t(()=>[e(o,{src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",cover:"","aspect-ratio":16/9}),e(h,{class:"flex-column align-start"},{default:t(()=>[he,ge,r("div",xe,[e(i,{size:"24",class:"mr-4"},{default:t(()=>[e(o,{src:"https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png",contain:""})]),_:1}),be])]),_:1}),e(a,{class:"mx-4"}),e(b,{class:"d-flex justify-space-between"},{default:t(()=>[e(m,{"prepend-icon":"mdi-brightness-5"},{default:t(()=>[l(" Turn on lights ")]),_:1}),e(m,{"prepend-icon":"mdi-alarm-check"},{default:t(()=>[l(" Set alarm ")]),_:1}),e(m,{icon:"mdi-blinds"},{default:t(()=>[l(" Close blinds ")]),_:1})]),_:1})]),_:1})],2112)}const ye=d(ve,[["render",Ce],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsAction.vue"]]),$e=r("span",{class:"mr-4"},"To",-1),we={class:"mt-6"},je=w({__name:"ChipsExpandable",setup(f){const c=x(!1);return(o,i)=>{const h=n("v-img"),a=n("v-avatar"),m=n("v-chip"),b=n("v-list-item-title"),g=n("v-list-item-subtitle"),C=n("v-list-item-content"),y=n("v-icon"),j=n("v-btn"),k=n("v-list-item-action"),S=n("v-list-item"),D=n("v-list"),T=n("v-card"),N=n("v-menu"),z=n("v-row"),B=n("v-divider"),L=n("v-text-field"),P=n("v-textarea");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" Expandable "),s(" ----------------------------------------------------------------------------- "),e(T,{class:"pa-4"},{default:t(()=>[e(z,{class:"mt-2 ml-2"},{default:t(()=>[$e,e(N,{modelValue:c.value,"onUpdate:modelValue":i[2]||(i[2]=$=>c.value=$),bottom:"",right:"",transition:"scale-transition",location:"top start"},{activator:t(({props:$})=>[e(m,V({pill:""},$),{default:t(()=>[e(a,{left:""},{default:t(()=>[e(h,{src:"https://cdn.vuetifyjs.com/images/john.png"})]),_:1}),l(" John Leider ")]),_:2},1040)]),default:t(()=>[e(T,{width:"300"},{default:t(()=>[e(D,{dark:""},{default:t(()=>[e(S,null,{default:t(()=>[r("span",null,[e(h,{src:"https://cdn.vuetifyjs.com/images/john.png"})]),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[l("John Leider")]),_:1}),e(g,null,{default:t(()=>[l("john@vuetifyjs.com")]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(j,{icon:"",onClick:i[0]||(i[0]=$=>c.value=!1)},{default:t(()=>[e(y,null,{default:t(()=>[l("mdi-close-circle")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(D,null,{default:t(()=>[e(S,{onClick:i[1]||(i[1]=()=>{})},{default:t(()=>[e(k,null,{default:t(()=>[e(y,null,{default:t(()=>[l("mdi-briefcase")]),_:1})]),_:1}),e(g,null,{default:t(()=>[l("john@gmail.com")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),r("div",we,[e(B),e(L,{"full-width":"",value:"Re: Vacation Request",label:"Subject","single-line":""}),e(P,{"full-width":"","single-line":"",label:"Message"})])]),_:1})],2112)}}}),ke=d(je,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsExpandable.vue"]]),Se=r("span",null,"(interest)",-1),De=w({__name:"ChipsSelect",setup(f){const c=x(["Programming","Playing video games","Watching movies","Sleeping"]),o=x(["Streaming","Eating"]);function i(h){c.value.splice(c.value.indexOf(h),1),c.value=[...c.value]}return(h,a)=>{const m=n("v-chip"),b=n("v-combobox");return _(),u(p,null,[s(" ----------------------------------------------------------------------------- "),s(" Select "),s(" ----------------------------------------------------------------------------- "),e(b,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=g=>c.value=g),items:o.value,chips:"",clearable:"",label:"Your favorite hobbies",multiple:"","prepend-icon":"mdi-filter-variant",solo:""},{activator:t(({attrs:g,item:C,select:y,selected:j})=>[e(m,V(g,{"input-value":j,close:"",onClick:y,"onClick:close":k=>i(C)}),{default:t(()=>[r("strong",null,R(C),1),l("  "),Se]),_:2},1040,["input-value","onClick","onClick:close"])]),_:1},8,["modelValue","items"])],2112)}}}),Te=d(De,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/chips/ChipsSelect.vue"]]),Ee=w({__name:"Chips",setup(f){const c=x({title:"Chips"}),o=x([{text:"Ui Components",disabled:!1,to:"#"},{text:"Chips",disabled:!0}]);return(i,h)=>{const a=n("v-col"),m=n("v-row");return _(),u(p,null,[e(A,{title:c.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),e(m,null,{default:t(()=>[e(a,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Colored"},{default:t(()=>[e(F)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Label"},{default:t(()=>[e(Z)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Outlined"},{default:t(()=>[e(le)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Size"},{default:t(()=>[e(ae)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"4",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Closable"},{default:t(()=>[e(W)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"4",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Draggable"},{default:t(()=>[e(G)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"4",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"No Ripple"},{default:t(()=>[e(de)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(v,{heading:"Icon"},{default:t(()=>[e(me)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Action"},{default:t(()=>[e(ye)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Expandable"},{default:t(()=>[e(ke)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Expandable"},{default:t(()=>[e(Te)]),_:1})]),_:1})]),_:1})],64)}}}),Be=d(Ee,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Chips.vue"]]);export{Be as default};
