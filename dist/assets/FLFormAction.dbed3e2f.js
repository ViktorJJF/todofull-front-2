import{_ as k}from"./BaseBreadcrumb.d1dfe9fc.js";import{_ as v}from"./BaseCard.b1c81da5.js";import{m as f,r as i,o as p,n as b,a as e,w as t,h as s,a_ as g,f as o,e as m,b as l,j as a,ah as x,aS as u,ab as y,g as c,bj as T,bk as C,F as w}from"./index.e63785cd.js";const F=o("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on bottom of the form add a div with .action-form class to ending the form. ",-1),N=o("h3",{class:"subtitle"},"Personal Info",-1),A=o("h3",{class:"subtitle"},"Requirements",-1),E={class:"pb-5 px-4"},V=f({__name:"CardProjectAssign",setup(h){const r=i(["Desiging","Development","Marketing"]),n=i(["Less then $5000","$5000 - $10000"]),d=i([_=>_.length<=25||"Max 25 characters"]);return(_,$)=>(p(),b("div",null,[e(g,{icon:"mdi-alert-outline",outlined:"",type:"info",class:"mb-4 caption pa-3"},{default:t(()=>[s("Form Action at Left ending of the form.")]),_:1}),F,e(y,{class:"pa-3 mt-3"},{default:t(()=>[N,o("form",null,[e(m,{class:"mt-3"},{default:t(()=>[e(l,{cols:"12",sm:"6",lg:"6"},{default:t(()=>[e(a,{label:"First Name",variant:"outlined"}),e(a,{label:"Email",variant:"outlined"})]),_:1}),e(l,{cols:"12",sm:"6",lg:"6"},{default:t(()=>[e(a,{label:"Last Name",variant:"outlined"}),e(a,{label:"Contact",variant:"outlined"})]),_:1})]),_:1})]),A,e(m,{class:"mt-3"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(a,{label:"Company",variant:"outlined"})]),_:1}),e(l,{class:"12",sm:"6",lg:"6"},{default:t(()=>[e(x,{items:r.value,label:"Interested In",class:"mt-0 pt-0",variant:"outlined"},null,8,["items"])]),_:1}),e(l,{class:"12",sm:"6",lg:"6"},{default:t(()=>[e(x,{items:n.value,label:"Budget",class:"mt-0 pt-0",variant:"outlined"},null,8,["items"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(u,{counter:"",label:"About Project",rows:"2",rules:d.value,variant:"outlined"},null,8,["rules"])]),_:1})]),_:1})]),_:1}),o("div",E,[e(c,{color:"primary",class:"mr-2 text-capitalize"},{default:t(()=>[s("Save")]),_:1}),e(c,{color:"secondary",class:"text-capitalize",dark:""},{default:t(()=>[s("Cancel")]),_:1})])]))}}),z=o("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on bottom of the form add a div with .action-form class to begining the form. ",-1),D=o("h3",{class:"subtitle"},"About Employee",-1),S=o("h3",{class:"subtitle"},"Contact Info & Bio",-1),M={class:"pa-5 border-top text-right"},P=f({__name:"CardEmployeeProfile",setup(h){i(["Desiging","Development","Marketing"]),i(["Less then $5000","$5000 - $10000"]);const r=i([n=>n.length<=25||"Max 25 characters"]);return(n,d)=>(p(),b("div",null,[e(g,{icon:"mdi-alert-outline",variant:"outlined",type:"info",class:"mb-4 caption pa-3"},{default:t(()=>[s("Form Action at Right ending of the form.")]),_:1}),z,e(y,{class:"pa-3 mt-3"},{default:t(()=>[D,e(m,{class:"mt-3"},{default:t(()=>[e(l,{cols:"12",sm:"6",lg:"6",class:"pt-0"},{default:t(()=>[e(a,{label:"First Name",variant:"outlined"}),e(a,{label:"Username",variant:"outlined"})]),_:1}),e(l,{cols:"12",sm:"6",lg:"6",class:"pt-0"},{default:t(()=>[e(a,{label:"Last Name",variant:"outlined"}),e(a,{label:"Nick Name",variant:"outlined"})]),_:1})]),_:1})]),_:1}),e(y,{class:"pa-3"},{default:t(()=>[S,e(m,{class:"mt-3"},{default:t(()=>[e(l,{class:"12",sm:"6",lg:"6"},{default:t(()=>[e(a,{label:"Email",variant:"outlined"})]),_:1}),e(l,{class:"12",sm:"6",lg:"6"},{default:t(()=>[e(a,{label:"Website",variant:"outlined"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(a,{label:"Contact no",variant:"outlined"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(u,{counter:"",label:"Bio",rows:"2",rules:r.value,variant:"outlined"},null,8,["rules"])]),_:1})]),_:1})]),_:1}),o("div",M,[e(c,{color:"primary",class:"mr-2 text-capitalize"},{default:t(()=>[s("Save")]),_:1}),e(c,{color:"secondary",dark:""},{default:t(()=>[s("Cancel")]),_:1})])]))}}),B=o("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on top of the form add a div with .action-form class to the ending of the form. To set a side of the button use .text-center as per requirement. ",-1),R={class:"pa-5 border-top text-center"},j=f({__name:"CardDonation",setup(h){i("Message");const r=i([n=>n.length<=25||"Max 25 characters"]);return(n,d)=>(p(),b("div",null,[e(g,{icon:"mdi-alert-outline",variant:"outlined",type:"info",class:"my-2 mb-3 caption pa-3"},{default:t(()=>[s("Form Action at center align of the form")]),_:1}),B,e(m,{class:"mt-3"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(a,{label:"Full Name",variant:"outlined"}),e(a,{label:"Email",variant:"outlined"}),e(a,{label:"Contact no",variant:"outlined"}),e(a,{label:"Donation Type",variant:"outlined"}),e(u,{variant:"outlined",label:"Amount",rows:"1","prepend-inner-icon":"mdi-currency-usd"}),e(u,{variant:"outlined",label:"Comments",rows:"2",rules:r.value,counter:""},null,8,["rules"])]),_:1})]),_:1}),o("div",R,[e(c,{color:"primary",class:"mr-2 text-capitalize"},{default:t(()=>[s("Save")]),_:1}),e(c,{color:"secondary",class:"text-capitalize",dark:""},{default:t(()=>[s("Cancel")]),_:1})])]))}}),I=o("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on top of the form add a div with .action-form class to the ending of the form. To set a side of the button use .text-center as per requirement. ",-1),L={class:"pa-5 border-top text-center"},q=f({__name:"CardComplaintForm",setup(h){i("Message");const r=i([n=>n.length<=25||"Max 25 characters"]);return(n,d)=>(p(),b("div",null,[e(g,{icon:"mdi-alert-outline",type:"info",class:"my-2 mb-3 caption pa-3"},{default:t(()=>[s("Form Action at center align of the form")]),_:1}),I,e(m,{class:"mt-3"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(a,{label:"Company",variant:"outlined"}),e(a,{label:"Employee Name",variant:"outlined"}),e(a,{label:"Date of Complaint",type:"date",variant:"outlined"}),e(a,{label:"Supervisor's Name",variant:"outlined"}),e(u,{counter:"",rows:"2",variant:"outlined",label:"Complaint",rules:r.value},null,8,["rules"]),e(u,{label:"Signature",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-currency-usd"})]),_:1})]),_:1}),o("div",L,[e(c,{color:"primary",class:"mr-2 text-capitalize"},{default:t(()=>[s("Save")]),_:1}),e(c,{color:"secondary",class:"text-capitalize",dark:""},{default:t(()=>[s("Cancel")]),_:1})])]))}}),O=o("h6",{class:"text-subtitle-1 text-grey-darken-1 mb-5"}," To use add form actions on top of the form add a div with .action-form class to left ending of the form. To set a side of the button use .text-left or .text-right as per requirement. ",-1),U={class:"mb-5"},G=f({__name:"CardEmployeeTiming",setup(h){const r=i([n=>n.length<=25||"Max 25 characters"]);return(n,d)=>(p(),b("div",null,[e(g,{icon:"mdi-alert-outline",outlined:"",type:"info",class:"mb-4 caption pa-3"},{default:t(()=>[s("Form Action at left ending of the form.")]),_:1}),O,o("form",null,[e(m,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(u,{label:"Employee Name",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-account-circle"}),e(u,{label:"Project Name",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-book"}),e(a,{label:"Date",type:"date",variant:"outlined"}),e(u,{label:"Rate Per Hour",rows:"1",variant:"outlined","prepend-inner-icon":"mdi-currency-usd"})]),_:1}),e(l,{cols:"12",sm:"6",lg:"6"},{default:t(()=>[e(a,{label:"Start Time",type:"date",variant:"outlined"})]),_:1}),e(l,{cols:"12",sm:"6",lg:"6"},{default:t(()=>[e(a,{label:"End Time",type:"date",variant:"outlined"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(u,{counter:"",label:"Notes",rows:"2",variant:"outlined",rules:r.value},null,8,["rules"])]),_:1})]),_:1})]),o("div",U,[e(c,{color:"primary",class:"mr-2 text-capitalize"},{default:t(()=>[s("Save")]),_:1}),e(c,{color:"secondary",class:"text-capitalize",dark:""},{default:t(()=>[s("Cancel")]),_:1})])]))}}),H=o("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add form actions on top of the form add a div with .action-form class to ending of the form. To set a side of the button use .text-right or .text-left as per requirement. ",-1),W={class:"pa-5 border-top"},Y=f({__name:"CardIssueTracking",setup(h){const r=i(["Desiging","Development","Marketing"]),n=i(["Less then $5000","$5000 - $10000"]),d=i([_=>_.length<=25||"Max 25 characters"]);return(_,$)=>(p(),b("div",null,[e(g,{icon:"mdi-alert-outline",variant:"outlined",type:"info",class:"mb-4 caption pa-3"},{default:t(()=>[s("Form Action at left ending of the form.")]),_:1}),H,e(y,{class:"pa-5 border-bottom"},{default:t(()=>[o("form",null,[e(m,{class:"mt-3"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(a,{label:"Issue Title",variant:"outlined"}),e(a,{label:"Opened By",variant:"outlined"})]),_:1}),e(l,{cols:"12",sm:"6",lg:"6"},{default:t(()=>[e(a,{label:"Date Opened",type:"date",variant:"outlined"})]),_:1}),e(l,{cols:"12",sm:"6",lg:"6"},{default:t(()=>[e(a,{label:"Date Fixed",type:"date",variant:"outlined"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(x,{items:r.value,label:"Priority",class:"mt-0 pt-0",variant:"outlined"},null,8,["items"]),e(x,{items:n.value,label:"Status",variant:"outlined"},null,8,["items"]),e(u,{counter:"",variant:"outlined",label:"About Project",rows:"2",rules:d.value},null,8,["rules"])]),_:1})]),_:1})])]),_:1}),o("div",W,[e(c,{color:"primary",class:"mr-2 text-capitalize"},{default:t(()=>[s("Save")]),_:1}),e(c,{color:"secondary",class:"text-capitalize",dark:""},{default:t(()=>[s("Cancel")]),_:1})])]))}}),J=o("h6",{class:"text-subtitle-1 text-grey-darken-1"}," To use add class .action-form at which side you want to add buttons. ",-1),K=o("label",null,"Existing Customer",-1),Q={class:"pb-5 border-top"},X=f({__name:"CardEventRegistration",setup(h){const r=i("red");return(n,d)=>(p(),b("div",null,[e(g,{icon:"mdi-alert-outline",outlined:"",type:"info",class:"mb-4 caption pa-3"},{default:t(()=>[s("Form Action at mulitple space top,bottom and left,right.")]),_:1}),J,e(m,{class:"mt-3"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(a,{label:"Full Name",variant:"outlined"}),e(a,{label:"Title",variant:"outlined"}),e(a,{label:"Company Name",variant:"outlined"}),e(a,{label:"Email",variant:"outlined"}),e(a,{label:"Contact no",variant:"outlined"}),e(T,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=_=>r.value=_),column:"",class:"mb-0"},{default:t(()=>[K,e(C,{label:"Yes",color:"info",value:"yes",class:"mt-2"}),e(C,{label:"No",color:"info",value:"no"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),o("div",Q,[e(c,{color:"primary",class:"mr-2 text-capitalize"},{default:t(()=>[s("Save")]),_:1}),e(c,{color:"secondary",class:"text-capitalize",dark:""},{default:t(()=>[s("Cancel")]),_:1})])]))}}),ae=f({__name:"FLFormAction",setup(h){const r=i({title:"Form Action"}),n=i([{text:"Form Elements",disabled:!1,to:"#"},{text:"Autocompletes",disabled:!0}]);return(d,_)=>(p(),b(w,null,[e(k,{title:r.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),e(m,null,{default:t(()=>[e(l,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Project Assign"},{default:t(()=>[e(V)]),_:1})]),_:1}),e(l,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Employee Profile"},{default:t(()=>[e(P)]),_:1})]),_:1}),e(l,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Donation Form"},{default:t(()=>[e(j)]),_:1})]),_:1}),e(l,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Compaint Form"},{default:t(()=>[e(q)]),_:1})]),_:1}),e(l,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Employee Training"},{default:t(()=>[e(G)]),_:1})]),_:1}),e(l,{cols:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(v,{heading:"Card Issue Tracking"},{default:t(()=>[e(Y)]),_:1})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(v,{heading:"Event Registration"},{default:t(()=>[e(X)]),_:1})]),_:1})]),_:1})],64))}});export{ae as default};
