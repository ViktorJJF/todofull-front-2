import{_ as f,e as x,g as c,r as s,o as b,f as g,j as r,b as m,a as e,w as o,c as D,m as k,t as w,d as _,F as h}from"./index-0698fb5b.js";import{B as N}from"./BaseBreadcrumb-725f63b9.js";import{B as y}from"./BaseCard-acb94b2d.js";const B=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Previously known as tags - user is allowed to enter more than 1 value ",-1),P={class:"mt-4"},$=x({__name:"ComboboxMultiple",setup(C){const l=c(["Vuetify","Programming"]),u=c(["Programming","Design","Vue","Vuetify"]);return(v,n)=>{const a=s("v-combobox"),i=s("v-col"),d=s("v-avatar"),p=s("v-chip"),V=s("v-row");return b(),g(h,null,[r(" ----------------------------------------------------------------------------- "),r(" Multiple Options "),r(" ----------------------------------------------------------------------------- "),m("div",null,[B,m("div",P,[e(V,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=t=>l.value=t),items:u.value,label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue","items"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=t=>l.value=t),items:u.value,label:"I use chips",multiple:"",chips:""},null,8,["modelValue","items"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=t=>l.value=t),items:u.value,label:"I use a scoped slot",multiple:"",chips:""},{selection:o(t=>[(b(),D(p,k({key:JSON.stringify(t.item)},t.attrs,{"input-value":t.selected,disabled:t.disabled,"onClick:close":J=>t.parent.selectItem(t.item)}),{default:o(()=>[e(d,{class:"accent white--text",left:"",textContent:w(t.item.slice(0,1).toUpperCase())},null,8,["textContent"]),_(" "+w(t.item),1)]),_:2},1040,["input-value","disabled","onClick:close"]))]),_:1},8,["modelValue","items"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=t=>l.value=t),label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})])])],2112)}}}),U=f($,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/combobox/ComboboxMultiple.vue"]]),F=m("p",{class:"text-subtitle-1 text-grey-darken-1"},[_(" You can use "),m("code",null,"dense"),_(" prop to reduce combobox height and lower max height of list items. ")],-1),M={class:"mt-4"},j=x({__name:"ComboboxDense",setup(C){const l=c(["Vuetify","Programming"]),u=c(["Programming","Design","Vue","Vuetify"]);return(v,n)=>{const a=s("v-combobox"),i=s("v-col"),d=s("v-row");return b(),g(h,null,[r(" ----------------------------------------------------------------------------- "),r(" Dense "),r(" ----------------------------------------------------------------------------- "),m("div",null,[F,m("div",M,[e(d,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=p=>l.value=p),items:u.value,label:"Combobox",multiple:"",outlined:"",dense:""},null,8,["modelValue","items"])]),_:1})]),_:1})])])],2112)}}}),E=f(j,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/combobox/ComboboxDense.vue"]]),I=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," In this example we utilize a custom no-data slot to provide context to the user when searching / creating items. ",-1),T={class:"mt-4"},S=m("kbd",null,"enter",-1),O=x({__name:"ComboboxNodatachips",setup(C){const l=c(["Vuetify"]),u=c(null),v=c(["Programming","Design","Vue","Vuetify"]);return(n,a)=>{const i=s("v-list-item-title"),d=s("v-list-item-content"),p=s("v-list-item"),V=s("v-combobox");return b(),g(h,null,[r(" ----------------------------------------------------------------------------- "),r(" No data chips "),r(" ----------------------------------------------------------------------------- "),m("div",null,[I,m("div",T,[e(V,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=t=>l.value=t),items:v.value,"search-input":u.value,"hide-selected":"",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":"","small-chips":""},{"no-data":o(()=>[e(p,null,{default:o(()=>[e(d,null,{default:o(()=>[e(i,null,{default:o(()=>[_(' No results matching "'),m("strong",null,w(u.value),1),_('". Press '),S,_(" to create a new one ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","items","search-input"])])])],2112)}}}),z=f(O,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/combobox/ComboboxNodatachips.vue"]]),A=x({__name:"FECombobox",setup(C){const l=c({title:"Combobox"}),u=c([{text:"Form Elements",disabled:!1,to:"#"},{text:"Combobox",disabled:!0}]);return(v,n)=>{const a=s("v-col"),i=s("v-row");return b(),g(h,null,[e(N,{title:l.value.title,breadcrumbs:u.value},null,8,["title","breadcrumbs"]),e(i,null,{default:o(()=>[e(a,{cols:"12",sm:"12"},{default:o(()=>[e(y,{heading:"Combobox - Multiple combobox"},{default:o(()=>[e(U)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:o(()=>[e(y,{heading:"Combobox - Dense"},{default:o(()=>[e(E)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:o(()=>[e(y,{heading:"Combobox - No data with chips"},{default:o(()=>[e(z)]),_:1})]),_:1})]),_:1})],64)}}}),H=f(A,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-elements/FECombobox.vue"]]);export{H as default};
