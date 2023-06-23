import{_ as h,e as b,g as d,r as c,o as p,f as v,j as n,b as l,a as e,F as g,d as u,w as t,t as C,c as w}from"./index-a27cae2a.js";import{B as M}from"./BaseBreadcrumb-7015d611.js";import{B as x}from"./BaseCard-3133106d.js";const V=l("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" You cannot use disabled "),l("code",null,"v-select"),u(". ")],-1),k={class:"mt-4"},D=b({__name:"SelectsDisabled",setup(S){const a=d(["Foo","Bar","Fizz","Buzz"]);return(i,f)=>{const o=c("v-select");return p(),v(g,null,[n(" ----------------------------------------------------------------------------- "),n(" error "),n(" ----------------------------------------------------------------------------- "),l("div",null,[V,l("div",k,[e(o,{items:a.value,disabled:"",label:"Disabled"},null,8,["items"])])])],2112)}}}),F=h(D,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selects/SelectsDisabled.vue"]]),I=l("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" You cannot use read-only "),l("code",null,"v-select"),u(", but it looks default. ")],-1),N={class:"mt-4"},$=b({__name:"SelectsReadonly",setup(S){const a=d(["Foo","Bar","Fizz","Buzz"]);return(i,f)=>{const o=c("v-select");return p(),v(g,null,[n(" ----------------------------------------------------------------------------- "),n(" error "),n(" ----------------------------------------------------------------------------- "),l("div",null,[I,l("div",N,[e(o,{items:a.value,readonly:"",label:"Read-only"},null,8,["items"])])])],2112)}}}),B=h($,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selects/SelectsReadonly.vue"]]),T=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," A standard single select has a multitude of configuration options. ",-1),A={class:"mt-4"},j=b({__name:"SelectsLightTheme",setup(S){const a=d(["Foo","Bar","Fizz","Buzz"]),i=d(["Foo","Bar","Fizz","Buzz"]);return(f,o)=>{const s=c("v-select"),r=c("v-col"),_=c("v-row");return p(),v(g,null,[n(" ----------------------------------------------------------------------------- "),n(" error "),n(" ----------------------------------------------------------------------------- "),l("div",null,[T,l("div",A,[e(_,null,{default:t(()=>[e(r,{cols:"12",sm:"6"},{default:t(()=>[e(s,{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=m=>i.value=m),items:a.value,attach:"",chips:"",label:"Chips",multiple:""},null,8,["modelValue","items"])]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(s,{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=m=>i.value=m),items:a.value,filled:"",chips:"",label:"Chips",multiple:""},null,8,["modelValue","items"])]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(s,{modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=m=>i.value=m),items:a.value,chips:"",label:"Chips",multiple:"",outlined:""},null,8,["modelValue","items"])]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(s,{modelValue:i.value,"onUpdate:modelValue":o[3]||(o[3]=m=>i.value=m),items:a.value,chips:"",label:"Chips",multiple:"",solo:""},null,8,["modelValue","items"])]),_:1})]),_:1})])])],2112)}}}),U=h(j,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selects/SelectsLightTheme.vue"]]),P=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use a custom prepended or appended icon. ",-1),R={class:"mt-4"},W=b({__name:"SelectsIcons",setup(S){d("Florida"),d("Texas");const a=d(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(i,f)=>{const o=c("v-subheader"),s=c("v-col"),r=c("v-icon"),_=c("v-select"),m=c("v-row");return p(),v(g,null,[n(" ----------------------------------------------------------------------------- "),n(" error "),n(" ----------------------------------------------------------------------------- "),l("div",null,[P,l("div",R,[e(m,null,{default:t(()=>[e(s,{cols:"6",lg:"4"},{default:t(()=>[e(o,null,{default:t(()=>[u("Prepended icon")]),_:1})]),_:1}),e(s,{cols:"6",lg:"8"},{default:t(()=>[e(_,{items:a.value,"menu-props":"auto",label:"Select","hide-details":"","prepend-icon":"map","single-line":""},{prepend:t(()=>[e(r,{color:"green"},{default:t(()=>[u(" mdi-map ")]),_:1})]),_:1},8,["items"])]),_:1}),e(s,{cols:"6",lg:"4"},{default:t(()=>[e(o,null,{default:t(()=>[u("Appended icon")]),_:1})]),_:1}),e(s,{cols:"6",lg:"8"},{default:t(()=>[e(_,{items:a.value,"menu-props":"auto","hide-details":"",label:"Select","single-line":""},{append:t(()=>[e(r,{color:"error"},{default:t(()=>[u(" mdi-map ")]),_:1})]),_:1},8,["items"])]),_:1})]),_:1})])])],2112)}}}),L=h(W,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selects/SelectsIcons.vue"]]),O=l("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" A multi-select can utilize "),l("code",null,"v-chip"),u(" as the display for selected items. ")],-1),Y={class:"mt-4"},E=b({__name:"SelectsMultiple",setup(S){const a=d([]),i=d([]),f=d(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(o,s)=>{const r=c("v-subheader"),_=c("v-col"),m=c("v-select"),z=c("v-row");return p(),v(g,null,[n(" ----------------------------------------------------------------------------- "),n(" error "),n(" ----------------------------------------------------------------------------- "),l("div",null,[O,l("div",Y,[e(z,null,{default:t(()=>[e(_,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(r,{textContent:"Multiple with persistent hint"})]),_:1}),e(_,{cols:"12",sm:"6",lg:"8"},{default:t(()=>[e(m,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=y=>a.value=y),items:f.value,"menu-props":{maxHeight:"400"},label:"Select",multiple:"",hint:"Pick your favorite states","persistent-hint":""},null,8,["modelValue","items"])]),_:1}),e(_,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(r,{textContent:C("Multiple (Chips) with persistent hint")},null,8,["textContent"])]),_:1}),e(_,{cols:"12",sm:"6",lg:"8"},{default:t(()=>[e(m,{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=y=>i.value=y),items:f.value,label:"Select",multiple:"",chips:"",hint:"What are the target regions","persistent-hint":""},null,8,["modelValue","items"])]),_:1})]),_:1})])])],2112)}}}),H=h(E,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selects/SelectsMultiple.vue"]]),G=l("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" You can use "),l("code",null,"dense"),u(" prop to reduce the field height and lower max height of list items. ")],-1),K={class:"mt-4"},J=b({__name:"SelectsDence",setup(S){const a=d(["Foo","Bar","Fizz","Buzz"]);return(i,f)=>{const o=c("v-select"),s=c("v-col"),r=c("v-row");return p(),v(g,null,[n(" ----------------------------------------------------------------------------- "),n(" error "),n(" ----------------------------------------------------------------------------- "),l("div",null,[G,l("div",K,[e(r,null,{default:t(()=>[e(s,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(o,{items:a.value,label:"Standard",dense:""},null,8,["items"])]),_:1}),e(s,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(o,{items:a.value,filled:"",label:"Filled style",dense:""},null,8,["items"])]),_:1}),e(s,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(o,{items:a.value,label:"Outlined style",dense:"",outlined:""},null,8,["items"])]),_:1}),e(s,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(o,{items:a.value,label:"Solo field",dense:"",solo:""},null,8,["items"])]),_:1})]),_:1})])])],2112)}}}),q=h(J,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selects/SelectsDence.vue"]]),Q=l("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" Custom props can be passed directly to "),l("code",null,"v-menu"),u(" using "),l("code",null,"menuProps"),u(" prop. In this example menu is force directed to top and shifted to top. ")],-1),X={class:"mt-4"},Z=b({__name:"SelectsCustomMenuprops",setup(S){const a=d(["Foo","Bar","Fizz","Buzz"]);return(i,f)=>{const o=c("v-select");return p(),v(g,null,[n(" ----------------------------------------------------------------------------- "),n(" error "),n(" ----------------------------------------------------------------------------- "),l("div",null,[Q,l("div",X,[e(o,{items:a.value,"menu-props":{top:!0,offsetY:!0},label:"Label"},null,8,["items"])])])],2112)}}}),ee=h(Z,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selects/SelectsCustomMenuprops.vue"]]),te=l("p",{class:"text-subtitle-1 text-grey-darken-1"},[u(" The "),l("code",null,"selection"),u(" slot can be used to customize the way selected values are shown in the input. This is great when you want something like "),l("code",null,"foo (+20 others)"),u(" or don't want the selection to occupy multiple lines. ")],-1),le={class:"mt-4"},se={key:1,class:"grey--text caption"},oe=b({__name:"SelectsSelectionAppearance",setup(S){const a=d(["foo","bar","fizz","buzz","fizzbuzz","foobar"]),i=d(["foo","bar","fizz"]);return(f,o)=>{const s=c("v-chip"),r=c("v-select");return p(),v(g,null,[n(" ----------------------------------------------------------------------------- "),n(" error "),n(" ----------------------------------------------------------------------------- "),l("div",null,[te,l("div",le,[e(r,{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=_=>i.value=_),items:a.value,label:"Select Item",multiple:""},{activator:t(({item:_,index:m})=>[m===0?(p(),w(s,{key:0},{default:t(()=>[l("span",null,C(_),1)]),_:2},1024)):n("v-if",!0),m===1?(p(),v("span",se,"(+"+C(i.value.length-1)+" others)",1)):n("v-if",!0)]),_:1},8,["modelValue","items"])])])],2112)}}}),ne=h(oe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/selects/SelectsSelectionAppearance.vue"]]),ae=b({__name:"FESelects",setup(S){const a=d({title:"Form Select"}),i=d([{text:"Form Elements",disabled:!1,to:"#"},{text:"Form Select",disabled:!0}]);return(f,o)=>{const s=c("v-col"),r=c("v-row");return p(),v(g,null,[e(M,{title:a.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),e(r,null,{default:t(()=>[e(s,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Selects - Disabled"},{default:t(()=>[e(F)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Selects - Read-only"},{default:t(()=>[e(B)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Selects - Light theme"},{default:t(()=>[e(U)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Selects - Icons"},{default:t(()=>[e(L)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Selects - Multiple"},{default:t(()=>[e(H)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Selects - Dense"},{default:t(()=>[e(q)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Selects - Custom menu props"},{default:t(()=>[e(ee)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:t(()=>[e(x,{heading:"Selects - Change selection appearance"},{default:t(()=>[e(ne)]),_:1})]),_:1})]),_:1})],64)}}}),re=h(ae,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-elements/FESelects.vue"]]);export{re as default};