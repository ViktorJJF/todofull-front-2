import{_ as C}from"./BaseBreadcrumb.dbb828d0.js";import{_}from"./BaseCard.63c61b5b.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,n as i,f as o,a as e,w as t,b9 as h,S as g,I as b,g as r,aZ as v,h as a,a6 as x,V as y,e as V,F as w,v as $,b as d,K as I,d as l,p as m,M as S,l as c,ab as k,m as M,r as A}from"./index.bf7d454a.js";const T={},B=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can make app-bar dense. A dense app bar has lower height than regular one. ",-1),D={class:"mt-6"};function F(p,u){return n(),i("div",null,[B,o("div",D,[e(l,{class:"mx-auto","max-width":"448","max-height":"270"},{default:t(()=>[e(h,null,{default:t(()=>[e(g,{color:"primary",density:"compact"},{prepend:t(()=>[e(b)]),append:t(()=>[e(r,{icon:"mdi-dots-vertical"})]),default:t(()=>[e(v,null,{default:t(()=>[a("Photos")]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(y,{fluid:""},{default:t(()=>[e(V,{dense:""},{default:t(()=>[(n(),i(w,null,$(8,s=>e(d,{key:s,cols:"3"},{default:t(()=>[e(I,{color:"grey-lighten-2",height:"96"})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}var N=f(T,[["render",F]]);const L={},P=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," v-app-bar can contain background images. You can set source via the src prop. If you need to customize the v-img properties, the app-bar provides you with an img slot. ",-1),j={class:"mt-6"};function z(p,u){return n(),i("div",null,[P,o("div",j,[e(l,{"max-width":"448",class:"mx-auto",color:"grey-lighten-3"},{default:t(()=>[e(h,null,{default:t(()=>[e(g,{color:"teal-darken-4",image:"https://picsum.photos/1920/1080?random"},{image:t(()=>[e(m,{gradient:"to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"})]),prepend:t(()=>[e(b)]),default:t(()=>[e(v,null,{default:t(()=>[a("Title")]),_:1}),e(S),e(r,{icon:""},{default:t(()=>[e(c,null,{default:t(()=>[a("mdi-magnify")]),_:1})]),_:1}),e(r,{icon:""},{default:t(()=>[e(c,null,{default:t(()=>[a("mdi-heart")]),_:1})]),_:1}),e(r,{icon:""},{default:t(()=>[e(c,null,{default:t(()=>[a("mdi-dots-vertical")]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(y,{fluid:""},{default:t(()=>[e(V,{dense:""},{default:t(()=>[(n(),i(w,null,$(4,s=>e(d,{key:s,cols:"12"},{default:t(()=>[e(l,{title:`Content ${s}`,subtitle:`Subtitle for Content ${s}`,text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"},null,8,["title","subtitle"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}var E=f(L,[["render",z]]);const R={},Y=o("p",{class:"text-subtitle-1 text-grey-darken-1"}," An v-app-bar with the prominent prop can opt to have its height shrunk as the user scrolls down. This provides a smooth transition to taking up less visual space when the user is scrolling through content. Shrink height has 2 possible options, dense (48px) and short (56px) sizes. ",-1),K={class:"mt-6"};function U(p,u){return n(),i("div",null,[Y,o("div",K,[e(l,{"max-width":"448",class:"mx-auto"},{default:t(()=>[e(h,null,{default:t(()=>[e(g,{color:"secondary",density:"prominent"},{prepend:t(()=>[e(b)]),append:t(()=>[e(r,{icon:""},{default:t(()=>[e(c,null,{default:t(()=>[a("mdi-dots-vertical")]),_:1})]),_:1})]),default:t(()=>[e(v,null,{default:t(()=>[a("My Recent Trips")]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(y,{fluid:""},{default:t(()=>[e(l,{class:"mb-2",density:"compact","prepend-avatar":"https://randomuser.me/api/portraits/women/10.jpg",subtitle:"Salsa, merengue, y cumbia",title:"Cuba",variant:"text"},{actions:t(()=>[e(r,{color:"primary",variant:"text"},{default:t(()=>[a("View More")]),_:1}),e(r,{color:"primary",variant:"text"},{default:t(()=>[a("See in Map")]),_:1})]),default:t(()=>[e(m,{src:"https://picsum.photos/512/128?image=660",height:"128",cover:""}),e(k,null,{default:t(()=>[a(" During my last trip to South America, I spent 2 weeks traveling through Patagonia in Chile. ")]),_:1})]),_:1}),e(l,{border:"",density:"comfortable","prepend-avatar":"https://randomuser.me/api/portraits/women/17.jpg",subtitle:"Salsa, merengue, y cumbia",title:"Florida",variant:"text"},{actions:t(()=>[e(r,{color:"primary",variant:"text"},{default:t(()=>[a("View More")]),_:1}),e(r,{color:"primary",variant:"text"},{default:t(()=>[a("See in Map")]),_:1})]),default:t(()=>[e(m,{src:"https://picsum.photos/512/128?random",height:"128",cover:""}),e(k,null,{default:t(()=>[a(" During my last trip to Florida, I spent 2 weeks traveling through the Everglades. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}var Z=f(R,[["render",U]]);const W=M({__name:"Appbar",setup(p){const u=A({title:"Appbar"}),s=A([{text:"Ui Components",disabled:!1,to:"#"},{text:"Appbar",disabled:!0}]);return(q,G)=>(n(),i(w,null,[e(C,{title:u.value.title,breadcrumbs:s.value},null,8,["title","breadcrumbs"]),e(V,null,{default:t(()=>[e(d,{cols:"12",sm:"12"},{default:t(()=>[e(_,{heading:"Appbar - Density"},{default:t(()=>[e(N)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(_,{heading:"Appbar - Images"},{default:t(()=>[e(E)]),_:1})]),_:1}),e(d,{cols:"12",sm:"12"},{default:t(()=>[e(_,{heading:"Appbar - Images"},{default:t(()=>[e(Z)]),_:1})]),_:1})]),_:1})],64))}});export{W as default};
