import{_ as d,r as t,o as u,f,j as a,b as l,a as n,w as e,d as o,F as m,e as x,g as b}from"./index-0b78272f.js";import{B as T}from"./BaseBreadcrumb-329ddf8f.js";import{B as v}from"./BaseCard-821771b2.js";const j={},D=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," The prop lines can be used to specify how the displayed text should be handled based on its length. ",-1),I={class:"mt-6"};function V(p,_){const c=t("v-banner-text"),s=t("v-btn"),i=t("v-banner");return u(),f(m,null,[a(" ----------------------------------------------------------------------------- "),a(" Line "),a(" ----------------------------------------------------------------------------- "),l("div",null,[D,l("div",I,[n(i,{lines:"one",icon:"mdi-lock",color:"primary",class:"my-3"},{actions:e(()=>[n(s,null,{default:e(()=>[o("Action")]),_:1})]),default:e(()=>[n(c,null,{default:e(()=>[o(" Banner with one line of text. ")]),_:1})]),_:1}),n(i,{lines:"two",icon:"mdi-weather-hurricane",color:"secondary",class:"my-3"},{actions:e(()=>[n(s,{color:"secondary"},{default:e(()=>[o("Action")]),_:1})]),default:e(()=>[n(c,null,{default:e(()=>[o(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1})]),_:1}),n(i,{lines:"three",icon:"$warning",color:"warning",class:"my-3"},{actions:e(()=>[n(s,{color:"warning"},{default:e(()=>[o("Action")]),_:1})]),default:e(()=>[n(c,null,{default:e(()=>[o(" Banner with three lines of text. One or two lines is preferable. Three lines should be considered the absolute maximum length on desktop in order to keep messages short and actionable. ")]),_:1})]),_:1})])])],2112)}const A=d(j,[["render",V],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/banner/BannerLine.vue"]]),L=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can optionally turn on the sticky prop to ensure that the content is pinned to the top of the screen. ",-1),N={class:"mt-6"},P=x({__name:"BannerSticky",setup(p){const _=b(!1);return(c,s)=>{const i=t("v-toolbar-title"),r=t("v-spacer"),h=t("v-switch"),y=t("v-toolbar"),w=t("v-btn"),B=t("v-banner"),g=t("v-sheet"),k=t("v-card-text"),$=t("v-footer"),S=t("v-card");return u(),f(m,null,[a(" ----------------------------------------------------------------------------- "),a(" Line "),a(" ----------------------------------------------------------------------------- "),l("div",null,[L,l("div",N,[n(S,{class:"overflow-auto mx-auto","max-height":"300",width:"448"},{default:e(()=>[n(y,{color:"primary"},{default:e(()=>[n(i,null,{default:e(()=>[o("My Document")]),_:1}),n(r),l("div",null,[n(h,{modelValue:_.value,"onUpdate:modelValue":s[0]||(s[0]=C=>_.value=C),label:"Sticky Banner","hide-details":""},null,8,["modelValue"])])]),_:1}),n(B,{sticky:_.value,lines:"one"},{text:e(()=>[o(" We can't save your edits while you are in offline mode. ")]),actions:e(()=>[n(w,{color:"secondary"},{default:e(()=>[o(" Go Online ")]),_:1})]),_:1},8,["sticky"]),n(k,{class:"bg-grey-lighten-4"},{default:e(()=>[n(g,{class:"mx-auto",height:"300"})]),_:1}),n($,{class:"justify-center",color:"primary"},{default:e(()=>[o(" End of Content ")]),_:1})]),_:1})])])],2112)}}}),E=d(P,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/banner/BannerSticky.vue"]]),F={},O=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," Banners may have one or two text buttons that don’t stand out that much. ",-1),U={class:"mt-6"};function z(p,_){const c=t("v-btn"),s=t("v-banner");return u(),f(m,null,[a(" ----------------------------------------------------------------------------- "),a(" Slots "),a(" ----------------------------------------------------------------------------- "),l("div",null,[O,l("div",U,[n(s,{lines:"one",icon:"mdi-wifi-strength-alert-outline",color:"warning"},{text:e(()=>[o(" No Internet connection ")]),actions:e(()=>[n(c,{color:"error"},{default:e(()=>[o(" Dismiss ")]),_:1}),n(c,{color:"secondary"},{default:e(()=>[o(" Retry ")]),_:1})]),_:1})])])],2112)}const G=d(F,[["render",z],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/banner/BannerSlots.vue"]]),M={},R=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," The icon slot allows you to to explicitly control the content and functionality within it. ",-1),W={class:"mt-6"};function Y(p,_){const c=t("v-banner-text"),s=t("v-btn"),i=t("v-banner-actions"),r=t("v-banner");return u(),f(m,null,[a(" ----------------------------------------------------------------------------- "),a(" Slots "),a(" ----------------------------------------------------------------------------- "),l("div",null,[R,l("div",W,[n(r,{lines:"one",color:"secondary",icon:"mdi-account-box"},{default:e(()=>[n(c,null,{default:e(()=>[o(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1}),n(i,null,{default:e(()=>[n(s,{color:"secondary"},{default:e(()=>[o("Action Button")]),_:1})]),_:1})]),_:1})])])],2112)}const q=d(M,[["render",Y],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/banner/BannerIcon.vue"]]),H={},J=l("p",{class:"text-subtitle-1 text-grey-darken-1"}," The prepend slot allows you to to explicitly control the content and functionality within it. Icons also help to emphasize a banner’s message. ",-1),K={class:"mt-6"};function Q(p,_){const c=t("v-banner-text"),s=t("v-btn"),i=t("v-banner-actions"),r=t("v-banner");return u(),f(m,null,[a(" ----------------------------------------------------------------------------- "),a(" Prepand "),a(" ----------------------------------------------------------------------------- "),l("div",null,[J,l("div",K,[n(r,{lines:"two",color:"secondary",icon:"mdi-account-filter"},{default:e(()=>[a(` <template v-slot:prepend>\r
          <v-avatar\r
            color="deep-purple-accent-4"\r
            \r
          ></v-avatar>\r
        </template> `),n(c,null,{default:e(()=>[o(" Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden. ")]),_:1}),n(i,null,{default:e(()=>[n(s,{variant:"text",color:"secondary"},{default:e(()=>[o("Action")]),_:1}),n(s,{variant:"text",color:"secondary"},{default:e(()=>[o("Action")]),_:1})]),_:1})]),_:1})])])],2112)}const X=d(H,[["render",Q],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/banner/BannerPrepand.vue"]]),Z=x({__name:"Banner",setup(p){const _=b({title:"Banner"}),c=b([{text:"Ui Components",disabled:!1,to:"#"},{text:"Banner",disabled:!0}]);return(s,i)=>{const r=t("v-col"),h=t("v-row");return u(),f(m,null,[n(T,{title:_.value.title,breadcrumbs:c.value},null,8,["title","breadcrumbs"]),n(h,null,{default:e(()=>[n(r,{cols:"12",sm:"12"},{default:e(()=>[n(v,{heading:"Banner - Lines"},{default:e(()=>[n(A)]),_:1})]),_:1}),n(r,{cols:"12",sm:"12"},{default:e(()=>[n(v,{heading:"Banner - Sticky"},{default:e(()=>[n(E)]),_:1})]),_:1}),n(r,{cols:"12",sm:"12"},{default:e(()=>[n(v,{heading:"Banner - Slots"},{default:e(()=>[n(G)]),_:1})]),_:1}),n(r,{cols:"12",sm:"12"},{default:e(()=>[n(v,{heading:"Banner - Icon"},{default:e(()=>[n(q)]),_:1})]),_:1}),n(r,{cols:"12",sm:"12"},{default:e(()=>[n(v,{heading:"Banner - Prepand"},{default:e(()=>[n(X)]),_:1})]),_:1})]),_:1})],64)}}}),on=d(Z,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Banner.vue"]]);export{on as default};
