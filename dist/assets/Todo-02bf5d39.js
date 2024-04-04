import{e as le,g as d,v as x,r as a,o as b,c as C,w as l,a as o,b as n,d as i,t as h,u as w,l as U,f as ae,i as ne,F as se,m as L,p as ie}from"./index-a9f1c36b.js";import{_ as de}from"./BaseLeftRightPart.vue_vue_type_style_index_0_lang-11ae2acd.js";/* empty css              */const ue=[{title:"Create and present administrator and operator training information	",notes:"Consider training a key group and have them train their peers.Evaluate the addition and deletion of user IDs",done:!1,date:"2020-04-28"},{title:"Create a solution maintenance plan",notes:"Establish a relationship between Tivoli Business Systems Manager and change management so that as the environment changes, business systems can change with it.",done:!1,date:"2020-04-28"},{title:"Tivoli Business Systems Manager SQL server jobs",notes:"Source/390 rediscoveries Batch schedule download/ process Database backup and maintenance",done:!1,date:"2020-04-28"},{title:"Implement distributed data feeds in the production environment.",notes:"Configure the Tivoli Enterprise Console rule to send events.",done:!0,date:"2018-05-01"},{title:"Verify connectivity from production servers to the production LPAR, Tivoli Enterprise Console server, and console machines.",notes:"Install Tivoli Business Systems Manager and appropriate patches on production servers.",done:!1,date:"2015-01-26"},{title:"Create configuration level objects for the production LPARs.",notes:"Create configuration level objects for the production LPARs.",done:!0,date:"2010-01-31"},{title:"Set up and test jobs on the database server to produce the database backup.",notes:"Set up and test jobs to copy backup databases to the history server.",done:!1,date:"1999-10-31"},{title:"Install the Tivoli Business Systems Manager health monitor software.",notes:"Customize the health monitor to match your environment.",done:!1,date:"2015-12-15"},{title:"Evaluate the addition and deletion of user IDs.",notes:"Monitor system performance and adjust hardware as required.",done:!1,date:"2018-12-05"}],re={class:"pa-4"},ve=n("h3",{class:"my-2 mb-4"},"Todo App",-1),me={class:"d-flex align-center mt-6 mb-5"},ce=n("div",{class:"h4"},"Remaining Todo",-1),pe={class:"ml-auto"},_e={class:"d-flex align-center"},fe=n("div",{class:""},"Completed Todo",-1),ge={class:"ml-auto"},Ve={class:"pa-4"},be=["onClick"],he={class:"px-3"},ke=n("h2",null,null,-1),ye={class:"d-flex pa-2 align-center primary"},Te={class:"ml-auto"},xe=["onSubmit"],Se=le({__name:"Todo",setup(Ce){const r=d(ue),_=d(""),g=d(""),v=d(""),f=d(!1),k=d(!1),y=d(!1),u=d(!1),s=d(),D=d({type:"string",mask:"YYYY-MM-DD"});function P(m){u.value=!u.value,s.value=r.value[m]}function R(m){r.value=r.value.filter(e=>e!==m),u.value=!u.value}function Y(){r.value.push({done:!1,title:_.value,notes:g.value,date:v.value}),_.value="",g.value="",v.value=""}const S=x(()=>r.value.filter(m=>m.done).length),z=x(()=>r.value.length-S.value),q=x(()=>_.value.length>0);return(m,e)=>{const T=a("v-chip"),c=a("v-btn"),F=a("v-divider"),M=a("v-checkbox"),W=a("v-list-item"),Q=a("perfect-scrollbar"),$=a("v-list"),B=a("v-card"),G=a("v-toolbar-title"),H=a("v-spacer"),A=a("v-icon"),J=a("v-toolbar"),V=a("v-text-field"),I=a("v-textarea"),E=a("v-date-picker"),j=a("v-menu"),K=a("v-list-item-title"),O=a("v-list-item-content"),X=a("v-navigation-drawer"),Z=a("v-card-title"),ee=a("v-card-text"),te=a("v-dialog"),oe=a("v-container");return b(),C(oe,{fluid:""},{default:l(()=>[o(B,null,{default:l(()=>[o(de,null,{leftpart:l(()=>[n("div",re,[ve,n("div",me,[ce,n("div",pe,[o(T,{close:"",color:"error",label:"","text-color":"white"},{default:l(()=>[i(h(w(z)),1)]),_:1})])]),n("div",_e,[fe,n("div",ge,[o(T,{close:"",color:"success",label:"","text-color":"white"},{default:l(()=>[i(h(w(S)),1)]),_:1})])])])]),rightpart:l(()=>[n("div",Ve,[o(c,{onClick:e[0]||(e[0]=U(t=>f.value=!0,["stop"]))},{default:l(()=>[i("Add Task")]),_:1})]),o(F),o($,null,{default:l(()=>[o(Q,{class:"todoheight"},{default:l(()=>[(b(!0),ae(se,null,ne(r.value,(t,p)=>(b(),C(W,{key:p,value:t.title,class:"d-flex align-top flex-shrink"},{default:l(()=>[n("div",null,[o(M,{modelValue:t.done,"onUpdate:modelValue":N=>t.done=N,color:t.done?"primary":"","hide-details":""},null,8,["modelValue","onUpdate:modelValue","color"])]),n("div",{class:"cursor-pointer",onClick:N=>P(p),style:{width:"80%"}},h(t.title),9,be),o(T,{small:"",label:"",class:"ml-auto flex-shrink-0",color:t.done?"green":"primary"},{default:l(()=>[i(h(t.date),1)]),_:2},1032,["color"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),o(X,{modelValue:u.value,"onUpdate:modelValue":e[11]||(e[11]=t=>u.value=t),temporary:"",location:"right",width:"300"},{default:l(()=>[o(J,{flat:"",small:""},{default:l(()=>[o(G,null,{default:l(()=>[i(" Edit Todo ")]),_:1}),o(H),o(c,{icon:"",color:"error",onClick:e[1]||(e[1]=t=>u.value=!1)},{default:l(()=>[o(A,{size:"small"},{default:l(()=>[i("mdi-window-close")]),_:1})]),_:1})]),_:1}),o($,{class:"pa-2"},{default:l(()=>[s.value?(b(),C(O,{key:0,class:"pt-0"},{default:l(()=>[o(K,null,{default:l(()=>[o(M,{modelValue:s.value.done,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value.done=t),color:s.value.done?"primary":"",label:s.value.done?"Mark As In-Complete":"Mark As Complete"},null,8,["modelValue","color","label"]),n("div",he,[o(V,{label:"Task",variant:"outlined",modelValue:s.value.title,"onUpdate:modelValue":e[3]||(e[3]=t=>s.value.title=t)},null,8,["modelValue"]),ke,o(I,{variant:"outlined",name:"input-7-4",label:"Notes",rows:"3",modelValue:s.value.notes,"onUpdate:modelValue":e[4]||(e[4]=t=>s.value.notes=t)},null,8,["modelValue"]),o(j,{modelValue:y.value,"onUpdate:modelValue":e[8]||(e[8]=t=>y.value=t),"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},{activator:l(({props:t})=>[o(V,L({modelValue:s.value.date,"onUpdate:modelValue":e[5]||(e[5]=p=>s.value.date=p),variant:"outlined",label:"Due Date"},t),null,16,["modelValue"])]),default:l(()=>[o(E,{modelValue:s.value.date,"onUpdate:modelValue":e[6]||(e[6]=t=>s.value.date=t),onInput:e[7]||(e[7]=t=>y.value=!1),"model-config":D.value},null,8,["modelValue","model-config"])]),_:1},8,["modelValue"]),o(c,{class:"mr-2",color:"success",onClick:e[9]||(e[9]=t=>u.value=!1)},{default:l(()=>[i("Save")]),_:1}),o(c,{color:"error",onClick:e[10]||(e[10]=t=>R(s.value))},{default:l(()=>[i("Delete Task")]),_:1})])]),_:1})]),_:1})):ie("",!0)]),_:1})]),_:1},8,["modelValue"]),o(te,{modelValue:f.value,"onUpdate:modelValue":e[20]||(e[20]=t=>f.value=t)},{default:l(()=>[o(B,null,{default:l(()=>[n("div",ye,[o(Z,{class:"headline white--text"},{default:l(()=>[i("Add Task")]),_:1}),n("div",Te,[o(c,{icon:"",color:"gray",size:"small",onClick:e[12]||(e[12]=t=>f.value=!1)},{default:l(()=>[o(A,{class:"white--text"},{default:l(()=>[i("mdi-window-close")]),_:1})]),_:1})])]),o(ee,{class:""},{default:l(()=>[n("form",{onSubmit:U(Y,["prevent"])},[o(V,{modelValue:_.value,"onUpdate:modelValue":e[13]||(e[13]=t=>_.value=t),label:"Wraite Task Title",variant:"outlined",required:""},null,8,["modelValue"]),o(I,{modelValue:g.value,"onUpdate:modelValue":e[14]||(e[14]=t=>g.value=t),label:"Write Task Notes",variant:"outlined"},null,8,["modelValue"]),o(j,{modelValue:k.value,"onUpdate:modelValue":e[18]||(e[18]=t=>k.value=t),"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},{activator:l(({props:t})=>[o(V,L({modelValue:v.value,"onUpdate:modelValue":e[15]||(e[15]=p=>v.value=p),variant:"outlined",label:"Due Date"},t),null,16,["modelValue"])]),default:l(()=>[o(E,{modelValue:v.value,"onUpdate:modelValue":e[16]||(e[16]=t=>v.value=t),onInput:e[17]||(e[17]=t=>k.value=!1),"model-config":D.value},null,8,["modelValue","model-config"])]),_:1},8,["modelValue"]),o(c,{type:"submit",color:"primary",disabled:!w(q),onClick:e[19]||(e[19]=U(t=>f.value=!1,["stop"]))},{default:l(()=>[i("Submit Task")]),_:1},8,["disabled"])],40,xe)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{Se as default};
