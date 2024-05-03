import{r as _,o as s,c as A,w as a,a as t,b as f,t as L,e as Q,g as c,C as te,f as p,F as q,i as K,p as F,J as j,K as B,k as G,ao as Se,d as U,n as Fe,v as ee,u as N,X as se,j as Le,E as Te,ap as xe,aq as ne,af as Ne,H as Ae,I as Ve}from"./index-43f158f4.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{P as $e,C as Me,a as Ie,E as Oe}from"./espania-2378a770.js";const De={props:{initialData:{type:Array,default:()=>[]}},data(){return{disabled:!1,todofullLabels:[],selectedTodofullLabels2:[],selectedTodofullLabels:[],searchLabel:"",isInidialDataLoading:!1,isInitialDataExecuted:!1}},computed:{filteredTodofullLabels(){return this.todofullLabels.filter(l=>l.is_active)}},watch:{selectedTodofullLabels:{handler(l,n){this.searchLabel="",this.$emit("onSelectTodofullLabels",JSON.parse(JSON.stringify(this.selectedTodofullLabels))),this.disabled=!0,setTimeout(()=>{this.disabled=!1},0)},deep:!0}},async mounted(){var l;this.selectedTodofullLabels=((l=this.initialData)==null?void 0:l.map(n=>typeof n=="string"?n:n._id))||[],this.$store.state.todofullLabelsModule.todofullLabels.length===0&&await this.$store.dispatch("todofullLabelsModule/list",{sort:"name",order:"asc"}),this.todofullLabels=this.$store.state.todofullLabelsModule.todofullLabels.map(n=>({_id:n._id,name:n.name,is_active:n.is_active}))},methods:{async removeLabels(l,n){l.splice(l.findIndex(h=>h._id===n._id),1),this.$emit("onSelectTodofullLabels",this.selectedTodofullLabels)},getLabelTitle(l){const n=this.todofullLabels.find(h=>h.value==l);return n?n.title:""}}};function Re(l,n,h,m,r,i){const w=_("v-chip"),o=_("v-combobox");return s(),A(o,{"hide-details":"",variant:"outlined",disabled:r.disabled,placeholder:"Selecciona las etiquetas",class:"mt-3","search-input":r.searchLabel,modelValue:r.selectedTodofullLabels,"onUpdate:modelValue":n[1]||(n[1]=e=>r.selectedTodofullLabels=e),"item-value":"_id","item-title":"name","return-object":!1,items:i.filteredTodofullLabels,multiple:"","no-data-text":"No se encontraron etiquetas",outlined:"",density:"compact"},{selection:a(e=>[t(w,{close:"","onClick:close":n[0]||(n[0]=y=>i.removeLabels(r.selectedTodofullLabels,l.item)),color:"primary"},{default:a(()=>[f("strong",null,L(e.item.title),1)]),_:2},1024)]),_:1},8,["disabled","search-input","modelValue","items"])}const Ue=W(De,[["render",Re]]),Pe={props:{initialData:{type:Object,default:{}},country:{type:String,default:"Chile"}},data(){return{disabled:!1,negotiationStatuses:[],selectedNegotiationStatuses:[],searchLabel:"",isInidialDataLoading:!1,isInitialDataExecuted:!1}},watch:{selectedNegotiationStatuses:{handler(l,n){this.searchLabel="",this.$emit("onSelectNegotiationStatuses",this.selectedNegotiationStatuses?JSON.parse(JSON.stringify(this.selectedNegotiationStatuses)):null),this.disabled=!0,setTimeout(()=>{this.disabled=!1},0)},deep:!0}},async mounted(){this.initialData&&(this.selectedNegotiationStatuses=this.initialData._id),await this.$store.dispatch("negotiationStatusesModule/list",{sort:"name",order:"asc",country:this.country}),this.negotiationStatuses=this.$store.state.negotiationStatusesModule.negotiationStatuses.map(l=>({value:l._id,title:l.name})),console.log("🚀 Aqui *** -> this.negotiationStatuses",this.negotiationStatuses)},methods:{async removeLabels(l,n){l.splice(l.findIndex(h=>h._id===n._id),1),this.$emit("onSelectNegotiationStatuses",this.selectedNegotiationStatuses)},getLabelTitle(l){const n=this.negotiationStatuses.find(h=>h.value==l);return n?n.title:""}}};function Ee(l,n,h,m,r,i){const w=_("v-select");return s(),A(w,{"hide-details":"",variant:"outlined",disabled:r.disabled,placeholder:"Selecciona el estado de negociación",class:"mt-3",modelValue:r.selectedNegotiationStatuses,"onUpdate:modelValue":n[0]||(n[0]=o=>r.selectedNegotiationStatuses=o),items:r.negotiationStatuses,"no-data-text":"No se encontraron estados de negociación",outlined:"",clearable:"",density:"compact"},null,8,["disabled","modelValue","items"])}const je=W(Pe,[["render",Ee]]),ie=()=>({name:"",url:"",files:[],fileType:"",country:""}),Be={class:"file-preview"},ze=["href"],qe=["onClick"],Je=Q({__name:"UploadFiles",props:{files:{type:Array,default:()=>[]},text:{type:String,default:"Arrastra una imagen o archivo aquí"}},emits:["onNewFiles"],setup(l,{emit:n}){const h=l,m=c(!1),r=c(null),i=c(null);c(!1);const w=c(null),o=c([]);te(()=>{h.files&&(o.value=[...h.files])});function e(u){m.value||(m.value=!0),u.preventDefault()}function y(u){u.currentTarget.contains(u.relatedTarget)||(u.preventDefault(),m.value=!1)}function b(u){if(u.stopPropagation(),u.preventDefault(),m.value=!1,u.dataTransfer&&u.dataTransfer.files.length)for(const x of Array.from(u.dataTransfer.files))T(x)}function P(){var u;(u=r.value)==null||u.click()}function I(){if(r.value&&r.value.files){const u=Array.from(r.value.files);for(const x of u)T(x)}}function T(u){w.value=u,o.value.push(u),n("onNewFiles",o.value)}function V(u){o.value.splice(u,1),n("onNewFiles",o.value)}return(u,x)=>{const $=_("v-col"),X=_("v-row"),O=_("v-container");return s(),p("div",null,[t(O,null,{default:a(()=>[t(X,null,{default:a(()=>[o.value.length?(s(),A($,{key:0,cols:"6"},{default:a(()=>[f("div",Be,[(s(!0),p(q,null,K(o.value,(J,D)=>(s(),p("div",{key:D,class:"uploaded-file"},[f("a",{class:"uploaded-link",href:i.value,download:""},L(J.name),9,ze),f("button",{class:"clear-uploaded-file mb-1 ml-2",onClick:C=>V(D)}," X ",8,qe)]))),128))])]),_:1})):F("",!0),t($,{cols:o.value.length?"6":"12",class:"container-upload",onClick:P},{default:a(()=>[f("div",{onDragover:e,onDragleave:y,onDrop:b,class:"drag-message"},[j(f("span",null,L(l.text),513),[[B,!m.value]]),j(f("span",null,"Suelta los archivos aquí",512),[[B,m.value]])],32),f("input",{type:"file",ref_key:"fileInput",ref:r,onChange:I,multiple:"",style:{display:"none"}},null,544)]),_:1},8,["cols"])]),_:1})]),_:1})])}}});const ue=W(Je,[["__scopeId","data-v-ff191895"]]),He={class:"recording-container"},Xe={key:4},Ge=Q({__name:"AudioRecording",props:{audioObject:{type:Array,default:()=>[{}]}},emits:["onNewAudio"],setup(l,{emit:n}){const h=l,m=60*5,r=c(!1),i=c(!1),w=c(null),o=c(null),e=c([]);c(null);const y=c(0);let b=null;const P=c(0),I=c(0),T=c(0),V=c(null);function u(C){const k=Math.floor(C/60).toString().padStart(2,"0"),R=(C%60).toString().padStart(2,"0");return`${k}:${R}`}async function x(){try{if(I.value=Date.now(),w.value=await navigator.mediaDevices.getUserMedia({audio:!0}),(await navigator.permissions.query({name:"microphone"})).state==="denied"){console.log("Microphone permission was denied"),w.value.getTracks().forEach(k=>k.stop()),r.value=!1,o.value=null;return}r.value=!0,e.value=[],o.value=new MediaRecorder(w.value),o.value.addEventListener("dataavailable",k=>{e.value.push(k.data)}),o.value.addEventListener("stop",async()=>{w.value&&w.value.getTracks().forEach(R=>R.stop());let k=new Blob(e.value,{type:"audio/wav"});k.duration=T.value-I.value,k&&n("onNewAudio",k)}),o.value.start(),b=window.setInterval(()=>{y.value++,P.value=y.value/m*100},1e3)}catch(C){console.error(C),alert("Please grant permission to access the microphone")}}G(y,C=>{P.value=C/60*100});async function $(){T.value=Date.now(),o.value.stop(),r.value=!1,clearInterval(b)}async function X(){T.value=Date.now(),o.value.pause(),i.value=!0,$(),clearInterval(b)}async function O(){w.value&&w.value.getTracks().forEach(C=>C.stop()),o.value&&o.value.stop(),J()}function J(){i.value=!1,r.value=!1,o.value=null,e.value=[],w.value=null,y.value=0,V.value=null,clearInterval(b)}async function D(){if(console.log("REproduciendo: ",e.value.length),V.value){V.value.play();return}if(e.value.length>0){const C=new Blob(e.value,{type:"audio/wav"}),k=URL.createObjectURL(C);new Audio(k).play()}}return te(()=>{if(h.audioObject){const{duration:C,url:k}=h.audioObject;if(!C||!k)return;y.value=Math.floor(C/1e3),V.value=new Audio(k),P.value=y.value/m*100,i.value=!0}}),Se(()=>{clearInterval(b)}),(C,k)=>{const R=_("v-icon"),H=_("v-btn");return s(),p("div",He,[!r.value&&!i.value?(s(),A(H,{key:0,color:"white",onClick:x,small:""},{default:a(()=>[t(R,null,{default:a(()=>[U("mdi-microphone")]),_:1})]),_:1})):F("",!0),r.value?(s(),A(H,{key:1,color:"white",onClick:X,small:""},{default:a(()=>[t(R,null,{default:a(()=>[U("mdi-pause-circle")]),_:1})]),_:1})):F("",!0),i.value?(s(),A(H,{key:2,color:"white",onClick:D,small:""},{default:a(()=>[t(R,null,{default:a(()=>[U("mdi-play-circle")]),_:1})]),_:1})):F("",!0),r.value||i.value?(s(),A(H,{key:3,color:"white",onClick:O,small:""},{default:a(()=>[t(R,null,{default:a(()=>[U("mdi-delete-circle")]),_:1})]),_:1})):F("",!0),r.value||i.value?(s(),p("div",Xe,L(u(y.value)),1)):F("",!0)])}}});const Ke=W(Ge,[["__scopeId","data-v-3efe6072"]]),Qe=["onClick"],We=Q({__name:"AudioRecordingMany",props:{audios:{type:Array,default:()=>[{}]}},emits:["onNewAudios"],setup(l,{emit:n}){const m=c(l.audios);function r(){m.value.push({isAudioBlob:!0})}function i(e,y){m.value[y]=e,n("onNewAudios",m.value)}function w(e){m.value.splice(e,1)}function o(e){e.forEach(y=>{m.value.push(y)}),n("onNewAudios",m.value)}return(e,y)=>{const b=_("v-col"),P=_("v-row"),I=_("v-btn");return s(),p("div",null,[(s(!0),p(q,null,K(m.value,(T,V)=>(s(),p(q,{key:V},[T.duration||T.isAudioBlob?(s(),A(P,{key:0},{default:a(()=>[t(b,{cols:9},{default:a(()=>[t(Ke,{audioObject:T,onOnNewAudio:u=>i(u,V),class:"mb-1"},null,8,["audioObject","onOnNewAudio"])]),_:2},1024),t(b,{cols:3},{default:a(()=>[f("button",{class:"clear-uploaded-file mb-1 ml-2",onClick:u=>w(V)}," X ",8,Qe)]),_:2},1024)]),_:2},1024)):F("",!0)],64))),128)),t(I,{variant:"text",onClick:r},{default:a(()=>[U(" Nuevo audio ")]),_:1}),t(ue,{text:"Arrastra tus archivos de audio aquí",files:[],onOnNewFiles:o})])}}}),Ye={class:"d-flex justify-space-evenly"},Ze=["src"],et=Q({__name:"CountrySelector",emits:["onSelectedCountry"],setup(l,{emit:n}){const h=c([{value:"Peru",icon:$e},{value:"Chile",icon:Me},{value:"Colombia",icon:Ie},{value:"España",icon:Oe}]),m=c("Chile");function r(i){if(m.value===i.value)return m.value=null;m.value=i.value}return G(m,()=>{n("onSelectedCountry",m.value)},{immediate:!0}),(i,w)=>{const o=_("v-tooltip"),e=_("v-btn");return s(),p("div",Ye,[(s(!0),p(q,null,K(h.value,(y,b)=>(s(),A(e,{small:"",icon:"",color:"white",onClick:P=>r(y),class:Fe({selected:m.value===y.value}),key:b},{default:a(()=>[f("img",{style:{width:"25px"},src:y.icon},null,8,Ze),t(o,{activator:"parent",anchor:"bottom"},{default:a(()=>[U(L(y.value),1)]),_:2},1024)]),_:2},1032,["onClick","class"]))),128))])}}}),Y=l=>(Ae("data-v-9f534234"),l=l(),Ve(),l),tt={class:"card box-margin"},lt={class:"card-body"},at={class:"dataTables_info",id:"datatable-buttons_info",role:"status","aria-live":"polite"},ot={class:"basic-table-area"},st=Y(()=>f("th",{class:"text-left"},"Fecha de creación",-1)),nt={key:0,class:"text-left"},it=Y(()=>f("th",{class:"text-left"},"Nombre",-1)),ut={key:1,class:"text-left"},ct={key:2,class:"text-left"},dt=Y(()=>f("th",{class:"text-left"},null,-1)),rt={key:0},vt=["href"],ft={key:1},mt=["src"],_t={key:0,class:"audio-duration"},pt={key:1},ht={key:2},gt={class:"row my-3"},yt={class:"col-sm-12 col-md-5"},bt={class:"dataTables_info",id:"datatable-buttons_info",role:"status","aria-live":"polite"},wt={class:"col-sm-12 col-md-7"},Ct={class:"headline"},kt=Y(()=>f("p",{class:"body-1 font-weight-bold"},"Nombre",-1)),St={key:0},Ft={key:1},Lt=Y(()=>f("div",{class:"flex-grow-1"},null,-1)),Tt=Q({__name:"CloudStorageLinksView",props:{showFromChat:{type:Boolean,default:!1},country:{type:String,default:""},type:{type:String,default:""}},emits:["onSendCatalog"],setup(l,{emit:n}){const h=l,m=se("$deepCopy"),r=se("$swal"),i=Le(),w=Te();xe();const o=c([]),e=c(ie()),y=c(ie());c({});const b=c(1);c(0);const P=c(["name"]),I=c(""),T=c(!1),V=c(null),u=c(-1),x=c("Chile");c([{text:"Agregado",align:"left",sortable:!1,value:"createdAt"},{text:"Nombre",align:"left",sortable:!1,value:"name"},{text:"Acciones",value:"action",sortable:!1}]);const $=c(!1),X=ee(()=>u.value===-1?J.value?"Cargar Catálogo":"Cargar audio":J.value?"Editar Catálogo":"Editar audio");G(I,()=>{clearTimeout(V.value),V.value=setTimeout(()=>{b.value=1,D(b.value)},600)}),G(b,()=>{D(b.value)}),G(w,()=>{D()});const O=ee(()=>h.type?h.type:w.name==="CloudStorageLinks"?"files":"audios"),J=ee(()=>O.value==="files");te(()=>{D()});async function D(v=1){let d={page:b.value||v,fields:P.value.join(","),sort:"createdAt",order:"desc",limit:10,type:O.value};x.value&&(d.country=x.value),I.value&&(d.filter=I.value),h.showFromChat&&(d.isActive=!0),await Promise.all([i.dispatch("cloudStorageLinksModule/list",d)]),o.value=m(i.state.cloudStorageLinksModule.cloudStorageLinks)}async function C(){if(T.value=!0,u.value>-1){e.value.country=x.value;let v=o.value[u.value]._id;try{e.value.preFiles&&(e.value.files=await Promise.all(e.value.preFiles.map(async d=>d.url?d.url:await ne(d,d.duration?"audio":"file"))),e.value.files=e.value.files.map((d,S)=>({url:d,name:e.value.preFiles[S].name,type:e.value.preFiles[S].type,size:e.value.preFiles[S].size,duration:e.value.preFiles[S].duration}))),await i.dispatch("cloudStorageLinksModule/update",{id:v,data:{type:O.value,...e.value}}),Object.assign(o.value[u.value],e.value),Z()}finally{T.value=!1}}else try{e.value.preFiles&&(e.value.files=await Promise.all(e.value.preFiles.map(async d=>await ne(d,d.duration?"audio":"file"))),e.value.files=e.value.files.map((d,S)=>({url:d,name:e.value.preFiles[S].name,type:e.value.preFiles[S].type,size:e.value.preFiles[S].size,duration:e.value.preFiles[S].duration}))),e.value.country=x.value;let v=await i.dispatch("cloudStorageLinksModule/create",{type:O.value,...e.value});o.value.push(v),Z(),D()}finally{T.value=!1}}function k(v){u.value=o.value.indexOf(v),e.value=Object.assign({},v),$.value=!0}async function R(v){const d=o.value.indexOf(v);let S=o.value[d]._id;(await r({text:"¿Realmente deseas eliminar este registro?",icon:"error",showCancelButton:!0,cancelButtonText:"Cancelar"})).isConfirmed&&(await i.dispatch("cloudStorageLinksModule/delete",S),o.value.splice(d,1))}function H(v){console.log("🚀 Aqui *** -> negotiationStatus:",v),e.value.negotiationStatusId=v}function ce(v){console.log("🚀 Aqui *** -> selectedLabels:",v),v.length>0&&(e.value.todofullLabels=v)}function de(v){x.value=v,h.country&&(x.value=h.country),e.value.country=v,D()}async function Z(){$.value=!1,setTimeout(()=>{e.value=Object.assign({},y.value),u.value=-1},300)}async function re(v){e.value.preFiles=v}function ve(v){console.log("🐞 LOG HERE audios:",v),e.value.preFiles=v}function fe(v){n("onSendCatalog",v)}async function me(v){await i.dispatch("cloudStorageLinksModule/update",{id:v._id,data:v})}return(v,d)=>{const S=_("v-row"),z=_("v-btn"),le=_("v-pagination"),E=_("v-col"),ae=_("v-text-field"),_e=_("v-checkbox"),pe=_("v-table"),he=_("v-icon"),ge=_("v-card-title"),ye=_("v-divider"),oe=_("v-container"),be=_("v-card-actions"),we=_("v-card"),Ce=_("v-dialog");return s(),A(oe,{fluid:""},{default:a(()=>[j(t(S,{class:"mb-3"},{default:a(()=>[t(et,{onOnSelectedCountry:de})]),_:1},512),[[B,!l.showFromChat]]),t(S,null,{default:a(()=>[t(E,{cols:"12"},{default:a(()=>[f("div",tt,[f("div",lt,[j(t(z,{onClick:d[0]||(d[0]=g=>{Z(),$.value=!0})},{default:a(()=>[U(L(N(O)==="files"?"Agregar Catálogo":"Agregar Audio"),1)]),_:1},512),[[B,!l.showFromChat]]),t(S,{class:"my-3"},{default:a(()=>[t(E,{cols:"12"},{default:a(()=>[j(t(le,{modelValue:b.value,"onUpdate:modelValue":d[1]||(d[1]=g=>b.value=g),length:N(i).state.cloudStorageLinksModule.totalPages},null,8,["modelValue","length"]),[[B,!l.showFromChat]])]),_:1}),j(t(E,{cols:"12"},{default:a(()=>[f("div",at," Mostrando "+L(N(i).state.itemsPerPage>o.value.length?o.value.length:N(i).state.itemsPerPage)+" de "+L(N(i).state.cloudStorageLinksModule.total)+" registros ",1)]),_:1},512),[[B,!l.showFromChat]])]),_:1}),t(E,{cols:"12",sm:"12"},{default:a(()=>[t(ae,{style:{"background-color":"#fff"},dense:"","hide-details":"",modelValue:I.value,"onUpdate:modelValue":d[2]||(d[2]=g=>I.value=g),placeholder:N(O)==="files"?"Buscar catálogo":"Buscar audio",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","placeholder"])]),_:1}),f("div",ot,[t(pe,null,{default:a(()=>[f("thead",null,[f("tr",null,[st,l.showFromChat?F("",!0):(s(),p("th",nt,"URL")),it,l.showFromChat?F("",!0):(s(),p("th",ut,"Veces usado")),l.showFromChat?F("",!0):(s(),p("th",ct,"Activo?")),dt])]),f("tbody",null,[(s(!0),p(q,null,K(o.value,g=>(s(),p("tr",{key:g._id},[f("td",null,L(N(Ne)(g.createdAt,"dd/MM/yyyy HH:mm")),1),!l.showFromChat||N(O)==="audios"?(s(),p("td",rt,[(s(!0),p(q,null,K(g.files,(M,ke)=>(s(),p("div",{key:ke},[M.url&&M.type!=="audio/wav"?(s(),p("a",{key:0,href:M.url,target:"_blank",rel:"noopener noreferrer"},L(M.url),9,vt)):(s(),p("div",ft,[t(S,null,{default:a(()=>[t(E,{sm:"8"},{default:a(()=>[f("audio",{style:{"max-width":"90%"},controls:"",src:M.url},null,8,mt)]),_:2},1024),t(E,{sm:"4"},{default:a(()=>[M.duration?(s(),p("div",_t,L(Math.floor(M.duration/1e3))+" segs ",1)):F("",!0)]),_:2},1024)]),_:2},1024)]))]))),128))])):F("",!0),f("td",null,L(g.name),1),l.showFromChat?F("",!0):(s(),p("td",pt,L(g.timesUsed),1)),l.showFromChat?F("",!0):(s(),p("td",ht,[t(_e,{onChange:M=>me(g),modelValue:g.isActive,"onUpdate:modelValue":M=>g.isActive=M},null,8,["onChange","modelValue","onUpdate:modelValue"])])),f("td",null,[l.showFromChat?(s(),A(z,{key:1,color:"primary",size:"small",class:"mr-2",onClick:M=>fe(g)},{default:a(()=>[U("Enviar")]),_:2},1032,["onClick"])):(s(),p(q,{key:0},[j(t(z,{color:"primary",icon:"mdi mdi-eye",size:"x-small",class:"mr-2"},null,512),[[B,g.type!=="audios"]]),t(z,{onClick:M=>k(g),color:"success",icon:"mdi mdi-pencil",size:"x-small",class:"mr-2"},null,8,["onClick"]),t(z,{onClick:M=>R(g),color:"error",icon:"mdi mdi-delete",size:"x-small"},null,8,["onClick"])],64))])]))),128))])]),_:1})]),f("div",gt,[j(f("div",yt,[f("div",bt," Mostrando "+L(N(i).state.itemsPerPage>o.value.length?o.value.length:N(i).state.itemsPerPage)+" de "+L(N(i).state.cloudStorageLinksModule.total)+" registros ",1)],512),[[B,!l.showFromChat]]),f("div",wt,[t(le,{modelValue:b.value,"onUpdate:modelValue":d[3]||(d[3]=g=>b.value=g),length:N(i).state.cloudStorageLinksModule.totalPages},null,8,["modelValue","length"])])])])])]),_:1}),t(Ce,{modelValue:$.value,"onUpdate:modelValue":d[5]||(d[5]=g=>$.value=g),width:"700px"},{default:a(()=>[t(we,null,{default:a(()=>[t(ge,null,{default:a(()=>[t(he,{color:"primary",class:"mr-1"},{default:a(()=>[U("mdi-cloud-upload")]),_:1}),f("span",Ct,L(N(X)),1)]),_:1}),t(ye),t(oe,{class:"pa-5"},{default:a(()=>[t(S,{dense:""},{default:a(()=>[t(E,{cols:"12",sm:"12",md:"12"},{default:a(()=>[kt,t(ae,{modelValue:e.value.name,"onUpdate:modelValue":d[4]||(d[4]=g=>e.value.name=g),"hide-details":"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),t(E,{cols:"12",sm:"12"},{default:a(()=>[t(Ue,{initialData:e.value.todofullLabels,class:"my-3",onOnSelectTodofullLabels:ce},null,8,["initialData"])]),_:1}),t(E,{cols:"12",sm:"12"},{default:a(()=>[$.value?(s(),A(je,{key:0,initialData:e.value.negotiationStatusId,country:x.value,class:"my-3",onOnSelectNegotiationStatuses:H},null,8,["initialData","country"])):F("",!0)]),_:1}),t(E,{cols:"12",sm:"12"},{default:a(()=>[N(O)==="files"?(s(),p("div",St,[$.value?(s(),A(ue,{key:0,files:e.value.files,onOnNewFiles:re},null,8,["files"])):F("",!0)])):(s(),p("div",Ft,[$.value?(s(),A(We,{key:0,onOnNewAudios:ve,audios:e.value.files},null,8,["audios"])):F("",!0)]))]),_:1})]),_:1})]),_:1}),t(be,{"rd-actions":""},{default:a(()=>[Lt,t(z,{outlined:"",color:"error",text:"",onClick:Z},{default:a(()=>[U("Cancelar")]),_:1}),t(z,{loading:T.value,color:"success",onClick:C},{default:a(()=>[U("Guardar")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});const xt=W(Tt,[["__scopeId","data-v-9f534234"]]),$t=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"}));export{xt as C,je as N,Ue as T,$t as a};
