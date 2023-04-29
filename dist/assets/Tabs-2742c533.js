import{_ as T,e as B,g as x,r as n,o as d,f as r,j as c,b as a,a as t,w as e,F as f,k as $,c as D,d as o,t as A}from"./index-a27cae2a.js";import{B as U}from"./BaseBreadcrumb-7015d611.js";import{B as V}from"./BaseCard-3133106d.js";const N=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," You can optionally change the color of the v-system-bar by using the color prop. ",-1),E={class:"mt-6"},I=B({__name:"TabsAlign",setup(y){const u=x(null),l=x(["web","shopping","videos","images","news"]),_=x("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");return(m,s)=>{const v=n("v-app-bar-nav-icon"),g=n("v-toolbar-title"),C=n("v-spacer"),b=n("v-icon"),p=n("v-btn"),w=n("v-tab"),k=n("v-tabs"),h=n("v-toolbar"),S=n("v-card-text"),q=n("v-card"),j=n("v-window-item"),F=n("v-window");return d(),r(f,null,[c(" ----------------------------------------------------------------------------- "),c(" Align "),c(" ----------------------------------------------------------------------------- "),a("div",null,[N,a("div",E,[t(q,null,{default:e(()=>[t(h,{color:"primary"},{extension:e(()=>[t(k,{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=i=>u.value=i),"align-with-title":""},{default:e(()=>[(d(!0),r(f,null,$(l.value,i=>(d(),D(w,{key:i,value:i},{default:e(()=>[o(A(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),default:e(()=>[t(v),t(g,null,{default:e(()=>[o("Your Dashboard")]),_:1}),t(C),t(p,{icon:""},{default:e(()=>[t(b,null,{default:e(()=>[o("mdi-magnify")]),_:1})]),_:1}),t(p,{icon:""},{default:e(()=>[t(b,null,{default:e(()=>[o("mdi-dots-vertical")]),_:1})]),_:1})]),_:1}),t(F,{modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=i=>u.value=i)},{default:e(()=>[(d(!0),r(f,null,$(l.value,i=>(d(),D(j,{key:i,value:i},{default:e(()=>[t(q,{flat:""},{default:e(()=>[t(S,{textContent:A(_.value)},null,8,["textContent"])]),_:1})]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})])])],2112)}}}),O=T(I,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/tabs/TabsAlign.vue"]]),L={},M=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," The center-active prop will make the active tab always centered ",-1),P={class:"mt-6"};function Y(y,u){const l=n("v-tab"),_=n("v-tabs"),m=n("v-card");return d(),r(f,null,[c(" ----------------------------------------------------------------------------- "),c(" Center Active "),c(" ----------------------------------------------------------------------------- "),a("div",null,[M,a("div",P,[t(m,null,{default:e(()=>[t(_,{"background-color":"secondary",class:"d-flex align-center","center-active":""},{default:e(()=>[t(l,null,{default:e(()=>[o("One")]),_:1}),t(l,null,{default:e(()=>[o("Two")]),_:1}),t(l,null,{default:e(()=>[o("Three")]),_:1}),t(l,null,{default:e(()=>[o("Four")]),_:1}),t(l,null,{default:e(()=>[o("Five")]),_:1}),t(l,null,{default:e(()=>[o("Six")]),_:1}),t(l,null,{default:e(()=>[o("Seven")]),_:1}),t(l,null,{default:e(()=>[o("Eight")]),_:1}),t(l,null,{default:e(()=>[o("Nine")]),_:1}),t(l,null,{default:e(()=>[o("Ten")]),_:1}),t(l,null,{default:e(()=>[o("Eleven")]),_:1}),t(l,null,{default:e(()=>[o("Twelve")]),_:1}),t(l,null,{default:e(()=>[o("Thirteen")]),_:1}),t(l,null,{default:e(()=>[o("Fourteen")]),_:1}),t(l,null,{default:e(()=>[o("Fifteen")]),_:1}),t(l,null,{default:e(()=>[o("Sixteen")]),_:1}),t(l,null,{default:e(()=>[o("Seventeen")]),_:1}),t(l,null,{default:e(()=>[o("Eighteen")]),_:1}),t(l,null,{default:e(()=>[o("Nineteen")]),_:1}),t(l,null,{default:e(()=>[o("Twenty")]),_:1})]),_:1})]),_:1})])])],2112)}const z=T(L,[["render",Y],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/tabs/TabsCenterActive.vue"]]),G={},H=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," prev-icon and next-icon can be used for applying custom pagination icons. ",-1),J={class:"mt-6"};function K(y,u){const l=n("v-tab"),_=n("v-tabs"),m=n("v-sheet");return d(),r(f,null,[c(" ----------------------------------------------------------------------------- "),c(" Custom Icon "),c(" ----------------------------------------------------------------------------- "),a("div",null,[H,a("div",J,[t(m,{elevation:"6"},{default:e(()=>[t(_,{"background-color":"secondary","next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":"",class:"d-flex align-center"},{default:e(()=>[(d(),r(f,null,$(30,s=>t(l,{key:s},{default:e(()=>[o(" Item "+A(s),1)]),_:2},1024)),64))]),_:1})]),_:1})])])],2112)}const Q=T(G,[["render",K],["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/tabs/TabsCustomIcon.vue"]]),R=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," The vertical prop allows for v-tab components to stack vertically. ",-1),W={class:"mt-6"},X={class:"d-flex flex-row"},Z=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),tt=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas. ",-1),et=a("p",{class:"text-subtitle-1 text-grey-darken-1"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. ",-1),ot=B({__name:"TabsVertical",setup(y){const u=x("option-1");return(l,_)=>{const m=n("v-toolbar-title"),s=n("v-toolbar"),v=n("v-icon"),g=n("v-tab"),C=n("v-tabs"),b=n("v-card-text"),p=n("v-card"),w=n("v-window-item"),k=n("v-window");return d(),r(f,null,[c(" ----------------------------------------------------------------------------- "),c(" Vertical "),c(" ----------------------------------------------------------------------------- "),a("div",null,[R,a("div",W,[t(p,null,{default:e(()=>[t(s,{color:"primary"},{default:e(()=>[t(m,null,{default:e(()=>[o("User Profile")]),_:1})]),_:1}),a("div",X,[t(C,{modelValue:u.value,"onUpdate:modelValue":_[0]||(_[0]=h=>u.value=h),direction:"vertical",color:"primary"},{default:e(()=>[t(g,{value:"option-1"},{default:e(()=>[t(v,{start:""},{default:e(()=>[o(" mdi-account ")]),_:1}),o(" Option 1 ")]),_:1}),t(g,{value:"option-2"},{default:e(()=>[t(v,{start:""},{default:e(()=>[o(" mdi-lock ")]),_:1}),o(" Option 2 ")]),_:1}),t(g,{value:"option-3"},{default:e(()=>[t(v,{start:""},{default:e(()=>[o(" mdi-access-point ")]),_:1}),o(" Option 3 ")]),_:1})]),_:1},8,["modelValue"]),t(k,{modelValue:u.value,"onUpdate:modelValue":_[1]||(_[1]=h=>u.value=h)},{default:e(()=>[t(w,{value:"option-1"},{default:e(()=>[t(p,{flat:""},{default:e(()=>[t(b,null,{default:e(()=>[Z]),_:1})]),_:1})]),_:1}),t(w,{value:"option-2"},{default:e(()=>[t(p,{flat:""},{default:e(()=>[t(b,null,{default:e(()=>[tt]),_:1})]),_:1})]),_:1}),t(w,{value:"option-3"},{default:e(()=>[t(p,{flat:""},{default:e(()=>[t(b,null,{default:e(()=>[et]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})])])],2112)}}}),nt=T(ot,[["__file","D:/trabajo/Todofull/todofull-front-2/src/components/vuetifyComponents/tabs/TabsVertical.vue"]]),lt=B({__name:"Tabs",setup(y){const u=x({title:"Tabs"}),l=x([{text:"Ui Components",disabled:!1,to:"#"},{text:"Tabs",disabled:!0}]);return(_,m)=>{const s=n("v-col"),v=n("v-row");return d(),r(f,null,[t(U,{title:u.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),t(v,null,{default:e(()=>[t(s,{cols:"12",sm:"12"},{default:e(()=>[t(V,{heading:"Align"},{default:e(()=>[t(O)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:e(()=>[t(V,{heading:"Center Active"},{default:e(()=>[t(z)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:e(()=>[t(V,{heading:"Custom Icon"},{default:e(()=>[t(Q)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12"},{default:e(()=>[t(V,{heading:"Vertical Tabs"},{default:e(()=>[t(nt)]),_:1})]),_:1})]),_:1})],64)}}}),ct=T(lt,[["__file","D:/trabajo/Todofull/todofull-front-2/src/views/ui-components/Tabs.vue"]]);export{ct as default};
