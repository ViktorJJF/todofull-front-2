import{e as I,as as Q,g,k as W,r as a,o as m,c as S,m as j,u as A,f as x,a as e,w as t,F as T,i as E,b as p,d as k,t as D,p as L,v as J,n as se,q as H,s as q,l as Y}from"./index-7ff8e042.js";import{m as G,c as Z}from"./categories-059aae17.js";const ue=I({__name:"MercadolibreAttributesSelect",props:{modelValue:null,marketplace:null,category:null},emits:["update:model-value"],setup(o,{emit:u}){const l=o,n=Q(),s=g([]),f=async()=>{const c=await G.listCategoryAttributes(l.marketplace._id,l.category);s.value=c.data.payload},h=c=>{u("update:model-value",c)};return W(()=>l.category,()=>{f()},{immediate:!0}),(c,_)=>{const i=a("v-select");return m(),S(i,j({items:s.value,"item-title":"name","item-value":"id"},A(n),{modelValue:o.modelValue,"onUpdate:modelValue":h}),null,16,["items","modelValue"])}}}),ce=p("h3",{class:"mt-1"},"Mapeo de Atributos",-1),re=I({__name:"MappingSection",props:{mercadolibre:null,category:null},emits:["update:mercadolibre"],setup(o,{emit:u}){const l=g([]);G.list().then(s=>l.value=s.data.payload);const n=s=>{u("update:mercadolibre",s)};return(s,f)=>{const h=a("v-col"),c=a("v-row");return m(),x(T,null,[e(c,{dense:"",class:"mb-2"},{default:t(()=>[e(h,{cols:"12",sm:"12",md:"12"},{default:t(()=>[ce]),_:1})]),_:1}),(m(!0),x(T,null,E(l.value,_=>(m(),S(c,null,{default:t(()=>[e(h,null,{default:t(()=>[k(D(_.name)+" ",1),_.type==="mercadolibre"?(m(),S(ue,{key:0,marketplace:_,category:o.category,variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Selecciona un atributo","model-value":o.mercadolibre,"onUpdate:modelValue":n},null,8,["marketplace","category","model-value"])):L("",!0)]),_:2},1024)]),_:2},1024))),256))],64)}}}),de=I({__name:"CategoriesSelect",props:{modelValue:{type:Array},parent:{type:String},level:{type:Number,default:0}},emits:["update:modelValue"],setup(o,{emit:u}){const l=o,n=Q(),s=g([]),f=g(!1),h=J(()=>s.value.length===0&&f.value===!1),c=J(()=>s.value.length?l.modelValue[l.level]:null),_=async()=>{f.value=!0;const d={parent:l.parent||""},v=await Z.list(d);s.value=v.data.payload,f.value=!1};_(),W(()=>l.parent,()=>{_();const d=l.modelValue.slice(0,l.level);u("update:modelValue",d)});const i=d=>{let v=[...l.modelValue];d?v[l.level]=d:v=v.slice(0,l.level),u("update:modelValue",v)},r=d=>{u("update:modelValue",d)};return(d,v)=>{const y=a("v-select"),w=a("CategoriesSelect",!0);return m(),x("div",{class:se({"mt-2":!!o.parent})},[A(h)?L("",!0):(m(),S(y,j({key:0,items:s.value,"item-title":"name","item-value":"_id"},A(n),{loading:f.value,modelValue:A(c),"onUpdate:modelValue":i}),null,16,["items","loading","modelValue"])),A(c)?(m(),S(w,j({key:1,parent:A(c)},A(n),{level:o.level+1,modelValue:o.modelValue,"onUpdate:modelValue":r}),null,16,["parent","level","modelValue"])):L("",!0)],2)}}}),ie=p("h3",{class:"mt-1"},"Sección de Categorías",-1),me={class:"body-1 font-weight-bold"},_e=I({__name:"CategoriesSection",props:{modelValue:null},emits:["update:model-value"],setup(o,{emit:u}){const l=o,n=g([]),s=async()=>{const _=(await Z.list({id:l.modelValue.join(",")})).data.payload;n.value=_.map(i=>({selected:i.pathFromRoot.map(r=>r._id)}))};l.modelValue.length&&s();const f=()=>{n.value.push({selected:[]})},h=(c,_)=>{const i=[...l.modelValue];i[_]=c.slice(-1)[0],u("update:model-value",i)};return(c,_)=>{const i=a("v-col"),r=a("v-row"),d=a("v-divider"),v=a("v-icon"),y=a("v-tooltip"),w=a("v-btn");return m(),x(T,null,[e(r,{dense:"",class:"my-3"},{default:t(()=>[e(i,null,{default:t(()=>[ie]),_:1})]),_:1}),(m(!0),x(T,null,E(n.value,(M,U)=>(m(),S(r,{key:U},{default:t(()=>[e(i,null,{default:t(()=>[p("div",me,"Categoria "+D(U+1),1),e(de,{modelValue:M.selected,"onUpdate:modelValue":[$=>M.selected=$,$=>h($,U)],variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Selecciona una categoría"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{cols:"12"},{default:t(()=>[e(d)]),_:1})]),_:2},1024))),128)),e(r,null,{default:t(()=>[e(i,null,{default:t(()=>[e(w,{icon:"",size:"x-small",onClick:f},{default:t(()=>[e(v,null,{default:t(()=>[k("mdi-plus")]),_:1}),e(y,{activator:"parent",anchor:"start"},{default:t(()=>[k("Nueva Categoria")]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});var z=(o=>(o.Select="select",o.Text="text",o.Color="color",o))(z||{});const K={list(o={sort:"nombre",order:"1"}){return H.get(q.DASHBOARD_BASE_URL+"/api/marketplace-attributes",{params:o})},update(o,u){return H.put(q.DASHBOARD_BASE_URL+`/api/marketplace-attributes/${o}`,u)},create(o){return H.post(q.DASHBOARD_BASE_URL+"/api/marketplace-attributes",o)},delete(o,u){return H.delete(q.DASHBOARD_BASE_URL+`/api/marketplace-attributes/${o}`,{data:u})}},ve={class:"headline"},pe=p("h3",{class:"mt-1"},"Datos generales",-1),fe=p("div",{class:"body-1 font-weight-bold"},"Nombre atributo",-1),be=p("div",{class:"body-1 font-weight-bold"},"Tipo",-1),ge=p("div",{class:"body-1 font-weight-bold"},"Términos",-1),he=p("div",{class:"body-1 font-weight-bold"},"Nombre",-1),Ve=p("div",{class:"body-1 font-weight-bold"},"Descripción",-1),ye=p("thead",null,[p("tr",null,[p("th",null,"Nombre"),p("th",null,"Descripción")])],-1),Se=p("div",{class:"flex-grow-1"},null,-1),Ce=I({__name:"index",props:{attribute:null},emits:["save"],setup(o,{emit:u}){var d,v,y,w,M,U,$;const l=o,n=g({_id:((d=l.attribute)==null?void 0:d._id)||null,name:((v=l.attribute)==null?void 0:v.name)||"",type:((y=l.attribute)==null?void 0:y.type)||null,terms:((w=l.attribute)==null?void 0:w.terms)||[],category:((M=l.attribute)==null?void 0:M.category)||null,categories:((U=l.attribute)==null?void 0:U.categories)||[],mercadolibre:(($=l.attribute)==null?void 0:$.mercadolibre)||""}),s=g({name:"",description:""}),f=g([{title:"Select",value:z.Select},{title:"Text",value:z.Text},{title:"Color Picker",value:z.Color}]),h=g(!1),c=g([]),_=J(()=>l.attribute?"Modificar Atributo":"Agregar Nuevo Atributo");W(c,O=>{O.length&&Object.assign(n.value,{category:c.value.slice(-1)[0]})});const i=()=>{s.value.name.trim().length&&(n.value.terms.push(s.value),s.value={name:"",description:""})},r=async O=>{if(n.value._id){const C=await K.update(n.value._id,n.value);u("save",C.data.payload);return}const F=await K.create(n.value);u("save",F.data.payload)};return(O,V)=>{const F=a("v-icon"),C=a("v-card-title"),R=a("v-divider"),B=a("v-col"),N=a("v-row"),P=a("v-text-field"),ee=a("v-select"),X=a("v-btn"),te=a("v-table"),le=a("v-container"),ae=a("v-card-actions"),oe=a("v-form"),ne=a("v-card");return m(),S(ne,null,{default:t(()=>[e(oe,{onSubmit:Y(r,["prevent"])},{default:t(()=>[e(C,null,{default:t(()=>[e(F,{color:"primary",class:"mr-1"},{default:t(()=>[k("mdi-update")]),_:1}),p("span",ve,D(A(_)),1)]),_:1}),e(R),e(le,null,{default:t(()=>[e(N,{dense:"",class:"mb-2"},{default:t(()=>[e(B,{cols:"12",sm:"12",md:"12"},{default:t(()=>[pe]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(B,{cols:"12",sm:"12",md:"12"},{default:t(()=>[fe,e(P,{modelValue:n.value.name,"onUpdate:modelValue":V[0]||(V[0]=b=>n.value.name=b),placeholder:"Ingresa el nombre",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(B,{cols:"12"},{default:t(()=>[be,e(ee,{items:f.value,modelValue:n.value.type,"onUpdate:modelValue":V[1]||(V[1]=b=>n.value.type=b),rules:[b=>!!b||"El campo es requerido"],variant:"outlined",density:"compact","hide-details":""},null,8,["items","modelValue","rules"])]),_:1})]),_:1}),e(_e,{modelValue:n.value.categories,"onUpdate:modelValue":V[2]||(V[2]=b=>n.value.categories=b)},null,8,["modelValue"]),n.value.categories.length?(m(),S(re,{key:0,mercadolibre:n.value.mercadolibre,"onUpdate:mercadolibre":V[3]||(V[3]=b=>n.value.mercadolibre=b),category:n.value.categories[0]},null,8,["mercadolibre","category"])):L("",!0),e(N,null,{default:t(()=>[e(B,{cols:"12"},{default:t(()=>[ge,e(X,{color:"primary",onClick:i},{default:t(()=>[k(" Agregar ")]),_:1})]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(B,null,{default:t(()=>[he,e(P,{modelValue:s.value.name,"onUpdate:modelValue":V[4]||(V[4]=b=>s.value.name=b),placeholder:"Ingresa el nombre",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(B,null,{default:t(()=>[Ve,e(P,{modelValue:s.value.description,"onUpdate:modelValue":V[5]||(V[5]=b=>s.value.description=b),placeholder:"Ingresa el nombre",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(B,{cols:"12"},{default:t(()=>[e(te,{class:"f"},{default:t(()=>[ye,p("tbody",null,[(m(!0),x(T,null,E(n.value.terms,b=>(m(),x("tr",{key:b.name},[p("td",null,D(b.name),1),p("td",null,D(b.description),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e(ae,{"rd-actions":""},{default:t(()=>[Se,e(X,{type:"submit",loading:h.value,variant:"outlined"},{default:t(()=>[k(" Guardar ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})}}}),ke=I({__name:"MercadolibreAttributesTermSelect",props:{modelValue:null,marketplace:null,categories:null,attribute:null},emits:["update:model-value"],setup(o,{emit:u}){const l=o,n=Q(),s=g([]);(async()=>{const i=(await G.listCategoryAttributes(l.marketplace._id,l.categories[0])).data.payload.find(r=>r.id===l.attribute);i&&i.values&&(s.value=s.value=i.values)})();const h=c=>{u("update:model-value",c)};return(c,_)=>{const i=a("v-select");return m(),S(i,j({items:s.value,"item-title":"name","item-value":"id"},A(n),{modelValue:o.modelValue,"onUpdate:modelValue":h}),null,16,["items","modelValue"])}}}),we=["onSubmit"],xe=I({__name:"MappingForm",props:{attribute:null,term:null},setup(o){const u=g([]);G.list().then(n=>u.value=n.data.payload);const l=()=>{console.log("submit")};return(n,s)=>{const f=a("v-card-title"),h=a("v-col"),c=a("v-row"),_=a("v-card-text"),i=a("v-spacer"),r=a("v-btn"),d=a("v-card-actions"),v=a("v-card");return m(),x("form",{onSubmit:Y(l,["prevent"])},[e(v,null,{default:t(()=>[e(f,null,{default:t(()=>[k("Mapeo de Terminos")]),_:1}),e(_,null,{default:t(()=>[(m(!0),x(T,null,E(u.value,y=>(m(),S(c,null,{default:t(()=>[e(h,null,{default:t(()=>[k(D(y.name)+" ",1),y.type==="mercadolibre"?(m(),S(ke,{key:0,marketplace:y,categories:o.attribute.categories,attribute:o.attribute.mercadolibre,modelValue:o.term.mercadolibre,"onUpdate:modelValue":s[0]||(s[0]=w=>o.term.mercadolibre=w),variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Selecciona un término"},null,8,["marketplace","categories","attribute","modelValue"])):L("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(d,null,{default:t(()=>[e(i),e(r,{type:"submit"},{default:t(()=>[k("Guardar")]),_:1})]),_:1})]),_:1})],40,we)}}}),Ae={class:"float-right"},Be=I({__name:"Attributes",setup(o){const u=g([]),l=g(null),n=g(null),s=g(!1),f=g(!1);K.list().then(r=>{u.value=r.data.payload});const h=r=>{l.value=r,s.value=!0},c=(r,d)=>{l.value=r,n.value=d,f.value=!0},_=r=>{if(l.value){const v=u.value.findIndex(y=>y._id===r._id);u.value.splice(v,1,r);return}u.value.push(r)},i=r=>{r===!1&&(l.value=null)};return(r,d)=>{const v=a("v-btn"),y=a("v-col"),w=a("v-row"),M=a("v-icon"),U=a("v-card-title"),$=a("v-card-actions"),O=a("v-card"),V=a("v-dialog"),F=a("v-container");return m(),S(F,null,{default:t(()=>[e(w,null,{default:t(()=>[e(y,{class:"ml-2"},{default:t(()=>[e(v,{class:"",onClick:d[0]||(d[0]=C=>s.value=!0)},{default:t(()=>[k("Agregar")]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[(m(!0),x(T,null,E(u.value,C=>(m(),S(y,{cols:"4"},{default:t(()=>[e(O,null,{default:t(()=>[e(U,null,{default:t(()=>[k(D(C.name)+" ",1),p("div",Ae,[e(v,{variant:"text",size:"small",color:"dark",icon:"",onClick:R=>h(C)},{default:t(()=>[e(M,null,{default:t(()=>[k("mdi-pencil")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),e($,null,{default:t(()=>[(m(!0),x(T,null,E(C.terms,R=>(m(),S(v,{variant:"outlined",key:R.name,onClick:B=>c(C,R)},{default:t(()=>[k(D(R.name),1)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(V,{modelValue:s.value,"onUpdate:modelValue":[d[1]||(d[1]=C=>s.value=C),i],"max-width":"600px"},{default:t(()=>[e(Ce,{attribute:l.value,onSave:_},null,8,["attribute"])]),_:1},8,["modelValue"]),e(V,{modelValue:f.value,"onUpdate:modelValue":d[2]||(d[2]=C=>f.value=C),"max-width":"600px"},{default:t(()=>[e(xe,{attribute:l.value,term:n.value},null,8,["attribute","term"])]),_:1},8,["modelValue"])]),_:1})}}});export{Be as default};
