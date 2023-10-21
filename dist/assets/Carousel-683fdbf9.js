import{_ as w}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-cbe058b9.js";import{_ as C}from"./BaseCard.vue_vue_type_script_setup_true_lang-08e0cb31.js";import{e as g,g as m,r as s,o as l,c as v,w as e,a as t,f,i as x,F as p,b as h,t as j,d as $}from"./index-3fba6ee6.js";const F={class:"d-flex fill-height justify-center align-center"},S={class:"text-h2"},V=g({__name:"CarouselDelimiter",setup(y){const r=m(["green","secondary","yellow darken-4","red lighten-2","orange darken-1"]),n=m(["First","Second","Third","Fourth","Fifth"]);return(k,c)=>{const o=s("v-sheet"),a=s("v-carousel-item"),i=s("v-carousel"),d=s("v-card");return l(),v(d,null,{default:e(()=>[t(i,{continuous:!1,"show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":"mdi-square",height:"350"},{default:e(()=>[(l(!0),f(p,null,x(n.value,(_,u)=>(l(),v(a,{key:u},{default:e(()=>[t(o,{color:r.value[u],height:"100%",tile:""},{default:e(()=>[h("div",F,[h("div",S,j(_)+" Slide",1)])]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),_:1})}}}),T={class:"d-flex fill-height justify-center align-center"},B={class:"text-h2"},H=g({__name:"CarouselCycle",setup(y){const r=m(["green","secondary","yellow darken-4","red lighten-2","orange darken-1"]),n=m(["First","Second","Third","Fourth","Fifth"]);return(k,c)=>{const o=s("v-sheet"),a=s("v-carousel-item"),i=s("v-carousel"),d=s("v-card");return l(),v(d,null,{default:e(()=>[t(i,{cycle:"",height:"350","hide-delimiter-background":"","show-arrows":"hover"},{default:e(()=>[(l(!0),f(p,null,x(n.value,(_,u)=>(l(),v(a,{key:u},{default:e(()=>[t(o,{color:r.value[u],height:"100%"},{default:e(()=>[h("div",T,[h("div",B,j(_)+" Slide",1)])]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),_:1})}}}),M=g({__name:"CarouselHideControls",setup(y){const r=m([{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]);return(n,k)=>{const c=s("v-carousel-item"),o=s("v-carousel"),a=s("v-card");return l(),v(a,null,{default:e(()=>[t(o,{height:"350","show-arrows":!1},{default:e(()=>[(l(!0),f(p,null,x(r.value,(i,d)=>(l(),v(c,{key:d,src:i.src,cover:""},null,8,["src"]))),128))]),_:1})]),_:1})}}}),N={class:"d-flex fill-height justify-center mt-12 align-center"},q={class:"text-h3"},D=g({__name:"CarouselCustomArrow",setup(y){const r=m(["green","secondary","yellow darken-4","red lighten-2","orange darken-1"]),n=m(["First","Second","Third","Fourth","Fifth"]);return(k,c)=>{const o=s("v-btn"),a=s("v-sheet"),i=s("v-carousel-item"),d=s("v-carousel"),_=s("v-card");return l(),v(_,{height:"350"},{default:e(()=>[t(d,{height:"350","show-arrows":"","hide-delimiter-background":""},{prev:e(({props:u})=>[t(o,{color:"primary",onClick:u.onClick},{default:e(()=>[$("Previous slide")]),_:2},1032,["onClick"])]),next:e(({props:u})=>[t(o,{color:"secondary",onClick:u.onClick},{default:e(()=>[$("Next slide")]),_:2},1032,["onClick"])]),default:e(()=>[(l(!0),f(p,null,x(n.value,(u,b)=>(l(),v(i,{key:b},{default:e(()=>[t(a,{color:r.value[b],height:"350"},{default:e(()=>[h("div",N,[h("div",q,j(u)+" Slide",1)])]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),_:1})}}}),P=g({__name:"CarouselHideDelimiter",setup(y){const r=m([{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]);return(n,k)=>{const c=s("v-carousel-item"),o=s("v-carousel"),a=s("v-card");return l(),v(a,null,{default:e(()=>[t(o,{height:"350","hide-delimiters":""},{default:e(()=>[(l(!0),f(p,null,x(r.value,(i,d)=>(l(),v(c,{key:d,src:i.src,cover:""},null,8,["src"]))),128))]),_:1})]),_:1})}}}),U={class:"d-flex fill-height justify-center align-center"},z={class:"text-h2"},A=g({__name:"CarouselProgress",setup(y){const r=m(["First","Second","Third","Fourth","Fifth"]);return(n,k)=>{const c=s("v-sheet"),o=s("v-carousel-item"),a=s("v-carousel"),i=s("v-card");return l(),v(i,null,{default:e(()=>[t(a,{class:"theme-carousel",height:"350","hide-delimiters":"",progress:"primary"},{default:e(()=>[(l(!0),f(p,null,x(r.value,(d,_)=>(l(),v(o,{key:_},{default:e(()=>[t(c,{height:"100%"},{default:e(()=>[h("div",U,[h("div",z,j(d)+" Slide",1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}}),E={class:"d-flex justify-space-around align-center py-4"},L={class:"d-flex fill-height justify-center align-center"},G={class:"text-h2"},I=g({__name:"CarouselModel",setup(y){const r=m(["primary","secondary","yellow darken-2","red","orange"]),n=m(0);return(k,c)=>{const o=s("v-btn"),a=s("v-sheet"),i=s("v-carousel-item"),d=s("v-carousel");return l(),f(p,null,[h("div",E,[t(o,{variant:"text",icon:"mdi-minus",onClick:c[0]||(c[0]=_=>n.value=Math.max(n.value-1,0))}),$(" "+j(n.value)+" ",1),t(o,{variant:"text",icon:"mdi-plus",onClick:c[1]||(c[1]=_=>n.value=Math.min(n.value+1,4))})]),t(d,{modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=_=>n.value=_)},{default:e(()=>[(l(!0),f(p,null,x(r.value,(_,u)=>(l(),v(i,{key:_,value:u},{default:e(()=>[t(a,{color:_,height:"100%",tile:""},{default:e(()=>[h("div",L,[h("div",G,"Slide "+j(u+1),1)])]),_:2},1032,["color"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])],64)}}}),Q=g({__name:"Carousel",setup(y){const r=m({title:"Carousel"}),n=m([{text:"Ui Components",disabled:!1,to:"#"},{text:"Carousel",disabled:!0}]);return(k,c)=>{const o=s("v-col"),a=s("v-row");return l(),f(p,null,[t(w,{title:r.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),t(a,null,{default:e(()=>[t(o,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(C,{heading:"Custom delimiters"},{default:e(()=>[t(V)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(C,{heading:"Cycle"},{default:e(()=>[t(H)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(C,{heading:"Hide Controls"},{default:e(()=>[t(M)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(C,{heading:"Customized arrows"},{default:e(()=>[t(D)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(C,{heading:"Hide delimiters"},{default:e(()=>[t(P)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(C,{heading:"Progress Carousel"},{default:e(()=>[t(A)]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"12"},{default:e(()=>[t(C,{heading:"Model"},{default:e(()=>[t(I)]),_:1})]),_:1})]),_:1})],64)}}});export{Q as default};