import{m as x,r as _,t as w,o as b,c,w as a,a as e,d as n,ap as m,h as u,ab as r,u as i,b as p,f,af as k,ba as C,e as g}from"./index.ef9cfdf3.js";/* empty css              */import{u as D}from"./customizer.6d80e7e5.js";const U={class:"flex mb-2"},h={class:"text-gray-600 font-medium"},T={class:"text-gray-600 font-medium ml-3"},R=x({__name:"VCalendar",setup(z){const d=_(new Date),V=_(""),s=D(),v=_({start:new Date(2020,0,1),end:new Date(2020,0,5)});return(y,l)=>{const o=w("v-date-picker");return b(),c(g,null,{default:a(()=>[e(p,{cols:"12",lg:"4",sm:"12"},{default:a(()=>[e(n,null,{default:a(()=>[e(m,{class:"h4 pa-6 pb-0"},{default:a(()=>[u("Calendar with Date")]),_:1}),e(r,null,{default:a(()=>[e(o,{"is-dark":i(s).darktheme,"is-expanded":"",modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=t=>d.value=t)},null,8,["is-dark","modelValue"])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",lg:"4",sm:"12"},{default:a(()=>[e(n,null,{default:a(()=>[e(m,{class:"h4 pa-6 pb-0"},{default:a(()=>[u("Calendar with Min Date")]),_:1}),e(r,null,{default:a(()=>[e(o,{"is-dark":i(s).darktheme,"is-expanded":"",modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=t=>d.value=t),"min-date":new Date},null,8,["is-dark","modelValue","min-date"])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",lg:"4",sm:"12"},{default:a(()=>[e(n,null,{default:a(()=>[e(m,{class:"h4 pa-6 pb-0"},{default:a(()=>[u("Calendar with Max Date")]),_:1}),e(r,null,{default:a(()=>[e(o,{"is-dark":i(s).darktheme,"is-expanded":"",modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=t=>d.value=t),"max-date":new Date},null,8,["is-dark","modelValue","max-date"])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",lg:"6",sm:"12"},{default:a(()=>[e(n,null,{default:a(()=>[e(m,{class:"h4 pa-6 pb-0"},{default:a(()=>[u("Calendar Date Range")]),_:1}),e(r,null,{default:a(()=>[e(o,{"is-dark":i(s).darktheme,modelValue:v.value,"onUpdate:modelValue":l[3]||(l[3]=t=>v.value=t),"is-range":""},null,8,["is-dark","modelValue"])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",lg:"6",sm:"12"},{default:a(()=>[e(n,null,{default:a(()=>[e(m,{class:"h4 pa-6 pb-0"},{default:a(()=>[u("Calendar Date & Time")]),_:1}),e(r,null,{default:a(()=>[f("div",null,[f("div",U,[f("label",h,[k(f("input",{class:"mr-1",type:"radio",value:"","onUpdate:modelValue":l[4]||(l[4]=t=>V.value=t)},null,512),[[C,V.value]]),u("Local")]),f("label",T,[k(f("input",{class:"mr-1",type:"radio",value:"utc","onUpdate:modelValue":l[5]||(l[5]=t=>V.value=t)},null,512),[[C,V.value]]),u("UTC")])]),e(o,{"is-dark":i(s).darktheme,modelValue:d.value,"onUpdate:modelValue":l[6]||(l[6]=t=>d.value=t),mode:"dateTime",timezone:V.value},null,8,["is-dark","modelValue","timezone"])])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",lg:"12",sm:"12"},{default:a(()=>[e(n,null,{default:a(()=>[e(m,{class:"h4 pa-6 pb-0"},{default:a(()=>[u("Calendar Month Steps")]),_:1}),e(r,null,{default:a(()=>[e(o,{"is-dark":i(s).darktheme,modelValue:d.value,"onUpdate:modelValue":l[7]||(l[7]=t=>d.value=t),rows:2,step:1},null,8,["is-dark","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{R as default};