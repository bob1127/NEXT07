(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{8709:function(e,a,s){"use strict";s.d(a,{F:function(){return n}});var r=s(6006);let l=(0,r.createContext)(void 0),t={setTheme:e=>{},themes:[]},n=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:t}},1426:function(e,a,s){Promise.resolve().then(s.t.bind(s,8707,23)),Promise.resolve().then(s.t.bind(s,8920,23)),Promise.resolve().then(s.bind(s,4525)),Promise.resolve().then(s.bind(s,4101)),Promise.resolve().then(s.bind(s,5214)),Promise.resolve().then(s.bind(s,7728)),Promise.resolve().then(s.bind(s,7590)),Promise.resolve().then(s.bind(s,9377)),Promise.resolve().then(s.bind(s,1258)),Promise.resolve().then(s.bind(s,2865)),Promise.resolve().then(s.bind(s,7745)),Promise.resolve().then(s.bind(s,5791)),Promise.resolve().then(s.bind(s,1123)),Promise.resolve().then(s.bind(s,4113))},9377:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return _}});var r=s(9268),l=s(6006),[t,n]=(0,s(4420).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"}),o=s(8824),i=s(7423),d=(0,o.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...i.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-5","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),c=s(4161),u=s(1154),m=s(9755),b=s(2370),A=s(3748),h=s(8997),f=s(1080),g=s(9174),p=s(1063),x=s(6490),v=s(5335),w=(0,A.Gp)((e,a)=>{let{children:s,context:n,Component:o,ripples:i,isPressable:w,disableAnimation:j,disableRipple:y,getCardProps:N}=function(e){let[a,s]=(0,A.oe)(e,d.variantKeys),{ref:r,as:t,children:n,disableRipple:o=!1,onClick:i,onPress:v,autoFocus:w,className:j,classNames:y,allowTextSelectionOnPress:N=!0,...C}=a,E=(0,p.gy)(r),k=t||(e.isPressable?"button":"div"),B="string"==typeof k,_=(0,h.W)(null==y?void 0:y.base,j),{onClick:P,ripples:I}=(0,x.i)(),J=a=>{e.disableAnimation||o||!E.current||P(a)},{buttonProps:M,isPressed:z}=(0,b.j)({onPress:v,elementType:t,isDisabled:!e.isPressable,onClick:(0,c.tS)(i,J),allowTextSelectionOnPress:N,...C},E),{hoverProps:Q,isHovered:D}=(0,m.XI)({isDisabled:!e.isHoverable,...C}),{isFocusVisible:W,isFocused:F,focusProps:O}=(0,u.Fx)({autoFocus:w}),S=(0,l.useMemo)(()=>d({...s}),[...Object.values(s)]),G=(0,l.useMemo)(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:S,classNames:y}),[S,y,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),q=(0,l.useCallback)((a={})=>({ref:E,className:S.base({class:_}),tabIndex:e.isPressable?0:-1,"data-hover":(0,f.PB)(D),"data-pressed":(0,f.PB)(z),"data-focus":(0,f.PB)(F),"data-focus-visible":(0,f.PB)(W),"data-disabled":(0,f.PB)(e.isDisabled),...(0,c.dG)(e.isPressable?{...M,...O,role:"button"}:{},e.isHoverable?Q:{},(0,g.z)(C,{enabled:B}),(0,g.z)(a))}),[E,S,_,B,e.isPressable,e.isHoverable,e.isDisabled,D,z,W,M,O,Q,C]);return{context:G,domRef:E,Component:k,classNames:y,children:n,ripples:I,isHovered:D,isPressed:z,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:o,handleClick:J,isFocusVisible:W,getCardProps:q}}({...e,ref:a});return(0,r.jsxs)(o,{...N(),children:[(0,r.jsx)(t,{value:n,children:s}),w&&!j&&!y&&(0,r.jsx)(v.L,{ripples:i})]})});w.displayName="NextUI.Card";var j=(0,A.Gp)((e,a)=>{var s;let{as:l,className:t,children:o,...i}=e,d=l||"div",c=(0,p.gy)(a),{slots:u,classNames:m}=n(),b=(0,h.W)(null==m?void 0:m.header,t);return(0,r.jsx)(d,{ref:c,className:null==(s=u.header)?void 0:s.call(u,{class:b}),...i,children:o})});j.displayName="NextUI.CardHeader";var y=s(2420),N=(0,o.tv)({slots:{base:["relative","max-w-fit","inline-flex","items-center","justify-between","box-border"],content:"flex-1 text-inherit font-normal",dot:["w-2","h-2","ml-1","rounded-full"],avatar:"flex-shrink-0",closeButton:["z-10","appearance-none","outline-none","select-none","transition-opacity","opacity-70","hover:opacity-100","cursor-pointer","active:opacity-disabled","tap-highlight-transparent"]},variants:{variant:{solid:{},bordered:{base:"border-medium bg-transparent"},light:{base:"bg-transparent"},flat:{},faded:{base:"border-medium"},shadow:{},dot:{base:"border-medium border-default text-foreground bg-transparent"}},color:{default:{dot:"bg-default-400"},primary:{dot:"bg-primary"},secondary:{dot:"bg-secondary"},success:{dot:"bg-success"},warning:{dot:"bg-warning"},danger:{dot:"bg-danger"}},size:{sm:{base:"px-1 h-6 text-small",content:"px-1",closeButton:"text-medium",avatar:"w-4 h-4"},md:{base:"px-1 h-7 text-small",content:"px-2",closeButton:"text-large",avatar:"w-5 h-5"},lg:{base:"px-2 h-8 text-medium",content:"px-2",closeButton:"text-xl",avatar:"w-6 h-6"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isOneChar:{true:{},false:{}},isCloseable:{true:{},false:{}},hasStartContent:{true:{}},hasEndContent:{true:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isCloseButtonFocusVisible:{true:{closeButton:[...i.jR,"ring-1","rounded-full"]}}},defaultVariants:{variant:"solid",color:"default",size:"md",radius:"full",isDisabled:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:y.J.solid.default}},{variant:"solid",color:"primary",class:{base:y.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:y.J.solid.secondary}},{variant:"solid",color:"success",class:{base:y.J.solid.success}},{variant:"solid",color:"warning",class:{base:y.J.solid.warning}},{variant:"solid",color:"danger",class:{base:y.J.solid.danger}},{variant:"shadow",color:"default",class:{base:y.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:y.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:y.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:y.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:y.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:y.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:y.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:y.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:y.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:y.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:y.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:y.J.bordered.danger}},{variant:"flat",color:"default",class:{base:y.J.flat.default}},{variant:"flat",color:"primary",class:{base:y.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:y.J.flat.secondary}},{variant:"flat",color:"success",class:{base:y.J.flat.success}},{variant:"flat",color:"warning",class:{base:y.J.flat.warning}},{variant:"flat",color:"danger",class:{base:y.J.flat.danger}},{variant:"faded",color:"default",class:{base:y.J.faded.default}},{variant:"faded",color:"primary",class:{base:y.J.faded.primary}},{variant:"faded",color:"secondary",class:{base:y.J.faded.secondary}},{variant:"faded",color:"success",class:{base:y.J.faded.success}},{variant:"faded",color:"warning",class:{base:y.J.faded.warning}},{variant:"faded",color:"danger",class:{base:y.J.faded.danger}},{variant:"light",color:"default",class:{base:y.J.light.default}},{variant:"light",color:"primary",class:{base:y.J.light.primary}},{variant:"light",color:"secondary",class:{base:y.J.light.secondary}},{variant:"light",color:"success",class:{base:y.J.light.success}},{variant:"light",color:"warning",class:{base:y.J.light.warning}},{variant:"light",color:"danger",class:{base:y.J.light.danger}},{isOneChar:!0,size:"sm",class:{base:"w-5 h-5 min-w-unit-5 min-h-5"}},{isOneChar:!0,size:"md",class:{base:"w-6 h-6 min-w-unit-6 min-h-6"}},{isOneChar:!0,size:"lg",class:{base:"w-7 h-7 min-w-unit-7 min-h-7"}},{isOneChar:!0,isCloseable:!1,class:{base:"px-0 justify-center",content:"px-0 flex-none"}},{isOneChar:!0,isCloseable:!0,class:{base:"w-auto"}},{hasStartContent:!0,size:"sm",class:{content:"pl-0.5"}},{hasStartContent:!0,size:["md","lg"],class:{content:"pl-1"}},{hasEndContent:!0,size:"sm",class:{content:"pr-0.5"}},{hasEndContent:!0,size:["md","lg"],class:{content:"pr-1"}}]}),C=e=>(0,r.jsx)("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:(0,r.jsx)("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:"currentColor"})}),E=(0,A.Gp)((e,a)=>{let{Component:s,children:t,slots:n,classNames:o,isDot:i,isCloseable:d,startContent:b,endContent:f,getCloseButtonProps:g,getChipProps:x}=function(e){let[a,s]=(0,A.oe)(e,N.variantKeys),{ref:r,as:t,children:n,avatar:o,startContent:i,endContent:d,onClose:b,classNames:f,className:g,...x}=a,v=(0,p.gy)(r),w=(0,h.W)(null==f?void 0:f.base,g),j=!!b,y="dot"===e.variant,{focusProps:C,isFocusVisible:E}=(0,u.Fx)(),k=(0,l.useMemo)(()=>"string"==typeof n&&(null==n?void 0:n.length)===1,[n]),B=(0,l.useMemo)(()=>!!o||!!i,[o,i]),_=(0,l.useMemo)(()=>!!d||j,[d,j]),P=(0,l.useMemo)(()=>N({...s,hasStartContent:B,hasEndContent:_,isOneChar:k,isCloseable:j,isCloseButtonFocusVisible:E}),[...Object.values(s),E,B,_,k,j]),{pressProps:I}=(0,m.r7)({isDisabled:!!(null==e?void 0:e.isDisabled),onPress:b}),J=e=>(0,l.isValidElement)(e)?(0,l.cloneElement)(e,{className:(0,h.W)("max-h-[80%]",e.props.className)}):null;return{Component:t||"div",children:n,slots:P,classNames:f,isDot:y,isCloseable:j,startContent:((0,l.isValidElement)(o)?(0,l.cloneElement)(o,{className:P.avatar({class:null==f?void 0:f.avatar})}):null)||J(i),endContent:J(d),getCloseButtonProps:()=>({role:"button",tabIndex:0,className:P.closeButton({class:null==f?void 0:f.closeButton}),...(0,c.dG)(I,C)}),getChipProps:()=>({ref:v,className:P.base({class:w}),...x})}}({...e,ref:a}),v=(0,l.useMemo)(()=>i&&!b?(0,r.jsx)("span",{className:n.dot({class:null==o?void 0:o.dot})}):b,[n,b,i]),w=(0,l.useMemo)(()=>d?(0,r.jsx)("span",{...g(),children:f||(0,r.jsx)(C,{})}):f,[f,d,g]);return(0,r.jsxs)(s,{...x(),children:[v,(0,r.jsx)("span",{className:n.content({class:null==o?void 0:o.content}),children:t}),w]})});E.displayName="NextUI.Chip";var k=(0,A.Gp)((e,a)=>{var s;let{as:l,className:t,children:o,...i}=e,d=l||"div",c=(0,p.gy)(a),{slots:u,classNames:m}=n(),b=(0,h.W)(null==m?void 0:m.body,t);return(0,r.jsx)(d,{ref:c,className:null==(s=u.body)?void 0:s.call(u,{class:b}),...i,children:o})});k.displayName="NextUI.CardBody";var B=s(1668);function _(){return(0,r.jsxs)("div",{className:"flex flex-col flex-wrap w-full justify-center items-center lg:mt-20 lg:px-20 md:mt-20 md:px-20",children:[(0,r.jsxs)("div",{className:"section-title flex flex-col w-full py-10 justify-center items-center",children:[(0,r.jsx)("h1",{className:"mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900  lg:text-4xl dark:text-white text-center",children:"專利技術建構的生態系健康檢測平台"}),(0,r.jsx)("p",{className:"mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400",children:"多領域應用"})]}),(0,r.jsxs)("div",{className:"cardWrap flex flex-col w-full border justify-center items-start md:flex-row",children:[(0,r.jsx)("div",{className:"relative flex justify-center mb-8","data-aos":"fade-up","data-aos-delay":"450",children:(0,r.jsxs)(w,{className:" py-4 hover:border duration-1000 m-4 w-full md:1/4 ",children:[(0,r.jsxs)(j,{className:"pb-0 pt-2 px-4 flex-col items-start",children:[(0,r.jsx)("p",{className:"text-tiny uppercase font-bold",children:"Daily Mix"}),(0,r.jsx)("small",{className:"text-default-500",children:"12 Tracks"}),(0,r.jsx)("h4",{className:"font-bold text-large",children:"生醫檢測"}),(0,r.jsxs)("div",{className:"flex gap-4 flex-wrap w-full",children:[(0,r.jsx)(E,{color:"danger",children:"血糖"}),(0,r.jsx)(E,{color:"danger",children:"尿液酸鹼"}),(0,r.jsx)(E,{color:"danger",children:"尿酸"}),(0,r.jsx)(E,{color:"danger",children:"糖化寫色素"}),(0,r.jsx)(E,{color:"danger",children:"膽固醇"})]})]}),(0,r.jsx)(k,{className:"overflow-visible py-2",children:(0,r.jsx)(B.J,{alt:"Card background",className:"object-cover rounded-xl",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_Q-_5-BStaeoVizbqLPNmMqn73E2FaKV3WquuMbrkWll8oZMKBnqaAlCZckFGgwKXxQ&usqp=CAU",width:270})})]})}),(0,r.jsx)("div",{className:"relative flex justify-center mb-8","data-aos":"fade-up","data-aos-delay":"850",children:(0,r.jsxs)(w,{className:"py-4 hover:border duration-1000 m-4 w-full md:1/4",children:[(0,r.jsxs)(j,{className:"pb-0 pt-2 px-4 flex-col items-start",children:[(0,r.jsx)("p",{className:"text-tiny uppercase font-bold",children:"Daily Mix"}),(0,r.jsx)("small",{className:"text-default-500",children:"12 Tracks"}),(0,r.jsx)("h4",{className:"font-bold text-large",children:"食品安全"}),(0,r.jsxs)("div",{className:"flex gap-4 flex-wrap w-full",children:[(0,r.jsx)(E,{color:"danger",children:"農藥"}),(0,r.jsx)(E,{color:"danger",children:"亞硝酸鹽"}),(0,r.jsx)(E,{color:"danger",children:"瘦肉精"}),(0,r.jsx)(E,{color:"danger",children:"過敏原"}),(0,r.jsx)(E,{color:"danger",children:"生箘數"})]})]}),(0,r.jsx)(k,{className:"overflow-visible py-2 w-full border ",children:(0,r.jsx)(B.J,{alt:"Card background",className:"object-cover rounded-xl w-full",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_Q-_5-BStaeoVizbqLPNmMqn73E2FaKV3WquuMbrkWll8oZMKBnqaAlCZckFGgwKXxQ&usqp=CAU"})})]})}),(0,r.jsx)("div",{className:"relative flex justify-center mb-8","data-aos":"fade-up","data-aos-delay":"1250",children:(0,r.jsxs)(w,{className:"py-4 hover:border duration-1000 m-4 w-full md:1/4",children:[(0,r.jsxs)(j,{className:"pb-0 pt-2 px-4 flex-col items-start",children:[(0,r.jsx)("p",{className:"text-tiny uppercase font-bold",children:"Daily Mix"}),(0,r.jsx)("small",{className:"text-default-500",children:"12 Tracks"}),(0,r.jsx)("h4",{className:"font-bold text-large",children:"環境污染"}),(0,r.jsxs)("div",{className:"flex gap-4 flex-wrap w-full",children:[(0,r.jsx)(E,{color:"danger",children:"重金屬"}),(0,r.jsx)(E,{color:"danger",children:"酸鹼"}),(0,r.jsx)(E,{color:"danger",children:"多氯聯苯"}),(0,r.jsx)(E,{color:"danger",children:"甲醛"}),(0,r.jsx)(E,{color:"danger",children:"氮氣"})]})]}),(0,r.jsx)(k,{className:"overflow-visible py-2",children:(0,r.jsx)(B.J,{alt:"Card background",className:"object-cover rounded-xl",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_Q-_5-BStaeoVizbqLPNmMqn73E2FaKV3WquuMbrkWll8oZMKBnqaAlCZckFGgwKXxQ&usqp=CAU",width:270})})]})})]})]})}},7590:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return A}});var r=s(9268),l=s(6006),t=s(2915),n=s(9061),o=s(789);function i(e){let a=(0,o.h)(()=>(0,t.BX)(e)),{isStatic:s}=(0,l.useContext)(n._);if(s){let[,s]=(0,l.useState)(e);(0,l.useEffect)(()=>a.on("change",s),[])}return a}var d=s(7304),c=s(3398),u=s(1253),m=s(769);function b(){var e,a;let s=(e=["\n            radial-gradient(\n              650px circle at ","px ","px,\n              rgba(14, 165, 233, 0.15),\n              transparent 90%\n            )\n          "],a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}})));return b=function(){return s},s}function A(){let e=i(0),a=i(0);return(0,r.jsxs)("div",{className:"cardFiver group py-40 px-30 relative w-full rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl ",onMouseMove:function(s){let{currentTarget:r,clientX:l,clientY:t}=s,{left:n,top:o}=r.getBoundingClientRect();e.set(l-n),a.set(t-o)},children:[(0,r.jsx)(d.E.div,{className:"pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-00 group-hover:opacity-100",style:{background:function(e,...a){let s=e.length;return function(e,a){let s=i(a()),r=()=>s.set(a());return r(),(0,c.L)(()=>{let a=()=>u.Wi.update(r,!1,!0),s=e.map(e=>e.on("change",a));return()=>{s.forEach(e=>e()),(0,u.Pn)(r)}}),s}(a.filter(m.i),function(){let r="";for(let l=0;l<s;l++){r+=e[l];let s=a[l];s&&(r+=(0,m.i)(s)?s.get():s)}return r})}(b(),e,a)}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-base font-semibold leading-7 text-sky-500",children:"Byline"}),(0,r.jsx)("div",{className:"mt-2 flex items-center gap-x-2",children:(0,r.jsx)("span",{className:"text-5xl font-bold tracking-tight text-white",children:"Hero"})}),(0,r.jsx)("p",{className:"mt-6 text-base leading-7 text-gray-300",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum eum ullam nostrum atque quam."})]})]})}s(8709)},5214:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return b}});var r=s(9268),l=s(6006),t=s(2801);s(9845);var n=e=>{let{iconName:a,iconLabel:s}=e,l=t[a];return(0,r.jsxs)("div",{className:"feature",children:[(0,r.jsx)("div",{className:"feature__circle",children:(0,r.jsx)(l,{className:"feature__icon"})}),(0,r.jsx)("span",{className:"feature__label",children:s})]})};s(6160);var o=s(7304),i=e=>{let{data:a,open:s}=e,{imageUrl:l,price:t,address:n,numBedroom:i,numWashrooms:d,livingSpace:c}=a;return(0,r.jsx)(o.E.div,{className:"listing",onClick:s,whileHover:{scale:1.1},children:(0,r.jsxs)("div",{className:"listing__content",children:[(0,r.jsx)("div",{className:"listing__image-container",children:(0,r.jsx)("img",{className:"listing__image",alt:"real estate mansion",src:l})}),(0,r.jsxs)("div",{className:"listing__details",children:[(0,r.jsx)("div",{className:"listing__type",children:"Hot Sale"}),(0,r.jsx)("div",{className:"listing__row",children:(0,r.jsx)("span",{className:"listing__price",children:t})}),(0,r.jsx)("div",{className:"listing__row",children:(0,r.jsx)("span",{className:"listing__address",children:n})})]})]})})};s(4664);var d=e=>{let{children:a,close:s}=e;return(0,r.jsx)(o.E.div,{className:"overlay",onClick:s,variants:{open:{backgroundColor:"rgba(0,0,0,0.6)"},closed:{backgroundColor:"rgba(0,0,0,0)"}},initial:"closed",animate:"open",exit:"closed",children:a},"overlay")};s(6473);var c=s(5372),u=e=>{let{data:a,close:s}=e,{imageUrl:l,price:t,address:i,description:d,numBedroom:u,numWashrooms:m,livingSpace:b}=a,A={open:{opacity:1,x:0},closed:{opacity:0,x:"10%"}};return(0,r.jsx)("div",{className:"ModalWrap",children:(0,r.jsxs)(o.E.div,{className:"modal flex transplate-y-1/2 transplate-x-1/2 shadow",variants:{open:{opacity:1,transition:{staggerChildren:.5,delayChildren:.2}},closed:{opacity:0}},onClick:e=>e.stopPropagation(),children:[(0,r.jsx)(o.E.img,{className:"modal__image",alt:"real estate mansion",src:l,variants:{open:{opacity:1,y:"0vh"},closed:{opacity:0,y:"-10vh"}}}),(0,r.jsxs)(o.E.div,{className:"modal__info",variants:{open:{opacity:1,transition:{staggerChildren:.2}},closed:{opacity:0}},children:[(0,r.jsx)(o.E.div,{className:"modal__row",variants:A,children:(0,r.jsx)("span",{className:"modal__price text-3xl font-extrabold",children:t})}),(0,r.jsx)(o.E.div,{className:"modal__row",variants:A,children:(0,r.jsx)("span",{className:"modal__address",children:i})}),(0,r.jsxs)(o.E.div,{className:"modal__row",variants:A,children:[(0,r.jsx)(n,{iconName:"FaBed",iconLabel:u}),(0,r.jsx)(n,{iconName:"FaShower",iconLabel:m}),(0,r.jsx)(n,{iconName:"FaRuler",iconLabel:b})]}),(0,r.jsx)(o.E.div,{className:"modal__description-wrapper",variants:A,children:(0,r.jsx)("p",{className:"modal__description text-gray-900 font-normal md:text-normal",children:d})}),(0,r.jsx)(o.E.button,{className:"modal__close-wrapper",whileHover:{scale:1.2},onClick:s,children:(0,r.jsx)(c.Jvf,{className:"modal__close-icon"})})]})]})})},m=s(7743),b=e=>{let{data:a}=e,[s,t]=(0,l.useState)(!1),n=()=>{t(!1)};return(0,r.jsxs)("div",{className:"card-wrap",children:[(0,r.jsx)(i,{data:a,open:()=>{t(!0)}}),(0,r.jsx)(m.M,{children:s&&(0,r.jsx)(d,{close:n,children:(0,r.jsx)(u,{data:a,close:n})})})]})}},1258:function(e,a,s){"use strict";s.r(a);var r=s(9268),l=s(7304),t=s(6006),n=s(9201),o=s(6684),i=s(7694),d=s(9534),c=s(2555),u=s(4828),m=s(7356),b=s(1668);let A=[{id:"world",label:"關於",name:"Home",hash:"#about "},{id:"ny",label:"專利技術",hash:"#Tech "},{id:"business",label:"應用",hash:"#Tech "},{id:"arts",label:"產品"},{id:"science",label:"聯絡"}];a.default=function(){let{isOpen:e,onOpen:a,onOpenChange:s}=(0,n.q)(),[h,f]=(0,t.useState)(A[0].id);return(0,r.jsx)("div",{className:"flex space-x-1 flex justify-center fixed  z-30 bottom-3 m-auto left-0 right-0 ",children:(0,r.jsxs)("div",{className:"wrap  bg-slate-100  backdrop-blur-md  w-auto inline-block px-8 rounded-full py-2",children:[A.map((e,a)=>(0,r.jsxs)("button",{onMouseEnter:()=>f(e.id),className:"".concat(h===e.id?"":"hover:text-black/20"," relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2"),style:{WebkitTapHighlightColor:"transparent"},children:[(0,r.jsxs)("a",{href:e.hash,children:[h===e.id&&(0,r.jsx)(l.E.span,{layoutId:"bubble",className:"absolute inset-0 z-10 bg-white mix-blend-difference",style:{borderRadius:9999},transition:{type:"spring",bounce:.2,duration:.6}}),"  "]}),e.label]},e.id)),(0,r.jsx)(o.A,{onPress:a,className:"bg-rose-600 rounded-full text-white",children:"Open Modal"}),(0,r.jsx)(i.R,{backdrop:"opaque",isOpen:e,onOpenChange:s,radius:"2xl",className:"bg-gray-300",children:(0,r.jsx)(d.A,{children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.k,{className:"flex flex-col gap-1"}),(0,r.jsx)(u.I,{children:(0,r.jsx)(b.J,{src:""})}),(0,r.jsx)(m.R,{})]})})})]})})}},9845:function(){},6160:function(){},6473:function(){},4664:function(){},4525:function(e,a,s){"use strict";s.r(a),a.default={src:"/_next/static/media/c2.1d6324fa.jpg",height:1200,width:1600,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJRU3//EABsQAAICAwEAAAAAAAAAAAAAAAEDBBEAAhNB/9oACAEBAAE/AGM3bJ6iucZ6l16SSLz/xAAbEQACAgMBAAAAAAAAAAAAAAABAhExAAMEEv/aAAgBAgEBPwB5TTz+WdZU0xAvP//EABoRAAMAAwEAAAAAAAAAAAAAAAECAwARMRL/2gAIAQMBAT8Aa72pQ0CMfXSi75n/2Q==",blurWidth:8,blurHeight:6}},4101:function(e,a,s){"use strict";s.r(a),a.default={src:"/_next/static/media/wix.47d03b3f.jpg",height:1200,width:1600,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAuQF//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBAASEzJR/9oACAEBAAE/AJYL7BuG0iksvdNgF8Gf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIBEeH/2gAIAQIBAT8Ah2rD/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIh/9oACAEDAQE/AFp//9k=",blurWidth:8,blurHeight:6}},3270:function(e,a,s){"use strict";s.d(a,{w_:function(){return i}});var r=s(6006),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},t=r.createContext&&r.createContext(l),n=function(){return(n=Object.assign||function(e){for(var a,s=1,r=arguments.length;s<r;s++)for(var l in a=arguments[s])Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l]);return e}).apply(this,arguments)},o=function(e,a){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>a.indexOf(r)&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>a.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(s[r[l]]=e[r[l]]);return s};function i(e){return function(a){return r.createElement(d,n({attr:n({},e.attr)},a),function e(a){return a&&a.map(function(a,s){return r.createElement(a.tag,n({key:s},a.attr),e(a.child))})}(e.child))}}function d(e){var a=function(a){var s,l=e.attr,t=e.size,i=e.title,d=o(e,["attr","size","title"]),c=t||a.size||"1em";return a.className&&(s=a.className),e.className&&(s=(s?s+" ":"")+e.className),r.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,l,d,{className:s,style:n(n({color:e.color||a.color},a.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==t?r.createElement(t.Consumer,null,function(e){return a(e)}):a(l)}},1668:function(e,a,s){"use strict";s.d(a,{J:function(){return m}});var r=s(6006),l=s(3748),t=(0,s(8824).tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),n=s(1063),o=s(8997),i=s(1080),d=s(9813),c=s(9268),u=(0,l.Gp)((e,a)=>{let{Component:s,domRef:u,slots:m,classNames:b,isBlurred:A,isZoomed:h,fallbackSrc:f,removeWrapper:g,disableSkeleton:p,getImgProps:x,getWrapperProps:v,getBlurredImgProps:w}=function(e){let[a,s]=(0,l.oe)(e,t.variantKeys),{ref:c,as:u,src:m,className:b,classNames:A,loading:h,isBlurred:f,fallbackSrc:g,isLoading:p,disableSkeleton:x=!!g,removeWrapper:v=!1,onError:w,onLoad:j,srcSet:y,sizes:N,crossOrigin:C,...E}=a,k=function(e={}){let{loading:a,src:s,srcSet:l,onLoad:t,onError:n,crossOrigin:o,sizes:i,ignoreFallback:c}=e,[u,m]=(0,r.useState)("pending");(0,r.useEffect)(()=>{m(s?"loading":"pending")},[s]);let b=(0,r.useRef)(),A=(0,r.useCallback)(()=>{if(!s)return;h();let e=new Image;e.src=s,o&&(e.crossOrigin=o),l&&(e.srcset=l),i&&(e.sizes=i),a&&(e.loading=a),e.onload=e=>{h(),m("loaded"),null==t||t(e)},e.onerror=e=>{h(),m("failed"),null==n||n(e)},b.current=e},[s,o,l,i,t,n,a]),h=()=>{b.current&&(b.current.onload=null,b.current.onerror=null,b.current=null)};return(0,d.G)(()=>{if(!c)return"loading"===u&&A(),()=>{h()}},[u,A,c]),c?"loaded":u}({src:m,loading:h,onError:w,onLoad:j,ignoreFallback:!1,srcSet:y,sizes:N,crossOrigin:C}),B="loaded"===k&&!p,_="loading"===k||p,P=e.isZoomed,I=(0,n.gy)(c),{w:J}=(0,r.useMemo)(()=>({w:a.width?"number"==typeof a.width?`${a.width}px`:a.width:"fit-content"}),[null==a?void 0:a.width]),M=(!m||!B)&&!!g,z=_&&!x,Q=(0,r.useMemo)(()=>t({...s,showSkeleton:z}),[...Object.values(s),z]),D=(0,o.W)(b,null==A?void 0:A.img),W=(0,r.useCallback)(()=>{let e=M?{backgroundImage:`url(${g})`}:{};return{className:Q.wrapper({class:null==A?void 0:A.wrapper}),style:{...e,maxWidth:J}}},[Q,M,g,null==A?void 0:A.wrapper]),F=(0,r.useCallback)(()=>({src:m,"aria-hidden":(0,i.PB)(!0),className:Q.blurredImg({class:null==A?void 0:A.blurredImg})}),[Q,m,null==A?void 0:A.blurredImg]);return{Component:u||"img",domRef:I,slots:Q,classNames:A,isBlurred:f,disableSkeleton:x,fallbackSrc:g,removeWrapper:v,isZoomed:P,isLoading:_,getImgProps:(e={})=>{let a=(0,o.W)(D,null==e?void 0:e.className);return{src:m,ref:I,"data-loaded":(0,i.PB)(B),className:Q.img({class:a}),loading:h,srcSet:y,sizes:N,crossOrigin:C,...E}},getWrapperProps:W,getBlurredImgProps:F}}({...e,ref:a}),j=(0,c.jsx)(s,{ref:u,...x()});if(g)return j;let y=(0,c.jsx)("div",{className:m.zoomedWrapper({class:null==b?void 0:b.zoomedWrapper}),children:j});return A?(0,c.jsxs)("div",{...v(),children:[h?y:j,(0,r.cloneElement)(j,w())]}):h||!p||f?(0,c.jsxs)("div",{...v(),children:[" ",h?y:j]}):j});u.displayName="NextUI.Image";var m=u}},function(e){e.O(0,[821,132,669,497,542,814,667,488,744],function(){return e(e.s=1426)}),_N_E=e.O()}]);