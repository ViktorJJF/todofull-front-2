import{e as x,i as A,r as a,o as _,c as M,w as s,a as e,b as t,d as g,t as p,u as $,H as B,I as P,_ as f,g as v,D as V,f as b,j as y,J as W,K as E,F as j,k as H,n as K}from"./index-a97f079d.js";import{_ as N,T as I,a as L,B as R,D as z}from"./DailyActivities-36da13cf.js";import{B as F}from"./BaseBreadcrumb-1d17dd41.js";import{W as J}from"./WeeklyStats-e314fe7d.js";const C=r=>(B("data-v-92e4eee1"),r=r(),P(),r),O=C(()=>t("img",{src:N,class:"bg-img-1"},null,-1)),U={class:"h3 title overlay-title font-weight-medium mb-1"},q=C(()=>t("br",null,null,-1)),G=x({__name:"WelcomeCard",setup(r){const n=A();return(d,u)=>{const i=a("v-btn"),o=a("v-card-text"),c=a("v-card");return _(),M(c,null,{default:s(()=>[O,e(o,null,{default:s(()=>{var m,h;return[t("h3",U,[g(" Hey "+p((h=(m=$(n).state.authModule)==null?void 0:m.user)==null?void 0:h.email)+", ",1),q,g("Download latest report ")]),e(i,{color:"secondary",class:"mt-4"},{default:s(()=>[g(" Download ")]),_:1})]}),_:1})]),_:1})}}});const Q=f(G,[["__scopeId","data-v-92e4eee1"],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/welcome-card/WelcomeCard.vue"]]),X={},Y={class:"d-flex align-start"},Z=t("h2",{class:"font-weight-medium title text-white mt-1"},"Earnings",-1),ee={class:"ml-auto"},te=t("div",{class:"mt-4"},[t("h2",{class:"text-white text-h5"},"$93,438.78"),t("span",{class:"text-white op-5 subtitle-1"},"Monthly revenue")],-1);function se(r,n){const d=a("v-spacer"),u=a("vue-feather"),i=a("v-btn"),o=a("v-card-text"),c=a("v-card");return _(),M(c,{class:"bg-primary"},{default:s(()=>[e(o,null,{default:s(()=>[t("div",Y,[Z,e(d),t("div",ee,[e(i,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:s(()=>[e(u,{type:"dollar-sign",class:"text-dark"})]),_:1})])]),te]),_:1})]),_:1})}const ae=f(X,[["render",se],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/earnings/TheEarnings.vue"]]),D={series:[{name:"Monthly Sales",data:[35,60,30,55,40]}],chartOptions:{colors:["#03c9d7"],fill:{colors:"#03c9d7",opacity:.05,type:"solid"},chart:{type:"area",height:75,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",sparkline:{enabled:!0}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},oe={class:"d-flex align-start"},le=t("div",null,[t("span",{class:"text-subtitle-1 text-grey-darken-1 font-weight-medium"},"Monthly revenue"),t("h2",{class:"title font-weight-medium"},"3246")],-1),ne={class:"ml-auto"},ce=x({__name:"MonthlyRevenue",setup(r){const n=v(!1);return V(()=>{setTimeout(()=>n.value=!0,10)}),(d,u)=>{const i=a("v-spacer"),o=a("vue-feather"),c=a("v-btn"),m=a("v-card-text"),h=a("apexchart"),w=a("v-card");return _(),b(j,null,[y(" ------------------------------------ "),y(" html "),y(" ------------------------------------ "),e(w,{class:"overflow-hidden w-100"},{default:s(()=>[e(m,{class:"pa-7"},{default:s(()=>[t("div",oe,[le,e(i),t("div",ne,[e(c,{icon:"",class:"btn-custom-sm",color:"secondary",fab:"",small:""},{default:s(()=>[e(o,{type:"shopping-bag",class:"white--text"})]),_:1})])])]),_:1}),W(t("div",null,[e(h,{type:"area",height:"75px",options:$(D).chartOptions,series:$(D).series},null,8,["options","series"])],512),[[E,n.value]])]),_:1})],2112)}}}),re=f(ce,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/monthly-revenue/MonthlyRevenue.vue"]]),de={class:"d-sm-flex align-center"},ie=t("div",null,[t("h2",{class:"title text-h6 font-weight-medium"},"Product Performance")],-1),_e={class:"ml-auto"},ue=t("thead",null,[t("tr",null,[t("th",{class:"font-weight-medium text-subtitle-1"},"Assigned"),t("th",{class:"font-weight-medium text-subtitle-1"},"Name"),t("th",{class:"font-weight-medium text-subtitle-1"},"Priority"),t("th",{class:"font-weight-medium text-subtitle-1"},"Budget")])],-1),me={class:"d-flex align-center"},he=["src","alt"],pe={class:"mx-3"},ve={class:"font-weight-bold text-no-wrap"},fe={class:"text-no-wrap font-weight-regular text-body-2 text-grey-darken-1"},ge={class:"font-weight-medium text-no-wrap text-body-2 text-grey-darken-1"},be=x({__name:"ProductMonthTable",setup(r){const n=v("March"),d=v(["March","April","May","June"]),u=v([{img:"1.jpg",activestate:"",leadname:"Sunil Joshi",leademail:"Web Designer",projectname:"Elite Admin",statuscolor:"blue lighten-1 white--text",statustext:"Low",money:"$3.9K"},{img:"2.jpg",activestate:"",leadname:"Andrew",leademail:"Project Manager",projectname:"Real Homes",statuscolor:"info",statustext:"Medium",money:"$23.9K"},{img:"3.jpg",activestate:"",leadname:"Bhavesh patel",leademail:"Developer",projectname:"MedicalPro Theme",statuscolor:"warning",statustext:"High",money:"$12.9K"},{img:"4.jpg",activestate:"",leadname:"Nirav Joshi",leademail:"Frontend Eng",projectname:"Elite Admin",statuscolor:"error",statustext:"Low",money:"$10.9K"},{img:"5.jpg",activestate:"",leadname:"Micheal Doe",leademail:"Content Writer",projectname:"Helping Hands",statuscolor:"success",statustext:"Low",money:"$12.9K"}]);return(i,o)=>{const c=a("v-spacer"),m=a("v-select"),h=a("v-avatar"),w=a("v-chip"),T=a("v-table"),k=a("v-card-text"),S=a("v-card");return _(),M(S,{flat:"",class:"w-100"},{default:s(()=>[e(k,null,{default:s(()=>[t("div",de,[ie,e(c),t("div",_e,[e(m,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l),items:d.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),e(T,{class:"month-table mt-5"},{default:s(()=>[ue,t("tbody",null,[(_(!0),b(j,null,H(u.value,l=>(_(),b("tr",{key:l.leadname,class:K([l.activestate,"month-item"])},[t("td",null,[t("div",me,[e(h,{size:"40"},{default:s(()=>[t("img",{src:`/assets/images/users/${l.img}`,alt:l.img,width:"40"},null,8,he)]),_:2},1024),t("div",pe,[t("h4",ve,p(l.leadname),1),t("h6",fe,p(l.leademail),1)])])]),t("td",null,[t("h5",ge,p(l.projectname),1)]),t("td",null,[e(w,{class:"ma-2",color:l.statuscolor,size:"small",label:""},{default:s(()=>[g(p(l.statustext),1)]),_:2},1032,["color"])]),t("td",null,[t("h4",null,p(l.money),1)])],2))),128))])]),_:1})]),_:1})]),_:1})}}}),xe=f(be,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/project-month-table/ProductMonthTable.vue"]]),we=x({__name:"Analytical",setup(r){const n=v({title:"Analytical"}),d=v([{text:"Dashboard",disabled:!1,to:"#"},{text:"Analytical",disabled:!0}]);return(u,i)=>{const o=a("v-col"),c=a("v-row");return _(),b(j,null,[e(F,{title:n.value.title,breadcrumbs:d.value},null,8,["title","breadcrumbs"]),e(c,null,{default:s(()=>[e(o,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[e(Q),e(c,{class:"mt-4"},{default:s(()=>[e(o,{cols:"12",sm:"6",lg:"6",class:""},{default:s(()=>[e(ae)]),_:1}),e(o,{cols:"12",sm:"6",lg:"6",class:""},{default:s(()=>[e(re)]),_:1})]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[e(I)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(L)]),_:1}),e(o,{cols:"12",sm:"12",lg:"8"},{default:s(()=>[e(xe)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(R)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(J)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(z)]),_:1})]),_:1})],64)}}}),De=f(we,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/analytical/Analytical.vue"]]);export{De as default};
