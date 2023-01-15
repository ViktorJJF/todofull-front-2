import{_ as B}from"./BaseBreadcrumb.da36eaea.js";import{_ as m}from"./BaseCard.ef377dab.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,n as r,a as e,w as t,V as C,e as f,F as c,v as p,b as o,W as g,d as h,D as T,f as i,y,U as x,bo as I,m as S,r as b,c as V,p as q,g as G,s as D,aj as U,b0 as F,h as k,ab as N,j as E,aS as L,T as $,P,aY as Y,M as z}from"./index.697a154f.js";const A={},R=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," The selected-class prop allows you to designate a CSS class applied to selected items. ",-1),W={class:"text-h6 flex-grow-1 text-center"};function H(_,u){return s(),r(c,null,[R,e(x,{"selected-class":"bg-primary",class:"mt-6"},{default:t(()=>[e(C,null,{default:t(()=>[e(f,null,{default:t(()=>[(s(),r(c,null,p(3,l=>e(o,{key:l,cols:"12",md:"4"},{default:t(()=>[e(g,null,{default:t(({isSelected:a,selectedClass:n,toggle:d})=>[e(h,{class:T(["d-flex align-center",n]),dark:"",height:"90",onClick:d},{default:t(()=>[i("div",W,y(a?"Selected":"Click Me!"),1)]),_:2},1032,["class","onClick"])]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})],64)}var J=v(A,[["render",H]]);const K={},O=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," mandatory item groups must have at least 1 item selected. ",-1),Q={class:"text-h6 flex-grow-1 text-center"};function X(_,u){return s(),r(c,null,[O,e(x,{mandatory:"",class:"mt-6"},{default:t(()=>[e(C,null,{default:t(()=>[e(f,null,{default:t(()=>[(s(),r(c,null,p(3,l=>e(o,{key:l,cols:"12",md:"4"},{default:t(()=>[e(g,null,{default:t(({isSelected:a,toggle:n})=>[e(h,{color:a?"primary":"",class:"d-flex align-center",dark:"",height:"90",onClick:n},{default:t(()=>[e(I,null,{default:t(()=>[i("div",Q,y(a?"Selected":"Click Me!"),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})],64)}var Z=v(K,[["render",X]]);const ee={},te=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Item groups can have multiple items selected. ",-1),le={class:"text-h6 flex-grow-1 text-center"};function ae(_,u){return s(),r(c,null,[te,e(x,{multiple:"",class:"mt-6"},{default:t(()=>[e(C,null,{default:t(()=>[e(f,null,{default:t(()=>[(s(),r(c,null,p(3,l=>e(o,{key:l,cols:"12",md:"4"},{default:t(()=>[e(g,null,{default:t(({isSelected:a,toggle:n})=>[e(h,{color:a?"primary":"",class:"d-flex align-center",dark:"",height:"90",onClick:n},{default:t(()=>[e(I,null,{default:t(()=>[i("div",le,y(a?"Selected":"Click Me!"),1)]),_:2},1024)]),_:2},1032,["color","onClick"])]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})],64)}var se=v(ee,[["render",ae]]);const ne=S({__name:"GrpItemSelection",setup(_){const u=b([{src:"backgrounds/bg.jpg"},{src:"backgrounds/md.jpg"}]),l=b([]);return(a,n)=>(s(),V(h,null,{default:t(()=>[e(C,{class:"pa-1"},{default:t(()=>[e(x,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=d=>l.value=d),multiple:""},{default:t(()=>[e(f,null,{default:t(()=>[(s(!0),r(c,null,p(u.value,(d,M)=>(s(),V(o,{key:M,cols:"12",md:"6"},{default:t(()=>[e(g,null,{default:t(({isSelected:w,toggle:j})=>[e(q,{src:`https://cdn.vuetifyjs.com/images/${d.src}`,height:"150",class:"text-right pa-2",onClick:j},{default:t(()=>[e(G,{icon:w?"mdi-heart":"mdi-heart-outline"},null,8,["icon"])]),_:2},1032,["src","onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),re={},ce=i("p",{class:"text-subtitle-1 text-grey-darken-1"}," Easily hook up a custom chip group. ",-1);function oe(_,u){const l=D("v-subheader");return s(),r(c,null,[ce,e(h,{class:"mt-6"},{default:t(()=>[e(U,{flat:"",color:"secondary",dark:""},{default:t(()=>[e(F,null,{default:t(()=>[k("Submit a post")]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(E,{variant:"filled",label:"Title",value:"My new post"}),e(L,{variant:"filled",label:"Text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"}),e($,{class:"my-2"}),e(x,{multiple:"","selected-class":"bg-secondary"},{default:t(()=>[e(l,null,{default:t(()=>[k("Tags")]),_:1}),(s(),r(c,null,p(8,a=>e(g,{key:a},{default:t(({selectedClass:n,toggle:d})=>[e(P,{class:T(n),onClick:d},{default:t(()=>[k(" Tag "+y(a),1)]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1})]),_:1}),e($),e(Y,null,{default:t(()=>[e(z),e(G,{color:"success"},{default:t(()=>[k(" Post ")]),_:1})]),_:1})]),_:1})],64)}var ue=v(re,[["render",oe]]);const fe=S({__name:"ItemGroups",setup(_){const u=b({title:"Item Groups"}),l=b([{text:"Ui Components",disabled:!1,to:"#"},{text:"Item Groups",disabled:!0}]);return(a,n)=>(s(),r(c,null,[e(B,{title:u.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),e(f,null,{default:t(()=>[e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(m,{heading:"Selected Item"},{default:t(()=>[e(J)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(m,{heading:"Mandatory"},{default:t(()=>[e(Z)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(m,{heading:"Multiple"},{default:t(()=>[e(se)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(m,{heading:"Selection"},{default:t(()=>[e(ne)]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:t(()=>[e(m,{heading:"Chips"},{default:t(()=>[e(ue)]),_:1})]),_:1})]),_:1})],64))}});export{fe as default};
