(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{73595:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var a=i(n(61268)),r=n(85893),o=(0,a.default)((0,r.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.Z=o},89881:function(e,t,n){var i=n(47816),a=n(99291)(i);e.exports=a},28483:function(e,t,n){var i=n(90898)();e.exports=i},47816:function(e,t,n){var i=n(28483),a=n(3674);e.exports=function(e,t){return e&&i(e,t,a)}},69199:function(e,t,n){var i=n(89881),a=n(98612);e.exports=function(e,t){var n=-1,r=a(e)?Array(e.length):[];return i(e,function(e,i,a){r[++n]=t(e,i,a)}),r}},82689:function(e,t,n){var i=n(29932),a=n(97786),r=n(67206),o=n(69199),s=n(71131),l=n(7518),c=n(85022),d=n(6557),u=n(1469);e.exports=function(e,t,n){t=t.length?i(t,function(e){return u(e)?function(t){return a(t,1===e.length?e[0]:e)}:e}):[d];var x=-1;return t=i(t,l(r)),s(o(e,function(e,n,a){return{criteria:i(t,function(t){return t(e)}),index:++x,value:e}}),function(e,t){return c(e,t,n)})}},71131:function(e){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},26393:function(e,t,n){var i=n(33448);e.exports=function(e,t){if(e!==t){var n=void 0!==e,a=null===e,r=e==e,o=i(e),s=void 0!==t,l=null===t,c=t==t,d=i(t);if(!l&&!d&&!o&&e>t||o&&s&&c&&!l&&!d||a&&s&&c||!n&&c||!r)return 1;if(!a&&!o&&!d&&e<t||d&&n&&r&&!a&&!o||l&&n&&r||!s&&r||!c)return -1}return 0}},85022:function(e,t,n){var i=n(26393);e.exports=function(e,t,n){for(var a=-1,r=e.criteria,o=t.criteria,s=r.length,l=n.length;++a<s;){var c=i(r[a],o[a]);if(c){if(a>=l)return c;return c*("desc"==n[a]?-1:1)}}return e.index-t.index}},99291:function(e,t,n){var i=n(98612);e.exports=function(e,t){return function(n,a){if(null==n)return n;if(!i(n))return e(n,a);for(var r=n.length,o=t?r:-1,s=Object(n);(t?o--:++o<r)&&!1!==a(s[o],o,s););return n}}},90898:function(e){e.exports=function(e){return function(t,n,i){for(var a=-1,r=Object(t),o=i(t),s=o.length;s--;){var l=o[e?s:++a];if(!1===n(r[l],l,r))break}return t}}},75472:function(e,t,n){var i=n(82689),a=n(1469);e.exports=function(e,t,n,r){return null==e?[]:(a(t)||(t=null==t?[]:[t]),a(n=r?void 0:n)||(n=null==n?[]:[n]),i(e,t,n))}},31101:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake/[[...params]]",function(){return n(69709)}])},29652:function(e,t,n){"use strict";var i=n(85893),a=n(3992),r=n(65178),o=n(14831);t.Z=e=>{let{onChange:t,selectedLabel:n,token:s,tokens:l=[],useSolidityAddress:c,tooltipVariant:d}=e,{close:u,isOpen:x,open:h}=(0,a.Z)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{onClick:t?()=>l.length>1&&h():void 0,token:s,tooltipVariant:d,useSolidityAddress:c}),(0,i.jsx)(r.Z,{onChange:t,onClose:u,isOpen:x,selectedLabel:n,token:s,tokens:l})]})}},78110:function(e,t,n){"use strict";var i=n(85893),a=n(15861),r=n(51233),o=n(18979),s=n(67720),l=n(91402),c=n(618),d=n(4002),u=n(29652),x=n(38167),h=n(9814);n(67294);var p=n(80841);let m=e=>{let{balance:t,estimated:n=!1,inputProps:p,onTokenChange:m,onValueChange:g,token:f,sx:b,title:k,tokens:j,value:v,percentChange:Z,pool:y,showFee:S=!1,showClaimableSauce:w=!1,locked:C,disabled:I=!1,chipsDisabled:E=!1,balanceLoading:A,isLoading:_,tooltipVariant:P}=e,R=l.ih.fromRawAmount(f,(0,d.nq)(f.decimals,v));return(0,i.jsxs)(h.Mt,{sx:b,children:[(0,i.jsxs)(x.Z,{sx:{mb:2},children:[(0,i.jsxs)(a.Z,{color:"custom.subDetail",fontSize:16,fontWeight:600,children:[k," ",n&&" (estimated)"]}),!C&&(0,i.jsx)(r.Z,{direction:"row",spacing:3,children:(0,i.jsx)(h.NT,{tokenValue:R,onValueChange:g,balance:t,value:v,disabled:I||E})})]}),(0,i.jsxs)(x.Z,{sx:{mb:2,mt:2},children:[(0,i.jsx)(u.Z,{onChange:m,selectedLabel:k,token:f,tokens:j,tooltipVariant:P}),C?(0,i.jsx)(h.dw,{}):_?(0,i.jsx)(o.Z,{width:"40%"}):(0,i.jsx)(h.Dr,{inputProps:p,token:f,onValueChange:g,value:v,disabled:I||!!A})]}),(0,i.jsx)(s.Z,{sx:{opacity:.3,borderColor:"custom.dividerGrey",mx:-5,mb:1}}),(0,i.jsx)(h.iE,{pool:y,tokenValue:R,balance:t,percentChange:Z,balanceLoading:A}),w&&f.address===c.ky&&(0,i.jsx)(h.tZ,{xSauceAmount:R}),S&&(0,i.jsx)(h.ow,{})]})};t.Z=e=>{let t=(0,p.y)(["pollingAccountBalance"]),n=(0,p.y)(["accountBalance"]);return(0,i.jsx)(m,{...e,balanceLoading:t>0||n>0})}},9814:function(e,t,n){"use strict";n.d(t,{Dr:function(){return E},Mt:function(){return T},NT:function(){return I},dw:function(){return R},iE:function(){return A},ow:function(){return P},tZ:function(){return _}});var i=n(85893),a=n(73595),r=n(87918),o=n(87357),s=n(15861),l=n(18979),c=n(90629),d=n(70794);n(67294);var u=n(16114),x=n(41569),h=n(65074),p=n(75863),m=n(91402),g=n(47808),f=n(618),b=n(4002),k=n(25685),j=n(14789),v=n(26550),Z=n(38167),y=n(82400),S=n(56011),w=n(3422),C=n(67655);let I=e=>{let{tokenValue:t,onValueChange:n,balance:a,value:o,disabled:s}=e,l=t.greaterThan(0),c=e=>{n((0,C.gd)(e,a).toExact())};return(0,i.jsx)(i.Fragment,{children:[.25,.5,1].map(e=>(0,i.jsx)(r.Z,{disabled:s,className:l&&(0,C.gd)(e,a).toExact()===o?"active":void 0,label:1===e?"MAX":"".concat(100*e,"%"),onClick:()=>c(e),size:"small",variant:"filled",sx:{fontSize:12,height:20,lineHeight:1}},e))})},E=e=>{let{inputProps:t,token:n,onValueChange:a,value:r,disabled:o}=e;return(0,i.jsx)(k.Z,{className:"dense",variant:"standard",InputProps:{disableUnderline:!0,autoComplete:"off",sx:{fontSize:18,fontWeight:600,ml:1.5,border:"none"}},inputProps:{...t,sx:{pb:0,color:e=>e.palette.custom.defaultDetail,...null==t?void 0:t.sx}},size:"small",onChange:e=>a(e.target.value),onFocus:e=>{e.target.select()},value:r||"",disabled:o})},A=e=>{let{pool:t,tokenValue:n,balance:a,percentChange:r,balanceLoading:c}=e,d=!f.Xs,u=(t?w.D2:w.N)({...t?{pool:t}:{},value:n}),x={fontSize:14,color:"custom.mainDetail",lineHeight:1.1};return(0,i.jsxs)(Z.Z,{children:[(0,i.jsxs)(o.Z,{display:"flex",flexDirection:"row",alignItems:"center",children:[(0,i.jsx)(s.Z,{...x,mr:1,children:"Balance:"}),(0,i.jsx)(s.Z,{...x,mr:"auto",children:c?(0,i.jsx)(l.Z,{width:"20px"}):(0,S.UH)(a,3,4)})]}),d&&(0,i.jsxs)(s.Z,{...x,children:[u,r&&!(null==r?void 0:r.equalTo(0))&&(0,i.jsxs)(s.Z,{component:"span",color:(e=>{if(e.greaterThan(0))return"textSecondary";let t=Number(e.toFixed(2));return t>-1?"default":t>-5?"warning.light":"error.main"})(r),children:["\xa0(","".concat((0,y.aF)(r.toFixed(2,{groupSeparator:","}))||"0","%"),")"]})]})]})},_=e=>{let{xSauceAmount:t}=e,{data:n=h.Pg}=(0,h.ZP)(f.vj),{data:a={ratio:g.xE}}=(0,x.Z)(),r=m.ih.fromRawAmount(n,(0,b.nq)(n.decimals,t.multiply(a.ratio).toExact())),o=(0,w.N)({value:r}),l=!f.Xs;return(0,i.jsxs)(Z.Z,{sx:{mt:"10px",mb:"2px",mx:"15px"},children:[(0,i.jsxs)(s.Z,{fontSize:"14px",color:"custom.mainDetail",mr:"auto",children:["SAUCE: ",(0,S.UH)(r)]}),l&&(0,i.jsx)(s.Z,{fontSize:"14px",color:"custom.mainDetail",children:o})]})},P=()=>{let{data:e}=(0,u.Z)(),t=(0,p.Mb)(e||new d.Z(0)),n=m.ih.fromRawAmount(h.k3,t.isFinite()?t.toFixed(0):g.xE);return(0,i.jsxs)(Z.Z,{sx:{mt:2.5,mb:.5},children:[(0,i.jsx)(v.Z,{title:(0,i.jsxs)(i.Fragment,{children:["Stake fee in HBAR.",(0,i.jsx)(j.C,{href:"https://docs.saucerswap.finance/features/farm/farm-tutorial#how-to-farm-yield-guide",children:"\xa0Learn more"})]}),children:(0,i.jsx)(s.Z,{color:"custom.mainDetail",mr:"auto",children:"Fee"})}),(0,i.jsx)(s.Z,{color:"custom.mainDetail",children:(0,S.UH)(n)})]})},R=e=>(0,i.jsx)(a.Z,{fontSize:"small",sx:{mr:2,color:"custom.defaultDetail"}}),T=e=>{let{children:t,sx:n}=e;return(0,i.jsx)(c.Z,{sx:{backgroundColor:"custom.swapBackground",py:2.5,px:5,...n},variant:"outlined",children:t})}},71866:function(e,t,n){"use strict";n.d(t,{_:function(){return g}});var i=n(85893),a=n(86886),r=n(87357),o=n(15861),s=n(11057),l=n(98396),c=n(2734),d=n(67294),u=n(14789);let x={maxWidth:"250px",width:{xs:"90%",md:"100%"}},h=e=>{let{index:t,step:n}=e;return(0,i.jsx)(a.ZP,{container:!0,item:!0,justifyContent:"center",sm:4,xs:12,children:(0,i.jsx)(g,{sx:x,children:(0,i.jsxs)(r.Z,{sx:{p:10,pt:4,backgroundImage:'url("'.concat(n.background,'")'),backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"contain",textAlign:"center",borderRadius:"8px"},children:[(0,i.jsxs)(o.Z,{color:"primary",mb:2,textTransform:"uppercase",variant:"h4",children:["STEP ",t+1]}),(0,i.jsx)(o.Z,{pb:24,variant:"h4",children:n.description})]})})},t)},p=e=>{let{index:t,step:n}=e;return(0,i.jsx)(a.ZP,{container:!0,item:!0,justifyContent:"center",sm:4,xs:12,children:(0,i.jsxs)(o.Z,{className:"spaced",sx:x,textAlign:"center",children:[n.details,(0,i.jsx)("br",{}),n.moreInfo&&(0,i.jsx)(u.C,{href:n.moreInfo,children:"More Info"})]})},t)},m=e=>{let{index:t,onClick:n,step:r}=e;return(0,i.jsx)(a.ZP,{container:!0,item:!0,justifyContent:"center",sm:4,xs:12,children:(0,i.jsx)(s.Z,{fullWidth:!0,onClick:()=>r.active?n(r):void 0,sx:{borderRadius:"8px",...r.active?{}:{borderColor:"custom.grey",color:"custom.grey","&:hover":{borderColor:"custom.grey",color:"custom.grey"}},...x},variant:r.active?"contained":"outlined",children:r.actionText})},t)},g=e=>{let{children:t,...n}=e,a=(0,c.Z)();return(0,i.jsx)(r.Z,{sx:{background:{xs:a.palette.custom.stakeSection1CardBackgroundXs,sm:a.palette.custom.stakeSection1CardBackgroundSm},backdropFilter:"blur(6px)",border:"0.5px solid transparent",borderRadius:"8px",boxSizing:"border-box",height:"100%",...null==n?void 0:n.sx},children:t})};t.Z=e=>{let{onClick:t,steps:n,...s}=e,c=(0,l.Z)(e=>e.breakpoints.down("sm"));return(0,i.jsxs)(r.Z,{...s,children:[(0,i.jsx)(o.Z,{mb:16,textAlign:"center",fontSize:"32px",fontWeight:800,children:"How It Works"}),(0,i.jsx)(a.ZP,{columnSpacing:{xs:2,sm:8,md:20,lg:28},container:!0,rowSpacing:4,children:c?n.map((e,o)=>(0,i.jsxs)(d.Fragment,{children:[(0,i.jsx)(h,{index:o,step:e}),(0,i.jsx)(p,{index:o,step:e}),(0,i.jsx)(m,{index:o,onClick:t,step:e}),o!==n.length-1&&(0,i.jsx)(a.ZP,{item:!0,xs:12,sm:0,justifyContent:"center",display:"flex",children:(0,i.jsx)(r.Z,{my:"24px",height:"38px",borderRight:"0.5px solid",borderColor:"custom.grey"})})]},o)):(0,i.jsxs)(i.Fragment,{children:[n.map((e,t)=>(0,i.jsx)(h,{index:t,step:e},t)),n.map((e,t)=>(0,i.jsx)(p,{index:t,step:e},t)),n.map((e,n)=>(0,i.jsx)(m,{index:n,onClick:t,step:e},n))]})})]})}},49906:function(e,t,n){"use strict";var i=n(85893),a=n(2734),r=n(87357),o=n(46695);t.Z=e=>{let{children:t,fullWidth:n,background:s,backgroundImage:l,backgroundRepeat:c="no-repeat",backgroundSize:d="100% auto",backgroundPositionX:u="center",backgroundPositionY:x="top",fixed:h=!1,backgroundComponent:p,...m}=e,{isXSmall:g}=(0,o.l)(),f=(0,a.Z)();return l||p||(l="url( ".concat(g?f.images.backgroundBlurGreenMobile:f.images.backgroundBlurGreenDesktop," )")),(0,i.jsxs)(r.Z,{className:"background",px:n?void 0:"calc((100vw - 1200px) / 2)",...m,sx:{position:"relative",minHeight:"calc(100vh - 64px)",...s?{background:s,backgroundBlendMode:"exclusion"}:{backgroundImage:l,backgroundRepeat:c,backgroundPositionX:u,backgroundPositionY:x,backgroundSize:d,backgroundAttachment:h?"fixed":void 0},overflow:"hidden",...m.sx},children:[p||null,t]})}},57361:function(e,t,n){"use strict";n.d(t,{I:function(){return x},q:function(){return d}});var i=n(85893),a=n(87357),r=n(25675),o=n.n(r),s=n(46695);let l="landingBgScale 10s ease-in-out infinite",c="stakeBgScale 10s ease-in-out infinite",d=()=>{let{isSmall:e}=(0,s.l)();return e?(0,i.jsxs)(u,{children:[(0,i.jsx)(o(),{src:"/images/landing_bg_mobile_gradient.svg",alt:"background with gradient",priority:!0,width:631,height:4090,style:{height:"auto",position:"relative",width:"100%",zIndex:-12,filter:"brightness(1.25)"}}),(0,i.jsx)(o(),{src:"/images/landing_bg_mobile_top.svg",alt:"top background",priority:!0,width:631,height:1146,style:{height:"auto",position:"absolute",top:0,left:0,width:"100%",animation:l,filter:"brightness(1.1)",zIndex:-10}}),(0,i.jsx)(o(),{src:"/images/landing_bg_mobile_right.svg",alt:"right background",priority:!0,width:332,height:2045,style:{height:"auto",position:"absolute",top:0,bottom:0,right:0,width:"52.75%",animation:l,filter:"brightness(1.2)",zIndex:-11}}),(0,i.jsx)(o(),{src:"/images/landing_bg_mobile_middle.svg",alt:"left bottom background",priority:!0,width:631,height:1059,style:{height:"auto",position:"absolute",top:"36%",left:0,width:"100%",animation:l,filter:"brightness(1)",zIndex:-9}}),(0,i.jsx)(o(),{src:"/images/landing_bg_mobile_left.svg",alt:"left background",priority:!0,width:1720,height:2209,style:{height:"auto",position:"absolute",top:"59%",bottom:0,left:0,width:"52.75%",animation:l,filter:"brightness(1.2)",zIndex:-11}}),(0,i.jsx)(o(),{src:"/images/landing_bg_mobile_bottom.svg",alt:"bottom right background",width:631,height:812,priority:!0,style:{position:"absolute",left:0,bottom:0,width:"100%",height:"auto",animation:l,filter:"brightness(1.3)",zIndex:-11}})]}):(0,i.jsxs)(u,{children:[(0,i.jsx)(o(),{src:"/images/landing_bg_desktop_gradient.svg",alt:"background with gradient",width:1658,height:4105,style:{position:"relative",height:"auto",width:"99.5%",zIndex:-12,filter:"brightness(1.25)"}}),(0,i.jsx)(o(),{src:"/images/landing_bg_desktop_top.svg",alt:"top background",width:1658,height:2055,priority:!0,style:{position:"absolute",height:"auto",top:0,left:0,width:"100%",zIndex:-10,animation:"bgScale 20s ease-in-out infinite",filter:"brightness(1)"}}),(0,i.jsx)(o(),{src:"/images/landing_bg_desktop_right.svg",alt:"right background",width:875,height:4099,priority:!0,style:{position:"absolute",height:"auto",top:0,bottom:0,right:0,width:"52.75%",zIndex:-11,animation:l,filter:"brightness(1.2)"}}),(0,i.jsx)(o(),{src:"/images/landing_bg_desktop_left_bottom.svg",alt:"left background",width:767,height:1229,priority:!0,style:{position:"absolute",height:"auto",left:0,bottom:0,animation:l,zIndex:-11,filter:"brightness(1)"}})]})},u=e=>{let{children:t}=e;return(0,i.jsx)(a.Z,{position:"absolute",left:"0",top:"0",width:1,overflow:"hidden",sx:{pointerEvents:"none",userSelect:"none"},children:t})},x=()=>{let{isSmall:e}=(0,s.l)();return e?(0,i.jsxs)(u,{children:[(0,i.jsx)(o(),{src:"/images/stake_bg_mobile_blur.svg",alt:"background radial gradient",width:1720,height:2308,style:{height:"auto",position:"relative",width:"100%",zIndex:-12}}),(0,i.jsx)(o(),{src:"/images/stake_bg_mobile_left.svg",alt:"background left",width:1720,height:2308,style:{height:"auto",position:"absolute",top:0,bottom:0,left:0,width:"100%",zIndex:-9,animation:l}}),(0,i.jsx)(o(),{src:"/images/stake_bg_mobile_middle.svg",alt:"background middle",width:1720,height:1232,style:{height:"auto",position:"absolute",top:"34%",left:0,width:"100%",zIndex:-11,animation:l}})]}):(0,i.jsxs)(u,{children:[(0,i.jsx)(o(),{src:"/images/stake_bg_desktop_blur.svg",alt:"background radial gradient",priority:!0,width:1720,height:2308,style:{height:"auto",position:"relative",width:"100%",zIndex:-12}}),(0,i.jsx)(o(),{src:"/images/stake_bg_desktop_left.svg",priority:!0,alt:"background left",width:1720,height:2308,style:{height:"auto",position:"absolute",top:0,bottom:0,left:0,width:"100%",zIndex:-9,animation:c}}),(0,i.jsx)(o(),{src:"/images/stake_bg_desktop_middle.svg",priority:!0,alt:"background middle",width:1720,height:1232,style:{height:"auto",position:"absolute",top:"22%",left:0,width:"100%",zIndex:-11,animation:c}})]})}},11582:function(e,t,n){"use strict";var i=n(85893),a=n(87357),r=n(15861),o=n(27407),s=n(14789);t.Z=e=>{let{header:t,message:n,transactionId:l,children:c}=e;return(0,i.jsxs)(a.Z,{display:"flex",flexDirection:"column",children:[(0,i.jsx)(r.Z,{variant:"h2",children:t}),(0,i.jsx)(r.Z,{my:2,children:n}),(0,i.jsxs)(r.Z,{my:2,children:[l&&(0,i.jsx)(s.C,{href:(0,o.Kh)(l),children:"View Details"}),c]})]})}},38167:function(e,t,n){"use strict";var i=n(90948),a=n(87357);let r=(0,i.ZP)(a.Z)(()=>({alignItems:"center",display:"flex",justifyContent:"space-between"}));t.Z=r},9358:function(e,t,n){"use strict";n.d(t,{Qs:function(){return i}}),n(39499),n(75472),n(65074),n(91402);let i={FIVEMIN:300,HOUR:3600,DAY:86400,WEEK:604800}},22238:function(e,t,n){"use strict";var i=n(72833),a=n(18944);t.Z=e=>{let{hbarAddress:t}=(0,i.O)();return(0,a.Z)(t,e)}},38827:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var i=n(17e3),a=n(618);let r=async e=>{let t=await fetch("".concat(a.Wm,"/tokens/").concat(e));return await t.json()};t.Z=(e,t)=>(0,i.a)(["mirrorToken",null==e?void 0:e.toString()],async()=>await r(e),t)},41569:function(e,t,n){"use strict";var i=n(17e3),a=n(91402),r=n(618),o=n(65074),s=n(67294);let l=e=>new a.gG(Math.floor(1e5*e||0),1e5),c=e=>(0,i.a)(["sssStats"],async()=>{let e=await fetch("".concat(r.z7,"/stats/sss"));return await e.json()},e);t.Z=e=>{var t;let{data:n=o.Pg}=(0,o.ZP)(r.vj),{data:i=o.qZ}=(0,o.ZP)(r.ky);return c({...e,enabled:(null===(t=null==e?void 0:e.enabled)||void 0===t||t)&&!!n&&!!i,select:(0,s.useCallback)(e=>({avg5day:l(null==e?void 0:e.avg5day),ratio:l(null==e?void 0:e.ratio),sauce:a.ih.fromRawAmount(n,(null==e?void 0:e.sauce)||0),timestamp:new Date((null==e?void 0:e.timestampSeconds)*1e3),xsauce:a.ih.fromRawAmount(i,(null==e?void 0:e.xsauce)||0)}),[n,i])})}},18944:function(e,t,n){"use strict";var i=n(91402),a=n(618),r=n(57843),o=n(65074);t.Z=(e,t)=>{let{isFetched:n,data:s,error:l,isLoading:c}=(0,r.Fp)(e),{isFetched:d,data:u,error:x,isLoading:h}=(0,r.zU)(e),{data:p}=(0,o.ZP)(t),m=i.ih.fromRawAmount(o.k3,0);if(s&&t===a.D2)m=s;else if(u&&t!==a.D2){let e=u.find(e=>e.tokenId===t);e&&p&&(m=i.ih.fromRawAmount(p,e.balance))}return{data:m,error:x||l,isLoading:h||c,isFetched:n&&d}}},75863:function(e,t,n){"use strict";n.d(t,{Mb:function(){return b}});var i=n(70794),a=n(45578),r=n.n(a),o=n(55703),s=n(618),l=n(39499),c=n.n(l),d=n(72833),u=n(52904),x=n(65074),h=n(85945),p=n(16114),m=n(4878),g=n(90020);let f=new i.Z(s.tZ),b=e=>f.multipliedBy(1.25).div(e).multipliedBy(new i.Z(10).pow(x.k3.decimals)).decimalPlaces(0,i.Z.ROUND_UP),k=e=>{let{data:t}=(0,p.Z)();return()=>{if(!t)throw Error("No exchange rate for payable");let{amount:n,farm:a}=e,r=[{type:"uInt256",value:new i.Z(a.id)},{type:"uInt256",value:new i.Z(n.quotient.toString())}],l=b(t),c=!a.sauceEmissions&&!a.hbarEmissions;return{type:o.R.ContractExecuteTransaction,contractId:s.kC,functionName:"deposit",gas:c?1e6:286e3,params:r,payable:l}}};t.ZP=(e,t)=>{let n=(0,h.NL)(),{data:i=[]}=(0,u.ZP)(),{hbarAddress:a}=(0,d.O)(),l=["signTransaction","stakeFarm"],x=k(e),{data:p}=(0,g.Z)("v1",e.farm.poolId),{farm:f,amount:b}=e,j=(0,m.Z)(l,{...t,onSuccess:async(e,o,s)=>{var l,d;await (null==t?void 0:null===(l=t.onSuccess)||void 0===l?void 0:l.call(t,e,o,s));try{let e=i.findIndex(e=>e.id===f.id),t=c().add((null===(d=i[e])||void 0===d?void 0:d.total)||0,b.quotient);c().lessThan(t,c().BigInt(0))&&(t=c().unaryMinus(t));let o={id:f.id,timestamp:"".concat(Math.floor(new Date().getTime()/1e3),".",0),total:t.toString()},s=r()([o,...i],"id");n.setQueryData(["farmTotals",a],s),n.invalidateQueries(["accountBalance"])}catch(e){console.debug("Update stake total cache failed",e)}}},x);return{type:o.R.ContractExecuteTransaction,key:l,metadata:{contractId:s.kC,functionName:"deposit"},description:e.amount.equalTo(0)?"Harvest":"Stake ssLP-".concat(null==p?void 0:p.token0.name,"-").concat(null==p?void 0:p.token1.name," tokens"),...j}}},69709:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ej},metadata:function(){return ek}});var i,a,r=n(85893),o=n(2734),s=n(98396),l=n(51233),c=n(15861),d=n(11057),u=n(67720),x=n(87357),h=n(90629),p=()=>(0,r.jsx)("div",{children:"test"}),m=n(38115),g=n(67294),f=n(71866),b=n(86886),k=n(23795),j=n(25675),v=n.n(j),Z=n(22238),y=n(41569),S=n(65074),w=n(75673),C=n(91402),I=n(618),E=n(4002),A=n(72833),_=n(93140),P=n(19744),R=n(5683),T=n(26550),U=n(79786),F=n(56011),z=n(3422),B=n(15386),N=e=>{let{stroke:t=5,value:n=1,...i}=e,a=(0,o.Z)(),s=50-t/2,l=100-t;return(0,r.jsxs)("svg",{className:"CircularProgressbar ",viewBox:"0 0 ".concat(100," ").concat(100),"data-test-id":"CircularProgressbar",...i,children:[(0,r.jsx)("path",{d:"\n  M ".concat(50,",").concat(50,"\n  m 0,-").concat(s,"\n  a ").concat(s,",").concat(s," 1 1 1 0,").concat(l,"\n  a ").concat(s,",").concat(s," 1 1 1 0,-").concat(l,"\n"),strokeWidth:t,fillOpacity:"0",style:{stroke:a.palette.custom.stakeProgressIncompletedBackground,strokeLinecap:"round",strokeDasharray:"0px",strokeDashoffset:"0px"}}),!!n&&(0,r.jsx)("path",{d:"\n  M 50,50\n  m 0,-".concat(s,"\n  a ").concat(s,",").concat(s," 1 1 1 0,").concat(l,"\n  a ").concat(s,",").concat(s," 1 1 1 0,-").concat(l,"\n"),strokeWidth:t,fillOpacity:"0",style:{stroke:a.palette.custom.stakeProgressCompletedBackground,strokeLinecap:"round",strokeDasharray:300,strokeDashoffset:300+3*n}})]})},D=e=>{let{value:t,width:n=150}=e,i=parseInt(t.asFraction.toFixed(0,void 0,C.mL.ROUND_DOWN)),a=parseFloat(t.asFraction.toFixed(2))%1*100,o=[];for(let e=1;e<i;++e){let t=10*(e-(a?0:1));o.push((0,r.jsx)(x.Z,{left:t,position:"absolute",top:t,children:(0,r.jsx)(N,{value:100,width:n-2*t})},e))}return 0!==i&&(1!==i||a)?o.push((0,r.jsx)(x.Z,{left:0,position:"absolute",top:0,children:(0,r.jsx)(N,{value:a,width:n})},i)):o.push((0,r.jsx)(x.Z,{left:0,position:"absolute",top:0,children:(0,r.jsx)(N,{value:1,width:n})},i)),(0,r.jsxs)(x.Z,{alignItems:"center",display:"flex",height:n,justifyContent:"center",position:"relative",width:n,children:[o,(0,r.jsxs)(c.Z,{textAlign:"center",fontSize:"18px",children:["= ",t.asFraction.toFixed(4),(0,r.jsx)("br",{}),"SAUCE"]})]})},O=n(3992);function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var M=function(e){return g.createElement("svg",W({viewBox:"0 0 25 24",stroke:"#6AFF52",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=g.createElement("path",{d:"M12.5 5v14M5.5 12h14",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},q=n(3984),H=n(78110),L=n(47808),V=n(39499),G=n.n(V),X=n(73400),Q=n(70794),K=n(55703),Y=n(4878);let $=e=>()=>{let{amount:t}=e,n=[{type:"uInt256",value:new Q.Z(t.quotient.toString())}];return{type:K.R.ContractExecuteTransaction,contractId:I.B9,functionName:"enter",gas:85e3,params:n}};var J=(e,t)=>{let n=["signTransaction","stakeSauce"],i=$(e),a=(0,Y.Z)(n,t,i);return{type:K.R.ContractExecuteTransaction,key:n,metadata:{contractId:I.B9,functionName:"enter"},description:"Stake SAUCE",...a}},ee=n(90056),et=n(11582),en=e=>{let{amount:t,errorMessage:n,onComplete:i,...a}=e,{enqueueSnackbar:o}=(0,X.Ds)();return(0,r.jsx)(ee.RC,{errorMessage:n||"",message:"Success!",smartContractBuilders:[{hook:J,data:{amount:t}}],tokensToAssociate:[S.Pg,S.qZ],tokensToApprove:[{tokenId:S.Pg.address,amount:G().toNumber(G().BigInt(t.multiply(G().exponentiate(G().BigInt(10),G().BigInt(t.currency.decimals))).toExact())),spenderAccountId:I.B9}],...a,onFinalSuccess:e=>{o((0,r.jsx)(et.Z,{header:"Staked SAUCE!",message:"Successfully staked ".concat(t.toExact()," ").concat(S.Pg.symbol," tokens."),transactionId:e.transactionId}),{variant:"info"}),i()},children:"Stake"})};let ei={valueString:""};var ea=e=>{let{balance:t,isOpen:n,onClose:i}=e,[{valueString:a},o]=(0,g.useState)(ei),{data:s=S.Pg}=(0,S.ZP)(I.vj),l=(0,E.nq)(s.decimals,a),c=C.ih.fromRawAmount(s,l),d=G().lessThanOrEqual(l,L.xE)&&"Enter a value"||c.greaterThan(t)&&"Insufficient ".concat(s.symbol?s.symbol:"balance")||void 0,u=e=>o(t=>({...t,valueString:e}));return(0,r.jsxs)(q.Z,{onClose:i,open:n,title:"Stake SAUCE",children:[(0,r.jsx)(H.Z,{balance:t,onTokenChange:()=>{},onValueChange:u,token:s,sx:{maxWidth:400,mt:2},title:"Stake",tokens:[s],value:a}),(0,r.jsx)(x.Z,{display:"flex",justifyContent:"center",sx:{mt:4},children:(0,r.jsx)(en,{amount:c,errorMessage:d,fullWidth:!0,onComplete:()=>u("")})})]})},er=e=>{let{balance:t}=e,{close:n,isOpen:i,open:a}=(0,O.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{onClick:()=>a(),fullWidth:!0,variant:"contained",sx:{borderRadius:"8px"},children:[(0,r.jsx)(M,{height:"12",style:{marginRight:"4px"},className:"plus"}),"Stake"]}),(0,r.jsx)(ea,{balance:t,onClose:n,isOpen:i})]})};function eo(){return(eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var es=function(e){return g.createElement("svg",eo({viewBox:"0 0 24 24",fill:"#6AFF52",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=g.createElement("path",{d:"M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"})))};let el=e=>()=>{let{amount:t}=e,n=[{type:"uInt256",value:new Q.Z(t.quotient.toString())}];return{type:K.R.ContractExecuteTransaction,contractId:I.B9,functionName:"leave",gas:87e3,params:n}};var ec=(e,t)=>{let n=["signTransaction","unstakeSauce"];(0,Y.Z)(n,t);let i=el(e),a=(0,Y.Z)(n,t,i);return{type:K.R.ContractExecuteTransaction,metadata:{contractId:I.B9,functionName:"leave"},key:n,description:"Unstake SAUCE",...a}},ed=e=>{let{amount:t,errorMessage:n,onComplete:i,...a}=e,{enqueueSnackbar:o}=(0,X.Ds)();return(0,r.jsx)(ee.RC,{errorMessage:n||"",fullWidth:!0,message:"Success!",smartContractBuilders:[{hook:ec,data:{amount:t}}],tokensToAssociate:[S.Pg,S.qZ],tokensToApprove:[{tokenId:S.qZ.address,amount:G().toNumber(G().BigInt(t.multiply(G().exponentiate(G().BigInt(10),G().BigInt(t.currency.decimals))).toExact())),spenderAccountId:I.B9}],...a,onFinalSuccess:e=>{o((0,r.jsx)(et.Z,{header:"Unstaked token!",message:"Successfully unstaked ".concat(t.toExact()," ").concat(S.qZ.symbol," tokens."),transactionId:e.transactionId}),{variant:"info"}),i()},children:"Unstake"})};let eu={valueString:""};var ex=e=>{let{balance:t,isOpen:n,onClose:i}=e,[{valueString:a},o]=(0,g.useState)(eu),{data:s=S.qZ}=(0,S.ZP)(I.ky),l=(0,E.nq)(s.decimals,a),c=C.ih.fromRawAmount(s,l),d=G().lessThanOrEqual(l,L.xE)&&"Enter a value"||c.greaterThan(t)&&"Insufficient ".concat(s.symbol?s.symbol:"balance")||void 0,u=e=>o(t=>({...t,valueString:e}));return(0,r.jsxs)(q.Z,{onClose:i,open:n,title:"Unstake ".concat(s.symbol," Tokens"),children:[(0,r.jsx)(H.Z,{balance:t,onTokenChange:()=>{},onValueChange:u,token:s,sx:{maxWidth:400,mt:2},title:"Unstake",tokens:[s],value:a,showClaimableSauce:!0}),(0,r.jsx)(x.Z,{display:"flex",justifyContent:"center",sx:{mt:4},children:(0,r.jsx)(ed,{amount:c,errorMessage:d,onComplete:()=>u("")})})]})},eh=e=>{let{balance:t,...n}=e,i=(0,o.Z)(),{close:a,isOpen:s,open:l}=(0,O.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{className:"subdued",fullWidth:!0,onClick:()=>l(),variant:"outlined",sx:{borderWidth:"0.5px !important",borderRadius:"8px"},...n,children:[(0,r.jsx)(es,{height:"12",style:{marginRight:"6px"},stroke:i.palette.custom.grey,fill:i.palette.custom.grey})," ","Unstake"]}),(0,r.jsx)(ex,{balance:t,onClose:a,isOpen:s})]})},ep=()=>{let e=(0,o.Z)(),{hbarAddress:t}=(0,A.O)(),{data:n=S.Pg}=(0,S.ZP)(I.vj),{data:i}=(0,Z.Z)(I.vj),{data:a}=(0,Z.Z)(I.ky),{data:s={avg5day:new C.gG(0,1),ratio:new C.gG(0,1),sauce:C.ih.fromRawAmount(S.Pg,0)}}=(0,y.Z)({refetchInterval:3e4}),{ratio:d,sauce:h}=s,p=C.ih.fromRawAmount(n,(0,E.nq)(n.decimals,a.multiply(d).toExact())),m=(0,z.N)({value:p}),g=(0,z.N)({value:h});return(0,r.jsxs)(b.ZP,{container:!0,children:[(0,r.jsx)(b.ZP,{display:"flex",alignItems:"center",justifyContent:"center",item:!0,xs:12,sm:6,my:{xs:"52px",sm:"0px"},children:(0,r.jsxs)(x.Z,{maxWidth:"350px",width:"100%",children:[(0,r.jsxs)(x.Z,{alignItems:"center",display:"flex",flexDirection:"column",mb:4,children:[(0,r.jsx)(c.Z,{fontSize:"20px",mb:"25px",color:"custom.dramatic",children:"1 xSAUCE"}),(0,r.jsx)(D,{value:d,width:150})]}),(0,r.jsx)(u.Z,{sx:{my:4}}),(0,r.jsxs)(l.Z,{spacing:"16px",children:[(0,r.jsxs)(B.Z,{sx:{color:"custom.farmStake",alignItems:"flex-start",textAlign:"right"},children:[(0,r.jsx)(c.Z,{children:"Claimable SAUCE"}),(0,r.jsx)(x.Z,{display:"flex",flexDirection:"column",children:m})]}),(0,r.jsxs)(x.Z,{alignItems:"center",display:"flex",justifyContent:"flex-end",children:[(0,r.jsx)(x.Z,{mr:2,children:(0,r.jsx)(R.Z,{dimension:20,token:S.Pg})}),(0,r.jsx)(c.Z,{color:"custom.farmStake",children:(0,F.UH)(p)})]}),(0,r.jsxs)(B.Z,{sx:{color:"custom.farmStake"},children:[(0,r.jsx)(c.Z,{children:"TVL"}),g]}),(0,r.jsxs)(B.Z,{sx:{color:"custom.farmStake"},children:[(0,r.jsx)(T.Z,{color:e.palette.custom.stakeStep1HelpIconColor,title:"Average of d/d change in SAUCE/xSAUCE exchange rate, annualized.",children:"Approximate APR"}),(0,U.T)({value:s.avg5day})]})]}),(0,r.jsx)(u.Z,{sx:{my:4}}),(0,r.jsxs)(x.Z,{alignItems:"center",display:"flex",flexDirection:"column",mt:4,children:[t?(0,r.jsxs)(l.Z,{direction:"row",width:"100%",spacing:"6px",children:[(0,r.jsx)(eh,{balance:a}),(0,r.jsx)(er,{balance:i})]}):(0,r.jsx)(P.Z,{}),(0,r.jsx)(x.Z,{mt:4,className:"fullWidth",children:(0,r.jsx)(k.Z,{href:"https://youtu.be/ava-9xUOxyk",children:(0,r.jsx)(_.Z,{icon:w.Z,text:"Check out the Tutorial Video",sx:{svg:{path:{fill:e=>e.palette.custom.green}}}})})})]})]})}),(0,r.jsx)(b.ZP,{container:!0,item:!0,justifyContent:"center",xs:12,sm:6,sx:{borderRadius:"8px",padding:"12px"},children:(0,r.jsxs)(l.Z,{alignItems:"center",children:[(0,r.jsx)(x.Z,{marginBottom:"-4px",children:(0,r.jsx)(v(),{alt:"Stake",src:e.images.stakePageSpotStake,height:"203",width:"273"})}),(0,r.jsxs)(l.Z,{spacing:"25px",sx:e=>({background:e.palette.custom.stakeStep1DescriptionBackground,backdropFilter:"blur(15px)",borderRadius:"8px",px:"18px",pt:"36px",pb:"52px",boxShadow:"light"===e.palette.mode?"0px 4px 12px 0px #0000001A":void 0}),children:[(0,r.jsxs)(c.Z,{fontSize:"16px",fontWeight:300,children:["Stake SAUCE and receive xSAUCE. The Infinity Pool automatically compounds via SAUCE buybacks from three sources:"," ",(0,r.jsx)(x.Z,{color:"custom.green",component:"span",children:"HBAR native staking, farm emissions, and a portion of swap fees from all liquidity pools."})]}),(0,r.jsxs)(c.Z,{fontSize:"16px",fontWeight:300,children:["Rewards are proportional to your share of the pool, all"," ",(0,r.jsx)(x.Z,{color:"custom.green",component:"span",children:"without any risk of impermanent loss."})]})]})]})})]})},em=()=>{let e=(0,o.Z)(),t=(0,g.useRef)(null),n=(0,g.useRef)(null),i=(0,g.useRef)(null),a=[{actionText:"STAKE SAUCE",active:!0,background:e.images.sssStep1,component:ep,description:(0,r.jsxs)(r.Fragment,{children:["Stake SAUCE &",(0,r.jsx)("br",{}),"receive xSAUCE"]}),details:"Stake SAUCE to receive xSAUCE and earn triple-rewards.",heading:"Stake SAUCE, Receive xSAUCE Immediately",headingDescription:"Get xSAUCE buyback receipt tokens for STEP 2",link:"/stake/sauce",moreInfo:"https://docs.saucerswap.finance/protocol/single-sided-staking",name:"Stake SAUCE",ref:t},{actionText:"COMING SOON",active:!1,background:e.images.sssStep2,component:p,description:(0,r.jsxs)(r.Fragment,{children:["Stake xSAUCE in",(0,r.jsx)("br",{})," Community Pools"]}),details:"Stake your xSAUCE in Community Pools to earn HTS tokens.",heading:"Stake xSAUCE, Earn Tokens of Your Choice",headingDescription:"While you're earning the APR in the buyback pool above, stake your xSAUCE here to earn other tokens!",link:"/stake/xsauce",moreInfo:"https://docs.saucerswap.finance/protocol/community-pools",name:"Stake xSAUCE",ref:n},{actionText:"COMING SOON",active:!1,background:e.images.sssStep3,component:()=>(0,r.jsx)("div",{children:"Coming Soon"}),description:(0,r.jsxs)(r.Fragment,{children:["To Be",(0,r.jsx)("br",{}),"Released"]}),details:"Stake SAUCELING NFTs in Community Pools for an APR boost.",heading:"Stake SAUCE, Receive xSAUCE Immediately",headingDescription:"Get xSAUCE buyback receipt tokens for STEP 2.",link:"/stake/???",moreInfo:"",name:"???",ref:i}],b=e=>{var t;return null===(t=e.current)||void 0===t?void 0:t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},k=(0,s.Z)(()=>e.breakpoints.down("sm")),j={py:"24px",px:"22px",border:"light"===e.palette.mode?void 0:"0.5px solid ".concat(e.palette.custom.grey)};return(0,r.jsxs)(l.Z,{alignItems:"center",mt:{xs:.5,sm:0},children:[(0,r.jsxs)(l.Z,{alignItems:"center",direction:"column",my:"80px",spacing:"20px",px:1,children:[(0,r.jsxs)(c.Z,{maxWidth:"600px",fontSize:"24px",textAlign:"center",component:"h1",children:["Stake your"," ",(0,r.jsx)(c.Z,{component:"span",color:"custom.green",fontSize:"24px",children:"SAUCE"})," ","to Earn Hedera Rewards"]}),(0,r.jsxs)(d.Z,{onClick:()=>b(t),children:[(0,r.jsx)(c.Z,{fontSize:"20px",children:"Infinity Pool\xa0"}),(0,r.jsx)(m.Z,{fill:e.palette.custom.defaultDetail,width:"14px",style:{marginTop:"6px"}})]})]}),(0,r.jsx)(u.Z,{sx:{width:"100%",border:"0.5px solid transparent",background:"linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)) border-box"}}),(0,r.jsx)(l.Z,{alignItems:"center",width:"100%",sx:{backgroundColor:"custom.stakeSection1Background",backdropFilter:"blur(61px)"},children:(0,r.jsx)(x.Z,{maxWidth:"1000px",pt:"74px",pb:"133px",px:2,sx:e=>({...k&&"light"!==e.palette.mode?{background:"linear-gradient(to bottom, rgba(2, 30, 42, 0.2) 0%, rgba(12, 39, 52, 1) 70%, rgba(12, 39, 52, 1) 80%, rgba(0, 0, 0, 1))"}:{}}),children:(0,r.jsx)(f.Z,{onClick:e=>b(e.ref),steps:a})})}),(0,r.jsx)(u.Z,{sx:{width:"100%",border:"0.5px solid transparent",background:"linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)) border-box"}}),(0,r.jsx)(l.Z,{maxWidth:"1000px",mt:"97px",mb:"135px",px:{xs:"5px",lg:"0px"},children:a.map((e,t)=>{let n=e.component;return e.active&&(0,r.jsxs)(l.Z,{spacing:"29px",ref:e.ref,children:[(0,r.jsxs)(l.Z,{mx:"auto",width:"100%",px:"28px",py:"32px",borderRadius:"8px",sx:e=>({border:"light"===e.palette.mode?void 0:"0.5px solid ".concat(e.palette.custom.grey),backgroundColor:"custom.headerContainer",backdropFilter:"blur(15px)"}),spacing:"12px",children:[(0,r.jsxs)(c.Z,{mb:2,fontSize:"20px",color:"custom.interactive",children:["STEP ",t+1,": ",e.heading]}),(0,r.jsx)(c.Z,{fontSize:"16px",color:"custom.dramatic",children:e.headingDescription})]}),(0,r.jsx)(x.Z,{mx:"auto",mb:k?"226px":"652px",mt:"29px",width:"100%",borderRadius:"8px",sx:{background:e=>e.palette.custom.outerContainer,backdropFilter:"blur(15px)",...k?{}:j},children:(0,r.jsx)(h.Z,{className:"scrollable",sx:e=>({background:e.palette.custom.stakeStep1InnerContainerBackground,backdropFilter:"blur(15px)",border:k||"light"===e.palette.mode?void 0:"0.5px solid ".concat(e.palette.custom.grey),borderRadius:"8px"}),variant:"outlined",children:(0,r.jsx)(n,{})},t)})]},e.name)})})]})},eg=n(49906),ef=n(57361);let eb=()=>(0,r.jsx)(em,{}),ek={title:"Secure & Fast Hedera Staking and Rewards | SaucerSwap",description:"Stake SAUCE to earn rewards from swap fees, HBAR native staking, and emissions with no risk of IL.",keywords:["Hedera staking","hedera staking rewards"]};eb.getLayout=e=>(0,r.jsx)(eg.Z,{fullWidth:!0,backgroundComponent:(0,r.jsx)(ef.I,{}),children:e});var ej=eb},80841:function(e,t,n){"use strict";n.d(t,{y:function(){return l}});var i=n(67294),a=n(32161),r=n(30081),o=n(464),s=n(85945);function l(e,t,n){let[l,c={}]=(0,a.I6)(e,t,n),d=(0,s.NL)({context:c.context}),u=d.getQueryCache();return(0,o.$)(i.useCallback(e=>u.subscribe(r.V.batchCalls(e)),[u]),()=>d.isFetching(l),()=>d.isFetching(l))}}},function(e){e.O(0,[838,331,26,770,178,774,888,179],function(){return e(e.s=31101)}),_N_E=e.O()}]);