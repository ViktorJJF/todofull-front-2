import{_ as B}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-fb68b5f8.js";import{_ as h}from"./BaseCard.vue_vue_type_script_setup_true_lang-a25aa4ff.js";import{f as w,h as d,r as e,o as u,g as p,a as t,w as n,p as V,d as N,F as v,b as m}from"./index-26340852.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const C=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the bottom prop, we are able to relocate our drawer on mobile devices to come from the bottom of the screen. This is an alternative style and only activates once the mobile-breakpoint is met. ",-1),M=w({__name:"NDBottom",setup(f){const r=d(!1);d(null);const o=d([{title:"Foo",value:"foo"},{title:"Bar",value:"bar"},{title:"Fizz",value:"fizz"},{title:"Buzz",value:"buzz"}]);return(l,a)=>{const i=e("v-app-bar-nav-icon"),s=e("v-toolbar-title"),c=e("v-spacer"),_=e("v-btn"),g=e("v-app-bar"),x=e("v-list"),y=e("v-navigation-drawer"),$=e("v-card-text"),b=e("v-main"),D=e("v-layout"),A=e("v-card");return u(),p(v,null,[C,t(A,{class:"mt-6","max-height":"300"},{default:n(()=>[t(D,null,{default:n(()=>[t(g,{color:"primary",prominent:""},{default:n(()=>[t(i,{variant:"text",onClick:a[0]||(a[0]=V(z=>r.value=!r.value,["stop"]))}),t(s,null,{default:n(()=>[N("My files")]),_:1}),t(c),t(_,{variant:"text",icon:"mdi-magnify"}),t(_,{variant:"text",icon:"mdi-filter"}),t(_,{variant:"text",icon:"mdi-dots-vertical"})]),_:1}),t(y,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=z=>r.value=z),bottom:"",temporary:""},{default:n(()=>[t(x,{items:o.value},null,8,["items"])]),_:1},8,["modelValue"]),t(b,null,{default:n(()=>[t($,null,{default:n(()=>[N(" The navigation drawer will appear from the bottom on smaller size screens. ")]),_:1})]),_:1})]),_:1})]),_:1})],64)}}}),H={},U=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Places the component in rail mode and expands once hovered. This does not alter the content area of v-main. The width can be controlled with the rail-width property. ",-1);function j(f,r){const o=e("v-list-item"),l=e("v-list"),a=e("v-divider"),i=e("v-navigation-drawer"),s=e("v-main"),c=e("v-layout"),_=e("v-card");return u(),p(v,null,[U,t(_,{class:"mt-6","max-height":"300"},{default:n(()=>[t(c,null,{default:n(()=>[t(i,{"expand-on-hover":"",rail:""},{default:n(()=>[t(l,null,{default:n(()=>[t(o,{"prepend-avatar":"https://randomuser.me/api/portraits/women/85.jpg",title:"Sandra Adams",subtitle:"sandra_a88@gmailcom"})]),_:1}),t(a),t(l,{density:"compact",nav:""},{default:n(()=>[t(o,{"prepend-icon":"mdi-folder",title:"My Files",value:"myfiles"}),t(o,{"prepend-icon":"mdi-account-multiple",title:"Shared with me",value:"shared"}),t(o,{"prepend-icon":"mdi-star",title:"Starred",value:"starred"})]),_:1})]),_:1}),t(s,{style:{height:"250px"}})]),_:1})]),_:1})],64)}const T=k(H,[["render",j]]),F={},S=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Apply a custom background to your drawer via the image prop. If you need to customize it further, you can use the image slot and render your own v-img. ",-1);function I(f,r){const o=e("v-list-item"),l=e("v-list"),a=e("v-navigation-drawer"),i=e("v-main"),s=e("v-layout"),c=e("v-card");return u(),p(v,null,[S,t(c,{class:"mt-6","max-height":"300"},{default:n(()=>[t(s,null,{default:n(()=>[t(a,{theme:"dark",image:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",width:"100%",permanent:""},{default:n(()=>[t(l,{nav:"",color:"transparent"},{default:n(()=>[t(o,{"prepend-icon":"mdi-email",title:"Inbox",value:"inbox"}),t(o,{"prepend-icon":"mdi-account-supervisor-circle",title:"Supervisors",value:"supervisors"}),t(o,{"prepend-icon":"mdi-clock-start",title:"Clock-in",value:"clockin"})]),_:1})]),_:1}),t(i,{style:{height:"250px"}})]),_:1})]),_:1})],64)}const J=k(F,[["render",I]]),L=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," When using the rail prop, the drawer will shrink (default 56px) and hide everything inside of v-list except the first element. ",-1),P=w({__name:"NDRail",setup(f){const r=d(!0);d([{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}]);const o=d(!0);return(l,a)=>{const i=e("v-btn"),s=e("v-list-item"),c=e("v-divider"),_=e("v-list"),g=e("v-navigation-drawer"),x=e("v-main"),y=e("v-layout"),$=e("v-card");return u(),p(v,null,[L,t($,{class:"mt-6","max-height":"300"},{default:n(()=>[t(y,null,{default:n(()=>[t(g,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=b=>r.value=b),rail:o.value,permanent:"",onClick:a[2]||(a[2]=b=>o.value=!1)},{default:n(()=>[t(s,{"prepend-avatar":"https://randomuser.me/api/portraits/men/85.jpg",title:"John Leider"},{append:n(()=>[t(i,{variant:"text",icon:"mdi-chevron-left",onClick:a[0]||(a[0]=V(b=>o.value=!o.value,["stop"]))})]),_:1}),t(c),t(_,{density:"compact",nav:""},{default:n(()=>[t(s,{"prepend-icon":"mdi-home-city",title:"Home",value:"home"}),t(s,{"prepend-icon":"mdi-account",title:"My Account",value:"account"}),t(s,{"prepend-icon":"mdi-account-group-outline",title:"Users",value:"users"})]),_:1})]),_:1},8,["modelValue","rail"]),t(x,{style:{height:"250px"}})]),_:1})]),_:1})],64)}}}),E={},R=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," By default, a navigation drawer has a 1px right border that separates it from content. ",-1);function W(f,r){const o=e("v-list-item"),l=e("v-list"),a=e("v-navigation-drawer"),i=e("v-main"),s=e("v-layout"),c=e("v-card");return u(),p(v,null,[R,t(c,{class:"mt-6","max-height":"300"},{default:n(()=>[t(s,null,{default:n(()=>[t(a,{floating:"",permanent:""},{default:n(()=>[t(l,{density:"compact",nav:""},{default:n(()=>[t(o,{"prepend-icon":"mdi-view-dashboard",title:"Home",value:"home"}),t(o,{"prepend-icon":"mdi-forum",title:"About",value:"about"})]),_:1})]),_:1}),t(i,{style:{height:"250px"}})]),_:1})]),_:1})],64)}const q=k(E,[["render",W]]),G=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Navigation drawers can also be positioned on the right side of your application (or an element) using the position prop. ",-1),K=w({__name:"NDPosition",setup(f){return d([{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}]),(r,o)=>{const l=e("v-list-item"),a=e("v-divider"),i=e("v-list"),s=e("v-navigation-drawer"),c=e("v-main"),_=e("v-layout"),g=e("v-card");return u(),p(v,null,[G,t(g,{class:"mt-6","max-height":"300"},{default:n(()=>[t(_,null,{default:n(()=>[t(s,{permanent:"",location:"right"},{prepend:n(()=>[t(l,{"two-line":"","prepend-avatar":"https://randomuser.me/api/portraits/women/81.jpg",title:"Jane Smith",subtitle:"Logged in"})]),default:n(()=>[t(a),t(i,{density:"compact",nav:""},{default:n(()=>[t(l,{"prepend-icon":"mdi-home-city",title:"Home",value:"home"}),t(l,{"prepend-icon":"mdi-account",title:"My Account",value:"account"}),t(l,{"prepend-icon":"mdi-account-group-outline",title:"Users",value:"users"})]),_:1})]),_:1}),t(c,{style:{height:"250px"}})]),_:1})]),_:1})],64)}}}),O=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. ",-1),Q={style:{height:"300px"},class:"d-flex justify-center align-center w-100"},X=w({__name:"NDTemporary",setup(f){const r=d(!1);return(o,l)=>{const a=e("v-list-item"),i=e("v-divider"),s=e("v-list"),c=e("v-navigation-drawer"),_=e("v-btn"),g=e("v-layout"),x=e("v-card");return u(),p(v,null,[O,t(x,{class:"mt-6","max-height":"300"},{default:n(()=>[t(g,null,{default:n(()=>[t(c,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=y=>r.value=y),temporary:""},{default:n(()=>[t(a,{"prepend-avatar":"https://randomuser.me/api/portraits/men/78.jpg",title:"John Leider"}),t(i),t(s,{density:"compact",nav:""},{default:n(()=>[t(a,{"prepend-icon":"mdi-view-dashboard",title:"Home",value:"home"}),t(a,{"prepend-icon":"mdi-forum",title:"About",value:"about"})]),_:1})]),_:1},8,["modelValue"]),m("div",Q,[m("div",null,[t(_,{color:"primary",onClick:l[1]||(l[1]=V(y=>r.value=!r.value,["stop"]))},{default:n(()=>[N(" Toggle ")]),_:1})])])]),_:1})]),_:1})],64)}}}),Y={},Z=m("p",{class:"text-subtitle-1 text-grey-darken-1"}," Apply a custom background to your drawer via the image prop. If you need to customize it further, you can use the image slot and render your own v-img. ",-1);function tt(f,r){const o=e("v-list-item"),l=e("v-divider"),a=e("v-list"),i=e("v-navigation-drawer"),s=e("v-main"),c=e("v-layout"),_=e("v-card");return u(),p(v,null,[Z,t(_,{class:"mt-6","max-height":"300"},{default:n(()=>[t(c,null,{default:n(()=>[t(i,{theme:"dark",rail:"",permanent:""},{default:n(()=>[t(o,{"prepend-avatar":"https://randomuser.me/api/portraits/women/75.jpg"}),t(l),t(a,{density:"compact",nav:""},{default:n(()=>[t(o,{"prepend-icon":"mdi-view-dashboard",value:"dashboard"}),t(o,{"prepend-icon":"mdi-forum",value:"messages"})]),_:1})]),_:1}),t(i,{permanent:""},{default:n(()=>[t(a,null,{default:n(()=>[t(o,{title:"Home",value:"home"}),t(o,{title:"Contacts",value:"contacts"}),t(o,{title:"Settings",value:"settings"})]),_:1})]),_:1}),t(s,{style:{height:"300px"}})]),_:1})]),_:1})],64)}const et=k(Y,[["render",tt]]),lt=w({__name:"NavigationDrawers",setup(f){const r=d({title:"Navigation Drawers"}),o=d([{text:"Ui Components",disabled:!1,to:"#"},{text:"Navigation Drawers",disabled:!0}]);return(l,a)=>{const i=e("v-col"),s=e("v-row");return u(),p(v,null,[t(B,{title:r.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),t(s,null,{default:n(()=>[t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[t(h,{heading:"Bottom drawer"},{default:n(()=>[t(M)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[t(h,{heading:"Expand on Hover"},{default:n(()=>[t(T)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[t(h,{heading:"Background images"},{default:n(()=>[t(J)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[t(h,{heading:"Rail Variant"},{default:n(()=>[t(P)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[t(h,{heading:"Floating"},{default:n(()=>[t(q)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[t(h,{heading:"Position"},{default:n(()=>[t(K)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[t(h,{heading:"Temporary"},{default:n(()=>[t(X)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:n(()=>[t(h,{heading:"Multiple"},{default:n(()=>[t(et)]),_:1})]),_:1})]),_:1})],64)}}});export{lt as default};
