import{_ as x,r as o,o as p,f as _,j as l,a as e,w as n,F as r,k as E,e as C,g,b as D,d as i,t as V}from"./index-d6b86b59.js";import{B as U}from"./BaseBreadcrumb-7e2fb8fb.js";import{B as b}from"./BaseCard-16034294.js";const h={};function I(v,s){const t=o("v-expansion-panel"),c=o("v-expansion-panels");return p(),_(r,null,[l(" ----------------------------------------------------------------------------- "),l(" Default "),l(" ----------------------------------------------------------------------------- "),e(c,null,{default:n(()=>[(p(),_(r,null,E(3,a=>e(t,{key:a,title:"Item",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})),64))]),_:1})],2112)}const k=x(h,[["render",I],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/expansionpanel/ExpansionDefault.vue"]]),P={};function $(v,s){const t=o("v-expansion-panel"),c=o("v-expansion-panels");return p(),_(r,null,[l(" ----------------------------------------------------------------------------- "),l(" Accordian "),l(" ----------------------------------------------------------------------------- "),e(c,{variant:"accordion"},{default:n(()=>[(p(),_(r,null,E(3,a=>e(t,{key:a,title:"Item",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})),64))]),_:1})],2112)}const L=x(P,[["render",$],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/expansionpanel/ExpansionAccordian.vue"]]),j={};function B(v,s){const t=o("v-expansion-panel"),c=o("v-expansion-panels");return p(),_(r,null,[l(" ----------------------------------------------------------------------------- "),l(" Inset "),l(" ----------------------------------------------------------------------------- "),e(c,{variant:"inset",class:"my-4"},{default:n(()=>[(p(),_(r,null,E(3,a=>e(t,{key:a,title:"Item",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})),64))]),_:1})],2112)}const T=x(j,[["render",B],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/expansionpanel/ExpansionInset.vue"]]),S={};function w(v,s){const t=o("v-expansion-panel"),c=o("v-expansion-panels");return p(),_(r,null,[l(" ----------------------------------------------------------------------------- "),l(" Popout "),l(" ----------------------------------------------------------------------------- "),e(c,{variant:"popout",class:"my-4"},{default:n(()=>[(p(),_(r,null,E(3,a=>e(t,{key:a,title:"Item",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})),64))]),_:1})],2112)}const R=x(S,[["render",w],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/expansionpanel/ExpansionPopout.vue"]]),A={class:"d-flex"},N=C({__name:"ExpansionDisabled",setup(v){const s=g([0,1]),t=g(!1);return g(!1),(c,a)=>{const u=o("v-checkbox"),m=o("v-expansion-panel-title"),d=o("v-expansion-panel-text"),f=o("v-expansion-panel"),y=o("v-expansion-panels");return p(),_(r,null,[l(" ----------------------------------------------------------------------------- "),l(" Disabled "),l(" ----------------------------------------------------------------------------- "),D("div",A,[e(u,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=q=>t.value=q),label:"Disabled"},null,8,["modelValue"])]),e(y,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=q=>s.value=q),disabled:t.value,multiple:""},{default:n(()=>[e(f,null,{default:n(()=>[e(m,null,{default:n(()=>[i("Panel 1")]),_:1}),e(d,null,{default:n(()=>[i(" Some content ")]),_:1})]),_:1}),e(f,null,{default:n(()=>[e(m,null,{default:n(()=>[i("Panel 2")]),_:1}),e(d,null,{default:n(()=>[i(" Some content ")]),_:1})]),_:1}),e(f,null,{default:n(()=>[e(m,null,{default:n(()=>[i("Panel 3")]),_:1}),e(d,null,{default:n(()=>[i(" Some content ")]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])],64)}}}),M=x(N,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/expansionpanel/ExpansionDisabled.vue"]]),z={class:"text-center d-flex pb-4"},F=C({__name:"ExpansionModel",setup(v){const s=[];function t(){s.value=["foo","bar","baz"]}function c(){s.value=[]}return(a,u)=>{const m=o("v-btn"),d=o("v-expansion-panel"),f=o("v-expansion-panels");return p(),_(r,null,[l(" ----------------------------------------------------------------------------- "),l(" Model "),l(" ----------------------------------------------------------------------------- "),D("div",z,[e(m,{class:"ma-2",onClick:t},{default:n(()=>[i(" All ")]),_:1}),e(m,{color:"secondary",class:"ma-2",onClick:c},{default:n(()=>[i(" None ")]),_:1})]),D("div",{class:"pb-4"},"v-model "+V(s)),e(f,{modelValue:s,"onUpdate:modelValue":u[0]||(u[0]=y=>s=y),multiple:""},{default:n(()=>[e(d,{title:"Foo",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",value:"foo"}),e(d,{title:"Bar",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",value:"bar"}),e(d,{title:"Baz",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",value:"baz"})]),_:1})],64)}}}),O=x(F,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/expansionpanel/ExpansionModel.vue"]]),G={class:"d-flex"},H=C({__name:"ExpansionReadonly",setup(v){const s=g([0,1]),t=g(!1);return(c,a)=>{const u=o("v-checkbox"),m=o("v-expansion-panel-title"),d=o("v-expansion-panel-text"),f=o("v-expansion-panel"),y=o("v-expansion-panels");return p(),_(r,null,[l(" ----------------------------------------------------------------------------- "),l(" Readonly "),l(" ----------------------------------------------------------------------------- "),D("div",G,[e(u,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=q=>t.value=q),label:"Readonly"},null,8,["modelValue"])]),e(y,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=q=>s.value=q),readonly:t.value,multiple:""},{default:n(()=>[e(f,null,{default:n(()=>[e(m,null,{default:n(()=>[i("Panel 1")]),_:1}),e(d,null,{default:n(()=>[i(" Some content ")]),_:1})]),_:1}),e(f,null,{default:n(()=>[e(m,null,{default:n(()=>[i("Panel 2")]),_:1}),e(d,null,{default:n(()=>[i(" Some content ")]),_:1})]),_:1}),e(f,null,{default:n(()=>[e(m,null,{default:n(()=>[i("Panel 3")]),_:1}),e(d,null,{default:n(()=>[i(" Some content ")]),_:1})]),_:1})]),_:1},8,["modelValue","readonly"])],64)}}}),J=x(H,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/expansionpanel/ExpansionReadonly.vue"]]),K={};function Q(v,s){const t=o("v-expansion-panel-title"),c=o("v-expansion-panel-text"),a=o("v-expansion-panel"),u=o("v-expansion-panels"),m=o("v-icon");return p(),_(r,null,[l(" ----------------------------------------------------------------------------- "),l(" Custom Icon "),l(" ----------------------------------------------------------------------------- "),e(u,{class:"mb-6"},{default:n(()=>[(p(),_(r,null,E(3,d=>e(a,{key:d},{default:n(()=>[e(t,{"expand-icon":"mdi-menu-down"},{default:n(()=>[i(" Item ")]),_:1}),e(c,null,{default:n(()=>[i("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),_:1})]),_:2},1024)),64))]),_:1}),e(u,null,{default:n(()=>[e(a,null,{default:n(()=>[e(t,{"expand-icon":"mdi-plus","collapse-icon":"mdi-minus"},{default:n(()=>[i(" Item ")]),_:1}),e(c,null,{default:n(()=>[i(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,null,{actions:n(({expanded:d})=>[e(m,{color:d?"":"teal",icon:d?"mdi-pencil":"mdi-check"},null,8,["color","icon"])]),default:n(()=>[i(" Item ")]),_:1}),e(c,null,{default:n(()=>[i(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{"disable-icon-rotate":""},{actions:n(()=>[e(m,{color:"error",icon:"mdi-alert-circle"})]),default:n(()=>[i(" Item ")]),_:1}),e(c,null,{default:n(()=>[i(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1})]),_:1})],64)}const W=x(K,[["render",Q],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/expansionpanel/ExpansionCustomIcon.vue"]]),X=C({__name:"ExpansionPanel",setup(v){const s=g({title:"Expansion Panel"}),t=g([{text:"Ui Components",disabled:!1,to:"#"},{text:"Expansion Panel",disabled:!0}]);return(c,a)=>{const u=o("v-col"),m=o("v-row");return p(),_(r,null,[e(U,{title:s.value.title,breadcrumbs:t.value},null,8,["title","breadcrumbs"]),e(m,null,{default:n(()=>[e(u,{cols:"12",sm:"12"},{default:n(()=>[e(b,{heading:"Default"},{default:n(()=>[e(k)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:n(()=>[e(b,{heading:"Accordian"},{default:n(()=>[e(L)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:n(()=>[e(b,{heading:"Inset"},{default:n(()=>[e(T)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:n(()=>[e(b,{heading:"Popout"},{default:n(()=>[e(R)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:n(()=>[e(b,{heading:"Disabled"},{default:n(()=>[e(M)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:n(()=>[e(b,{heading:"Disabled"},{default:n(()=>[e(O)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:n(()=>[e(b,{heading:"Read Only"},{default:n(()=>[e(J)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:n(()=>[e(b,{heading:"Custom Icon"},{default:n(()=>[e(W)]),_:1})]),_:1})]),_:1})],64)}}}),ne=x(X,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/ExpansionPanel.vue"]]);export{ne as default};
