import{f as C,h as c,r as p,o as g,c as D,w as l,a as e,d as o,u as _,b as f,J as k,au as x}from"./index-3376cd88.js";/* empty css              */import{u as b}from"./customizer-2cd67362.js";const U={class:"flex mb-2"},h={class:"text-gray-600 font-medium"},z={class:"text-gray-600 font-medium ml-3"},R=C({__name:"VCalendar",setup(y){const d=c(new Date),v=c(""),u=b(),V=c({start:new Date(2020,0,1),end:new Date(2020,0,5)});return(M,a)=>{const n=p("v-card-title"),s=p("v-date-picker"),r=p("v-card-text"),m=p("v-card"),i=p("v-col"),w=p("v-row");return g(),D(w,null,{default:l(()=>[e(i,{cols:"12",lg:"4",sm:"12"},{default:l(()=>[e(m,null,{default:l(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:l(()=>[o("Calendar with Date")]),_:1}),e(r,null,{default:l(()=>[e(s,{"is-dark":_(u).darktheme,"is-expanded":"",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=t=>d.value=t)},null,8,["is-dark","modelValue"])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",lg:"4",sm:"12"},{default:l(()=>[e(m,null,{default:l(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:l(()=>[o("Calendar with Min Date")]),_:1}),e(r,null,{default:l(()=>[e(s,{"is-dark":_(u).darktheme,"is-expanded":"",modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=t=>d.value=t),"min-date":new Date},null,8,["is-dark","modelValue","min-date"])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",lg:"4",sm:"12"},{default:l(()=>[e(m,null,{default:l(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:l(()=>[o("Calendar with Max Date")]),_:1}),e(r,null,{default:l(()=>[e(s,{"is-dark":_(u).darktheme,"is-expanded":"",modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=t=>d.value=t),"max-date":new Date},null,8,["is-dark","modelValue","max-date"])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",lg:"6",sm:"12"},{default:l(()=>[e(m,null,{default:l(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:l(()=>[o("Calendar Date Range")]),_:1}),e(r,null,{default:l(()=>[e(s,{"is-dark":_(u).darktheme,modelValue:V.value,"onUpdate:modelValue":a[3]||(a[3]=t=>V.value=t),"is-range":""},null,8,["is-dark","modelValue"])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",lg:"6",sm:"12"},{default:l(()=>[e(m,null,{default:l(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:l(()=>[o("Calendar Date & Time")]),_:1}),e(r,null,{default:l(()=>[f("div",null,[f("div",U,[f("label",h,[k(f("input",{class:"mr-1",type:"radio",value:"","onUpdate:modelValue":a[4]||(a[4]=t=>v.value=t)},null,512),[[x,v.value]]),o("Local")]),f("label",z,[k(f("input",{class:"mr-1",type:"radio",value:"utc","onUpdate:modelValue":a[5]||(a[5]=t=>v.value=t)},null,512),[[x,v.value]]),o("UTC")])]),e(s,{"is-dark":_(u).darktheme,modelValue:d.value,"onUpdate:modelValue":a[6]||(a[6]=t=>d.value=t),mode:"dateTime",timezone:v.value},null,8,["is-dark","modelValue","timezone"])])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",lg:"12",sm:"12"},{default:l(()=>[e(m,null,{default:l(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:l(()=>[o("Calendar Month Steps")]),_:1}),e(r,null,{default:l(()=>[e(s,{"is-dark":_(u).darktheme,modelValue:d.value,"onUpdate:modelValue":a[7]||(a[7]=t=>d.value=t),rows:2,step:1},null,8,["is-dark","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{R as default};