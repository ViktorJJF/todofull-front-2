import{m as J,r as d,Z as T,s as C,o as g,c as y,w as a,a as l,f as o,P as w,h as n,y as _,u as x,g as p,J as D,T as Q,t as I,n as Z,v as G,A as H,k as L,F as K,d as A,aj as O,b0 as X,M as ee,l as $,C as te,j as b,aS as j,N as E,B as N,L as le,E as ae,ap as oe,ab as se,aU as ne,V as de}from"./index.5e21027b.js";import{B as ie}from"./BaseLeftRightPart.5d57bf98.js";/* empty css              */var ue=[{title:"Create and present administrator and operator training information	",notes:"Consider training a key group and have them train their peers.Evaluate the addition and deletion of user IDs",done:!1,date:"2020-04-28"},{title:"Create a solution maintenance plan",notes:"Establish a relationship between Tivoli Business Systems Manager and change management so that as the environment changes, business systems can change with it.",done:!1,date:"2020-04-28"},{title:"Tivoli Business Systems Manager SQL server jobs",notes:"Source/390 rediscoveries Batch schedule download/ process Database backup and maintenance",done:!1,date:"2020-04-28"},{title:"Implement distributed data feeds in the production environment.",notes:"Configure the Tivoli Enterprise Console rule to send events.",done:!0,date:"2018-05-01"},{title:"Verify connectivity from production servers to the production LPAR, Tivoli Enterprise Console server, and console machines.",notes:"Install Tivoli Business Systems Manager and appropriate patches on production servers.",done:!1,date:"2015-01-26"},{title:"Create configuration level objects for the production LPARs.",notes:"Create configuration level objects for the production LPARs.",done:!0,date:"2010-01-31"},{title:"Set up and test jobs on the database server to produce the database backup.",notes:"Set up and test jobs to copy backup databases to the history server.",done:!1,date:"1999-10-31"},{title:"Install the Tivoli Business Systems Manager health monitor software.",notes:"Customize the health monitor to match your environment.",done:!1,date:"2015-12-15"},{title:"Evaluate the addition and deletion of user IDs.",notes:"Monitor system performance and adjust hardware as required.",done:!1,date:"2018-12-05"}];const re={class:"pa-4"},me=o("h3",{class:"my-2 mb-4"},"Todo App",-1),ve={class:"d-flex align-center mt-6 mb-5"},pe=o("div",{class:"h4"},"Remaining Todo",-1),fe={class:"ml-auto"},ce={class:"d-flex align-center"},Ve=o("div",{class:""},"Completed Todo",-1),ge={class:"ml-auto"},_e={class:"pa-4"},be=["onClick"],he={class:"px-3"},ke=o("h2",null,null,-1),Te={class:"d-flex pa-2 align-center primary"},Ce={class:"ml-auto"},ye=["onSubmit"],Se=J({__name:"Todo",setup(we){const u=d(ue),f=d(""),V=d(""),r=d(""),c=d(!1),h=d(!1),k=d(!1),i=d(!1),s=d(),U=d({type:"string",mask:"YYYY-MM-DD"});function P(m){i.value=!i.value,s.value=u.value[m]}function R(m){u.value=u.value.filter(e=>e!==m),i.value=!i.value}function Y(){u.value.push({done:!1,title:f.value,notes:V.value,date:r.value}),f.value="",V.value="",r.value=""}const S=T(()=>u.value.filter(m=>m.done).length),z=T(()=>u.value.length-S.value),F=T(()=>f.value.length>0);return(m,e)=>{const q=C("perfect-scrollbar"),B=C("v-date-picker"),W=C("v-list-item-content");return g(),y(de,{fluid:""},{default:a(()=>[l(A,null,{default:a(()=>[l(ie,null,{leftpart:a(()=>[o("div",re,[me,o("div",ve,[pe,o("div",fe,[l(w,{close:"",color:"error",label:"","text-color":"white"},{default:a(()=>[n(_(x(z)),1)]),_:1})])]),o("div",ce,[Ve,o("div",ge,[l(w,{close:"",color:"success",label:"","text-color":"white"},{default:a(()=>[n(_(x(S)),1)]),_:1})])])])]),rightpart:a(()=>[o("div",_e,[l(p,{onClick:e[0]||(e[0]=D(t=>c.value=!0,["stop"]))},{default:a(()=>[n("Add Task")]),_:1})]),l(Q),l(I,null,{default:a(()=>[l(q,{class:"todoheight"},{default:a(()=>[(g(!0),Z(K,null,G(u.value,(t,v)=>(g(),y(H,{key:v,value:t.title,class:"d-flex align-top flex-shrink"},{default:a(()=>[o("div",null,[l(L,{modelValue:t.done,"onUpdate:modelValue":M=>t.done=M,color:t.done?"primary":"","hide-details":""},null,8,["modelValue","onUpdate:modelValue","color"])]),o("div",{class:"cursor-pointer",onClick:M=>P(v),style:{width:"80%"}},_(t.title),9,be),l(w,{small:"",label:"",class:"ml-auto flex-shrink-0",color:t.done?"green":"primary"},{default:a(()=>[n(_(t.date),1)]),_:2},1032,["color"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),l(ae,{modelValue:i.value,"onUpdate:modelValue":e[11]||(e[11]=t=>i.value=t),temporary:"",location:"right",width:"300"},{default:a(()=>[l(O,{flat:"",small:""},{default:a(()=>[l(X,null,{default:a(()=>[n(" Edit Todo ")]),_:1}),l(ee),l(p,{icon:"",color:"error",onClick:e[1]||(e[1]=t=>i.value=!1)},{default:a(()=>[l($,{size:"small"},{default:a(()=>[n("mdi-window-close")]),_:1})]),_:1})]),_:1}),l(I,{class:"pa-2"},{default:a(()=>[s.value?(g(),y(W,{key:0,class:"pt-0"},{default:a(()=>[l(te,null,{default:a(()=>[l(L,{modelValue:s.value.done,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value.done=t),color:s.value.done?"primary":"",label:s.value.done?"Mark As In-Complete":"Mark As Complete"},null,8,["modelValue","color","label"]),o("div",he,[l(b,{label:"Task",variant:"outlined",modelValue:s.value.title,"onUpdate:modelValue":e[3]||(e[3]=t=>s.value.title=t)},null,8,["modelValue"]),ke,l(j,{variant:"outlined",name:"input-7-4",label:"Notes",rows:"3",modelValue:s.value.notes,"onUpdate:modelValue":e[4]||(e[4]=t=>s.value.notes=t)},null,8,["modelValue"]),l(E,{modelValue:k.value,"onUpdate:modelValue":e[8]||(e[8]=t=>k.value=t),"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},{activator:a(({props:t})=>[l(b,N({modelValue:s.value.date,"onUpdate:modelValue":e[5]||(e[5]=v=>s.value.date=v),variant:"outlined",label:"Due Date"},t),null,16,["modelValue"])]),default:a(()=>[l(B,{modelValue:s.value.date,"onUpdate:modelValue":e[6]||(e[6]=t=>s.value.date=t),onInput:e[7]||(e[7]=t=>k.value=!1),"model-config":U.value},null,8,["modelValue","model-config"])]),_:1},8,["modelValue"]),l(p,{class:"mr-2",color:"success",onClick:e[9]||(e[9]=t=>i.value=!1)},{default:a(()=>[n("Save")]),_:1}),l(p,{color:"error",onClick:e[10]||(e[10]=t=>R(s.value))},{default:a(()=>[n("Delete Task")]),_:1})])]),_:1})]),_:1})):le("",!0)]),_:1})]),_:1},8,["modelValue"]),l(ne,{modelValue:c.value,"onUpdate:modelValue":e[20]||(e[20]=t=>c.value=t)},{default:a(()=>[l(A,null,{default:a(()=>[o("div",Te,[l(oe,{class:"headline white--text"},{default:a(()=>[n("Add Task")]),_:1}),o("div",Ce,[l(p,{icon:"",color:"gray",size:"small",onClick:e[12]||(e[12]=t=>c.value=!1)},{default:a(()=>[l($,{class:"white--text"},{default:a(()=>[n("mdi-window-close")]),_:1})]),_:1})])]),l(se,{class:""},{default:a(()=>[o("form",{onSubmit:D(Y,["prevent"])},[l(b,{modelValue:f.value,"onUpdate:modelValue":e[13]||(e[13]=t=>f.value=t),label:"Wraite Task Title",variant:"outlined",required:""},null,8,["modelValue"]),l(j,{modelValue:V.value,"onUpdate:modelValue":e[14]||(e[14]=t=>V.value=t),label:"Write Task Notes",variant:"outlined"},null,8,["modelValue"]),l(E,{modelValue:h.value,"onUpdate:modelValue":e[18]||(e[18]=t=>h.value=t),"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},{activator:a(({props:t})=>[l(b,N({modelValue:r.value,"onUpdate:modelValue":e[15]||(e[15]=v=>r.value=v),variant:"outlined",label:"Due Date"},t),null,16,["modelValue"])]),default:a(()=>[l(B,{modelValue:r.value,"onUpdate:modelValue":e[16]||(e[16]=t=>r.value=t),onInput:e[17]||(e[17]=t=>h.value=!1),"model-config":U.value},null,8,["modelValue","model-config"])]),_:1},8,["modelValue"]),l(p,{type:"submit",color:"primary",disabled:!x(F),onClick:e[19]||(e[19]=D(t=>c.value=!1,["stop"]))},{default:a(()=>[n("Submit Task")]),_:1},8,["disabled"])],40,ye)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{Se as default};
