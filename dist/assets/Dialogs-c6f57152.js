import{_ as k,e as C,g as v,r as l,o as h,f as V,j as _,b as m,a as e,w as t,d as s,F as $,m as T}from"./index-7cedc233.js";import{B as N}from"./BaseBreadcrumb-dcb397dc.js";import{B}from"./BaseCard-acda8ab2.js";const O=m("p",{class:"text-subtitle-1 text-grey-darken-1"},"In addition using the activator slot, we can instead use the activator prop to activate a dialog. By placing the dialog component inside the button, and setting the activator prop value to “parent” we can designate the parent (button) as the activator.",-1),P={class:"text-center"},q=C({__name:"DialogsActivator",setup(w){const i=v(!1);return(p,a)=>{const r=l("v-card-text"),o=l("v-btn"),n=l("v-card-actions"),u=l("v-card"),d=l("v-dialog");return h(),V($,null,[_(" ----------------------------------------------------------------------------- "),_(" Activator "),_(" ----------------------------------------------------------------------------- "),O,m("div",P,[e(o,{color:"primary"},{default:t(()=>[s(" Open Dialog "),e(d,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=c=>i.value=c),activator:"parent"},{default:t(()=>[e(u,null,{default:t(()=>[e(r,null,{default:t(()=>[s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),e(n,null,{default:t(()=>[e(o,{color:"primary",block:"",onClick:a[0]||(a[0]=c=>i.value=!1)},{default:t(()=>[s("Close Dialog")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])],64)}}}),M=k(q,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/dialogs/DialogsActivator.vue"]]),L=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can also trigger a dialog by simply updating the v-model, without using either activator slot or prop. In this case, the dialog will not appear to be activated by any specific element, and will simply appear in the middle of the screen. ",-1),z={class:"text-center mt-6"},I=C({__name:"DialogsModel",setup(w){const i=v(!1);return(p,a)=>{const r=l("v-btn"),o=l("v-card-text"),n=l("v-card-actions"),u=l("v-card"),d=l("v-dialog");return h(),V($,null,[_(" ----------------------------------------------------------------------------- "),_(" Model "),_(" ----------------------------------------------------------------------------- "),L,m("div",z,[e(r,{color:"secondary",onClick:a[0]||(a[0]=c=>i.value=!0)},{default:t(()=>[s(" Open Dialog ")]),_:1}),e(d,{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=c=>i.value=c)},{default:t(()=>[e(u,null,{default:t(()=>[e(o,null,{default:t(()=>[s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),e(n,null,{default:t(()=>[e(r,{color:"primary",block:"",onClick:a[1]||(a[1]=c=>i.value=!1)},{default:t(()=>[s("Close Dialog")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),G=k(I,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/dialogs/DialogsModel.vue"]]),H=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens. ",-1),E={class:"text-center mt-6"},R=C({__name:"DialogsFullscreen",setup(w){const i=v(!1),p=v(!1),a=v(!0),r=v(!1);return(o,n)=>{const u=l("v-btn"),d=l("v-icon"),c=l("v-toolbar-title"),x=l("v-spacer"),g=l("v-toolbar-items"),f=l("v-toolbar"),S=l("v-subheader"),b=l("v-list-item"),U=l("v-list"),F=l("v-divider"),y=l("v-checkbox"),j=l("v-card"),A=l("v-dialog");return h(),V($,null,[_(" ----------------------------------------------------------------------------- "),_(" Fullscreen "),_(" ----------------------------------------------------------------------------- "),H,m("div",E,[e(A,{modelValue:i.value,"onUpdate:modelValue":n[5]||(n[5]=D=>i.value=D),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:t(({props:D})=>[e(u,T({color:"primary",dark:""},D),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(j,null,{default:t(()=>[e(f,{dark:"",color:"primary"},{default:t(()=>[e(u,{icon:"",dark:"",onClick:n[0]||(n[0]=D=>i.value=!1)},{default:t(()=>[e(d,null,{default:t(()=>[s("mdi-close")]),_:1})]),_:1}),e(c,null,{default:t(()=>[s("Settings")]),_:1}),e(x),e(g,null,{default:t(()=>[e(u,{dark:"",text:"",onClick:n[1]||(n[1]=D=>i.value=!1)},{default:t(()=>[s(" Save ")]),_:1})]),_:1})]),_:1}),e(U,{lines:"two",subheader:""},{default:t(()=>[e(S,null,{default:t(()=>[s("User Controls")]),_:1}),e(b,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(b,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(F),e(U,{lines:"two",subheader:""},{default:t(()=>[e(S,null,{default:t(()=>[s("General")]),_:1}),e(b,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded"},{prepend:t(()=>[e(y,{modelValue:p.value,"onUpdate:modelValue":n[2]||(n[2]=D=>p.value=D)},null,8,["modelValue"])]),_:1}),e(b,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply"},{prepend:t(()=>[e(y,{modelValue:a.value,"onUpdate:modelValue":n[3]||(n[3]=D=>a.value=D)},null,8,["modelValue"])]),_:1}),e(b,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets"},{prepend:t(()=>[e(y,{modelValue:r.value,"onUpdate:modelValue":n[4]||(n[4]=D=>r.value=D)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),Y=k(R,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/dialogs/DialogsFullscreen.vue"]]),W=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can make the dialog appear from the top or the bottom. ",-1),J={class:"text-center mt-6"},K=m("div",{class:"text-h2 pa-12"},"Hello world!",-1),Q=m("div",{class:"text-h2 pa-12"},"Hello world!",-1),X=C({__name:"DialogsTransitions",setup(w){return v(!1),(i,p)=>{const a=l("v-btn"),r=l("v-toolbar"),o=l("v-card-text"),n=l("v-card-actions"),u=l("v-card"),d=l("v-dialog");return h(),V($,null,[_(" ----------------------------------------------------------------------------- "),_(" Transitions "),_(" ----------------------------------------------------------------------------- "),W,m("div",J,[e(d,{transition:"dialog-bottom-transition"},{activator:t(({props:c})=>[e(a,T({color:"primary"},c),{default:t(()=>[s("From the bottom")]),_:2},1040)]),default:t(({isActive:c})=>[e(u,null,{default:t(()=>[e(r,{color:"primary"},{default:t(()=>[s("Opening from the bottom")]),_:1}),e(o,null,{default:t(()=>[K]),_:1}),e(n,{class:"justify-end"},{default:t(()=>[e(a,{text:"",onClick:x=>c.value=!1},{default:t(()=>[s("Close")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1}),e(d,{transition:"dialog-top-transition"},{activator:t(({props:c})=>[e(a,T({color:"secondary",class:"ml-2"},c),{default:t(()=>[s("From the top")]),_:2},1040)]),default:t(({isActive:c})=>[e(u,null,{default:t(()=>[e(r,{color:"primary"},{default:t(()=>[s("Opening from the top")]),_:1}),e(o,null,{default:t(()=>[Q]),_:1}),e(n,{class:"justify-end"},{default:t(()=>[e(a,{text:"",onClick:x=>c.value=!1},{default:t(()=>[s("Close")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1})])],64)}}}),Z=k(X,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/dialogs/DialogsTransitions.vue"]]),ee=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Persistent dialogs are not dismissed when touching outside or pressing the esc key. ",-1),te={class:"text-center mt-6"},le=C({__name:"DialogsPersistent",setup(w){const i=v(!1);return(p,a)=>{const r=l("v-btn"),o=l("v-card-title"),n=l("v-card-text"),u=l("v-spacer"),d=l("v-card-actions"),c=l("v-card"),x=l("v-dialog");return h(),V($,null,[_(" ----------------------------------------------------------------------------- "),_(" Persistent "),_(" ----------------------------------------------------------------------------- "),ee,m("div",te,[e(x,{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=g=>i.value=g),persistent:""},{activator:t(({props:g})=>[e(r,T({color:"primary"},g),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(c,null,{default:t(()=>[e(o,{class:"text-h5"},{default:t(()=>[s(" Use Google's location service? ")]),_:1}),e(n,null,{default:t(()=>[s("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")]),_:1}),e(d,null,{default:t(()=>[e(u),e(r,{color:"green darken-1",text:"",onClick:a[0]||(a[0]=g=>i.value=!1)},{default:t(()=>[s(" Disagree ")]),_:1}),e(r,{color:"green darken-1",text:"",onClick:a[1]||(a[1]=g=>i.value=!1)},{default:t(()=>[s(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),oe=k(le,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/dialogs/DialogsPersistent.vue"]]),ae=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Example of a dialog with scrollable content. ",-1),ne={class:"text-center mt-6"},se=C({__name:"DialogsScrollable",setup(w){const i=v(""),p=v(!1);return(a,r)=>{const o=l("v-btn"),n=l("v-card-title"),u=l("v-divider"),d=l("v-radio"),c=l("v-radio-group"),x=l("v-card-text"),g=l("v-card-actions"),f=l("v-card"),S=l("v-dialog");return h(),V($,null,[_(" ----------------------------------------------------------------------------- "),_(" Scrollable "),_(" ----------------------------------------------------------------------------- "),ae,m("div",ne,[e(S,{modelValue:p.value,"onUpdate:modelValue":r[3]||(r[3]=b=>p.value=b),scrollable:""},{activator:t(({props:b})=>[e(o,T({color:"secondary"},b),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(f,null,{default:t(()=>[e(n,null,{default:t(()=>[s("Select Country")]),_:1}),e(u),e(x,{style:{height:"300px"},class:"overflow-auto"},{default:t(()=>[e(c,{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=b=>i.value=b),column:""},{default:t(()=>[e(d,{label:"Bahamas, The",value:"bahamas"}),e(d,{label:"Bahrain",value:"bahrain"}),e(d,{label:"Bangladesh",value:"bangladesh"}),e(d,{label:"Barbados",value:"barbados"}),e(d,{label:"Belarus",value:"belarus"}),e(d,{label:"Belgium",value:"belgium"}),e(d,{label:"Belize",value:"belize"}),e(d,{label:"Benin",value:"benin"}),e(d,{label:"Bhutan",value:"bhutan"}),e(d,{label:"Bolivia",value:"bolivia"}),e(d,{label:"Bosnia and Herzegovina",value:"bosnia"}),e(d,{label:"Botswana",value:"botswana"}),e(d,{label:"Brazil",value:"brazil"}),e(d,{label:"Brunei",value:"brunei"}),e(d,{label:"Bulgaria",value:"bulgaria"}),e(d,{label:"Burkina Faso",value:"burkina"}),e(d,{label:"Burma",value:"burma"}),e(d,{label:"Burundi",value:"burundi"})]),_:1},8,["modelValue"])]),_:1}),e(u),e(g,null,{default:t(()=>[e(o,{color:"error",text:"",onClick:r[1]||(r[1]=b=>p.value=!1)},{default:t(()=>[s(" Close ")]),_:1}),e(o,{color:"success",text:"",onClick:r[2]||(r[2]=b=>p.value=!1)},{default:t(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),ie=k(se,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/dialogs/DialogsScrollable.vue"]]),de=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," A simple example of a form in a dialog. ",-1),re={class:"text-center mt-6"},ue=m("span",{class:"text-h5"},"User Profile",-1),ce=m("small",null,"*indicates required field",-1),_e=C({__name:"DialogsForm",setup(w){const i=v(!1);return(p,a)=>{const r=l("v-btn"),o=l("v-card-title"),n=l("v-text-field"),u=l("v-col"),d=l("v-select"),c=l("v-autocomplete"),x=l("v-row"),g=l("v-container"),f=l("v-card-text"),S=l("v-spacer"),b=l("v-card-actions"),U=l("v-card"),F=l("v-dialog");return h(),V($,null,[_(" ----------------------------------------------------------------------------- "),_(" Form "),_(" ----------------------------------------------------------------------------- "),de,m("div",re,[e(F,{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=y=>i.value=y),persistent:""},{activator:t(({props:y})=>[e(r,T({color:"primary"},y),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(U,{style:{height:"300px"},class:"overflow-auto"},{default:t(()=>[e(o,{class:"pa-5"},{default:t(()=>[ue]),_:1}),e(f,null,{default:t(()=>[e(g,null,{default:t(()=>[e(x,null,{default:t(()=>[e(u,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(n,{label:"Legal first name*",required:""})]),_:1}),e(u,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(n,{label:"Legal middle name",hint:"example of helper text only on focus"})]),_:1}),e(u,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(n,{label:"Legal last name*",hint:"example of persistent helper text","persistent-hint":"",required:""})]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(n,{label:"Email*",required:""})]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(n,{label:"Password*",type:"password",required:""})]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{items:["0-17","18-29","30-54","54+"],label:"Age*",required:""})]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(c,{items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests",multiple:""})]),_:1})]),_:1})]),_:1}),ce]),_:1}),e(b,null,{default:t(()=>[e(S),e(r,{color:"error",text:"",onClick:a[0]||(a[0]=y=>i.value=!1)},{default:t(()=>[s(" Close ")]),_:1}),e(r,{color:"success",text:"",onClick:a[1]||(a[1]=y=>i.value=!1)},{default:t(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),ve=k(_e,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/dialogs/DialogsForm.vue"]]),me=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Dialogs can be nested: you can open one dialog from another. ",-1),pe={class:"text-center"},fe=m("span",null,"Dialog 3",-1),ge=C({__name:"DialogsNested",setup(w){const i=v(!1),p=v(!1),a=v(!1);return v(!1),v(!0),v(!1),v([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]),v([{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}]),(r,o)=>{const n=l("v-btn"),u=l("v-card-title"),d=l("v-card-text"),c=l("v-card-actions"),x=l("v-card"),g=l("v-dialog");return h(),V($,null,[_(" ----------------------------------------------------------------------------- "),_(" Nested "),_(" ----------------------------------------------------------------------------- "),me,m("div",pe,[e(n,{color:"secondary",class:"ma-2",onClick:o[0]||(o[0]=f=>i.value=!0)},{default:t(()=>[s(" Open Dialog 1 ")]),_:1}),e(g,{modelValue:i.value,"onUpdate:modelValue":o[3]||(o[3]=f=>i.value=f)},{default:t(()=>[e(x,null,{default:t(()=>[e(u,null,{default:t(()=>[s(" Dialog 1 ")]),_:1}),e(d,null,{default:t(()=>[e(n,{color:"primary",class:"ma-2",onClick:o[1]||(o[1]=f=>p.value=!0)},{default:t(()=>[s(" Open Dialog 2 ")]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(n,{color:"error",text:"",onClick:o[2]||(o[2]=f=>i.value=!1)},{default:t(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(g,{modelValue:p.value,"onUpdate:modelValue":o[6]||(o[6]=f=>p.value=f)},{default:t(()=>[e(x,null,{default:t(()=>[e(u,null,{default:t(()=>[s(" Dialog 2 ")]),_:1}),e(d,null,{default:t(()=>[e(n,{color:"secondary",onClick:o[4]||(o[4]=f=>a.value=!a.value)},{default:t(()=>[s(" Open Dialog 3 ")]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(n,{color:"error",text:"",onClick:o[5]||(o[5]=f=>p.value=!1)},{default:t(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(g,{modelValue:a.value,"onUpdate:modelValue":o[8]||(o[8]=f=>a.value=f)},{default:t(()=>[e(x,null,{default:t(()=>[e(u,null,{default:t(()=>[fe]),_:1}),e(c,null,{default:t(()=>[e(n,{color:"error",text:"",onClick:o[7]||(o[7]=f=>a.value=!1)},{default:t(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),be=k(ge,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/dialogs/DialogsNested.vue"]]),xe=C({__name:"Dialogs",setup(w){const i=v({title:"Dialogs"}),p=v([{text:"Ui Components",disabled:!1,to:"#"},{text:"Dialogs",disabled:!0}]);return(a,r)=>{const o=l("v-col"),n=l("v-row");return h(),V($,null,[e(N,{title:i.value.title,breadcrumbs:p.value},null,8,["title","breadcrumbs"]),e(n,null,{default:t(()=>[e(o,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(B,{heading:"Activator"},{default:t(()=>[e(M)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6"},{default:t(()=>[e(B,{heading:"V-model"},{default:t(()=>[e(G)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(B,{heading:"Fullscreen"},{default:t(()=>[e(Y)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(B,{heading:"Transitions"},{default:t(()=>[e(Z)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(B,{heading:"Persistent"},{default:t(()=>[e(oe)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(B,{heading:"Scrollable"},{default:t(()=>[e(ie)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(B,{heading:"Form"},{default:t(()=>[e(ve)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(B,{heading:"Nested Dialog"},{default:t(()=>[e(be)]),_:1})]),_:1})]),_:1})],64)}}}),Ce=k(xe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Dialogs.vue"]]);export{Ce as default};
