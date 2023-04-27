import{_ as v}from"./BaseBreadcrumb.fb6d4da3.js";import{_ as r}from"./BaseCard.8fa7a275.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,n as a,f as t,a as e,bK as o,h as l,m as f,r as h,w as s,P as b,z as g,c as y,L as F,b as u,e as $,F as w}from"./index.ef9cfdf3.js";const k={},I=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" The "),t("code",null,"v-file-input"),l(" can contain multiple files at the same time when using the multiple prop. ")],-1),V={class:"mt-4"};function z(c,n){return i(),a("div",null,[I,t("div",V,[e(o,{multiple:"",label:"File input"})])])}var C=m(k,[["render",z]]);const S={},T=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[t("code",null,"v-file-input"),l(" component can accept only specific media formats/file types if you want. For more information, checkout the documentation on the accept attribute. ")],-1),A={class:"mt-4"};function B(c,n){return i(),a("div",null,[T,t("div",A,[e(o,{accept:"image/*",label:"File input"})])])}var D=m(S,[["render",B]]);const M={},N=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" TA selected file can be displayed as a chip. When using the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"chips"),l(" and "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"multiple"),l(" props, each chip will be displayed (as opposed to the file count). ")],-1),U={class:"mt-4"};function E(c,n){return i(),a("div",null,[N,t("div",U,[t("div",null,[e(o,{chips:"",multiple:"",label:"File input w/ chips"}),e(o,{"small-chips":"",multiple:"",label:"File input w/ small chips"})])])])}var W=m(M,[["render",E]]);const j={},P=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" The displayed size of the selected file(s) can be configured with the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"show-size"),l(" property. Display sizes can be either 1024 (the default used when providing true) or 1000. ")],-1),K={class:"mt-4"};function L(c,n){return i(),a("div",null,[P,t("div",K,[e(o,{"show-size":"",label:"File input"})])])}var R=m(j,[["render",L]]);const Y={},q=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" When using the "),t("span",{class:"font-weight-bold"},"show-size"),l(" property along with "),t("span",{class:"font-weight-bold"},"counter"),l(", the total number of files and size will be displayed under the input. ")],-1),G={class:"mt-4"};function H(c,n){return i(),a("div",null,[q,t("div",G,[e(o,{"show-size":"",counter:"",multiple:"",label:"File input"})])])}var J=m(Y,[["render",H]]);const O={},Q=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" The "),t("code",null,"v-file-input"),l(" has a default prepended icon that can be set on the component or adjusted globally. More information on changing global components can be found on the customizing icons page. ")],-1),X={class:"mt-4"};function Z(c,n){return i(),a("div",null,[Q,t("div",X,[e(o,{label:"File input",filled:"","prepend-icon":"mdi-camera"})])])}var ee=m(O,[["render",Z]]);const te={},se=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" You can reduces the file input height with "),t("code",null,"dense"),l(" prop. ")],-1),le={class:"mt-4"};function ne(c,n){return i(),a("div",null,[se,t("div",le,[e(o,{label:"File input",outlined:"",dense:""})])])}var ie=m(te,[["render",ne]]);const ae=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" Using the "),t("code",null,"selection"),l(" slot, you can customize the appearance of your input selections. This is typically done with chips, however any component or markup can be used. ")],-1),oe={class:"mt-4"},ce=f({__name:"FileInputsSelectionSlot",setup(c){const n=h([]);return(p,_)=>(i(),a("div",null,[ae,t("div",oe,[e(o,{modelValue:n.value,"onUpdate:modelValue":_[0]||(_[0]=d=>n.value=d),placeholder:"Upload your documents",label:"File input",multiple:"","prepend-icon":"mdi-paperclip"},{selection:s(({text:d})=>[e(b,{small:"",label:"",color:"primary"},{default:s(()=>[l(g(d),1)]),_:2},1024)]),_:1},8,["modelValue"])])]))}}),re=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" Similar to other inputs, you can use the "),t("span",{class:"grey--text text--darken-4 font-weight-bold"},"rules"),l(" prop to can create your own custom validation parameters. ")],-1),ue={class:"mt-4"},de=f({__name:"FileInputsValidation",setup(c){const n=h([p=>!p||p.size<2e6||"Avatar size should be less than 2 MB!"]);return(p,_)=>(i(),a("div",null,[re,t("div",ue,[e(o,{rules:n.value,accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"Avatar"},null,8,["rules"])])]))}}),pe=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," The flexibility of the selection slot allows you accomodate complex use-cases. In this example we show the first 2 selections as chips while adding a number indicator for the remaining amount. ",-1),_e={class:"mt-4"},me={key:1,class:"overline grey--text text--darken-3 mx-2"},he=f({__name:"FileInputsComplexSlots",setup(c){const n=h([]);return(p,_)=>(i(),a("div",null,[pe,t("div",_e,[e(o,{modelValue:n.value,"onUpdate:modelValue":_[0]||(_[0]=d=>n.value=d),color:"deep-purple accent-4",counter:"",label:"File input",multiple:"",placeholder:"Select your files","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},{selection:s(({index:d,text:x})=>[d<2?(i(),y(b,{key:0,color:"deep-purple accent-4",dark:"",label:"",small:""},{default:s(()=>[l(g(x),1)]),_:2},1024)):d===2?(i(),a("span",me," +"+g(n.value.length-2)+" File(s) ",1)):F("",!0)]),_:1},8,["modelValue"])])]))}}),ve=f({__name:"FEFileInputs",setup(c){const n=h({title:"File Inputs"}),p=h([{text:"Form Elements",disabled:!1,to:"#"},{text:"File Inputs",disabled:!0}]);return(_,d)=>(i(),a(w,null,[e(v,{title:n.value.title,breadcrumbs:p.value},null,8,["title","breadcrumbs"]),e($,null,{default:s(()=>[e(u,{cols:"12",sm:"12"},{default:s(()=>[e(r,{heading:"File inputs - Multiple"},{default:s(()=>[e(C)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:s(()=>[e(r,{heading:"File inputs - Accept formats"},{default:s(()=>[e(D)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:s(()=>[e(r,{heading:"File inputs - With chips"},{default:s(()=>[e(W)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:s(()=>[e(r,{heading:"File inputs - Size displaying"},{default:s(()=>[e(R)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:s(()=>[e(r,{heading:"File inputs - Counter"},{default:s(()=>[e(J)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:s(()=>[e(r,{heading:"File inputs - Custom icons"},{default:s(()=>[e(ee)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:s(()=>[e(r,{heading:"File inputs - Dense"},{default:s(()=>[e(ie)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:s(()=>[e(r,{heading:"File inputs - Selection slot"},{default:s(()=>[e(ce)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:s(()=>[e(r,{heading:"File inputs - Validation"},{default:s(()=>[e(de)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:s(()=>[e(r,{heading:"File inputs - Complex selection slots"},{default:s(()=>[e(he)]),_:1})]),_:1})]),_:1})],64))}});export{ve as default};