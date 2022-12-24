import{_ as R}from"./BaseBreadcrumb.02b34150.js";import{_ as f}from"./BaseCard.40e43fa9.js";import{m as b,r,q as x,o as m,n as v,f as a,a as e,w as l,e as _,ba as c,i as D,b as w,l as t,a0 as g,bt as S,x as U,aN as C,aS as I,M,g as T,k as $,a8 as Y,bn as A,c as B,u as y,X as E,P as N,L as P,F as L}from"./index.55ede2bf.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";const O=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You can set "),a("code",null,"min"),t(" and "),a("code",null,"max"),t(" values of sliders. ")],-1),W={class:"mt-4"},j=t("Min and max default slider"),H=b({setup(p){const s=r(-50),o=r(90),u=r(40);return(n,d)=>{const i=x("v-subheader");return m(),v("div",null,[O,a("div",W,[e(i,null,{default:l(()=>[j]),_:1}),e(w,null,{default:l(()=>[e(_,{class:"pr-4"},{default:l(()=>[e(c,{modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=h=>u.value=h),class:"align-center",max:o.value,min:s.value,"hide-details":""},null,8,["modelValue","max","min"]),e(D,{dense:"",label:"set Value",type:"number",modelValue:u.value,"onUpdate:modelValue":d[1]||(d[1]=h=>u.value=h)},null,8,["modelValue"])]),_:1})]),_:1})])])}}}),q={},X=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You cannot interact with "),a("code",null,"disabled"),t(" sliders. ")],-1),G={class:"mt-4"};function J(p,s){return m(),v("div",null,[X,a("div",G,[e(c,{disabled:"",label:"Disabled",value:"30"})])])}var K=F(q,[["render",J]]);const Q={},Z=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," You cannot interact with readonly sliders, but they look as ordinary ones. ",-1),ee={class:"mt-4"};function le(p,s){return m(),v("div",null,[Z,a("div",ee,[e(c,{readonly:"",label:"Readonly",value:"30"})])])}var te=F(Q,[["render",le]]);const ae=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You can add icons to the slider with the "),a("code",null,"append-icon"),t(" and "),a("code",null,"prepend-icon"),t(" props. With "),a("code",null,"@click:append"),t(" and "),a("code",null,"@click:prepend"),t(" you can trigger a callback function when click the icon. ")],-1),se={class:"mt-4"},oe=t("Media volume"),ne=t("Alarm volume"),ue=t("Icon click callback"),de=b({setup(p){const s=r(0),o=r(0),u=r(0);function n(){u.value=u.value-10||0}function d(){u.value=u.value+10||100}return(i,h)=>{const k=x("v-subheader");return m(),v("div",null,[ae,a("div",se,[e(k,null,{default:l(()=>[oe]),_:1}),e(g,null,{default:l(()=>[e(c,{modelValue:s.value,"onUpdate:modelValue":h[0]||(h[0]=V=>s.value=V),"prepend-icon":"mdi-volume-high"},null,8,["modelValue"])]),_:1}),e(k,null,{default:l(()=>[ne]),_:1}),e(g,null,{default:l(()=>[e(c,{modelValue:o.value,"onUpdate:modelValue":h[1]||(h[1]=V=>o.value=V),"append-icon":"mdi-alarm"},null,8,["modelValue"])]),_:1}),e(k,null,{default:l(()=>[ue]),_:1}),e(g,null,{default:l(()=>[e(c,{modelValue:u.value,"onUpdate:modelValue":h[2]||(h[2]=V=>u.value=V),"append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline","onClick:append":d,"onClick:prepend":n},null,8,["modelValue"])]),_:1})])])}}}),ie=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You can use "),a("code",null,"vertical"),t(" to switch sliders to a vertical orientation. If you need to change the height of the slider, use css. ")],-1),re={class:"mt-4"},ce=b({setup(p){const s=r(10),o=r([20,40]);return(u,n)=>(m(),v("div",null,[ie,a("div",re,[e(c,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=d=>s.value=d),vertical:"",label:"Regular"},null,8,["modelValue"]),e(S,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=d=>o.value=d),vertical:"",label:"Range"},null,8,["modelValue"])])]))}}),_e=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You can display a "),a("code",null,"thumb-label"),t(" while sliding or always. It It can have a custom color by setting "),a("code",null,"thumb-color"),t(" and a custom size with "),a("code",null,"thumb-size"),t(". With "),a("code",null,"always-dirty"),t(" its color will never change, even when on "),a("code",null,"min"),t(" value. ")],-1),me={class:"mt-4"},ve=t("Show thumb when using slider"),pe=t("Always show thumb label"),he=t("Custom thumb size"),fe=t("Custom thumb label"),be=b({setup(p){const s=r(["\u{1F62D}","\u{1F622}","\u2639\uFE0F","\u{1F641}","\u{1F610}","\u{1F642}","\u{1F60A}","\u{1F601}","\u{1F604}","\u{1F60D}"]),o=r(45);return(u,n)=>{const d=x("v-subheader");return m(),v("div",null,[_e,a("div",me,[e(w,null,{default:l(()=>[e(_,{cols:"12"},{default:l(()=>[e(d,{class:"pl-0"},{default:l(()=>[ve]),_:1}),e(c,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=i=>o.value=i),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:l(()=>[e(d,{class:"pl-0"},{default:l(()=>[pe]),_:1}),e(c,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=i=>o.value=i),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:l(()=>[e(d,{class:"pl-0"},{default:l(()=>[he]),_:1}),e(c,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=i=>o.value=i),"thumb-size":24,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:l(()=>[e(d,{class:"pl-0"},{default:l(()=>[fe]),_:1}),e(c,{modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=i=>o.value=i),"thumb-size":24,"thumb-label":"always"},{"thumb-label":l(({value:i})=>[t(U(s.value[Math.min(Math.floor(i/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1})])])}}}),Ve={},ge=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[a("code",null,"v-slider"),t(" with "),a("code",null,"inverse-label"),t(" property displays label at the end of it. ")],-1),ye={class:"mt-4"};function xe(p,s){return m(),v("div",null,[ge,a("div",ye,[e(c,{"inverse-label":"",label:"Inverse label",value:"30"})])])}var ke=F(Ve,[["render",xe]]);const $e=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Tick marks represent predetermined values to which the user can move the slider. ",-1),we={class:"mt-4"},Se=t("Show ticks when using slider"),Ue=t("Always show ticks"),Fe=t("Tick size"),Ce=t("Tick labels"),Te=b({setup(p){const s=r({0:"Figs",1:"Lemon",2:"Pear",3:"Apple"});return(o,u)=>{const n=x("v-subheader");return m(),v("div",null,[$e,a("div",we,[e(n,null,{default:l(()=>[Se]),_:1}),e(c,{step:"10"}),e(n,null,{default:l(()=>[Ue]),_:1}),e(c,{step:"10","show-ticks":"always"}),e(n,null,{default:l(()=>[Fe]),_:1}),e(c,{step:"10","show-ticks":"always","tick-size":"4"}),e(n,null,{default:l(()=>[Ce]),_:1}),e(c,{ticks:s.value,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["ticks"])])])}}}),ze=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" You can set the colors of the slider using the props "),a("code",null,"color"),t(", "),a("code",null,"track-color"),t(" and "),a("code",null,"thumb-color"),t(". ")],-1),Re={class:"mt-4"},De=b({setup(p){const s=r({label:"color",val:25,color:"orange darken-3"}),o=r({label:"track-color",val:75,color:"green lighten-1"}),u=r({label:"thumb-color",val:50,color:"red"});return(n,d)=>(m(),v("div",null,[ze,a("div",Re,[e(c,{modelValue:s.value.val,"onUpdate:modelValue":d[0]||(d[0]=i=>s.value.val=i),color:s.value.color,label:s.value.label},null,8,["modelValue","color","label"]),e(c,{modelValue:o.value.val,"onUpdate:modelValue":d[1]||(d[1]=i=>o.value.val=i),label:o.value.label,"track-color":o.value.color},null,8,["modelValue","label","track-color"]),e(c,{modelValue:u.value.val,"onUpdate:modelValue":d[2]||(d[2]=i=>u.value.val=i),label:u.value.label,"thumb-color":u.value.color,"thumb-label":"always"},null,8,["modelValue","label","thumb-color"])])]))}}),Ie=a("p",{class:"text-subtitle-1 text-grey-darken-1"},"Range sliders.",-1),Me={class:"mt-4"},Ye=t("Default range slider"),Ae=t("Disabled range slider"),Be=b({setup(p){const s=r([30,60]),o=r([30,60]);return(u,n)=>{const d=x("v-subheader");return m(),v("div",null,[Ie,a("div",Me,[e(d,null,{default:l(()=>[Ye]),_:1}),e(g,null,{default:l(()=>[e(S,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=i=>s.value=i)},null,8,["modelValue"])]),_:1}),e(d,null,{default:l(()=>[Ae]),_:1}),e(g,null,{default:l(()=>[e(S,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=i=>o.value=i),disabled:""},null,8,["modelValue"])]),_:1})])])}}}),Ee=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" Vuetify includes simple validation through the "),a("code",null,"rules"),t(" prop. The prop accepts an array of callbacks. While validating rules, the current v-model value will be passed to the callback. This callback should return either "),a("code",null,"true"),t(" or a "),a("code",null,"String"),t(", the error message. ")],-1),Ne={class:"mt-4"},Pe=t("Rules"),Le=t("Persistent hint"),Oe=b({setup(p){const s=r(30),o=r([u=>u<="40"||"Only 40 in stock"]);return(u,n)=>{const d=x("v-subheader");return m(),v("div",null,[Ee,a("div",Ne,[e(d,null,{default:l(()=>[Pe]),_:1}),e(g,{class:"pt-0"},{default:l(()=>[e(c,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=i=>s.value=i),rules:o.value,label:"How many?",step:"10","thumb-label":"always","show-ticks":"always"},null,8,["modelValue","rules"])]),_:1}),e(d,null,{default:l(()=>[Le]),_:1}),e(g,{class:"pt-0"},{default:l(()=>[e(c,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=i=>s.value=i),rules:o.value,hint:"40 in stock",label:"How many?","persistent-hint":"",step:"10","thumb-label":"always","show-ticks":"always"},null,8,["modelValue","rules"])]),_:1})])])}}});const We=a("p",{class:"text-subtitle-1 text-grey-darken-1"},[t(" Use slots such as "),a("code",null,"prepend"),t(" and "),a("code",null,"append"),t(" to easily customize the "),a("code",null,"v-slider"),t(" to fit any situation. ")],-1),je={class:"mt-4"},He=a("span",{class:"subheading"},"METRONOME",-1),qe=t("mdi-share-variant"),Xe=["textContent"],Ge=a("span",{class:"subheading font-weight-light mr-1"},"BPM",-1),Je=t(" mdi-minus "),Ke=t(" mdi-plus "),Qe=b({setup(p){const s=r(40);r(null);const o=r(!1),u=C(()=>s.value<100?"indigo":s.value<125?"teal":s.value<140?"green":s.value<175?"orange":"red"),n=C(()=>`${60/s.value}s`);function d(){s.value--}function i(){s.value++}function h(){o.value=!o.value}return(k,V)=>(m(),v("template",null,[a("div",null,[We,a("div",je,[e(Y,{flat:"",dense:""},{default:l(()=>[e(I,null,{default:l(()=>[He]),_:1}),e(M),e(T,{icon:""},{default:l(()=>[e($,null,{default:l(()=>[qe]),_:1})]),_:1})]),_:1}),e(g,null,{default:l(()=>[e(w,{class:"mb-4",justify:"space-between"},{default:l(()=>[e(_,{class:"text-left"},{default:l(()=>[a("span",{class:"display-3 font-weight-light",textContent:U(s.value)},null,8,Xe),Ge,e(A,null,{default:l(()=>[o.value?(m(),B(N,{key:0,color:y(u),style:E({animationDuration:y(n)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):P("",!0)]),_:1})]),_:1}),e(_,{class:"text-right"},{default:l(()=>[e(T,{color:y(u),dark:"",depressed:"",fab:"",onClick:h},{default:l(()=>[e($,{large:""},{default:l(()=>[t(U(o.value?"mdi-pause":"mdi-play"),1)]),_:1})]),_:1},8,["color"])]),_:1})]),_:1}),e(c,{modelValue:s.value,"onUpdate:modelValue":V[0]||(V[0]=z=>s.value=z),color:y(u),"track-color":"grey","always-dirty":"",min:"40",max:"218"},{prepend:l(()=>[e($,{color:y(u),onClick:d},{default:l(()=>[Je]),_:1},8,["color"])]),append:l(()=>[e($,{color:y(u),onClick:i},{default:l(()=>[Ke]),_:1},8,["color"])]),_:1},8,["modelValue","color"])]),_:1})])])]))}}),al=b({setup(p){const s=r({title:"Sliders"}),o=r([{text:"Form Elements",disabled:!1,to:"#"},{text:"Sliders",disabled:!0}]);return(u,n)=>(m(),v(L,null,[e(R,{title:s.value.title,breadcrumbs:o.value},null,8,["title","breadcrumbs"]),e(w,null,{default:l(()=>[e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Min & Max values"},{default:l(()=>[e(H)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Disabled"},{default:l(()=>[e(K)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Readonly"},{default:l(()=>[e(te)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Icons"},{default:l(()=>[e(de)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Vertical sliders"},{default:l(()=>[e(ce)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Thumb"},{default:l(()=>[e(be)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Inverse label"},{default:l(()=>[e(ke)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Ticks"},{default:l(()=>[e(Te)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Custom colors"},{default:l(()=>[e(De)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Range"},{default:l(()=>[e(Be)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Validation"},{default:l(()=>[e(Oe)]),_:1})]),_:1}),e(_,{cols:"12",sm:"12"},{default:l(()=>[e(f,{heading:"Sliders - Slots"},{default:l(()=>[e(Qe)]),_:1})]),_:1})]),_:1})],64))}});export{al as default};
