import{_ as I}from"./BaseBreadcrumb.fb6d4da3.js";import{_ as d}from"./BaseCard.8fa7a275.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,n as u,f as e,a as t,j as i,h as s,m as g,r as _,Z as $,w as n,bj as y,bL as m,u as k,e as v,l as x,b as o,V,F as w}from"./index.ef9cfdf3.js";const S={},C=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),s(" has "),e("code",null,"loading"),s(" state which can be used, e.g. for data loading indication. Note: "),e("code",null,"v-text-field"),s(" is used just for example. ")],-1),E={class:"mt-4"};function M(c,l){return r(),u("div",null,[C,e("div",E,[t(i,{color:"success",loading:"",disabled:""})])])}var F=p(S,[["render",M]]);const A=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),s(" can have "),e("code",null,"hint"),s(" which can tell user how to use the input. "),e("code",null,"persistent-hint"),s(" prop makes the hint visible always if no messages are displayed. ")],-1),N={class:"mt-4"},j=g({__name:"InputHint",setup(c){const l=_(!1),a=$(()=>l.value?["Message"]:void 0);return(f,h)=>(r(),u("div",null,[A,e("div",N,[t(v,null,{default:n(()=>[t(y,{modelValue:l.value,"onUpdate:modelValue":h[0]||(h[0]=b=>l.value=b),label:"Show messages"},null,8,["modelValue"]),t(m,{hint:"I am hint","persistent-hint":"",messages:k(a)},{default:n(()=>[s("Input")]),_:1},8,["messages"])]),_:1})])]))}}),R={},Y=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" As any validatable Vuetify component, "),e("code",null,"v-input"),s(" can be set to success state using "),e("code",null,"success"),s(" prop, you can add message to it using "),e("code",null,"success-messages"),s(" prop. ")],-1),B={class:"mt-4"};function L(c,l){return r(),u("div",null,[Y,e("div",B,[t(m,{"success-messages":["Success"],success:"",disabled:""},{default:n(()=>[s("Input")]),_:1})])])}var Z=p(R,[["render",L]]);const z={},H=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" As any validatable Vuetify component, "),e("code",null,"v-input"),s(" can be set to error state using "),e("code",null,"error"),s(" prop, messages can be added using "),e("code",null,"error-messages"),s(" prop. You can determine error messages count to show using "),e("code",null,"error-count"),s(" property. ")],-1),T={class:"mt-4"};function q(c,l){return r(),u("div",null,[H,e("div",T,[t(m,{"error-messages":["Fatal error"],error:"",disabled:""},{default:n(()=>[s("Input")]),_:1})])])}var D=p(z,[["render",q]]);const U={},W=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" You can add multiple errors to "),e("code",null,"v-input"),s(" using "),e("code",null,"error-count"),s(" property. ")],-1),G={class:"mt-4"};function J(c,l){return r(),u("div",null,[W,e("div",G,[t(m,{"error-count":"2","error-messages":["Fatal error","Another error"],error:"",disabled:""},{default:n(()=>[s("Input")]),_:1})])])}var K=p(U,[["render",J]]);const O=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" You can add custom validation rules to "),e("code",null,"v-input"),s(", add them as functions returning "),e("code",null,"true"),s("/error message. Note: "),e("code",null,"v-text-field"),s(" is used just for example. ")],-1),P={class:"mt-4"},Q=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" When "),e("code",null,"hide-details"),s(" is set to "),e("code",null,"auto"),s(" messages will be rendered only if there's a message (hint, error message etc) to display. ")],-1),X={class:"mt-4"},ee=g({__name:"InputRules",setup(c){const l=_([a=>!!a||"Required.",a=>a&&a.length>=3||"Min 3 characters",a=>(a||"").length<=20||"Max 20 characters",a=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)||"Invalid e-mail."]);return(a,f)=>(r(),u("div",null,[O,e("div",P,[t(i,{rules:l.value},null,8,["rules"])]),Q,e("div",X,[e("div",null,[t(i,{label:"Main input",rules:l.value,"hide-details":"auto"},null,8,["rules"]),t(i,{label:"Another input"})])])]))}}),te={},se=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),s(" has "),e("code",null,"append"),s(" and "),e("code",null,"prepend"),s(" slots. You can place custom icons in them. ")],-1),ne={class:"mt-4"};function le(c,l){return r(),u("div",null,[se,e("div",ne,[t(i,null,{append:n(()=>[t(x,{color:"red"},{default:n(()=>[s(" mdi-plus ")]),_:1})]),prepend:n(()=>[t(x,{color:"green"},{default:n(()=>[s(" mdi-minus ")]),_:1})]),_:1})])])}var ae=p(te,[["render",le]]);const oe=e("p",{class:"text-subtitle-1 text-grey-darken-1"},[e("code",null,"v-input"),s(" can have "),e("code",null,"click:append"),s(" and click:prepend events for its slots. Note: "),e("code",null,"v-text-field"),s(" is used just for example. ")],-1),re={class:"mt-4"},ue=g({__name:"InputSlotEvents",setup(c){_("");function l(){alert("click:append")}function a(){alert("click:prepend")}return(f,h)=>(r(),u("div",null,[oe,e("div",re,[t(V,{id:"input-usage",fluid:""},{default:n(()=>[t(v,null,{default:n(()=>[t(o,{cols:"12"},{default:n(()=>[t(m,{messages:["Messages"],"append-icon":"mdi-window-close","prepend-icon":"mdi-phone","onClick:append":l,"onClick:prepend":a},{default:n(()=>[s(" Default Slot ")]),_:1})]),_:1})]),_:1})]),_:1})])]))}}),pe=g({__name:"FEInputs",setup(c){const l=_({title:"Inputs"}),a=_([{text:"Form Elements",disabled:!1,to:"#"},{text:"Inputs",disabled:!0}]);return(f,h)=>(r(),u(w,null,[t(I,{title:l.value.title,breadcrumbs:a.value},null,8,["title","breadcrumbs"]),t(v,null,{default:n(()=>[t(o,{cols:"12",sm:"12"},{default:n(()=>[t(d,{heading:"Inputs - Loading"},{default:n(()=>[t(F)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12"},{default:n(()=>[t(d,{heading:"Inputs - Hint"},{default:n(()=>[t(j)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12"},{default:n(()=>[t(d,{heading:"Inputs - Success"},{default:n(()=>[t(Z)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12"},{default:n(()=>[t(d,{heading:"Inputs - Error"},{default:n(()=>[t(D)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12"},{default:n(()=>[t(d,{heading:"Inputs - Multiple errors"},{default:n(()=>[t(K)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12"},{default:n(()=>[t(d,{heading:"Inputs - Rules"},{default:n(()=>[t(ee)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12"},{default:n(()=>[t(d,{heading:"Inputs - Slots"},{default:n(()=>[t(ae)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12"},{default:n(()=>[t(d,{heading:"Inputs - Slot events"},{default:n(()=>[t(ue)]),_:1})]),_:1})]),_:1})],64))}});export{pe as default};