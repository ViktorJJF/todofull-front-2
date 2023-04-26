import{_ as U,e as P,g as o,r as t,o as S,c as T,w as l,a as e,d as $,b as a,f as G,F as N}from"./index-f8c4d1fe.js";import{B as z}from"./BaseBreadcrumb-9fd99ced.js";const W=a("h3",{class:"title text-h6"},"General Form",-1),J=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),L=P({__name:"CardGeneralForm",setup(D){const f=o(!1),i=o(""),v=o(""),n=o({required:r=>!!r||"Required.",min:r=>r.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"});return(r,u)=>{const b=t("v-card-text"),k=t("v-divider"),p=t("v-text-field"),m=t("v-checkbox"),y=t("v-btn"),x=t("v-card");return S(),T(x,{class:"mb-7"},{default:l(()=>[e(b,{class:"pa-5 border-bottom"},{default:l(()=>[W,J]),_:1}),e(k),e(b,null,{default:l(()=>[e(p,{label:"Email address",filled:"","background-color":"transparent",hint:"We'll never share your email with anyone else.",height:"25","persistent-hint":""}),e(p,{modelValue:v.value,"onUpdate:modelValue":u[0]||(u[0]=g=>v.value=g),filled:"","background-color":"transparent",class:"mt-3","append-icon":f.value?"mdi-eye":"mdi-eye-off",rules:[n.value.required,n.value.min],type:f.value?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:"","onClick:append":u[1]||(u[1]=g=>f.value=!f.value)},null,8,["modelValue","append-icon","rules","type"]),e(m,{modelValue:i.value,"onUpdate:modelValue":u[2]||(u[2]=g=>i.value=g),"hide-details":"",label:"Check me Out!",class:"mt-0"},null,8,["modelValue"]),e(y,{color:"secondary",class:"text-capitalize"},{default:l(()=>[$("Submit")]),_:1})]),_:1})]),_:1})}}}),H=U(L,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/form-data/CardGeneralForm.vue"]]),K=a("h3",{class:"title text-h6"},"Default Form",-1),O=a("h6",{class:"text-subtitle-1 text-grey-darken-1"}," All with vuetify element attributes ",-1),Q={class:"mt-8"},X={class:"mt-4"},Y=P({__name:"CardDefaultForm",setup(D){const f=o("George deo"),i=o(""),v=o(""),n=o(""),r=o(""),u=o(""),b=o(""),k=o(""),p=o(!1),m=o("radio1"),y=o(!0),x=o(!1),g=o(["IT","Blade Runner","Thor"]),F=o({required:C=>!!C||"Required.",min:C=>C.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"});return(C,c)=>{const s=t("v-card-text"),B=t("v-divider"),I=t("v-text-field"),d=t("v-textarea"),V=t("v-checkbox"),w=t("v-switch"),A=t("v-col"),E=t("v-radio"),_=t("v-radio-group"),R=t("v-row"),q=t("v-select"),j=t("v-btn"),M=t("v-card");return S(),T(M,{class:"mb-7"},{default:l(()=>[e(s,{class:"pa-5 border-bottom"},{default:l(()=>[K,O]),_:1}),e(B),e(s,null,{default:l(()=>[e(I,{modelValue:f.value,"onUpdate:modelValue":c[0]||(c[0]=h=>f.value=h),label:"Default Text e.g. 'George deo'",filled:"","background-color":"transparent"},null,8,["modelValue"]),e(I,{type:"email",modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=h=>i.value=h),label:"Email e.g. 'example@gmail.com",filled:"","background-color":"transparent"},null,8,["modelValue"]),e(I,{modelValue:v.value,"onUpdate:modelValue":c[2]||(c[2]=h=>v.value=h),filled:"","background-color":"transparent","append-icon":p.value?"mdi-eye":"mdi-eye-off",rules:[F.value.required,F.value.min],type:p.value?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:"","onClick:append":c[3]||(c[3]=h=>p.value=!p.value)},null,8,["modelValue","append-icon","rules","type"]),e(I,{modelValue:n.value,"onUpdate:modelValue":c[4]||(c[4]=h=>n.value=h),label:"Placeholder",placeholder:"Enter Placeholder",filled:"","background-color":"transparent"},null,8,["modelValue"]),e(d,{filled:"",name:"input-7-4",rows:"3",label:"Textarea",value:"","background-color":"transparent"}),e(I,{modelValue:r.value,"onUpdate:modelValue":c[5]||(c[5]=h=>r.value=h),label:"Disabled Input",disabled:"",filled:"","background-color":"transparent"},null,8,["modelValue"]),e(R,null,{default:l(()=>[e(A,{cols:"12",lg:"6"},{default:l(()=>[e(V,{modelValue:u.value,"onUpdate:modelValue":c[6]||(c[6]=h=>u.value=h),label:"Check this custom checkbox","hide-details":""},null,8,["modelValue"]),e(V,{modelValue:b.value,"onUpdate:modelValue":c[7]||(c[7]=h=>b.value=h),label:"Check this custom checkbox","hide-details":""},null,8,["modelValue"]),e(V,{modelValue:k.value,"onUpdate:modelValue":c[8]||(c[8]=h=>k.value=h),label:"Check this custom checkbox","hide-details":""},null,8,["modelValue"]),a("div",Q,[e(w,{modelValue:y.value,"onUpdate:modelValue":c[9]||(c[9]=h=>y.value=h),inset:"",label:"Toggle this switch element","hide-details":""},null,8,["modelValue"]),e(w,{modelValue:x.value,"onUpdate:modelValue":c[10]||(c[10]=h=>x.value=h),disabled:"",inset:"",label:"Disabled switch element","hide-details":""},null,8,["modelValue"])])]),_:1}),e(A,{cols:"12",lg:"6"},{default:l(()=>[e(_,{modelValue:m.value,"onUpdate:modelValue":c[11]||(c[11]=h=>m.value=h),mandatory:!1},{default:l(()=>[e(E,{label:"Toggle this custom radio",value:"radio1"}),e(E,{label:"Toggle this custom radio",value:"radio2"}),e(E,{label:"Toggle this custom radio",value:"radio3"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a("div",X,[e(q,{items:g.value,filled:"",label:"Input Select","background-color":"transparent"},null,8,["items"]),e(I,{label:"Helping text",filled:"","background-color":"transparent",placeholder:"Helping text",hint:"A block of help text that breaks onto a new line and may extend beyond one line.","persistent-hint":""})]),e(j,{class:"mt-5",color:"secondary"},{default:l(()=>[$("Submit")]),_:1})]),_:1})]),_:1})}}}),Z=U(Y,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/form-data/CardDefaultForm.vue"]]),ee=a("h3",{class:"title text-h6"},"Other Sample Form",-1),le=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),te=a("h3",{class:"title text-h6 mb-5"},"Personal Info",-1),oe=a("label",null,"Membership",-1),ae=a("div",{class:"border-bottom px-5 pb-5"},[a("h3",{class:"title text-h6"},"Address")],-1),se=P({__name:"CardSampleForm",setup(D){const f=o(["Female","Male"]),i=o(["Category 1","Category 2"]),v=o(["India","Canada","United Kingdom"]),n=o(""),r=o(""),u=o(""),b=o("");return(k,p)=>{const m=t("v-card-text"),y=t("v-divider"),x=t("v-text-field"),g=t("v-select"),F=t("v-col"),C=t("v-radio"),c=t("v-radio-group"),s=t("v-row"),B=t("v-btn"),I=t("v-card");return S(),T(I,{class:"mb-7"},{default:l(()=>[e(m,{class:"pa-5 border-bottom"},{default:l(()=>[ee,le]),_:1}),e(y),e(m,{class:"pb-0"},{default:l(()=>[te,e(s,null,{default:l(()=>[e(F,{cols:"12",lg:"6"},{default:l(()=>[e(x,{label:"First Name",filled:"","background-color":"transparent",placeholder:"John Smith",hint:"This is inline help","persistent-hint":""}),e(g,{items:f.value,filled:"","background-color":"transparent",label:"Gender",class:"mt-3"},null,8,["items"]),e(g,{items:i.value,filled:"","background-color":"transparent",label:"Category",class:"mt-3"},null,8,["items"])]),_:1}),e(F,{cols:"12",lg:"6"},{default:l(()=>[e(x,{label:"Last Name",filled:"","background-color":"transparent",placeholder:"12n",hint:"This field has error.","persistent-hint":""}),e(x,{label:"Date of Birth",class:"mt-3",filled:"","background-color":"transparent",type:"date"}),oe,e(c,{row:"",class:"mb-0 mt-2"},{default:l(()=>[e(C,{label:"Free",color:"info",value:"free"}),e(C,{label:"Paid",color:"info",value:"pro"})]),_:1})]),_:1})]),_:1})]),_:1}),ae,e(m,{class:"pa-5 pt-0"},{default:l(()=>[e(s,null,{default:l(()=>[e(F,{cols:"12"},{default:l(()=>[e(x,{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=d=>n.value=d),label:"Street",filled:"","background-color":"transparent","hide-details":""},null,8,["modelValue"])]),_:1}),e(F,{cols:"12",lg:"6",class:"py-0"},{default:l(()=>[e(x,{modelValue:r.value,"onUpdate:modelValue":p[1]||(p[1]=d=>r.value=d),label:"City",filled:"","background-color":"transparent","hide-details":"",class:"mt-5"},null,8,["modelValue"]),e(x,{modelValue:b.value,"onUpdate:modelValue":p[2]||(p[2]=d=>b.value=d),label:"Post Code",class:"mt-8",filled:"","background-color":"transparent","hide-details":""},null,8,["modelValue"])]),_:1}),e(F,{cols:"12",lg:"6",class:"py-0"},{default:l(()=>[e(x,{modelValue:u.value,"onUpdate:modelValue":p[3]||(p[3]=d=>u.value=d),label:"State",filled:"","background-color":"transparent","hide-details":"",class:"mt-5"},null,8,["modelValue"]),e(g,{items:v.value,filled:"","background-color":"transparent",label:"Country",class:"mt-8"},null,8,["items"])]),_:1})]),_:1}),e(B,{color:"success",class:"mr-2"},{default:l(()=>[$("Save")]),_:1}),e(B,{color:"black"},{default:l(()=>[$("Cancel")]),_:1})]),_:1})]),_:1})}}}),ne=U(se,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/form-data/CardSampleForm.vue"]]),de=a("h3",{class:"title text-h6"}," Default Basic Forms ",-1),re=a("h6",{class:"text-subtitle-1 text-grey-darken-1"}," All with vuetify element attributes ",-1),ce=a("label",{class:"font-weight-medium subtitle-1"},"Text",-1),ie=a("label",{class:"font-weight-medium subtitle-1"},"Search",-1),ue=a("label",{class:"font-weight-medium subtitle-1"},"Email",-1),me=a("label",{class:"font-weight-medium subtitle-1"},"URL",-1),_e=a("label",{class:"font-weight-medium subtitle-1"},"Telephone",-1),pe=a("label",{class:"font-weight-medium subtitle-1"},"Password",-1),fe=a("label",{class:"font-weight-medium subtitle-1"},"Number",-1),ve=a("label",{class:"font-weight-medium subtitle-1"},"Date and time",-1),be=a("label",{class:"font-weight-medium subtitle-1"},"Date",-1),he=a("label",{class:"font-weight-medium subtitle-1"},"Month",-1),xe=a("label",{class:"font-weight-medium subtitle-1"},"Week",-1),ge=a("label",{class:"font-weight-medium subtitle-1"},"Time",-1),Ve=a("label",{class:"font-weight-medium subtitle-1"},"Select",-1),we=a("label",{class:"font-weight-medium subtitle-1"},"Color",-1),ke=P({__name:"CardDefaultBasicForm",setup(D){const f=o("Artisanal kale"),i=o("How do I shoot web"),v=o("bootstrap@example.com"),n=o("https://getbootstrap.com"),r=o("1-(555)-555-5555"),u=o(""),b=o(!1),k=o(!1),p=o("2008-05-13T22:33:00"),m=o("2018-05-13"),y=o("1999-08"),x=o("2011-W33"),g=o("22:33:00"),F=o(["India","Canada","United Kingdom"]),C=o("#563d7c");return o({required:c=>!!c||"Required.",min:c=>c.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"}),(c,s)=>{const B=t("v-card-text"),I=t("v-divider"),d=t("v-col"),V=t("v-text-field"),w=t("v-row"),A=t("v-select"),E=t("v-card");return S(),T(E,{class:"mb-7"},{default:l(()=>[e(B,{class:"pa-5 border-bottom"},{default:l(()=>[de,re]),_:1}),e(I),e(B,{class:"pa-5"},{default:l(()=>[e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[ce]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=_=>f.value=_),"hide-details":"","background-color":"transparent",filled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[ie]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=_=>i.value=_),type:"search","hide-details":"","background-color":"transparent",filled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[ue]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=_=>v.value=_),type:"search","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[me]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=_=>n.value=_),type:"url","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[_e]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:r.value,"onUpdate:modelValue":s[4]||(s[4]=_=>r.value=_),type:"url","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[pe]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:u.value,"onUpdate:modelValue":s[5]||(s[5]=_=>u.value=_),filled:"","background-color":"transparent","append-icon":b.value?"mdi-eye":"mdi-eye-off","hide-details":"",type:b.value?"text":"password",name:"input-10-1",placeholder:"Password",hint:"At least 8 characters",counter:"","onClick:append":s[6]||(s[6]=_=>b.value=!b.value)},null,8,["modelValue","append-icon","type"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[fe]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:k.value,"onUpdate:modelValue":s[7]||(s[7]=_=>k.value=_),type:"number","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[ve]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:p.value,"onUpdate:modelValue":s[8]||(s[8]=_=>p.value=_),type:"datetime-local","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[be]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:m.value,"onUpdate:modelValue":s[9]||(s[9]=_=>m.value=_),type:"date","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[he]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:y.value,"onUpdate:modelValue":s[10]||(s[10]=_=>y.value=_),type:"month","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[xe]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:x.value,"onUpdate:modelValue":s[11]||(s[11]=_=>x.value=_),type:"week","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[ge]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:g.value,"onUpdate:modelValue":s[12]||(s[12]=_=>g.value=_),type:"time","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[Ve]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(A,{items:F.value,filled:"","background-color":"transparent"},null,8,["items"])]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(d,{cols:"12",sm:"2",class:"align-center d-flex"},{default:l(()=>[we]),_:1}),e(d,{cols:"12",sm:"10"},{default:l(()=>[e(V,{modelValue:C.value,"onUpdate:modelValue":s[13]||(s[13]=_=>C.value=_),type:"color","hide-details":"",filled:"","background-color":"transparent"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),ye=U(ke,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/form-data/CardDefaultBasicForm.vue"]]),Ce={},Fe=a("h3",{class:"title text-h6"},"Input groups",-1),$e=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1);function Ue(D,f){const i=t("v-card-text"),v=t("v-divider"),n=t("v-text-field"),r=t("v-card");return S(),T(r,{class:"mb-7"},{default:l(()=>[e(i,{class:"pa-5 border-bottom"},{default:l(()=>[Fe,$e]),_:1}),e(v),e(i,{class:"pa-5 border-bottom"},{default:l(()=>[e(n,{filled:"","background-color":"transparent",label:"Username","prepend-inner-icon":"mdi-pencil"}),e(n,{filled:"","background-color":"transparent",label:"Recepaint's name","append-icon":"mdi-pencil"}),e(n,{filled:"","background-color":"transparent",label:"Username","prepend-inner-icon":"mdi-currency-usd"})]),_:1})]),_:1})}const Se=U(Ce,[["render",Ue],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/form-data/CardInputGroupForm.vue"]]),De={},Ie=a("h3",{class:"title text-h6"},"Input groups",-1),Te=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),Be=a("h3",{class:"title text-h6"},"Color outline Inputs",-1),Pe={class:"mt-5"},Ee=a("h3",{class:"title text-h6"},"Color Single line Inputs",-1),Ae={class:"mt-5"};function Re(D,f){const i=t("v-card-text"),v=t("v-divider"),n=t("v-text-field"),r=t("v-card");return S(),T(r,{class:"mb-7"},{default:l(()=>[e(i,{class:"pa-5 border-bottom"},{default:l(()=>[Ie,Te]),_:1}),e(v),e(i,{class:"pa-5 pb-0 border-bottom"},{default:l(()=>[Be,a("div",Pe,[e(n,{outlined:"",color:"success",label:"Input with Success",value:"John","prepend-inner-icon":"mdi-pencil"}),e(n,{outlined:"",color:"error",value:"Smith",label:"Error","append-icon":"mdi-pencil"}),e(n,{outlined:"",color:"warning",value:"John",label:"Input with Warning","prepend-inner-icon":"mdi-pencil"}),e(n,{outlined:"",color:"info",value:"John",label:"Input with Info","append-icon":"mdi-pencil"}),e(n,{outlined:"",color:"black",value:"John",label:"Input with Dark","prepend-inner-icon":"mdi-pencil"})])]),_:1}),e(i,{class:"pa-5 border-bottom"},{default:l(()=>[Ee,a("div",Ae,[e(n,{color:"success",label:"Input with Success",placeholder:"Success","persistent-hint":""}),e(n,{color:"error",label:"Input with Error",placeholder:"Error"}),e(n,{color:"warning",label:"Input with Warning",placeholder:"Warning"}),e(n,{color:"black",label:"Input with Dark",placeholder:"Dark"})])]),_:1})]),_:1})}const qe=U(De,[["render",Re],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/form-data/CardInputStateForm.vue"]]),je=a("h3",{class:"title text-h6"},"Disabled Form",-1),Me=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),Ge=P({__name:"CardDisabledForm",setup(D){const f=o(""),i=o(["IT","Blade Runner","Thor"]);return(v,n)=>{const r=t("v-card-text"),u=t("v-divider"),b=t("v-text-field"),k=t("v-select"),p=t("v-checkbox"),m=t("v-btn"),y=t("v-card");return S(),T(y,{class:"mb-7"},{default:l(()=>[e(r,{class:"pa-5 border-bottom"},{default:l(()=>[je,Me]),_:1}),e(u),e(r,{class:"pa-5"},{default:l(()=>[e(b,{label:"Disabled input",disabled:"",filled:""}),e(k,{items:i.value,filled:"",label:"Input Select",disabled:""},null,8,["items"]),e(p,{modelValue:f.value,"onUpdate:modelValue":n[0]||(n[0]=x=>f.value=x),class:"mt-2",label:"Check this custom checkbox","hide-details":"",disabled:""},null,8,["modelValue"]),e(m,{color:"secondary",class:"text-capitalize mt-4",disabled:""},{default:l(()=>[$("Save")]),_:1})]),_:1})]),_:1})}}}),Ne=U(Ge,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/form-data/CardDisabledForm.vue"]]),ze=a("h3",{class:"title text-h6"},"Sample Basic Forms",-1),We=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),Je={class:"mt-4"},Le=P({__name:"CardSimpleForm",setup(D){const f=o(""),i=o(""),v=o(""),n=o(""),r=o(!1),u=o(!1),b=o(!1),k=o({required:p=>!!p||"Required.",min:p=>p.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"});return(p,m)=>{const y=t("v-card-text"),x=t("v-divider"),g=t("v-text-field"),F=t("v-checkbox"),C=t("v-btn"),c=t("v-card");return S(),T(c,{class:"mb-7"},{default:l(()=>[e(y,{class:"pa-5 border-bottom"},{default:l(()=>[ze,We]),_:1}),e(x),e(y,{class:"pa-5"},{default:l(()=>[e(g,{label:"User Name",modelValue:f.value,"onUpdate:modelValue":m[0]||(m[0]=s=>f.value=s),placeholder:"Enter username"},null,8,["modelValue"]),e(g,{label:"Email",type:"email",modelValue:i.value,"onUpdate:modelValue":m[1]||(m[1]=s=>i.value=s),placeholder:"Email address"},null,8,["modelValue"]),e(g,{modelValue:v.value,"onUpdate:modelValue":m[2]||(m[2]=s=>v.value=s),"append-icon":r.value?"mdi-eye":"mdi-eye-off",rules:[k.value.required,k.value.min],type:r.value?"text":"password",name:"input-10-1",label:"Password",placeholder:"Enter password",counter:"","onClick:append":m[3]||(m[3]=s=>r.value=!r.value)},null,8,["modelValue","append-icon","rules","type"]),e(g,{modelValue:n.value,"onUpdate:modelValue":m[4]||(m[4]=s=>n.value=s),"append-icon":u.value?"mdi-eye":"mdi-eye-off",rules:[k.value.required,k.value.min],type:u.value?"text":"password",name:"input-10-1",label:"Confirm Password",placeholder:"Enter Confirm password",counter:"","onClick:append":m[5]||(m[5]=s=>r.value=!r.value)},null,8,["modelValue","append-icon","rules","type"]),e(F,{modelValue:b.value,"onUpdate:modelValue":m[6]||(m[6]=s=>b.value=s),class:"mt-2",label:"Remember me","hide-details":""},null,8,["modelValue"]),a("div",Je,[e(C,{color:"success",class:"text-capitalize mr-2"},{default:l(()=>[$("Save")]),_:1}),e(C,{color:"black",class:"text-capitalize",dark:""},{default:l(()=>[$("Cancel")]),_:1})])]),_:1})]),_:1})}}}),He=U(Le,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/form-data/CardSimpleForm.vue"]]),Ke={},Oe=a("h3",{class:"title text-h6"},"Sample Form with the Icons",-1),Qe=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),Xe={class:"mt-4"};function Ye(D,f){const i=t("v-card-text"),v=t("v-divider"),n=t("v-text-field"),r=t("v-checkbox"),u=t("v-btn"),b=t("v-card");return S(),T(b,{class:"mb-7"},{default:l(()=>[e(i,{class:"pa-5 border-bottom"},{default:l(()=>[Oe,Qe]),_:1}),e(v),e(i,{class:"pa-5 border-bottom"},{default:l(()=>[e(n,{outlined:"",label:"User Name",placeholder:"Username","prepend-inner-icon":"mdi-account"}),e(n,{outlined:"",label:"Email address",placeholder:"Email","prepend-inner-icon":"mdi-email"}),e(n,{outlined:"",label:"Password",placeholder:"Password","prepend-inner-icon":"mdi-lock"}),e(n,{outlined:"",label:"Confirm Password",placeholder:"Confirm Password","prepend-inner-icon":"mdi-lock","hide-details":""}),e(r,{label:"Remember me","hide-details":""}),a("div",Xe,[e(u,{color:"success",class:"text-capitalize mr-2"},{default:l(()=>[$("Save")]),_:1}),e(u,{color:"black",class:"text-capitalize",dark:""},{default:l(()=>[$("Cancel")]),_:1})])]),_:1})]),_:1})}const Ze=U(Ke,[["render",Ye],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/form-data/CardSampleFormwithIcons.vue"]]),el={},ll=a("h3",{class:"title text-h6"},"Sample Form with the right Icons",-1),tl=a("h6",{class:"text-subtitle-1 text-grey-darken-1"},"All with vuetify element attributes",-1),ol={class:"mt-4"};function al(D,f){const i=t("v-card-text"),v=t("v-divider"),n=t("v-text-field"),r=t("v-checkbox"),u=t("v-btn"),b=t("v-card");return S(),T(b,{class:"mb-7"},{default:l(()=>[e(i,{class:"pa-5 border-bottom"},{default:l(()=>[ll,tl]),_:1}),e(v),e(i,{class:"pa-5 border-bottom"},{default:l(()=>[e(n,{outlined:"",label:"User Name",placeholder:"Username","append-icon":"mdi-account"}),e(n,{outlined:"",label:"Email address",placeholder:"Email","append-icon":"mdi-email"}),e(n,{outlined:"",label:"Password",placeholder:"Password","append-icon":"mdi-lock"}),e(n,{outlined:"",label:"Confirm Password",placeholder:"Confirm Password","append-icon":"mdi-lock","hide-details":""}),e(r,{label:"Remember me","hide-details":""}),a("div",ol,[e(u,{color:"success",class:"text-capitalize mr-2"},{default:l(()=>[$("Save")]),_:1}),e(u,{color:"black",class:"text-capitalize",dark:""},{default:l(()=>[$("Cancel")]),_:1})])]),_:1})]),_:1})}const sl=U(el,[["render",al],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/form-data/CardSampleFormwithRightIcons.vue"]]),nl=P({__name:"FLFormBasic",setup(D){const f=o({title:"Form Basic"}),i=o([{text:"Form Elements",disabled:!1,to:"#"},{text:"Form Basic",disabled:!0}]);return(v,n)=>{const r=t("v-col"),u=t("v-row");return S(),G(N,null,[e(z,{title:f.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),e(u,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(H),e(Z),e(ne),e(ye),e(Se),e(qe),e(Ne),e(He)]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(Ze)]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(sl)]),_:1})]),_:1})],64)}}}),cl=U(nl,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-layouts/form-basic/FLFormBasic.vue"]]);export{cl as default};
