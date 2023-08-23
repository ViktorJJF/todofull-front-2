import{_ as p,e as b,g as _,r as o,o as h,f as g,a as t,w as e,d as c,b as r,F as $}from"./index-951959bb.js";import{B as F}from"./BaseBreadcrumb-722e6205.js";import{B as y}from"./BaseCard-282aeba2.js";const k=r("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on bottom of the form add a div with .action-form class to ending the form. ",-1),D=r("h3",{class:"subtitle"},"Personal Info",-1),E=r("h3",{class:"subtitle"},"Requirements",-1),A={class:"pb-5 px-4"},N=b({__name:"CardProjectAssign",setup(x){const u=_(["Desiging","Development","Marketing"]),i=_(["Less then $5000","$5000 - $10000"]),f=_([m=>m.length<=25||"Max 25 characters"]);return(m,a)=>{const l=o("v-alert"),n=o("v-text-field"),s=o("v-col"),d=o("v-row"),v=o("v-select"),C=o("v-textarea"),T=o("v-card-text"),w=o("v-btn");return h(),g("div",null,[t(l,{icon:"mdi-alert-outline",outlined:"",type:"info",class:"mb-4 caption pa-3"},{default:e(()=>[c("Form Action at Left ending of the form.")]),_:1}),k,t(T,{class:"pa-3 mt-3"},{default:e(()=>[D,r("form",null,[t(d,{class:"mt-3"},{default:e(()=>[t(s,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(n,{label:"First Name",variant:"outlined"}),t(n,{label:"Email",variant:"outlined"})]),_:1}),t(s,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(n,{label:"Last Name",variant:"outlined"}),t(n,{label:"Contact",variant:"outlined"})]),_:1})]),_:1})]),E,t(d,{class:"mt-3"},{default:e(()=>[t(s,{cols:"12"},{default:e(()=>[t(n,{label:"Company",variant:"outlined"})]),_:1}),t(s,{class:"12",sm:"6",lg:"6"},{default:e(()=>[t(v,{items:u.value,label:"Interested In",class:"mt-0 pt-0",variant:"outlined"},null,8,["items"])]),_:1}),t(s,{class:"12",sm:"6",lg:"6"},{default:e(()=>[t(v,{items:i.value,label:"Budget",class:"mt-0 pt-0",variant:"outlined"},null,8,["items"])]),_:1}),t(s,{cols:"12"},{default:e(()=>[t(C,{counter:"",label:"About Project",rows:"2",rules:f.value,variant:"outlined"},null,8,["rules"])]),_:1})]),_:1})]),_:1}),r("div",A,[t(w,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[c("Save")]),_:1}),t(w,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[c("Cancel")]),_:1})])])}}}),j=p(N,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-action/form-data/CardProjectAssign.vue"]]),P=r("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on bottom of the form add a div with .action-form class to begining the form. ",-1),z=r("h3",{class:"subtitle"},"About Employee",-1),B=r("h3",{class:"subtitle"},"Contact Info & Bio",-1),M={class:"pa-5 border-top text-right"},S=b({__name:"CardEmployeeProfile",setup(x){_(["Desiging","Development","Marketing"]),_(["Less then $5000","$5000 - $10000"]);const u=_([i=>i.length<=25||"Max 25 characters"]);return(i,f)=>{const m=o("v-alert"),a=o("v-text-field"),l=o("v-col"),n=o("v-row"),s=o("v-card-text"),d=o("v-textarea"),v=o("v-btn");return h(),g("div",null,[t(m,{icon:"mdi-alert-outline",variant:"outlined",type:"info",class:"mb-4 caption pa-3"},{default:e(()=>[c("Form Action at Right ending of the form.")]),_:1}),P,t(s,{class:"pa-3 mt-3"},{default:e(()=>[z,t(n,{class:"mt-3"},{default:e(()=>[t(l,{cols:"12",sm:"6",lg:"6",class:"pt-0"},{default:e(()=>[t(a,{label:"First Name",variant:"outlined"}),t(a,{label:"Username",variant:"outlined"})]),_:1}),t(l,{cols:"12",sm:"6",lg:"6",class:"pt-0"},{default:e(()=>[t(a,{label:"Last Name",variant:"outlined"}),t(a,{label:"Nick Name",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(s,{class:"pa-3"},{default:e(()=>[B,t(n,{class:"mt-3"},{default:e(()=>[t(l,{class:"12",sm:"6",lg:"6"},{default:e(()=>[t(a,{label:"Email",variant:"outlined"})]),_:1}),t(l,{class:"12",sm:"6",lg:"6"},{default:e(()=>[t(a,{label:"Website",variant:"outlined"})]),_:1}),t(l,{cols:"12"},{default:e(()=>[t(a,{label:"Contact no",variant:"outlined"})]),_:1}),t(l,{cols:"12"},{default:e(()=>[t(d,{counter:"",label:"Bio",rows:"2",rules:u.value,variant:"outlined"},null,8,["rules"])]),_:1})]),_:1})]),_:1}),r("div",M,[t(v,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[c("Save")]),_:1}),t(v,{color:"secondary",dark:""},{default:e(()=>[c("Cancel")]),_:1})])])}}}),I=p(S,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-action/form-data/CardEmployeeProfile.vue"]]),L=r("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on top of the form add a div with .action-form class to the ending of the form. To set a side of the button use .text-center as per requirement. ",-1),R={class:"pa-5 border-top text-center"},V=b({__name:"CardDonation",setup(x){_("Message");const u=_([i=>i.length<=25||"Max 25 characters"]);return(i,f)=>{const m=o("v-alert"),a=o("v-text-field"),l=o("v-textarea"),n=o("v-col"),s=o("v-row"),d=o("v-btn");return h(),g("div",null,[t(m,{icon:"mdi-alert-outline",variant:"outlined",type:"info",class:"my-2 mb-3 caption pa-3"},{default:e(()=>[c("Form Action at center align of the form")]),_:1}),L,t(s,{class:"mt-3"},{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[t(a,{label:"Full Name",variant:"outlined"}),t(a,{label:"Email",variant:"outlined"}),t(a,{label:"Contact no",variant:"outlined"}),t(a,{label:"Donation Type",variant:"outlined"}),t(l,{variant:"outlined",label:"Amount",rows:"1","prepend-inner-icon":"mdi-currency-usd"}),t(l,{variant:"outlined",label:"Comments",rows:"2",rules:u.value,counter:""},null,8,["rules"])]),_:1})]),_:1}),r("div",R,[t(d,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[c("Save")]),_:1}),t(d,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[c("Cancel")]),_:1})])])}}}),q=p(V,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-action/form-data/CardDonation.vue"]]),O=r("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on top of the form add a div with .action-form class to the ending of the form. To set a side of the button use .text-center as per requirement. ",-1),U={class:"pa-5 border-top text-center"},H=b({__name:"CardComplaintForm",setup(x){_("Message");const u=_([i=>i.length<=25||"Max 25 characters"]);return(i,f)=>{const m=o("v-alert"),a=o("v-text-field"),l=o("v-textarea"),n=o("v-col"),s=o("v-row"),d=o("v-btn");return h(),g("div",null,[t(m,{icon:"mdi-alert-outline",type:"info",class:"my-2 mb-3 caption pa-3"},{default:e(()=>[c("Form Action at center align of the form")]),_:1}),O,t(s,{class:"mt-3"},{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[t(a,{label:"Company",variant:"outlined"}),t(a,{label:"Employee Name",variant:"outlined"}),t(a,{label:"Date of Complaint",type:"date",variant:"outlined"}),t(a,{label:"Supervisor's Name",variant:"outlined"}),t(l,{counter:"",rows:"2",variant:"outlined",label:"Complaint",rules:u.value},null,8,["rules"]),t(l,{label:"Signature",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-currency-usd"})]),_:1})]),_:1}),r("div",U,[t(d,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[c("Save")]),_:1}),t(d,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[c("Cancel")]),_:1})])])}}}),W=p(H,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-action/form-data/CardComplaintForm.vue"]]),Y=r("h6",{class:"text-subtitle-1 text-grey-darken-1 mb-5"}," To use add form actions on top of the form add a div with .action-form class to left ending of the form. To set a side of the button use .text-left or .text-right as per requirement. ",-1),G={class:"mb-5"},J=b({__name:"CardEmployeeTiming",setup(x){const u=_([i=>i.length<=25||"Max 25 characters"]);return(i,f)=>{const m=o("v-alert"),a=o("v-textarea"),l=o("v-text-field"),n=o("v-col"),s=o("v-row"),d=o("v-btn");return h(),g("div",null,[t(m,{icon:"mdi-alert-outline",outlined:"",type:"info",class:"mb-4 caption pa-3"},{default:e(()=>[c("Form Action at left ending of the form.")]),_:1}),Y,r("form",null,[t(s,null,{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[t(a,{label:"Employee Name",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-account-circle"}),t(a,{label:"Project Name",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-book"}),t(l,{label:"Date",type:"date",variant:"outlined"}),t(a,{label:"Rate Per Hour",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-currency-usd"})]),_:1}),t(n,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(l,{label:"Start Time",type:"date",variant:"outlined"})]),_:1}),t(n,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(l,{label:"End Time",type:"date",variant:"outlined"})]),_:1}),t(n,{cols:"12"},{default:e(()=>[t(a,{counter:"",label:"Notes",rows:"2",variant:"outlined",rules:u.value},null,8,["rules"])]),_:1})]),_:1})]),r("div",G,[t(d,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[c("Save")]),_:1}),t(d,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[c("Cancel")]),_:1})])])}}}),K=p(J,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-action/form-data/CardEmployeeTiming.vue"]]),Q=r("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on top of the form add a div with .action-form class to ending of the form. To set a side of the button use .text-right or .text-left as per requirement. ",-1),X={class:"pa-5 border-top"},Z=b({__name:"CardIssueTracking",setup(x){const u=_(["Desiging","Development","Marketing"]),i=_(["Less then $5000","$5000 - $10000"]),f=_([m=>m.length<=25||"Max 25 characters"]);return(m,a)=>{const l=o("v-alert"),n=o("v-text-field"),s=o("v-col"),d=o("v-select"),v=o("v-textarea"),C=o("v-row"),T=o("v-card-text"),w=o("v-btn");return h(),g("div",null,[t(l,{icon:"mdi-alert-outline",variant:"outlined",type:"info",class:"mb-4 caption pa-3"},{default:e(()=>[c("Form Action at left ending of the form.")]),_:1}),Q,t(T,{class:"pa-5 border-bottom"},{default:e(()=>[r("form",null,[t(C,{class:"mt-3"},{default:e(()=>[t(s,{cols:"12"},{default:e(()=>[t(n,{label:"Issue Title",variant:"outlined"}),t(n,{label:"Opened By",variant:"outlined"})]),_:1}),t(s,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(n,{label:"Date Opened",type:"date",variant:"outlined"})]),_:1}),t(s,{cols:"12",sm:"6",lg:"6"},{default:e(()=>[t(n,{label:"Date Fixed",type:"date",variant:"outlined"})]),_:1}),t(s,{cols:"12"},{default:e(()=>[t(d,{items:u.value,label:"Priority",class:"mt-0 pt-0",variant:"outlined"},null,8,["items"]),t(d,{items:i.value,label:"Status",variant:"outlined"},null,8,["items"]),t(v,{counter:"",variant:"outlined",label:"About Project",rows:"2",rules:f.value},null,8,["rules"])]),_:1})]),_:1})])]),_:1}),r("div",X,[t(w,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[c("Save")]),_:1}),t(w,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[c("Cancel")]),_:1})])])}}}),tt=p(Z,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-action/form-data/CardIssueTracking.vue"]]),et=r("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add class .action-form at which side you want to add buttons. ",-1),ot=r("label",null,"Existing Customer",-1),at={class:"pb-5 border-top"},lt=b({__name:"CardEventRegistration",setup(x){const u=_("red");return(i,f)=>{const m=o("v-alert"),a=o("v-text-field"),l=o("v-radio"),n=o("v-radio-group"),s=o("v-col"),d=o("v-row"),v=o("v-btn");return h(),g("div",null,[t(m,{icon:"mdi-alert-outline",outlined:"",type:"info",class:"mb-4 caption pa-3"},{default:e(()=>[c("Form Action at mulitple space top,bottom and left,right.")]),_:1}),et,t(d,{class:"mt-3"},{default:e(()=>[t(s,{cols:"12"},{default:e(()=>[t(a,{label:"Full Name",variant:"outlined"}),t(a,{label:"Title",variant:"outlined"}),t(a,{label:"Company Name",variant:"outlined"}),t(a,{label:"Email",variant:"outlined"}),t(a,{label:"Contact no",variant:"outlined"}),t(n,{modelValue:u.value,"onUpdate:modelValue":f[0]||(f[0]=C=>u.value=C),column:"",class:"mb-0"},{default:e(()=>[ot,t(l,{label:"Yes",color:"info",value:"yes",class:"mt-2"}),t(l,{label:"No",color:"info",value:"no"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),r("div",at,[t(v,{color:"primary",class:"mr-2 text-capitalize"},{default:e(()=>[c("Save")]),_:1}),t(v,{color:"secondary",class:"text-capitalize",dark:""},{default:e(()=>[c("Cancel")]),_:1})])])}}}),nt=p(lt,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-action/form-data/CardEventRegistration.vue"]]),st=b({__name:"FLFormAction",setup(x){const u=_({title:"Form Action"}),i=_([{text:"Form Elements",disabled:!1,to:"#"},{text:"Autocompletes",disabled:!0}]);return(f,m)=>{const a=o("v-col"),l=o("v-row");return h(),g($,null,[t(F,{title:u.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),t(l,null,{default:e(()=>[t(a,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Project Assign"},{default:e(()=>[t(j)]),_:1})]),_:1}),t(a,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Employee Profile"},{default:e(()=>[t(I)]),_:1})]),_:1}),t(a,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Donation Form"},{default:e(()=>[t(q)]),_:1})]),_:1}),t(a,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Compaint Form"},{default:e(()=>[t(W)]),_:1})]),_:1}),t(a,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Employee Training"},{default:e(()=>[t(K)]),_:1})]),_:1}),t(a,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Card Issue Tracking"},{default:e(()=>[t(tt)]),_:1})]),_:1}),t(a,{cols:"12"},{default:e(()=>[t(y,{heading:"Event Registration"},{default:e(()=>[t(nt)]),_:1})]),_:1})]),_:1})],64)}}}),dt=p(st,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-action/FLFormAction.vue"]]);export{dt as default};
