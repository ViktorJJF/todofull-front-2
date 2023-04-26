import{m as v,r as u,ae as O,t as _,o as r,c as h,w as t,a as s,ab as f,f as e,M as C,af as A,u as p,ag as D,d as g,ah as B,T as S,ac as L,ad as I,h as a,P as k,Q as b,g as z,N as P,C as F,v as J,n as N,F as j,x as W,B as Y,D as E,z as Q,an as R,ao as d,ap as m}from"./index.ef9cfdf3.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import{a as U,b as X,c as q,d as G}from"./WeeklyStats.6f5dbaad.js";var ze="/assets/welcome-bg2-2x-svg.e2ce9c0a.svg";const V={series:[{name:"Ample",data:[355,390,300,350,390,180]},{name:"Pixel",data:[280,250,325,215,250,310]}],chartOptions:{grid:{show:!1,borderColor:"transparent",padding:{left:0,right:0,bottom:0}},plotOptions:{bar:{horizontal:!1,columnWidth:"42%",borderRadius:5}},colors:["#fb9778","#03c9d7"],fill:{type:"solid",opacity:1},chart:{type:"bar",height:270,offsetX:-15,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"DM sans",sparkline:{enabled:!1}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},xaxis:{type:"category",categories:["Mon","Tue","Wed","Thu","Fri","Sat"],labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},yaxis:{show:!0,min:100,max:400,tickAmount:3,labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},stroke:{show:!0,width:5,lineCap:"butt",colors:["transparent"]},tooltip:{theme:"dark"}}},H={class:"d-sm-flex align-center"},K=e("div",null,[e("h3",{class:"text-h6 title font-weight-medium"},"Sales Overview")],-1),Z=e("div",{class:"ml-auto"},[e("div",{class:"d-flex align-center"},[e("div",{class:"d-flex align-center px-2"},[e("span",{class:"text-primary"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Ample")])]),e("div",{class:"d-flex align-center px-2"},[e("span",{class:"text-secondary"},[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 mx-1"})]),e("span",{class:"font-weight-regular"},"Pixel Admin")])])])],-1),Me=v({__name:"TheSalesOverview",setup(o){const l=u(!1);return O(()=>{setTimeout(()=>l.value=!0,10)}),(i,y)=>{const n=_("apexchart");return r(),h(g,null,{default:t(()=>[s(f,{class:"pa-7"},{default:t(()=>[e("div",H,[K,s(C),Z]),A(e("div",null,[s(n,{type:"bar",height:"280px",options:p(V).chartOptions,series:p(V).series},null,8,["options","series"])],512),[[D,l.value]])]),_:1})]),_:1})}}}),$={series:[25,35,35],chartOptions:{labels:["2021","2020","2019","2018"],chart:{height:280,type:"donut",foreColor:"#adb0bb",fontFamily:"DM sans"},colors:["#03c9d7","#fb9778","#ecf0f2"],dataLabels:{enabled:!1},legend:{show:!1},grid:{show:!1,borderColor:"transparent",padding:{top:0,right:0}},stroke:{colors:["transparent"]},plotOptions:{pie:{donut:{size:"78%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"18px",color:void 0,offsetY:-10},value:{show:!1,color:"#98aab4"},total:{show:!1,label:"Our Visitors",color:"#98aab4"}}}}},tooltip:{theme:"dark",fillSeriesColor:!1},responsive:[{breakpoint:480,options:{chart:{height:250}}}]}};const w=o=>(L("data-v-e7b046f0"),o=o(),I(),o),ee={class:"d-flex align-center mb-5"},te=w(()=>e("h2",{class:"title text-h6 font-weight-medium"},"Total Sales",-1)),se={class:"ml-auto"},ae=w(()=>e("div",{class:"border-top mt-5 d-flex align-center"},[e("h6",{class:"text-subtitle-1 text-grey-darken-1 font-weight-regular"}," Sales Yearly "),e("div",{class:"ml-auto"},[e("h3",{class:"h3 title font-weight-bold"},"8,364,398")])],-1)),le={class:"mt-5 pt-5 position-relative"},oe=w(()=>e("div",{class:"d-flex align-center justify-space-between mt-9"},[e("div",{class:"d-flex align-center px-2"},[e("span",null,[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-secondary mx-1"})]),e("span",{class:"text-grey-darken-1 font-weight-medium mr-1"},"2021")])]),e("div",{class:"d-flex align-center px-2"},[e("span",null,[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-primary mx-1"})]),e("span",{class:"text-grey-darken-1 font-weight-medium mr-1"},"2020")])]),e("div",{class:"d-flex align-center px-2"},[e("span",null,[e("span",{class:"text-overline"},[e("i",{class:"mdi mdi-brightness-1 text-warning mx-1"})]),e("span",{class:"text-grey-darken-1 font-weight-medium mr-1"},"2019 ")])])],-1)),ie=v({__name:"TotalSales",setup(o){const l=u("March"),i=u(["March","April","May","June"]);return(y,n)=>{const c=_("apexchart"),x=_("vue-feather");return r(),h(g,null,{default:t(()=>[s(f,null,{default:t(()=>[e("div",ee,[te,e("div",se,[s(B,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=T=>l.value=T),items:i.value,"hide-details":"true",variant:"outlined",dense:"","single-line":""},null,8,["modelValue","items"])])]),s(S),ae,e("div",le,[s(c,{type:"donut",height:"280px",options:p($).chartOptions,series:p($).series},null,8,["options","series"]),s(x,{size:"35",type:"shopping-cart",class:"text-grey-darken-1 total-sales-icon"})]),oe]),_:1})]),_:1})}}});var Te=M(ie,[["__scopeId","data-v-e7b046f0"]]);const ne={},re=e("img",{style:{width:"100%"},src:U},null,-1),ce={class:"font-weight-medium d-flex align-center"},de=e("h5",{class:"title font-weight-medium mb-2 mt-5 text-h6"}," Super awesome, Vue 3 is coming soon! ",-1),me={class:"d-flex align-center mt-4"},_e=e("img",{width:"40",src:X,alt:"John"},null,-1),he=e("img",{width:"40",src:q,alt:"John"},null,-1),ue=e("img",{width:"40",src:G,alt:"John"},null,-1),pe={class:"ml-auto"};function fe(o,l){const i=_("vue-feather");return r(),h(g,null,{default:t(()=>[re,s(f,null,{default:t(()=>[e("h3",ce,[s(i,{type:"clock",size:"20",class:"mr-1"}),a(" 22 March, 2021 ")]),de,s(k,{class:"mr-2",label:"",size:"small",color:"primary"},{default:t(()=>[a(" Medium ")]),_:1}),s(k,{class:"mr-2",label:"",size:"small",color:"error"},{default:t(()=>[a(" Low ")]),_:1}),s(S,{class:"mt-7"}),e("div",me,[s(b,{size:"40"},{default:t(()=>[_e]),_:1}),s(b,{size:"40",class:"ml-2"},{default:t(()=>[he]),_:1}),s(b,{size:"40",class:"ml-2"},{default:t(()=>[ue]),_:1}),e("div",pe,[s(z,{icon:"",color:"inherit"},{default:t(()=>[s(i,{type:"message-circle",class:"text-grey-darken-1",size:"22"})]),_:1})])])]),_:1})]),_:1})}var Oe=M(ne,[["render",fe]]);const ge={class:"d-flex align-center mb-5"},xe=e("h2",{class:"title text-h6 font-weight-medium"},"Daily Activities",-1),be={class:"ml-auto"},ve=e("span",{class:"title text-body-2 font-weight-bold"},"09.50",-1),we=e("span",{class:"title text-body-2 font-weight-bold"},"09.46",-1),ye=e("span",{class:"title text-body-2 font-weight-bold"},"09.47",-1),ke=e("span",{class:"title text-body-2 font-weight-bold"},"09.48",-1),Ve=e("span",{class:"title text-body-2 font-weight-bold"},"09.49",-1),Ae=v({__name:"DailyActivities",setup(o){const l=u([{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]);return(i,y)=>{const n=_("vue-feather");return r(),h(g,{class:"w-100"},{default:t(()=>[s(f,null,{default:t(()=>[e("div",ge,[xe,s(C),e("div",be,[s(P,{bottom:"",left:""},{activator:t(({props:c})=>[s(z,F({icon:"",color:"inherit"},c),{default:t(()=>[s(n,{type:"more-horizontal",size:"20"})]),_:2},1040)]),default:t(()=>[s(J,null,{default:t(()=>[(r(!0),N(j,null,W(l.value,(c,x)=>(r(),h(Y,{key:x},{default:t(()=>[s(E,null,{default:t(()=>[a(Q(c.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),s(R,{class:"theme-timeline"},{default:t(()=>[s(d,{"dot-color":"success","fill-dot":"",size:"x-small"},{opposite:t(()=>[ve]),default:t(()=>[s(m,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:t(()=>[a("Meeting with John ")]),_:1})]),_:1}),s(d,{"dot-color":"primary","fill-dot":"",size:"x-small"},{opposite:t(()=>[we]),default:t(()=>[s(m,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:t(()=>[a("Payment received of $385.90 ")]),_:1})]),_:1}),s(d,{"dot-color":"secondary","fill-dot":"",size:"x-small"},{opposite:t(()=>[ye]),default:t(()=>[s(m,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:t(()=>[a("Project Meeting ")]),_:1})]),_:1}),s(d,{"dot-color":"warning","fill-dot":"",size:"x-small"},{opposite:t(()=>[ke]),default:t(()=>[s(m,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:t(()=>[a("New Sale recorded #ML-3467 ")]),_:1})]),_:1}),s(d,{"dot-color":"error","fill-dot":"",size:"x-small"},{opposite:t(()=>[Ve]),default:t(()=>[s(m,{class:"text-subtitle-2 font-weight-medium text-grey-darken-1"},{default:t(()=>[a("Payment was made to Michael Anderson ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Oe as B,Te as T,ze as _,Me as a,Ae as b};
