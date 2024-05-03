import{e as k,g as x,C as A,r as o,o as p,c as v,w as t,a as s,b as e,J as D,K as B,u as g,H as J,I as P,d as l,m as F,f as I,i as L,F as N,t as j}from"./index-7ff8e042.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{a as W,b as Y,c as E,d as H}from"./WeeklyStats.vue_vue_type_script_setup_true_lang-f36bcca9.js";const ke="/assets/welcome-bg2-2x-svg-14e3163f.svg",z={series:[{name:"Ample",data:[355,390,300,350,390,180]},{name:"Pixel",data:[280,250,325,215,250,310]}],chartOptions:{grid:{show:!1,borderColor:"transparent",padding:{left:0,right:0,bottom:0}},plotOptions:{bar:{horizontal:!1,columnWidth:"42%",borderRadius:5}},colors:["#fb9778","#03c9d7"],fill:{type:"solid",opacity:1},chart:{type:"bar",height:270,offsetX:-15,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"DM sans",sparkline:{enabled:!1}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},xaxis:{type:"category",categories:["Mon","Tue","Wed","Thu","Fri","Sat"],labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},yaxis:{show:!0,min:100,max:400,tickAmount:3,labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},stroke:{show:!0,width:5,lineCap:"butt",colors:["transparent"]},tooltip:{theme:"dark"}}},K={class:"d-sm-flex align-center"},R=e("div",null,[e("h3",{class:"text-h6 title font-weight-medium"},"Sales Overview")],-1),U=e("div",{class:"ml-auto"},[e("div",{class:"d-flex align-center"},[e("div",{class:"d-flex align-center px-2"},[e("span",{class:"text-primary"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Ample")])]),e("div",{class:"d-flex align-center px-2"},[e("span",{class:"text-secondary"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Pixel Admin")])])])],-1),$e=k({__name:"TheSalesOverview",setup(c){const n=x(!1);return A(()=>{setTimeout(()=>n.value=!0,10)}),(m,h)=>{const i=o("v-spacer"),a=o("apexchart"),r=o("v-card-text"),d=o("v-card");return p(),v(d,null,{default:t(()=>[s(r,{class:"pa-7"},{default:t(()=>[e("div",K,[R,s(i),U]),D(e("div",null,[s(a,{type:"bar",height:"280px",options:g(z).chartOptions,series:g(z).series},null,8,["options","series"])],512),[[B,n.value]])]),_:1})]),_:1})}}}),S={series:[25,35,35],chartOptions:{labels:["2021","2020","2019","2018"],chart:{height:280,type:"donut",foreColor:"#adb0bb",fontFamily:"DM sans"},colors:["#03c9d7","#fb9778","#ecf0f2"],dataLabels:{enabled:!1},legend:{show:!1},grid:{show:!1,borderColor:"transparent",padding:{top:0,right:0}},stroke:{colors:["transparent"]},plotOptions:{pie:{donut:{size:"78%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"18px",color:void 0,offsetY:-10},value:{show:!1,color:"#98aab4"},total:{show:!1,label:"Our Visitors",color:"#98aab4"}}}}},tooltip:{theme:"dark",fillSeriesColor:!1},responsive:[{breakpoint:480,options:{chart:{height:250}}}]}},$=c=>(J("data-v-7c5cf619"),c=c(),P(),c),X={class:"d-flex align-center mb-5"},q=$(()=>e("h2",{class:"title text-h6 font-weight-medium"},"Total Sales",-1)),G={class:"ml-auto"},Q=$(()=>e("div",{class:"border-top mt-5 d-flex align-center"},[e("h6",{class:"text-subtitle-1 text-grey-darken-1 font-weight-regular"}," Sales Yearly "),e("div",{class:"ml-auto"},[e("h3",{class:"h3 title font-weight-bold"},"8,364,398")])],-1)),Z={class:"mt-5 pt-5 position-relative"},ee=$(()=>e("div",{class:"d-flex align-center justify-space-between mt-9"},[e("div",{class:"d-flex align-center px-2"},[e("span",null,[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-secondary mx-1"})]),e("span",{class:"text-grey-darken-1 font-weight-medium mr-1"},"2021")])]),e("div",{class:"d-flex align-center px-2"},[e("span",null,[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-primary mx-1"})]),e("span",{class:"text-grey-darken-1 font-weight-medium mr-1"},"2020")])]),e("div",{class:"d-flex align-center px-2"},[e("span",null,[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-warning mx-1"})]),e("span",{class:"text-grey-darken-1 font-weight-medium mr-1"},"2019 ")])])],-1)),te=k({__name:"TotalSales",setup(c){const n=x("March"),m=x(["March","April","May","June"]);return(h,i)=>{const a=o("v-select"),r=o("v-divider"),d=o("apexchart"),u=o("vue-feather"),b=o("v-card-text"),w=o("v-card");return p(),v(w,null,{default:t(()=>[s(b,null,{default:t(()=>[e("div",X,[q,e("div",G,[s(a,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=_=>n.value=_),items:m.value,"hide-details":"true",variant:"outlined",dense:"","single-line":""},null,8,["modelValue","items"])])]),s(r),Q,e("div",Z,[s(d,{type:"donut",height:"280px",options:g(S).chartOptions,series:g(S).series},null,8,["options","series"]),s(u,{size:"35",type:"shopping-cart",class:"text-grey-darken-1 total-sales-icon"})]),ee]),_:1})]),_:1})}}});const ze=C(te,[["__scopeId","data-v-7c5cf619"]]),se={},oe=e("img",{style:{width:"100%"},src:W},null,-1),ae={class:"font-weight-medium d-flex align-center"},le=e("h5",{class:"title font-weight-medium mb-2 mt-5 text-h6"}," Super awesome, Vue 3 is coming soon! ",-1),ne={class:"d-flex align-center mt-4"},ie=e("img",{width:"40",src:Y,alt:"John"},null,-1),ce=e("img",{width:"40",src:E,alt:"John"},null,-1),re=e("img",{width:"40",src:H,alt:"John"},null,-1),de={class:"ml-auto"};function _e(c,n){const m=o("vue-feather"),h=o("v-chip"),i=o("v-divider"),a=o("v-avatar"),r=o("v-btn"),d=o("v-card-text"),u=o("v-card");return p(),v(u,null,{default:t(()=>[oe,s(d,null,{default:t(()=>[e("h3",ae,[s(m,{type:"clock",size:"20",class:"mr-1"}),l(" 22 March, 2021 ")]),le,s(h,{class:"mr-2",label:"",size:"small",color:"primary"},{default:t(()=>[l(" Medium ")]),_:1}),s(h,{class:"mr-2",label:"",size:"small",color:"error"},{default:t(()=>[l(" Low ")]),_:1}),s(i,{class:"mt-7"}),e("div",ne,[s(a,{size:"40"},{default:t(()=>[ie]),_:1}),s(a,{size:"40",class:"ml-2"},{default:t(()=>[ce]),_:1}),s(a,{size:"40",class:"ml-2"},{default:t(()=>[re]),_:1}),e("div",de,[s(r,{icon:"",color:"inherit"},{default:t(()=>[s(m,{type:"message-circle",class:"text-grey-darken-1",size:"22"})]),_:1})])])]),_:1})]),_:1})}const Se=C(se,[["render",_e]]),me={class:"d-flex align-center mb-5"},pe=e("h2",{class:"title text-h6 font-weight-medium"},"Daily Activities",-1),he={class:"ml-auto"},ue=e("span",{class:"title text-body-2 font-weight-bold"},"09.50",-1),fe=e("span",{class:"title text-body-2 font-weight-bold"},"09.46",-1),ve=e("span",{class:"title text-body-2 font-weight-bold"},"09.47",-1),xe=e("span",{class:"title text-body-2 font-weight-bold"},"09.48",-1),ge=e("span",{class:"title text-body-2 font-weight-bold"},"09.49",-1),Ce=k({__name:"DailyActivities",setup(c){const n=x([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]);return(m,h)=>{const i=o("v-spacer"),a=o("vue-feather"),r=o("v-btn"),d=o("v-list-item-title"),u=o("v-list-item"),b=o("v-list"),w=o("v-menu"),_=o("v-card-title"),f=o("v-timeline-item"),M=o("v-timeline"),T=o("v-card-text"),O=o("v-card");return p(),v(O,{class:"w-100"},{default:t(()=>[s(T,null,{default:t(()=>[e("div",me,[pe,s(i),e("div",he,[s(w,{bottom:"",left:""},{activator:t(({props:y})=>[s(r,F({icon:"",color:"inherit"},y),{default:t(()=>[s(a,{type:"more-horizontal",size:"20"})]),_:2},1040)]),default:t(()=>[s(b,null,{default:t(()=>[(p(!0),I(N,null,L(n.value,(y,V)=>(p(),v(u,{key:V},{default:t(()=>[s(d,null,{default:t(()=>[l(j(y.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),s(M,{class:"theme-timeline"},{default:t(()=>[s(f,{"dot-color":"success","fill-dot":"",size:"x-small"},{opposite:t(()=>[ue]),default:t(()=>[s(_,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:t(()=>[l("Meeting with John ")]),_:1})]),_:1}),s(f,{"dot-color":"primary","fill-dot":"",size:"x-small"},{opposite:t(()=>[fe]),default:t(()=>[s(_,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:t(()=>[l("Payment received of $385.90 ")]),_:1})]),_:1}),s(f,{"dot-color":"secondary","fill-dot":"",size:"x-small"},{opposite:t(()=>[ve]),default:t(()=>[s(_,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:t(()=>[l("Project Meeting ")]),_:1})]),_:1}),s(f,{"dot-color":"warning","fill-dot":"",size:"x-small"},{opposite:t(()=>[xe]),default:t(()=>[s(_,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:t(()=>[l("New Sale recorded #ML-3467 ")]),_:1})]),_:1}),s(f,{"dot-color":"error","fill-dot":"",size:"x-small"},{opposite:t(()=>[ge]),default:t(()=>[s(_,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:t(()=>[l("Payment was made to Michael Anderson ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Se as B,ze as T,ke as _,$e as a,Ce as b};
