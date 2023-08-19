import{_ as b}from"./logo-icon.9c32ee79.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as w,c as V,w as o,a as e,b as t,d as i}from"./index.eab449d7.js";const k={data(){return{loading:!1,user:{email:"",password:""}}},created(){this.$store.state.authModule.isTokenSet&&this.$router.push({name:"dashboard"})},methods:{login(){let n=this.user;this.$store.dispatch("authModule/login",n).then(()=>{this.$router.push({name:"dashboard"})}).catch(l=>{console.log("error en login: ",l)}).finally(()=>this.loading=!1)}}},y={class:"d-none d-sm-block"},j={class:"d-flex align-center pa-10"},U=t("h2",{class:"text-h4 text-white font-weight-medium"}," Elegant Design with unlimited features, built with love ",-1),z=t("h6",{class:"text-subtitle-1 text-high-emphasis mt-4 text-white font-weight-regular"}," Wrappixel helps developers to build organized and well-coded admin dashboards full of beautiful and feature rich modules. ",-1),C={class:"pa-7 pa-sm-12"},S=t("img",{src:b},null,-1),q=t("h2",{class:"font-weight-bold mt-4 text--darken-2"},"Sign in",-1),B=t("h6",{class:"text-subtitle-1 text-grey-darken-1"},[i(" Don't have an account? "),t("a",{href:"#/pages/fullregister",class:"text-primary text-decoration-none"},"Sign Up")],-1),M={class:"d-block d-sm-flex align-center mb-4 mb-sm-0"},N=t("div",{class:"ml-auto"},[t("a",{href:"javascript:void(0)",class:"text-primary text-decoration-none"},"Forgot pwd?")],-1),R={class:"text-center mt-6"},$={class:"d-flex align-center justify-center gap-2"};function D(n,l,E,F,r,h){const d=a("v-btn"),c=a("v-col"),u=a("v-text-field"),f=a("v-checkbox"),p=a("v-form"),m=a("v-icon"),_=a("v-row"),v=a("v-card"),g=a("v-container");return w(),V(g,{id:"login",class:"fill-height justify-center",tag:"section"},{default:o(()=>[e(_,{justify:"center",class:"h-100vh",align:"center"},{default:o(()=>[e(c,{lg:"11",sm:"8",xl:"7"},{default:o(()=>[e(v,{class:"elevation-4"},{default:o(()=>[e(_,null,{default:o(()=>[e(c,{lg:"7",class:"bg-info d-none d-md-flex align-center justify-center"},{default:o(()=>[t("div",y,[t("div",j,[t("div",null,[U,z,e(d,{class:"mt-6 text-capitalize",size:"x-large",variant:"outlined",color:"white"},{default:o(()=>[i("Learn More")]),_:1})])])])]),_:1}),e(c,{lg:"5"},{default:o(()=>[t("div",C,[S,q,B,e(p,{ref:"form",modelValue:n.valid,"onUpdate:modelValue":l[3]||(l[3]=s=>n.valid=s),"lazy-validation":"",action:"/dashboards/analytical"},{default:o(()=>[e(u,{modelValue:r.user.email,"onUpdate:modelValue":l[0]||(l[0]=s=>r.user.email=s),rules:n.emailRules,label:"E-mail",class:"mt-4",required:"",variant:"outlined"},null,8,["modelValue","rules"]),e(u,{modelValue:r.user.password,"onUpdate:modelValue":l[1]||(l[1]=s=>r.user.password=s),counter:10,rules:n.passwordRules,label:"Password",required:"",variant:"outlined",type:"password"},null,8,["modelValue","rules"]),t("div",M,[e(f,{modelValue:n.checkbox,"onUpdate:modelValue":l[2]||(l[2]=s=>n.checkbox=s),rules:[s=>!!s||"You must agree to continue!"],label:"Remember me?",required:"","hide-details":""},null,8,["modelValue","rules"]),N]),e(d,{onClick:h.login,color:"secondary",block:"",class:"mr-4",submit:""},{default:o(()=>[i("Sign In")]),_:1},8,["onClick"])]),_:1},8,["modelValue"]),t("div",R,[t("div",$,[e(d,{icon:"",color:"secondary"},{default:o(()=>[e(m,null,{default:o(()=>[i("mdi-twitter")]),_:1})]),_:1}),e(d,{icon:"",color:"primary"},{default:o(()=>[e(m,null,{default:o(()=>[i("mdi-github")]),_:1})]),_:1})])])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var P=x(k,[["render",D]]);export{P as default};
