import{_ as f,e as x,i as A,r as s,o as _,c as M,w as a,a as t,b as e,d as g,t as p,u as $,E as B,G as E,g as v,H as P,f as b,j as y,I as V,J as W,F as j,k as H,n as N}from"./index-97a930ea.js";import{_ as I,T as K,a as L,B as R,D as z}from"./DailyActivities-4a214d10.js";import{B as F}from"./BaseBreadcrumb-de81d33c.js";import{W as J}from"./WeeklyStats-4723110f.js";const C=r=>(B("data-v-ac23c44c"),r=r(),E(),r),O=C(()=>e("img",{src:I,class:"bg-img-1"},null,-1)),G={class:"h3 title overlay-title font-weight-medium mb-1"},U=C(()=>e("br",null,null,-1)),q=x({__name:"WelcomeCard",setup(r){const n=A();return(d,u)=>{const i=s("v-btn"),o=s("v-card-text"),c=s("v-card");return _(),M(c,null,{default:a(()=>[O,t(o,null,{default:a(()=>{var m,h;return[e("h3",G,[g(" Hey "+p((h=(m=$(n).state.authModule)==null?void 0:m.user)==null?void 0:h.email)+", ",1),U,g("Download latest report ")]),t(i,{color:"secondary",class:"mt-4"},{default:a(()=>[g(" Download ")]),_:1})]}),_:1})]),_:1})}}}),Q=f(q,[["__scopeId","data-v-ac23c44c"],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/welcome-card/WelcomeCard.vue"]]),X={},Y={class:"d-flex align-start"},Z=e("h2",{class:"font-weight-medium title text-white mt-1"},"Earnings",-1),tt={class:"ml-auto"},et=e("div",{class:"mt-4"},[e("h2",{class:"text-white text-h5"},"$93,438.78"),e("span",{class:"text-white op-5 subtitle-1"},"Monthly revenue")],-1);function at(r,n){const d=s("v-spacer"),u=s("vue-feather"),i=s("v-btn"),o=s("v-card-text"),c=s("v-card");return _(),M(c,{class:"bg-primary"},{default:a(()=>[t(o,null,{default:a(()=>[e("div",Y,[Z,t(d),e("div",tt,[t(i,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:a(()=>[t(u,{type:"dollar-sign",class:"text-dark"})]),_:1})])]),et]),_:1})]),_:1})}const st=f(X,[["render",at],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/earnings/TheEarnings.vue"]]),D={series:[{name:"Monthly Sales",data:[35,60,30,55,40]}],chartOptions:{colors:["#03c9d7"],fill:{colors:"#03c9d7",opacity:.05,type:"solid"},chart:{type:"area",height:75,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",sparkline:{enabled:!0}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},ot={class:"d-flex align-start"},lt=e("div",null,[e("span",{class:"text-subtitle-1 text-grey-darken-1 font-weight-medium"},"Monthly revenue"),e("h2",{class:"title font-weight-medium"},"3246")],-1),nt={class:"ml-auto"},ct=x({__name:"MonthlyRevenue",setup(r){const n=v(!1);return P(()=>{setTimeout(()=>n.value=!0,10)}),(d,u)=>{const i=s("v-spacer"),o=s("vue-feather"),c=s("v-btn"),m=s("v-card-text"),h=s("apexchart"),w=s("v-card");return _(),b(j,null,[y(" ------------------------------------ "),y(" html "),y(" ------------------------------------ "),t(w,{class:"overflow-hidden w-100"},{default:a(()=>[t(m,{class:"pa-7"},{default:a(()=>[e("div",ot,[lt,t(i),e("div",nt,[t(c,{icon:"",class:"btn-custom-sm",color:"secondary",fab:"",small:""},{default:a(()=>[t(o,{type:"shopping-bag",class:"white--text"})]),_:1})])])]),_:1}),V(e("div",null,[t(h,{type:"area",height:"75px",options:$(D).chartOptions,series:$(D).series},null,8,["options","series"])],512),[[W,n.value]])]),_:1})],2112)}}}),rt=f(ct,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/monthly-revenue/MonthlyRevenue.vue"]]),dt={class:"d-sm-flex align-center"},it=e("div",null,[e("h2",{class:"title text-h6 font-weight-medium"},"Product Performance")],-1),_t={class:"ml-auto"},ut=e("thead",null,[e("tr",null,[e("th",{class:"font-weight-medium text-subtitle-1"},"Assigned"),e("th",{class:"font-weight-medium text-subtitle-1"},"Name"),e("th",{class:"font-weight-medium text-subtitle-1"},"Priority"),e("th",{class:"font-weight-medium text-subtitle-1"},"Budget")])],-1),mt={class:"d-flex align-center"},ht=["src","alt"],pt={class:"mx-3"},vt={class:"font-weight-bold text-no-wrap"},ft={class:"text-no-wrap font-weight-regular text-body-2 text-grey-darken-1"},gt={class:"font-weight-medium text-no-wrap text-body-2 text-grey-darken-1"},bt=x({__name:"ProductMonthTable",setup(r){const n=v("March"),d=v(["March","April","May","June"]),u=v([{img:"1.jpg",activestate:"",leadname:"Sunil Joshi",leademail:"Web Designer",projectname:"Elite Admin",statuscolor:"blue lighten-1 white--text",statustext:"Low",money:"$3.9K"},{img:"2.jpg",activestate:"",leadname:"Andrew",leademail:"Project Manager",projectname:"Real Homes",statuscolor:"info",statustext:"Medium",money:"$23.9K"},{img:"3.jpg",activestate:"",leadname:"Bhavesh patel",leademail:"Developer",projectname:"MedicalPro Theme",statuscolor:"warning",statustext:"High",money:"$12.9K"},{img:"4.jpg",activestate:"",leadname:"Nirav Joshi",leademail:"Frontend Eng",projectname:"Elite Admin",statuscolor:"error",statustext:"Low",money:"$10.9K"},{img:"5.jpg",activestate:"",leadname:"Micheal Doe",leademail:"Content Writer",projectname:"Helping Hands",statuscolor:"success",statustext:"Low",money:"$12.9K"}]);return(i,o)=>{const c=s("v-spacer"),m=s("v-select"),h=s("v-avatar"),w=s("v-chip"),T=s("v-table"),k=s("v-card-text"),S=s("v-card");return _(),M(S,{flat:"",class:"w-100"},{default:a(()=>[t(k,null,{default:a(()=>[e("div",dt,[it,t(c),e("div",_t,[t(m,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l),items:d.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),t(T,{class:"month-table mt-5"},{default:a(()=>[ut,e("tbody",null,[(_(!0),b(j,null,H(u.value,l=>(_(),b("tr",{key:l.leadname,class:N([l.activestate,"month-item"])},[e("td",null,[e("div",mt,[t(h,{size:"40"},{default:a(()=>[e("img",{src:`/assets/images/users/${l.img}`,alt:l.img,width:"40"},null,8,ht)]),_:2},1024),e("div",pt,[e("h4",vt,p(l.leadname),1),e("h6",ft,p(l.leademail),1)])])]),e("td",null,[e("h5",gt,p(l.projectname),1)]),e("td",null,[t(w,{class:"ma-2",color:l.statuscolor,size:"small",label:""},{default:a(()=>[g(p(l.statustext),1)]),_:2},1032,["color"])]),e("td",null,[e("h4",null,p(l.money),1)])],2))),128))])]),_:1})]),_:1})]),_:1})}}}),xt=f(bt,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/dashboardComponents/analytical/project-month-table/ProductMonthTable.vue"]]),wt=x({__name:"Analytical",setup(r){const n=v({title:"Analytical"}),d=v([{text:"Dashboard",disabled:!1,to:"#"},{text:"Analytical",disabled:!0}]);return(u,i)=>{const o=s("v-col"),c=s("v-row");return _(),b(j,null,[t(F,{title:n.value.title,breadcrumbs:d.value},null,8,["title","breadcrumbs"]),t(c,null,{default:a(()=>[t(o,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[t(Q),t(c,{class:"mt-4"},{default:a(()=>[t(o,{cols:"12",sm:"6",lg:"6",class:""},{default:a(()=>[t(st)]),_:1}),t(o,{cols:"12",sm:"6",lg:"6",class:""},{default:a(()=>[t(rt)]),_:1})]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"6"},{default:a(()=>[t(K)]),_:1}),t(o,{cols:"12",sm:"12",lg:"4"},{default:a(()=>[t(L)]),_:1}),t(o,{cols:"12",sm:"12",lg:"8"},{default:a(()=>[t(xt)]),_:1}),t(o,{cols:"12",sm:"12",lg:"4"},{default:a(()=>[t(R)]),_:1}),t(o,{cols:"12",sm:"12",lg:"4"},{default:a(()=>[t(J)]),_:1}),t(o,{cols:"12",sm:"12",lg:"4"},{default:a(()=>[t(z)]),_:1})]),_:1})],64)}}}),Dt=f(wt,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/dashboards/analytical/Analytical.vue"]]);export{Dt as default};
