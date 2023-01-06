import{_ as Z}from"./BaseBreadcrumb.63222b44.js";import{_ as x}from"./BaseCard.c6d56684.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,n as v,f as a,a as e,w as l,V as k,e as g,b as t,j as s,i as y,m as $,r as i,h as o,Z as A,l as U,a0 as K,aS as W,ah as Q,bf as X,k as z,J as P,aY as M,g as S,M as N,u as D,d as q,ap as Y,F as I,v as H,ab as O,y as L,aU as J,s as ee,aN as le,bD as j,bE as B,br as te,c as G,aP as ae,N as se,_ as ne,T as E,aq as oe,L as de}from"./index.cd0c6b49.js";const ue={},ie=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Single line text fields do not float their label on focus or with data. ",-1),re={class:"mt-4"};function ce(h,d){return p(),v("div",null,[ie,a("div",re,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Regular","single-line":""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Solo","single-line":"",solo:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Filled","single-line":"",filled:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Outlined","single-line":"",outlined:""})]),_:1})]),_:1})]),_:1})]),_:1})])])}var me=C(ue,[["render",ce]]);const fe=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[a("code",null,"shaped"),o(" text fields are rounded if they're "),a("code",null,"outlined"),o(" and have higher "),a("code",null,"border-radius"),o(" if "),a("code",null,"filled"),o(". ")],-1),pe={class:"mt-4"},_e=$({__name:"TextfieldShaped",setup(h){const d=i("John"),n=i("Doe");return(m,u)=>(p(),v("div",null,[fe,a("div",pe,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=r=>d.value=r),label:"First Name",outlined:"",shaped:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=r=>n.value=r),label:"Last Name",filled:"",shaped:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])]))}}),ve={},be=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" Text fields can be "),a("code",null,"disabled"),o(" or "),a("code",null,"readonly"),o(". ")],-1),he={class:"mt-4"};function xe(h,d){return p(),v("div",null,[be,a("div",he,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{value:"John Doe",label:"Regular",disabled:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{value:"John Doe",label:"Regular",readonly:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{value:"John Doe",label:"Solo",solo:"",disabled:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{value:"John Doe",label:"Solo",solo:"",readonly:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{value:"John Doe",label:"Filled",filled:"",disabled:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{value:"John Doe",label:"Filled",filled:"",readonly:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{value:"John Doe",label:"Outlined",outlined:"",disabled:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{value:"John Doe",label:"Outlined",outlined:"",readonly:""})]),_:1})]),_:1})]),_:1})]),_:1})])])}var ge=C(ve,[["render",xe]]);const Ve={},ye=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" You can reduces the text field height with "),a("code",null,"dense"),o(" prop. ")],-1),ke={class:"mt-4"};function $e(h,d){return p(),v("div",null,[ye,a("div",ke,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(s,{dense:"",label:"Regular"})]),_:1}),e(t,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(s,{label:"Filled",filled:"",dense:""})]),_:1}),e(t,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(s,{label:"Filled",placeholder:"Dense & Rounded",filled:"",rounded:"",dense:""})]),_:1}),e(t,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(s,{label:"Solo",solo:"",dense:""})]),_:1}),e(t,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(s,{label:"Outlined",outlined:"",dense:""})]),_:1}),e(t,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(s,{label:"Outlined",placeholder:"Placeholder",outlined:"",dense:""})]),_:1})]),_:1})]),_:1})]),_:1})])])}var Te=C(Ve,[["render",$e]]);const we={},Ce=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" You can add icons to the text field with "),a("code",null,"prepend-icon"),o(", "),a("code",null,"append-icon"),o(" and "),a("code",null,"append-outer-icon"),o(" props. ")],-1),Se={class:"mt-4"};function Ue(h,d){return p(),v("div",null,[Ce,a("div",Se,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Prepend","prepend-icon":"mdi-map-marker"}),e(s,{label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(s,{label:"Append","append-icon":"mdi-map-marker"}),e(s,{label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{solo:"",label:"Prepend","prepend-icon":"mdi-map-marker"}),e(s,{solo:"",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(s,{solo:"",label:"Append","append-icon":"mdi-map-marker"}),e(s,{solo:"",label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{filled:"",label:"Prepend","prepend-icon":"mdi-map-marker"}),e(s,{filled:"",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(s,{filled:"",label:"Append","append-icon":"mdi-map-marker"}),e(s,{filled:"",label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{outlined:"",label:"Prepend","prepend-icon":"mdi-map-marker"}),e(s,{outlined:"",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker"}),e(s,{outlined:"",label:"Append","append-icon":"mdi-map-marker"}),e(s,{outlined:"",label:"Append outer","append-outer-icon":"mdi-map-marker"})]),_:1})]),_:1})]),_:1})]),_:1})])])}var Fe=C(we,[["render",Ue]]);const Pe=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," A password input can be used with an appended icon and callback to control the visibility. ",-1),Ae={class:"mt-4"},De=$({__name:"TextfieldPasswordInput",setup(h){const d=i(!1),n=i(!0),m=i(!1),u=i(!1),r=i("Password"),c=i({required:b=>!!b||"Required.",min:b=>b.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"});return(b,V)=>(p(),v("div",null,[Pe,a("div",Ae,[e(y,null,{default:l(()=>[e(k,{fluid:""},{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:r.value,"onUpdate:modelValue":V[0]||(V[0]=T=>r.value=T),"append-icon":d.value?"mdi-eye":"mdi-eye-off",rules:[c.value.required,c.value.min],type:d.value?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",counter:"","onClick:append":V[1]||(V[1]=T=>d.value=!d.value)},null,8,["modelValue","append-icon","rules","type"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{"append-icon":n.value?"mdi-eye":"mdi-eye-off",rules:[c.value.required,c.value.min],type:n.value?"text":"password",name:"input-10-2",label:"Visible",hint:"At least 8 characters",value:"wqfasds",class:"input-group--focused","onClick:append":V[2]||(V[2]=T=>n.value=!n.value)},null,8,["append-icon","rules","type"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{"append-icon":m.value?"mdi-eye":"mdi-eye-off",rules:[c.value.required,c.value.min],type:m.value?"text":"password",name:"input-10-2",label:"Not visible",hint:"At least 8 characters",value:"wqfasds",class:"input-group--focused","onClick:append":V[3]||(V[3]=T=>m.value=!m.value)},null,8,["append-icon","rules","type"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{"append-icon":u.value?"mdi-eye":"mdi-eye-off",rules:[c.value.required,c.value.emailMatch],type:u.value?"text":"password",name:"input-10-2",label:"Error",hint:"At least 8 characters",value:"Pa",error:"","onClick:append":V[4]||(V[4]=T=>u.value=!u.value)},null,8,["append-icon","rules","type"])]),_:1})]),_:1})]),_:1})]),_:1})])]))}}),Me=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" When "),a("code",null,"clearable"),o(", you can customize the clear icon with "),a("code",null,"clear-icon"),o(". ")],-1),Ne={class:"mt-4"},qe=$({__name:"TextfieldClearable",setup(h){const d=i("Hey!"),n=i("Hey!"),m=i("Hey!"),u=i("Hey!");return(r,c)=>(p(),v("div",null,[Me,a("div",Ne,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d.value,"onUpdate:modelValue":c[0]||(c[0]=b=>d.value=b),label:"Regular",clearable:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=b=>n.value=b),solo:"",label:"Solo",clearable:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:m.value,"onUpdate:modelValue":c[2]||(c[2]=b=>m.value=b),filled:"",label:"Filled",clearable:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:u.value,"onUpdate:modelValue":c[3]||(c[3]=b=>u.value=b),label:"Outlined",outlined:"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])]))}}),Ie=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" Use a "),a("code",null,"counter"),o(" prop to inform a user of the character limit. The counter does not perform any validation by itself. You will need to pair it with either the internal validation system, or a 3rd party library. You can use it on regular, box or outlined text fields. ")],-1),Oe={class:"mt-4"},Re=$({__name:"TextfieldCharacterCounter",setup(h){const d=i("Preliminary report"),n=i("California is a state in the western United States"),m=i([u=>u.length<=25||"Max 25 characters"]);return(u,r)=>(p(),v("div",null,[Ie,a("div",Oe,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=c=>d.value=c),rules:m.value,counter:"25",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=c=>n.value=c),rules:m.value,counter:"",maxlength:"25",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d.value,"onUpdate:modelValue":r[2]||(r[2]=c=>d.value=c),rules:m.value,counter:"25",filled:"",label:"Filled"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d.value,"onUpdate:modelValue":r[3]||(r[3]=c=>d.value=c),rules:m.value,counter:"25",label:"Outlined",outlined:""},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1})])]))}}),Ye=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" When "),a("code",null,"hide-details"),o(" is set to "),a("code",null,"auto"),o(" messages will be rendered only if there's a message (hint, error message, counter value etc) to display. ")],-1),He={class:"mt-4"},Le=$({__name:"TextfieldAutohideDetails",setup(h){const d=i([n=>!!n||"Required.",n=>n&&n.length>=3||"Min 3 characters"]);return(n,m)=>(p(),v("div",null,[Ye,a("div",He,[a("div",null,[e(s,{label:"Main input",rules:d.value,"hide-details":"auto"},null,8,["rules"]),e(s,{label:"Another input"})])])]))}}),Je=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Text fields can be used with an alternative box design. Append and prepend icon props are not supported in this mode. ",-1),je={class:"mt-4"},Be=$({__name:"TextfieldBoxStyle",setup(h){const d=i("John"),n=i("Doe");return(m,u)=>(p(),v("div",null,[Je,a("div",je,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=r=>d.value=r),label:"First Name",filled:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=r=>n.value=r),label:"Last Name",filled:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])]))}}),Ee=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Text fields can be used with an alternative solo design. ",-1),We={class:"mt-4"},ze=$({__name:"TextfieldSoloStyle",setup(h){const d=i("John"),n=i("Doe");return(m,u)=>(p(),v("div",null,[Ee,a("div",We,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=r=>d.value=r),label:"First Name",solo:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=r=>n.value=r),label:"Last Name","solo-inverted":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])]))}}),Ge=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Text fields can be used with an alternative outlined design. ",-1),Ze={class:"mt-4"},Ke=$({__name:"TextfieldOutlineStyle",setup(h){const d=i("John"),n=i("Doe");return(m,u)=>(p(),v("div",null,[Ge,a("div",Ze,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=r=>d.value=r),label:"First Name",outlined:""},null,8,["modelValue"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=r=>n.value=r),label:"Last Name",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])]))}}),Qe=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can optionally change a text field into any color in the Material design palette. Below is an example implementation of a custom form with validation. ",-1),Xe={class:"mt-4"},el=a("span",null,"Registration successful!",-1),ll=a("div",null,[o("Bio "),a("small",null,"(optional)")],-1),tl=$({__name:"TextfieldCustomColors",setup(h){const d=Object.freeze({first:"",last:"",bio:"",favoriteAnimal:"",age:"",terms:!1}),n=i(Object.assign({},d)),m=i({age:[w=>w<10||"I don't believe you!"],animal:[w=>(w||"").length>0||"This field is required"],name:[w=>(w||"").length>0||"This field is required"]}),u=i(["Dog","Cat","Rabbit","Turtle","Snake"]),r=i(!1),c=i("Lorem sum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."),b=i(!1),V=i(!1),T=A(()=>n.value.first&&n.value.last&&n.value.favoriteAnimal&&n.value.terms);function F(){n.value=Object.assign({},d)}function R(){b.value=!0,F()}return(w,f)=>(p(),v("div",null,[Qe,a("div",Xe,[e(K,{modelValue:b.value,"onUpdate:modelValue":f[0]||(f[0]=_=>b.value=_),absolute:"",top:"",right:"",color:"success"},{default:l(()=>[el,e(U,{dark:""},{default:l(()=>[o("mdi-checkbox-marked-circle")]),_:1})]),_:1},8,["modelValue"]),e(y,{ref_key:"form",ref:n,onSubmit:P(R,["prevent"])},{default:l(()=>[e(k,{fluid:""},{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:n.value.first,"onUpdate:modelValue":f[1]||(f[1]=_=>n.value.first=_),rules:m.value.name,color:"purple darken-2",label:"First name",required:""},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:n.value.last,"onUpdate:modelValue":f[2]||(f[2]=_=>n.value.last=_),rules:m.value.name,color:"blue darken-2",label:"Last name",required:""},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(W,{modelValue:n.value.bio,"onUpdate:modelValue":f[3]||(f[3]=_=>n.value.bio=_),color:"teal"},{label:l(()=>[ll]),_:1},8,["modelValue"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(Q,{modelValue:n.value.favoriteAnimal,"onUpdate:modelValue":f[4]||(f[4]=_=>n.value.favoriteAnimal=_),items:u.value,rules:m.value.animal,color:"pink",label:"Favorite animal",required:""},null,8,["modelValue","items","rules"])]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(X,{modelValue:n.value.age,"onUpdate:modelValue":f[5]||(f[5]=_=>n.value.age=_),rules:m.value.age,color:"orange",label:"Age",hint:"Be honest",min:"1",max:"100","thumb-label":""},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(z,{modelValue:n.value.terms,"onUpdate:modelValue":f[9]||(f[9]=_=>n.value.terms=_),color:"green"},{label:l(()=>[a("div",{onClick:f[8]||(f[8]=P(()=>{},["stop"]))},[o(" Do you accept the "),a("a",{href:"javascript:;",onClick:f[6]||(f[6]=P(_=>V.value=!0,["stop"]))},"terms"),o(" and "),a("a",{href:"javascript:;",onClick:f[7]||(f[7]=P(_=>r.value=!0,["stop"]))},"conditions?")])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(M,null,{default:l(()=>[e(S,{text:"",onClick:F},{default:l(()=>[o("Cancel")]),_:1}),e(N),e(S,{disabled:!D(T),text:"",color:"primary",type:"submit"},{default:l(()=>[o("Register")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["onSubmit"]),e(J,{modelValue:V.value,"onUpdate:modelValue":f[11]||(f[11]=_=>V.value=_),width:"70%"},{default:l(()=>[e(q,null,{default:l(()=>[e(Y,{class:"title"},{default:l(()=>[o("Terms")]),_:1}),(p(),v(I,null,H(5,_=>e(O,{key:_},{default:l(()=>[o(L(c.value),1)]),_:2},1024)),64)),e(M,null,{default:l(()=>[e(N),e(S,{text:"",color:"purple",onClick:f[10]||(f[10]=_=>V.value=!1)},{default:l(()=>[o("Ok")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(J,{modelValue:r.value,"onUpdate:modelValue":f[13]||(f[13]=_=>r.value=_),width:"70%"},{default:l(()=>[e(q,null,{default:l(()=>[e(Y,{class:"title"},{default:l(()=>[o("Conditions")]),_:1}),(p(),v(I,null,H(5,_=>e(O,{key:_},{default:l(()=>[o(L(c.value),1)]),_:2},1024)),64)),e(M,null,{default:l(()=>[e(N),e(S,{text:"",color:"purple",onClick:f[12]||(f[12]=_=>r.value=!1)},{default:l(()=>[o("Ok")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}}),al={},sl=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" The "),a("code",null,"hint"),o(" property on text fields adds the provided string beneath the text field. Using "),a("code",null,"persistent-hint"),o(" keeps the hint visible when the text field is not focused. Hint prop is not supported in solo mode. ")],-1),nl={class:"mt-4"};function ol(h,d){return p(),v("div",null,[sl,a("div",nl,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Your product or service",value:"Grocery delivery",hint:"For example, flowers or used cars"})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Your product or service",value:"Grocery delivery",hint:"For example, flowers or used cars",filled:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":"",filled:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Your product or service",value:"Grocery delivery",hint:"For example, flowers or used cars",outlined:""})]),_:1}),e(t,{cols:"12",sm:"6"},{default:l(()=>[e(s,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":"",outlined:""})]),_:1})]),_:1})]),_:1})]),_:1})])])}var dl=C(al,[["render",ol]]);const ul={},il=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" The "),a("code",null,"prefix"),o(" and "),a("code",null,"suffix"),o(" properties allows you to prepend and append inline non-modifiable text next to the text field. ")],-1),rl={class:"mt-4"};function cl(h,d){const n=ee("v-subheader");return p(),v("div",null,[il,a("div",rl,[e(g,null,{default:l(()=>[e(t,{cols:"4"},{default:l(()=>[e(n,null,{default:l(()=>[o("Prefix for dollar currency")]),_:1})]),_:1}),e(t,{cols:"8"},{default:l(()=>[e(s,{label:"Amount",value:"10.00",prefix:"$"})]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(t,{cols:"4"},{default:l(()=>[e(n,null,{default:l(()=>[o("Suffix for weight")]),_:1})]),_:1}),e(t,{cols:"8"},{default:l(()=>[e(s,{label:"Weight",value:"28.00",suffix:"lbs"})]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(t,{cols:"4"},{default:l(()=>[e(n,null,{default:l(()=>[o("Suffix for email domain")]),_:1})]),_:1}),e(t,{cols:"8"},{default:l(()=>[e(s,{label:"Email address",value:"example",suffix:"@gmail.com"})]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(t,{cols:"4"},{default:l(()=>[e(n,null,{default:l(()=>[o("Suffix for time zone")]),_:1})]),_:1}),e(t,{cols:"8"},{default:l(()=>[e(s,{label:"Label Text",value:"12:30:00",type:"time",suffix:"PST"})]),_:1})]),_:1})])])}var ml=C(ul,[["render",cl]]);const fl=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[a("code",null,"click:prepend"),o(", "),a("code",null,"click:append"),o(", "),a("code",null,"click:append-outer"),o(", and "),a("code",null,"click:clear"),o(" will be emitted when you click on the respective icon. Note that these events will not be fired if the slot is used instead. ")],-1),pl={class:"mt-4"},_l=$({__name:"TextfieldIconEvents",setup(h){i("Password"),i(!1);const d=i("Hey!"),n=i(!0),m=i(0),u=i(["mdi-emoticon","mdi-emoticon-cool","mdi-emoticon-dead","mdi-emoticon-excited","mdi-emoticon-happy","mdi-emoticon-neutral","mdi-emoticon-sad","mdi-emoticon-tongue"]);function r(){n.value=!n.value}function c(){V(),b()}function b(){d.value=""}function V(){m.value=0}function T(){m.value===u.value.length-1?m.value=0:m.value++}const F=A(()=>u.value[m.value]);return(R,w)=>(p(),v("div",null,[fl,a("div",pl,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12"},{default:l(()=>[e(s,{modelValue:d.value,"onUpdate:modelValue":w[0]||(w[0]=f=>d.value=f),"append-icon":n.value?"mdi-map-marker":"mdi-map-marker-off","append-outer-icon":d.value?"mdi-send":"mdi-microphone","prepend-icon":D(F),filled:"","clear-icon":"mdi-close-circle",clearable:"",label:"Message",type:"text","onClick:append":r,"onClick:appendOuter":c,"onClick:prepend":T,"onClick:clear":b},null,8,["modelValue","append-icon","append-outer-icon","prepend-icon"])]),_:1})]),_:1})]),_:1})]),_:1})])]))}}),vl=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Instead of using prepend / append / append-outer icons you can use slots to extend input's functionality. ",-1),bl={class:"mt-4"},hl={key:1,width:"24",height:"24",src:"https://cdn.vuetifyjs.com/images/logos/v-alt.svg",alt:""},xl=$({__name:"TextfieldIconSlots",setup(h){const d=i("Hey!"),n=i(!1);function m(){n.value=!0,d.value="Wait for it...",setTimeout(()=>{n.value=!1,d.value="You've clicked me!"},2e3)}return(u,r)=>(p(),v("div",null,[vl,a("div",bl,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12"},{default:l(()=>[e(s,{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=c=>d.value=c),outlined:"",clearable:"",label:"Message",type:"text"},{prepend:l(()=>[e(le,{bottom:""},{activator:l(({props:c})=>[e(U,j(B(c)),{default:l(()=>[o("mdi-help-circle-outline")]),_:2},1040)]),default:l(()=>[o(" I'm a tooltip ")]),_:1})]),append:l(()=>[e(te,{"leave-absolute":""},{default:l(()=>[n.value?(p(),G(ae,{key:0,size:"24",color:"info",indeterminate:""})):(p(),v("img",hl))]),_:1})]),"append-outer":l(()=>[e(se,{style:{top:"-12px"},"offset-y":""},{activator:l(({props:c})=>[e(S,j(B(c)),{default:l(()=>[e(U,{left:""},{default:l(()=>[o("mdi-menu")]),_:1}),o(" Menu ")]),_:2},1040)]),default:l(()=>[e(q,null,{default:l(()=>[e(O,{class:"pa-6"},{default:l(()=>[e(S,{large:"",flat:"",color:"primary",onClick:m},{default:l(()=>[e(U,{left:""},{default:l(()=>[o("mdi-target")]),_:1}),o("Click me")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])]))}}),gl={},Vl=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" Text field label can be defined in "),a("code",null,"label"),o(" slot - that will allow to use HTML content ")],-1),yl={class:"mt-4"},kl=a("strong",null,"icon",-1);function $l(h,d){return p(),v("div",null,[Vl,a("div",yl,[e(y,null,{default:l(()=>[e(k,null,{default:l(()=>[e(s,null,{label:l(()=>[o(" What about "),kl,o(" here? "),e(U,{style:{"vertical-align":"middle"}},{default:l(()=>[o("mdi-file-find")]),_:1})]),_:1})]),_:1})]),_:1})])])}var Tl=C(gl,[["render",$l]]);const wl={},Cl=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" Vuetify includes simple validation through the "),a("code",null,"rules"),o(" prop. The prop accepts an array of callbacks. While validating rules, the current v-model value will be passed to the callback. This callback should return either true or a String, the error message. ")],-1),Sl=a("div",{class:"mt-4"},null,-1),Ul=[Cl,Sl];function Fl(h,d){return p(),v("div",null,Ul)}var Pl=C(wl,[["render",Fl]]);const Al=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" Full width text fields allow you to create boundless inputs. In this example, we use a "),a("code",null,"v-divider"),o(" to separate the fields. ")],-1),Dl={class:"mt-4"},Ml=$({__name:"TextfieldFullwidthCharahterCounter",setup(h){const d=i(["Trevor Handsen"]);i(["Trevor Handsen","Alex Nelson"]);const n=i(`Hi,
I just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa`);return(m,u)=>(p(),v("div",null,[Al,a("div",Dl,[e(y,null,{default:l(()=>[e(ne,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=r=>d.value=r),items:["Trevor Handsen","Alex Nelson"],chips:"",label:"To","full-width":"","hide-details":"","hide-no-data":"","hide-selected":"",multiple:"","single-line":""},null,8,["modelValue"]),e(E),e(s,{label:"Subject",value:"Plans for the weekend","single-line":"","full-width":"","hide-details":""}),e(E),e(W,{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=r=>n.value=r),label:"Message",counter:"",maxlength:"120","full-width":"","single-line":""},null,8,["modelValue"])]),_:1})])]))}}),Nl=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" You can display a progress bar instead of the bottom line. You can use the default indeterminate progress having same color as the text field or designate a custom one using the "),a("code",null,"progress"),o(" slot ")],-1),ql={class:"mt-4"},Il=$({__name:"TextfieldProgressbar",setup(h){const d=i(1),n=i(!0),m=A(()=>Math.min(100,d.value*10)),u=A(()=>["error","warning","success"][Math.floor(m.value/40)]);return(r,c)=>(p(),v("div",null,[Nl,a("div",ql,[e(z,{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=b=>n.value=b),label:"Custom progress bar"},null,8,["modelValue"]),e(s,{modelValue:d.value,"onUpdate:modelValue":c[1]||(c[1]=b=>d.value=b),color:"cyan darken",label:"Text field",placeholder:"Start typing...",loading:""},{progress:l(()=>[n.value?(p(),G(oe,{key:0,value:D(m),color:D(u),absolute:"",height:"7"},null,8,["value","color"])):de("",!0)]),_:1},8,["modelValue"])])]))}}),Ll=$({__name:"FETextfields",setup(h){const d=i({title:"TextFields"}),n=i([{text:"Form Elements",disabled:!1,to:"#"},{text:"TextFields",disabled:!0}]);return(m,u)=>(p(),v(I,null,[e(Z,{title:d.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),e(g,null,{default:l(()=>[e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Single line"},{default:l(()=>[e(me)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Shaped"},{default:l(()=>[e(_e)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Disabled and readonly"},{default:l(()=>[e(ge)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Dense"},{default:l(()=>[e(Te)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Icons"},{default:l(()=>[e(Fe)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Clearable"},{default:l(()=>[e(qe)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Character counter"},{default:l(()=>[e(Re)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Auto hiding details"},{default:l(()=>[e(Le)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Password input"},{default:l(()=>[e(De)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Box style"},{default:l(()=>[e(Be)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Solo style"},{default:l(()=>[e(ze)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Outlined style"},{default:l(()=>[e(Ke)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Custom colors"},{default:l(()=>[e(tl)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Hint text"},{default:l(()=>[e(dl)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Prefixes & suffixes"},{default:l(()=>[e(ml)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Icon events"},{default:l(()=>[e(_l)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Icon slots"},{default:l(()=>[e(xl)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Label slot"},{default:l(()=>[e(Tl)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Validation"},{default:l(()=>[e(Pl)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Full-width text field with character counter"},{default:l(()=>[e(Ml)]),_:1})]),_:1}),e(t,{cols:"12",sm:"12"},{default:l(()=>[e(x,{heading:"Textfields - Progress bar"},{default:l(()=>[e(Il)]),_:1})]),_:1})]),_:1})],64))}});export{Ll as default};
