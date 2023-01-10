import{_ as x}from"./BaseBreadcrumb.249dfad4.js";import{_ as h}from"./BaseCard.c04d997d.js";import{m as u,r as c,o as s,n,f as e,a as t,w as l,F as d,v as b,y as o,ai as f,b as p,e as g}from"./index.a3cf6758.js";const y=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use theme prop to switch table to another theme. ",-1),k={class:"mt-4"},v=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Name"),e("th",{class:"text-left"},"Calories")])],-1),$=u({__name:"TableDarktheme",setup(m){const r=c([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(i,_)=>(s(),n("div",null,[y,e("div",k,[t(f,{theme:"dark"},{default:l(()=>[v,e("tbody",null,[(s(!0),n(d,null,b(r.value,a=>(s(),n("tr",{key:a.name},[e("td",null,o(a.name),1),e("td",null,o(a.calories),1)]))),128))])]),_:1})])]))}}),C=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can show a dense version of the table by using the density prop. ",-1),w={class:"mt-4"},T=e("thead",null,[e("tr",null,[e("th",{class:"text-left text-subtitle-2"},"Name"),e("th",{class:"text-left text-subtitle-2"},"Calories")])],-1),D=u({__name:"TableDencity",setup(m){const r=c([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(i,_)=>(s(),n("div",null,[C,e("div",w,[t(f,{density:"compact"},{default:l(()=>[T,e("tbody",null,[(s(!0),n(d,null,b(r.value,a=>(s(),n("tr",{key:a.name},[e("td",null,o(a.name),1),e("td",null,o(a.calories),1)]))),128))])]),_:1})])]))}}),F=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use the height prop to set the height of the table. ",-1),H={class:"mt-4"},K=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Name"),e("th",{class:"text-left"},"Calories")])],-1),N=u({__name:"TableFixHeight",setup(m){const r=c([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(i,_)=>(s(),n("div",null,[F,e("div",H,[t(f,{height:"300px"},{default:l(()=>[K,e("tbody",null,[(s(!0),n(d,null,b(r.value,a=>(s(),n("tr",{key:a.name},[e("td",null,o(a.name),1),e("td",null,o(a.calories),1)]))),128))])]),_:1})])]))}}),E=e("p",{class:"text-subtitle-1 text-grey-darken-1"}," Use the fixed-header prop together with the height prop to fix the header to the top of the table. ",-1),L={class:"mt-4"},V=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Name"),e("th",{class:"text-left"},"Calories")])],-1),Y=u({__name:"TableFixHeader",setup(m){const r=c([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return(i,_)=>(s(),n("div",null,[E,e("div",L,[t(f,{"fixed-header":"",height:"300px"},{default:l(()=>[V,e("tbody",null,[(s(!0),n(d,null,b(r.value,a=>(s(),n("tr",{key:a.name},[e("td",null,o(a.name),1),e("td",null,o(a.calories),1)]))),128))])]),_:1})])]))}}),J=u({__name:"Tables",setup(m){const r=c({title:"Tables"}),i=c([{text:"Table",disabled:!1,to:"#"},{text:"Tables",disabled:!0}]);return(_,a)=>(s(),n(d,null,[t(x,{title:r.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),t(g,null,{default:l(()=>[t(p,{cols:"12",sm:"12"},{default:l(()=>[t(h,{heading:"Dark Theme"},{default:l(()=>[t($)]),_:1})]),_:1}),t(p,{cols:"12",sm:"12"},{default:l(()=>[t(h,{heading:"Dencity"},{default:l(()=>[t(D)]),_:1})]),_:1}),t(p,{cols:"12",sm:"12"},{default:l(()=>[t(h,{heading:"Height"},{default:l(()=>[t(N)]),_:1})]),_:1}),t(p,{cols:"12",sm:"12"},{default:l(()=>[t(h,{heading:"Fixed Header"},{default:l(()=>[t(Y)]),_:1})]),_:1})]),_:1})],64))}});export{J as default};
