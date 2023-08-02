import{_ as a,r as n,o as c,f as i,j as t,b as o,a as e,F as d,e as h,ar as b,u as x,g as m,w as s}from"./index-7cedc233.js";import{B as $}from"./BaseBreadcrumb-dcb397dc.js";import{B as p}from"./BaseCard-acda8ab2.js";const y={},k=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can set the colors of the progresss bar using the props color and background-color. ",-1),L={class:"d-flex flex-wrap gap-2 mt-6"},w=o("br",null,null,-1),P=o("br",null,null,-1);function C(u,l){const r=n("v-progress-linear");return c(),i(d,null,[t(" ----------------------------------------------------------------------------- "),t(" Color "),t(" ----------------------------------------------------------------------------- "),k,o("div",L,[e(r,{"model-value":"15","background-color":"pink lighten-3",color:"pink lighten-1"}),w,e(r,{"model-value":"30","background-color":"blue-grey",color:"lime"}),P,e(r,{"model-value":"45","background-color":"success",color:"error"})])],64)}const T=a(y,[["render",C],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/progress-linear/PLColor.vue"]]),R={},B=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the indeterminate prop, v-progress-linear continuously animates. ",-1),j={class:"d-flex flex-wrap gap-2 mt-6"},D=o("br",null,null,-1),S=o("br",null,null,-1),I=o("br",null,null,-1);function N(u,l){const r=n("v-progress-linear");return c(),i(d,null,[t(" ----------------------------------------------------------------------------- "),t(" Buffer "),t(" ----------------------------------------------------------------------------- "),B,o("div",j,[e(r,{indeterminate:"",color:"yellow darken-2"}),D,e(r,{indeterminate:"",color:"green"}),S,e(r,{indeterminate:"",color:"teal"}),I,e(r,{indeterminate:"",color:"cyan"})])],64)}const V=a(R,[["render",N],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/progress-linear/PLIndeterminate.vue"]]),F=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with reverse prop enabled will display left-to-right. ",-1),U={class:"d-flex flex-wrap gap-2 mt-6"},E=o("br",null,null,-1),Y=o("br",null,null,-1),q=o("br",null,null,-1),z=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," In specific cases you may want progress to display in left-to-right mode regardless of the application direction (LTR or RTL): ",-1),A=h({__name:"PLReversed",setup(u){const{isRtl:l}=b();return(r,g)=>{const f=n("v-progress-linear");return c(),i(d,null,[t(" ----------------------------------------------------------------------------- "),t(" Reversed "),t(" ----------------------------------------------------------------------------- "),F,o("div",U,[e(f,{"model-value":"15",color:"pink",reverse:""}),E,e(f,{color:"lime",indeterminate:"",reverse:""}),Y,e(f,{"model-value":"30","buffer-value":"55",color:"success",reverse:"",streams:""}),q,z,e(f,{"model-value":"15",reverse:x(l)},null,8,["reverse"])])],64)}}}),G=a(A,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/progress-linear/PLReversed.vue"]]),H={},J=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop is used to apply a border radius to the v-progress-linear component. ",-1),K={class:"d-flex flex-wrap gap-2 mt-6"},M=o("br",null,null,-1),O=o("br",null,null,-1),Q=o("br",null,null,-1);function W(u,l){const r=n("v-progress-linear");return c(),i(d,null,[t(" ----------------------------------------------------------------------------- "),t(" Buffer "),t(" ----------------------------------------------------------------------------- "),J,o("div",K,[e(r,{"model-value":"100",color:"red darken-2",rounded:""}),M,e(r,{"model-value":"100",color:"indigo",rounded:""}),O,e(r,{"model-value":"100",color:"teal",rounded:""}),Q,e(r,{"model-value":"100",color:"cyan darken-2",rounded:""})])],64)}const X=a(H,[["render",W],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/progress-linear/PLRounded.vue"]]),Z={},ee=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," The stream property works with buffer-value to convey to the user that there is some action taking place. ",-1),oe={class:"d-flex flex-wrap gap-2 mt-6"},re=o("br",null,null,-1),te=o("br",null,null,-1),se=o("br",null,null,-1);function le(u,l){const r=n("v-progress-linear");return c(),i(d,null,[t(" ----------------------------------------------------------------------------- "),t(" Stream "),t(" ----------------------------------------------------------------------------- "),ee,o("div",oe,[e(r,{color:"red lighten-2","buffer-value":"0",stream:""}),re,e(r,{"model-value":"20",color:"teal","buffer-value":"0",stream:""}),te,e(r,{"buffer-value":"50",stream:"",color:"cyan"}),se,e(r,{"model-value":"40","buffer-value":"60",stream:"",color:"orange"})])],64)}const ne=a(Z,[["render",le],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/progress-linear/PLStream.vue"]]),ae={},ce=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," This applies a striped background over the value portion of the v-progress-linear. This prop has no effect when using inderminate. ",-1),ie={class:"d-flex flex-wrap gap-2 mt-6"},de=o("br",null,null,-1),ue=o("br",null,null,-1),_e=o("br",null,null,-1);function pe(u,l){const r=n("v-progress-linear");return c(),i(d,null,[t(" ----------------------------------------------------------------------------- "),t(" Striped "),t(" ----------------------------------------------------------------------------- "),ce,o("div",ie,[e(r,{"model-value":"10",color:"light-blue",height:"10",striped:""}),de,e(r,{"model-value":"20",color:"light-green darken-4",height:"10",striped:""}),ue,e(r,{"model-value":"45",height:"10",striped:"",color:"lime"}),_e,e(r,{"model-value":"60",height:"10",striped:"",color:"deep-orange"})])],64)}const fe=a(ae,[["render",pe],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/progress-linear/PLStriped.vue"]]),me=h({__name:"ProgressLinear",setup(u){const l=m({title:"Progress Linear"}),r=m([{text:"Ui Components",disabled:!1,to:"#"},{text:"Progress Linear",disabled:!0}]);return(g,f)=>{const _=n("v-col"),v=n("v-row");return c(),i(d,null,[e($,{title:l.value.title,breadcrumbs:r.value},null,8,["title","breadcrumbs"]),e(v,null,{default:s(()=>[e(_,{cols:"12",sm:"12"},{default:s(()=>[e(p,{heading:"Color"},{default:s(()=>[e(T)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:s(()=>[e(p,{heading:"Indeterminate"},{default:s(()=>[e(V)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:s(()=>[e(p,{heading:"Reversed"},{default:s(()=>[e(G)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:s(()=>[e(p,{heading:"Rounded"},{default:s(()=>[e(X)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:s(()=>[e(p,{heading:"Stream"},{default:s(()=>[e(ne)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:s(()=>[e(p,{heading:"Striped"},{default:s(()=>[e(fe)]),_:1})]),_:1})]),_:1})],64)}}}),be=a(me,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/ProgressLinear.vue"]]);export{be as default};
