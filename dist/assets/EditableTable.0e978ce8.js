import{_ as N}from"./BaseBreadcrumb.dcf85066.js";import{m as O,r as u,Z as x,o as f,n as h,a as e,w as a,b as n,d as y,ab as D,e as V,j as r,aU as P,g as b,B as F,l as j,h as d,ap as $,f as o,y as m,u as U,V as G,i as M,ah as H,aY as K,M as q,ai as z,F as k,v as W,p as Y,P as Z}from"./index.8be2d24c.js";var Q=[{id:"#123",avatar:"1.jpg",userinfo:"Hanna Gover",usermail:"hgover@gmail.com",phone:"+123 456 789",jdate:"12-10-2014",role:"Designer",rolestatus:"cyan lighten-3"},{id:"#452",avatar:"2.jpg",userinfo:"Daniel Kristeen",usermail:"hgover@gmail.com",phone:"+234 456 789",jdate:"10-09-2014",role:"Developer",rolestatus:"light-blue lighten-3"},{id:"#565",avatar:"3.jpg",userinfo:"Julian Josephs",usermail:"hgover@gmail.com",phone:"+345 456 789",jdate:"01-10-2013",role:"Accountant",rolestatus:"teal lighten-3"},{id:"#785",avatar:"4.jpg",userinfo:"Jan Petrovic",usermail:"hgover@gmail.com",phone:"+456 456 789",jdate:"02-10-2017",role:"Designer",rolestatus:"green lighten-3"},{id:"#564",avatar:"5.jpg",userinfo:"Leanne Graham",usermail:"hgover@gmail.com",phone:"+567 456 789",jdate:"10-9-2015",role:"HR",rolestatus:"deep-purple lighten-2"},{id:"#980",avatar:"6.jpg",userinfo:"Mrs. Dennis Schulist",usermail:"hgover@gmail.com",phone:"+678 456 789",jdate:"10-5-2013",role:"Designer",rolestatus:"indigo lighten-2"},{id:"#521",avatar:"7.jpg",userinfo:"Kurtis Weissnat",usermail:"hgover@gmail.com",phone:"+123 456 789",jdate:"05-10-2012",role:"Manager",rolestatus:"blue lighten-2"},{id:"#450",avatar:"8.jpg",userinfo:"Nicholas Runolfsdottir V",usermail:"hgover@gmail.com",phone:"+234 456 789",jdate:"11-10-2014",role:"Chairman",rolestatus:"red lighten-3"},{id:"#212",avatar:"2.jpg",userinfo:"Glenna Reichert",usermail:"hgover@gmail.com",phone:"+345 456 789",jdate:"12-5-2017",role:"Designer",rolestatus:"indigo lighten-4"},{id:"#152",avatar:"1.jpg",userinfo:"Clementina DuBuque",usermail:"hgover@gmail.com",phone:"+456 456 789",jdate:"18-5-2009",role:"Developer",rolestatus:"indigo lighten-4"}];const X={class:"title text-white"},ee=o("thead",null,[o("tr",null,[o("th",null,"Id"),o("th",null,"UserInfo"),o("th",null,"Phone"),o("th",null,"Joining Date"),o("th",null,"Role"),o("th",null,"Actions")])],-1),le={class:"d-flex align-center py-4"},ae={class:"ml-5"},te={class:"subtitle-2 d-block font-weight-regular"},ne=O({__name:"EditableTable",setup(oe){const _=u(!0),g=u(!1),p=u(""),T=u(["teal lighten-3","green lighten-3","cyan lighten-3","light-blue lighten-3","deep-purple lighten-2"]),v=u(Q),c=u(-1),s=u({id:"",avatar:"1.jpg",userinfo:"",usermail:"",phone:"",jdate:"",role:"",rolestatus:""}),w=u({id:"",avatar:"1.jpg",userinfo:"",usermail:"",phone:"",jdate:"",role:"",rolestatus:""}),I=x(()=>v.value.filter(i=>i.userinfo.toLowerCase().includes(p.value.toLowerCase())));function B(i){c.value=v.value.indexOf(i),s.value=Object.assign({},i),g.value=!0}function E(i){const t=v.value.indexOf(i);confirm("Are you sure you want to delete this item?")&&v.value.splice(t,1)}function C(){g.value=!1,setTimeout(()=>{s.value=Object.assign({},w.value),c.value=-1},300)}function R(){c.value>-1?Object.assign(v.value[c.value],s.value):v.value.push(s.value),C()}const S=x(()=>c.value===-1?"New Contact":"Edit Contact"),A=u({title:"Editable Table"}),J=u([{text:"Tables",disabled:!1,to:"#"},{text:"Editable Table",disabled:!0}]);return(i,t)=>(f(),h(k,null,[e(N,{title:A.value.title,breadcrumbs:J.value},null,8,["title","breadcrumbs"]),e(V,null,{default:a(()=>[e(n,{cols:"12",sm:"12"},{default:a(()=>[e(y,null,{default:a(()=>[e(D,{class:"pa-5"},{default:a(()=>[e(V,null,{default:a(()=>[e(n,{cols:"12",lg:"4",md:"6"},{default:a(()=>[e(r,{density:"compact",modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=l=>p.value=l),label:"Search Contacts","hide-details":"",variant:"outlined"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",lg:"8",md:"6",class:"text-right"},{default:a(()=>[e(P,{modelValue:g.value,"onUpdate:modelValue":t[9]||(t[9]=l=>g.value=l)},{activator:a(({props:l})=>[e(b,F({color:"primary"},l,{class:"ml-auto"}),{default:a(()=>[e(j,{class:"mr-2"},{default:a(()=>[d("mdi-account-multiple-plus")]),_:1}),d("Add Contact ")]),_:2},1040)]),default:a(()=>[e(y,null,{default:a(()=>[e($,{class:"pa-4 bg-secondary"},{default:a(()=>[o("span",X,m(U(S)),1)]),_:1}),e(D,null,{default:a(()=>[e(G,null,{default:a(()=>[e(M,{ref:"form",modelValue:_.value,"onUpdate:modelValue":t[8]||(t[8]=l=>_.value=l),"lazy-validation":""},{default:a(()=>[e(V,null,{default:a(()=>[e(n,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.id,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value.id=l),label:"Id"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.userinfo,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value.userinfo=l),label:"User info"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.usermail,"onUpdate:modelValue":t[3]||(t[3]=l=>s.value.usermail=l),label:"User email",type:"email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.phone,"onUpdate:modelValue":t[4]||(t[4]=l=>s.value.phone=l),label:"Phone",type:"phone"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.jdate,"onUpdate:modelValue":t[5]||(t[5]=l=>s.value.jdate=l),label:"Joining Date"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.role,"onUpdate:modelValue":t[6]||(t[6]=l=>s.value.role=l),label:"Role"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"12"},{default:a(()=>[e(H,{variant:"outlined","hide-details":"",items:T.value,modelValue:s.value.rolestatus,"onUpdate:modelValue":t[7]||(t[7]=l=>s.value.rolestatus=l),label:"Role Background"},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(K,{class:"pa-4"},{default:a(()=>[e(q),e(b,{color:"error",onClick:C},{default:a(()=>[d("Cancel")]),_:1}),e(b,{color:"secondary",disabled:s.value.userinfo==""||s.value.usermail=="",onClick:R},{default:a(()=>[d("Save")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(z,{class:"mt-5"},{default:a(()=>[ee,o("tbody",null,[(f(!0),h(k,null,W(U(I),l=>(f(),h("tr",{key:l.id},[o("td",null,m(l.id),1),o("td",null,[o("div",le,[o("div",null,[e(Y,{src:`/assets/images/users/${l.avatar}`,width:"45px",class:"rounded-circle img-fluid"},null,8,["src"])]),o("div",ae,[o("h4",null,m(l.userinfo),1),o("span",te,m(l.usermail),1)])])]),o("td",null,m(l.phone),1),o("td",null,m(l.jdate),1),o("td",null,[e(Z,{color:l.rolestatus,label:""},{default:a(()=>[d(m(l.role),1)]),_:2},1032,["color"])]),o("td",null,[e(j,{small:"",class:"mr-2 text-info cursor-pointer",onClick:L=>B(l),title:"Edit"},{default:a(()=>[d("mdi-pencil")]),_:2},1032,["onClick"]),e(j,{small:"",class:"text-error cursor-pointer",title:"Delete",onClick:L=>E(l)},{default:a(()=>[d("mdi-delete")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}});export{ne as default};
