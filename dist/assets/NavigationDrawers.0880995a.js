import{_ as A}from"./BaseBreadcrumb.924874e0.js";import{_}from"./BaseCard.3ee063d3.js";import{m as w,r as o,o as u,n as c,a as e,w as t,bc as h,S as B,I as D,J as N,b0 as C,h as $,M,g as b,E as d,t as r,a6 as x,ab as T,d as g,F as m,f as s,A as a,T as k,b as f,e as z}from"./index.f7be060b.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";const H=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," Using the bottom prop, we are able to relocate our drawer on mobile devices to come from the bottom of the screen. This is an alternative style and only activates once the mobile-breakpoint is met. ",-1),U=w({__name:"NDBottom",setup(p){const l=o(!1);o(null);const i=o([{title:"Foo",value:"foo"},{title:"Bar",value:"bar"},{title:"Fizz",value:"fizz"},{title:"Buzz",value:"buzz"}]);return(v,n)=>(u(),c(m,null,[H,e(g,{class:"mt-6","max-height":"300"},{default:t(()=>[e(h,null,{default:t(()=>[e(B,{color:"primary",prominent:""},{default:t(()=>[e(D,{variant:"text",onClick:n[0]||(n[0]=N(y=>l.value=!l.value,["stop"]))}),e(C,null,{default:t(()=>[$("My files")]),_:1}),e(M),e(b,{variant:"text",icon:"mdi-magnify"}),e(b,{variant:"text",icon:"mdi-filter"}),e(b,{variant:"text",icon:"mdi-dots-vertical"})]),_:1}),e(d,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=y=>l.value=y),bottom:"",temporary:""},{default:t(()=>[e(r,{items:i.value},null,8,["items"])]),_:1},8,["modelValue"]),e(x,null,{default:t(()=>[e(T,null,{default:t(()=>[$(" The navigation drawer will appear from the bottom on smaller size screens. ")]),_:1})]),_:1})]),_:1})]),_:1})],64))}}),j={},S=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," Places the component in rail mode and expands once hovered. This does not alter the content area of v-main. The width can be controlled with the rail-width property. ",-1);function F(p,l){return u(),c(m,null,[S,e(g,{class:"mt-6","max-height":"300"},{default:t(()=>[e(h,null,{default:t(()=>[e(d,{"expand-on-hover":"",rail:""},{default:t(()=>[e(r,null,{default:t(()=>[e(a,{"prepend-avatar":"https://randomuser.me/api/portraits/women/85.jpg",title:"Sandra Adams",subtitle:"sandra_a88@gmailcom"})]),_:1}),e(k),e(r,{density:"compact",nav:""},{default:t(()=>[e(a,{"prepend-icon":"mdi-folder",title:"My Files",value:"myfiles"}),e(a,{"prepend-icon":"mdi-account-multiple",title:"Shared with me",value:"shared"}),e(a,{"prepend-icon":"mdi-star",title:"Starred",value:"starred"})]),_:1})]),_:1}),e(x,{style:{height:"250px"}})]),_:1})]),_:1})],64)}var I=V(j,[["render",F]]);const L={},J=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," Apply a custom background to your drawer via the image prop. If you need to customize it further, you can use the image slot and render your own v-img. ",-1);function E(p,l){return u(),c(m,null,[J,e(g,{class:"mt-6","max-height":"300"},{default:t(()=>[e(h,null,{default:t(()=>[e(d,{theme:"dark",image:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",width:"100%",permanent:""},{default:t(()=>[e(r,{nav:"",color:"transparent"},{default:t(()=>[e(a,{"prepend-icon":"mdi-email",title:"Inbox",value:"inbox"}),e(a,{"prepend-icon":"mdi-account-supervisor-circle",title:"Supervisors",value:"supervisors"}),e(a,{"prepend-icon":"mdi-clock-start",title:"Clock-in",value:"clockin"})]),_:1})]),_:1}),e(x,{style:{height:"250px"}})]),_:1})]),_:1})],64)}var P=V(L,[["render",E]]);const R=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," When using the rail prop, the drawer will shrink (default 56px) and hide everything inside of v-list except the first element. ",-1),W=w({__name:"NDRail",setup(p){const l=o(!0);o([{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}]);const i=o(!0);return(v,n)=>(u(),c(m,null,[R,e(g,{class:"mt-6","max-height":"300"},{default:t(()=>[e(h,null,{default:t(()=>[e(d,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=y=>l.value=y),rail:i.value,permanent:"",onClick:n[2]||(n[2]=y=>i.value=!1)},{default:t(()=>[e(a,{"prepend-avatar":"https://randomuser.me/api/portraits/men/85.jpg",title:"John Leider"},{append:t(()=>[e(b,{variant:"text",icon:"mdi-chevron-left",onClick:n[0]||(n[0]=N(y=>i.value=!i.value,["stop"]))})]),_:1}),e(k),e(r,{density:"compact",nav:""},{default:t(()=>[e(a,{"prepend-icon":"mdi-home-city",title:"Home",value:"home"}),e(a,{"prepend-icon":"mdi-account",title:"My Account",value:"account"}),e(a,{"prepend-icon":"mdi-account-group-outline",title:"Users",value:"users"})]),_:1})]),_:1},8,["modelValue","rail"]),e(x,{style:{height:"250px"}})]),_:1})]),_:1})],64))}}),q={},G=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," By default, a navigation drawer has a 1px right border that separates it from content. ",-1);function K(p,l){return u(),c(m,null,[G,e(g,{class:"mt-6","max-height":"300"},{default:t(()=>[e(h,null,{default:t(()=>[e(d,{floating:"",permanent:""},{default:t(()=>[e(r,{density:"compact",nav:""},{default:t(()=>[e(a,{"prepend-icon":"mdi-view-dashboard",title:"Home",value:"home"}),e(a,{"prepend-icon":"mdi-forum",title:"About",value:"about"})]),_:1})]),_:1}),e(x,{style:{height:"250px"}})]),_:1})]),_:1})],64)}var O=V(q,[["render",K]]);const Q=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," Navigation drawers can also be positioned on the right side of your application (or an element) using the position prop. ",-1),X=w({__name:"NDPosition",setup(p){return o([{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}]),(l,i)=>(u(),c(m,null,[Q,e(g,{class:"mt-6","max-height":"300"},{default:t(()=>[e(h,null,{default:t(()=>[e(d,{permanent:"",location:"right"},{prepend:t(()=>[e(a,{"two-line":"","prepend-avatar":"https://randomuser.me/api/portraits/women/81.jpg",title:"Jane Smith",subtitle:"Logged in"})]),default:t(()=>[e(k),e(r,{density:"compact",nav:""},{default:t(()=>[e(a,{"prepend-icon":"mdi-home-city",title:"Home",value:"home"}),e(a,{"prepend-icon":"mdi-account",title:"My Account",value:"account"}),e(a,{"prepend-icon":"mdi-account-group-outline",title:"Users",value:"users"})]),_:1})]),_:1}),e(x,{style:{height:"250px"}})]),_:1})]),_:1})],64))}}),Y=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. ",-1),Z={style:{height:"300px"},class:"d-flex justify-center align-center w-100"},ee=w({__name:"NDTemporary",setup(p){const l=o(!1);return(i,v)=>(u(),c(m,null,[Y,e(g,{class:"mt-6","max-height":"300"},{default:t(()=>[e(h,null,{default:t(()=>[e(d,{modelValue:l.value,"onUpdate:modelValue":v[0]||(v[0]=n=>l.value=n),temporary:""},{default:t(()=>[e(a,{"prepend-avatar":"https://randomuser.me/api/portraits/men/78.jpg",title:"John Leider"}),e(k),e(r,{density:"compact",nav:""},{default:t(()=>[e(a,{"prepend-icon":"mdi-view-dashboard",title:"Home",value:"home"}),e(a,{"prepend-icon":"mdi-forum",title:"About",value:"about"})]),_:1})]),_:1},8,["modelValue"]),s("div",Z,[s("div",null,[e(b,{color:"primary",onClick:v[1]||(v[1]=N(n=>l.value=!l.value,["stop"]))},{default:t(()=>[$(" Toggle ")]),_:1})])])]),_:1})]),_:1})],64))}}),te={},ae=s("p",{class:"text-subtitle-1 text-grey-darken-1"}," Apply a custom background to your drawer via the image prop. If you need to customize it further, you can use the image slot and render your own v-img. ",-1);function le(p,l){return u(),c(m,null,[ae,e(g,{class:"mt-6","max-height":"300"},{default:t(()=>[e(h,null,{default:t(()=>[e(d,{theme:"dark",rail:"",permanent:""},{default:t(()=>[e(a,{"prepend-avatar":"https://randomuser.me/api/portraits/women/75.jpg"}),e(k),e(r,{density:"compact",nav:""},{default:t(()=>[e(a,{"prepend-icon":"mdi-view-dashboard",value:"dashboard"}),e(a,{"prepend-icon":"mdi-forum",value:"messages"})]),_:1})]),_:1}),e(d,{permanent:""},{default:t(()=>[e(r,null,{default:t(()=>[e(a,{title:"Home",value:"home"}),e(a,{title:"Contacts",value:"contacts"}),e(a,{title:"Settings",value:"settings"})]),_:1})]),_:1}),e(x,{style:{height:"300px"}})]),_:1})]),_:1})],64)}var ne=V(te,[["render",le]]);const de=w({__name:"NavigationDrawers",setup(p){const l=o({title:"Navigation Drawers"}),i=o([{text:"Ui Components",disabled:!1,to:"#"},{text:"Navigation Drawers",disabled:!0}]);return(v,n)=>(u(),c(m,null,[e(A,{title:l.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),e(z,null,{default:t(()=>[e(f,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(_,{heading:"Bottom drawer"},{default:t(()=>[e(U)]),_:1})]),_:1}),e(f,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(_,{heading:"Expand on Hover"},{default:t(()=>[e(I)]),_:1})]),_:1}),e(f,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(_,{heading:"Background images"},{default:t(()=>[e(P)]),_:1})]),_:1}),e(f,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(_,{heading:"Rail Variant"},{default:t(()=>[e(W)]),_:1})]),_:1}),e(f,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(_,{heading:"Floating"},{default:t(()=>[e(O)]),_:1})]),_:1}),e(f,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(_,{heading:"Position"},{default:t(()=>[e(X)]),_:1})]),_:1}),e(f,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(_,{heading:"Temporary"},{default:t(()=>[e(ee)]),_:1})]),_:1}),e(f,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(_,{heading:"Multiple"},{default:t(()=>[e(ne)]),_:1})]),_:1})]),_:1})],64))}});export{de as default};
