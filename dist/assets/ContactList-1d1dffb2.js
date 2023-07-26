import{_ as M,e as q,g as i,v as D,r as s,o as V,c as z,w as t,a as e,m as W,d as c,b as o,t as m,u as k,f as U,k as Q,F as X}from"./index-0b78272f.js";const Y=[{id:"#123",avatar:"1.jpg",userinfo:"Hanna Gover",usermail:"hgover@gmail.com",phone:"+123 456 789",jdate:"12-10-2014",role:"Designer",rolestatus:"cyan lighten-3"},{id:"#452",avatar:"2.jpg",userinfo:"Daniel Kristeen",usermail:"hgover@gmail.com",phone:"+234 456 789",jdate:"10-09-2014",role:"Developer",rolestatus:"light-blue lighten-3"},{id:"#565",avatar:"3.jpg",userinfo:"Julian Josephs",usermail:"hgover@gmail.com",phone:"+345 456 789",jdate:"01-10-2013",role:"Accountant",rolestatus:"teal lighten-3"},{id:"#785",avatar:"4.jpg",userinfo:"Jan Petrovic",usermail:"hgover@gmail.com",phone:"+456 456 789",jdate:"02-10-2017",role:"Designer",rolestatus:"green lighten-3"},{id:"#564",avatar:"5.jpg",userinfo:"Leanne Graham",usermail:"hgover@gmail.com",phone:"+567 456 789",jdate:"10-9-2015",role:"HR",rolestatus:"deep-purple lighten-2"},{id:"#980",avatar:"6.jpg",userinfo:"Mrs. Dennis Schulist",usermail:"hgover@gmail.com",phone:"+678 456 789",jdate:"10-5-2013",role:"Designer",rolestatus:"indigo lighten-2"},{id:"#521",avatar:"7.jpg",userinfo:"Kurtis Weissnat",usermail:"hgover@gmail.com",phone:"+123 456 789",jdate:"05-10-2012",role:"Manager",rolestatus:"blue lighten-2"},{id:"#450",avatar:"8.jpg",userinfo:"Nicholas Runolfsdottir V",usermail:"hgover@gmail.com",phone:"+234 456 789",jdate:"11-10-2014",role:"Chairman",rolestatus:"red lighten-3"},{id:"#212",avatar:"2.jpg",userinfo:"Glenna Reichert",usermail:"hgover@gmail.com",phone:"+345 456 789",jdate:"12-5-2017",role:"Designer",rolestatus:"indigo lighten-4"},{id:"#152",avatar:"1.jpg",userinfo:"Clementina DuBuque",usermail:"hgover@gmail.com",phone:"+456 456 789",jdate:"18-5-2009",role:"Developer",rolestatus:"indigo lighten-4"}],Z={class:"title text-white"},ee=o("thead",null,[o("tr",null,[o("th",null,"Id"),o("th",null,"UserInfo"),o("th",null,"Phone"),o("th",null,"Joining Date"),o("th",null,"Role"),o("th",null,"Actions")])],-1),le={class:"d-flex align-center py-4"},te={class:"ml-5"},ae={class:"subtitle-2 d-block font-weight-regular"},oe=q({__name:"ContactList",setup(ne){const j=i(!0),_=i(!1),f=i(""),w=i(["teal lighten-3","green lighten-3","cyan lighten-3","light-blue lighten-3","deep-purple lighten-2"]),v=i(Y),p=i(-1),n=i({id:"",avatar:"1.jpg",userinfo:"",usermail:"",phone:"",jdate:"",role:"",rolestatus:""}),I=i({id:"",avatar:"1.jpg",userinfo:"",usermail:"",phone:"",jdate:"",role:"",rolestatus:""}),L=D(()=>v.value.filter(r=>r.userinfo.toLowerCase().includes(f.value.toLowerCase())));function B(r){p.value=v.value.indexOf(r),n.value=Object.assign({},r),_.value=!0}function R(r){const a=v.value.indexOf(r);confirm("Are you sure you want to delete this item?")&&v.value.splice(a,1)}function b(){_.value=!1,setTimeout(()=>{n.value=Object.assign({},I.value),p.value=-1},300)}function J(){p.value>-1?Object.assign(v.value[p.value],n.value):v.value.push(n.value),b()}const N=D(()=>p.value===-1?"New Contact":"Edit Contact");return(r,a)=>{const d=s("v-text-field"),u=s("v-col"),g=s("v-icon"),h=s("v-btn"),O=s("v-card-title"),A=s("v-select"),C=s("v-row"),P=s("v-form"),S=s("v-container"),x=s("v-card-text"),T=s("v-spacer"),E=s("v-card-actions"),y=s("v-card"),G=s("v-dialog"),$=s("v-img"),F=s("v-chip"),H=s("v-table");return V(),z(y,null,{default:t(()=>[e(x,{class:"pa-5"},{default:t(()=>[e(C,null,{default:t(()=>[e(u,{cols:"12",lg:"4",md:"6"},{default:t(()=>[e(d,{density:"compact",modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=l=>f.value=l),label:"Search Contacts","hide-details":"",variant:"outlined"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",lg:"8",md:"6",class:"text-right"},{default:t(()=>[e(G,{modelValue:_.value,"onUpdate:modelValue":a[9]||(a[9]=l=>_.value=l)},{activator:t(({props:l})=>[e(h,W({color:"primary"},l,{class:"ml-auto"}),{default:t(()=>[e(g,{class:"mr-2"},{default:t(()=>[c("mdi-account-multiple-plus")]),_:1}),c("Add Contact ")]),_:2},1040)]),default:t(()=>[e(y,null,{default:t(()=>[e(O,{class:"pa-4 bg-secondary"},{default:t(()=>[o("span",Z,m(k(N)),1)]),_:1}),e(x,null,{default:t(()=>[e(S,null,{default:t(()=>[e(P,{ref:"form",modelValue:j.value,"onUpdate:modelValue":a[8]||(a[8]=l=>j.value=l),"lazy-validation":""},{default:t(()=>[e(C,null,{default:t(()=>[e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.id,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value.id=l),label:"Id"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.userinfo,"onUpdate:modelValue":a[2]||(a[2]=l=>n.value.userinfo=l),label:"User info"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.usermail,"onUpdate:modelValue":a[3]||(a[3]=l=>n.value.usermail=l),label:"User email",type:"email"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.phone,"onUpdate:modelValue":a[4]||(a[4]=l=>n.value.phone=l),label:"Phone",type:"phone"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.jdate,"onUpdate:modelValue":a[5]||(a[5]=l=>n.value.jdate=l),label:"Joining Date"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:t(()=>[e(d,{variant:"outlined","hide-details":"",modelValue:n.value.role,"onUpdate:modelValue":a[6]||(a[6]=l=>n.value.role=l),label:"Role"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"12"},{default:t(()=>[e(A,{variant:"outlined","hide-details":"",items:w.value,modelValue:n.value.rolestatus,"onUpdate:modelValue":a[7]||(a[7]=l=>n.value.rolestatus=l),label:"Role Background"},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(E,{class:"pa-4"},{default:t(()=>[e(T),e(h,{color:"error",onClick:b},{default:t(()=>[c("Cancel")]),_:1}),e(h,{color:"secondary",disabled:n.value.userinfo==""||n.value.usermail=="",onClick:J},{default:t(()=>[c("Save")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(H,{class:"mt-5"},{default:t(()=>[ee,o("tbody",null,[(V(!0),U(X,null,Q(k(L),l=>(V(),U("tr",{key:l.id},[o("td",null,m(l.id),1),o("td",null,[o("div",le,[o("div",null,[e($,{src:`/assets/images/users/${l.avatar}`,width:"45px",class:"rounded-circle img-fluid"},null,8,["src"])]),o("div",te,[o("h4",null,m(l.userinfo),1),o("span",ae,m(l.usermail),1)])])]),o("td",null,m(l.phone),1),o("td",null,m(l.jdate),1),o("td",null,[e(F,{color:l.rolestatus,label:""},{default:t(()=>[c(m(l.role),1)]),_:2},1032,["color"])]),o("td",null,[e(g,{small:"",class:"mr-2 text-info cursor-pointer",onClick:K=>B(l),title:"Edit"},{default:t(()=>[c("mdi-pencil")]),_:2},1032,["onClick"]),e(g,{small:"",class:"text-error cursor-pointer",title:"Delete",onClick:K=>R(l)},{default:t(()=>[c("mdi-delete")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})]),_:1})}}}),ue=M(oe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/apps/contact-list/ContactList.vue"]]);export{ue as default};
