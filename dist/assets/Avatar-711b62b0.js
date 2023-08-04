import{_ as p,r as o,o as r,f as u,j as n,b as a,a as t,w as e,d as l,F as f,e as C,g as w,k as N,c as b,t as m,m as L}from"./index-c8e2a330.js";import{B as J}from"./BaseBreadcrumb-5af0134a.js";import{B as y}from"./BaseCard-780bd70a.js";const P={},U=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" The "),a("code",null,"size"),l(" prop allows you to define the height and width of "),a("code",null,"v-avatar"),l(". This prop scales both evenly with an aspect ratio of 1. "),a("code",null,"height"),l(" and "),a("code",null,"width"),l(" props will override this prop. ")],-1),V={class:"mt-6"};function H(h,i){const c=o("v-avatar"),_=o("v-row");return r(),u(f,null,[n(" ----------------------------------------------------------------------------- "),n(" Size "),n(" ----------------------------------------------------------------------------- "),a("div",null,[U,a("div",V,[t(_,{justify:"space-around"},{default:e(()=>[t(c,{color:"primary",size:"x-small"},{default:e(()=>[l(" 32 ")]),_:1}),t(c,{color:"secondary"},{default:e(()=>[l(" 48 ")]),_:1}),t(c,{color:"success",size:"x-large"},{default:e(()=>[l(" 64 ")]),_:1})]),_:1})])])],2112)}const q=p(P,[["render",H],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/avatar/AvatarSize.vue"]]),E={},F=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" The "),a("code",null,"tile"),l(" prop removes the border radius from v-avatar leaving you with a simple square avatar. ")],-1),O={class:"mt-6 text-center"};function W(h,i){const c=o("v-icon"),_=o("v-avatar");return r(),u(f,null,[n(" ----------------------------------------------------------------------------- "),n(" Tile "),n(" ----------------------------------------------------------------------------- "),a("div",null,[F,a("div",O,[t(_,{rounded:"0",color:"primary"},{default:e(()=>[t(c,{icon:"mdi-alarm"})]),_:1})])])],2112)}const G=p(E,[["render",W],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/avatar/AvatarTile.vue"]]),I={},K=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" The "),a("code",null,"v-avatar"),l(" default slot will accept the "),a("code",null,"v-icon"),l(" component, an image, or text. Mix and match these with other props to create something unique. ")],-1),Q={class:"mt-4 text-center"},R=a("span",{class:"text-white text-h5"},"CJ",-1);function X(h,i){const c=o("v-icon"),_=o("v-avatar"),v=o("v-img"),s=o("v-row");return r(),u(f,null,[n(" ----------------------------------------------------------------------------- "),n(" Default Slot "),n(" ----------------------------------------------------------------------------- "),a("div",null,[K,a("div",Q,[t(s,{justify:"space-around"},{default:e(()=>[t(_,{color:"info"},{default:e(()=>[t(c,{icon:"mdi-account-circle"})]),_:1}),t(_,null,{default:e(()=>[t(v,{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"})]),_:1}),t(_,{color:"red"},{default:e(()=>[R]),_:1})]),_:1})])])],2112)}const Y=p(I,[["render",X],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/avatar/AvatarSlots.vue"]]),Z={},tt=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[l(" Using the "),a("span",{class:"font-weight-bold"},"tile"),l(" prop, we can create a sleek hard-lined profile card. ")],-1),et={class:"mt-4"};function ot(h,i){const c=o("v-img"),_=o("v-avatar"),v=o("v-list-item"),s=o("v-card");return r(),u(f,null,[n(" ----------------------------------------------------------------------------- "),n(" Profile Card "),n(" ----------------------------------------------------------------------------- "),a("div",null,[tt,a("div",et,[t(s,{class:"mx-auto","max-width":"434",tile:""},{default:e(()=>[t(c,{height:"100%",cover:"",src:"https://cdn.vuetifyjs.com/images/cards/server-room.jpg"},{default:e(()=>[t(_,{color:"grey",size:"150",rounded:"0"},{default:e(()=>[t(c,{src:"https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"})]),_:1}),t(v,{class:"text-white",title:"Marcus Obrien",subtitle:"Network Engineer"})]),_:1})]),_:1})])])],2112)}const at=p(Z,[["render",ot],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/avatar/AvatarProfileCard.vue"]]),nt={class:"mt-4"},lt=["innerHTML"],st={key:0,class:"text-grey"},ct=["innerHTML"],rt=C({__name:"AvatarAdvancedUsage",setup(h){const i=w([{avatar:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",name:"John Leider",title:"Welcome to Vuetify!",excerpt:"Thank you for joining our community..."},{color:"red",icon:"mdi-account-multiple",name:"Social",new:1,total:3,title:"Twitter"},{color:"teal",icon:"mdi-tag",name:"Promos",new:2,total:4,title:"Shop your way",exceprt:"New deals available, Join Today"}]),c=w("Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos.");return(_,v)=>{const s=o("v-list-item-subtitle"),x=o("v-img"),A=o("v-icon"),T=o("v-avatar"),g=o("v-col"),$=o("v-chip"),j=o("v-row"),k=o("v-expansion-panel-title"),D=o("v-card-text"),z=o("v-expansion-panel-text"),M=o("v-expansion-panel"),S=o("v-expansion-panels");return r(),u(f,null,[n(" ----------------------------------------------------------------------------- "),n(" Advanced Usage "),n(" ----------------------------------------------------------------------------- "),a("div",null,[t(s,{class:"text-wrap"},{default:e(()=>[l(" Combining an avatar with other components allows you to build beautiful user interfaces right out of the box. ")]),_:1}),a("div",nt,[t(S,{variant:"popout",class:"pa-4"},{default:e(()=>[(r(!0),u(f,null,N(i.value,(d,B)=>(r(),b(M,{key:B,"hide-actions":""},{default:e(()=>[t(k,null,{default:e(()=>[t(j,{align:"center",class:"spacer","no-gutters":""},{default:e(()=>[t(g,{cols:"4",sm:"2",md:"1"},{default:e(()=>[t(T,{size:"36px"},{default:e(()=>[d.avatar?(r(),b(x,{key:0,alt:"Avatar",src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"})):(r(),b(A,{key:1,color:d.color,icon:d.icon},null,8,["color","icon"]))]),_:2},1024)]),_:2},1024),t(g,{class:"hidden-xs-only text-left ml-2",sm:"5",md:"3"},{default:e(()=>[a("strong",{innerHTML:d.name},null,8,lt),d.total?(r(),u("span",st,"  ("+m(d.total)+") ",1)):n("v-if",!0)]),_:2},1024),t(g,{class:"text-no-wrap text-left",cols:"5",sm:"3"},{default:e(()=>[d.new?(r(),b($,{key:0,color:`${d.color}-lighten-1`,class:"ml-0 mr-2 text-black",label:"",small:""},{default:e(()=>[l(m(d.new)+" new ",1)]),_:2},1032,["color"])):n("v-if",!0),a("strong",{innerHTML:d.title},null,8,ct)]),_:2},1024),d.excerpt?(r(),b(g,{key:0,class:"text-grey text-truncate hidden-sm-and-down"},{default:e(()=>[l(" — "+m(d.excerpt),1)]),_:2},1024)):n("v-if",!0)]),_:2},1024)]),_:2},1024),t(z,null,{default:e(()=>[t(D,{class:"text-subtitle-1",textContent:m(c.value)},null,8,["textContent"])]),_:1})]),_:2},1024))),128))]),_:1})])])],2112)}}}),it=p(rt,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/avatar/AvatarAdvancedUsage.vue"]]),_t={class:"mt-6 text-center"},dt={class:"text-white text-h5"},ut={class:"mx-auto text-center"},vt={class:"text-white text-h5"},mt={class:"text-caption mt-1"},ft=C({__name:"AvatarMenu",setup(h){const i=w({initials:"JD",fullName:"John Doe",email:"john.doe@doe.com"});return(c,_)=>{const v=o("v-avatar"),s=o("v-btn"),x=o("v-divider"),A=o("v-card-text"),T=o("v-card"),g=o("v-menu");return r(),u(f,null,[n(" ----------------------------------------------------------------------------- "),n(" Menu "),n(" ----------------------------------------------------------------------------- "),a("div",null,[a("div",_t,[t(g,{bottom:"","min-width":"200px",rounded:"","offset-y":""},{activator:e(({props:$})=>[t(s,L({icon:""},$),{default:e(()=>[t(v,{color:"info",size:"large"},{default:e(()=>[a("span",dt,m(i.value.initials),1)]),_:1})]),_:2},1040)]),default:e(()=>[t(T,null,{default:e(()=>[t(A,null,{default:e(()=>[a("div",ut,[t(v,{color:"info"},{default:e(()=>[a("span",vt,m(i.value.initials),1)]),_:1}),a("h3",null,m(i.value.fullName),1),a("p",mt,m(i.value.email),1),t(x,{class:"my-3"}),t(s,{color:"info",rounded:"",variant:"text"},{default:e(()=>[l(" Edit Account ")]),_:1}),t(x,{class:"my-3"}),t(s,{color:"info",rounded:"",variant:"text"},{default:e(()=>[l(" Disconnect ")]),_:1})])]),_:1})]),_:1})]),_:1})])])],2112)}}}),pt=p(ft,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/avatar/AvatarMenu.vue"]]),ht=C({__name:"Avatar",setup(h){const i=w({title:"Avatar"}),c=w([{text:"Ui Components",disabled:!1,to:"#"},{text:"Avatar",disabled:!0}]);return(_,v)=>{const s=o("v-col"),x=o("v-row");return r(),u(f,null,[t(J,{title:i.value.title,breadcrumbs:c.value},null,8,["title","breadcrumbs"]),t(x,null,{default:e(()=>[t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Avatar - Size"},{default:e(()=>[t(q)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Avatar - Tile"},{default:e(()=>[t(G)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Avatar - Size"},{default:e(()=>[t(Y)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{heading:"Avatar - Menu"},{default:e(()=>[t(pt)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:e(()=>[t(y,{heading:"Avatar - Profile Card"},{default:e(()=>[t(at)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:e(()=>[t(y,{heading:"Avatar - Advanced usage"},{default:e(()=>[t(it)]),_:1})]),_:1})]),_:1})],64)}}}),bt=p(ht,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Avatar.vue"]]);export{bt as default};
