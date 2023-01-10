import{_ as w}from"./BaseBreadcrumb.3ca73932.js";import{_ as g}from"./BaseCard.a51e5b00.js";import{m as f,r as o,o as d,n as h,f as a,a as t,bf as y,p as l,h as c,y as V,F as _,w as e,br as C,e as x,b as i,d as n,ap as u,V as j}from"./index.5e21027b.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";const $=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can set a fixed aspect ratio if you want to change aspect ratio of the image. ",-1),k={class:"d-flex flex-column justify-space-between align-center mt-6"},R=f({__name:"ImagesAspectRatio",setup(m){const s=o(300),r=o(16/9);return(v,p)=>(d(),h(_,null,[$,a("div",k,[t(y,{modelValue:s.value,"onUpdate:modelValue":p[0]||(p[0]=b=>s.value=b),class:"align-self-stretch",min:"200",max:"500",step:"1"},null,8,["modelValue"]),t(l,{"aspect-ratio":r.value,width:s.value,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",cover:""},null,8,["aspect-ratio","width"]),c(" Width: "+V(s.value),1)])],64))}}),T=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," If the provided aspect ratio doesn\u2019t match that of the actual image, the default behavior is to fill as much space as possible without cropping. To fill the entire available space use the cover prop. ",-1),B={class:"d-flex justify-space-around align-center bg-grey-lighten-4"},F={class:"ma-4"},N=a("div",{class:"text-subtitle-2"},"Default",-1),A={class:"ma-4"},D=a("div",{class:"text-subtitle-2"},"Cover",-1),H=f({__name:"ImagesCover",setup(m){return o(300),o(16/9),o([{title:"16/9",value:16/9},{title:"4/3",value:4/3},{title:"1/1",value:1}]),(s,r)=>(d(),h(_,null,[T,a("div",B,[a("div",F,[N,t(l,{class:"bg-white",width:"300","aspect-ratio":1,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"})]),a("div",A,[D,t(l,{class:"bg-white",width:"300","aspect-ratio":1,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",cover:""})])])],64))}}),S={},U=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," v-img will automatically grow to the size of its src, preserving the correct aspect ratio. You can limit this with the height and max-height props. ",-1);function Y(m,s){return d(),h(_,null,[U,t(j,{class:"fill-height mt-6",fluid:"",style:{"min-height":"434px"}},{default:e(()=>[t(C,{mode:"out-in"},{default:e(()=>[t(x,null,{default:e(()=>[t(i,{cols:"6"},{default:e(()=>[t(n,null,{default:e(()=>[t(l,{src:"https://picsum.photos/350/165?random",height:"125",class:"bg-grey-lighten-2"}),t(u,{class:"text-h6"},{default:e(()=>[c(" height ")]),_:1})]),_:1})]),_:1}),t(i,{cols:"6"},{default:e(()=>[t(n,null,{default:e(()=>[t(l,{src:"https://picsum.photos/350/165?random",height:"125",cover:"",class:"bg-grey-lighten-2"}),t(u,{class:"text-h6"},{default:e(()=>[c(" height with cover ")]),_:1})]),_:1})]),_:1}),t(i,{cols:"6"},{default:e(()=>[t(n,null,{default:e(()=>[t(l,{src:"https://picsum.photos/350/165?random","max-height":"125",class:"bg-grey-lighten-2"}),t(u,{class:"text-h6"},{default:e(()=>[c(" max-height ")]),_:1})]),_:1})]),_:1}),t(i,{cols:"6"},{default:e(()=>[t(n,null,{default:e(()=>[t(l,{src:"https://picsum.photos/350/165?random","max-height":"125",cover:"",class:"bg-grey-lighten-2"}),t(u,{class:"text-h6"},{default:e(()=>[c(" max-height with cover ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}var z=I(S,[["render",Y]]);const J=f({__name:"Images",setup(m){const s=o({title:"Images"}),r=o([{text:"Ui Components",disabled:!1,to:"#"},{text:"Images",disabled:!0}]);return(v,p)=>(d(),h(_,null,[t(w,{title:s.value.title,breadcrumbs:r.value},null,8,["title","breadcrumbs"]),t(x,null,{default:e(()=>[t(i,{cols:"12",sm:"12"},{default:e(()=>[t(g,{heading:"Aspect Ratio"},{default:e(()=>[t(R)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12"},{default:e(()=>[t(g,{heading:"Cover"},{default:e(()=>[t(H)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12"},{default:e(()=>[t(g,{heading:"Height"},{default:e(()=>[t(z)]),_:1})]),_:1})]),_:1})],64))}});export{J as default};
