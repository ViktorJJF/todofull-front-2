import{_ as r,r as u,o as a,f as p,j as n,b as t,a as e,F as d,d as s,e as b,g as F,w as l,t as g,c as y}from"./index-19db02fc.js";import{B as I}from"./BaseBreadcrumb-f8111112.js";import{B as m}from"./BaseCard-8b6199d1.js";const $={},w=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" The "),t("code",null,"v-file-input"),s(" can contain multiple files at the same time when using the multiple prop. ")],-1),C={class:"mt-4"};function k(_,i){const o=u("v-file-input");return a(),p(d,null,[n(" ----------------------------------------------------------------------------- "),n(" FileInputs Multiple "),n(" ----------------------------------------------------------------------------- "),t("div",null,[w,t("div",C,[e(o,{multiple:"",label:"File input"})])])],2112)}const S=r($,[["render",k],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/file-inputs/FileInputsMultiple.vue"]]),T={},D=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[t("code",null,"v-file-input"),s(" component can accept only specific media formats/file types if you want. For more information, checkout the documentation on the accept attribute. ")],-1),z={class:"mt-4"};function V(_,i){const o=u("v-file-input");return a(),p(d,null,[n(" ----------------------------------------------------------------------------- "),n(" FileInputs Accept Formats "),n(" ----------------------------------------------------------------------------- "),t("div",null,[D,t("div",z,[e(o,{accept:"image/*",label:"File input"})])])],2112)}const j=r(T,[["render",V],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/file-inputs/FileInputsAcceptFormats.vue"]]),B={},A=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" TA selected file can be displayed as a chip. When using the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"chips"),s(" and "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"multiple"),s(" props, each chip will be displayed (as opposed to the file count). ")],-1),M={class:"mt-4"};function E(_,i){const o=u("v-file-input");return a(),p(d,null,[n(" ----------------------------------------------------------------------------- "),n(" FileInputs Chips "),n(" ----------------------------------------------------------------------------- "),t("div",null,[A,t("div",M,[t("div",null,[e(o,{chips:"",multiple:"",label:"File input w/ chips"}),e(o,{"small-chips":"",multiple:"",label:"File input w/ small chips"})])])])],2112)}const N=r(B,[["render",E],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/file-inputs/FileInputsChips.vue"]]),U={},W=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" The displayed size of the selected file(s) can be configured with the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"show-size"),s(" property. Display sizes can be either 1024 (the default used when providing true) or 1000. ")],-1),P={class:"mt-4"};function Y(_,i){const o=u("v-file-input");return a(),p(d,null,[n(" ----------------------------------------------------------------------------- "),n(" FileInputs Size "),n(" ----------------------------------------------------------------------------- "),t("div",null,[W,t("div",P,[e(o,{"show-size":"",label:"File input"})])])],2112)}const q=r(U,[["render",Y],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/file-inputs/FileInputsSize.vue"]]),G={},H=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" When using the "),t("span",{class:"font-weight-bold"},"show-size"),s(" property along with "),t("span",{class:"font-weight-bold"},"counter"),s(", the total number of files and size will be displayed under the input. ")],-1),J={class:"mt-4"};function K(_,i){const o=u("v-file-input");return a(),p(d,null,[n(" ----------------------------------------------------------------------------- "),n(" FileInputs Counter "),n(" ----------------------------------------------------------------------------- "),t("div",null,[H,t("div",J,[e(o,{"show-size":"",counter:"",multiple:"",label:"File input"})])])],2112)}const L=r(G,[["render",K],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/file-inputs/FileInputsCounter.vue"]]),O={},Q=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" The "),t("code",null,"v-file-input"),s(" has a default prepended icon that can be set on the component or adjusted globally. More information on changing global components can be found on the customizing icons page. ")],-1),R={class:"mt-4"};function X(_,i){const o=u("v-file-input");return a(),p(d,null,[n(" ----------------------------------------------------------------------------- "),n(" FileInputs Custom Icon "),n(" ----------------------------------------------------------------------------- "),t("div",null,[Q,t("div",R,[e(o,{label:"File input",filled:"","prepend-icon":"mdi-camera"})])])],2112)}const Z=r(O,[["render",X],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/file-inputs/FileInputsCustomIcon.vue"]]),ee={},te=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" You can reduces the file input height with "),t("code",null,"dense"),s(" prop. ")],-1),ne={class:"mt-4"};function le(_,i){const o=u("v-file-input");return a(),p(d,null,[n(" ----------------------------------------------------------------------------- "),n(" FileInputs Dense "),n(" ----------------------------------------------------------------------------- "),t("div",null,[te,t("div",ne,[e(o,{label:"File input",outlined:"",dense:""})])])],2112)}const oe=r(ee,[["render",le],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/file-inputs/FileInputsDense.vue"]]),se=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" Using the "),t("code",null,"selection"),s(" slot, you can customize the appearance of your input selections. This is typically done with chips, however any component or markup can be used. ")],-1),ie={class:"mt-4"},ce=b({__name:"FileInputsSelectionSlot",setup(_){const i=F([]);return(o,h)=>{const v=u("v-chip"),c=u("v-file-input");return a(),p(d,null,[n(" ----------------------------------------------------------------------------- "),n(" FileInputs Selection Slot "),n(" ----------------------------------------------------------------------------- "),t("div",null,[se,t("div",ie,[e(c,{modelValue:i.value,"onUpdate:modelValue":h[0]||(h[0]=f=>i.value=f),placeholder:"Upload your documents",label:"File input",multiple:"","prepend-icon":"mdi-paperclip"},{selection:l(({text:f})=>[e(v,{small:"",label:"",color:"primary"},{default:l(()=>[s(g(f),1)]),_:2},1024)]),_:1},8,["modelValue"])])])],2112)}}}),ue=r(ce,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/file-inputs/FileInputsSelectionSlot.vue"]]),ae=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" Similar to other inputs, you can use the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"rules"),s(" prop to can create your own custom validation parameters. ")],-1),pe={class:"mt-4"},re=b({__name:"FileInputsValidation",setup(_){const i=F([o=>!o||o.size<2e6||"Avatar size should be less than 2 MB!"]);return(o,h)=>{const v=u("v-file-input");return a(),p(d,null,[n(" ----------------------------------------------------------------------------- "),n(" FileInputs Validation "),n(" ----------------------------------------------------------------------------- "),t("div",null,[ae,t("div",pe,[e(v,{rules:i.value,accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"Avatar"},null,8,["rules"])])])],2112)}}}),de=r(re,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/file-inputs/FileInputsValidation.vue"]]),_e=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," The flexibility of the selection slot allows you accomodate complex use-cases. In this example we show the first 2 selections as chips while adding a number indicator for the remaining amount. ",-1),fe={class:"mt-4"},me={key:1,class:"overline grey--text text--darken-3 mx-2"},he=b({__name:"FileInputsComplexSlots",setup(_){const i=F([]);return(o,h)=>{const v=u("v-chip"),c=u("v-file-input");return a(),p(d,null,[n(" ----------------------------------------------------------------------------- "),n(" FileInputs Complex Slots "),n(" ----------------------------------------------------------------------------- "),t("div",null,[_e,t("div",fe,[e(c,{modelValue:i.value,"onUpdate:modelValue":h[0]||(h[0]=f=>i.value=f),color:"deep-purple accent-4",counter:"",label:"File input",multiple:"",placeholder:"Select your files","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},{selection:l(({index:f,text:x})=>[f<2?(a(),y(v,{key:0,color:"deep-purple accent-4",dark:"",label:"",small:""},{default:l(()=>[s(g(x),1)]),_:2},1024)):f===2?(a(),p("span",me," +"+g(i.value.length-2)+" File(s) ",1)):n("v-if",!0)]),_:1},8,["modelValue"])])])],2112)}}}),ve=r(he,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/file-inputs/FileInputsComplexSlots.vue"]]),Fe=b({__name:"FEFileInputs",setup(_){const i=F({title:"File Inputs"}),o=F([{text:"Form Elements",disabled:!1,to:"#"},{text:"File Inputs",disabled:!0}]);return(h,v)=>{const c=u("v-col"),f=u("v-row");return a(),p(d,null,[e(I,{title:i.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),e(f,null,{default:l(()=>[e(c,{cols:"12",sm:"12"},{default:l(()=>[e(m,{heading:"File inputs - Multiple"},{default:l(()=>[e(S)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12"},{default:l(()=>[e(m,{heading:"File inputs - Accept formats"},{default:l(()=>[e(j)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12"},{default:l(()=>[e(m,{heading:"File inputs - With chips"},{default:l(()=>[e(N)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12"},{default:l(()=>[e(m,{heading:"File inputs - Size displaying"},{default:l(()=>[e(q)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12"},{default:l(()=>[e(m,{heading:"File inputs - Counter"},{default:l(()=>[e(L)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12"},{default:l(()=>[e(m,{heading:"File inputs - Custom icons"},{default:l(()=>[e(Z)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12"},{default:l(()=>[e(m,{heading:"File inputs - Dense"},{default:l(()=>[e(oe)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12"},{default:l(()=>[e(m,{heading:"File inputs - Selection slot"},{default:l(()=>[e(ue)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12"},{default:l(()=>[e(m,{heading:"File inputs - Validation"},{default:l(()=>[e(de)]),_:1})]),_:1}),e(c,{cols:"12",sm:"12"},{default:l(()=>[e(m,{heading:"File inputs - Complex selection slots"},{default:l(()=>[e(ve)]),_:1})]),_:1})]),_:1})],64)}}}),ye=r(Fe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-elements/FEFileInputs.vue"]]);export{ye as default};
