import{_ as d,e as h,g as p,r,o as l,f as c,j as t,b as a,n as u,a3 as o,a as i,w as v,F as m}from"./index-d4393047.js";const g={class:"mainbox"},L={class:"right-part"},B={class:"toggleLeft hidden-md-and-up"},C=h({__name:"BaseLeftRightPart",setup(b){const e=p(!1);function n(){e.value=!e.value}return(s,P)=>{const _=r("vue-feather"),f=r("v-btn");return l(),c(m,null,[t("-/Left chat list "),a("div",g,[a("div",{class:u(["left-part",e.value?"showLeftPart":"HideLeftPart"])},[o(s.$slots,"channels"),o(s.$slots,"leftpart")],2),t("-right chat conversation "),a("div",L,[e.value?(l(),c("div",{key:0,class:"boxoverlay",onClick:n})):t("v-if",!0),a("div",B,[i(f,{icon:"",onClick:n,size:"small"},{default:v(()=>[i(_,{type:"menu",class:"feather-sm"})]),_:1})]),o(s.$slots,"rightpart")]),t("-right chat conversation ")])],2112)}}}),y=d(C,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/BaseLeftRightPart.vue"]]);export{y as B};
