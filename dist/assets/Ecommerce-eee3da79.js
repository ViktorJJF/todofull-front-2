import{_ as b,r as s,o as c,c as f,w as o,a as t,b as e,d as k,e as w,g as y,f as g,F as C,k as P,n as D,t as u,j as T,H as R,I as S,u as $,J as E,m as Y}from"./index-162e892b.js";import{B as V}from"./BaseBreadcrumb-5b14dc38.js";import{_ as F,W as J}from"./WeeklyStats-ef9dce68.js";import{M as W}from"./MedicalProBranding-f88ae3d9.js";const N={},I={class:"d-flex justify-space-between"},L=e("div",null,[e("h4",{class:"text-body-1 text-grey-darken-1 font-weight-medium"}," Earnings "),e("h3",{class:"text-h5 title font-weight-medium"},"$63,438.39")],-1);function G(x,r){const m=s("v-img"),p=s("vue-feather"),l=s("v-btn"),a=s("v-card-text"),i=s("v-card");return c(),f(i,{class:"overflow-hidden"},{default:o(()=>[t(m,{src:"@/assets/images/background/welcome-bg-2x-svg.svg",class:"bg-img-2"}),t(a,null,{default:o(()=>[e("div",I,[L,t(l,{color:"primary",class:"btn-custom-sm",icon:""},{default:o(()=>[t(p,{type:"dollar-sign"})]),_:1})]),t(l,{color:"secondary",class:"mt-8"},{default:o(()=>[k(" Download ")]),_:1})]),_:1})]),_:1})}const q=b(N,[["render",G],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/ecommerce/earnings-download/EarningsDownload.vue"]]),H={class:"pa-9"},K={class:"mt-3"},Q={class:"font-weight-medium title text-h5 d-flex align-center mt-6"},U={class:"d-block text-truncate font-weight-regular text-grey-darken-1"},X=w({__name:"TopCards",setup(x){const r=y([{color:"secondary",bgcolor:"blue",icon:"users",title:"39,354",desc:"Customers",price:"-$9",status:"text-error"},{color:"warning",bgcolor:"yellow",icon:"box",title:"4,396",desc:"Products",price:"+$23",status:"text-success"},{color:"error",bgcolor:"red",icon:"bar-chart",title:"423,39",desc:"Sales",price:"+$38",status:"text-error"},{color:"success",bgcolor:"green",icon:"refresh-cw",title:"835 ",desc:"Refunds",price:"-$12",status:"text-error"}]);return(m,p)=>{const l=s("vue-feather"),a=s("v-btn"),i=s("v-col"),_=s("v-row"),h=s("v-card");return c(),f(h,{class:"overflow-hidden"},{default:o(()=>[t(_,null,{default:o(()=>[(c(!0),g(C,null,P(r.value,(n,v)=>(c(),f(i,{lg:"3",cols:"6",class:"pa-0 border-right",key:v},{default:o(()=>[e("div",H,[e("div",K,[t(a,{color:"inherit",icon:"",class:D("pa-0 mr-3 text-"+n.color+" bg-"+n.bgcolor+"-lighten-5")},{default:o(()=>[t(l,{type:n.icon,size:"24"},null,8,["type"])]),_:2},1032,["class"])]),e("div",null,[e("h4",Q,[k(u(n.title)+" ",1),e("span",{class:D(n.status+" text-caption ml-1")},u(n.price),3)]),e("span",U,u(n.desc),1)])]),T(" <v-divider vertical></v-divider> ")]),_:2},1024))),128))]),_:1})]),_:1})}}}),Z=b(X,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/ecommerce/top-cards/TopCards.vue"]]),B={series:[{name:"Products Performance",data:[35,60,30,55,40]}],chartOptions:{grid:{show:!1},colors:["#03c9d7"],chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",type:"line",height:30,sparkline:{enabled:!0}},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},M={series:[{name:"Expence",data:[300,300,180,320,250,300,300]},{name:"Budget",data:[60,90,80,60,70,100,80]}],chartOptions:{grid:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"35%",borderRadius:9}},colors:["#03c9d7","#fb9778"],fill:{type:"solid",opacity:1},chart:{type:"bar",height:285,stacked:!0,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"DM sans",sparkline:{enabled:!1}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","July"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!0,min:100,max:400,tickAmount:3},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},ee={class:"d-sm-flex align-center mb-5"},te=e("h2",{class:"title text-h6 font-weight-medium"},"Products Performance",-1),se=e("div",null,[e("div",{class:"d-flex align-center"},[e("div",{class:"d-flex align-center px-2"},[e("span",{class:"text-primary"},[e("span",{class:"overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Budget")])]),e("div",{class:"d-flex align-center px-2"},[e("span",{class:"text-secondary"},[e("span",{class:"overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Expence")])])])],-1),oe=e("h3",{class:"text-h5 title font-weight-medium mt-3"},"$93,438.78",-1),ae=e("span",{class:"text-grey-darken-1 text-subtitle-2"},"Budget",-1),ne=e("h3",{class:"text-h5 title font-weight-medium mt-6"},"$32,839",-1),ce=e("span",{class:"text-grey-darken-1 text-subtitle-2"},"Expense",-1),re={class:"my-3"},le=w({__name:"ProductsChart",setup(x){const r=y(!1);return R(()=>{setTimeout(()=>r.value=!0,10)}),(m,p)=>{const l=s("v-spacer"),a=s("apexchart"),i=s("v-btn"),_=s("v-col"),h=s("v-row"),n=s("v-card-text"),v=s("v-card");return c(),f(v,null,{default:o(()=>[t(n,null,{default:o(()=>[e("div",ee,[te,t(l),se]),t(h,null,{default:o(()=>[t(_,{lg:"4",cols:"12"},{default:o(()=>[oe,ae,ne,ce,T(" chart "),S(e("div",re,[t(a,{type:"line",height:"30px",options:$(B).chartOptions,series:$(B).series},null,8,["options","series"])],512),[[E,r.value]]),t(i,{color:"secondary",class:"mt-3"},{default:o(()=>[k("Download Report")]),_:1})]),_:1}),t(_,{lg:"8"},{default:o(()=>[S(e("div",null,[t(a,{type:"bar",height:"285px",options:$(M).chartOptions,series:$(M).series},null,8,["options","series"])],512),[[E,r.value]])]),_:1})]),_:1})]),_:1})]),_:1})}}}),ie=b(le,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/ecommerce/products-chart/ProductsChart.vue"]]),de={},_e={class:"d-flex align-start"},ue=e("h2",{class:"font-weight-medium text-h6 title text-white mt-1"},"Earning",-1),me={class:"ml-auto"},he=e("div",{class:"mt-4"},[e("h2",{class:"text-white text-h5"},"$93,438.78"),e("span",{class:"text-white text-medium-emphasis text-subtitle-1"},"Monthly revenue")],-1);function pe(x,r){const m=s("v-spacer"),p=s("vue-feather"),l=s("v-btn"),a=s("v-card-text"),i=s("v-card");return c(),f(i,{class:"bg-primary mb-6"},{default:o(()=>[t(a,null,{default:o(()=>[e("div",_e,[ue,t(m),e("div",me,[t(l,{color:"secondary",icon:""},{default:o(()=>[t(p,{type:"dollar-sign"})]),_:1})])]),he]),_:1})]),_:1})}const fe=b(de,[["render",pe],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/ecommerce/earnings/Earnings.vue"]]),z={series:[25,25,25,25],chartOptions:{plotOptions:{pie:{donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"18px",color:void 0,offsetY:-10},value:{show:!1,color:"#98aab4"},total:{show:!1,label:"Our Visitors",color:"#98aab4"}}}}},labels:["2021","2020","2019","2018"],colors:["#03c9d7","#1e4db7","#fec90f","#ecf0f2"],chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",type:"donut",height:145},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{colors:["transparent"]},tooltip:{theme:"dark",fillSeriesColor:!1}}};const ve=e("h3",{class:"text-h5 font-weight-medium title"},"43,246",-1),ge=e("span",{class:"text-grey-darken-1 text-subtitle-1 font-weight-regular"},"Yearly Sales",-1),be=e("div",{class:"d-flex align-center justify-space-between mt-3"},[e("span",{class:"text-grey-darken-1 d-flex align-center"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-primary mx-1"})]),e("span",{class:"font-weight-regular"},"2021")]),e("span",{class:"text-grey-darken-1 d-flex align-center"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-secondary mx-1"})]),e("span",{class:"font-weight-regular"},"2020")])],-1),xe=e("div",{class:"d-flex align-center justify-space-between"},[e("span",{class:"text-grey-darken-1 d-flex align-center"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-warning mx-1"})]),e("span",{class:"font-weight-regular"},"2019")]),e("span",{class:"text-grey-darken-1 d-flex align-center"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-grey-darken-1 mx-1"})]),e("span",{class:"font-weight-regular"},"2018")])],-1),ye={class:"position-relative"},we=w({__name:"YearlySales",setup(x){const r=y(!1);return R(()=>{setTimeout(()=>r.value=!0,10)}),(m,p)=>{const l=s("v-col"),a=s("apexchart"),i=s("vue-feather"),_=s("v-row"),h=s("v-card-text"),n=s("v-card");return c(),f(n,null,{default:o(()=>[t(h,null,{default:o(()=>[t(_,null,{default:o(()=>[t(l,{sm:"6"},{default:o(()=>[ve,ge,be,xe]),_:1}),t(l,{sm:"6"},{default:o(()=>[S(e("div",ye,[t(a,{type:"donut",height:"145px",options:$(z).chartOptions,series:$(z).series},null,8,["options","series"]),t(i,{size:"20",type:"shopping-cart",class:"text-grey-darken-1 center-icon"})],512),[[E,r.value]])]),_:1})]),_:1})]),_:1})]),_:1})}}}),$e=b(we,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/ecommerce/yearly-sales/YearlySales.vue"]]),ke=e("h2",{class:"title text-h6 font-weight-medium mb-5"},"Recent Transactions",-1),Ce={class:"d-flex align-center py-3"},De={class:""},Pe={class:"ml-2"},Te={class:"font-weight-medium text-subtitle-1 title"},je={class:"text-grey-darken-1 text-subtitle-2 d-block text-truncate font-weight-regular mt-n1"},Se={class:"ml-auto"},Ee={class:"d-flex justify-space-between align-center"},Be=e("p",{class:"text-body-2 ma-0 text-grey-darken-1"}," 36 Recent Transactions ",-1),Me=w({__name:"RecentTransactions",setup(x){const r=y([{color:"info",bgcolor:"blue",icon:"dollar-sign",title:"PayPal Transfer",desc:"Money Added",price:"+$350",status:"text-success"},{color:"success",bgcolor:"green",icon:"shield",title:"Wallet",desc:"Bill Payment",price:"-$560",status:"text-error"},{color:"error",bgcolor:"red",icon:"credit-card",title:"Credit Card",desc:"Money reversed",price:"+$350",status:"text-success"},{color:"warning",bgcolor:"yellow",icon:"check",title:"Bank Transfer",desc:"Money added",price:"+$350",status:"text-success"},{color:"info",bgcolor:"blue",icon:"dollar-sign",title:"Refund",desc:"Payment Sent",price:"-$50",status:"text-error"}]);return(m,p)=>{const l=s("vue-feather"),a=s("v-btn"),i=s("v-divider"),_=s("v-card-text"),h=s("v-card");return c(),f(h,{class:"w-100"},{default:o(()=>[t(_,null,{default:o(()=>[ke,T(" lists "),(c(!0),g(C,null,P(r.value,(n,v)=>(c(),g("div",{class:"px-0",key:v},[e("div",Ce,[e("div",De,[t(a,{color:"inherit",height:"45",width:"45","min-width":"45",class:D("pa-0 mr-3 text-"+n.color+" bg-"+n.bgcolor+"-lighten-5")},{default:o(()=>[t(l,{type:n.icon,size:"18"},null,8,["type"])]),_:2},1032,["class"])]),e("div",Pe,[e("h4",Te,u(n.title),1),e("span",je,u(n.desc),1)]),e("div",Se,[e("span",{class:D(n.status)},u(n.price),3)])])]))),128)),t(i,{class:"my-4"}),e("div",Ee,[t(a,{color:"secondary"},{default:o(()=>[k("Add")]),_:1}),Be])]),_:1})]),_:1})}}}),ze=b(Me,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/ecommerce/recent-transactions/RecentTransactions.vue"]]),Re=e("h2",{class:"title text-h6 font-weight-medium"},"Products Performance",-1),Ae={class:"d-flex align-center"},Oe=["src","alt"],Ye={class:"ml-3"},Ve={class:"font-weight-medium text-subtitle-1"},Fe={class:"font-weight-regular text-body-2 text-grey-darken-1"},Je={key:0},We=e("h6",{class:"font-weight-medium text-body-2 mb-1"},"Good",-1),Ne={class:"font-weight-regular text-body-2 text-grey-darken-1 text-no-wrap"},Ie={key:1},Le=e("h6",{class:"font-weight-medium text-body-2 mb-1"},"Bad",-1),Ge={class:"font-weight-regular text-body-2 text-grey-darken-1"},qe=e("span",{class:"font-weight-regular text-body-2 text-grey-darken-1"},"Earnings",-1),He={class:"font-weight-medium text-body-1 mb-1"},Ke={class:"pl-0"},Qe=w({__name:"ProductPerformance",setup(x){const r=y([{avatar:"1.jpg",name:"Is it good butterscotch ice-cream?",category:"Ice-Cream, Milk, Powder",earn:"546,000",percent:45},{avatar:"2.jpg",name:"Supreme fresh tomato available",category:"Market, Mall",earn:"780,000",percent:20},{avatar:"3.jpg",name:"Red color candy from Gucci",category:"Chocolate, Yummy",earn:"457,000",percent:60},{avatar:"4.jpg",name:"Stylish night lamp for night",category:"Elecric, Wire, Current",earn:"125,000",percent:40}]);return(m,p)=>{const l=s("v-avatar"),a=s("v-progress-linear"),i=s("vue-feather"),_=s("v-btn"),h=s("v-table"),n=s("v-card-text"),v=s("v-card");return c(),f(v,null,{default:o(()=>[t(n,null,{default:o(()=>[Re,t(h,{class:"month-table custom-px-0 mt-4"},{default:o(()=>[e("tbody",null,[(c(!0),g(C,null,P(r.value,d=>(c(),g("tr",{class:"month-item",key:d.name},[e("td",null,[e("div",Ae,[t(l,{class:"rounded-lg overflow-hidden",size:"70"},{default:o(()=>[e("img",{src:`/assets/images/products/${d.avatar}`,alt:d.avatar,width:"90",height:"70",class:"rounded-lg"},null,8,Oe),T(` <v-img\r
                      width="90"\r
                      height="70"\r
                      class="rounded-lg"\r
                      :src="require('../src/assets/images/products/' + item.avatar)"\r
                    /> `)]),_:2},1024),e("div",Ye,[e("h6",Ve,u(d.name),1),e("span",Fe,u(d.category),1)])])]),e("td",null,[d.percent>=40?(c(),g("div",Je,[We,t(a,{color:"secondary","background-color":"grey lighten-3","model-value":d.percent,rounded:"",class:"mb-1"},null,8,["model-value"]),e("span",Ne,u(d.percent)+"% sold ",1)])):(c(),g("div",Ie,[Le,t(a,{color:"primary","background-color":"primary lighten-3","model-value":d.percent,rounded:"",class:"mb-1"},null,8,["model-value"]),e("span",Ge,u(d.percent)+"% sold ",1)]))]),e("td",null,[qe,e("h6",He," $"+u(d.earn),1)]),e("td",Ke,[t(_,{icon:"",color:"transparent"},{default:o(()=>[t(i,{type:"trash",size:"20"})]),_:1})])]))),128))])]),_:1})]),_:1})]),_:1})}}}),Ue=b(Qe,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/ecommerce/product-performance/ProductPerformance.vue"]]),Xe={class:"d-flex align-center mb-5"},Ze=e("h2",{class:"title text-h6 font-weight-medium"},"Daily Activities",-1),et={class:"ml-auto"},tt=e("img",{src:F,alt:"image",style:{width:"100%"}},null,-1),st=e("h4",{class:"title font-weight-medium text-h6 mt-6"}," React 18 coming soon! ",-1),ot=e("h5",{class:"text-subtitle-2 text-grey-darken-1"},"By Johnathan Doe",-1),at=e("p",{class:"text-grey-darken-1 mt-4 mb-4"}," This will be the small description for the news you have shown here. There could be some great info. ",-1),nt=w({__name:"DailyActivites",setup(x){const r=y([{title:"Action"},{title:"Another Action"},{title:"Something else here"}]);return(m,p)=>{const l=s("v-spacer"),a=s("vue-feather"),i=s("v-btn"),_=s("v-list-item-title"),h=s("v-list-item"),n=s("v-list"),v=s("v-menu"),d=s("v-card-text"),A=s("v-card");return c(),f(A,null,{default:o(()=>[t(d,null,{default:o(()=>[e("div",Xe,[Ze,t(l),e("div",et,[t(v,{anchor:"left",transition:"slide-y-transition"},{activator:o(({props:j})=>[t(i,Y({icon:"",color:"inherit"},j),{default:o(()=>[t(a,{type:"more-horizontal",size:"20"})]),_:2},1040)]),default:o(()=>[t(n,null,{default:o(()=>[(c(!0),g(C,null,P(r.value,(j,O)=>(c(),f(h,{key:O},{default:o(()=>[t(_,null,{default:o(()=>[k(u(j.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),tt,st,ot,at,t(i,{color:"secondary"},{default:o(()=>[k("Read More")]),_:1})]),_:1})]),_:1})}}}),ct=b(nt,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/ecommerce/daily-activities/DailyActivites.vue"]]),rt=w({__name:"Ecommerce",setup(x){const r=y({title:"Ecommerce"}),m=y([{text:"Dashboard",disabled:!1,to:"#"},{text:"Ecommerce",disabled:!0}]);return(p,l)=>{const a=s("v-col"),i=s("v-row");return c(),g(C,null,[t(V,{title:r.value.title,breadcrumbs:m.value},null,8,["title","breadcrumbs"]),t(i,null,{default:o(()=>[t(a,{cols:"12",lg:"4"},{default:o(()=>[t(q)]),_:1}),t(a,{cols:"12",lg:"8"},{default:o(()=>[t(Z)]),_:1}),t(a,{cols:"12",lg:"8"},{default:o(()=>[t(ie)]),_:1}),t(a,{cols:"12",lg:"4"},{default:o(()=>[t(fe),t($e)]),_:1}),t(a,{cols:"12",lg:"4",class:"d-flex align-items-stretch"},{default:o(()=>[t(ze)]),_:1}),t(a,{cols:"12",lg:"8",class:"d-flex align-items-stretch"},{default:o(()=>[t(Ue)]),_:1}),t(a,{cols:"12",lg:"4"},{default:o(()=>[t(J)]),_:1}),t(a,{cols:"12",lg:"4"},{default:o(()=>[t(W)]),_:1}),t(a,{cols:"12",lg:"4"},{default:o(()=>[t(ct)]),_:1})]),_:1})],64)}}}),ut=b(rt,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/ecommerce/Ecommerce.vue"]]);export{ut as default};
