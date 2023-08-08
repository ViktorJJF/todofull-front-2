import{_ as M}from"./BaseBreadcrumb.5c371145.js";import{_ as d}from"./BaseCard.0debe86d.js";import{e as $,g as h,r as n,o as i,f as p,c as x,w as t,d as o,p as E,a as e,b as m,m as N,t as W,F as B}from"./index.aed0d878.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";const A={class:"text-center"},O=$({__name:"ChipsClosable",setup(r){const a=h(!0);return(l,s)=>{const u=n("v-chip"),c=n("v-btn");return i(),p("div",A,[a.value?(i(),x(u,{key:0,class:"ma-2",closable:"","onClick:close":s[0]||(s[0]=_=>a.value=!1)},{default:t(()=>[o(" Closable ")]),_:1})):E("",!0),a.value?E("",!0):(i(),x(c,{key:1,close:"",color:"primary",dark:"",onClick:s[1]||(s[1]=_=>a.value=!0)},{default:t(()=>[o(" Reset Chip ")]),_:1}))])}}}),T={},U={class:"d-flex flex-wrap gap-2"};function Y(r,a){const l=n("v-chip");return i(),p("div",U,[e(l,null,{default:t(()=>[o(" Default ")]),_:1}),e(l,{color:"primary"},{default:t(()=>[o(" Primary ")]),_:1}),e(l,{color:"secondary"},{default:t(()=>[o(" Secondary ")]),_:1}),e(l,{color:"error","text-color":"white"},{default:t(()=>[o(" Error ")]),_:1}),e(l,{color:"warning","text-color":"white"},{default:t(()=>[o(" Warning ")]),_:1}),e(l,{color:"success","text-color":"white"},{default:t(()=>[o(" Success ")]),_:1})])}var F=v(T,[["render",Y]]);const I={},J={class:"text-center"};function q(r,a){const l=n("v-chip");return i(),p("div",J,[e(l,{color:"secondary",draggable:""},{default:t(()=>[o(" Default ")]),_:1})])}var H=v(I,[["render",q]]);const G={},K={class:"d-flex flex-wrap gap-2"};function Q(r,a){const l=n("v-chip");return i(),p("div",K,[e(l,{label:""},{default:t(()=>[o(" Label ")]),_:1}),e(l,{color:"primary",label:""},{default:t(()=>[o(" Primary ")]),_:1}),e(l,{color:"secondary",label:""},{default:t(()=>[o(" Secondary ")]),_:1}),e(l,{color:"error",label:""},{default:t(()=>[o(" Error ")]),_:1}),e(l,{color:"warning",label:""},{default:t(()=>[o(" Warning ")]),_:1}),e(l,{color:"success",label:""},{default:t(()=>[o(" Success ")]),_:1})])}var X=v(G,[["render",Q]]);const Z={},ee={class:"d-flex flex-wrap gap-2"};function te(r,a){const l=n("v-chip");return i(),p("div",ee,[e(l,{variant:"outlined"},{default:t(()=>[o(" Default ")]),_:1}),e(l,{variant:"outlined",color:"primary"},{default:t(()=>[o(" Primary ")]),_:1}),e(l,{variant:"outlined",color:"secondary"},{default:t(()=>[o(" Secondary ")]),_:1}),e(l,{variant:"outlined",color:"error"},{default:t(()=>[o(" Error ")]),_:1}),e(l,{variant:"outlined",color:"warning"},{default:t(()=>[o(" Warning ")]),_:1}),e(l,{variant:"outlined",color:"success"},{default:t(()=>[o(" Success ")]),_:1})])}var le=v(Z,[["render",te]]);const oe={},ne={class:"d-flex flex-wrap gap-2"};function ae(r,a){const l=n("v-chip");return i(),p("div",ne,[e(l,{size:"x-small",color:"primary"},{default:t(()=>[o(" x-small ")]),_:1}),e(l,{size:"small",color:"secondary"},{default:t(()=>[o(" Small ")]),_:1}),e(l,{color:"error"},{default:t(()=>[o(" Normal ")]),_:1}),e(l,{size:"large",color:"warning"},{default:t(()=>[o(" Large ")]),_:1}),e(l,{size:"x-large",color:"success"},{default:t(()=>[o(" x-Large ")]),_:1})])}var ce=v(oe,[["render",ae]]);const se={},ie={class:"text-center"};function re(r,a){const l=n("v-chip");return i(),p("div",ie,[e(l,{ripple:!1,color:"primary",link:""},{default:t(()=>[o(" No Ripple ")]),_:1})])}var _e=v(se,[["render",re]]);const de={},ue={class:"d-flex flex-wrap gap-2"};function me(r,a){const l=n("v-chip"),s=n("v-avatar");return i(),p("div",ue,[e(l,{color:"primary","text-color":"white","prepend-icon":"mdi-account-circle"},{default:t(()=>[o(" Mike ")]),_:1}),e(l,{color:"secondary","text-color":"white","append-icon":"mdi-star"},{default:t(()=>[o(" Premium ")]),_:1}),e(l,{color:"warning","text-color":"white","append-icon":"mdi-cake-variant"},{default:t(()=>[o(" 1 Year ")]),_:1}),e(l,{color:"success","text-color":"white","prepend-":""},{prepend:t(()=>[e(s,{class:"green-darken-4"},{default:t(()=>[o(" 1 ")]),_:1})]),default:t(()=>[o(" Years ")]),_:1}),e(l,{closable:"",color:"error","text-color":"white","prepend-icon":"mdi-checkbox-marked-circle","model-value":!0},{default:t(()=>[o(" Confirmed ")]),_:1}),e(l,{closable:"",color:"teal","text-color":"white","close-icon":"mdi-delete","prepend-icon":"mdi-checkbox-marked-circle","model-value":!0},{default:t(()=>[o(" Confirmed ")]),_:1})])}var pe=v(de,[["render",me]]);const fe={},ve=m("div",{class:"text-h4 mb-2"},"Welcome Home...",-1),he=m("div",{class:"text-h6 font-weight-regular text-grey"}," Monday, 12:30 PM, Mostly Sunny ",-1),ge={class:"d-flex align-center"},xe=m("span",{class:"text-body-2 text-grey"},"81\xB0 / 62\xB0",-1);function be(r,a){const l=n("v-img"),s=n("v-avatar"),u=n("v-card-title"),c=n("v-divider"),_=n("v-chip"),g=n("v-card-text"),f=n("v-card");return i(),x(f,null,{default:t(()=>[e(l,{src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",cover:"","aspect-ratio":16/9}),e(u,{class:"flex-column align-start"},{default:t(()=>[ve,he,m("div",ge,[e(s,{size:"24",class:"mr-4"},{default:t(()=>[e(l,{src:"https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png",contain:""})]),_:1}),xe])]),_:1}),e(c,{class:"mx-4"}),e(g,{class:"d-flex justify-space-between"},{default:t(()=>[e(_,{"prepend-icon":"mdi-brightness-5"},{default:t(()=>[o(" Turn on lights ")]),_:1}),e(_,{"prepend-icon":"mdi-alarm-check"},{default:t(()=>[o(" Set alarm ")]),_:1}),e(_,{icon:"mdi-blinds"},{default:t(()=>[o(" Close blinds ")]),_:1})]),_:1})]),_:1})}var Ce=v(fe,[["render",be]]);const ye=m("span",{class:"mr-4"},"To",-1),$e={class:"mt-6"},we=$({__name:"ChipsExpandable",setup(r){const a=h(!1);return(l,s)=>{const u=n("v-img"),c=n("v-avatar"),_=n("v-chip"),g=n("v-list-item-title"),f=n("v-list-item-subtitle"),b=n("v-list-item-content"),C=n("v-icon"),w=n("v-btn"),k=n("v-list-item-action"),S=n("v-list-item"),j=n("v-list"),V=n("v-card"),P=n("v-menu"),z=n("v-row"),L=n("v-divider"),D=n("v-text-field"),R=n("v-textarea");return i(),x(V,{class:"pa-4"},{default:t(()=>[e(z,{class:"mt-2 ml-2"},{default:t(()=>[ye,e(P,{modelValue:a.value,"onUpdate:modelValue":s[2]||(s[2]=y=>a.value=y),bottom:"",right:"",transition:"scale-transition",location:"top start"},{activator:t(({props:y})=>[e(_,N({pill:""},y),{default:t(()=>[e(c,{left:""},{default:t(()=>[e(u,{src:"https://cdn.vuetifyjs.com/images/john.png"})]),_:1}),o(" John Leider ")]),_:2},1040)]),default:t(()=>[e(V,{width:"300"},{default:t(()=>[e(j,{dark:""},{default:t(()=>[e(S,null,{default:t(()=>[m("span",null,[e(u,{src:"https://cdn.vuetifyjs.com/images/john.png"})]),e(b,null,{default:t(()=>[e(g,null,{default:t(()=>[o("John Leider")]),_:1}),e(f,null,{default:t(()=>[o("john@vuetifyjs.com")]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(w,{icon:"",onClick:s[0]||(s[0]=y=>a.value=!1)},{default:t(()=>[e(C,null,{default:t(()=>[o("mdi-close-circle")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(j,null,{default:t(()=>[e(S,{onClick:s[1]||(s[1]=()=>{})},{default:t(()=>[e(k,null,{default:t(()=>[e(C,null,{default:t(()=>[o("mdi-briefcase")]),_:1})]),_:1}),e(f,null,{default:t(()=>[o("john@gmail.com")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),m("div",$e,[e(L),e(D,{"full-width":"",value:"Re: Vacation Request",label:"Subject","single-line":""}),e(R,{"full-width":"","single-line":"",label:"Message"})])]),_:1})}}}),ke=m("span",null,"(interest)",-1),Se=$({__name:"ChipsSelect",setup(r){const a=h(["Programming","Playing video games","Watching movies","Sleeping"]),l=h(["Streaming","Eating"]);function s(u){a.value.splice(a.value.indexOf(u),1),a.value=[...a.value]}return(u,c)=>{const _=n("v-chip"),g=n("v-combobox");return i(),x(g,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=f=>a.value=f),items:l.value,chips:"",clearable:"",label:"Your favorite hobbies",multiple:"","prepend-icon":"mdi-filter-variant",solo:""},{activator:t(({attrs:f,item:b,select:C,selected:w})=>[e(_,N(f,{"input-value":w,close:"",onClick:C,"onClick:close":k=>s(b)}),{default:t(()=>[m("strong",null,W(b),1),o("\xA0 "),ke]),_:2},1040,["input-value","onClick","onClick:close"])]),_:1},8,["modelValue","items"])}}}),Pe=$({__name:"Chips",setup(r){const a=h({title:"Chips"}),l=h([{text:"Ui Components",disabled:!1,to:"#"},{text:"Chips",disabled:!0}]);return(s,u)=>{const c=n("v-col"),_=n("v-row");return i(),p(B,null,[e(M,{title:a.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),e(_,null,{default:t(()=>[e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(d,{heading:"Colored"},{default:t(()=>[e(F)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(d,{heading:"Label"},{default:t(()=>[e(X)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(d,{heading:"Outlined"},{default:t(()=>[e(le)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(d,{heading:"Size"},{default:t(()=>[e(ce)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"4",class:"d-flex align-items-stretch"},{default:t(()=>[e(d,{heading:"Closable"},{default:t(()=>[e(O)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"4",class:"d-flex align-items-stretch"},{default:t(()=>[e(d,{heading:"Draggable"},{default:t(()=>[e(H)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"4",class:"d-flex align-items-stretch"},{default:t(()=>[e(d,{heading:"No Ripple"},{default:t(()=>[e(_e)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12"},{default:t(()=>[e(d,{heading:"Icon"},{default:t(()=>[e(pe)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(d,{heading:"Action"},{default:t(()=>[e(Ce)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(d,{heading:"Expandable"},{default:t(()=>[e(we)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(d,{heading:"Expandable"},{default:t(()=>[e(Se)]),_:1})]),_:1})]),_:1})],64)}}});export{Pe as default};
