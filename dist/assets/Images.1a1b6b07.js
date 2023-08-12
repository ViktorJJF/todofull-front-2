import{_ as b}from"./BaseBreadcrumb.33f0bbe0.js";import{_ as f}from"./BaseCard.56fbdd23.js";import{e as v,g as r,r as s,o as m,f as u,b as c,a as t,d,t as w,F as h,w as e}from"./index.5f175718.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const j=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can set a fixed aspect ratio if you want to change aspect ratio of the image. ",-1),$={class:"d-flex flex-column justify-space-between align-center mt-6"},C=v({__name:"ImagesAspectRatio",setup(p){const i=r(300),o=r(16/9);return(l,n)=>{const a=s("v-slider"),_=s("v-img");return m(),u(h,null,[j,c("div",$,[t(a,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=g=>i.value=g),class:"align-self-stretch",min:"200",max:"500",step:"1"},null,8,["modelValue"]),t(_,{"aspect-ratio":o.value,width:i.value,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",cover:""},null,8,["aspect-ratio","width"]),d(" Width: "+w(i.value),1)])],64)}}}),I=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," If the provided aspect ratio doesn\u2019t match that of the actual image, the default behavior is to fill as much space as possible without cropping. To fill the entire available space use the cover prop. ",-1),V={class:"d-flex justify-space-around align-center bg-grey-lighten-4"},k={class:"ma-4"},B=c("div",{class:"text-subtitle-2"},"Default",-1),N={class:"ma-4"},R=c("div",{class:"text-subtitle-2"},"Cover",-1),A=v({__name:"ImagesCover",setup(p){return r(300),r(16/9),r([{title:"16/9",value:16/9},{title:"4/3",value:4/3},{title:"1/1",value:1}]),(i,o)=>{const l=s("v-img");return m(),u(h,null,[I,c("div",V,[c("div",k,[B,t(l,{class:"bg-white",width:"300","aspect-ratio":1,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"})]),c("div",N,[R,t(l,{class:"bg-white",width:"300","aspect-ratio":1,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",cover:""})])])],64)}}}),D={},F=c("p",{class:"text-subtitle-1 text-grey-darken-1"}," v-img will automatically grow to the size of its src, preserving the correct aspect ratio. You can limit this with the height and max-height props. ",-1);function H(p,i){const o=s("v-img"),l=s("v-card-title"),n=s("v-card"),a=s("v-col"),_=s("v-row"),g=s("v-fade-transition"),x=s("v-container");return m(),u(h,null,[F,t(x,{class:"fill-height mt-6",fluid:"",style:{"min-height":"434px"}},{default:e(()=>[t(g,{mode:"out-in"},{default:e(()=>[t(_,null,{default:e(()=>[t(a,{cols:"6"},{default:e(()=>[t(n,null,{default:e(()=>[t(o,{src:"https://picsum.photos/350/165?random",height:"125",class:"bg-grey-lighten-2"}),t(l,{class:"text-h6"},{default:e(()=>[d(" height ")]),_:1})]),_:1})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(n,null,{default:e(()=>[t(o,{src:"https://picsum.photos/350/165?random",height:"125",cover:"",class:"bg-grey-lighten-2"}),t(l,{class:"text-h6"},{default:e(()=>[d(" height with cover ")]),_:1})]),_:1})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(n,null,{default:e(()=>[t(o,{src:"https://picsum.photos/350/165?random","max-height":"125",class:"bg-grey-lighten-2"}),t(l,{class:"text-h6"},{default:e(()=>[d(" max-height ")]),_:1})]),_:1})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(n,null,{default:e(()=>[t(o,{src:"https://picsum.photos/350/165?random","max-height":"125",cover:"",class:"bg-grey-lighten-2"}),t(l,{class:"text-h6"},{default:e(()=>[d(" max-height with cover ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}var T=y(D,[["render",H]]);const S=v({__name:"Images",setup(p){const i=r({title:"Images"}),o=r([{text:"Ui Components",disabled:!1,to:"#"},{text:"Images",disabled:!0}]);return(l,n)=>{const a=s("v-col"),_=s("v-row");return m(),u(h,null,[t(b,{title:i.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),t(_,null,{default:e(()=>[t(a,{cols:"12",sm:"12"},{default:e(()=>[t(f,{heading:"Aspect Ratio"},{default:e(()=>[t(C)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:e(()=>[t(f,{heading:"Cover"},{default:e(()=>[t(A)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:e(()=>[t(f,{heading:"Height"},{default:e(()=>[t(T)]),_:1})]),_:1})]),_:1})],64)}}});export{S as default};
