import{_ as g}from"./BaseBreadcrumb.02b34150.js";import{_ as b}from"./BaseCard.40e43fa9.js";import{m as p,r as s,o as m,n as v,f as i,a as e,w as t,e as d,bj as c,b as V,l as r,q as k,bq as x,c as y,x as C,k as M,F as N}from"./index.55ede2bf.js";const w=i("p",{class:"text-subtitle-1 text-grey-darken-1"},[r(" You can use "),i("code",null,"dense"),r(" prop to reduce autocomplete height and lower max height of list items. ")],-1),A={class:"mt-4"},I=p({setup(_){const a=s(["foo","bar","fizz","buzz"]),o=s(["foo","bar"]),u=s(void 0);return(f,l)=>(m(),v("div",null,[w,i("div",A,[e(V,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(c,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=n=>o.value=n),items:a.value,outlined:"",dense:"",chips:"","small-chips":"",label:"Outlined",multiple:""},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(c,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=n=>o.value=n),items:a.value,dense:"",chips:"","small-chips":"",label:"Solo",multiple:"",solo:""},null,8,["modelValue","items"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(c,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=n=>u.value=n),items:a.value,dense:"",filled:"",label:"Filled"},null,8,["modelValue","items"])]),_:1})]),_:1})])]))}}),S=i("p",{class:"text-subtitle-1 text-grey-darken-1"},[r(" Using a combination of "),i("code",null,"v-autocomplete"),r(" slots and transitions, you can create a stylish toggleable autocomplete field such as this state selector. ")],-1),$={class:"mt-4"},D=r("Where do you live?"),F=p({setup(_){const a=s(!1),o=s(void 0),u=s(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(f,l)=>{const n=k("v-subheader");return m(),v("div",null,[S,i("div",$,[e(n,null,{default:t(()=>[D]),_:1}),e(c,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=h=>o.value=h),hint:a.value?"Click the icon to save":"Click the icon to edit",items:u.value,readonly:!a.value,label:`State \u2014 ${a.value?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"mdi-city"},{"append-outer":t(()=>[e(x,{mode:"out-in"},{default:t(()=>[(m(),y(M,{key:`icon-${a.value}`,color:a.value?"success":"info",onClick:l[0]||(l[0]=h=>a.value=!a.value),textContent:C(a.value?"mdi-check-outline":"mdi-circle-edit-outline")},null,8,["color","textContent"]))]),_:1})]),_:1},8,["modelValue","hint","items","readonly","label"])])])}}}),W=p({setup(_){const a=s({title:"AutoComplate"}),o=s([{text:"Form Elements",disabled:!1,to:"#"},{text:"Autocompletes",disabled:!0}]);return(u,f)=>(m(),v(N,null,[e(g,{title:a.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),e(V,null,{default:t(()=>[e(d,{cols:"12",sm:"12",lg:"12"},{default:t(()=>[e(b,{heading:"Autocompletes - Dense"},{default:t(()=>[e(I)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"12"},{default:t(()=>[e(b,{heading:"Autocompletes - State selector"},{default:t(()=>[e(F)]),_:1})]),_:1})]),_:1})],64))}});export{W as default};
