import{_ as v}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-fb68b5f8.js";import{_ as m}from"./BaseCard.vue_vue_type_script_setup_true_lang-a25aa4ff.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,g as c,b as n,a as e,w as o,d as t,Q as b,f as g,h,q as y,F as w}from"./index-26340852.js";const x={},$=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),n("span",{class:"font-weight-bold"},"type"),t(" prop provides 4 default "),n("code",null,"v-alert"),t(" styles: "),n("span",{class:"font-weight-bold"},"success, info, warning,"),t(" and "),n("span",{class:"font-weight-bold"},"error"),t(". Each of these styles provide a default icon and color. The default colors can be configured globally by customizing Vuetify's theme. ")],-1),k={class:"mt-4"};function A(d,l){const a=s("v-alert");return i(),c("div",null,[$,n("div",k,[e(a,{class:"mb-3",type:"success"},{default:o(()=>[t("I'm a success alert.")]),_:1}),e(a,{class:"mb-3",type:"info"},{default:o(()=>[t("I'm an info alert.")]),_:1}),e(a,{class:"mb-3",type:"warning"},{default:o(()=>[t("I'm a warning alert.")]),_:1}),e(a,{type:"error"},{default:o(()=>[t("I'm an error alert.")]),_:1})])])}const I=p(x,[["render",A]]),q={},C=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),n("span",{class:"font-weight-bold"},"border"),t(" prop adds a simple border to one of the 4 sides of the alert. This can be combined props like with "),n("span",{class:"font-weight-bold"},"color, dark,"),t(" and "),n("span",{class:"font-weight-bold"},"type"),t(" to provide unique accents to the alert. ")],-1),T={class:"mt-4"};function V(d,l){const a=s("v-alert");return i(),c("div",null,[C,n("div",T,[e(a,{class:"mb-3",border:"top",color:"success",dark:""},{default:o(()=>[t("I'm an alert with a top border and success color")]),_:1}),e(a,{class:"mb-3",border:"right",color:"info",dark:""},{default:o(()=>[t("I'm an alert with a right border and info color")]),_:1}),e(a,{class:"mb-3",border:"bottom",color:"success",dark:""},{default:o(()=>[t("I'm an alert with a bottom border and success color")]),_:1}),e(a,{border:"left",color:"info",dark:""},{default:o(()=>[t("I'm an alert with a border left type info")]),_:1})])])}const N=p(q,[["render",V]]),P={},B=b('<p class="text-subtitle-1 text-grey-darken-1"> The <span class="font-weight-bold">colored-border</span> prop removes the alert background in order to accent the <span class="font-weight-bold">border</span> prop. If a <span class="font-weight-bold">type</span> is set, it will use the types default color. If no <span class="font-weight-bold">color</span> or <span class="font-weight-bold">type</span> is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark). </p>',1),F={class:"mt-4"};function D(d,l){const a=s("v-alert");return i(),c("div",null,[B,n("div",F,[e(a,{class:"mb-3",border:"start","border-color":"deep-purple accent-4"},{default:o(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1}),e(a,{class:"mb-3",border:"top","border-color":"success"},{default:o(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1}),e(a,{class:"mb-3",border:"bottom","border-color":"warning"},{default:o(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1}),e(a,{border:"end","border-color":"error"},{default:o(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1})])])}const S=p(P,[["render",D]]),M={},O=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),n("span",{class:"font-weight-bold"},"density"),t(" prop decreases the height of the alert based upon 1 of 3 levels of density; "),n("span",{class:"font-weight-bold"},"default, comfortable, and compact"),t(". ")],-1),z={class:"mt-4"},E=n("strong",null,"type",-1),L=n("strong",null,"text",-1),R=n("strong",null,"type",-1),Q=n("strong",null,"border",-1),U=n("strong",null,"type",-1),W=n("strong",null,"prominent",-1),j=n("strong",null,"type",-1);function G(d,l){const a=s("v-alert");return i(),c("div",null,[O,n("div",z,[e(a,{class:"mb-3",density:"compact",type:"info"},{default:o(()=>[t(" I'm a compact alert with a "),E,t(" of info ")]),_:1}),e(a,{class:"mb-3",density:"comfortable",type:"success"},{default:o(()=>[t(" I'm a comfortable alert with the "),L,t(" prop and a "),R,t(" of success ")]),_:1}),e(a,{class:"mb-3",border:"start",density:"default",type:"warning"},{default:o(()=>[t(" I'm a default alert with the "),Q,t(" prop and a "),U,t(" of warning ")]),_:1}),e(a,{prominent:"",type:"error",variant:"outlined"},{default:o(()=>[t(" I'm a default alert with the "),W,t(" prop and a "),j,t(" of error ")]),_:1})])])}const H=p(M,[["render",G]]),J=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," The closable prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert ",-1),K={class:"mt-4"},X={key:0,class:"text-center"},Y=g({__name:"AlertClosable",setup(d){const l=h(!0);return(a,u)=>{const _=s("v-alert"),r=s("v-btn");return i(),c("div",null,[J,n("div",K,[e(_,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=f=>l.value=f),border:"start",closable:"","close-label":"Close Alert",color:"deep-purple accent-4",title:"Closable Alert"},{default:o(()=>[t(" Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. ")]),_:1},8,["modelValue"]),l.value?y("",!0):(i(),c("div",X,[e(r,{onClick:u[1]||(u[1]=f=>l.value=!0)},{default:o(()=>[t(" Reset ")]),_:1})]))])])}}}),Z={},ee=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),n("span",{class:"font-weight-bold"},"icon"),t(" prop allows you to add an icon to the beginning of the alert component. If a "),n("span",{class:"font-weight-bold"},"type"),t(" is provided, this will override the default type icon. Additionally setting the "),n("span",{class:"font-weight-bold"},"icon"),t(" prop to false will remove the icon altogether. ")],-1),te={class:"mt-4"};function oe(d,l){const a=s("v-alert");return i(),c("div",null,[ee,n("div",te,[e(a,{color:"primary",theme:"dark",icon:"mdi-vuetify",prominent:""},{default:o(()=>[t(" Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in. ")]),_:1})])])}const ne=p(Z,[["render",oe]]),ae={},se=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),n("span",{class:"font-weight-bold"},"outlined"),t(" prop inverts the style of an alert, inheriting the currently applied "),n("span",{class:"font-weight-bold"},"color"),t(", applying it to the text and border, and making its background transparent. ")],-1),le={class:"mt-4"};function re(d,l){const a=s("v-alert");return i(),c("div",null,[se,n("div",le,[e(a,{class:"mb-3",color:"purple",variant:"outlined"},{title:o(()=>[t(" Outlined Alert ")]),default:o(()=>[t(" Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi. ")]),_:1}),e(a,{class:"mb-3",type:"success",variant:"outlined"},{default:o(()=>[t(" Praesent venenatis metus at tortor pulvinar varius. ")]),_:1}),e(a,{variant:"outlined",type:"warning",prominent:"",border:"top"},{default:o(()=>[t(" Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis. ")]),_:1})])])}const ie=p(ae,[["render",re]]),ce={},de=b('<p class="text-subtitle-1 text-grey-darken-1"> The <span class="font-weight-bold">prominent</span> prop provides a more pronounced alert by increasing the height and applying a halo to the icon. When applying both <span class="font-weight-bold">prominent</span> and <span class="font-weight-bold">dense</span> together, the alert will take on the appearance of a normal alert but with the <span class="font-weight-bold">prominent</span> icon effects. </p>',1),ue={class:"mt-4"};function me(d,l){const a=s("v-btn"),u=s("v-alert");return i(),c("div",null,[de,n("div",ue,[e(u,{class:"mb-3",prominent:"",type:"error"},{text:o(()=>[t(" Nunc nonummy metus. Nunc interdum lacus sit amet orci Nullam dictum felis eu pede. ")]),append:o(()=>[e(a,{size:"small",color:"white",variant:"text"},{default:o(()=>[t("Take action")]),_:1})]),_:1}),e(u,{color:"blue-grey-darken-2",density:"compact",icon:"mdi-school",prominent:""},{default:o(()=>[t(" Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Aenean ut eros et nisl sagittis vestibulum. Sed aliquam ultrices mauris. Donec vitae orci sed dolor rutrum auctor. ")]),_:1})])])}const pe=p(ce,[["render",me]]),_e={},fe=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," The variant prop provides an easy way to change the overall style of your alerts. Together with other props like density, prominent, border, and shaped, it allows you to create a unique and customized component. ",-1),he={class:"mt-4"},be=n("br",null,null,-1),ge=n("div",null," Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Curabitur turpis. ",-1),ve={class:"d-flex flex-row align-center justify-space-between"},ye=n("div",null," Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam imperdiet imperdiet orci. ",-1),we=n("br",null,null,-1),xe=n("br",null,null,-1),$e=n("br",null,null,-1),ke=n("br",null,null,-1);function Ae(d,l){const a=s("v-alert"),u=s("v-divider"),_=s("v-btn");return i(),c("div",null,[fe,n("div",he,[e(a,{color:"primary",icon:"mdi-flash",title:"Contained Flat (Default)"},{default:o(()=>[t(" Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. Maecenas egestas arcu quis ligula mattis placerat. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. ")]),_:1}),be,e(a,{color:"info",title:"Contained Text"},{default:o(()=>[ge,e(u,{class:"my-4 bg-light-blue-lighten-4"}),n("div",ve,[ye,e(_,{color:"info",variant:"outlined"},{default:o(()=>[t(" Okay ")]),_:1})])]),_:1}),we,e(a,{color:"primary",icon:"mdi-fire",title:"Outlined",variant:"outlined"},{default:o(()=>[t(" Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. Maecenas egestas arcu quis ligula mattis placerat. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. ")]),_:1}),xe,e(a,{border:"start",color:"success",density:"compact",icon:"mdi-clock-fast",title:"Contained"},{default:o(()=>[t(" Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur at lacus ac velit ornare lobortis. ")]),_:1}),$e,e(a,{icon:"mdi-cloud-alert",prominent:"",title:"Text",type:"error",variant:"text"},{default:o(()=>[t(" Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Duis leo. ")]),_:1}),ke,e(a,{color:"orange",density:"compact",icon:"mdi-note",prominent:"",title:"Plain",variant:"plain"},{default:o(()=>[t(" Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur at lacus ac velit ornare lobortis. ")]),_:1})])])}const Ie=p(_e,[["render",Ae]]),qe={},Ce=n("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop will add or remove border-radius to the alert. Similar to other styled props, rounded can be combined with other props like density, prominent, and variant to create a unique and customized component. ",-1),Te={class:"mt-4"},Ve=n("br",null,null,-1),Ne=n("br",null,null,-1),Pe=n("br",null,null,-1);function Be(d,l){const a=s("v-alert");return i(),c("div",null,[Ce,n("div",Te,[e(a,{rounded:"0",type:"info",title:"Info"},{default:o(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1}),Ve,e(a,{rounded:"xl",variant:"outlined",title:"Success",type:"success"},{default:o(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1}),Ne,e(a,{title:"Warning",rounded:"pill",type:"warning",prominent:""},{default:o(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1}),Pe,e(a,{title:"Error",prominent:"",rounded:"t-xl b-lg",type:"error"},{default:o(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1})])])}const Fe=p(qe,[["render",Be]]),ze=g({__name:"Alerts",setup(d){const l=h({title:"Alert"}),a=h([{text:"Ui Components",disabled:!1,to:"#"},{text:"Alert",disabled:!0}]);return(u,_)=>{const r=s("v-col"),f=s("v-row");return i(),c(w,null,[e(v,{title:l.value.title,breadcrumbs:a.value},null,8,["title","breadcrumbs"]),e(f,null,{default:o(()=>[e(r,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[e(m,{heading:"Alert - Type"},{default:o(()=>[e(I)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[e(m,{heading:"Alert - Border"},{default:o(()=>[e(N)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[e(m,{heading:"Alert - Coloured Border"},{default:o(()=>[e(S)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[e(m,{heading:"Alert - Density"},{default:o(()=>[e(H)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[e(m,{heading:"Alert - Closable"},{default:o(()=>[e(Y)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[e(m,{heading:"Alert - Icon"},{default:o(()=>[e(ne)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[e(m,{heading:"Alert - Outlined"},{default:o(()=>[e(ie)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[e(m,{heading:"Alert - Prominent"},{default:o(()=>[e(pe)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12"},{default:o(()=>[e(m,{heading:"Alert - Variant"},{default:o(()=>[e(Ie)]),_:1})]),_:1}),e(r,{cols:"12",sm:"12"},{default:o(()=>[e(m,{heading:"Alert - Rounded"},{default:o(()=>[e(Fe)]),_:1})]),_:1})]),_:1})],64)}}});export{ze as default};
