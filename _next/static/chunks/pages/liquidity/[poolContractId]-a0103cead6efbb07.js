(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[620],{14476:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var r=i(n(61268)),s=n(85893),o=(0,r.default)((0,s.jsx)("path",{d:"M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"}),"AlignVerticalBottom");t.Z=o},21023:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var r=i(n(61268)),s=n(85893),o=(0,r.default)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=o},45111:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var r=i(n(61268)),s=n(85893),o=(0,r.default)((0,s.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");t.Z=o},63441:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var r=i(n(61268)),s=n(85893),o=(0,r.default)((0,s.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");t.Z=o},56693:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var r=i(n(61268)),s=n(85893),o=(0,r.default)((0,s.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");t.Z=o},1849:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var r=i(n(61268)),s=n(85893),o=(0,r.default)((0,s.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");t.Z=o},74005:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var r=i(n(61268)),s=n(85893),o=(0,r.default)([(0,s.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"},"0"),(0,s.jsx)("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"},"1")],"ZoomIn");t.Z=o},62288:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var r=i(n(61268)),s=n(85893),o=(0,r.default)((0,s.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"}),"ZoomOut");t.Z=o},56033:function(e,t,n){"use strict";var i,r=n(67294);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}t.Z=function(e){return r.createElement("svg",s({viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=r.createElement("path",{d:"M8.65 1A.65.65 0 0 0 8 .35H2.15a.65.65 0 0 0 0 1.3h5.2v5.2a.65.65 0 0 0 1.3 0V1ZM1.46 8.46l7-7-.92-.92-7 7 .92.92Z",fill:"#6AFF52"})))}},28734:function(e){e.exports=function(e,t){var n=t.prototype,i=n.format;n.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return i.bind(this)(e);var r=this.$utils(),s=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return n.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return n.ordinal(t.week(),"W");case"w":case"ww":return r.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return r.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return r.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}});return i.bind(this)(s)}}},29387:function(e){var t,n;e.exports=(t={year:0,month:1,day:2,hour:3,minute:4,second:5},n={},function(e,i,r){var s,o=function(e,t,i){void 0===i&&(i={});var r,s,o,a,l=new Date(e);return(void 0===(r=i)&&(r={}),(a=n[o=t+"|"+(s=r.timeZoneName||"short")])||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:s}),n[o]=a),a).formatToParts(l)},a=function(e,n){for(var i=o(e,n),s=[],a=0;a<i.length;a+=1){var l=i[a],c=l.type,u=l.value,d=t[c];d>=0&&(s[d]=parseInt(u,10))}var m=s[3],h=s[0]+"-"+s[1]+"-"+s[2]+" "+(24===m?0:m)+":"+s[4]+":"+s[5]+":000",f=+e;return(r.utc(h).valueOf()-(f-=f%1e3))/6e4},l=i.prototype;l.tz=function(e,t){void 0===e&&(e=s);var n=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),a=Math.round((i-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(-(15*Math.round(i.getTimezoneOffset()/15))-a,!0);if(t){var c=l.utcOffset();l=l.add(n-c,"minute")}return l.$x.$timezone=e,l},l.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return n&&n.value};var c=l.startOf;l.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return c.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,n){var i=n&&t,o=n||t||s,l=a(+r(),o);if("string"!=typeof e)return r(e).tz(o);var c=function(e,t,n){var i=e-60*t*1e3,r=a(i,n);if(t===r)return[i,t];var s=a(i-=60*(r-t)*1e3,n);return r===s?[i,r]:[e-60*Math.min(r,s)*1e3,Math.max(r,s)]}(r.utc(e,i).valueOf(),l,o),u=c[0],d=c[1],m=r(u).utcOffset(d);return m.$x.$timezone=o,m},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){s=e}})},57043:function(e,t,n){var i=n(62488),r=n(21078),s=n(278),o=n(1469);e.exports=function(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),n=arguments[0],a=e;a--;)t[a-1]=arguments[a];return i(o(n)?s(n):[n],r(t,1))}},49634:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liquidity/[poolContractId]",function(){return n(20868)}])},20868:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return el}});var i,r,s=n(85893),o=n(49906),a=n(29063),l=n(28445),c=n(87357),u=n(98456),d=n(86886),m=n(11163),h=n(19753),f=n(20243),v=n(41899),x=n(63441),p=n(51233),Z=n(15861),g=n(23795),j=n(34386),y=n(56033),k=n(618),w=n(51115),z=n(17e3),b=n(20640),S=n.n(b),D=n(73400),T=n(49004),M=n(46695),P=n(94986),L=n(82400);let C=e=>{let{pool:t}=e,{settings:{userWallet:n}}=(0,T.r)(),i=t instanceof f.sO?t.liquidityAmount.currency:void 0,{contractId:r}=t,{addTokenToMetamask:o}=(0,P.U)(),{enqueueSnackbar:a}=(0,D.Ds)(),{isSmall:l}=(0,M.l)(),u=t instanceof f.sO,m=(null==n?void 0:n.type)==="metamask",h=u?null==i?void 0:i.address:r,b=u?null==i?void 0:i.solidityAddress:"0x"+w.hX.fromString(r).toSolidityAddress(),C=l&&b?(0,L.Pv)(b):b||"",H=m?C:h,{data:I}=(0,z.a)(["mirrorNodeData",r],async()=>{let e=await fetch("".concat(k.Wm,"/contracts/").concat(r));return await e.json()}),O=[{label:"HashScan",href:"https://hashscan.io/".concat(k.pY,"/contract/").concat(r)}];return I&&O.push({label:"More Analytics",href:"https://www.geckoterminal.com/hedera-hashgraph/pools/".concat(I.evm_address)}),(0,s.jsxs)(p.Z,{mt:5,spacing:5,direction:"column",children:[(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(Z.Z,{color:"custom.mainDetail",fontSize:"14px",mb:"14px",children:"Links"}),(0,s.jsx)(d.ZP,{container:!0,rowSpacing:5,columnSpacing:{xs:2.5,sm:13.5},children:O.map(e=>{let{label:t,href:n}=e;return(0,s.jsx)(d.ZP,{item:!0,children:(0,s.jsxs)(g.Z,{fontSize:"14px",mb:"6px",href:n,target:"_blank",color:"custom.interactive",children:[t,(0,s.jsx)(Z.Z,{component:"span",ml:"10px",sx:{path:{fill:e=>e.palette.custom.interactive}},children:(0,s.jsx)(y.Z,{width:"10px"})})]})},t)})})]}),u&&(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(Z.Z,{color:"custom.mainDetail",fontSize:14,mb:"14px",children:u?"LP Token ID":"Contract ID"}),(0,s.jsxs)(c.Z,{display:"flex",sx:{path:{fill:e=>e.palette.custom.defaultDetail}},children:[(0,s.jsx)(j.Z,{title:m&&(null==i?void 0:i.address)||"",children:(0,s.jsx)(Z.Z,{fontSize:"14px",children:H})}),i&&m&&(0,s.jsx)(j.Z,{title:"Import token to Metamask",children:(0,s.jsx)(x.Z,{sx:{ml:1.6,fontSize:15,cursor:"pointer"},onClick:()=>{o(i)}})}),(0,s.jsx)(v.Z,{style:{fontSize:15,marginLeft:6,cursor:"pointer"},onClick:()=>{S()(H||""),a("Copied!",{variant:"info"})}})]})]})]})};var H=n(27858),I=n(11057),O=n(67294),A=n(37176),E=n(45578),q=n.n(E),B=n(20682),W=n(48418),$=n(69794),N=(e,t,n,i)=>{var r;let[s,o]=(0,O.useState)([]);(0,O.useEffect)(()=>{o([])},[n,e,t]);let{data:a=[],isLoading:l}=(0,B.Z)(e,n,t?"v1":"v2",new Date(1e3*Math.min((0,$._o)(n),i)),void 0,!1),c=(0,O.useMemo)(()=>a.filter(e=>Number(e.startTimestampSeconds)>=i&&(!s.length||Number(e.startTimestampSeconds)<s[0].time)).map((e,t)=>{let{volume:n,liquidity:i,liquidityUsd:r,volumeUsd:s,close:o,startTimestampSeconds:a}=e;return{time:Number(a),volume:s,liquidity:r,volumeHbar:1e-8*n,liquidityHbar:1e-8*i,price:o,priceInverted:1/o}}),[null===(r=s[0])||void 0===r?void 0:r.time,a,i]),{data:u,isFetching:d}=(0,W.ZP)(null!=e?e:-1,n,!1,t?"v1":"v2",{enabled:!!a.length,refetchInterval:6e4});return(0,O.useEffect)(()=>{u&&void 0!==u.volume&&o(e=>{let{close:t}=u;return q()([...e,{time:u.startTimestampSeconds,volume:u.volumeUsd,volumeHbar:1e-8*u.volume,liquidity:u.liquidityUsd,liquidityHbar:1e-8*u.liquidity,price:t,priceInverted:1/t}].reverse(),"time").reverse()})},[u]),{poolDataHistorical:c,isLoadingRawPoolData:l,liveUpdatedPoolData:s,isFetchingLatestPoolData:d}},U=n(86877),V=n(9789),F=n(20821),_=n(76735),R=n(41851),Y=n(22839),G=n(81330),Q=n(60224),X=n(54854),K=n(67068);(i=r||(r={})).LIQUIDITY="Liquidity",i.VOLUME="Volume",i.PRICE="Token A / Token B",i.PRICE_INVERTED="Token B / Token A",i.DEPTH="Depth";var J=e=>{let{pool:t,flipPool:n}=e,i=t instanceof f.sO,r=t.token0,o=t.token1,[a,l]=(0,O.useState)(!(0,G.m7)(r,o)),u=a?t.token0:t.token1,m=a?t.token1:t.token0,[h,v]=(0,O.useState)(i?"Liquidity":"Depth"),[x,g]=(0,O.useState)($.UB.MONTH),j=(0,$.oj)(x),{supplyState:{displayCurrency:y},supplyDispatch:k}=(0,O.useContext)(Q.hK),w=(0,A.Z)(null==t?void 0:t.id);(0,O.useEffect)(()=>{(null==t?void 0:t.id)!==w&&w&&v("Liquidity")},[null==t?void 0:t.id,w]);let z=x===$.UB.HOUR||x===$.UB.DAY?F.wF.FIVEMIN:x===$.UB.WEEK?F.wF.HOUR:F.wF.DAY,{poolDataHistorical:b,isLoadingRawPoolData:S,liveUpdatedPoolData:D,isFetchingLatestPoolData:T}=N(t.id,i,z,j),{volumeValues:P,liquidityValues:L,volumeHbarValues:C,liquidityHbarValues:H,priceValues:E,priceInvertedValues:q}=(0,O.useMemo)(()=>{let e=b.length?[...b,...D]:[],t=e.map(e=>({...e,value:e.volume})),i=(0,U.Z)(e.map(e=>({...e,value:e.liquidity})),e=>!!e.value),r=(0,U.Z)(e.map(e=>({...e,value:e.volumeHbar})),e=>!!e.value);return{volumeValues:t,liquidityValues:i,volumeHbarValues:r,liquidityHbarValues:(0,U.Z)(e.map(e=>({...e,value:e.liquidityHbar})),e=>!!e.value),priceValues:e.map(e=>({...e,value:n?e.priceInverted:e.price})),priceInvertedValues:e.map(e=>({...e,value:n?e.price:e.priceInverted}))}},[n,D,b]),B=T||S,W=!!(null==t?void 0:t.id),J=[{value:"Liquidity"},{value:"Volume"},{value:"Token A / Token B",label:"".concat(r.symbol,"/").concat(o.symbol)},{value:"Token B / Token A",label:"".concat(o.symbol,"/").concat(r.symbol)},...i?[]:[{value:"Depth"}]],{isXSmall:ee}=(0,M.l)(),et=ee?345:389;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.ZP,{container:!0,columns:20,alignItems:"flex-start",children:[(0,s.jsx)(d.ZP,{item:!0,xs:20,md:8,mb:{xs:5,md:3},display:"flex",justifyContent:"flex-start",children:(0,s.jsx)(_.F,{sx:e=>({fontSize:14,border:"none",boxShadow:"inset 0 0 0 0.5px ".concat(e.palette.custom.grey)}),value:h,onChange:e=>{v(e)},options:J})}),(0,s.jsx)(d.ZP,{item:!0,xs:10,md:5.5,children:(0,s.jsx)(p.Z,{direction:"row",justifyContent:{xs:"flex-start",lg:"flex-end"},spacing:2,children:"Depth"===h?[r.symbol,o.symbol].map(e=>(0,s.jsx)(I.Z,{variant:"chip",size:"small",className:u.symbol===e?"active":"",onClick:()=>l(r.symbol===e),sx:{px:1.5,lineHeight:"13px"},children:e},e)):["USD","HBAR"].map(e=>(0,s.jsx)(I.Z,{variant:"chip",size:"small",className:y===e?"active":"",onClick:()=>k({type:"updateSupply",payload:{displayCurrency:e}}),sx:{px:1.5,lineHeight:"12px"},children:e},e))})}),(0,s.jsx)(d.ZP,{item:!0,xs:10,md:6.5,display:"flex",justifyContent:"flex-end",children:(0,s.jsx)(R.Z,{disabled:"Depth"===h,onSelect:e=>g(e),selectedRange:x,timeframeOptions:[$.UB.DAY,$.UB.WEEK,$.UB.MONTH,$.UB.ONE_YEAR,$.UB.ALL_TIME]})})]}),(0,s.jsxs)(c.Z,{mt:6.5,position:"relative",display:"flex",children:["Token A / Token B"===h&&(0,s.jsx)(F.ZP,{height:et,values:E,isLoading:B,showChart:W,timeWindow:x,frequency:z,priceFormatter:e=>e.toFixed(3)}),"Token B / Token A"===h&&(0,s.jsx)(F.ZP,{height:et,values:q,isLoading:B,showChart:W,timeWindow:x,frequency:z,priceFormatter:e=>e.toFixed(3)}),"Liquidity"===h&&("USD"===y?(0,s.jsx)(F.ZP,{height:et,values:L,isLoading:B,showChart:W,timeWindow:x,frequency:z}):(0,s.jsx)(F.ZP,{height:et,priceFormatter:e=>(0,Y.w7)((0,Y.jM)(e))+" ħ",values:H,isLoading:B,showChart:W,timeWindow:x,frequency:z})),"Volume"===h&&("USD"===y?(0,s.jsx)(V.Z,{height:et,values:P,isLoading:B,showChart:W,timeWindow:x,frequency:z}):(0,s.jsx)(V.Z,{height:et,priceFormatter:e=>(0,Y.gt)((0,Y.w7)((0,Y.jM)(e))),values:C,isLoading:B,showChart:W,timeWindow:x,frequency:z})),"Depth"===h&&(0,s.jsxs)(c.Z,{display:"flex",flexDirection:"column",flex:1,height:et,overflow:"hidden",children:[(0,s.jsxs)(c.Z,{display:"flex",flexDirection:"column",mb:3,children:[(0,s.jsx)(Z.Z,{mb:2,children:"Current Price: "}),(0,s.jsx)(Z.Z,{fontSize:"1.3636rem",mb:1,children:(a?t.token0Price:t.token1Price).toFixed(3)}),(0,s.jsx)(Z.Z,{fontSize:12,children:(0,s.jsx)(K.AM,{tokenBase:u,tokenQuote:m,invertPrice:!a})})]}),(0,s.jsx)(c.Z,{display:"flex",justifyContent:"center",alignItems:"center",flex:1,children:(0,s.jsx)(X.Z,{price:t.token0Price,invertPrice:!a,tokenBase:u,tokenQuote:m,feeAmount:t.fee,ticksAtLimit:{LOWER:!0,UPPER:!0},onLeftRangeInput:()=>{},onRightRangeInput:()=>{},interactive:!1,dimensionRatio:ee?1.6:2.3})})]})]})]})},ee=n(3610),et=n(53342),en=n(29652),ei=e=>{let{pool:t,...n}=e,i=t.token0,r=t.token1,{data:o=[]}=(0,ee.Z)(),a=t instanceof f.sO,{data:l=[]}=(0,et.ZP)(),{createTokenChangeHandler:c}=(0,Q.DF)(),u=c({isTokenA:!0,comparedToken:r,existingPools:l}),m=c({isTokenA:!1,comparedToken:i,existingPools:l});return(0,s.jsxs)(d.ZP,{container:!0,spacing:6,...n,children:[(0,s.jsxs)(d.ZP,{item:!0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",xs:12,sm:5,md:3.5,children:[(0,s.jsx)(Z.Z,{display:"flex",alignItems:"center",fontSize:17,fontWeight:600,color:"custom.grey",mr:2,children:"Token A:"}),(0,s.jsx)(en.Z,{onChange:a?u:void 0,selectedLabel:"Token A",token:i,tokens:o,tooltipVariant:"trade"})]}),(0,s.jsxs)(d.ZP,{item:!0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",xs:12,sm:5,md:3.5,children:[(0,s.jsx)(Z.Z,{display:"flex",alignItems:"center",fontSize:17,fontWeight:600,color:"custom.grey",mr:2,children:"Token B:"}),(0,s.jsx)(en.Z,{onChange:a?m:void 0,selectedLabel:"Token B",token:r,tokens:o,tooltipVariant:"trade"})]})]})},er=()=>{let{poolContractId:e=""}=(0,m.useRouter)().query,{data:t}=(0,h.Z)(e),n=t instanceof f.sO;return t?(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)(ei,{pool:t,mb:5}),(0,s.jsxs)(d.ZP,{container:!0,spacing:10,children:[(0,s.jsxs)(d.ZP,{item:!0,xs:12,sm:7,children:[(0,s.jsx)(J,{pool:t}),(0,s.jsx)(C,{pool:t})]}),(0,s.jsx)(d.ZP,{item:!0,xs:12,sm:5,alignItems:"center",children:(0,s.jsx)(H.ZP,{pool:t})})]})]}):(0,s.jsx)(c.Z,{display:"flex",justifyContent:"center",alignSelf:"center",children:(0,s.jsx)(u.Z,{})})},es=n(9008),eo=n.n(es);let ea=()=>(0,s.jsx)(er,{});ea.getLayout=e=>(0,s.jsx)(o.Z,{fullWidth:!0,children:(0,s.jsx)(a.Z,{children:(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)(eo(),{children:[(0,s.jsx)("title",{children:"SaucerSwap: Liquidity"}),(0,s.jsx)("meta",{name:"description",content:"Provide equal value parts of any two tokens, receive LP tokens, and earn interest from swap fees."})]}),e]})})});var el=ea},92977:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(67294),r=function(e){return(e+1)%1e6};function s(){return(0,i.useReducer)(r,0)[1]}}},function(e){e.O(0,[394,331,880,243,63,26,178,658,445,375,774,888,179],function(){return e(e.s=49634)}),_N_E=e.O()}]);