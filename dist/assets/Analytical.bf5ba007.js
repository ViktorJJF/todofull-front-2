import{_ as S,a as D,T as A,B,b as T}from"./DailyActivities.3429d4cd.js";import{m as f,s as E,o as r,c as p,w as s,a as e,ab as g,f as t,h,z as u,u as x,g as y,d as v,ac as P,ad as z,t as b,M as $,r as m,ae as H,af as K,ag as L,ah as N,ai as W,n as w,F as C,x as F,E as I,Q as R,P as J,b as o,e as M}from"./index.ef9cfdf3.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as O}from"./BaseBreadcrumb.fb6d4da3.js";import{_ as Q}from"./WeeklyStats.6f5dbaad.js";const k=n=>(P("data-v-250479a4"),n=n(),z(),n),U=k(()=>t("img",{src:S,class:"bg-img-1"},null,-1)),q={class:"h3 title overlay-title font-weight-medium mb-1"},G=k(()=>t("br",null,null,-1)),X=f({__name:"WelcomeCard",setup(n){const l=E();return(c,_)=>(r(),p(v,null,{default:s(()=>[U,e(g,null,{default:s(()=>{var d,i;return[t("h3",q,[h(" Hey "+u((i=(d=x(l).state.authModule)==null?void 0:d.user)==null?void 0:i.email)+", ",1),G,h("Download latest report ")]),e(y,{color:"secondary",class:"mt-4"},{default:s(()=>[h(" Download ")]),_:1})]}),_:1})]),_:1}))}});var Y=j(X,[["__scopeId","data-v-250479a4"]]);const Z={},ee={class:"d-flex align-start"},te=t("h2",{class:"font-weight-medium title text-white mt-1"},"Earnings",-1),se={class:"ml-auto"},ae=t("div",{class:"mt-4"},[t("h2",{class:"text-white text-h5"},"$93,438.78"),t("span",{class:"text-white op-5 subtitle-1"},"Monthly revenue")],-1);function le(n,l){const c=b("vue-feather");return r(),p(v,{class:"bg-primary"},{default:s(()=>[e(g,null,{default:s(()=>[t("div",ee,[te,e($),t("div",se,[e(y,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:s(()=>[e(c,{type:"dollar-sign",class:"text-dark"})]),_:1})])]),ae]),_:1})]),_:1})}var oe=j(Z,[["render",le]]);const V={series:[{name:"Monthly Sales",data:[35,60,30,55,40]}],chartOptions:{colors:["#03c9d7"],fill:{colors:"#03c9d7",opacity:.05,type:"solid"},chart:{type:"area",height:75,toolbar:{show:!1},foreColor:"#adb0bb",fontFamily:"'DM Sans',sans-serif",sparkline:{enabled:!0}},dataLabels:{enabled:!1},markers:{size:0},legend:{show:!1},stroke:{show:!0,width:2,curve:"smooth"},tooltip:{theme:"dark"}}},ne={class:"d-flex align-start"},ce=t("div",null,[t("span",{class:"text-subtitle-1 text-grey-darken-1 font-weight-medium"},"Monthly revenue"),t("h2",{class:"title font-weight-medium"},"3246")],-1),ie={class:"ml-auto"},re=f({__name:"MonthlyRevenue",setup(n){const l=m(!1);return H(()=>{setTimeout(()=>l.value=!0,10)}),(c,_)=>{const d=b("vue-feather"),i=b("apexchart");return r(),p(v,{class:"overflow-hidden w-100"},{default:s(()=>[e(g,{class:"pa-7"},{default:s(()=>[t("div",ne,[ce,e($),t("div",ie,[e(y,{icon:"",class:"btn-custom-sm",color:"secondary",fab:"",small:""},{default:s(()=>[e(d,{type:"shopping-bag",class:"white--text"})]),_:1})])])]),_:1}),K(t("div",null,[e(i,{type:"area",height:"75px",options:x(V).chartOptions,series:x(V).series},null,8,["options","series"])],512),[[L,l.value]])]),_:1})}}}),de={class:"d-sm-flex align-center"},ue=t("div",null,[t("h2",{class:"title text-h6 font-weight-medium"},"Product Performance")],-1),me={class:"ml-auto"},_e=t("thead",null,[t("tr",null,[t("th",{class:"font-weight-medium text-subtitle-1"},"Assigned"),t("th",{class:"font-weight-medium text-subtitle-1"},"Name"),t("th",{class:"font-weight-medium text-subtitle-1"},"Priority"),t("th",{class:"font-weight-medium text-subtitle-1"},"Budget")])],-1),he={class:"d-flex align-center"},fe=["src","alt"],pe={class:"mx-3"},ge={class:"font-weight-bold text-no-wrap"},ve={class:"text-no-wrap font-weight-regular text-body-2 text-grey-darken-1"},xe={class:"font-weight-medium text-no-wrap text-body-2 text-grey-darken-1"},be=f({__name:"ProductMonthTable",setup(n){const l=m("March"),c=m(["March","April","May","June"]),_=m([{img:"1.jpg",activestate:"",leadname:"Sunil Joshi",leademail:"Web Designer",projectname:"Elite Admin",statuscolor:"blue lighten-1 white--text",statustext:"Low",money:"$3.9K"},{img:"2.jpg",activestate:"",leadname:"Andrew",leademail:"Project Manager",projectname:"Real Homes",statuscolor:"info",statustext:"Medium",money:"$23.9K"},{img:"3.jpg",activestate:"",leadname:"Bhavesh patel",leademail:"Developer",projectname:"MedicalPro Theme",statuscolor:"warning",statustext:"High",money:"$12.9K"},{img:"4.jpg",activestate:"",leadname:"Nirav Joshi",leademail:"Frontend Eng",projectname:"Elite Admin",statuscolor:"error",statustext:"Low",money:"$10.9K"},{img:"5.jpg",activestate:"",leadname:"Micheal Doe",leademail:"Content Writer",projectname:"Helping Hands",statuscolor:"success",statustext:"Low",money:"$12.9K"}]);return(d,i)=>(r(),p(v,{flat:"",class:"w-100"},{default:s(()=>[e(g,null,{default:s(()=>[t("div",de,[ue,e($),t("div",me,[e(N,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=a=>l.value=a),items:c.value,variant:"outlined",dense:"","hide-details":""},null,8,["modelValue","items"])])]),e(W,{class:"month-table mt-5"},{default:s(()=>[_e,t("tbody",null,[(r(!0),w(C,null,F(_.value,a=>(r(),w("tr",{key:a.leadname,class:I([a.activestate,"month-item"])},[t("td",null,[t("div",he,[e(R,{size:"40"},{default:s(()=>[t("img",{src:`/assets/images/users/${a.img}`,alt:a.img,width:"40"},null,8,fe)]),_:2},1024),t("div",pe,[t("h4",ge,u(a.leadname),1),t("h6",ve,u(a.leademail),1)])])]),t("td",null,[t("h5",xe,u(a.projectname),1)]),t("td",null,[e(J,{class:"ma-2",color:a.statuscolor,size:"small",label:""},{default:s(()=>[h(u(a.statustext),1)]),_:2},1032,["color"])]),t("td",null,[t("h4",null,u(a.money),1)])],2))),128))])]),_:1})]),_:1})]),_:1}))}}),Ce=f({__name:"Analytical",setup(n){const l=m({title:"Analytical"}),c=m([{text:"Dashboard",disabled:!1,to:"#"},{text:"Analytical",disabled:!0}]);return(_,d)=>(r(),w(C,null,[e(O,{title:l.value.title,breadcrumbs:c.value},null,8,["title","breadcrumbs"]),e(M,null,{default:s(()=>[e(o,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[e(Y),e(M,{class:"mt-4"},{default:s(()=>[e(o,{cols:"12",sm:"6",lg:"6",class:""},{default:s(()=>[e(oe)]),_:1}),e(o,{cols:"12",sm:"6",lg:"6",class:""},{default:s(()=>[e(re)]),_:1})]),_:1})]),_:1}),e(o,{cols:"12",sm:"12",lg:"6"},{default:s(()=>[e(D)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(A)]),_:1}),e(o,{cols:"12",sm:"12",lg:"8"},{default:s(()=>[e(be)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(B)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(Q)]),_:1}),e(o,{cols:"12",sm:"12",lg:"4"},{default:s(()=>[e(T)]),_:1})]),_:1})],64))}});export{Ce as default};