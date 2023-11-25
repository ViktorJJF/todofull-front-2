import{e as q,as as W,g,l as X,r as a,o as m,c as S,m as G,u as x,_ as B,f as k,a as e,w as t,F as $,k as R,b as v,d as w,t as M,j as O,v as K,n as se,q as L,s as H,p as Z}from"./index-5dece143.js";import{m as P,c as ee}from"./categories-38e84124.js";const ue=q({__name:"MercadolibreAttributesSelect",props:{modelValue:{type:null,required:!0},marketplace:{type:null,required:!0},category:{type:String,required:!0}},emits:["update:model-value"],setup(o,{emit:s}){const l=o,n=W(),r=g([]),f=async()=>{const u=await P.listCategoryAttributes(l.marketplace._id,l.category);r.value=u.data.payload},y=u=>{s("update:model-value",u)};return X(()=>l.category,()=>{f()},{immediate:!0}),(u,_)=>{const i=a("v-select");return m(),S(i,G({items:r.value,"item-title":"name","item-value":"id"},x(n),{modelValue:o.modelValue,"onUpdate:modelValue":y}),null,16,["items","modelValue"])}}}),ce=B(ue,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/marketplacesMapping/MercadolibreAttributesSelect.vue"]]),de=v("h3",{class:"mt-1"},"Mapeo de Atributos",-1),ie=q({__name:"MappingSection",props:{mercadolibre:{type:String,required:!0},category:{type:String,required:!0}},emits:["update:mercadolibre"],setup(o,{emit:s}){const l=g([]);P.list().then(r=>l.value=r.data.payload);const n=r=>{s("update:mercadolibre",r)};return(r,f)=>{const y=a("v-col"),u=a("v-row");return m(),k($,null,[e(u,{dense:"",class:"mb-2"},{default:t(()=>[e(y,{cols:"12",sm:"12",md:"12"},{default:t(()=>[de]),_:1})]),_:1}),(m(!0),k($,null,R(l.value,_=>(m(),S(u,null,{default:t(()=>[e(y,null,{default:t(()=>[w(M(_.name)+" ",1),_.type==="mercadolibre"?(m(),S(ce,{key:0,marketplace:_,category:o.category,variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Selecciona un atributo","model-value":o.mercadolibre,"onUpdate:modelValue":n},null,8,["marketplace","category","model-value"])):O("v-if",!0)]),_:2},1024)]),_:2},1024))),256))],64)}}}),me=B(ie,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/attributes/CreateUpdate/MappingSection.vue"]]),_e=q({__name:"CategoriesSelect",props:{modelValue:{type:Array},parent:{type:String},level:{type:Number,default:0}},emits:["update:modelValue"],setup(o,{emit:s}){const l=o,n=W(),r=g([]),f=g(!1),y=K(()=>r.value.length===0&&f.value===!1),u=K(()=>r.value.length?l.modelValue[l.level]:null),_=async()=>{f.value=!0;const d={parent:l.parent||""},p=await ee.list(d);r.value=p.data.payload,f.value=!1};_(),X(()=>l.parent,()=>{_();const d=l.modelValue.slice(0,l.level);s("update:modelValue",d)});const i=d=>{let p=[...l.modelValue];d?p[l.level]=d:p=p.slice(0,l.level),s("update:modelValue",p)},c=d=>{s("update:modelValue",d)};return(d,p)=>{const V=a("v-select"),A=a("CategoriesSelect",!0);return m(),k("div",{class:se({"mt-2":!!o.parent})},[x(y)?O("v-if",!0):(m(),S(V,G({key:0,items:r.value,"item-title":"name","item-value":"_id"},x(n),{loading:f.value,modelValue:x(u),"onUpdate:modelValue":i}),null,16,["items","loading","modelValue"])),x(u)?(m(),S(A,G({key:1,parent:x(u)},x(n),{level:o.level+1,modelValue:o.modelValue,"onUpdate:modelValue":c}),null,16,["parent","level","modelValue"])):O("v-if",!0)],2)}}}),pe=B(_e,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/CategoriesSelect.vue"]]),ve=v("h3",{class:"mt-1"},"Sección de Categorías",-1),fe={class:"body-1 font-weight-bold"},be=q({__name:"CategoriesSection",props:{modelValue:{type:Array,required:!0}},emits:["update:model-value"],setup(o,{emit:s}){const l=o,n=g([]),r=async()=>{const _=(await ee.list({id:l.modelValue.join(",")})).data.payload;n.value=_.map(i=>({selected:i.pathFromRoot.map(c=>c._id)}))};l.modelValue.length&&r();const f=()=>{n.value.push({selected:[]})},y=(u,_)=>{const i=[...l.modelValue];i[_]=u.slice(-1)[0],s("update:model-value",i)};return(u,_)=>{const i=a("v-col"),c=a("v-row"),d=a("v-divider"),p=a("v-icon"),V=a("v-tooltip"),A=a("v-btn");return m(),k($,null,[e(c,{dense:"",class:"my-3"},{default:t(()=>[e(i,null,{default:t(()=>[ve]),_:1})]),_:1}),(m(!0),k($,null,R(n.value,(j,U)=>(m(),S(c,{key:U},{default:t(()=>[e(i,null,{default:t(()=>[v("div",fe,"Categoria "+M(U+1),1),e(pe,{modelValue:j.selected,"onUpdate:modelValue":[T=>j.selected=T,T=>y(T,U)],variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Selecciona una categoría"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{cols:"12"},{default:t(()=>[e(d)]),_:1})]),_:2},1024))),128)),e(c,null,{default:t(()=>[e(i,null,{default:t(()=>[e(A,{icon:"",size:"x-small",onClick:f},{default:t(()=>[e(p,null,{default:t(()=>[w("mdi-plus")]),_:1}),e(V,{activator:"parent",anchor:"start"},{default:t(()=>[w("Nueva Categoria")]),_:1})]),_:1})]),_:1})]),_:1})],64)}}}),ge=B(be,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/attributes/CreateUpdate/CategoriesSection.vue"]]);var z=(o=>(o.Select="select",o.Text="text",o.Color="color",o))(z||{});const Q={list(o={sort:"nombre",order:"1"}){return L.get(H.DASHBOARD_BASE_URL+"/api/marketplace-attributes",{params:o})},update(o,s){return L.put(H.DASHBOARD_BASE_URL+`/api/marketplace-attributes/${o}`,s)},create(o){return L.post(H.DASHBOARD_BASE_URL+"/api/marketplace-attributes",o)},delete(o,s){return L.delete(H.DASHBOARD_BASE_URL+`/api/marketplace-attributes/${o}`,{data:s})}},ye={class:"headline"},he=v("h3",{class:"mt-1"},"Datos generales",-1),Ve=v("div",{class:"body-1 font-weight-bold"},"Nombre atributo",-1),Se=v("div",{class:"body-1 font-weight-bold"},"Tipo",-1),Ce=v("div",{class:"body-1 font-weight-bold"},"Términos",-1),we=v("div",{class:"body-1 font-weight-bold"},"Nombre",-1),Ae=v("div",{class:"body-1 font-weight-bold"},"Descripción",-1),ke=v("thead",null,[v("tr",null,[v("th",null,"Nombre"),v("th",null,"Descripción")])],-1),xe=v("div",{class:"flex-grow-1"},null,-1),Ue=q({__name:"index",props:{attribute:{type:null,required:!1}},emits:["save"],setup(o,{emit:s}){var d,p,V,A,j,U,T;const l=o,n=g({_id:((d=l.attribute)==null?void 0:d._id)||null,name:((p=l.attribute)==null?void 0:p.name)||"",type:((V=l.attribute)==null?void 0:V.type)||null,terms:((A=l.attribute)==null?void 0:A.terms)||[],category:((j=l.attribute)==null?void 0:j.category)||null,categories:((U=l.attribute)==null?void 0:U.categories)||[],mercadolibre:((T=l.attribute)==null?void 0:T.mercadolibre)||""}),r=g({name:"",description:""}),f=g([{title:"Select",value:z.Select},{title:"Text",value:z.Text},{title:"Color Picker",value:z.Color}]),y=g(!1),u=g([]),_=K(()=>l.attribute?"Modificar Atributo":"Agregar Nuevo Atributo");X(u,F=>{F.length&&Object.assign(n.value,{category:u.value.slice(-1)[0]})});const i=()=>{r.value.name.trim().length&&(n.value.terms.push(r.value),r.value={name:"",description:""})},c=async F=>{if(n.value._id){const C=await Q.update(n.value._id,n.value);s("save",C.data.payload);return}const E=await Q.create(n.value);s("save",E.data.payload)};return(F,h)=>{const E=a("v-icon"),C=a("v-card-title"),N=a("v-divider"),D=a("v-col"),I=a("v-row"),J=a("v-text-field"),te=a("v-select"),Y=a("v-btn"),le=a("v-table"),ae=a("v-container"),oe=a("v-card-actions"),ne=a("v-form"),re=a("v-card");return m(),S(re,null,{default:t(()=>[e(ne,{onSubmit:Z(c,["prevent"])},{default:t(()=>[e(C,null,{default:t(()=>[e(E,{color:"primary",class:"mr-1"},{default:t(()=>[w("mdi-update")]),_:1}),v("span",ye,M(x(_)),1)]),_:1}),e(N),e(ae,null,{default:t(()=>[e(I,{dense:"",class:"mb-2"},{default:t(()=>[e(D,{cols:"12",sm:"12",md:"12"},{default:t(()=>[he]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(D,{cols:"12",sm:"12",md:"12"},{default:t(()=>[Ve,e(J,{modelValue:n.value.name,"onUpdate:modelValue":h[0]||(h[0]=b=>n.value.name=b),placeholder:"Ingresa el nombre",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(D,{cols:"12"},{default:t(()=>[Se,e(te,{items:f.value,modelValue:n.value.type,"onUpdate:modelValue":h[1]||(h[1]=b=>n.value.type=b),rules:[b=>!!b||"El campo es requerido"],variant:"outlined",density:"compact","hide-details":""},null,8,["items","modelValue","rules"])]),_:1})]),_:1}),e(ge,{modelValue:n.value.categories,"onUpdate:modelValue":h[2]||(h[2]=b=>n.value.categories=b)},null,8,["modelValue"]),n.value.categories.length?(m(),S(me,{key:0,mercadolibre:n.value.mercadolibre,"onUpdate:mercadolibre":h[3]||(h[3]=b=>n.value.mercadolibre=b),category:n.value.categories[0]},null,8,["mercadolibre","category"])):O("v-if",!0),e(I,null,{default:t(()=>[e(D,{cols:"12"},{default:t(()=>[Ce,e(Y,{color:"primary",onClick:i},{default:t(()=>[w(" Agregar ")]),_:1})]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(D,null,{default:t(()=>[we,e(J,{modelValue:r.value.name,"onUpdate:modelValue":h[4]||(h[4]=b=>r.value.name=b),placeholder:"Ingresa el nombre",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(D,null,{default:t(()=>[Ae,e(J,{modelValue:r.value.description,"onUpdate:modelValue":h[5]||(h[5]=b=>r.value.description=b),placeholder:"Ingresa el nombre",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(D,{cols:"12"},{default:t(()=>[e(le,{class:"f"},{default:t(()=>[ke,v("tbody",null,[(m(!0),k($,null,R(n.value.terms,b=>(m(),k("tr",{key:b.name},[v("td",null,M(b.name),1),v("td",null,M(b.description),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e(oe,{"rd-actions":""},{default:t(()=>[xe,e(Y,{type:"submit",loading:y.value,variant:"outlined"},{default:t(()=>[w(" Guardar ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})}}}),Te=B(Ue,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/attributes/CreateUpdate/index.vue"]]),De=q({__name:"MercadolibreAttributesTermSelect",props:{modelValue:{type:null,required:!1},marketplace:{type:null,required:!0},categories:{type:Array,required:!0},attribute:{type:null,required:!0}},emits:["update:model-value"],setup(o,{emit:s}){const l=o,n=W(),r=g([]);(async()=>{const i=(await P.listCategoryAttributes(l.marketplace._id,l.categories[0])).data.payload.find(c=>c.id===l.attribute);i&&i.values&&(r.value=r.value=i.values)})();const y=u=>{s("update:model-value",u)};return(u,_)=>{const i=a("v-select");return m(),S(i,G({items:r.value,"item-title":"name","item-value":"id"},x(n),{modelValue:o.modelValue,"onUpdate:modelValue":y}),null,16,["items","modelValue"])}}}),Me=B(De,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/marketplacesMapping/MercadolibreAttributesTermSelect.vue"]]),$e=["onSubmit"],qe=q({__name:"MappingForm",props:{attribute:{type:null,required:!0},term:{type:null,required:!0}},setup(o){const s=g([]);P.list().then(n=>s.value=n.data.payload);const l=()=>{console.log("submit")};return(n,r)=>{const f=a("v-card-title"),y=a("v-col"),u=a("v-row"),_=a("v-card-text"),i=a("v-spacer"),c=a("v-btn"),d=a("v-card-actions"),p=a("v-card");return m(),k("form",{onSubmit:Z(l,["prevent"])},[e(p,null,{default:t(()=>[e(f,null,{default:t(()=>[w("Mapeo de Terminos")]),_:1}),e(_,null,{default:t(()=>[(m(!0),k($,null,R(s.value,V=>(m(),S(u,null,{default:t(()=>[e(y,null,{default:t(()=>[w(M(V.name)+" ",1),V.type==="mercadolibre"?(m(),S(Me,{key:0,marketplace:V,categories:o.attribute.categories,attribute:o.attribute.mercadolibre,modelValue:o.term.mercadolibre,"onUpdate:modelValue":r[0]||(r[0]=A=>o.term.mercadolibre=A),variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Selecciona un término"},null,8,["marketplace","categories","attribute","modelValue"])):O("v-if",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(d,null,{default:t(()=>[e(i),e(c,{type:"submit"},{default:t(()=>[w("Guardar")]),_:1})]),_:1})]),_:1})],40,$e)}}}),Be=B(qe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/attributes/MappingForm.vue"]]),je={class:"float-right"},Ie=q({__name:"Attributes",setup(o){const s=g([]),l=g(null),n=g(null),r=g(!1),f=g(!1);Q.list().then(c=>{s.value=c.data.payload});const y=c=>{l.value=c,r.value=!0},u=(c,d)=>{l.value=c,n.value=d,f.value=!0},_=c=>{if(l.value){const p=s.value.findIndex(V=>V._id===c._id);s.value.splice(p,1,c);return}s.value.push(c)},i=c=>{c===!1&&(l.value=null)};return(c,d)=>{const p=a("v-btn"),V=a("v-col"),A=a("v-row"),j=a("v-icon"),U=a("v-card-title"),T=a("v-card-actions"),F=a("v-card"),h=a("v-dialog"),E=a("v-container");return m(),S(E,null,{default:t(()=>[e(A,null,{default:t(()=>[e(V,{class:"ml-2"},{default:t(()=>[e(p,{class:"",onClick:d[0]||(d[0]=C=>r.value=!0)},{default:t(()=>[w("Agregar")]),_:1})]),_:1})]),_:1}),e(A,null,{default:t(()=>[(m(!0),k($,null,R(s.value,C=>(m(),S(V,{cols:"4"},{default:t(()=>[e(F,null,{default:t(()=>[e(U,null,{default:t(()=>[w(M(C.name)+" ",1),v("div",je,[e(p,{variant:"text",size:"small",color:"dark",icon:"",onClick:N=>y(C)},{default:t(()=>[e(j,null,{default:t(()=>[w("mdi-pencil")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),e(T,null,{default:t(()=>[(m(!0),k($,null,R(C.terms,N=>(m(),S(p,{variant:"outlined",key:N.name,onClick:D=>u(C,N)},{default:t(()=>[w(M(N.name),1)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(h,{modelValue:r.value,"onUpdate:modelValue":[d[1]||(d[1]=C=>r.value=C),i],"max-width":"600px"},{default:t(()=>[e(Te,{attribute:l.value,onSave:_},null,8,["attribute"])]),_:1},8,["modelValue"]),e(h,{modelValue:f.value,"onUpdate:modelValue":d[2]||(d[2]=C=>f.value=C),"max-width":"600px"},{default:t(()=>[e(Be,{attribute:l.value,term:n.value},null,8,["attribute","term"])]),_:1},8,["modelValue"])]),_:1})}}}),Fe=B(Ie,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/attributes/Attributes.vue"]]);export{Fe as default};
