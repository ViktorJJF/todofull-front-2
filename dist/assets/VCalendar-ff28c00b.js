import{_ as C,e as g,g as c,r as p,o as D,c as b,w as a,a as e,d as o,u as _,b as f,K as k,ap as x}from"./index-2d5d7655.js";/* empty css              */import{u as U}from"./customizer-8cd18ed8.js";const h={class:"flex mb-2"},z={class:"text-gray-600 font-medium"},T={class:"text-gray-600 font-medium ml-3"},y=g({__name:"VCalendar",setup(M){const d=c(new Date),v=c(""),u=U(),V=c({start:new Date(2020,0,1),end:new Date(2020,0,5)});return(B,l)=>{const n=p("v-card-title"),s=p("v-date-picker"),r=p("v-card-text"),m=p("v-card"),i=p("v-col"),w=p("v-row");return D(),b(w,null,{default:a(()=>[e(i,{cols:"12",lg:"4",sm:"12"},{default:a(()=>[e(m,null,{default:a(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:a(()=>[o("Calendar with Date")]),_:1}),e(r,null,{default:a(()=>[e(s,{"is-dark":_(u).darktheme,"is-expanded":"",modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=t=>d.value=t)},null,8,["is-dark","modelValue"])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",lg:"4",sm:"12"},{default:a(()=>[e(m,null,{default:a(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:a(()=>[o("Calendar with Min Date")]),_:1}),e(r,null,{default:a(()=>[e(s,{"is-dark":_(u).darktheme,"is-expanded":"",modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=t=>d.value=t),"min-date":new Date},null,8,["is-dark","modelValue","min-date"])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",lg:"4",sm:"12"},{default:a(()=>[e(m,null,{default:a(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:a(()=>[o("Calendar with Max Date")]),_:1}),e(r,null,{default:a(()=>[e(s,{"is-dark":_(u).darktheme,"is-expanded":"",modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=t=>d.value=t),"max-date":new Date},null,8,["is-dark","modelValue","max-date"])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",lg:"6",sm:"12"},{default:a(()=>[e(m,null,{default:a(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:a(()=>[o("Calendar Date Range")]),_:1}),e(r,null,{default:a(()=>[e(s,{"is-dark":_(u).darktheme,modelValue:V.value,"onUpdate:modelValue":l[3]||(l[3]=t=>V.value=t),"is-range":""},null,8,["is-dark","modelValue"])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",lg:"6",sm:"12"},{default:a(()=>[e(m,null,{default:a(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:a(()=>[o("Calendar Date & Time")]),_:1}),e(r,null,{default:a(()=>[f("div",null,[f("div",h,[f("label",z,[k(f("input",{class:"mr-1",type:"radio",value:"","onUpdate:modelValue":l[4]||(l[4]=t=>v.value=t)},null,512),[[x,v.value]]),o("Local")]),f("label",T,[k(f("input",{class:"mr-1",type:"radio",value:"utc","onUpdate:modelValue":l[5]||(l[5]=t=>v.value=t)},null,512),[[x,v.value]]),o("UTC")])]),e(s,{"is-dark":_(u).darktheme,modelValue:d.value,"onUpdate:modelValue":l[6]||(l[6]=t=>d.value=t),mode:"dateTime",timezone:v.value},null,8,["is-dark","modelValue","timezone"])])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",lg:"12",sm:"12"},{default:a(()=>[e(m,null,{default:a(()=>[e(n,{class:"h4 pa-6 pb-0"},{default:a(()=>[o("Calendar Month Steps")]),_:1}),e(r,null,{default:a(()=>[e(s,{"is-dark":_(u).darktheme,modelValue:d.value,"onUpdate:modelValue":l[7]||(l[7]=t=>d.value=t),rows:2,step:1},null,8,["is-dark","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),j=C(y,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/apps/calendar/VCalendar.vue"]]);export{j as default};
