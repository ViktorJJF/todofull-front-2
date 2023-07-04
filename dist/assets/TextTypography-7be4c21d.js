import{_ as r,e as y,g as u,r as h,o as n,f as c,j as e,F as l,k as b,c as T,w as o,b as a,n as w,t as x,S as g,a as t}from"./index-2d5d7655.js";import{B as $}from"./BaseBreadcrumb-9e4e4189.js";import{B as p}from"./BaseCard-5954b4ae.js";const B={class:"text-caption pa-2 bg-grey-lighten-4"},C=a("div",{class:"text-grey"},"Class",-1),D={class:"font-weight-medium"},k=y({__name:"Typography",setup(d){const i=u([["Heading 1","text-h1"],["Heading 2","text-h2"],["Heading 3","text-h3"],["Heading 4","text-h4"],["Heading 5","text-h5"],["Heading 6","text-h6"],["Subtitle 1","text-subtitle-1"],["Subtitle 2","text-subtitle-2"],["Body 1","text-body-1"],["Body 2","text-body-2"],["Button","text-button"],["Caption","text-caption"],["Overline","text-overline"]]);return(f,v)=>{const m=h("v-card");return n(),c(l,null,[e(" ----------------------------------------------------------------------------- "),e(" Typography "),e(" ----------------------------------------------------------------------------- "),(n(!0),c(l,null,b(i.value,([s,_])=>(n(),T(m,{key:s,class:"my-4"},{default:o(()=>[a("div",{class:w([_,"pa-2"])},x(s),3),a("div",B,[C,a("div",D,x(_),1)])]),_:2},1024))),128))],2112)}}}),S=r(k,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyStyleComponents/typography/Typography.vue"]]),j={},H=g('<p class="font-weight-black">Black text.</p><p class="font-weight-bold">Bold text.</p><p class="font-weight-medium">Medium weight text.</p><p class="font-weight-regular">Normal weight text.</p><p class="font-weight-light">Light weight text.</p><p class="font-weight-thin">Thin weight text.</p><p class="font-italic">Italic text.</p>',7);function F(d,i){return n(),c(l,null,[e(" ----------------------------------------------------------------------------- "),e(" Font emphasis "),e(" ----------------------------------------------------------------------------- "),H],2112)}const N=r(j,[["render",F],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyStyleComponents/typography/FontEmphasis.vue"]]),O={},E=g('<div class="d-flex justify-space-between flex-row"><a href="#" class="text-decoration-none">Non-underlined link</a><div class="text-decoration-line-through">Line-through text</div><div class="text-decoration-overline">Overline text</div><div class="text-decoration-underline">Underline text</div></div>',1);function L(d,i){return n(),c(l,null,[e(" ----------------------------------------------------------------------------- "),e(" Text Decoration "),e(" ----------------------------------------------------------------------------- "),E],2112)}const V=r(O,[["render",L],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyStyleComponents/typography/TextDecoration.vue"]]),z={},U=a("p",{class:"text-high-emphasis"}," High-emphasis has an opacity of 87% in light theme and 100% in dark. ",-1),M=a("p",{class:"text-medium-emphasis"}," Medium-emphasis text and hint text have opacities of 60% in light theme and 70% in dark. ",-1),I=a("p",{class:"text-disabled"}," Disabled text has an opacity of 38% in light theme and 50% in dark. ",-1);function q(d,i){return n(),c(l,null,[e(" ----------------------------------------------------------------------------- "),e(" Opacity "),e(" ----------------------------------------------------------------------------- "),U,M,I],64)}const A=r(z,[["render",q],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyStyleComponents/typography/Opacity.vue"]]),G={},J=a("p",{class:"text-lowercase"}," Lowercased text. ",-1),K=a("p",{class:"text-uppercase"}," Uppercased text. ",-1),P=a("p",{class:"text-capitalize"}," capitalized text. ",-1);function Q(d,i){return n(),c(l,null,[e(" ----------------------------------------------------------------------------- "),e(" transform "),e(" ----------------------------------------------------------------------------- "),J,K,P],64)}const R=r(G,[["render",Q],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyStyleComponents/typography/Transform.vue"]]),W=y({__name:"TextTypography",setup(d){const i=u({title:"Text and Typography"}),f=u([{text:"Ui Components",disabled:!1,to:"#"},{text:"Text and Typography",disabled:!0}]);return(v,m)=>{const s=h("v-col"),_=h("v-row");return n(),c(l,null,[t($,{title:i.value.title,breadcrumbs:f.value},null,8,["title","breadcrumbs"]),t(_,null,{default:o(()=>[t(s,{cols:"12",sm:"12"},{default:o(()=>[t(p,{heading:"Typography"},{default:o(()=>[t(S)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:o(()=>[t(p,{heading:"Font Emphasis"},{default:o(()=>[t(N)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:o(()=>[t(p,{heading:"Decoration"},{default:o(()=>[t(V)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:o(()=>[t(p,{heading:"Opacity"},{default:o(()=>[t(A)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:o(()=>[t(p,{heading:"Transform"},{default:o(()=>[t(R)]),_:1})]),_:1})]),_:1})],64)}}}),tt=r(W,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/style-animation/TextTypography.vue"]]);export{tt as default};
