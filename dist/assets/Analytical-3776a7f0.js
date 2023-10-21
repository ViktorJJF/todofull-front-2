import{_ as A,a as B,T,B as V,b as E}from"./DailyActivities.vue_vue_type_script_setup_true_lang-47a0474d.js";import{e as g,r as a,o as d,c as x,w as s,a as t,b as e,d as f,t as p,u as w,j as H,H as K,I as P,g as v,C as I,J as L,K as N,f as y,i as W,F as M,n as z}from"./index-3fba6ee6.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as F}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-cbe058b9.js";import{_ as J}from"./WeeklyStats.vue_vue_type_script_setup_true_lang-ff5cf20d.js";const k=r=>(K("data-v-358c46da"),r=r(),P(),r),R=k(()=>e("img",{src:A,class:"bg-img-1"},null,-1)),O={class:"h3 title overlay-title font-weight-medium mb-1"},U=k(()=>e("br",null,null,-1)),q=g({__name:"WelcomeCard",setup(r){const n=H();return(_,m)=>{const i=a("v-btn"),o=a("v-card-text"),c=a("v-card");return d(),x(c,null,{default:s(()=>[R,t(o,null,{default:s(()=>{var u,h;return[e("h3",O,[f(" Hey "+p((h=(u=w(n).state.authModule)==null?void 0:u.user)==null?void 0:h.email)+", ",1),U,f("Download latest report ")]),t(i,{color:"secondary",class:"mt-4"},{default:s(()=>[f(" Download ")]),_:1})]}),_:1})]),_:1})}}});const G=j(q,[["__scopeId","data-v-358c46da"]]),Q={},X={class:"d-flex align-start"},Y=e("h2",{class:"font-weight-medium title text-white mt-1"},"Earnings",-1),Z={class:"ml-auto"},tt=e("div",{class:"mt-4"},[e("h2",{class:"text-white text-h5"},"$93,438.78"),e("span",{class:"text-white op-5 subtitle-1"},"Monthly revenue")],-1);function et(r,n){const _=a("v-spacer"),m=a("vue-feather"),i=a("v-btn"),o=a("v-card-text"),c=a("v-card");return d(),x(c,{class:"bg-primary"},{default:s(()=>[t(o,null,{default:s(()=>[e("div",X,[Y,t(_),e("div",Z,[t(i,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:s(()=>[t(m,{type:"dollar-sign",class:"text-dark"})]),_:1})])]),tt]),_:1})]),_:1})}const st=j(Q,[["render",et]]),$={series:[{name:"Monthly Sales",data:[35,60,30,55,40]}],chartOptions:{colors:["#03c9d7"],fill:{colors:"#03c9d7",opacity:.05,type:"solid"},chart:{type:"area",height:75,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",sparkline:{enabled:!0}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},at={class:"d-flex align-start"},ot=e("div",null,[e("span",{class:"text-subtitle-1 text-grey-darken-1 font-weight-medium"},"Monthly revenue"),e("h2",{class:"title font-weight-medium"},"3246")],-1),lt={class:"ml-auto"},nt=g({__name:"MonthlyRevenue",setup(r){const n=v(!1);return I(()=>{setTimeout(()=>n.value=!0,10)}),(_,m)=>{const i=a("v-spacer"),o=a("vue-feather"),c=a("v-btn"),u=a("v-card-text"),h=a("apexchart"),b=a("v-card");return d(),x(b,{class:"overflow-hidden w-100"},{default:s(()=>[t(u,{class:"pa-7"},{default:s(()=>[e("div",at,[ot,t(i),e("div",lt,[t(c,{icon:"",class:"btn-custom-sm",color:"secondary",fab:"",small:""},{default:s(()=>[t(o,{type:"shopping-bag",class:"white--text"})]),_:1})])])]),_:1}),L(e("div",null,[t(h,{type:"area",height:"75px",options:w($).chartOptions,series:w($).series},null,8,["options","series"])],512),[[N,n.value]])]),_:1})}}}),ct={class:"d-sm-flex align-center"},rt=e("div",null,[e("h2",{class:"title text-h6 font-weight-medium"},"Product Performance")],-1),_t={class:"ml-auto"},it=e("thead",null,[e("tr",null,[e("th",{class:"font-weight-medium text-subtitle-1"},"Assigned"),e("th",{class:"font-weight-medium text-subtitle-1"},"Name"),e("th",{class:"font-weight-medium text-subtitle-1"},"Priority"),e("th",{class:"font-weight-medium text-subtitle-1"},"Budget")])],-1),dt={class:"d-flex align-center"},mt=["src","alt"],ut={class:"mx-3"},ht={class:"font-weight-bold text-no-wrap"},pt={class:"text-no-wrap font-weight-regular text-body-2 text-grey-darken-1"},vt={class:"font-weight-medium text-no-wrap text-body-2 text-grey-darken-1"},ft=g({__name:"ProductMonthTable",setup(r){const n=v("March"),_=v(["March","April","May","June"]),m=v([{img:"1.jpg",activestate:"",leadname:"Sunil Joshi",leademail:"Web Designer",projectname:"Elite Admin",statuscolor:"blue lighten-1 white--text",statustext:"Low",money:"$3.9K"},{img:"2.jpg",activestate:"",leadname:"Andrew",leademail:"Project Manager",projectname:"Real Homes",statuscolor:"info",statustext:"Medium",money:"$23.9K"},{img:"3.jpg",activestate:"",leadname:"Bhavesh patel",leademail:"Developer",projectname:"MedicalPro Theme",statuscolor:"warning",statustext:"High",money:"$12.9K"},{img:"4.jpg",activestate:"",leadname:"Nirav Joshi",leademail:"Frontend Eng",projectname:"Elite Admin",statuscolor:"error",statustext:"Low",money:"$10.9K"},{img:"5.jpg",activestate:"",leadname:"Micheal Doe",leademail:"Content Writer",projectname:"Helping Hands",statuscolor:"success",statustext:"Low",money:"$12.9K"}]);return(i,o)=>{const c=a("v-spacer"),u=a("v-select"),h=a("v-avatar"),b=a("v-chip"),C=a("v-table"),D=a("v-card-text"),S=a("v-card");return d(),x(S,{flat:"",class:"w-100"},{default:s(()=>[t(D,null,{default:s(()=>[e("div",ct,[rt,t(c),e("div",_t,[t(u,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l),items:_.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),t(C,{class:"month-table mt-5"},{default:s(()=>[it,e("tbody",null,[(d(!0),y(M,null,W(m.value,l=>(d(),y("tr",{key:l.leadname,class:z([l.activestate,"month-item"])},[e("td",null,[e("div",dt,[t(h,{size:"40"},{default:s(()=>[e("img",{src:`/assets/images/users/${l.img}`,alt:l.img,width:"40"},null,8,mt)]),_:2},1024),e("div",ut,[e("h4",ht,p(l.leadname),1),e("h6",pt,p(l.leademail),1)])])]),e("td",null,[e("h5",vt,p(l.projectname),1)]),e("td",null,[t(b,{class:"ma-2",color:l.statuscolor,size:"small",label:""},{default:s(()=>[f(p(l.statustext),1)]),_:2},1032,["color"])]),e("td",null,[e("h4",null,p(l.money),1)])],2))),128))])]),_:1})]),_:1})]),_:1})}}}),$t=g({__name:"Analytical",setup(r){const n=v({title:"Analytical"}),_=v([{text:"Dashboard",disabled:!1,to:"#"},{text:"Analytical",disabled:!0}]);return(m,i)=>{const o=a("v-col"),c=a("v-row");return d(),y(M,null,[t(F,{title:n.value.title,breadcrumbs:_.value},null,8,["title","breadcrumbs"]),t(c,null,{default:s(()=>[t(o,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[t(G),t(c,{class:"mt-4"},{default:s(()=>[t(o,{cols:"12",sm:"6",lg:"6",class:""},{default:s(()=>[t(st)]),_:1}),t(o,{cols:"12",sm:"6",lg:"6",class:""},{default:s(()=>[t(nt)]),_:1})]),_:1})]),_:1}),t(o,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[t(B)]),_:1}),t(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[t(T)]),_:1}),t(o,{cols:"12",sm:"12",lg:"8"},{default:s(()=>[t(ft)]),_:1}),t(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[t(V)]),_:1}),t(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[t(J)]),_:1}),t(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[t(E)]),_:1})]),_:1})],64)}}});export{$t as default};
