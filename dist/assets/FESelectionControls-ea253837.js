import{_ as v,e as C,g as _,r as i,o as f,f as p,j as r,b as d,a as e,F as b,t as w,w as l,d as m,m as $,p as U}from"./index-40ca758f.js";import{B as D}from"./BaseBreadcrumb-4e3014c9.js";import{B as g}from"./BaseCard-e2f1d4c7.js";const T={class:"mt-4"},R=C({__name:"SelectionControlsChkBoolean",setup(V){const o=_(!0),u=_(!1);return(t,n)=>{const a=i("v-checkbox");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsChkBoolean "),r(" ----------------------------------------------------------------------------- "),d("div",null,[d("div",T,[e(a,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=c=>o.value=c),label:`Checkbox 1: ${o.value.toString()}`},null,8,["modelValue","label"]),e(a,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=c=>u.value=c),label:`Checkbox 2: ${u.value.toString()}`},null,8,["modelValue","label"])])])],2112)}}}),j=v(R,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsChkBoolean.vue"]]),B={class:"d-flex align-items-center"},F={class:"ml-auto"},I=C({__name:"SelectionControlsChkArray",setup(V){const o=_(["John"]);return(u,t)=>{const n=i("v-checkbox");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsChkArray "),r(" ----------------------------------------------------------------------------- "),d("div",null,[d("div",null,[d("div",B,[d("div",null,[e(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value=a),label:"John",value:"John"},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=a=>o.value=a),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),d("div",F,[d("p",null,w(o.value),1)])])])])],2112)}}}),A=v(I,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsChkArray.vue"]]),J={},L={class:"mt-4"};function O(V,o){const u=i("v-col"),t=i("v-row"),n=i("v-checkbox");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsChkStates "),r(" ----------------------------------------------------------------------------- "),d("div",null,[d("div",L,[e(t,{class:"light--text"},{default:l(()=>[e(u,{cols:"4"},{default:l(()=>[m("on")]),_:1}),e(u,{cols:"4"},{default:l(()=>[m("off")]),_:1}),e(u,{cols:"4"},{default:l(()=>[m("indeterminate")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(u,{cols:"4"},{default:l(()=>[e(n,{"input-value":"true",value:""})]),_:1}),e(u,{cols:"4"},{default:l(()=>[e(n,{value:""})]),_:1}),e(u,{cols:"4"},{default:l(()=>[e(n,{value:"",indeterminate:""})]),_:1})]),_:1}),e(t,{class:"light--text"},{default:l(()=>[e(u,{cols:"4"},{default:l(()=>[m("on disabled")]),_:1}),e(u,{cols:"4"},{default:l(()=>[m("off disabled")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(u,{cols:"4"},{default:l(()=>[e(n,{"input-value":"true",value:"",disabled:""})]),_:1}),e(u,{cols:"4"},{default:l(()=>[e(n,{value:"",disabled:""})]),_:1})]),_:1})])])],2112)}const E=v(J,[["render",O],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsChkStates.vue"]]),N=d("p",{class:"text-subtitle-1 text-grey-darken-1"},[m(" Checkboxes can be colored by using any of the builtin colors and contextual names using the "),d("code",null,"color"),m(" prop. ")],-1),M={class:"mt-4"},Y=C({__name:"SelectionControlsChkColors",setup(V){const o=_([["red","indigo","orange","primary","secondary","success","info","warning","error","red darken-3","indigo darken-3","orange darken-3"]]);return(u,t)=>{const n=i("v-checkbox"),a=i("v-col"),c=i("v-row");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsChkColors "),r(" ----------------------------------------------------------------------------- "),d("div",null,[N,d("div",M,[e(c,null,{default:l(()=>[e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),label:"red",color:"red",value:"red","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=s=>o.value=s),label:"red darken-3",color:"red darken-3",value:"red darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=s=>o.value=s),label:"indigo",color:"indigo",value:"indigo","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[3]||(t[3]=s=>o.value=s),label:"indigo darken-3",color:"indigo darken-3",value:"indigo darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=s=>o.value=s),label:"orange",color:"orange",value:"orange","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[5]||(t[5]=s=>o.value=s),label:"orange darken-3",color:"orange darken-3",value:"orange darken-3","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{class:"mt-12"},{default:l(()=>[e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[6]||(t[6]=s=>o.value=s),label:"primary",color:"primary",value:"primary","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[7]||(t[7]=s=>o.value=s),label:"secondary",color:"secondary",value:"secondary","hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[8]||(t[8]=s=>o.value=s),label:"success",color:"success",value:"success","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[9]||(t[9]=s=>o.value=s),label:"info",color:"info",value:"info","hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[10]||(t[10]=s=>o.value=s),label:"warning",color:"warning",value:"warning","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[11]||(t[11]=s=>o.value=s),label:"error",color:"error",value:"error","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])])],2112)}}}),G=v(Y,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsChkColors.vue"]]),z={class:"mt-4"},H=C({__name:"SelectionControlsChkInlinetextfield",setup(V){const o=_(!0),u=_(!1);return(t,n)=>{const a=i("v-checkbox"),c=i("v-text-field"),s=i("v-row");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" error "),r(" ----------------------------------------------------------------------------- "),d("div",null,[d("div",z,[e(s,{align:"center"},{default:l(()=>[e(a,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=S=>o.value=S),"hide-details":"",class:"shrink mr-2 mt-0"},null,8,["modelValue"]),e(c,{label:"Include files"})]),_:1}),e(s,{align:"center"},{default:l(()=>[e(a,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=S=>u.value=S),"hide-details":"",class:"shrink mr-2 mt-0"},null,8,["modelValue"]),e(c,{disabled:!u.value,label:"I only work if you check the box"},null,8,["disabled"])]),_:1})])])],2112)}}}),P=v(H,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsChkInlinetextfield.vue"]]),q=d("p",{class:"text-subtitle-1 text-grey-darken-1"},[m(" Radio-groups are by default mandatory. This can be changed with the "),d("code",null,"mandatory"),m(" prop. ")],-1),K={class:"mt-4"},Q=C({__name:"SelectionControlsRadioDefault",setup(V){const o=_("radio-1");return(u,t)=>{const n=i("v-radio"),a=i("v-radio-group");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsRadioDefault "),r(" ----------------------------------------------------------------------------- "),d("div",null,[q,d("div",K,[d("p",null,w(o.value||"null"),1),e(a,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=c=>o.value=c),mandatory:!1},{default:l(()=>[e(n,{label:"Radio 1",value:"radio-1"}),e(n,{label:"Radio 2",value:"radio-2"})]),_:1},8,["modelValue"])])])],2112)}}}),W=v(Q,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsRadioDefault.vue"]]),X=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column. ",-1),Z={class:"mt-4"},ee=d("hr",null,null,-1),le=C({__name:"SelectionControlsRadioDirection",setup(V){const o=_(null),u=_(null);return(t,n)=>{const a=i("v-radio"),c=i("v-radio-group");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsRadioDirection "),r(" ----------------------------------------------------------------------------- "),d("div",null,[X,d("div",Z,[e(c,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=s=>o.value=s),column:""},{default:l(()=>[e(a,{label:"Option 1",value:"radio-1"}),e(a,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),ee,e(c,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=s=>u.value=s),row:""},{default:l(()=>[e(a,{label:"Option 1",value:"radio-1"}),e(a,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])])])],2112)}}}),oe=v(le,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsRadioDirection.vue"]]),te=d("p",{class:"text-subtitle-1 text-grey-darken-1"},[m(" Radios can be colored by using any of the builtin colors and contextual names using the "),d("code",null,"color"),m(" prop. ")],-1),ne={class:"mt-4"},ae=C({__name:"SelectionControlsRadioColors",setup(V){const o=_("primary"),u=_("red");return(t,n)=>{const a=i("v-radio"),c=i("v-radio-group"),s=i("v-col"),S=i("v-row");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsRadioColors "),r(" ----------------------------------------------------------------------------- "),d("div",null,[te,d("div",ne,[e(S,null,{default:l(()=>[e(s,{cols:"12",sm:"6",md:"6"},{default:l(()=>[e(c,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=k=>u.value=k),column:""},{default:l(()=>[e(a,{label:"red",color:"red",value:"red"}),e(a,{label:"red darken-3",color:"red darken-3",value:"red darken-3"}),e(a,{label:"indigo",color:"indigo",value:"indigo"}),e(a,{label:"indigo darken-3",color:"indigo darken-3",value:"indigo darken-3"}),e(a,{label:"orange",color:"orange",value:"orange"}),e(a,{label:"orange darken-3",color:"orange darken-3",value:"orange darken-3"})]),_:1},8,["modelValue"])]),_:1}),e(s,{cols:"12",sm:"6",md:"6"},{default:l(()=>[e(c,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=k=>o.value=k),column:""},{default:l(()=>[e(a,{label:"primary",color:"primary",value:"primary"}),e(a,{label:"secondary",color:"secondary",value:"secondary"}),e(a,{label:"success",color:"success",value:"success"}),e(a,{label:"info",color:"info",value:"info"}),e(a,{label:"warning",color:"warning",value:"warning"}),e(a,{label:"error",color:"error",value:"error"})]),_:1},8,["modelValue"])]),_:1})]),_:1})])])],2112)}}}),se=v(ae,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsRadioColors.vue"]]),ue={class:"mt-4"},de=C({__name:"SelectionControlsSwitchBoolean",setup(V){const o=_(!0),u=_(!1);return(t,n)=>{const a=i("v-switch");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsSwitchBoolean "),r(" ----------------------------------------------------------------------------- "),d("div",null,[d("div",ue,[e(a,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=c=>o.value=c),label:`Switch 1: ${o.value.toString()}`},null,8,["modelValue","label"]),e(a,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=c=>u.value=c),label:`Switch 2: ${u.value.toString()}`},null,8,["modelValue","label"])])])],2112)}}}),re=v(de,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsSwitchBoolean.vue"]]),ie={class:"mt-4"},ce=C({__name:"SelectionControlsSwitchArray",setup(V){const o=_(["john"]);return(u,t)=>{const n=i("v-switch");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsSwitchArray "),r(" ----------------------------------------------------------------------------- "),d("div",null,[d("div",ie,[d("p",null,w(o.value),1),e(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value=a),label:"John",value:"John"},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=a=>o.value=a),label:"Jacob",value:"Jacob"},null,8,["modelValue"])])])],2112)}}}),me=v(ce,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsSwitchArray.vue"]]),_e={},ve={class:"mt-4"};function fe(V,o){const u=i("v-col"),t=i("v-row"),n=i("v-switch");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsSwitchStates "),r(" ----------------------------------------------------------------------------- "),d("div",null,[d("div",ve,[e(t,{class:"dark--text"},{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[m("on")]),_:1}),e(u,{cols:"6"},{default:l(()=>[m("off")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[e(n,{value:"","input-value":"true"})]),_:1}),e(u,{cols:"6"},{default:l(()=>[e(n)]),_:1})]),_:1}),e(t,{class:"dark--text"},{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[m("on disabled")]),_:1}),e(u,{cols:"6"},{default:l(()=>[m("off disabled")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[e(n,{value:"","input-value":"true",disabled:""})]),_:1}),e(u,{cols:"6"},{default:l(()=>[e(n,{disabled:""})]),_:1})]),_:1}),e(t,{class:"dark--text"},{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[m("on loading")]),_:1}),e(u,{cols:"6"},{default:l(()=>[m("off loading")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(u,{cols:"6"},{default:l(()=>[e(n,{loading:"",color:"error","model-value":!0,label:"on loading"})]),_:1}),e(u,{cols:"6"},{default:l(()=>[e(n,{"model-value":!1,color:"error",loading:"",label:"off loading"})]),_:1})]),_:1})])])],2112)}const pe=v(_e,[["render",fe],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsSwitchStates.vue"]]),be=d("p",{class:"text-subtitle-1 text-grey-darken-1"},[m(" Switches can be colored by using any of the builtin colors and contextual names using the "),d("code",null,"color"),m(" prop. ")],-1),Ve={class:"mt-4"},ge=C({__name:"SelectionControlsSwitchColors",setup(V){const o=_(["red","indigo","orange","primary","secondary","success","info","warning","error","red darken-3","indigo darken-3","orange darken-3"]);return(u,t)=>{const n=i("v-switch"),a=i("v-col"),c=i("v-row");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsSwitchColors "),r(" ----------------------------------------------------------------------------- "),d("div",null,[be,d("div",Ve,[e(c,null,{default:l(()=>[e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),label:"red",color:"red",value:"red","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=s=>o.value=s),label:"red darken-3",color:"red darken-3",value:"red darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=s=>o.value=s),label:"indigo",color:"indigo",value:"indigo","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[3]||(t[3]=s=>o.value=s),label:"indigo darken-3",color:"indigo darken-3",value:"indigo darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=s=>o.value=s),label:"orange",color:"orange",value:"orange","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[5]||(t[5]=s=>o.value=s),label:"orange darken-3",color:"orange darken-3",value:"orange darken-3","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{class:"mt-12"},{default:l(()=>[e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[6]||(t[6]=s=>o.value=s),label:"primary",color:"primary",value:"primary","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[7]||(t[7]=s=>o.value=s),label:"secondary",color:"secondary",value:"secondary","hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[8]||(t[8]=s=>o.value=s),label:"success",color:"success",value:"success","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[9]||(t[9]=s=>o.value=s),label:"info",color:"info",value:"info","hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":t[10]||(t[10]=s=>o.value=s),label:"warning",color:"warning",value:"warning","hide-details":""},null,8,["modelValue"]),e(n,{modelValue:o.value,"onUpdate:modelValue":t[11]||(t[11]=s=>o.value=s),label:"error",color:"error",value:"error","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])])],2112)}}}),Ce=v(ge,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsSwitchColors.vue"]]),Se=d("p",{class:"text-subtitle-1 text-grey-darken-1"},[m(" You can make switch render without elevation of thumb using "),d("code",null,"flat"),m(" property. ")],-1),he={class:"mt-5"},ke=C({__name:"SelectionControlsSwitchFlat",setup(V){const o=_(!0),u=_(!1);return(t,n)=>{const a=i("v-switch"),c=i("v-sheet");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsSwitchFlat "),r(" ----------------------------------------------------------------------------- "),d("div",null,[Se,d("div",he,[e(c,{class:"pa-2"},{default:l(()=>[e(a,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=s=>o.value=s),flat:"",label:`Switch 1: ${o.value.toString()}`},null,8,["modelValue","label"]),e(a,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=s=>u.value=s),flat:"",label:`Switch 2: ${u.value.toString()}`},null,8,["modelValue","label"])]),_:1})])])],2112)}}}),we=v(ke,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsSwitchFlat.vue"]]),xe=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can make switch render in inset mode. ",-1),ye={class:"mt-4"},$e=C({__name:"SelectionControlsSwitchInset",setup(V){const o=_(!0),u=_(!1);return(t,n)=>{const a=i("v-switch"),c=i("v-sheet");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsSwitchInset "),r(" ----------------------------------------------------------------------------- "),d("div",null,[xe,d("div",ye,[e(c,{class:"pa-5"},{default:l(()=>[e(a,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=s=>o.value=s),inset:"",label:`Switch 1: ${o.value.toString()}`},null,8,["modelValue","label"]),e(a,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=s=>u.value=s),inset:"",label:`Switch 2: ${u.value.toString()}`},null,8,["modelValue","label"])]),_:1})])])],2112)}}}),Ue=v($e,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsSwitchInset.vue"]]),De=d("p",{class:"text-subtitle-1 text-grey-darken-1"},[m(" Selection controls' labels can be defined in "),d("code",null,"label"),m(" slot - that will allow to use HTML content ")],-1),Te={class:"mt-4"},Re=d("div",null,[m("Your favourite "),d("strong",null,"search engine")],-1),je=d("div",null,[m(" Of course it's "),d("strong",{class:"success--text"},"Google")],-1),Be=d("div",null,[m(" Definitely "),d("strong",{class:"primary--text"},"Duckduckgo")],-1),Fe=C({__name:"SelectionControlsLblSlot",setup(V){const o=_(!1),u=_(!1),t=_("Duckduckgo");return(n,a)=>{const c=i("v-tooltip"),s=i("v-checkbox"),S=i("v-radio"),k=i("v-radio-group"),x=i("v-progress-circular"),y=i("v-switch");return f(),p(b,null,[r(" ----------------------------------------------------------------------------- "),r(" SelectionControlsLblSlot "),r(" ----------------------------------------------------------------------------- "),d("div",null,[De,d("div",Te,[e(s,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=h=>o.value=h)},{label:l(()=>[d("div",null,[m(" I agree that "),e(c,{bottom:""},{activator:l(({props:h})=>[d("a",$({target:"_blank",href:"http://vuetifyjs.com",onClick:a[0]||(a[0]=U(()=>{},["stop"]))},h)," Vuetify ",16)]),default:l(()=>[m(" Opens in new window ")]),_:1}),m(" is awesome ")])]),_:1},8,["modelValue"]),e(k,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=h=>t.value=h)},{label:l(()=>[Re]),default:l(()=>[e(S,{value:"Google"},{label:l(()=>[je]),_:1}),e(S,{value:"Duckduckgo"},{label:l(()=>[Be]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=h=>u.value=h)},{label:l(()=>[m(" Turn on the progress: "),e(x,{indeterminate:u.value,value:0,size:"24",class:"ml-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"])])])],2112)}}}),Ie=v(Fe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selection-controls/SelectionControlsLblSlot.vue"]]),Ae=C({__name:"FESelectionControls",setup(V){const o=_({title:"Selection Control"}),u=_([{text:"Form Elements",disabled:!1,to:"#"},{text:"Selection Control",disabled:!0}]);return(t,n)=>{const a=i("v-col"),c=i("v-row");return f(),p(b,null,[e(D,{title:o.value.title,breadcrumbs:u.value},null,8,["title","breadcrumbs"]),e(c,null,{default:l(()=>[e(a,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(g,{heading:"Selection Controls - Checkboxes - Boolean"},{default:l(()=>[e(j)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(g,{heading:"Selection Controls - Checkboxes - Array"},{default:l(()=>[e(A)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Checkboxes - States"},{default:l(()=>[e(E)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Checkboxes - Colors"},{default:l(()=>[e(G)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Checkboxes - Inline with a textfield"},{default:l(()=>[e(P)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Radios - Default"},{default:l(()=>[e(W)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Radios - Direction"},{default:l(()=>[e(oe)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Radios - Colors"},{default:l(()=>[e(se)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Switches - Boolean"},{default:l(()=>[e(re)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Switches - Array"},{default:l(()=>[e(me)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Switches - States"},{default:l(()=>[e(pe)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Switches - Colors"},{default:l(()=>[e(Ce)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(g,{heading:"Selection Controls - Switches - Flat"},{default:l(()=>[e(we)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(g,{heading:"Selection Controls - Switches - inset"},{default:l(()=>[e(Ue)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:l(()=>[e(g,{heading:"Selection Controls - Label slot"},{default:l(()=>[e(Ie)]),_:1})]),_:1})]),_:1})],64)}}}),Ee=v(Ae,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-elements/FESelectionControls.vue"]]);export{Ee as default};
