import{_ as y,r as o,o as x,f as g,j as u,b as n,a as e,w as l,F as T,e as $,g as _,d as i,v as M,p as I,u as N,k as Y,t as J,aq as E,ar as W,c as z}from"./index-f8c4d1fe.js";import{B as ee}from"./BaseBreadcrumb-9fd99ced.js";import{B as k}from"./BaseCard-07e99508.js";const le={},te=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Single line text fields do not float their label on focus or with data. ",-1),oe={class:"mt-4"};function ne(w,c){const t=o("v-text-field"),a=o("v-col"),d=o("v-row"),s=o("v-container"),r=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldSingleline "),u(" ----------------------------------------------------------------------------- "),n("div",null,[te,n("div",oe,[e(r,null,{default:l(()=>[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Regular","single-line":""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Solo","single-line":"",solo:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Filled","single-line":"",filled:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Outlined","single-line":"",outlined:""})]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}const ae=y(le,[["render",ne],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldSingleline.vue"]]),se=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[n("code",null,"shaped"),i(" text fields are rounded if they're "),n("code",null,"outlined"),i(" and have higher "),n("code",null,"border-radius"),i(" if "),n("code",null,"filled"),i(". ")],-1),de={class:"mt-4"},ie=$({__name:"TextfieldShaped",setup(w){const c=_("John"),t=_("Doe");return(a,d)=>{const s=o("v-text-field"),r=o("v-col"),p=o("v-row"),m=o("v-container"),b=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldShaped "),u(" ----------------------------------------------------------------------------- "),n("div",null,[se,n("div",de,[e(b,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,null,{default:l(()=>[e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=f=>c.value=f),label:"First Name",outlined:"",shaped:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=f=>t.value=f),label:"Last Name",filled:"",shaped:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}}}),ue=y(ie,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldShaped.vue"]]),re={},ce=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" Text fields can be "),n("code",null,"disabled"),i(" or "),n("code",null,"readonly"),i(". ")],-1),_e={class:"mt-4"};function fe(w,c){const t=o("v-text-field"),a=o("v-col"),d=o("v-row"),s=o("v-container"),r=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldDisabledReadonly "),u(" ----------------------------------------------------------------------------- "),n("div",null,[ce,n("div",_e,[e(r,null,{default:l(()=>[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Regular",disabled:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Regular",readonly:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Solo",solo:"",disabled:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Solo",solo:"",readonly:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Filled",filled:"",disabled:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Filled",filled:"",readonly:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Outlined",outlined:"",disabled:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Outlined",outlined:"",readonly:""})]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}const me=y(re,[["render",fe],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldDisabledReadonly.vue"]]),pe={},ve=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" You can reduces the text field height with "),n("code",null,"dense"),i(" prop. ")],-1),xe={class:"mt-4"};function be(w,c){const t=o("v-text-field"),a=o("v-col"),d=o("v-row"),s=o("v-container"),r=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldDense "),u(" ----------------------------------------------------------------------------- "),n("div",null,[ve,n("div",xe,[e(r,null,{default:l(()=>[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(a,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{dense:"",label:"Regular"})]),_:1}),e(a,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{label:"Filled",filled:"",dense:""})]),_:1}),e(a,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{label:"Filled",placeholder:"Dense & Rounded",filled:"",rounded:"",dense:""})]),_:1}),e(a,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{label:"Solo",solo:"",dense:""})]),_:1}),e(a,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{label:"Outlined",outlined:"",dense:""})]),_:1}),e(a,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{label:"Outlined",placeholder:"Placeholder",outlined:"",dense:""})]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}const he=y(pe,[["render",be],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldDense.vue"]]),ge={},Te=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" You can add icons to the text field with "),n("code",null,"prepend-icon"),i(", "),n("code",null,"append-icon"),i(" and "),n("code",null,"append-outer-icon"),i(" props. ")],-1),ye={class:"mt-4"};function we(w,c){const t=o("v-text-field"),a=o("v-col"),d=o("v-row"),s=o("v-container"),r=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldIcons "),u(" ----------------------------------------------------------------------------- "),n("div",null,[Te,n("div",ye,[e(r,null,{default:l(()=>[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Prepend","prepend-icon":"mdi-map-marker"}),e(t,{label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(t,{label:"Append","append-icon":"mdi-map-marker"}),e(t,{label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{solo:"",label:"Prepend","prepend-icon":"mdi-map-marker"}),e(t,{solo:"",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(t,{solo:"",label:"Append","append-icon":"mdi-map-marker"}),e(t,{solo:"",label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{filled:"",label:"Prepend","prepend-icon":"mdi-map-marker"}),e(t,{filled:"",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(t,{filled:"",label:"Append","append-icon":"mdi-map-marker"}),e(t,{filled:"",label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{outlined:"",label:"Prepend","prepend-icon":"mdi-map-marker"}),e(t,{outlined:"",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(t,{outlined:"",label:"Append","append-icon":"mdi-map-marker"}),e(t,{outlined:"",label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}const Ve=y(ge,[["render",we],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldIcons.vue"]]),ke=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," A password input can be used with an appended icon and callback to control the visibility. ",-1),Ce={class:"mt-4"},$e=$({__name:"TextfieldPasswordInput",setup(w){const c=_(!1),t=_(!0),a=_(!1),d=_(!1),s=_("Password"),r=_({required:p=>!!p||"Required.",min:p=>p.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"});return(p,m)=>{const b=o("v-text-field"),f=o("v-col"),C=o("v-row"),V=o("v-container"),v=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldPasswordInput "),u(" ----------------------------------------------------------------------------- "),n("div",null,[ke,n("div",Ce,[e(v,null,{default:l(()=>[e(V,{fluid:""},{default:l(()=>[e(C,null,{default:l(()=>[e(f,{cols:"12",sm:"6"},{default:l(()=>[e(b,{modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=S=>s.value=S),"append-icon":c.value?"mdi-eye":"mdi-eye-off",rules:[r.value.required,r.value.min],type:c.value?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",counter:"","onClick:append":m[1]||(m[1]=S=>c.value=!c.value)},null,8,["modelValue","append-icon","rules","type"])]),_:1}),e(f,{cols:"12",sm:"6"},{default:l(()=>[e(b,{"append-icon":t.value?"mdi-eye":"mdi-eye-off",rules:[r.value.required,r.value.min],type:t.value?"text":"password",name:"input-10-2",label:"Visible",hint:"At least 8 characters",value:"wqfasds",class:"input-group--focused","onClick:append":m[2]||(m[2]=S=>t.value=!t.value)},null,8,["append-icon","rules","type"])]),_:1}),e(f,{cols:"12",sm:"6"},{default:l(()=>[e(b,{"append-icon":a.value?"mdi-eye":"mdi-eye-off",rules:[r.value.required,r.value.min],type:a.value?"text":"password",name:"input-10-2",label:"Not visible",hint:"At least 8 characters",value:"wqfasds",class:"input-group--focused","onClick:append":m[3]||(m[3]=S=>a.value=!a.value)},null,8,["append-icon","rules","type"])]),_:1}),e(f,{cols:"12",sm:"6"},{default:l(()=>[e(b,{"append-icon":d.value?"mdi-eye":"mdi-eye-off",rules:[r.value.required,r.value.emailMatch],type:d.value?"text":"password",name:"input-10-2",label:"Error",hint:"At least 8 characters",value:"Pa",error:"","onClick:append":m[4]||(m[4]=S=>d.value=!d.value)},null,8,["append-icon","rules","type"])]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}}}),Se=y($e,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldPasswordInput.vue"]]),De=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" When "),n("code",null,"clearable"),i(", you can customize the clear icon with "),n("code",null,"clear-icon"),i(". ")],-1),Ue={class:"mt-4"},je=$({__name:"TextfieldClearable",setup(w){const c=_("Hey!"),t=_("Hey!"),a=_("Hey!"),d=_("Hey!");return(s,r)=>{const p=o("v-text-field"),m=o("v-col"),b=o("v-row"),f=o("v-container"),C=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldClearable "),u(" ----------------------------------------------------------------------------- "),n("div",null,[De,n("div",Ue,[e(C,null,{default:l(()=>[e(f,null,{default:l(()=>[e(b,null,{default:l(()=>[e(m,{cols:"12",sm:"6"},{default:l(()=>[e(p,{modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=V=>c.value=V),label:"Regular",clearable:""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",sm:"6"},{default:l(()=>[e(p,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=V=>t.value=V),solo:"",label:"Solo",clearable:""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",sm:"6"},{default:l(()=>[e(p,{modelValue:a.value,"onUpdate:modelValue":r[2]||(r[2]=V=>a.value=V),filled:"",label:"Filled",clearable:""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",sm:"6"},{default:l(()=>[e(p,{modelValue:d.value,"onUpdate:modelValue":r[3]||(r[3]=V=>d.value=V),label:"Outlined",outlined:"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}}}),Pe=y(je,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldClearable.vue"]]),Fe=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" Use a "),n("code",null,"counter"),i(" prop to inform a user of the character limit. The counter does not perform any validation by itself. You will need to pair it with either the internal validation system, or a 3rd party library. You can use it on regular, box or outlined text fields. ")],-1),Ae={class:"mt-4"},Ie=$({__name:"TextfieldCharacterCounter",setup(w){const c=_("Preliminary report"),t=_("California is a state in the western United States"),a=_([d=>d.length<=25||"Max 25 characters"]);return(d,s)=>{const r=o("v-text-field"),p=o("v-col"),m=o("v-row"),b=o("v-container"),f=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldCharacterCounter "),u(" ----------------------------------------------------------------------------- "),n("div",null,[Fe,n("div",Ae,[e(f,null,{default:l(()=>[e(b,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,{cols:"12",sm:"6"},{default:l(()=>[e(r,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=C=>c.value=C),rules:a.value,counter:"25",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue","rules"])]),_:1}),e(p,{cols:"12",sm:"6"},{default:l(()=>[e(r,{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=C=>t.value=C),rules:a.value,counter:"",maxlength:"25",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue","rules"])]),_:1}),e(p,{cols:"12",sm:"6"},{default:l(()=>[e(r,{modelValue:c.value,"onUpdate:modelValue":s[2]||(s[2]=C=>c.value=C),rules:a.value,counter:"25",filled:"",label:"Filled"},null,8,["modelValue","rules"])]),_:1}),e(p,{cols:"12",sm:"6"},{default:l(()=>[e(r,{modelValue:c.value,"onUpdate:modelValue":s[3]||(s[3]=C=>c.value=C),rules:a.value,counter:"25",label:"Outlined",outlined:""},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}}}),Me=y(Ie,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldCharacterCounter.vue"]]),Ne=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" When "),n("code",null,"hide-details"),i(" is set to "),n("code",null,"auto"),i(" messages will be rendered only if there's a message (hint, error message, counter value etc) to display. ")],-1),qe={class:"mt-4"},Oe=$({__name:"TextfieldAutohideDetails",setup(w){const c=_([t=>!!t||"Required.",t=>t&&t.length>=3||"Min 3 characters"]);return(t,a)=>{const d=o("v-text-field");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldAutohideDetails "),u(" ----------------------------------------------------------------------------- "),n("div",null,[Ne,n("div",qe,[n("div",null,[e(d,{label:"Main input",rules:c.value,"hide-details":"auto"},null,8,["rules"]),e(d,{label:"Another input"})])])])],2112)}}}),Be=y(Oe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldAutohideDetails.vue"]]),He=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Text fields can be used with an alternative box design. Append and prepend icon props are not supported in this mode. ",-1),Re={class:"mt-4"},Le=$({__name:"TextfieldBoxStyle",setup(w){const c=_("John"),t=_("Doe");return(a,d)=>{const s=o("v-text-field"),r=o("v-col"),p=o("v-row"),m=o("v-container"),b=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldBoxStyle "),u(" ----------------------------------------------------------------------------- "),n("div",null,[He,n("div",Re,[e(b,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,null,{default:l(()=>[e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=f=>c.value=f),label:"First Name",filled:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=f=>t.value=f),label:"Last Name",filled:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}}}),Ye=y(Le,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldBoxStyle.vue"]]),Je=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Text fields can be used with an alternative solo design. ",-1),Ee={class:"mt-4"},We=$({__name:"TextfieldSoloStyle",setup(w){const c=_("John"),t=_("Doe");return(a,d)=>{const s=o("v-text-field"),r=o("v-col"),p=o("v-row"),m=o("v-container"),b=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldSoloStyle "),u(" ----------------------------------------------------------------------------- "),n("div",null,[Je,n("div",Ee,[e(b,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,null,{default:l(()=>[e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=f=>c.value=f),label:"First Name",solo:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=f=>t.value=f),label:"Last Name","solo-inverted":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}}}),ze=y(We,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldSoloStyle.vue"]]),Ge=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Text fields can be used with an alternative outlined design. ",-1),Ke={class:"mt-4"},Qe=$({__name:"TextfieldOutlineStyle",setup(w){const c=_("John"),t=_("Doe");return(a,d)=>{const s=o("v-text-field"),r=o("v-col"),p=o("v-row"),m=o("v-container"),b=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldOutlineStyle "),u(" ----------------------------------------------------------------------------- "),n("div",null,[Ge,n("div",Ke,[e(b,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,null,{default:l(()=>[e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=f=>c.value=f),label:"First Name",outlined:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=f=>t.value=f),label:"Last Name",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}}}),Xe=y(Qe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldOutlineStyle.vue"]]),Ze=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can optionally change a text field into any color in the Material design palette. Below is an example implementation of a custom form with validation. ",-1),el={class:"mt-4"},ll=n("span",null,"Registration successful!",-1),tl=n("div",null,[i("Bio "),n("small",null,"(optional)")],-1),ol=$({__name:"TextfieldCustomColors",setup(w){const c=Object.freeze({first:"",last:"",bio:"",favoriteAnimal:"",age:"",terms:!1}),t=_(Object.assign({},c)),a=_({age:[V=>V<10||"I don't believe you!"],animal:[V=>(V||"").length>0||"This field is required"],name:[V=>(V||"").length>0||"This field is required"]}),d=_(["Dog","Cat","Rabbit","Turtle","Snake"]),s=_(!1),r=_("Lorem sum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."),p=_(!1),m=_(!1),b=M(()=>t.value.first&&t.value.last&&t.value.favoriteAnimal&&t.value.terms);function f(){t.value=Object.assign({},c)}function C(){p.value=!0,f()}return(V,v)=>{const S=o("v-icon"),P=o("v-snackbar"),j=o("v-text-field"),D=o("v-col"),F=o("v-textarea"),U=o("v-select"),G=o("v-slider"),K=o("v-checkbox"),Q=o("v-row"),X=o("v-container"),A=o("v-btn"),q=o("v-spacer"),O=o("v-card-actions"),Z=o("v-form"),B=o("v-card-title"),H=o("v-card-text"),R=o("v-card"),L=o("v-dialog");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldCustomColors "),u(" ----------------------------------------------------------------------------- "),n("div",null,[Ze,n("div",el,[e(P,{modelValue:p.value,"onUpdate:modelValue":v[0]||(v[0]=h=>p.value=h),absolute:"",top:"",right:"",color:"success"},{default:l(()=>[ll,e(S,{dark:""},{default:l(()=>[i("mdi-checkbox-marked-circle")]),_:1})]),_:1},8,["modelValue"]),e(Z,{ref_key:"form",ref:t,onSubmit:I(C,["prevent"])},{default:l(()=>[e(X,{fluid:""},{default:l(()=>[e(Q,null,{default:l(()=>[e(D,{cols:"12",sm:"6"},{default:l(()=>[e(j,{modelValue:t.value.first,"onUpdate:modelValue":v[1]||(v[1]=h=>t.value.first=h),rules:a.value.name,color:"purple darken-2",label:"First name",required:""},null,8,["modelValue","rules"])]),_:1}),e(D,{cols:"12",sm:"6"},{default:l(()=>[e(j,{modelValue:t.value.last,"onUpdate:modelValue":v[2]||(v[2]=h=>t.value.last=h),rules:a.value.name,color:"blue darken-2",label:"Last name",required:""},null,8,["modelValue","rules"])]),_:1}),e(D,{cols:"12"},{default:l(()=>[e(F,{modelValue:t.value.bio,"onUpdate:modelValue":v[3]||(v[3]=h=>t.value.bio=h),color:"teal"},{label:l(()=>[tl]),_:1},8,["modelValue"])]),_:1}),e(D,{cols:"12",sm:"6"},{default:l(()=>[e(U,{modelValue:t.value.favoriteAnimal,"onUpdate:modelValue":v[4]||(v[4]=h=>t.value.favoriteAnimal=h),items:d.value,rules:a.value.animal,color:"pink",label:"Favorite animal",required:""},null,8,["modelValue","items","rules"])]),_:1}),e(D,{cols:"12",sm:"6"},{default:l(()=>[e(G,{modelValue:t.value.age,"onUpdate:modelValue":v[5]||(v[5]=h=>t.value.age=h),rules:a.value.age,color:"orange",label:"Age",hint:"Be honest",min:"1",max:"100","thumb-label":""},null,8,["modelValue","rules"])]),_:1}),e(D,{cols:"12"},{default:l(()=>[e(K,{modelValue:t.value.terms,"onUpdate:modelValue":v[9]||(v[9]=h=>t.value.terms=h),color:"green"},{label:l(()=>[n("div",{onClick:v[8]||(v[8]=I(()=>{},["stop"]))},[i(" Do you accept the "),n("a",{href:"javascript:;",onClick:v[6]||(v[6]=I(h=>m.value=!0,["stop"]))},"terms"),i(" and "),n("a",{href:"javascript:;",onClick:v[7]||(v[7]=I(h=>s.value=!0,["stop"]))},"conditions?")])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(O,null,{default:l(()=>[e(A,{text:"",onClick:f},{default:l(()=>[i("Cancel")]),_:1}),e(q),e(A,{disabled:!N(b),text:"",color:"primary",type:"submit"},{default:l(()=>[i("Register")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["onSubmit"]),e(L,{modelValue:m.value,"onUpdate:modelValue":v[11]||(v[11]=h=>m.value=h),width:"70%"},{default:l(()=>[e(R,null,{default:l(()=>[e(B,{class:"title"},{default:l(()=>[i("Terms")]),_:1}),(x(),g(T,null,Y(5,h=>e(H,{key:h},{default:l(()=>[i(J(r.value),1)]),_:2},1024)),64)),e(O,null,{default:l(()=>[e(q),e(A,{text:"",color:"purple",onClick:v[10]||(v[10]=h=>m.value=!1)},{default:l(()=>[i("Ok")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(L,{modelValue:s.value,"onUpdate:modelValue":v[13]||(v[13]=h=>s.value=h),width:"70%"},{default:l(()=>[e(R,null,{default:l(()=>[e(B,{class:"title"},{default:l(()=>[i("Conditions")]),_:1}),(x(),g(T,null,Y(5,h=>e(H,{key:h},{default:l(()=>[i(J(r.value),1)]),_:2},1024)),64)),e(O,null,{default:l(()=>[e(q),e(A,{text:"",color:"purple",onClick:v[12]||(v[12]=h=>s.value=!1)},{default:l(()=>[i("Ok")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])],2112)}}}),nl=y(ol,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldCustomColors.vue"]]),al={},sl=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" The "),n("code",null,"hint"),i(" property on text fields adds the provided string beneath the text field. Using "),n("code",null,"persistent-hint"),i(" keeps the hint visible when the text field is not focused. Hint prop is not supported in solo mode. ")],-1),dl={class:"mt-4"};function il(w,c){const t=o("v-text-field"),a=o("v-col"),d=o("v-row"),s=o("v-container"),r=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldHintText "),u(" ----------------------------------------------------------------------------- "),n("div",null,[sl,n("div",dl,[e(r,null,{default:l(()=>[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your product or service",value:"Grocery delivery",hint:"For example, flowers or used cars"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your product or service",value:"Grocery delivery",hint:"For example, flowers or used cars",filled:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":"",filled:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your product or service",value:"Grocery delivery",hint:"For example, flowers or used cars",outlined:""})]),_:1}),e(a,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":"",outlined:""})]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}const ul=y(al,[["render",il],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldHintText.vue"]]),rl={},cl=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" The "),n("code",null,"prefix"),i(" and "),n("code",null,"suffix"),i(" properties allows you to prepend and append inline non-modifiable text next to the text field. ")],-1),_l={class:"mt-4"};function fl(w,c){const t=o("v-subheader"),a=o("v-col"),d=o("v-text-field"),s=o("v-row");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldPrefixesSuffixes "),u(" ----------------------------------------------------------------------------- "),n("div",null,[cl,n("div",_l,[e(s,null,{default:l(()=>[e(a,{cols:"4"},{default:l(()=>[e(t,null,{default:l(()=>[i("Prefix for dollar currency")]),_:1})]),_:1}),e(a,{cols:"8"},{default:l(()=>[e(d,{label:"Amount",value:"10.00",prefix:"$"})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(a,{cols:"4"},{default:l(()=>[e(t,null,{default:l(()=>[i("Suffix for weight")]),_:1})]),_:1}),e(a,{cols:"8"},{default:l(()=>[e(d,{label:"Weight",value:"28.00",suffix:"lbs"})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(a,{cols:"4"},{default:l(()=>[e(t,null,{default:l(()=>[i("Suffix for email domain")]),_:1})]),_:1}),e(a,{cols:"8"},{default:l(()=>[e(d,{label:"Email address",value:"example",suffix:"@gmail.com"})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(a,{cols:"4"},{default:l(()=>[e(t,null,{default:l(()=>[i("Suffix for time zone")]),_:1})]),_:1}),e(a,{cols:"8"},{default:l(()=>[e(d,{label:"Label Text",value:"12:30:00",type:"time",suffix:"PST"})]),_:1})]),_:1})])])],2112)}const ml=y(rl,[["render",fl],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldPrefixesSuffixes.vue"]]),pl=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[n("code",null,"click:prepend"),i(", "),n("code",null,"click:append"),i(", "),n("code",null,"click:append-outer"),i(", and "),n("code",null,"click:clear"),i(" will be emitted when you click on the respective icon. Note that these events will not be fired if the slot is used instead. ")],-1),vl={class:"mt-4"},xl=$({__name:"TextfieldIconEvents",setup(w){_("Password"),_(!1);const c=_("Hey!"),t=_(!0),a=_(0),d=_(["mdi-emoticon","mdi-emoticon-cool","mdi-emoticon-dead","mdi-emoticon-excited","mdi-emoticon-happy","mdi-emoticon-neutral","mdi-emoticon-sad","mdi-emoticon-tongue"]);function s(){t.value=!t.value}function r(){m(),p()}function p(){c.value=""}function m(){a.value=0}function b(){a.value===d.value.length-1?a.value=0:a.value++}const f=M(()=>d.value[a.value]);return(C,V)=>{const v=o("v-text-field"),S=o("v-col"),P=o("v-row"),j=o("v-container"),D=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldIconEvents "),u(" ----------------------------------------------------------------------------- "),n("div",null,[pl,n("div",vl,[e(D,null,{default:l(()=>[e(j,null,{default:l(()=>[e(P,null,{default:l(()=>[e(S,{cols:"12"},{default:l(()=>[e(v,{modelValue:c.value,"onUpdate:modelValue":V[0]||(V[0]=F=>c.value=F),"append-icon":t.value?"mdi-map-marker":"mdi-map-marker-off","append-outer-icon":c.value?"mdi-send":"mdi-microphone","prepend-icon":N(f),filled:"","clear-icon":"mdi-close-circle",clearable:"",label:"Message",type:"text","onClick:append":s,"onClick:appendOuter":r,"onClick:prepend":b,"onClick:clear":p},null,8,["modelValue","append-icon","append-outer-icon","prepend-icon"])]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}}}),bl=y(xl,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldIconEvents.vue"]]),hl=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Instead of using prepend / append / append-outer icons you can use slots to extend input's functionality. ",-1),gl={class:"mt-4"},Tl={key:1,width:"24",height:"24",src:"https://cdn.vuetifyjs.com/images/logos/v-alt.svg",alt:""},yl=$({__name:"TextfieldIconSlots",setup(w){const c=_("Hey!"),t=_(!1);function a(){t.value=!0,c.value="Wait for it...",setTimeout(()=>{t.value=!1,c.value="You've clicked me!"},2e3)}return(d,s)=>{const r=o("v-icon"),p=o("v-tooltip"),m=o("v-progress-circular"),b=o("v-fade-transition"),f=o("v-btn"),C=o("v-card-text"),V=o("v-card"),v=o("v-menu"),S=o("v-text-field"),P=o("v-col"),j=o("v-row"),D=o("v-container"),F=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldIconSlots "),u(" ----------------------------------------------------------------------------- "),n("div",null,[hl,n("div",gl,[e(F,null,{default:l(()=>[e(D,null,{default:l(()=>[e(j,null,{default:l(()=>[e(P,{cols:"12"},{default:l(()=>[e(S,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=U=>c.value=U),outlined:"",clearable:"",label:"Message",type:"text"},{prepend:l(()=>[e(p,{bottom:""},{activator:l(({props:U})=>[e(r,E(W(U)),{default:l(()=>[i("mdi-help-circle-outline")]),_:2},1040)]),default:l(()=>[i(" I'm a tooltip ")]),_:1})]),append:l(()=>[e(b,{"leave-absolute":""},{default:l(()=>[t.value?(x(),z(m,{key:0,size:"24",color:"info",indeterminate:""})):(x(),g("img",Tl))]),_:1})]),"append-outer":l(()=>[e(v,{style:{top:"-12px"},"offset-y":""},{activator:l(({props:U})=>[e(f,E(W(U)),{default:l(()=>[e(r,{left:""},{default:l(()=>[i("mdi-menu")]),_:1}),i(" Menu ")]),_:2},1040)]),default:l(()=>[e(V,null,{default:l(()=>[e(C,{class:"pa-6"},{default:l(()=>[e(f,{large:"",flat:"",color:"primary",onClick:a},{default:l(()=>[e(r,{left:""},{default:l(()=>[i("mdi-target")]),_:1}),i("Click me")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}}}),wl=y(yl,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldIconSlots.vue"]]),Vl={},kl=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" Text field label can be defined in "),n("code",null,"label"),i(" slot - that will allow to use HTML content ")],-1),Cl={class:"mt-4"},$l=n("strong",null,"icon",-1);function Sl(w,c){const t=o("v-icon"),a=o("v-text-field"),d=o("v-container"),s=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldLabelSlots "),u(" ----------------------------------------------------------------------------- "),n("div",null,[kl,n("div",Cl,[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(a,null,{label:l(()=>[i(" What about "),$l,i(" here? "),e(t,{style:{"vertical-align":"middle"}},{default:l(()=>[i("mdi-file-find")]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}const Dl=y(Vl,[["render",Sl],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldLabelSlots.vue"]]),Ul={},jl=n("div",null,[n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" Vuetify includes simple validation through the "),n("code",null,"rules"),i(" prop. The prop accepts an array of callbacks. While validating rules, the current v-model value will be passed to the callback. This callback should return either true or a String, the error message. ")]),n("div",{class:"mt-4"})],-1);function Pl(w,c){return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldValidation "),u(" ----------------------------------------------------------------------------- "),jl],2112)}const Fl=y(Ul,[["render",Pl],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldValidation.vue"]]),Al=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" Full width text fields allow you to create boundless inputs. In this example, we use a "),n("code",null,"v-divider"),i(" to separate the fields. ")],-1),Il={class:"mt-4"},Ml=$({__name:"TextfieldFullwidthCharahterCounter",setup(w){const c=_(["Trevor Handsen"]);_(["Trevor Handsen","Alex Nelson"]);const t=_(`Hi,
I just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa`);return(a,d)=>{const s=o("v-autocomplete"),r=o("v-divider"),p=o("v-text-field"),m=o("v-textarea"),b=o("v-form");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldFullwidthCharahterCounter "),u(" ----------------------------------------------------------------------------- "),n("div",null,[Al,n("div",Il,[e(b,null,{default:l(()=>[e(s,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=f=>c.value=f),items:["Trevor Handsen","Alex Nelson"],chips:"",label:"To","full-width":"","hide-details":"","hide-no-data":"","hide-selected":"",multiple:"","single-line":""},null,8,["modelValue"]),e(r),e(p,{label:"Subject",value:"Plans for the weekend","single-line":"","full-width":"","hide-details":""}),e(r),e(m,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=f=>t.value=f),label:"Message",counter:"",maxlength:"120","full-width":"","single-line":""},null,8,["modelValue"])]),_:1})])])],2112)}}}),Nl=y(Ml,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldFullwidthCharahterCounter.vue"]]),ql=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[i(" You can display a progress bar instead of the bottom line. You can use the default indeterminate progress having same color as the text field or designate a custom one using the "),n("code",null,"progress"),i(" slot ")],-1),Ol={class:"mt-4"},Bl=$({__name:"TextfieldProgressbar",setup(w){const c=_(1),t=_(!0),a=M(()=>Math.min(100,c.value*10)),d=M(()=>["error","warning","success"][Math.floor(a.value/40)]);return(s,r)=>{const p=o("v-checkbox"),m=o("v-progress-linear"),b=o("v-text-field");return x(),g(T,null,[u(" ----------------------------------------------------------------------------- "),u(" TextfieldProgressbar "),u(" ----------------------------------------------------------------------------- "),n("div",null,[ql,n("div",Ol,[e(p,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=f=>t.value=f),label:"Custom progress bar"},null,8,["modelValue"]),e(b,{modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=f=>c.value=f),color:"cyan darken",label:"Text field",placeholder:"Start typing...",loading:""},{progress:l(()=>[t.value?(x(),z(m,{key:0,value:N(a),color:N(d),absolute:"",height:"7"},null,8,["value","color"])):u("v-if",!0)]),_:1},8,["modelValue"])])])],2112)}}}),Hl=y(Bl,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textfields/TextfieldProgressbar.vue"]]),Rl=$({__name:"FETextfields",setup(w){const c=_({title:"TextFields"}),t=_([{text:"Form Elements",disabled:!1,to:"#"},{text:"TextFields",disabled:!0}]);return(a,d)=>{const s=o("v-col"),r=o("v-row");return x(),g(T,null,[e(ee,{title:c.value.title,breadcrumbs:t.value},null,8,["title","breadcrumbs"]),e(r,null,{default:l(()=>[e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Single line"},{default:l(()=>[e(ae)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Shaped"},{default:l(()=>[e(ue)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Disabled and readonly"},{default:l(()=>[e(me)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Dense"},{default:l(()=>[e(he)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Icons"},{default:l(()=>[e(Ve)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Clearable"},{default:l(()=>[e(Pe)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Character counter"},{default:l(()=>[e(Me)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Auto hiding details"},{default:l(()=>[e(Be)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Password input"},{default:l(()=>[e(Se)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Box style"},{default:l(()=>[e(Ye)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Solo style"},{default:l(()=>[e(ze)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Outlined style"},{default:l(()=>[e(Xe)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Custom colors"},{default:l(()=>[e(nl)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Hint text"},{default:l(()=>[e(ul)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Prefixes & suffixes"},{default:l(()=>[e(ml)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Icon events"},{default:l(()=>[e(bl)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Icon slots"},{default:l(()=>[e(wl)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Label slot"},{default:l(()=>[e(Dl)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Validation"},{default:l(()=>[e(Fl)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Full-width text field with character counter"},{default:l(()=>[e(Nl)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(k,{heading:"Textfields - Progress bar"},{default:l(()=>[e(Hl)]),_:1})]),_:1})]),_:1})],64)}}}),El=y(Rl,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-elements/FETextfields.vue"]]);export{El as default};