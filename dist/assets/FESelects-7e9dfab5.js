import{_ as y}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-cbe058b9.js";import{_ as g}from"./BaseCard.vue_vue_type_script_setup_true_lang-08e0cb31.js";import{e as v,g as d,r as i,o as m,f as h,b as o,a as e,d as c,w as t,t as x,c as w,p as z,F as V}from"./index-3fba6ee6.js";const k=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" You cannot use disabled "),o("code",null,"v-select"),c(". ")],-1),M={class:"mt-4"},C=v({__name:"SelectsDisabled",setup(f){const a=d(["Foo","Bar","Fizz","Buzz"]);return(n,p)=>{const s=i("v-select");return m(),h("div",null,[k,o("div",M,[e(s,{items:a.value,disabled:"",label:"Disabled"},null,8,["items"])])])}}}),F=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" You cannot use read-only "),o("code",null,"v-select"),c(", but it looks default. ")],-1),$={class:"mt-4"},N=v({__name:"SelectsReadonly",setup(f){const a=d(["Foo","Bar","Fizz","Buzz"]);return(n,p)=>{const s=i("v-select");return m(),h("div",null,[F,o("div",$,[e(s,{items:a.value,readonly:"",label:"Read-only"},null,8,["items"])])])}}}),I=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," A standard single select has a multitude of configuration options. ",-1),B={class:"mt-4"},A=v({__name:"SelectsLightTheme",setup(f){const a=d(["Foo","Bar","Fizz","Buzz"]),n=d(["Foo","Bar","Fizz","Buzz"]);return(p,s)=>{const l=i("v-select"),u=i("v-col"),_=i("v-row");return m(),h("div",null,[I,o("div",B,[e(_,null,{default:t(()=>[e(u,{cols:"12",sm:"6"},{default:t(()=>[e(l,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=r=>n.value=r),items:a.value,attach:"",chips:"",label:"Chips",multiple:""},null,8,["modelValue","items"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(l,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=r=>n.value=r),items:a.value,filled:"",chips:"",label:"Chips",multiple:""},null,8,["modelValue","items"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(l,{modelValue:n.value,"onUpdate:modelValue":s[2]||(s[2]=r=>n.value=r),items:a.value,chips:"",label:"Chips",multiple:"",outlined:""},null,8,["modelValue","items"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(l,{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=r=>n.value=r),items:a.value,chips:"",label:"Chips",multiple:"",solo:""},null,8,["modelValue","items"])]),_:1})]),_:1})])])}}}),D=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use a custom prepended or appended icon. ",-1),U={class:"mt-4"},P=v({__name:"SelectsIcons",setup(f){d("Florida"),d("Texas");const a=d(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(n,p)=>{const s=i("v-subheader"),l=i("v-col"),u=i("v-icon"),_=i("v-select"),r=i("v-row");return m(),h("div",null,[D,o("div",U,[e(r,null,{default:t(()=>[e(l,{cols:"6",lg:"4"},{default:t(()=>[e(s,null,{default:t(()=>[c("Prepended icon")]),_:1})]),_:1}),e(l,{cols:"6",lg:"8"},{default:t(()=>[e(_,{items:a.value,"menu-props":"auto",label:"Select","hide-details":"","prepend-icon":"map","single-line":""},{prepend:t(()=>[e(u,{color:"green"},{default:t(()=>[c(" mdi-map ")]),_:1})]),_:1},8,["items"])]),_:1}),e(l,{cols:"6",lg:"4"},{default:t(()=>[e(s,null,{default:t(()=>[c("Appended icon")]),_:1})]),_:1}),e(l,{cols:"6",lg:"8"},{default:t(()=>[e(_,{items:a.value,"menu-props":"auto","hide-details":"",label:"Select","single-line":""},{append:t(()=>[e(u,{color:"error"},{default:t(()=>[c(" mdi-map ")]),_:1})]),_:1},8,["items"])]),_:1})]),_:1})])])}}}),T=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" A multi-select can utilize "),o("code",null,"v-chip"),c(" as the display for selected items. ")],-1),W={class:"mt-4"},O=v({__name:"SelectsMultiple",setup(f){const a=d([]),n=d([]),p=d(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(s,l)=>{const u=i("v-subheader"),_=i("v-col"),r=i("v-select"),S=i("v-row");return m(),h("div",null,[T,o("div",W,[e(S,null,{default:t(()=>[e(_,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(u,{textContent:"Multiple with persistent hint"})]),_:1}),e(_,{cols:"12",sm:"6",lg:"8"},{default:t(()=>[e(r,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=b=>a.value=b),items:p.value,"menu-props":{maxHeight:"400"},label:"Select",multiple:"",hint:"Pick your favorite states","persistent-hint":""},null,8,["modelValue","items"])]),_:1}),e(_,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(u,{textContent:x("Multiple (Chips) with persistent hint")},null,8,["textContent"])]),_:1}),e(_,{cols:"12",sm:"6",lg:"8"},{default:t(()=>[e(r,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=b=>n.value=b),items:p.value,label:"Select",multiple:"",chips:"",hint:"What are the target regions","persistent-hint":""},null,8,["modelValue","items"])]),_:1})]),_:1})])])}}}),R=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" You can use "),o("code",null,"dense"),c(" prop to reduce the field height and lower max height of list items. ")],-1),Y={class:"mt-4"},H=v({__name:"SelectsDence",setup(f){const a=d(["Foo","Bar","Fizz","Buzz"]);return(n,p)=>{const s=i("v-select"),l=i("v-col"),u=i("v-row");return m(),h("div",null,[R,o("div",Y,[e(u,null,{default:t(()=>[e(l,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(s,{items:a.value,label:"Standard",dense:""},null,8,["items"])]),_:1}),e(l,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(s,{items:a.value,filled:"",label:"Filled style",dense:""},null,8,["items"])]),_:1}),e(l,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(s,{items:a.value,label:"Outlined style",dense:"",outlined:""},null,8,["items"])]),_:1}),e(l,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(s,{items:a.value,label:"Solo field",dense:"",solo:""},null,8,["items"])]),_:1})]),_:1})])])}}}),L=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" Custom props can be passed directly to "),o("code",null,"v-menu"),c(" using "),o("code",null,"menuProps"),c(" prop. In this example menu is force directed to top and shifted to top. ")],-1),G={class:"mt-4"},K=v({__name:"SelectsCustomMenuprops",setup(f){const a=d(["Foo","Bar","Fizz","Buzz"]);return(n,p)=>{const s=i("v-select");return m(),h("div",null,[L,o("div",G,[e(s,{items:a.value,"menu-props":{top:!0,offsetY:!0},label:"Label"},null,8,["items"])])])}}}),E=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[c(" The "),o("code",null,"selection"),c(" slot can be used to customize the way selected values are shown in the input. This is great when you want something like "),o("code",null,"foo (+20 others)"),c(" or don't want the selection to occupy multiple lines. ")],-1),J={class:"mt-4"},j={key:1,class:"grey--text caption"},q=v({__name:"SelectsSelectionAppearance",setup(f){const a=d(["foo","bar","fizz","buzz","fizzbuzz","foobar"]),n=d(["foo","bar","fizz"]);return(p,s)=>{const l=i("v-chip"),u=i("v-select");return m(),h("div",null,[E,o("div",J,[e(u,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=_=>n.value=_),items:a.value,label:"Select Item",multiple:""},{activator:t(({item:_,index:r})=>[r===0?(m(),w(l,{key:0},{default:t(()=>[o("span",null,x(_),1)]),_:2},1024)):z("",!0),r===1?(m(),h("span",j,"(+"+x(n.value.length-1)+" others)",1)):z("",!0)]),_:1},8,["modelValue","items"])])])}}}),ee=v({__name:"FESelects",setup(f){const a=d({title:"Form Select"}),n=d([{text:"Form Elements",disabled:!1,to:"#"},{text:"Form Select",disabled:!0}]);return(p,s)=>{const l=i("v-col"),u=i("v-row");return m(),h(V,null,[e(y,{title:a.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),e(u,null,{default:t(()=>[e(l,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Selects - Disabled"},{default:t(()=>[e(C)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Selects - Read-only"},{default:t(()=>[e(N)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Selects - Light theme"},{default:t(()=>[e(A)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Selects - Icons"},{default:t(()=>[e(P)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Selects - Multiple"},{default:t(()=>[e(O)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Selects - Dense"},{default:t(()=>[e(H)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Selects - Custom menu props"},{default:t(()=>[e(K)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Selects - Change selection appearance"},{default:t(()=>[e(q)]),_:1})]),_:1})]),_:1})],64)}}});export{ee as default};
