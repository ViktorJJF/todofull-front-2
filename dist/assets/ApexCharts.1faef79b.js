import{m as i,s as p,o as l,c as h,w as a,a as e,u as s,r as y,ae as T,n as F,af as z,ag as P,b as c,e as J,F as R}from"./index.697a154f.js";import{_ as E}from"./BaseBreadcrumb.da36eaea.js";import{_ as x}from"./BaseCard.ef377dab.js";function f(r,o,n){for(var t=0,u=[];t<o;){var _=Math.floor(Math.random()*(n.max-n.min+1))+n.min,L=Math.floor(Math.random()*(75-15+1))+15;u.push([r,_,L]),r+=864e5,t++}return u}function m(r,o){for(var n=0,t=[];n<r;){var u="w"+(n+1).toString(),_=Math.floor(Math.random()*(o.max-o.min+1))+o.min;t.push({x:u,y:_}),n++}return t}const d=["#ee8a6a","#0cb9c5","#fec90f","#05b187","#fc4b6c"],g={series:[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}],chartOptions:{chart:{height:350,zoom:{enabled:!1}},colors:d,dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"",align:"left"},grid:{row:{opacity:.5},borderColor:"rgba(0,0,0,0.1)"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},yaxis:{labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},tooltip:{theme:"dark"}}},b={series:[{name:"Open Rate",data:[0,5,6,8,25,9,8,24]},{name:"Recurring Payments",data:[0,3,1,2,8,1,5,1]}],chartOptions:{grid:{show:!0,borderColor:"rgba(0, 0, 0, .3)",strokeDashArray:3,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},dataLabels:{enabled:!1},chart:{toolbar:{show:!0}},stroke:{curve:"smooth",width:2},colors:d,fill:{type:"gradient",opacity:["0.1","0.1"]},xaxis:{categories:["1","2","3","4","5","6","7","8"],labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},yaxis:{labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},markers:{size:3},tooltip:{x:{format:"dd/MM/yy HH:mm"},theme:"dark"},legend:{show:!1}}},w={series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],chartOptions:{colors:d,plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},yaxis:{title:{text:"$ (thousands)"},labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},fill:{opacity:1},grid:{borderColor:"rgba(0,0,0,0.1)"},tooltip:{theme:"dark",y:{formatter:function(r){return"$ "+r+" thousands"}}}}},C={series:[{data:[400,430,448,470,540,580,690,1100,1200,1380]}],chartOptions:{chart:{width:"100%",height:350},colors:d,plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"],labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},yaxis:{labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},grid:{borderColor:"rgba(0,0,0,0.1)"},tooltip:{theme:"dark"}}},D={series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],chartOptions:{colors:d,chart:{stacked:!1},stroke:{width:[0,2,5],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},legend:{show:!1},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},markers:{size:0},xaxis:{categories:["10","20","30","40","50","60","70","80"],labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},grid:{borderColor:"rgba(0,0,0,0.1)"},yaxis:{title:{text:"Points"},min:0,labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(r){return typeof r!="undefined"?r.toFixed(0)+" points":r}}}}},M={series:[{data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}],chartOptions:{xaxis:{type:"datetime",labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},yaxis:{tooltip:{enabled:!0},labels:{style:{cssClass:"grey--text lighten-2--text fill-color"}}},tooltip:{theme:"dark"},grid:{borderColor:"rgba(0,0,0,0.1)"},plotOptions:{candlestick:{colors:{upward:"#ee8a6a",downward:"#0cb9c5"},wick:{useFillColor:!0}}}}},A={series:[{name:"Product1",data:f(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product2",data:f(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chartOptions:{colors:d,dataLabels:{enabled:!1},fill:{type:"gradient"},xaxis:{tickAmount:12,type:"datetime",labels:{rotate:0}},grid:{borderColor:"rgba(0,0,0,0.1)"},yaxis:{max:70},tooltip:{theme:"dark"},theme:{palette:"palette2"}}},O={series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"SAMPLE B",data:[[6.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"SAMPLE C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}],chartOptions:{colors:d,chart:{zoom:{enabled:!0,type:"xy"}},xaxis:{tickAmount:10},yaxis:{tickAmount:7},grid:{borderColor:"rgba(0,0,0,0.1)"},tooltip:{theme:"dark"}}},k={series:[{name:"Metric1",data:m(18,{min:0,max:90})},{name:"Metric2",data:m(18,{min:0,max:90})},{name:"Metric3",data:m(18,{min:0,max:90})},{name:"Metric4",data:m(18,{min:0,max:90})},{name:"Metric5",data:m(18,{min:0,max:90})},{name:"Metric6",data:m(18,{min:0,max:90})},{name:"Metric7",data:m(18,{min:0,max:90})},{name:"Metric8",data:m(18,{min:0,max:90})},{name:"Metric9",data:m(18,{min:0,max:90})}],chartOptions:{dataLabels:{enabled:!1},colors:["#1e88e5"],tooltip:{theme:"dark"}}},v={series:[44,55,13,43],chartOptions:{labels:["Team A","Team B","Team C","Team D"],colors:d,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}},S={series:[50,40,30,10],chartOptions:{labels:["Other","Desktop","Tablet","Mobile"],dataLabels:{enabled:!1},grid:{padding:{left:0,right:0},borderColor:"rgba(0,0,0,0.5)"},plotOptions:{pie:{donut:{size:"86px",labels:{show:!0,name:{show:!0,fontSize:"18px",color:void 0,offsetY:-10},value:{show:!0,color:"#0cb9c5"},total:{show:!0,label:"Our Visitors",color:"#fec90f"}}}}},stroke:{width:1,colors:"rgba(0,0,0,0.1)"},legend:{show:!1},colors:["#0cb9c5","#fec90f","#eceff1","#ee8a6a"],tooltip:{fillSeriesColor:!1},responsive:[{breakpoint:480,options:{chart:{height:250}}}]}},$={series:[44,55,67,83],chartOptions:{colors:d,plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(){return 249}}}}},labels:["Apples","Oranges","Bananas","Berries"],tooltip:{theme:"dark"}}},B={series:[{name:"Series 1",data:[80,50,30,40,100,20]}],chartOptions:{colors:d,labels:["January","February","March","April","May","June"],tooltip:{theme:"dark"}}},H=i({__name:"ApexLineCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Line Chart"},{default:a(()=>[e(t,{type:"line",height:"350",options:s(g).chartOptions,series:s(g).series},null,8,["options","series"])]),_:1})}}}),V=i({__name:"ApexColumnCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Column Chart"},{default:a(()=>[e(t,{type:"bar",height:"350",options:s(w).chartOptions,series:s(w).series},null,8,["options","series"])]),_:1})}}}),G=i({__name:"ApexLineAreaCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Line Area Chart"},{default:a(()=>[e(t,{type:"area",height:"350",options:s(b).chartOptions,series:s(b).series},null,8,["options","series"])]),_:1})}}}),N=i({__name:"ApexBarCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Bar Chart"},{default:a(()=>[e(t,{type:"bar",height:"350",options:s(C).chartOptions,series:s(C).series},null,8,["options","series"])]),_:1})}}}),K=i({__name:"ApexCandlestickCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Candle Chart"},{default:a(()=>[e(t,{type:"candlestick",height:"350",options:s(M).chartOptions,series:s(M).series},null,8,["options","series"])]),_:1})}}}),U=i({__name:"ApexMixedCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Mixed Chart"},{default:a(()=>[e(t,{type:"line",height:"350",options:s(D).chartOptions,series:s(D).series},null,8,["options","series"])]),_:1})}}}),W=i({__name:"Apex3DBubbleCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Bar Chart"},{default:a(()=>[e(t,{type:"bubble",height:"350",options:s(A).chartOptions,series:s(A).series},null,8,["options","series"])]),_:1})}}}),I=i({__name:"ApexScatterCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Column Chart"},{default:a(()=>[e(t,{type:"scatter",height:"350",options:s(O).chartOptions,series:s(O).series},null,8,["options","series"])]),_:1})}}}),Y=i({__name:"ApexHeatMapCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Heat Map Chart"},{default:a(()=>[e(t,{type:"heatmap",height:"350",options:s(k).chartOptions,series:s(k).series},null,8,["options","series"])]),_:1})}}}),j=i({__name:"ApexDonutCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Dount Chart"},{default:a(()=>[e(t,{type:"donut",height:"350",options:s(S).chartOptions,series:s(S).series},null,8,["options","series"])]),_:1})}}}),q=i({__name:"ApexPieCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Pie Chart"},{default:a(()=>[e(t,{type:"pie",height:"350",options:s(v).chartOptions,series:s(v).series},null,8,["options","series"])]),_:1})}}}),Q=i({__name:"ApexRadialBarCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Radial Chart"},{default:a(()=>[e(t,{type:"radialBar",height:"350",options:s($).chartOptions,series:s($).series},null,8,["options","series"])]),_:1})}}}),X=i({__name:"ApexRadarCharts",setup(r){return(o,n)=>{const t=p("apexchart");return l(),h(x,{heading:"Radar Chart"},{default:a(()=>[e(t,{type:"radar",height:"300",options:s(B).chartOptions,series:s(B).series},null,8,["options","series"])]),_:1})}}}),ae=i({__name:"ApexCharts",setup(r){const o=y(!1);T(()=>{setTimeout(()=>o.value=!0,10)});const n=y({title:"Apex Charts"}),t=y([{text:"Charts",disabled:!1,to:"#"},{text:"Apex Charts",disabled:!0}]);return(u,_)=>(l(),F(R,null,[e(E,{title:n.value.title,breadcrumbs:t.value},null,8,["title","breadcrumbs"]),z(e(J,null,{default:a(()=>[e(c,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[e(H)]),_:1}),e(c,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[e(V)]),_:1}),e(c,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[e(G)]),_:1}),e(c,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[e(N)]),_:1}),e(c,{cols:"12",sm:"12"},{default:a(()=>[e(K)]),_:1}),e(c,{cols:"12",sm:"12"},{default:a(()=>[e(U)]),_:1}),e(c,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[e(W)]),_:1}),e(c,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[e(I)]),_:1}),e(c,{cols:"12",sm:"12"},{default:a(()=>[e(Y)]),_:1}),e(c,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[e(j)]),_:1}),e(c,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[e(q)]),_:1}),e(c,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[e(Q)]),_:1}),e(c,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[e(X)]),_:1})]),_:1},512),[[P,o.value]])],64))}});export{ae as default};
