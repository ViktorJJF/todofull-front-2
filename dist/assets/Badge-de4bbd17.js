import{_ as b}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-3ddf47ea.js";import{_ as p}from"./BaseCard.vue_vue_type_script_setup_true_lang-9a48b83a.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,g as u,b as d,a as e,w as t,d as s,f as x,h as f,F as g}from"./index-a9f767f6.js";const h={},k=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," Inline badges can be placed anywhere with content and can render without a default slot. ",-1),w={class:"mt-6"};function B(m,_){const l=o("v-badge"),n=o("v-list-item"),c=o("v-list");return i(),u("div",null,[k,d("div",w,[e(c,{border:"",class:"mx-auto","max-width":"256"},{default:t(()=>[e(n,{link:"","prepend-icon":"mdi-inbox-arrow-down",title:"Inbox"},{append:t(()=>[e(l,{color:"error",content:"6",inline:""})]),_:1}),e(n,{link:"","prepend-icon":"mdi-send",title:"Sent Mail"}),e(n,{link:"","prepend-icon":"mdi-delete",title:"Trash"},{append:t(()=>[e(l,{color:"info",content:"12",inline:""})]),_:1}),e(n,{link:"","prepend-icon":"mdi-alert-circle",title:"Spam"})]),_:1})])])}const $=v(h,[["render",B]]),y={},C=d("p",{class:"text-subtitle-1 text-grey-darken-1"}," For simple text, use the content property to display a value on the badge. ",-1),I={class:"mt-6"};function F(m,_){const l=o("v-spacer"),n=o("v-icon"),c=o("v-badge"),a=o("v-btn"),r=o("v-toolbar");return i(),u("div",null,[C,d("div",I,[e(r,{color:"blue-grey-darken-3"},{default:t(()=>[e(l),e(a,{class:"text-none",stacked:""},{default:t(()=>[e(c,{dot:"",color:"success"},{default:t(()=>[e(n,null,{default:t(()=>[s("mdi-home-outline")]),_:1})]),_:1})]),_:1}),e(a,{class:"text-none",stacked:""},{default:t(()=>[e(n,null,{default:t(()=>[s("mdi-account-multiple-outline")]),_:1})]),_:1}),e(a,{class:"text-none",stacked:""},{default:t(()=>[e(c,{content:"9+",color:"error"},{default:t(()=>[e(n,null,{default:t(()=>[s("mdi-store-outline")]),_:1})]),_:1})]),_:1}),e(a,{class:"text-none",stacked:""},{default:t(()=>[e(c,{content:"2",color:"error"},{default:t(()=>[e(n,null,{default:t(()=>[s("mdi-bell-outline")]),_:1})]),_:1})]),_:1}),e(a,{class:"text-none",stacked:""},{default:t(()=>[e(n,null,{default:t(()=>[s("mdi-menu")]),_:1})]),_:1}),e(l)]),_:1})])])}const N=v(y,[["render",F]]),M=x({__name:"Badge",setup(m){const _=f({title:"Badge"}),l=f([{text:"Ui Components",disabled:!1,to:"#"},{text:"Badge",disabled:!0}]);return(n,c)=>{const a=o("v-col"),r=o("v-row");return i(),u(g,null,[e(b,{title:_.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),e(r,null,{default:t(()=>[e(a,{cols:"12",sm:"12"},{default:t(()=>[e(p,{heading:"Badge - Inline"},{default:t(()=>[e($)]),_:1})]),_:1}),e(a,{cols:"12",sm:"12"},{default:t(()=>[e(p,{heading:"Badge - Content"},{default:t(()=>[e(N)]),_:1})]),_:1})]),_:1})],64)}}});export{M as default};
