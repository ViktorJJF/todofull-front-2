import{_ as w}from"./BaseBreadcrumb.dcf85066.js";import{_ as d}from"./BaseCard.6780f153.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,n as r,f as o,a as e,w as t,g as l,h as n,b7 as _,b8 as s,m as y,r as m,aj as g,b0 as B,M as v,b9 as V,ab as $,K as k,ba as S,d as T,bb as b,b as u,e as A,F as C}from"./index.8be2d24c.js";const I={},N=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," The prop lines can be used to specify how the displayed text should be handled based on its length. ",-1),F={class:"mt-6"};function j(c,a){return i(),r("div",null,[N,o("div",F,[e(s,{lines:"one",icon:"mdi-lock",color:"primary",class:"my-3"},{actions:t(()=>[e(l,null,{default:t(()=>[n("Action")]),_:1})]),default:t(()=>[e(_,null,{default:t(()=>[n(" Banner with one line of text. ")]),_:1})]),_:1}),e(s,{lines:"two",icon:"mdi-weather-hurricane",color:"secondary",class:"my-3"},{actions:t(()=>[e(l,{color:"secondary"},{default:t(()=>[n("Action")]),_:1})]),default:t(()=>[e(_,null,{default:t(()=>[n(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1})]),_:1}),e(s,{lines:"three",icon:"$warning",color:"warning",class:"my-3"},{actions:t(()=>[e(l,{color:"warning"},{default:t(()=>[n("Action")]),_:1})]),default:t(()=>[e(_,null,{default:t(()=>[n(" Banner with three lines of text. One or two lines is preferable. Three lines should be considered the absolute maximum length on desktop in order to keep messages short and actionable. ")]),_:1})]),_:1})])])}var D=f(I,[["render",j]]);const E=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can optionally turn on the sticky prop to ensure that the content is pinned to the top of the screen. ",-1),L={class:"mt-6"},M=y({__name:"BannerSticky",setup(c){const a=m(!1);return(p,h)=>(i(),r("div",null,[E,o("div",L,[e(T,{class:"overflow-auto mx-auto","max-height":"300",width:"448"},{default:t(()=>[e(g,{color:"primary"},{default:t(()=>[e(B,null,{default:t(()=>[n("My Document")]),_:1}),e(v),o("div",null,[e(V,{modelValue:a.value,"onUpdate:modelValue":h[0]||(h[0]=x=>a.value=x),label:"Sticky Banner","hide-details":""},null,8,["modelValue"])])]),_:1}),e(s,{sticky:a.value,lines:"one"},{text:t(()=>[n(" We can't save your edits while you are in offline mode. ")]),actions:t(()=>[e(l,{color:"secondary"},{default:t(()=>[n(" Go Online ")]),_:1})]),_:1},8,["sticky"]),e($,{class:"bg-grey-lighten-4"},{default:t(()=>[e(k,{class:"mx-auto",height:"300"})]),_:1}),e(S,{class:"justify-center",color:"primary"},{default:t(()=>[n(" End of Content ")]),_:1})]),_:1})])]))}}),O={},P=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," Banners may have one or two text buttons that don\u2019t stand out that much. ",-1),R={class:"mt-6"};function U(c,a){return i(),r("div",null,[P,o("div",R,[e(s,{lines:"one",icon:"mdi-wifi-strength-alert-outline",color:"warning"},{text:t(()=>[n(" No Internet connection ")]),actions:t(()=>[e(l,{color:"error"},{default:t(()=>[n(" Dismiss ")]),_:1}),e(l,{color:"secondary"},{default:t(()=>[n(" Retry ")]),_:1})]),_:1})])])}var z=f(O,[["render",U]]);const G={},K=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," The icon slot allows you to to explicitly control the content and functionality within it. ",-1),W={class:"mt-6"};function Y(c,a){return i(),r("div",null,[K,o("div",W,[e(s,{lines:"one",color:"secondary",icon:"mdi-account-box"},{default:t(()=>[e(_,null,{default:t(()=>[n(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1}),e(b,null,{default:t(()=>[e(l,{color:"secondary"},{default:t(()=>[n("Action Button")]),_:1})]),_:1})]),_:1})])])}var q=f(G,[["render",Y]]);const H={},J=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," The prepend slot allows you to to explicitly control the content and functionality within it. Icons also help to emphasize a banner\u2019s message. ",-1),Q={class:"mt-6"};function X(c,a){return i(),r("div",null,[J,o("div",Q,[e(s,{lines:"two",color:"secondary",icon:"mdi-account-filter"},{default:t(()=>[e(_,null,{default:t(()=>[n(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1}),e(b,null,{default:t(()=>[e(l,{variant:"text",color:"secondary"},{default:t(()=>[n("Action")]),_:1}),e(l,{variant:"text",color:"secondary"},{default:t(()=>[n("Action")]),_:1})]),_:1})]),_:1})])])}var Z=f(H,[["render",X]]);const ae=y({__name:"Banner",setup(c){const a=m({title:"Banner"}),p=m([{text:"Ui Components",disabled:!1,to:"#"},{text:"Banner",disabled:!0}]);return(h,x)=>(i(),r(C,null,[e(w,{title:a.value.title,breadcrumbs:p.value},null,8,["title","breadcrumbs"]),e(A,null,{default:t(()=>[e(u,{cols:"12",sm:"12"},{default:t(()=>[e(d,{heading:"Banner - Lines"},{default:t(()=>[e(D)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:t(()=>[e(d,{heading:"Banner - Sticky"},{default:t(()=>[e(M)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:t(()=>[e(d,{heading:"Banner - Slots"},{default:t(()=>[e(z)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:t(()=>[e(d,{heading:"Banner - Icon"},{default:t(()=>[e(q)]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:t(()=>[e(d,{heading:"Banner - Prepand"},{default:t(()=>[e(Z)]),_:1})]),_:1})]),_:1})],64))}});export{ae as default};
