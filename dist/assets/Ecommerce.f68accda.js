import{_ as A}from"./BaseBreadcrumb.78426dbe.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import{s as h,o,c as d,w as s,a as t,p as O,ab as g,f as e,g as u,h as v,d as p,m as x,r as f,e as C,n as _,F as $,v as V,b as r,D as k,y as c,ae as R,M,af as P,u as y,ag as D,T as j,ai as L,Q as F,aq as S,N as Y,B as I,t as J,A as N,C as W}from"./index.ab944f89.js";import{a as G,_ as q}from"./WeeklyStats.46510d1b.js";import{_ as Q}from"./MedicalProBranding.ecfe2865.js";const H={},K={class:"d-flex justify-space-between"},U=e("div",null,[e("h4",{class:"text-body-1 text-grey-darken-1 font-weight-medium"}," Earnings "),e("h3",{class:"text-h5 title font-weight-medium"},"$63,438.39")],-1);function X(m,l){const i=h("vue-feather");return o(),d(p,{class:"overflow-hidden"},{default:s(()=>[t(O,{src:"@/assets/images/background/welcome-bg-2x-svg.svg",class:"bg-img-2"}),t(g,null,{default:s(()=>[e("div",K,[U,t(u,{color:"primary",class:"btn-custom-sm",icon:""},{default:s(()=>[t(i,{type:"dollar-sign"})]),_:1})]),t(u,{color:"secondary",class:"mt-8"},{default:s(()=>[v(" Download ")]),_:1})]),_:1})]),_:1})}var Z=E(H,[["render",X]]);const ee={class:"pa-9"},te={class:"mt-3"},se={class:"font-weight-medium title text-h5 d-flex align-center mt-6"},ae={class:"d-block text-truncate font-weight-regular text-grey-darken-1"},oe=x({__name:"TopCards",setup(m){const l=f([{color:"secondary",bgcolor:"blue",icon:"users",title:"39,354",desc:"Customers",price:"-$9",status:"text-error"},{color:"warning",bgcolor:"yellow",icon:"box",title:"4,396",desc:"Products",price:"+$23",status:"text-success"},{color:"error",bgcolor:"red",icon:"bar-chart",title:"423,39",desc:"Sales",price:"+$38",status:"text-error"},{color:"success",bgcolor:"green",icon:"refresh-cw",title:"835 ",desc:"Refunds",price:"-$12",status:"text-error"}]);return(i,b)=>{const n=h("vue-feather");return o(),d(p,{class:"overflow-hidden"},{default:s(()=>[t(C,null,{default:s(()=>[(o(!0),_($,null,V(l.value,(a,w)=>(o(),d(r,{lg:"3",cols:"6",class:"pa-0 border-right",key:w},{default:s(()=>[e("div",ee,[e("div",te,[t(u,{color:"inherit",icon:"",class:k("pa-0 mr-3 text-"+a.color+" bg-"+a.bgcolor+"-lighten-5")},{default:s(()=>[t(n,{type:a.icon,size:"24"},null,8,["type"])]),_:2},1032,["class"])]),e("div",null,[e("h4",se,[v(c(a.title)+" ",1),e("span",{class:k(a.status+" text-caption ml-1")},c(a.price),3)]),e("span",ae,c(a.desc),1)])])]),_:2},1024))),128))]),_:1})]),_:1})}}}),T={series:[{name:"Products Performance",data:[35,60,30,55,40]}],chartOptions:{grid:{show:!1},colors:["#03c9d7"],chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",type:"line",height:30,sparkline:{enabled:!0}},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},z={series:[{name:"Expence",data:[300,300,180,320,250,300,300]},{name:"Budget",data:[60,90,80,60,70,100,80]}],chartOptions:{grid:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"35%",borderRadius:9}},colors:["#03c9d7","#fb9778"],fill:{type:"solid",opacity:1},chart:{type:"bar",height:285,stacked:!0,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"DM sans",sparkline:{enabled:!1}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","July"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!0,min:100,max:400,tickAmount:3},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},le={class:"d-sm-flex align-center mb-5"},re=e("h2",{class:"title text-h6 font-weight-medium"},"Products Performance",-1),ne=e("div",null,[e("div",{class:"d-flex align-center"},[e("div",{class:"d-flex align-center px-2"},[e("span",{class:"text-primary"},[e("span",{class:"overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Budget")])]),e("div",{class:"d-flex align-center px-2"},[e("span",{class:"text-secondary"},[e("span",{class:"overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Expence")])])])],-1),ce=e("h3",{class:"text-h5 title font-weight-medium mt-3"},"$93,438.78",-1),ie=e("span",{class:"text-grey-darken-1 text-subtitle-2"},"Budget",-1),de=e("h3",{class:"text-h5 title font-weight-medium mt-6"},"$32,839",-1),ue=e("span",{class:"text-grey-darken-1 text-subtitle-2"},"Expense",-1),_e={class:"my-3"},he=x({__name:"ProductsChart",setup(m){const l=f(!1);return R(()=>{setTimeout(()=>l.value=!0,10)}),(i,b)=>{const n=h("apexchart");return o(),d(p,null,{default:s(()=>[t(g,null,{default:s(()=>[e("div",le,[re,t(M),ne]),t(C,null,{default:s(()=>[t(r,{lg:"4",cols:"12"},{default:s(()=>[ce,ie,de,ue,P(e("div",_e,[t(n,{type:"line",height:"30px",options:y(T).chartOptions,series:y(T).series},null,8,["options","series"])],512),[[D,l.value]]),t(u,{color:"secondary",class:"mt-3"},{default:s(()=>[v("Download Report")]),_:1})]),_:1}),t(r,{lg:"8"},{default:s(()=>[P(e("div",null,[t(n,{type:"bar",height:"285px",options:y(z).chartOptions,series:y(z).series},null,8,["options","series"])],512),[[D,l.value]])]),_:1})]),_:1})]),_:1})]),_:1})}}}),me={},fe={class:"d-flex align-start"},pe=e("h2",{class:"font-weight-medium text-h6 title text-white mt-1"},"Earning",-1),ge={class:"ml-auto"},xe=e("div",{class:"mt-4"},[e("h2",{class:"text-white text-h5"},"$93,438.78"),e("span",{class:"text-white text-medium-emphasis text-subtitle-1"},"Monthly revenue")],-1);function be(m,l){const i=h("vue-feather");return o(),d(p,{class:"bg-primary mb-6"},{default:s(()=>[t(g,null,{default:s(()=>[e("div",fe,[pe,t(M),e("div",ge,[t(u,{color:"secondary",icon:""},{default:s(()=>[t(i,{type:"dollar-sign"})]),_:1})])]),xe]),_:1})]),_:1})}var ye=E(me,[["render",be]]);const B={series:[25,25,25,25],chartOptions:{plotOptions:{pie:{donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"18px",color:void 0,offsetY:-10},value:{show:!1,color:"#98aab4"},total:{show:!1,label:"Our Visitors",color:"#98aab4"}}}}},labels:["2021","2020","2019","2018"],colors:["#03c9d7","#1e4db7","#fec90f","#ecf0f2"],chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",type:"donut",height:145},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{colors:["transparent"]},tooltip:{theme:"dark",fillSeriesColor:!1}}};const ve=e("h3",{class:"text-h5 font-weight-medium title"},"43,246",-1),we=e("span",{class:"text-grey-darken-1 text-subtitle-1 font-weight-regular"},"Yearly Sales",-1),$e=e("div",{class:"d-flex align-center justify-space-between mt-3"},[e("span",{class:"text-grey-darken-1 d-flex align-center"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-primary mx-1"})]),e("span",{class:"font-weight-regular"},"2021")]),e("span",{class:"text-grey-darken-1 d-flex align-center"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-secondary mx-1"})]),e("span",{class:"font-weight-regular"},"2020")])],-1),ke=e("div",{class:"d-flex align-center justify-space-between"},[e("span",{class:"text-grey-darken-1 d-flex align-center"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-warning mx-1"})]),e("span",{class:"font-weight-regular"},"2019")]),e("span",{class:"text-grey-darken-1 d-flex align-center"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-grey-darken-1 mx-1"})]),e("span",{class:"font-weight-regular"},"2018")])],-1),Ce={class:"position-relative"},Ve=x({__name:"YearlySales",setup(m){const l=f(!1);return R(()=>{setTimeout(()=>l.value=!0,10)}),(i,b)=>{const n=h("apexchart"),a=h("vue-feather");return o(),d(p,null,{default:s(()=>[t(g,null,{default:s(()=>[t(C,null,{default:s(()=>[t(r,{sm:"6"},{default:s(()=>[ve,we,$e,ke]),_:1}),t(r,{sm:"6"},{default:s(()=>[P(e("div",Ce,[t(n,{type:"donut",height:"145px",options:y(B).chartOptions,series:y(B).series},null,8,["options","series"]),t(a,{size:"20",type:"shopping-cart",class:"text-grey-darken-1 center-icon"})],512),[[D,l.value]])]),_:1})]),_:1})]),_:1})]),_:1})}}}),Pe=e("h2",{class:"title text-h6 font-weight-medium mb-5"},"Recent Transactions",-1),De={class:"d-flex align-center py-3"},Me={class:""},Se={class:"ml-2"},Te={class:"font-weight-medium text-subtitle-1 title"},ze={class:"text-grey-darken-1 text-subtitle-2 d-block text-truncate font-weight-regular mt-n1"},Be={class:"ml-auto"},Ee={class:"d-flex justify-space-between align-center"},Re=e("p",{class:"text-body-2 ma-0 text-grey-darken-1"}," 36 Recent Transactions ",-1),Ae=x({__name:"RecentTransactions",setup(m){const l=f([{color:"info",bgcolor:"blue",icon:"dollar-sign",title:"PayPal Transfer",desc:"Money Added",price:"+$350",status:"text-success"},{color:"success",bgcolor:"green",icon:"shield",title:"Wallet",desc:"Bill Payment",price:"-$560",status:"text-error"},{color:"error",bgcolor:"red",icon:"credit-card",title:"Credit Card",desc:"Money reversed",price:"+$350",status:"text-success"},{color:"warning",bgcolor:"yellow",icon:"check",title:"Bank Transfer",desc:"Money added",price:"+$350",status:"text-success"},{color:"info",bgcolor:"blue",icon:"dollar-sign",title:"Refund",desc:"Payment Sent",price:"-$50",status:"text-error"}]);return(i,b)=>{const n=h("vue-feather");return o(),d(p,{class:"w-100"},{default:s(()=>[t(g,null,{default:s(()=>[Pe,(o(!0),_($,null,V(l.value,(a,w)=>(o(),_("div",{class:"px-0",key:w},[e("div",De,[e("div",Me,[t(u,{color:"inherit",height:"45",width:"45","min-width":"45",class:k("pa-0 mr-3 text-"+a.color+" bg-"+a.bgcolor+"-lighten-5")},{default:s(()=>[t(n,{type:a.icon,size:"18"},null,8,["type"])]),_:2},1032,["class"])]),e("div",Se,[e("h4",Te,c(a.title),1),e("span",ze,c(a.desc),1)]),e("div",Be,[e("span",{class:k(a.status)},c(a.price),3)])])]))),128)),t(j,{class:"my-4"}),e("div",Ee,[t(u,{color:"secondary"},{default:s(()=>[v("Add")]),_:1}),Re])]),_:1})]),_:1})}}}),Oe=e("h2",{class:"title text-h6 font-weight-medium"},"Products Performance",-1),je={class:"d-flex align-center"},Le=["src","alt"],Fe={class:"ml-3"},Ye={class:"font-weight-medium text-subtitle-1"},Ie={class:"font-weight-regular text-body-2 text-grey-darken-1"},Je={key:0},Ne=e("h6",{class:"font-weight-medium text-body-2 mb-1"},"Good",-1),We={class:"font-weight-regular text-body-2 text-grey-darken-1 text-no-wrap"},Ge={key:1},qe=e("h6",{class:"font-weight-medium text-body-2 mb-1"},"Bad",-1),Qe={class:"font-weight-regular text-body-2 text-grey-darken-1"},He=e("span",{class:"font-weight-regular text-body-2 text-grey-darken-1"},"Earnings",-1),Ke={class:"font-weight-medium text-body-1 mb-1"},Ue={class:"pl-0"},Xe=x({__name:"ProductPerformance",setup(m){const l=f([{avatar:"1.jpg",name:"Is it good butterscotch ice-cream?",category:"Ice-Cream, Milk, Powder",earn:"546,000",percent:45},{avatar:"2.jpg",name:"Supreme fresh tomato available",category:"Market, Mall",earn:"780,000",percent:20},{avatar:"3.jpg",name:"Red color candy from Gucci",category:"Chocolate, Yummy",earn:"457,000",percent:60},{avatar:"4.jpg",name:"Stylish night lamp for night",category:"Elecric, Wire, Current",earn:"125,000",percent:40}]);return(i,b)=>{const n=h("vue-feather");return o(),d(p,null,{default:s(()=>[t(g,null,{default:s(()=>[Oe,t(L,{class:"month-table custom-px-0 mt-4"},{default:s(()=>[e("tbody",null,[(o(!0),_($,null,V(l.value,a=>(o(),_("tr",{class:"month-item",key:a.name},[e("td",null,[e("div",je,[t(F,{class:"rounded-lg overflow-hidden",size:"70"},{default:s(()=>[e("img",{src:`/assets/images/products/${a.avatar}`,alt:a.avatar,width:"90",height:"70",class:"rounded-lg"},null,8,Le)]),_:2},1024),e("div",Fe,[e("h6",Ye,c(a.name),1),e("span",Ie,c(a.category),1)])])]),e("td",null,[a.percent>=40?(o(),_("div",Je,[Ne,t(S,{color:"secondary","background-color":"grey lighten-3","model-value":a.percent,rounded:"",class:"mb-1"},null,8,["model-value"]),e("span",We,c(a.percent)+"% sold ",1)])):(o(),_("div",Ge,[qe,t(S,{color:"primary","background-color":"primary lighten-3","model-value":a.percent,rounded:"",class:"mb-1"},null,8,["model-value"]),e("span",Qe,c(a.percent)+"% sold ",1)]))]),e("td",null,[He,e("h6",Ke," $"+c(a.earn),1)]),e("td",Ue,[t(u,{icon:"",color:"transparent"},{default:s(()=>[t(n,{type:"trash",size:"20"})]),_:1})])]))),128))])]),_:1})]),_:1})]),_:1})}}}),Ze={class:"d-flex align-center mb-5"},et=e("h2",{class:"title text-h6 font-weight-medium"},"Daily Activities",-1),tt={class:"ml-auto"},st=e("img",{src:G,alt:"image",style:{width:"100%"}},null,-1),at=e("h4",{class:"title font-weight-medium text-h6 mt-6"}," React 18 coming soon! ",-1),ot=e("h5",{class:"text-subtitle-2 text-grey-darken-1"},"By Johnathan Doe",-1),lt=e("p",{class:"text-grey-darken-1 mt-4 mb-4"}," This will be the small description for the news you have shown here. There could be some great info. ",-1),rt=x({__name:"DailyActivites",setup(m){const l=f([{title:"Action"},{title:"Another Action"},{title:"Something else here"}]);return(i,b)=>{const n=h("vue-feather");return o(),d(p,null,{default:s(()=>[t(g,null,{default:s(()=>[e("div",Ze,[et,t(M),e("div",tt,[t(Y,{anchor:"left",transition:"slide-y-transition"},{activator:s(({props:a})=>[t(u,I({icon:"",color:"inherit"},a),{default:s(()=>[t(n,{type:"more-horizontal",size:"20"})]),_:2},1040)]),default:s(()=>[t(J,null,{default:s(()=>[(o(!0),_($,null,V(l.value,(a,w)=>(o(),d(N,{key:w},{default:s(()=>[t(W,null,{default:s(()=>[v(c(a.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),st,at,ot,lt,t(u,{color:"secondary"},{default:s(()=>[v("Read More")]),_:1})]),_:1})]),_:1})}}}),_t=x({__name:"Ecommerce",setup(m){const l=f({title:"Ecommerce"}),i=f([{text:"Dashboard",disabled:!1,to:"#"},{text:"Ecommerce",disabled:!0}]);return(b,n)=>(o(),_($,null,[t(A,{title:l.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),t(C,null,{default:s(()=>[t(r,{cols:"12",lg:"4"},{default:s(()=>[t(Z)]),_:1}),t(r,{cols:"12",lg:"8"},{default:s(()=>[t(oe)]),_:1}),t(r,{cols:"12",lg:"8"},{default:s(()=>[t(he)]),_:1}),t(r,{cols:"12",lg:"4"},{default:s(()=>[t(ye),t(Ve)]),_:1}),t(r,{cols:"12",lg:"4",class:"d-flex align-items-stretch"},{default:s(()=>[t(Ae)]),_:1}),t(r,{cols:"12",lg:"8",class:"d-flex align-items-stretch"},{default:s(()=>[t(Xe)]),_:1}),t(r,{cols:"12",lg:"4"},{default:s(()=>[t(q)]),_:1}),t(r,{cols:"12",lg:"4"},{default:s(()=>[t(Q)]),_:1}),t(r,{cols:"12",lg:"4"},{default:s(()=>[t(rt)]),_:1})]),_:1})],64))}});export{_t as default};
