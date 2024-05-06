import{_ as C}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-25a3c824.js";import{_ as g}from"./BaseCard.vue_vue_type_script_setup_true_lang-d66f1ce6.js";import{f,h as d,r as a,o as b,g as h,a as t,w as e,d as r,b as c,F as k}from"./index-36adbbac.js";const F=c("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on bottom of the form add a div with .action-form class to ending the form. ",-1),T=c("h3",{class:"subtitle"},"Personal Info",-1),N=c("h3",{class:"subtitle"},"Requirements",-1),E={class:"pb-5 px-4"},A=f({__name:"CardProjectAssign",setup(x){const u=d(["Desiging","Development","Marketing"]),i=d(["Less then $5000","$5000 - $10000"]),v=d([m=>m.length<=25||"Max 25 characters"]);return(m,o)=>{const l=a("v-alert"),n=a("v-text-field"),s=a("v-col"),_=a("v-row"),p=a("v-select"),y=a("v-textarea"),$=a("v-card-text"),w=a("v-btn");return b(),h("div",null,[t(l,{icon:"mdi-alert-outline",outlined:"",type:"info",class:"mb-4 caption pa-3"},{default:e(()=>[r("Form Action at Left ending of the form.")]),_:1}),F,t($,{class:"pa-3 mt-3"},{default:e(()=>[T,c("form",null,[t(_,{class:"mt-3"},{default:e(()=>[t(s,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(n,{label:"First Name",variant:"outlined"}),t(n,{label:"Email",variant:"outlined"})]),_:1}),t(s,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(n,{label:"Last Name",variant:"outlined"}),t(n,{label:"Contact",variant:"outlined"})]),_:1})]),_:1})]),N,t(_,{class:"mt-3"},{default:e(()=>[t(s,{cols:"12"},{default:e(()=>[t(n,{label:"Company",variant:"outlined"})]),_:1}),t(s,{class:"12",sm:"6",lg:"6"},{default:e(()=>[t(p,{items:u.value,label:"Interested In",class:"mt-0 pt-0",variant:"outlined"},null,8,["items"])]),_:1}),t(s,{class:"12",sm:"6",lg:"6"},{default:e(()=>[t(p,{items:i.value,label:"Budget",class:"mt-0 pt-0",variant:"outlined"},null,8,["items"])]),_:1}),t(s,{cols:"12"},{default:e(()=>[t(y,{counter:"",label:"About Project",rows:"2",rules:v.value,variant:"outlined"},null,8,["rules"])]),_:1})]),_:1})]),_:1}),c("div",E,[t(w,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[r("Save")]),_:1}),t(w,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[r("Cancel")]),_:1})])])}}}),z=c("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on bottom of the form add a div with .action-form class to begining the form. ",-1),D=c("h3",{class:"subtitle"},"About Employee",-1),M=c("h3",{class:"subtitle"},"Contact Info & Bio",-1),S={class:"pa-5 border-top text-right"},P=f({__name:"CardEmployeeProfile",setup(x){d(["Desiging","Development","Marketing"]),d(["Less then $5000","$5000 - $10000"]);const u=d([i=>i.length<=25||"Max 25 characters"]);return(i,v)=>{const m=a("v-alert"),o=a("v-text-field"),l=a("v-col"),n=a("v-row"),s=a("v-card-text"),_=a("v-textarea"),p=a("v-btn");return b(),h("div",null,[t(m,{icon:"mdi-alert-outline",variant:"outlined",type:"info",class:"mb-4 caption pa-3"},{default:e(()=>[r("Form Action at Right ending of the form.")]),_:1}),z,t(s,{class:"pa-3 mt-3"},{default:e(()=>[D,t(n,{class:"mt-3"},{default:e(()=>[t(l,{cols:"12",sm:"6",lg:"6",class:"pt-0"},{default:e(()=>[t(o,{label:"First Name",variant:"outlined"}),t(o,{label:"Username",variant:"outlined"})]),_:1}),t(l,{cols:"12",sm:"6",lg:"6",class:"pt-0"},{default:e(()=>[t(o,{label:"Last Name",variant:"outlined"}),t(o,{label:"Nick Name",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(s,{class:"pa-3"},{default:e(()=>[M,t(n,{class:"mt-3"},{default:e(()=>[t(l,{class:"12",sm:"6",lg:"6"},{default:e(()=>[t(o,{label:"Email",variant:"outlined"})]),_:1}),t(l,{class:"12",sm:"6",lg:"6"},{default:e(()=>[t(o,{label:"Website",variant:"outlined"})]),_:1}),t(l,{cols:"12"},{default:e(()=>[t(o,{label:"Contact no",variant:"outlined"})]),_:1}),t(l,{cols:"12"},{default:e(()=>[t(_,{counter:"",label:"Bio",rows:"2",rules:u.value,variant:"outlined"},null,8,["rules"])]),_:1})]),_:1})]),_:1}),c("div",S,[t(p,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[r("Save")]),_:1}),t(p,{color:"secondary",dark:""},{default:e(()=>[r("Cancel")]),_:1})])])}}}),B=c("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on top of the form add a div with .action-form class to the ending of the form. To set a side of the button use .text-center as per requirement. ",-1),I={class:"pa-5 border-top text-center"},L=f({__name:"CardDonation",setup(x){d("Message");const u=d([i=>i.length<=25||"Max 25 characters"]);return(i,v)=>{const m=a("v-alert"),o=a("v-text-field"),l=a("v-textarea"),n=a("v-col"),s=a("v-row"),_=a("v-btn");return b(),h("div",null,[t(m,{icon:"mdi-alert-outline",variant:"outlined",type:"info",class:"my-2 mb-3 caption pa-3"},{default:e(()=>[r("Form Action at center align of the form")]),_:1}),B,t(s,{class:"mt-3"},{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[t(o,{label:"Full Name",variant:"outlined"}),t(o,{label:"Email",variant:"outlined"}),t(o,{label:"Contact no",variant:"outlined"}),t(o,{label:"Donation Type",variant:"outlined"}),t(l,{variant:"outlined",label:"Amount",rows:"1","prepend-inner-icon":"mdi-currency-usd"}),t(l,{variant:"outlined",label:"Comments",rows:"2",rules:u.value,counter:""},null,8,["rules"])]),_:1})]),_:1}),c("div",I,[t(_,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[r("Save")]),_:1}),t(_,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[r("Cancel")]),_:1})])])}}}),V=c("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on top of the form add a div with .action-form class to the ending of the form. To set a side of the button use .text-center as per requirement. ",-1),j={class:"pa-5 border-top text-center"},q=f({__name:"CardComplaintForm",setup(x){d("Message");const u=d([i=>i.length<=25||"Max 25 characters"]);return(i,v)=>{const m=a("v-alert"),o=a("v-text-field"),l=a("v-textarea"),n=a("v-col"),s=a("v-row"),_=a("v-btn");return b(),h("div",null,[t(m,{icon:"mdi-alert-outline",type:"info",class:"my-2 mb-3 caption pa-3"},{default:e(()=>[r("Form Action at center align of the form")]),_:1}),V,t(s,{class:"mt-3"},{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[t(o,{label:"Company",variant:"outlined"}),t(o,{label:"Employee Name",variant:"outlined"}),t(o,{label:"Date of Complaint",type:"date",variant:"outlined"}),t(o,{label:"Supervisor's Name",variant:"outlined"}),t(l,{counter:"",rows:"2",variant:"outlined",label:"Complaint",rules:u.value},null,8,["rules"]),t(l,{label:"Signature",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-currency-usd"})]),_:1})]),_:1}),c("div",j,[t(_,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[r("Save")]),_:1}),t(_,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[r("Cancel")]),_:1})])])}}}),R=c("h6",{class:"text-subtitle-1 text-grey-darken-1 mb-5"}," To use add form actions on top of the form add a div with .action-form class to left ending of the form. To set a side of the button use .text-left or .text-right as per requirement. ",-1),O={class:"mb-5"},U=f({__name:"CardEmployeeTiming",setup(x){const u=d([i=>i.length<=25||"Max 25 characters"]);return(i,v)=>{const m=a("v-alert"),o=a("v-textarea"),l=a("v-text-field"),n=a("v-col"),s=a("v-row"),_=a("v-btn");return b(),h("div",null,[t(m,{icon:"mdi-alert-outline",outlined:"",type:"info",class:"mb-4 caption pa-3"},{default:e(()=>[r("Form Action at left ending of the form.")]),_:1}),R,c("form",null,[t(s,null,{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[t(o,{label:"Employee Name",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-account-circle"}),t(o,{label:"Project Name",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-book"}),t(l,{label:"Date",type:"date",variant:"outlined"}),t(o,{label:"Rate Per Hour",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-currency-usd"})]),_:1}),t(n,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(l,{label:"Start Time",type:"date",variant:"outlined"})]),_:1}),t(n,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(l,{label:"End Time",type:"date",variant:"outlined"})]),_:1}),t(n,{cols:"12"},{default:e(()=>[t(o,{counter:"",label:"Notes",rows:"2",variant:"outlined",rules:u.value},null,8,["rules"])]),_:1})]),_:1})]),c("div",O,[t(_,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[r("Save")]),_:1}),t(_,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[r("Cancel")]),_:1})])])}}}),H=c("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on top of the form add a div with .action-form class to ending of the form. To set a side of the button use .text-right or .text-left as per requirement. ",-1),W={class:"pa-5 border-top"},Y=f({__name:"CardIssueTracking",setup(x){const u=d(["Desiging","Development","Marketing"]),i=d(["Less then $5000","$5000 - $10000"]),v=d([m=>m.length<=25||"Max 25 characters"]);return(m,o)=>{const l=a("v-alert"),n=a("v-text-field"),s=a("v-col"),_=a("v-select"),p=a("v-textarea"),y=a("v-row"),$=a("v-card-text"),w=a("v-btn");return b(),h("div",null,[t(l,{icon:"mdi-alert-outline",variant:"outlined",type:"info",class:"mb-4 caption pa-3"},{default:e(()=>[r("Form Action at left ending of the form.")]),_:1}),H,t($,{class:"pa-5 border-bottom"},{default:e(()=>[c("form",null,[t(y,{class:"mt-3"},{default:e(()=>[t(s,{cols:"12"},{default:e(()=>[t(n,{label:"Issue Title",variant:"outlined"}),t(n,{label:"Opened By",variant:"outlined"})]),_:1}),t(s,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(n,{label:"Date Opened",type:"date",variant:"outlined"})]),_:1}),t(s,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(n,{label:"Date Fixed",type:"date",variant:"outlined"})]),_:1}),t(s,{cols:"12"},{default:e(()=>[t(_,{items:u.value,label:"Priority",class:"mt-0 pt-0",variant:"outlined"},null,8,["items"]),t(_,{items:i.value,label:"Status",variant:"outlined"},null,8,["items"]),t(p,{counter:"",variant:"outlined",label:"About Project",rows:"2",rules:v.value},null,8,["rules"])]),_:1})]),_:1})])]),_:1}),c("div",W,[t(w,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[r("Save")]),_:1}),t(w,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[r("Cancel")]),_:1})])])}}}),G=c("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add class .action-form at which side you want to add buttons. ",-1),J=c("label",null,"Existing Customer",-1),K={class:"pb-5 border-top"},Q=f({__name:"CardEventRegistration",setup(x){const u=d("red");return(i,v)=>{const m=a("v-alert"),o=a("v-text-field"),l=a("v-radio"),n=a("v-radio-group"),s=a("v-col"),_=a("v-row"),p=a("v-btn");return b(),h("div",null,[t(m,{icon:"mdi-alert-outline",outlined:"",type:"info",class:"mb-4 caption pa-3"},{default:e(()=>[r("Form Action at mulitple space top,bottom and left,right.")]),_:1}),G,t(_,{class:"mt-3"},{default:e(()=>[t(s,{cols:"12"},{default:e(()=>[t(o,{label:"Full Name",variant:"outlined"}),t(o,{label:"Title",variant:"outlined"}),t(o,{label:"Company Name",variant:"outlined"}),t(o,{label:"Email",variant:"outlined"}),t(o,{label:"Contact no",variant:"outlined"}),t(n,{modelValue:u.value,"onUpdate:modelValue":v[0]||(v[0]=y=>u.value=y),column:"",class:"mb-0"},{default:e(()=>[J,t(l,{label:"Yes",color:"info",value:"yes",class:"mt-2"}),t(l,{label:"No",color:"info",value:"no"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),c("div",K,[t(p,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[r("Save")]),_:1}),t(p,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[r("Cancel")]),_:1})])])}}}),et=f({__name:"FLFormAction",setup(x){const u=d({title:"Form Action"}),i=d([{text:"Form Elements",disabled:!1,to:"#"},{text:"Autocompletes",disabled:!0}]);return(v,m)=>{const o=a("v-col"),l=a("v-row");return b(),h(k,null,[t(C,{title:u.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),t(l,null,{default:e(()=>[t(o,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(g,{heading:"Project Assign"},{default:e(()=>[t(A)]),_:1})]),_:1}),t(o,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(g,{heading:"Employee Profile"},{default:e(()=>[t(P)]),_:1})]),_:1}),t(o,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(g,{heading:"Donation Form"},{default:e(()=>[t(L)]),_:1})]),_:1}),t(o,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(g,{heading:"Compaint Form"},{default:e(()=>[t(q)]),_:1})]),_:1}),t(o,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(g,{heading:"Employee Training"},{default:e(()=>[t(U)]),_:1})]),_:1}),t(o,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(g,{heading:"Card Issue Tracking"},{default:e(()=>[t(Y)]),_:1})]),_:1}),t(o,{cols:"12"},{default:e(()=>[t(g,{heading:"Event Registration"},{default:e(()=>[t(Q)]),_:1})]),_:1})]),_:1})],64)}}});export{et as default};
