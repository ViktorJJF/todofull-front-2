import{_ as f}from"./BaseBreadcrumb.d1dfe9fc.js";import{_ as d}from"./BaseCard.b1c81da5.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,n,f as t,a as e,aq as r,F as a,m,br as g,u as b,r as h,w as l,b as i,e as v}from"./index.e63785cd.js";const x={},$=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can set the colors of the progresss bar using the props color and background-color. ",-1),k={class:"d-flex flex-wrap gap-2 mt-6"},y=t("br",null,null,-1),w=t("br",null,null,-1);function L(c,o){return s(),n(a,null,[$,t("div",k,[e(r,{"model-value":"15","background-color":"pink lighten-3",color:"pink lighten-1"}),y,e(r,{"model-value":"30","background-color":"blue-grey",color:"lime"}),w,e(r,{"model-value":"45","background-color":"success",color:"error"})])],64)}var P=u(x,[["render",L]]);const R={},T=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the indeterminate prop, v-progress-linear continuously animates. ",-1),C={class:"d-flex flex-wrap gap-2 mt-6"},V=t("br",null,null,-1),S=t("br",null,null,-1),B=t("br",null,null,-1);function I(c,o){return s(),n(a,null,[T,t("div",C,[e(r,{indeterminate:"",color:"yellow darken-2"}),V,e(r,{indeterminate:"",color:"green"}),S,e(r,{indeterminate:"",color:"teal"}),B,e(r,{indeterminate:"",color:"cyan"})])],64)}var F=u(R,[["render",I]]);const N=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with reverse prop enabled will display left-to-right. ",-1),U={class:"d-flex flex-wrap gap-2 mt-6"},q=t("br",null,null,-1),D=t("br",null,null,-1),E=t("br",null,null,-1),Y=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," In specific cases you may want progress to display in left-to-right mode regardless of the application direction (LTR or RTL): ",-1),j=m({__name:"PLReversed",setup(c){const{isRtl:o}=g();return(_,p)=>(s(),n(a,null,[N,t("div",U,[e(r,{"model-value":"15",color:"pink",reverse:""}),q,e(r,{color:"lime",indeterminate:"",reverse:""}),D,e(r,{"model-value":"30","buffer-value":"55",color:"success",reverse:"",streams:""}),E,Y,e(r,{"model-value":"15",reverse:b(o)},null,8,["reverse"])])],64))}}),z={},A=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop is used to apply a border radius to the v-progress-linear component. ",-1),G={class:"d-flex flex-wrap gap-2 mt-6"},H=t("br",null,null,-1),J=t("br",null,null,-1),K=t("br",null,null,-1);function M(c,o){return s(),n(a,null,[A,t("div",G,[e(r,{"model-value":"100",color:"red darken-2",rounded:""}),H,e(r,{"model-value":"100",color:"indigo",rounded:""}),J,e(r,{"model-value":"100",color:"teal",rounded:""}),K,e(r,{"model-value":"100",color:"cyan darken-2",rounded:""})])],64)}var O=u(z,[["render",M]]);const Q={},W=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," The stream property works with buffer-value to convey to the user that there is some action taking place. ",-1),X={class:"d-flex flex-wrap gap-2 mt-6"},Z=t("br",null,null,-1),ee=t("br",null,null,-1),te=t("br",null,null,-1);function re(c,o){return s(),n(a,null,[W,t("div",X,[e(r,{color:"red lighten-2","buffer-value":"0",stream:""}),Z,e(r,{"model-value":"20",color:"teal","buffer-value":"0",stream:""}),ee,e(r,{"buffer-value":"50",stream:"",color:"cyan"}),te,e(r,{"model-value":"40","buffer-value":"60",stream:"",color:"orange"})])],64)}var le=u(Q,[["render",re]]);const oe={},se=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," This applies a striped background over the value portion of the v-progress-linear. This prop has no effect when using inderminate. ",-1),ne={class:"d-flex flex-wrap gap-2 mt-6"},ae=t("br",null,null,-1),ce=t("br",null,null,-1),de=t("br",null,null,-1);function ie(c,o){return s(),n(a,null,[se,t("div",ne,[e(r,{"model-value":"10",color:"light-blue",height:"10",striped:""}),ae,e(r,{"model-value":"20",color:"light-green darken-4",height:"10",striped:""}),ce,e(r,{"model-value":"45",height:"10",striped:"",color:"lime"}),de,e(r,{"model-value":"60",height:"10",striped:"",color:"deep-orange"})])],64)}var ue=u(oe,[["render",ie]]);const ge=m({__name:"ProgressLinear",setup(c){const o=h({title:"Progress Linear"}),_=h([{text:"Ui Components",disabled:!1,to:"#"},{text:"Progress Linear",disabled:!0}]);return(p,_e)=>(s(),n(a,null,[e(f,{title:o.value.title,breadcrumbs:_.value},null,8,["title","breadcrumbs"]),e(v,null,{default:l(()=>[e(i,{cols:"12",sm:"12"},{default:l(()=>[e(d,{heading:"Color"},{default:l(()=>[e(P)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(d,{heading:"Indeterminate"},{default:l(()=>[e(F)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(d,{heading:"Reversed"},{default:l(()=>[e(j)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(d,{heading:"Rounded"},{default:l(()=>[e(O)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(d,{heading:"Stream"},{default:l(()=>[e(le)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(d,{heading:"Striped"},{default:l(()=>[e(ue)]),_:1})]),_:1})]),_:1})],64))}});export{ge as default};
