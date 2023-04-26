import{_ as I}from"./BaseBreadcrumb.fb6d4da3.js";import{_ as y}from"./BaseCard.8fa7a275.js";import{m as x,r as d,o as V,n as h,f as r,a as e,w as l,h as a,b4 as p,d as g,ab as b,b7 as v,g as u,F as k,t as L,C as D,aj as U,l as N,bb as P,M as O,bu as M,v as F,B as w,T,k as S,ap as $,bv as j,bw as f,V as z,e as q,b as c,j as B,ah as G,_ as R}from"./index.ef9cfdf3.js";const H=r("p",{class:"text-subtitle-1 text-grey-darken-1"},"In addition using the activator slot, we can instead use the activator prop to activate a dialog. By placing the dialog component inside the button, and setting the activator prop value to \u201Cparent\u201D we can designate the parent (button) as the activator.",-1),E={class:"text-center"},Y=x({__name:"DialogsActivator",setup(C){const o=d(!1);return(m,t)=>(V(),h(k,null,[H,r("div",E,[e(u,{color:"primary"},{default:l(()=>[a(" Open Dialog "),e(p,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=s=>o.value=s),activator:"parent"},{default:l(()=>[e(g,null,{default:l(()=>[e(b,null,{default:l(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),e(v,null,{default:l(()=>[e(u,{color:"primary",block:"",onClick:t[0]||(t[0]=s=>o.value=!1)},{default:l(()=>[a("Close Dialog")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])],64))}}),W=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can also trigger a dialog by simply updating the v-model, without using either activator slot or prop. In this case, the dialog will not appear to be activated by any specific element, and will simply appear in the middle of the screen. ",-1),J={class:"text-center mt-6"},K=x({__name:"DialogsModel",setup(C){const o=d(!1);return(m,t)=>(V(),h(k,null,[W,r("div",J,[e(u,{color:"secondary",onClick:t[0]||(t[0]=s=>o.value=!0)},{default:l(()=>[a(" Open Dialog ")]),_:1}),e(p,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=s=>o.value=s)},{default:l(()=>[e(g,null,{default:l(()=>[e(b,null,{default:l(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),e(v,null,{default:l(()=>[e(u,{color:"primary",block:"",onClick:t[1]||(t[1]=s=>o.value=!1)},{default:l(()=>[a("Close Dialog")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64))}}),Q=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens. ",-1),X={class:"text-center mt-6"},Z=x({__name:"DialogsFullscreen",setup(C){const o=d(!1),m=d(!1),t=d(!0),s=d(!1);return(n,i)=>{const A=L("v-subheader");return V(),h(k,null,[Q,r("div",X,[e(p,{modelValue:o.value,"onUpdate:modelValue":i[5]||(i[5]=_=>o.value=_),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:l(({props:_})=>[e(u,D({color:"primary",dark:""},_),{default:l(()=>[a(" Open Dialog ")]),_:2},1040)]),default:l(()=>[e(g,null,{default:l(()=>[e(U,{dark:"",color:"primary"},{default:l(()=>[e(u,{icon:"",dark:"",onClick:i[0]||(i[0]=_=>o.value=!1)},{default:l(()=>[e(N,null,{default:l(()=>[a("mdi-close")]),_:1})]),_:1}),e(P,null,{default:l(()=>[a("Settings")]),_:1}),e(O),e(M,null,{default:l(()=>[e(u,{dark:"",text:"",onClick:i[1]||(i[1]=_=>o.value=!1)},{default:l(()=>[a(" Save ")]),_:1})]),_:1})]),_:1}),e(F,{lines:"two",subheader:""},{default:l(()=>[e(A,null,{default:l(()=>[a("User Controls")]),_:1}),e(w,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(w,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(T),e(F,{lines:"two",subheader:""},{default:l(()=>[e(A,null,{default:l(()=>[a("General")]),_:1}),e(w,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded"},{prepend:l(()=>[e(S,{modelValue:m.value,"onUpdate:modelValue":i[2]||(i[2]=_=>m.value=_)},null,8,["modelValue"])]),_:1}),e(w,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply"},{prepend:l(()=>[e(S,{modelValue:t.value,"onUpdate:modelValue":i[3]||(i[3]=_=>t.value=_)},null,8,["modelValue"])]),_:1}),e(w,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets"},{prepend:l(()=>[e(S,{modelValue:s.value,"onUpdate:modelValue":i[4]||(i[4]=_=>s.value=_)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}}}),ee=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can make the dialog appear from the top or the bottom. ",-1),le={class:"text-center mt-6"},te=r("div",{class:"text-h2 pa-12"},"Hello world!",-1),ae=r("div",{class:"text-h2 pa-12"},"Hello world!",-1),oe=x({__name:"DialogsTransitions",setup(C){return d(!1),(o,m)=>(V(),h(k,null,[ee,r("div",le,[e(p,{transition:"dialog-bottom-transition"},{activator:l(({props:t})=>[e(u,D({color:"primary"},t),{default:l(()=>[a("From the bottom")]),_:2},1040)]),default:l(({isActive:t})=>[e(g,null,{default:l(()=>[e(U,{color:"primary"},{default:l(()=>[a("Opening from the bottom")]),_:1}),e(b,null,{default:l(()=>[te]),_:1}),e(v,{class:"justify-end"},{default:l(()=>[e(u,{text:"",onClick:s=>t.value=!1},{default:l(()=>[a("Close")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1}),e(p,{transition:"dialog-top-transition"},{activator:l(({props:t})=>[e(u,D({color:"secondary",class:"ml-2"},t),{default:l(()=>[a("From the top")]),_:2},1040)]),default:l(({isActive:t})=>[e(g,null,{default:l(()=>[e(U,{color:"primary"},{default:l(()=>[a("Opening from the top")]),_:1}),e(b,null,{default:l(()=>[ae]),_:1}),e(v,{class:"justify-end"},{default:l(()=>[e(u,{text:"",onClick:s=>t.value=!1},{default:l(()=>[a("Close")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1})])],64))}}),se=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," Persistent dialogs are not dismissed when touching outside or pressing the esc key. ",-1),ne={class:"text-center mt-6"},ue=x({__name:"DialogsPersistent",setup(C){const o=d(!1);return(m,t)=>(V(),h(k,null,[se,r("div",ne,[e(p,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=s=>o.value=s),persistent:""},{activator:l(({props:s})=>[e(u,D({color:"primary"},s),{default:l(()=>[a(" Open Dialog ")]),_:2},1040)]),default:l(()=>[e(g,null,{default:l(()=>[e($,{class:"text-h5"},{default:l(()=>[a(" Use Google's location service? ")]),_:1}),e(b,null,{default:l(()=>[a("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")]),_:1}),e(v,null,{default:l(()=>[e(O),e(u,{color:"green darken-1",text:"",onClick:t[0]||(t[0]=s=>o.value=!1)},{default:l(()=>[a(" Disagree ")]),_:1}),e(u,{color:"green darken-1",text:"",onClick:t[1]||(t[1]=s=>o.value=!1)},{default:l(()=>[a(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64))}}),ie=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," Example of a dialog with scrollable content. ",-1),de={class:"text-center mt-6"},re=x({__name:"DialogsScrollable",setup(C){const o=d(""),m=d(!1);return(t,s)=>(V(),h(k,null,[ie,r("div",de,[e(p,{modelValue:m.value,"onUpdate:modelValue":s[3]||(s[3]=n=>m.value=n),scrollable:""},{activator:l(({props:n})=>[e(u,D({color:"secondary"},n),{default:l(()=>[a(" Open Dialog ")]),_:2},1040)]),default:l(()=>[e(g,null,{default:l(()=>[e($,null,{default:l(()=>[a("Select Country")]),_:1}),e(T),e(b,{style:{height:"300px"},class:"overflow-auto"},{default:l(()=>[e(j,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=n=>o.value=n),column:""},{default:l(()=>[e(f,{label:"Bahamas, The",value:"bahamas"}),e(f,{label:"Bahrain",value:"bahrain"}),e(f,{label:"Bangladesh",value:"bangladesh"}),e(f,{label:"Barbados",value:"barbados"}),e(f,{label:"Belarus",value:"belarus"}),e(f,{label:"Belgium",value:"belgium"}),e(f,{label:"Belize",value:"belize"}),e(f,{label:"Benin",value:"benin"}),e(f,{label:"Bhutan",value:"bhutan"}),e(f,{label:"Bolivia",value:"bolivia"}),e(f,{label:"Bosnia and Herzegovina",value:"bosnia"}),e(f,{label:"Botswana",value:"botswana"}),e(f,{label:"Brazil",value:"brazil"}),e(f,{label:"Brunei",value:"brunei"}),e(f,{label:"Bulgaria",value:"bulgaria"}),e(f,{label:"Burkina Faso",value:"burkina"}),e(f,{label:"Burma",value:"burma"}),e(f,{label:"Burundi",value:"burundi"})]),_:1},8,["modelValue"])]),_:1}),e(T),e(v,null,{default:l(()=>[e(u,{color:"error",text:"",onClick:s[1]||(s[1]=n=>m.value=!1)},{default:l(()=>[a(" Close ")]),_:1}),e(u,{color:"success",text:"",onClick:s[2]||(s[2]=n=>m.value=!1)},{default:l(()=>[a(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64))}}),me=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," A simple example of a form in a dialog. ",-1),fe={class:"text-center mt-6"},ce=r("span",{class:"text-h5"},"User Profile",-1),_e=r("small",null,"*indicates required field",-1),pe=x({__name:"DialogsForm",setup(C){const o=d(!1);return(m,t)=>(V(),h(k,null,[me,r("div",fe,[e(p,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=s=>o.value=s),persistent:""},{activator:l(({props:s})=>[e(u,D({color:"primary"},s),{default:l(()=>[a(" Open Dialog ")]),_:2},1040)]),default:l(()=>[e(g,{style:{height:"300px"},class:"overflow-auto"},{default:l(()=>[e($,{class:"pa-5"},{default:l(()=>[ce]),_:1}),e(b,null,{default:l(()=>[e(z,null,{default:l(()=>[e(q,null,{default:l(()=>[e(c,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(B,{label:"Legal first name*",required:""})]),_:1}),e(c,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(B,{label:"Legal middle name",hint:"example of helper text only on focus"})]),_:1}),e(c,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(B,{label:"Legal last name*",hint:"example of persistent helper text","persistent-hint":"",required:""})]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(B,{label:"Email*",required:""})]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(B,{label:"Password*",type:"password",required:""})]),_:1}),e(c,{cols:"12",sm:"6"},{default:l(()=>[e(G,{items:["0-17","18-29","30-54","54+"],label:"Age*",required:""})]),_:1}),e(c,{cols:"12",sm:"6"},{default:l(()=>[e(R,{items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests",multiple:""})]),_:1})]),_:1})]),_:1}),_e]),_:1}),e(v,null,{default:l(()=>[e(O),e(u,{color:"error",text:"",onClick:t[0]||(t[0]=s=>o.value=!1)},{default:l(()=>[a(" Close ")]),_:1}),e(u,{color:"success",text:"",onClick:t[1]||(t[1]=s=>o.value=!1)},{default:l(()=>[a(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64))}}),ge=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," Dialogs can be nested: you can open one dialog from another. ",-1),ve={class:"text-center"},be=r("span",null,"Dialog 3",-1),xe=x({__name:"DialogsNested",setup(C){const o=d(!1),m=d(!1),t=d(!1);return d(!1),d(!0),d(!1),d([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]),d([{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}]),(s,n)=>(V(),h(k,null,[ge,r("div",ve,[e(u,{color:"secondary",class:"ma-2",onClick:n[0]||(n[0]=i=>o.value=!0)},{default:l(()=>[a(" Open Dialog 1 ")]),_:1}),e(p,{modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=i=>o.value=i)},{default:l(()=>[e(g,null,{default:l(()=>[e($,null,{default:l(()=>[a(" Dialog 1 ")]),_:1}),e(b,null,{default:l(()=>[e(u,{color:"primary",class:"ma-2",onClick:n[1]||(n[1]=i=>m.value=!0)},{default:l(()=>[a(" Open Dialog 2 ")]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(u,{color:"error",text:"",onClick:n[2]||(n[2]=i=>o.value=!1)},{default:l(()=>[a(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(p,{modelValue:m.value,"onUpdate:modelValue":n[6]||(n[6]=i=>m.value=i)},{default:l(()=>[e(g,null,{default:l(()=>[e($,null,{default:l(()=>[a(" Dialog 2 ")]),_:1}),e(b,null,{default:l(()=>[e(u,{color:"secondary",onClick:n[4]||(n[4]=i=>t.value=!t.value)},{default:l(()=>[a(" Open Dialog 3 ")]),_:1})]),_:1}),e(v,null,{default:l(()=>[e(u,{color:"error",text:"",onClick:n[5]||(n[5]=i=>m.value=!1)},{default:l(()=>[a(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(p,{modelValue:t.value,"onUpdate:modelValue":n[8]||(n[8]=i=>t.value=i)},{default:l(()=>[e(g,null,{default:l(()=>[e($,null,{default:l(()=>[be]),_:1}),e(v,null,{default:l(()=>[e(u,{color:"error",text:"",onClick:n[7]||(n[7]=i=>t.value=!1)},{default:l(()=>[a(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64))}}),Ce=x({__name:"Dialogs",setup(C){const o=d({title:"Dialogs"}),m=d([{text:"Ui Components",disabled:!1,to:"#"},{text:"Dialogs",disabled:!0}]);return(t,s)=>(V(),h(k,null,[e(I,{title:o.value.title,breadcrumbs:m.value},null,8,["title","breadcrumbs"]),e(q,null,{default:l(()=>[e(c,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(y,{heading:"Activator"},{default:l(()=>[e(Y)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(y,{heading:"V-model"},{default:l(()=>[e(K)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(y,{heading:"Fullscreen"},{default:l(()=>[e(Z)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(y,{heading:"Transitions"},{default:l(()=>[e(oe)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(y,{heading:"Persistent"},{default:l(()=>[e(ue)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(y,{heading:"Scrollable"},{default:l(()=>[e(re)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(y,{heading:"Form"},{default:l(()=>[e(pe)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(y,{heading:"Nested Dialog"},{default:l(()=>[e(xe)]),_:1})]),_:1})]),_:1})],64))}});export{Ce as default};
