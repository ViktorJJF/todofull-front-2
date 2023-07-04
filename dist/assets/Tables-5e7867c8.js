import{_ as h,e as b,g as d,r as _,o as s,f as o,j as n,b as e,a,w as l,F as c,k as v,t as u}from"./index-2d5d7655.js";import{B as y}from"./BaseBreadcrumb-9e4e4189.js";import{B as x}from"./BaseCard-5954b4ae.js";const T=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use theme prop to switch table to another theme. ",-1),k={class:"mt-4"},D=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Name"),e("th",{class:"text-left"},"Calories")])],-1),w=b({__name:"TableDarktheme",setup(f){const r=d([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(m,p)=>{const i=_("v-table");return s(),o(c,null,[n(" ----------------------------------------------------------------------------- "),n(" Dark "),n(" ----------------------------------------------------------------------------- "),e("div",null,[T,e("div",k,[a(i,{theme:"dark"},{default:l(()=>[D,e("tbody",null,[(s(!0),o(c,null,v(r.value,t=>(s(),o("tr",{key:t.name},[e("td",null,u(t.name),1),e("td",null,u(t.calories),1)]))),128))])]),_:1})])])],2112)}}}),F=h(w,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/tables/table-data/TableDarktheme.vue"]]),H=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can show a dense version of the table by using the density prop. ",-1),C={class:"mt-4"},$=e("thead",null,[e("tr",null,[e("th",{class:"text-left text-subtitle-2"},"Name"),e("th",{class:"text-left text-subtitle-2"},"Calories")])],-1),B=b({__name:"TableDencity",setup(f){const r=d([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(m,p)=>{const i=_("v-table");return s(),o(c,null,[n(" ----------------------------------------------------------------------------- "),n(" Dencity "),n(" ----------------------------------------------------------------------------- "),e("div",null,[H,e("div",C,[a(i,{density:"compact"},{default:l(()=>[$,e("tbody",null,[(s(!0),o(c,null,v(r.value,t=>(s(),o("tr",{key:t.name},[e("td",null,u(t.name),1),e("td",null,u(t.calories),1)]))),128))])]),_:1})])])],2112)}}}),K=h(B,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/tables/table-data/TableDencity.vue"]]),N=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use the height prop to set the height of the table. ",-1),j={class:"mt-4"},E=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Name"),e("th",{class:"text-left"},"Calories")])],-1),L=b({__name:"TableFixHeight",setup(f){const r=d([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(m,p)=>{const i=_("v-table");return s(),o(c,null,[n(" ----------------------------------------------------------------------------- "),n(" Height "),n(" ----------------------------------------------------------------------------- "),e("div",null,[N,e("div",j,[a(i,{height:"300px"},{default:l(()=>[E,e("tbody",null,[(s(!0),o(c,null,v(r.value,t=>(s(),o("tr",{key:t.name},[e("td",null,u(t.name),1),e("td",null,u(t.calories),1)]))),128))])]),_:1})])])],2112)}}}),Y=h(L,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/tables/table-data/TableFixHeight.vue"]]),z=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use the fixed-header prop together with the height prop to fix the header to the top of the table. ",-1),G={class:"mt-4"},I=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Name"),e("th",{class:"text-left"},"Calories")])],-1),J=b({__name:"TableFixHeader",setup(f){const r=d([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(m,p)=>{const i=_("v-table");return s(),o(c,null,[n(" ----------------------------------------------------------------------------- "),n(" Fixed Header "),n(" ----------------------------------------------------------------------------- "),e("div",null,[z,e("div",G,[a(i,{"fixed-header":"",height:"300px"},{default:l(()=>[I,e("tbody",null,[(s(!0),o(c,null,v(r.value,t=>(s(),o("tr",{key:t.name},[e("td",null,u(t.name),1),e("td",null,u(t.calories),1)]))),128))])]),_:1})])])],2112)}}}),U=h(J,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/tables/table-data/TableFixHeader.vue"]]),V=b({__name:"Tables",setup(f){const r=d({title:"Tables"}),m=d([{text:"Table",disabled:!1,to:"#"},{text:"Tables",disabled:!0}]);return(p,i)=>{const t=_("v-col"),g=_("v-row");return s(),o(c,null,[a(y,{title:r.value.title,breadcrumbs:m.value},null,8,["title","breadcrumbs"]),a(g,null,{default:l(()=>[a(t,{cols:"12",sm:"12"},{default:l(()=>[a(x,{heading:"Dark Theme"},{default:l(()=>[a(F)]),_:1})]),_:1}),a(t,{cols:"12",sm:"12"},{default:l(()=>[a(x,{heading:"Dencity"},{default:l(()=>[a(K)]),_:1})]),_:1}),a(t,{cols:"12",sm:"12"},{default:l(()=>[a(x,{heading:"Height"},{default:l(()=>[a(Y)]),_:1})]),_:1}),a(t,{cols:"12",sm:"12"},{default:l(()=>[a(x,{heading:"Fixed Header"},{default:l(()=>[a(U)]),_:1})]),_:1})]),_:1})],64)}}}),M=h(V,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/tables/Tables.vue"]]);export{M as default};
