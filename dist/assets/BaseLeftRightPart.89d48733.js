import{m as c,r as _,s as d,o as r,n,f as a,am as s,D as f,L as m,a as l,w as p,g as u}from"./index.243e5413.js";const v={class:"mainbox"},h={class:"right-part"},g={class:"toggleLeft hidden-md-and-up"},L=c({__name:"BaseLeftRightPart",setup(B){const e=_(!1);function o(){e.value=!e.value}return(t,C)=>{const i=d("vue-feather");return r(),n("div",v,[a("div",{class:f(["left-part",e.value?"showLeftPart":"HideLeftPart"])},[s(t.$slots,"channels"),s(t.$slots,"leftpart")],2),a("div",h,[e.value?(r(),n("div",{key:0,class:"boxoverlay",onClick:o})):m("",!0),a("div",g,[l(u,{icon:"",onClick:o,size:"small"},{default:p(()=>[l(i,{type:"menu",class:"feather-sm"})]),_:1})]),s(t.$slots,"rightpart")])])}}});var y=L;export{y as B};
