import{_ as M}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-3d24ff15.js";import{_ as x}from"./BaseCard.vue_vue_type_script_setup_true_lang-080bb4ed.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{r as l,o as m,f as p,b as a,a as e,w as t,d as o,e as $,g as u,l as F,F as R}from"./index-43f158f4.js";const W={},Y=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" The "),a("code",null,"append-icon"),o(" and "),a("code",null,"prepend-icon"),o(" props help add context to "),a("code",null,"v-textarea"),o(". ")],-1),D={class:"mt-4"};function G(v,i){const n=l("v-textarea"),r=l("v-col"),_=l("v-row");return m(),p("div",null,[Y,a("div",D,[e(_,null,{default:t(()=>[e(r,{cols:"12",sm:"6"},{default:t(()=>[e(n,{class:"mx-2",label:"prepend-icon",rows:"1","prepend-icon":"mdi-comment-text-outline"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(n,{"append-icon":"mdi-comment-text-outline",class:"mx-2",label:"append-icon",rows:"1"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(n,{"prepend-inner-icon":"mdi-comment-text-outline",class:"mx-2",label:"prepend-inner-icon",rows:"1"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(n,{"append-outer-icon":"mdi-comment-text-outline",class:"mx-2",label:"append-outer-icon",rows:"1"})]),_:1})]),_:1})])])}const H=b(W,[["render",G]]),O={},Z=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" When using the "),a("code",null,"auto-grow"),o(" prop, textarea's will automatically increase in size when the contained text exceeds its size. ")],-1),j={class:"mt-4"};function J(v,i){const n=l("v-textarea");return m(),p("div",null,[Z,a("div",j,[e(n,{name:"input-7-1",filled:"",label:"Label","auto-grow":"",value:"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."})])])}const K=b(O,[["render",J]]),Q={},X=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" The "),a("code",null,"background-color"),o(" and "),a("code",null,"color"),o(" props give you more control over styling "),a("code",null,"v-textarea"),o("'s. ")],-1),ee={class:"mt-4"};function te(v,i){const n=l("v-textarea");return m(),p("div",null,[X,a("div",ee,[e(n,{"background-color":"info",color:"black",label:"Label"}),e(n,{"background-color":"grey lighten-2",color:"info",label:"Label"}),e(n,{"background-color":"warning lighten-2",color:"orange orange-darken-4",label:"Label"})])])}const oe=b(Q,[["render",te]]),ae={},le=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" The "),a("code",null,"autocomplete"),o(" prop gives you the option to enable the browser to predict user inpu ")],-1),ne={class:"mt-4"};function se(v,i){const n=l("v-textarea");return m(),p("div",null,[le,a("div",ne,[e(n,{autocomplete:"email",label:"Email"})])])}const re=b(ae,[["render",se]]),ce={},ie=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" You can clear the text from a "),a("code",null,"v-textarea"),o(" by using the "),a("code",null,"clearable"),o(" prop, and customize the icon used with the "),a("code",null,"clearable-icon"),o(" prop. ")],-1),de={class:"mt-4"};function ue(v,i){const n=l("v-textarea");return m(),p("div",null,[ie,a("div",de,[e(n,{clearable:"","clear-icon":"mdi-close-circle",label:"Text",value:"This is clearable text."})])])}const _e=b(ce,[["render",ue]]),me=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" The "),a("code",null,"counter"),o(" prop informs the user of a character limit for the "),a("code",null,"v-textarea"),o(". ")],-1),pe={class:"mt-4"},ve=$({__name:"TextareasCounter",setup(v){const i=u("Hello!"),n=u([r=>r.length<=25||"Max 25 characters"]);return(r,_)=>{const d=l("v-textarea");return m(),p("div",null,[me,a("div",pe,[e(d,{counter:"",label:"Text",rules:n.value,value:i.value},null,8,["rules","value"])])])}}}),fe=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[a("code",null,"v-textarea"),o("'s have the option to remain the same size regardless of their content's size, using the "),a("code",null,"no-resize"),o(" prop. ")],-1),xe={class:"mt-4"},he=$({__name:"TextareasNoresize",setup(v){const i=u("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, !");return(n,r)=>{const _=l("v-textarea");return m(),p("div",null,[fe,a("div",xe,[e(_,{label:"Text","no-resize":"",rows:"1",value:i.value},null,8,["value"])])])}}}),ge={},be=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" The "),a("code",null,"rows"),o(" prop allows you to define how many rows the textarea has, when combined with the "),a("code",null,"row-height"),o(" prop you can further customize your rows by defining their height. ")],-1),we={class:"mt-4"};function ye(v,i){const n=l("v-textarea"),r=l("v-col"),_=l("v-row");return m(),p("div",null,[be,a("div",we,[e(_,null,{default:t(()=>[e(r,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"One row","auto-grow":"",outlined:"",rows:"1","row-height":"15"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(n,{filled:"","auto-grow":"",label:"Two rows",rows:"2","row-height":"20"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(n,{label:"Three rows","auto-grow":"",outlined:"",rows:"3","row-height":"25",shaped:""})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(n,{filled:"","auto-grow":"",label:"Four rows",rows:"4","row-height":"30",shaped:""})]),_:1})]),_:1})])])}const $e=b(ge,[["render",ye]]),Te=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Utilizing alternative input styles, you can create amazing interfaces that are easy to build and easy to use. ",-1),ke={class:"mt-4"},Ve=$({__name:"TextareasBeautifulForms",setup(v){const i=u(!1),n=u("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"),r=u(!1),_=u(void 0),d=u(!1),T=u(!1),V=u(void 0),z=u(void 0),w=u({email:f=>(f||"").match(/@/)||"Please enter a valid email",length:f=>s=>(s||"").length>=f||`Invalid character length, required ${f}`,password:f=>(f||"").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)||"Password must contain an upper case letter, a numeric character, and a special character",required:f=>!!f||"This field is required"});return(f,s)=>{const y=l("v-spacer"),h=l("v-icon"),L=l("v-system-bar"),g=l("v-btn"),C=l("v-card-title"),E=l("v-toolbar"),k=l("v-text-field"),N=l("v-textarea"),P=l("v-checkbox"),A=l("v-form"),q=l("v-divider"),B=l("v-card-actions"),I=l("v-card-text"),U=l("v-card"),S=l("v-dialog");return m(),p("div",null,[Te,a("div",ke,[e(U,{class:"mx-auto",style:{"max-width":"500px"}},{default:t(()=>[e(L,{color:"primary",dark:""},{default:t(()=>[e(y),e(h,{small:""},{default:t(()=>[o("mdi-square")]),_:1}),e(h,{class:"ml-1",small:""},{default:t(()=>[o("mdi-circle")]),_:1}),e(h,{class:"ml-1",small:""},{default:t(()=>[o("mdi-triangle")]),_:1})]),_:1}),e(E,{color:"primary",cards:"",dark:"",flat:""},{default:t(()=>[e(g,{icon:""},{default:t(()=>[e(h,null,{default:t(()=>[o("mdi-arrow-left")]),_:1})]),_:1}),e(C,{class:"font-weight-regular"},{default:t(()=>[o("Sign up")]),_:1}),e(y),e(g,{icon:""},{default:t(()=>[e(h,null,{default:t(()=>[o("mdi-magnify")]),_:1})]),_:1}),e(g,{icon:""},{default:t(()=>[e(h,null,{default:t(()=>[o("mdi-dots-vertical")]),_:1})]),_:1})]),_:1}),e(A,{ref_key:"form",ref:d,modelValue:d.value,"onUpdate:modelValue":s[7]||(s[7]=c=>d.value=c),class:"pa-4 pt-6"},{default:t(()=>[e(k,{modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=c=>V.value=c),rules:[w.value.password,w.value.length(6)],filled:"",color:"deep-purple",counter:"6",label:"Password",style:{"min-height":"96px"},type:"password"},null,8,["modelValue","rules"]),e(k,{modelValue:z.value,"onUpdate:modelValue":s[1]||(s[1]=c=>z.value=c),filled:"",color:"deep-purple",label:"Phone number"},null,8,["modelValue"]),e(k,{modelValue:_.value,"onUpdate:modelValue":s[2]||(s[2]=c=>_.value=c),rules:[w.value.email],filled:"",color:"deep-purple",label:"Email address",type:"email"},null,8,["modelValue","rules"]),e(N,{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=c=>n.value=c),"auto-grow":"",filled:"",color:"deep-purple",label:"Bio",rows:"1"},null,8,["modelValue"]),e(P,{modelValue:i.value,"onUpdate:modelValue":s[6]||(s[6]=c=>i.value=c),"hide-details":"",rules:[w.value.required],color:"deep-purple"},{label:t(()=>[o(" I agree to the  "),a("a",{href:"#",onClick:s[4]||(s[4]=F(c=>r.value=!0,["stop","prevent"]))},"Terms of Service"),o("  and  "),a("a",{href:"#",onClick:s[5]||(s[5]=F(c=>r.value=!0,["stop","prevent"]))},"Privacy Policy"),o("* ")]),_:1},8,["modelValue","rules"])]),_:1},8,["modelValue"]),e(q),e(B,null,{default:t(()=>[e(y),e(g,{disabled:!d.value,loading:T.value,class:"white--text",color:"deep-purple accent-4",depressed:""},{default:t(()=>[o("Submit")]),_:1},8,["disabled","loading"])]),_:1}),e(S,{modelValue:r.value,"onUpdate:modelValue":s[10]||(s[10]=c=>r.value=c),absolute:"","max-width":"400",persistent:""},{default:t(()=>[e(U,null,{default:t(()=>[e(C,{class:"headline grey lighten-3"},{default:t(()=>[o("Legal")]),_:1}),e(I,null,{default:t(()=>[o(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),_:1}),e(q),e(B,null,{default:t(()=>[e(g,{text:"",onClick:s[8]||(s[8]=c=>(i.value=!1,r.value=!1))},{default:t(()=>[o(" No ")]),_:1}),e(y),e(g,{class:"white--text",color:"deep-purple accent-4",onClick:s[9]||(s[9]=c=>(i.value=!0,r.value=!1))},{default:t(()=>[o(" Yes ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])])}}}),Ue=$({__name:"FETextareas",setup(v){const i=u({title:"Textareas"}),n=u([{text:"Form Elements",disabled:!1,to:"#"},{text:"Textareas",disabled:!0}]);return(r,_)=>{const d=l("v-col"),T=l("v-row");return m(),p(R,null,[e(M,{title:i.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),e(T,null,{default:t(()=>[e(d,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Textareas - Icons"},{default:t(()=>[e(H)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Textareas - Auto grow"},{default:t(()=>[e(K)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Textareas - Background color"},{default:t(()=>[e(oe)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Textareas - Browser autocomplete"},{default:t(()=>[e(re)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Textareas - Clearable"},{default:t(()=>[e(_e)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Textareas - Counter"},{default:t(()=>[e(ve)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Textareas - No resize"},{default:t(()=>[e(he)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Textareas - Rows"},{default:t(()=>[e($e)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Textareas - Beautiful Forms"},{default:t(()=>[e(Ve)]),_:1})]),_:1})]),_:1})],64)}}});export{Ue as default};
