import{_ as f}from"./logo-icon.9c32ee79.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as _,w as l,V as b,a as e,b as n,d as V,e as u,f as t,g as r,h as i,i as x,j as c,k as v,l as m}from"./index.bf7d454a.js";const w={data(){return{loading:!1,user:{email:"",password:""}}},created(){this.$store.state.authModule.isTokenSet&&this.$router.push({name:"dashboard"})},methods:{login(){let o=this.user;this.$store.dispatch("authModule/login",o).then(()=>{this.$router.push({name:"dashboard"})}).catch(s=>{console.log("error en login: ",s)}).finally(()=>this.loading=!1)}}},k={class:"d-none d-sm-block"},y={class:"d-flex align-center pa-10"},C=t("h2",{class:"text-h4 text-white font-weight-medium"}," Elegant Design with unlimited features, built with love ",-1),j=t("h6",{class:"text-subtitle-1 text-high-emphasis mt-4 text-white font-weight-regular"}," Wrappixel helps developers to build organized and well-coded admin dashboards full of beautiful and feature rich modules. ",-1),U={class:"pa-7 pa-sm-12"},z=t("img",{src:f},null,-1),B=t("h2",{class:"font-weight-bold mt-4 text--darken-2"},"Sign in",-1),F=t("h6",{class:"text-subtitle-1 text-grey-darken-1"},[i(" Don't have an account? "),t("a",{href:"#/pages/fullregister",class:"text-primary text-decoration-none"},"Sign Up")],-1),R={class:"d-block d-sm-flex align-center mb-4 mb-sm-0"},S=t("div",{class:"ml-auto"},[t("a",{href:"javascript:void(0)",class:"text-primary text-decoration-none"},"Forgot pwd?")],-1),q={class:"text-center mt-6"},M={class:"d-flex align-center justify-center gap-2"};function N(o,s,T,$,d,h){return p(),_(b,{id:"login",class:"fill-height justify-center",tag:"section"},{default:l(()=>[e(u,{justify:"center",class:"h-100vh",align:"center"},{default:l(()=>[e(n,{lg:"11",sm:"8",xl:"7"},{default:l(()=>[e(V,{class:"elevation-4"},{default:l(()=>[e(u,null,{default:l(()=>[e(n,{lg:"7",class:"bg-info d-none d-md-flex align-center justify-center"},{default:l(()=>[t("div",k,[t("div",y,[t("div",null,[C,j,e(r,{class:"mt-6 text-capitalize",size:"x-large",variant:"outlined",color:"white"},{default:l(()=>[i("Learn More")]),_:1})])])])]),_:1}),e(n,{lg:"5"},{default:l(()=>[t("div",U,[z,B,F,e(x,{ref:"form",modelValue:o.valid,"onUpdate:modelValue":s[3]||(s[3]=a=>o.valid=a),"lazy-validation":"",action:"/dashboards/analytical"},{default:l(()=>[e(c,{modelValue:d.user.email,"onUpdate:modelValue":s[0]||(s[0]=a=>d.user.email=a),rules:o.emailRules,label:"E-mail",class:"mt-4",required:"",variant:"outlined"},null,8,["modelValue","rules"]),e(c,{modelValue:d.user.password,"onUpdate:modelValue":s[1]||(s[1]=a=>d.user.password=a),counter:10,rules:o.passwordRules,label:"Password",required:"",variant:"outlined",type:"password"},null,8,["modelValue","rules"]),t("div",R,[e(v,{modelValue:o.checkbox,"onUpdate:modelValue":s[2]||(s[2]=a=>o.checkbox=a),rules:[a=>!!a||"You must agree to continue!"],label:"Remember me?",required:"","hide-details":""},null,8,["modelValue","rules"]),S]),e(r,{onClick:h.login,color:"secondary",block:"",class:"mr-4",submit:""},{default:l(()=>[i("Sign In")]),_:1},8,["onClick"])]),_:1},8,["modelValue"]),t("div",q,[t("div",M,[e(r,{icon:"",color:"secondary"},{default:l(()=>[e(m,null,{default:l(()=>[i("mdi-twitter")]),_:1})]),_:1}),e(r,{icon:"",color:"primary"},{default:l(()=>[e(m,null,{default:l(()=>[i("mdi-github")]),_:1})]),_:1})])])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var L=g(w,[["render",N]]);export{L as default};
