import{_ as A}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-c8bfd6cb.js";import{_ as B,T as H,b as J,a as O,B as F}from"./DailyActivities.vue_vue_type_script_setup_true_lang-6d407175.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{r as s,o as u,c as f,w as a,a as e,b as t,d as h,H as K,I,e as g,g as _,C as k,J as j,K as E,u as v,f as M,i as L,F as z,n as N,t as x}from"./index-5b5a2bf9.js";import{_ as R}from"./WeeklyStats.vue_vue_type_script_setup_true_lang-0ad50d91.js";import{_ as U}from"./MedicalProBranding.vue_vue_type_script_setup_true_lang-fab11374.js";const W={},P=d=>(K("data-v-005a5148"),d=d(),I(),d),q=P(()=>t("img",{src:B,class:"bg-img-1"},null,-1)),G=P(()=>t("h2",{class:"title text-h6 overlay-title font-weight-medium"},"Congratulation Julia",-1)),Q={class:"title text-h5 mt-4 font-weight-bold d-flex align-end"},X={class:"text-subtitle-1 ml-2 d-flex align-center font-weight-medium"};function Y(d,n){const c=s("vue-feather"),i=s("v-btn"),r=s("v-card-text"),o=s("v-card");return u(),f(o,{class:"position-relative overflow-hidden"},{default:a(()=>[q,e(r,null,{default:a(()=>[G,t("h2",Q,[h(" $39,358 "),t("span",X,[e(c,{type:"arrow-up-left",size:"18"}),h("+9%")])]),e(i,{color:"primary",class:"mt-8"},{default:a(()=>[h(" Download ")]),_:1})]),_:1})]),_:1})}const Z=C(W,[["render",Y],["__scopeId","data-v-005a5148"]]),tt={},et={class:"d-flex align-start"},st=t("h2",{class:"title text-h6 font-weight-medium mt-1"},"Purchases",-1),at={class:"ml-auto"},ot=t("div",{class:"mt-9"},[t("h2",{class:"title font-weight-bold text-h5"},"2,367"),t("span",{class:"text-subtitle-1 font-weight-medium text-medium-emphasis"},"Monthly Sales")],-1);function nt(d,n){const c=s("v-spacer"),i=s("vue-feather"),r=s("v-btn"),o=s("v-card-text"),l=s("v-card");return u(),f(l,null,{default:a(()=>[e(o,null,{default:a(()=>[t("div",et,[st,e(c),t("div",at,[e(r,{color:"secondary",icon:""},{default:a(()=>[e(i,{type:"shopping-bag"})]),_:1})])]),ot]),_:1})]),_:1})}const lt=C(tt,[["render",nt]]),ct={},it={class:"d-flex align-start"},rt=t("h2",{class:"title text-h6 font-weight-medium mt-1"},"Total Earnings",-1),_t={class:"ml-auto"},dt=t("div",{class:"mt-9"},[t("h2",{class:"title font-weight-bold text-h5"},"$93,438.78"),t("span",{class:"text-subtitle-1 font-weight-medium text-medium-emphasis"},"Monthly Revenue")],-1);function mt(d,n){const c=s("v-spacer"),i=s("vue-feather"),r=s("v-btn"),o=s("v-card-text"),l=s("v-card");return u(),f(l,null,{default:a(()=>[e(o,null,{default:a(()=>[t("div",it,[rt,e(c),t("div",_t,[e(r,{color:"primary",icon:""},{default:a(()=>[e(i,{type:"dollar-sign"})]),_:1})])]),dt]),_:1})]),_:1})}const ut=C(ct,[["render",mt]]),S={series:[{name:"Earnings",data:[0,5,6,8,25,9,11,24]},{name:"Expense",data:[0,3,1,2,8,1,5,1]}],chartOptions:{colors:["#fb9678","#03c9d7"],fill:{type:"solid",opacity:1},chart:{toolbar:{show:!1},type:"line",foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",height:300},dataLabels:{enabled:!1},markers:{size:4,border:1},legend:{show:!1},xaxis:{categories:["16/08","17/08","18/08","19/08","20/08","21/08","22/08","23/08"]},grid:{show:!0,borderColor:"rgba(0, 0, 0, .2)",color:"#777e89",strokeDashArray:2,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},stroke:{curve:"smooth",width:3},tooltip:{x:{format:"dd/MM/yy HH:mm"},theme:"dark"}}},ht={class:"d-sm-flex align-start"},pt=t("div",null,[t("h2",{class:"title text-h6 font-weight-medium"},"Revenue Updates")],-1),ft={class:"ml-auto"},vt=t("div",{class:"d-flex justify-center"},[t("div",{class:"d-flex align-center text-primary px-2"},[t("span",{class:"text-overline"},[t("i",{class:"mdi mdi-brightness-1 mx-1"})]),t("span",{class:"font-weight-regular"},"Earnings")]),t("div",{class:"d-flex align-center px-2 text-secondary"},[t("span",{class:"text-overline"},[t("i",{class:"mdi mdi-brightness-1 mx-1"})]),t("span",{class:"font-weight-regular"},"Expense")])],-1),gt=g({__name:"RevenueUpdates",setup(d){const n=_("March"),c=_(["March","April","May","June"]),i=_(!1);return k(()=>{setTimeout(()=>i.value=!0,10)}),(r,o)=>{const l=s("v-spacer"),p=s("v-select"),b=s("apexchart"),w=s("v-card-text"),y=s("v-card");return u(),f(y,null,{default:a(()=>[e(w,null,{default:a(()=>[t("div",ht,[pt,e(l),t("div",ft,[e(p,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=$=>n.value=$),items:c.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),j(t("div",null,[e(b,{type:"line",height:"300px",options:v(S).chartOptions,series:v(S).series},null,8,["options","series"])],512),[[E,i.value]]),vt]),_:1})]),_:1})}}}),V={series:[{name:"Monthly Earnings",data:[6,10,9,11,9,10,12,10,9,11,9,10,12]}],chartOptions:{chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",type:"bar",height:45,sparkline:{enabled:!0}},colors:["rgba(255,255,255,0.5)"],marker:{size:0},tooltip:{theme:"dark"},grid:{show:!1},stroke:{show:!0,width:2,curve:"smooth",colors:["transparent"]},plotOptions:{bar:{horizontal:!1,startingShape:"flat",endingShape:"flat",columnWidth:"30%",barHeight:"100%"}}}},xt=t("h3",{class:"title text-h6 font-weight-medium text-white"},"Monthly Earnings",-1),bt={class:"mt-4"},wt={class:"title text-h5 text-white mt-6 font-weight-medium d-flex align-items-end"},yt={class:"text-subtitle-1 ml-2 d-flex align-center font-weight-medium"},$t=g({__name:"MonthlyEarnings",setup(d){_("March"),_(["March","April","May","June"]);const n=_(!1);return k(()=>{setTimeout(()=>n.value=!0,10)}),(c,i)=>{const r=s("apexchart"),o=s("vue-feather"),l=s("v-card-text"),p=s("v-card");return u(),f(p,{class:"mb-7 bg-secondary"},{default:a(()=>[e(l,null,{default:a(()=>[xt,j(t("div",bt,[e(r,{type:"bar",height:"45px",options:v(V).chartOptions,series:v(V).series},null,8,["options","series"])],512),[[E,n.value]]),t("h2",wt,[h(" $39,358 "),t("span",yt,[e(o,{type:"arrow-up-left",size:"18"}),h("+9 this week")])])]),_:1})]),_:1})}}}),D={series:[{name:"Customers",data:[1,19,3,13,2,19]}],chartOptions:{chart:{toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",type:"line",height:55,sparkline:{enabled:!0}},colors:["rgb(255,255,255)"],marker:{size:0},tooltip:{theme:"dark"},grid:{show:!1},stroke:{show:!0,width:2,curve:"smooth"}}},Mt=t("h2",{class:"title text-h6 font-weight-medium text-white"},"Customers",-1),Ct={class:"mt-4"},kt={class:"title text-h5 text-white mt-6 font-weight-medium d-flex align-end"},jt={class:"text-subtitle-1 ml-2 d-flex align-center font-weight-medium"},Et=g({__name:"Customers",setup(d){const n=_(!1);return k(()=>{setTimeout(()=>n.value=!0,10)}),(c,i)=>{const r=s("apexchart"),o=s("vue-feather"),l=s("v-card-text"),p=s("v-card");return u(),f(p,{class:"position-relative bg-primary"},{default:a(()=>[e(l,null,{default:a(()=>[Mt,j(t("div",Ct,[e(r,{type:"line",height:"55px",options:v(D).chartOptions,series:v(D).series},null,8,["options","series"])],512),[[E,n.value]]),t("h2",kt,[h(" $39,358 "),t("span",jt,[e(o,{type:"arrow-up-left",size:"18"}),h("+9 this week")])])]),_:1})]),_:1})}}}),St={class:"d-sm-flex align-center"},Vt=t("div",null,[t("h2",{class:"title text-h6 font-weight-medium"},"Product Performance")],-1),Dt={class:"ml-auto"},zt=t("thead",null,[t("tr",null,[t("th",{class:"font-weight-medium text-subtitle-1"},"Assigned"),t("th",{class:"font-weight-medium text-subtitle-1"},"Name"),t("th",{class:"font-weight-medium text-subtitle-1"},"Priority"),t("th",{class:"font-weight-medium text-subtitle-1"},"Budget")])],-1),Pt={class:"d-flex align-center"},Tt=["src","alt"],At={class:"mx-3"},Bt={class:"font-weight-bold text-subtitle-1 text-no-wrap"},Ht={class:"font-weight-medium text-no-wrap text-body-2 text-grey-darken-1"},Jt=g({__name:"ProductPerformance",setup(d){const n=_("March"),c=_(["March","April","May","June"]),i=_([{img:"/1.jpg",activestate:"",leadname:"Sunil Joshi",leademail:"Web Designer",projectname:"Elite Admin",statuscolor:"blue lighten-1 white--text",statustext:"Low",money:"$3.9K"},{img:"/2.jpg",activestate:"",leadname:"Andrew",leademail:"Project Manager",projectname:"Real Homes",statuscolor:"info",statustext:"Medium",money:"$23.9K"},{img:"/3.jpg",activestate:"",leadname:"Bhavesh patel",leademail:"Developer",projectname:"MedicalPro Theme",statuscolor:"warning",statustext:"High",money:"$12.9K"},{img:"/4.jpg",activestate:"",leadname:"Nirav Joshi",leademail:"Frontend Eng",projectname:"Elite Admin",statuscolor:"error",statustext:"Low",money:"$10.9K"},{img:"/5.jpg",activestate:"",leadname:"Micheal Doe",leademail:"Content Writer",projectname:"Helping Hands",statuscolor:"success",statustext:"Low",money:"$12.9K"}]);return(r,o)=>{const l=s("v-spacer"),p=s("v-select"),b=s("v-avatar"),w=s("v-chip"),y=s("v-table"),$=s("v-card-text"),T=s("v-card");return u(),f(T,{flat:"",class:"w-100"},{default:a(()=>[e($,null,{default:a(()=>[t("div",St,[Vt,e(l),t("div",Dt,[e(p,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=m=>n.value=m),items:c.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),e(y,{class:"month-table mt-5"},{default:a(()=>[zt,t("tbody",null,[(u(!0),M(z,null,L(i.value,m=>(u(),M("tr",{key:m.leadname,class:N([m.activestate,"month-item"])},[t("td",null,[t("div",Pt,[e(b,{size:"40"},{default:a(()=>[t("img",{src:`/assets/images/users/${m.img}`,alt:m.img,width:"40"},null,8,Tt)]),_:2},1024),t("div",At,[t("h4",Bt,x(m.leadname),1)])])]),t("td",null,[t("h5",Ht,x(m.projectname),1)]),t("td",null,[e(w,{class:"ma-2",color:m.statuscolor,size:"small",label:""},{default:a(()=>[h(x(m.statustext),1)]),_:2},1032,["color"])]),t("td",null,[t("h4",null,x(m.money),1)])],2))),128))])]),_:1})]),_:1})]),_:1})}}}),Rt=g({__name:"Modern",setup(d){const n=_({title:"Modern"}),c=_([{text:"Dashboard",disabled:!1,to:"#"},{text:"Modern",disabled:!0}]);return(i,r)=>{const o=s("v-col"),l=s("v-row");return u(),M(z,null,[e(A,{title:n.value.title,breadcrumbs:c.value},null,8,["title","breadcrumbs"]),e(l,null,{default:a(()=>[e(o,{cols:"12",sm:"12",lg:"5"},{default:a(()=>[e(Z)]),_:1}),e(o,{cols:"12",sm:"12",lg:"7"},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{lg:"5"},{default:a(()=>[e(lt)]),_:1}),e(o,{lg:"7"},{default:a(()=>[e(ut)]),_:1})]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"8"},{default:a(()=>[e(gt)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:a(()=>[e($t),e(Et)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:a(()=>[e(H)]),_:1}),e(o,{cols:"12",sm:"12",lg:"8"},{default:a(()=>[e(Jt)]),_:1}),e(o,{cols:"12",sm:"12",lg:"5"},{default:a(()=>[e(J)]),_:1}),e(o,{cols:"12",sm:"12",lg:"7",class:"d-flex align-stretch"},{default:a(()=>[e(O)]),_:1}),e(o,{cols:"12",lg:"4"},{default:a(()=>[e(F)]),_:1}),e(o,{cols:"12",lg:"4"},{default:a(()=>[e(R)]),_:1}),e(o,{cols:"12",lg:"4"},{default:a(()=>[e(U)]),_:1})]),_:1})],64)}}});export{Rt as default};
