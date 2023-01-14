import{_ as v}from"./BaseBreadcrumb.c1b3a01d.js";import{_ as c}from"./BaseCard.df6d96ee.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,n as r,f as s,a as e,w as a,h as t,b1 as l,aw as b,m as g,r as _,g as f,L as y,T as w,b as d,e as x,F as $}from"./index.270d3377.js";const A={},k=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),s("span",{class:"font-weight-bold"},"type"),t(" prop provides 4 default "),s("code",null,"v-alert"),t(" styles: "),s("span",{class:"font-weight-bold"},"success, info, warning,"),t(" and "),s("span",{class:"font-weight-bold"},"error"),t(". Each of these styles provide a default icon and color. The default colors can be configured globally by customizing Vuetify's theme. ")],-1),I={class:"mt-4"};function V(i,o){return n(),r("div",null,[k,s("div",I,[e(l,{class:"mb-3",type:"success"},{default:a(()=>[t("I'm a success alert.")]),_:1}),e(l,{class:"mb-3",type:"info"},{default:a(()=>[t("I'm an info alert.")]),_:1}),e(l,{class:"mb-3",type:"warning"},{default:a(()=>[t("I'm a warning alert.")]),_:1}),e(l,{type:"error"},{default:a(()=>[t("I'm an error alert.")]),_:1})])])}var q=u(A,[["render",V]]);const C={},T=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),s("span",{class:"font-weight-bold"},"border"),t(" prop adds a simple border to one of the 4 sides of the alert. This can be combined props like with "),s("span",{class:"font-weight-bold"},"color, dark,"),t(" and "),s("span",{class:"font-weight-bold"},"type"),t(" to provide unique accents to the alert. ")],-1),N={class:"mt-4"};function P(i,o){return n(),r("div",null,[T,s("div",N,[e(l,{class:"mb-3",border:"top",color:"success",dark:""},{default:a(()=>[t("I'm an alert with a top border and success color")]),_:1}),e(l,{class:"mb-3",border:"right",color:"info",dark:""},{default:a(()=>[t("I'm an alert with a right border and info color")]),_:1}),e(l,{class:"mb-3",border:"bottom",color:"success",dark:""},{default:a(()=>[t("I'm an alert with a bottom border and success color")]),_:1}),e(l,{border:"left",color:"info",dark:""},{default:a(()=>[t("I'm an alert with a border left type info")]),_:1})])])}var B=u(C,[["render",P]]);const D={},F=b('<p class="text-subtitle-1 text-grey-darken-1"> The <span class="font-weight-bold">colored-border</span> prop removes the alert background in order to accent the <span class="font-weight-bold">border</span> prop. If a <span class="font-weight-bold">type</span> is set, it will use the types default color. If no <span class="font-weight-bold">color</span> or <span class="font-weight-bold">type</span> is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark). </p>',1),S={class:"mt-4"};function L(i,o){return n(),r("div",null,[F,s("div",S,[e(l,{class:"mb-3",border:"start","border-color":"deep-purple accent-4"},{default:a(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1}),e(l,{class:"mb-3",border:"top","border-color":"success"},{default:a(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1}),e(l,{class:"mb-3",border:"bottom","border-color":"warning"},{default:a(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1}),e(l,{border:"end","border-color":"error"},{default:a(()=>[t(" Aliquam eu nunc. Fusce commodo aliquam arcu. ")]),_:1})])])}var M=u(D,[["render",L]]);const O={},z=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),s("span",{class:"font-weight-bold"},"density"),t(" prop decreases the height of the alert based upon 1 of 3 levels of density; "),s("span",{class:"font-weight-bold"},"default, comfortable, and compact"),t(". ")],-1),E={class:"mt-4"},R=s("strong",null,"type",-1),U=s("strong",null,"text",-1),W=s("strong",null,"type",-1),j=s("strong",null,"border",-1),Q=s("strong",null,"type",-1),G=s("strong",null,"prominent",-1),H=s("strong",null,"type",-1);function J(i,o){return n(),r("div",null,[z,s("div",E,[e(l,{class:"mb-3",density:"compact",type:"info"},{default:a(()=>[t(" I'm a compact alert with a "),R,t(" of info ")]),_:1}),e(l,{class:"mb-3",density:"comfortable",type:"success"},{default:a(()=>[t(" I'm a comfortable alert with the "),U,t(" prop and a "),W,t(" of success ")]),_:1}),e(l,{class:"mb-3",border:"start",density:"default",type:"warning"},{default:a(()=>[t(" I'm a default alert with the "),j,t(" prop and a "),Q,t(" of warning ")]),_:1}),e(l,{prominent:"",type:"error",variant:"outlined"},{default:a(()=>[t(" I'm a default alert with the "),G,t(" prop and a "),H,t(" of error ")]),_:1})])])}var K=u(O,[["render",J]]);const X=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," The closable prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert ",-1),Y={class:"mt-4"},Z={key:0,class:"text-center"},ee=g({__name:"AlertClosable",setup(i){const o=_(!0);return(h,m)=>(n(),r("div",null,[X,s("div",Y,[e(l,{modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=p=>o.value=p),border:"start",closable:"","close-label":"Close Alert",color:"deep-purple accent-4",title:"Closable Alert"},{default:a(()=>[t(" Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. ")]),_:1},8,["modelValue"]),o.value?y("",!0):(n(),r("div",Z,[e(f,{onClick:m[1]||(m[1]=p=>o.value=!0)},{default:a(()=>[t(" Reset ")]),_:1})]))])]))}}),te={},ae=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),s("span",{class:"font-weight-bold"},"icon"),t(" prop allows you to add an icon to the beginning of the alert component. If a "),s("span",{class:"font-weight-bold"},"type"),t(" is provided, this will override the default type icon. Additionally setting the "),s("span",{class:"font-weight-bold"},"icon"),t(" prop to false will remove the icon altogether. ")],-1),se={class:"mt-4"};function le(i,o){return n(),r("div",null,[ae,s("div",se,[e(l,{color:"primary",theme:"dark",icon:"mdi-vuetify",prominent:""},{default:a(()=>[t(" Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in. ")]),_:1})])])}var oe=u(te,[["render",le]]);const ne={},re=s("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" The "),s("span",{class:"font-weight-bold"},"outlined"),t(" prop inverts the style of an alert, inheriting the currently applied "),s("span",{class:"font-weight-bold"},"color"),t(", applying it to the text and border, and making its background transparent. ")],-1),ie={class:"mt-4"};function ce(i,o){return n(),r("div",null,[re,s("div",ie,[e(l,{class:"mb-3",color:"purple",variant:"outlined"},{title:a(()=>[t(" Outlined Alert ")]),default:a(()=>[t(" Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi. ")]),_:1}),e(l,{class:"mb-3",type:"success",variant:"outlined"},{default:a(()=>[t(" Praesent venenatis metus at tortor pulvinar varius. ")]),_:1}),e(l,{variant:"outlined",type:"warning",prominent:"",border:"top"},{default:a(()=>[t(" Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis. ")]),_:1})])])}var de=u(ne,[["render",ce]]);const ue={},me=b('<p class="text-subtitle-1 text-grey-darken-1"> The <span class="font-weight-bold">prominent</span> prop provides a more pronounced alert by increasing the height and applying a halo to the icon. When applying both <span class="font-weight-bold">prominent</span> and <span class="font-weight-bold">dense</span> together, the alert will take on the appearance of a normal alert but with the <span class="font-weight-bold">prominent</span> icon effects. </p>',1),pe={class:"mt-4"};function _e(i,o){return n(),r("div",null,[me,s("div",pe,[e(l,{class:"mb-3",prominent:"",type:"error"},{text:a(()=>[t(" Nunc nonummy metus. Nunc interdum lacus sit amet orci Nullam dictum felis eu pede. ")]),append:a(()=>[e(f,{size:"small",color:"white",variant:"text"},{default:a(()=>[t("Take action")]),_:1})]),_:1}),e(l,{color:"blue-grey-darken-2",density:"compact",icon:"mdi-school",prominent:""},{default:a(()=>[t(" Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Aenean ut eros et nisl sagittis vestibulum. Sed aliquam ultrices mauris. Donec vitae orci sed dolor rutrum auctor. ")]),_:1})])])}var fe=u(ue,[["render",_e]]);const he={},be=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," The variant prop provides an easy way to change the overall style of your alerts. Together with other props like density, prominent, border, and shaped, it allows you to create a unique and customized component. ",-1),ge={class:"mt-4"},ve=s("br",null,null,-1),ye=s("div",null," Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Curabitur turpis. ",-1),we={class:"d-flex flex-row align-center justify-space-between"},xe=s("div",null," Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam imperdiet imperdiet orci. ",-1),$e=s("br",null,null,-1),Ae=s("br",null,null,-1),ke=s("br",null,null,-1),Ie=s("br",null,null,-1);function Ve(i,o){return n(),r("div",null,[be,s("div",ge,[e(l,{color:"primary",icon:"mdi-flash",title:"Contained Flat (Default)"},{default:a(()=>[t(" Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. Maecenas egestas arcu quis ligula mattis placerat. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. ")]),_:1}),ve,e(l,{color:"info",title:"Contained Text"},{default:a(()=>[ye,e(w,{class:"my-4 bg-light-blue-lighten-4"}),s("div",we,[xe,e(f,{color:"info",variant:"outlined"},{default:a(()=>[t(" Okay ")]),_:1})])]),_:1}),$e,e(l,{color:"primary",icon:"mdi-fire",title:"Outlined",variant:"outlined"},{default:a(()=>[t(" Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. Maecenas egestas arcu quis ligula mattis placerat. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. ")]),_:1}),Ae,e(l,{border:"start",color:"success",density:"compact",icon:"mdi-clock-fast",title:"Contained"},{default:a(()=>[t(" Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur at lacus ac velit ornare lobortis. ")]),_:1}),ke,e(l,{icon:"mdi-cloud-alert",prominent:"",title:"Text",type:"error",variant:"text"},{default:a(()=>[t(" Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Duis leo. ")]),_:1}),Ie,e(l,{color:"orange",density:"compact",icon:"mdi-note",prominent:"",title:"Plain",variant:"plain"},{default:a(()=>[t(" Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur at lacus ac velit ornare lobortis. ")]),_:1})])])}var qe=u(he,[["render",Ve]]);const Ce={},Te=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," The rounded prop will add or remove border-radius to the alert. Similar to other styled props, rounded can be combined with other props like density, prominent, and variant to create a unique and customized component. ",-1),Ne={class:"mt-4"},Pe=s("br",null,null,-1),Be=s("br",null,null,-1),De=s("br",null,null,-1);function Fe(i,o){return n(),r("div",null,[Te,s("div",Ne,[e(l,{rounded:"0",type:"info",title:"Info"},{default:a(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1}),Pe,e(l,{rounded:"xl",variant:"outlined",title:"Success",type:"success"},{default:a(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1}),Be,e(l,{title:"Warning",rounded:"pill",type:"warning",prominent:""},{default:a(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1}),De,e(l,{title:"Error",prominent:"",rounded:"t-xl b-lg",type:"error"},{default:a(()=>[t(" I'm an alert with no rounded borders. Lorem ipsum dolor sit. ")]),_:1})])])}var Se=u(Ce,[["render",Fe]]);const Ee=g({__name:"Alerts",setup(i){const o=_({title:"Alert"}),h=_([{text:"Ui Components",disabled:!1,to:"#"},{text:"Alert",disabled:!0}]);return(m,p)=>(n(),r($,null,[e(v,{title:o.value.title,breadcrumbs:h.value},null,8,["title","breadcrumbs"]),e(x,null,{default:a(()=>[e(d,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(c,{heading:"Alert - Type"},{default:a(()=>[e(q)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(c,{heading:"Alert - Border"},{default:a(()=>[e(B)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(c,{heading:"Alert - Coloured Border"},{default:a(()=>[e(M)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(c,{heading:"Alert - Density"},{default:a(()=>[e(K)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(c,{heading:"Alert - Closable"},{default:a(()=>[e(ee)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(c,{heading:"Alert - Icon"},{default:a(()=>[e(oe)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(c,{heading:"Alert - Outlined"},{default:a(()=>[e(de)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:a(()=>[e(c,{heading:"Alert - Prominent"},{default:a(()=>[e(fe)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:a(()=>[e(c,{heading:"Alert - Variant"},{default:a(()=>[e(qe)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:a(()=>[e(c,{heading:"Alert - Rounded"},{default:a(()=>[e(Se)]),_:1})]),_:1})]),_:1})],64))}});export{Ee as default};
