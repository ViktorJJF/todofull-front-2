import{_ as x}from"./logo-icon.9c32ee79.js";import{m as b,r as i,o as V,c as w,w as l,a as e,b as r,d as y,e as h,f as t,g as n,h as d,i as k,j as _,k as j,l as g,V as C}from"./index.a3cf6758.js";const q={class:"d-none d-sm-block"},B={class:"d-flex align-center pa-10"},U=t("h2",{class:"text-h4 text-white font-weight-medium"}," Elegant Design with unlimited features, built with love ",-1),z=t("h6",{class:"text-subtitle-1 text-high-emphasis mt-4 text-white font-weight-regular"}," Wrappixel helps developers to build organized and well-coded admin dashboards full of beautiful and feature rich modules. ",-1),E={class:"pa-7 pa-sm-12"},R=t("img",{src:x},null,-1),F=t("h2",{class:"font-weight-bold mt-4 text--darken-2"},"Sign in",-1),N=t("h6",{class:"text-subtitle-1 text-grey-darken-1"},[d(" Don't have an account? "),t("a",{href:"#/pages/fullregister",class:"text-primary text-decoration-none"},"Sign Up")],-1),P={class:"d-block d-sm-flex align-center mb-4 mb-sm-0"},S=t("div",{class:"ml-auto"},[t("a",{href:"javascript:void(0)",class:"text-primary text-decoration-none"},"Forgot pwd?")],-1),D={class:"text-center mt-6"},I={class:"d-flex align-center justify-center gap-2"},W=b({__name:"BoxedLogin",setup(L){const u=i(!1),c=i(!0);i(!1);const m=i(""),f=i(""),p=i([a=>!!a||"Password is required",a=>a&&a.length<=10||"Password must be less than 10 characters"]),v=i([a=>!!a||"E-mail is required",a=>/.+@.+\..+/.test(a)||"E-mail must be valid"]);return(a,o)=>(V(),w(C,{id:"login",class:"fill-height justify-center",tag:"section"},{default:l(()=>[e(h,{justify:"center",class:"h-100vh",align:"center"},{default:l(()=>[e(r,{lg:"11",sm:"8",xl:"7"},{default:l(()=>[e(y,{class:"elevation-4"},{default:l(()=>[e(h,null,{default:l(()=>[e(r,{lg:"7",class:"bg-info d-none d-md-flex align-center justify-center"},{default:l(()=>[t("div",q,[t("div",B,[t("div",null,[U,z,e(n,{class:"mt-6 text-capitalize",size:"x-large",variant:"outlined",color:"white"},{default:l(()=>[d("Learn More")]),_:1})])])])]),_:1}),e(r,{lg:"5"},{default:l(()=>[t("div",E,[R,F,N,e(k,{ref:"form",modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=s=>c.value=s),"lazy-validation":"",action:"/dashboards/analytical"},{default:l(()=>[e(_,{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=s=>f.value=s),rules:v.value,label:"E-mail",class:"mt-4",required:"",variant:"outlined"},null,8,["modelValue","rules"]),e(_,{modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=s=>m.value=s),counter:10,rules:p.value,label:"Password",required:"",variant:"outlined",type:"password"},null,8,["modelValue","rules"]),t("div",P,[e(j,{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=s=>u.value=s),rules:[s=>!!s||"You must agree to continue!"],label:"Remember me?",required:"","hide-details":""},null,8,["modelValue","rules"]),S]),e(n,{color:"secondary",block:"",class:"mr-4",submit:""},{default:l(()=>[d("Sign In")]),_:1})]),_:1},8,["modelValue"]),t("div",D,[t("div",I,[e(n,{icon:"",color:"secondary"},{default:l(()=>[e(g,null,{default:l(()=>[d("mdi-twitter")]),_:1})]),_:1}),e(n,{icon:"",color:"primary"},{default:l(()=>[e(g,null,{default:l(()=>[d("mdi-github")]),_:1})]),_:1})])])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{W as default};
