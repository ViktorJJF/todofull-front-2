import{_ as ae,e as ne,g as i,v as x,r as a,o as h,c as C,w as l,j as v,a as o,b as n,d,t as k,u as D,p as U,f as se,k as de,F as ie,m as R}from"./index-b5291b3b.js";import{B as re}from"./BaseLeftRightPart-164bd151.js";/* empty css              */const ue=[{title:"Create and present administrator and operator training information	",notes:"Consider training a key group and have them train their peers.Evaluate the addition and deletion of user IDs",done:!1,date:"2020-04-28"},{title:"Create a solution maintenance plan",notes:"Establish a relationship between Tivoli Business Systems Manager and change management so that as the environment changes, business systems can change with it.",done:!1,date:"2020-04-28"},{title:"Tivoli Business Systems Manager SQL server jobs",notes:"Source/390 rediscoveries Batch schedule download/ process Database backup and maintenance",done:!1,date:"2020-04-28"},{title:"Implement distributed data feeds in the production environment.",notes:"Configure the Tivoli Enterprise Console rule to send events.",done:!0,date:"2018-05-01"},{title:"Verify connectivity from production servers to the production LPAR, Tivoli Enterprise Console server, and console machines.",notes:"Install Tivoli Business Systems Manager and appropriate patches on production servers.",done:!1,date:"2015-01-26"},{title:"Create configuration level objects for the production LPARs.",notes:"Create configuration level objects for the production LPARs.",done:!0,date:"2010-01-31"},{title:"Set up and test jobs on the database server to produce the database backup.",notes:"Set up and test jobs to copy backup databases to the history server.",done:!1,date:"1999-10-31"},{title:"Install the Tivoli Business Systems Manager health monitor software.",notes:"Customize the health monitor to match your environment.",done:!1,date:"2015-12-15"},{title:"Evaluate the addition and deletion of user IDs.",notes:"Monitor system performance and adjust hardware as required.",done:!1,date:"2018-12-05"}];const ve={class:"pa-4"},me=n("h3",{class:"my-2 mb-4"},"Todo App",-1),ce={class:"d-flex align-center mt-6 mb-5"},pe=n("div",{class:"h4"},"Remaining Todo",-1),_e={class:"ml-auto"},fe={class:"d-flex align-center"},ge=n("div",{class:""},"Completed Todo",-1),Ve={class:"ml-auto"},be={class:"pa-4"},he=["onClick"],ke={class:"px-3"},Te=n("h2",null,null,-1),ye={class:"d-flex pa-2 align-center primary"},we={class:"ml-auto"},xe=["onSubmit"],Ce=ne({__name:"Todo",setup(De){const u=i(ue),f=i(""),V=i(""),m=i(""),g=i(!1),T=i(!1),y=i(!1),r=i(!1),s=i(),S=i({type:"string",mask:"YYYY-MM-DD"});function P(c){r.value=!r.value,s.value=u.value[c]}function Y(c){u.value=u.value.filter(e=>e!==c),r.value=!r.value}function z(){u.value.push({done:!1,title:f.value,notes:V.value,date:m.value}),f.value="",V.value="",m.value=""}const B=x(()=>u.value.filter(c=>c.done).length),q=x(()=>u.value.length-B.value),F=x(()=>f.value.length>0);return(c,e)=>{const w=a("v-chip"),p=a("v-btn"),W=a("v-divider"),M=a("v-checkbox"),Q=a("v-list-item"),G=a("perfect-scrollbar"),A=a("v-list"),E=a("v-card"),H=a("v-toolbar-title"),J=a("v-spacer"),$=a("v-icon"),K=a("v-toolbar"),b=a("v-text-field"),j=a("v-textarea"),I=a("v-date-picker"),L=a("v-menu"),O=a("v-list-item-title"),X=a("v-list-item-content"),Z=a("v-navigation-drawer"),ee=a("v-card-title"),te=a("v-card-text"),oe=a("v-dialog"),le=a("v-container");return h(),C(le,{fluid:""},{default:l(()=>[v(` -------------------------------------------------------------------------------------\r
        Todo Room \r
    -------------------------------------------------------------------------------------`),o(E,null,{default:l(()=>[o(re,null,{leftpart:l(()=>[n("div",ve,[me,n("div",ce,[pe,n("div",_e,[o(w,{close:"",color:"error",label:"","text-color":"white"},{default:l(()=>[d(k(D(q)),1)]),_:1})])]),n("div",fe,[ge,n("div",Ve,[o(w,{close:"",color:"success",label:"","text-color":"white"},{default:l(()=>[d(k(D(B)),1)]),_:1})])])])]),rightpart:l(()=>[n("div",be,[o(p,{onClick:e[0]||(e[0]=U(t=>g.value=!0,["stop"]))},{default:l(()=>[d("Add Task")]),_:1})]),o(W),v(` -------------------------------------------------------------------------------------\r
            List todo\r
           -------------------------------------------------------------------------------------`),o(A,null,{default:l(()=>[o(G,{class:"todoheight"},{default:l(()=>[(h(!0),se(ie,null,de(u.value,(t,_)=>(h(),C(Q,{key:_,value:t.title,class:"d-flex align-top flex-shrink"},{default:l(()=>[n("div",null,[o(M,{modelValue:t.done,"onUpdate:modelValue":N=>t.done=N,color:t.done?"primary":"","hide-details":""},null,8,["modelValue","onUpdate:modelValue","color"])]),n("div",{class:"cursor-pointer",onClick:N=>P(_),style:{width:"80%"}},k(t.title),9,he),o(w,{small:"",label:"",class:"ml-auto flex-shrink-0",color:t.done?"green":"primary"},{default:l(()=>[d(k(t.date),1)]),_:2},1032,["color"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),v(` -------------------------------------------------------------------------------------\r
            Edit Task Drawer\r
    -------------------------------------------------------------------------------------`),o(Z,{modelValue:r.value,"onUpdate:modelValue":e[11]||(e[11]=t=>r.value=t),temporary:"",location:"right",width:"300"},{default:l(()=>[o(K,{flat:"",small:""},{default:l(()=>[o(H,null,{default:l(()=>[d(" Edit Todo ")]),_:1}),o(J),o(p,{icon:"",color:"error",onClick:e[1]||(e[1]=t=>r.value=!1)},{default:l(()=>[o($,{size:"small"},{default:l(()=>[d("mdi-window-close")]),_:1})]),_:1})]),_:1}),v(` -------------------------------------------------------------------------------------\r
            Todo edit\r
    -------------------------------------------------------------------------------------`),o(A,{class:"pa-2"},{default:l(()=>[s.value?(h(),C(X,{key:0,class:"pt-0"},{default:l(()=>[o(O,null,{default:l(()=>[o(M,{modelValue:s.value.done,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value.done=t),color:s.value.done?"primary":"",label:s.value.done?"Mark As In-Complete":"Mark As Complete"},null,8,["modelValue","color","label"]),n("div",ke,[o(b,{label:"Task",variant:"outlined",modelValue:s.value.title,"onUpdate:modelValue":e[3]||(e[3]=t=>s.value.title=t)},null,8,["modelValue"]),Te,o(j,{variant:"outlined",name:"input-7-4",label:"Notes",rows:"3",modelValue:s.value.notes,"onUpdate:modelValue":e[4]||(e[4]=t=>s.value.notes=t)},null,8,["modelValue"]),o(L,{modelValue:y.value,"onUpdate:modelValue":e[8]||(e[8]=t=>y.value=t),"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},{activator:l(({props:t})=>[o(b,R({modelValue:s.value.date,"onUpdate:modelValue":e[5]||(e[5]=_=>s.value.date=_),variant:"outlined",label:"Due Date"},t),null,16,["modelValue"])]),default:l(()=>[o(I,{modelValue:s.value.date,"onUpdate:modelValue":e[6]||(e[6]=t=>s.value.date=t),onInput:e[7]||(e[7]=t=>y.value=!1),"model-config":S.value},null,8,["modelValue","model-config"])]),_:1},8,["modelValue"]),o(p,{class:"mr-2",color:"success",onClick:e[9]||(e[9]=t=>r.value=!1)},{default:l(()=>[d("Save")]),_:1}),o(p,{color:"error",onClick:e[10]||(e[10]=t=>Y(s.value))},{default:l(()=>[d("Delete Task")]),_:1})])]),_:1})]),_:1})):v("v-if",!0)]),_:1})]),_:1},8,["modelValue"]),v(` -------------------------------------------------------------------------------------\r
            Edit Task Drawer\r
    -------------------------------------------------------------------------------------`),v(` -------------------------------------------------------------------------------------\r
        Add Task Dialog\r
      -------------------------------------------------------------------------------------`),o(oe,{modelValue:g.value,"onUpdate:modelValue":e[20]||(e[20]=t=>g.value=t)},{default:l(()=>[o(E,null,{default:l(()=>[n("div",ye,[o(ee,{class:"headline white--text"},{default:l(()=>[d("Add Task")]),_:1}),n("div",we,[o(p,{icon:"",color:"gray",size:"small",onClick:e[12]||(e[12]=t=>g.value=!1)},{default:l(()=>[o($,{class:"white--text"},{default:l(()=>[d("mdi-window-close")]),_:1})]),_:1})])]),o(te,{class:""},{default:l(()=>[n("form",{onSubmit:U(z,["prevent"])},[o(b,{modelValue:f.value,"onUpdate:modelValue":e[13]||(e[13]=t=>f.value=t),label:"Wraite Task Title",variant:"outlined",required:""},null,8,["modelValue"]),o(j,{modelValue:V.value,"onUpdate:modelValue":e[14]||(e[14]=t=>V.value=t),label:"Write Task Notes",variant:"outlined"},null,8,["modelValue"]),o(L,{modelValue:T.value,"onUpdate:modelValue":e[18]||(e[18]=t=>T.value=t),"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},{activator:l(({props:t})=>[o(b,R({modelValue:m.value,"onUpdate:modelValue":e[15]||(e[15]=_=>m.value=_),variant:"outlined",label:"Due Date"},t),null,16,["modelValue"])]),default:l(()=>[o(I,{modelValue:m.value,"onUpdate:modelValue":e[16]||(e[16]=t=>m.value=t),onInput:e[17]||(e[17]=t=>T.value=!1),"model-config":S.value},null,8,["modelValue","model-config"])]),_:1},8,["modelValue"]),o(p,{type:"submit",color:"primary",disabled:!D(F),onClick:e[19]||(e[19]=U(t=>g.value=!1,["stop"]))},{default:l(()=>[d("Submit Task")]),_:1},8,["disabled"])],40,xe)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),Me=ae(Ce,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/apps/todo/Todo.vue"]]);export{Me as default};