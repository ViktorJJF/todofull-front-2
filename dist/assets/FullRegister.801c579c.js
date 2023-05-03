import{_ as w}from"./logo-icon.9c32ee79.js";import{m as y,r as n,o as k,c as q,w as l,a as e,V as p,f as a,e as r,b as d,g as i,h as u,i as N,j as c,k as U,l as x}from"./index.ef9cfdf3.js";const C={class:"pa-10"},R=a("h2",{class:"text-h4 text-white font-weight-medium"}," Elegant Design with unlimited features, built with love ",-1),j=a("h6",{class:"text-subtitle-1 mt-4 text-white text-high-emphasis font-weight-regular"}," Wrappixel helps developers to build organized and well-coded admin dashboards full of beautiful and feature rich modules. ",-1),z={class:"pa-7 pa-sm-12"},B=a("img",{src:w},null,-1),E=a("h2",{class:"font-weight-bold mt-4 blue-grey--text text--darken-2"}," Sign Up ",-1),F=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},[u(" Don't have an account? "),a("a",{href:"/authentication/fulllogin",class:"text-primary text-decoration-none"},"Sign In")],-1),I={class:"d-block d-sm-flex align-center mb-4 mb-sm-0"},P={class:"text-center mt-6"},S={class:"d-flex align-center justify-center gap-2"},M=y({__name:"FullRegister",setup(D){const m=n(!1),f=n(!0);n(!1);const h=n(""),_=n(""),v=n([t=>!!t||"Password is required",t=>t&&t.length<=10||"Password must be less than 10 characters"]),V=n([t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"]),g=n(""),b=n([t=>!!t||"Name is required",t=>t&&t.length<=10||"Name must be less than 10 characters"]);return(t,o)=>(k(),q(r,null,{default:l(()=>[e(d,{cols:"12",lg:"7",xl:"6",class:"bg-info d-none d-md-flex align-center justify-center"},{default:l(()=>[e(p,null,{default:l(()=>[a("div",C,[e(r,{justify:"center"},{default:l(()=>[e(d,{cols:"8",xl:"5"},{default:l(()=>[a("div",null,[R,j,e(i,{class:"mt-6 text-capitalize",size:"x-large",variant:"outlined",color:"white"},{default:l(()=>[u("Learn More")]),_:1})])]),_:1})]),_:1})])]),_:1})]),_:1}),e(d,{cols:"12",lg:"5",xl:"6",class:"d-flex align-center"},{default:l(()=>[e(p,null,{default:l(()=>[a("div",z,[e(r,null,{default:l(()=>[e(d,{cols:"12",lg:"9",xl:"6"},{default:l(()=>[B,E,F,e(N,{ref:"form",modelValue:f.value,"onUpdate:modelValue":o[4]||(o[4]=s=>f.value=s),"lazy-validation":"",action:"/pages/boxedlogin"},{default:l(()=>[e(c,{modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=s=>g.value=s),rules:b.value,label:"Full Name",class:"mt-4",required:"",variant:"outlined"},null,8,["modelValue","rules"]),e(c,{modelValue:_.value,"onUpdate:modelValue":o[1]||(o[1]=s=>_.value=s),rules:V.value,label:"E-mail",required:"",variant:"outlined"},null,8,["modelValue","rules"]),e(c,{modelValue:h.value,"onUpdate:modelValue":o[2]||(o[2]=s=>h.value=s),counter:10,rules:v.value,label:"Password",required:"",variant:"outlined",type:"password","hide-details":""},null,8,["modelValue","rules"]),a("div",I,[e(U,{modelValue:m.value,"onUpdate:modelValue":o[3]||(o[3]=s=>m.value=s),rules:[s=>!!s||"You must agree to continue!"],label:"I agree to the terms and privacy",required:"","hide-details":""},null,8,["modelValue","rules"])]),e(i,{color:"secondary",block:"",class:"mr-4",submit:""},{default:l(()=>[u("Sign In")]),_:1})]),_:1},8,["modelValue"]),a("div",P,[a("div",S,[e(i,{icon:"",color:"secondary"},{default:l(()=>[e(x,null,{default:l(()=>[u("mdi-twitter")]),_:1})]),_:1}),e(i,{icon:"",color:"primary"},{default:l(()=>[e(x,null,{default:l(()=>[u("mdi-github")]),_:1})]),_:1})])])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}))}});export{M as default};