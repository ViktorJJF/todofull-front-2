import{_ as V}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-d18eae96.js";import{_ as x}from"./BaseCard.vue_vue_type_script_setup_true_lang-f4d83930.js";import{f as v,h as n,r as s,o as _,g as f,b as c,a as e,w as a,d as m,c as k,t as y,F as C}from"./index-3376cd88.js";const w=c("p",{class:"text-subtitle-1 text-grey-darken-1"},[m(" You can use "),c("code",null,"dense"),m(" prop to reduce autocomplete height and lower max height of list items. ")],-1),A={class:"mt-4"},M=v({__name:"AutocompletesDence",setup(h){const t=n(["foo","bar","fizz","buzz"]),l=n(["foo","bar"]),r=n(void 0);return(b,o)=>{const i=s("v-autocomplete"),d=s("v-col"),p=s("v-row");return _(),f("div",null,[w,c("div",A,[e(p,null,{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(i,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=u=>l.value=u),items:t.value,outlined:"",dense:"",chips:"","small-chips":"",label:"Outlined",multiple:""},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(i,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=u=>l.value=u),items:t.value,dense:"",chips:"","small-chips":"",label:"Solo",multiple:"",solo:""},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(i,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=u=>r.value=u),items:t.value,dense:"",filled:"",label:"Filled"},null,8,["modelValue","items"])]),_:1})]),_:1})])])}}}),N=c("p",{class:"text-subtitle-1 text-grey-darken-1"},[m(" Using a combination of "),c("code",null,"v-autocomplete"),m(" slots and transitions, you can create a stylish toggleable autocomplete field such as this state selector. ")],-1),S={class:"mt-4"},$=v({__name:"AutocompletesStateSelector",setup(h){const t=n(!1),l=n(void 0),r=n(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(b,o)=>{const i=s("v-subheader"),d=s("v-icon"),p=s("v-slide-x-reverse-transition"),u=s("v-autocomplete");return _(),f("div",null,[N,c("div",S,[e(i,null,{default:a(()=>[m("Where do you live?")]),_:1}),e(u,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=g=>l.value=g),hint:t.value?"Click the icon to save":"Click the icon to edit",items:r.value,readonly:!t.value,label:`State — ${t.value?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"mdi-city"},{"append-outer":a(()=>[e(p,{mode:"out-in"},{default:a(()=>[(_(),k(d,{key:`icon-${t.value}`,color:t.value?"success":"info",onClick:o[0]||(o[0]=g=>t.value=!t.value),textContent:y(t.value?"mdi-check-outline":"mdi-circle-edit-outline")},null,8,["color","textContent"]))]),_:1})]),_:1},8,["modelValue","hint","items","readonly","label"])])])}}}),U=v({__name:"FEAutocompletes",setup(h){const t=n({title:"AutoComplate"}),l=n([{text:"Form Elements",disabled:!1,to:"#"},{text:"Autocompletes",disabled:!0}]);return(r,b)=>{const o=s("v-col"),i=s("v-row");return _(),f(C,null,[e(V,{title:t.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),e(i,null,{default:a(()=>[e(o,{cols:"12",sm:"12",lg:"12"},{default:a(()=>[e(x,{heading:"Autocompletes - Dense"},{default:a(()=>[e(M)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"12"},{default:a(()=>[e(x,{heading:"Autocompletes - State selector"},{default:a(()=>[e($)]),_:1})]),_:1})]),_:1})],64)}}});export{U as default};
