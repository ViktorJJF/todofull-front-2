import{_ as d,e as b,g as _,r as s,o as p,f as h,j as c,b as i,a as t,d as m,t as y,F as g,w as e}from"./index-373165b0.js";import{B as C}from"./BaseBreadcrumb-1b88b47e.js";import{B as x}from"./BaseCard-8a021132.js";const I=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can set a fixed aspect ratio if you want to change aspect ratio of the image. ",-1),j={class:"d-flex flex-column justify-space-between align-center mt-6"},B=b({__name:"ImagesAspectRatio",setup(f){const n=_(300),o=_(16/9);return(l,r)=>{const a=s("v-slider"),u=s("v-img");return p(),h(g,null,[c(" ----------------------------------------------------------------------------- "),c(" Aspect Ratio "),c(" ----------------------------------------------------------------------------- "),I,i("div",j,[t(a,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=v=>n.value=v),class:"align-self-stretch",min:"200",max:"500",step:"1"},null,8,["modelValue"]),t(u,{"aspect-ratio":o.value,width:n.value,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",cover:""},null,8,["aspect-ratio","width"]),m(" Width: "+y(n.value),1)])],64)}}}),V=d(B,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/images/ImagesAspectRatio.vue"]]),D=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," If the provided aspect ratio doesn’t match that of the actual image, the default behavior is to fill as much space as possible without cropping. To fill the entire available space use the cover prop. ",-1),R={class:"d-flex justify-space-around align-center bg-grey-lighten-4"},T={class:"ma-4"},$=i("div",{class:"text-subtitle-2"},"Default",-1),k={class:"ma-4"},A=i("div",{class:"text-subtitle-2"},"Cover",-1),N=b({__name:"ImagesCover",setup(f){return _(300),_(16/9),_([{title:"16/9",value:16/9},{title:"4/3",value:4/3},{title:"1/1",value:1}]),(n,o)=>{const l=s("v-img");return p(),h(g,null,[c(" ----------------------------------------------------------------------------- "),c(" cover "),c(" ----------------------------------------------------------------------------- "),D,i("div",R,[i("div",T,[$,t(l,{class:"bg-white",width:"300","aspect-ratio":1,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"})]),i("div",k,[A,t(l,{class:"bg-white",width:"300","aspect-ratio":1,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",cover:""})])])],64)}}}),H=d(N,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/images/ImagesCover.vue"]]),F={},U=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," v-img will automatically grow to the size of its src, preserving the correct aspect ratio. You can limit this with the height and max-height props. ",-1);function Y(f,n){const o=s("v-img"),l=s("v-card-title"),r=s("v-card"),a=s("v-col"),u=s("v-row"),v=s("v-fade-transition"),w=s("v-container");return p(),h(g,null,[c(" ----------------------------------------------------------------------------- "),c(" height "),c(" ----------------------------------------------------------------------------- "),U,t(w,{class:"fill-height mt-6",fluid:"",style:{"min-height":"434px"}},{default:e(()=>[t(v,{mode:"out-in"},{default:e(()=>[t(u,null,{default:e(()=>[t(a,{cols:"6"},{default:e(()=>[t(r,null,{default:e(()=>[t(o,{src:"https://picsum.photos/350/165?random",height:"125",class:"bg-grey-lighten-2"}),t(l,{class:"text-h6"},{default:e(()=>[m(" height ")]),_:1})]),_:1})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(r,null,{default:e(()=>[t(o,{src:"https://picsum.photos/350/165?random",height:"125",cover:"",class:"bg-grey-lighten-2"}),t(l,{class:"text-h6"},{default:e(()=>[m(" height with cover ")]),_:1})]),_:1})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(r,null,{default:e(()=>[t(o,{src:"https://picsum.photos/350/165?random","max-height":"125",class:"bg-grey-lighten-2"}),t(l,{class:"text-h6"},{default:e(()=>[m(" max-height ")]),_:1})]),_:1})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(r,null,{default:e(()=>[t(o,{src:"https://picsum.photos/350/165?random","max-height":"125",cover:"",class:"bg-grey-lighten-2"}),t(l,{class:"text-h6"},{default:e(()=>[m(" max-height with cover ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const z=d(F,[["render",Y],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/images/ImagesHeight.vue"]]),E=b({__name:"Images",setup(f){const n=_({title:"Images"}),o=_([{text:"Ui Components",disabled:!1,to:"#"},{text:"Images",disabled:!0}]);return(l,r)=>{const a=s("v-col"),u=s("v-row");return p(),h(g,null,[t(C,{title:n.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),t(u,null,{default:e(()=>[t(a,{cols:"12",sm:"12"},{default:e(()=>[t(x,{heading:"Aspect Ratio"},{default:e(()=>[t(V)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:e(()=>[t(x,{heading:"Cover"},{default:e(()=>[t(H)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12"},{default:e(()=>[t(x,{heading:"Height"},{default:e(()=>[t(z)]),_:1})]),_:1})]),_:1})],64)}}}),G=d(E,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Images.vue"]]);export{G as default};
