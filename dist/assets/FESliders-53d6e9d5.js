import{_ as b,e as V,g as m,r as u,o as f,f as h,j as d,b as t,a as e,w as l,d as o,F as S,t as C,v as U,c as E,u as w,D as Y}from"./index-0698fb5b.js";import{B as A}from"./BaseBreadcrumb-725f63b9.js";import{B as y}from"./BaseCard-acb94b2d.js";const L=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" You can set "),t("code",null,"min"),o(" and "),t("code",null,"max"),o(" values of sliders. ")],-1),N={class:"mt-4"},O=V({__name:"SlidersMinMax",setup(g){const a=m(-50),n=m(90),c=m(40);return(r,s)=>{const _=u("v-subheader"),i=u("v-slider"),p=u("v-text-field"),v=u("v-col"),k=u("v-row");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersMinMax "),d(" ----------------------------------------------------------------------------- "),t("div",null,[L,t("div",N,[e(_,null,{default:l(()=>[o("Min and max default slider")]),_:1}),e(k,null,{default:l(()=>[e(v,{class:"pr-4"},{default:l(()=>[e(i,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=x=>c.value=x),class:"align-center",max:n.value,min:a.value,"hide-details":""},null,8,["modelValue","max","min"]),e(p,{dense:"",label:"set Value",type:"number",modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=x=>c.value=x)},null,8,["modelValue"])]),_:1})]),_:1})])])],2112)}}}),P=b(O,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersMinMax.vue"]]),W={},H=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" You cannot interact with "),t("code",null,"disabled"),o(" sliders. ")],-1),q={class:"mt-4"};function G(g,a){const n=u("v-slider");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersDisabled "),d(" ----------------------------------------------------------------------------- "),t("div",null,[H,t("div",q,[e(n,{disabled:"",label:"Disabled",value:"30"})])])],2112)}const J=b(W,[["render",G],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersDisabled.vue"]]),K={},Q=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," You cannot interact with readonly sliders, but they look as ordinary ones. ",-1),X={class:"mt-4"};function Z(g,a){const n=u("v-slider");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersReadonly "),d(" ----------------------------------------------------------------------------- "),t("div",null,[Q,t("div",X,[e(n,{readonly:"",label:"Readonly",value:"30"})])])],2112)}const ee=b(K,[["render",Z],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersReadonly.vue"]]),le=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" You can add icons to the slider with the "),t("code",null,"append-icon"),o(" and "),t("code",null,"prepend-icon"),o(" props. With "),t("code",null,"@click:append"),o(" and "),t("code",null,"@click:prepend"),o(" you can trigger a callback function when click the icon. ")],-1),te={class:"mt-4"},oe=V({__name:"SlidersIcons",setup(g){const a=m(0),n=m(0),c=m(0);function r(){c.value=c.value-10||0}function s(){c.value=c.value+10||100}return(_,i)=>{const p=u("v-subheader"),v=u("v-slider"),k=u("v-card-text");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersIcons "),d(" ----------------------------------------------------------------------------- "),t("div",null,[le,t("div",te,[e(p,null,{default:l(()=>[o("Media volume")]),_:1}),e(k,null,{default:l(()=>[e(v,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=x=>a.value=x),"prepend-icon":"mdi-volume-high"},null,8,["modelValue"])]),_:1}),e(p,null,{default:l(()=>[o("Alarm volume")]),_:1}),e(k,null,{default:l(()=>[e(v,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=x=>n.value=x),"append-icon":"mdi-alarm"},null,8,["modelValue"])]),_:1}),e(p,null,{default:l(()=>[o("Icon click callback")]),_:1}),e(k,null,{default:l(()=>[e(v,{modelValue:c.value,"onUpdate:modelValue":i[2]||(i[2]=x=>c.value=x),"append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline","onClick:append":s,"onClick:prepend":r},null,8,["modelValue"])]),_:1})])])],2112)}}}),se=b(oe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersIcons.vue"]]),ne=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" You can use "),t("code",null,"vertical"),o(" to switch sliders to a vertical orientation. If you need to change the height of the slider, use css. ")],-1),ae={class:"mt-4"},ue=V({__name:"SlidersVertical",setup(g){const a=m(10),n=m([20,40]);return(c,r)=>{const s=u("v-slider"),_=u("v-range-slider");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersVertical "),d(" ----------------------------------------------------------------------------- "),t("div",null,[ne,t("div",ae,[e(s,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=i=>a.value=i),vertical:"",label:"Regular"},null,8,["modelValue"]),e(_,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=i=>n.value=i),vertical:"",label:"Range"},null,8,["modelValue"])])])],2112)}}}),de=b(ue,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersVertical.vue"]]),re=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" You can display a "),t("code",null,"thumb-label"),o(" while sliding or always. It It can have a custom color by setting "),t("code",null,"thumb-color"),o(" and a custom size with "),t("code",null,"thumb-size"),o(". With "),t("code",null,"always-dirty"),o(" its color will never change, even when on "),t("code",null,"min"),o(" value. ")],-1),ie={class:"mt-4"},ce=V({__name:"SlidersThumb",setup(g){const a=m(["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"]),n=m(45);return(c,r)=>{const s=u("v-subheader"),_=u("v-slider"),i=u("v-col"),p=u("v-row");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersThumb "),d(" ----------------------------------------------------------------------------- "),t("div",null,[re,t("div",ie,[e(p,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(s,{class:"pl-0"},{default:l(()=>[o("Show thumb when using slider")]),_:1}),e(_,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=v=>n.value=v),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{class:"pl-0"},{default:l(()=>[o("Always show thumb label")]),_:1}),e(_,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=v=>n.value=v),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{class:"pl-0"},{default:l(()=>[o("Custom thumb size")]),_:1}),e(_,{modelValue:n.value,"onUpdate:modelValue":r[2]||(r[2]=v=>n.value=v),"thumb-size":24,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{class:"pl-0"},{default:l(()=>[o("Custom thumb label")]),_:1}),e(_,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=v=>n.value=v),"thumb-size":24,"thumb-label":"always"},{"thumb-label":l(({value:v})=>[o(C(a.value[Math.min(Math.floor(v/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1})])])],2112)}}}),_e=b(ce,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersThumb.vue"]]),me={},ve=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[t("code",null,"v-slider"),o(" with "),t("code",null,"inverse-label"),o(" property displays label at the end of it. ")],-1),pe={class:"mt-4"};function fe(g,a){const n=u("v-slider");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersInverseLabel "),d(" ----------------------------------------------------------------------------- "),t("div",null,[ve,t("div",pe,[e(n,{"inverse-label":"",label:"Inverse label",value:"30"})])])],2112)}const be=b(me,[["render",fe],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersInverseLabel.vue"]]),he=t("p",{class:"text-subtitle-1 text-grey-darken-1"}," Tick marks represent predetermined values to which the user can move the slider. ",-1),ge={class:"mt-4"},ye=V({__name:"SlidersTicks",setup(g){const a=m({0:"Figs",1:"Lemon",2:"Pear",3:"Apple"});return(n,c)=>{const r=u("v-subheader"),s=u("v-slider");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersTicks "),d(" ----------------------------------------------------------------------------- "),t("div",null,[he,t("div",ge,[e(r,null,{default:l(()=>[o("Show ticks when using slider")]),_:1}),e(s,{step:"10"}),e(r,null,{default:l(()=>[o("Always show ticks")]),_:1}),e(s,{step:"10","show-ticks":"always"}),e(r,null,{default:l(()=>[o("Tick size")]),_:1}),e(s,{step:"10","show-ticks":"always","tick-size":"4"}),e(r,null,{default:l(()=>[o("Tick labels")]),_:1}),e(s,{ticks:a.value,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["ticks"])])])],2112)}}}),Se=b(ye,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersTicks.vue"]]),xe=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" You can set the colors of the slider using the props "),t("code",null,"color"),o(", "),t("code",null,"track-color"),o(" and "),t("code",null,"thumb-color"),o(". ")],-1),Ve={class:"mt-4"},ke=V({__name:"SlidersCustomcolors",setup(g){const a=m({label:"color",val:25,color:"orange darken-3"}),n=m({label:"track-color",val:75,color:"green lighten-1"}),c=m({label:"thumb-color",val:50,color:"red"});return(r,s)=>{const _=u("v-slider");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersCustomcolors "),d(" ----------------------------------------------------------------------------- "),t("div",null,[xe,t("div",Ve,[e(_,{modelValue:a.value.val,"onUpdate:modelValue":s[0]||(s[0]=i=>a.value.val=i),color:a.value.color,label:a.value.label},null,8,["modelValue","color","label"]),e(_,{modelValue:n.value.val,"onUpdate:modelValue":s[1]||(s[1]=i=>n.value.val=i),label:n.value.label,"track-color":n.value.color},null,8,["modelValue","label","track-color"]),e(_,{modelValue:c.value.val,"onUpdate:modelValue":s[2]||(s[2]=i=>c.value.val=i),label:c.value.label,"thumb-color":c.value.color,"thumb-label":"always"},null,8,["modelValue","label","thumb-color"])])])],2112)}}}),we=b(ke,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersCustomcolors.vue"]]),$e=t("p",{class:"text-subtitle-1 text-grey-darken-1"},"Range sliders.",-1),Ce={class:"mt-4"},Te=V({__name:"SlidersRange",setup(g){const a=m([30,60]),n=m([30,60]);return(c,r)=>{const s=u("v-subheader"),_=u("v-range-slider"),i=u("v-card-text");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersRange "),d(" ----------------------------------------------------------------------------- "),t("div",null,[$e,t("div",Ce,[e(s,null,{default:l(()=>[o("Default range slider")]),_:1}),e(i,null,{default:l(()=>[e(_,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=p=>a.value=p)},null,8,["modelValue"])]),_:1}),e(s,null,{default:l(()=>[o("Disabled range slider")]),_:1}),e(i,null,{default:l(()=>[e(_,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=p=>n.value=p),disabled:""},null,8,["modelValue"])]),_:1})])])],2112)}}}),De=b(Te,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersRange.vue"]]),Ue=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" Vuetify includes simple validation through the "),t("code",null,"rules"),o(" prop. The prop accepts an array of callbacks. While validating rules, the current v-model value will be passed to the callback. This callback should return either "),t("code",null,"true"),o(" or a "),t("code",null,"String"),o(", the error message. ")],-1),Fe={class:"mt-4"},Me=V({__name:"SlidersValidation",setup(g){const a=m(30),n=m([c=>c<="40"||"Only 40 in stock"]);return(c,r)=>{const s=u("v-subheader"),_=u("v-slider"),i=u("v-card-text");return f(),h(S,null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersValidation "),d(" ----------------------------------------------------------------------------- "),t("div",null,[Ue,t("div",Fe,[e(s,null,{default:l(()=>[o("Rules")]),_:1}),e(i,{class:"pt-0"},{default:l(()=>[e(_,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=p=>a.value=p),rules:n.value,label:"How many?",step:"10","thumb-label":"always","show-ticks":"always"},null,8,["modelValue","rules"])]),_:1}),e(s,null,{default:l(()=>[o("Persistent hint")]),_:1}),e(i,{class:"pt-0"},{default:l(()=>[e(_,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=p=>a.value=p),rules:n.value,hint:"40 in stock",label:"How many?","persistent-hint":"",step:"10","thumb-label":"always","show-ticks":"always"},null,8,["modelValue","rules"])]),_:1})])])],2112)}}}),je=b(Me,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersValidation.vue"]]);const Ie=t("p",{class:"text-subtitle-1 text-grey-darken-1"},[o(" Use slots such as "),t("code",null,"prepend"),o(" and "),t("code",null,"append"),o(" to easily customize the "),t("code",null,"v-slider"),o(" to fit any situation. ")],-1),Re={class:"mt-4"},ze=t("span",{class:"subheading"},"METRONOME",-1),Be=["textContent"],Ee=t("span",{class:"subheading font-weight-light mr-1"},"BPM",-1),Ye=V({__name:"SlidersSlots",setup(g){const a=m(40);m(null);const n=m(!1),c=U(()=>a.value<100?"indigo":a.value<125?"teal":a.value<140?"green":a.value<175?"orange":"red"),r=U(()=>`${60/a.value}s`);function s(){a.value--}function _(){a.value++}function i(){n.value=!n.value}return(p,v)=>{const k=u("v-toolbar-title"),x=u("v-spacer"),$=u("v-icon"),T=u("v-btn"),F=u("v-toolbar"),M=u("v-avatar"),j=u("v-fade-transition"),D=u("v-col"),I=u("v-row"),R=u("v-slider"),z=u("v-card-text");return f(),h("template",null,[d(" ----------------------------------------------------------------------------- "),d(" SlidersSlots "),d(" ----------------------------------------------------------------------------- "),t("div",null,[Ie,t("div",Re,[e(F,{flat:"",dense:""},{default:l(()=>[e(k,null,{default:l(()=>[ze]),_:1}),e(x),e(T,{icon:""},{default:l(()=>[e($,null,{default:l(()=>[o("mdi-share-variant")]),_:1})]),_:1})]),_:1}),e(z,null,{default:l(()=>[e(I,{class:"mb-4",justify:"space-between"},{default:l(()=>[e(D,{class:"text-left"},{default:l(()=>[t("span",{class:"display-3 font-weight-light",textContent:C(a.value)},null,8,Be),Ee,e(j,null,{default:l(()=>[n.value?(f(),E(M,{key:0,color:w(c),style:Y({animationDuration:w(r)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):d("v-if",!0)]),_:1})]),_:1}),e(D,{class:"text-right"},{default:l(()=>[e(T,{color:w(c),dark:"",depressed:"",fab:"",onClick:i},{default:l(()=>[e($,{large:""},{default:l(()=>[o(C(n.value?"mdi-pause":"mdi-play"),1)]),_:1})]),_:1},8,["color"])]),_:1})]),_:1}),e(R,{modelValue:a.value,"onUpdate:modelValue":v[0]||(v[0]=B=>a.value=B),color:w(c),"track-color":"grey","always-dirty":"",min:"40",max:"218"},{prepend:l(()=>[e($,{color:w(c),onClick:s},{default:l(()=>[o(" mdi-minus ")]),_:1},8,["color"])]),append:l(()=>[e($,{color:w(c),onClick:_},{default:l(()=>[o(" mdi-plus ")]),_:1},8,["color"])]),_:1},8,["modelValue","color"])]),_:1})])])])}}}),Ae=b(Ye,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/sliders/SlidersSlots.vue"]]),Le=V({__name:"FESliders",setup(g){const a=m({title:"Sliders"}),n=m([{text:"Form Elements",disabled:!1,to:"#"},{text:"Sliders",disabled:!0}]);return(c,r)=>{const s=u("v-col"),_=u("v-row");return f(),h(S,null,[e(A,{title:a.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),e(_,null,{default:l(()=>[e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Min & Max values"},{default:l(()=>[e(P)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Disabled"},{default:l(()=>[e(J)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Readonly"},{default:l(()=>[e(ee)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Icons"},{default:l(()=>[e(se)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Vertical sliders"},{default:l(()=>[e(de)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Thumb"},{default:l(()=>[e(_e)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Inverse label"},{default:l(()=>[e(be)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Ticks"},{default:l(()=>[e(Se)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Custom colors"},{default:l(()=>[e(we)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Range"},{default:l(()=>[e(De)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Validation"},{default:l(()=>[e(je)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12"},{default:l(()=>[e(y,{heading:"Sliders - Slots"},{default:l(()=>[e(Ae)]),_:1})]),_:1})]),_:1})],64)}}}),We=b(Le,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-elements/FESliders.vue"]]);export{We as default};
