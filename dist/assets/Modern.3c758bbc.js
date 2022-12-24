import{_ as B}from"./BaseBreadcrumb.d4a89f41.js";import{_ as H,T as O,b as F,a as J,B as R}from"./DailyActivities.318de1ff.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import{s as m,o as c,c as _,w as s,a as t,ab as f,f as e,h as u,g as M,d as p,ac as K,ad as L,M as w,m as v,r as i,ae as C,ah as T,af as V,u as x,ag as k,ai as N,n as y,F as z,v as I,D as U,Q as W,y as b,P as Q,b as n,e as S}from"./index.5cf8c26c.js";import{_ as q}from"./WeeklyStats.5200e782.js";import{_ as G}from"./MedicalProBranding.81af85bd.js";const X={},P=r=>(K("data-v-6275cd2a"),r=r(),L(),r),Y=P(()=>e("img",{src:H,class:"bg-img-1"},null,-1)),Z=P(()=>e("h2",{class:"title text-h6 overlay-title font-weight-medium"},"Congratulation Julia",-1)),ee={class:"title text-h5 mt-4 font-weight-bold d-flex align-end"},te={class:"text-subtitle-1 ml-2 d-flex align-center font-weight-medium"};function se(r,a){const l=m("vue-feather");return c(),_(p,{class:"position-relative overflow-hidden"},{default:s(()=>[Y,t(f,null,{default:s(()=>[Z,e("h2",ee,[u(" $39,358 "),e("span",te,[t(l,{type:"arrow-up-left",size:"18"}),u("+9%")])]),t(M,{color:"primary",class:"mt-8"},{default:s(()=>[u(" Download ")]),_:1})]),_:1})]),_:1})}var ae=$(X,[["render",se],["__scopeId","data-v-6275cd2a"]]);const le={},oe={class:"d-flex align-start"},ne=e("h2",{class:"title text-h6 font-weight-medium mt-1"},"Purchases",-1),ie={class:"ml-auto"},re=e("div",{class:"mt-9"},[e("h2",{class:"title font-weight-bold text-h5"},"2,367"),e("span",{class:"text-subtitle-1 font-weight-medium text-medium-emphasis"},"Monthly Sales")],-1);function ce(r,a){const l=m("vue-feather");return c(),_(p,null,{default:s(()=>[t(f,null,{default:s(()=>[e("div",oe,[ne,t(w),e("div",ie,[t(M,{color:"secondary",icon:""},{default:s(()=>[t(l,{type:"shopping-bag"})]),_:1})])]),re]),_:1})]),_:1})}var de=$(le,[["render",ce]]);const ue={},me={class:"d-flex align-start"},he=e("h2",{class:"title text-h6 font-weight-medium mt-1"},"Total Earnings",-1),_e={class:"ml-auto"},fe=e("div",{class:"mt-9"},[e("h2",{class:"title font-weight-bold text-h5"},"$93,438.78"),e("span",{class:"text-subtitle-1 font-weight-medium text-medium-emphasis"},"Monthly Revenue")],-1);function pe(r,a){const l=m("vue-feather");return c(),_(p,null,{default:s(()=>[t(f,null,{default:s(()=>[e("div",me,[he,t(w),e("div",_e,[t(M,{color:"primary",icon:""},{default:s(()=>[t(l,{type:"dollar-sign"})]),_:1})])]),fe]),_:1})]),_:1})}var ge=$(ue,[["render",pe]]);const j={series:[{name:"Earnings",data:[0,5,6,8,25,9,11,24]},{name:"Expense",data:[0,3,1,2,8,1,5,1]}],chartOptions:{colors:["#fb9678","#03c9d7"],fill:{type:"solid",opacity:1},chart:{toolbar:{show:!1},type:"line",foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",height:300},dataLabels:{enabled:!1},markers:{size:4,border:1},legend:{show:!1},xaxis:{categories:["16/08","17/08","18/08","19/08","20/08","21/08","22/08","23/08"]},grid:{show:!0,borderColor:"rgba(0, 0, 0, .2)",color:"#777e89",strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},stroke:{curve:"smooth",width:3},tooltip:{x:{format:"dd/MM/yy HH:mm"},theme:"dark"}}},xe={class:"d-sm-flex align-start"},ve=e("div",null,[e("h2",{class:"title text-h6 font-weight-medium"},"Revenue Updates")],-1),be={class:"ml-auto"},we=e("div",{class:"d-flex justify-center"},[e("div",{class:"d-flex align-center text-primary px-2"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Earnings")]),e("div",{class:"d-flex align-center px-2 text-secondary"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Expense")])],-1),ye=v({__name:"RevenueUpdates",setup(r){const a=i("March"),l=i(["March","April","May","June"]),h=i(!1);return C(()=>{setTimeout(()=>h.value=!0,10)}),(g,d)=>{const o=m("apexchart");return c(),_(p,null,{default:s(()=>[t(f,null,{default:s(()=>[e("div",xe,[ve,t(w),e("div",be,[t(T,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=A=>a.value=A),items:l.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),V(e("div",null,[t(o,{type:"line",height:"300px",options:x(j).chartOptions,series:x(j).series},null,8,["options","series"])],512),[[k,h.value]]),we]),_:1})]),_:1})}}}),E={series:[{name:"Monthly Earnings",data:[6,10,9,11,9,10,12,10,9,11,9,10,12]}],chartOptions:{chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",type:"bar",height:45,sparkline:{enabled:!0}},colors:["rgba(255,255,255,0.5)"],marker:{size:0},tooltip:{theme:"dark"},grid:{show:!1},stroke:{show:!0,width:2,curve:"smooth",colors:["transparent"]},plotOptions:{bar:{horizontal:!1,startingShape:"flat",endingShape:"flat",columnWidth:"30%",barHeight:"100%"}}}},$e=e("h3",{class:"title text-h6 font-weight-medium text-white"},"Monthly Earnings",-1),Me={class:"mt-4"},Ce={class:"title text-h5 text-white mt-6 font-weight-medium d-flex align-items-end"},Ve={class:"text-subtitle-1 ml-2 d-flex align-center font-weight-medium"},ke=v({__name:"MonthlyEarnings",setup(r){i("March"),i(["March","April","May","June"]);const a=i(!1);return C(()=>{setTimeout(()=>a.value=!0,10)}),(l,h)=>{const g=m("apexchart"),d=m("vue-feather");return c(),_(p,{class:"mb-7 bg-secondary"},{default:s(()=>[t(f,null,{default:s(()=>[$e,V(e("div",Me,[t(g,{type:"bar",height:"45px",options:x(E).chartOptions,series:x(E).series},null,8,["options","series"])],512),[[k,a.value]]),e("h2",Ce,[u(" $39,358 "),e("span",Ve,[t(d,{type:"arrow-up-left",size:"18"}),u("+9 this week")])])]),_:1})]),_:1})}}}),D={series:[{name:"Customers",data:[1,19,3,13,2,19]}],chartOptions:{chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",type:"line",height:55,sparkline:{enabled:!0}},colors:["rgb(255,255,255)"],marker:{size:0},tooltip:{theme:"dark"},grid:{show:!1},stroke:{show:!0,width:2,curve:"smooth"}}},Se=e("h2",{class:"title text-h6 font-weight-medium text-white"},"Customers",-1),je={class:"mt-4"},Ee={class:"title text-h5 text-white mt-6 font-weight-medium d-flex align-end"},De={class:"text-subtitle-1 ml-2 d-flex align-center font-weight-medium"},Te=v({__name:"Customers",setup(r){const a=i(!1);return C(()=>{setTimeout(()=>a.value=!0,10)}),(l,h)=>{const g=m("apexchart"),d=m("vue-feather");return c(),_(p,{class:"position-relative bg-primary"},{default:s(()=>[t(f,null,{default:s(()=>[Se,V(e("div",je,[t(g,{type:"line",height:"55px",options:x(D).chartOptions,series:x(D).series},null,8,["options","series"])],512),[[k,a.value]]),e("h2",Ee,[u(" $39,358 "),e("span",De,[t(d,{type:"arrow-up-left",size:"18"}),u("+9 this week")])])]),_:1})]),_:1})}}}),ze={class:"d-sm-flex align-center"},Pe=e("div",null,[e("h2",{class:"title text-h6 font-weight-medium"},"Product Performance")],-1),Ae={class:"ml-auto"},Be=e("thead",null,[e("tr",null,[e("th",{class:"font-weight-medium text-subtitle-1"},"Assigned"),e("th",{class:"font-weight-medium text-subtitle-1"},"Name"),e("th",{class:"font-weight-medium text-subtitle-1"},"Priority"),e("th",{class:"font-weight-medium text-subtitle-1"},"Budget")])],-1),He={class:"d-flex align-center"},Oe=["src","alt"],Fe={class:"mx-3"},Je={class:"font-weight-bold text-subtitle-1 text-no-wrap"},Re={class:"font-weight-medium text-no-wrap text-body-2 text-grey-darken-1"},Ke=v({__name:"ProductPerformance",setup(r){const a=i("March"),l=i(["March","April","May","June"]),h=i([{img:"/1.jpg",activestate:"",leadname:"Sunil Joshi",leademail:"Web Designer",projectname:"Elite Admin",statuscolor:"blue lighten-1 white--text",statustext:"Low",money:"$3.9K"},{img:"/2.jpg",activestate:"",leadname:"Andrew",leademail:"Project Manager",projectname:"Real Homes",statuscolor:"info",statustext:"Medium",money:"$23.9K"},{img:"/3.jpg",activestate:"",leadname:"Bhavesh patel",leademail:"Developer",projectname:"MedicalPro Theme",statuscolor:"warning",statustext:"High",money:"$12.9K"},{img:"/4.jpg",activestate:"",leadname:"Nirav Joshi",leademail:"Frontend Eng",projectname:"Elite Admin",statuscolor:"error",statustext:"Low",money:"$10.9K"},{img:"/5.jpg",activestate:"",leadname:"Micheal Doe",leademail:"Content Writer",projectname:"Helping Hands",statuscolor:"success",statustext:"Low",money:"$12.9K"}]);return(g,d)=>(c(),_(p,{flat:"",class:"w-100"},{default:s(()=>[t(f,null,{default:s(()=>[e("div",ze,[Pe,t(w),e("div",Ae,[t(T,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=o=>a.value=o),items:l.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),t(N,{class:"month-table mt-5"},{default:s(()=>[Be,e("tbody",null,[(c(!0),y(z,null,I(h.value,o=>(c(),y("tr",{key:o.leadname,class:U([o.activestate,"month-item"])},[e("td",null,[e("div",He,[t(W,{size:"40"},{default:s(()=>[e("img",{src:`/assets/images/users/${o.img}`,alt:o.img,width:"40"},null,8,Oe)]),_:2},1024),e("div",Fe,[e("h4",Je,b(o.leadname),1)])])]),e("td",null,[e("h5",Re,b(o.projectname),1)]),e("td",null,[t(Q,{class:"ma-2",color:o.statuscolor,size:"small",label:""},{default:s(()=>[u(b(o.statustext),1)]),_:2},1032,["color"])]),e("td",null,[e("h4",null,b(o.money),1)])],2))),128))])]),_:1})]),_:1})]),_:1}))}}),qe=v({__name:"Modern",setup(r){const a=i({title:"Modern"}),l=i([{text:"Dashboard",disabled:!1,to:"#"},{text:"Modern",disabled:!0}]);return(h,g)=>(c(),y(z,null,[t(B,{title:a.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),t(S,null,{default:s(()=>[t(n,{cols:"12",sm:"12",lg:"5"},{default:s(()=>[t(ae)]),_:1}),t(n,{cols:"12",sm:"12",lg:"7"},{default:s(()=>[t(S,null,{default:s(()=>[t(n,{lg:"5"},{default:s(()=>[t(de)]),_:1}),t(n,{lg:"7"},{default:s(()=>[t(ge)]),_:1})]),_:1})]),_:1}),t(n,{cols:"12",sm:"12",lg:"8"},{default:s(()=>[t(ye)]),_:1}),t(n,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[t(ke),t(Te)]),_:1}),t(n,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[t(O)]),_:1}),t(n,{cols:"12",sm:"12",lg:"8"},{default:s(()=>[t(Ke)]),_:1}),t(n,{cols:"12",sm:"12",lg:"5"},{default:s(()=>[t(F)]),_:1}),t(n,{cols:"12",sm:"12",lg:"7",class:"d-flex align-stretch"},{default:s(()=>[t(J)]),_:1}),t(n,{cols:"12",lg:"4"},{default:s(()=>[t(R)]),_:1}),t(n,{cols:"12",lg:"4"},{default:s(()=>[t(q)]),_:1}),t(n,{cols:"12",lg:"4"},{default:s(()=>[t(G)]),_:1})]),_:1})],64))}});export{qe as default};
