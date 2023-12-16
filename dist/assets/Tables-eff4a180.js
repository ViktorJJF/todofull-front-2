import{_ as g}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-d5377c0e.js";import{_ as b}from"./BaseCard.vue_vue_type_script_setup_true_lang-e7d0f116.js";import{e as m,g as i,r as _,o as s,f as n,b as e,a,w as l,F as d,i as f,t as c}from"./index-fdc6d5a4.js";const v=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use theme prop to switch table to another theme. ",-1),y={class:"mt-4"},k=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Name"),e("th",{class:"text-left"},"Calories")])],-1),$=m({__name:"TableDarktheme",setup(h){const o=i([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(u,p)=>{const r=_("v-table");return s(),n("div",null,[v,e("div",y,[a(r,{theme:"dark"},{default:l(()=>[k,e("tbody",null,[(s(!0),n(d,null,f(o.value,t=>(s(),n("tr",{key:t.name},[e("td",null,c(t.name),1),e("td",null,c(t.calories),1)]))),128))])]),_:1})])])}}}),w=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can show a dense version of the table by using the density prop. ",-1),C={class:"mt-4"},D=e("thead",null,[e("tr",null,[e("th",{class:"text-left text-subtitle-2"},"Name"),e("th",{class:"text-left text-subtitle-2"},"Calories")])],-1),F=m({__name:"TableDencity",setup(h){const o=i([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(u,p)=>{const r=_("v-table");return s(),n("div",null,[w,e("div",C,[a(r,{density:"compact"},{default:l(()=>[D,e("tbody",null,[(s(!0),n(d,null,f(o.value,t=>(s(),n("tr",{key:t.name},[e("td",null,c(t.name),1),e("td",null,c(t.calories),1)]))),128))])]),_:1})])])}}}),T=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use the height prop to set the height of the table. ",-1),H={class:"mt-4"},K=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Name"),e("th",{class:"text-left"},"Calories")])],-1),N=m({__name:"TableFixHeight",setup(h){const o=i([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(u,p)=>{const r=_("v-table");return s(),n("div",null,[T,e("div",H,[a(r,{height:"300px"},{default:l(()=>[K,e("tbody",null,[(s(!0),n(d,null,f(o.value,t=>(s(),n("tr",{key:t.name},[e("td",null,c(t.name),1),e("td",null,c(t.calories),1)]))),128))])]),_:1})])])}}}),E=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use the fixed-header prop together with the height prop to fix the header to the top of the table. ",-1),L={class:"mt-4"},Y=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Name"),e("th",{class:"text-left"},"Calories")])],-1),z=m({__name:"TableFixHeader",setup(h){const o=i([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(u,p)=>{const r=_("v-table");return s(),n("div",null,[E,e("div",L,[a(r,{"fixed-header":"",height:"300px"},{default:l(()=>[Y,e("tbody",null,[(s(!0),n(d,null,f(o.value,t=>(s(),n("tr",{key:t.name},[e("td",null,c(t.name),1),e("td",null,c(t.calories),1)]))),128))])]),_:1})])])}}}),B=m({__name:"Tables",setup(h){const o=i({title:"Tables"}),u=i([{text:"Table",disabled:!1,to:"#"},{text:"Tables",disabled:!0}]);return(p,r)=>{const t=_("v-col"),x=_("v-row");return s(),n(d,null,[a(g,{title:o.value.title,breadcrumbs:u.value},null,8,["title","breadcrumbs"]),a(x,null,{default:l(()=>[a(t,{cols:"12",sm:"12"},{default:l(()=>[a(b,{heading:"Dark Theme"},{default:l(()=>[a($)]),_:1})]),_:1}),a(t,{cols:"12",sm:"12"},{default:l(()=>[a(b,{heading:"Dencity"},{default:l(()=>[a(F)]),_:1})]),_:1}),a(t,{cols:"12",sm:"12"},{default:l(()=>[a(b,{heading:"Height"},{default:l(()=>[a(N)]),_:1})]),_:1}),a(t,{cols:"12",sm:"12"},{default:l(()=>[a(b,{heading:"Fixed Header"},{default:l(()=>[a(z)]),_:1})]),_:1})]),_:1})],64)}}});export{B as default};
