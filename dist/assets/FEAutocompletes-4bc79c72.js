import{e as f,g as n,r as s,o as _,f as h,j as r,b as i,a as e,w as l,F as b,d as p,_ as g,c as k,t as y}from"./index-1c97e933.js";import{B as S}from"./BaseBreadcrumb-70864a14.js";import{B as C}from"./BaseCard-44af5fce.js";const w=i("p",{class:"text-subtitle-1 text-grey-darken-1"},[p(" You can use "),i("code",null,"dense"),p(" prop to reduce autocomplete height and lower max height of list items. ")],-1),D={class:"mt-4"},N=f({__name:"AutocompletesDence",setup(x){const t=n(["foo","bar","fizz","buzz"]),a=n(["foo","bar"]),d=n(void 0);return(A,o)=>{const u=s("v-autocomplete"),m=s("v-col"),v=s("v-row");return _(),h(b,null,[r(" ----------------------------------------------------------------------------- "),r(" Autocompletes Dence "),r(" ----------------------------------------------------------------------------- "),i("div",null,[w,i("div",D,[e(v,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(u,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=c=>a.value=c),items:t.value,outlined:"",dense:"",chips:"","small-chips":"",label:"Outlined",multiple:""},null,8,["modelValue","items"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(u,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=c=>a.value=c),items:t.value,dense:"",chips:"","small-chips":"",label:"Solo",multiple:"",solo:""},null,8,["modelValue","items"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(u,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=c=>d.value=c),items:t.value,dense:"",filled:"",label:"Filled"},null,8,["modelValue","items"])]),_:1})]),_:1})])])],2112)}}}),M=g(N,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/autocompletes/AutocompletesDence.vue"]]),B=i("p",{class:"text-subtitle-1 text-grey-darken-1"},[p(" Using a combination of "),i("code",null,"v-autocomplete"),p(" slots and transitions, you can create a stylish toggleable autocomplete field such as this state selector. ")],-1),F={class:"mt-4"},I=f({__name:"AutocompletesStateSelector",setup(x){const t=n(!1),a=n(void 0),d=n(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(A,o)=>{const u=s("v-subheader"),m=s("v-icon"),v=s("v-slide-x-reverse-transition"),c=s("v-autocomplete");return _(),h(b,null,[r(" ----------------------------------------------------------------------------- "),r(" Autocompletes State Selector "),r(" ----------------------------------------------------------------------------- "),i("div",null,[B,i("div",F,[e(u,null,{default:l(()=>[p("Where do you live?")]),_:1}),e(c,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=V=>a.value=V),hint:t.value?"Click the icon to save":"Click the icon to edit",items:d.value,readonly:!t.value,label:`State — ${t.value?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"mdi-city"},{"append-outer":l(()=>[e(v,{mode:"out-in"},{default:l(()=>[(_(),k(m,{key:`icon-${t.value}`,color:t.value?"success":"info",onClick:o[0]||(o[0]=V=>t.value=!t.value),textContent:y(t.value?"mdi-check-outline":"mdi-circle-edit-outline")},null,8,["color","textContent"]))]),_:1})]),_:1},8,["modelValue","hint","items","readonly","label"])])])],2112)}}}),E=g(I,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/autocompletes/AutocompletesStateSelector.vue"]]),$=f({__name:"FEAutocompletes",setup(x){const t=n({title:"AutoComplate"}),a=n([{text:"Form Elements",disabled:!1,to:"#"},{text:"Autocompletes",disabled:!0}]);return(d,A)=>{const o=s("v-col"),u=s("v-row");return _(),h(b,null,[e(S,{title:t.value.title,breadcrumbs:a.value},null,8,["title","breadcrumbs"]),e(u,null,{default:l(()=>[e(o,{cols:"12",sm:"12",lg:"12"},{default:l(()=>[e(C,{heading:"Autocompletes - Dense"},{default:l(()=>[e(M)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"12"},{default:l(()=>[e(C,{heading:"Autocompletes - State selector"},{default:l(()=>[e(E)]),_:1})]),_:1})]),_:1})],64)}}}),W=g($,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-elements/FEAutocompletes.vue"]]);export{W as default};
