import{_ as y}from"./BaseBreadcrumb.51cce433.js";import{_ as f}from"./BaseCard.63286a8c.js";import{m as p,r,o as c,n as _,f as s,a as e,ah as d,h as n,w as t,b as a,e as g,s as S,l as z,y as x,c as k,P as C,L as V,F as M}from"./index.ac5b851b.js";const w=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" You cannot use disabled "),s("code",null,"v-select"),n(". ")],-1),F={class:"mt-4"},$=p({__name:"SelectsDisabled",setup(h){const l=r(["Foo","Bar","Fizz","Buzz"]);return(o,m)=>(c(),_("div",null,[w,s("div",F,[e(d,{items:l.value,disabled:"",label:"Disabled"},null,8,["items"])])]))}}),N=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" You cannot use read-only "),s("code",null,"v-select"),n(", but it looks default. ")],-1),I={class:"mt-4"},B=p({__name:"SelectsReadonly",setup(h){const l=r(["Foo","Bar","Fizz","Buzz"]);return(o,m)=>(c(),_("div",null,[N,s("div",I,[e(d,{items:l.value,readonly:"",label:"Read-only"},null,8,["items"])])]))}}),A=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," A standard single select has a multitude of configuration options. ",-1),D={class:"mt-4"},P=p({__name:"SelectsLightTheme",setup(h){const l=r(["Foo","Bar","Fizz","Buzz"]),o=r(["Foo","Bar","Fizz","Buzz"]);return(m,i)=>(c(),_("div",null,[A,s("div",D,[e(g,null,{default:t(()=>[e(a,{cols:"12",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=u=>o.value=u),items:l.value,attach:"",chips:"",label:"Chips",multiple:""},null,8,["modelValue","items"])]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=u=>o.value=u),items:l.value,filled:"",chips:"",label:"Chips",multiple:""},null,8,["modelValue","items"])]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value,"onUpdate:modelValue":i[2]||(i[2]=u=>o.value=u),items:l.value,chips:"",label:"Chips",multiple:"",outlined:""},null,8,["modelValue","items"])]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(d,{modelValue:o.value,"onUpdate:modelValue":i[3]||(i[3]=u=>o.value=u),items:l.value,chips:"",label:"Chips",multiple:"",solo:""},null,8,["modelValue","items"])]),_:1})]),_:1})])]))}}),U=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use a custom prepended or appended icon. ",-1),T={class:"mt-4"},W=p({__name:"SelectsIcons",setup(h){r("Florida"),r("Texas");const l=r(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(o,m)=>{const i=S("v-subheader");return c(),_("div",null,[U,s("div",T,[e(g,null,{default:t(()=>[e(a,{cols:"6",lg:"4"},{default:t(()=>[e(i,null,{default:t(()=>[n("Prepended icon")]),_:1})]),_:1}),e(a,{cols:"6",lg:"8"},{default:t(()=>[e(d,{items:l.value,"menu-props":"auto",label:"Select","hide-details":"","prepend-icon":"map","single-line":""},{prepend:t(()=>[e(z,{color:"green"},{default:t(()=>[n(" mdi-map ")]),_:1})]),_:1},8,["items"])]),_:1}),e(a,{cols:"6",lg:"4"},{default:t(()=>[e(i,null,{default:t(()=>[n("Appended icon")]),_:1})]),_:1}),e(a,{cols:"6",lg:"8"},{default:t(()=>[e(d,{items:l.value,"menu-props":"auto","hide-details":"",label:"Select","single-line":""},{append:t(()=>[e(z,{color:"error"},{default:t(()=>[n(" mdi-map ")]),_:1})]),_:1},8,["items"])]),_:1})]),_:1})])])}}}),R=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" A multi-select can utilize "),s("code",null,"v-chip"),n(" as the display for selected items. ")],-1),O={class:"mt-4"},L=p({__name:"SelectsMultiple",setup(h){const l=r([]),o=r([]),m=r(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(i,u)=>{const v=S("v-subheader");return c(),_("div",null,[R,s("div",O,[e(g,null,{default:t(()=>[e(a,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(v,{textContent:"Multiple with persistent hint"})]),_:1}),e(a,{cols:"12",sm:"6",lg:"8"},{default:t(()=>[e(d,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=b=>l.value=b),items:m.value,"menu-props":{maxHeight:"400"},label:"Select",multiple:"",hint:"Pick your favorite states","persistent-hint":""},null,8,["modelValue","items"])]),_:1}),e(a,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(v,{textContent:x("Multiple (Chips) with persistent hint")},null,8,["textContent"])]),_:1}),e(a,{cols:"12",sm:"6",lg:"8"},{default:t(()=>[e(d,{modelValue:o.value,"onUpdate:modelValue":u[1]||(u[1]=b=>o.value=b),items:m.value,label:"Select",multiple:"",chips:"",hint:"What are the target regions","persistent-hint":""},null,8,["modelValue","items"])]),_:1})]),_:1})])])}}}),Y=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" You can use "),s("code",null,"dense"),n(" prop to reduce the field height and lower max height of list items. ")],-1),H={class:"mt-4"},G=p({__name:"SelectsDence",setup(h){const l=r(["Foo","Bar","Fizz","Buzz"]);return(o,m)=>(c(),_("div",null,[Y,s("div",H,[e(g,null,{default:t(()=>[e(a,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(d,{items:l.value,label:"Standard",dense:""},null,8,["items"])]),_:1}),e(a,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(d,{items:l.value,filled:"",label:"Filled style",dense:""},null,8,["items"])]),_:1}),e(a,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(d,{items:l.value,label:"Outlined style",dense:"",outlined:""},null,8,["items"])]),_:1}),e(a,{class:"d-flex",cols:"12",sm:"6"},{default:t(()=>[e(d,{items:l.value,label:"Solo field",dense:"",solo:""},null,8,["items"])]),_:1})]),_:1})])]))}}),K=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" Custom props can be passed directly to "),s("code",null,"v-menu"),n(" using "),s("code",null,"menuProps"),n(" prop. In this example menu is force directed to top and shifted to top. ")],-1),E={class:"mt-4"},J=p({__name:"SelectsCustomMenuprops",setup(h){const l=r(["Foo","Bar","Fizz","Buzz"]);return(o,m)=>(c(),_("div",null,[K,s("div",E,[e(d,{items:l.value,"menu-props":{top:!0,offsetY:!0},label:"Label"},null,8,["items"])])]))}}),j=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" The "),s("code",null,"selection"),n(" slot can be used to customize the way selected values are shown in the input. This is great when you want something like "),s("code",null,"foo (+20 others)"),n(" or don't want the selection to occupy multiple lines. ")],-1),q={class:"mt-4"},Q={key:1,class:"grey--text caption"},X=p({__name:"SelectsSelectionAppearance",setup(h){const l=r(["foo","bar","fizz","buzz","fizzbuzz","foobar"]),o=r(["foo","bar","fizz"]);return(m,i)=>(c(),_("div",null,[j,s("div",q,[e(d,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=u=>o.value=u),items:l.value,label:"Select Item",multiple:""},{activator:t(({item:u,index:v})=>[v===0?(c(),k(C,{key:0},{default:t(()=>[s("span",null,x(u),1)]),_:2},1024)):V("",!0),v===1?(c(),_("span",Q,"(+"+x(o.value.length-1)+" others)",1)):V("",!0)]),_:1},8,["modelValue","items"])])]))}}),le=p({__name:"FESelects",setup(h){const l=r({title:"Form Select"}),o=r([{text:"Form Elements",disabled:!1,to:"#"},{text:"Form Select",disabled:!0}]);return(m,i)=>(c(),_(M,null,[e(y,{title:l.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),e(g,null,{default:t(()=>[e(a,{cols:"12",sm:"12"},{default:t(()=>[e(f,{heading:"Selects - Disabled"},{default:t(()=>[e($)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(f,{heading:"Selects - Read-only"},{default:t(()=>[e(B)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(f,{heading:"Selects - Light theme"},{default:t(()=>[e(P)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(f,{heading:"Selects - Icons"},{default:t(()=>[e(W)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(f,{heading:"Selects - Multiple"},{default:t(()=>[e(L)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(f,{heading:"Selects - Dense"},{default:t(()=>[e(G)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(f,{heading:"Selects - Custom menu props"},{default:t(()=>[e(J)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(f,{heading:"Selects - Change selection appearance"},{default:t(()=>[e(X)]),_:1})]),_:1})]),_:1})],64))}});export{le as default};
