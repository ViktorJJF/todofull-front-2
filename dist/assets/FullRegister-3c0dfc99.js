import{_ as q,e as N,g as n,r as i,o as R,c as U,w as t,a as e,b as o,d as u}from"./index-82d1a4df.js";import{_ as j}from"./logo-icon-657d723b.js";const z={class:"pa-10"},E=o("h2",{class:"text-h4 text-white font-weight-medium"}," Elegant Design with unlimited features, built with love ",-1),F=o("h6",{class:"text-subtitle-1 mt-4 text-white text-high-emphasis font-weight-regular"}," Wrappixel helps developers to build organized and well-coded admin dashboards full of beautiful and feature rich modules. ",-1),B={class:"pa-7 pa-sm-12"},C=o("img",{src:j},null,-1),D=o("h2",{class:"font-weight-bold mt-4 blue-grey--text text--darken-2"}," Sign Up ",-1),I=o("h6",{class:"text-subtitle-1 text-grey-darken-1"},[u(" Don't have an account? "),o("a",{href:"/authentication/fulllogin",class:"text-primary text-decoration-none"},"Sign In")],-1),P={class:"d-block d-sm-flex align-center mb-4 mb-sm-0"},S={class:"text-center mt-6"},T={class:"d-flex align-center justify-center gap-2"},L=N({__name:"FullRegister",setup(M){const _=n(!1),f=n(!0);n(!1);const v=n(""),p=n(""),b=n([l=>!!l||"Password is required",l=>l&&l.length<=10||"Password must be less than 10 characters"]),w=n([l=>!!l||"E-mail is required",l=>/.+@.+\..+/.test(l)||"E-mail must be valid"]),h=n(""),V=n([l=>!!l||"Name is required",l=>l&&l.length<=10||"Name must be less than 10 characters"]);return(l,s)=>{const d=i("v-btn"),r=i("v-col"),c=i("v-row"),g=i("v-container"),m=i("v-text-field"),y=i("v-checkbox"),k=i("v-form"),x=i("v-icon");return R(),U(c,null,{default:t(()=>[e(r,{cols:"12",lg:"7",xl:"6",class:"bg-info d-none d-md-flex align-center justify-center"},{default:t(()=>[e(g,null,{default:t(()=>[o("div",z,[e(c,{justify:"center"},{default:t(()=>[e(r,{cols:"8",xl:"5"},{default:t(()=>[o("div",null,[E,F,e(d,{class:"mt-6 text-capitalize",size:"x-large",variant:"outlined",color:"white"},{default:t(()=>[u("Learn More")]),_:1})])]),_:1})]),_:1})])]),_:1})]),_:1}),e(r,{cols:"12",lg:"5",xl:"6",class:"d-flex align-center"},{default:t(()=>[e(g,null,{default:t(()=>[o("div",B,[e(c,null,{default:t(()=>[e(r,{cols:"12",lg:"9",xl:"6"},{default:t(()=>[C,D,I,e(k,{ref:"form",modelValue:f.value,"onUpdate:modelValue":s[4]||(s[4]=a=>f.value=a),"lazy-validation":"",action:"/pages/boxedlogin"},{default:t(()=>[e(m,{modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=a=>h.value=a),rules:V.value,label:"Full Name",class:"mt-4",required:"",variant:"outlined"},null,8,["modelValue","rules"]),e(m,{modelValue:p.value,"onUpdate:modelValue":s[1]||(s[1]=a=>p.value=a),rules:w.value,label:"E-mail",required:"",variant:"outlined"},null,8,["modelValue","rules"]),e(m,{modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=a=>v.value=a),counter:10,rules:b.value,label:"Password",required:"",variant:"outlined",type:"password","hide-details":""},null,8,["modelValue","rules"]),o("div",P,[e(y,{modelValue:_.value,"onUpdate:modelValue":s[3]||(s[3]=a=>_.value=a),rules:[a=>!!a||"You must agree to continue!"],label:"I agree to the terms and privacy",required:"","hide-details":""},null,8,["modelValue","rules"])]),e(d,{color:"secondary",block:"",class:"mr-4",submit:""},{default:t(()=>[u("Sign In")]),_:1})]),_:1},8,["modelValue"]),o("div",S,[o("div",T,[e(d,{icon:"",color:"secondary"},{default:t(()=>[e(x,null,{default:t(()=>[u("mdi-twitter")]),_:1})]),_:1}),e(d,{icon:"",color:"primary"},{default:t(()=>[e(x,null,{default:t(()=>[u("mdi-github")]),_:1})]),_:1})])])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})}}}),A=q(L,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/authentication/FullRegister.vue"]]);export{A as default};