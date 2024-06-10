import{_ as z}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-d18eae96.js";import{f as E,h as o,r as t,o as F,c as T,w as l,a as e,d as C,b as a,g as G,F as W}from"./index-3376cd88.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const J=a("h3",{class:"title text-h6"},"General Form",-1),H=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),L=E({__name:"CardGeneralForm",setup(I){const v=o(!1),i=o(""),b=o(""),s=o({required:c=>!!c||"Required.",min:c=>c.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"});return(c,u)=>{const f=t("v-card-text"),w=t("v-divider"),p=t("v-text-field"),m=t("v-checkbox"),y=t("v-btn"),x=t("v-card");return F(),T(x,{class:"mb-7"},{default:l(()=>[e(f,{class:"pa-5 border-bottom"},{default:l(()=>[J,H]),_:1}),e(w),e(f,null,{default:l(()=>[e(p,{label:"Email address",filled:"","background-color":"transparent",hint:"We'll never share your email with anyone else.",height:"25","persistent-hint":""}),e(p,{modelValue:b.value,"onUpdate:modelValue":u[0]||(u[0]=g=>b.value=g),filled:"","background-color":"transparent",class:"mt-3","append-icon":v.value?"mdi-eye":"mdi-eye-off",rules:[s.value.required,s.value.min],type:v.value?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:"","onClick:append":u[1]||(u[1]=g=>v.value=!v.value)},null,8,["modelValue","append-icon","rules","type"]),e(m,{modelValue:i.value,"onUpdate:modelValue":u[2]||(u[2]=g=>i.value=g),"hide-details":"",label:"Check me Out!",class:"mt-0"},null,8,["modelValue"]),e(y,{color:"secondary",class:"text-capitalize"},{default:l(()=>[C("Submit")]),_:1})]),_:1})]),_:1})}}}),K=a("h3",{class:"title text-h6"},"Default Form",-1),O=a("h6",{class:"text-subtitle-1 text-grey-darken-1"}," All with vuetify element attributes ",-1),j={class:"mt-8"},Q={class:"mt-4"},X=E({__name:"CardDefaultForm",setup(I){const v=o("George deo"),i=o(""),b=o(""),s=o(""),c=o(""),u=o(""),f=o(""),w=o(""),p=o(!1),m=o("radio1"),y=o(!0),x=o(!1),g=o(["IT","Blade Runner","Thor"]),U=o({required:$=>!!$||"Required.",min:$=>$.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"});return($,r)=>{const n=t("v-card-text"),P=t("v-divider"),S=t("v-text-field"),d=t("v-textarea"),V=t("v-checkbox"),k=t("v-switch"),D=t("v-col"),A=t("v-radio"),_=t("v-radio-group"),q=t("v-row"),R=t("v-select"),M=t("v-btn"),N=t("v-card");return F(),T(N,{class:"mb-7"},{default:l(()=>[e(n,{class:"pa-5 border-bottom"},{default:l(()=>[K,O]),_:1}),e(P),e(n,null,{default:l(()=>[e(S,{modelValue:v.value,"onUpdate:modelValue":r[0]||(r[0]=h=>v.value=h),label:"Default Text e.g. 'George deo'",filled:"","background-color":"transparent"},null,8,["modelValue"]),e(S,{type:"email",modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=h=>i.value=h),label:"Email e.g. 'example@gmail.com",filled:"","background-color":"transparent"},null,8,["modelValue"]),e(S,{modelValue:b.value,"onUpdate:modelValue":r[2]||(r[2]=h=>b.value=h),filled:"","background-color":"transparent","append-icon":p.value?"mdi-eye":"mdi-eye-off",rules:[U.value.required,U.value.min],type:p.value?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:"","onClick:append":r[3]||(r[3]=h=>p.value=!p.value)},null,8,["modelValue","append-icon","rules","type"]),e(S,{modelValue:s.value,"onUpdate:modelValue":r[4]||(r[4]=h=>s.value=h),label:"Placeholder",placeholder:"Enter Placeholder",filled:"","background-color":"transparent"},null,8,["modelValue"]),e(d,{filled:"",name:"input-7-4",rows:"3",label:"Textarea",value:"","background-color":"transparent"}),e(S,{modelValue:c.value,"onUpdate:modelValue":r[5]||(r[5]=h=>c.value=h),label:"Disabled Input",disabled:"",filled:"","background-color":"transparent"},null,8,["modelValue"]),e(q,null,{default:l(()=>[e(D,{cols:"12",lg:"6"},{default:l(()=>[e(V,{modelValue:u.value,"onUpdate:modelValue":r[6]||(r[6]=h=>u.value=h),label:"Check this custom checkbox","hide-details":""},null,8,["modelValue"]),e(V,{modelValue:f.value,"onUpdate:modelValue":r[7]||(r[7]=h=>f.value=h),label:"Check this custom checkbox","hide-details":""},null,8,["modelValue"]),e(V,{modelValue:w.value,"onUpdate:modelValue":r[8]||(r[8]=h=>w.value=h),label:"Check this custom checkbox","hide-details":""},null,8,["modelValue"]),a("div",j,[e(k,{modelValue:y.value,"onUpdate:modelValue":r[9]||(r[9]=h=>y.value=h),inset:"",label:"Toggle this switch element","hide-details":""},null,8,["modelValue"]),e(k,{modelValue:x.value,"onUpdate:modelValue":r[10]||(r[10]=h=>x.value=h),disabled:"",inset:"",label:"Disabled switch element","hide-details":""},null,8,["modelValue"])])]),_:1}),e(D,{cols:"12",lg:"6"},{default:l(()=>[e(_,{modelValue:m.value,"onUpdate:modelValue":r[11]||(r[11]=h=>m.value=h),mandatory:!1},{default:l(()=>[e(A,{label:"Toggle this custom radio",value:"radio1"}),e(A,{label:"Toggle this custom radio",value:"radio2"}),e(A,{label:"Toggle this custom radio",value:"radio3"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a("div",Q,[e(R,{items:g.value,filled:"",label:"Input Select","background-color":"transparent"},null,8,["items"]),e(S,{label:"Helping text",filled:"","background-color":"transparent",placeholder:"Helping text",hint:"A block of help text that breaks onto a new line and may extend beyond one line.","persistent-hint":""})]),e(M,{class:"mt-5",color:"secondary"},{default:l(()=>[C("Submit")]),_:1})]),_:1})]),_:1})}}}),Y=a("h3",{class:"title text-h6"},"Other Sample Form",-1),Z=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),ee=a("h3",{class:"title text-h6 mb-5"},"Personal Info",-1),le=a("label",null,"Membership",-1),te=a("div",{class:"border-bottom px-5 pb-5"},[a("h3",{class:"title text-h6"},"Address")],-1),oe=E({__name:"CardSampleForm",setup(I){const v=o(["Female","Male"]),i=o(["Category 1","Category 2"]),b=o(["India","Canada","United Kingdom"]),s=o(""),c=o(""),u=o(""),f=o("");return(w,p)=>{const m=t("v-card-text"),y=t("v-divider"),x=t("v-text-field"),g=t("v-select"),U=t("v-col"),$=t("v-radio"),r=t("v-radio-group"),n=t("v-row"),P=t("v-btn"),S=t("v-card");return F(),T(S,{class:"mb-7"},{default:l(()=>[e(m,{class:"pa-5 border-bottom"},{default:l(()=>[Y,Z]),_:1}),e(y),e(m,{class:"pb-0"},{default:l(()=>[ee,e(n,null,{default:l(()=>[e(U,{cols:"12",lg:"6"},{default:l(()=>[e(x,{label:"First Name",filled:"","background-color":"transparent",placeholder:"John Smith",hint:"This is inline help","persistent-hint":""}),e(g,{items:v.value,filled:"","background-color":"transparent",label:"Gender",class:"mt-3"},null,8,["items"]),e(g,{items:i.value,filled:"","background-color":"transparent",label:"Category",class:"mt-3"},null,8,["items"])]),_:1}),e(U,{cols:"12",lg:"6"},{default:l(()=>[e(x,{label:"Last Name",filled:"","background-color":"transparent",placeholder:"12n",hint:"This field has error.","persistent-hint":""}),e(x,{label:"Date of Birth",class:"mt-3",filled:"","background-color":"transparent",type:"date"}),le,e(r,{row:"",class:"mb-0 mt-2"},{default:l(()=>[e($,{label:"Free",color:"info",value:"free"}),e($,{label:"Paid",color:"info",value:"pro"})]),_:1})]),_:1})]),_:1})]),_:1}),te,e(m,{class:"pa-5 pt-0"},{default:l(()=>[e(n,null,{default:l(()=>[e(U,{cols:"12"},{default:l(()=>[e(x,{modelValue:s.value,"onUpdate:modelValue":p[0]||(p[0]=d=>s.value=d),label:"Street",filled:"","background-color":"transparent","hide-details":""},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",lg:"6",class:"py-0"},{default:l(()=>[e(x,{modelValue:c.value,"onUpdate:modelValue":p[1]||(p[1]=d=>c.value=d),label:"City",filled:"","background-color":"transparent","hide-details":"",class:"mt-5"},null,8,["modelValue"]),e(x,{modelValue:f.value,"onUpdate:modelValue":p[2]||(p[2]=d=>f.value=d),label:"Post Code",class:"mt-8",filled:"","background-color":"transparent","hide-details":""},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",lg:"6",class:"py-0"},{default:l(()=>[e(x,{modelValue:u.value,"onUpdate:modelValue":p[3]||(p[3]=d=>u.value=d),label:"State",filled:"","background-color":"transparent","hide-details":"",class:"mt-5"},null,8,["modelValue"]),e(g,{items:b.value,filled:"","background-color":"transparent",label:"Country",class:"mt-8"},null,8,["items"])]),_:1})]),_:1}),e(P,{color:"success",class:"mr-2"},{default:l(()=>[C("Save")]),_:1}),e(P,{color:"black"},{default:l(()=>[C("Cancel")]),_:1})]),_:1})]),_:1})}}}),ae=a("h3",{class:"title text-h6"}," Default Basic Forms ",-1),ne=a("h6",{class:"text-subtitle-1 text-grey-darken-1"}," All with vuetify element attributes ",-1),se=a("label",{class:"font-weight-medium subtitle-1"},"Text",-1),de=a("label",{class:"font-weight-medium subtitle-1"},"Search",-1),ce=a("label",{class:"font-weight-medium subtitle-1"},"Email",-1),re=a("label",{class:"font-weight-medium subtitle-1"},"URL",-1),ie=a("label",{class:"font-weight-medium subtitle-1"},"Telephone",-1),ue=a("label",{class:"font-weight-medium subtitle-1"},"Password",-1),me=a("label",{class:"font-weight-medium subtitle-1"},"Number",-1),_e=a("label",{class:"font-weight-medium subtitle-1"},"Date and time",-1),pe=a("label",{class:"font-weight-medium subtitle-1"},"Date",-1),ve=a("label",{class:"font-weight-medium subtitle-1"},"Month",-1),be=a("label",{class:"font-weight-medium subtitle-1"},"Week",-1),fe=a("label",{class:"font-weight-medium subtitle-1"},"Time",-1),he=a("label",{class:"font-weight-medium subtitle-1"},"Select",-1),xe=a("label",{class:"font-weight-medium subtitle-1"},"Color",-1),ge=E({__name:"CardDefaultBasicForm",setup(I){const v=o("Artisanal kale"),i=o("How do I shoot web"),b=o("bootstrap@example.com"),s=o("https://getbootstrap.com"),c=o("1-(555)-555-5555"),u=o(""),f=o(!1),w=o(!1),p=o("2008-05-13T22:33:00"),m=o("2018-05-13"),y=o("1999-08"),x=o("2011-W33"),g=o("22:33:00"),U=o(["India","Canada","United Kingdom"]),$=o("#563d7c");return o({required:r=>!!r||"Required.",min:r=>r.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"}),(r,n)=>{const P=t("v-card-text"),S=t("v-divider"),d=t("v-col"),V=t("v-text-field"),k=t("v-row"),D=t("v-select"),A=t("v-card");return F(),T(A,{class:"mb-7"},{default:l(()=>[e(P,{class:"pa-5 border-bottom"},{default:l(()=>[ae,ne]),_:1}),e(S),e(P,{class:"pa-5"},{default:l(()=>[e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[se]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:v.value,"onUpdate:modelValue":n[0]||(n[0]=_=>v.value=_),"hide-details":"","background-color":"transparent",filled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[de]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=_=>i.value=_),type:"search","hide-details":"","background-color":"transparent",filled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[ce]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:b.value,"onUpdate:modelValue":n[2]||(n[2]=_=>b.value=_),type:"search","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[re]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:s.value,"onUpdate:modelValue":n[3]||(n[3]=_=>s.value=_),type:"url","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[ie]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:c.value,"onUpdate:modelValue":n[4]||(n[4]=_=>c.value=_),type:"url","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[ue]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:u.value,"onUpdate:modelValue":n[5]||(n[5]=_=>u.value=_),filled:"","background-color":"transparent","append-icon":f.value?"mdi-eye":"mdi-eye-off","hide-details":"",type:f.value?"text":"password",name:"input-10-1",placeholder:"Password",hint:"At least 8 characters",counter:"","onClick:append":n[6]||(n[6]=_=>f.value=!f.value)},null,8,["modelValue","append-icon","type"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[me]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:w.value,"onUpdate:modelValue":n[7]||(n[7]=_=>w.value=_),type:"number","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[_e]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:p.value,"onUpdate:modelValue":n[8]||(n[8]=_=>p.value=_),type:"datetime-local","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[pe]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:m.value,"onUpdate:modelValue":n[9]||(n[9]=_=>m.value=_),type:"date","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[ve]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:y.value,"onUpdate:modelValue":n[10]||(n[10]=_=>y.value=_),type:"month","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[be]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:x.value,"onUpdate:modelValue":n[11]||(n[11]=_=>x.value=_),type:"week","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[fe]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:g.value,"onUpdate:modelValue":n[12]||(n[12]=_=>g.value=_),type:"time","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[he]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(D,{items:U.value,filled:"","background-color":"transparent"},null,8,["items"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[xe]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:$.value,"onUpdate:modelValue":n[13]||(n[13]=_=>$.value=_),type:"color","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),Ve={},ke=a("h3",{class:"title text-h6"},"Input groups",-1),we=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1);function ye(I,v){const i=t("v-card-text"),b=t("v-divider"),s=t("v-text-field"),c=t("v-card");return F(),T(c,{class:"mb-7"},{default:l(()=>[e(i,{class:"pa-5 border-bottom"},{default:l(()=>[ke,we]),_:1}),e(b),e(i,{class:"pa-5 border-bottom"},{default:l(()=>[e(s,{filled:"","background-color":"transparent",label:"Username","prepend-inner-icon":"mdi-pencil"}),e(s,{filled:"","background-color":"transparent",label:"Recepaint's name","append-icon":"mdi-pencil"}),e(s,{filled:"","background-color":"transparent",label:"Username","prepend-inner-icon":"mdi-currency-usd"})]),_:1})]),_:1})}const $e=B(Ve,[["render",ye]]),Ue={},Ce=a("h3",{class:"title text-h6"},"Input groups",-1),Fe=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),Ie=a("h3",{class:"title text-h6"},"Color outline Inputs",-1),Se={class:"mt-5"},Te=a("h3",{class:"title text-h6"},"Color Single line Inputs",-1),Pe={class:"mt-5"};function Ee(I,v){const i=t("v-card-text"),b=t("v-divider"),s=t("v-text-field"),c=t("v-card");return F(),T(c,{class:"mb-7"},{default:l(()=>[e(i,{class:"pa-5 border-bottom"},{default:l(()=>[Ce,Fe]),_:1}),e(b),e(i,{class:"pa-5 pb-0 border-bottom"},{default:l(()=>[Ie,a("div",Se,[e(s,{outlined:"",color:"success",label:"Input with Success",value:"John","prepend-inner-icon":"mdi-pencil"}),e(s,{outlined:"",color:"error",value:"Smith",label:"Error","append-icon":"mdi-pencil"}),e(s,{outlined:"",color:"warning",value:"John",label:"Input with Warning","prepend-inner-icon":"mdi-pencil"}),e(s,{outlined:"",color:"info",value:"John",label:"Input with Info","append-icon":"mdi-pencil"}),e(s,{outlined:"",color:"black",value:"John",label:"Input with Dark","prepend-inner-icon":"mdi-pencil"})])]),_:1}),e(i,{class:"pa-5 border-bottom"},{default:l(()=>[Te,a("div",Pe,[e(s,{color:"success",label:"Input with Success",placeholder:"Success","persistent-hint":""}),e(s,{color:"error",label:"Input with Error",placeholder:"Error"}),e(s,{color:"warning",label:"Input with Warning",placeholder:"Warning"}),e(s,{color:"black",label:"Input with Dark",placeholder:"Dark"})])]),_:1})]),_:1})}const Ae=B(Ue,[["render",Ee]]),De=a("h3",{class:"title text-h6"},"Disabled Form",-1),Be=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),qe=E({__name:"CardDisabledForm",setup(I){const v=o(""),i=o(["IT","Blade Runner","Thor"]);return(b,s)=>{const c=t("v-card-text"),u=t("v-divider"),f=t("v-text-field"),w=t("v-select"),p=t("v-checkbox"),m=t("v-btn"),y=t("v-card");return F(),T(y,{class:"mb-7"},{default:l(()=>[e(c,{class:"pa-5 border-bottom"},{default:l(()=>[De,Be]),_:1}),e(u),e(c,{class:"pa-5"},{default:l(()=>[e(f,{label:"Disabled input",disabled:"",filled:""}),e(w,{items:i.value,filled:"",label:"Input Select",disabled:""},null,8,["items"]),e(p,{modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=x=>v.value=x),class:"mt-2",label:"Check this custom checkbox","hide-details":"",disabled:""},null,8,["modelValue"]),e(m,{color:"secondary",class:"text-capitalize mt-4",disabled:""},{default:l(()=>[C("Save")]),_:1})]),_:1})]),_:1})}}}),Re=a("h3",{class:"title text-h6"},"Sample Basic Forms",-1),Me=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),Ne={class:"mt-4"},ze=E({__name:"CardSimpleForm",setup(I){const v=o(""),i=o(""),b=o(""),s=o(""),c=o(!1),u=o(!1),f=o(!1),w=o({required:p=>!!p||"Required.",min:p=>p.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"});return(p,m)=>{const y=t("v-card-text"),x=t("v-divider"),g=t("v-text-field"),U=t("v-checkbox"),$=t("v-btn"),r=t("v-card");return F(),T(r,{class:"mb-7"},{default:l(()=>[e(y,{class:"pa-5 border-bottom"},{default:l(()=>[Re,Me]),_:1}),e(x),e(y,{class:"pa-5"},{default:l(()=>[e(g,{label:"User Name",modelValue:v.value,"onUpdate:modelValue":m[0]||(m[0]=n=>v.value=n),placeholder:"Enter username"},null,8,["modelValue"]),e(g,{label:"Email",type:"email",modelValue:i.value,"onUpdate:modelValue":m[1]||(m[1]=n=>i.value=n),placeholder:"Email address"},null,8,["modelValue"]),e(g,{modelValue:b.value,"onUpdate:modelValue":m[2]||(m[2]=n=>b.value=n),"append-icon":c.value?"mdi-eye":"mdi-eye-off",rules:[w.value.required,w.value.min],type:c.value?"text":"password",name:"input-10-1",label:"Password",placeholder:"Enter password",counter:"","onClick:append":m[3]||(m[3]=n=>c.value=!c.value)},null,8,["modelValue","append-icon","rules","type"]),e(g,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=n=>s.value=n),"append-icon":u.value?"mdi-eye":"mdi-eye-off",rules:[w.value.required,w.value.min],type:u.value?"text":"password",name:"input-10-1",label:"Confirm Password",placeholder:"Enter Confirm password",counter:"","onClick:append":m[5]||(m[5]=n=>c.value=!c.value)},null,8,["modelValue","append-icon","rules","type"]),e(U,{modelValue:f.value,"onUpdate:modelValue":m[6]||(m[6]=n=>f.value=n),class:"mt-2",label:"Remember me","hide-details":""},null,8,["modelValue"]),a("div",Ne,[e($,{color:"success",class:"text-capitalize mr-2"},{default:l(()=>[C("Save")]),_:1}),e($,{color:"black",class:"text-capitalize",dark:""},{default:l(()=>[C("Cancel")]),_:1})])]),_:1})]),_:1})}}}),Ge={},We=a("h3",{class:"title text-h6"},"Sample Form with the Icons",-1),Je=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),He={class:"mt-4"};function Le(I,v){const i=t("v-card-text"),b=t("v-divider"),s=t("v-text-field"),c=t("v-checkbox"),u=t("v-btn"),f=t("v-card");return F(),T(f,{class:"mb-7"},{default:l(()=>[e(i,{class:"pa-5 border-bottom"},{default:l(()=>[We,Je]),_:1}),e(b),e(i,{class:"pa-5 border-bottom"},{default:l(()=>[e(s,{outlined:"",label:"User Name",placeholder:"Username","prepend-inner-icon":"mdi-account"}),e(s,{outlined:"",label:"Email address",placeholder:"Email","prepend-inner-icon":"mdi-email"}),e(s,{outlined:"",label:"Password",placeholder:"Password","prepend-inner-icon":"mdi-lock"}),e(s,{outlined:"",label:"Confirm Password",placeholder:"Confirm Password","prepend-inner-icon":"mdi-lock","hide-details":""}),e(c,{label:"Remember me","hide-details":""}),a("div",He,[e(u,{color:"success",class:"text-capitalize mr-2"},{default:l(()=>[C("Save")]),_:1}),e(u,{color:"black",class:"text-capitalize",dark:""},{default:l(()=>[C("Cancel")]),_:1})])]),_:1})]),_:1})}const Ke=B(Ge,[["render",Le]]),Oe={},je=a("h3",{class:"title text-h6"},"Sample Form with the right Icons",-1),Qe=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),Xe={class:"mt-4"};function Ye(I,v){const i=t("v-card-text"),b=t("v-divider"),s=t("v-text-field"),c=t("v-checkbox"),u=t("v-btn"),f=t("v-card");return F(),T(f,{class:"mb-7"},{default:l(()=>[e(i,{class:"pa-5 border-bottom"},{default:l(()=>[je,Qe]),_:1}),e(b),e(i,{class:"pa-5 border-bottom"},{default:l(()=>[e(s,{outlined:"",label:"User Name",placeholder:"Username","append-icon":"mdi-account"}),e(s,{outlined:"",label:"Email address",placeholder:"Email","append-icon":"mdi-email"}),e(s,{outlined:"",label:"Password",placeholder:"Password","append-icon":"mdi-lock"}),e(s,{outlined:"",label:"Confirm Password",placeholder:"Confirm Password","append-icon":"mdi-lock","hide-details":""}),e(c,{label:"Remember me","hide-details":""}),a("div",Xe,[e(u,{color:"success",class:"text-capitalize mr-2"},{default:l(()=>[C("Save")]),_:1}),e(u,{color:"black",class:"text-capitalize",dark:""},{default:l(()=>[C("Cancel")]),_:1})])]),_:1})]),_:1})}const Ze=B(Oe,[["render",Ye]]),ol=E({__name:"FLFormBasic",setup(I){const v=o({title:"Form Basic"}),i=o([{text:"Form Elements",disabled:!1,to:"#"},{text:"Form Basic",disabled:!0}]);return(b,s)=>{const c=t("v-col"),u=t("v-row");return F(),G(W,null,[e(z,{title:v.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),e(u,null,{default:l(()=>[e(c,{cols:"12"},{default:l(()=>[e(L),e(X),e(oe),e(ge),e($e),e(Ae),e(qe),e(ze)]),_:1}),e(c,{cols:"12",sm:"6"},{default:l(()=>[e(Ke)]),_:1}),e(c,{cols:"12",sm:"6"},{default:l(()=>[e(Ze)]),_:1})]),_:1})],64)}}});export{ol as default};
