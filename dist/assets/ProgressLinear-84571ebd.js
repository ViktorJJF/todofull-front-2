import{_ as v}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-cbe058b9.js";import{_}from"./BaseCard.vue_vue_type_script_setup_true_lang-08e0cb31.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{r as l,o as n,f as a,b as t,a as e,F as c,e as h,at as b,u as x,g as m,w as r}from"./index-3fba6ee6.js";const $={},k=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can set the colors of the progresss bar using the props color and background-color. ",-1),y={class:"d-flex flex-wrap gap-2 mt-6"},w=t("br",null,null,-1),L=t("br",null,null,-1);function P(i,s){const o=l("v-progress-linear");return n(),a(c,null,[k,t("div",y,[e(o,{"model-value":"15","background-color":"pink lighten-3",color:"pink lighten-1"}),w,e(o,{"model-value":"30","background-color":"blue-grey",color:"lime"}),L,e(o,{"model-value":"45","background-color":"success",color:"error"})])],64)}const R=p($,[["render",P]]),T={},C=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the indeterminate prop, v-progress-linear continuously animates. ",-1),S={class:"d-flex flex-wrap gap-2 mt-6"},B=t("br",null,null,-1),I=t("br",null,null,-1),F=t("br",null,null,-1);function N(i,s){const o=l("v-progress-linear");return n(),a(c,null,[C,t("div",S,[e(o,{indeterminate:"",color:"yellow darken-2"}),B,e(o,{indeterminate:"",color:"green"}),I,e(o,{indeterminate:"",color:"teal"}),F,e(o,{indeterminate:"",color:"cyan"})])],64)}const U=p(T,[["render",N]]),V=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with reverse prop enabled will display left-to-right. ",-1),D={class:"d-flex flex-wrap gap-2 mt-6"},E=t("br",null,null,-1),Y=t("br",null,null,-1),j=t("br",null,null,-1),q=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," In specific cases you may want progress to display in left-to-right mode regardless of the application direction (LTR or RTL): ",-1),z=h({__name:"PLReversed",setup(i){const{isRtl:s}=b();return(o,f)=>{const u=l("v-progress-linear");return n(),a(c,null,[V,t("div",D,[e(u,{"model-value":"15",color:"pink",reverse:""}),E,e(u,{color:"lime",indeterminate:"",reverse:""}),Y,e(u,{"model-value":"30","buffer-value":"55",color:"success",reverse:"",streams:""}),j,q,e(u,{"model-value":"15",reverse:x(s)},null,8,["reverse"])])],64)}}}),A={},G=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop is used to apply a border radius to the v-progress-linear component. ",-1),H={class:"d-flex flex-wrap gap-2 mt-6"},J=t("br",null,null,-1),K=t("br",null,null,-1),M=t("br",null,null,-1);function O(i,s){const o=l("v-progress-linear");return n(),a(c,null,[G,t("div",H,[e(o,{"model-value":"100",color:"red darken-2",rounded:""}),J,e(o,{"model-value":"100",color:"indigo",rounded:""}),K,e(o,{"model-value":"100",color:"teal",rounded:""}),M,e(o,{"model-value":"100",color:"cyan darken-2",rounded:""})])],64)}const Q=p(A,[["render",O]]),W={},X=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," The stream property works with buffer-value to convey to the user that there is some action taking place. ",-1),Z={class:"d-flex flex-wrap gap-2 mt-6"},ee=t("br",null,null,-1),te=t("br",null,null,-1),oe=t("br",null,null,-1);function re(i,s){const o=l("v-progress-linear");return n(),a(c,null,[X,t("div",Z,[e(o,{color:"red lighten-2","buffer-value":"0",stream:""}),ee,e(o,{"model-value":"20",color:"teal","buffer-value":"0",stream:""}),te,e(o,{"buffer-value":"50",stream:"",color:"cyan"}),oe,e(o,{"model-value":"40","buffer-value":"60",stream:"",color:"orange"})])],64)}const se=p(W,[["render",re]]),le={},ne=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," This applies a striped background over the value portion of the v-progress-linear. This prop has no effect when using inderminate. ",-1),ae={class:"d-flex flex-wrap gap-2 mt-6"},ce=t("br",null,null,-1),ie=t("br",null,null,-1),de=t("br",null,null,-1);function _e(i,s){const o=l("v-progress-linear");return n(),a(c,null,[ne,t("div",ae,[e(o,{"model-value":"10",color:"light-blue",height:"10",striped:""}),ce,e(o,{"model-value":"20",color:"light-green darken-4",height:"10",striped:""}),ie,e(o,{"model-value":"45",height:"10",striped:"",color:"lime"}),de,e(o,{"model-value":"60",height:"10",striped:"",color:"deep-orange"})])],64)}const ue=p(le,[["render",_e]]),ge=h({__name:"ProgressLinear",setup(i){const s=m({title:"Progress Linear"}),o=m([{text:"Ui Components",disabled:!1,to:"#"},{text:"Progress Linear",disabled:!0}]);return(f,u)=>{const d=l("v-col"),g=l("v-row");return n(),a(c,null,[e(v,{title:s.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),e(g,null,{default:r(()=>[e(d,{cols:"12",sm:"12"},{default:r(()=>[e(_,{heading:"Color"},{default:r(()=>[e(R)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:r(()=>[e(_,{heading:"Indeterminate"},{default:r(()=>[e(U)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:r(()=>[e(_,{heading:"Reversed"},{default:r(()=>[e(z)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:r(()=>[e(_,{heading:"Rounded"},{default:r(()=>[e(Q)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:r(()=>[e(_,{heading:"Stream"},{default:r(()=>[e(se)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:r(()=>[e(_,{heading:"Striped"},{default:r(()=>[e(ue)]),_:1})]),_:1})]),_:1})],64)}}});export{ge as default};
