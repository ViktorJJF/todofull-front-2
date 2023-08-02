import{_ as r,r as u,o as d,f as i,j as l,b as e,a as t,F as _,d as n,e as x,g,v as y,w as s,u as $}from"./index-7cedc233.js";import{B as w}from"./BaseBreadcrumb-dcb397dc.js";import{B as m}from"./BaseCard-acda8ab2.js";const k={},C=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),n(" has "),e("code",null,"loading"),n(" state which can be used, e.g. for data loading indication. Note: "),e("code",null,"v-text-field"),n(" is used just for example. ")],-1),S={class:"mt-4"};function E(p,c){const o=u("v-text-field");return d(),i(_,null,[l(" ----------------------------------------------------------------------------- "),l(" Loading "),l(" ----------------------------------------------------------------------------- "),e("div",null,[C,e("div",S,[t(o,{color:"success",loading:"",disabled:""})])])],2112)}const j=r(k,[["render",E],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/inputs/InputLoading.vue"]]),D=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),n(" can have "),e("code",null,"hint"),n(" which can tell user how to use the input. "),e("code",null,"persistent-hint"),n(" prop makes the hint visible always if no messages are displayed. ")],-1),M={class:"mt-4"},T=x({__name:"InputHint",setup(p){const c=g(!1),o=y(()=>c.value?["Message"]:void 0);return(v,f)=>{const a=u("v-switch"),h=u("v-input"),b=u("v-row");return d(),i(_,null,[l(" ----------------------------------------------------------------------------- "),l(" Hint "),l(" ----------------------------------------------------------------------------- "),e("div",null,[D,e("div",M,[t(b,null,{default:s(()=>[t(a,{modelValue:c.value,"onUpdate:modelValue":f[0]||(f[0]=I=>c.value=I),label:"Show messages"},null,8,["modelValue"]),t(h,{hint:"I am hint","persistent-hint":"",messages:$(o)},{default:s(()=>[n("Input")]),_:1},8,["messages"])]),_:1})])])],2112)}}}),V=r(T,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/inputs/InputHint.vue"]]),B={},F=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" As any validatable Vuetify component, "),e("code",null,"v-input"),n(" can be set to success state using "),e("code",null,"success"),n(" prop, you can add message to it using "),e("code",null,"success-messages"),n(" prop. ")],-1),N={class:"mt-4"};function A(p,c){const o=u("v-input");return d(),i(_,null,[l(" ----------------------------------------------------------------------------- "),l(" Success "),l(" ----------------------------------------------------------------------------- "),e("div",null,[F,e("div",N,[t(o,{"success-messages":["Success"],success:"",disabled:""},{default:s(()=>[n("Input")]),_:1})])])],2112)}const R=r(B,[["render",A],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/inputs/InputSuccess.vue"]]),H={},L=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" As any validatable Vuetify component, "),e("code",null,"v-input"),n(" can be set to error state using "),e("code",null,"error"),n(" prop, messages can be added using "),e("code",null,"error-messages"),n(" prop. You can determine error messages count to show using "),e("code",null,"error-count"),n(" property. ")],-1),Y={class:"mt-4"};function z(p,c){const o=u("v-input");return d(),i(_,null,[l(" ----------------------------------------------------------------------------- "),l(" error "),l(" ----------------------------------------------------------------------------- "),e("div",null,[L,e("div",Y,[t(o,{"error-messages":["Fatal error"],error:"",disabled:""},{default:s(()=>[n("Input")]),_:1})])])],2112)}const Z=r(H,[["render",z],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/inputs/InputError.vue"]]),q={},U=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" You can add multiple errors to "),e("code",null,"v-input"),n(" using "),e("code",null,"error-count"),n(" property. ")],-1),W={class:"mt-4"};function G(p,c){const o=u("v-input");return d(),i(_,null,[l(" ----------------------------------------------------------------------------- "),l(" Multiple Errors "),l(" ----------------------------------------------------------------------------- "),e("div",null,[U,e("div",W,[t(o,{"error-count":"2","error-messages":["Fatal error","Another error"],error:"",disabled:""},{default:s(()=>[n("Input")]),_:1})])])],2112)}const J=r(q,[["render",G],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/inputs/InputMultipleErrors.vue"]]),K=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" You can add custom validation rules to "),e("code",null,"v-input"),n(", add them as functions returning "),e("code",null,"true"),n("/error message. Note: "),e("code",null,"v-text-field"),n(" is used just for example. ")],-1),O={class:"mt-4"},P=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[n(" When "),e("code",null,"hide-details"),n(" is set to "),e("code",null,"auto"),n(" messages will be rendered only if there's a message (hint, error message etc) to display. ")],-1),Q={class:"mt-4"},X=x({__name:"InputRules",setup(p){const c=g([o=>!!o||"Required.",o=>o&&o.length>=3||"Min 3 characters",o=>(o||"").length<=20||"Max 20 characters",o=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)||"Invalid e-mail."]);return(o,v)=>{const f=u("v-text-field");return d(),i(_,null,[l(" ----------------------------------------------------------------------------- "),l(" Rules "),l(" ----------------------------------------------------------------------------- "),e("div",null,[K,e("div",O,[t(f,{rules:c.value},null,8,["rules"])]),P,e("div",Q,[e("div",null,[t(f,{label:"Main input",rules:c.value,"hide-details":"auto"},null,8,["rules"]),t(f,{label:"Another input"})])])])],2112)}}}),ee=r(X,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/inputs/InputRules.vue"]]),te={},ne=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),n(" has "),e("code",null,"append"),n(" and "),e("code",null,"prepend"),n(" slots. You can place custom icons in them. ")],-1),se={class:"mt-4"};function oe(p,c){const o=u("v-icon"),v=u("v-text-field");return d(),i(_,null,[l(" ----------------------------------------------------------------------------- "),l(" Slots "),l(" ----------------------------------------------------------------------------- "),e("div",null,[ne,e("div",se,[t(v,null,{append:s(()=>[t(o,{color:"red"},{default:s(()=>[n(" mdi-plus ")]),_:1})]),prepend:s(()=>[t(o,{color:"green"},{default:s(()=>[n(" mdi-minus ")]),_:1})]),_:1})])])],2112)}const le=r(te,[["render",oe],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/inputs/InputSlots.vue"]]);const ue=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),n(" can have "),e("code",null,"click:append"),n(" and click:prepend events for its slots. Note: "),e("code",null,"v-text-field"),n(" is used just for example. ")],-1),ce={class:"mt-4"},ae=x({__name:"InputSlotEvents",setup(p){g("");function c(){alert("click:append")}function o(){alert("click:prepend")}return(v,f)=>{const a=u("v-input"),h=u("v-col"),b=u("v-row"),I=u("v-container");return d(),i(_,null,[l(" ----------------------------------------------------------------------------- "),l(" Slot Events "),l(" ----------------------------------------------------------------------------- "),e("div",null,[ue,e("div",ce,[t(I,{id:"input-usage",fluid:""},{default:s(()=>[t(b,null,{default:s(()=>[t(h,{cols:"12"},{default:s(()=>[t(a,{messages:["Messages"],"append-icon":"mdi-window-close","prepend-icon":"mdi-phone","onClick:append":c,"onClick:prepend":o},{default:s(()=>[n(" Default Slot ")]),_:1})]),_:1})]),_:1})]),_:1})])])],2112)}}}),re=r(ae,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/inputs/InputSlotEvents.vue"]]),de=x({__name:"FEInputs",setup(p){const c=g({title:"Inputs"}),o=g([{text:"Form Elements",disabled:!1,to:"#"},{text:"Inputs",disabled:!0}]);return(v,f)=>{const a=u("v-col"),h=u("v-row");return d(),i(_,null,[t(w,{title:c.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),t(h,null,{default:s(()=>[t(a,{cols:"12",sm:"12"},{default:s(()=>[t(m,{heading:"Inputs - Loading"},{default:s(()=>[t(j)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:s(()=>[t(m,{heading:"Inputs - Hint"},{default:s(()=>[t(V)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:s(()=>[t(m,{heading:"Inputs - Success"},{default:s(()=>[t(R)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:s(()=>[t(m,{heading:"Inputs - Error"},{default:s(()=>[t(Z)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:s(()=>[t(m,{heading:"Inputs - Multiple errors"},{default:s(()=>[t(J)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:s(()=>[t(m,{heading:"Inputs - Rules"},{default:s(()=>[t(ee)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:s(()=>[t(m,{heading:"Inputs - Slots"},{default:s(()=>[t(le)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:s(()=>[t(m,{heading:"Inputs - Slot events"},{default:s(()=>[t(re)]),_:1})]),_:1})]),_:1})],64)}}}),fe=r(de,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/form-elements/FEInputs.vue"]]);export{fe as default};
