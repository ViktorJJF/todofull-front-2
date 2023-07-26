import{_ as W,e as Q,g as i,v as U,r as s,o as V,f as j,a as e,w as t,m as X,d as c,b as o,t as m,u as k,F as w,k as Y}from"./index-b5291b3b.js";import{B as Z}from"./BaseBreadcrumb-19341b72.js";const ee=[{id:"#123",avatar:"1.jpg",userinfo:"Hanna Gover",usermail:"hgover@gmail.com",phone:"+123 456 789",jdate:"12-10-2014",role:"Designer",rolestatus:"cyan lighten-3"},{id:"#452",avatar:"2.jpg",userinfo:"Daniel Kristeen",usermail:"hgover@gmail.com",phone:"+234 456 789",jdate:"10-09-2014",role:"Developer",rolestatus:"light-blue lighten-3"},{id:"#565",avatar:"3.jpg",userinfo:"Julian Josephs",usermail:"hgover@gmail.com",phone:"+345 456 789",jdate:"01-10-2013",role:"Accountant",rolestatus:"teal lighten-3"},{id:"#785",avatar:"4.jpg",userinfo:"Jan Petrovic",usermail:"hgover@gmail.com",phone:"+456 456 789",jdate:"02-10-2017",role:"Designer",rolestatus:"green lighten-3"},{id:"#564",avatar:"5.jpg",userinfo:"Leanne Graham",usermail:"hgover@gmail.com",phone:"+567 456 789",jdate:"10-9-2015",role:"HR",rolestatus:"deep-purple lighten-2"},{id:"#980",avatar:"6.jpg",userinfo:"Mrs. Dennis Schulist",usermail:"hgover@gmail.com",phone:"+678 456 789",jdate:"10-5-2013",role:"Designer",rolestatus:"indigo lighten-2"},{id:"#521",avatar:"7.jpg",userinfo:"Kurtis Weissnat",usermail:"hgover@gmail.com",phone:"+123 456 789",jdate:"05-10-2012",role:"Manager",rolestatus:"blue lighten-2"},{id:"#450",avatar:"8.jpg",userinfo:"Nicholas Runolfsdottir V",usermail:"hgover@gmail.com",phone:"+234 456 789",jdate:"11-10-2014",role:"Chairman",rolestatus:"red lighten-3"},{id:"#212",avatar:"2.jpg",userinfo:"Glenna Reichert",usermail:"hgover@gmail.com",phone:"+345 456 789",jdate:"12-5-2017",role:"Designer",rolestatus:"indigo lighten-4"},{id:"#152",avatar:"1.jpg",userinfo:"Clementina DuBuque",usermail:"hgover@gmail.com",phone:"+456 456 789",jdate:"18-5-2009",role:"Developer",rolestatus:"indigo lighten-4"}],le={class:"title text-white"},te=o("thead",null,[o("tr",null,[o("th",null,"Id"),o("th",null,"UserInfo"),o("th",null,"Phone"),o("th",null,"Joining Date"),o("th",null,"Role"),o("th",null,"Actions")])],-1),ae={class:"d-flex align-center py-4"},oe={class:"ml-5"},ne={class:"subtitle-2 d-block font-weight-regular"},se=Q({__name:"EditableTable",setup(ue){const x=i(!0),f=i(!1),_=i(""),T=i(["teal lighten-3","green lighten-3","cyan lighten-3","light-blue lighten-3","deep-purple lighten-2"]),v=i(ee),p=i(-1),n=i({id:"",avatar:"1.jpg",userinfo:"",usermail:"",phone:"",jdate:"",role:"",rolestatus:""}),E=i({id:"",avatar:"1.jpg",userinfo:"",usermail:"",phone:"",jdate:"",role:"",rolestatus:""}),B=U(()=>v.value.filter(r=>r.userinfo.toLowerCase().includes(_.value.toLowerCase())));function I(r){p.value=v.value.indexOf(r),n.value=Object.assign({},r),f.value=!0}function R(r){const a=v.value.indexOf(r);confirm("Are you sure you want to delete this item?")&&v.value.splice(a,1)}function C(){f.value=!1,setTimeout(()=>{n.value=Object.assign({},E.value),p.value=-1},300)}function J(){p.value>-1?Object.assign(v.value[p.value],n.value):v.value.push(n.value),C()}const L=U(()=>p.value===-1?"New Contact":"Edit Contact"),N=i({title:"Editable Table"}),O=i([{text:"Tables",disabled:!1,to:"#"},{text:"Editable Table",disabled:!0}]);return(r,a)=>{const d=s("v-text-field"),u=s("v-col"),g=s("v-icon"),h=s("v-btn"),A=s("v-card-title"),P=s("v-select"),b=s("v-row"),S=s("v-form"),G=s("v-container"),y=s("v-card-text"),$=s("v-spacer"),F=s("v-card-actions"),D=s("v-card"),H=s("v-dialog"),K=s("v-img"),M=s("v-chip"),q=s("v-table");return V(),j(w,null,[e(Z,{title:N.value.title,breadcrumbs:O.value},null,8,["title","breadcrumbs"]),e(b,null,{default:t(()=>[e(u,{cols:"12",sm:"12"},{default:t(()=>[e(D,null,{default:t(()=>[e(y,{class:"pa-5"},{default:t(()=>[e(b,null,{default:t(()=>[e(u,{cols:"12",lg:"4",md:"6"},{default:t(()=>[e(d,{density:"compact",modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=l=>_.value=l),label:"Search Contacts","hide-details":"",variant:"outlined"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",lg:"8",md:"6",class:"text-right"},{default:t(()=>[e(H,{modelValue:f.value,"onUpdate:modelValue":a[9]||(a[9]=l=>f.value=l)},{activator:t(({props:l})=>[e(h,X({color:"primary"},l,{class:"ml-auto"}),{default:t(()=>[e(g,{class:"mr-2"},{default:t(()=>[c("mdi-account-multiple-plus")]),_:1}),c("Add Contact ")]),_:2},1040)]),default:t(()=>[e(D,null,{default:t(()=>[e(A,{class:"pa-4 bg-secondary"},{default:t(()=>[o("span",le,m(k(L)),1)]),_:1}),e(y,null,{default:t(()=>[e(G,null,{default:t(()=>[e(S,{ref:"form",modelValue:x.value,"onUpdate:modelValue":a[8]||(a[8]=l=>x.value=l),"lazy-validation":""},{default:t(()=>[e(b,null,{default:t(()=>[e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.id,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value.id=l),label:"Id"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.userinfo,"onUpdate:modelValue":a[2]||(a[2]=l=>n.value.userinfo=l),label:"User info"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.usermail,"onUpdate:modelValue":a[3]||(a[3]=l=>n.value.usermail=l),label:"User email",type:"email"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.phone,"onUpdate:modelValue":a[4]||(a[4]=l=>n.value.phone=l),label:"Phone",type:"phone"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.jdate,"onUpdate:modelValue":a[5]||(a[5]=l=>n.value.jdate=l),label:"Joining Date"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.role,"onUpdate:modelValue":a[6]||(a[6]=l=>n.value.role=l),label:"Role"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"12"},{default:t(()=>[e(P,{variant:"outlined","hide-details":"",items:T.value,modelValue:n.value.rolestatus,"onUpdate:modelValue":a[7]||(a[7]=l=>n.value.rolestatus=l),label:"Role Background"},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(F,{class:"pa-4"},{default:t(()=>[e($),e(h,{color:"error",onClick:C},{default:t(()=>[c("Cancel")]),_:1}),e(h,{color:"secondary",disabled:n.value.userinfo==""||n.value.usermail=="",onClick:J},{default:t(()=>[c("Save")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(q,{class:"mt-5"},{default:t(()=>[te,o("tbody",null,[(V(!0),j(w,null,Y(k(B),l=>(V(),j("tr",{key:l.id},[o("td",null,m(l.id),1),o("td",null,[o("div",ae,[o("div",null,[e(K,{src:`/assets/images/users/${l.avatar}`,width:"45px",class:"rounded-circle img-fluid"},null,8,["src"])]),o("div",oe,[o("h4",null,m(l.userinfo),1),o("span",ne,m(l.usermail),1)])])]),o("td",null,m(l.phone),1),o("td",null,m(l.jdate),1),o("td",null,[e(M,{color:l.rolestatus,label:""},{default:t(()=>[c(m(l.role),1)]),_:2},1032,["color"])]),o("td",null,[e(g,{small:"",class:"mr-2 text-info cursor-pointer",onClick:z=>I(l),title:"Edit"},{default:t(()=>[c("mdi-pencil")]),_:2},1032,["onClick"]),e(g,{small:"",class:"text-error cursor-pointer",title:"Delete",onClick:z=>R(l)},{default:t(()=>[c("mdi-delete")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}}),de=W(se,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/tables/EditableTable.vue"]]);export{de as default};
