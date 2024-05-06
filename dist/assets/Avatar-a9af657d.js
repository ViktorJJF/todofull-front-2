import{_ as J}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-25a3c824.js";import{_ as h}from"./BaseCard.vue_vue_type_script_setup_true_lang-d66f1ce6.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,g as d,b as n,a as t,w as e,d as a,f as k,h as g,F as T,j as V,c as x,t as v,q as A,m as q}from"./index-36adbbac.js";const B={},D=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" The "),n("code",null,"size"),a(" prop allows you to define the height and width of "),n("code",null,"v-avatar"),a(". This prop scales both evenly with an aspect ratio of 1. "),n("code",null,"height"),a(" and "),n("code",null,"width"),a(" props will override this prop. ")],-1),H={class:"mt-6"};function P(m,r){const c=o("v-avatar"),i=o("v-row");return l(),d("div",null,[D,n("div",H,[t(i,{justify:"space-around"},{default:e(()=>[t(c,{color:"primary",size:"x-small"},{default:e(()=>[a(" 32 ")]),_:1}),t(c,{color:"secondary"},{default:e(()=>[a(" 48 ")]),_:1}),t(c,{color:"success",size:"x-large"},{default:e(()=>[a(" 64 ")]),_:1})]),_:1})])])}const E=w(B,[["render",P]]),U={},F=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" The "),n("code",null,"tile"),a(" prop removes the border radius from v-avatar leaving you with a simple square avatar. ")],-1),O={class:"mt-6 text-center"};function W(m,r){const c=o("v-icon"),i=o("v-avatar");return l(),d("div",null,[F,n("div",O,[t(i,{rounded:"0",color:"primary"},{default:e(()=>[t(c,{icon:"mdi-alarm"})]),_:1})])])}const G=w(U,[["render",W]]),I={},K=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" The "),n("code",null,"v-avatar"),a(" default slot will accept the "),n("code",null,"v-icon"),a(" component, an image, or text. Mix and match these with other props to create something unique. ")],-1),Q={class:"mt-4 text-center"},R=n("span",{class:"text-white text-h5"},"CJ",-1);function X(m,r){const c=o("v-icon"),i=o("v-avatar"),u=o("v-img"),s=o("v-row");return l(),d("div",null,[K,n("div",Q,[t(s,{justify:"space-around"},{default:e(()=>[t(i,{color:"info"},{default:e(()=>[t(c,{icon:"mdi-account-circle"})]),_:1}),t(i,null,{default:e(()=>[t(u,{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"})]),_:1}),t(i,{color:"red"},{default:e(()=>[R]),_:1})]),_:1})])])}const Y=w(I,[["render",X]]),Z={},tt=n("p",{class:"text-subtitle-1 text-grey-darken-1"},[a(" Using the "),n("span",{class:"font-weight-bold"},"tile"),a(" prop, we can create a sleek hard-lined profile card. ")],-1),et={class:"mt-4"};function ot(m,r){const c=o("v-img"),i=o("v-avatar"),u=o("v-list-item"),s=o("v-card");return l(),d("div",null,[tt,n("div",et,[t(s,{class:"mx-auto","max-width":"434",tile:""},{default:e(()=>[t(c,{height:"100%",cover:"",src:"https://cdn.vuetifyjs.com/images/cards/server-room.jpg"},{default:e(()=>[t(i,{color:"grey",size:"150",rounded:"0"},{default:e(()=>[t(c,{src:"https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"})]),_:1}),t(u,{class:"text-white",title:"Marcus Obrien",subtitle:"Network Engineer"})]),_:1})]),_:1})])])}const nt=w(Z,[["render",ot]]),at={class:"mt-4"},st=["innerHTML"],ct={key:0,class:"text-grey"},lt=["innerHTML"],rt=k({__name:"AvatarAdvancedUsage",setup(m){const r=g([{avatar:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",name:"John Leider",title:"Welcome to Vuetify!",excerpt:"Thank you for joining our community..."},{color:"red",icon:"mdi-account-multiple",name:"Social",new:1,total:3,title:"Twitter"},{color:"teal",icon:"mdi-tag",name:"Promos",new:2,total:4,title:"Shop your way",exceprt:"New deals available, Join Today"}]),c=g("Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos.");return(i,u)=>{const s=o("v-list-item-subtitle"),p=o("v-img"),y=o("v-icon"),b=o("v-avatar"),f=o("v-col"),$=o("v-chip"),j=o("v-row"),C=o("v-expansion-panel-title"),z=o("v-card-text"),M=o("v-expansion-panel-text"),N=o("v-expansion-panel"),L=o("v-expansion-panels");return l(),d("div",null,[t(s,{class:"text-wrap"},{default:e(()=>[a(" Combining an avatar with other components allows you to build beautiful user interfaces right out of the box. ")]),_:1}),n("div",at,[t(L,{variant:"popout",class:"pa-4"},{default:e(()=>[(l(!0),d(T,null,V(r.value,(_,S)=>(l(),x(N,{key:S,"hide-actions":""},{default:e(()=>[t(C,null,{default:e(()=>[t(j,{align:"center",class:"spacer","no-gutters":""},{default:e(()=>[t(f,{cols:"4",sm:"2",md:"1"},{default:e(()=>[t(b,{size:"36px"},{default:e(()=>[_.avatar?(l(),x(p,{key:0,alt:"Avatar",src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"})):(l(),x(y,{key:1,color:_.color,icon:_.icon},null,8,["color","icon"]))]),_:2},1024)]),_:2},1024),t(f,{class:"hidden-xs-only text-left ml-2",sm:"5",md:"3"},{default:e(()=>[n("strong",{innerHTML:_.name},null,8,st),_.total?(l(),d("span",ct,"  ("+v(_.total)+") ",1)):A("",!0)]),_:2},1024),t(f,{class:"text-no-wrap text-left",cols:"5",sm:"3"},{default:e(()=>[_.new?(l(),x($,{key:0,color:`${_.color}-lighten-1`,class:"ml-0 mr-2 text-black",label:"",small:""},{default:e(()=>[a(v(_.new)+" new ",1)]),_:2},1032,["color"])):A("",!0),n("strong",{innerHTML:_.title},null,8,lt)]),_:2},1024),_.excerpt?(l(),x(f,{key:0,class:"text-grey text-truncate hidden-sm-and-down"},{default:e(()=>[a(" — "+v(_.excerpt),1)]),_:2},1024)):A("",!0)]),_:2},1024)]),_:2},1024),t(M,null,{default:e(()=>[t(z,{class:"text-subtitle-1",textContent:v(c.value)},null,8,["textContent"])]),_:1})]),_:2},1024))),128))]),_:1})])])}}}),it={class:"mt-6 text-center"},_t={class:"text-white text-h5"},dt={class:"mx-auto text-center"},ut={class:"text-white text-h5"},vt={class:"text-caption mt-1"},mt=k({__name:"AvatarMenu",setup(m){const r=g({initials:"JD",fullName:"John Doe",email:"john.doe@doe.com"});return(c,i)=>{const u=o("v-avatar"),s=o("v-btn"),p=o("v-divider"),y=o("v-card-text"),b=o("v-card"),f=o("v-menu");return l(),d("div",null,[n("div",it,[t(f,{bottom:"","min-width":"200px",rounded:"","offset-y":""},{activator:e(({props:$})=>[t(s,q({icon:""},$),{default:e(()=>[t(u,{color:"info",size:"large"},{default:e(()=>[n("span",_t,v(r.value.initials),1)]),_:1})]),_:2},1040)]),default:e(()=>[t(b,null,{default:e(()=>[t(y,null,{default:e(()=>[n("div",dt,[t(u,{color:"info"},{default:e(()=>[n("span",ut,v(r.value.initials),1)]),_:1}),n("h3",null,v(r.value.fullName),1),n("p",vt,v(r.value.email),1),t(p,{class:"my-3"}),t(s,{color:"info",rounded:"",variant:"text"},{default:e(()=>[a(" Edit Account ")]),_:1}),t(p,{class:"my-3"}),t(s,{color:"info",rounded:"",variant:"text"},{default:e(()=>[a(" Disconnect ")]),_:1})])]),_:1})]),_:1})]),_:1})])])}}}),gt=k({__name:"Avatar",setup(m){const r=g({title:"Avatar"}),c=g([{text:"Ui Components",disabled:!1,to:"#"},{text:"Avatar",disabled:!0}]);return(i,u)=>{const s=o("v-col"),p=o("v-row");return l(),d(T,null,[t(J,{title:r.value.title,breadcrumbs:c.value},null,8,["title","breadcrumbs"]),t(p,null,{default:e(()=>[t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(h,{heading:"Avatar - Size"},{default:e(()=>[t(E)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(h,{heading:"Avatar - Tile"},{default:e(()=>[t(G)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(h,{heading:"Avatar - Size"},{default:e(()=>[t(Y)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(h,{heading:"Avatar - Menu"},{default:e(()=>[t(mt)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:e(()=>[t(h,{heading:"Avatar - Profile Card"},{default:e(()=>[t(nt)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:e(()=>[t(h,{heading:"Avatar - Advanced usage"},{default:e(()=>[t(rt)]),_:1})]),_:1})]),_:1})],64)}}});export{gt as default};
