import{_ as L}from"./BaseBreadcrumb.c1b3a01d.js";import{_}from"./BaseCard.df6d96ee.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,n as c,f as a,a as t,w as e,Q as r,h as s,e as x,l as w,p,A as z,d as T,m as $,r as m,b2 as M,F as k,v as N,c as f,b3 as P,b4 as S,b as i,y as d,L as y,P as E,b5 as B,ab as C,b6 as J,g as b,B as D,T as V,N as H}from"./index.270d3377.js";const I={},q=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" The "),a("code",null,"size"),s(" prop allows you to define the height and width of "),a("code",null,"v-avatar"),s(". This prop scales both evenly with an aspect ratio of 1. "),a("code",null,"height"),s(" and "),a("code",null,"width"),s(" props will override this prop. ")],-1),U={class:"mt-6"};function F(u,o){return l(),c("div",null,[q,a("div",U,[t(x,{justify:"space-around"},{default:e(()=>[t(r,{color:"primary",size:"x-small"},{default:e(()=>[s(" 32 ")]),_:1}),t(r,{color:"secondary"},{default:e(()=>[s(" 48 ")]),_:1}),t(r,{color:"success",size:"x-large"},{default:e(()=>[s(" 64 ")]),_:1})]),_:1})])])}var O=v(I,[["render",F]]);const Q={},R=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" The "),a("code",null,"tile"),s(" prop removes the border radius from v-avatar leaving you with a simple square avatar. ")],-1),W={class:"mt-6 text-center"};function G(u,o){return l(),c("div",null,[R,a("div",W,[t(r,{rounded:"0",color:"primary"},{default:e(()=>[t(w,{icon:"mdi-alarm"})]),_:1})])])}var K=v(Q,[["render",G]]);const X={},Y=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" The "),a("code",null,"v-avatar"),s(" default slot will accept the "),a("code",null,"v-icon"),s(" component, an image, or text. Mix and match these with other props to create something unique. ")],-1),Z={class:"mt-4 text-center"},tt=a("span",{class:"text-white text-h5"},"CJ",-1);function et(u,o){return l(),c("div",null,[Y,a("div",Z,[t(x,{justify:"space-around"},{default:e(()=>[t(r,{color:"info"},{default:e(()=>[t(w,{icon:"mdi-account-circle"})]),_:1}),t(r,null,{default:e(()=>[t(p,{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"})]),_:1}),t(r,{color:"red"},{default:e(()=>[tt]),_:1})]),_:1})])])}var at=v(X,[["render",et]]);const st={},lt=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[s(" Using the "),a("span",{class:"font-weight-bold"},"tile"),s(" prop, we can create a sleek hard-lined profile card. ")],-1),ot={class:"mt-4"};function nt(u,o){return l(),c("div",null,[lt,a("div",ot,[t(T,{class:"mx-auto","max-width":"434",tile:""},{default:e(()=>[t(p,{height:"100%",cover:"",src:"https://cdn.vuetifyjs.com/images/cards/server-room.jpg"},{default:e(()=>[t(r,{color:"grey",size:"150",rounded:"0"},{default:e(()=>[t(p,{src:"https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"})]),_:1}),t(z,{class:"text-white",title:"Marcus Obrien",subtitle:"Network Engineer"})]),_:1})]),_:1})])])}var rt=v(st,[["render",nt]]);const it={class:"mt-4"},ct=["innerHTML"],dt={key:0,class:"text-grey"},ut=["innerHTML"],_t=$({__name:"AvatarAdvancedUsage",setup(u){const o=m([{avatar:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",name:"John Leider",title:"Welcome to Vuetify!",excerpt:"Thank you for joining our community..."},{color:"red",icon:"mdi-account-multiple",name:"Social",new:1,total:3,title:"Twitter"},{color:"teal",icon:"mdi-tag",name:"Promos",new:2,total:4,title:"Shop your way",exceprt:"New deals available, Join Today"}]),h=m("Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos.");return(A,g)=>(l(),c("div",null,[t(M,{class:"text-wrap"},{default:e(()=>[s(" Combining an avatar with other components allows you to build beautiful user interfaces right out of the box. ")]),_:1}),a("div",it,[t(J,{variant:"popout",class:"pa-4"},{default:e(()=>[(l(!0),c(k,null,N(o.value,(n,j)=>(l(),f(P,{key:j,"hide-actions":""},{default:e(()=>[t(S,null,{default:e(()=>[t(x,{align:"center",class:"spacer","no-gutters":""},{default:e(()=>[t(i,{cols:"4",sm:"2",md:"1"},{default:e(()=>[t(r,{size:"36px"},{default:e(()=>[n.avatar?(l(),f(p,{key:0,alt:"Avatar",src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"})):(l(),f(w,{key:1,color:n.color,icon:n.icon},null,8,["color","icon"]))]),_:2},1024)]),_:2},1024),t(i,{class:"hidden-xs-only text-left ml-2",sm:"5",md:"3"},{default:e(()=>[a("strong",{innerHTML:n.name},null,8,ct),n.total?(l(),c("span",dt," \xA0("+d(n.total)+") ",1)):y("",!0)]),_:2},1024),t(i,{class:"text-no-wrap text-left",cols:"5",sm:"3"},{default:e(()=>[n.new?(l(),f(E,{key:0,color:`${n.color}-lighten-1`,class:"ml-0 mr-2 text-black",label:"",small:""},{default:e(()=>[s(d(n.new)+" new ",1)]),_:2},1032,["color"])):y("",!0),a("strong",{innerHTML:n.title},null,8,ut)]),_:2},1024),n.excerpt?(l(),f(i,{key:0,class:"text-grey text-truncate hidden-sm-and-down"},{default:e(()=>[s(" \u2014 "+d(n.excerpt),1)]),_:2},1024)):y("",!0)]),_:2},1024)]),_:2},1024),t(B,null,{default:e(()=>[t(C,{class:"text-subtitle-1",textContent:d(h.value)},null,8,["textContent"])]),_:1})]),_:2},1024))),128))]),_:1})])]))}}),ft={class:"mt-6 text-center"},mt={class:"text-white text-h5"},ht={class:"mx-auto text-center"},pt={class:"text-white text-h5"},vt={class:"text-caption mt-1"},xt=$({__name:"AvatarMenu",setup(u){const o=m({initials:"JD",fullName:"John Doe",email:"john.doe@doe.com"});return(h,A)=>(l(),c("div",null,[a("div",ft,[t(H,{bottom:"","min-width":"200px",rounded:"","offset-y":""},{activator:e(({props:g})=>[t(b,D({icon:""},g),{default:e(()=>[t(r,{color:"info",size:"large"},{default:e(()=>[a("span",mt,d(o.value.initials),1)]),_:1})]),_:2},1040)]),default:e(()=>[t(T,null,{default:e(()=>[t(C,null,{default:e(()=>[a("div",ht,[t(r,{color:"info"},{default:e(()=>[a("span",pt,d(o.value.initials),1)]),_:1}),a("h3",null,d(o.value.fullName),1),a("p",vt,d(o.value.email),1),t(V,{class:"my-3"}),t(b,{color:"info",rounded:"",variant:"text"},{default:e(()=>[s(" Edit Account ")]),_:1}),t(V,{class:"my-3"}),t(b,{color:"info",rounded:"",variant:"text"},{default:e(()=>[s(" Disconnect ")]),_:1})])]),_:1})]),_:1})]),_:1})])]))}}),$t=$({__name:"Avatar",setup(u){const o=m({title:"Avatar"}),h=m([{text:"Ui Components",disabled:!1,to:"#"},{text:"Avatar",disabled:!0}]);return(A,g)=>(l(),c(k,null,[t(L,{title:o.value.title,breadcrumbs:h.value},null,8,["title","breadcrumbs"]),t(x,null,{default:e(()=>[t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(_,{heading:"Avatar - Size"},{default:e(()=>[t(O)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(_,{heading:"Avatar - Tile"},{default:e(()=>[t(K)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(_,{heading:"Avatar - Size"},{default:e(()=>[t(at)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(_,{heading:"Avatar - Menu"},{default:e(()=>[t(xt)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12"},{default:e(()=>[t(_,{heading:"Avatar - Profile Card"},{default:e(()=>[t(rt)]),_:1})]),_:1}),t(i,{cols:"12",sm:"12"},{default:e(()=>[t(_,{heading:"Avatar - Advanced usage"},{default:e(()=>[t(_t)]),_:1})]),_:1})]),_:1})],64))}});export{$t as default};
