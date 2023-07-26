import{_ as p,r as s,o as m,c as v,w as o,a as t,b as e,d as h,H as z,I as A,e as x,g as d,J as j,K as k,u as g,L as D,f as C,F as S,k as H,n as O,t as b}from"./index-b5291b3b.js";import{B as J}from"./BaseBreadcrumb-19341b72.js";import{_ as R,a as F,D as K,T as L,B as U}from"./DailyActivities-094a545c.js";import{W as I}from"./WeeklyStats-94625c68.js";import{M as N}from"./MedicalProBranding-fa92a2bc.js";const W={},B=_=>(z("data-v-e300d81a"),_=_(),A(),_),q=B(()=>e("img",{src:R,class:"bg-img-1"},null,-1)),G=B(()=>e("h2",{class:"title text-h6 overlay-title font-weight-medium"},"Congratulation Julia",-1)),Q={class:"title text-h5 mt-4 font-weight-bold d-flex align-end"},X={class:"text-subtitle-1 ml-2 d-flex align-center font-weight-medium"};function Y(_,n){const r=s("vue-feather"),c=s("v-btn"),i=s("v-card-text"),a=s("v-card");return m(),v(a,{class:"position-relative overflow-hidden"},{default:o(()=>[q,t(i,null,{default:o(()=>[G,e("h2",Q,[h(" $39,358 "),e("span",X,[t(r,{type:"arrow-up-left",size:"18"}),h("+9%")])]),t(c,{color:"primary",class:"mt-8"},{default:o(()=>[h(" Download ")]),_:1})]),_:1})]),_:1})}const Z=p(W,[["render",Y],["__scopeId","data-v-e300d81a"],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/modern/congratulation-card/CongratulationCard.vue"]]),ee={},te={class:"d-flex align-start"},se=e("h2",{class:"title text-h6 font-weight-medium mt-1"},"Purchases",-1),oe={class:"ml-auto"},ae=e("div",{class:"mt-9"},[e("h2",{class:"title font-weight-bold text-h5"},"2,367"),e("span",{class:"text-subtitle-1 font-weight-medium text-medium-emphasis"},"Monthly Sales")],-1);function ne(_,n){const r=s("v-spacer"),c=s("vue-feather"),i=s("v-btn"),a=s("v-card-text"),l=s("v-card");return m(),v(l,null,{default:o(()=>[t(a,null,{default:o(()=>[e("div",te,[se,t(r),e("div",oe,[t(i,{color:"secondary",icon:""},{default:o(()=>[t(c,{type:"shopping-bag"})]),_:1})])]),ae]),_:1})]),_:1})}const le=p(ee,[["render",ne],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/modern/purchases/Purchases.vue"]]),re={},ce={class:"d-flex align-start"},ie=e("h2",{class:"title text-h6 font-weight-medium mt-1"},"Total Earnings",-1),de={class:"ml-auto"},_e=e("div",{class:"mt-9"},[e("h2",{class:"title font-weight-bold text-h5"},"$93,438.78"),e("span",{class:"text-subtitle-1 font-weight-medium text-medium-emphasis"},"Monthly Revenue")],-1);function ue(_,n){const r=s("v-spacer"),c=s("vue-feather"),i=s("v-btn"),a=s("v-card-text"),l=s("v-card");return m(),v(l,null,{default:o(()=>[t(a,null,{default:o(()=>[e("div",ce,[ie,t(r),e("div",de,[t(i,{color:"primary",icon:""},{default:o(()=>[t(c,{type:"dollar-sign"})]),_:1})])]),_e]),_:1})]),_:1})}const me=p(re,[["render",ue],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/modern/total-earnings/TotalEarnings.vue"]]),T={series:[{name:"Earnings",data:[0,5,6,8,25,9,11,24]},{name:"Expense",data:[0,3,1,2,8,1,5,1]}],chartOptions:{colors:["#fb9678","#03c9d7"],fill:{type:"solid",opacity:1},chart:{toolbar:{show:!1},type:"line",foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",height:300},dataLabels:{enabled:!1},markers:{size:4,border:1},legend:{show:!1},xaxis:{categories:["16/08","17/08","18/08","19/08","20/08","21/08","22/08","23/08"]},grid:{show:!0,borderColor:"rgba(0, 0, 0, .2)",color:"#777e89",strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},stroke:{curve:"smooth",width:3},tooltip:{x:{format:"dd/MM/yy HH:mm"},theme:"dark"}}},he={class:"d-sm-flex align-start"},pe=e("div",null,[e("h2",{class:"title text-h6 font-weight-medium"},"Revenue Updates")],-1),fe={class:"ml-auto"},ve=e("div",{class:"d-flex justify-center"},[e("div",{class:"d-flex align-center text-primary px-2"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Earnings")]),e("div",{class:"d-flex align-center px-2 text-secondary"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Expense")])],-1),ge=x({__name:"RevenueUpdates",setup(_){const n=d("March"),r=d(["March","April","May","June"]),c=d(!1);return j(()=>{setTimeout(()=>c.value=!0,10)}),(i,a)=>{const l=s("v-spacer"),f=s("v-select"),w=s("apexchart"),y=s("v-card-text"),$=s("v-card");return m(),v($,null,{default:o(()=>[t(y,null,{default:o(()=>[e("div",he,[pe,t(l),e("div",fe,[t(f,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=M=>n.value=M),items:r.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),k(e("div",null,[t(w,{type:"line",height:"300px",options:g(T).chartOptions,series:g(T).series},null,8,["options","series"])],512),[[D,c.value]]),ve]),_:1})]),_:1})}}}),xe=p(ge,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/modern/revenue-updates/RevenueUpdates.vue"]]),E={series:[{name:"Monthly Earnings",data:[6,10,9,11,9,10,12,10,9,11,9,10,12]}],chartOptions:{chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",type:"bar",height:45,sparkline:{enabled:!0}},colors:["rgba(255,255,255,0.5)"],marker:{size:0},tooltip:{theme:"dark"},grid:{show:!1},stroke:{show:!0,width:2,curve:"smooth",colors:["transparent"]},plotOptions:{bar:{horizontal:!1,startingShape:"flat",endingShape:"flat",columnWidth:"30%",barHeight:"100%"}}}},be=e("h3",{class:"title text-h6 font-weight-medium text-white"},"Monthly Earnings",-1),we={class:"mt-4"},ye={class:"title text-h5 text-white mt-6 font-weight-medium d-flex align-items-end"},$e={class:"text-subtitle-1 ml-2 d-flex align-center font-weight-medium"},Me=x({__name:"MonthlyEarnings",setup(_){d("March"),d(["March","April","May","June"]);const n=d(!1);return j(()=>{setTimeout(()=>n.value=!0,10)}),(r,c)=>{const i=s("apexchart"),a=s("vue-feather"),l=s("v-card-text"),f=s("v-card");return m(),v(f,{class:"mb-7 bg-secondary"},{default:o(()=>[t(l,null,{default:o(()=>[be,k(e("div",we,[t(i,{type:"bar",height:"45px",options:g(E).chartOptions,series:g(E).series},null,8,["options","series"])],512),[[D,n.value]]),e("h2",ye,[h(" $39,358 "),e("span",$e,[t(a,{type:"arrow-up-left",size:"18"}),h("+9 this week")])])]),_:1})]),_:1})}}}),Ce=p(Me,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/modern/monthly-earnings/MonthlyEarnings.vue"]]),P={series:[{name:"Customers",data:[1,19,3,13,2,19]}],chartOptions:{chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",type:"line",height:55,sparkline:{enabled:!0}},colors:["rgb(255,255,255)"],marker:{size:0},tooltip:{theme:"dark"},grid:{show:!1},stroke:{show:!0,width:2,curve:"smooth"}}},je=e("h2",{class:"title text-h6 font-weight-medium text-white"},"Customers",-1),ke={class:"mt-4"},De={class:"title text-h5 text-white mt-6 font-weight-medium d-flex align-end"},Te={class:"text-subtitle-1 ml-2 d-flex align-center font-weight-medium"},Ee=x({__name:"Customers",setup(_){const n=d(!1);return j(()=>{setTimeout(()=>n.value=!0,10)}),(r,c)=>{const i=s("apexchart"),a=s("vue-feather"),l=s("v-card-text"),f=s("v-card");return m(),v(f,{class:"position-relative bg-primary"},{default:o(()=>[t(l,null,{default:o(()=>[je,k(e("div",ke,[t(i,{type:"line",height:"55px",options:g(P).chartOptions,series:g(P).series},null,8,["options","series"])],512),[[D,n.value]]),e("h2",De,[h(" $39,358 "),e("span",Te,[t(a,{type:"arrow-up-left",size:"18"}),h("+9 this week")])])]),_:1})]),_:1})}}}),Pe=p(Ee,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/modern/customers/Customers.vue"]]),Se={class:"d-sm-flex align-center"},Be=e("div",null,[e("h2",{class:"title text-h6 font-weight-medium"},"Product Performance")],-1),Ve={class:"ml-auto"},ze=e("thead",null,[e("tr",null,[e("th",{class:"font-weight-medium text-subtitle-1"},"Assigned"),e("th",{class:"font-weight-medium text-subtitle-1"},"Name"),e("th",{class:"font-weight-medium text-subtitle-1"},"Priority"),e("th",{class:"font-weight-medium text-subtitle-1"},"Budget")])],-1),Ae={class:"d-flex align-center"},He=["src","alt"],Oe={class:"mx-3"},Je={class:"font-weight-bold text-subtitle-1 text-no-wrap"},Re={class:"font-weight-medium text-no-wrap text-body-2 text-grey-darken-1"},Fe=x({__name:"ProductPerformance",setup(_){const n=d("March"),r=d(["March","April","May","June"]),c=d([{img:"/1.jpg",activestate:"",leadname:"Sunil Joshi",leademail:"Web Designer",projectname:"Elite Admin",statuscolor:"blue lighten-1 white--text",statustext:"Low",money:"$3.9K"},{img:"/2.jpg",activestate:"",leadname:"Andrew",leademail:"Project Manager",projectname:"Real Homes",statuscolor:"info",statustext:"Medium",money:"$23.9K"},{img:"/3.jpg",activestate:"",leadname:"Bhavesh patel",leademail:"Developer",projectname:"MedicalPro Theme",statuscolor:"warning",statustext:"High",money:"$12.9K"},{img:"/4.jpg",activestate:"",leadname:"Nirav Joshi",leademail:"Frontend Eng",projectname:"Elite Admin",statuscolor:"error",statustext:"Low",money:"$10.9K"},{img:"/5.jpg",activestate:"",leadname:"Micheal Doe",leademail:"Content Writer",projectname:"Helping Hands",statuscolor:"success",statustext:"Low",money:"$12.9K"}]);return(i,a)=>{const l=s("v-spacer"),f=s("v-select"),w=s("v-avatar"),y=s("v-chip"),$=s("v-table"),M=s("v-card-text"),V=s("v-card");return m(),v(V,{flat:"",class:"w-100"},{default:o(()=>[t(M,null,{default:o(()=>[e("div",Se,[Be,t(l),e("div",Ve,[t(f,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u),items:r.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),t($,{class:"month-table mt-5"},{default:o(()=>[ze,e("tbody",null,[(m(!0),C(S,null,H(c.value,u=>(m(),C("tr",{key:u.leadname,class:O([u.activestate,"month-item"])},[e("td",null,[e("div",Ae,[t(w,{size:"40"},{default:o(()=>[e("img",{src:`/assets/images/users/${u.img}`,alt:u.img,width:"40"},null,8,He)]),_:2},1024),e("div",Oe,[e("h4",Je,b(u.leadname),1)])])]),e("td",null,[e("h5",Re,b(u.projectname),1)]),e("td",null,[t(y,{class:"ma-2",color:u.statuscolor,size:"small",label:""},{default:o(()=>[h(b(u.statustext),1)]),_:2},1032,["color"])]),e("td",null,[e("h4",null,b(u.money),1)])],2))),128))])]),_:1})]),_:1})]),_:1})}}}),Ke=p(Fe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/modern/product-performance/ProductPerformance.vue"]]),Le=x({__name:"Modern",setup(_){const n=d({title:"Modern"}),r=d([{text:"Dashboard",disabled:!1,to:"#"},{text:"Modern",disabled:!0}]);return(c,i)=>{const a=s("v-col"),l=s("v-row");return m(),C(S,null,[t(J,{title:n.value.title,breadcrumbs:r.value},null,8,["title","breadcrumbs"]),t(l,null,{default:o(()=>[t(a,{cols:"12",sm:"12",lg:"5"},{default:o(()=>[t(Z)]),_:1}),t(a,{cols:"12",sm:"12",lg:"7"},{default:o(()=>[t(l,null,{default:o(()=>[t(a,{lg:"5"},{default:o(()=>[t(le)]),_:1}),t(a,{lg:"7"},{default:o(()=>[t(me)]),_:1})]),_:1})]),_:1}),t(a,{cols:"12",sm:"12",lg:"8"},{default:o(()=>[t(xe)]),_:1}),t(a,{cols:"12",sm:"12",lg:"4"},{default:o(()=>[t(Ce),t(Pe)]),_:1}),t(a,{cols:"12",sm:"12",lg:"4"},{default:o(()=>[t(F)]),_:1}),t(a,{cols:"12",sm:"12",lg:"8"},{default:o(()=>[t(Ke)]),_:1}),t(a,{cols:"12",sm:"12",lg:"5"},{default:o(()=>[t(K)]),_:1}),t(a,{cols:"12",sm:"12",lg:"7",class:"d-flex align-stretch"},{default:o(()=>[t(L)]),_:1}),t(a,{cols:"12",lg:"4"},{default:o(()=>[t(U)]),_:1}),t(a,{cols:"12",lg:"4"},{default:o(()=>[t(I)]),_:1}),t(a,{cols:"12",lg:"4"},{default:o(()=>[t(N)]),_:1})]),_:1})],64)}}}),Ge=p(Le,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/modern/Modern.vue"]]);export{Ge as default};
