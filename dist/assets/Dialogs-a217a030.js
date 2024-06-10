import{_ as F}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-a2c56a64.js";import{_ as w}from"./BaseCard.vue_vue_type_script_setup_true_lang-5bbdf108.js";import{f as k,h as _,r as l,o as y,g as $,b as v,a as e,w as t,d as s,F as V,m as B}from"./index-14e84a03.js";const A=v("p",{class:"text-subtitle-1 text-grey-darken-1"},"In addition using the activator slot, we can instead use the activator prop to activate a dialog. By placing the dialog component inside the button, and setting the activator prop value to “parent” we can designate the parent (button) as the activator.",-1),N={class:"text-center"},P=k({__name:"DialogsActivator",setup(C){const d=_(!1);return(m,a)=>{const r=l("v-card-text"),o=l("v-btn"),n=l("v-card-actions"),u=l("v-card"),i=l("v-dialog");return y(),$(V,null,[A,v("div",N,[e(o,{color:"primary"},{default:t(()=>[s(" Open Dialog "),e(i,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=c=>d.value=c),activator:"parent"},{default:t(()=>[e(u,null,{default:t(()=>[e(r,null,{default:t(()=>[s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),e(n,null,{default:t(()=>[e(o,{color:"primary",block:"",onClick:a[0]||(a[0]=c=>d.value=!1)},{default:t(()=>[s("Close Dialog")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])],64)}}}),L=v("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can also trigger a dialog by simply updating the v-model, without using either activator slot or prop. In this case, the dialog will not appear to be activated by any specific element, and will simply appear in the middle of the screen. ",-1),z={class:"text-center mt-6"},I=k({__name:"DialogsModel",setup(C){const d=_(!1);return(m,a)=>{const r=l("v-btn"),o=l("v-card-text"),n=l("v-card-actions"),u=l("v-card"),i=l("v-dialog");return y(),$(V,null,[L,v("div",z,[e(r,{color:"secondary",onClick:a[0]||(a[0]=c=>d.value=!0)},{default:t(()=>[s(" Open Dialog ")]),_:1}),e(i,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=c=>d.value=c)},{default:t(()=>[e(u,null,{default:t(()=>[e(o,null,{default:t(()=>[s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),e(n,null,{default:t(()=>[e(r,{color:"primary",block:"",onClick:a[1]||(a[1]=c=>d.value=!1)},{default:t(()=>[s("Close Dialog")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),M=v("p",{class:"text-subtitle-1 text-grey-darken-1"}," Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens. ",-1),T={class:"text-center mt-6"},G=k({__name:"DialogsFullscreen",setup(C){const d=_(!1),m=_(!1),a=_(!0),r=_(!1);return(o,n)=>{const u=l("v-btn"),i=l("v-icon"),c=l("v-toolbar-title"),b=l("v-spacer"),f=l("v-toolbar-items"),p=l("v-toolbar"),D=l("v-subheader"),g=l("v-list-item"),S=l("v-list"),U=l("v-divider"),h=l("v-checkbox"),O=l("v-card"),q=l("v-dialog");return y(),$(V,null,[M,v("div",T,[e(q,{modelValue:d.value,"onUpdate:modelValue":n[5]||(n[5]=x=>d.value=x),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:t(({props:x})=>[e(u,B({color:"primary",dark:""},x),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(O,null,{default:t(()=>[e(p,{dark:"",color:"primary"},{default:t(()=>[e(u,{icon:"",dark:"",onClick:n[0]||(n[0]=x=>d.value=!1)},{default:t(()=>[e(i,null,{default:t(()=>[s("mdi-close")]),_:1})]),_:1}),e(c,null,{default:t(()=>[s("Settings")]),_:1}),e(b),e(f,null,{default:t(()=>[e(u,{dark:"",text:"",onClick:n[1]||(n[1]=x=>d.value=!1)},{default:t(()=>[s(" Save ")]),_:1})]),_:1})]),_:1}),e(S,{lines:"two",subheader:""},{default:t(()=>[e(D,null,{default:t(()=>[s("User Controls")]),_:1}),e(g,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(g,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(U),e(S,{lines:"two",subheader:""},{default:t(()=>[e(D,null,{default:t(()=>[s("General")]),_:1}),e(g,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded"},{prepend:t(()=>[e(h,{modelValue:m.value,"onUpdate:modelValue":n[2]||(n[2]=x=>m.value=x)},null,8,["modelValue"])]),_:1}),e(g,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply"},{prepend:t(()=>[e(h,{modelValue:a.value,"onUpdate:modelValue":n[3]||(n[3]=x=>a.value=x)},null,8,["modelValue"])]),_:1}),e(g,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets"},{prepend:t(()=>[e(h,{modelValue:r.value,"onUpdate:modelValue":n[4]||(n[4]=x=>r.value=x)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),H=v("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can make the dialog appear from the top or the bottom. ",-1),j={class:"text-center mt-6"},E=v("div",{class:"text-h2 pa-12"},"Hello world!",-1),R=v("div",{class:"text-h2 pa-12"},"Hello world!",-1),Y=k({__name:"DialogsTransitions",setup(C){return _(!1),(d,m)=>{const a=l("v-btn"),r=l("v-toolbar"),o=l("v-card-text"),n=l("v-card-actions"),u=l("v-card"),i=l("v-dialog");return y(),$(V,null,[H,v("div",j,[e(i,{transition:"dialog-bottom-transition"},{activator:t(({props:c})=>[e(a,B({color:"primary"},c),{default:t(()=>[s("From the bottom")]),_:2},1040)]),default:t(({isActive:c})=>[e(u,null,{default:t(()=>[e(r,{color:"primary"},{default:t(()=>[s("Opening from the bottom")]),_:1}),e(o,null,{default:t(()=>[E]),_:1}),e(n,{class:"justify-end"},{default:t(()=>[e(a,{text:"",onClick:b=>c.value=!1},{default:t(()=>[s("Close")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1}),e(i,{transition:"dialog-top-transition"},{activator:t(({props:c})=>[e(a,B({color:"secondary",class:"ml-2"},c),{default:t(()=>[s("From the top")]),_:2},1040)]),default:t(({isActive:c})=>[e(u,null,{default:t(()=>[e(r,{color:"primary"},{default:t(()=>[s("Opening from the top")]),_:1}),e(o,null,{default:t(()=>[R]),_:1}),e(n,{class:"justify-end"},{default:t(()=>[e(a,{text:"",onClick:b=>c.value=!1},{default:t(()=>[s("Close")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1})])],64)}}}),W=v("p",{class:"text-subtitle-1 text-grey-darken-1"}," Persistent dialogs are not dismissed when touching outside or pressing the esc key. ",-1),J={class:"text-center mt-6"},K=k({__name:"DialogsPersistent",setup(C){const d=_(!1);return(m,a)=>{const r=l("v-btn"),o=l("v-card-title"),n=l("v-card-text"),u=l("v-spacer"),i=l("v-card-actions"),c=l("v-card"),b=l("v-dialog");return y(),$(V,null,[W,v("div",J,[e(b,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=f=>d.value=f),persistent:""},{activator:t(({props:f})=>[e(r,B({color:"primary"},f),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(c,null,{default:t(()=>[e(o,{class:"text-h5"},{default:t(()=>[s(" Use Google's location service? ")]),_:1}),e(n,null,{default:t(()=>[s("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")]),_:1}),e(i,null,{default:t(()=>[e(u),e(r,{color:"green darken-1",text:"",onClick:a[0]||(a[0]=f=>d.value=!1)},{default:t(()=>[s(" Disagree ")]),_:1}),e(r,{color:"green darken-1",text:"",onClick:a[1]||(a[1]=f=>d.value=!1)},{default:t(()=>[s(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),Q=v("p",{class:"text-subtitle-1 text-grey-darken-1"}," Example of a dialog with scrollable content. ",-1),X={class:"text-center mt-6"},Z=k({__name:"DialogsScrollable",setup(C){const d=_(""),m=_(!1);return(a,r)=>{const o=l("v-btn"),n=l("v-card-title"),u=l("v-divider"),i=l("v-radio"),c=l("v-radio-group"),b=l("v-card-text"),f=l("v-card-actions"),p=l("v-card"),D=l("v-dialog");return y(),$(V,null,[Q,v("div",X,[e(D,{modelValue:m.value,"onUpdate:modelValue":r[3]||(r[3]=g=>m.value=g),scrollable:""},{activator:t(({props:g})=>[e(o,B({color:"secondary"},g),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(p,null,{default:t(()=>[e(n,null,{default:t(()=>[s("Select Country")]),_:1}),e(u),e(b,{style:{height:"300px"},class:"overflow-auto"},{default:t(()=>[e(c,{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=g=>d.value=g),column:""},{default:t(()=>[e(i,{label:"Bahamas, The",value:"bahamas"}),e(i,{label:"Bahrain",value:"bahrain"}),e(i,{label:"Bangladesh",value:"bangladesh"}),e(i,{label:"Barbados",value:"barbados"}),e(i,{label:"Belarus",value:"belarus"}),e(i,{label:"Belgium",value:"belgium"}),e(i,{label:"Belize",value:"belize"}),e(i,{label:"Benin",value:"benin"}),e(i,{label:"Bhutan",value:"bhutan"}),e(i,{label:"Bolivia",value:"bolivia"}),e(i,{label:"Bosnia and Herzegovina",value:"bosnia"}),e(i,{label:"Botswana",value:"botswana"}),e(i,{label:"Brazil",value:"brazil"}),e(i,{label:"Brunei",value:"brunei"}),e(i,{label:"Bulgaria",value:"bulgaria"}),e(i,{label:"Burkina Faso",value:"burkina"}),e(i,{label:"Burma",value:"burma"}),e(i,{label:"Burundi",value:"burundi"})]),_:1},8,["modelValue"])]),_:1}),e(u),e(f,null,{default:t(()=>[e(o,{color:"error",text:"",onClick:r[1]||(r[1]=g=>m.value=!1)},{default:t(()=>[s(" Close ")]),_:1}),e(o,{color:"success",text:"",onClick:r[2]||(r[2]=g=>m.value=!1)},{default:t(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),ee=v("p",{class:"text-subtitle-1 text-grey-darken-1"}," A simple example of a form in a dialog. ",-1),te={class:"text-center mt-6"},le=v("span",{class:"text-h5"},"User Profile",-1),oe=v("small",null,"*indicates required field",-1),ae=k({__name:"DialogsForm",setup(C){const d=_(!1);return(m,a)=>{const r=l("v-btn"),o=l("v-card-title"),n=l("v-text-field"),u=l("v-col"),i=l("v-select"),c=l("v-autocomplete"),b=l("v-row"),f=l("v-container"),p=l("v-card-text"),D=l("v-spacer"),g=l("v-card-actions"),S=l("v-card"),U=l("v-dialog");return y(),$(V,null,[ee,v("div",te,[e(U,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=h=>d.value=h),persistent:""},{activator:t(({props:h})=>[e(r,B({color:"primary"},h),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(S,{style:{height:"300px"},class:"overflow-auto"},{default:t(()=>[e(o,{class:"pa-5"},{default:t(()=>[le]),_:1}),e(p,null,{default:t(()=>[e(f,null,{default:t(()=>[e(b,null,{default:t(()=>[e(u,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(n,{label:"Legal first name*",required:""})]),_:1}),e(u,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(n,{label:"Legal middle name",hint:"example of helper text only on focus"})]),_:1}),e(u,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(n,{label:"Legal last name*",hint:"example of persistent helper text","persistent-hint":"",required:""})]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(n,{label:"Email*",required:""})]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(n,{label:"Password*",type:"password",required:""})]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(i,{items:["0-17","18-29","30-54","54+"],label:"Age*",required:""})]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(c,{items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests",multiple:""})]),_:1})]),_:1})]),_:1}),oe]),_:1}),e(g,null,{default:t(()=>[e(D),e(r,{color:"error",text:"",onClick:a[0]||(a[0]=h=>d.value=!1)},{default:t(()=>[s(" Close ")]),_:1}),e(r,{color:"success",text:"",onClick:a[1]||(a[1]=h=>d.value=!1)},{default:t(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),ne=v("p",{class:"text-subtitle-1 text-grey-darken-1"}," Dialogs can be nested: you can open one dialog from another. ",-1),se={class:"text-center"},de=v("span",null,"Dialog 3",-1),ie=k({__name:"DialogsNested",setup(C){const d=_(!1),m=_(!1),a=_(!1);return _(!1),_(!0),_(!1),_([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]),_([{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}]),(r,o)=>{const n=l("v-btn"),u=l("v-card-title"),i=l("v-card-text"),c=l("v-card-actions"),b=l("v-card"),f=l("v-dialog");return y(),$(V,null,[ne,v("div",se,[e(n,{color:"secondary",class:"ma-2",onClick:o[0]||(o[0]=p=>d.value=!0)},{default:t(()=>[s(" Open Dialog 1 ")]),_:1}),e(f,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=p=>d.value=p)},{default:t(()=>[e(b,null,{default:t(()=>[e(u,null,{default:t(()=>[s(" Dialog 1 ")]),_:1}),e(i,null,{default:t(()=>[e(n,{color:"primary",class:"ma-2",onClick:o[1]||(o[1]=p=>m.value=!0)},{default:t(()=>[s(" Open Dialog 2 ")]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(n,{color:"error",text:"",onClick:o[2]||(o[2]=p=>d.value=!1)},{default:t(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:m.value,"onUpdate:modelValue":o[6]||(o[6]=p=>m.value=p)},{default:t(()=>[e(b,null,{default:t(()=>[e(u,null,{default:t(()=>[s(" Dialog 2 ")]),_:1}),e(i,null,{default:t(()=>[e(n,{color:"secondary",onClick:o[4]||(o[4]=p=>a.value=!a.value)},{default:t(()=>[s(" Open Dialog 3 ")]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(n,{color:"error",text:"",onClick:o[5]||(o[5]=p=>m.value=!1)},{default:t(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:a.value,"onUpdate:modelValue":o[8]||(o[8]=p=>a.value=p)},{default:t(()=>[e(b,null,{default:t(()=>[e(u,null,{default:t(()=>[de]),_:1}),e(c,null,{default:t(()=>[e(n,{color:"error",text:"",onClick:o[7]||(o[7]=p=>a.value=!1)},{default:t(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),_e=k({__name:"Dialogs",setup(C){const d=_({title:"Dialogs"}),m=_([{text:"Ui Components",disabled:!1,to:"#"},{text:"Dialogs",disabled:!0}]);return(a,r)=>{const o=l("v-col"),n=l("v-row");return y(),$(V,null,[e(F,{title:d.value.title,breadcrumbs:m.value},null,8,["title","breadcrumbs"]),e(n,null,{default:t(()=>[e(o,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(w,{heading:"Activator"},{default:t(()=>[e(P)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(w,{heading:"V-model"},{default:t(()=>[e(I)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(w,{heading:"Fullscreen"},{default:t(()=>[e(G)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(w,{heading:"Transitions"},{default:t(()=>[e(Y)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(w,{heading:"Persistent"},{default:t(()=>[e(K)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(w,{heading:"Scrollable"},{default:t(()=>[e(Z)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(w,{heading:"Form"},{default:t(()=>[e(ae)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(w,{heading:"Nested Dialog"},{default:t(()=>[e(ie)]),_:1})]),_:1})]),_:1})],64)}}});export{_e as default};
