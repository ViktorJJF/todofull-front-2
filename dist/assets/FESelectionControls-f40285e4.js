import{_ as C}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-cd74bebb.js";import{_ as f}from"./BaseCard.vue_vue_type_script_setup_true_lang-1df6f245.js";import{e as b,g as m,r,o as _,f as v,b as s,a as e,t as k,w as l,d as c,m as y,l as $,F as U}from"./index-243c601c.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const R={class:"mt-4"},D=b({__name:"SelectionControlsChkBoolean",setup(p){const o=m(!0),u=m(!1);return(a,t)=>{const n=r("v-checkbox");return _(),v("div",null,[s("div",R,[e(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),label:`Checkbox 1: ${o.value.toString()}`},null,8,["modelValue","label"]),e(n,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=i=>u.value=i),label:`Checkbox 2: ${u.value.toString()}`},null,8,["modelValue","label"])])])}}}),J={class:"d-flex align-items-center"},B={class:"ml-auto"},F=b({__name:"SelectionControlsChkArray",setup(p){const o=m(["John"]);return(u,a)=>{const t=r("v-checkbox");return _(),v("div",null,[s("div",null,[s("div",J,[s("div",null,[e(t,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n),label:"John",value:"John"},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=n=>o.value=n),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),s("div",B,[s("p",null,k(o.value),1)])])])])}}}),I={},O={class:"mt-4"};function T(p,o){const u=r("v-col"),a=r("v-row"),t=r("v-checkbox");return _(),v("div",null,[s("div",O,[e(a,{class:"light--text"},{default:l(()=>[e(u,{cols:"4"},{default:l(()=>[c("on")]),_:1}),e(u,{cols:"4"},{default:l(()=>[c("off")]),_:1}),e(u,{cols:"4"},{default:l(()=>[c("indeterminate")]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(u,{cols:"4"},{default:l(()=>[e(t,{"input-value":"true",value:""})]),_:1}),e(u,{cols:"4"},{default:l(()=>[e(t,{value:""})]),_:1}),e(u,{cols:"4"},{default:l(()=>[e(t,{value:"",indeterminate:""})]),_:1})]),_:1}),e(a,{class:"light--text"},{default:l(()=>[e(u,{cols:"4"},{default:l(()=>[c("on disabled")]),_:1}),e(u,{cols:"4"},{default:l(()=>[c("off disabled")]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(u,{cols:"4"},{default:l(()=>[e(t,{"input-value":"true",value:"",disabled:""})]),_:1}),e(u,{cols:"4"},{default:l(()=>[e(t,{value:"",disabled:""})]),_:1})]),_:1})])])}const A=w(I,[["render",T]]),E=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" Checkboxes can be colored by using any of the builtin colors and contextual names using the "),s("code",null,"color"),c(" prop. ")],-1),L={class:"mt-4"},M=b({__name:"SelectionControlsChkColors",setup(p){const o=m([["red","indigo","orange","primary","secondary","success","info","warning","error","red darken-3","indigo darken-3","orange darken-3"]]);return(u,a)=>{const t=r("v-checkbox"),n=r("v-col"),i=r("v-row");return _(),v("div",null,[E,s("div",L,[e(i,null,{default:l(()=>[e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=d=>o.value=d),label:"red",color:"red",value:"red","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=d=>o.value=d),label:"red darken-3",color:"red darken-3",value:"red darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=d=>o.value=d),label:"indigo",color:"indigo",value:"indigo","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=d=>o.value=d),label:"indigo darken-3",color:"indigo darken-3",value:"indigo darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=d=>o.value=d),label:"orange",color:"orange",value:"orange","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[5]||(a[5]=d=>o.value=d),label:"orange darken-3",color:"orange darken-3",value:"orange darken-3","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{class:"mt-12"},{default:l(()=>[e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[6]||(a[6]=d=>o.value=d),label:"primary",color:"primary",value:"primary","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[7]||(a[7]=d=>o.value=d),label:"secondary",color:"secondary",value:"secondary","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[8]||(a[8]=d=>o.value=d),label:"success",color:"success",value:"success","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[9]||(a[9]=d=>o.value=d),label:"info",color:"info",value:"info","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[10]||(a[10]=d=>o.value=d),label:"warning",color:"warning",value:"warning","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[11]||(a[11]=d=>o.value=d),label:"error",color:"error",value:"error","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])])}}}),N={class:"mt-4"},Y=b({__name:"SelectionControlsChkInlinetextfield",setup(p){const o=m(!0),u=m(!1);return(a,t)=>{const n=r("v-checkbox"),i=r("v-text-field"),d=r("v-row");return _(),v("div",null,[s("div",N,[e(d,{align:"center"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=V=>o.value=V),"hide-details":"",class:"shrink mr-2 mt-0"},null,8,["modelValue"]),e(i,{label:"Include files"})]),_:1}),e(d,{align:"center"},{default:l(()=>[e(n,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=V=>u.value=V),"hide-details":"",class:"shrink mr-2 mt-0"},null,8,["modelValue"]),e(i,{disabled:!u.value,label:"I only work if you check the box"},null,8,["disabled"])]),_:1})])])}}}),j=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" Radio-groups are by default mandatory. This can be changed with the "),s("code",null,"mandatory"),c(" prop. ")],-1),G={class:"mt-4"},z=b({__name:"SelectionControlsRadioDefault",setup(p){const o=m("radio-1");return(u,a)=>{const t=r("v-radio"),n=r("v-radio-group");return _(),v("div",null,[j,s("div",G,[s("p",null,k(o.value||"null"),1),e(n,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=i=>o.value=i),mandatory:!1},{default:l(()=>[e(t,{label:"Radio 1",value:"radio-1"}),e(t,{label:"Radio 2",value:"radio-2"})]),_:1},8,["modelValue"])])])}}}),H=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column. ",-1),P={class:"mt-4"},q=s("hr",null,null,-1),K=b({__name:"SelectionControlsRadioDirection",setup(p){const o=m(null),u=m(null);return(a,t)=>{const n=r("v-radio"),i=r("v-radio-group");return _(),v("div",null,[H,s("div",P,[e(i,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=d=>o.value=d),column:""},{default:l(()=>[e(n,{label:"Option 1",value:"radio-1"}),e(n,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),q,e(i,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=d=>u.value=d),row:""},{default:l(()=>[e(n,{label:"Option 1",value:"radio-1"}),e(n,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])])])}}}),Q=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" Radios can be colored by using any of the builtin colors and contextual names using the "),s("code",null,"color"),c(" prop. ")],-1),W={class:"mt-4"},X=b({__name:"SelectionControlsRadioColors",setup(p){const o=m("primary"),u=m("red");return(a,t)=>{const n=r("v-radio"),i=r("v-radio-group"),d=r("v-col"),V=r("v-row");return _(),v("div",null,[Q,s("div",W,[e(V,null,{default:l(()=>[e(d,{cols:"12",sm:"6",md:"6"},{default:l(()=>[e(i,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=h=>u.value=h),column:""},{default:l(()=>[e(n,{label:"red",color:"red",value:"red"}),e(n,{label:"red darken-3",color:"red darken-3",value:"red darken-3"}),e(n,{label:"indigo",color:"indigo",value:"indigo"}),e(n,{label:"indigo darken-3",color:"indigo darken-3",value:"indigo darken-3"}),e(n,{label:"orange",color:"orange",value:"orange"}),e(n,{label:"orange darken-3",color:"orange darken-3",value:"orange darken-3"})]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6",md:"6"},{default:l(()=>[e(i,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=h=>o.value=h),column:""},{default:l(()=>[e(n,{label:"primary",color:"primary",value:"primary"}),e(n,{label:"secondary",color:"secondary",value:"secondary"}),e(n,{label:"success",color:"success",value:"success"}),e(n,{label:"info",color:"info",value:"info"}),e(n,{label:"warning",color:"warning",value:"warning"}),e(n,{label:"error",color:"error",value:"error"})]),_:1},8,["modelValue"])]),_:1})]),_:1})])])}}}),Z={class:"mt-4"},ee=b({__name:"SelectionControlsSwitchBoolean",setup(p){const o=m(!0),u=m(!1);return(a,t)=>{const n=r("v-switch");return _(),v("div",null,[s("div",Z,[e(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),label:`Switch 1: ${o.value.toString()}`},null,8,["modelValue","label"]),e(n,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=i=>u.value=i),label:`Switch 2: ${u.value.toString()}`},null,8,["modelValue","label"])])])}}}),le={class:"mt-4"},oe=b({__name:"SelectionControlsSwitchArray",setup(p){const o=m(["john"]);return(u,a)=>{const t=r("v-switch");return _(),v("div",null,[s("div",le,[s("p",null,k(o.value),1),e(t,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n),label:"John",value:"John"},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=n=>o.value=n),label:"Jacob",value:"Jacob"},null,8,["modelValue"])])])}}}),ae={},te={class:"mt-4"};function ne(p,o){const u=r("v-col"),a=r("v-row"),t=r("v-switch");return _(),v("div",null,[s("div",te,[e(a,{class:"dark--text"},{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[c("on")]),_:1}),e(u,{cols:"6"},{default:l(()=>[c("off")]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[e(t,{value:"","input-value":"true"})]),_:1}),e(u,{cols:"6"},{default:l(()=>[e(t)]),_:1})]),_:1}),e(a,{class:"dark--text"},{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[c("on disabled")]),_:1}),e(u,{cols:"6"},{default:l(()=>[c("off disabled")]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[e(t,{value:"","input-value":"true",disabled:""})]),_:1}),e(u,{cols:"6"},{default:l(()=>[e(t,{disabled:""})]),_:1})]),_:1}),e(a,{class:"dark--text"},{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[c("on loading")]),_:1}),e(u,{cols:"6"},{default:l(()=>[c("off loading")]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[e(t,{loading:"",color:"error","model-value":!0,label:"on loading"})]),_:1}),e(u,{cols:"6"},{default:l(()=>[e(t,{"model-value":!1,color:"error",loading:"",label:"off loading"})]),_:1})]),_:1})])])}const de=w(ae,[["render",ne]]),ue=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" Switches can be colored by using any of the builtin colors and contextual names using the "),s("code",null,"color"),c(" prop. ")],-1),se={class:"mt-4"},re=b({__name:"SelectionControlsSwitchColors",setup(p){const o=m(["red","indigo","orange","primary","secondary","success","info","warning","error","red darken-3","indigo darken-3","orange darken-3"]);return(u,a)=>{const t=r("v-switch"),n=r("v-col"),i=r("v-row");return _(),v("div",null,[ue,s("div",se,[e(i,null,{default:l(()=>[e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=d=>o.value=d),label:"red",color:"red",value:"red","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=d=>o.value=d),label:"red darken-3",color:"red darken-3",value:"red darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=d=>o.value=d),label:"indigo",color:"indigo",value:"indigo","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=d=>o.value=d),label:"indigo darken-3",color:"indigo darken-3",value:"indigo darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=d=>o.value=d),label:"orange",color:"orange",value:"orange","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[5]||(a[5]=d=>o.value=d),label:"orange darken-3",color:"orange darken-3",value:"orange darken-3","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{class:"mt-12"},{default:l(()=>[e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[6]||(a[6]=d=>o.value=d),label:"primary",color:"primary",value:"primary","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[7]||(a[7]=d=>o.value=d),label:"secondary",color:"secondary",value:"secondary","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[8]||(a[8]=d=>o.value=d),label:"success",color:"success",value:"success","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[9]||(a[9]=d=>o.value=d),label:"info",color:"info",value:"info","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(t,{modelValue:o.value,"onUpdate:modelValue":a[10]||(a[10]=d=>o.value=d),label:"warning",color:"warning",value:"warning","hide-details":""},null,8,["modelValue"]),e(t,{modelValue:o.value,"onUpdate:modelValue":a[11]||(a[11]=d=>o.value=d),label:"error",color:"error",value:"error","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])])}}}),ie=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" You can make switch render without elevation of thumb using "),s("code",null,"flat"),c(" property. ")],-1),ce={class:"mt-5"},me=b({__name:"SelectionControlsSwitchFlat",setup(p){const o=m(!0),u=m(!1);return(a,t)=>{const n=r("v-switch"),i=r("v-sheet");return _(),v("div",null,[ie,s("div",ce,[e(i,{class:"pa-2"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=d=>o.value=d),flat:"",label:`Switch 1: ${o.value.toString()}`},null,8,["modelValue","label"]),e(n,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=d=>u.value=d),flat:"",label:`Switch 2: ${u.value.toString()}`},null,8,["modelValue","label"])]),_:1})])])}}}),_e=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can make switch render in inset mode. ",-1),ve={class:"mt-4"},pe=b({__name:"SelectionControlsSwitchInset",setup(p){const o=m(!0),u=m(!1);return(a,t)=>{const n=r("v-switch"),i=r("v-sheet");return _(),v("div",null,[_e,s("div",ve,[e(i,{class:"pa-5"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=d=>o.value=d),inset:"",label:`Switch 1: ${o.value.toString()}`},null,8,["modelValue","label"]),e(n,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=d=>u.value=d),inset:"",label:`Switch 2: ${u.value.toString()}`},null,8,["modelValue","label"])]),_:1})])])}}}),fe=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" Selection controls' labels can be defined in "),s("code",null,"label"),c(" slot - that will allow to use HTML content ")],-1),be={class:"mt-4"},Ve=s("div",null,[c("Your favourite "),s("strong",null,"search engine")],-1),ge=s("div",null,[c(" Of course it's "),s("strong",{class:"success--text"},"Google")],-1),he=s("div",null,[c(" Definitely "),s("strong",{class:"primary--text"},"Duckduckgo")],-1),ke=b({__name:"SelectionControlsLblSlot",setup(p){const o=m(!1),u=m(!1),a=m("Duckduckgo");return(t,n)=>{const i=r("v-tooltip"),d=r("v-checkbox"),V=r("v-radio"),h=r("v-radio-group"),x=r("v-progress-circular"),S=r("v-switch");return _(),v("div",null,[fe,s("div",be,[e(d,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=g=>o.value=g)},{label:l(()=>[s("div",null,[c(" I agree that "),e(i,{bottom:""},{activator:l(({props:g})=>[s("a",y({target:"_blank",href:"http://vuetifyjs.com",onClick:n[0]||(n[0]=$(()=>{},["stop"]))},g)," Vuetify ",16)]),default:l(()=>[c(" Opens in new window ")]),_:1}),c(" is awesome ")])]),_:1},8,["modelValue"]),e(h,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=g=>a.value=g)},{label:l(()=>[Ve]),default:l(()=>[e(V,{value:"Google"},{label:l(()=>[ge]),_:1}),e(V,{value:"Duckduckgo"},{label:l(()=>[he]),_:1})]),_:1},8,["modelValue"]),e(S,{modelValue:u.value,"onUpdate:modelValue":n[3]||(n[3]=g=>u.value=g)},{label:l(()=>[c(" Turn on the progress: "),e(x,{indeterminate:u.value,value:0,size:"24",class:"ml-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"])])])}}}),ye=b({__name:"FESelectionControls",setup(p){const o=m({title:"Selection Control"}),u=m([{text:"Form Elements",disabled:!1,to:"#"},{text:"Selection Control",disabled:!0}]);return(a,t)=>{const n=r("v-col"),i=r("v-row");return _(),v(U,null,[e(C,{title:o.value.title,breadcrumbs:u.value},null,8,["title","breadcrumbs"]),e(i,null,{default:l(()=>[e(n,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(f,{heading:"Selection Controls - Checkboxes - Boolean"},{default:l(()=>[e(D)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(f,{heading:"Selection Controls - Checkboxes - Array"},{default:l(()=>[e(F)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Checkboxes - States"},{default:l(()=>[e(A)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Checkboxes - Colors"},{default:l(()=>[e(M)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Checkboxes - Inline with a textfield"},{default:l(()=>[e(Y)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Radios - Default"},{default:l(()=>[e(z)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Radios - Direction"},{default:l(()=>[e(K)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Radios - Colors"},{default:l(()=>[e(X)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Switches - Boolean"},{default:l(()=>[e(ee)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Switches - Array"},{default:l(()=>[e(oe)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Switches - States"},{default:l(()=>[e(de)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Switches - Colors"},{default:l(()=>[e(re)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(f,{heading:"Selection Controls - Switches - Flat"},{default:l(()=>[e(me)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(f,{heading:"Selection Controls - Switches - inset"},{default:l(()=>[e(pe)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Selection Controls - Label slot"},{default:l(()=>[e(ke)]),_:1})]),_:1})]),_:1})],64)}}});export{ye as default};
