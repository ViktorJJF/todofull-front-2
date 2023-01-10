import{_ as D,a as S,T as A,B,b as T}from"./DailyActivities.9feb566a.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as _,w as s,a as e,ab as h,g as b,h as m,d as f,ac as P,ad as E,f as t,s as v,M as w,m as y,r,ae as H,af as K,u as $,ag as L,ah as N,ai as z,n as x,F as j,v as F,D as I,Q as J,y as d,P as R,b as o,e as V}from"./index.ac5b851b.js";import{_ as W}from"./BaseBreadcrumb.51cce433.js";import{_ as O}from"./WeeklyStats.bb820bcd.js";const Q={},k=n=>(P("data-v-006eb5ee"),n=n(),E(),n),U=k(()=>t("img",{src:D,class:"bg-img-1"},null,-1)),q=k(()=>t("h3",{class:"h3 title overlay-title font-weight-medium mb-1"},[m(" Hey John, "),t("br"),m("Download latest report ")],-1));function G(n,l){return c(),_(f,null,{default:s(()=>[U,e(h,null,{default:s(()=>[q,e(b,{color:"secondary",class:"mt-4"},{default:s(()=>[m(" Download ")]),_:1})]),_:1})]),_:1})}var X=C(Q,[["render",G],["__scopeId","data-v-006eb5ee"]]);const Y={},Z={class:"d-flex align-start"},ee=t("h2",{class:"font-weight-medium title text-white mt-1"},"Earnings",-1),te={class:"ml-auto"},se=t("div",{class:"mt-4"},[t("h2",{class:"text-white text-h5"},"$93,438.78"),t("span",{class:"text-white op-5 subtitle-1"},"Monthly revenue")],-1);function ae(n,l){const i=v("vue-feather");return c(),_(f,{class:"bg-primary"},{default:s(()=>[e(h,null,{default:s(()=>[t("div",Z,[ee,e(w),t("div",te,[e(b,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:s(()=>[e(i,{type:"dollar-sign",class:"text-dark"})]),_:1})])]),se]),_:1})]),_:1})}var le=C(Y,[["render",ae]]);const M={series:[{name:"Monthly Sales",data:[35,60,30,55,40]}],chartOptions:{colors:["#03c9d7"],fill:{colors:"#03c9d7",opacity:.05,type:"solid"},chart:{type:"area",height:75,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",sparkline:{enabled:!0}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},oe={class:"d-flex align-start"},ne=t("div",null,[t("span",{class:"text-subtitle-1 text-grey-darken-1 font-weight-medium"},"Monthly revenue"),t("h2",{class:"title font-weight-medium"},"3246")],-1),ce={class:"ml-auto"},ie=y({__name:"MonthlyRevenue",setup(n){const l=r(!1);return H(()=>{setTimeout(()=>l.value=!0,10)}),(i,p)=>{const g=v("vue-feather"),u=v("apexchart");return c(),_(f,{class:"overflow-hidden w-100"},{default:s(()=>[e(h,{class:"pa-7"},{default:s(()=>[t("div",oe,[ne,e(w),t("div",ce,[e(b,{icon:"",class:"btn-custom-sm",color:"secondary",fab:"",small:""},{default:s(()=>[e(g,{type:"shopping-bag",class:"white--text"})]),_:1})])])]),_:1}),K(t("div",null,[e(u,{type:"area",height:"75px",options:$(M).chartOptions,series:$(M).series},null,8,["options","series"])],512),[[L,l.value]])]),_:1})}}}),re={class:"d-sm-flex align-center"},de=t("div",null,[t("h2",{class:"title text-h6 font-weight-medium"},"Product Performance")],-1),ue={class:"ml-auto"},me=t("thead",null,[t("tr",null,[t("th",{class:"font-weight-medium text-subtitle-1"},"Assigned"),t("th",{class:"font-weight-medium text-subtitle-1"},"Name"),t("th",{class:"font-weight-medium text-subtitle-1"},"Priority"),t("th",{class:"font-weight-medium text-subtitle-1"},"Budget")])],-1),_e={class:"d-flex align-center"},he=["src","alt"],fe={class:"mx-3"},pe={class:"font-weight-bold text-no-wrap"},ge={class:"text-no-wrap font-weight-regular text-body-2 text-grey-darken-1"},ve={class:"font-weight-medium text-no-wrap text-body-2 text-grey-darken-1"},xe=y({__name:"ProductMonthTable",setup(n){const l=r("March"),i=r(["March","April","May","June"]),p=r([{img:"1.jpg",activestate:"",leadname:"Sunil Joshi",leademail:"Web Designer",projectname:"Elite Admin",statuscolor:"blue lighten-1 white--text",statustext:"Low",money:"$3.9K"},{img:"2.jpg",activestate:"",leadname:"Andrew",leademail:"Project Manager",projectname:"Real Homes",statuscolor:"info",statustext:"Medium",money:"$23.9K"},{img:"3.jpg",activestate:"",leadname:"Bhavesh patel",leademail:"Developer",projectname:"MedicalPro Theme",statuscolor:"warning",statustext:"High",money:"$12.9K"},{img:"4.jpg",activestate:"",leadname:"Nirav Joshi",leademail:"Frontend Eng",projectname:"Elite Admin",statuscolor:"error",statustext:"Low",money:"$10.9K"},{img:"5.jpg",activestate:"",leadname:"Micheal Doe",leademail:"Content Writer",projectname:"Helping Hands",statuscolor:"success",statustext:"Low",money:"$12.9K"}]);return(g,u)=>(c(),_(f,{flat:"",class:"w-100"},{default:s(()=>[e(h,null,{default:s(()=>[t("div",re,[de,e(w),t("div",ue,[e(N,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=a=>l.value=a),items:i.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),e(z,{class:"month-table mt-5"},{default:s(()=>[me,t("tbody",null,[(c(!0),x(j,null,F(p.value,a=>(c(),x("tr",{key:a.leadname,class:I([a.activestate,"month-item"])},[t("td",null,[t("div",_e,[e(J,{size:"40"},{default:s(()=>[t("img",{src:`/assets/images/users/${a.img}`,alt:a.img,width:"40"},null,8,he)]),_:2},1024),t("div",fe,[t("h4",pe,d(a.leadname),1),t("h6",ge,d(a.leademail),1)])])]),t("td",null,[t("h5",ve,d(a.projectname),1)]),t("td",null,[e(R,{class:"ma-2",color:a.statuscolor,size:"small",label:""},{default:s(()=>[m(d(a.statustext),1)]),_:2},1032,["color"])]),t("td",null,[t("h4",null,d(a.money),1)])],2))),128))])]),_:1})]),_:1})]),_:1}))}}),Me=y({__name:"Analytical",setup(n){const l=r({title:"Analytical"}),i=r([{text:"Dashboard",disabled:!1,to:"#"},{text:"Analytical",disabled:!0}]);return(p,g)=>(c(),x(j,null,[e(W,{title:l.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),e(V,null,{default:s(()=>[e(o,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[e(X),e(V,{class:"mt-4"},{default:s(()=>[e(o,{cols:"12",sm:"6",lg:"6",class:""},{default:s(()=>[e(le)]),_:1}),e(o,{cols:"12",sm:"6",lg:"6",class:""},{default:s(()=>[e(ie)]),_:1})]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[e(S)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(A)]),_:1}),e(o,{cols:"12",sm:"12",lg:"8"},{default:s(()=>[e(xe)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(B)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(O)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(T)]),_:1})]),_:1})],64))}});export{Me as default};
