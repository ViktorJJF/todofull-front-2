import{_ as x}from"./BaseBreadcrumb.c378a3ec.js";import{_}from"./BaseCard.802f9fad.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as c,f as u,b as t,a as e,d as s,e as v,g as f,w as n,t as g,c as y,p as F,F as $}from"./index.5144a4a6.js";const w={},k=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" The "),t("code",null,"v-file-input"),s(" can contain multiple files at the same time when using the multiple prop. ")],-1),I={class:"mt-4"};function z(p,i){const l=a("v-file-input");return c(),u("div",null,[k,t("div",I,[e(l,{multiple:"",label:"File input"})])])}var V=m(w,[["render",z]]);const C={},S=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[t("code",null,"v-file-input"),s(" component can accept only specific media formats/file types if you want. For more information, checkout the documentation on the accept attribute. ")],-1),T={class:"mt-4"};function A(p,i){const l=a("v-file-input");return c(),u("div",null,[S,t("div",T,[e(l,{accept:"image/*",label:"File input"})])])}var B=m(C,[["render",A]]);const D={},M=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" TA selected file can be displayed as a chip. When using the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"chips"),s(" and "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"multiple"),s(" props, each chip will be displayed (as opposed to the file count). ")],-1),N={class:"mt-4"};function U(p,i){const l=a("v-file-input");return c(),u("div",null,[M,t("div",N,[t("div",null,[e(l,{chips:"",multiple:"",label:"File input w/ chips"}),e(l,{"small-chips":"",multiple:"",label:"File input w/ small chips"})])])])}var E=m(D,[["render",U]]);const W={},j=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" The displayed size of the selected file(s) can be configured with the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"show-size"),s(" property. Display sizes can be either 1024 (the default used when providing true) or 1000. ")],-1),P={class:"mt-4"};function Y(p,i){const l=a("v-file-input");return c(),u("div",null,[j,t("div",P,[e(l,{"show-size":"",label:"File input"})])])}var q=m(W,[["render",Y]]);const G={},H=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" When using the "),t("span",{class:"font-weight-bold"},"show-size"),s(" property along with "),t("span",{class:"font-weight-bold"},"counter"),s(", the total number of files and size will be displayed under the input. ")],-1),J={class:"mt-4"};function K(p,i){const l=a("v-file-input");return c(),u("div",null,[H,t("div",J,[e(l,{"show-size":"",counter:"",multiple:"",label:"File input"})])])}var L=m(G,[["render",K]]);const O={},Q=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" The "),t("code",null,"v-file-input"),s(" has a default prepended icon that can be set on the component or adjusted globally. More information on changing global components can be found on the customizing icons page. ")],-1),R={class:"mt-4"};function X(p,i){const l=a("v-file-input");return c(),u("div",null,[Q,t("div",R,[e(l,{label:"File input",filled:"","prepend-icon":"mdi-camera"})])])}var Z=m(O,[["render",X]]);const ee={},te=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" You can reduces the file input height with "),t("code",null,"dense"),s(" prop. ")],-1),ne={class:"mt-4"};function le(p,i){const l=a("v-file-input");return c(),u("div",null,[te,t("div",ne,[e(l,{label:"File input",outlined:"",dense:""})])])}var se=m(ee,[["render",le]]);const ie=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" Using the "),t("code",null,"selection"),s(" slot, you can customize the appearance of your input selections. This is typically done with chips, however any component or markup can be used. ")],-1),oe={class:"mt-4"},ae=v({__name:"FileInputsSelectionSlot",setup(p){const i=f([]);return(l,d)=>{const h=a("v-chip"),o=a("v-file-input");return c(),u("div",null,[ie,t("div",oe,[e(o,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=r=>i.value=r),placeholder:"Upload your documents",label:"File input",multiple:"","prepend-icon":"mdi-paperclip"},{selection:n(({text:r})=>[e(h,{small:"",label:"",color:"primary"},{default:n(()=>[s(g(r),1)]),_:2},1024)]),_:1},8,["modelValue"])])])}}}),ce=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" Similar to other inputs, you can use the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"rules"),s(" prop to can create your own custom validation parameters. ")],-1),ue={class:"mt-4"},pe=v({__name:"FileInputsValidation",setup(p){const i=f([l=>!l||l.size<2e6||"Avatar size should be less than 2 MB!"]);return(l,d)=>{const h=a("v-file-input");return c(),u("div",null,[ce,t("div",ue,[e(h,{rules:i.value,accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"Avatar"},null,8,["rules"])])])}}}),re=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," The flexibility of the selection slot allows you accomodate complex use-cases. In this example we show the first 2 selections as chips while adding a number indicator for the remaining amount. ",-1),_e={class:"mt-4"},de={key:1,class:"overline grey--text text--darken-3 mx-2"},me=v({__name:"FileInputsComplexSlots",setup(p){const i=f([]);return(l,d)=>{const h=a("v-chip"),o=a("v-file-input");return c(),u("div",null,[re,t("div",_e,[e(o,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=r=>i.value=r),color:"deep-purple accent-4",counter:"",label:"File input",multiple:"",placeholder:"Select your files","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},{selection:n(({index:r,text:b})=>[r<2?(c(),y(h,{key:0,color:"deep-purple accent-4",dark:"",label:"",small:""},{default:n(()=>[s(g(b),1)]),_:2},1024)):r===2?(c(),u("span",de," +"+g(i.value.length-2)+" File(s) ",1)):F("",!0)]),_:1},8,["modelValue"])])])}}}),be=v({__name:"FEFileInputs",setup(p){const i=f({title:"File Inputs"}),l=f([{text:"Form Elements",disabled:!1,to:"#"},{text:"File Inputs",disabled:!0}]);return(d,h)=>{const o=a("v-col"),r=a("v-row");return c(),u($,null,[e(x,{title:i.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),e(r,null,{default:n(()=>[e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Multiple"},{default:n(()=>[e(V)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Accept formats"},{default:n(()=>[e(B)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - With chips"},{default:n(()=>[e(E)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Size displaying"},{default:n(()=>[e(q)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Counter"},{default:n(()=>[e(L)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Custom icons"},{default:n(()=>[e(Z)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Dense"},{default:n(()=>[e(se)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Selection slot"},{default:n(()=>[e(ae)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Validation"},{default:n(()=>[e(pe)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:n(()=>[e(_,{heading:"File inputs - Complex selection slots"},{default:n(()=>[e(me)]),_:1})]),_:1})]),_:1})],64)}}});export{be as default};