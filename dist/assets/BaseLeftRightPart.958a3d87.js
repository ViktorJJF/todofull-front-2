import{e as d,g as p,r as n,o as r,f as l,b as a,O as s,n as f,p as v,a as c,w as m}from"./index.aed0d878.js";const u={class:"mainbox"},h={class:"right-part"},g={class:"toggleLeft hidden-md-and-up"},k=d({__name:"BaseLeftRightPart",setup(C){const e=p(!1);function o(){e.value=!e.value}return(t,L)=>{const i=n("vue-feather"),_=n("v-btn");return r(),l("div",u,[a("div",{class:f(["left-part",e.value?"showLeftPart":"HideLeftPart"])},[s(t.$slots,"channels"),s(t.$slots,"leftpart")],2),a("div",h,[e.value?(r(),l("div",{key:0,class:"boxoverlay",onClick:o})):v("",!0),a("div",g,[c(_,{icon:"",onClick:o,size:"small"},{default:m(()=>[c(i,{type:"menu",class:"feather-sm"})]),_:1})]),s(t.$slots,"rightpart")])])}}});export{k as _};