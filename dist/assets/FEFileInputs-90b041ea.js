import{_ as x}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-aaf80cdf.js";import{_}from"./BaseCard.vue_vue_type_script_setup_true_lang-10adf2a5.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{r as c,o as a,f as u,b as t,a as e,d as l,e as v,g as f,w as n,t as g,c as y,p as F,F as $}from"./index-cb5886d6.js";const w={},k=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" The "),t("code",null,"v-file-input"),l(" can contain multiple files at the same time when using the multiple prop. ")],-1),I={class:"mt-4"};function z(p,i){const s=c("v-file-input");return a(),u("div",null,[k,t("div",I,[e(s,{multiple:"",label:"File input"})])])}const V=m(w,[["render",z]]),C={},S=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[t("code",null,"v-file-input"),l(" component can accept only specific media formats/file types if you want. For more information, checkout the documentation on the accept attribute. ")],-1),T={class:"mt-4"};function A(p,i){const s=c("v-file-input");return a(),u("div",null,[S,t("div",T,[e(s,{accept:"image/*",label:"File input"})])])}const B=m(C,[["render",A]]),D={},M=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" TA selected file can be displayed as a chip. When using the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"chips"),l(" and "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"multiple"),l(" props, each chip will be displayed (as opposed to the file count). ")],-1),N={class:"mt-4"};function U(p,i){const s=c("v-file-input");return a(),u("div",null,[M,t("div",N,[t("div",null,[e(s,{chips:"",multiple:"",label:"File input w/ chips"}),e(s,{"small-chips":"",multiple:"",label:"File input w/ small chips"})])])])}const E=m(D,[["render",U]]),W={},j=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" The displayed size of the selected file(s) can be configured with the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"show-size"),l(" property. Display sizes can be either 1024 (the default used when providing true) or 1000. ")],-1),P={class:"mt-4"};function Y(p,i){const s=c("v-file-input");return a(),u("div",null,[j,t("div",P,[e(s,{"show-size":"",label:"File input"})])])}const q=m(W,[["render",Y]]),G={},H=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" When using the "),t("span",{class:"font-weight-bold"},"show-size"),l(" property along with "),t("span",{class:"font-weight-bold"},"counter"),l(", the total number of files and size will be displayed under the input. ")],-1),J={class:"mt-4"};function K(p,i){const s=c("v-file-input");return a(),u("div",null,[H,t("div",J,[e(s,{"show-size":"",counter:"",multiple:"",label:"File input"})])])}const L=m(G,[["render",K]]),O={},Q=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" The "),t("code",null,"v-file-input"),l(" has a default prepended icon that can be set on the component or adjusted globally. More information on changing global components can be found on the customizing icons page. ")],-1),R={class:"mt-4"};function X(p,i){const s=c("v-file-input");return a(),u("div",null,[Q,t("div",R,[e(s,{label:"File input",filled:"","prepend-icon":"mdi-camera"})])])}const Z=m(O,[["render",X]]),ee={},te=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" You can reduces the file input height with "),t("code",null,"dense"),l(" prop. ")],-1),ne={class:"mt-4"};function se(p,i){const s=c("v-file-input");return a(),u("div",null,[te,t("div",ne,[e(s,{label:"File input",outlined:"",dense:""})])])}const le=m(ee,[["render",se]]),ie=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" Using the "),t("code",null,"selection"),l(" slot, you can customize the appearance of your input selections. This is typically done with chips, however any component or markup can be used. ")],-1),oe={class:"mt-4"},ce=v({__name:"FileInputsSelectionSlot",setup(p){const i=f([]);return(s,d)=>{const h=c("v-chip"),o=c("v-file-input");return a(),u("div",null,[ie,t("div",oe,[e(o,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=r=>i.value=r),placeholder:"Upload your documents",label:"File input",multiple:"","prepend-icon":"mdi-paperclip"},{selection:n(({text:r})=>[e(h,{small:"",label:"",color:"primary"},{default:n(()=>[l(g(r),1)]),_:2},1024)]),_:1},8,["modelValue"])])])}}}),ae=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" Similar to other inputs, you can use the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"rules"),l(" prop to can create your own custom validation parameters. ")],-1),ue={class:"mt-4"},pe=v({__name:"FileInputsValidation",setup(p){const i=f([s=>!s||s.size<2e6||"Avatar size should be less than 2 MB!"]);return(s,d)=>{const h=c("v-file-input");return a(),u("div",null,[ae,t("div",ue,[e(h,{rules:i.value,accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"Avatar"},null,8,["rules"])])])}}}),re=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," The flexibility of the selection slot allows you accomodate complex use-cases. In this example we show the first 2 selections as chips while adding a number indicator for the remaining amount. ",-1),_e={class:"mt-4"},de={key:1,class:"overline grey--text text--darken-3 mx-2"},me=v({__name:"FileInputsComplexSlots",setup(p){const i=f([]);return(s,d)=>{const h=c("v-chip"),o=c("v-file-input");return a(),u("div",null,[re,t("div",_e,[e(o,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=r=>i.value=r),color:"deep-purple accent-4",counter:"",label:"File input",multiple:"",placeholder:"Select your files","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},{selection:n(({index:r,text:b})=>[r<2?(a(),y(h,{key:0,color:"deep-purple accent-4",dark:"",label:"",small:""},{default:n(()=>[l(g(b),1)]),_:2},1024)):r===2?(a(),u("span",de," +"+g(i.value.length-2)+" File(s) ",1)):F("",!0)]),_:1},8,["modelValue"])])])}}}),be=v({__name:"FEFileInputs",setup(p){const i=f({title:"File Inputs"}),s=f([{text:"Form Elements",disabled:!1,to:"#"},{text:"File Inputs",disabled:!0}]);return(d,h)=>{const o=c("v-col"),r=c("v-row");return a(),u($,null,[e(x,{title:i.value.title,breadcrumbs:s.value},null,8,["title","breadcrumbs"]),e(r,null,{default:n(()=>[e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Multiple"},{default:n(()=>[e(V)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Accept formats"},{default:n(()=>[e(B)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - With chips"},{default:n(()=>[e(E)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Size displaying"},{default:n(()=>[e(q)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Counter"},{default:n(()=>[e(L)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Custom icons"},{default:n(()=>[e(Z)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Dense"},{default:n(()=>[e(le)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Selection slot"},{default:n(()=>[e(ce)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Validation"},{default:n(()=>[e(pe)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Complex selection slots"},{default:n(()=>[e(me)]),_:1})]),_:1})]),_:1})],64)}}});export{be as default};
