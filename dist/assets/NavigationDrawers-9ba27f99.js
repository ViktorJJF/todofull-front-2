import{_ as v,e as k,g as m,r as e,o as p,f,j as l,a as t,w as o,p as B,d as $,F as g,b as u}from"./index-d6b86b59.js";import{B as V}from"./BaseBreadcrumb-7e2fb8fb.js";import{B as y}from"./BaseCard-16034294.js";const M=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the bottom prop, we are able to relocate our drawer on mobile devices to come from the bottom of the screen. This is an alternative style and only activates once the mobile-breakpoint is met. ",-1),z=k({__name:"NDBottom",setup(h){const c=m(!1);m(null);const n=m([{title:"Foo",value:"foo"},{title:"Bar",value:"bar"},{title:"Fizz",value:"fizz"},{title:"Buzz",value:"buzz"}]);return(s,a)=>{const i=e("v-app-bar-nav-icon"),r=e("v-toolbar-title"),_=e("v-spacer"),d=e("v-btn"),b=e("v-app-bar"),w=e("v-list"),x=e("v-navigation-drawer"),N=e("v-card-text"),D=e("v-main"),T=e("v-layout"),j=e("v-card");return p(),f(g,null,[l(" ----------------------------------------------------------------------------- "),l(" Bottom drawer "),l(" ----------------------------------------------------------------------------- "),M,t(j,{class:"mt-6","max-height":"300"},{default:o(()=>[t(T,null,{default:o(()=>[t(b,{color:"primary",prominent:""},{default:o(()=>[t(i,{variant:"text",onClick:a[0]||(a[0]=B(C=>c.value=!c.value,["stop"]))}),t(r,null,{default:o(()=>[$("My files")]),_:1}),t(_),t(d,{variant:"text",icon:"mdi-magnify"}),t(d,{variant:"text",icon:"mdi-filter"}),t(d,{variant:"text",icon:"mdi-dots-vertical"})]),_:1}),t(x,{modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=C=>c.value=C),bottom:"",temporary:""},{default:o(()=>[t(w,{items:n.value},null,8,["items"])]),_:1},8,["modelValue"]),t(D,null,{default:o(()=>[t(N,null,{default:o(()=>[$(" The navigation drawer will appear from the bottom on smaller size screens. ")]),_:1})]),_:1})]),_:1})]),_:1})],64)}}}),H=v(z,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/navigation-drawers/NDBottom.vue"]]),A={},F=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," Places the component in rail mode and expands once hovered. This does not alter the content area of v-main. The width can be controlled with the rail-width property. ",-1);function U(h,c){const n=e("v-list-item"),s=e("v-list"),a=e("v-divider"),i=e("v-navigation-drawer"),r=e("v-main"),_=e("v-layout"),d=e("v-card");return p(),f(g,null,[l(" ----------------------------------------------------------------------------- "),l(" Hover "),l(" ----------------------------------------------------------------------------- "),F,t(d,{class:"mt-6","max-height":"300"},{default:o(()=>[t(_,null,{default:o(()=>[t(i,{"expand-on-hover":"",rail:""},{default:o(()=>[t(s,null,{default:o(()=>[t(n,{"prepend-avatar":"https://randomuser.me/api/portraits/women/85.jpg",title:"Sandra Adams",subtitle:"sandra_a88@gmailcom"})]),_:1}),t(a),t(s,{density:"compact",nav:""},{default:o(()=>[t(n,{"prepend-icon":"mdi-folder",title:"My Files",value:"myfiles"}),t(n,{"prepend-icon":"mdi-account-multiple",title:"Shared with me",value:"shared"}),t(n,{"prepend-icon":"mdi-star",title:"Starred",value:"starred"})]),_:1})]),_:1}),t(r,{style:{height:"250px"}})]),_:1})]),_:1})],64)}const P=v(A,[["render",U],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/navigation-drawers/NDHover.vue"]]),S={},I=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," Apply a custom background to your drawer via the image prop. If you need to customize it further, you can use the image slot and render your own v-img. ",-1);function R(h,c){const n=e("v-list-item"),s=e("v-list"),a=e("v-navigation-drawer"),i=e("v-main"),r=e("v-layout"),_=e("v-card");return p(),f(g,null,[l(" ----------------------------------------------------------------------------- "),l(" Background images "),l(" ----------------------------------------------------------------------------- "),I,t(_,{class:"mt-6","max-height":"300"},{default:o(()=>[t(r,null,{default:o(()=>[t(a,{theme:"dark",image:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",width:"100%",permanent:""},{default:o(()=>[t(s,{nav:"",color:"transparent"},{default:o(()=>[t(n,{"prepend-icon":"mdi-email",title:"Inbox",value:"inbox"}),t(n,{"prepend-icon":"mdi-account-supervisor-circle",title:"Supervisors",value:"supervisors"}),t(n,{"prepend-icon":"mdi-clock-start",title:"Clock-in",value:"clockin"})]),_:1})]),_:1}),t(i,{style:{height:"250px"}})]),_:1})]),_:1})],64)}const J=v(S,[["render",R],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/navigation-drawers/NDBackgroundImages.vue"]]),L=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," When using the rail prop, the drawer will shrink (default 56px) and hide everything inside of v-list except the first element. ",-1),E=k({__name:"NDRail",setup(h){const c=m(!0);m([{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}]);const n=m(!0);return(s,a)=>{const i=e("v-btn"),r=e("v-list-item"),_=e("v-divider"),d=e("v-list"),b=e("v-navigation-drawer"),w=e("v-main"),x=e("v-layout"),N=e("v-card");return p(),f(g,null,[l(" ----------------------------------------------------------------------------- "),l(" Rail "),l(" ----------------------------------------------------------------------------- "),L,t(N,{class:"mt-6","max-height":"300"},{default:o(()=>[t(x,null,{default:o(()=>[t(b,{modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=D=>c.value=D),rail:n.value,permanent:"",onClick:a[2]||(a[2]=D=>n.value=!1)},{default:o(()=>[t(r,{"prepend-avatar":"https://randomuser.me/api/portraits/men/85.jpg",title:"John Leider"},{append:o(()=>[t(i,{variant:"text",icon:"mdi-chevron-left",onClick:a[0]||(a[0]=B(D=>n.value=!n.value,["stop"]))})]),_:1}),t(_),t(d,{density:"compact",nav:""},{default:o(()=>[t(r,{"prepend-icon":"mdi-home-city",title:"Home",value:"home"}),t(r,{"prepend-icon":"mdi-account",title:"My Account",value:"account"}),t(r,{"prepend-icon":"mdi-account-group-outline",title:"Users",value:"users"})]),_:1})]),_:1},8,["modelValue","rail"]),t(w,{style:{height:"250px"}})]),_:1})]),_:1})],64)}}}),W=v(E,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/navigation-drawers/NDRail.vue"]]),q={},G=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," By default, a navigation drawer has a 1px right border that separates it from content. ",-1);function K(h,c){const n=e("v-list-item"),s=e("v-list"),a=e("v-navigation-drawer"),i=e("v-main"),r=e("v-layout"),_=e("v-card");return p(),f(g,null,[l(" ----------------------------------------------------------------------------- "),l(" Float "),l(" ----------------------------------------------------------------------------- "),G,t(_,{class:"mt-6","max-height":"300"},{default:o(()=>[t(r,null,{default:o(()=>[t(a,{floating:"",permanent:""},{default:o(()=>[t(s,{density:"compact",nav:""},{default:o(()=>[t(n,{"prepend-icon":"mdi-view-dashboard",title:"Home",value:"home"}),t(n,{"prepend-icon":"mdi-forum",title:"About",value:"about"})]),_:1})]),_:1}),t(i,{style:{height:"250px"}})]),_:1})]),_:1})],64)}const O=v(q,[["render",K],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/navigation-drawers/NDFloat.vue"]]),Q=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," Navigation drawers can also be positioned on the right side of your application (or an element) using the position prop. ",-1),X=k({__name:"NDPosition",setup(h){return m([{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}]),(c,n)=>{const s=e("v-list-item"),a=e("v-divider"),i=e("v-list"),r=e("v-navigation-drawer"),_=e("v-main"),d=e("v-layout"),b=e("v-card");return p(),f(g,null,[l(" ----------------------------------------------------------------------------- "),l(" Position "),l(" ----------------------------------------------------------------------------- "),Q,t(b,{class:"mt-6","max-height":"300"},{default:o(()=>[t(d,null,{default:o(()=>[t(r,{permanent:"",location:"right"},{prepend:o(()=>[t(s,{"two-line":"","prepend-avatar":"https://randomuser.me/api/portraits/women/81.jpg",title:"Jane Smith",subtitle:"Logged in"})]),default:o(()=>[t(a),t(i,{density:"compact",nav:""},{default:o(()=>[t(s,{"prepend-icon":"mdi-home-city",title:"Home",value:"home"}),t(s,{"prepend-icon":"mdi-account",title:"My Account",value:"account"}),t(s,{"prepend-icon":"mdi-account-group-outline",title:"Users",value:"users"})]),_:1})]),_:1}),t(_,{style:{height:"250px"}})]),_:1})]),_:1})],64)}}}),Y=v(X,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/navigation-drawers/NDPosition.vue"]]),Z=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. ",-1),tt={style:{height:"300px"},class:"d-flex justify-center align-center w-100"},et=k({__name:"NDTemporary",setup(h){const c=m(!1);return(n,s)=>{const a=e("v-list-item"),i=e("v-divider"),r=e("v-list"),_=e("v-navigation-drawer"),d=e("v-btn"),b=e("v-layout"),w=e("v-card");return p(),f(g,null,[l(" ----------------------------------------------------------------------------- "),l(" Float "),l(" ----------------------------------------------------------------------------- "),Z,t(w,{class:"mt-6","max-height":"300"},{default:o(()=>[t(b,null,{default:o(()=>[t(_,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=x=>c.value=x),temporary:""},{default:o(()=>[t(a,{"prepend-avatar":"https://randomuser.me/api/portraits/men/78.jpg",title:"John Leider"}),t(i),t(r,{density:"compact",nav:""},{default:o(()=>[t(a,{"prepend-icon":"mdi-view-dashboard",title:"Home",value:"home"}),t(a,{"prepend-icon":"mdi-forum",title:"About",value:"about"})]),_:1})]),_:1},8,["modelValue"]),u("div",tt,[u("div",null,[t(d,{color:"primary",onClick:s[1]||(s[1]=B(x=>c.value=!c.value,["stop"]))},{default:o(()=>[$(" Toggle ")]),_:1})])])]),_:1})]),_:1})],64)}}}),ot=v(et,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/navigation-drawers/NDTemporary.vue"]]),nt={},at=u("p",{class:"text-subtitle-1 text-grey-darken-1"}," Apply a custom background to your drawer via the image prop. If you need to customize it further, you can use the image slot and render your own v-img. ",-1);function it(h,c){const n=e("v-list-item"),s=e("v-divider"),a=e("v-list"),i=e("v-navigation-drawer"),r=e("v-main"),_=e("v-layout"),d=e("v-card");return p(),f(g,null,[l(" ----------------------------------------------------------------------------- "),l(" Background images "),l(" ----------------------------------------------------------------------------- "),at,t(d,{class:"mt-6","max-height":"300"},{default:o(()=>[t(_,null,{default:o(()=>[t(i,{theme:"dark",rail:"",permanent:""},{default:o(()=>[t(n,{"prepend-avatar":"https://randomuser.me/api/portraits/women/75.jpg"}),t(s),t(a,{density:"compact",nav:""},{default:o(()=>[t(n,{"prepend-icon":"mdi-view-dashboard",value:"dashboard"}),t(n,{"prepend-icon":"mdi-forum",value:"messages"})]),_:1})]),_:1}),t(i,{permanent:""},{default:o(()=>[t(a,null,{default:o(()=>[t(n,{title:"Home",value:"home"}),t(n,{title:"Contacts",value:"contacts"}),t(n,{title:"Settings",value:"settings"})]),_:1})]),_:1}),t(r,{style:{height:"300px"}})]),_:1})]),_:1})],64)}const lt=v(nt,[["render",it],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/navigation-drawers/MDMultiple.vue"]]),st=k({__name:"NavigationDrawers",setup(h){const c=m({title:"Navigation Drawers"}),n=m([{text:"Ui Components",disabled:!1,to:"#"},{text:"Navigation Drawers",disabled:!0}]);return(s,a)=>{const i=e("v-col"),r=e("v-row");return p(),f(g,null,[t(V,{title:c.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),t(r,null,{default:o(()=>[t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(y,{heading:"Bottom drawer"},{default:o(()=>[t(H)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(y,{heading:"Expand on Hover"},{default:o(()=>[t(P)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(y,{heading:"Background images"},{default:o(()=>[t(J)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(y,{heading:"Rail Variant"},{default:o(()=>[t(W)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(y,{heading:"Floating"},{default:o(()=>[t(O)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(y,{heading:"Position"},{default:o(()=>[t(Y)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(y,{heading:"Temporary"},{default:o(()=>[t(ot)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:o(()=>[t(y,{heading:"Multiple"},{default:o(()=>[t(lt)]),_:1})]),_:1})]),_:1})],64)}}}),dt=v(st,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/NavigationDrawers.vue"]]);export{dt as default};
