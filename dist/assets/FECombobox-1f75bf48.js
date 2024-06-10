import{_ as C}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-a2c56a64.js";import{_ as h}from"./BaseCard.vue_vue_type_script_setup_true_lang-5bbdf108.js";import{f as b,h as u,r as s,o as p,g as f,b as c,a as e,w as t,c as w,t as V,d as _,m as y,F as k}from"./index-14e84a03.js";const $=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," Previously known as tags - user is allowed to enter more than 1 value ",-1),P={class:"mt-4"},N=b({__name:"ComboboxMultiple",setup(x){const l=u(["Vuetify","Programming"]),i=u(["Programming","Design","Vue","Vuetify"]);return(v,n)=>{const a=s("v-combobox"),m=s("v-col"),r=s("v-avatar"),d=s("v-chip"),g=s("v-row");return p(),f("div",null,[$,c("div",P,[e(g,null,{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=o=>l.value=o),items:i.value,label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue","items"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=o=>l.value=o),items:i.value,label:"I use chips",multiple:"",chips:""},null,8,["modelValue","items"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=o=>l.value=o),items:i.value,label:"I use a scoped slot",multiple:"",chips:""},{selection:t(o=>[(p(),w(d,y({key:JSON.stringify(o.item)},o.attrs,{"input-value":o.selected,disabled:o.disabled,"onClick:close":S=>o.parent.selectItem(o.item)}),{default:t(()=>[e(r,{class:"accent white--text",left:"",textContent:V(o.item.slice(0,1).toUpperCase())},null,8,["textContent"]),_(" "+V(o.item),1)]),_:2},1040,["input-value","disabled","onClick:close"]))]),_:1},8,["modelValue","items"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=o=>l.value=o),label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})])])}}}),U=c("p",{class:"text-subtitle-1 text-grey-darken-1"},[_(" You can use "),c("code",null,"dense"),_(" prop to reduce combobox height and lower max height of list items. ")],-1),D={class:"mt-4"},I=b({__name:"ComboboxDense",setup(x){const l=u(["Vuetify","Programming"]),i=u(["Programming","Design","Vue","Vuetify"]);return(v,n)=>{const a=s("v-combobox"),m=s("v-col"),r=s("v-row");return p(),f("div",null,[U,c("div",D,[e(r,null,{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[e(a,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=d=>l.value=d),items:i.value,label:"Combobox",multiple:"",outlined:"",dense:""},null,8,["modelValue","items"])]),_:1})]),_:1})])])}}}),B=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," In this example we utilize a custom no-data slot to provide context to the user when searching / creating items. ",-1),F={class:"mt-4"},E=c("kbd",null,"enter",-1),M=b({__name:"ComboboxNodatachips",setup(x){const l=u(["Vuetify"]),i=u(null),v=u(["Programming","Design","Vue","Vuetify"]);return(n,a)=>{const m=s("v-list-item-title"),r=s("v-list-item-content"),d=s("v-list-item"),g=s("v-combobox");return p(),f("div",null,[B,c("div",F,[e(g,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value=o),items:v.value,"search-input":i.value,"hide-selected":"",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":"","small-chips":""},{"no-data":t(()=>[e(d,null,{default:t(()=>[e(r,null,{default:t(()=>[e(m,null,{default:t(()=>[_(' No results matching "'),c("strong",null,V(i.value),1),_('". Press '),E,_(" to create a new one ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","items","search-input"])])])}}}),O=b({__name:"FECombobox",setup(x){const l=u({title:"Combobox"}),i=u([{text:"Form Elements",disabled:!1,to:"#"},{text:"Combobox",disabled:!0}]);return(v,n)=>{const a=s("v-col"),m=s("v-row");return p(),f(k,null,[e(C,{title:l.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),e(m,null,{default:t(()=>[e(a,{cols:"12",sm:"12"},{default:t(()=>[e(h,{heading:"Combobox - Multiple combobox"},{default:t(()=>[e(N)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(h,{heading:"Combobox - Dense"},{default:t(()=>[e(I)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(h,{heading:"Combobox - No data with chips"},{default:t(()=>[e(M)]),_:1})]),_:1})]),_:1})],64)}}});export{O as default};
