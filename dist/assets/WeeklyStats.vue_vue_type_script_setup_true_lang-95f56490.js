import{f as B,h as d,r as t,o as l,c as p,w as s,a as e,b as o,m as D,g as i,j as m,F as h,u,d as v,t as n}from"./index-8008d952.js";const H="/assets/blog-bg-2x-7983955c.jpg",I="/assets/1-32ddcd87.jpg",K="/assets/2-1c16a104.jpg",Q="/assets/3-0594bd0b.jpg",f={series:[{name:"Weekly Stats",data:[40,60,50,65]}],chartOptions:{colors:["#03c9d7"],fill:{colors:"#03c9d7",opacity:.05,type:"solid"},chart:{type:"area",height:135,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",sparkline:{enabled:!0}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},W={class:"d-flex align-center"},A=o("h2",{class:"title text-h6 font-weight-medium"},"Weekly Stats",-1),F={class:"ml-auto"},N={class:"d-flex align-center py-4"},V={class:""},L={class:"ml-2"},O={class:"font-weight-bold text-subtitle-1 title"},P={class:"text-grey-darken-1 text-subtitle-2 d-block text-truncate font-weight-regular"},T={class:"ml-auto"},q={class:"position-relative"},R=B({__name:"WeeklyStats",setup(E){const g=d([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]),b=d([{color:"primary",icon:"shopping-cart",title:"Top Sales",desc:"Johnathan Doe",percent:68},{color:"warning",icon:"star",title:"Best Seller",desc:"MaterialPro Admin",percent:45},{color:"success",icon:"message-square",title:"Most Commented",desc:"Ample Admin",percent:10}]);return(J,$)=>{const k=t("v-spacer"),r=t("vue-feather"),_=t("v-btn"),x=t("v-list-item-title"),y=t("v-list-item"),w=t("v-list"),C=t("v-menu"),S=t("v-chip"),M=t("v-card-text"),z=t("apexchart"),j=t("v-card");return l(),p(j,{class:"overflow-hidden"},{default:s(()=>[e(M,null,{default:s(()=>[o("div",W,[A,e(k),o("div",F,[e(C,{bottom:"",left:""},{activator:s(({props:a})=>[e(_,D({icon:"",color:"inherit"},a),{default:s(()=>[e(r,{type:"more-horizontal",size:"20"})]),_:2},1040)]),default:s(()=>[e(w,null,{default:s(()=>[(l(!0),i(h,null,m(g.value,(a,c)=>(l(),p(y,{key:c},{default:s(()=>[e(x,null,{default:s(()=>[v(n(a.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),(l(!0),i(h,null,m(b.value,(a,c)=>(l(),i("div",{class:"px-0",key:c},[o("div",N,[o("div",V,[e(_,{color:a.color,icon:"",size:"small",elevation:"0",class:"mr-3"},{default:s(()=>[e(r,{type:a.icon,size:"18"},null,8,["type"])]),_:2},1032,["color"])]),o("div",L,[o("h4",O,n(a.title),1),o("span",P,n(a.desc),1)]),o("div",T,[e(S,{label:"",size:"small",class:"font-weight-bold",color:"inherit"},{default:s(()=>[v(" +"+n(a.percent)+"% ",1)]),_:2},1024)])])]))),128))]),_:1}),o("div",q,[e(z,{type:"area",height:"135px",options:u(f).chartOptions,series:u(f).series},null,8,["options","series"])])]),_:1})}}});export{R as _,H as a,I as b,K as c,Q as d};
