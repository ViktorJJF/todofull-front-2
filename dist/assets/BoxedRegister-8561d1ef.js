import{_ as U}from"./logo-icon-657d723b.js";import{e as N,g as n,r as i,o as j,c as z,w as l,a as e,b as o,d}from"./index-0bc1a26d.js";const B={class:"pa-7 pa-sm-12"},E=o("img",{src:U},null,-1),R=o("h2",{class:"font-weight-bold mt-4 blue-grey--text text--darken-2"}," Sign Up ",-1),C=o("h6",{class:"text-subtitle-1 text-grey-darken-1"},[d(" Don't have an account? "),o("a",{href:"#/pages/boxedlogin",class:"text-primary text-decoration-none"},"Sign Up")],-1),P={class:"d-block d-sm-flex align-center mb-4 mb-sm-0"},S={class:"text-center mt-6"},D={class:"d-flex align-center justify-center gap-2"},I={class:"d-none d-sm-block"},F={class:"d-flex align-center pa-10"},L=o("h2",{class:"text-h4 text-white font-weight-medium"}," Elegant Design with unlimited features, built with love ",-1),M=o("h6",{class:"text-subtitle-1 text-high-emphasis mt-4 text-white font-weight-regular"}," Wrappixel helps developers to build organized and well-coded admin dashboards full of beautiful and feature rich modules. ",-1),A=N({__name:"BoxedRegister",setup(T){const m=n(!1),_=n(!0);n(!1);const v=n(""),f=n(""),x=n([t=>!!t||"Password is required",t=>t&&t.length<=10||"Password must be less than 10 characters"]),b=n([t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"]),p=n(""),w=n([t=>!!t||"Name is required",t=>t&&t.length<=10||"Name must be less than 10 characters"]);return(t,s)=>{const u=i("v-text-field"),V=i("v-checkbox"),r=i("v-btn"),y=i("v-form"),h=i("v-icon"),c=i("v-col"),g=i("v-row"),k=i("v-card"),q=i("v-container");return j(),z(q,{id:"login",class:"fill-height justify-center",tag:"section"},{default:l(()=>[e(g,{justify:"center",class:"h-100vh",align:"center"},{default:l(()=>[e(c,{lg:"11",sm:"8",xl:"7"},{default:l(()=>[e(k,{class:"elevation-4"},{default:l(()=>[e(g,null,{default:l(()=>[e(c,{lg:"5",class:"pr-0"},{default:l(()=>[o("div",B,[E,R,C,e(y,{ref:"form",modelValue:_.value,"onUpdate:modelValue":s[4]||(s[4]=a=>_.value=a),"lazy-validation":"",action:"/pages/boxedlogin"},{default:l(()=>[e(u,{modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=a=>p.value=a),rules:w.value,label:"Full Name",class:"mt-4",required:"",variant:"outlined"},null,8,["modelValue","rules"]),e(u,{modelValue:f.value,"onUpdate:modelValue":s[1]||(s[1]=a=>f.value=a),rules:b.value,label:"E-mail",required:"",variant:"outlined"},null,8,["modelValue","rules"]),e(u,{modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=a=>v.value=a),counter:10,rules:x.value,label:"Password",required:"",variant:"outlined",type:"password"},null,8,["modelValue","rules"]),o("div",P,[e(V,{modelValue:m.value,"onUpdate:modelValue":s[3]||(s[3]=a=>m.value=a),rules:[a=>!!a||"You must agree to continue!"],label:"I agree to the terms and privacy",required:"","hide-details":""},null,8,["modelValue","rules"])]),e(r,{color:"secondary",block:"",class:"mr-4",submit:""},{default:l(()=>[d("Sign In")]),_:1})]),_:1},8,["modelValue"]),o("div",S,[o("div",D,[e(r,{icon:"",color:"secondary"},{default:l(()=>[e(h,null,{default:l(()=>[d("mdi-twitter")]),_:1})]),_:1}),e(r,{icon:"",color:"primary"},{default:l(()=>[e(h,null,{default:l(()=>[d("mdi-github")]),_:1})]),_:1})])])])]),_:1}),e(c,{lg:"7",class:"bg-info d-none d-md-flex align-center justify-center"},{default:l(()=>[o("div",I,[o("div",F,[o("div",null,[L,M,e(r,{class:"mt-6 text-capitalize",size:"x-large",variant:"outlined",color:"white"},{default:l(()=>[d("Learn More")]),_:1})])])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{A as default};
