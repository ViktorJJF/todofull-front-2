import{_ as B}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-cbe058b9.js";import{_ as h}from"./BaseCard.vue_vue_type_script_setup_true_lang-08e0cb31.js";import{e as x,g as _,r as u,o as p,f,b as a,a as e,w as l,d as t,t as w,v as C,c as E,u as y,B as F,p as N,F as A}from"./index-3fba6ee6.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const O=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You can set "),a("code",null,"min"),t(" and "),a("code",null,"max"),t(" values of sliders. ")],-1),P={class:"mt-4"},L=x({__name:"SlidersMinMax",setup(b){const s=_(-50),n=_(90),c=_(40);return(d,o)=>{const i=u("v-subheader"),r=u("v-slider"),v=u("v-text-field"),m=u("v-col"),V=u("v-row");return p(),f("div",null,[O,a("div",P,[e(i,null,{default:l(()=>[t("Min and max default slider")]),_:1}),e(V,null,{default:l(()=>[e(m,{class:"pr-4"},{default:l(()=>[e(r,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=g=>c.value=g),class:"align-center",max:n.value,min:s.value,"hide-details":""},null,8,["modelValue","max","min"]),e(v,{dense:"",label:"set Value",type:"number",modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=g=>c.value=g)},null,8,["modelValue"])]),_:1})]),_:1})])])}}}),W={},j=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You cannot interact with "),a("code",null,"disabled"),t(" sliders. ")],-1),H={class:"mt-4"};function q(b,s){const n=u("v-slider");return p(),f("div",null,[j,a("div",H,[e(n,{disabled:"",label:"Disabled",value:"30"})])])}const G=$(W,[["render",q]]),J={},K=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," You cannot interact with readonly sliders, but they look as ordinary ones. ",-1),Q={class:"mt-4"};function X(b,s){const n=u("v-slider");return p(),f("div",null,[K,a("div",Q,[e(n,{readonly:"",label:"Readonly",value:"30"})])])}const Z=$(J,[["render",X]]),ee=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You can add icons to the slider with the "),a("code",null,"append-icon"),t(" and "),a("code",null,"prepend-icon"),t(" props. With "),a("code",null,"@click:append"),t(" and "),a("code",null,"@click:prepend"),t(" you can trigger a callback function when click the icon. ")],-1),le={class:"mt-4"},te=x({__name:"SlidersIcons",setup(b){const s=_(0),n=_(0),c=_(0);function d(){c.value=c.value-10||0}function o(){c.value=c.value+10||100}return(i,r)=>{const v=u("v-subheader"),m=u("v-slider"),V=u("v-card-text");return p(),f("div",null,[ee,a("div",le,[e(v,null,{default:l(()=>[t("Media volume")]),_:1}),e(V,null,{default:l(()=>[e(m,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=g=>s.value=g),"prepend-icon":"mdi-volume-high"},null,8,["modelValue"])]),_:1}),e(v,null,{default:l(()=>[t("Alarm volume")]),_:1}),e(V,null,{default:l(()=>[e(m,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=g=>n.value=g),"append-icon":"mdi-alarm"},null,8,["modelValue"])]),_:1}),e(v,null,{default:l(()=>[t("Icon click callback")]),_:1}),e(V,null,{default:l(()=>[e(m,{modelValue:c.value,"onUpdate:modelValue":r[2]||(r[2]=g=>c.value=g),"append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline","onClick:append":o,"onClick:prepend":d},null,8,["modelValue"])]),_:1})])])}}}),ae=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You can use "),a("code",null,"vertical"),t(" to switch sliders to a vertical orientation. If you need to change the height of the slider, use css. ")],-1),oe={class:"mt-4"},ne=x({__name:"SlidersVertical",setup(b){const s=_(10),n=_([20,40]);return(c,d)=>{const o=u("v-slider"),i=u("v-range-slider");return p(),f("div",null,[ae,a("div",oe,[e(o,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=r=>s.value=r),vertical:"",label:"Regular"},null,8,["modelValue"]),e(i,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=r=>n.value=r),vertical:"",label:"Range"},null,8,["modelValue"])])])}}}),se=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You can display a "),a("code",null,"thumb-label"),t(" while sliding or always. It It can have a custom color by setting "),a("code",null,"thumb-color"),t(" and a custom size with "),a("code",null,"thumb-size"),t(". With "),a("code",null,"always-dirty"),t(" its color will never change, even when on "),a("code",null,"min"),t(" value. ")],-1),ue={class:"mt-4"},de=x({__name:"SlidersThumb",setup(b){const s=_(["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"]),n=_(45);return(c,d)=>{const o=u("v-subheader"),i=u("v-slider"),r=u("v-col"),v=u("v-row");return p(),f("div",null,[se,a("div",ue,[e(v,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(o,{class:"pl-0"},{default:l(()=>[t("Show thumb when using slider")]),_:1}),e(i,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=m=>n.value=m),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(o,{class:"pl-0"},{default:l(()=>[t("Always show thumb label")]),_:1}),e(i,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=m=>n.value=m),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(o,{class:"pl-0"},{default:l(()=>[t("Custom thumb size")]),_:1}),e(i,{modelValue:n.value,"onUpdate:modelValue":d[2]||(d[2]=m=>n.value=m),"thumb-size":24,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(o,{class:"pl-0"},{default:l(()=>[t("Custom thumb label")]),_:1}),e(i,{modelValue:n.value,"onUpdate:modelValue":d[3]||(d[3]=m=>n.value=m),"thumb-size":24,"thumb-label":"always"},{"thumb-label":l(({value:m})=>[t(w(s.value[Math.min(Math.floor(m/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1})])])}}}),re={},ce=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[a("code",null,"v-slider"),t(" with "),a("code",null,"inverse-label"),t(" property displays label at the end of it. ")],-1),ie={class:"mt-4"};function _e(b,s){const n=u("v-slider");return p(),f("div",null,[ce,a("div",ie,[e(n,{"inverse-label":"",label:"Inverse label",value:"30"})])])}const me=$(re,[["render",_e]]),ve=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Tick marks represent predetermined values to which the user can move the slider. ",-1),pe={class:"mt-4"},fe=x({__name:"SlidersTicks",setup(b){const s=_({0:"Figs",1:"Lemon",2:"Pear",3:"Apple"});return(n,c)=>{const d=u("v-subheader"),o=u("v-slider");return p(),f("div",null,[ve,a("div",pe,[e(d,null,{default:l(()=>[t("Show ticks when using slider")]),_:1}),e(o,{step:"10"}),e(d,null,{default:l(()=>[t("Always show ticks")]),_:1}),e(o,{step:"10","show-ticks":"always"}),e(d,null,{default:l(()=>[t("Tick size")]),_:1}),e(o,{step:"10","show-ticks":"always","tick-size":"4"}),e(d,null,{default:l(()=>[t("Tick labels")]),_:1}),e(o,{ticks:s.value,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["ticks"])])])}}}),be=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You can set the colors of the slider using the props "),a("code",null,"color"),t(", "),a("code",null,"track-color"),t(" and "),a("code",null,"thumb-color"),t(". ")],-1),he={class:"mt-4"},ge=x({__name:"SlidersCustomcolors",setup(b){const s=_({label:"color",val:25,color:"orange darken-3"}),n=_({label:"track-color",val:75,color:"green lighten-1"}),c=_({label:"thumb-color",val:50,color:"red"});return(d,o)=>{const i=u("v-slider");return p(),f("div",null,[be,a("div",he,[e(i,{modelValue:s.value.val,"onUpdate:modelValue":o[0]||(o[0]=r=>s.value.val=r),color:s.value.color,label:s.value.label},null,8,["modelValue","color","label"]),e(i,{modelValue:n.value.val,"onUpdate:modelValue":o[1]||(o[1]=r=>n.value.val=r),label:n.value.label,"track-color":n.value.color},null,8,["modelValue","label","track-color"]),e(i,{modelValue:c.value.val,"onUpdate:modelValue":o[2]||(o[2]=r=>c.value.val=r),label:c.value.label,"thumb-color":c.value.color,"thumb-label":"always"},null,8,["modelValue","label","thumb-color"])])])}}}),xe=a("p",{class:"text-subtitle-1 text-grey-darken-1"},"Range sliders.",-1),Ve={class:"mt-4"},ye=x({__name:"SlidersRange",setup(b){const s=_([30,60]),n=_([30,60]);return(c,d)=>{const o=u("v-subheader"),i=u("v-range-slider"),r=u("v-card-text");return p(),f("div",null,[xe,a("div",Ve,[e(o,null,{default:l(()=>[t("Default range slider")]),_:1}),e(r,null,{default:l(()=>[e(i,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=v=>s.value=v)},null,8,["modelValue"])]),_:1}),e(o,null,{default:l(()=>[t("Disabled range slider")]),_:1}),e(r,null,{default:l(()=>[e(i,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=v=>n.value=v),disabled:""},null,8,["modelValue"])]),_:1})])])}}}),ke=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" Vuetify includes simple validation through the "),a("code",null,"rules"),t(" prop. The prop accepts an array of callbacks. While validating rules, the current v-model value will be passed to the callback. This callback should return either "),a("code",null,"true"),t(" or a "),a("code",null,"String"),t(", the error message. ")],-1),we={class:"mt-4"},$e=x({__name:"SlidersValidation",setup(b){const s=_(30),n=_([c=>c<="40"||"Only 40 in stock"]);return(c,d)=>{const o=u("v-subheader"),i=u("v-slider"),r=u("v-card-text");return p(),f("div",null,[ke,a("div",we,[e(o,null,{default:l(()=>[t("Rules")]),_:1}),e(r,{class:"pt-0"},{default:l(()=>[e(i,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=v=>s.value=v),rules:n.value,label:"How many?",step:"10","thumb-label":"always","show-ticks":"always"},null,8,["modelValue","rules"])]),_:1}),e(o,null,{default:l(()=>[t("Persistent hint")]),_:1}),e(r,{class:"pt-0"},{default:l(()=>[e(i,{modelValue:s.value,"onUpdate:modelValue":d[1]||(d[1]=v=>s.value=v),rules:n.value,hint:"40 in stock",label:"How many?","persistent-hint":"",step:"10","thumb-label":"always","show-ticks":"always"},null,8,["modelValue","rules"])]),_:1})])])}}}),Se=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" Use slots such as "),a("code",null,"prepend"),t(" and "),a("code",null,"append"),t(" to easily customize the "),a("code",null,"v-slider"),t(" to fit any situation. ")],-1),Ue={class:"mt-4"},Ce=a("span",{class:"subheading"},"METRONOME",-1),ze=["textContent"],Me=a("span",{class:"subheading font-weight-light mr-1"},"BPM",-1),Te=x({__name:"SlidersSlots",setup(b){const s=_(40);_(null);const n=_(!1),c=C(()=>s.value<100?"indigo":s.value<125?"teal":s.value<140?"green":s.value<175?"orange":"red"),d=C(()=>`${60/s.value}s`);function o(){s.value--}function i(){s.value++}function r(){n.value=!n.value}return(v,m)=>{const V=u("v-toolbar-title"),g=u("v-spacer"),k=u("v-icon"),S=u("v-btn"),z=u("v-toolbar"),M=u("v-avatar"),T=u("v-fade-transition"),U=u("v-col"),I=u("v-row"),R=u("v-slider"),D=u("v-card-text");return p(),f("template",null,[a("div",null,[Se,a("div",Ue,[e(z,{flat:"",dense:""},{default:l(()=>[e(V,null,{default:l(()=>[Ce]),_:1}),e(g),e(S,{icon:""},{default:l(()=>[e(k,null,{default:l(()=>[t("mdi-share-variant")]),_:1})]),_:1})]),_:1}),e(D,null,{default:l(()=>[e(I,{class:"mb-4",justify:"space-between"},{default:l(()=>[e(U,{class:"text-left"},{default:l(()=>[a("span",{class:"display-3 font-weight-light",textContent:w(s.value)},null,8,ze),Me,e(T,null,{default:l(()=>[n.value?(p(),E(M,{key:0,color:y(c),style:F({animationDuration:y(d)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):N("",!0)]),_:1})]),_:1}),e(U,{class:"text-right"},{default:l(()=>[e(S,{color:y(c),dark:"",depressed:"",fab:"",onClick:r},{default:l(()=>[e(k,{large:""},{default:l(()=>[t(w(n.value?"mdi-pause":"mdi-play"),1)]),_:1})]),_:1},8,["color"])]),_:1})]),_:1}),e(R,{modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=Y=>s.value=Y),color:y(c),"track-color":"grey","always-dirty":"",min:"40",max:"218"},{prepend:l(()=>[e(k,{color:y(c),onClick:o},{default:l(()=>[t(" mdi-minus ")]),_:1},8,["color"])]),append:l(()=>[e(k,{color:y(c),onClick:i},{default:l(()=>[t(" mdi-plus ")]),_:1},8,["color"])]),_:1},8,["modelValue","color"])]),_:1})])])])}}});const Be=x({__name:"FESliders",setup(b){const s=_({title:"Sliders"}),n=_([{text:"Form Elements",disabled:!1,to:"#"},{text:"Sliders",disabled:!0}]);return(c,d)=>{const o=u("v-col"),i=u("v-row");return p(),f(A,null,[e(B,{title:s.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),e(i,null,{default:l(()=>[e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Min & Max values"},{default:l(()=>[e(L)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Disabled"},{default:l(()=>[e(G)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Readonly"},{default:l(()=>[e(Z)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Icons"},{default:l(()=>[e(te)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Vertical sliders"},{default:l(()=>[e(ne)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Thumb"},{default:l(()=>[e(de)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Inverse label"},{default:l(()=>[e(me)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Ticks"},{default:l(()=>[e(fe)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Custom colors"},{default:l(()=>[e(ge)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Range"},{default:l(()=>[e(ye)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Validation"},{default:l(()=>[e($e)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12"},{default:l(()=>[e(h,{heading:"Sliders - Slots"},{default:l(()=>[e(Te)]),_:1})]),_:1})]),_:1})],64)}}});export{Be as default};
