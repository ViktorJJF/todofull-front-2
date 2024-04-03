import{_ as b}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-c8bfd6cb.js";import{_}from"./BaseCard.vue_vue_type_script_setup_true_lang-ab056f81.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,f as r,b as e,a as t,d as s,e as h,g as f,v as $,w as n,u as I,F as y}from"./index-5b5a2bf9.js";const k={},w=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),s(" has "),e("code",null,"loading"),s(" state which can be used, e.g. for data loading indication. Note: "),e("code",null,"v-text-field"),s(" is used just for example. ")],-1),S={class:"mt-4"};function E(d,c){const o=l("v-text-field");return u(),r("div",null,[w,e("div",S,[t(o,{color:"success",loading:"",disabled:""})])])}const M=v(k,[["render",E]]),V=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),s(" can have "),e("code",null,"hint"),s(" which can tell user how to use the input. "),e("code",null,"persistent-hint"),s(" prop makes the hint visible always if no messages are displayed. ")],-1),C={class:"mt-4"},A=h({__name:"InputHint",setup(d){const c=f(!1),o=$(()=>c.value?["Message"]:void 0);return(p,i)=>{const a=l("v-switch"),m=l("v-input"),g=l("v-row");return u(),r("div",null,[V,e("div",C,[t(g,null,{default:n(()=>[t(a,{modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=x=>c.value=x),label:"Show messages"},null,8,["modelValue"]),t(m,{hint:"I am hint","persistent-hint":"",messages:I(o)},{default:n(()=>[s("Input")]),_:1},8,["messages"])]),_:1})])])}}}),F={},N=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" As any validatable Vuetify component, "),e("code",null,"v-input"),s(" can be set to success state using "),e("code",null,"success"),s(" prop, you can add message to it using "),e("code",null,"success-messages"),s(" prop. ")],-1),Y={class:"mt-4"};function j(d,c){const o=l("v-input");return u(),r("div",null,[N,e("div",Y,[t(o,{"success-messages":["Success"],success:"",disabled:""},{default:n(()=>[s("Input")]),_:1})])])}const B=v(F,[["render",j]]),R={},z=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" As any validatable Vuetify component, "),e("code",null,"v-input"),s(" can be set to error state using "),e("code",null,"error"),s(" prop, messages can be added using "),e("code",null,"error-messages"),s(" prop. You can determine error messages count to show using "),e("code",null,"error-count"),s(" property. ")],-1),H={class:"mt-4"};function L(d,c){const o=l("v-input");return u(),r("div",null,[z,e("div",H,[t(o,{"error-messages":["Fatal error"],error:"",disabled:""},{default:n(()=>[s("Input")]),_:1})])])}const Z=v(R,[["render",L]]),q={},D=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" You can add multiple errors to "),e("code",null,"v-input"),s(" using "),e("code",null,"error-count"),s(" property. ")],-1),T={class:"mt-4"};function U(d,c){const o=l("v-input");return u(),r("div",null,[D,e("div",T,[t(o,{"error-count":"2","error-messages":["Fatal error","Another error"],error:"",disabled:""},{default:n(()=>[s("Input")]),_:1})])])}const W=v(q,[["render",U]]),G=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" You can add custom validation rules to "),e("code",null,"v-input"),s(", add them as functions returning "),e("code",null,"true"),s("/error message. Note: "),e("code",null,"v-text-field"),s(" is used just for example. ")],-1),J={class:"mt-4"},K=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" When "),e("code",null,"hide-details"),s(" is set to "),e("code",null,"auto"),s(" messages will be rendered only if there's a message (hint, error message etc) to display. ")],-1),O={class:"mt-4"},P=h({__name:"InputRules",setup(d){const c=f([o=>!!o||"Required.",o=>o&&o.length>=3||"Min 3 characters",o=>(o||"").length<=20||"Max 20 characters",o=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)||"Invalid e-mail."]);return(o,p)=>{const i=l("v-text-field");return u(),r("div",null,[G,e("div",J,[t(i,{rules:c.value},null,8,["rules"])]),K,e("div",O,[e("div",null,[t(i,{label:"Main input",rules:c.value,"hide-details":"auto"},null,8,["rules"]),t(i,{label:"Another input"})])])])}}}),Q={},X=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),s(" has "),e("code",null,"append"),s(" and "),e("code",null,"prepend"),s(" slots. You can place custom icons in them. ")],-1),ee={class:"mt-4"};function te(d,c){const o=l("v-icon"),p=l("v-text-field");return u(),r("div",null,[X,e("div",ee,[t(p,null,{append:n(()=>[t(o,{color:"red"},{default:n(()=>[s(" mdi-plus ")]),_:1})]),prepend:n(()=>[t(o,{color:"green"},{default:n(()=>[s(" mdi-minus ")]),_:1})]),_:1})])])}const se=v(Q,[["render",te]]),ne=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),s(" can have "),e("code",null,"click:append"),s(" and click:prepend events for its slots. Note: "),e("code",null,"v-text-field"),s(" is used just for example. ")],-1),oe={class:"mt-4"},le=h({__name:"InputSlotEvents",setup(d){f("");function c(){alert("click:append")}function o(){alert("click:prepend")}return(p,i)=>{const a=l("v-input"),m=l("v-col"),g=l("v-row"),x=l("v-container");return u(),r("div",null,[ne,e("div",oe,[t(x,{id:"input-usage",fluid:""},{default:n(()=>[t(g,null,{default:n(()=>[t(m,{cols:"12"},{default:n(()=>[t(a,{messages:["Messages"],"append-icon":"mdi-window-close","prepend-icon":"mdi-phone","onClick:append":c,"onClick:prepend":o},{default:n(()=>[s(" Default Slot ")]),_:1})]),_:1})]),_:1})]),_:1})])])}}});const de=h({__name:"FEInputs",setup(d){const c=f({title:"Inputs"}),o=f([{text:"Form Elements",disabled:!1,to:"#"},{text:"Inputs",disabled:!0}]);return(p,i)=>{const a=l("v-col"),m=l("v-row");return u(),r(y,null,[t(b,{title:c.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),t(m,null,{default:n(()=>[t(a,{cols:"12",sm:"12"},{default:n(()=>[t(_,{heading:"Inputs - Loading"},{default:n(()=>[t(M)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:n(()=>[t(_,{heading:"Inputs - Hint"},{default:n(()=>[t(A)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:n(()=>[t(_,{heading:"Inputs - Success"},{default:n(()=>[t(B)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:n(()=>[t(_,{heading:"Inputs - Error"},{default:n(()=>[t(Z)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:n(()=>[t(_,{heading:"Inputs - Multiple errors"},{default:n(()=>[t(W)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:n(()=>[t(_,{heading:"Inputs - Rules"},{default:n(()=>[t(P)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:n(()=>[t(_,{heading:"Inputs - Slots"},{default:n(()=>[t(se)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:n(()=>[t(_,{heading:"Inputs - Slot events"},{default:n(()=>[t(le)]),_:1})]),_:1})]),_:1})],64)}}});export{de as default};
