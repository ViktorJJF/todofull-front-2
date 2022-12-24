import{_ as f}from"./BaseBreadcrumb.02b34150.js";import{_ as c}from"./BaseCard.40e43fa9.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,n as a,f as t,a as e,af as r,F as d,m as p,r as m,b as g,w as l,e as i}from"./index.55ede2bf.js";const v={},b=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can set the colors of the progresss bar using the props color and background-color. ",-1),$={class:"d-flex flex-wrap gap-2 mt-6"},x=t("br",null,null,-1),k=t("br",null,null,-1);function y(o,s){return n(),a(d,null,[b,t("div",$,[e(r,{"model-value":"15","background-color":"pink lighten-3",color:"pink lighten-1"}),x,e(r,{"model-value":"30","background-color":"blue-grey",color:"lime"}),k,e(r,{"model-value":"45","background-color":"success",color:"error"})])],64)}var w=u(v,[["render",y]]);const L={},P=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the indeterminate prop, v-progress-linear continuously animates. ",-1),R={class:"d-flex flex-wrap gap-2 mt-6"},T=t("br",null,null,-1),C=t("br",null,null,-1),V=t("br",null,null,-1);function S(o,s){return n(),a(d,null,[P,t("div",R,[e(r,{indeterminate:"",color:"yellow darken-2"}),T,e(r,{indeterminate:"",color:"green"}),C,e(r,{indeterminate:"",color:"teal"}),V,e(r,{indeterminate:"",color:"cyan"})])],64)}var B=u(L,[["render",S]]);const I={},F=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with reverse prop enabled will display left-to-right. ",-1),N={class:"d-flex flex-wrap gap-2 mt-6"},U=t("br",null,null,-1),D=t("br",null,null,-1),E=t("br",null,null,-1),Y=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," In specific cases you may want progress to display in left-to-right mode regardless of the application direction (LTR or RTL): ",-1);function j(o,s){var _,h;return n(),a(d,null,[F,t("div",N,[e(r,{"model-value":"15",color:"pink",reverse:""}),U,e(r,{color:"lime",indeterminate:"",reverse:""}),D,e(r,{"model-value":"30","buffer-value":"55",color:"success",reverse:"",streams:""}),E,Y,e(r,{"model-value":"15",reverse:!!((h=(_=o.$vuetify)==null?void 0:_.rtl)!=null&&h.isRtl)},null,8,["reverse"])])],64)}var q=u(I,[["render",j]]);const z={},A=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop is used to apply a border radius to the v-progress-linear component. ",-1),G={class:"d-flex flex-wrap gap-2 mt-6"},H=t("br",null,null,-1),J=t("br",null,null,-1),K=t("br",null,null,-1);function M(o,s){return n(),a(d,null,[A,t("div",G,[e(r,{"model-value":"100",color:"red darken-2",rounded:""}),H,e(r,{"model-value":"100",color:"indigo",rounded:""}),J,e(r,{"model-value":"100",color:"teal",rounded:""}),K,e(r,{"model-value":"100",color:"cyan darken-2",rounded:""})])],64)}var O=u(z,[["render",M]]);const Q={},W=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," The stream property works with buffer-value to convey to the user that there is some action taking place. ",-1),X={class:"d-flex flex-wrap gap-2 mt-6"},Z=t("br",null,null,-1),ee=t("br",null,null,-1),te=t("br",null,null,-1);function re(o,s){return n(),a(d,null,[W,t("div",X,[e(r,{color:"red lighten-2","buffer-value":"0",stream:""}),Z,e(r,{"model-value":"20",color:"teal","buffer-value":"0",stream:""}),ee,e(r,{"buffer-value":"50",stream:"",color:"cyan"}),te,e(r,{"model-value":"40","buffer-value":"60",stream:"",color:"orange"})])],64)}var le=u(Q,[["render",re]]);const oe={},se=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," This applies a striped background over the value portion of the v-progress-linear. This prop has no effect when using inderminate. ",-1),ne={class:"d-flex flex-wrap gap-2 mt-6"},ae=t("br",null,null,-1),de=t("br",null,null,-1),ce=t("br",null,null,-1);function ie(o,s){return n(),a(d,null,[se,t("div",ne,[e(r,{"model-value":"10",color:"light-blue",height:"10",striped:""}),ae,e(r,{"model-value":"20",color:"light-green darken-4",height:"10",striped:""}),de,e(r,{"model-value":"45",height:"10",striped:"",color:"lime"}),ce,e(r,{"model-value":"60",height:"10",striped:"",color:"deep-orange"})])],64)}var ue=u(oe,[["render",ie]]);const ge=p({setup(o){const s=m({title:"Progress Linear"}),_=m([{text:"Ui Components",disabled:!1,to:"#"},{text:"Progress Linear",disabled:!0}]);return(h,_e)=>(n(),a(d,null,[e(f,{title:s.value.title,breadcrumbs:_.value},null,8,["title","breadcrumbs"]),e(g,null,{default:l(()=>[e(i,{cols:"12",sm:"12"},{default:l(()=>[e(c,{heading:"Color"},{default:l(()=>[e(w)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(c,{heading:"Indeterminate"},{default:l(()=>[e(B)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(c,{heading:"Reversed"},{default:l(()=>[e(q)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(c,{heading:"Rounded"},{default:l(()=>[e(O)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(c,{heading:"Stream"},{default:l(()=>[e(le)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(c,{heading:"Striped"},{default:l(()=>[e(ue)]),_:1})]),_:1})]),_:1})],64))}});export{ge as default};
