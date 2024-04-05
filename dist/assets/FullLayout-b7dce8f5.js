import{e as L,o as l,f as A,a as t,w as e,u as a,b as s,R as st,r as c,g as R,h as lt,c as g,i as j,F as $,n as H,j as W,d as k,t as P,m as Y,k as et,l as ot,p as U,q as mt,s as pt,v as it,x as tt,y as at,z as _t,A as vt,B as nt,C as ft,D as gt,E as ht,G as bt}from"./index-33b92a16.js";import{u as J}from"./customizer-50a28d11.js";import{u as ct}from"./chatSidebar-d855e79e.js";const At=[{header:"Home"},{title:"Analytical",icon:"pie-chart",to:"/dashboards/analytical"},{title:"eCommerce",icon:"shopping-bag",to:"/dashboards/ecommerce"},{title:"Modern",icon:"hard-drive",to:"/dashboards/modern"},{header:"Apps"},{title:"Chat",icon:"message-square",to:"/apps/chat"},{title:"Categorias",icon:"disc",to:{name:"Categories"}},{title:"Estados de negociación",icon:"disc",to:{name:"NegotiationStatuses"}},{title:"Catálogos",icon:"disc",to:{name:"CloudStorageLinks"}},{title:"Audios",icon:"disc",to:{name:"CloudStorageLinksAudios"}},{title:"Cerrar sesión",icon:"log-in"},{title:"Atributos",icon:"grid",to:{name:"Attributes"}},{title:"Calendar",icon:"calendar",to:"/apps/fullcalendar"},{title:"Ecommerce-Shop",icon:"shopping-cart",to:"/apps/shop"},{title:"Contact List",icon:"phone",to:"/apps/contact-list"},{title:"Contact Grid",icon:"smartphone",to:"/apps/contact-grid"},{title:"Todo",icon:"check-square",to:"/apps/todo"},{header:"Components"},{group:"/ui-components/",model:!1,icon:"grid",title:"Ui Components",children:[{title:"Alerts",icon:"disc",to:"/ui-components/alert"},{title:"Avatar",icon:"disc",to:"/ui-components/avatar"},{title:"Badge",icon:"disc",to:"/ui-components/badge"},{title:"Banner",icon:"disc",to:"/ui-components/banner"},{title:"Appbar",icon:"disc",to:"/ui-components/appbar"},{title:"Toolbar",icon:"disc",to:"/ui-components/toolbar"},{title:"Systembar",icon:"disc",to:"/ui-components/systembar"},{title:"Breadcrumb",icon:"disc",to:"/ui-components/breadcrumb"},{title:"Buttons",icon:"disc",to:"/ui-components/buttons"},{title:"Cards",icon:"disc",to:"/ui-components/cards"},{title:"Carousel",icon:"disc",to:"/ui-components/carousel"},{title:"Chips",icon:"disc",to:"/ui-components/chips"},{title:"Dialogs",icon:"disc",to:"/ui-components/dialogs"},{title:"Dividers",icon:"disc",to:"/ui-components/dividers"},{title:"Expansion Panel",icon:"disc",to:"/ui-components/expansionpanel"},{title:"Footer",icon:"disc",to:"/ui-components/footer"},{title:"Grids",icon:"disc",to:"/ui-components/grids"},{title:"Button Group",icon:"disc",to:"/ui-components/button-group"},{title:"Chip Group",icon:"disc",to:"/ui-components/chip-group"},{title:"Item Group",icon:"disc",to:"/ui-components/item-group"},{title:"Slide Group",icon:"disc",to:"/ui-components/slide-group"},{title:"Images",icon:"disc",to:"/ui-components/images"},{title:"Menus",icon:"disc",to:"/ui-components/menus"},{title:"Navigation Drawers",icon:"disc",to:"/ui-components/navigation-drawers"},{title:"Pagination",icon:"disc",to:"/ui-components/pagination"},{title:"Progress Circular",icon:"disc",to:"/ui-components/progress-circular"},{title:"Progress Linear",icon:"disc",to:"/ui-components/progress-linear"},{title:"Rating",icon:"disc",to:"/ui-components/rating"},{title:"Tabs",icon:"disc",to:"/ui-components/tabs"},{title:"Timeline",icon:"disc",to:"/ui-components/timeline"},{title:"Tooltips",icon:"disc",to:"/ui-components/tooltips"}]},{group:"/style-animation",model:!1,icon:"box",title:"Style & Animation",children:[{title:"Border Radius",icon:"disc",to:"/style-animation/border-radius"},{title:"Elevation",icon:"disc",to:"/style-animation/elevation"},{title:"Flex",icon:"disc",to:"/style-animation/flex"},{title:"Text and Typography",icon:"disc",to:"/style-animation/text-typography"},{title:"Transitions",icon:"disc",to:"/style-animation/transitions"}]},{header:"Charts"},{title:"ApexCharts",icon:"bar-chart-2",to:"/charts/apexcharts"},{header:"Forms"},{group:"/form-elements",model:!1,icon:"file",title:"Form Elements",children:[{title:"Autocompletes",icon:"disc",to:"/form-elements/feautocompletes"},{title:"Combobox",icon:"disc",to:"/form-elements/fecombobox"},{title:"File Inputs",icon:"disc",to:"/form-elements/fefileinputs"},{title:"Inputs",icon:"disc",to:"/form-elements/feinputs"},{title:"Selection Controls",icon:"disc",to:"/form-elements/feselectioncontrols"},{title:"Selects",icon:"disc",to:"/form-elements/feselects"},{title:"Sliders",icon:"disc",to:"/form-elements/fesliders"},{title:"Textareas",icon:"disc",to:"/form-elements/fetextareas"},{title:"Textfields",icon:"disc",to:"/form-elements/fetextfields"}]},{group:"/form-layouts",model:!1,icon:"codesandbox",title:"Form Layouts",children:[{title:"Form Action",icon:"disc",to:"/form-layouts/flformaction"},{title:"Form Basic",icon:"disc",to:"/form-layouts/flformbasic"},{title:"Form Horizontal",icon:"disc",to:"/form-layouts/flformhorizontal"}]},{header:"Widgets"},{title:"Custom Cards",icon:"copy",to:"/widgets/custom-cards"},{header:"Tables"},{title:"Simple Table",icon:"layout",to:"/tables"},{title:"Editable Table",icon:"edit",to:"/editable-table"},{header:"Authentication"},{title:"Login",icon:"unlock",to:"/authentication/fulllogin"},{title:"Boxed Register",icon:"user-plus",to:"/authentication/boxedregister"},{title:"Register",icon:"user",to:"/authentication/fullregister"},{title:"Error",icon:"alert-triangle",to:"/authentication/error"},{header:"Icons"},{title:"Material",icon:"codesandbox",to:"/icons/material"},{title:"Feather",icon:"feather",to:"/icons/feather"}],yt="/assets/logo-white-ee75b085.svg",Ct={class:"logo"},kt=s("img",{src:yt},null,-1),xt=L({__name:"LogoLight",setup(b){return(o,u)=>(l(),A("div",Ct,[t(a(st),{to:"/"},{default:e(()=>[kt]),_:1})]))}}),wt={class:"logo"},St=L({__name:"LogoDark",setup(b){return(o,u)=>{const x=c("v-img");return l(),A("div",wt,[t(a(st),{to:"/"},{default:e(()=>[t(x,{"aspect-ratio":"1.7",contain:"",src:"/assets/images/logos/todofull.jpg"})]),_:1})])}}}),Et={class:"pa-4"},Bt={start:"",class:"span--start"},It={end:"",class:"span--end"},Tt={start:"",class:"span--start"},Rt={start:"",class:"span--start"},rt=L({__name:"VerticalSidebar",setup(b){const o=J(),u=R(At),{mdAndUp:x}=lt(),r=W();function y(_){_.title==="Cerrar sesión"&&r.dispatch("authModule/logout").then(()=>{}).catch(f=>{console.log("algo salio mal en logout:",f)})}return(_,f)=>{const C=c("v-list-subheader"),v=c("vue-feather"),S=c("v-list-item-title"),w=c("v-list-item"),z=c("v-list-group"),p=c("v-list"),V=c("perfect-scrollbar"),I=c("v-navigation-drawer");return l(),g(I,{left:"",permanent:a(x),modelValue:a(o).Sidebar_drawer,"onUpdate:modelValue":f[0]||(f[0]=E=>a(o).Sidebar_drawer=E),elevation:"10",class:H(a(o).SidebarColor=="white"?"":"text-white"),color:a(o).darktheme?"":a(o).SidebarColor,"rail-width":"75","mobile-breakpoint":"960",app:"",rail:a(o).mini_sidebar,"expand-on-hover":""},{default:e(()=>[s("div",Et,[!a(o).darktheme&&a(o).SidebarColor=="white"?(l(),g(St,{key:0})):(l(),g(xt,{key:1}))]),t(V,{class:"scrollnavbar"},{default:e(()=>[t(p,{class:"pa-4"},{default:e(()=>[(l(!0),A($,null,j(u.value,(E,G)=>(l(),A($,null,[E.header?(l(),g(C,{key:0},{default:e(()=>[k(P(E.header),1)]),_:2},1024)):E.children?(l(),g(z,{key:1,class:""},{activator:e(({props:Q})=>[t(w,Y(Q,{value:E.title,rounded:"lg",class:"mb-1"}),{append:e(()=>[s("span",It,[t(v,{type:"chevron-down",class:"feather-sm"})])]),default:e(()=>[s("span",Bt,[t(v,{type:E.icon,class:"feather-sm"},null,8,["type"])]),t(S,{textContent:P(E.title),class:"mr-auto"},null,8,["textContent"])]),_:2},1040,["value"])]),default:e(()=>[(l(!0),A($,null,j(E.children,(Q,F)=>(l(),g(w,{key:F,value:Q.to,to:Q.to,rounded:"lg",class:"first-level-item mb-1"},{default:e(()=>[s("span",Tt,[t(v,{type:"disc",class:"feather-sm"})]),t(S,{textContent:P(Q.title)},null,8,["textContent"])]),_:2},1032,["value","to"]))),128))]),_:2},1024)):(l(),g(w,{key:G,to:E.to,rounded:"lg",class:"mb-1"},{default:e(()=>[s("span",Rt,[t(v,{type:E.icon,class:"feather-sm v-icon v-icon--size-default"},null,8,["type"])]),t(S,{style:{cursor:"pointer"},onClick:Q=>y(E),dark:"",textContent:P(E.title)},null,8,["onClick","textContent"])]),_:2},1032,["to"]))],64))),256))]),_:1})]),_:1})]),_:1},8,["permanent","modelValue","class","color","rail"])}}}),dt="data:image/jpeg;base64,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",Mt=[{image:"1.jpg",avatarstatus:"success",title:"Romen Joined the Team!",desc:"Congratulate him",time:"9:30 AM"},{image:"2.jpg",avatarstatus:"warning",title:"New message received",desc:"Salma sent you new message",time:"9:08 AM"},{image:"3.jpg",avatarstatus:"error",title:"New Payment received",desc:"Check your earnings",time:"9:08 AM"},{image:"4.jpg",avatarstatus:"success",title:"Jolly completed tasks",desc:"Assign her new tasks",time:"9:08 AM"}],Vt=[{color:"error",icon:"home",title:"Luanch Admin",desc:"Just see the my new admin!"},{color:"primary",icon:"calendar",title:"Event today",desc:"Just a reminder that you have event"},{color:"warning",icon:"settings",title:"Settings",desc:"You can customize this template as you want"},{color:"secondary",icon:"users",title:"Johny John",desc:"Assign her new tasks"}],Dt=[{color:"error",icon:"dollar-sign",title:"My Profile",desc:"Account Settings"},{color:"success",icon:"shield",title:"My Inbox",desc:"Messages & Emails"},{color:"secondary",icon:"credit-card",title:"My Tasks",desc:"To-do and Daily Tasks"}],Ut={class:"d-flex"},$t={start:"",class:"span--start"},zt={class:"d-flex"},Qt={start:""},Ht=s("img",{src:dt,alt:"Julia"},null,-1),jt=s("h4",{class:"font-weight-medium fs-18"},"User Profile",-1),Lt={class:"d-flex align-center my-4"},Pt=s("img",{src:dt,alt:"Julia",class:"rounded-circle",width:"90"},null,-1),Ft={class:"ml-4"},Nt=s("h4",{class:"font-weight-medium fs-18"},"Julia Roberts",-1),Ot=s("span",{class:"subtitle-2 font-weight-light"},"Administrator",-1),Gt={class:"d-flex align-center"},Jt=s("span",{class:"subtitle-2 font-weight-light ml-1"},"info@flexy.com",-1),qt={start:""},Zt=L({__name:"VerticalHeader",setup(b){const o=J(),u=W(),x=R(!1),r=R(void 0),y=R(Mt),_=R(Vt),f=R(Dt),C=R((o.setHorizontalLayout,0));function v(){x.value=!x.value}et(C,w=>{C.value=w});function S(){u.dispatch("authModule/logout").then(()=>{}).catch(w=>{console.log("algo salio mal en logout:",w)})}return(w,z)=>{const p=c("v-app-bar-nav-icon"),V=c("vue-feather"),I=c("v-btn"),E=c("v-text-field"),G=c("v-sheet"),Q=c("v-spacer"),F=c("v-badge"),q=c("v-chip"),X=c("v-img"),d=c("v-avatar"),i=c("v-list-item"),m=c("v-list"),T=c("v-menu"),M=c("v-app-bar");return l(),g(M,{color:a(o).darktheme?"":a(o).navbarColor,elevation:"0",priority:C.value,class:H(["v-topbar",a(o).navbarColor=="#f6f6f6"?"":"text-white"])},{default:e(()=>[t(p,{class:"hidden-sm-and-down",onClick:z[0]||(z[0]=ot(n=>a(o).SET_MINI_SIDEBAR(!a(o).mini_sidebar),["stop"]))}),t(p,{class:"hidden-md-and-up",onClick:ot(a(o).SET_SIDEBAR_DRAWER,["stop"])},null,8,["onClick"]),t(I,{text:"",icon:"",color:"lighten-2",onClick:v},{default:e(()=>[t(V,{type:"search",class:"feather-sm"})]),_:1}),x.value?(l(),g(G,{key:0,class:"searchinput pa-2",elevation:"10"},{default:e(()=>[t(E,{color:"success",label:"Search",placeholder:"Search Now",variant:"outlined","append-icon":"mdi-close",density:"compact","onClick:append":v})]),_:1})):U("",!0),t(Q),t(T,{anchor:"bottom end",origin:"auto","max-width":"300"},{activator:e(({props:n})=>[t(I,Y({icon:""},n),{default:e(()=>[t(F,{color:"secondary",dot:""},{default:e(()=>[t(V,{type:"message-square",class:"feather-sm"})]),_:1})]),_:2},1040)]),default:e(()=>[t(m,{class:"pa-5",elevation:"10",rounded:"lg"},{default:e(()=>[s("h4",Ut,[k(" Messages "),t(q,{label:"",small:"",color:"secondary",class:"ml-auto"},{default:e(()=>[k(" 5 new ")]),_:1})]),(l(!0),A($,null,j(y.value,(n,B)=>(l(),g(i,{class:"my-2 pa-3",key:B,rounded:"lg",value:n,onClick:r.value,title:n.title,subtitle:n.desc},{prepend:e(()=>[s("span",$t,[t(d,{size:"50"},{default:e(()=>[t(X,{src:`/assets/images/users/${n.image}`,alt:n.image,width:"50"},null,8,["src","alt"])]),_:2},1024)])]),_:2},1032,["value","onClick","title","subtitle"]))),128)),t(I,{flat:"",color:"primary",class:"mt-4",block:""},{default:e(()=>[k("See all Messages")]),_:1})]),_:1})]),_:1}),t(T,{anchor:"bottom end",origin:"auto"},{activator:e(({props:n})=>[t(I,Y({icon:""},n),{default:e(()=>[t(F,{color:"primary",dot:""},{default:e(()=>[t(V,{type:"bell",class:"feather-sm"})]),_:1})]),_:2},1040)]),default:e(()=>[t(m,{class:"pa-6",elevation:"10",rounded:"lg","max-width":"300"},{default:e(()=>[s("h4",zt,[k(" Notifications "),t(q,{class:"ml-auto",label:"",small:"",color:"error"},{default:e(()=>[k(" 5 new ")]),_:1})]),(l(!0),A($,null,j(_.value,(n,B)=>(l(),g(i,{class:"pa-3 mt-2",key:B,value:n,onClick:r.value,rounded:"lg",title:n.title,subtitle:n.desc},{prepend:e(()=>[s("span",Qt,[t(I,{color:n.color,icon:"",elevation:"0",class:"mr-3"},{default:e(()=>[t(V,{type:n.icon,size:"18"},null,8,["type"])]),_:2},1032,["color"])])]),_:2},1032,["value","onClick","title","subtitle"]))),128)),t(I,{block:"",color:"secondary",class:"mt-4 py-4"},{default:e(()=>[k("See all Notifications")]),_:1})]),_:1})]),_:1}),t(T,{anchor:"bottom end",origin:"auto","min-width":"300"},{activator:e(({props:n})=>[t(I,Y(n,{class:"pa-0 px-1",elevation:"0",color:"transparent",plain:"",ripple:!1}),{default:e(()=>[t(d,{size:"35"},{default:e(()=>[Ht]),_:1})]),_:2},1040)]),default:e(()=>[t(m,{class:"pa-6",elevation:"10",rounded:"lg"},{default:e(()=>[jt,s("div",Lt,[Pt,s("div",Ft,[Nt,Ot,s("div",Gt,[t(V,{type:"mail",size:"16",class:"d-flex grey--text"}),Jt])])]),(l(!0),A($,null,j(f.value,(n,B)=>(l(),g(i,{class:"pa-3 mb-2",key:B,onClick:r.value,value:n,title:n.title,subtitle:n.desc,rounded:"lg"},{prepend:e(()=>[s("span",qt,[t(I,{color:n.color,icon:"",elevation:"0",size:"small",class:"mr-3"},{default:e(()=>[t(V,{type:n.icon,size:"18"},null,8,["type"])]),_:2},1032,["color"])])]),_:2},1032,["onClick","value","title","subtitle"]))),128)),t(I,{block:"",color:"secondary",class:"mt-4 py-4",onClick:S},{default:e(()=>[k("Logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["color","priority","class"])}}}),Yt=s("div",{class:"px-4 py-4"},[s("h3",null,"Customizer")],-1),Wt={key:0,class:"px-4 py-4"},Xt=s("h4",{class:"mb-3"},"Topbar Colors",-1),Kt={key:1,class:"px-4 py-4"},te=s("h4",{class:"mb-3"},"Sidebar Colors",-1),ee={class:"px-4 py-4"},oe=s("h4",null,"Horizontal Layout",-1),ie=s("br",null,null,-1),ae=s("h4",null,"Dark Mode",-1),ne=s("br",null,null,-1),se=s("h4",null,"Mini Sidebar",-1),le=L({__name:"Customizer",setup(b){function o(){u.setHorizontalLayout&&window.location.reload()}const u=J(),x=R(["#f6f6f6","#1e88e6","#21c1d6","#fc4b6c","#563dea","#ff9800"]),r=R(["white","#212121","#1e88e6","#fc4b6c","#563dea","#ff9800"]);return(y,_)=>{const f=c("v-divider"),C=c("v-avatar"),v=c("v-item"),S=c("v-item-group"),w=c("v-checkbox"),z=c("v-navigation-drawer");return l(),g(z,{app:"",temporary:"",elevation:"10",location:"right",modelValue:a(u).Customizer_drawer,"onUpdate:modelValue":_[5]||(_[5]=p=>a(u).Customizer_drawer=p)},{default:e(()=>[Yt,t(f),a(u).darktheme?U("",!0):(l(),A("div",Wt,[Xt,t(S,{mandatory:"",modelValue:a(u).navbarColor,"onUpdate:modelValue":_[0]||(_[0]=p=>a(u).navbarColor=p)},{default:e(()=>[(l(!0),A($,null,j(x.value,p=>(l(),g(v,{key:p,value:p},{default:e(({isSelected:V,toggle:I})=>[t(C,{class:H([V&&"v-sidebar_active","v-settings__item mr-2 cursor-pointer"]),color:p,size:"25",onClick:I},null,8,["class","color","onClick"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])),t(f),a(u).darktheme?U("",!0):(l(),A("div",Kt,[te,t(S,{mandatory:"",modelValue:a(u).SidebarColor,"onUpdate:modelValue":_[1]||(_[1]=p=>a(u).SidebarColor=p)},{default:e(()=>[(l(!0),A($,null,j(r.value,p=>(l(),g(v,{key:p,value:p},{default:e(({isSelected:V,toggle:I})=>[t(C,{class:H([V&&"v-sidebar_active","v-settings__item mr-2 cursor-pointer"]),color:p,size:"25",onClick:I},null,8,["class","color","onClick"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])),t(f),s("div",ee,[oe,s("div",{onClick:o},[t(w,{"hide-details":"",modelValue:a(u).setHorizontalLayout,"onUpdate:modelValue":_[2]||(_[2]=p=>a(u).setHorizontalLayout=p),label:"Horizontal"},null,8,["modelValue"])]),ie,ae,t(w,{"hide-details":"",modelValue:a(u).darktheme,"onUpdate:modelValue":_[3]||(_[3]=p=>a(u).darktheme=p),label:"Dark"},null,8,["modelValue"]),ne,se,t(w,{"hide-details":"",modelValue:a(u).mini_sidebar,"onUpdate:modelValue":_[4]||(_[4]=p=>a(u).mini_sidebar=p),label:"Mini"},null,8,["modelValue"])]),t(f)]),_:1},8,["modelValue"])}}});const ce={"answers.no-size":b=>`Lamentablemente no tenemos esta talla en la ref: ${b}`,"answers.size":(b,o)=>o.length===1?`Si tenemos disponible la ref: ${b} en talla ${o[0]}`:`En la ref: ${b}, tenemos disponibes las tallas: ${o.join(", ")}`,"answers.url":(b,o)=>`En el siguiente vinculo puedes tener toda la información y comprar la ref: ${b} ${o}`,"answers.price":(b,o)=>`El valor de la ref: ${b} es de ${o}`,"answers.mayor":(b,o)=>`En la ref: *${b}*, tenemos disponibles las tallas: ${o.join(", ")}.

Su valor al por mayor es de: $XXXX`,"answers.all":(b,o,u,x)=>o.length?`En la ref: *${b}*,
tenemos disponibles las tallas: ${o.join(",")}.

Su valor es de ${u}
y puedes adquirirla en
${x}`:`Si tenemos disponible la ref *${b}* en talla ${o[0]}.
Su valor es de ${u} y puedes adquirirla en ${x}`},re={list(b,o={sort:"createdAt",order:"1"}){return mt.get(pt.DASHBOARD_BASE_URL+"/api/ecommerces/",{params:{...b,...o}})}},de={class:"px-4"},ue=s("div",{class:"py-4"},[s("h3",null,"TODO BOT")],-1),me={class:"py-4"},pe={key:0,class:"py-4"},_e={key:0,class:"mb-3"},ve=s("h4",{class:"mb-3"},"Copiar respuestas",-1),fe=L({__name:"ChatSidebar",setup(b){const o=R(!1),u=R(""),x=R([]),r=R(null),y=R([]),_=R(!1),f=ct(),C=W(),v=it(()=>C.state.authModule.user),S=it(()=>r.value?G(r.value):[]),w=()=>{y.value=S.value},z=()=>{y.value=[]},p=async(d="all")=>{E(d).then(m=>{console.log(m),navigator.clipboard.writeText(m).then(()=>{_.value=!0,C.state.chatsModule.hasPendingNegotiationStatus=!0})});const i=r.value.categories.map(m=>m._id);await tt(i)},V=(d="all")=>{E(d).then(async i=>{const m=r.value.categories.map(T=>T._id);await tt(m),at(i,"Agente"),f.SET_SIDEBAR_DRAWER(),C.commit("chatsModule/updateHasToUpdateSelectedChat",!C.state.chatsModule.hasToUpdateSelectedChat)})},I=async()=>{var N;const d=((N=f.bot)==null?void 0:N.name.split(" ")[0])||"",m=`utm_content=${v.value.alias||v.value.first_name}&utm_medium=chattf&utm_source=${d}`,T=r.value.permalink,M=`${T}${T.endsWith("/")?"":"/"}?${m}`,n=new Date;n.setMonth(n.getMonth()+2);const B={url:M,expiry:_t(n),metatitle:r.value.name,metadescription:r.value.categories[0]?r.value.categories[0].name:null};return(await vt.shortenLink(B)).data.payload.shorturl},E=async d=>{var Z;const i=r.value.ref||r.value.sku.split("-")[0],m=(Z=y.value)==null?void 0:Z.map(O=>O.label),T=new Intl.NumberFormat().format(r.value.variations[0].regular_price),M=["url","all","mayor"].includes(d)?await I():"",n=[i],B=r.value.featured_images,N=r.value.customImages.filter((O,K)=>B==null?void 0:B.map(h=>h.index).includes(K)).find(O=>O.includes("youtube"));return d==="size"&&n.push(m),d==="url"&&n.push(M),d==="price"&&n.push(T),d==="all"&&n.push(m,T,M),d==="mayor"&&n.push(m),d==="image"?r.value.customImages[0]:d==="youtube"?N:ce[`answers.${d}`](...n)},G=d=>{const i=[];for(const m of d.variations)if(m.status==="publish"&&m.stock_status==="instock"&&m.attributes){const M={...m,attributes:F(m.attributes)};Object.assign(M,{label:Q(M)}),i.push(M)}return i},Q=d=>{var T,M;const i=d.attributes.talla.option,m=(M=(T=d.attributes)==null?void 0:T.color)==null?void 0:M.option;return m?`${i} - ${m}`:i},F=d=>d.reduce((i,m)=>({...i,[m.name.toLowerCase()]:m}),{}),q=async()=>{if(o.value===!0)return;o.value=!0;const d={limit:10,filter:u.value,country:f.bot?f.bot.country:void 0,fields:["name","ref","sku"].join(",")},i=await re.list(d);x.value=i.data.payload,o.value=!1},X=async d=>{at("","Agente","image",{url:d}),f.SET_SIDEBAR_DRAWER(),C.commit("chatsModule/updateHasToUpdateSelectedChat",!C.state.chatsModule.hasToUpdateSelectedChat);const i=r.value.categories.map(m=>m._id);await tt(i)};return et(r,d=>{d||(y.value=[])}),et(u,d=>{var i;d&&d!==((i=r.value)==null?void 0:i._id)&&q()}),(d,i)=>{const m=c("v-divider"),T=c("v-autocomplete"),M=c("v-checkbox"),n=c("v-col"),B=c("v-row"),D=c("v-btn"),N=c("v-snackbar"),Z=c("v-img"),O=c("v-expand-transition"),K=c("v-navigation-drawer");return l(),g(K,{app:"",temporary:"",elevation:"10",location:"right",modelValue:a(f).sidebarDrawer,"onUpdate:modelValue":i[13]||(i[13]=h=>a(f).sidebarDrawer=h),width:"400"},{default:e(()=>[s("div",de,[ue,t(m),s("div",me,[t(T,{items:x.value,modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=h=>r.value=h),search:u.value,"onUpdate:search":i[1]||(i[1]=h=>u.value=h),loading:o.value,autofocus:"","cache-items":"","item-title":"name","item-value":"_id","no-filter":"","hide-no-data":"","hide-details":"",outlined:"",clearable:"","menu-props":{location:"bottom end"},label:"Consultar producto",placeholder:"Buscar por nombre o referencia","prepend-icon":"mdi-database-search","return-object":""},null,8,["items","modelValue","search","loading"])]),t(m),t(O,null,{default:e(()=>[r.value?(l(),A("div",pe,[a(S).length?(l(),A("h4",_e,"Tallas")):U("",!0),t(B,null,{default:e(()=>[(l(!0),A($,null,j(a(S),h=>(l(),g(n,{key:h.id,style:{padding:"0"},cols:"4"},{default:e(()=>[t(M,{label:h.label,modelValue:y.value,"onUpdate:modelValue":i[2]||(i[2]=ut=>y.value=ut),value:h,"hide-details":""},null,8,["label","modelValue","value"])]),_:2},1024))),128))]),_:1}),a(S).length?(l(),g(B,{key:1,class:"mb-3"},{default:e(()=>[t(n,null,{default:e(()=>[t(D,{variant:"outlined",onClick:w},{default:e(()=>[k("Seleccionar Todas")]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(D,{variant:"outlined",onClick:z},{default:e(()=>[k("Limpiar Selección")]),_:1})]),_:1})]),_:1})):U("",!0),ve,t(B,{class:"mb-3"},{default:e(()=>[t(n,null,{default:e(()=>[a(S).length?(l(),g(D,{key:0,disabled:!y.value.length,color:"success",class:"mb-2",block:"",onClick:i[3]||(i[3]=h=>p("size"))},{default:e(()=>[k(" Tallas Seleccionadas ")]),_:1},8,["disabled"])):U("",!0),t(D,{color:"error",block:"",onClick:i[4]||(i[4]=h=>p("no-size"))},{default:e(()=>[k(" No hay tallas disponibles ")]),_:1})]),_:1})]),_:1}),t(B,{class:"mb-3"},{default:e(()=>[t(n,{cols:3},{default:e(()=>[t(D,{onClick:i[5]||(i[5]=h=>p("url"))},{default:e(()=>[k("Url")]),_:1})]),_:1}),t(n,{cols:3},{default:e(()=>[t(D,{onClick:i[6]||(i[6]=h=>p("price"))},{default:e(()=>[k("Precio")]),_:1})]),_:1}),t(n,{cols:3},{default:e(()=>[t(D,{onClick:i[7]||(i[7]=h=>X(r.value.customImages[0])),disabled:!r.value.customImages[0]},{default:e(()=>[k("Imagen")]),_:1},8,["disabled"])]),_:1}),t(n,{cols:3},{default:e(()=>[r.value.customImages.find(h=>h.includes("youtube"))?(l(),g(D,{key:0,onClick:i[8]||(i[8]=h=>p("youtube")),disabled:!r.value.customImages[0]},{default:e(()=>[k("Youtube")]),_:1},8,["disabled"])):U("",!0)]),_:1})]),_:1}),t(B,{class:"mb-3"},{default:e(()=>[t(n,{cols:12},{default:e(()=>[t(D,{class:"mb-2",block:"",onClick:i[9]||(i[9]=h=>V("all")),disabled:!y.value.length},{default:e(()=>[k(" Copiar y Enviar ")]),_:1},8,["disabled"])]),_:1}),t(n,{cols:6},{default:e(()=>[t(D,{block:"",onClick:i[10]||(i[10]=h=>p("all")),disabled:!y.value.length},{default:e(()=>[k(" Copiar Todo ")]),_:1},8,["disabled"])]),_:1}),t(n,{cols:6},{default:e(()=>[t(D,{block:"",onClick:i[11]||(i[11]=h=>p("mayor")),disabled:!y.value.length},{default:e(()=>[k(" X MAYOR ")]),_:1},8,["disabled"])]),_:1}),t(N,{modelValue:_.value,"onUpdate:modelValue":i[12]||(i[12]=h=>_.value=h),color:"success"},{default:e(()=>[k(" Se ha copiado mensaje al portapapeles! ")]),_:1},8,["modelValue"])]),_:1}),t(B,null,{default:e(()=>[t(n,null,{default:e(()=>[t(Z,{src:r.value.customImages[0]},null,8,["src"])]),_:1})]),_:1})])):U("",!0)]),_:1})])]),_:1},8,["modelValue"])}}});const ge=[{group:"/dashboards",model:!1,icon:"home",title:"Dashboards",class:"two-column",to:"/dashboards",children:[{title:"Analytical",icon:"mdi mdi-adjust",to:"/dashboards/analytical"},{title:"eCommerce",icon:"mdi mdi-adjust",to:"/dashboards/ecommerce"},{title:"Modern",icon:"mdi mdi-adjust",to:"/dashboards/modern"}]},{group:"/apps",model:!1,icon:"inbox",title:"Apps",to:"/apps",children:[{icon:"mdi mdi-comment-outline",title:"Chat",to:"/apps/chat"},{icon:"mdi mdi-calendar",title:"Calendar",to:"/apps/fullcalendar"},{icon:"mdi mdi-shopping",title:"Ecommerce-Shop",to:"/apps/shop"},{icon:"mdi mdi-phone",title:"Contact List",to:"/apps/contact-list"},{icon:"mdi mdi-phone-voip",title:"Contact Grid",to:"/apps/contact-grid"},{icon:"mdi mdi-playlist-plus",title:"Todo",to:"/apps/email/todo"}]},{group:"/uicomponents",model:!1,icon:"grid",title:"Ui",extraclass:"mega-dropdown",to:"/ui-components",children:[{title:"Alerts",icon:"mdi mdi-alert",to:"/ui-components/alert"},{title:"Avatar",icon:"mdi mdi-account-circle",to:"/ui-components/avatar"},{title:"Badge",icon:"mdi mdi-relative-scale",to:"/ui-components/badge"},{title:"Banner",icon:"mdi mdi-box-shadow",to:"/ui-components/banner"},{title:"Appbar",icon:"mdi mdi-arrange-bring-to-front",to:"/ui-components/appbar"},{title:"Toolbar",icon:"mdi mdi-table-column-plus-after",to:"/ui-components/toolbar"},{title:"Systembar",icon:"mdi mdi-format-float-left",to:"/ui-components/systembar"},{title:"Breadcrumb",icon:"mdi mdi-equal",to:"/ui-components/breadcrumb"},{title:"Buttons",icon:"mdi mdi-toggle-switch",to:"/ui-components/buttons"},{title:"Cards",icon:"mdi mdi-cards-outline",to:"/ui-components/cards"},{title:"Carousel",icon:"mdi mdi-view-carousel",to:"/ui-components/carousel"},{title:"Chips",icon:"mdi mdi-checkbox-multiple-blank-outline",to:"/ui-components/chips"},{title:"Dialogs",icon:"mdi mdi-tablet",to:"/ui-components/dialogs"},{title:"Dividers",icon:"mdi mdi-bandcamp",to:"/ui-components/dividers"},{title:"Expansion Panel",icon:"mdi mdi-credit-card-multiple",to:"/ui-components/expansionpanel"},{title:"Footer",icon:"mdi mdi-view-agenda",to:"/ui-components/footer"},{title:"Grids",icon:"mdi mdi-grid",to:"/ui-components/grids"},{title:"Button Group",icon:"mdi mdi-hexagon-multiple",to:"/ui-components/button-group"},{title:"Chip Group",icon:"mdi mdi-image-filter-vintage",to:"/ui-components/chip-group"},{title:"Item Group",icon:"mdi mdi-layers",to:"/ui-components/item-group"},{title:"Slide Group",icon:"mdi mdi-recycle",to:"/ui-components/slide-group"},{title:"Images",icon:"mdi mdi-image-area",to:"/ui-components/images"},{title:"Menus",icon:"mdi mdi-launch",to:"/ui-components/menus"},{title:"Navigation Drawers",icon:"mdi mdi-image-broken-variant",to:"/ui-components/navigation-drawers"},{title:"Pagination",icon:"mdi mdi-book-open-variant",to:"/ui-components/pagination"},{title:"Progress Circular",icon:"mdi mdi-compass",to:"/ui-components/progress-circular"},{title:"Progress Linear",icon:"mdi mdi-crosshairs",to:"/ui-components/progress-linear"},{title:"Rating",icon:"mdi mdi-star-circle",to:"/ui-components/rating"},{title:"Tabs",icon:"mdi mdi-sort-variant",to:"/ui-components/tabs"},{title:"Timeline",icon:"mdi mdi-clock-end",to:"/ui-components/timeline"},{title:"Tooltips",icon:"mdi mdi-image-filter-vintage",to:"/ui-components/tooltips"},{title:"Flex",icon:"mdi mdi-application",to:"/style-animation/flex"},{title:"Elevation",icon:"mdi mdi-assistant",to:"/style-animation/levation"},{title:"Spacing",icon:"mdi mdi-bridge",to:"/style-animation/spacing"},{title:"Text and Typography",icon:"mdi mdi-bowling",to:"/style-animation/text-typography"},{title:"Transitions",icon:"mdi mdi-text-shadow",to:"/style-animation/transitions"}]},{group:"/charts",model:!1,icon:"bar-chart-2",title:"Charts",to:"/charts/apexcharts"},{group:"/form-elements",model:!1,icon:"file-text",title:"Forms",extraclass:"two-column",to:"/form-elements",children:[{title:"Autocompletes",icon:"mdi mdi-priority-low",to:"/form-elements/feautocompletes"},{title:"Combobox",icon:"mdi mdi-rounded-corner",to:"/form-elements/fecombobox"},{title:"File Inputs",icon:"mdi mdi-select-all",to:"/form-elements/fefileinputs"},{title:"Inputs",icon:"mdi mdi-shape-plus",to:"/form-elements/feinputs"},{title:"Selection Controls",icon:"mdi mdi-relative-scale",to:"/form-elements/feselectioncontrols"},{title:"Selects",icon:"mdi mdi-tab-unselected",to:"/form-elements/feselects"},{title:"Sliders",icon:"mdi mdi-vector-difference-ba",to:"/form-elements/fesliders"},{title:"Textareas",icon:"mdi mdi-code-greater-than",to:"/form-elements/fetextareas"},{title:"Textfields",icon:"mdi mdi-border-vertical",to:"/form-elements/fetextfields"},{title:"Form Action",icon:"mdi mdi-code-equal",to:"/form-layouts/flformaction"},{title:"Form Basic",icon:"mdi mdi-content-duplicate",to:"/form-layouts/flformbasic"},{title:"Form Horizontal",icon:"mdi mdi-cards-variant",to:"/form-layouts/flformhorizontal"},{title:"Custom Cards",icon:"mdi mdi-cards-variant",to:"/widgets/custom-cards"}]},{group:"/tables",model:!1,icon:"layout",title:"Tables",to:"/tables",children:[{title:"Simple Table",icon:"mdi mdi-table",to:"/tables"},{title:"Editable Table",icon:"mdi mdi-table-edit",to:"/editable-table"}]},{group:"/extra",model:!1,icon:"layers",title:"Extra",to:"/icons",children:[{title:"Boxed Login",icon:"mdi mdi-account-key",to:"/authentication/boxedlogin"},{title:"Login",icon:"mdi mdi-account-key",to:"/authentication/fulllogin"},{title:"Boxed Register",icon:"mdi mdi-account-plus",to:"/authentication/boxedregister"},{title:"Register",icon:"mdi mdi-account-plus",to:"/authentication/fullregister"},{title:"Error",icon:"mdi mdi-alert-outline",to:"/authentication/error"},{title:"Material",icon:"mdi mdi-emoticon",to:"/icons/material"},{title:"Feather",icon:"mdi mdi-emoticon-cool",to:"/icons/feather"}]}],he={key:0},be={class:"single-item"},Ae={key:1},ye={class:"d-flex align-center"},Ce=s("i",{class:"mdi mdi-chevron-down ml-1 mr-0 sidebar-icon"},null,-1),ke={key:1,class:"mobile-menu"},xe=L({__name:"HorizontalSidebar",setup(b){const o=J(),u=R(ge),{mdAndUp:x}=lt();function r(y){return(Array.isArray(y)?y:[y]).some(f=>{})}return(y,_)=>{const f=c("vue-feather"),C=c("router-link");return a(x)?(l(),A("div",{key:0,class:"horizontalMenu",style:nt(a(o).darktheme?"background:#2b2b2b":"background:"+a(o).SidebarColor)},[s("ul",{class:H(["horizontal-navbar",a(o).SidebarColor=="white"?"":"text-white"])},[(l(!0),A($,null,j(u.value,(v,S)=>(l(),A("li",{key:S},[v.children?(l(),A("div",Ae,[s("ul",{class:H(["first-level",v.extraclass])},[s("li",null,[s("a",{class:H(["d-flex align-center",{"is-link-active":r(v.to)}])},[s("div",ye,[t(f,{type:v.icon,class:"feather-sm"},null,8,["type"]),s("span",null,P(v.title),1),Ce]),s("ul",{class:H(["second-level",v.class]),style:nt(a(o).darktheme?"background:#2b2b2b":"background:"+a(o).SidebarColor)},[(l(!0),A($,null,j(v.children,(w,z)=>(l(),A("li",{key:z},[t(C,{to:w.to,class:"d-flex align-center"},{default:e(()=>[s("i",{class:H(w.icon)},null,2),s("span",null,P(w.title),1)]),_:2},1032,["to"])]))),128))],6)],2)])],2)])):(l(),A("ul",he,[s("li",be,[t(C,{to:v.to},{default:e(()=>[t(f,{type:v.icon,class:"feather-sm"},null,8,["type"]),s("span",null,P(v.title),1)]),_:2},1032,["to"])])]))]))),128))],2)],4)):(l(),A("div",ke,[t(rt)]))}}}),Be=L({__name:"FullLayout",setup(b){const o=J(),u=ct(),x=ht(),r=W();return ft(()=>{gt().isChatOneToOne&&r.commit("setIsChatOneToOne",!0)}),(y,_)=>{const f=c("v-btn"),C=c("v-container"),v=c("v-main"),S=c("v-app");return l(),g(S,{theme:a(o).darktheme?"dark":"light",class:H([a(o).mini_sidebar?"mini-sidebar":"",a(o).setHorizontalLayout?"horizontalLayout":"verticalLayout"])},{default:e(()=>[t(le),t(fe),!a(o).setHorizontalLayout&&!a(r).state.isChatOneToOne?(l(),g(rt,{key:0})):U("",!0),!a(o).setHorizontalLayout&&!a(r).state.isChatOneToOne?(l(),g(Zt,{key:1})):U("",!0),t(v,null,{default:e(()=>[a(o).setHorizontalLayout?(l(),g(xe,{key:0})):U("",!0),t(C,{fluid:"",class:"page-wrapper"},{default:e(()=>[t(a(bt)),a(x).name==="Apps"?(l(),g(f,{key:0,class:"customizer-btn",icon:"mdi-cog",size:"large",flat:"",onClick:_[0]||(_[0]=ot(w=>a(u).SET_SIDEBAR_DRAWER(),["stop"]))})):U("",!0)]),_:1})]),_:1})]),_:1},8,["theme","class"])}}});export{Be as default};
