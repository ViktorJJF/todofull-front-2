import{_ as u,r as a,o as c,f as d,j as s,b as o,a as e,w as l,d as t,F as m,S as g,e as y,g as v}from"./index-b5291b3b.js";import{B as w}from"./BaseBreadcrumb-19341b72.js";import{B as f}from"./BaseCard-6418f7ad.js";const x={},A=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),o("span",{class:"font-weight-bold"},"type"),t(" prop provides 4 default "),o("code",null,"v-alert"),t(" styles: "),o("span",{class:"font-weight-bold"},"success, info, warning,"),t(" and "),o("span",{class:"font-weight-bold"},"error"),t(". Each of these styles provide a default icon and color. The default colors can be configured globally by customizing Vuetify's theme. ")],-1),$={class:"mt-4"};function C(p,r){const n=a("v-alert");return c(),d(m,null,[s(" ----------------------------------------------------------------------------- "),s(" Type "),s(" ----------------------------------------------------------------------------- "),o("div",null,[A,o("div",$,[e(n,{class:"mb-3",type:"success"},{default:l(()=>[t("I'm a success alert.")]),_:1}),e(n,{class:"mb-3",type:"info"},{default:l(()=>[t("I'm an info alert.")]),_:1}),e(n,{class:"mb-3",type:"warning"},{default:l(()=>[t("I'm a warning alert.")]),_:1}),e(n,{type:"error"},{default:l(()=>[t("I'm an error alert.")]),_:1})])])],2112)}const k=u(x,[["render",C],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/alerts/AlertType.vue"]]),T={},I=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),o("span",{class:"font-weight-bold"},"border"),t(" prop adds a simple border to one of the 4 sides of the alert. This can be combined props like with "),o("span",{class:"font-weight-bold"},"color, dark,"),t(" and "),o("span",{class:"font-weight-bold"},"type"),t(" to provide unique accents to the alert. ")],-1),q={class:"mt-4"};function D(p,r){const n=a("v-alert");return c(),d(m,null,[s(" ----------------------------------------------------------------------------- "),s(" Border "),s(" ----------------------------------------------------------------------------- "),o("div",null,[I,o("div",q,[e(n,{class:"mb-3",border:"top",color:"success",dark:""},{default:l(()=>[t("I'm an alert with a top border and success color")]),_:1}),e(n,{class:"mb-3",border:"right",color:"info",dark:""},{default:l(()=>[t("I'm an alert with a right border and info color")]),_:1}),e(n,{class:"mb-3",border:"bottom",color:"success",dark:""},{default:l(()=>[t("I'm an alert with a bottom border and success color")]),_:1}),e(n,{border:"left",color:"info",dark:""},{default:l(()=>[t("I'm an alert with a border left type info")]),_:1})])])],2112)}const V=u(T,[["render",D],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/alerts/AlertBorder.vue"]]),B={},P=g('<p class="text-subtitle-1 text-grey-darken-1"> The <span class="font-weight-bold">colored-border</span> prop removes the alert background in order to accent the <span class="font-weight-bold">border</span> prop. If a <span class="font-weight-bold">type</span> is set, it will use the types default color. If no <span class="font-weight-bold">color</span> or <span class="font-weight-bold">type</span> is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark). </p>',1),j={class:"mt-4"};function N(p,r){const n=a("v-alert");return c(),d(m,null,[s(" ----------------------------------------------------------------------------- "),s(" Coloured Border "),s(" ----------------------------------------------------------------------------- "),o("div",null,[P,o("div",j,[e(n,{class:"mb-3",border:"start","border-color":"deep-purple accent-4"},{default:l(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1}),e(n,{class:"mb-3",border:"top","border-color":"success"},{default:l(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1}),e(n,{class:"mb-3",border:"bottom","border-color":"warning"},{default:l(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1}),e(n,{border:"end","border-color":"error"},{default:l(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1})])])],2112)}const F=u(B,[["render",N],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/alerts/AlertColorBorder.vue"]]),O={},S=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),o("span",{class:"font-weight-bold"},"density"),t(" prop decreases the height of the alert based upon 1 of 3 levels of density; "),o("span",{class:"font-weight-bold"},"default, comfortable, and compact"),t(". ")],-1),M={class:"mt-4"},R=o("strong",null,"type",-1),z=o("strong",null,"text",-1),E=o("strong",null,"type",-1),L=o("strong",null,"border",-1),U=o("strong",null,"type",-1),W=o("strong",null,"prominent",-1),Q=o("strong",null,"type",-1);function G(p,r){const n=a("v-alert");return c(),d(m,null,[s(" ----------------------------------------------------------------------------- "),s(" Dencity "),s(" ----------------------------------------------------------------------------- "),o("div",null,[S,o("div",M,[e(n,{class:"mb-3",density:"compact",type:"info"},{default:l(()=>[t(" I'm a compact alert with a "),R,t(" of info ")]),_:1}),e(n,{class:"mb-3",density:"comfortable",type:"success"},{default:l(()=>[t(" I'm a comfortable alert with the "),z,t(" prop and a "),E,t(" of success ")]),_:1}),e(n,{class:"mb-3",border:"start",density:"default",type:"warning"},{default:l(()=>[t(" I'm a default alert with the "),L,t(" prop and a "),U,t(" of warning ")]),_:1}),e(n,{prominent:"",type:"error",variant:"outlined"},{default:l(()=>[t(" I'm a default alert with the "),W,t(" prop and a "),Q,t(" of error ")]),_:1})])])],2112)}const H=u(O,[["render",G],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/alerts/AlertDensity.vue"]]),J=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," The closable prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert ",-1),K={class:"mt-4"},X={key:0,class:"text-center"},Y=y({__name:"AlertClosable",setup(p){const r=v(!0);return(n,_)=>{const h=a("v-alert"),i=a("v-btn");return c(),d(m,null,[s(" ----------------------------------------------------------------------------- "),s(" Closable "),s(" ----------------------------------------------------------------------------- "),o("div",null,[J,o("div",K,[e(h,{modelValue:r.value,"onUpdate:modelValue":_[0]||(_[0]=b=>r.value=b),border:"start",closable:"","close-label":"Close Alert",color:"deep-purple accent-4",title:"Closable Alert"},{default:l(()=>[t(" Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. ")]),_:1},8,["modelValue"]),r.value?s("v-if",!0):(c(),d("div",X,[e(i,{onClick:_[1]||(_[1]=b=>r.value=!0)},{default:l(()=>[t(" Reset ")]),_:1})]))])])],2112)}}}),Z=u(Y,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/alerts/AlertClosable.vue"]]),ee={},te=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),o("span",{class:"font-weight-bold"},"icon"),t(" prop allows you to add an icon to the beginning of the alert component. If a "),o("span",{class:"font-weight-bold"},"type"),t(" is provided, this will override the default type icon. Additionally setting the "),o("span",{class:"font-weight-bold"},"icon"),t(" prop to false will remove the icon altogether. ")],-1),oe={class:"mt-4"};function le(p,r){const n=a("v-alert");return c(),d(m,null,[s(" ----------------------------------------------------------------------------- "),s(" Icon "),s(" ----------------------------------------------------------------------------- "),o("div",null,[te,o("div",oe,[e(n,{color:"primary",theme:"dark",icon:"mdi-vuetify",prominent:""},{default:l(()=>[t(" Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in. ")]),_:1})])])],2112)}const ne=u(ee,[["render",le],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/alerts/AlertIcon.vue"]]),se={},ae=o("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),o("span",{class:"font-weight-bold"},"outlined"),t(" prop inverts the style of an alert, inheriting the currently applied "),o("span",{class:"font-weight-bold"},"color"),t(", applying it to the text and border, and making its background transparent. ")],-1),re={class:"mt-4"};function ie(p,r){const n=a("v-alert");return c(),d(m,null,[s(" ----------------------------------------------------------------------------- "),s(" Outlined "),s(" ----------------------------------------------------------------------------- "),o("div",null,[ae,o("div",re,[e(n,{class:"mb-3",color:"purple",variant:"outlined"},{title:l(()=>[t(" Outlined Alert ")]),default:l(()=>[t(" Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi. ")]),_:1}),e(n,{class:"mb-3",type:"success",variant:"outlined"},{default:l(()=>[t(" Praesent venenatis metus at tortor pulvinar varius. ")]),_:1}),e(n,{variant:"outlined",type:"warning",prominent:"",border:"top"},{default:l(()=>[t(" Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis. ")]),_:1})])])],2112)}const ce=u(se,[["render",ie],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/alerts/AlertOutlined.vue"]]),de={},ue=g('<p class="text-subtitle-1 text-grey-darken-1"> The <span class="font-weight-bold">prominent</span> prop provides a more pronounced alert by increasing the height and applying a halo to the icon. When applying both <span class="font-weight-bold">prominent</span> and <span class="font-weight-bold">dense</span> together, the alert will take on the appearance of a normal alert but with the <span class="font-weight-bold">prominent</span> icon effects. </p>',1),me={class:"mt-4"};function pe(p,r){const n=a("v-btn"),_=a("v-alert");return c(),d(m,null,[s(" ----------------------------------------------------------------------------- "),s(" Prominent "),s(" ----------------------------------------------------------------------------- "),o("div",null,[ue,o("div",me,[e(_,{class:"mb-3",prominent:"",type:"error"},{text:l(()=>[t(" Nunc nonummy metus. Nunc interdum lacus sit amet orci Nullam dictum felis eu pede. ")]),append:l(()=>[e(n,{size:"small",color:"white",variant:"text"},{default:l(()=>[t("Take action")]),_:1})]),_:1}),e(_,{color:"blue-grey-darken-2",density:"compact",icon:"mdi-school",prominent:""},{default:l(()=>[t(" Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Aenean ut eros et nisl sagittis vestibulum. Sed aliquam ultrices mauris. Donec vitae orci sed dolor rutrum auctor. ")]),_:1})])])],2112)}const _e=u(de,[["render",pe],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/alerts/AlertProminent.vue"]]),fe={},he=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," The variant prop provides an easy way to change the overall style of your alerts. Together with other props like density, prominent, border, and shaped, it allows you to create a unique and customized component. ",-1),be={class:"mt-4"},ve=o("br",null,null,-1),ge=o("div",null," Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Curabitur turpis. ",-1),ye={class:"d-flex flex-row align-center justify-space-between"},we=o("div",null," Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam imperdiet imperdiet orci. ",-1),xe=o("br",null,null,-1),Ae=o("br",null,null,-1),$e=o("br",null,null,-1),Ce=o("br",null,null,-1);function ke(p,r){const n=a("v-alert"),_=a("v-divider"),h=a("v-btn");return c(),d(m,null,[s(" ----------------------------------------------------------------------------- "),s(" Alert Variant "),s(" ----------------------------------------------------------------------------- "),o("div",null,[he,o("div",be,[e(n,{color:"primary",icon:"mdi-flash",title:"Contained Flat (Default)"},{default:l(()=>[t(" Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. Maecenas egestas arcu quis ligula mattis placerat. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. ")]),_:1}),ve,e(n,{color:"info",title:"Contained Text"},{default:l(()=>[ge,e(_,{class:"my-4 bg-light-blue-lighten-4"}),o("div",ye,[we,e(h,{color:"info",variant:"outlined"},{default:l(()=>[t(" Okay ")]),_:1})])]),_:1}),xe,e(n,{color:"primary",icon:"mdi-fire",title:"Outlined",variant:"outlined"},{default:l(()=>[t(" Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. Maecenas egestas arcu quis ligula mattis placerat. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. ")]),_:1}),Ae,e(n,{border:"start",color:"success",density:"compact",icon:"mdi-clock-fast",title:"Contained"},{default:l(()=>[t(" Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur at lacus ac velit ornare lobortis. ")]),_:1}),$e,e(n,{icon:"mdi-cloud-alert",prominent:"",title:"Text",type:"error",variant:"text"},{default:l(()=>[t(" Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Duis leo. ")]),_:1}),Ce,e(n,{color:"orange",density:"compact",icon:"mdi-note",prominent:"",title:"Plain",variant:"plain"},{default:l(()=>[t(" Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur at lacus ac velit ornare lobortis. ")]),_:1})])])],2112)}const Te=u(fe,[["render",ke],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/alerts/AlertVariant.vue"]]),Ie={},qe=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop will add or remove border-radius to the alert. Similar to other styled props, rounded can be combined with other props like density, prominent, and variant to create a unique and customized component. ",-1),De={class:"mt-4"},Ve=o("br",null,null,-1),Be=o("br",null,null,-1),Pe=o("br",null,null,-1);function je(p,r){const n=a("v-alert");return c(),d(m,null,[s(" ----------------------------------------------------------------------------- "),s(" Rounded "),s(" ----------------------------------------------------------------------------- "),o("div",null,[qe,o("div",De,[e(n,{rounded:"0",type:"info",title:"Info"},{default:l(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1}),Ve,e(n,{rounded:"xl",variant:"outlined",title:"Success",type:"success"},{default:l(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1}),Be,e(n,{title:"Warning",rounded:"pill",type:"warning",prominent:""},{default:l(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1}),Pe,e(n,{title:"Error",prominent:"",rounded:"t-xl b-lg",type:"error"},{default:l(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1})])])],2112)}const Ne=u(Ie,[["render",je],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/alerts/AlertRounded.vue"]]),Fe=y({__name:"Alerts",setup(p){const r=v({title:"Alert"}),n=v([{text:"Ui Components",disabled:!1,to:"#"},{text:"Alert",disabled:!0}]);return(_,h)=>{const i=a("v-col"),b=a("v-row");return c(),d(m,null,[e(w,{title:r.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),e(b,null,{default:l(()=>[e(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(f,{heading:"Alert - Type"},{default:l(()=>[e(k)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(f,{heading:"Alert - Border"},{default:l(()=>[e(V)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(f,{heading:"Alert - Coloured Border"},{default:l(()=>[e(F)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(f,{heading:"Alert - Density"},{default:l(()=>[e(H)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(f,{heading:"Alert - Closable"},{default:l(()=>[e(Z)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(f,{heading:"Alert - Icon"},{default:l(()=>[e(ne)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(f,{heading:"Alert - Outlined"},{default:l(()=>[e(ce)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:l(()=>[e(f,{heading:"Alert - Prominent"},{default:l(()=>[e(_e)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Alert - Variant"},{default:l(()=>[e(Te)]),_:1})]),_:1}),e(i,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Alert - Rounded"},{default:l(()=>[e(Ne)]),_:1})]),_:1})]),_:1})],64)}}}),Re=u(Fe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Alerts.vue"]]);export{Re as default};
