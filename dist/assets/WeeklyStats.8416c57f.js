import{m as y,r as n,s as d,o,c as p,w as t,a as e,ab as x,f as s,M as C,N as w,g as _,B as V,t as M,n as i,F as h,v as u,A as S,C as B,h as m,y as l,P as z,u as f,d as L}from"./index.8416b2a4.js";var G="/assets/blog-bg-2x.7983955c.jpg",H="/assets/1.32ddcd87.jpg",K="/assets/2.1c16a104.jpg",Q="/assets/3.0594bd0b.jpg";const g={series:[{name:"Weekly Stats",data:[40,60,50,65]}],chartOptions:{colors:["#03c9d7"],fill:{colors:"#03c9d7",opacity:.05,type:"solid"},chart:{type:"area",height:135,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",sparkline:{enabled:!0}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},j={class:"d-flex align-center"},A=s("h2",{class:"title text-h6 font-weight-medium"},"Weekly Stats",-1),D={class:"ml-auto"},N={class:"d-flex align-center py-4"},T={class:""},W={class:"ml-2"},F={class:"font-weight-bold text-subtitle-1 title"},P={class:"text-grey-darken-1 text-subtitle-2 d-block text-truncate font-weight-regular"},I={class:"ml-auto"},O={class:"position-relative"},R=y({__name:"WeeklyStats",setup(q){const v=n([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]),b=n([{color:"primary",icon:"shopping-cart",title:"Top Sales",desc:"Johnathan Doe",percent:68},{color:"warning",icon:"star",title:"Best Seller",desc:"MaterialPro Admin",percent:45},{color:"success",icon:"message-square",title:"Most Commented",desc:"Ample Admin",percent:10}]);return(E,J)=>{const c=d("vue-feather"),k=d("apexchart");return o(),p(L,{class:"overflow-hidden"},{default:t(()=>[e(x,null,{default:t(()=>[s("div",j,[A,e(C),s("div",D,[e(w,{bottom:"",left:""},{activator:t(({props:a})=>[e(_,V({icon:"",color:"inherit"},a),{default:t(()=>[e(c,{type:"more-horizontal",size:"20"})]),_:2},1040)]),default:t(()=>[e(M,null,{default:t(()=>[(o(!0),i(h,null,u(v.value,(a,r)=>(o(),p(S,{key:r},{default:t(()=>[e(B,null,{default:t(()=>[m(l(a.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),(o(!0),i(h,null,u(b.value,(a,r)=>(o(),i("div",{class:"px-0",key:r},[s("div",N,[s("div",T,[e(_,{color:a.color,icon:"",size:"small",elevation:"0",class:"mr-3"},{default:t(()=>[e(c,{type:a.icon,size:"18"},null,8,["type"])]),_:2},1032,["color"])]),s("div",W,[s("h4",F,l(a.title),1),s("span",P,l(a.desc),1)]),s("div",I,[e(z,{label:"",size:"small",class:"font-weight-bold",color:"inherit"},{default:t(()=>[m(" +"+l(a.percent)+"% ",1)]),_:2},1024)])])]))),128))]),_:1}),s("div",O,[e(k,{type:"area",height:"135px",options:f(g).chartOptions,series:f(g).series},null,8,["options","series"])])]),_:1})}}});export{R as _,G as a,H as b,K as c,Q as d};
