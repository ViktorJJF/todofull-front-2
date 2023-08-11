import{_ as $,e as y,g as d,r as n,o as C,c as U,w as e,a as l,b as o,d as E,f as z,F as N}from"./index-373165b0.js";import{B as T}from"./BaseBreadcrumb-1b88b47e.js";const F=o("h3",{class:"title text-h6"}," Project Assigning ",-1),P=o("h6",{class:"text-subtitle-1 text-grey-darken-1"}," This is the basic horizontal form with labels on left and form controls on right in one line. To use add class form-horizontal to the form tag and give class row with form-group. ",-1),j=o("h3",{class:"title text-h6"}," Personal Info ",-1),B={class:"mt-4"},D=o("label",null,"First Name",-1),H=o("label",null,"Last Name",-1),L=o("label",null,"Email",-1),R=o("label",null,"Contact No",-1),A=o("h3",{class:"title text-h6"}," Requirements ",-1),S={class:"mt-4"},I=o("label",null,"Company",-1),q=o("label",null,"Interested In",-1),W=o("label",null,"Budget",-1),Y=o("label",null,"About Project",-1),G={class:"pa-5 text-right"},J=y({__name:"CardProjectAssign",setup(w){const m=d(""),p=d("");d("");const h=d(""),g=d(""),_=d(""),b=d(["Choose your option","Designing","Development","Hacking"]),k=d(["Choose your option","Less than $5000","$5000 to $10000","$10000 to %15000"]);return(f,a)=>{const v=n("v-card-text"),c=n("v-divider"),t=n("v-col"),u=n("v-text-field"),r=n("v-row"),x=n("v-select"),V=n("v-btn"),s=n("v-card");return C(),U(s,{class:"mb-7"},{default:e(()=>[l(v,{class:"pa-5"},{default:e(()=>[F,P]),_:1}),l(c),l(v,{class:"pa-5"},{default:e(()=>[j,o("div",B,[l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[D]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=i=>m.value=i),placeholder:"Enter First Name","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[H]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=i=>p.value=i),placeholder:"Enter Last name","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[L]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:h.value,"onUpdate:modelValue":a[2]||(a[2]=i=>h.value=i),placeholder:"Enter Email","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[R]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{type:"tel",filled:"","background-color":"transparent",modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=i=>g.value=i),placeholder:"Enter Contact No","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),l(c),l(v,{class:"pa-5"},{default:e(()=>[A,o("div",S,[l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[I]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:_.value,"onUpdate:modelValue":a[4]||(a[4]=i=>_.value=i),placeholder:"Enter Company Name","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[q]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(x,{items:b.value,filled:"","background-color":"transparent","hide-details":""},null,8,["items"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[W]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(x,{items:k.value,filled:"","background-color":"transparent","hide-details":""},null,8,["items"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[Y]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:_.value,"onUpdate:modelValue":a[5]||(a[5]=i=>_.value=i),placeholder:"Enter About Project","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),l(c),o("div",G,[l(V,{color:"success",class:"text-capitalize mr-2"},{default:e(()=>[E("Save")]),_:1}),l(V,{color:"black",class:"text-capitalize",dark:""},{default:e(()=>[E("Cancel")]),_:1})])]),_:1})}}}),K=$(J,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-horizontal/form-data/CardProjectAssign.vue"]]),M=o("h3",{class:"title text-h6"},"Employee Profile",-1),O=o("h6",{class:"text-subtitle-1 text-grey-darken-1"},"This is the employee profile form with labels on left and form controls on right in one line two controls. To use add class form-horizontal to the form tag and give class row with form-group.",-1),Q=o("h3",{class:"title text-h6"},"Employee User",-1),X=o("label",null,"First Name",-1),Z=o("label",null,"Username",-1),ll=o("label",null,"Last Name",-1),el=o("label",null,"Nick Name",-1),tl=o("h3",{class:"title text-h6"},"Contact Info & Bio",-1),ol=o("label",null,"Email",-1),al=o("label",null,"Contact No",-1),sl=o("label",null,"Website",-1),nl=o("label",null,"Bio",-1),dl={class:"pa-5 text-right"},ul=y({__name:"CardEmployeeProfile",setup(w){const m=d(""),p=d("");d("");const h=d(""),g=d(""),_=d(""),b=d(""),k=d("");return(f,a)=>{const v=n("v-card-text"),c=n("v-divider"),t=n("v-col"),u=n("v-text-field"),r=n("v-row"),x=n("v-btn"),V=n("v-card");return C(),U(V,{class:"mb-7"},{default:e(()=>[l(v,{class:"pa-5"},{default:e(()=>[M,O]),_:1}),l(c),l(v,{class:"pa-5"},{default:e(()=>[Q,l(r,null,{default:e(()=>[l(t,{cols:"12",lg:"6"},{default:e(()=>[l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"3",class:"d-flex align-center"},{default:e(()=>[X]),_:1}),l(t,{cols:"12",sm:"9"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=s=>m.value=s),placeholder:"Enter First name","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"3",class:"d-flex align-center"},{default:e(()=>[Z]),_:1}),l(t,{cols:"12",sm:"9"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=s=>p.value=s),placeholder:"Enter Username","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(t,{cols:"12",lg:"6"},{default:e(()=>[l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"3",class:"d-flex align-center"},{default:e(()=>[ll]),_:1}),l(t,{cols:"12",sm:"9"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=s=>m.value=s),placeholder:"Enter Last name","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"3",class:"d-flex align-center"},{default:e(()=>[el]),_:1}),l(t,{cols:"12",sm:"9"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:h.value,"onUpdate:modelValue":a[3]||(a[3]=s=>h.value=s),placeholder:"Enter Nick name","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(c),l(v,{class:"pa-5"},{default:e(()=>[tl,l(r,null,{default:e(()=>[l(t,{cols:"12",lg:"6"},{default:e(()=>[l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"3",class:"d-flex align-center"},{default:e(()=>[ol]),_:1}),l(t,{cols:"12",sm:"9"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:g.value,"onUpdate:modelValue":a[4]||(a[4]=s=>g.value=s),placeholder:"Enter Email","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"3",class:"d-flex align-center"},{default:e(()=>[al]),_:1}),l(t,{cols:"12",sm:"9"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:_.value,"onUpdate:modelValue":a[5]||(a[5]=s=>_.value=s),placeholder:"Enter Contact no","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(t,{cols:"12",lg:"6"},{default:e(()=>[l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"3",class:"d-flex align-center"},{default:e(()=>[sl]),_:1}),l(t,{cols:"12",sm:"9"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:b.value,"onUpdate:modelValue":a[6]||(a[6]=s=>b.value=s),placeholder:"http://","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"3",class:"d-flex align-center"},{default:e(()=>[nl]),_:1}),l(t,{cols:"12",sm:"9"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:k.value,"onUpdate:modelValue":a[7]||(a[7]=s=>k.value=s),placeholder:"Enter Bio","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(c),o("div",dl,[l(x,{color:"success",class:"text-capitalize mr-2"},{default:e(()=>[E("Save")]),_:1}),l(x,{color:"black",class:"text-capitalize",dark:""},{default:e(()=>[E("Cancel")]),_:1})])]),_:1})}}}),rl=$(ul,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-horizontal/form-data/CardEmployeeProfile.vue"]]),cl=o("h3",{class:"title text-h6"},"Employee Timing",-1),il=o("h6",{class:"text-subtitle-1 text-grey-darken-1"},"This is the employee timing form with labels on left and form controls on right in one line. To use add class form-horizontal to the form tag and give class row with form-group.",-1),ml={class:"mt-4"},_l=o("label",null,"Employee Name",-1),fl=o("label",null,"Project Name",-1),pl=o("label",null,"Date",-1),vl=o("label",null,"Rate Per Hour",-1),hl=o("label",null,"Start Time",-1),gl=o("label",null,"End Time",-1),bl=o("label",null,"Notes",-1),xl={class:"pa-5 text-right"},Vl=y({__name:"CardEmployeeTiming",setup(w){const m=d(""),p=d(""),h=d(""),g=d(""),_=d(""),b=d(""),k=d("");return(f,a)=>{const v=n("v-card-text"),c=n("v-divider"),t=n("v-col"),u=n("v-text-field"),r=n("v-row"),x=n("v-btn"),V=n("v-card");return C(),U(V,{class:"mb-7"},{default:e(()=>[l(v,{class:"pa-5"},{default:e(()=>[cl,il]),_:1}),l(c),l(v,{class:"pa-5"},{default:e(()=>[o("div",ml,[l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[_l]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=s=>m.value=s),placeholder:"Enter Employee name","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[fl]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=s=>p.value=s),placeholder:"Enter Project name","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[pl]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:h.value,"onUpdate:modelValue":a[2]||(a[2]=s=>h.value=s),type:"date","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[vl]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=s=>g.value=s),placeholder:"Enter Rate Per Hour","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[hl]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:_.value,"onUpdate:modelValue":a[4]||(a[4]=s=>_.value=s),type:"time","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[gl]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:b.value,"onUpdate:modelValue":a[5]||(a[5]=s=>b.value=s),type:"time","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(t,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[bl]),_:1}),l(t,{cols:"12",sm:"10"},{default:e(()=>[l(u,{filled:"","background-color":"transparent",modelValue:k.value,"onUpdate:modelValue":a[6]||(a[6]=s=>k.value=s),placeholder:"Notes here","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),l(c),o("div",xl,[l(x,{color:"success",class:"text-capitalize mr-2"},{default:e(()=>[E("Save")]),_:1}),l(x,{color:"black",class:"text-capitalize",dark:""},{default:e(()=>[E("Cancel")]),_:1})])]),_:1})}}}),kl=$(Vl,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-horizontal/form-data/CardEmployeeTiming.vue"]]),El=o("h3",{class:"title text-h6"},"Event Registration",-1),$l=o("h6",{class:"text-subtitle-1 text-grey-darken-1"},"This is the event registration form with labels on left and form controls on right in one line. To use add class form-horizontal to the form tag and give class row with form-group.",-1),yl={class:"mt-4"},Cl=o("label",null,"Full Name",-1),wl=o("label",null,"Title",-1),Ul=o("label",null,"Company",-1),zl=o("label",null,"Email",-1),Nl=o("label",null,"Contact No",-1),Tl=o("label",null,"Existing Customer",-1),Fl={class:"pa-5 text-right"},Pl=y({__name:"CardEventRegistration",setup(w){const m=d(""),p=d(""),h=d(""),g=d(""),_=d(""),b=d("");return d(""),d(""),(k,f)=>{const a=n("v-card-text"),v=n("v-divider"),c=n("v-col"),t=n("v-text-field"),u=n("v-row"),r=n("v-radio"),x=n("v-radio-group"),V=n("v-btn"),s=n("v-card");return C(),U(s,{class:"mb-7"},{default:e(()=>[l(a,{class:"pa-5"},{default:e(()=>[El,$l]),_:1}),l(v),l(a,{class:"pa-5"},{default:e(()=>[o("div",yl,[l(u,null,{default:e(()=>[l(c,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[Cl]),_:1}),l(c,{cols:"12",sm:"10"},{default:e(()=>[l(t,{filled:"","background-color":"transparent",modelValue:m.value,"onUpdate:modelValue":f[0]||(f[0]=i=>m.value=i),placeholder:"Enter Full name","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,null,{default:e(()=>[l(c,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[wl]),_:1}),l(c,{cols:"12",sm:"10"},{default:e(()=>[l(t,{filled:"","background-color":"transparent",modelValue:h.value,"onUpdate:modelValue":f[1]||(f[1]=i=>h.value=i),placeholder:"Enter Title here","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,null,{default:e(()=>[l(c,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[Ul]),_:1}),l(c,{cols:"12",sm:"10"},{default:e(()=>[l(t,{filled:"","background-color":"transparent",modelValue:g.value,"onUpdate:modelValue":f[2]||(f[2]=i=>g.value=i),placeholder:"Enter Company name here","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,null,{default:e(()=>[l(c,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[zl]),_:1}),l(c,{cols:"12",sm:"10"},{default:e(()=>[l(t,{filled:"","background-color":"transparent",modelValue:_.value,"onUpdate:modelValue":f[3]||(f[3]=i=>_.value=i),type:"email",placeholder:"Enter Email here","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,null,{default:e(()=>[l(c,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[Nl]),_:1}),l(c,{cols:"12",sm:"10"},{default:e(()=>[l(t,{filled:"","background-color":"transparent",modelValue:p.value,"onUpdate:modelValue":f[4]||(f[4]=i=>p.value=i),type:"tel",placeholder:"Enter Contact no here","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,null,{default:e(()=>[l(c,{cols:"12",sm:"2",class:"d-flex align-center"},{default:e(()=>[Tl]),_:1}),l(c,{cols:"12",sm:"10"},{default:e(()=>[l(x,{modelValue:b.value,"onUpdate:modelValue":f[5]||(f[5]=i=>b.value=i),class:"mb-0"},{default:e(()=>[l(r,{label:"Yes",color:"info",value:"yes",class:"mt-2"}),l(r,{label:"No",color:"info",value:"no"})]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1}),l(v),o("div",Fl,[l(V,{color:"success",class:"text-capitalize mr-2"},{default:e(()=>[E("Save")]),_:1}),l(V,{color:"black",class:"text-capitalize",dark:""},{default:e(()=>[E("Cancel")]),_:1})])]),_:1})}}}),jl=$(Pl,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-horizontal/form-data/CardEventRegistration.vue"]]),Bl=y({__name:"FLFormHorizontal",setup(w){const m=d({title:"Form Horizontal"}),p=d([{text:"Form Elements",disabled:!1,to:"#"},{text:"Form Horizontal",disabled:!0}]);return(h,g)=>{const _=n("v-col"),b=n("v-row");return C(),z(N,null,[l(T,{title:m.value.title,breadcrumbs:p.value},null,8,["title","breadcrumbs"]),l(b,null,{default:e(()=>[l(_,{cols:"12"},{default:e(()=>[l(K),l(rl),l(kl),l(jl)]),_:1})]),_:1})],64)}}}),Ll=$(Bl,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-horizontal/FLFormHorizontal.vue"]]);export{Ll as default};
