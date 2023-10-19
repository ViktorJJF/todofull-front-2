import{r as h,o as f,c as U,w as d,a as l,b as a,t as C,e as q,g as _,f as b,J as V,K as T,p as L,F as j,k as B,i as X,d as D,n as _e,v as he,C as pe,u as w,X as G,j as ge,E as be,ao as ye,ap as K,ag as Ce}from"./index-3b991a8b.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{P as we,C as Se,a as Le,E as xe}from"./espania-2378a770.js";const ke={props:{initialData:{type:Object,default:{}},country:{type:String,default:"Chile"}},data(){return{disabled:!1,negotiationStatuses:[],selectedNegotiationStatuses:[],searchLabel:"",isInidialDataLoading:!1,isInitialDataExecuted:!1}},watch:{selectedNegotiationStatuses:{handler(e,t){this.searchLabel="",this.$emit("onSelectNegotiationStatuses",this.selectedNegotiationStatuses?JSON.parse(JSON.stringify(this.selectedNegotiationStatuses)):null),this.disabled=!0,setTimeout(()=>{this.disabled=!1},0)},deep:!0}},async mounted(){this.initialData&&(this.selectedNegotiationStatuses=this.initialData._id),await this.$store.dispatch("negotiationStatusesModule/list",{sort:"name",order:"asc",country:this.country}),this.negotiationStatuses=this.$store.state.negotiationStatusesModule.negotiationStatuses.map(e=>({value:e._id,title:e.name})),console.log("🚀 Aqui *** -> this.negotiationStatuses",this.negotiationStatuses)},methods:{async removeLabels(e,t){e.splice(e.findIndex(r=>r._id===t._id),1),this.$emit("onSelectNegotiationStatuses",this.selectedNegotiationStatuses)},getLabelTitle(e){const t=this.negotiationStatuses.find(r=>r.value==e);return t?t.title:""}}};function Fe(e,t,r,g,v,i){const m=h("v-select");return f(),U(m,{"hide-details":"",variant:"outlined",disabled:v.disabled,placeholder:"Selecciona el estado de negociación",class:"mt-3",modelValue:v.selectedNegotiationStatuses,"onUpdate:modelValue":t[0]||(t[0]=o=>v.selectedNegotiationStatuses=o),items:v.negotiationStatuses,"no-data-text":"No se encontraron estados de negociación",outlined:"",clearable:"",density:"compact"},null,8,["disabled","modelValue","items"])}const Ve=z(ke,[["render",Fe]]),W=()=>({name:"",url:"",fileType:"",country:""}),Te={props:{initialData:{type:Array,default:()=>[]}},data(){return{disabled:!1,todofullLabels:[],selectedTodofullLabels2:[],selectedTodofullLabels:[],searchLabel:"",isInidialDataLoading:!1,isInitialDataExecuted:!1}},computed:{filteredTodofullLabels(){return this.todofullLabels.filter(e=>e.is_active)}},watch:{selectedTodofullLabels:{handler(e,t){this.searchLabel="",this.$emit("onSelectTodofullLabels",JSON.parse(JSON.stringify(this.selectedTodofullLabels))),this.disabled=!0,setTimeout(()=>{this.disabled=!1},0)},deep:!0}},async mounted(){var e;this.selectedTodofullLabels=((e=this.initialData)==null?void 0:e.map(t=>typeof t=="string"?t:t._id))||[],this.$store.state.todofullLabelsModule.todofullLabels.length===0&&await this.$store.dispatch("todofullLabelsModule/list",{sort:"name",order:"asc"}),this.todofullLabels=this.$store.state.todofullLabelsModule.todofullLabels.map(t=>({_id:t._id,name:t.name,is_active:t.is_active}))},methods:{async removeLabels(e,t){e.splice(e.findIndex(r=>r._id===t._id),1),this.$emit("onSelectTodofullLabels",this.selectedTodofullLabels)},getLabelTitle(e){const t=this.todofullLabels.find(r=>r.value==e);return t?t.title:""}}};function Ne(e,t,r,g,v,i){const m=h("v-chip"),o=h("v-combobox");return f(),U(o,{"hide-details":"",variant:"outlined",disabled:v.disabled,placeholder:"Selecciona las etiquetas",class:"mt-3","search-input":v.searchLabel,modelValue:v.selectedTodofullLabels,"onUpdate:modelValue":t[1]||(t[1]=S=>v.selectedTodofullLabels=S),"item-value":"_id","item-title":"name","return-object":!1,items:i.filteredTodofullLabels,multiple:"","no-data-text":"No se encontraron etiquetas",outlined:"",density:"compact"},{selection:d(S=>[l(m,{close:"","onClick:close":t[0]||(t[0]=p=>i.removeLabels(v.selectedTodofullLabels,e.item)),color:"primary"},{default:d(()=>[a("strong",null,C(S.item.title),1)]),_:2},1024)]),_:1},8,["disabled","search-input","modelValue","items"])}const $e=z(Te,[["render",Ne]]),De={key:1,class:"file-preview"},Ue=["src"],Ie=["href"],Me=q({__name:"UploadFiles",emits:["onNewFile"],setup(e,{emit:t}){const r=_(!1),g=_(null),v=_(null),i=_(!1),m=_(null);function o(s){r.value||(r.value=!0),s.preventDefault()}function S(s){s.currentTarget.contains(s.relatedTarget)||(s.preventDefault(),r.value=!1)}function p(s){if(s.stopPropagation(),s.preventDefault(),r.value=!1,s.dataTransfer&&s.dataTransfer.files.length){const y=s.dataTransfer.files[0];k(y)}}function I(){var s;(s=g.value)==null||s.click()}function x(){if(g.value&&g.value.files){const s=g.value.files[0];k(s)}}function k(s){var y;m.value=s,t("onNewFile",s),(y=s.type)!=null&&y.startsWith("image/")?(i.value=!0,v.value=URL.createObjectURL(s)):(i.value=!1,v.value=URL.createObjectURL(s))}function P(){v.value=null,m.value=null,t("onNewFile",null)}return(s,y)=>(f(),b(j,null,[v.value?L("",!0):(f(),b("div",{key:0,class:"container-upload",onClick:I},[a("div",{onDragover:o,onDragleave:S,onDrop:p,class:"drag-message"},[V(a("span",null,"Arrastra una imagen o archivo aquí",512),[[T,!r.value]]),V(a("span",null,"Suelta el archivo aquí",512),[[T,r.value]])],32),a("input",{type:"file",ref_key:"fileInput",ref:g,onChange:x,style:{display:"none"}},null,544)])),v.value?(f(),b("div",De,[a("button",{class:"clear-uploaded-file mb-3",onClick:P}," Borrar "),i.value?(f(),b("img",{key:0,src:v.value,alt:"Uploaded Image"},null,8,Ue)):(f(),b("a",{key:1,class:"uploaded-file",href:v.value,download:""},C(m.value.name),9,Ie))])):L("",!0)],64))}});const Oe=z(Me,[["__scopeId","data-v-b1711712"]]),Ae={class:"d-flex justify-space-evenly"},Pe=["src"],Re=q({__name:"CountrySelector",emits:["onSelectedCountry"],setup(e,{emit:t}){const r=_([{value:"Peru",icon:we},{value:"Chile",icon:Se},{value:"Colombia",icon:Le},{value:"España",icon:xe}]),g=_("Chile");function v(i){if(g.value===i.value)return g.value=null;g.value=i.value}return B(g,()=>{t("onSelectedCountry",g.value)},{immediate:!0}),(i,m)=>{const o=h("v-tooltip"),S=h("v-btn");return f(),b("div",Ae,[(f(!0),b(j,null,X(r.value,(p,I)=>(f(),U(S,{small:"",icon:"",color:"white",onClick:x=>v(p),class:_e({selected:g.value===p.value}),key:I},{default:d(()=>[a("img",{style:{width:"25px"},src:p.icon},null,8,Pe),l(o,{activator:"parent",anchor:"bottom"},{default:d(()=>[D(C(p.value),1)]),_:2},1024)]),_:2},1032,["onClick","class"]))),128))])}}}),je={class:"col-12"},Ee={class:"card box-margin"},Be={class:"card-body"},qe={class:"row my-3"},ze={class:"col-sm-12 col-md-7"},Je={class:"col-sm-12 col-md-5"},He={class:"dataTables_info",id:"datatable-buttons_info",role:"status","aria-live":"polite"},Ge={class:"basic-table-area"},Ke=a("th",{class:"text-left"},"Fecha de creación",-1),We={key:0,class:"text-left"},Xe=a("th",{class:"text-left"},"Nombre",-1),Qe={key:1,class:"text-left"},Ye={key:2,class:"text-left"},Ze=a("th",{class:"text-left"},null,-1),et={key:0},tt=["href"],lt={key:1},at={key:2},ot={class:"row my-3"},st={class:"col-sm-12 col-md-5"},nt={class:"dataTables_info",id:"datatable-buttons_info",role:"status","aria-live":"polite"},it={class:"col-sm-12 col-md-7"},ut={class:"headline"},dt=a("p",{class:"body-1 font-weight-bold"},"Nombre",-1),ct=a("p",{class:"body-1 font-weight-bold"},"URL (Opcional)",-1),rt=a("div",{class:"flex-grow-1"},null,-1),_t=q({__name:"CloudStorageLinksView",props:{showFromChat:{type:Boolean,default:!1},country:{type:String,default:""}},emits:["onSendCatalog"],setup(e,{emit:t}){const r=e,g=G("$deepCopy"),v=G("$swal"),i=ge();be(),ye();const m=_([]),o=_(W()),S=_(W());_({});const p=_(1);_(0);const I=_(["name"]),x=_(""),k=_(!1),P=_(null),s=_(-1),y=_("Chile");_([{text:"Agregado",align:"left",sortable:!1,value:"createdAt"},{text:"Nombre",align:"left",sortable:!1,value:"name"},{text:"Acciones",value:"action",sortable:!1}]);const N=_(!1),Q=he(()=>s.value===-1?"Cargar Catálogo":"Editar Catálogo");B(x,()=>{clearTimeout(P.value),P.value=setTimeout(()=>{p.value=1,M(p.value)},600)}),B(p,()=>{M(p.value)}),pe(()=>{M()});async function M(n=1){let c={page:p.value||n,fields:I.value.join(","),sort:"createdAt",order:"desc",limit:10};y.value&&(c.country=y.value),x.value&&(c.filter=x.value),r.showFromChat&&(c.isActive=!0),await Promise.all([i.dispatch("cloudStorageLinksModule/list",c)]),m.value=g(i.state.cloudStorageLinksModule.cloudStorageLinks)}async function Y(){if(k.value=!0,s.value>-1){o.value.country=y.value;let n=m.value[s.value]._id;try{o.value.file&&(o.value.url=await K(o.value.file)),await i.dispatch("cloudStorageLinksModule/update",{id:n,data:o.value}),Object.assign(m.value[s.value],o.value),R()}finally{k.value=!1}}else try{o.value.file&&(o.value.url=await K(o.value.file)),o.value.country=y.value;let n=await i.dispatch("cloudStorageLinksModule/create",o.value);m.value.push(n),R(),M()}finally{k.value=!1}}function Z(n){s.value=m.value.indexOf(n),o.value=Object.assign({},n),N.value=!0}async function ee(n){const c=m.value.indexOf(n);let O=m.value[c]._id;(await v({text:"¿Realmente deseas eliminar este registro?",icon:"error",showCancelButton:!0,cancelButtonText:"Cancelar"})).isConfirmed&&(await i.dispatch("cloudStorageLinksModule/delete",O),m.value.splice(c,1))}function te(n){console.log("🚀 Aqui *** -> negotiationStatus:",n),o.value.negotiationStatusId=n}function le(n){console.log("🚀 Aqui *** -> selectedLabels:",n),n.length>0&&(o.value.todofullLabels=n)}function ae(n){y.value=n,r.country&&(y.value=r.country),o.value.country=n,M()}async function R(){N.value=!1,setTimeout(()=>{o.value=Object.assign({},S.value),s.value=-1},300)}async function oe(n){new FormData().append("file",n),o.value.file=n}function se(n){t("onSendCatalog",n)}async function ne(n){await i.dispatch("cloudStorageLinksModule/update",{id:n._id,data:n})}return(n,c)=>{const O=h("v-row"),F=h("v-btn"),J=h("v-pagination"),E=h("v-text-field"),$=h("v-col"),ie=h("v-checkbox"),ue=h("v-table"),de=h("v-icon"),ce=h("v-card-title"),re=h("v-divider"),H=h("v-container"),ve=h("v-card-actions"),me=h("v-card"),fe=h("v-dialog");return f(),U(H,{fluid:""},{default:d(()=>[V(l(O,{class:"mb-3"},{default:d(()=>[l(Re,{onOnSelectedCountry:ae})]),_:1},512),[[T,!e.showFromChat]]),l(O,null,{default:d(()=>[a("div",je,[a("div",Ee,[a("div",Be,[V(l(F,{onClick:c[0]||(c[0]=u=>{R(),N.value=!0})},{default:d(()=>[D("Agregar Catálogo")]),_:1},512),[[T,!e.showFromChat]]),a("div",qe,[a("div",ze,[V(l(J,{modelValue:p.value,"onUpdate:modelValue":c[1]||(c[1]=u=>p.value=u),length:w(i).state.cloudStorageLinksModule.totalPages},null,8,["modelValue","length"]),[[T,!e.showFromChat]])]),V(a("div",Je,[a("div",He," Mostrando "+C(w(i).state.itemsPerPage>m.value.length?m.value.length:w(i).state.itemsPerPage)+" de "+C(w(i).state.cloudStorageLinksModule.total)+" registros ",1)],512),[[T,!e.showFromChat]])]),l($,{cols:"12",sm:"8"},{default:d(()=>[l(E,{style:{"background-color":"#fff"},dense:"","hide-details":"",modelValue:x.value,"onUpdate:modelValue":c[2]||(c[2]=u=>x.value=u),placeholder:"Escribe el nombre del catálogo",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue"])]),_:1}),a("div",Ge,[l(ue,null,{default:d(()=>[a("thead",null,[a("tr",null,[Ke,e.showFromChat?L("",!0):(f(),b("th",We,"URL")),Xe,e.showFromChat?L("",!0):(f(),b("th",Qe,"Veces usado")),e.showFromChat?L("",!0):(f(),b("th",Ye,"Activo?")),Ze])]),a("tbody",null,[(f(!0),b(j,null,X(m.value,u=>(f(),b("tr",{key:u._id},[a("td",null,C(w(Ce)(u.createdAt,"dd/MM/yyyy HH:mm")),1),e.showFromChat?L("",!0):(f(),b("td",et,[a("a",{href:u.url,target:"_blank",rel:"noopener noreferrer"},C(u.url),9,tt)])),a("td",null,C(u.name),1),e.showFromChat?L("",!0):(f(),b("td",lt,C(u.timesUsed),1)),e.showFromChat?L("",!0):(f(),b("td",at,[l(ie,{onChange:A=>ne(u),modelValue:u.isActive,"onUpdate:modelValue":A=>u.isActive=A},null,8,["onChange","modelValue","onUpdate:modelValue"])])),a("td",null,[e.showFromChat?(f(),U(F,{key:1,color:"primary",size:"small",class:"mr-2",onClick:A=>se(u)},{default:d(()=>[D("Enviar")]),_:2},1032,["onClick"])):(f(),b(j,{key:0},[l(F,{color:"primary",icon:"mdi mdi-eye",size:"x-small",class:"mr-2"}),l(F,{onClick:A=>Z(u),color:"success",icon:"mdi mdi-pencil",size:"x-small",class:"mr-2"},null,8,["onClick"]),l(F,{onClick:A=>ee(u),color:"error",icon:"mdi mdi-delete",size:"x-small"},null,8,["onClick"])],64))])]))),128))])]),_:1})]),a("div",ot,[V(a("div",st,[a("div",nt," Mostrando "+C(w(i).state.itemsPerPage>m.value.length?m.value.length:w(i).state.itemsPerPage)+" de "+C(w(i).state.cloudStorageLinksModule.total)+" registros ",1)],512),[[T,!e.showFromChat]]),a("div",it,[l(J,{modelValue:p.value,"onUpdate:modelValue":c[3]||(c[3]=u=>p.value=u),length:w(i).state.cloudStorageLinksModule.totalPages},null,8,["modelValue","length"])])])])])]),l(fe,{modelValue:N.value,"onUpdate:modelValue":c[6]||(c[6]=u=>N.value=u),width:"700px"},{default:d(()=>[l(me,null,{default:d(()=>[l(ce,null,{default:d(()=>[l(de,{color:"primary",class:"mr-1"},{default:d(()=>[D("mdi-cloud-upload")]),_:1}),a("span",ut,C(w(Q)),1)]),_:1}),l(re),l(H,{class:"pa-5"},{default:d(()=>[l(O,{dense:""},{default:d(()=>[l($,{cols:"12",sm:"12",md:"12"},{default:d(()=>[dt,l(E,{modelValue:o.value.name,"onUpdate:modelValue":c[4]||(c[4]=u=>o.value.name=u),"hide-details":"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),l($,{cols:"12",sm:"12"},{default:d(()=>[l($e,{initialData:o.value.todofullLabels,class:"my-3",onOnSelectTodofullLabels:le},null,8,["initialData"])]),_:1}),l($,{cols:"12",sm:"12"},{default:d(()=>[N.value?(f(),U(Ve,{key:0,initialData:o.value.negotiationStatusId,country:y.value,class:"my-3",onOnSelectNegotiationStatuses:te},null,8,["initialData","country"])):L("",!0)]),_:1}),l($,{cols:"12",sm:"12",md:"12"},{default:d(()=>[ct,l(E,{modelValue:o.value.url,"onUpdate:modelValue":c[5]||(c[5]=u=>o.value.url=u),required:"","hide-details":"",variant:"underlined"},null,8,["modelValue"])]),_:1}),l($,{cols:"12",sm:"12"},{default:d(()=>[l(Oe,{onOnNewFile:oe})]),_:1})]),_:1})]),_:1}),l(ve,{"rd-actions":""},{default:d(()=>[rt,l(F,{outlined:"",color:"error",text:"",onClick:R},{default:d(()=>[D("Cancelar")]),_:1}),l(F,{loading:k.value,color:"success",onClick:Y},{default:d(()=>[D("Guardar")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});export{Ve as N,_t as _};
