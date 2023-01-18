import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as k,g as O,m as M,r as V,Z as A,s as E,n as C,f as U,a5 as P,u as g,y as N,w as b,a as p,l as le,h as S,aO as ne,L as w,F as $,v as T,T as q,aZ as Z,H as J,B,ah as Y,D as K,ap as Q,ab as W,j as oe,aY as de,M as se,d as X,J as re,aV as ie}from"./index.ab944f89.js";import{m as H,c as L}from"./categories.42946da5.js";const ue={};function ce(e,t){return d(),k(O,{icon:"mdi-plus",size:"x-small"})}var R=z(ue,[["render",ce]]);const j=["#6eda4d","#ffcc00","#beef37","#fbf82d","#acbef3","#6eda4d","#ffcc00","#beef37","#fbf82d","#acbef3"];const me={class:"row"},pe={class:"col d-flex align-center flex-column"},ve={key:0,class:"mt-3"},ge={key:0,class:"col col-wrapper"},ye={key:1,class:"col d-flex justify-start"},he=M({__name:"CategoryItem",props:{item:{type:Object,required:!0},showAddBottom:{type:Boolean},level:{type:Number,default:0},maxLevel:{type:Number}},emits:["addItem","update:item","mappingClick"],setup(e,{emit:t}){const a=e,n=V(!1),o=A(()=>a.level<a.maxLevel),y=i=>{t("addItem",i)},s=i=>{t("update:item",i)},v=i=>{const h=i.target.innerText,l={...a.item,name:h.trim()};s(l)},r=i=>{t("mappingClick",i)};return(i,h)=>{const l=E("CategoryItem",!0);return d(),C("div",me,[U("div",pe,[U("div",{class:"box",style:P({backgroundColor:g(j)[e.level]}),onMouseenter:h[1]||(h[1]=u=>n.value=!0),onMouseleave:h[2]||(h[2]=u=>n.value=!1)},[U("div",{class:"box-text",contenteditable:"",onInput:v},N(e.item.name),33),n.value?(d(),k(O,{key:0,class:"box-action",size:"small",icon:"",variant:"text",color:"dark",onClick:h[0]||(h[0]=u=>r(e.item))},{default:b(()=>[p(le,null,{default:b(()=>[S("mdi-sitemap-outline")]),_:1}),p(ne,{activator:"parent",location:"bottom"},{default:b(()=>[S("Mapeo")]),_:1})]),_:1})):w("",!0)],36),e.showAddBottom?(d(),C("div",ve,[p(R,{onClick:h[3]||(h[3]=u=>y(e.item.parent)),color:g(j)[e.level]},null,8,["color"])])):w("",!0)]),e.item.children.length?(d(),C("div",ge,[(d(!0),C($,null,T(e.item.children,(u,I)=>(d(),k(l,{key:u._id,item:u,"show-add-bottom":I===e.item.children.length-1,level:e.level+1,"max-level":e.maxLevel,onAddItem:y,"onUpdate:item":s,onMappingClick:r},null,8,["item","show-add-bottom","level","max-level"]))),128))])):g(o)?(d(),C("div",ye,[p(R,{class:"mt-2",onClick:h[4]||(h[4]=u=>y(e.item._id)),color:g(j)[e.level]},null,8,["color"])])):w("",!0)])}}});var fe=z(he,[["__scopeId","data-v-918d9b24"]]);const Ce={class:"row align-center"},Ve=M({__name:"index",props:{items:null,headers:null},emits:["addItem","addHeader","update:item","mappingClick"],setup(e,{emit:t}){const a=s=>{t("addItem",s)},n=()=>{t("addHeader")},o=s=>{t("update:item",s)},y=s=>{t("mappingClick",s)};return(s,v)=>(d(),C("div",null,[U("div",Ce,[(d(!0),C($,null,T(e.headers,(r,i)=>(d(),C("div",{class:"col",key:r.label},[U("div",{class:"box",style:P({backgroundColor:g(j)[i]})},[U("span",null,N(r.label),1)],4)]))),128)),p(R,{onClick:v[0]||(v[0]=r=>n()),color:g(j)[e.headers.length-1]},null,8,["color"])]),p(q,{class:"my-6"}),(d(!0),C($,null,T(e.items,(r,i)=>(d(),C($,{key:r._id},[p(fe,{item:r,"show-add-bottom":i===e.items.length-1,"max-level":e.headers.length-1,onAddItem:a,"onUpdate:item":o,onMappingClick:y},null,8,["item","show-add-bottom","max-level"]),p(q,{class:"my-6"})],64))),128))]))}});var be=z(Ve,[["__scopeId","data-v-10f56eac"]]);const xe=M({__name:"MercadolibreCategoriesSelect",props:{modelValue:{type:Array},marketplace:{type:Object,required:!0},parent:{type:String},level:{type:Number,default:0}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,n=Z(),o=V([]),y=V(!1),s=A(()=>o.value.length===0&&y.value===!1),v=A(()=>o.value.length?a.modelValue[a.level]:null),r=async()=>{if(y.value=!0,a.parent){const l=await H.listCategory(a.marketplace._id,a.parent);o.value=l.data.payload.children_categories}else{const l=await H.listCategories(a.marketplace._id);o.value=l.data.payload}y.value=!1};r(),J(()=>a.parent,()=>{r();const l=a.modelValue.slice(0,a.level);t("update:modelValue",l)});const i=l=>{let u=[...a.modelValue];l?u[a.level]=l:u=u.slice(0,a.level),t("update:modelValue",u)},h=l=>{t("update:modelValue",l)};return(l,u)=>{const I=E("MercadolibreCategoriesSelect",!0);return d(),C("div",{class:K({"mt-2":e.parent})},[g(s)?w("",!0):(d(),k(Y,B({key:0,items:o.value,"item-title":"name","item-value":"id"},g(n),{loading:y.value,modelValue:g(v),"onUpdate:modelValue":i}),null,16,["items","loading","modelValue"])),g(v)?(d(),k(I,B({key:1,marketplace:e.marketplace,parent:g(v)},g(n),{level:e.level+1,modelValue:e.modelValue,"onUpdate:modelValue":h}),null,16,["marketplace","parent","level","modelValue"])):w("",!0)],2)}}}),_e=M({__name:"SellercenterCategoriesSelect",props:{modelValue:{type:Array},marketplace:{type:Object,required:!0},parent:{type:Object},level:{type:Number,default:0}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,n=Z(),o=V([]),y=V(!1),s=A(()=>{if(a.parent){const l=a.parent.Children.Category;return Array.isArray(l)?l:[l]}return o.value}),v=A(()=>{if(!s.value.length)return null;const l=a.modelValue[a.level];return s.value.find(u=>u.CategoryId===l)}),r=async()=>{y.value=!0;const l=await H.listCategories(a.marketplace._id);o.value=l.data.payload,y.value=!1};a.parent||r(),J(()=>a.parent,()=>{const l=a.modelValue.slice(0,a.level);t("update:modelValue",l)});const i=l=>{let u=[...a.modelValue];l?u[a.level]=l.CategoryId:u=u.slice(0,a.level),t("update:modelValue",u)},h=l=>{t("update:modelValue",l)};return(l,u)=>{const I=E("SellercenterCategoriesSelect",!0);return d(),C("div",{class:K({"mt-2":e.parent})},[p(Y,B({items:g(s),"item-title":"Name","item-value":"CategoryId","return-object":""},g(n),{loading:y.value,modelValue:g(v),"onUpdate:modelValue":i}),null,16,["items","loading","modelValue"]),g(v)&&g(v).Children?(d(),k(I,B({key:0,marketplace:e.marketplace,parent:g(v)},g(n),{level:e.level+1,modelValue:e.modelValue,"onUpdate:modelValue":h}),null,16,["marketplace","parent","level","modelValue"])):w("",!0)],2)}}}),ke=["onSubmit"],Ie={class:"mb-4"},we=M({__name:"MappingForm",props:{item:null},emits:["update:item"],setup(e,{emit:t}){const a=e,n=V([]),o=V({...a.item});H.list().then(s=>{n.value=s.data.payload});const y=()=>{t("update:item",o.value)};return(s,v)=>(d(),C("form",{onSubmit:re(y,["prevent"])},[p(X,null,{default:b(()=>[p(Q,null,{default:b(()=>[S(N(e.item.name),1)]),_:1}),p(W,null,{default:b(()=>[(d(!0),C($,null,T(n.value,r=>(d(),C("div",Ie,[S(N(r.name)+" ",1),r.type==="woocommerce"?(d(),k(oe,{key:0,variant:"outlined",density:"compact","hide-details":""})):r.type==="mercadolibre"?(d(),k(xe,{key:1,marketplace:r,density:"compact",variant:"outlined","hide-details":"",clearable:"",placeholder:"Seleccionar categor\xEDa",modelValue:o.value.mercadolibre,"onUpdate:modelValue":v[0]||(v[0]=i=>o.value.mercadolibre=i)},null,8,["marketplace","modelValue"])):w("",!0),r.type==="sellercenter"?(d(),k(_e,{key:2,marketplace:r,variant:"outlined",density:"compact","hide-details":"",clearable:"",placeholder:"Seleccionar categor\xEDa",modelValue:o.value.sellercenter,"onUpdate:modelValue":v[1]||(v[1]=i=>o.value.sellercenter=i)},null,8,["marketplace","modelValue"])):w("",!0)]))),256))]),_:1}),p(de,null,{default:b(()=>[p(se),p(O,{type:"submit"},{default:b(()=>[S("Guardar")]),_:1})]),_:1})]),_:1})],40,ke))}});let D;const Se=new Uint8Array(16);function Ue(){if(!D&&(D=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!D))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return D(Se)}const f=[];for(let e=0;e<256;++e)f.push((e+256).toString(16).slice(1));function Ae(e,t=0){return(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase()}const Me=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var G={randomUUID:Me};function $e(e,t,a){if(G.randomUUID&&!t&&!e)return G.randomUUID();e=e||{};const n=e.random||(e.rng||Ue)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){a=a||0;for(let o=0;o<16;++o)t[a+o]=n[o];return t}return Ae(n)}const Te=M({__name:"Categories",setup(e){const t=V([{label:"Departamento"},{label:"Categorias"},{label:"Categoria Hija"},{label:"Categoria Hija 2"},{label:"Categoria Hija 3"}]),a=V([]),n=V([]),o=V(!1),y=V(null),s=V(!1);L.list().then(m=>{n.value=m.data.payload});const v=A(()=>h(n.value)),r=m=>{y.value=m,s.value=!0},i=(m,c)=>{const x=[];for(const _ of c)m._id===_.parent&&(Object.assign(_,{children:i(_,c)}),x.push(_));return x},h=m=>{const c=[];for(const x of m)x.parent===null&&(Object.assign(x,{children:i(x,m)}),c.push(x));return c},l=m=>{const c={_id:$e(),name:"Categoria",parent:m,children:[],isNew:!0,mercadolibre:[],sellercenter:[]};n.value.push(c),a.value.push(c)},u=()=>{t.value.push({label:`Categoria Hija ${t.value.length-1}`})},I=m=>{let c=n.value.findIndex(_=>_._id===m._id);if(n.value.splice(c,1,m),c=a.value.findIndex(_=>_._id===m._id),c===-1)return a.value.push(m);a.value.splice(c,1,m)},ee=async m=>{I(m),s.value=!1},te=async()=>{o.value=!0;const m=a.value.map(async c=>{const _=(c.isNew?await L.create(c):await L.update(c._id,c)).data.payload;Object.assign(c,_);const F=n.value.findIndex(ae=>ae._id===_._id);F!==-1&&n.value.splice(F,1,c)});await Promise.allSettled(m),a.value=[],o.value=!1};return(m,c)=>(d(),k(X,{class:"overflow-x-auto"},{default:b(()=>[p(Q,null,{default:b(()=>[S("Categorias")]),_:1}),p(W,{style:{display:"inline-block"}},{default:b(()=>[p(O,{class:"ml-3 mb-2",disabled:!a.value.length,loading:o.value,onClick:te},{default:b(()=>[S(" Guardar ")]),_:1},8,["disabled","loading"]),p(be,{headers:t.value,items:g(v),onAddItem:l,onAddHeader:u,"onUpdate:item":I,onMappingClick:r},null,8,["headers","items"])]),_:1}),p(ie,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=x=>s.value=x),"max-width":"600px"},{default:b(()=>[p(we,{item:y.value,"onUpdate:item":ee},null,8,["item"])]),_:1},8,["modelValue"])]),_:1}))}});export{Te as default};
