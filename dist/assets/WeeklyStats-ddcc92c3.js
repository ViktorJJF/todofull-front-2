import{_ as z,e as B,g as d,r as t,o as l,c as p,w as s,a as e,b as o,m as D,f as i,F as m,k as h,d as u,t as n,j as N,u as v}from"./index-951959bb.js";const Q="/assets/blog-bg-2x-7983955c.jpg",R="/assets/1-32ddcd87.jpg",U="/assets/2-1c16a104.jpg",X="/assets/3-0594bd0b.jpg",f={series:[{name:"Weekly Stats",data:[40,60,50,65]}],chartOptions:{colors:["#03c9d7"],fill:{colors:"#03c9d7",opacity:.05,type:"solid"},chart:{type:"area",height:135,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",sparkline:{enabled:!0}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},V={class:"d-flex align-center"},A=o("h2",{class:"title text-h6 font-weight-medium"},"Weekly Stats",-1),F={class:"ml-auto"},T={class:"d-flex align-center py-4"},L={class:""},O={class:"ml-2"},P={class:"font-weight-bold text-subtitle-1 title"},$={class:"text-grey-darken-1 text-subtitle-2 d-block text-truncate font-weight-regular"},q={class:"ml-auto"},E={class:"position-relative"},J=B({__name:"WeeklyStats",setup(G){const b=d([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]),g=d([{color:"primary",icon:"shopping-cart",title:"Top Sales",desc:"Johnathan Doe",percent:68},{color:"warning",icon:"star",title:"Best Seller",desc:"MaterialPro Admin",percent:45},{color:"success",icon:"message-square",title:"Most Commented",desc:"Ample Admin",percent:10}]);return(H,I)=>{const k=t("v-spacer"),r=t("vue-feather"),_=t("v-btn"),y=t("v-list-item-title"),x=t("v-list-item"),w=t("v-list"),C=t("v-menu"),S=t("v-chip"),M=t("v-card-text"),W=t("apexchart"),j=t("v-card");return l(),p(j,{class:"overflow-hidden"},{default:s(()=>[e(M,null,{default:s(()=>[o("div",V,[A,e(k),o("div",F,[e(C,{bottom:"",left:""},{activator:s(({props:a})=>[e(_,D({icon:"",color:"inherit"},a),{default:s(()=>[e(r,{type:"more-horizontal",size:"20"})]),_:2},1040)]),default:s(()=>[e(w,null,{default:s(()=>[(l(!0),i(m,null,h(b.value,(a,c)=>(l(),p(x,{key:c},{default:s(()=>[e(y,null,{default:s(()=>[u(n(a.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),N(" lists "),(l(!0),i(m,null,h(g.value,(a,c)=>(l(),i("div",{class:"px-0",key:c},[o("div",T,[o("div",L,[e(_,{color:a.color,icon:"",size:"small",elevation:"0",class:"mr-3"},{default:s(()=>[e(r,{type:a.icon,size:"18"},null,8,["type"])]),_:2},1032,["color"])]),o("div",O,[o("h4",P,n(a.title),1),o("span",$,n(a.desc),1)]),o("div",q,[e(S,{label:"",size:"small",class:"font-weight-bold",color:"inherit"},{default:s(()=>[u(" +"+n(a.percent)+"% ",1)]),_:2},1024)])])]))),128))]),_:1}),o("div",E,[e(W,{type:"area",height:"135px",options:v(f).chartOptions,series:v(f).series},null,8,["options","series"])])]),_:1})}}}),Y=z(J,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/weekly-stats/WeeklyStats.vue"]]);export{Y as W,Q as _,R as a,U as b,X as c};
