import{_ as u,r as o,o as m,f,j as c,b as d,a as e,w as t,F as p,d as r,e as x,g as b}from"./index-f1b96981.js";import{B}from"./BaseBreadcrumb-522ad6fc.js";import{B as g}from"./BaseCard-6ce7c929.js";const h={},k=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," Inline badges can be placed anywhere with content and can render without a default slot. ",-1),C={class:"mt-6"};function w(v,_){const a=o("v-badge"),n=o("v-list-item"),s=o("v-list");return m(),f(p,null,[c(" ----------------------------------------------------------------------------- "),c(" Inline "),c(" ----------------------------------------------------------------------------- "),d("div",null,[k,d("div",C,[e(s,{border:"",class:"mx-auto","max-width":"256"},{default:t(()=>[e(n,{link:"","prepend-icon":"mdi-inbox-arrow-down",title:"Inbox"},{append:t(()=>[e(a,{color:"error",content:"6",inline:""})]),_:1}),e(n,{link:"","prepend-icon":"mdi-send",title:"Sent Mail"}),e(n,{link:"","prepend-icon":"mdi-delete",title:"Trash"},{append:t(()=>[e(a,{color:"info",content:"12",inline:""})]),_:1}),e(n,{link:"","prepend-icon":"mdi-alert-circle",title:"Spam"})]),_:1})])])],2112)}const y=u(h,[["render",w],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/badge/BadgeInline.vue"]]),I={},T=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," For simple text, use the content property to display a value on the badge. ",-1),$={class:"mt-6"};function j(v,_){const a=o("v-spacer"),n=o("v-icon"),s=o("v-badge"),l=o("v-btn"),i=o("v-toolbar");return m(),f(p,null,[c(" ----------------------------------------------------------------------------- "),c(" Content "),c(" ----------------------------------------------------------------------------- "),d("div",null,[T,d("div",$,[e(i,{color:"blue-grey-darken-3"},{default:t(()=>[e(a),e(l,{class:"text-none",stacked:""},{default:t(()=>[e(s,{dot:"",color:"success"},{default:t(()=>[e(n,null,{default:t(()=>[r("mdi-home-outline")]),_:1})]),_:1})]),_:1}),e(l,{class:"text-none",stacked:""},{default:t(()=>[e(n,null,{default:t(()=>[r("mdi-account-multiple-outline")]),_:1})]),_:1}),e(l,{class:"text-none",stacked:""},{default:t(()=>[e(s,{content:"9+",color:"error"},{default:t(()=>[e(n,null,{default:t(()=>[r("mdi-store-outline")]),_:1})]),_:1})]),_:1}),e(l,{class:"text-none",stacked:""},{default:t(()=>[e(s,{content:"2",color:"error"},{default:t(()=>[e(n,null,{default:t(()=>[r("mdi-bell-outline")]),_:1})]),_:1})]),_:1}),e(l,{class:"text-none",stacked:""},{default:t(()=>[e(n,null,{default:t(()=>[r("mdi-menu")]),_:1})]),_:1}),e(a)]),_:1})])])],2112)}const N=u(I,[["render",j],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/badge/BadgeContent.vue"]]),V=x({__name:"Badge",setup(v){const _=b({title:"Badge"}),a=b([{text:"Ui Components",disabled:!1,to:"#"},{text:"Badge",disabled:!0}]);return(n,s)=>{const l=o("v-col"),i=o("v-row");return m(),f(p,null,[e(B,{title:_.value.title,breadcrumbs:a.value},null,8,["title","breadcrumbs"]),e(i,null,{default:t(()=>[e(l,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Badge - Inline"},{default:t(()=>[e(y)]),_:1})]),_:1}),e(l,{cols:"12",sm:"12"},{default:t(()=>[e(g,{heading:"Badge - Content"},{default:t(()=>[e(N)]),_:1})]),_:1})]),_:1})],64)}}}),E=u(V,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Badge.vue"]]);export{E as default};
