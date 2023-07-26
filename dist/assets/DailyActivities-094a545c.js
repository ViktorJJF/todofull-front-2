import{_ as b,e as C,g as x,J as B,r as o,o as u,f as S,j as m,a as t,w as s,b as e,K as J,u as g,L,F as z,H as P,I as F,c as $,d as l,m as I,k as N,t as W}from"./index-b5291b3b.js";import{_ as Y,a as E,b as H,c as K}from"./WeeklyStats-94625c68.js";const Ce="/assets/welcome-bg2-2x-svg-e2ce9c0a.svg",M={series:[{name:"Ample",data:[355,390,300,350,390,180]},{name:"Pixel",data:[280,250,325,215,250,310]}],chartOptions:{grid:{show:!1,borderColor:"transparent",padding:{left:0,right:0,bottom:0}},plotOptions:{bar:{horizontal:!1,columnWidth:"42%",borderRadius:5}},colors:["#fb9778","#03c9d7"],fill:{type:"solid",opacity:1},chart:{type:"bar",height:270,offsetX:-15,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"DM sans",sparkline:{enabled:!1}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},xaxis:{type:"category",categories:["Mon","Tue","Wed","Thu","Fri","Sat"],labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},yaxis:{show:!0,min:100,max:400,tickAmount:3,labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},stroke:{show:!0,width:5,lineCap:"butt",colors:["transparent"]},tooltip:{theme:"dark"}}},R={class:"d-sm-flex align-center"},U=e("div",null,[e("h3",{class:"text-h6 title font-weight-medium"},"Sales Overview")],-1),X=e("div",{class:"ml-auto"},[e("div",{class:"d-flex align-center"},[e("div",{class:"d-flex align-center px-2"},[e("span",{class:"text-primary"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Ample")])]),e("div",{class:"d-flex align-center px-2"},[e("span",{class:"text-secondary"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Pixel Admin")])])])],-1),q=C({__name:"TheSalesOverview",setup(c){const n=x(!1);return B(()=>{setTimeout(()=>n.value=!0,10)}),(p,h)=>{const i=o("v-spacer"),a=o("apexchart"),r=o("v-card-text"),d=o("v-card");return u(),S(z,null,[m(" ------------------------------------ "),m(" html "),m(" ------------------------------------ "),t(d,null,{default:s(()=>[t(r,{class:"pa-7"},{default:s(()=>[e("div",R,[U,t(i),X]),J(e("div",null,[t(a,{type:"bar",height:"280px",options:g(M).chartOptions,series:g(M).series},null,8,["options","series"])],512),[[L,n.value]])]),_:1})]),_:1})],2112)}}}),Se=b(q,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/sales-overview/TheSalesOverview.vue"]]),D={series:[25,35,35],chartOptions:{labels:["2021","2020","2019","2018"],chart:{height:280,type:"donut",foreColor:"#adb0bb",fontFamily:"DM sans"},colors:["#03c9d7","#fb9778","#ecf0f2"],dataLabels:{enabled:!1},legend:{show:!1},grid:{show:!1,borderColor:"transparent",padding:{top:0,right:0}},stroke:{colors:["transparent"]},plotOptions:{pie:{donut:{size:"78%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"18px",color:void 0,offsetY:-10},value:{show:!1,color:"#98aab4"},total:{show:!1,label:"Our Visitors",color:"#98aab4"}}}}},tooltip:{theme:"dark",fillSeriesColor:!1},responsive:[{breakpoint:480,options:{chart:{height:250}}}]}};const T=c=>(P("data-v-0317e070"),c=c(),F(),c),G={class:"d-flex align-center mb-5"},Q=T(()=>e("h2",{class:"title text-h6 font-weight-medium"},"Total Sales",-1)),Z={class:"ml-auto"},ee=T(()=>e("div",{class:"border-top mt-5 d-flex align-center"},[e("h6",{class:"text-subtitle-1 text-grey-darken-1 font-weight-regular"}," Sales Yearly "),e("div",{class:"ml-auto"},[e("h3",{class:"h3 title font-weight-bold"},"8,364,398")])],-1)),te={class:"mt-5 pt-5 position-relative"},se=T(()=>e("div",{class:"d-flex align-center justify-space-between mt-9"},[e("div",{class:"d-flex align-center px-2"},[e("span",null,[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-secondary mx-1"})]),e("span",{class:"text-grey-darken-1 font-weight-medium mr-1"},"2021")])]),e("div",{class:"d-flex align-center px-2"},[e("span",null,[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-primary mx-1"})]),e("span",{class:"text-grey-darken-1 font-weight-medium mr-1"},"2020")])]),e("div",{class:"d-flex align-center px-2"},[e("span",null,[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-warning mx-1"})]),e("span",{class:"text-grey-darken-1 font-weight-medium mr-1"},"2019 ")])])],-1)),oe=C({__name:"TotalSales",setup(c){const n=x("March"),p=x(["March","April","May","June"]);return(h,i)=>{const a=o("v-select"),r=o("v-divider"),d=o("apexchart"),f=o("vue-feather"),w=o("v-card-text"),y=o("v-card");return u(),S(z,null,[m(" ------------------------------------ "),m(" html "),m(" ------------------------------------ "),t(y,null,{default:s(()=>[t(w,null,{default:s(()=>[e("div",G,[Q,e("div",Z,[t(a,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=_=>n.value=_),items:p.value,"hide-details":"true",variant:"outlined",dense:"","single-line":""},null,8,["modelValue","items"])])]),t(r),ee,e("div",te,[t(d,{type:"donut",height:"280px",options:g(D).chartOptions,series:g(D).series},null,8,["options","series"]),t(f,{size:"35",type:"shopping-cart",class:"text-grey-darken-1 total-sales-icon"})]),se]),_:1})]),_:1})],2112)}}}),ze=b(oe,[["__scopeId","data-v-0317e070"],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/total-sales/TotalSales.vue"]]),ae={},le=e("img",{style:{width:"100%"},src:Y},null,-1),ne={class:"font-weight-medium d-flex align-center"},ie=e("h5",{class:"title font-weight-medium mb-2 mt-5 text-h6"}," Super awesome, Vue 3 is coming soon! ",-1),ce={class:"d-flex align-center mt-4"},re=e("img",{width:"40",src:E,alt:"John"},null,-1),de=e("img",{width:"40",src:H,alt:"John"},null,-1),_e=e("img",{width:"40",src:K,alt:"John"},null,-1),me={class:"ml-auto"};function pe(c,n){const p=o("vue-feather"),h=o("v-chip"),i=o("v-divider"),a=o("v-avatar"),r=o("v-btn"),d=o("v-card-text"),f=o("v-card");return u(),$(f,null,{default:s(()=>[le,t(d,null,{default:s(()=>[e("h3",ne,[t(p,{type:"clock",size:"20",class:"mr-1"}),l(" 22 March, 2021 ")]),ie,t(h,{class:"mr-2",label:"",size:"small",color:"primary"},{default:s(()=>[l(" Medium ")]),_:1}),t(h,{class:"mr-2",label:"",size:"small",color:"error"},{default:s(()=>[l(" Low ")]),_:1}),t(i,{class:"mt-7"}),e("div",ce,[t(a,{size:"40"},{default:s(()=>[re]),_:1}),t(a,{size:"40",class:"ml-2"},{default:s(()=>[de]),_:1}),t(a,{size:"40",class:"ml-2"},{default:s(()=>[_e]),_:1}),e("div",me,[t(r,{icon:"",color:"inherit"},{default:s(()=>[t(p,{type:"message-circle",class:"text-grey-darken-1",size:"22"})]),_:1})])])]),_:1})]),_:1})}const Te=b(ae,[["render",pe],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/blog-card/BlogCard.vue"]]),ue={class:"d-flex align-center mb-5"},he=e("h2",{class:"title text-h6 font-weight-medium"},"Daily Activities",-1),fe={class:"ml-auto"},ve=e("span",{class:"title text-body-2 font-weight-bold"},"09.50",-1),xe=e("span",{class:"title text-body-2 font-weight-bold"},"09.46",-1),ge=e("span",{class:"title text-body-2 font-weight-bold"},"09.47",-1),be=e("span",{class:"title text-body-2 font-weight-bold"},"09.48",-1),we=e("span",{class:"title text-body-2 font-weight-bold"},"09.49",-1),ye=C({__name:"DailyActivities",setup(c){const n=x([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]);return(p,h)=>{const i=o("v-spacer"),a=o("vue-feather"),r=o("v-btn"),d=o("v-list-item-title"),f=o("v-list-item"),w=o("v-list"),y=o("v-menu"),_=o("v-card-title"),v=o("v-timeline-item"),O=o("v-timeline"),A=o("v-card-text"),V=o("v-card");return u(),$(V,{class:"w-100"},{default:s(()=>[t(A,null,{default:s(()=>[e("div",ue,[he,t(i),e("div",fe,[t(y,{bottom:"",left:""},{activator:s(({props:k})=>[t(r,I({icon:"",color:"inherit"},k),{default:s(()=>[t(a,{type:"more-horizontal",size:"20"})]),_:2},1040)]),default:s(()=>[t(w,null,{default:s(()=>[(u(!0),S(z,null,N(n.value,(k,j)=>(u(),$(f,{key:j},{default:s(()=>[t(d,null,{default:s(()=>[l(W(k.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),m(" timeline "),t(O,{class:"theme-timeline"},{default:s(()=>[t(v,{"dot-color":"success","fill-dot":"",size:"x-small"},{opposite:s(()=>[ve]),default:s(()=>[t(_,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:s(()=>[l("Meeting with John ")]),_:1})]),_:1}),t(v,{"dot-color":"primary","fill-dot":"",size:"x-small"},{opposite:s(()=>[xe]),default:s(()=>[t(_,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:s(()=>[l("Payment received of $385.90 ")]),_:1})]),_:1}),t(v,{"dot-color":"secondary","fill-dot":"",size:"x-small"},{opposite:s(()=>[ge]),default:s(()=>[t(_,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:s(()=>[l("Project Meeting ")]),_:1})]),_:1}),t(v,{"dot-color":"warning","fill-dot":"",size:"x-small"},{opposite:s(()=>[be]),default:s(()=>[t(_,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:s(()=>[l("New Sale recorded #ML-3467 ")]),_:1})]),_:1}),t(v,{"dot-color":"error","fill-dot":"",size:"x-small"},{opposite:s(()=>[we]),default:s(()=>[t(_,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:s(()=>[l("Payment was made to Michael Anderson ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),Me=b(ye,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/daily-activities/DailyActivities.vue"]]);export{Te as B,Me as D,Se as T,Ce as _,ze as a};
