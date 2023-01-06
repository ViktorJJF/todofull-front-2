import{_ as g}from"./BaseBreadcrumb.63222b44.js";import{_ as b}from"./BaseCard.c6d56684.js";import{m as p,r as s,o as m,n as _,f as i,a as e,w as t,b as d,_ as c,e as V,h as r,s as k,bz as x,c as y,l as C,y as A,F as M}from"./index.cd0c6b49.js";const N=i("p",{class:"text-subtitle-1 text-grey-darken-1"},[r(" You can use "),i("code",null,"dense"),r(" prop to reduce autocomplete height and lower max height of list items. ")],-1),w={class:"mt-4"},S=p({__name:"AutocompletesDence",setup(v){const a=s(["foo","bar","fizz","buzz"]),o=s(["foo","bar"]),u=s(void 0);return(f,l)=>(m(),_("div",null,[N,i("div",w,[e(V,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(c,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=n=>o.value=n),items:a.value,outlined:"",dense:"",chips:"","small-chips":"",label:"Outlined",multiple:""},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(c,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=n=>o.value=n),items:a.value,dense:"",chips:"","small-chips":"",label:"Solo",multiple:"",solo:""},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(c,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=n=>u.value=n),items:a.value,dense:"",filled:"",label:"Filled"},null,8,["modelValue","items"])]),_:1})]),_:1})])]))}}),I=i("p",{class:"text-subtitle-1 text-grey-darken-1"},[r(" Using a combination of "),i("code",null,"v-autocomplete"),r(" slots and transitions, you can create a stylish toggleable autocomplete field such as this state selector. ")],-1),$={class:"mt-4"},D=p({__name:"AutocompletesStateSelector",setup(v){const a=s(!1),o=s(void 0),u=s(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(f,l)=>{const n=k("v-subheader");return m(),_("div",null,[I,i("div",$,[e(n,null,{default:t(()=>[r("Where do you live?")]),_:1}),e(c,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=h=>o.value=h),hint:a.value?"Click the icon to save":"Click the icon to edit",items:u.value,readonly:!a.value,label:`State \u2014 ${a.value?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"mdi-city"},{"append-outer":t(()=>[e(x,{mode:"out-in"},{default:t(()=>[(m(),y(C,{key:`icon-${a.value}`,color:a.value?"success":"info",onClick:l[0]||(l[0]=h=>a.value=!a.value),textContent:A(a.value?"mdi-check-outline":"mdi-circle-edit-outline")},null,8,["color","textContent"]))]),_:1})]),_:1},8,["modelValue","hint","items","readonly","label"])])])}}}),E=p({__name:"FEAutocompletes",setup(v){const a=s({title:"AutoComplate"}),o=s([{text:"Form Elements",disabled:!1,to:"#"},{text:"Autocompletes",disabled:!0}]);return(u,f)=>(m(),_(M,null,[e(g,{title:a.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),e(V,null,{default:t(()=>[e(d,{cols:"12",sm:"12",lg:"12"},{default:t(()=>[e(b,{heading:"Autocompletes - Dense"},{default:t(()=>[e(S)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"12"},{default:t(()=>[e(b,{heading:"Autocompletes - State selector"},{default:t(()=>[e(D)]),_:1})]),_:1})]),_:1})],64))}});export{E as default};
