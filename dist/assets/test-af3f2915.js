import{e as g,g as r,o as _,f as m,b as l,J as s,K as i}from"./index-3b991a8b.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const D=g({__name:"test",emits:["onNewFile"],setup(F,{emit:c}){const a=r(!1),n=r(null);function u(e){console.log("dentro"),a.value||(console.log("dragging"),a.value=!0),e.preventDefault()}function f(e){e.currentTarget.contains(e.relatedTarget)||(console.log("fuera xd"),e.preventDefault(),a.value=!1)}function p(e){if(e.stopPropagation(),e.preventDefault(),console.log("dropped"),a.value=!1,e.dataTransfer&&e.dataTransfer.files.length){const t=e.dataTransfer.files[0];o(t)}}function d(){var e;(e=n.value)==null||e.click()}function v(){if(n.value&&n.value.files){const e=n.value.files[0];o(e)}}function o(e){c("onNewFile",e)}return(e,t)=>(_(),m("div",{class:"container-upload",onClick:d},[l("div",{onDragover:u,onDragleave:f,onDrop:p,class:"drag-message"},[s(l("span",null,"Arrastra una imagen o archivo aquí",512),[[i,!a.value]]),s(l("span",null,"Suelta el archivo aquí",512),[[i,a.value]])],32),l("input",{type:"file",ref_key:"fileInput",ref:n,onChange:v,style:{display:"none"}},null,544)]))}});const x=h(D,[["__scopeId","data-v-6b45e4c8"]]);export{x as default};
