import{m as A,r as n,Z as C,o as f,c as J,w as a,a as e,e as _,b as u,j as r,b4 as N,g as h,C as O,l as V,h as d,d as x,ap as P,f as o,z as m,u as y,ab as D,V as F,i as E,ah as G,b7 as M,M as $,ai as z,n as U,x as H,p as K,P as q,F as W}from"./index.ef9cfdf3.js";var Z=[{id:"#123",avatar:"1.jpg",userinfo:"Hanna Gover",usermail:"hgover@gmail.com",phone:"+123 456 789",jdate:"12-10-2014",role:"Designer",rolestatus:"cyan lighten-3"},{id:"#452",avatar:"2.jpg",userinfo:"Daniel Kristeen",usermail:"hgover@gmail.com",phone:"+234 456 789",jdate:"10-09-2014",role:"Developer",rolestatus:"light-blue lighten-3"},{id:"#565",avatar:"3.jpg",userinfo:"Julian Josephs",usermail:"hgover@gmail.com",phone:"+345 456 789",jdate:"01-10-2013",role:"Accountant",rolestatus:"teal lighten-3"},{id:"#785",avatar:"4.jpg",userinfo:"Jan Petrovic",usermail:"hgover@gmail.com",phone:"+456 456 789",jdate:"02-10-2017",role:"Designer",rolestatus:"green lighten-3"},{id:"#564",avatar:"5.jpg",userinfo:"Leanne Graham",usermail:"hgover@gmail.com",phone:"+567 456 789",jdate:"10-9-2015",role:"HR",rolestatus:"deep-purple lighten-2"},{id:"#980",avatar:"6.jpg",userinfo:"Mrs. Dennis Schulist",usermail:"hgover@gmail.com",phone:"+678 456 789",jdate:"10-5-2013",role:"Designer",rolestatus:"indigo lighten-2"},{id:"#521",avatar:"7.jpg",userinfo:"Kurtis Weissnat",usermail:"hgover@gmail.com",phone:"+123 456 789",jdate:"05-10-2012",role:"Manager",rolestatus:"blue lighten-2"},{id:"#450",avatar:"8.jpg",userinfo:"Nicholas Runolfsdottir V",usermail:"hgover@gmail.com",phone:"+234 456 789",jdate:"11-10-2014",role:"Chairman",rolestatus:"red lighten-3"},{id:"#212",avatar:"2.jpg",userinfo:"Glenna Reichert",usermail:"hgover@gmail.com",phone:"+345 456 789",jdate:"12-5-2017",role:"Designer",rolestatus:"indigo lighten-4"},{id:"#152",avatar:"1.jpg",userinfo:"Clementina DuBuque",usermail:"hgover@gmail.com",phone:"+456 456 789",jdate:"18-5-2009",role:"Developer",rolestatus:"indigo lighten-4"}];const Q={class:"title text-white"},X=o("thead",null,[o("tr",null,[o("th",null,"Id"),o("th",null,"UserInfo"),o("th",null,"Phone"),o("th",null,"Joining Date"),o("th",null,"Role"),o("th",null,"Actions")])],-1),Y={class:"d-flex align-center py-4"},ee={class:"ml-5"},le={class:"subtitle-2 d-block font-weight-regular"},oe=A({__name:"ContactList",setup(ae){const j=n(!0),g=n(!1),p=n(""),k=n(["teal lighten-3","green lighten-3","cyan lighten-3","light-blue lighten-3","deep-purple lighten-2"]),v=n(Z),c=n(-1),s=n({id:"",avatar:"1.jpg",userinfo:"",usermail:"",phone:"",jdate:"",role:"",rolestatus:""}),w=n({id:"",avatar:"1.jpg",userinfo:"",usermail:"",phone:"",jdate:"",role:"",rolestatus:""}),I=C(()=>v.value.filter(i=>i.userinfo.toLowerCase().includes(p.value.toLowerCase())));function B(i){c.value=v.value.indexOf(i),s.value=Object.assign({},i),g.value=!0}function R(i){const t=v.value.indexOf(i);confirm("Are you sure you want to delete this item?")&&v.value.splice(t,1)}function b(){g.value=!1,setTimeout(()=>{s.value=Object.assign({},w.value),c.value=-1},300)}function T(){c.value>-1?Object.assign(v.value[c.value],s.value):v.value.push(s.value),b()}const L=C(()=>c.value===-1?"New Contact":"Edit Contact");return(i,t)=>(f(),J(x,null,{default:a(()=>[e(D,{class:"pa-5"},{default:a(()=>[e(_,null,{default:a(()=>[e(u,{cols:"12",lg:"4",md:"6"},{default:a(()=>[e(r,{density:"compact",modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=l=>p.value=l),label:"Search Contacts","hide-details":"",variant:"outlined"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",lg:"8",md:"6",class:"text-right"},{default:a(()=>[e(N,{modelValue:g.value,"onUpdate:modelValue":t[9]||(t[9]=l=>g.value=l)},{activator:a(({props:l})=>[e(h,O({color:"primary"},l,{class:"ml-auto"}),{default:a(()=>[e(V,{class:"mr-2"},{default:a(()=>[d("mdi-account-multiple-plus")]),_:1}),d("Add Contact ")]),_:2},1040)]),default:a(()=>[e(x,null,{default:a(()=>[e(P,{class:"pa-4 bg-secondary"},{default:a(()=>[o("span",Q,m(y(L)),1)]),_:1}),e(D,null,{default:a(()=>[e(F,null,{default:a(()=>[e(E,{ref:"form",modelValue:j.value,"onUpdate:modelValue":t[8]||(t[8]=l=>j.value=l),"lazy-validation":""},{default:a(()=>[e(_,null,{default:a(()=>[e(u,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.id,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value.id=l),label:"Id"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.userinfo,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value.userinfo=l),label:"User info"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.usermail,"onUpdate:modelValue":t[3]||(t[3]=l=>s.value.usermail=l),label:"User email",type:"email"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.phone,"onUpdate:modelValue":t[4]||(t[4]=l=>s.value.phone=l),label:"Phone",type:"phone"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.jdate,"onUpdate:modelValue":t[5]||(t[5]=l=>s.value.jdate=l),label:"Joining Date"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:a(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.role,"onUpdate:modelValue":t[6]||(t[6]=l=>s.value.role=l),label:"Role"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"12"},{default:a(()=>[e(G,{variant:"outlined","hide-details":"",items:k.value,modelValue:s.value.rolestatus,"onUpdate:modelValue":t[7]||(t[7]=l=>s.value.rolestatus=l),label:"Role Background"},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(M,{class:"pa-4"},{default:a(()=>[e($),e(h,{color:"error",onClick:b},{default:a(()=>[d("Cancel")]),_:1}),e(h,{color:"secondary",disabled:s.value.userinfo==""||s.value.usermail=="",onClick:T},{default:a(()=>[d("Save")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(z,{class:"mt-5"},{default:a(()=>[X,o("tbody",null,[(f(!0),U(W,null,H(y(I),l=>(f(),U("tr",{key:l.id},[o("td",null,m(l.id),1),o("td",null,[o("div",Y,[o("div",null,[e(K,{src:`/assets/images/users/${l.avatar}`,width:"45px",class:"rounded-circle img-fluid"},null,8,["src"])]),o("div",ee,[o("h4",null,m(l.userinfo),1),o("span",le,m(l.usermail),1)])])]),o("td",null,m(l.phone),1),o("td",null,m(l.jdate),1),o("td",null,[e(q,{color:l.rolestatus,label:""},{default:a(()=>[d(m(l.role),1)]),_:2},1032,["color"])]),o("td",null,[e(V,{small:"",class:"mr-2 text-info cursor-pointer",onClick:S=>B(l),title:"Edit"},{default:a(()=>[d("mdi-pencil")]),_:2},1032,["onClick"]),e(V,{small:"",class:"text-error cursor-pointer",title:"Delete",onClick:S=>R(l)},{default:a(()=>[d("mdi-delete")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})]),_:1}))}});export{oe as default};
