import{_ as A,r as m,o as r,c as S,e as $,g as V,v as T,f as b,b as D,D as J,u as g,t as q,w as k,a as v,d as j,j as M,F as N,k as L,an as K,l as Q,m as R,n as W,p as Z}from"./index-82d1a4df.js";import{m as F,c as E}from"./categories-f14d6d41.js";const ee={};function te(e,l){const t=m("v-btn");return r(),S(t,{icon:"mdi-plus",size:"x-small"})}const G=A(ee,[["render",te],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/categories/CategoriesTree/AddBtn.vue"]]),B=["#6eda4d","#ffcc00","#beef37","#fbf82d","#acbef3","#6eda4d","#ffcc00","#beef37","#fbf82d","#acbef3"];const le={class:"row"},ae={class:"col d-flex align-center flex-column"},ne={key:0,class:"mt-3"},oe={key:0,class:"col col-wrapper"},de={key:1,class:"col d-flex justify-start"},re=$({__name:"CategoryItem",props:{item:{type:Object,required:!0},showAddBottom:{type:Boolean},level:{type:Number,default:0},maxLevel:{type:Number}},emits:["addItem","update:item","mappingClick"],setup(e,{emit:l}){const t=e,n=V(!1),o=T(()=>t.level<t.maxLevel),_=s=>{l("addItem",s)},i=s=>{l("update:item",s)},p=s=>{const c=s.target.innerText,a={...t.item,name:c.trim()};i(a)},C=s=>{l("mappingClick",s)};return(s,c)=>{const a=m("v-icon"),f=m("v-tooltip"),w=m("v-btn"),U=m("CategoryItem",!0);return r(),b("div",le,[D("div",ae,[D("div",{class:"box",style:J({backgroundColor:g(B)[e.level]}),onMouseenter:c[1]||(c[1]=h=>n.value=!0),onMouseleave:c[2]||(c[2]=h=>n.value=!1)},[D("div",{class:"box-text",contenteditable:"",onInput:p},q(e.item.name),33),n.value?(r(),S(w,{key:0,class:"box-action",size:"small",icon:"",variant:"text",color:"dark",onClick:c[0]||(c[0]=h=>C(e.item))},{default:k(()=>[v(a,null,{default:k(()=>[j("mdi-sitemap-outline")]),_:1}),v(f,{activator:"parent",location:"bottom"},{default:k(()=>[j("Mapeo")]),_:1})]),_:1})):M("v-if",!0)],36),e.showAddBottom?(r(),b("div",ne,[v(G,{onClick:c[3]||(c[3]=h=>_(e.item.parent)),color:g(B)[e.level]},null,8,["color"])])):M("v-if",!0)]),e.item.children.length?(r(),b("div",oe,[(r(!0),b(N,null,L(e.item.children,(h,d)=>(r(),S(U,{key:h._id,item:h,"show-add-bottom":d===e.item.children.length-1,level:e.level+1,"max-level":e.maxLevel,onAddItem:_,"onUpdate:item":i,onMappingClick:C},null,8,["item","show-add-bottom","level","max-level"]))),128))])):g(o)?(r(),b("div",de,[v(G,{class:"mt-2",onClick:c[4]||(c[4]=h=>_(e.item._id)),color:g(B)[e.level]},null,8,["color"])])):M("v-if",!0)])}}}),se=A(re,[["__scopeId","data-v-0d56e8ed"],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/categories/CategoriesTree/CategoryItem.vue"]]);const ce={class:"row align-center"},ie=$({__name:"index",props:{items:{type:Array,required:!0},headers:{type:Array,required:!0}},emits:["addItem","addHeader","update:item","mappingClick"],setup(e,{emit:l}){const t=i=>{l("addItem",i)},n=()=>{l("addHeader")},o=i=>{l("update:item",i)},_=i=>{l("mappingClick",i)};return(i,p)=>{const C=m("v-divider");return r(),b("div",null,[D("div",ce,[(r(!0),b(N,null,L(e.headers,(s,c)=>(r(),b("div",{class:"col",key:s.label},[D("div",{class:"box",style:J({backgroundColor:g(B)[c]})},[D("span",null,q(s.label),1)],4)]))),128)),v(G,{onClick:p[0]||(p[0]=s=>n()),color:g(B)[e.headers.length-1]},null,8,["color"])]),v(C,{class:"my-6"}),(r(!0),b(N,null,L(e.items,(s,c)=>(r(),b(N,{key:s._id},[v(se,{item:s,"show-add-bottom":c===e.items.length-1,"max-level":e.headers.length-1,onAddItem:t,"onUpdate:item":o,onMappingClick:_},null,8,["item","show-add-bottom","max-level"]),v(C,{class:"my-6"})],64))),128))])}}}),ue=A(ie,[["__scopeId","data-v-09b79966"],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/categories/CategoriesTree/index.vue"]]),me=$({__name:"MercadolibreCategoriesSelect",props:{modelValue:{type:Array},marketplace:{type:Object,required:!0},parent:{type:String},level:{type:Number,default:0}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,n=K(),o=V([]),_=V(!1),i=T(()=>o.value.length===0&&_.value===!1),p=T(()=>o.value.length?t.modelValue[t.level]:null),C=async()=>{if(_.value=!0,t.parent){const a=await F.listCategory(t.marketplace._id,t.parent);o.value=a.data.payload.children_categories}else{const a=await F.listCategories(t.marketplace._id);o.value=a.data.payload}_.value=!1};C(),Q(()=>t.parent,()=>{C();const a=t.modelValue.slice(0,t.level);l("update:modelValue",a)});const s=a=>{let f=[...t.modelValue];a?f[t.level]=a:f=f.slice(0,t.level),l("update:modelValue",f)},c=a=>{l("update:modelValue",a)};return(a,f)=>{const w=m("v-select"),U=m("MercadolibreCategoriesSelect",!0);return r(),b("div",{class:W({"mt-2":e.parent})},[g(i)?M("v-if",!0):(r(),S(w,R({key:0,items:o.value,"item-title":"name","item-value":"id"},g(n),{loading:_.value,modelValue:g(p),"onUpdate:modelValue":s}),null,16,["items","loading","modelValue"])),g(p)?(r(),S(U,R({key:1,marketplace:e.marketplace,parent:g(p)},g(n),{level:e.level+1,modelValue:e.modelValue,"onUpdate:modelValue":c}),null,16,["marketplace","parent","level","modelValue"])):M("v-if",!0)],2)}}}),ve=A(me,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/marketplacesMapping/MercadolibreCategoriesSelect.vue"]]),pe=$({__name:"SellercenterCategoriesSelect",props:{modelValue:{type:Array},marketplace:{type:Object,required:!0},parent:{type:Object},level:{type:Number,default:0}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,n=K(),o=V([]),_=V(!1),i=T(()=>{if(t.parent){const a=t.parent.Children.Category;return Array.isArray(a)?a:[a]}return o.value}),p=T(()=>{if(!i.value.length)return null;const a=t.modelValue[t.level];return i.value.find(f=>f.CategoryId===a)}),C=async()=>{_.value=!0;const a=await F.listCategories(t.marketplace._id);o.value=a.data.payload,_.value=!1};t.parent||C(),Q(()=>t.parent,()=>{const a=t.modelValue.slice(0,t.level);l("update:modelValue",a)});const s=a=>{let f=[...t.modelValue];a?f[t.level]=a.CategoryId:f=f.slice(0,t.level),l("update:modelValue",f)},c=a=>{l("update:modelValue",a)};return(a,f)=>{const w=m("v-select"),U=m("SellercenterCategoriesSelect",!0);return r(),b("div",{class:W({"mt-2":e.parent})},[v(w,R({items:g(i),"item-title":"Name","item-value":"CategoryId","return-object":""},g(n),{loading:_.value,modelValue:g(p),"onUpdate:modelValue":s}),null,16,["items","loading","modelValue"]),g(p)&&g(p).Children?(r(),S(U,R({key:0,marketplace:e.marketplace,parent:g(p)},g(n),{level:e.level+1,modelValue:e.modelValue,"onUpdate:modelValue":c}),null,16,["marketplace","parent","level","modelValue"])):M("v-if",!0)],2)}}}),ge=A(pe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/marketplacesMapping/SellercenterCategoriesSelect.vue"]]),_e=["onSubmit"],fe={class:"mb-4"},ye=$({__name:"MappingForm",props:{item:{type:null,required:!0}},emits:["update:item"],setup(e,{emit:l}){const t=e,n=V([]),o=V({...t.item});F.list().then(i=>{n.value=i.data.payload});const _=()=>{l("update:item",o.value)};return(i,p)=>{const C=m("v-card-title"),s=m("v-text-field"),c=m("v-card-text"),a=m("v-spacer"),f=m("v-btn"),w=m("v-card-actions"),U=m("v-card");return r(),b("form",{onSubmit:Z(_,["prevent"])},[v(U,null,{default:k(()=>[v(C,null,{default:k(()=>[j(q(e.item.name),1)]),_:1}),v(c,null,{default:k(()=>[(r(!0),b(N,null,L(n.value,h=>(r(),b("div",fe,[j(q(h.name)+" ",1),h.type==="woocommerce"?(r(),S(s,{key:0,variant:"outlined",density:"compact","hide-details":""})):h.type==="mercadolibre"?(r(),S(ve,{key:1,marketplace:h,density:"compact",variant:"outlined","hide-details":"",clearable:"",placeholder:"Seleccionar categoría",modelValue:o.value.mercadolibre,"onUpdate:modelValue":p[0]||(p[0]=d=>o.value.mercadolibre=d)},null,8,["marketplace","modelValue"])):M("v-if",!0),h.type==="sellercenter"?(r(),S(ge,{key:2,marketplace:h,variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Seleccionar categoría",modelValue:o.value.sellercenter,"onUpdate:modelValue":p[1]||(p[1]=d=>o.value.sellercenter=d)},null,8,["marketplace","modelValue"])):M("v-if",!0)]))),256))]),_:1}),v(w,null,{default:k(()=>[v(a),v(f,{type:"submit"},{default:k(()=>[j("Guardar")]),_:1})]),_:1})]),_:1})],40,_e)}}}),he=A(ye,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/categories/MappingForm.vue"]]);let O;const be=new Uint8Array(16);function Ce(){if(!O&&(O=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!O))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return O(be)}const y=[];for(let e=0;e<256;++e)y.push((e+256).toString(16).slice(1));function xe(e,l=0){return(y[e[l+0]]+y[e[l+1]]+y[e[l+2]]+y[e[l+3]]+"-"+y[e[l+4]]+y[e[l+5]]+"-"+y[e[l+6]]+y[e[l+7]]+"-"+y[e[l+8]]+y[e[l+9]]+"-"+y[e[l+10]]+y[e[l+11]]+y[e[l+12]]+y[e[l+13]]+y[e[l+14]]+y[e[l+15]]).toLowerCase()}const Ve=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),P={randomUUID:Ve};function ke(e,l,t){if(P.randomUUID&&!l&&!e)return P.randomUUID();e=e||{};const n=e.random||(e.rng||Ce)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,l){t=t||0;for(let o=0;o<16;++o)l[t+o]=n[o];return l}return xe(n)}const Ie=$({__name:"Categories",setup(e){const l=V([{label:"Departamento"},{label:"Categorias"},{label:"Categoria Hija"},{label:"Categoria Hija 2"},{label:"Categoria Hija 3"}]),t=V([]),n=V([]),o=V(!1),_=V(null),i=V(!1);E.list().then(d=>{n.value=d.data.payload});const p=T(()=>c(n.value)),C=d=>{_.value=d,i.value=!0},s=(d,u)=>{const I=[];for(const x of u)d._id===x.parent&&(Object.assign(x,{children:s(x,u)}),I.push(x));return I},c=d=>{const u=[];for(const I of d)I.parent===null&&(Object.assign(I,{children:s(I,d)}),u.push(I));return u},a=d=>{const u={_id:ke(),name:"Categoria",parent:d,children:[],isNew:!0,mercadolibre:[],sellercenter:[]};n.value.push(u),t.value.push(u)},f=()=>{l.value.push({label:`Categoria Hija ${l.value.length-1}`})},w=d=>{let u=n.value.findIndex(x=>x._id===d._id);if(n.value.splice(u,1,d),u=t.value.findIndex(x=>x._id===d._id),u===-1)return t.value.push(d);t.value.splice(u,1,d)},U=async d=>{w(d),i.value=!1},h=async()=>{o.value=!0;const d=t.value.map(async u=>{const x=(u.isNew?await E.create(u):await E.update(u._id,u)).data.payload;Object.assign(u,x);const H=n.value.findIndex(z=>z._id===x._id);H!==-1&&n.value.splice(H,1,u)});await Promise.allSettled(d),t.value=[],o.value=!1};return(d,u)=>{const I=m("v-card-title"),x=m("v-btn"),H=m("v-card-text"),z=m("v-dialog"),X=m("v-card");return r(),S(X,{class:"overflow-x-auto"},{default:k(()=>[v(I,null,{default:k(()=>[j("Categorias")]),_:1}),v(H,{style:{display:"inline-block"}},{default:k(()=>[v(x,{class:"ml-3 mb-2",disabled:!t.value.length,loading:o.value,onClick:h},{default:k(()=>[j(" Guardar ")]),_:1},8,["disabled","loading"]),v(ue,{headers:l.value,items:g(p),onAddItem:a,onAddHeader:f,"onUpdate:item":w,onMappingClick:C},null,8,["headers","items"])]),_:1}),v(z,{modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=Y=>i.value=Y),"max-width":"600px"},{default:k(()=>[v(he,{item:_.value,"onUpdate:item":U},null,8,["item"])]),_:1},8,["modelValue"])]),_:1})}}}),Ue=A(Ie,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/categories/Categories.vue"]]);export{Ue as default};
