import{e as ie,f as L,o as n,g as b,a as e,w as t,u as s,b as l,R as re,r as i,h as M,i as ce,c as h,j,F as $,n as H,k as X,d as x,t as N,m as Y,l as oe,p as ae,q as D,s as pe,v as se,x as te,y as le,z as _e,A as ve,B as ne,C as fe,D as he,E as ge,G as Ae}from"./index-3376cd88.js";import{u as J}from"./customizer-2cd67362.js";import{u as de}from"./chatSidebar-61e3d660.js";const be=ie.CHAT_BASE_URL,ye=[{header:"Home"},{title:"Analytical",icon:"pie-chart",to:"/dashboards/analytical"},{header:"Apps"},{title:"Chat",icon:"message-square",externalLink:be},{title:"Estados de negociación",icon:"disc",to:{name:"NegotiationStatuses"}},{title:"Catálogos",icon:"disc",to:{name:"CloudStorageLinks"}},{title:"Audios",icon:"disc",to:{name:"CloudStorageLinksAudios"}},{title:"Cerrar sesión",icon:"log-in"}],ke="/assets/logo-white-ee75b085.svg",Ce={class:"logo"},xe=l("img",{src:ke},null,-1),we=L({__name:"LogoLight",setup(A){return(o,u)=>(n(),b("div",Ce,[e(s(re),{to:"/"},{default:t(()=>[xe]),_:1})]))}}),Se={class:"logo"},Ee=L({__name:"LogoDark",setup(A){return(o,u)=>{const w=i("v-img");return n(),b("div",Se,[e(s(re),{to:"/"},{default:t(()=>[e(w,{"aspect-ratio":"1.7",contain:"",src:"/assets/images/logos/todofull.jpg"})]),_:1})])}}}),Be={class:"pa-4"},Ie={start:"",class:"span--start"},Ve={end:"",class:"span--end"},Re={start:"",class:"span--start"},Me={start:"",class:"span--start"},ue=L({__name:"VerticalSidebar",setup(A){const o=J(),u=M(ye),{mdAndUp:w}=ce(),c=X();function y(_){_.title==="Cerrar sesión"&&c.dispatch("authModule/logout").then(()=>{}).catch(f=>{console.log("algo salio mal en logout:",f)}),_.externalLink&&window.open(_.externalLink,"_blank")}return(_,f)=>{const C=i("v-list-subheader"),v=i("vue-feather"),E=i("v-list-item-title"),S=i("v-list-item"),z=i("v-list-group"),p=i("v-list"),U=i("perfect-scrollbar"),I=i("v-navigation-drawer");return n(),h(I,{left:"",permanent:s(w),modelValue:s(o).Sidebar_drawer,"onUpdate:modelValue":f[0]||(f[0]=B=>s(o).Sidebar_drawer=B),elevation:"10",class:H(s(o).SidebarColor=="white"?"":"text-white"),color:s(o).darktheme?"":s(o).SidebarColor,"rail-width":"75","mobile-breakpoint":"960",app:"",rail:s(o).mini_sidebar,"expand-on-hover":""},{default:t(()=>[l("div",Be,[!s(o).darktheme&&s(o).SidebarColor=="white"?(n(),h(Ee,{key:0})):(n(),h(we,{key:1}))]),e(U,{class:"scrollnavbar"},{default:t(()=>[e(p,{class:"pa-4"},{default:t(()=>[(n(!0),b($,null,j(u.value,(B,F)=>(n(),b($,null,[B.header?(n(),h(C,{key:0},{default:t(()=>[x(N(B.header),1)]),_:2},1024)):B.children?(n(),h(z,{key:1,class:""},{activator:t(({props:Q})=>[e(S,Y(Q,{value:B.title,rounded:"lg",class:"mb-1"}),{append:t(()=>[l("span",Ve,[e(v,{type:"chevron-down",class:"feather-sm"})])]),default:t(()=>[l("span",Ie,[e(v,{type:B.icon,class:"feather-sm"},null,8,["type"])]),e(E,{textContent:N(B.title),class:"mr-auto"},null,8,["textContent"])]),_:2},1040,["value"])]),default:t(()=>[(n(!0),b($,null,j(B.children,(Q,O)=>(n(),h(S,{key:O,value:Q.to,to:Q.to,rounded:"lg",class:"first-level-item mb-1"},{default:t(()=>[l("span",Re,[e(v,{type:"disc",class:"feather-sm"})]),e(E,{textContent:N(Q.title)},null,8,["textContent"])]),_:2},1032,["value","to"]))),128))]),_:2},1024)):(n(),h(S,{key:F,to:B.to,rounded:"lg",class:"mb-1"},{default:t(()=>[l("span",Me,[e(v,{type:B.icon,class:"feather-sm v-icon v-icon--size-default"},null,8,["type"])]),e(E,{style:{cursor:"pointer"},onClick:Q=>y(B),dark:"",textContent:N(B.title)},null,8,["onClick","textContent"])]),_:2},1032,["to"]))],64))),256))]),_:1})]),_:1})]),_:1},8,["permanent","modelValue","class","color","rail"])}}}),me="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAGQAZAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAAAQIFBgMHCAQJ/9oACAEBAAAAAOJwAAAAAAABBT0dLzfNNcQRWjvR9BOiY7TPLumYlEB2/wDvePruoKxV+aRoO73ucbNR+sYDkpEF6n3jqus7rteuZ757MRH2u6SWzds8k7o93HcUAzoOgTUnddaVSqNGma8UsHsMeMaZsqo0VuJoxXO9DsariwOTG5W+xzUTA1yf/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/9oACAECEAAAALgCrPfcZ8OPT7KPKz0avaln657sEEzCCX//xAAZAQACAwEAAAAAAAAAAAAAAAAAAgEEBQP/2gAIAQMQAAAAqgAMdLVeudO2hqZ+HD6ty1n4at2GTjDMQQjjRBH/xAA4EAACAQMDAgIJAgMJAQAAAAABAgMEBREABhIhMSJBBxATFCAyUWGBCBZCUnEVIyQlM0BDYpHB/9oACAEBAAE/AP8AdZ1n10tJU11TBR0VPJPUzOEiiiUu7sewUDW0/wBNF8uVNDXbpuAt6uOQpIAJJwP+7HoDrcP6f7Ba6Caphrp4liXk088vQAavu3aizz4CzNA3yPJEYiw8jg9cHRBUkMCD9D68/DSUtRXVMNJSxmSaVgqKO5J16HPRRb9oUEVxq4UnvdQmZZ2H+mh/40+i6jhVIy0gwoH5Oqq0w12ZaqNSg+VW7dOx1v3blrrYTQ0dPC9ZI3ilZA4iHm+DkE+Sg6o9jRXyvvG2Lq/+bUTOIK1ejSA+NS/1BGr3Za7b9yqbXcYTHUQtgg+Y8j8foO2jNdr1DdJIx7nAeUjH+NuyRD7D53/A1DXUltiCvIowO7HA028IHmdIKeacrnxceKDH9dVe4r/dxUewKU9IuQgj8U0hH3PRV1Yn3bdt0yUc1RdaGCNWlmWogianfiwHANjryz5atNZK3pau8NdBFEYlEDhDlgFyEd/uQNfqEtUUlRaNxwKAzD3Kqx/Og5I35Hx+hanZthWuenpjHNKvFnI8oT7MN+cau9bFRM1ROWnclI4UB5SzzueKRxj7nW7a6rgoINtWepp4LlU4SsmSVTJFkBn4L38++rXF/ZsEMKE8I41UZ69ANSbpgFdWCN4ozSDDiXK8mI6dQOi/fSy/ujeNNfaegp4JY4pKaskppfaCZEbCMxH5A16Z4H/b0vJyMSLLxP8AGo8P/qkj4VUsyqoySQAPudbC2HthoIzuCzRV0x45Lo8UQb6B8oG1dt3WLatoSmJp6WlgRYoKOlGAcdFTp3/oNV+9RZ4P3peoZXu1THItkoQBxhj7PVvnoCflQ69FddW7ordx3eqYe+viWJzluPMnpk9TqHcnsyILlC0DgYZu6E6Suo5qUrSVoVzH0ZGww1sW8m3bg3FaK6NJ456tpRMAuDlQcjiOme5GvS1Y7ffNi1/uytK0RWRfZDlInXuAO4GnQxu0bDqpIOj60YK6OQDxYHB7HB0m9twR1M08dynUPnpy5cc/TOtmUs91qjetwVUtRFAhkLSPnhH9FB/ifsPprfVfW3WnFXNDxqbjxhpIAOIipYhxUAHsoHX8nXoapKSjtlAqyAVoeanrIT0kjcOWCuNblWkhpZUFMZahxhFQeIk6mTcN5ut1ShuNQkdMZjGF+Q+74En4ySAdbJ23LUUNJdKGdpWeAMU5EP7RiQwLeYz1Otx3m97OttPXXoRoDLLG2G8LKxATIHXI6nV8r4bpd7jcKeD2MU87OieYXyzjzPc/CFZjga2XIk9BRp7pH/ezpS0lJy5e8VXQuznyhhBDP+BreG6Za/eE10t8yvTUL+70fIZWSOLKlyBjPtCSx1Tbi21XyQzStNb6oK8acuYCsSDGRUQEOkSDw4IYjVdfLHIkC1O86yriZEVy09bMVYheamImPKr1wS3i1tLdtjodvSXM0KQUk9fFY0hldDP7vNyknIKheiqQEHkdfum6bDucsu0t2pVU7yyf4UwyDgv8s8coAVh9FOtybw3Hu2p95vlxaTChVhj8EKgHPyjTLj4VGCDnUG7norPBQW2kEFWkE9M1UX5ERTnL8B5M+eJP01jX/wA0NGWTikftG4A8guegYjBIH1ONMxZi7ElmOSx7k6PRTpuo+AeWh8H09ZzjGh20e+s6z9xoHRPh0JhkBRnQOdY++j09cjEKSNBgqjR6gH1r56btqDu2l0fVnWTg6kY8W1GoKgnRJ5H7aOv/xAAiEQEAAgIBBAIDAAAAAAAAAAABAgMAERIEICExEFETMDL/2gAIAQIBAT8A/QoG3OXL06MsnOjc2W4/TlV0bTx4ezqJsYgHtyXUSjFlvUTGxs1KyUl+s6a/jYRB4qG/l9OsthdXFlbb4yYPT/z7mGQjZFltNB5conMAIcvOCoKadfN9RZxE3pz8UOJHXrGiCJka4R08TfY9xn33f//EACMRAAICAQQCAgMAAAAAAAAAAAECAxEABBAhMRIgEzJRgcH/2gAIAQMBAT8A96yrwIF7GRRpqCIwlN+Rk+naFqPI9NOgZzZqhkelV2VACS36AGJD4eSQRqRXdc5rdMSGZjTgEkbVtC8EjhIoucibx1H26Qkj+Y8kZCFQbJ4GapVZnLPRxgLIBsZxtDI0RYq1WM+V/ItfeDUPYOGR2seRrCM49j1sMPoetv/Z",Te=[{image:"1.jpg",avatarstatus:"success",title:"Romen Joined the Team!",desc:"Congratulate him",time:"9:30 AM"},{image:"2.jpg",avatarstatus:"warning",title:"New message received",desc:"Salma sent you new message",time:"9:08 AM"},{image:"3.jpg",avatarstatus:"error",title:"New Payment received",desc:"Check your earnings",time:"9:08 AM"},{image:"4.jpg",avatarstatus:"success",title:"Jolly completed tasks",desc:"Assign her new tasks",time:"9:08 AM"}],Ue=[{color:"error",icon:"home",title:"Luanch Admin",desc:"Just see the my new admin!"},{color:"primary",icon:"calendar",title:"Event today",desc:"Just a reminder that you have event"},{color:"warning",icon:"settings",title:"Settings",desc:"You can customize this template as you want"},{color:"secondary",icon:"users",title:"Johny John",desc:"Assign her new tasks"}],De=[{color:"error",icon:"dollar-sign",title:"My Profile",desc:"Account Settings"},{color:"success",icon:"shield",title:"My Inbox",desc:"Messages & Emails"},{color:"secondary",icon:"credit-card",title:"My Tasks",desc:"To-do and Daily Tasks"}],$e={class:"d-flex"},ze={start:"",class:"span--start"},Qe={class:"d-flex"},He={start:""},je=l("img",{src:me,alt:"Julia"},null,-1),Le=l("h4",{class:"font-weight-medium fs-18"},"User Profile",-1),Ne={class:"d-flex align-center my-4"},Oe=l("img",{src:me,alt:"Julia",class:"rounded-circle",width:"90"},null,-1),Pe={class:"ml-4"},Fe=l("h4",{class:"font-weight-medium fs-18"},"Julia Roberts",-1),Ge=l("span",{class:"subtitle-2 font-weight-light"},"Administrator",-1),Je={class:"d-flex align-center"},Ze=l("span",{class:"subtitle-2 font-weight-light ml-1"},"info@flexy.com",-1),qe={start:""},Ye=L({__name:"VerticalHeader",setup(A){const o=J(),u=X(),w=M(!1),c=M(void 0),y=M(Te),_=M(Ue),f=M(De),C=M((o.setHorizontalLayout,0));function v(){w.value=!w.value}oe(C,S=>{C.value=S});function E(){u.dispatch("authModule/logout").then(()=>{}).catch(S=>{console.log("algo salio mal en logout:",S)})}return(S,z)=>{const p=i("v-app-bar-nav-icon"),U=i("vue-feather"),I=i("v-btn"),B=i("v-text-field"),F=i("v-sheet"),Q=i("v-spacer"),O=i("v-badge"),Z=i("v-chip"),W=i("v-img"),d=i("v-avatar"),a=i("v-list-item"),m=i("v-list"),V=i("v-menu"),T=i("v-app-bar");return n(),h(T,{color:s(o).darktheme?"":s(o).navbarColor,elevation:"0",priority:C.value,class:H(["v-topbar",s(o).navbarColor=="#f6f6f6"?"":"text-white"])},{default:t(()=>[e(p,{class:"hidden-sm-and-down",onClick:z[0]||(z[0]=ae(r=>s(o).SET_MINI_SIDEBAR(!s(o).mini_sidebar),["stop"]))}),e(p,{class:"hidden-md-and-up",onClick:ae(s(o).SET_SIDEBAR_DRAWER,["stop"])},null,8,["onClick"]),e(I,{text:"",icon:"",color:"lighten-2",onClick:v},{default:t(()=>[e(U,{type:"search",class:"feather-sm"})]),_:1}),w.value?(n(),h(F,{key:0,class:"searchinput pa-2",elevation:"10"},{default:t(()=>[e(B,{color:"success",label:"Search",placeholder:"Search Now",variant:"outlined","append-icon":"mdi-close",density:"compact","onClick:append":v})]),_:1})):D("",!0),e(Q),e(V,{anchor:"bottom end",origin:"auto","max-width":"300"},{activator:t(({props:r})=>[e(I,Y({icon:""},r),{default:t(()=>[e(O,{color:"secondary",dot:""},{default:t(()=>[e(U,{type:"message-square",class:"feather-sm"})]),_:1})]),_:2},1040)]),default:t(()=>[e(m,{class:"pa-5",elevation:"10",rounded:"lg"},{default:t(()=>[l("h4",$e,[x(" Messages "),e(Z,{label:"",small:"",color:"secondary",class:"ml-auto"},{default:t(()=>[x(" 5 new ")]),_:1})]),(n(!0),b($,null,j(y.value,(r,k)=>(n(),h(a,{class:"my-2 pa-3",key:k,rounded:"lg",value:r,onClick:c.value,title:r.title,subtitle:r.desc},{prepend:t(()=>[l("span",ze,[e(d,{size:"50"},{default:t(()=>[e(W,{src:`/assets/images/users/${r.image}`,alt:r.image,width:"50"},null,8,["src","alt"])]),_:2},1024)])]),_:2},1032,["value","onClick","title","subtitle"]))),128)),e(I,{flat:"",color:"primary",class:"mt-4",block:""},{default:t(()=>[x("See all Messages")]),_:1})]),_:1})]),_:1}),e(V,{anchor:"bottom end",origin:"auto"},{activator:t(({props:r})=>[e(I,Y({icon:""},r),{default:t(()=>[e(O,{color:"primary",dot:""},{default:t(()=>[e(U,{type:"bell",class:"feather-sm"})]),_:1})]),_:2},1040)]),default:t(()=>[e(m,{class:"pa-6",elevation:"10",rounded:"lg","max-width":"300"},{default:t(()=>[l("h4",Qe,[x(" Notifications "),e(Z,{class:"ml-auto",label:"",small:"",color:"error"},{default:t(()=>[x(" 5 new ")]),_:1})]),(n(!0),b($,null,j(_.value,(r,k)=>(n(),h(a,{class:"pa-3 mt-2",key:k,value:r,onClick:c.value,rounded:"lg",title:r.title,subtitle:r.desc},{prepend:t(()=>[l("span",He,[e(I,{color:r.color,icon:"",elevation:"0",class:"mr-3"},{default:t(()=>[e(U,{type:r.icon,size:"18"},null,8,["type"])]),_:2},1032,["color"])])]),_:2},1032,["value","onClick","title","subtitle"]))),128)),e(I,{block:"",color:"secondary",class:"mt-4 py-4"},{default:t(()=>[x("See all Notifications")]),_:1})]),_:1})]),_:1}),e(V,{anchor:"bottom end",origin:"auto","min-width":"300"},{activator:t(({props:r})=>[e(I,Y(r,{class:"pa-0 px-1",elevation:"0",color:"transparent",plain:"",ripple:!1}),{default:t(()=>[e(d,{size:"35"},{default:t(()=>[je]),_:1})]),_:2},1040)]),default:t(()=>[e(m,{class:"pa-6",elevation:"10",rounded:"lg"},{default:t(()=>[Le,l("div",Ne,[Oe,l("div",Pe,[Fe,Ge,l("div",Je,[e(U,{type:"mail",size:"16",class:"d-flex grey--text"}),Ze])])]),(n(!0),b($,null,j(f.value,(r,k)=>(n(),h(a,{class:"pa-3 mb-2",key:k,onClick:c.value,value:r,title:r.title,subtitle:r.desc,rounded:"lg"},{prepend:t(()=>[l("span",qe,[e(I,{color:r.color,icon:"",elevation:"0",size:"small",class:"mr-3"},{default:t(()=>[e(U,{type:r.icon,size:"18"},null,8,["type"])]),_:2},1032,["color"])])]),_:2},1032,["onClick","value","title","subtitle"]))),128)),e(I,{block:"",color:"secondary",class:"mt-4 py-4",onClick:E},{default:t(()=>[x("Logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["color","priority","class"])}}}),Xe=l("div",{class:"px-4 py-4"},[l("h3",null,"Customizer")],-1),We={key:0,class:"px-4 py-4"},Ke=l("h4",{class:"mb-3"},"Topbar Colors",-1),et={key:1,class:"px-4 py-4"},tt=l("h4",{class:"mb-3"},"Sidebar Colors",-1),ot={class:"px-4 py-4"},at=l("h4",null,"Horizontal Layout",-1),st=l("br",null,null,-1),lt=l("h4",null,"Dark Mode",-1),nt=l("br",null,null,-1),it=l("h4",null,"Mini Sidebar",-1),rt=L({__name:"Customizer",setup(A){function o(){u.setHorizontalLayout&&window.location.reload()}const u=J(),w=M(["#f6f6f6","#1e88e6","#21c1d6","#fc4b6c","#563dea","#ff9800"]),c=M(["white","#212121","#1e88e6","#fc4b6c","#563dea","#ff9800"]);return(y,_)=>{const f=i("v-divider"),C=i("v-avatar"),v=i("v-item"),E=i("v-item-group"),S=i("v-checkbox"),z=i("v-navigation-drawer");return n(),h(z,{app:"",temporary:"",elevation:"10",location:"right",modelValue:s(u).Customizer_drawer,"onUpdate:modelValue":_[5]||(_[5]=p=>s(u).Customizer_drawer=p)},{default:t(()=>[Xe,e(f),s(u).darktheme?D("",!0):(n(),b("div",We,[Ke,e(E,{mandatory:"",modelValue:s(u).navbarColor,"onUpdate:modelValue":_[0]||(_[0]=p=>s(u).navbarColor=p)},{default:t(()=>[(n(!0),b($,null,j(w.value,p=>(n(),h(v,{key:p,value:p},{default:t(({isSelected:U,toggle:I})=>[e(C,{class:H([U&&"v-sidebar_active","v-settings__item mr-2 cursor-pointer"]),color:p,size:"25",onClick:I},null,8,["class","color","onClick"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])),e(f),s(u).darktheme?D("",!0):(n(),b("div",et,[tt,e(E,{mandatory:"",modelValue:s(u).SidebarColor,"onUpdate:modelValue":_[1]||(_[1]=p=>s(u).SidebarColor=p)},{default:t(()=>[(n(!0),b($,null,j(c.value,p=>(n(),h(v,{key:p,value:p},{default:t(({isSelected:U,toggle:I})=>[e(C,{class:H([U&&"v-sidebar_active","v-settings__item mr-2 cursor-pointer"]),color:p,size:"25",onClick:I},null,8,["class","color","onClick"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])),e(f),l("div",ot,[at,l("div",{onClick:o},[e(S,{"hide-details":"",modelValue:s(u).setHorizontalLayout,"onUpdate:modelValue":_[2]||(_[2]=p=>s(u).setHorizontalLayout=p),label:"Horizontal"},null,8,["modelValue"])]),st,lt,e(S,{"hide-details":"",modelValue:s(u).darktheme,"onUpdate:modelValue":_[3]||(_[3]=p=>s(u).darktheme=p),label:"Dark"},null,8,["modelValue"]),nt,it,e(S,{"hide-details":"",modelValue:s(u).mini_sidebar,"onUpdate:modelValue":_[4]||(_[4]=p=>s(u).mini_sidebar=p),label:"Mini"},null,8,["modelValue"])]),e(f)]),_:1},8,["modelValue"])}}});const ct={"answers.no-size":A=>`Lamentablemente no tenemos esta talla en la ref: ${A}`,"answers.size":(A,o)=>o.length===1?`Si tenemos disponible la ref: ${A} en talla ${o[0]}`:`En la ref: ${A}, tenemos disponibes las tallas: ${o.join(", ")}`,"answers.url":(A,o)=>`En el siguiente vinculo puedes tener toda la información y comprar la ref: ${A} ${o}`,"answers.price":(A,o)=>`El valor de la ref: ${A} es de ${o}`,"answers.mayor":(A,o)=>`En la ref: *${A}*, tenemos disponibles las tallas: ${o.join(", ")}.

Su valor al por mayor es de: $XXXX`,"answers.all":(A,o,u,w)=>o.length?`En la ref: *${A}*,
tenemos disponibles las tallas: ${o.join(",")}.

Su valor es de ${u}
y puedes adquirirla en
${w}`:`Si tenemos disponible la ref *${A}* en talla ${o[0]}.
Su valor es de ${u} y puedes adquirirla en ${w}`},dt={list(A,o={sort:"createdAt",order:"1"}){return pe.get(ie.DASHBOARD_BASE_URL+"/api/ecommerces/",{params:{...A,...o}})}},ut={class:"px-4"},mt=l("div",{class:"py-4"},[l("h3",null,"TODO BOT")],-1),pt={class:"py-4"},_t={key:0,class:"py-4"},vt={key:0,class:"mb-3"},ft=l("h4",{class:"mb-3"},"Copiar respuestas",-1),ht=L({__name:"ChatSidebar",setup(A){const o=M(!1),u=M(""),w=M([]),c=M(null),y=M([]),_=M(!1),f=de(),C=X(),v=se(()=>C.state.authModule.user),E=se(()=>c.value?F(c.value):[]),S=()=>{y.value=E.value},z=()=>{y.value=[]},p=async(d="all")=>{B(d).then(m=>{console.log(m),navigator.clipboard.writeText(m).then(()=>{_.value=!0,C.state.chatsModule.hasPendingNegotiationStatus=!0})});const a=c.value.categories.map(m=>m._id);await te(a)},U=(d="all")=>{B(d).then(async a=>{const m=c.value.categories.map(V=>V._id);await te(m),le(a,"Agente"),f.SET_SIDEBAR_DRAWER(),C.commit("chatsModule/updateHasToUpdateSelectedChat",!C.state.chatsModule.hasToUpdateSelectedChat)})},I=async()=>{var G;const d=((G=f.bot)==null?void 0:G.name.split(" ")[0])||"",m=`utm_content=${v.value.alias||v.value.first_name}&utm_medium=chattf&utm_source=${d}`,V=c.value.permalink,T=`${V}${V.endsWith("/")?"":"/"}?${m}`,r=new Date;r.setMonth(r.getMonth()+2);const k={url:T,expiry:_e(r),metatitle:c.value.name,metadescription:c.value.categories[0]?c.value.categories[0].name:null};return(await ve.shortenLink(k)).data.payload.shorturl},B=async d=>{var q;const a=c.value.ref||c.value.sku.split("-")[0],m=(q=y.value)==null?void 0:q.map(P=>P.label),V=c.value.variations[0],T=new Intl.NumberFormat().format(V.sale_price??V.regular_price),r=["url","all","mayor"].includes(d)?await I():"",k=[a],R=c.value.featured_images,K=c.value.customImages.filter((P,g)=>R==null?void 0:R.map(ee=>ee.index).includes(g)).find(P=>P.includes("youtube"));return d==="size"&&k.push(m),d==="url"&&k.push(r),d==="price"&&k.push(T),d==="all"&&k.push(m,T,r),d==="mayor"&&k.push(m),d==="image"?c.value.customImages[0]:d==="youtube"?K:ct[`answers.${d}`](...k)},F=d=>{const a=[];for(const m of d.variations)if(m.status==="publish"&&m.stock_status==="instock"&&m.attributes){const T={...m,attributes:O(m.attributes)};Object.assign(T,{label:Q(T)}),a.push(T)}return a},Q=d=>{var V,T;const a=d.attributes.talla.option,m=(T=(V=d.attributes)==null?void 0:V.color)==null?void 0:T.option;return m?`${a} - ${m}`:a},O=d=>d.reduce((a,m)=>({...a,[m.name.toLowerCase()]:m}),{}),Z=async()=>{if(o.value===!0)return;o.value=!0;const d={limit:10,filter:u.value,country:f.bot?f.bot.country:void 0,fields:["name","ref","sku"].join(",")},a=await dt.list(d);w.value=a.data.payload,o.value=!1},W=async d=>{le("","Agente","image",{url:d}),f.SET_SIDEBAR_DRAWER(),C.commit("chatsModule/updateHasToUpdateSelectedChat",!C.state.chatsModule.hasToUpdateSelectedChat);const a=c.value.categories.map(m=>m._id);await te(a)};return oe(c,d=>{d||(y.value=[])}),oe(u,d=>{var a;d&&d!==((a=c.value)==null?void 0:a._id)&&Z()}),(d,a)=>{const m=i("v-divider"),V=i("v-autocomplete"),T=i("v-checkbox"),r=i("v-col"),k=i("v-row"),R=i("v-btn"),G=i("v-snackbar"),K=i("v-img"),q=i("v-expand-transition"),P=i("v-navigation-drawer");return n(),h(P,{app:"",temporary:"",elevation:"10",location:"right",modelValue:s(f).sidebarDrawer,"onUpdate:modelValue":a[13]||(a[13]=g=>s(f).sidebarDrawer=g),width:"400"},{default:t(()=>[l("div",ut,[mt,e(m),l("div",pt,[e(V,{items:w.value,modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=g=>c.value=g),search:u.value,"onUpdate:search":a[1]||(a[1]=g=>u.value=g),loading:o.value,autofocus:"","cache-items":"","item-title":"name","item-value":"_id","no-filter":"","hide-no-data":"","hide-details":"",outlined:"",clearable:"","menu-props":{location:"bottom end"},label:"Consultar producto",placeholder:"Buscar por nombre o referencia","prepend-icon":"mdi-database-search","return-object":""},null,8,["items","modelValue","search","loading"])]),e(m),e(q,null,{default:t(()=>[c.value?(n(),b("div",_t,[s(E).length?(n(),b("h4",vt,"Tallas")):D("",!0),e(k,null,{default:t(()=>[(n(!0),b($,null,j(s(E),g=>(n(),h(r,{key:g.id,style:{padding:"0"},cols:"4"},{default:t(()=>[e(T,{label:g.label,modelValue:y.value,"onUpdate:modelValue":a[2]||(a[2]=ee=>y.value=ee),value:g,"hide-details":""},null,8,["label","modelValue","value"])]),_:2},1024))),128))]),_:1}),s(E).length?(n(),h(k,{key:1,class:"mb-3"},{default:t(()=>[e(r,null,{default:t(()=>[e(R,{variant:"outlined",onClick:S},{default:t(()=>[x("Seleccionar Todas")]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(R,{variant:"outlined",onClick:z},{default:t(()=>[x("Limpiar Selección")]),_:1})]),_:1})]),_:1})):D("",!0),ft,e(k,{class:"mb-3"},{default:t(()=>[e(r,null,{default:t(()=>[s(E).length?(n(),h(R,{key:0,disabled:!y.value.length,color:"success",class:"mb-2",block:"",onClick:a[3]||(a[3]=g=>p("size"))},{default:t(()=>[x(" Tallas Seleccionadas ")]),_:1},8,["disabled"])):D("",!0),e(R,{color:"error",block:"",onClick:a[4]||(a[4]=g=>p("no-size"))},{default:t(()=>[x(" No hay tallas disponibles ")]),_:1})]),_:1})]),_:1}),e(k,{class:"mb-3"},{default:t(()=>[e(r,{cols:3},{default:t(()=>[e(R,{onClick:a[5]||(a[5]=g=>p("url"))},{default:t(()=>[x("Url")]),_:1})]),_:1}),e(r,{cols:3},{default:t(()=>[e(R,{onClick:a[6]||(a[6]=g=>p("price"))},{default:t(()=>[x("Precio")]),_:1})]),_:1}),e(r,{cols:3},{default:t(()=>[e(R,{onClick:a[7]||(a[7]=g=>W(c.value.customImages[0])),disabled:!c.value.customImages[0]},{default:t(()=>[x("Imagen")]),_:1},8,["disabled"])]),_:1}),e(r,{cols:3},{default:t(()=>[c.value.customImages.find(g=>g.includes("youtube"))?(n(),h(R,{key:0,onClick:a[8]||(a[8]=g=>p("youtube")),disabled:!c.value.customImages[0]},{default:t(()=>[x("Youtube")]),_:1},8,["disabled"])):D("",!0)]),_:1})]),_:1}),e(k,{class:"mb-3"},{default:t(()=>[e(r,{cols:12},{default:t(()=>[e(R,{class:"mb-2",block:"",onClick:a[9]||(a[9]=g=>U("all")),disabled:!y.value.length},{default:t(()=>[x(" Copiar y Enviar ")]),_:1},8,["disabled"])]),_:1}),e(r,{cols:6},{default:t(()=>[e(R,{block:"",onClick:a[10]||(a[10]=g=>p("all")),disabled:!y.value.length},{default:t(()=>[x(" Copiar Todo ")]),_:1},8,["disabled"])]),_:1}),e(r,{cols:6},{default:t(()=>[e(R,{block:"",onClick:a[11]||(a[11]=g=>p("mayor")),disabled:!y.value.length},{default:t(()=>[x(" X MAYOR ")]),_:1},8,["disabled"])]),_:1}),e(G,{modelValue:_.value,"onUpdate:modelValue":a[12]||(a[12]=g=>_.value=g),color:"success"},{default:t(()=>[x(" Se ha copiado mensaje al portapapeles! ")]),_:1},8,["modelValue"])]),_:1}),e(k,null,{default:t(()=>[e(r,null,{default:t(()=>[e(K,{src:c.value.customImages[0]},null,8,["src"])]),_:1})]),_:1})])):D("",!0)]),_:1})])]),_:1},8,["modelValue"])}}});const gt=[{group:"/dashboards",model:!1,icon:"home",title:"Dashboards",class:"two-column",to:"/dashboards",children:[{title:"Analytical",icon:"mdi mdi-adjust",to:"/dashboards/analytical"},{title:"eCommerce",icon:"mdi mdi-adjust",to:"/dashboards/ecommerce"},{title:"Modern",icon:"mdi mdi-adjust",to:"/dashboards/modern"}]},{group:"/apps",model:!1,icon:"inbox",title:"Apps",to:"/apps",children:[{icon:"mdi mdi-comment-outline",title:"Chat",to:"/apps/chat"},{icon:"mdi mdi-calendar",title:"Calendar",to:"/apps/fullcalendar"},{icon:"mdi mdi-shopping",title:"Ecommerce-Shop",to:"/apps/shop"},{icon:"mdi mdi-phone",title:"Contact List",to:"/apps/contact-list"},{icon:"mdi mdi-phone-voip",title:"Contact Grid",to:"/apps/contact-grid"},{icon:"mdi mdi-playlist-plus",title:"Todo",to:"/apps/email/todo"}]},{group:"/uicomponents",model:!1,icon:"grid",title:"Ui",extraclass:"mega-dropdown",to:"/ui-components",children:[{title:"Alerts",icon:"mdi mdi-alert",to:"/ui-components/alert"},{title:"Avatar",icon:"mdi mdi-account-circle",to:"/ui-components/avatar"},{title:"Badge",icon:"mdi mdi-relative-scale",to:"/ui-components/badge"},{title:"Banner",icon:"mdi mdi-box-shadow",to:"/ui-components/banner"},{title:"Appbar",icon:"mdi mdi-arrange-bring-to-front",to:"/ui-components/appbar"},{title:"Toolbar",icon:"mdi mdi-table-column-plus-after",to:"/ui-components/toolbar"},{title:"Systembar",icon:"mdi mdi-format-float-left",to:"/ui-components/systembar"},{title:"Breadcrumb",icon:"mdi mdi-equal",to:"/ui-components/breadcrumb"},{title:"Buttons",icon:"mdi mdi-toggle-switch",to:"/ui-components/buttons"},{title:"Cards",icon:"mdi mdi-cards-outline",to:"/ui-components/cards"},{title:"Carousel",icon:"mdi mdi-view-carousel",to:"/ui-components/carousel"},{title:"Chips",icon:"mdi mdi-checkbox-multiple-blank-outline",to:"/ui-components/chips"},{title:"Dialogs",icon:"mdi mdi-tablet",to:"/ui-components/dialogs"},{title:"Dividers",icon:"mdi mdi-bandcamp",to:"/ui-components/dividers"},{title:"Expansion Panel",icon:"mdi mdi-credit-card-multiple",to:"/ui-components/expansionpanel"},{title:"Footer",icon:"mdi mdi-view-agenda",to:"/ui-components/footer"},{title:"Grids",icon:"mdi mdi-grid",to:"/ui-components/grids"},{title:"Button Group",icon:"mdi mdi-hexagon-multiple",to:"/ui-components/button-group"},{title:"Chip Group",icon:"mdi mdi-image-filter-vintage",to:"/ui-components/chip-group"},{title:"Item Group",icon:"mdi mdi-layers",to:"/ui-components/item-group"},{title:"Slide Group",icon:"mdi mdi-recycle",to:"/ui-components/slide-group"},{title:"Images",icon:"mdi mdi-image-area",to:"/ui-components/images"},{title:"Menus",icon:"mdi mdi-launch",to:"/ui-components/menus"},{title:"Navigation Drawers",icon:"mdi mdi-image-broken-variant",to:"/ui-components/navigation-drawers"},{title:"Pagination",icon:"mdi mdi-book-open-variant",to:"/ui-components/pagination"},{title:"Progress Circular",icon:"mdi mdi-compass",to:"/ui-components/progress-circular"},{title:"Progress Linear",icon:"mdi mdi-crosshairs",to:"/ui-components/progress-linear"},{title:"Rating",icon:"mdi mdi-star-circle",to:"/ui-components/rating"},{title:"Tabs",icon:"mdi mdi-sort-variant",to:"/ui-components/tabs"},{title:"Timeline",icon:"mdi mdi-clock-end",to:"/ui-components/timeline"},{title:"Tooltips",icon:"mdi mdi-image-filter-vintage",to:"/ui-components/tooltips"},{title:"Flex",icon:"mdi mdi-application",to:"/style-animation/flex"},{title:"Elevation",icon:"mdi mdi-assistant",to:"/style-animation/levation"},{title:"Spacing",icon:"mdi mdi-bridge",to:"/style-animation/spacing"},{title:"Text and Typography",icon:"mdi mdi-bowling",to:"/style-animation/text-typography"},{title:"Transitions",icon:"mdi mdi-text-shadow",to:"/style-animation/transitions"}]},{group:"/charts",model:!1,icon:"bar-chart-2",title:"Charts",to:"/charts/apexcharts"},{group:"/form-elements",model:!1,icon:"file-text",title:"Forms",extraclass:"two-column",to:"/form-elements",children:[{title:"Autocompletes",icon:"mdi mdi-priority-low",to:"/form-elements/feautocompletes"},{title:"Combobox",icon:"mdi mdi-rounded-corner",to:"/form-elements/fecombobox"},{title:"File Inputs",icon:"mdi mdi-select-all",to:"/form-elements/fefileinputs"},{title:"Inputs",icon:"mdi mdi-shape-plus",to:"/form-elements/feinputs"},{title:"Selection Controls",icon:"mdi mdi-relative-scale",to:"/form-elements/feselectioncontrols"},{title:"Selects",icon:"mdi mdi-tab-unselected",to:"/form-elements/feselects"},{title:"Sliders",icon:"mdi mdi-vector-difference-ba",to:"/form-elements/fesliders"},{title:"Textareas",icon:"mdi mdi-code-greater-than",to:"/form-elements/fetextareas"},{title:"Textfields",icon:"mdi mdi-border-vertical",to:"/form-elements/fetextfields"},{title:"Form Action",icon:"mdi mdi-code-equal",to:"/form-layouts/flformaction"},{title:"Form Basic",icon:"mdi mdi-content-duplicate",to:"/form-layouts/flformbasic"},{title:"Form Horizontal",icon:"mdi mdi-cards-variant",to:"/form-layouts/flformhorizontal"},{title:"Custom Cards",icon:"mdi mdi-cards-variant",to:"/widgets/custom-cards"}]},{group:"/tables",model:!1,icon:"layout",title:"Tables",to:"/tables",children:[{title:"Simple Table",icon:"mdi mdi-table",to:"/tables"},{title:"Editable Table",icon:"mdi mdi-table-edit",to:"/editable-table"}]},{group:"/extra",model:!1,icon:"layers",title:"Extra",to:"/icons",children:[{title:"Boxed Login",icon:"mdi mdi-account-key",to:"/authentication/boxedlogin"},{title:"Login",icon:"mdi mdi-account-key",to:"/authentication/fulllogin"},{title:"Boxed Register",icon:"mdi mdi-account-plus",to:"/authentication/boxedregister"},{title:"Register",icon:"mdi mdi-account-plus",to:"/authentication/fullregister"},{title:"Error",icon:"mdi mdi-alert-outline",to:"/authentication/error"},{title:"Material",icon:"mdi mdi-emoticon",to:"/icons/material"},{title:"Feather",icon:"mdi mdi-emoticon-cool",to:"/icons/feather"}]}],At={key:0},bt={class:"single-item"},yt={key:1},kt={class:"d-flex align-center"},Ct=l("i",{class:"mdi mdi-chevron-down ml-1 mr-0 sidebar-icon"},null,-1),xt={key:1,class:"mobile-menu"},wt=L({__name:"HorizontalSidebar",setup(A){const o=J(),u=M(gt),{mdAndUp:w}=ce();function c(y){return(Array.isArray(y)?y:[y]).some(f=>{})}return(y,_)=>{const f=i("vue-feather"),C=i("router-link");return s(w)?(n(),b("div",{key:0,class:"horizontalMenu",style:ne(s(o).darktheme?"background:#2b2b2b":"background:"+s(o).SidebarColor)},[l("ul",{class:H(["horizontal-navbar",s(o).SidebarColor=="white"?"":"text-white"])},[(n(!0),b($,null,j(u.value,(v,E)=>(n(),b("li",{key:E},[v.children?(n(),b("div",yt,[l("ul",{class:H(["first-level",v.extraclass])},[l("li",null,[l("a",{class:H(["d-flex align-center",{"is-link-active":c(v.to)}])},[l("div",kt,[e(f,{type:v.icon,class:"feather-sm"},null,8,["type"]),l("span",null,N(v.title),1),Ct]),l("ul",{class:H(["second-level",v.class]),style:ne(s(o).darktheme?"background:#2b2b2b":"background:"+s(o).SidebarColor)},[(n(!0),b($,null,j(v.children,(S,z)=>(n(),b("li",{key:z},[e(C,{to:S.to,class:"d-flex align-center"},{default:t(()=>[l("i",{class:H(S.icon)},null,2),l("span",null,N(S.title),1)]),_:2},1032,["to"])]))),128))],6)],2)])],2)])):(n(),b("ul",At,[l("li",bt,[e(C,{to:v.to},{default:t(()=>[e(f,{type:v.icon,class:"feather-sm"},null,8,["type"]),l("span",null,N(v.title),1)]),_:2},1032,["to"])])]))]))),128))],2)],4)):(n(),b("div",xt,[e(ue)]))}}}),It=L({__name:"FullLayout",setup(A){const o=J(),u=de(),w=ge(),c=X();return fe(()=>{he().isChatOneToOne&&c.commit("setIsChatOneToOne",!0)}),(y,_)=>{const f=i("v-btn"),C=i("v-container"),v=i("v-main"),E=i("v-app");return n(),h(E,{theme:s(o).darktheme?"dark":"light",class:H([s(o).mini_sidebar?"mini-sidebar":"",s(o).setHorizontalLayout?"horizontalLayout":"verticalLayout"])},{default:t(()=>[e(rt),e(ht),!s(o).setHorizontalLayout&&!s(c).state.isChatOneToOne?(n(),h(ue,{key:0})):D("",!0),!s(o).setHorizontalLayout&&!s(c).state.isChatOneToOne?(n(),h(Ye,{key:1})):D("",!0),e(v,null,{default:t(()=>[s(o).setHorizontalLayout?(n(),h(wt,{key:0})):D("",!0),e(C,{fluid:"",class:"page-wrapper"},{default:t(()=>[e(s(Ae)),s(w).name==="Apps"?(n(),h(f,{key:0,class:"customizer-btn",icon:"mdi-cog",size:"large",flat:"",onClick:_[0]||(_[0]=ae(S=>s(u).SET_SIDEBAR_DRAWER(),["stop"]))})):D("",!0)]),_:1})]),_:1})]),_:1},8,["theme","class"])}}});export{It as default};