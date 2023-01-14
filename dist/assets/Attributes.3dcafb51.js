import{m as T,aZ as q,r as b,H as G,o as d,c as y,B as E,u as A,ah as F,n as k,a as e,w as t,b as g,e as V,F as w,v as $,h as C,y as U,L as B,f as v,Z as j,s as oe,D as ne,T as ee,g as D,l as P,aN as se,X as I,Y as M,i as de,J as te,ap as Y,V as le,j as H,ai as re,aY as Z,d as J,ab as ie,M as ce,aU as W}from"./index.270d3377.js";import{m as R,c as ae}from"./categories.53873f82.js";const me=T({__name:"MercadolibreAttributesSelect",props:{modelValue:null,marketplace:null,category:null},emits:["update:model-value"],setup(a,{emit:n}){const l=a,u=q(),o=b([]),m=async()=>{const c=await R.listCategoryAttributes(l.marketplace._id,l.category);o.value=c.data.payload},_=c=>{n("update:model-value",c)};return G(()=>l.category,()=>{m()},{immediate:!0}),(c,h)=>(d(),y(F,E({items:o.value,"item-title":"name","item-value":"id"},A(u),{modelValue:a.modelValue,"onUpdate:modelValue":_}),null,16,["items","modelValue"]))}}),pe=v("h3",{class:"mt-1"},"Mapeo de Atributos",-1),ve=T({__name:"MappingSection",props:{mercadolibre:null,category:null},emits:["update:mercadolibre"],setup(a,{emit:n}){const l=b([]);R.list().then(o=>l.value=o.data.payload);const u=o=>{n("update:mercadolibre",o)};return(o,m)=>(d(),k(w,null,[e(V,{dense:"",class:"mb-2"},{default:t(()=>[e(g,{cols:"12",sm:"12",md:"12"},{default:t(()=>[pe]),_:1})]),_:1}),(d(!0),k(w,null,$(l.value,_=>(d(),y(V,null,{default:t(()=>[e(g,null,{default:t(()=>[C(U(_.name)+" ",1),_.type==="mercadolibre"?(d(),y(me,{key:0,marketplace:_,category:a.category,variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Selecciona un atributo","model-value":a.mercadolibre,"onUpdate:modelValue":u},null,8,["marketplace","category","model-value"])):B("",!0)]),_:2},1024)]),_:2},1024))),256))],64))}}),_e=T({__name:"CategoriesSelect",props:{modelValue:{type:Array},parent:{type:String},level:{type:Number,default:0}},emits:["update:modelValue"],setup(a,{emit:n}){const l=a,u=q(),o=b([]),m=b(!1),_=j(()=>o.value.length===0&&m.value===!1),c=j(()=>o.value.length?l.modelValue[l.level]:null),h=async()=>{m.value=!0;const s={parent:l.parent||""},i=await ae.list(s);o.value=i.data.payload,m.value=!1};h(),G(()=>l.parent,()=>{h();const s=l.modelValue.slice(0,l.level);n("update:modelValue",s)});const f=s=>{let i=[...l.modelValue];s?i[l.level]=s:i=i.slice(0,l.level),n("update:modelValue",i)},r=s=>{n("update:modelValue",s)};return(s,i)=>{const x=oe("CategoriesSelect",!0);return d(),k("div",{class:ne({"mt-2":!!a.parent})},[A(_)?B("",!0):(d(),y(F,E({key:0,items:o.value,"item-title":"name","item-value":"_id"},A(u),{loading:m.value,modelValue:A(c),"onUpdate:modelValue":f}),null,16,["items","loading","modelValue"])),A(c)?(d(),y(x,E({key:1,parent:A(c)},A(u),{level:a.level+1,modelValue:a.modelValue,"onUpdate:modelValue":r}),null,16,["parent","level","modelValue"])):B("",!0)],2)}}}),fe=v("h3",{class:"mt-1"},"Secci\xF3n de Categor\xEDas",-1),be={class:"body-1 font-weight-bold"},ge=T({__name:"CategoriesSection",props:{modelValue:null},emits:["update:model-value"],setup(a,{emit:n}){const l=a,u=b([]),o=async()=>{const h=(await ae.list({id:l.modelValue.join(",")})).data.payload;u.value=h.map(f=>({selected:f.pathFromRoot.map(r=>r._id)}))};l.modelValue.length&&o();const m=()=>{u.value.push({selected:[]})},_=(c,h)=>{const f=[...l.modelValue];f[h]=c.slice(-1)[0],n("update:model-value",f)};return(c,h)=>(d(),k(w,null,[e(V,{dense:"",class:"my-3"},{default:t(()=>[e(g,null,{default:t(()=>[fe]),_:1})]),_:1}),(d(!0),k(w,null,$(u.value,(f,r)=>(d(),y(V,{key:r},{default:t(()=>[e(g,null,{default:t(()=>[v("div",be,"Categoria "+U(r+1),1),e(_e,{modelValue:f.selected,"onUpdate:modelValue":[s=>f.selected=s,s=>_(s,r)],variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Selecciona una categor\xEDa"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(g,{cols:"12"},{default:t(()=>[e(ee)]),_:1})]),_:2},1024))),128)),e(V,null,{default:t(()=>[e(g,null,{default:t(()=>[e(D,{icon:"",size:"x-small",onClick:m},{default:t(()=>[e(P,null,{default:t(()=>[C("mdi-plus")]),_:1}),e(se,{activator:"parent",anchor:"start"},{default:t(()=>[C("Nueva Categoria")]),_:1})]),_:1})]),_:1})]),_:1})],64))}});var N=(a=>(a.Select="select",a.Text="text",a.Color="color",a))(N||{}),z={list(a={sort:"nombre",order:"1"}){return I.get(M.DASHBOARD_BASE_URL+"/api/marketplace-attributes",{params:a})},update(a,n){return I.put(M.DASHBOARD_BASE_URL+`/api/marketplace-attributes/${a}`,n)},create(a){return I.post(M.DASHBOARD_BASE_URL+"/api/marketplace-attributes",a)},delete(a,n){return I.delete(M.DASHBOARD_BASE_URL+`/api/marketplace-attributes/${a}`,{data:n})}};const Ve={class:"headline"},he=v("h3",{class:"mt-1"},"Datos generales",-1),ye=v("div",{class:"body-1 font-weight-bold"},"Nombre atributo",-1),Se=v("div",{class:"body-1 font-weight-bold"},"Tipo",-1),Ce=v("div",{class:"body-1 font-weight-bold"},"T\xE9rminos",-1),xe=v("div",{class:"body-1 font-weight-bold"},"Nombre",-1),ke=v("div",{class:"body-1 font-weight-bold"},"Descripci\xF3n",-1),Ae=v("thead",null,[v("tr",null,[v("th",null,"Nombre"),v("th",null,"Descripci\xF3n")])],-1),Ue=v("div",{class:"flex-grow-1"},null,-1),we=T({__name:"index",props:{attribute:null},emits:["save"],setup(a,{emit:n}){var s,i,x,L,X,K,Q;const l=a,u=b({_id:((s=l.attribute)==null?void 0:s._id)||null,name:((i=l.attribute)==null?void 0:i.name)||"",type:((x=l.attribute)==null?void 0:x.type)||null,terms:((L=l.attribute)==null?void 0:L.terms)||[],category:((X=l.attribute)==null?void 0:X.category)||null,categories:((K=l.attribute)==null?void 0:K.categories)||[],mercadolibre:((Q=l.attribute)==null?void 0:Q.mercadolibre)||""}),o=b({name:"",description:""}),m=b([{title:"Select",value:N.Select},{title:"Text",value:N.Text},{title:"Color Picker",value:N.Color}]),_=b(!1),c=b([]),h=j(()=>l.attribute?"Modificar Atributo":"Agregar Nuevo Atributo");G(c,O=>{O.length&&Object.assign(u.value,{category:c.value.slice(-1)[0]})});const f=()=>{!o.value.name.trim().length||(u.value.terms.push(o.value),o.value={name:"",description:""})},r=async O=>{if(u.value._id){const ue=await z.update(u.value._id,u.value);n("save",ue.data.payload);return}const p=await z.create(u.value);n("save",p.data.payload)};return(O,S)=>(d(),y(J,null,{default:t(()=>[e(de,{onSubmit:te(r,["prevent"])},{default:t(()=>[e(Y,null,{default:t(()=>[e(P,{color:"primary",class:"mr-1"},{default:t(()=>[C("mdi-update")]),_:1}),v("span",Ve,U(A(h)),1)]),_:1}),e(ee),e(le,null,{default:t(()=>[e(V,{dense:"",class:"mb-2"},{default:t(()=>[e(g,{cols:"12",sm:"12",md:"12"},{default:t(()=>[he]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(g,{cols:"12",sm:"12",md:"12"},{default:t(()=>[ye,e(H,{modelValue:u.value.name,"onUpdate:modelValue":S[0]||(S[0]=p=>u.value.name=p),placeholder:"Ingresa el nombre",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(g,{cols:"12"},{default:t(()=>[Se,e(F,{items:m.value,modelValue:u.value.type,"onUpdate:modelValue":S[1]||(S[1]=p=>u.value.type=p),rules:[p=>!!p||"El campo es requerido"],variant:"outlined",density:"compact","hide-details":""},null,8,["items","modelValue","rules"])]),_:1})]),_:1}),e(ge,{modelValue:u.value.categories,"onUpdate:modelValue":S[2]||(S[2]=p=>u.value.categories=p)},null,8,["modelValue"]),u.value.categories.length?(d(),y(ve,{key:0,mercadolibre:u.value.mercadolibre,"onUpdate:mercadolibre":S[3]||(S[3]=p=>u.value.mercadolibre=p),category:u.value.categories[0]},null,8,["mercadolibre","category"])):B("",!0),e(V,null,{default:t(()=>[e(g,{cols:"12"},{default:t(()=>[Ce,e(D,{color:"primary",onClick:f},{default:t(()=>[C(" Agregar ")]),_:1})]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(g,null,{default:t(()=>[xe,e(H,{modelValue:o.value.name,"onUpdate:modelValue":S[4]||(S[4]=p=>o.value.name=p),placeholder:"Ingresa el nombre",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(g,null,{default:t(()=>[ke,e(H,{modelValue:o.value.description,"onUpdate:modelValue":S[5]||(S[5]=p=>o.value.description=p),placeholder:"Ingresa el nombre",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(g,{cols:"12"},{default:t(()=>[e(re,{class:"f"},{default:t(()=>[Ae,v("tbody",null,[(d(!0),k(w,null,$(u.value.terms,p=>(d(),k("tr",{key:p.name},[v("td",null,U(p.name),1),v("td",null,U(p.description),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}),e(Z,{"rd-actions":""},{default:t(()=>[Ue,e(D,{type:"submit",loading:_.value,variant:"outlined"},{default:t(()=>[C(" Guardar ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}}),Te=T({__name:"MercadolibreAttributesTermSelect",props:{modelValue:null,marketplace:null,categories:null,attribute:null},emits:["update:model-value"],setup(a,{emit:n}){const l=a,u=q(),o=b([]);(async()=>{const f=(await R.listCategoryAttributes(l.marketplace._id,l.categories[0])).data.payload.find(r=>r.id===l.attribute);f&&f.values&&(o.value=o.value=f.values)})();const _=c=>{n("update:model-value",c)};return(c,h)=>(d(),y(F,E({items:o.value,"item-title":"name","item-value":"id"},A(u),{modelValue:a.modelValue,"onUpdate:modelValue":_}),null,16,["items","modelValue"]))}}),De=["onSubmit"],$e=T({__name:"MappingForm",props:{attribute:null,term:null},setup(a){const n=b([]);R.list().then(u=>n.value=u.data.payload);const l=()=>{console.log("submit")};return(u,o)=>(d(),k("form",{onSubmit:te(l,["prevent"])},[e(J,null,{default:t(()=>[e(Y,null,{default:t(()=>[C("Mapeo de Terminos")]),_:1}),e(ie,null,{default:t(()=>[(d(!0),k(w,null,$(n.value,m=>(d(),y(V,null,{default:t(()=>[e(g,null,{default:t(()=>[C(U(m.name)+" ",1),m.type==="mercadolibre"?(d(),y(Te,{key:0,marketplace:m,categories:a.attribute.categories,attribute:a.attribute.mercadolibre,modelValue:a.term.mercadolibre,"onUpdate:modelValue":o[0]||(o[0]=_=>a.term.mercadolibre=_),variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Selecciona un t\xE9rmino"},null,8,["marketplace","categories","attribute","modelValue"])):B("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(Z,null,{default:t(()=>[e(ce),e(D,{type:"submit"},{default:t(()=>[C("Guardar")]),_:1})]),_:1})]),_:1})],40,De))}}),Be={class:"float-right"},Ne=T({__name:"Attributes",setup(a){const n=b([]),l=b(null),u=b(null),o=b(!1),m=b(!1);z.list().then(r=>{n.value=r.data.payload});const _=r=>{l.value=r,o.value=!0},c=(r,s)=>{l.value=r,u.value=s,m.value=!0},h=r=>{if(l.value){const i=n.value.findIndex(x=>x._id===r._id);n.value.splice(i,1,r);return}n.value.push(r)},f=r=>{r===!1&&(l.value=null)};return(r,s)=>(d(),y(le,null,{default:t(()=>[e(V,null,{default:t(()=>[e(g,{class:"ml-2"},{default:t(()=>[e(D,{class:"",onClick:s[0]||(s[0]=i=>o.value=!0)},{default:t(()=>[C("Agregar")]),_:1})]),_:1})]),_:1}),e(V,null,{default:t(()=>[(d(!0),k(w,null,$(n.value,i=>(d(),y(g,{cols:"4"},{default:t(()=>[e(J,null,{default:t(()=>[e(Y,null,{default:t(()=>[C(U(i.name)+" ",1),v("div",Be,[e(D,{variant:"text",size:"small",color:"dark",icon:"",onClick:x=>_(i)},{default:t(()=>[e(P,null,{default:t(()=>[C("mdi-pencil")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024),e(Z,null,{default:t(()=>[(d(!0),k(w,null,$(i.terms,x=>(d(),y(D,{variant:"outlined",key:x.name,onClick:L=>c(i,x)},{default:t(()=>[C(U(x.name),1)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(W,{modelValue:o.value,"onUpdate:modelValue":[s[1]||(s[1]=i=>o.value=i),f],"max-width":"600px"},{default:t(()=>[e(we,{attribute:l.value,onSave:h},null,8,["attribute"])]),_:1},8,["modelValue"]),e(W,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=i=>m.value=i),"max-width":"600px"},{default:t(()=>[e($e,{attribute:l.value,term:u.value},null,8,["attribute","term"])]),_:1},8,["modelValue"])]),_:1}))}});export{Ne as default};
