import{e as g,g as s,o as _,f as D,b as l,J as r,K as i,_ as h}from"./index-a97f079d.js";const m=g({__name:"test",emits:["onNewFile"],setup(F,{emit:u}){const a=s(!1),n=s(null);function c(e){console.log("dentro"),a.value||(console.log("dragging"),a.value=!0),e.preventDefault()}function f(e){e.currentTarget.contains(e.relatedTarget)||(console.log("fuera xd"),e.preventDefault(),a.value=!1)}function d(e){if(e.stopPropagation(),e.preventDefault(),console.log("dropped"),a.value=!1,e.dataTransfer&&e.dataTransfer.files.length){const t=e.dataTransfer.files[0];o(t)}}function p(){var e;(e=n.value)==null||e.click()}function v(){if(n.value&&n.value.files){const e=n.value.files[0];o(e)}}function o(e){u("onNewFile",e)}return(e,t)=>(_(),D("div",{class:"container-upload",onClick:p},[l("div",{onDragover:c,onDragleave:f,onDrop:d,class:"drag-message"},[r(l("span",null,"Arrastra una imagen o archivo aquí",512),[[i,!a.value]]),r(l("span",null,"Suelta el archivo aquí",512),[[i,a.value]])],32),l("input",{type:"file",ref_key:"fileInput",ref:n,onChange:v,style:{display:"none"}},null,544)]))}});const T=h(m,[["__scopeId","data-v-8ab9196d"],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/test.vue"]]);export{T as default};
