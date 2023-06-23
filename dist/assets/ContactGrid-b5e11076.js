import{_ as ee,e as le,g as s,v as R,r as n,o as j,f as D,a as e,w as l,m as te,d as u,F as A,k as oe,u as ae,b as c,c as se,t as d}from"./index-2e78bb3e.js";const ne=c("span",{class:"title text-white"},"New Contact",-1),re={class:"d-flex justify-center"},ue={class:"title h4 mt-3 mb-0"},ce={class:""},ie={class:"mt-3"},de={class:"mt-3 pt-3"},fe={class:"subtitle-2"},me={class:"pa-3 blue lighten-4 text-center d-flex align-center justify-center"},ve=le({__name:"ContactGrid",setup(_e){const F=s(!0),C=s(!1),_=s(""),f=s(""),p=s(""),w=s(""),Y=s("/1.jpg"),m=s(""),g=s(""),h=s(""),b=s(""),U=s([t=>!!t||"Name is required"]),T=s([t=>!!t||"Address is required",t=>t&&t.length<=300||"Address must be less than 10 characters"]),G=s([t=>!!t||"Please fill this field",t=>t&&t.length<=5||"This must be less than 5 characters"]),L=s([t=>!!t||"Please fill this field",t=>t&&t.length<=5||"This must be less than 10 characters"]),B=s([t=>!!t||"Please fill this field",t=>t&&t.length<=5||"This must be less than 10 characters"]),P=s([t=>!!t||"Role is required"]),H=s([t=>!!t||"Contact is required",t=>t&&t.length==10||"Contact must be 10 digits"]),q=s([{phone:"(123) 456 789",img:"/1.jpg",contactname:"Hanna Gover",role:"Designer",address:" 2289 5th Ave, Suite 600 San Francisco New York ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(234) 456 789",img:"/2.jpg",contactname:"Daniel Kristeen",role:"Developer",address:" 55 E 11th St #1OTH, Suite 600 New York ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(345) 456 789",img:"/3.jpg",contactname:"Julian Josephs",role:"Accountant",address:" 36 W 138th St, San Francisco New York, NY, 10037 ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(456) 456 789",img:"/4.jpg",contactname:"Jan Petrovic",role:"Designer",address:" 2289 5th Ave, Suite 600 San Francisco New York ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(567) 456 789",img:"/5.jpg",contactname:"Leanne Graham",role:"HR",address:" 425 5th Ave, San Francisco New York, NY, 10016 ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(678) 456 789",img:"/6.jpg",contactname:"Mrs. Dennis Schulist",role:"Designer",address:" 17 Stuyvesant Walk, Suite 600 New York, NY, 10009 ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(123) 456 789",img:"/1.jpg",contactname:"Kurtis Weissnat",role:"Manager",address:" 2289 5th Ave, Suite 600 San Francisco New York ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(234) 456 789",img:"/2.jpg",contactname:"Nicholas Runolfsdottir V",role:"Chairman",address:" 425 5th Ave, San Francisco New York, NY, 10016 ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(345) 456 789",img:"/3.jpg",contactname:"Glenna Reichert",role:"Designer",address:" 2289 5th Ave, Suite 600 San Francisco New York",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"},{phone:"(456) 456 789",img:"/4.jpg",contactname:"Clementina DuBuque",role:"Developer",address:" 55 E 11th St #1OTH, Suite 600 New York, NY, 10003 ",instafollowers:"12",twitterfollowers:"20",fbfollowers:"21"}]),N=s();function z(){if(N.value.validate(),N.value.validate(!0)){const t={contactname:f.value,phone:p.value,role:w.value,img:Y.value,address:m.value,twitterfollowers:g.value,instafollowers:h.value,fbfollowers:b.value};q.value.unshift(t),p.value="",f.value="",w.value="",Y.value="",m.value="",g.value="",h.value="",b.value=""}}R(()=>f.value.length>0);const E=R(()=>q.value.filter(t=>t.contactname.toLowerCase().includes(_.value.toLowerCase())||t.role.toLowerCase().includes(_.value.toLowerCase())));return(t,a)=>{const i=n("v-text-field"),r=n("v-col"),v=n("v-btn"),J=n("v-card-title"),W=n("v-textarea"),V=n("v-row"),x=n("v-card-text"),K=n("v-spacer"),M=n("v-card-actions"),O=n("v-form"),S=n("v-card"),I=n("v-dialog"),$=n("v-img"),Q=n("v-avatar"),X=n("vue-feather"),k=n("v-icon"),y=n("v-chip");return j(),D(A,null,[e(S,{class:"mb-7"},{default:l(()=>[e(x,{class:"pa-5"},{default:l(()=>[e(V,{justify:"space-between"},{default:l(()=>[e(r,{cols:"12",lg:"4"},{default:l(()=>[e(i,{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=o=>_.value=o),"prepend-inner-icon":"mdi-magnify",label:"Search Contacts",variant:"outlined",size:"compact","hide-details":""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",lg:"4",class:"justify-end align-center d-flex"},{default:l(()=>[e(I,{modelValue:C.value,"onUpdate:modelValue":a[10]||(a[10]=o=>C.value=o),transition:"dialog-bottom-transition"},{activator:l(({props:o})=>[e(v,te({color:"secondary"},o),{default:l(()=>[u("New Contact")]),_:2},1040)]),default:l(()=>[e(S,null,{default:l(()=>[e(O,{ref_key:"form",ref:N,modelValue:F.value,"onUpdate:modelValue":a[9]||(a[9]=o=>F.value=o),"lazy-validation":""},{default:l(()=>[e(J,{class:"pa-4 bg-secondary"},{default:l(()=>[ne]),_:1}),e(x,null,{default:l(()=>[e(V,null,{default:l(()=>[e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{label:"Full name",rules:U.value,modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=o=>f.value=o),variant:"outlined",required:""},null,8,["rules","modelValue"])]),_:1}),e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{type:"tel",label:"Contact no",rules:H.value,counter:10,modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=o=>p.value=o),variant:"outlined",required:""},null,8,["rules","modelValue"])]),_:1}),e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{label:"Role",rules:P.value,modelValue:w.value,"onUpdate:modelValue":a[3]||(a[3]=o=>w.value=o),variant:"outlined",required:""},null,8,["rules","modelValue"])]),_:1}),e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{type:"number",label:"Twitter Followers",modelValue:g.value,"onUpdate:modelValue":a[4]||(a[4]=o=>g.value=o),rules:L.value,counter:5,variant:"outlined",required:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{type:"number",label:"Instagram Followers",modelValue:h.value,"onUpdate:modelValue":a[5]||(a[5]=o=>h.value=o),rules:G.value,counter:5,variant:"outlined",required:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",sm:"6",lg:"6"},{default:l(()=>[e(i,{type:"number",label:"Facebook Followers",modelValue:b.value,"onUpdate:modelValue":a[6]||(a[6]=o=>b.value=o),rules:B.value,counter:5,variant:"outlined",required:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(W,{label:"Address",rows:"3",rules:T.value,counter:300,modelValue:m.value,"onUpdate:modelValue":a[7]||(a[7]=o=>m.value=o),variant:"outlined",required:""},null,8,["rules","modelValue"])]),_:1})]),_:1})]),_:1}),e(M,{class:"pa-4 pt-0"},{default:l(()=>[e(K),e(v,{color:"error",onClick:a[8]||(a[8]=o=>C.value=!1)},{default:l(()=>[u("Close")]),_:1}),e(v,{color:"success",disabled:m.value=="",onClick:z},{default:l(()=>[u("Save")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{justify:"center"},{default:l(()=>[(j(!0),D(A,null,oe(ae(E),(o,Z)=>(j(),se(r,{cols:"12",sm:"6",lg:"4",key:Z},{default:l(()=>[e(S,null,{default:l(()=>[e(x,{class:"pa-5 text-center"},{default:l(()=>[c("div",re,[e(Q,{size:"90"},{default:l(()=>[e($,{src:"/src/assets/images/users"+o.img,alt:"user",class:"rounded-circle"},null,8,["src"])]),_:2},1024)]),c("h4",ue,d(o.contactname),1),c("small",ce,d(o.role),1),c("div",ie,[e(v,{depressed:"",small:"",color:"primary",class:"mr-2"},{default:l(()=>[u("Chat")]),_:1}),e(v,{depressed:"",small:"",color:"secondary"},{default:l(()=>[u("Follow")]),_:1})]),c("div",de,[c("address",fe,d(o.address),1)])]),_:2},1024),c("div",me,[e(X,{class:"mr-2",type:"phone"}),u(" "+d(o.phone),1)]),e(x,{class:"px-4 py-3"},{default:l(()=>[e(V,null,{default:l(()=>[e(r,{cols:"4",class:"text-left"},{default:l(()=>[e(y,{class:"ma-2",close:"",color:"info",label:"","text-color":"white"},{default:l(()=>[e(k,{start:"",icon:"mdi-twitter",class:"mr-2"}),u(" "+d(o.twitterfollowers),1)]),_:2},1024)]),_:2},1024),e(r,{cols:"4",class:"text-center"},{default:l(()=>[e(y,{class:"ma-2",close:"",color:"error",label:"","text-color":"white"},{default:l(()=>[e(k,{start:"",icon:"mdi-instagram",class:"mr-2"}),u(" "+d(o.instafollowers),1)]),_:2},1024)]),_:2},1024),e(r,{cols:"4",class:"text-right"},{default:l(()=>[e(y,{class:"ma-2",close:"",color:"blue",label:"","text-color":"white"},{default:l(()=>[e(k,{start:"",icon:"mdi-facebook",class:"mr-2"}),u(" "+d(o.fbfollowers),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})],64)}}}),we=ee(ve,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/apps/contact-grid/ContactGrid.vue"]]);export{we as default};
