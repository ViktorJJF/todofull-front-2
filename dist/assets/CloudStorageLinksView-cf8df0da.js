import{_ as J,r as p,o as s,c as N,w as a,a as t,b as c,t as F,e as W,g as r,D as te,f as h,F as z,k as Q,j as m,J as B,K as E,l as K,ap as ke,d as U,n as Te,S as se,i as Fe,C as Le,aq as Ae,v as ee,u as x,ar as ne,ag as xe,H as Ne,I as Ve}from"./index-2490a766.js";import{P as $e,C as De,a as Ie,E as Me}from"./espania-2378a770.js";const Oe={props:{initialData:{type:Array,default:()=>[]}},data(){return{disabled:!1,todofullLabels:[],selectedTodofullLabels2:[],selectedTodofullLabels:[],searchLabel:"",isInidialDataLoading:!1,isInitialDataExecuted:!1}},computed:{filteredTodofullLabels(){return this.todofullLabels.filter(l=>l.is_active)}},watch:{selectedTodofullLabels:{handler(l,n){this.searchLabel="",this.$emit("onSelectTodofullLabels",JSON.parse(JSON.stringify(this.selectedTodofullLabels))),this.disabled=!0,setTimeout(()=>{this.disabled=!1},0)},deep:!0}},async mounted(){var l;this.selectedTodofullLabels=((l=this.initialData)==null?void 0:l.map(n=>typeof n=="string"?n:n._id))||[],this.$store.state.todofullLabelsModule.todofullLabels.length===0&&await this.$store.dispatch("todofullLabelsModule/list",{sort:"name",order:"asc"}),this.todofullLabels=this.$store.state.todofullLabelsModule.todofullLabels.map(n=>({_id:n._id,name:n.name,is_active:n.is_active}))},methods:{async removeLabels(l,n){l.splice(l.findIndex(g=>g._id===n._id),1),this.$emit("onSelectTodofullLabels",this.selectedTodofullLabels)},getLabelTitle(l){const n=this.todofullLabels.find(g=>g.value==l);return n?n.title:""}}};function Re(l,n,g,_,v,i){const C=p("v-chip"),o=p("v-combobox");return s(),N(o,{"hide-details":"",variant:"outlined",disabled:v.disabled,placeholder:"Selecciona las etiquetas",class:"mt-3","search-input":v.searchLabel,modelValue:v.selectedTodofullLabels,"onUpdate:modelValue":n[1]||(n[1]=e=>v.selectedTodofullLabels=e),"item-value":"_id","item-title":"name","return-object":!1,items:i.filteredTodofullLabels,multiple:"","no-data-text":"No se encontraron etiquetas",outlined:"",density:"compact"},{selection:a(e=>[t(C,{close:"","onClick:close":n[0]||(n[0]=b=>i.removeLabels(v.selectedTodofullLabels,l.item)),color:"primary"},{default:a(()=>[c("strong",null,F(e.item.title),1)]),_:2},1024)]),_:1},8,["disabled","search-input","modelValue","items"])}const Ue=J(Oe,[["render",Re],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/TodofullLabelsSelectorV2.vue"]]),Pe={props:{initialData:{type:Object,default:{}},country:{type:String,default:"Chile"}},data(){return{disabled:!1,negotiationStatuses:[],selectedNegotiationStatuses:[],searchLabel:"",isInidialDataLoading:!1,isInitialDataExecuted:!1}},watch:{selectedNegotiationStatuses:{handler(l,n){this.searchLabel="",this.$emit("onSelectNegotiationStatuses",this.selectedNegotiationStatuses?JSON.parse(JSON.stringify(this.selectedNegotiationStatuses)):null),this.disabled=!0,setTimeout(()=>{this.disabled=!1},0)},deep:!0}},async mounted(){this.initialData&&(this.selectedNegotiationStatuses=this.initialData._id),await this.$store.dispatch("negotiationStatusesModule/list",{sort:"name",order:"asc",country:this.country}),this.negotiationStatuses=this.$store.state.negotiationStatusesModule.negotiationStatuses.map(l=>({value:l._id,title:l.name})),console.log("🚀 Aqui *** -> this.negotiationStatuses",this.negotiationStatuses)},methods:{async removeLabels(l,n){l.splice(l.findIndex(g=>g._id===n._id),1),this.$emit("onSelectNegotiationStatuses",this.selectedNegotiationStatuses)},getLabelTitle(l){const n=this.negotiationStatuses.find(g=>g.value==l);return n?n.title:""}}};function je(l,n,g,_,v,i){const C=p("v-select");return s(),N(C,{"hide-details":"",variant:"outlined",disabled:v.disabled,placeholder:"Selecciona el estado de negociación",class:"mt-3",modelValue:v.selectedNegotiationStatuses,"onUpdate:modelValue":n[0]||(n[0]=o=>v.selectedNegotiationStatuses=o),items:v.negotiationStatuses,"no-data-text":"No se encontraron estados de negociación",outlined:"",clearable:"",density:"compact"},null,8,["disabled","modelValue","items"])}const Be=J(Pe,[["render",je],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/NegotiationStatusesSelector.vue"]]),ie=()=>({name:"",url:"",files:[],fileType:"",country:""}),Ee={class:"file-preview"},ze={class:"uploaded-file"},qe=["href"],Je=["onClick"],He=W({__name:"UploadFiles",props:{files:{type:Array,default:()=>[]},text:{type:String,default:"Arrastra una imagen o archivo aquí"}},emits:["onNewFiles"],setup(l,{emit:n}){const g=l,_=r(!1),v=r(null),i=r(null);r(!1);const C=r(null),o=r([]);te(()=>{g.files&&(o.value=[...g.files])});function e(u){_.value||(_.value=!0),u.preventDefault()}function b(u){u.currentTarget.contains(u.relatedTarget)||(u.preventDefault(),_.value=!1)}function w(u){if(u.stopPropagation(),u.preventDefault(),_.value=!1,u.dataTransfer&&u.dataTransfer.files.length)for(const A of Array.from(u.dataTransfer.files))L(A)}function P(){var u;(u=v.value)==null||u.click()}function I(){if(v.value&&v.value.files){const u=Array.from(v.value.files);for(const A of u)L(A)}}function L(u){C.value=u,o.value.push(u),n("onNewFiles",o.value)}function V(u){o.value.splice(u,1),n("onNewFiles",o.value)}return(u,A)=>{const $=p("v-col"),X=p("v-row"),M=p("v-container");return s(),h("div",null,[t(M,null,{default:a(()=>[t(X,null,{default:a(()=>[o.value.length?(s(),N($,{key:0,cols:"6"},{default:a(()=>[c("div",Ee,[(s(!0),h(z,null,Q(o.value,(H,O)=>(s(),h(z,{key:O},[m(' <img v-if="isImageFile" :src="filePreviewUrl" alt="Uploaded Image" /> '),c("div",ze,[c("a",{class:"uploaded-link",href:i.value,download:""},F(H.name),9,qe),c("button",{class:"clear-uploaded-file mb-1 ml-2",onClick:S=>V(O)}," X ",8,Je)])],64))),128))])]),_:1})):m("v-if",!0),t($,{cols:o.value.length?"6":"12",class:"container-upload",onClick:P},{default:a(()=>[c("div",{onDragover:e,onDragleave:b,onDrop:w,class:"drag-message"},[B(c("span",null,F(l.text),513),[[E,!_.value]]),B(c("span",null,"Suelta los archivos aquí",512),[[E,_.value]])],32),c("input",{type:"file",ref_key:"fileInput",ref:v,onChange:I,multiple:"",style:{display:"none"}},null,544)]),_:1},8,["cols"])]),_:1})]),_:1})])}}});const ue=J(He,[["__scopeId","data-v-0a8adf92"],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/UploadFiles.vue"]]),Ge={class:"recording-container"},Xe={key:4},Ke=W({__name:"AudioRecording",props:{audioObject:{type:Array,default:()=>[{}]}},emits:["onNewAudio"],setup(l,{emit:n}){const g=l,_=60*5,v=r(!1),i=r(!1),C=r(null),o=r(null),e=r([]);r(null);const b=r(0);let w=null;const P=r(0),I=r(0),L=r(0),V=r(null);function u(S){const k=Math.floor(S/60).toString().padStart(2,"0"),R=(S%60).toString().padStart(2,"0");return`${k}:${R}`}async function A(){try{if(I.value=Date.now(),C.value=await navigator.mediaDevices.getUserMedia({audio:!0}),(await navigator.permissions.query({name:"microphone"})).state==="denied"){console.log("Microphone permission was denied"),C.value.getTracks().forEach(k=>k.stop()),v.value=!1,o.value=null;return}v.value=!0,e.value=[],o.value=new MediaRecorder(C.value),o.value.addEventListener("dataavailable",k=>{e.value.push(k.data)}),o.value.addEventListener("stop",async()=>{C.value&&C.value.getTracks().forEach(R=>R.stop());let k=new Blob(e.value,{type:"audio/wav"});k.duration=L.value-I.value,k&&n("onNewAudio",k)}),o.value.start(),w=window.setInterval(()=>{b.value++,P.value=b.value/_*100},1e3)}catch(S){console.error(S),alert("Please grant permission to access the microphone")}}K(b,S=>{P.value=S/60*100});async function $(){L.value=Date.now(),o.value.stop(),v.value=!1,clearInterval(w)}async function X(){L.value=Date.now(),o.value.pause(),i.value=!0,$(),clearInterval(w)}async function M(){C.value&&C.value.getTracks().forEach(S=>S.stop()),o.value&&o.value.stop(),H()}function H(){i.value=!1,v.value=!1,o.value=null,e.value=[],C.value=null,b.value=0,V.value=null,clearInterval(w)}async function O(){if(console.log("REproduciendo: ",e.value.length),V.value){V.value.play();return}if(e.value.length>0){const S=new Blob(e.value,{type:"audio/wav"}),k=URL.createObjectURL(S);new Audio(k).play()}}return te(()=>{if(g.audioObject){const{duration:S,url:k}=g.audioObject;if(!S||!k)return;b.value=Math.floor(S/1e3),V.value=new Audio(k),P.value=b.value/_*100,i.value=!0}}),ke(()=>{clearInterval(w)}),(S,k)=>{const R=p("v-icon"),G=p("v-btn");return s(),h("div",Ge,[m(" Button to start recording "),!v.value&&!i.value?(s(),N(G,{key:0,color:"white",onClick:A,small:""},{default:a(()=>[t(R,null,{default:a(()=>[U("mdi-microphone")]),_:1})]),_:1})):m("v-if",!0),m(" Button to pause recording "),v.value?(s(),N(G,{key:1,color:"white",onClick:X,small:""},{default:a(()=>[t(R,null,{default:a(()=>[U("mdi-pause-circle")]),_:1})]),_:1})):m("v-if",!0),m(" Button to playback the recorded audio "),i.value?(s(),N(G,{key:2,color:"white",onClick:O,small:""},{default:a(()=>[t(R,null,{default:a(()=>[U("mdi-play-circle")]),_:1})]),_:1})):m("v-if",!0),m(" Button to delete the recording "),v.value||i.value?(s(),N(G,{key:3,color:"white",onClick:M,small:""},{default:a(()=>[t(R,null,{default:a(()=>[U("mdi-delete-circle")]),_:1})]),_:1})):m("v-if",!0),m(" Recording timeline "),m(` <div class="timeline-container" v-if="isRecording || isPaused">\r
      <div class="timeline-progress" :style="{ width: progress + '%' }"></div>\r
    </div> `),m(" Display recording time "),v.value||i.value?(s(),h("div",Xe,F(u(b.value)),1)):m("v-if",!0)])}}});const Qe=J(Ke,[["__scopeId","data-v-810f4882"],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/AudioRecording.vue"]]),We=["onClick"],Ye=W({__name:"AudioRecordingMany",props:{audios:{type:Array,default:()=>[{}]}},emits:["onNewAudios"],setup(l,{emit:n}){const _=r(l.audios);function v(){_.value.push({isAudioBlob:!0})}function i(e,b){_.value[b]=e,n("onNewAudios",_.value)}function C(e){_.value.splice(e,1)}function o(e){e.forEach(b=>{_.value.push(b)}),n("onNewAudios",_.value)}return(e,b)=>{const w=p("v-col"),P=p("v-row"),I=p("v-btn");return s(),h("div",null,[(s(!0),h(z,null,Q(_.value,(L,V)=>(s(),h(z,{key:V},[L.duration||L.isAudioBlob?(s(),N(P,{key:0},{default:a(()=>[t(w,{cols:9},{default:a(()=>[t(Qe,{audioObject:L,onOnNewAudio:u=>i(u,V),class:"mb-1"},null,8,["audioObject","onOnNewAudio"])]),_:2},1024),t(w,{cols:3},{default:a(()=>[c("button",{class:"clear-uploaded-file mb-1 ml-2",onClick:u=>C(V)}," X ",8,We)]),_:2},1024)]),_:2},1024)):m("v-if",!0)],64))),128)),t(I,{variant:"text",onClick:v},{default:a(()=>[U(" Nuevo audio ")]),_:1}),t(ue,{text:"Arrastra tus archivos de audio aquí",files:[],onOnNewFiles:o})])}}}),Ze=J(Ye,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/AudioRecordingMany.vue"]]),et={class:"d-flex justify-space-evenly"},tt=["src"],lt=W({__name:"CountrySelector",emits:["onSelectedCountry"],setup(l,{emit:n}){const g=r([{value:"Peru",icon:$e},{value:"Chile",icon:De},{value:"Colombia",icon:Ie},{value:"España",icon:Me}]),_=r("Chile");function v(i){if(_.value===i.value)return _.value=null;_.value=i.value}return K(_,()=>{n("onSelectedCountry",_.value)},{immediate:!0}),(i,C)=>{const o=p("v-tooltip"),e=p("v-btn");return s(),h("div",et,[(s(!0),h(z,null,Q(g.value,(b,w)=>(s(),N(e,{small:"",icon:"",color:"white",onClick:P=>v(b),class:Te({selected:_.value===b.value}),key:w},{default:a(()=>[c("img",{style:{width:"25px"},src:b.icon},null,8,tt),t(o,{activator:"parent",anchor:"bottom"},{default:a(()=>[U(F(b.value),1)]),_:2},1024)]),_:2},1032,["onClick","class"]))),128))])}}}),at=J(lt,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/CountrySelector.vue"]]),Y=l=>(Ne("data-v-4abf8848"),l=l(),Ve(),l),ot={class:"card box-margin"},st={class:"card-body"},nt={class:"dataTables_info",id:"datatable-buttons_info",role:"status","aria-live":"polite"},it={class:"basic-table-area"},ut=Y(()=>c("th",{class:"text-left"},"Fecha de creación",-1)),rt={key:0,class:"text-left"},dt=Y(()=>c("th",{class:"text-left"},"Nombre",-1)),ct={key:1,class:"text-left"},vt={key:2,class:"text-left"},ft=Y(()=>c("th",{class:"text-left"},null,-1)),mt={key:0},_t=["href"],pt={key:1},ht=["src"],gt={key:0,class:"audio-duration"},yt={key:1},bt={key:2},wt={class:"row my-3"},Ct={class:"col-sm-12 col-md-5"},St={class:"dataTables_info",id:"datatable-buttons_info",role:"status","aria-live":"polite"},kt={class:"col-sm-12 col-md-7"},Tt={class:"headline"},Ft=Y(()=>c("p",{class:"body-1 font-weight-bold"},"Nombre",-1)),Lt={key:0},At={key:1},xt=Y(()=>c("div",{class:"flex-grow-1"},null,-1)),Nt=W({__name:"CloudStorageLinksView",props:{showFromChat:{type:Boolean,default:!1},country:{type:String,default:""},type:{type:String,default:""}},emits:["onSendCatalog"],setup(l,{emit:n}){const g=l,_=se("$deepCopy"),v=se("$swal"),i=Fe(),C=Le();Ae();const o=r([]),e=r(ie()),b=r(ie());r({});const w=r(1);r(0);const P=r(["name"]),I=r(""),L=r(!1),V=r(null),u=r(-1),A=r("Chile");r([{text:"Agregado",align:"left",sortable:!1,value:"createdAt"},{text:"Nombre",align:"left",sortable:!1,value:"name"},{text:"Acciones",value:"action",sortable:!1}]);const $=r(!1),X=ee(()=>u.value===-1?H.value?"Cargar Catálogo":"Cargar audio":H.value?"Editar Catálogo":"Editar audio");K(I,()=>{clearTimeout(V.value),V.value=setTimeout(()=>{w.value=1,O(w.value)},600)}),K(w,()=>{O(w.value)}),K(C,()=>{O()});const M=ee(()=>g.type?g.type:C.name==="CloudStorageLinks"?"files":"audios"),H=ee(()=>M.value==="files");te(()=>{O()});async function O(f=1){let d={page:w.value||f,fields:P.value.join(","),sort:"createdAt",order:"desc",limit:10,type:M.value};A.value&&(d.country=A.value),I.value&&(d.filter=I.value),g.showFromChat&&(d.isActive=!0),await Promise.all([i.dispatch("cloudStorageLinksModule/list",d)]),o.value=_(i.state.cloudStorageLinksModule.cloudStorageLinks)}async function S(){if(L.value=!0,u.value>-1){e.value.country=A.value;let f=o.value[u.value]._id;try{e.value.preFiles&&(e.value.files=await Promise.all(e.value.preFiles.map(async d=>d.url?d.url:await ne(d,d.duration?"audio":"file"))),e.value.files=e.value.files.map((d,T)=>({url:d,name:e.value.preFiles[T].name,type:e.value.preFiles[T].type,size:e.value.preFiles[T].size,duration:e.value.preFiles[T].duration}))),await i.dispatch("cloudStorageLinksModule/update",{id:f,data:{type:M.value,...e.value}}),Object.assign(o.value[u.value],e.value),Z()}finally{L.value=!1}}else try{e.value.preFiles&&(e.value.files=await Promise.all(e.value.preFiles.map(async d=>await ne(d,d.duration?"audio":"file"))),e.value.files=e.value.files.map((d,T)=>({url:d,name:e.value.preFiles[T].name,type:e.value.preFiles[T].type,size:e.value.preFiles[T].size,duration:e.value.preFiles[T].duration}))),e.value.country=A.value;let f=await i.dispatch("cloudStorageLinksModule/create",{type:M.value,...e.value});o.value.push(f),Z(),O()}finally{L.value=!1}}function k(f){u.value=o.value.indexOf(f),e.value=Object.assign({},f),$.value=!0}async function R(f){const d=o.value.indexOf(f);let T=o.value[d]._id;(await v({text:"¿Realmente deseas eliminar este registro?",icon:"error",showCancelButton:!0,cancelButtonText:"Cancelar"})).isConfirmed&&(await i.dispatch("cloudStorageLinksModule/delete",T),o.value.splice(d,1))}function G(f){console.log("🚀 Aqui *** -> negotiationStatus:",f),e.value.negotiationStatusId=f}function re(f){console.log("🚀 Aqui *** -> selectedLabels:",f),f.length>0&&(e.value.todofullLabels=f)}function de(f){A.value=f,g.country&&(A.value=g.country),e.value.country=f,O()}async function Z(){$.value=!1,setTimeout(()=>{e.value=Object.assign({},b.value),u.value=-1},300)}async function ce(f){e.value.preFiles=f}function ve(f){console.log("🐞 LOG HERE audios:",f),e.value.preFiles=f}function fe(f){n("onSendCatalog",f)}async function me(f){await i.dispatch("cloudStorageLinksModule/update",{id:f._id,data:f})}return(f,d)=>{const T=p("v-row"),q=p("v-btn"),le=p("v-pagination"),j=p("v-col"),ae=p("v-text-field"),_e=p("v-checkbox"),pe=p("v-table"),he=p("v-icon"),ge=p("v-card-title"),ye=p("v-divider"),oe=p("v-container"),be=p("v-card-actions"),we=p("v-card"),Ce=p("v-dialog");return s(),N(oe,{fluid:""},{default:a(()=>[B(t(T,{class:"mb-3"},{default:a(()=>[t(at,{onOnSelectedCountry:de})]),_:1},512),[[E,!l.showFromChat]]),t(T,null,{default:a(()=>[t(j,{cols:"12"},{default:a(()=>[c("div",ot,[c("div",st,[B(t(q,{onClick:d[0]||(d[0]=y=>{Z(),$.value=!0})},{default:a(()=>[U(F(x(M)==="files"?"Agregar Catálogo":"Agregar Audio"),1)]),_:1},512),[[E,!l.showFromChat]]),t(T,{class:"my-3"},{default:a(()=>[t(j,{cols:"12"},{default:a(()=>[B(t(le,{modelValue:w.value,"onUpdate:modelValue":d[1]||(d[1]=y=>w.value=y),length:x(i).state.cloudStorageLinksModule.totalPages},null,8,["modelValue","length"]),[[E,!l.showFromChat]])]),_:1}),B(t(j,{cols:"12"},{default:a(()=>[c("div",nt," Mostrando "+F(x(i).state.itemsPerPage>o.value.length?o.value.length:x(i).state.itemsPerPage)+" de "+F(x(i).state.cloudStorageLinksModule.total)+" registros ",1)]),_:1},512),[[E,!l.showFromChat]])]),_:1}),t(j,{cols:"12",sm:"12"},{default:a(()=>[t(ae,{style:{"background-color":"#fff"},dense:"","hide-details":"",modelValue:I.value,"onUpdate:modelValue":d[2]||(d[2]=y=>I.value=y),placeholder:x(M)==="files"?"Buscar catálogo":"Buscar audio",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","placeholder"])]),_:1}),c("div",it,[m("Basic Table"),t(pe,null,{default:a(()=>[c("thead",null,[c("tr",null,[ut,l.showFromChat?m("v-if",!0):(s(),h("th",rt,"URL")),dt,l.showFromChat?m("v-if",!0):(s(),h("th",ct,"Veces usado")),l.showFromChat?m("v-if",!0):(s(),h("th",vt,"Activo?")),ft])]),c("tbody",null,[(s(!0),h(z,null,Q(o.value,y=>(s(),h("tr",{key:y._id},[c("td",null,F(x(xe)(y.createdAt,"dd/MM/yyyy HH:mm")),1),!l.showFromChat||x(M)==="audios"?(s(),h("td",mt,[(s(!0),h(z,null,Q(y.files,(D,Se)=>(s(),h("div",{key:Se},[D.url&&D.type!=="audio/wav"?(s(),h("a",{key:0,href:D.url,target:"_blank",rel:"noopener noreferrer"},F(D.url),9,_t)):(s(),h("div",pt,[t(T,null,{default:a(()=>[t(j,{sm:"8"},{default:a(()=>[c("audio",{style:{"max-width":"90%"},controls:"",src:D.url},null,8,ht)]),_:2},1024),t(j,{sm:"4"},{default:a(()=>[D.duration?(s(),h("div",gt,F(Math.floor(D.duration/1e3))+" segs ",1)):m("v-if",!0)]),_:2},1024)]),_:2},1024)]))]))),128))])):m("v-if",!0),c("td",null,F(y.name),1),l.showFromChat?m("v-if",!0):(s(),h("td",yt,F(y.timesUsed),1)),l.showFromChat?m("v-if",!0):(s(),h("td",bt,[t(_e,{onChange:D=>me(y),modelValue:y.isActive,"onUpdate:modelValue":D=>y.isActive=D},null,8,["onChange","modelValue","onUpdate:modelValue"])])),c("td",null,[m(` <PDFViewer\r
                      :pdfUrl="'https://databot-files.s3.amazonaws.com/Generar+Admin+Token+para+uso+API+Shopify.pdf'"\r
                    ></PDFViewer> `),l.showFromChat?(s(),N(q,{key:1,color:"primary",size:"small",class:"mr-2",onClick:D=>fe(y)},{default:a(()=>[U("Enviar")]),_:2},1032,["onClick"])):(s(),h(z,{key:0},[B(t(q,{color:"primary",icon:"mdi mdi-eye",size:"x-small",class:"mr-2"},null,512),[[E,y.type!=="audios"]]),t(q,{onClick:D=>k(y),color:"success",icon:"mdi mdi-pencil",size:"x-small",class:"mr-2"},null,8,["onClick"]),t(q,{onClick:D=>R(y),color:"error",icon:"mdi mdi-delete",size:"x-small"},null,8,["onClick"])],64))])]))),128))])]),_:1}),m("End Basic Table")]),c("div",wt,[B(c("div",Ct,[c("div",St," Mostrando "+F(x(i).state.itemsPerPage>o.value.length?o.value.length:x(i).state.itemsPerPage)+" de "+F(x(i).state.cloudStorageLinksModule.total)+" registros ",1)],512),[[E,!l.showFromChat]]),c("div",kt,[t(le,{modelValue:w.value,"onUpdate:modelValue":d[3]||(d[3]=y=>w.value=y),length:x(i).state.cloudStorageLinksModule.totalPages},null,8,["modelValue","length"])])])])])]),_:1}),t(Ce,{modelValue:$.value,"onUpdate:modelValue":d[5]||(d[5]=y=>$.value=y),width:"700px"},{default:a(()=>[t(we,null,{default:a(()=>[t(ge,null,{default:a(()=>[t(he,{color:"primary",class:"mr-1"},{default:a(()=>[U("mdi-cloud-upload")]),_:1}),c("span",Tt,F(x(X)),1)]),_:1}),t(ye),t(oe,{class:"pa-5"},{default:a(()=>[t(T,{dense:""},{default:a(()=>[t(j,{cols:"12",sm:"12",md:"12"},{default:a(()=>[Ft,t(ae,{modelValue:e.value.name,"onUpdate:modelValue":d[4]||(d[4]=y=>e.value.name=y),"hide-details":"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),t(j,{cols:"12",sm:"12"},{default:a(()=>[t(Ue,{initialData:e.value.todofullLabels,class:"my-3",onOnSelectTodofullLabels:re},null,8,["initialData"])]),_:1}),t(j,{cols:"12",sm:"12"},{default:a(()=>[$.value?(s(),N(Be,{key:0,initialData:e.value.negotiationStatusId,country:A.value,class:"my-3",onOnSelectNegotiationStatuses:G},null,8,["initialData","country"])):m("v-if",!0)]),_:1}),m(` <v-col cols="12" sm="12" md="12">\r
                <p class="body-1 font-weight-bold">URL (Opcional)</p>\r
                <v-text-field\r
                  v-model="editedItem.url"\r
                  required\r
                  hide-details\r
                  variant="underlined"\r
                ></v-text-field>\r
              </v-col> `),t(j,{cols:"12",sm:"12"},{default:a(()=>[x(M)==="files"?(s(),h("div",Lt,[$.value?(s(),N(ue,{key:0,files:e.value.files,onOnNewFiles:ce},null,8,["files"])):m("v-if",!0)])):(s(),h("div",At,[$.value?(s(),N(Ze,{key:0,onOnNewAudios:ve,audios:e.value.files},null,8,["audios"])):m("v-if",!0)]))]),_:1})]),_:1})]),_:1}),t(be,{"rd-actions":""},{default:a(()=>[xt,t(q,{outlined:"",color:"error",text:"",onClick:Z},{default:a(()=>[U("Cancelar")]),_:1}),t(q,{loading:L.value,color:"success",onClick:S},{default:a(()=>[U("Guardar")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});const Vt=J(Nt,[["__scopeId","data-v-4abf8848"],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/CloudStorageLinksView.vue"]]),It=Object.freeze(Object.defineProperty({__proto__:null,default:Vt},Symbol.toStringTag,{value:"Module"}));export{Vt as C,Be as N,Ue as T,It as a};
