import{_ as $}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-3998d13b.js";import{e as g,g as m,r as o,o as s,c as u,w as t,f as b,i as w,F as h,a as e,n as k,b as i,t as B,d as C}from"./index-0bc1a26d.js";const P={class:"text-h5 mt-2 text-white"},S={class:"text-medium-emphasis text-white"},N=g({__name:"BackgroundCard",setup(f){const n=m([{color:"bg-secondary",icon:"grid",title:"460",subtitle:"New Products"},{color:"bg-error",icon:"archive",title:"50",subtitle:"Pending Apps"},{color:"bg-primary",icon:"users",title:"80",subtitle:"Customers"},{color:"bg-success",icon:"gift",title:"15",subtitle:"Birthday Gifts"},{color:"bg-warning",icon:"credit-card",title:"1800",subtitle:"Total Budgets"},{color:"bg-blue",icon:"github",title:"90",subtitle:"Best Designers"}]);return(v,x)=>{const _=o("vue-feather"),c=o("v-card-text"),r=o("v-card"),d=o("v-col"),p=o("v-row");return s(),u(p,null,{default:t(()=>[(s(!0),b(h,null,w(n.value,(l,a)=>(s(),u(d,{cols:"12",lg:"2",key:a},{default:t(()=>[e(r,{class:k(l.color)},{default:t(()=>[e(c,{class:"pa-6"},{default:t(()=>[e(_,{type:l.icon,class:"text-white"},null,8,["type"]),i("h5",P,B(l.title),1),i("span",S,B(l.subtitle),1)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024))),128))]),_:1})}}}),G=i("h4",{class:"text-h6"},"Card Title",-1),T=i("h5",{class:"text-h6 title"},"Special title treatment",-1),A=i("p",{class:"text-grey-darken-1 text-subtitle-1 mt-3"},"With supporting text below as a natural lead-in to additional content. ",-1),D=g({__name:"SampleCard",setup(f){const n=m([{color:"secondary",icon:"grid",title:"460",subtitle:"New Products"},{color:"error",icon:"archive",title:"50",subtitle:"Pending Apps"},{color:"primary",icon:"users",title:"80",subtitle:"Customers"},{color:"success",icon:"gift",title:"15",subtitle:"Birthday Gifts"},{color:"warning",icon:"credit-card",title:"1800",subtitle:"Total Budgets"},{color:"blue",icon:"github",title:"90",subtitle:"Best Designers"}]);return(v,x)=>{const _=o("v-card-header"),c=o("v-btn"),r=o("v-card-text"),d=o("v-card"),p=o("v-col"),l=o("v-row");return s(),u(l,null,{default:t(()=>[(s(!0),b(h,null,w(n.value,(a,y)=>(s(),u(p,{cols:"12",lg:"4",key:y},{default:t(()=>[e(d,null,{default:t(()=>[e(_,{class:k("py-4 px-6 bg-"+a.color)},{default:t(()=>[G]),_:2},1032,["class"]),e(r,{class:"pa-6"},{default:t(()=>[T,A,e(c,{class:"mt-4",color:a.color},{default:t(()=>[C("Go Somewhere")]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}}}),W=i("h5",{class:"text-h6 title"},"Special title treatment",-1),j=i("p",{class:"text-grey-darken-1 text-subtitle-1 mt-3"},"With supporting text below as a natural lead-in to additional content. ",-1),V=g({__name:"ButtonsCards",setup(f){const n=m([{color:"secondary",icon:"grid",title:"460",subtitle:"New Products"},{color:"error",icon:"archive",title:"50",subtitle:"Pending Apps"},{color:"primary",icon:"users",title:"80",subtitle:"Customers"},{color:"success",icon:"gift",title:"15",subtitle:"Birthday Gifts"},{color:"warning",icon:"credit-card",title:"1800",subtitle:"Total Budgets"},{color:"blue",icon:"github",title:"90",subtitle:"Best Designers"}]);return(v,x)=>{const _=o("v-btn"),c=o("v-card-text"),r=o("v-card"),d=o("v-col"),p=o("v-row");return s(),u(p,null,{default:t(()=>[(s(!0),b(h,null,w(n.value,(l,a)=>(s(),u(d,{cols:"12",lg:"4",key:a},{default:t(()=>[e(r,null,{default:t(()=>[e(c,{class:"pa-6"},{default:t(()=>[W,j,e(_,{class:"mt-4",color:l.color},{default:t(()=>[C("Go Somewhere")]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}}}),F=i("h5",{class:"text-h6 title"},"Special title treatment",-1),z=i("p",{class:"text-grey-darken-1 text-subtitle-1 mt-3"},"With supporting text below as a natural lead-in to additional content. ",-1),E=g({__name:"ImageCards",setup(f){const n=m([{image:"u1.jpg",color:"secondary",icon:"grid",title:"460",subtitle:"New Products"},{image:"u2.jpg",color:"error",icon:"archive",title:"50",subtitle:"Pending Apps"},{image:"u3.jpg",color:"primary",icon:"users",title:"80",subtitle:"Customers"}]);return(v,x)=>{const _=o("v-img"),c=o("v-btn"),r=o("v-card-text"),d=o("v-card"),p=o("v-col"),l=o("v-row");return s(),u(l,null,{default:t(()=>[(s(!0),b(h,null,w(n.value,(a,y)=>(s(),u(p,{cols:"12",lg:"4",key:y},{default:t(()=>[e(d,null,{default:t(()=>[e(_,{src:"../src/assets/images/background/"+a.image},null,8,["src"]),e(r,{class:"pa-6"},{default:t(()=>[F,z,e(c,{class:"mt-4",color:a.color},{default:t(()=>[C("Go Somewhere")]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}}}),q=g({__name:"CustomCards",setup(f){const n=m({title:"Custom Cards"}),v=m([{text:"Widgets",disabled:!1,to:"#"},{text:"Custom Cards",disabled:!0}]);return(x,_)=>{const c=o("v-col"),r=o("v-row");return s(),b(h,null,[e($,{title:n.value.title,breadcrumbs:v.value},null,8,["title","breadcrumbs"]),e(r,null,{default:t(()=>[e(c,{cols:"12"},{default:t(()=>[e(N)]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(D)]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(V)]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(E)]),_:1})]),_:1})],64)}}});export{q as default};
