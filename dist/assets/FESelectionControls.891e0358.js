import{_ as y}from"./BaseBreadcrumb.da36eaea.js";import{_ as b}from"./BaseCard.ef377dab.js";import{m as g,r as c,o as f,n as p,f as n,a as e,k as m,y as x,w as l,b as d,h as r,e as _,j as S,bm as v,bl as h,b9 as i,K as C,aN as $,B as U,J as R,aP as J,F as D}from"./index.697a154f.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const B={class:"mt-4"},F=g({__name:"SelectionControlsChkBoolean",setup(V){const a=c(!0),u=c(!1);return(t,o)=>(f(),p("div",null,[n("div",B,[e(m,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),label:`Checkbox 1: ${a.value.toString()}`},null,8,["modelValue","label"]),e(m,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=s=>u.value=s),label:`Checkbox 2: ${u.value.toString()}`},null,8,["modelValue","label"])])]))}}),T={class:"d-flex align-items-center"},I={class:"ml-auto"},O=g({__name:"SelectionControlsChkArray",setup(V){const a=c(["John"]);return(u,t)=>(f(),p("div",null,[n("div",null,[n("div",T,[n("div",null,[e(m,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),label:"John",value:"John"},null,8,["modelValue"]),e(m,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),n("div",I,[n("p",null,x(a.value),1)])])])]))}}),A={},N={class:"mt-4"};function j(V,a){return f(),p("div",null,[n("div",N,[e(_,{class:"light--text"},{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[r("on")]),_:1}),e(d,{cols:"4"},{default:l(()=>[r("off")]),_:1}),e(d,{cols:"4"},{default:l(()=>[r("indeterminate")]),_:1})]),_:1}),e(_,null,{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(m,{"input-value":"true",value:""})]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(m,{value:""})]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(m,{value:"",indeterminate:""})]),_:1})]),_:1}),e(_,{class:"light--text"},{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[r("on disabled")]),_:1}),e(d,{cols:"4"},{default:l(()=>[r("off disabled")]),_:1})]),_:1}),e(_,null,{default:l(()=>[e(d,{cols:"4"},{default:l(()=>[e(m,{"input-value":"true",value:"",disabled:""})]),_:1}),e(d,{cols:"4"},{default:l(()=>[e(m,{value:"",disabled:""})]),_:1})]),_:1})])])}var E=w(A,[["render",j]]);const G=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[r(" Checkboxes can be colored by using any of the builtin colors and contextual names using the "),n("code",null,"color"),r(" prop. ")],-1),L={class:"mt-4"},M=g({__name:"SelectionControlsChkColors",setup(V){const a=c([["red","indigo","orange","primary","secondary","success","info","warning","error","red darken-3","indigo darken-3","orange darken-3"]]);return(u,t)=>(f(),p("div",null,[G,n("div",L,[e(_,null,{default:l(()=>[e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(m,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),label:"red",color:"red",value:"red","hide-details":""},null,8,["modelValue"]),e(m,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),label:"red darken-3",color:"red darken-3",value:"red darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(m,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value=o),label:"indigo",color:"indigo",value:"indigo","hide-details":""},null,8,["modelValue"]),e(m,{modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=o=>a.value=o),label:"indigo darken-3",color:"indigo darken-3",value:"indigo darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(m,{modelValue:a.value,"onUpdate:modelValue":t[4]||(t[4]=o=>a.value=o),label:"orange",color:"orange",value:"orange","hide-details":""},null,8,["modelValue"]),e(m,{modelValue:a.value,"onUpdate:modelValue":t[5]||(t[5]=o=>a.value=o),label:"orange darken-3",color:"orange darken-3",value:"orange darken-3","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{class:"mt-12"},{default:l(()=>[e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(m,{modelValue:a.value,"onUpdate:modelValue":t[6]||(t[6]=o=>a.value=o),label:"primary",color:"primary",value:"primary","hide-details":""},null,8,["modelValue"]),e(m,{modelValue:a.value,"onUpdate:modelValue":t[7]||(t[7]=o=>a.value=o),label:"secondary",color:"secondary",value:"secondary","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(m,{modelValue:a.value,"onUpdate:modelValue":t[8]||(t[8]=o=>a.value=o),label:"success",color:"success",value:"success","hide-details":""},null,8,["modelValue"]),e(m,{modelValue:a.value,"onUpdate:modelValue":t[9]||(t[9]=o=>a.value=o),label:"info",color:"info",value:"info","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(m,{modelValue:a.value,"onUpdate:modelValue":t[10]||(t[10]=o=>a.value=o),label:"warning",color:"warning",value:"warning","hide-details":""},null,8,["modelValue"]),e(m,{modelValue:a.value,"onUpdate:modelValue":t[11]||(t[11]=o=>a.value=o),label:"error",color:"error",value:"error","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])]))}}),P={class:"mt-4"},Y=g({__name:"SelectionControlsChkInlinetextfield",setup(V){const a=c(!0),u=c(!1);return(t,o)=>(f(),p("div",null,[n("div",P,[e(_,{align:"center"},{default:l(()=>[e(m,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),"hide-details":"",class:"shrink mr-2 mt-0"},null,8,["modelValue"]),e(S,{label:"Include files"})]),_:1}),e(_,{align:"center"},{default:l(()=>[e(m,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=s=>u.value=s),"hide-details":"",class:"shrink mr-2 mt-0"},null,8,["modelValue"]),e(S,{disabled:!u.value,label:"I only work if you check the box"},null,8,["disabled"])]),_:1})])]))}}),z=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[r(" Radio-groups are by default mandatory. This can be changed with the "),n("code",null,"mandatory"),r(" prop. ")],-1),H={class:"mt-4"},K=g({__name:"SelectionControlsRadioDefault",setup(V){const a=c("radio-1");return(u,t)=>(f(),p("div",null,[z,n("div",H,[n("p",null,x(a.value||"null"),1),e(h,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),mandatory:!1},{default:l(()=>[e(v,{label:"Radio 1",value:"radio-1"}),e(v,{label:"Radio 2",value:"radio-2"})]),_:1},8,["modelValue"])])]))}}),q=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column. ",-1),Q={class:"mt-4"},W=n("hr",null,null,-1),X=g({__name:"SelectionControlsRadioDirection",setup(V){const a=c(null),u=c(null);return(t,o)=>(f(),p("div",null,[q,n("div",Q,[e(h,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),column:""},{default:l(()=>[e(v,{label:"Option 1",value:"radio-1"}),e(v,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),W,e(h,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=s=>u.value=s),row:""},{default:l(()=>[e(v,{label:"Option 1",value:"radio-1"}),e(v,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])])]))}}),Z=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[r(" Radios can be colored by using any of the builtin colors and contextual names using the "),n("code",null,"color"),r(" prop. ")],-1),ee={class:"mt-4"},le=g({__name:"SelectionControlsRadioColors",setup(V){const a=c("primary"),u=c("red");return(t,o)=>(f(),p("div",null,[Z,n("div",ee,[e(_,null,{default:l(()=>[e(d,{cols:"12",sm:"6",md:"6"},{default:l(()=>[e(h,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=s=>u.value=s),column:""},{default:l(()=>[e(v,{label:"red",color:"red",value:"red"}),e(v,{label:"red darken-3",color:"red darken-3",value:"red darken-3"}),e(v,{label:"indigo",color:"indigo",value:"indigo"}),e(v,{label:"indigo darken-3",color:"indigo darken-3",value:"indigo darken-3"}),e(v,{label:"orange",color:"orange",value:"orange"}),e(v,{label:"orange darken-3",color:"orange darken-3",value:"orange darken-3"})]),_:1},8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6",md:"6"},{default:l(()=>[e(h,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=s=>a.value=s),column:""},{default:l(()=>[e(v,{label:"primary",color:"primary",value:"primary"}),e(v,{label:"secondary",color:"secondary",value:"secondary"}),e(v,{label:"success",color:"success",value:"success"}),e(v,{label:"info",color:"info",value:"info"}),e(v,{label:"warning",color:"warning",value:"warning"}),e(v,{label:"error",color:"error",value:"error"})]),_:1},8,["modelValue"])]),_:1})]),_:1})])]))}}),ae={class:"mt-4"},oe=g({__name:"SelectionControlsSwitchBoolean",setup(V){const a=c(!0),u=c(!1);return(t,o)=>(f(),p("div",null,[n("div",ae,[e(i,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),label:`Switch 1: ${a.value.toString()}`},null,8,["modelValue","label"]),e(i,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=s=>u.value=s),label:`Switch 2: ${u.value.toString()}`},null,8,["modelValue","label"])])]))}}),te={class:"mt-4"},de=g({__name:"SelectionControlsSwitchArray",setup(V){const a=c(["john"]);return(u,t)=>(f(),p("div",null,[n("div",te,[n("p",null,x(a.value),1),e(i,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),label:"John",value:"John"},null,8,["modelValue"]),e(i,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),label:"Jacob",value:"Jacob"},null,8,["modelValue"])])]))}}),ne={},ue={class:"mt-4"};function se(V,a){return f(),p("div",null,[n("div",ue,[e(_,{class:"dark--text"},{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[r("on")]),_:1}),e(d,{cols:"6"},{default:l(()=>[r("off")]),_:1})]),_:1}),e(_,null,{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[e(i,{value:"","input-value":"true"})]),_:1}),e(d,{cols:"6"},{default:l(()=>[e(i)]),_:1})]),_:1}),e(_,{class:"dark--text"},{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[r("on disabled")]),_:1}),e(d,{cols:"6"},{default:l(()=>[r("off disabled")]),_:1})]),_:1}),e(_,null,{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[e(i,{value:"","input-value":"true",disabled:""})]),_:1}),e(d,{cols:"6"},{default:l(()=>[e(i,{disabled:""})]),_:1})]),_:1}),e(_,{class:"dark--text"},{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[r("on loading")]),_:1}),e(d,{cols:"6"},{default:l(()=>[r("off loading")]),_:1})]),_:1}),e(_,null,{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[e(i,{loading:"",color:"error","model-value":!0,label:"on loading"})]),_:1}),e(d,{cols:"6"},{default:l(()=>[e(i,{"model-value":!1,color:"error",loading:"",label:"off loading"})]),_:1})]),_:1})])])}var re=w(ne,[["render",se]]);const ie=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[r(" Switches can be colored by using any of the builtin colors and contextual names using the "),n("code",null,"color"),r(" prop. ")],-1),me={class:"mt-4"},ce=g({__name:"SelectionControlsSwitchColors",setup(V){const a=c(["red","indigo","orange","primary","secondary","success","info","warning","error","red darken-3","indigo darken-3","orange darken-3"]);return(u,t)=>(f(),p("div",null,[ie,n("div",me,[e(_,null,{default:l(()=>[e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),label:"red",color:"red",value:"red","hide-details":""},null,8,["modelValue"]),e(i,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),label:"red darken-3",color:"red darken-3",value:"red darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value=o),label:"indigo",color:"indigo",value:"indigo","hide-details":""},null,8,["modelValue"]),e(i,{modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=o=>a.value=o),label:"indigo darken-3",color:"indigo darken-3",value:"indigo darken-3","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":t[4]||(t[4]=o=>a.value=o),label:"orange",color:"orange",value:"orange","hide-details":""},null,8,["modelValue"]),e(i,{modelValue:a.value,"onUpdate:modelValue":t[5]||(t[5]=o=>a.value=o),label:"orange darken-3",color:"orange darken-3",value:"orange darken-3","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{class:"mt-12"},{default:l(()=>[e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":t[6]||(t[6]=o=>a.value=o),label:"primary",color:"primary",value:"primary","hide-details":""},null,8,["modelValue"]),e(i,{modelValue:a.value,"onUpdate:modelValue":t[7]||(t[7]=o=>a.value=o),label:"secondary",color:"secondary",value:"secondary","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":t[8]||(t[8]=o=>a.value=o),label:"success",color:"success",value:"success","hide-details":""},null,8,["modelValue"]),e(i,{modelValue:a.value,"onUpdate:modelValue":t[9]||(t[9]=o=>a.value=o),label:"info",color:"info",value:"info","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":t[10]||(t[10]=o=>a.value=o),label:"warning",color:"warning",value:"warning","hide-details":""},null,8,["modelValue"]),e(i,{modelValue:a.value,"onUpdate:modelValue":t[11]||(t[11]=o=>a.value=o),label:"error",color:"error",value:"error","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])]))}}),ve=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[r(" You can make switch render without elevation of thumb using "),n("code",null,"flat"),r(" property. ")],-1),_e={class:"mt-5"},fe=g({__name:"SelectionControlsSwitchFlat",setup(V){const a=c(!0),u=c(!1);return(t,o)=>(f(),p("div",null,[ve,n("div",_e,[e(C,{class:"pa-2"},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),flat:"",label:`Switch 1: ${a.value.toString()}`},null,8,["modelValue","label"]),e(i,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=s=>u.value=s),flat:"",label:`Switch 2: ${u.value.toString()}`},null,8,["modelValue","label"])]),_:1})])]))}}),pe=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can make switch render in inset mode. ",-1),Ve={class:"mt-4"},be=g({__name:"SelectionControlsSwitchInset",setup(V){const a=c(!0),u=c(!1);return(t,o)=>(f(),p("div",null,[pe,n("div",Ve,[e(C,{class:"pa-5"},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),inset:"",label:`Switch 1: ${a.value.toString()}`},null,8,["modelValue","label"]),e(i,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=s=>u.value=s),inset:"",label:`Switch 2: ${u.value.toString()}`},null,8,["modelValue","label"])]),_:1})])]))}}),ge=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[r(" Selection controls' labels can be defined in "),n("code",null,"label"),r(" slot - that will allow to use HTML content ")],-1),ke={class:"mt-4"},he=n("div",null,[r("Your favourite "),n("strong",null,"search engine")],-1),xe=n("div",null,[r(" Of course it's "),n("strong",{class:"success--text"},"Google")],-1),Se=n("div",null,[r(" Definitely "),n("strong",{class:"primary--text"},"Duckduckgo")],-1),Ce=g({__name:"SelectionControlsLblSlot",setup(V){const a=c(!1),u=c(!1),t=c("Duckduckgo");return(o,s)=>(f(),p("div",null,[ge,n("div",ke,[e(m,{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=k=>a.value=k)},{label:l(()=>[n("div",null,[r(" I agree that "),e($,{bottom:""},{activator:l(({props:k})=>[n("a",U({target:"_blank",href:"http://vuetifyjs.com",onClick:s[0]||(s[0]=R(()=>{},["stop"]))},k)," Vuetify ",16)]),default:l(()=>[r(" Opens in new window ")]),_:1}),r(" is awesome ")])]),_:1},8,["modelValue"]),e(h,{modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=k=>t.value=k)},{label:l(()=>[he]),default:l(()=>[e(v,{value:"Google"},{label:l(()=>[xe]),_:1}),e(v,{value:"Duckduckgo"},{label:l(()=>[Se]),_:1})]),_:1},8,["modelValue"]),e(i,{modelValue:u.value,"onUpdate:modelValue":s[3]||(s[3]=k=>u.value=k)},{label:l(()=>[r(" Turn on the progress: "),e(J,{indeterminate:u.value,value:0,size:"24",class:"ml-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"])])]))}}),Re=g({__name:"FESelectionControls",setup(V){const a=c({title:"Selection Control"}),u=c([{text:"Form Elements",disabled:!1,to:"#"},{text:"Selection Control",disabled:!0}]);return(t,o)=>(f(),p(D,null,[e(y,{title:a.value.title,breadcrumbs:u.value},null,8,["title","breadcrumbs"]),e(_,null,{default:l(()=>[e(d,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(b,{heading:"Selection Controls - Checkboxes - Boolean"},{default:l(()=>[e(F)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(b,{heading:"Selection Controls - Checkboxes - Array"},{default:l(()=>[e(O)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Checkboxes - States"},{default:l(()=>[e(E)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Checkboxes - Colors"},{default:l(()=>[e(M)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Checkboxes - Inline with a textfield"},{default:l(()=>[e(Y)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Radios - Default"},{default:l(()=>[e(K)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Radios - Direction"},{default:l(()=>[e(X)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Radios - Colors"},{default:l(()=>[e(le)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Switches - Boolean"},{default:l(()=>[e(oe)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Switches - Array"},{default:l(()=>[e(de)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Switches - States"},{default:l(()=>[e(re)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Switches - Colors"},{default:l(()=>[e(ce)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(b,{heading:"Selection Controls - Switches - Flat"},{default:l(()=>[e(fe)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"6"},{default:l(()=>[e(b,{heading:"Selection Controls - Switches - inset"},{default:l(()=>[e(be)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:l(()=>[e(b,{heading:"Selection Controls - Label slot"},{default:l(()=>[e(Ce)]),_:1})]),_:1})]),_:1})],64))}});export{Re as default};
