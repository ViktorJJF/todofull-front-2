import{r as m,o as s,c as N,w as l,a as t,b as f,t as F,f as Q,h as d,C as te,g as _,F as z,j as K,q as L,J as E,K as B,l as G,ap as Le,d as P,k as ue,n as Fe,v as ee,u as x,X as se,E as Te,aq as xe,ar as ne,af as Ne,H as Ae,I as Ve}from"./index-7bb36979.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const $e={props:{initialData:{type:Array,default:()=>[]}},data(){return{disabled:!1,todofullLabels:[],selectedTodofullLabels2:[],selectedTodofullLabels:[],searchLabel:"",isInidialDataLoading:!1,isInitialDataExecuted:!1}},computed:{filteredTodofullLabels(){return this.todofullLabels.filter(a=>a.is_active)}},watch:{selectedTodofullLabels:{handler(a,n){this.searchLabel="",this.$emit("onSelectTodofullLabels",JSON.parse(JSON.stringify(this.selectedTodofullLabels))),this.disabled=!0,setTimeout(()=>{this.disabled=!1},0)},deep:!0}},async mounted(){var a;this.selectedTodofullLabels=((a=this.initialData)==null?void 0:a.map(n=>typeof n=="string"?n:n._id))||[],this.$store.state.todofullLabelsModule.todofullLabels.length===0&&await this.$store.dispatch("todofullLabelsModule/list",{sort:"name",order:"asc"}),this.todofullLabels=this.$store.state.todofullLabelsModule.todofullLabels.map(n=>({_id:n._id,name:n.name,is_active:n.is_active}))},methods:{async removeLabels(a,n){a.splice(a.findIndex(p=>p._id===n._id),1),this.$emit("onSelectTodofullLabels",this.selectedTodofullLabels)},getLabelTitle(a){const n=this.todofullLabels.find(p=>p.value==a);return n?n.title:""}}};function Me(a,n,p,g,i,c){const y=m("v-chip"),o=m("v-combobox");return s(),N(o,{"hide-details":"",variant:"outlined",disabled:i.disabled,placeholder:"Selecciona las etiquetas",class:"mt-3","search-input":i.searchLabel,modelValue:i.selectedTodofullLabels,"onUpdate:modelValue":n[1]||(n[1]=e=>i.selectedTodofullLabels=e),"item-value":"_id","item-title":"name","return-object":!1,items:c.filteredTodofullLabels,multiple:"","no-data-text":"No se encontraron etiquetas",outlined:"",density:"compact"},{selection:l(e=>[t(y,{close:"","onClick:close":n[0]||(n[0]=w=>c.removeLabels(i.selectedTodofullLabels,a.item)),color:"primary"},{default:l(()=>[f("strong",null,F(e.item.title),1)]),_:2},1024)]),_:1},8,["disabled","search-input","modelValue","items"])}const Ie=W($e,[["render",Me]]),Oe={props:{initialData:{type:Object,default:{}}},data(){return{disabled:!1,negotiationStatuses:[],selectedNegotiationStatuses:[],searchLabel:"",isInidialDataLoading:!1,isInitialDataExecuted:!1}},watch:{selectedNegotiationStatuses:{handler(a,n){this.searchLabel="",this.$emit("onSelectNegotiationStatuses",this.selectedNegotiationStatuses?JSON.parse(JSON.stringify(this.selectedNegotiationStatuses)):null),this.disabled=!0,setTimeout(()=>{this.disabled=!1},0)},deep:!0}},async mounted(){this.initialData&&(this.selectedNegotiationStatuses=this.initialData._id),await this.$store.dispatch("negotiationStatusesModule/list",{sort:"name",order:"asc",company:this.$store.getters["authModule/getCurrentCompany"].company._id}),this.negotiationStatuses=this.$store.state.negotiationStatusesModule.negotiationStatuses.map(a=>({value:a._id,title:a.name})),console.log("🚀 Aqui *** -> this.negotiationStatuses",this.negotiationStatuses)},methods:{async removeLabels(a,n){a.splice(a.findIndex(p=>p._id===n._id),1),this.$emit("onSelectNegotiationStatuses",this.selectedNegotiationStatuses)},getLabelTitle(a){const n=this.negotiationStatuses.find(p=>p.value==a);return n?n.title:""}}};function De(a,n,p,g,i,c){const y=m("v-select");return s(),N(y,{"hide-details":"",variant:"outlined",disabled:i.disabled,placeholder:"Selecciona el estado de negociación",class:"mt-3",modelValue:i.selectedNegotiationStatuses,"onUpdate:modelValue":n[0]||(n[0]=o=>i.selectedNegotiationStatuses=o),items:i.negotiationStatuses,"no-data-text":"No se encontraron estados de negociación",outlined:"",clearable:"",density:"compact"},null,8,["disabled","modelValue","items"])}const Ue=W(Oe,[["render",De]]),ie=()=>({name:"",url:"",files:[],fileType:"",country:""}),Re={class:"file-preview"},Pe=["href"],je=["onClick"],Ee=Q({__name:"UploadFiles",props:{files:{type:Array,default:()=>[]},text:{type:String,default:"Arrastra una imagen o archivo aquí"}},emits:["onNewFiles"],setup(a,{emit:n}){const p=a,g=d(!1),i=d(null),c=d(null);d(!1);const y=d(null),o=d([]);te(()=>{p.files&&(o.value=[...p.files])});function e(u){g.value||(g.value=!0),u.preventDefault()}function w(u){u.currentTarget.contains(u.relatedTarget)||(u.preventDefault(),g.value=!1)}function h(u){if(u.stopPropagation(),u.preventDefault(),g.value=!1,u.dataTransfer&&u.dataTransfer.files.length)for(const $ of Array.from(u.dataTransfer.files))T($)}function D(){var u;(u=i.value)==null||u.click()}function A(){if(i.value&&i.value.files){const u=Array.from(i.value.files);for(const $ of u)T($)}}function T(u){y.value=u,o.value.push(u),n("onNewFiles",o.value)}function V(u){o.value.splice(u,1),n("onNewFiles",o.value)}return(u,$)=>{const M=m("v-col"),X=m("v-row"),O=m("v-container");return s(),_("div",null,[t(O,null,{default:l(()=>[t(X,null,{default:l(()=>[o.value.length?(s(),N(M,{key:0,cols:"6"},{default:l(()=>[f("div",Re,[(s(!0),_(z,null,K(o.value,(J,U)=>(s(),_("div",{key:U,class:"uploaded-file"},[f("a",{class:"uploaded-link",href:c.value,download:""},F(J.name),9,Pe),f("button",{class:"clear-uploaded-file mb-1 ml-2",onClick:C=>V(U)}," X ",8,je)]))),128))])]),_:1})):L("",!0),t(M,{cols:o.value.length?"6":"12",class:"container-upload",onClick:D},{default:l(()=>[f("div",{onDragover:e,onDragleave:w,onDrop:h,class:"drag-message"},[E(f("span",null,F(a.text),513),[[B,!g.value]]),E(f("span",null,"Suelta los archivos aquí",512),[[B,g.value]])],32),f("input",{type:"file",ref_key:"fileInput",ref:i,onChange:A,multiple:"",style:{display:"none"}},null,544)]),_:1},8,["cols"])]),_:1})]),_:1})])}}});const de=W(Ee,[["__scopeId","data-v-ff191895"]]),Be={class:"recording-container"},qe={key:4},ze=Q({__name:"AudioRecording",props:{audioObject:{type:Array,default:()=>[{}]}},emits:["onNewAudio"],setup(a,{emit:n}){const p=a,g=60*5,i=d(!1),c=d(!1),y=d(null),o=d(null),e=d([]);d(null);const w=d(0);let h=null;const D=d(0),A=d(0),T=d(0),V=d(null);function u(C){const k=Math.floor(C/60).toString().padStart(2,"0"),R=(C%60).toString().padStart(2,"0");return`${k}:${R}`}async function $(){try{if(A.value=Date.now(),y.value=await navigator.mediaDevices.getUserMedia({audio:!0}),(await navigator.permissions.query({name:"microphone"})).state==="denied"){console.log("Microphone permission was denied"),y.value.getTracks().forEach(k=>k.stop()),i.value=!1,o.value=null;return}i.value=!0,e.value=[],o.value=new MediaRecorder(y.value),o.value.addEventListener("dataavailable",k=>{e.value.push(k.data)}),o.value.addEventListener("stop",async()=>{y.value&&y.value.getTracks().forEach(R=>R.stop());let k=new Blob(e.value,{type:"audio/wav"});k.duration=T.value-A.value,k&&n("onNewAudio",k)}),o.value.start(),h=window.setInterval(()=>{w.value++,D.value=w.value/g*100},1e3)}catch(C){console.error(C),alert("Please grant permission to access the microphone")}}G(w,C=>{D.value=C/60*100});async function M(){T.value=Date.now(),o.value.stop(),i.value=!1,clearInterval(h)}async function X(){T.value=Date.now(),o.value.pause(),c.value=!0,M(),clearInterval(h)}async function O(){y.value&&y.value.getTracks().forEach(C=>C.stop()),o.value&&o.value.stop(),J()}function J(){c.value=!1,i.value=!1,o.value=null,e.value=[],y.value=null,w.value=0,V.value=null,clearInterval(h)}async function U(){if(console.log("REproduciendo: ",e.value.length),V.value){V.value.play();return}if(e.value.length>0){const C=new Blob(e.value,{type:"audio/wav"}),k=URL.createObjectURL(C);new Audio(k).play()}}return te(()=>{if(p.audioObject){const{duration:C,url:k}=p.audioObject;if(!C||!k)return;w.value=Math.floor(C/1e3),V.value=new Audio(k),D.value=w.value/g*100,c.value=!0}}),Le(()=>{clearInterval(h)}),(C,k)=>{const R=m("v-icon"),H=m("v-btn");return s(),_("div",Be,[!i.value&&!c.value?(s(),N(H,{key:0,color:"white",onClick:$,small:""},{default:l(()=>[t(R,null,{default:l(()=>[P("mdi-microphone")]),_:1})]),_:1})):L("",!0),i.value?(s(),N(H,{key:1,color:"white",onClick:X,small:""},{default:l(()=>[t(R,null,{default:l(()=>[P("mdi-pause-circle")]),_:1})]),_:1})):L("",!0),c.value?(s(),N(H,{key:2,color:"white",onClick:U,small:""},{default:l(()=>[t(R,null,{default:l(()=>[P("mdi-play-circle")]),_:1})]),_:1})):L("",!0),i.value||c.value?(s(),N(H,{key:3,color:"white",onClick:O,small:""},{default:l(()=>[t(R,null,{default:l(()=>[P("mdi-delete-circle")]),_:1})]),_:1})):L("",!0),i.value||c.value?(s(),_("div",qe,F(u(w.value)),1)):L("",!0)])}}});const Je=W(ze,[["__scopeId","data-v-3efe6072"]]),He=["onClick"],Xe=Q({__name:"AudioRecordingMany",props:{audios:{type:Array,default:()=>[{}]}},emits:["onNewAudios"],setup(a,{emit:n}){const g=d(a.audios);function i(){g.value.push({isAudioBlob:!0})}function c(e,w){g.value[w]=e,n("onNewAudios",g.value)}function y(e){g.value.splice(e,1)}function o(e){e.forEach(w=>{g.value.push(w)}),n("onNewAudios",g.value)}return(e,w)=>{const h=m("v-col"),D=m("v-row"),A=m("v-btn");return s(),_("div",null,[(s(!0),_(z,null,K(g.value,(T,V)=>(s(),_(z,{key:V},[T.duration||T.isAudioBlob?(s(),N(D,{key:0},{default:l(()=>[t(h,{cols:9},{default:l(()=>[t(Je,{audioObject:T,onOnNewAudio:u=>c(u,V),class:"mb-1"},null,8,["audioObject","onOnNewAudio"])]),_:2},1024),t(h,{cols:3},{default:l(()=>[f("button",{class:"clear-uploaded-file mb-1 ml-2",onClick:u=>y(V)}," X ",8,He)]),_:2},1024)]),_:2},1024)):L("",!0)],64))),128)),t(A,{variant:"text",onClick:i},{default:l(()=>[P(" Nuevo audio ")]),_:1}),t(de,{text:"Arrastra tus archivos de audio aquí",files:[],onOnNewFiles:o})])}}}),Ge={class:"d-flex justify-space-evenly"},Ke=["src"],Qe=Q({__name:"CompanySelector",emits:["onSelectedCompany"],setup(a,{emit:n}){const p=ue(),g=d(p.getters["authModule/getCompanies"]),i=d(p.getters["authModule/getCurrentCompany"].company._id);function c(y){if(i.value===y.company._id)return i.value=null;i.value=y.company._id}return G(i,()=>{n("onSelectedCompany",i.value)},{immediate:!0}),(y,o)=>{const e=m("v-tooltip"),w=m("v-btn");return s(),_("div",Ge,[(s(!0),_(z,null,K(g.value,(h,D)=>(s(),N(w,{small:"",icon:"",color:"white",onClick:A=>c(h),class:Fe({selected:i.value===h.company._id}),key:D},{default:l(()=>[f("img",{style:{width:"25px"},src:h.company.iconUrl},null,8,Ke),t(e,{activator:"parent",anchor:"bottom"},{default:l(()=>[P(F(h.company.name),1)]),_:2},1024)]),_:2},1032,["onClick","class"]))),128))])}}}),Y=a=>(Ae("data-v-be03a144"),a=a(),Ve(),a),We={class:"card box-margin"},Ye={class:"card-body"},Ze={class:"dataTables_info",id:"datatable-buttons_info",role:"status","aria-live":"polite"},et={class:"basic-table-area"},tt=Y(()=>f("th",{class:"text-left"},"Fecha de creación",-1)),at={key:0,class:"text-left"},lt=Y(()=>f("th",{class:"text-left"},"Nombre",-1)),ot={key:1,class:"text-left"},st={key:2,class:"text-left"},nt=Y(()=>f("th",{class:"text-left"},null,-1)),it={key:0},ut=["href"],dt={key:1},ct=["src"],rt={key:0,class:"audio-duration"},vt={key:1},ft={key:2},mt={class:"row my-3"},_t={class:"col-sm-12 col-md-5"},pt={class:"dataTables_info",id:"datatable-buttons_info",role:"status","aria-live":"polite"},ht={class:"col-sm-12 col-md-7"},gt={class:"headline"},yt=Y(()=>f("p",{class:"body-1 font-weight-bold"},"Nombre",-1)),bt={key:0},wt={key:1},Ct=Y(()=>f("div",{class:"flex-grow-1"},null,-1)),kt=Q({__name:"CloudStorageLinksView",props:{showFromChat:{type:Boolean,default:!1},company:{type:String,default:""},type:{type:String,default:""}},emits:["onSendCatalog"],setup(a,{emit:n}){const p=a,g=se("$deepCopy"),i=se("$swal"),c=ue(),y=Te();xe();const o=d([]),e=d(ie()),w=d(ie());d({});const h=d(1);d(0);const D=d(["name"]),A=d(""),T=d(!1),V=d(null),u=d(-1),$=d(c.getters["authModule/getCurrentCompany"].company._id);d([{text:"Agregado",align:"left",sortable:!1,value:"createdAt"},{text:"Nombre",align:"left",sortable:!1,value:"name"},{text:"Acciones",value:"action",sortable:!1}]);const M=d(!1),X=ee(()=>u.value===-1?J.value?"Cargar Catálogo":"Cargar audio":J.value?"Editar Catálogo":"Editar audio");G(A,()=>{clearTimeout(V.value),V.value=setTimeout(()=>{h.value=1,U(h.value)},600)}),G(h,()=>{U(h.value)}),G(y,()=>{U()});const O=ee(()=>p.type?p.type:y.name==="CloudStorageLinks"?"files":"audios"),J=ee(()=>O.value==="files");te(()=>{U()});async function U(v=1){let r={page:h.value||v,fields:D.value.join(","),sort:"createdAt",order:"desc",limit:10,type:O.value};$.value&&(r.company=$.value),A.value&&(r.filter=A.value),p.showFromChat&&(r.isActive=!0),await Promise.all([c.dispatch("cloudStorageLinksModule/list",r)]),o.value=g(c.state.cloudStorageLinksModule.cloudStorageLinks)}async function C(){if(T.value=!0,u.value>-1){e.value.company=$.value;let v=o.value[u.value]._id;try{e.value.preFiles&&(e.value.files=await Promise.all(e.value.preFiles.map(async r=>r.url?r.url:await ne(r,r.duration?"audio":"file"))),e.value.files=e.value.files.map((r,S)=>({url:r,name:e.value.preFiles[S].name,type:e.value.preFiles[S].type,size:e.value.preFiles[S].size,duration:e.value.preFiles[S].duration}))),await c.dispatch("cloudStorageLinksModule/update",{id:v,data:{type:O.value,...e.value}}),Object.assign(o.value[u.value],e.value),Z()}finally{T.value=!1}}else try{e.value.preFiles&&(e.value.files=await Promise.all(e.value.preFiles.map(async r=>await ne(r,r.duration?"audio":"file"))),e.value.files=e.value.files.map((r,S)=>({url:r,name:e.value.preFiles[S].name,type:e.value.preFiles[S].type,size:e.value.preFiles[S].size,duration:e.value.preFiles[S].duration}))),e.value.company=$.value;let v=await c.dispatch("cloudStorageLinksModule/create",{type:O.value,...e.value});o.value.push(v),Z(),U()}finally{T.value=!1}}function k(v){u.value=o.value.indexOf(v),e.value=Object.assign({},v),M.value=!0}async function R(v){const r=o.value.indexOf(v);let S=o.value[r]._id;(await i({text:"¿Realmente deseas eliminar este registro?",icon:"error",showCancelButton:!0,cancelButtonText:"Cancelar"})).isConfirmed&&(await c.dispatch("cloudStorageLinksModule/delete",S),o.value.splice(r,1))}function H(v){console.log("🚀 Aqui *** -> negotiationStatus:",v),e.value.negotiationStatusId=v}function ce(v){console.log("🚀 Aqui *** -> selectedLabels:",v),v.length>0&&(e.value.todofullLabels=v)}function re(v){$.value=v,p.company&&($.value=p.company),e.value.company=v,U()}async function Z(){M.value=!1,setTimeout(()=>{e.value=Object.assign({},w.value),u.value=-1},300)}async function ve(v){e.value.preFiles=v}function fe(v){console.log("🐞 LOG HERE audios:",v),e.value.preFiles=v}function me(v){n("onSendCatalog",v)}async function _e(v){await c.dispatch("cloudStorageLinksModule/update",{id:v._id,data:v})}return(v,r)=>{const S=m("v-row"),q=m("v-btn"),ae=m("v-pagination"),j=m("v-col"),le=m("v-text-field"),pe=m("v-checkbox"),he=m("v-table"),ge=m("v-icon"),ye=m("v-card-title"),be=m("v-divider"),oe=m("v-container"),we=m("v-card-actions"),Ce=m("v-card"),ke=m("v-dialog");return s(),N(oe,{fluid:""},{default:l(()=>[E(t(S,{class:"mb-3"},{default:l(()=>[t(Qe,{onOnSelectedCompany:re})]),_:1},512),[[B,!a.showFromChat]]),t(S,null,{default:l(()=>[t(j,{cols:"12"},{default:l(()=>[f("div",We,[f("div",Ye,[E(t(q,{onClick:r[0]||(r[0]=b=>{Z(),M.value=!0})},{default:l(()=>[P(F(x(O)==="files"?"Agregar Catálogo":"Agregar Audio"),1)]),_:1},512),[[B,!a.showFromChat]]),t(S,{class:"my-3"},{default:l(()=>[t(j,{cols:"12"},{default:l(()=>[E(t(ae,{modelValue:h.value,"onUpdate:modelValue":r[1]||(r[1]=b=>h.value=b),length:x(c).state.cloudStorageLinksModule.totalPages},null,8,["modelValue","length"]),[[B,!a.showFromChat]])]),_:1}),E(t(j,{cols:"12"},{default:l(()=>[f("div",Ze," Mostrando "+F(x(c).state.itemsPerPage>o.value.length?o.value.length:x(c).state.itemsPerPage)+" de "+F(x(c).state.cloudStorageLinksModule.total)+" registros ",1)]),_:1},512),[[B,!a.showFromChat]])]),_:1}),t(j,{cols:"12",sm:"12"},{default:l(()=>[t(le,{style:{"background-color":"#fff"},dense:"","hide-details":"",modelValue:A.value,"onUpdate:modelValue":r[2]||(r[2]=b=>A.value=b),placeholder:x(O)==="files"?"Buscar catálogo":"Buscar audio",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","placeholder"])]),_:1}),f("div",et,[t(he,null,{default:l(()=>[f("thead",null,[f("tr",null,[tt,a.showFromChat?L("",!0):(s(),_("th",at,"URL")),lt,a.showFromChat?L("",!0):(s(),_("th",ot,"Veces usado")),a.showFromChat?L("",!0):(s(),_("th",st,"Activo?")),nt])]),f("tbody",null,[(s(!0),_(z,null,K(o.value,b=>(s(),_("tr",{key:b._id},[f("td",null,F(x(Ne)(b.createdAt,"dd/MM/yyyy HH:mm")),1),!a.showFromChat||x(O)==="audios"?(s(),_("td",it,[(s(!0),_(z,null,K(b.files,(I,Se)=>(s(),_("div",{key:Se},[I.url&&I.type!=="audio/wav"?(s(),_("a",{key:0,href:I.url,target:"_blank",rel:"noopener noreferrer"},F(I.url),9,ut)):(s(),_("div",dt,[t(S,null,{default:l(()=>[t(j,{sm:"8"},{default:l(()=>[f("audio",{style:{"max-width":"90%"},controls:"",src:I.url},null,8,ct)]),_:2},1024),t(j,{sm:"4"},{default:l(()=>[I.duration?(s(),_("div",rt,F(Math.floor(I.duration/1e3))+" segs ",1)):L("",!0)]),_:2},1024)]),_:2},1024)]))]))),128))])):L("",!0),f("td",null,F(b.name),1),a.showFromChat?L("",!0):(s(),_("td",vt,F(b.timesUsed),1)),a.showFromChat?L("",!0):(s(),_("td",ft,[t(pe,{onChange:I=>_e(b),modelValue:b.isActive,"onUpdate:modelValue":I=>b.isActive=I},null,8,["onChange","modelValue","onUpdate:modelValue"])])),f("td",null,[a.showFromChat?(s(),N(q,{key:1,color:"primary",size:"small",class:"mr-2",onClick:I=>me(b)},{default:l(()=>[P("Enviar")]),_:2},1032,["onClick"])):(s(),_(z,{key:0},[E(t(q,{color:"primary",icon:"mdi mdi-eye",size:"x-small",class:"mr-2"},null,512),[[B,b.type!=="audios"]]),t(q,{onClick:I=>k(b),color:"success",icon:"mdi mdi-pencil",size:"x-small",class:"mr-2"},null,8,["onClick"]),t(q,{onClick:I=>R(b),color:"error",icon:"mdi mdi-delete",size:"x-small"},null,8,["onClick"])],64))])]))),128))])]),_:1})]),f("div",mt,[E(f("div",_t,[f("div",pt," Mostrando "+F(x(c).state.itemsPerPage>o.value.length?o.value.length:x(c).state.itemsPerPage)+" de "+F(x(c).state.cloudStorageLinksModule.total)+" registros ",1)],512),[[B,!a.showFromChat]]),f("div",ht,[t(ae,{modelValue:h.value,"onUpdate:modelValue":r[3]||(r[3]=b=>h.value=b),length:x(c).state.cloudStorageLinksModule.totalPages},null,8,["modelValue","length"])])])])])]),_:1}),t(ke,{modelValue:M.value,"onUpdate:modelValue":r[5]||(r[5]=b=>M.value=b),width:"700px"},{default:l(()=>[t(Ce,null,{default:l(()=>[t(ye,null,{default:l(()=>[t(ge,{color:"primary",class:"mr-1"},{default:l(()=>[P("mdi-cloud-upload")]),_:1}),f("span",gt,F(x(X)),1)]),_:1}),t(be),t(oe,{class:"pa-5"},{default:l(()=>[t(S,{dense:""},{default:l(()=>[t(j,{cols:"12",sm:"12",md:"12"},{default:l(()=>[yt,t(le,{modelValue:e.value.name,"onUpdate:modelValue":r[4]||(r[4]=b=>e.value.name=b),"hide-details":"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),t(j,{cols:"12",sm:"12"},{default:l(()=>[t(Ie,{initialData:e.value.todofullLabels,class:"my-3",onOnSelectTodofullLabels:ce},null,8,["initialData"])]),_:1}),t(j,{cols:"12",sm:"12"},{default:l(()=>[M.value?(s(),N(Ue,{key:0,initialData:e.value.negotiationStatusId,class:"my-3",onOnSelectNegotiationStatuses:H},null,8,["initialData"])):L("",!0)]),_:1}),t(j,{cols:"12",sm:"12"},{default:l(()=>[x(O)==="files"?(s(),_("div",bt,[M.value?(s(),N(de,{key:0,files:e.value.files,onOnNewFiles:ve},null,8,["files"])):L("",!0)])):(s(),_("div",wt,[M.value?(s(),N(Xe,{key:0,onOnNewAudios:fe,audios:e.value.files},null,8,["audios"])):L("",!0)]))]),_:1})]),_:1})]),_:1}),t(we,{"rd-actions":""},{default:l(()=>[Ct,t(q,{outlined:"",color:"error",text:"",onClick:Z},{default:l(()=>[P("Cancelar")]),_:1}),t(q,{loading:T.value,color:"success",onClick:C},{default:l(()=>[P("Guardar")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});const St=W(kt,[["__scopeId","data-v-be03a144"]]),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"}));export{St as C,Ue as N,Ie as T,Tt as a};
