"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{81470:function(e,t,n){var s,r=n(67294);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}t.Z=function(e){return r.createElement("svg",i({viewBox:"0 0 25 24",fill:"#6AFF52",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=r.createElement("path",{d:"M21.622 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082Z"})))}},1755:function(e,t,n){var s=n(85893),r=n(87357),i=n(67720),l=n(28355);t.Z=e=>{let{message:t,...n}=e;return(0,s.jsxs)(r.Z,{...n,children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(l.Z,{mt:4,children:t})]})}},74800:function(e,t,n){n.d(t,{l:function(){return g}});var s=n(85893),r=n(618),i=n(87357),l=n(78462),a=n(97212),o=n(48885),d=n(59334),c=n(15861),h=n(11057),x=n(67294),u=n(4800),p=n(3984),k=n(15386),j=n(14789),m=n(59748);let g=e=>{let{isOpen:t,onAccept:n,onClose:g,token:Z}=e,[f,y]=(0,x.useState)(!1);return(0,s.jsxs)(p.Z,{onClose:g,open:t,title:"Token (extended)",children:[(0,s.jsxs)(i.Z,{maxWidth:400,children:[(0,s.jsx)(l.Z,{children:(0,s.jsxs)(a.ZP,{children:[(0,s.jsx)(o.Z,{children:(0,s.jsx)(m.Z,{color:"warning"})}),(0,s.jsx)(d.Z,{primary:(0,s.jsxs)(c.Z,{my:2,width:"100%",children:["This token has not been voted into the default list by the SaucerSwap DAO. Always conduct your own research before trading. ",(0,s.jsx)(j.C,{href:"https://docs.saucerswap.finance/contact/partnership-inquiries#classes",children:"Learn More"})]})})]})}),(0,s.jsx)(i.Z,{display:"flex",justifyContent:"center",my:4,children:(0,s.jsxs)(j.C,{href:"".concat(r.lT,"/token/").concat(Z.address),children:[Z.symbol," - ",Z.address," (View Details)"]})})]}),(0,s.jsxs)(k.Z,{children:[(0,s.jsx)(u.Z,{checked:f,label:"I accept the risk",onChange:()=>y(e=>!e)}),(0,s.jsx)(h.Z,{disabled:!f,onClick:()=>n(Z),variant:"contained",children:"OK"})]})]})}},65178:function(e,t,n){n.d(t,{w:function(){return N},Z:function(){return V}});var s=n(85893),r=n(59748),i=n(90948),l=n(97212),a=n(48885),o=n(59334),d=n(87357),c=n(15861),h=n(98619),x=n(51233),u=n(93946),p=n(11057),k=n(41796),j=n(86886),m=n(67720),g=n(78462),Z=n(67294),f=n(22238),y=n(20414),b=n(63062),v=n(49004),C=n(46695),w=n(3992),T=n(81470),L=n(29227),S=n(618),D=n(17210);let A=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),I=e=>({defaultTokens:e.filter(e=>e.dueDiligenceComplete),extendedTokens:e.filter(e=>!e.dueDiligenceComplete&&!!e.icon),untrackedTokens:e.filter(e=>!e.dueDiligenceComplete&&!e.icon)});var P=n(1755),B=n(85562),W=n(14831),O=n(5683),M=n(3984),F=n(56011),E=n(74800),R=n(55538),H=n(42245);let N=(0,i.ZP)(l.ZP)({paddingLeft:0,paddingRight:0,"&:last-child":{paddingBottom:0},".MuiListItemButton-root":{maxWidth:"100%",paddingLeft:0,paddingRight:0},".MuiListItemText-root":{maxWidth:"100%",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),z=(0,i.ZP)(a.Z)({margin:0,minWidth:42,paddingRight:0}),_=e=>{let{selectedLabel:t}=e;return(0,s.jsx)(N,{children:(0,s.jsx)(o.Z,{children:(0,s.jsx)(d.Z,{alignItems:"center",display:"flex",justifyContent:"space-between",maxWidth:"100%",children:(0,s.jsx)(c.Z,{mr:1,fontSize:"14px",children:t})})})})},U=e=>{let{active:t=!1,edit:n=!1,onClick:i,onDelete:l=()=>null,tokenTier:a,selectedLabel:p,token:k}=e,{data:j}=(0,f.Z)(k.address),m=k.symbol,g=m.endsWith("[hts]");return g&&(m=m.replace("[hts]","")),(0,s.jsxs)(N,{className:t?"active":"",disablePadding:!0,children:[(0,s.jsxs)(h.Z,{onClick:e=>i(k,e),children:[(0,s.jsx)(z,{children:(0,s.jsx)(O.Z,{token:k})}),(0,s.jsx)(o.Z,{children:(0,s.jsxs)(d.Z,{alignItems:"center",display:"flex",justifyContent:"space-between",maxWidth:"100%",children:[(0,s.jsxs)(d.Z,{display:"flex",flexDirection:"column",children:[(0,s.jsxs)(x.Z,{direction:"row",alignItems:"center",children:[(0,s.jsx)(c.Z,{fontSize:"16px",fontWeight:500,children:m}),g&&(0,s.jsx)(c.Z,{color:"custom.highlights",alignSelf:"end",fontSize:"12px",lineHeight:"16px",fontWeight:300,fontStyle:"italic",children:"\xa0HTS"}),"default"!==a&&(0,s.jsx)(r.Z,{sx:{color:"darkgray",height:"1rem",width:"1rem",margin:0,marginLeft:.5,padding:0}})]}),(0,s.jsxs)(d.Z,{color:"custom.grey",fontSize:"12px",children:["Balance: ",(0,F.UH)(j)]})]}),t&&!n&&(0,s.jsxs)(d.Z,{alignItems:"center",display:"flex",ml:1,children:[(0,s.jsx)(c.Z,{color:"custom.green",mr:1,variant:"body2",children:p}),(0,s.jsx)(T.Z,{height:"24"})]})]})})]}),n&&(0,s.jsx)(u.Z,{onClick:e=>l(k,e),children:(0,s.jsx)(L.Z,{height:"20"})})]})},$=e=>{let{onClick:t,onDelete:n,selectedLabel:r,token:i}=e,{settings:l,dispatchSettings:a}=(0,v.r)(),{acceptedRisksTokenIds:o}=l,d=o.includes(i.address),{close:c,isOpen:h,open:x}=(0,w.Z)(),u=async e=>{a({type:"update",payload:{acceptedRisksTokenIds:[...o,i.address]}}),t(e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(U,{onClick:(e,n)=>{n.preventDefault(),d?t(i):x()},onDelete:n,selectedLabel:r,token:i,tokenTier:"extended"}),(0,s.jsx)(E.l,{isOpen:h,onClose:c,onAccept:u,token:i})]})},q=e=>{let{onClick:t,selectedLabel:n,tokenId:r}=e,{close:i,isOpen:l,open:a}=(0,w.Z)(),{dispatchSettings:o,settings:{localUnknownTokenIds:d=[]}}=(0,v.r)(),{data:c}=(0,b.Z)(r),h=async e=>{o({type:"update",payload:{localUnknownTokenIds:[...d,e.address]}}),t(e)};return c?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{selectedLabel:"Tokens (untracked)"}),(0,s.jsx)(U,{onClick:(e,t)=>{t.preventDefault(),a()},selectedLabel:n,token:c,tokenTier:"untracked"}),(0,s.jsx)(H.n,{isOpen:l,onClose:i,onAccept:h,token:c})]}):(0,s.jsx)(P.Z,{message:"No tokens available",mb:4,mt:4})},K={edit:!1,searchText:""};var V=e=>{let{onChange:t,onClose:n,isOpen:r,selectedLabel:i,token:l,tokens:a=[],useSolidityAddress:o}=e,{isXSmall:d}=(0,C.l)(),[{edit:c,searchText:h},x]=(0,Z.useState)(K),{data:u=[]}=(0,y.Z)(),{dispatchSettings:f,settings:{localUnknownTokenIds:b=[]}}=(0,v.r)(),{updateLastActivity:w}=(0,Z.useContext)(R.xD),T=e=>{e&&(w(),t&&t(e),O())},L=e=>{f({type:"update",payload:{localUnknownTokenIds:[...b].filter(t=>t!==e.address)}})},O=()=>{x(e=>({...e,edit:!1,searchText:""})),n()},F=h.trim(),E=RegExp(A(F),"i"),H=(c?u:a).filter(e=>{var t,n;return(E.test((null===(t=e.name)||void 0===t?void 0:t.toLowerCase())||"")||E.test((null===(n=e.symbol)||void 0===n?void 0:n.toLowerCase())||"")||[e.address,e.solidityAddress,e.solidityAddress.slice(2)].some(e=>e===F))&&(0,D.wu)(e.address)}),{defaultTokens:N,extendedTokens:z,untrackedTokens:V}=I(H),G=/^\d{1}\.\d{1}\.\d{2,16}$/.test(F),J=[(0,s.jsx)(p.Z,{sx:{"&:hover":{backgroundColor:"custom.appBarBorder"},color:"custom.defaultDetail",borderRadius:"7px",py:0,px:2},onClick:()=>x(e=>({...e,edit:!c,searchText:""})),children:c?"Back to Full List":"Edit My Tokens"},0)];return(0,s.jsxs)(M.Z,{actions:J,fullScreen:d,onClose:O,open:r,title:c?"Edit My Tokens":"Select a Token",sx:e=>({".MuiPaper-root":{backgroundColor:(0,k.Fq)(e.palette.custom.dialogBackground,.6),backdropFilter:"blur(14px)",borderColor:"custom.dialogBorder",width:{xs:"100vw",sm:420},height:d?"100vh":"58vh",pt:2.5,pb:0,px:0,overflow:"hidden","& .dialogTitleContainer,.dialogActionsContainer":{pl:6,pr:4},"& .dialogContentContainer":{minHeight:d?void 0:"40vh","& > :not(.tokenList)":{px:4.5},"& > .tokenList":{pl:5.5,pr:4,mr:1.5}}},"& .MuiDialogActions-root":{"&.MuiDialogActions-spacing":{pr:3},pt:0,mb:1}}),children:[(0,s.jsx)(B.Z,{fullWidth:!0,onChange:e=>x(t=>({...t,searchText:e.target.value})),placeholder:"Search by symbol or address",value:h,autoFocus:!0}),!c&&(0,s.jsx)(j.ZP,{mt:2,mb:3.5,container:!0,columnSpacing:"6px",rowSpacing:"10px",children:S.DH.reduce((e,t)=>{let n=a.find(e=>{let{address:n}=e;return n===t});return n?[...e,n]:e},[]).map(e=>(0,s.jsx)(j.ZP,{item:!0,children:(0,s.jsx)(W.Z,{fontSize:"16px",variant:"outlined",onClick:T,sx:{px:.5,borderRadius:"7px"},token:e,useSolidityAddress:o},e.address)},e.address))}),(0,s.jsx)(m.Z,{sx:{borderColor:"custom.appBarBorder"}}),(0,s.jsxs)(g.Z,{className:"tokenList",sx:{flex:1,overflow:"auto",py:0,my:1},children:[N.length>0&&(0,s.jsx)(_,{selectedLabel:"Tokens"}),N.map(e=>{let t=e.address===(null==l?void 0:l.address);return(0,s.jsx)(U,{active:t,edit:c,onClick:T,onDelete:L,selectedLabel:i,token:e,tokenTier:"default"},e.address)}),z.length>0&&(0,s.jsx)(_,{selectedLabel:"Tokens (extended)"}),z.map((e,t)=>{let n=e.address===(null==l?void 0:l.address);return(0,s.jsx)($,{active:n,edit:c,onClick:T,onDelete:L,selectedLabel:i,token:e},e.address)}),V.length>0&&(0,s.jsx)(_,{selectedLabel:"Tokens (untracked)"}),V.map(e=>{let t=e.address===(null==l?void 0:l.address);return(0,s.jsx)(U,{active:t,edit:c,onClick:T,onDelete:L,selectedLabel:i,token:e,tokenTier:"untracked"},e.address)}),H.length>0?null:G?(0,s.jsx)(q,{onClick:T,selectedLabel:i,tokenId:h}):(0,s.jsx)(P.Z,{message:"No tokens available",mb:4,mt:4})]})]})}},42245:function(e,t,n){n.d(t,{n:function(){return m}});var s=n(85893),r=n(618),i=n(87357),l=n(78462),a=n(97212),o=n(48885),d=n(59334),c=n(11057),h=n(67294),x=n(4800),u=n(14789),p=n(3984),k=n(15386),j=n(59748);let m=e=>{let{isOpen:t,onAccept:n,onClose:m,token:g}=e,[Z,f]=(0,h.useState)(!1);return(0,s.jsxs)(p.Z,{onClose:m,open:t,title:"Token (untracked)",children:[(0,s.jsxs)(i.Z,{maxWidth:400,children:[(0,s.jsx)(l.Z,{children:["Anyone can create a token on Hedera with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.","This interface can load untracked tokens by token addresses. Please take extra caution and do your research when interacting with untracked tokens.","If you purchase an untracked token, you may be unable to sell it back."].map((e,t)=>(0,s.jsxs)(a.ZP,{children:[(0,s.jsx)(o.Z,{children:(0,s.jsx)(j.Z,{color:"error"})}),(0,s.jsx)(d.Z,{primary:e})]},t))}),(0,s.jsx)(i.Z,{display:"flex",justifyContent:"center",my:4,children:(0,s.jsxs)(u.C,{href:"".concat(r.lT,"/token/").concat(g.address),children:[g.symbol," - ",g.address," (View Details)"]})})]}),(0,s.jsxs)(k.Z,{children:[(0,s.jsx)(x.Z,{checked:Z,label:"I accept the risk",onChange:()=>f(e=>!e)}),(0,s.jsx)(c.Z,{disabled:!Z,onClick:()=>n(g),variant:"contained",children:"OK"})]})]})}},28355:function(e,t,n){var s=n(90948),r=n(15861);let i=(0,s.ZP)(r.Z)(()=>({textAlign:"center"}));t.Z=i}}]);