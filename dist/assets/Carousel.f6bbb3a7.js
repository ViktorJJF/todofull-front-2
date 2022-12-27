import{_ as b}from"./BaseBreadcrumb.dbb828d0.js";import{_ as g}from"./BaseCard.63c61b5b.js";import{m as h,r as n,o as l,c as i,w as e,a as t,bf as v,n as d,F as _,v as y,bg as C,K as j,f as c,y as k,d as x,g as $,h as w,b as p,e as F}from"./index.bf7d454a.js";const V={class:"d-flex fill-height justify-center align-center"},S={class:"text-h2"},B=h({__name:"CarouselDelimiter",setup(f){const o=n(["green","secondary","yellow darken-4","red lighten-2","orange darken-1"]),r=n(["First","Second","Third","Fourth","Fifth"]);return(m,a)=>(l(),i(x,null,{default:e(()=>[t(v,{continuous:!1,"show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":"mdi-square",height:"350"},{default:e(()=>[(l(!0),d(_,null,y(r.value,(s,u)=>(l(),i(C,{key:u},{default:e(()=>[t(j,{color:o.value[u],height:"100%",tile:""},{default:e(()=>[c("div",V,[c("div",S,k(s)+" Slide",1)])]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),T={class:"d-flex fill-height justify-center align-center"},H={class:"text-h2"},M=h({__name:"CarouselCycle",setup(f){const o=n(["green","secondary","yellow darken-4","red lighten-2","orange darken-1"]),r=n(["First","Second","Third","Fourth","Fifth"]);return(m,a)=>(l(),i(x,null,{default:e(()=>[t(v,{cycle:"",height:"350","hide-delimiter-background":"","show-arrows":"hover"},{default:e(()=>[(l(!0),d(_,null,y(r.value,(s,u)=>(l(),i(C,{key:u},{default:e(()=>[t(j,{color:o.value[u],height:"100%"},{default:e(()=>[c("div",T,[c("div",H,k(s)+" Slide",1)])]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),N=h({__name:"CarouselHideControls",setup(f){const o=n([{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]);return(r,m)=>(l(),i(x,null,{default:e(()=>[t(v,{height:"350","show-arrows":!1},{default:e(()=>[(l(!0),d(_,null,y(o.value,(a,s)=>(l(),i(C,{key:s,src:a.src,cover:""},null,8,["src"]))),128))]),_:1})]),_:1}))}}),q={class:"d-flex fill-height justify-center mt-12 align-center"},D={class:"text-h3"},P=h({__name:"CarouselCustomArrow",setup(f){const o=n(["green","secondary","yellow darken-4","red lighten-2","orange darken-1"]),r=n(["First","Second","Third","Fourth","Fifth"]);return(m,a)=>(l(),i(x,{height:"350"},{default:e(()=>[t(v,{height:"350","show-arrows":"","hide-delimiter-background":""},{prev:e(({props:s})=>[t($,{color:"primary",onClick:s.onClick},{default:e(()=>[w("Previous slide")]),_:2},1032,["onClick"])]),next:e(({props:s})=>[t($,{color:"secondary",onClick:s.onClick},{default:e(()=>[w("Next slide")]),_:2},1032,["onClick"])]),default:e(()=>[(l(!0),d(_,null,y(r.value,(s,u)=>(l(),i(C,{key:u},{default:e(()=>[t(j,{color:o.value[u],height:"350"},{default:e(()=>[c("div",q,[c("div",D,k(s)+" Slide",1)])]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),U=h({__name:"CarouselHideDelimiter",setup(f){const o=n([{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]);return(r,m)=>(l(),i(x,null,{default:e(()=>[t(v,{height:"350","hide-delimiters":""},{default:e(()=>[(l(!0),d(_,null,y(o.value,(a,s)=>(l(),i(C,{key:s,src:a.src,cover:""},null,8,["src"]))),128))]),_:1})]),_:1}))}}),z={class:"d-flex fill-height justify-center align-center"},A={class:"text-h2"},E=h({__name:"CarouselProgress",setup(f){const o=n(["First","Second","Third","Fourth","Fifth"]);return(r,m)=>(l(),i(x,null,{default:e(()=>[t(v,{class:"theme-carousel",height:"350","hide-delimiters":"",progress:"primary"},{default:e(()=>[(l(!0),d(_,null,y(o.value,(a,s)=>(l(),i(C,{key:s},{default:e(()=>[t(j,{height:"100%"},{default:e(()=>[c("div",z,[c("div",A,k(a)+" Slide",1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}}),I={class:"d-flex justify-space-around align-center py-4"},K={class:"d-flex fill-height justify-center align-center"},L={class:"text-h2"},R=h({__name:"CarouselModel",setup(f){const o=n(["primary","secondary","yellow darken-2","red","orange"]),r=n(0);return(m,a)=>(l(),d(_,null,[c("div",I,[t($,{variant:"text",icon:"mdi-minus",onClick:a[0]||(a[0]=s=>r.value=Math.max(r.value-1,0))}),w(" "+k(r.value)+" ",1),t($,{variant:"text",icon:"mdi-plus",onClick:a[1]||(a[1]=s=>r.value=Math.min(r.value+1,4))})]),t(v,{modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=s=>r.value=s)},{default:e(()=>[(l(!0),d(_,null,y(o.value,(s,u)=>(l(),i(C,{key:s,value:u},{default:e(()=>[t(j,{color:s,height:"100%",tile:""},{default:e(()=>[c("div",K,[c("div",L,"Slide "+k(u+1),1)])]),_:2},1032,["color"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])],64))}}),Q=h({__name:"Carousel",setup(f){const o=n({title:"Carousel"}),r=n([{text:"Ui Components",disabled:!1,to:"#"},{text:"Carousel",disabled:!0}]);return(m,a)=>(l(),d(_,null,[t(b,{title:o.value.title,breadcrumbs:r.value},null,8,["title","breadcrumbs"]),t(F,null,{default:e(()=>[t(p,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(g,{heading:"Custom delimiters"},{default:e(()=>[t(B)]),_:1})]),_:1}),t(p,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(g,{heading:"Cycle"},{default:e(()=>[t(M)]),_:1})]),_:1}),t(p,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(g,{heading:"Hide Controls"},{default:e(()=>[t(N)]),_:1})]),_:1}),t(p,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(g,{heading:"Customized arrows"},{default:e(()=>[t(P)]),_:1})]),_:1}),t(p,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(g,{heading:"Hide delimiters"},{default:e(()=>[t(U)]),_:1})]),_:1}),t(p,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(g,{heading:"Progress Carousel"},{default:e(()=>[t(E)]),_:1})]),_:1}),t(p,{cols:"12",sm:"12",lg:"12"},{default:e(()=>[t(g,{heading:"Model"},{default:e(()=>[t(R)]),_:1})]),_:1})]),_:1})],64))}});export{Q as default};
