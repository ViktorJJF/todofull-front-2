import{m as J,r as o,Z as R,s as M,o as y,n as q,a as e,w as l,ab as b,e as _,b as r,j as i,aU as W,g as m,B as K,h as n,d as N,i as O,ap as Q,aS as Z,aY as $,M as X,F as A,v as ee,c as le,f as u,Q as ae,p as te,y as d,P as k,l as x,u as se}from"./index.f7be060b.js";const oe=u("span",{class:"title text-white"},"New Contact",-1),re={class:"d-flex justify-center"},ne={class:"title h4 mt-3 mb-0"},ue={class:""},ie={class:"mt-3"},de={class:"mt-3 pt-3"},ce={class:"subtitle-2"},fe={class:"pa-3 blue lighten-4 text-center d-flex align-center justify-center"},ve=J({__name:"ContactGrid",setup(me){const j=o(!0),C=o(!1),w=o(""),c=o(""),v=o(""),p=o(""),F=o("/1.jpg"),f=o(""),g=o(""),h=o(""),V=o(""),D=o([a=>!!a||"Name is required"]),T=o([a=>!!a||"Address is required",a=>a&&a.length<=300||"Address must be less than 10 characters"]),U=o([a=>!!a||"Please fill this field",a=>a&&a.length<=5||"This must be less than 5 characters"]),B=o([a=>!!a||"Please fill this field",a=>a&&a.length<=5||"This must be less than 10 characters"]),L=o([a=>!!a||"Please fill this field",a=>a&&a.length<=5||"This must be less than 10 characters"]),P=o([a=>!!a||"Role is required"]),G=o([a=>!!a||"Contact is required",a=>a&&a.length==10||"Contact must be 10 digits"]),Y=o([{phone:"(123) 456 789",img:"/1.jpg",contactname:"Hanna Gover",role:"Designer",address:" 2289 5th Ave, Suite 600 San Francisco New York ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(234) 456 789",img:"/2.jpg",contactname:"Daniel Kristeen",role:"Developer",address:" 55 E 11th St #1OTH, Suite 600 New York ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(345) 456 789",img:"/3.jpg",contactname:"Julian Josephs",role:"Accountant",address:" 36 W 138th St, San Francisco New York, NY, 10037 ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(456) 456 789",img:"/4.jpg",contactname:"Jan Petrovic",role:"Designer",address:" 2289 5th Ave, Suite 600 San Francisco New York ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(567) 456 789",img:"/5.jpg",contactname:"Leanne Graham",role:"HR",address:" 425 5th Ave, San Francisco New York, NY, 10016 ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(678) 456 789",img:"/6.jpg",contactname:"Mrs. Dennis Schulist",role:"Designer",address:" 17 Stuyvesant Walk, Suite 600 New York, NY, 10009 ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(123) 456 789",img:"/1.jpg",contactname:"Kurtis Weissnat",role:"Manager",address:" 2289 5th Ave, Suite 600 San Francisco New York ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(234) 456 789",img:"/2.jpg",contactname:"Nicholas Runolfsdottir V",role:"Chairman",address:" 425 5th Ave, San Francisco New York, NY, 10016 ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(345) 456 789",img:"/3.jpg",contactname:"Glenna Reichert",role:"Designer",address:" 2289 5th Ave, Suite 600 San Francisco New York",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(456) 456 789",img:"/4.jpg",contactname:"Clementina DuBuque",role:"Developer",address:" 55 E 11th St #1OTH, Suite 600 New York, NY, 10003 ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"}]),S=o();function H(){if(S.value.validate(),S.value.validate(!0)){const a={contactname:c.value,phone:v.value,role:p.value,img:F.value,address:f.value,twitterfollowers:g.value,instafollowers:h.value,fbfollowers:V.value};Y.value.unshift(a),v.value="",c.value="",p.value="",F.value="",f.value="",g.value="",h.value="",V.value=""}}R(()=>c.value.length>0);const z=R(()=>Y.value.filter(a=>a.contactname.toLowerCase().includes(w.value.toLowerCase())||a.role.toLowerCase().includes(w.value.toLowerCase())));return(a,s)=>{const E=M("vue-feather");return y(),q(A,null,[e(N,{class:"mb-7"},{default:l(()=>[e(b,{class:"pa-5"},{default:l(()=>[e(_,{justify:"space-between"},{default:l(()=>[e(r,{cols:"12",lg:"4"},{default:l(()=>[e(i,{modelValue:w.value,"onUpdate:modelValue":s[0]||(s[0]=t=>w.value=t),"prepend-inner-icon":"mdi-magnify",label:"Search Contacts",variant:"outlined",size:"compact","hide-details":""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",lg:"4",class:"justify-end align-center d-flex"},{default:l(()=>[e(W,{modelValue:C.value,"onUpdate:modelValue":s[10]||(s[10]=t=>C.value=t),transition:"dialog-bottom-transition"},{activator:l(({props:t})=>[e(m,K({color:"secondary"},t),{default:l(()=>[n("New Contact")]),_:2},1040)]),default:l(()=>[e(N,null,{default:l(()=>[e(O,{ref_key:"form",ref:S,modelValue:j.value,"onUpdate:modelValue":s[9]||(s[9]=t=>j.value=t),"lazy-validation":""},{default:l(()=>[e(Q,{class:"pa-4 bg-secondary"},{default:l(()=>[oe]),_:1}),e(b,null,{default:l(()=>[e(_,null,{default:l(()=>[e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{label:"Full name",rules:D.value,modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=t=>c.value=t),variant:"outlined",required:""},null,8,["rules","modelValue"])]),_:1}),e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{type:"tel",label:"Contact no",rules:G.value,counter:10,modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=t=>v.value=t),variant:"outlined",required:""},null,8,["rules","modelValue"])]),_:1}),e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{label:"Role",rules:P.value,modelValue:p.value,"onUpdate:modelValue":s[3]||(s[3]=t=>p.value=t),variant:"outlined",required:""},null,8,["rules","modelValue"])]),_:1}),e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{type:"number",label:"Twitter Followers",modelValue:g.value,"onUpdate:modelValue":s[4]||(s[4]=t=>g.value=t),rules:B.value,counter:5,variant:"outlined",required:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{type:"number",label:"Instagram Followers",modelValue:h.value,"onUpdate:modelValue":s[5]||(s[5]=t=>h.value=t),rules:U.value,counter:5,variant:"outlined",required:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{type:"number",label:"Facebook Followers",modelValue:V.value,"onUpdate:modelValue":s[6]||(s[6]=t=>V.value=t),rules:L.value,counter:5,variant:"outlined",required:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(Z,{label:"Address",rows:"3",rules:T.value,counter:300,modelValue:f.value,"onUpdate:modelValue":s[7]||(s[7]=t=>f.value=t),variant:"outlined",required:""},null,8,["rules","modelValue"])]),_:1})]),_:1})]),_:1}),e($,{class:"pa-4 pt-0"},{default:l(()=>[e(X),e(m,{color:"error",onClick:s[8]||(s[8]=t=>C.value=!1)},{default:l(()=>[n("Close")]),_:1}),e(m,{color:"success",disabled:f.value=="",onClick:H},{default:l(()=>[n("Save")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{justify:"center"},{default:l(()=>[(y(!0),q(A,null,ee(se(z),(t,I)=>(y(),le(r,{cols:"12",sm:"6",lg:"4",key:I},{default:l(()=>[e(N,null,{default:l(()=>[e(b,{class:"pa-5 text-center"},{default:l(()=>[u("div",re,[e(ae,{size:"90"},{default:l(()=>[e(te,{src:"/src/assets/images/users"+t.img,alt:"user",class:"rounded-circle"},null,8,["src"])]),_:2},1024)]),u("h4",ne,d(t.contactname),1),u("small",ue,d(t.role),1),u("div",ie,[e(m,{depressed:"",small:"",color:"primary",class:"mr-2"},{default:l(()=>[n("Chat")]),_:1}),e(m,{depressed:"",small:"",color:"secondary"},{default:l(()=>[n("Follow")]),_:1})]),u("div",de,[u("address",ce,d(t.address),1)])]),_:2},1024),u("div",fe,[e(E,{class:"mr-2",type:"phone"}),n(" "+d(t.phone),1)]),e(b,{class:"px-4 py-3"},{default:l(()=>[e(_,null,{default:l(()=>[e(r,{cols:"4",class:"text-left"},{default:l(()=>[e(k,{class:"ma-2",close:"",color:"info",label:"","text-color":"white"},{default:l(()=>[e(x,{start:"",icon:"mdi-twitter",class:"mr-2"}),n(" "+d(t.twitterfollowers),1)]),_:2},1024)]),_:2},1024),e(r,{cols:"4",class:"text-center"},{default:l(()=>[e(k,{class:"ma-2",close:"",color:"error",label:"","text-color":"white"},{default:l(()=>[e(x,{start:"",icon:"mdi-instagram",class:"mr-2"}),n(" "+d(t.instafollowers),1)]),_:2},1024)]),_:2},1024),e(r,{cols:"4",class:"text-right"},{default:l(()=>[e(k,{class:"ma-2",close:"",color:"blue",label:"","text-color":"white"},{default:l(()=>[e(x,{start:"",icon:"mdi-facebook",class:"mr-2"}),n(" "+d(t.fbfollowers),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})],64)}}});export{ve as default};
