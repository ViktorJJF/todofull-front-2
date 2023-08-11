import{_ as g,e as C,g as h,r as t,o as l,f as i,j as r,a as e,w as o,F as _,k as x,c as b,b as p,t as w,d as D}from"./index-373165b0.js";import{B as F}from"./BaseBreadcrumb-1b88b47e.js";import{B as k}from"./BaseCard-8a021132.js";const T={class:"d-flex fill-height justify-center align-center"},H={class:"text-h2"},S=C({__name:"CarouselDelimiter",setup(y){const a=h(["green","secondary","yellow darken-4","red lighten-2","orange darken-1"]),n=h(["First","Second","Third","Fourth","Fifth"]);return(j,c)=>{const s=t("v-sheet"),u=t("v-carousel-item"),f=t("v-carousel"),v=t("v-card");return l(),i(_,null,[r(" ----------------------------------------------------------------------------- "),r(" Delimiter "),r(" ----------------------------------------------------------------------------- "),e(v,null,{default:o(()=>[e(f,{continuous:!1,"show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":"mdi-square",height:"350"},{default:o(()=>[(l(!0),i(_,null,x(n.value,(d,m)=>(l(),b(u,{key:m},{default:o(()=>[e(s,{color:a.value[m],height:"100%",tile:""},{default:o(()=>[p("div",T,[p("div",H,w(d)+" Slide",1)])]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),_:1})],2112)}}}),B=g(S,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/carousel/CarouselDelimiter.vue"]]),M={class:"d-flex fill-height justify-center align-center"},V={class:"text-h2"},P=C({__name:"CarouselCycle",setup(y){const a=h(["green","secondary","yellow darken-4","red lighten-2","orange darken-1"]),n=h(["First","Second","Third","Fourth","Fifth"]);return(j,c)=>{const s=t("v-sheet"),u=t("v-carousel-item"),f=t("v-carousel"),v=t("v-card");return l(),i(_,null,[r(" ----------------------------------------------------------------------------- "),r(" Cycle "),r(" ----------------------------------------------------------------------------- "),e(v,null,{default:o(()=>[e(f,{cycle:"",height:"350","hide-delimiter-background":"","show-arrows":"hover"},{default:o(()=>[(l(!0),i(_,null,x(n.value,(d,m)=>(l(),b(u,{key:m},{default:o(()=>[e(s,{color:a.value[m],height:"100%"},{default:o(()=>[p("div",M,[p("div",V,w(d)+" Slide",1)])]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),_:1})],2112)}}}),N=g(P,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/carousel/CarouselCycle.vue"]]),A=C({__name:"CarouselHideControls",setup(y){const a=h([{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]);return(n,j)=>{const c=t("v-carousel-item"),s=t("v-carousel"),u=t("v-card");return l(),i(_,null,[r(" ----------------------------------------------------------------------------- "),r(" Hide Controls "),r(" ----------------------------------------------------------------------------- "),e(u,null,{default:o(()=>[e(s,{height:"350","show-arrows":!1},{default:o(()=>[(l(!0),i(_,null,x(a.value,(f,v)=>(l(),b(c,{key:v,src:f.src,cover:""},null,8,["src"]))),128))]),_:1})]),_:1})],2112)}}}),q=g(A,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/carousel/CarouselHideControls.vue"]]),U={class:"d-flex fill-height justify-center mt-12 align-center"},z={class:"text-h3"},E=C({__name:"CarouselCustomArrow",setup(y){const a=h(["green","secondary","yellow darken-4","red lighten-2","orange darken-1"]),n=h(["First","Second","Third","Fourth","Fifth"]);return(j,c)=>{const s=t("v-btn"),u=t("v-sheet"),f=t("v-carousel-item"),v=t("v-carousel"),d=t("v-card");return l(),i(_,null,[r(" ----------------------------------------------------------------------------- "),r(" Custom Arrow "),r(" ----------------------------------------------------------------------------- "),e(d,{height:"350"},{default:o(()=>[e(v,{height:"350","show-arrows":"","hide-delimiter-background":""},{prev:o(({props:m})=>[e(s,{color:"primary",onClick:m.onClick},{default:o(()=>[D("Previous slide")]),_:2},1032,["onClick"])]),next:o(({props:m})=>[e(s,{color:"secondary",onClick:m.onClick},{default:o(()=>[D("Next slide")]),_:2},1032,["onClick"])]),default:o(()=>[(l(!0),i(_,null,x(n.value,(m,$)=>(l(),b(f,{key:$},{default:o(()=>[e(u,{color:a.value[$],height:"350"},{default:o(()=>[p("div",U,[p("div",z,w(m)+" Slide",1)])]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),_:1})],2112)}}}),L=g(E,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/carousel/CarouselCustomArrow.vue"]]),G=C({__name:"CarouselHideDelimiter",setup(y){const a=h([{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]);return(n,j)=>{const c=t("v-carousel-item"),s=t("v-carousel"),u=t("v-card");return l(),i(_,null,[r(" ----------------------------------------------------------------------------- "),r(" Hide Delimiter "),r(" ----------------------------------------------------------------------------- "),e(u,null,{default:o(()=>[e(s,{height:"350","hide-delimiters":""},{default:o(()=>[(l(!0),i(_,null,x(a.value,(f,v)=>(l(),b(c,{key:v,src:f.src,cover:""},null,8,["src"]))),128))]),_:1})]),_:1})],2112)}}}),I=g(G,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/carousel/CarouselHideDelimiter.vue"]]),J={class:"d-flex fill-height justify-center align-center"},K={class:"text-h2"},O=C({__name:"CarouselProgress",setup(y){const a=h(["First","Second","Third","Fourth","Fifth"]);return(n,j)=>{const c=t("v-sheet"),s=t("v-carousel-item"),u=t("v-carousel"),f=t("v-card");return l(),i(_,null,[r(" ----------------------------------------------------------------------------- "),r(" Progress "),r(" ----------------------------------------------------------------------------- "),e(f,null,{default:o(()=>[e(u,{class:"theme-carousel",height:"350","hide-delimiters":"",progress:"primary"},{default:o(()=>[(l(!0),i(_,null,x(a.value,(v,d)=>(l(),b(s,{key:d},{default:o(()=>[e(c,{height:"100%"},{default:o(()=>[p("div",J,[p("div",K,w(v)+" Slide",1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})],2112)}}}),Q=g(O,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/carousel/CarouselProgress.vue"]]),R={class:"d-flex justify-space-around align-center py-4"},W={class:"d-flex fill-height justify-center align-center"},X={class:"text-h2"},Y=C({__name:"CarouselModel",setup(y){const a=h(["primary","secondary","yellow darken-2","red","orange"]),n=h(0);return(j,c)=>{const s=t("v-btn"),u=t("v-sheet"),f=t("v-carousel-item"),v=t("v-carousel");return l(),i(_,null,[r(" ----------------------------------------------------------------------------- "),r(" Model "),r(" ----------------------------------------------------------------------------- "),p("div",R,[e(s,{variant:"text",icon:"mdi-minus",onClick:c[0]||(c[0]=d=>n.value=Math.max(n.value-1,0))}),D(" "+w(n.value)+" ",1),e(s,{variant:"text",icon:"mdi-plus",onClick:c[1]||(c[1]=d=>n.value=Math.min(n.value+1,4))})]),e(v,{modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=d=>n.value=d)},{default:o(()=>[(l(!0),i(_,null,x(a.value,(d,m)=>(l(),b(f,{key:d,value:m},{default:o(()=>[e(u,{color:d,height:"100%",tile:""},{default:o(()=>[p("div",W,[p("div",X,"Slide "+w(m+1),1)])]),_:2},1032,["color"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])],64)}}}),Z=g(Y,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/carousel/CarouselModel.vue"]]),ee=C({__name:"Carousel",setup(y){const a=h({title:"Carousel"}),n=h([{text:"Ui Components",disabled:!1,to:"#"},{text:"Carousel",disabled:!0}]);return(j,c)=>{const s=t("v-col"),u=t("v-row");return l(),i(_,null,[e(F,{title:a.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),e(u,null,{default:o(()=>[e(s,{cols:"12",sm:"12",lg:"6"},{default:o(()=>[e(k,{heading:"Custom delimiters"},{default:o(()=>[e(B)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12",lg:"6"},{default:o(()=>[e(k,{heading:"Cycle"},{default:o(()=>[e(N)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12",lg:"6"},{default:o(()=>[e(k,{heading:"Hide Controls"},{default:o(()=>[e(q)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12",lg:"6"},{default:o(()=>[e(k,{heading:"Customized arrows"},{default:o(()=>[e(L)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12",lg:"6"},{default:o(()=>[e(k,{heading:"Hide delimiters"},{default:o(()=>[e(I)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12",lg:"6"},{default:o(()=>[e(k,{heading:"Progress Carousel"},{default:o(()=>[e(Q)]),_:1})]),_:1}),e(s,{cols:"12",sm:"12",lg:"12"},{default:o(()=>[e(k,{heading:"Model"},{default:o(()=>[e(Z)]),_:1})]),_:1})]),_:1})],64)}}}),le=g(ee,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Carousel.vue"]]);export{le as default};
