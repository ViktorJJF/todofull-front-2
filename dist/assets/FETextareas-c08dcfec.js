import{_ as p,r as l,o as f,f as v,j as s,b as o,a as e,w as t,F as x,d as a,e as k,g as _,p as D}from"./index-f8c4d1fe.js";import{B as G}from"./BaseBreadcrumb-9fd99ced.js";import{B as g}from"./BaseCard-07e99508.js";const S={},M=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" The "),o("code",null,"append-icon"),a(" and "),o("code",null,"prepend-icon"),a(" props help add context to "),o("code",null,"v-textarea"),a(". ")],-1),W={class:"mt-4"};function Y(h,d){const n=l("v-textarea"),u=l("v-col"),m=l("v-row");return f(),v(x,null,[s(" ----------------------------------------------------------------------------- "),s(" TextareasIcon "),s(" ----------------------------------------------------------------------------- "),o("div",null,[M,o("div",W,[e(m,null,{default:t(()=>[e(u,{cols:"12",sm:"6"},{default:t(()=>[e(n,{class:"mx-2",label:"prepend-icon",rows:"1","prepend-icon":"mdi-comment-text-outline"})]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(n,{"append-icon":"mdi-comment-text-outline",class:"mx-2",label:"append-icon",rows:"1"})]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(n,{"prepend-inner-icon":"mdi-comment-text-outline",class:"mx-2",label:"prepend-inner-icon",rows:"1"})]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(n,{"append-outer-icon":"mdi-comment-text-outline",class:"mx-2",label:"append-outer-icon",rows:"1"})]),_:1})]),_:1})])])],2112)}const H=p(S,[["render",Y],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textareas/TextareasIcon.vue"]]),O={},Z=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" When using the "),o("code",null,"auto-grow"),a(" prop, textarea's will automatically increase in size when the contained text exceeds its size. ")],-1),J={class:"mt-4"};function K(h,d){const n=l("v-textarea");return f(),v(x,null,[s(" ----------------------------------------------------------------------------- "),s(" TextareasAutoGrow "),s(" ----------------------------------------------------------------------------- "),o("div",null,[Z,o("div",J,[e(n,{name:"input-7-1",filled:"",label:"Label","auto-grow":"",value:"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."})])])],2112)}const Q=p(O,[["render",K],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textareas/TextareasAutoGrow.vue"]]),X={},ee=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" The "),o("code",null,"background-color"),a(" and "),o("code",null,"color"),a(" props give you more control over styling "),o("code",null,"v-textarea"),a("'s. ")],-1),te={class:"mt-4"};function oe(h,d){const n=l("v-textarea");return f(),v(x,null,[s(" ----------------------------------------------------------------------------- "),s(" TextareasBackgroundColor "),s(" ----------------------------------------------------------------------------- "),o("div",null,[ee,o("div",te,[e(n,{"background-color":"info",color:"black",label:"Label"}),e(n,{"background-color":"grey lighten-2",color:"info",label:"Label"}),e(n,{"background-color":"warning lighten-2",color:"orange orange-darken-4",label:"Label"})])])],2112)}const ae=p(X,[["render",oe],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textareas/TextareasBackgroundColor.vue"]]),le={},ne=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" The "),o("code",null,"autocomplete"),a(" prop gives you the option to enable the browser to predict user inpu ")],-1),se={class:"mt-4"};function re(h,d){const n=l("v-textarea");return f(),v(x,null,[s(" ----------------------------------------------------------------------------- "),s(" TextareasBrowserAutocomplete "),s(" ----------------------------------------------------------------------------- "),o("div",null,[ne,o("div",se,[e(n,{autocomplete:"email",label:"Email"})])])],2112)}const ue=p(le,[["render",re],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textareas/TextareasBrowserAutocomplete.vue"]]),ce={},de=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" You can clear the text from a "),o("code",null,"v-textarea"),a(" by using the "),o("code",null,"clearable"),a(" prop, and customize the icon used with the "),o("code",null,"clearable-icon"),a(" prop. ")],-1),ie={class:"mt-4"};function _e(h,d){const n=l("v-textarea");return f(),v(x,null,[s(" ----------------------------------------------------------------------------- "),s(" TextareasClearable "),s(" ----------------------------------------------------------------------------- "),o("div",null,[de,o("div",ie,[e(n,{clearable:"","clear-icon":"mdi-close-circle",label:"Text",value:"This is clearable text."})])])],2112)}const me=p(ce,[["render",_e],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textareas/TextareasClearable.vue"]]),pe=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" The "),o("code",null,"counter"),a(" prop informs the user of a character limit for the "),o("code",null,"v-textarea"),a(". ")],-1),fe={class:"mt-4"},ve=k({__name:"TextareasCounter",setup(h){const d=_("Hello!"),n=_([u=>u.length<=25||"Max 25 characters"]);return(u,m)=>{const i=l("v-textarea");return f(),v(x,null,[s(" ----------------------------------------------------------------------------- "),s(" TextareasCounter "),s(" ----------------------------------------------------------------------------- "),o("div",null,[pe,o("div",fe,[e(i,{counter:"",label:"Text",rules:n.value,value:d.value},null,8,["rules","value"])])])],2112)}}}),xe=p(ve,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textareas/TextareasCounter.vue"]]),he=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[o("code",null,"v-textarea"),a("'s have the option to remain the same size regardless of their content's size, using the "),o("code",null,"no-resize"),a(" prop. ")],-1),be={class:"mt-4"},ge=k({__name:"TextareasNoresize",setup(h){const d=_("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, !");return(n,u)=>{const m=l("v-textarea");return f(),v(x,null,[s(" ----------------------------------------------------------------------------- "),s(" TextareasNoresize "),s(" ----------------------------------------------------------------------------- "),o("div",null,[he,o("div",be,[e(m,{label:"Text","no-resize":"",rows:"1",value:d.value},null,8,["value"])])])],2112)}}}),we=p(ge,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textareas/TextareasNoresize.vue"]]),Te={},ye=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" The "),o("code",null,"rows"),a(" prop allows you to define how many rows the textarea has, when combined with the "),o("code",null,"row-height"),a(" prop you can further customize your rows by defining their height. ")],-1),$e={class:"mt-4"};function ke(h,d){const n=l("v-textarea"),u=l("v-col"),m=l("v-row");return f(),v(x,null,[s(" ----------------------------------------------------------------------------- "),s(" TextareasRows "),s(" ----------------------------------------------------------------------------- "),o("div",null,[ye,o("div",$e,[e(m,null,{default:t(()=>[e(u,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"One row","auto-grow":"",outlined:"",rows:"1","row-height":"15"})]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(n,{filled:"","auto-grow":"",label:"Two rows",rows:"2","row-height":"20"})]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"Three rows","auto-grow":"",outlined:"",rows:"3","row-height":"25",shaped:""})]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(n,{filled:"","auto-grow":"",label:"Four rows",rows:"4","row-height":"30",shaped:""})]),_:1})]),_:1})])])],2112)}const Ce=p(Te,[["render",ke],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textareas/TextareasRows.vue"]]),Ve=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," Utilizing alternative input styles, you can create amazing interfaces that are easy to build and easy to use. ",-1),Be={class:"mt-4"},ze=k({__name:"TextareasBeautifulForms",setup(h){const d=_(!1),n=_("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"),u=_(!1),m=_(void 0),i=_(!1),C=_(!1),B=_(void 0),z=_(void 0),y=_({email:b=>(b||"").match(/@/)||"Please enter a valid email",length:b=>r=>(r||"").length>=b||`Invalid character length, required ${b}`,password:b=>(b||"").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)||"Password must contain an upper case letter, a numeric character, and a special character",required:b=>!!b||"This field is required"});return(b,r)=>{const $=l("v-spacer"),w=l("v-icon"),N=l("v-system-bar"),T=l("v-btn"),F=l("v-card-title"),U=l("v-toolbar"),V=l("v-text-field"),E=l("v-textarea"),L=l("v-checkbox"),I=l("v-form"),j=l("v-divider"),q=l("v-card-actions"),P=l("v-card-text"),A=l("v-card"),R=l("v-dialog");return f(),v(x,null,[s(" ----------------------------------------------------------------------------- "),s(" TextareasBeautifulForms "),s(" ----------------------------------------------------------------------------- "),o("div",null,[Ve,o("div",Be,[e(A,{class:"mx-auto",style:{"max-width":"500px"}},{default:t(()=>[e(N,{color:"primary",dark:""},{default:t(()=>[e($),e(w,{small:""},{default:t(()=>[a("mdi-square")]),_:1}),e(w,{class:"ml-1",small:""},{default:t(()=>[a("mdi-circle")]),_:1}),e(w,{class:"ml-1",small:""},{default:t(()=>[a("mdi-triangle")]),_:1})]),_:1}),e(U,{color:"primary",cards:"",dark:"",flat:""},{default:t(()=>[e(T,{icon:""},{default:t(()=>[e(w,null,{default:t(()=>[a("mdi-arrow-left")]),_:1})]),_:1}),e(F,{class:"font-weight-regular"},{default:t(()=>[a("Sign up")]),_:1}),e($),e(T,{icon:""},{default:t(()=>[e(w,null,{default:t(()=>[a("mdi-magnify")]),_:1})]),_:1}),e(T,{icon:""},{default:t(()=>[e(w,null,{default:t(()=>[a("mdi-dots-vertical")]),_:1})]),_:1})]),_:1}),e(I,{ref_key:"form",ref:i,modelValue:i.value,"onUpdate:modelValue":r[7]||(r[7]=c=>i.value=c),class:"pa-4 pt-6"},{default:t(()=>[e(V,{modelValue:B.value,"onUpdate:modelValue":r[0]||(r[0]=c=>B.value=c),rules:[y.value.password,y.value.length(6)],filled:"",color:"deep-purple",counter:"6",label:"Password",style:{"min-height":"96px"},type:"password"},null,8,["modelValue","rules"]),e(V,{modelValue:z.value,"onUpdate:modelValue":r[1]||(r[1]=c=>z.value=c),filled:"",color:"deep-purple",label:"Phone number"},null,8,["modelValue"]),e(V,{modelValue:m.value,"onUpdate:modelValue":r[2]||(r[2]=c=>m.value=c),rules:[y.value.email],filled:"",color:"deep-purple",label:"Email address",type:"email"},null,8,["modelValue","rules"]),e(E,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=c=>n.value=c),"auto-grow":"",filled:"",color:"deep-purple",label:"Bio",rows:"1"},null,8,["modelValue"]),e(L,{modelValue:d.value,"onUpdate:modelValue":r[6]||(r[6]=c=>d.value=c),"hide-details":"",rules:[y.value.required],color:"deep-purple"},{label:t(()=>[a(" I agree to the  "),o("a",{href:"#",onClick:r[4]||(r[4]=D(c=>u.value=!0,["stop","prevent"]))},"Terms of Service"),a("  and  "),o("a",{href:"#",onClick:r[5]||(r[5]=D(c=>u.value=!0,["stop","prevent"]))},"Privacy Policy"),a("* ")]),_:1},8,["modelValue","rules"])]),_:1},8,["modelValue"]),e(j),e(q,null,{default:t(()=>[e($),e(T,{disabled:!i.value,loading:C.value,class:"white--text",color:"deep-purple accent-4",depressed:""},{default:t(()=>[a("Submit")]),_:1},8,["disabled","loading"])]),_:1}),e(R,{modelValue:u.value,"onUpdate:modelValue":r[10]||(r[10]=c=>u.value=c),absolute:"","max-width":"400",persistent:""},{default:t(()=>[e(A,null,{default:t(()=>[e(F,{class:"headline grey lighten-3"},{default:t(()=>[a("Legal")]),_:1}),e(P,null,{default:t(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),_:1}),e(j),e(q,null,{default:t(()=>[e(T,{text:"",onClick:r[8]||(r[8]=c=>(d.value=!1,u.value=!1))},{default:t(()=>[a(" No ")]),_:1}),e($),e(T,{class:"white--text",color:"deep-purple accent-4",onClick:r[9]||(r[9]=c=>(d.value=!0,u.value=!1))},{default:t(()=>[a(" Yes ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])])],2112)}}}),Fe=p(ze,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/textareas/TextareasBeautifulForms.vue"]]),je=k({__name:"FETextareas",setup(h){const d=_({title:"Textareas"}),n=_([{text:"Form Elements",disabled:!1,to:"#"},{text:"Textareas",disabled:!0}]);return(u,m)=>{const i=l("v-col"),C=l("v-row");return f(),v(x,null,[e(G,{title:d.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),e(C,null,{default:t(()=>[e(i,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Textareas - Icons"},{default:t(()=>[e(H)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Textareas - Auto grow"},{default:t(()=>[e(Q)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Textareas - Background color"},{default:t(()=>[e(ae)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Textareas - Browser autocomplete"},{default:t(()=>[e(ue)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Textareas - Clearable"},{default:t(()=>[e(me)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Textareas - Counter"},{default:t(()=>[e(xe)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Textareas - No resize"},{default:t(()=>[e(we)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Textareas - Rows"},{default:t(()=>[e(Ce)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Textareas - Beautiful Forms"},{default:t(()=>[e(Fe)]),_:1})]),_:1})]),_:1})],64)}}}),Ne=p(je,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-elements/FETextareas.vue"]]);export{Ne as default};
