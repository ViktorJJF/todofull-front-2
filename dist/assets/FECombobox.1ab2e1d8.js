import{_ as h}from"./BaseBreadcrumb.51cce433.js";import{_ as f}from"./BaseCard.63286a8c.js";import{m as _,r as n,o as r,n as p,f as u,a as e,w as l,b as i,aD as m,c as C,P as y,B as w,Q as k,y as v,h as d,e as V,s as $,A as P,C as D,F as I}from"./index.ac5b851b.js";const N=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," Previously known as tags - user is allowed to enter more than 1 value ",-1),U={class:"mt-4"},B=_({__name:"ComboboxMultiple",setup(b){const s=n(["Vuetify","Programming"]),a=n(["Programming","Design","Vue","Vuetify"]);return(c,o)=>(r(),p("div",null,[N,u("div",U,[e(V,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(m,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value=t),items:a.value,label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue","items"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(m,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=t=>s.value=t),items:a.value,label:"I use chips",multiple:"",chips:""},null,8,["modelValue","items"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(m,{modelValue:s.value,"onUpdate:modelValue":o[2]||(o[2]=t=>s.value=t),items:a.value,label:"I use a scoped slot",multiple:"",chips:""},{selection:l(t=>[(r(),C(y,w({key:JSON.stringify(t.item)},t.attrs,{"input-value":t.selected,disabled:t.disabled,"onClick:close":x=>t.parent.selectItem(t.item)}),{default:l(()=>[e(k,{class:"accent white--text",left:"",textContent:v(t.item.slice(0,1).toUpperCase())},null,8,["textContent"]),d(" "+v(t.item),1)]),_:2},1040,["input-value","disabled","onClick:close"]))]),_:1},8,["modelValue","items"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(m,{modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=t=>s.value=t),label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})])]))}}),F=u("p",{class:"text-subtitle-1 text-grey-darken-1"},[d(" You can use "),u("code",null,"dense"),d(" prop to reduce combobox height and lower max height of list items. ")],-1),A={class:"mt-4"},E=_({__name:"ComboboxDense",setup(b){const s=n(["Vuetify","Programming"]),a=n(["Programming","Design","Vue","Vuetify"]);return(c,o)=>(r(),p("div",null,[F,u("div",A,[e(V,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(m,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value=t),items:a.value,label:"Combobox",multiple:"",outlined:"",dense:""},null,8,["modelValue","items"])]),_:1})]),_:1})])]))}}),M=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," In this example we utilize a custom no-data slot to provide context to the user when searching / creating items. ",-1),S={class:"mt-4"},L=u("kbd",null,"enter",-1),T=_({__name:"ComboboxNodatachips",setup(b){const s=n(["Vuetify"]),a=n(null),c=n(["Programming","Design","Vue","Vuetify"]);return(o,t)=>{const x=$("v-list-item-content");return r(),p("div",null,[M,u("div",S,[e(m,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=g=>s.value=g),items:c.value,"search-input":a.value,"hide-selected":"",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":"","small-chips":""},{"no-data":l(()=>[e(P,null,{default:l(()=>[e(x,null,{default:l(()=>[e(D,null,{default:l(()=>[d(' No results matching "'),u("strong",null,v(a.value),1),d('". Press '),L,d(" to create a new one ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","items","search-input"])])])}}}),Q=_({__name:"FECombobox",setup(b){const s=n({title:"Combobox"}),a=n([{text:"Form Elements",disabled:!1,to:"#"},{text:"Combobox",disabled:!0}]);return(c,o)=>(r(),p(I,null,[e(h,{title:s.value.title,breadcrumbs:a.value},null,8,["title","breadcrumbs"]),e(V,null,{default:l(()=>[e(i,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Combobox - Multiple combobox"},{default:l(()=>[e(B)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Combobox - Dense"},{default:l(()=>[e(E)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Combobox - No data with chips"},{default:l(()=>[e(T)]),_:1})]),_:1})]),_:1})],64))}});export{Q as default};
