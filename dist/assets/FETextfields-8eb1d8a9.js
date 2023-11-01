import{_ as Z}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-d08d473c.js";import{_ as w}from"./BaseCard.vue_vue_type_script_setup_true_lang-955d5c0b.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{r as o,o as v,f as h,b as a,a as e,w as l,e as k,g as c,d as u,v as M,l as D,u as N,F as O,i as L,t as j,au as B,av as W,c as E,p as ee}from"./index-2030a46f.js";const le={},te=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Single line text fields do not float their label on focus or with data. ",-1),oe={class:"mt-4"};function ne(g,r){const t=o("v-text-field"),n=o("v-col"),d=o("v-row"),s=o("v-container"),i=o("v-form");return v(),h("div",null,[te,a("div",oe,[e(i,null,{default:l(()=>[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Regular","single-line":""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Solo","single-line":"",solo:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Filled","single-line":"",filled:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Outlined","single-line":"",outlined:""})]),_:1})]),_:1})]),_:1})]),_:1})])])}const ae=C(le,[["render",ne]]),se=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[a("code",null,"shaped"),u(" text fields are rounded if they're "),a("code",null,"outlined"),u(" and have higher "),a("code",null,"border-radius"),u(" if "),a("code",null,"filled"),u(". ")],-1),de={class:"mt-4"},ue=k({__name:"TextfieldShaped",setup(g){const r=c("John"),t=c("Doe");return(n,d)=>{const s=o("v-text-field"),i=o("v-col"),p=o("v-row"),m=o("v-container"),x=o("v-form");return v(),h("div",null,[se,a("div",de,[e(x,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,null,{default:l(()=>[e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=_=>r.value=_),label:"First Name",outlined:"",shaped:""},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=_=>t.value=_),label:"Last Name",filled:"",shaped:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])}}}),ie={},re=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" Text fields can be "),a("code",null,"disabled"),u(" or "),a("code",null,"readonly"),u(". ")],-1),ce={class:"mt-4"};function _e(g,r){const t=o("v-text-field"),n=o("v-col"),d=o("v-row"),s=o("v-container"),i=o("v-form");return v(),h("div",null,[re,a("div",ce,[e(i,null,{default:l(()=>[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Regular",disabled:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Regular",readonly:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Solo",solo:"",disabled:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Solo",solo:"",readonly:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Filled",filled:"",disabled:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Filled",filled:"",readonly:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Outlined",outlined:"",disabled:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{value:"John Doe",label:"Outlined",outlined:"",readonly:""})]),_:1})]),_:1})]),_:1})]),_:1})])])}const me=C(ie,[["render",_e]]),pe={},fe=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" You can reduces the text field height with "),a("code",null,"dense"),u(" prop. ")],-1),ve={class:"mt-4"};function xe(g,r){const t=o("v-text-field"),n=o("v-col"),d=o("v-row"),s=o("v-container"),i=o("v-form");return v(),h("div",null,[fe,a("div",ve,[e(i,null,{default:l(()=>[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(n,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{dense:"",label:"Regular"})]),_:1}),e(n,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{label:"Filled",filled:"",dense:""})]),_:1}),e(n,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{label:"Filled",placeholder:"Dense & Rounded",filled:"",rounded:"",dense:""})]),_:1}),e(n,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{label:"Solo",solo:"",dense:""})]),_:1}),e(n,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{label:"Outlined",outlined:"",dense:""})]),_:1}),e(n,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(t,{label:"Outlined",placeholder:"Placeholder",outlined:"",dense:""})]),_:1})]),_:1})]),_:1})]),_:1})])])}const be=C(pe,[["render",xe]]),he={},ge=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" You can add icons to the text field with "),a("code",null,"prepend-icon"),u(", "),a("code",null,"append-icon"),u(" and "),a("code",null,"append-outer-icon"),u(" props. ")],-1),ye={class:"mt-4"};function we(g,r){const t=o("v-text-field"),n=o("v-col"),d=o("v-row"),s=o("v-container"),i=o("v-form");return v(),h("div",null,[ge,a("div",ye,[e(i,null,{default:l(()=>[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Prepend","prepend-icon":"mdi-map-marker"}),e(t,{label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(t,{label:"Append","append-icon":"mdi-map-marker"}),e(t,{label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{solo:"",label:"Prepend","prepend-icon":"mdi-map-marker"}),e(t,{solo:"",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(t,{solo:"",label:"Append","append-icon":"mdi-map-marker"}),e(t,{solo:"",label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{filled:"",label:"Prepend","prepend-icon":"mdi-map-marker"}),e(t,{filled:"",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(t,{filled:"",label:"Append","append-icon":"mdi-map-marker"}),e(t,{filled:"",label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{outlined:"",label:"Prepend","prepend-icon":"mdi-map-marker"}),e(t,{outlined:"",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(t,{outlined:"",label:"Append","append-icon":"mdi-map-marker"}),e(t,{outlined:"",label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1})]),_:1})]),_:1})]),_:1})])])}const Ve=C(he,[["render",we]]),ke=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," A password input can be used with an appended icon and callback to control the visibility. ",-1),$e={class:"mt-4"},Te=k({__name:"TextfieldPasswordInput",setup(g){const r=c(!1),t=c(!0),n=c(!1),d=c(!1),s=c("Password"),i=c({required:p=>!!p||"Required.",min:p=>p.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"});return(p,m)=>{const x=o("v-text-field"),_=o("v-col"),V=o("v-row"),y=o("v-container"),f=o("v-form");return v(),h("div",null,[ke,a("div",$e,[e(f,null,{default:l(()=>[e(y,{fluid:""},{default:l(()=>[e(V,null,{default:l(()=>[e(_,{cols:"12",sm:"6"},{default:l(()=>[e(x,{modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=$=>s.value=$),"append-icon":r.value?"mdi-eye":"mdi-eye-off",rules:[i.value.required,i.value.min],type:r.value?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",counter:"","onClick:append":m[1]||(m[1]=$=>r.value=!r.value)},null,8,["modelValue","append-icon","rules","type"])]),_:1}),e(_,{cols:"12",sm:"6"},{default:l(()=>[e(x,{"append-icon":t.value?"mdi-eye":"mdi-eye-off",rules:[i.value.required,i.value.min],type:t.value?"text":"password",name:"input-10-2",label:"Visible",hint:"At least 8 characters",value:"wqfasds",class:"input-group--focused","onClick:append":m[2]||(m[2]=$=>t.value=!t.value)},null,8,["append-icon","rules","type"])]),_:1}),e(_,{cols:"12",sm:"6"},{default:l(()=>[e(x,{"append-icon":n.value?"mdi-eye":"mdi-eye-off",rules:[i.value.required,i.value.min],type:n.value?"text":"password",name:"input-10-2",label:"Not visible",hint:"At least 8 characters",value:"wqfasds",class:"input-group--focused","onClick:append":m[3]||(m[3]=$=>n.value=!n.value)},null,8,["append-icon","rules","type"])]),_:1}),e(_,{cols:"12",sm:"6"},{default:l(()=>[e(x,{"append-icon":d.value?"mdi-eye":"mdi-eye-off",rules:[i.value.required,i.value.emailMatch],type:d.value?"text":"password",name:"input-10-2",label:"Error",hint:"At least 8 characters",value:"Pa",error:"","onClick:append":m[4]||(m[4]=$=>d.value=!d.value)},null,8,["append-icon","rules","type"])]),_:1})]),_:1})]),_:1})]),_:1})])])}}}),Ce=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" When "),a("code",null,"clearable"),u(", you can customize the clear icon with "),a("code",null,"clear-icon"),u(". ")],-1),Ue={class:"mt-4"},Se=k({__name:"TextfieldClearable",setup(g){const r=c("Hey!"),t=c("Hey!"),n=c("Hey!"),d=c("Hey!");return(s,i)=>{const p=o("v-text-field"),m=o("v-col"),x=o("v-row"),_=o("v-container"),V=o("v-form");return v(),h("div",null,[Ce,a("div",Ue,[e(V,null,{default:l(()=>[e(_,null,{default:l(()=>[e(x,null,{default:l(()=>[e(m,{cols:"12",sm:"6"},{default:l(()=>[e(p,{modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=y=>r.value=y),label:"Regular",clearable:""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",sm:"6"},{default:l(()=>[e(p,{modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=y=>t.value=y),solo:"",label:"Solo",clearable:""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",sm:"6"},{default:l(()=>[e(p,{modelValue:n.value,"onUpdate:modelValue":i[2]||(i[2]=y=>n.value=y),filled:"",label:"Filled",clearable:""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",sm:"6"},{default:l(()=>[e(p,{modelValue:d.value,"onUpdate:modelValue":i[3]||(i[3]=y=>d.value=y),label:"Outlined",outlined:"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])}}}),Fe=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" Use a "),a("code",null,"counter"),u(" prop to inform a user of the character limit. The counter does not perform any validation by itself. You will need to pair it with either the internal validation system, or a 3rd party library. You can use it on regular, box or outlined text fields. ")],-1),Pe={class:"mt-4"},Ae=k({__name:"TextfieldCharacterCounter",setup(g){const r=c("Preliminary report"),t=c("California is a state in the western United States"),n=c([d=>d.length<=25||"Max 25 characters"]);return(d,s)=>{const i=o("v-text-field"),p=o("v-col"),m=o("v-row"),x=o("v-container"),_=o("v-form");return v(),h("div",null,[Fe,a("div",Pe,[e(_,null,{default:l(()=>[e(x,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,{cols:"12",sm:"6"},{default:l(()=>[e(i,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=V=>r.value=V),rules:n.value,counter:"25",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue","rules"])]),_:1}),e(p,{cols:"12",sm:"6"},{default:l(()=>[e(i,{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=V=>t.value=V),rules:n.value,counter:"",maxlength:"25",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue","rules"])]),_:1}),e(p,{cols:"12",sm:"6"},{default:l(()=>[e(i,{modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=V=>r.value=V),rules:n.value,counter:"25",filled:"",label:"Filled"},null,8,["modelValue","rules"])]),_:1}),e(p,{cols:"12",sm:"6"},{default:l(()=>[e(i,{modelValue:r.value,"onUpdate:modelValue":s[3]||(s[3]=V=>r.value=V),rules:n.value,counter:"25",label:"Outlined",outlined:""},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1})])])}}}),De=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" When "),a("code",null,"hide-details"),u(" is set to "),a("code",null,"auto"),u(" messages will be rendered only if there's a message (hint, error message, counter value etc) to display. ")],-1),Me={class:"mt-4"},Ne=k({__name:"TextfieldAutohideDetails",setup(g){const r=c([t=>!!t||"Required.",t=>t&&t.length>=3||"Min 3 characters"]);return(t,n)=>{const d=o("v-text-field");return v(),h("div",null,[De,a("div",Me,[a("div",null,[e(d,{label:"Main input",rules:r.value,"hide-details":"auto"},null,8,["rules"]),e(d,{label:"Another input"})])])])}}}),qe=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Text fields can be used with an alternative box design. Append and prepend icon props are not supported in this mode. ",-1),Ie={class:"mt-4"},Oe=k({__name:"TextfieldBoxStyle",setup(g){const r=c("John"),t=c("Doe");return(n,d)=>{const s=o("v-text-field"),i=o("v-col"),p=o("v-row"),m=o("v-container"),x=o("v-form");return v(),h("div",null,[qe,a("div",Ie,[e(x,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,null,{default:l(()=>[e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=_=>r.value=_),label:"First Name",filled:""},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=_=>t.value=_),label:"Last Name",filled:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])}}}),He=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Text fields can be used with an alternative solo design. ",-1),Re={class:"mt-4"},Ye=k({__name:"TextfieldSoloStyle",setup(g){const r=c("John"),t=c("Doe");return(n,d)=>{const s=o("v-text-field"),i=o("v-col"),p=o("v-row"),m=o("v-container"),x=o("v-form");return v(),h("div",null,[He,a("div",Re,[e(x,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,null,{default:l(()=>[e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=_=>r.value=_),label:"First Name",solo:""},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=_=>t.value=_),label:"Last Name","solo-inverted":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])}}}),Je=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Text fields can be used with an alternative outlined design. ",-1),Le={class:"mt-4"},je=k({__name:"TextfieldOutlineStyle",setup(g){const r=c("John"),t=c("Doe");return(n,d)=>{const s=o("v-text-field"),i=o("v-col"),p=o("v-row"),m=o("v-container"),x=o("v-form");return v(),h("div",null,[Je,a("div",Le,[e(x,null,{default:l(()=>[e(m,null,{default:l(()=>[e(p,null,{default:l(()=>[e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=_=>r.value=_),label:"First Name",outlined:""},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=_=>t.value=_),label:"Last Name",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])}}}),Be=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can optionally change a text field into any color in the Material design palette. Below is an example implementation of a custom form with validation. ",-1),We={class:"mt-4"},Ee=a("span",null,"Registration successful!",-1),ze=a("div",null,[u("Bio "),a("small",null,"(optional)")],-1),Ge=k({__name:"TextfieldCustomColors",setup(g){const r=Object.freeze({first:"",last:"",bio:"",favoriteAnimal:"",age:"",terms:!1}),t=c(Object.assign({},r)),n=c({age:[y=>y<10||"I don't believe you!"],animal:[y=>(y||"").length>0||"This field is required"],name:[y=>(y||"").length>0||"This field is required"]}),d=c(["Dog","Cat","Rabbit","Turtle","Snake"]),s=c(!1),i=c("Lorem sum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."),p=c(!1),m=c(!1),x=M(()=>t.value.first&&t.value.last&&t.value.favoriteAnimal&&t.value.terms);function _(){t.value=Object.assign({},r)}function V(){p.value=!0,_()}return(y,f)=>{const $=o("v-icon"),F=o("v-snackbar"),S=o("v-text-field"),T=o("v-col"),P=o("v-textarea"),U=o("v-select"),z=o("v-slider"),G=o("v-checkbox"),K=o("v-row"),Q=o("v-container"),A=o("v-btn"),q=o("v-spacer"),I=o("v-card-actions"),X=o("v-form"),H=o("v-card-title"),R=o("v-card-text"),Y=o("v-card"),J=o("v-dialog");return v(),h("div",null,[Be,a("div",We,[e(F,{modelValue:p.value,"onUpdate:modelValue":f[0]||(f[0]=b=>p.value=b),absolute:"",top:"",right:"",color:"success"},{default:l(()=>[Ee,e($,{dark:""},{default:l(()=>[u("mdi-checkbox-marked-circle")]),_:1})]),_:1},8,["modelValue"]),e(X,{ref_key:"form",ref:t,onSubmit:D(V,["prevent"])},{default:l(()=>[e(Q,{fluid:""},{default:l(()=>[e(K,null,{default:l(()=>[e(T,{cols:"12",sm:"6"},{default:l(()=>[e(S,{modelValue:t.value.first,"onUpdate:modelValue":f[1]||(f[1]=b=>t.value.first=b),rules:n.value.name,color:"purple darken-2",label:"First name",required:""},null,8,["modelValue","rules"])]),_:1}),e(T,{cols:"12",sm:"6"},{default:l(()=>[e(S,{modelValue:t.value.last,"onUpdate:modelValue":f[2]||(f[2]=b=>t.value.last=b),rules:n.value.name,color:"blue darken-2",label:"Last name",required:""},null,8,["modelValue","rules"])]),_:1}),e(T,{cols:"12"},{default:l(()=>[e(P,{modelValue:t.value.bio,"onUpdate:modelValue":f[3]||(f[3]=b=>t.value.bio=b),color:"teal"},{label:l(()=>[ze]),_:1},8,["modelValue"])]),_:1}),e(T,{cols:"12",sm:"6"},{default:l(()=>[e(U,{modelValue:t.value.favoriteAnimal,"onUpdate:modelValue":f[4]||(f[4]=b=>t.value.favoriteAnimal=b),items:d.value,rules:n.value.animal,color:"pink",label:"Favorite animal",required:""},null,8,["modelValue","items","rules"])]),_:1}),e(T,{cols:"12",sm:"6"},{default:l(()=>[e(z,{modelValue:t.value.age,"onUpdate:modelValue":f[5]||(f[5]=b=>t.value.age=b),rules:n.value.age,color:"orange",label:"Age",hint:"Be honest",min:"1",max:"100","thumb-label":""},null,8,["modelValue","rules"])]),_:1}),e(T,{cols:"12"},{default:l(()=>[e(G,{modelValue:t.value.terms,"onUpdate:modelValue":f[9]||(f[9]=b=>t.value.terms=b),color:"green"},{label:l(()=>[a("div",{onClick:f[8]||(f[8]=D(()=>{},["stop"]))},[u(" Do you accept the "),a("a",{href:"javascript:;",onClick:f[6]||(f[6]=D(b=>m.value=!0,["stop"]))},"terms"),u(" and "),a("a",{href:"javascript:;",onClick:f[7]||(f[7]=D(b=>s.value=!0,["stop"]))},"conditions?")])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(I,null,{default:l(()=>[e(A,{text:"",onClick:_},{default:l(()=>[u("Cancel")]),_:1}),e(q),e(A,{disabled:!N(x),text:"",color:"primary",type:"submit"},{default:l(()=>[u("Register")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["onSubmit"]),e(J,{modelValue:m.value,"onUpdate:modelValue":f[11]||(f[11]=b=>m.value=b),width:"70%"},{default:l(()=>[e(Y,null,{default:l(()=>[e(H,{class:"title"},{default:l(()=>[u("Terms")]),_:1}),(v(),h(O,null,L(5,b=>e(R,{key:b},{default:l(()=>[u(j(i.value),1)]),_:2},1024)),64)),e(I,null,{default:l(()=>[e(q),e(A,{text:"",color:"purple",onClick:f[10]||(f[10]=b=>m.value=!1)},{default:l(()=>[u("Ok")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(J,{modelValue:s.value,"onUpdate:modelValue":f[13]||(f[13]=b=>s.value=b),width:"70%"},{default:l(()=>[e(Y,null,{default:l(()=>[e(H,{class:"title"},{default:l(()=>[u("Conditions")]),_:1}),(v(),h(O,null,L(5,b=>e(R,{key:b},{default:l(()=>[u(j(i.value),1)]),_:2},1024)),64)),e(I,null,{default:l(()=>[e(q),e(A,{text:"",color:"purple",onClick:f[12]||(f[12]=b=>s.value=!1)},{default:l(()=>[u("Ok")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])}}}),Ke={},Qe=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" The "),a("code",null,"hint"),u(" property on text fields adds the provided string beneath the text field. Using "),a("code",null,"persistent-hint"),u(" keeps the hint visible when the text field is not focused. Hint prop is not supported in solo mode. ")],-1),Xe={class:"mt-4"};function Ze(g,r){const t=o("v-text-field"),n=o("v-col"),d=o("v-row"),s=o("v-container"),i=o("v-form");return v(),h("div",null,[Qe,a("div",Xe,[e(i,null,{default:l(()=>[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your product or service",value:"Grocery delivery",hint:"For example, flowers or used cars"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your product or service",value:"Grocery delivery",hint:"For example, flowers or used cars",filled:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":"",filled:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your product or service",value:"Grocery delivery",hint:"For example, flowers or used cars",outlined:""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(t,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":"",outlined:""})]),_:1})]),_:1})]),_:1})]),_:1})])])}const el=C(Ke,[["render",Ze]]),ll={},tl=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" The "),a("code",null,"prefix"),u(" and "),a("code",null,"suffix"),u(" properties allows you to prepend and append inline non-modifiable text next to the text field. ")],-1),ol={class:"mt-4"};function nl(g,r){const t=o("v-subheader"),n=o("v-col"),d=o("v-text-field"),s=o("v-row");return v(),h("div",null,[tl,a("div",ol,[e(s,null,{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(t,null,{default:l(()=>[u("Prefix for dollar currency")]),_:1})]),_:1}),e(n,{cols:"8"},{default:l(()=>[e(d,{label:"Amount",value:"10.00",prefix:"$"})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(t,null,{default:l(()=>[u("Suffix for weight")]),_:1})]),_:1}),e(n,{cols:"8"},{default:l(()=>[e(d,{label:"Weight",value:"28.00",suffix:"lbs"})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(t,null,{default:l(()=>[u("Suffix for email domain")]),_:1})]),_:1}),e(n,{cols:"8"},{default:l(()=>[e(d,{label:"Email address",value:"example",suffix:"@gmail.com"})]),_:1})]),_:1}),e(s,null,{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(t,null,{default:l(()=>[u("Suffix for time zone")]),_:1})]),_:1}),e(n,{cols:"8"},{default:l(()=>[e(d,{label:"Label Text",value:"12:30:00",type:"time",suffix:"PST"})]),_:1})]),_:1})])])}const al=C(ll,[["render",nl]]),sl=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[a("code",null,"click:prepend"),u(", "),a("code",null,"click:append"),u(", "),a("code",null,"click:append-outer"),u(", and "),a("code",null,"click:clear"),u(" will be emitted when you click on the respective icon. Note that these events will not be fired if the slot is used instead. ")],-1),dl={class:"mt-4"},ul=k({__name:"TextfieldIconEvents",setup(g){c("Password"),c(!1);const r=c("Hey!"),t=c(!0),n=c(0),d=c(["mdi-emoticon","mdi-emoticon-cool","mdi-emoticon-dead","mdi-emoticon-excited","mdi-emoticon-happy","mdi-emoticon-neutral","mdi-emoticon-sad","mdi-emoticon-tongue"]);function s(){t.value=!t.value}function i(){m(),p()}function p(){r.value=""}function m(){n.value=0}function x(){n.value===d.value.length-1?n.value=0:n.value++}const _=M(()=>d.value[n.value]);return(V,y)=>{const f=o("v-text-field"),$=o("v-col"),F=o("v-row"),S=o("v-container"),T=o("v-form");return v(),h("div",null,[sl,a("div",dl,[e(T,null,{default:l(()=>[e(S,null,{default:l(()=>[e(F,null,{default:l(()=>[e($,{cols:"12"},{default:l(()=>[e(f,{modelValue:r.value,"onUpdate:modelValue":y[0]||(y[0]=P=>r.value=P),"append-icon":t.value?"mdi-map-marker":"mdi-map-marker-off","append-outer-icon":r.value?"mdi-send":"mdi-microphone","prepend-icon":N(_),filled:"","clear-icon":"mdi-close-circle",clearable:"",label:"Message",type:"text","onClick:append":s,"onClick:appendOuter":i,"onClick:prepend":x,"onClick:clear":p},null,8,["modelValue","append-icon","append-outer-icon","prepend-icon"])]),_:1})]),_:1})]),_:1})]),_:1})])])}}}),il=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Instead of using prepend / append / append-outer icons you can use slots to extend input's functionality. ",-1),rl={class:"mt-4"},cl={key:1,width:"24",height:"24",src:"https://cdn.vuetifyjs.com/images/logos/v-alt.svg",alt:""},_l=k({__name:"TextfieldIconSlots",setup(g){const r=c("Hey!"),t=c(!1);function n(){t.value=!0,r.value="Wait for it...",setTimeout(()=>{t.value=!1,r.value="You've clicked me!"},2e3)}return(d,s)=>{const i=o("v-icon"),p=o("v-tooltip"),m=o("v-progress-circular"),x=o("v-fade-transition"),_=o("v-btn"),V=o("v-card-text"),y=o("v-card"),f=o("v-menu"),$=o("v-text-field"),F=o("v-col"),S=o("v-row"),T=o("v-container"),P=o("v-form");return v(),h("div",null,[il,a("div",rl,[e(P,null,{default:l(()=>[e(T,null,{default:l(()=>[e(S,null,{default:l(()=>[e(F,{cols:"12"},{default:l(()=>[e($,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=U=>r.value=U),outlined:"",clearable:"",label:"Message",type:"text"},{prepend:l(()=>[e(p,{bottom:""},{activator:l(({props:U})=>[e(i,B(W(U)),{default:l(()=>[u("mdi-help-circle-outline")]),_:2},1040)]),default:l(()=>[u(" I'm a tooltip ")]),_:1})]),append:l(()=>[e(x,{"leave-absolute":""},{default:l(()=>[t.value?(v(),E(m,{key:0,size:"24",color:"info",indeterminate:""})):(v(),h("img",cl))]),_:1})]),"append-outer":l(()=>[e(f,{style:{top:"-12px"},"offset-y":""},{activator:l(({props:U})=>[e(_,B(W(U)),{default:l(()=>[e(i,{left:""},{default:l(()=>[u("mdi-menu")]),_:1}),u(" Menu ")]),_:2},1040)]),default:l(()=>[e(y,null,{default:l(()=>[e(V,{class:"pa-6"},{default:l(()=>[e(_,{large:"",flat:"",color:"primary",onClick:n},{default:l(()=>[e(i,{left:""},{default:l(()=>[u("mdi-target")]),_:1}),u("Click me")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])}}}),ml={},pl=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" Text field label can be defined in "),a("code",null,"label"),u(" slot - that will allow to use HTML content ")],-1),fl={class:"mt-4"},vl=a("strong",null,"icon",-1);function xl(g,r){const t=o("v-icon"),n=o("v-text-field"),d=o("v-container"),s=o("v-form");return v(),h("div",null,[pl,a("div",fl,[e(s,null,{default:l(()=>[e(d,null,{default:l(()=>[e(n,null,{label:l(()=>[u(" What about "),vl,u(" here? "),e(t,{style:{"vertical-align":"middle"}},{default:l(()=>[u("mdi-file-find")]),_:1})]),_:1})]),_:1})]),_:1})])])}const bl=C(ml,[["render",xl]]),hl={},gl=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" Vuetify includes simple validation through the "),a("code",null,"rules"),u(" prop. The prop accepts an array of callbacks. While validating rules, the current v-model value will be passed to the callback. This callback should return either true or a String, the error message. ")],-1),yl=a("div",{class:"mt-4"},null,-1),wl=[gl,yl];function Vl(g,r){return v(),h("div",null,wl)}const kl=C(hl,[["render",Vl]]),$l=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" Full width text fields allow you to create boundless inputs. In this example, we use a "),a("code",null,"v-divider"),u(" to separate the fields. ")],-1),Tl={class:"mt-4"},Cl=k({__name:"TextfieldFullwidthCharahterCounter",setup(g){const r=c(["Trevor Handsen"]);c(["Trevor Handsen","Alex Nelson"]);const t=c(`Hi,
I just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa`);return(n,d)=>{const s=o("v-autocomplete"),i=o("v-divider"),p=o("v-text-field"),m=o("v-textarea"),x=o("v-form");return v(),h("div",null,[$l,a("div",Tl,[e(x,null,{default:l(()=>[e(s,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=_=>r.value=_),items:["Trevor Handsen","Alex Nelson"],chips:"",label:"To","full-width":"","hide-details":"","hide-no-data":"","hide-selected":"",multiple:"","single-line":""},null,8,["modelValue"]),e(i),e(p,{label:"Subject",value:"Plans for the weekend","single-line":"","full-width":"","hide-details":""}),e(i),e(m,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=_=>t.value=_),label:"Message",counter:"",maxlength:"120","full-width":"","single-line":""},null,8,["modelValue"])]),_:1})])])}}}),Ul=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" You can display a progress bar instead of the bottom line. You can use the default indeterminate progress having same color as the text field or designate a custom one using the "),a("code",null,"progress"),u(" slot ")],-1),Sl={class:"mt-4"},Fl=k({__name:"TextfieldProgressbar",setup(g){const r=c(1),t=c(!0),n=M(()=>Math.min(100,r.value*10)),d=M(()=>["error","warning","success"][Math.floor(n.value/40)]);return(s,i)=>{const p=o("v-checkbox"),m=o("v-progress-linear"),x=o("v-text-field");return v(),h("div",null,[Ul,a("div",Sl,[e(p,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=_=>t.value=_),label:"Custom progress bar"},null,8,["modelValue"]),e(x,{modelValue:r.value,"onUpdate:modelValue":i[1]||(i[1]=_=>r.value=_),color:"cyan darken",label:"Text field",placeholder:"Start typing...",loading:""},{progress:l(()=>[t.value?(v(),E(m,{key:0,value:N(n),color:N(d),absolute:"",height:"7"},null,8,["value","color"])):ee("",!0)]),_:1},8,["modelValue"])])])}}}),Nl=k({__name:"FETextfields",setup(g){const r=c({title:"TextFields"}),t=c([{text:"Form Elements",disabled:!1,to:"#"},{text:"TextFields",disabled:!0}]);return(n,d)=>{const s=o("v-col"),i=o("v-row");return v(),h(O,null,[e(Z,{title:r.value.title,breadcrumbs:t.value},null,8,["title","breadcrumbs"]),e(i,null,{default:l(()=>[e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Single line"},{default:l(()=>[e(ae)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Shaped"},{default:l(()=>[e(ue)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Disabled and readonly"},{default:l(()=>[e(me)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Dense"},{default:l(()=>[e(be)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Icons"},{default:l(()=>[e(Ve)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Clearable"},{default:l(()=>[e(Se)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Character counter"},{default:l(()=>[e(Ae)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Auto hiding details"},{default:l(()=>[e(Ne)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Password input"},{default:l(()=>[e(Te)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Box style"},{default:l(()=>[e(Oe)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Solo style"},{default:l(()=>[e(Ye)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Outlined style"},{default:l(()=>[e(je)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Custom colors"},{default:l(()=>[e(Ge)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Hint text"},{default:l(()=>[e(el)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Prefixes & suffixes"},{default:l(()=>[e(al)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Icon events"},{default:l(()=>[e(ul)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Icon slots"},{default:l(()=>[e(_l)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Label slot"},{default:l(()=>[e(bl)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Validation"},{default:l(()=>[e(kl)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Full-width text field with character counter"},{default:l(()=>[e(Cl)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(w,{heading:"Textfields - Progress bar"},{default:l(()=>[e(Fl)]),_:1})]),_:1})]),_:1})],64)}}});export{Nl as default};
