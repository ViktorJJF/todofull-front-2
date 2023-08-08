import{_ as k}from"./logo-icon.9c32ee79.js";import{e as j,g as i,r as s,o as q,c as U,w as l,a as e,b as t,d}from"./index.aed0d878.js";const z={class:"d-none d-sm-block"},B={class:"d-flex align-center pa-10"},E=t("h2",{class:"text-h4 text-white font-weight-medium"}," Elegant Design with unlimited features, built with love ",-1),C=t("h6",{class:"text-subtitle-1 text-high-emphasis mt-4 text-white font-weight-regular"}," Wrappixel helps developers to build organized and well-coded admin dashboards full of beautiful and feature rich modules. ",-1),N={class:"pa-7 pa-sm-12"},P=t("img",{src:k},null,-1),R=t("h2",{class:"font-weight-bold mt-4 text--darken-2"},"Sign in",-1),S=t("h6",{class:"text-subtitle-1 text-grey-darken-1"},[d(" Don't have an account? "),t("a",{href:"#/pages/fullregister",class:"text-primary text-decoration-none"},"Sign Up")],-1),D={class:"d-block d-sm-flex align-center mb-4 mb-sm-0"},L=t("div",{class:"ml-auto"},[t("a",{href:"javascript:void(0)",class:"text-primary text-decoration-none"},"Forgot pwd?")],-1),F={class:"text-center mt-6"},I={class:"d-flex align-center justify-center gap-2"},Y=j({__name:"BoxedLogin",setup(M){const u=i(!1),m=i(!0);i(!1);const _=i(""),f=i(""),g=i([o=>!!o||"Password is required",o=>o&&o.length<=10||"Password must be less than 10 characters"]),x=i([o=>!!o||"E-mail is required",o=>/.+@.+\..+/.test(o)||"E-mail must be valid"]);return(o,n)=>{const r=s("v-btn"),c=s("v-col"),v=s("v-text-field"),b=s("v-checkbox"),w=s("v-form"),p=s("v-icon"),h=s("v-row"),V=s("v-card"),y=s("v-container");return q(),U(y,{id:"login",class:"fill-height justify-center",tag:"section"},{default:l(()=>[e(h,{justify:"center",class:"h-100vh",align:"center"},{default:l(()=>[e(c,{lg:"11",sm:"8",xl:"7"},{default:l(()=>[e(V,{class:"elevation-4"},{default:l(()=>[e(h,null,{default:l(()=>[e(c,{lg:"7",class:"bg-info d-none d-md-flex align-center justify-center"},{default:l(()=>[t("div",z,[t("div",B,[t("div",null,[E,C,e(r,{class:"mt-6 text-capitalize",size:"x-large",variant:"outlined",color:"white"},{default:l(()=>[d("Learn More")]),_:1})])])])]),_:1}),e(c,{lg:"5"},{default:l(()=>[t("div",N,[P,R,S,e(w,{ref:"form",modelValue:m.value,"onUpdate:modelValue":n[3]||(n[3]=a=>m.value=a),"lazy-validation":"",action:"/dashboards/analytical"},{default:l(()=>[e(v,{modelValue:f.value,"onUpdate:modelValue":n[0]||(n[0]=a=>f.value=a),rules:x.value,label:"E-mail",class:"mt-4",required:"",variant:"outlined"},null,8,["modelValue","rules"]),e(v,{modelValue:_.value,"onUpdate:modelValue":n[1]||(n[1]=a=>_.value=a),counter:10,rules:g.value,label:"Password",required:"",variant:"outlined",type:"password"},null,8,["modelValue","rules"]),t("div",D,[e(b,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=a=>u.value=a),rules:[a=>!!a||"You must agree to continue!"],label:"Remember me?",required:"","hide-details":""},null,8,["modelValue","rules"]),L]),e(r,{color:"secondary",block:"",class:"mr-4",submit:""},{default:l(()=>[d("Sign In")]),_:1})]),_:1},8,["modelValue"]),t("div",F,[t("div",I,[e(r,{icon:"",color:"secondary"},{default:l(()=>[e(p,null,{default:l(()=>[d("mdi-twitter")]),_:1})]),_:1}),e(r,{icon:"",color:"primary"},{default:l(()=>[e(p,null,{default:l(()=>[d("mdi-github")]),_:1})]),_:1})])])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Y as default};
