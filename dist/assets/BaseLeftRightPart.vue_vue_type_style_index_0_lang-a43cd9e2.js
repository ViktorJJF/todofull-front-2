import{f as u,h as p,r,o as s,g as a,u as h,n as m,a3 as o,q as l,b as c,a as i,w as v,k as g}from"./index-7bb36979.js";const C={class:"mainbox"},L={class:"right-part"},k={class:"toggleLeft hidden-md-and-up"},P=u({__name:"BaseLeftRightPart",setup(y){const _=g(),e=p(!1);function n(){e.value=!e.value}return(t,b)=>{const d=r("vue-feather"),f=r("v-btn");return s(),a("div",C,[h(_).state.isChatOneToOne?l("",!0):(s(),a("div",{key:0,class:m(["left-part showLeftPart",e.value?"showLeftPart":"HideLeftPart"])},[o(t.$slots,"channels"),o(t.$slots,"leftpart")],2)),c("div",L,[e.value?(s(),a("div",{key:0,class:"boxoverlay",onClick:n})):l("",!0),c("div",k,[i(f,{icon:"",onClick:n,size:"small"},{default:v(()=>[i(d,{type:"menu",class:"feather-sm"})]),_:1})]),o(t.$slots,"rightpart")])])}}});export{P as _};
