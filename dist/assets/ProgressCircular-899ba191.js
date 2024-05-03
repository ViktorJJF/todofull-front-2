import{_ as a,r as s,o as c,f as i,j as o,b as l,a as e,F as d,e as g,g as m,w as t}from"./index-2490a766.js";import{B as v}from"./BaseBreadcrumb-4d348f40.js";import{B as p}from"./BaseCard-6ce28e8f.js";const C={},b=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," Alternate colors can be applied to v-progress-circular using the color prop. ",-1),x={class:"d-flex flex-wrap gap-2 mt-6"};function h(u,n){const r=s("v-progress-circular");return c(),i(d,null,[o(" ----------------------------------------------------------------------------- "),o(" Color "),o(" ----------------------------------------------------------------------------- "),b,l("div",x,[e(r,{"model-value":"100",color:"blue-grey"}),e(r,{"model-value":"80",color:"deep-orange lighten-2"}),e(r,{"model-value":"60",color:"brown"}),e(r,{"model-value":"40",color:"lime"}),e(r,{"model-value":"20",color:"indigo darken-2"})])],64)}const P=a(C,[["render",h],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/progress-circular/PCColor.vue"]]),w={},B=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the indeterminate prop, a v-progress-circular continues to animate indefinitely. ",-1),y={class:"d-flex flex-wrap gap-2 mt-6"};function k(u,n){const r=s("v-progress-circular");return c(),i(d,null,[o(" ----------------------------------------------------------------------------- "),o(" Indeterminate "),o(" ----------------------------------------------------------------------------- "),B,l("div",y,[e(r,{indeterminate:"",color:"primary"}),e(r,{indeterminate:"",color:"red"}),e(r,{indeterminate:"",color:"purple"}),e(r,{indeterminate:"",color:"green"}),e(r,{indeterminate:"",color:"amber"})])],64)}const $=a(w,[["render",k],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/progress-circular/PCIndeterminate.vue"]]),j=g({__name:"ProgressCircular",setup(u){const n=m({title:"Progress Circular"}),r=m([{text:"Ui Components",disabled:!1,to:"#"},{text:"Progress Circular",disabled:!0}]);return(I,D)=>{const _=s("v-col"),f=s("v-row");return c(),i(d,null,[e(v,{title:n.value.title,breadcrumbs:r.value},null,8,["title","breadcrumbs"]),e(f,null,{default:t(()=>[e(_,{cols:"12",sm:"12",class:"d-flex align-items-stretch"},{default:t(()=>[e(p,{heading:"Color"},{default:t(()=>[e(P)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12",class:"d-flex align-items-stretch"},{default:t(()=>[e(p,{heading:"Indeterminate"},{default:t(()=>[e($)]),_:1})]),_:1})]),_:1})],64)}}}),F=a(j,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/ProgressCircular.vue"]]);export{F as default};
