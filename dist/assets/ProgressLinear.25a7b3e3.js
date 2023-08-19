import{_ as v}from"./BaseBreadcrumb.38f577c1.js";import{_}from"./BaseCard.b3027353.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as n,f as a,b as r,a as e,F as c,e as h,ar as b,u as x,g as m,w as t}from"./index.eab449d7.js";const $={},k=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can set the colors of the progresss bar using the props color and background-color. ",-1),y={class:"d-flex flex-wrap gap-2 mt-6"},w=r("br",null,null,-1),L=r("br",null,null,-1);function P(i,l){const o=s("v-progress-linear");return n(),a(c,null,[k,r("div",y,[e(o,{"model-value":"15","background-color":"pink lighten-3",color:"pink lighten-1"}),w,e(o,{"model-value":"30","background-color":"blue-grey",color:"lime"}),L,e(o,{"model-value":"45","background-color":"success",color:"error"})])],64)}var R=p($,[["render",P]]);const T={},C=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the indeterminate prop, v-progress-linear continuously animates. ",-1),S={class:"d-flex flex-wrap gap-2 mt-6"},B=r("br",null,null,-1),I=r("br",null,null,-1),F=r("br",null,null,-1);function N(i,l){const o=s("v-progress-linear");return n(),a(c,null,[C,r("div",S,[e(o,{indeterminate:"",color:"yellow darken-2"}),B,e(o,{indeterminate:"",color:"green"}),I,e(o,{indeterminate:"",color:"teal"}),F,e(o,{indeterminate:"",color:"cyan"})])],64)}var U=p(T,[["render",N]]);const V=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with reverse prop enabled will display left-to-right. ",-1),D={class:"d-flex flex-wrap gap-2 mt-6"},E=r("br",null,null,-1),Y=r("br",null,null,-1),j=r("br",null,null,-1),q=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," In specific cases you may want progress to display in left-to-right mode regardless of the application direction (LTR or RTL): ",-1),z=h({__name:"PLReversed",setup(i){const{isRtl:l}=b();return(o,f)=>{const u=s("v-progress-linear");return n(),a(c,null,[V,r("div",D,[e(u,{"model-value":"15",color:"pink",reverse:""}),E,e(u,{color:"lime",indeterminate:"",reverse:""}),Y,e(u,{"model-value":"30","buffer-value":"55",color:"success",reverse:"",streams:""}),j,q,e(u,{"model-value":"15",reverse:x(l)},null,8,["reverse"])])],64)}}}),A={},G=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop is used to apply a border radius to the v-progress-linear component. ",-1),H={class:"d-flex flex-wrap gap-2 mt-6"},J=r("br",null,null,-1),K=r("br",null,null,-1),M=r("br",null,null,-1);function O(i,l){const o=s("v-progress-linear");return n(),a(c,null,[G,r("div",H,[e(o,{"model-value":"100",color:"red darken-2",rounded:""}),J,e(o,{"model-value":"100",color:"indigo",rounded:""}),K,e(o,{"model-value":"100",color:"teal",rounded:""}),M,e(o,{"model-value":"100",color:"cyan darken-2",rounded:""})])],64)}var Q=p(A,[["render",O]]);const W={},X=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," The stream property works with buffer-value to convey to the user that there is some action taking place. ",-1),Z={class:"d-flex flex-wrap gap-2 mt-6"},ee=r("br",null,null,-1),re=r("br",null,null,-1),oe=r("br",null,null,-1);function te(i,l){const o=s("v-progress-linear");return n(),a(c,null,[X,r("div",Z,[e(o,{color:"red lighten-2","buffer-value":"0",stream:""}),ee,e(o,{"model-value":"20",color:"teal","buffer-value":"0",stream:""}),re,e(o,{"buffer-value":"50",stream:"",color:"cyan"}),oe,e(o,{"model-value":"40","buffer-value":"60",stream:"",color:"orange"})])],64)}var le=p(W,[["render",te]]);const se={},ne=r("p",{class:"text-subtitle-1 text-grey-darken-1"}," This applies a striped background over the value portion of the v-progress-linear. This prop has no effect when using inderminate. ",-1),ae={class:"d-flex flex-wrap gap-2 mt-6"},ce=r("br",null,null,-1),ie=r("br",null,null,-1),de=r("br",null,null,-1);function _e(i,l){const o=s("v-progress-linear");return n(),a(c,null,[ne,r("div",ae,[e(o,{"model-value":"10",color:"light-blue",height:"10",striped:""}),ce,e(o,{"model-value":"20",color:"light-green darken-4",height:"10",striped:""}),ie,e(o,{"model-value":"45",height:"10",striped:"",color:"lime"}),de,e(o,{"model-value":"60",height:"10",striped:"",color:"deep-orange"})])],64)}var ue=p(se,[["render",_e]]);const ge=h({__name:"ProgressLinear",setup(i){const l=m({title:"Progress Linear"}),o=m([{text:"Ui Components",disabled:!1,to:"#"},{text:"Progress Linear",disabled:!0}]);return(f,u)=>{const d=s("v-col"),g=s("v-row");return n(),a(c,null,[e(v,{title:l.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),e(g,null,{default:t(()=>[e(d,{cols:"12",sm:"12"},{default:t(()=>[e(_,{heading:"Color"},{default:t(()=>[e(R)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(_,{heading:"Indeterminate"},{default:t(()=>[e(U)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(_,{heading:"Reversed"},{default:t(()=>[e(z)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(_,{heading:"Rounded"},{default:t(()=>[e(Q)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(_,{heading:"Stream"},{default:t(()=>[e(le)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(_,{heading:"Striped"},{default:t(()=>[e(ue)]),_:1})]),_:1})]),_:1})],64)}}});export{ge as default};
