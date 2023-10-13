(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(394)}])},394:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return pages}});var i=s(5893),n=s(3566),a={innerWidth:"2xl:max-w-[1280px] w-full",paddings:"sm:p-16 xs:p-8 px-6 py-12",yPaddings:"sm:py-16 xs:py-8 py-12",xPaddings:"sm:px-16 px-6",flexCenter:"flex justify-center items-center",heroHeading:"font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",heroDText:"md:w-[180px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]"};let l={hidden:{opacity:0,y:-50,transition:{type:"spring",stiffness:300,damping:140}},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,delay:1}}},slideIn=(e,t,s,i)=>({hidden:{x:"left"===e?"-100%":"right"===e?"100%":0,y:"up"===e?"100%":"down"===e?"100%":0},show:{x:0,y:0,transition:{type:t,delay:s,duration:i,ease:"easeOut"}}}),motion_staggerContainer=(e,t)=>({hidden:{},show:{transition:{staggerChildren:e,delayChildren:t}}}),textVariant=e=>({hidden:{y:50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:e}}}),o={hidden:{opacity:0},show:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{opacity:1,transition:{staggerChildren:.1,delayChildren:.1*e}}}},r={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{type:"tween",ease:"easeIn"}}},motion_fadeIn=(e,t,s,i)=>({hidden:{x:"left"===e?100:"right"===e?-100:0,y:"up"===e?100:"down"===e?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:t,delay:s,duration:i,ease:"easeOut"}}}),motion_planetVariants=e=>({hidden:{x:"left"===e?"-100%":"100%",rotate:120},show:{x:0,rotate:0,transition:{type:"spring",duration:1.8,delay:.5}}}),zoomIn=(e,t)=>({hidden:{scale:0,opacity:0},show:{scale:1,opacity:1,transition:{type:"tween",delay:e,duration:t,ease:"easeOut"}}}),x={hidden:{opacity:0,y:50,transition:{type:"spring",stiffness:300,damping:140}},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,delay:.5}}};var components_Navbar=()=>(0,i.jsxs)(n.E.nav,{variants:l,initial:"hidden",whileInView:"show",className:"".concat(a.xPaddings," py-8 relative"),children:[(0,i.jsx)("div",{className:"absolute w-[50%] inset-0 gradient-01"}),(0,i.jsxs)("div",{className:"".concat(a.innerWidth," mx-auto flex justify-between gap-8"),children:[(0,i.jsx)("img",{src:"/search.svg",alt:"search",className:"w-[24px] h-[24px] object-contain"}),(0,i.jsx)("h2",{className:"font-extrabold text-[24px] leading-[30.24px] text-white",children:"THE INTELLIGENCE AMPLIFICATION COMPANY"}),(0,i.jsx)("img",{src:"/menu.svg",alt:"menu",className:"w-[24px] h-[24px] object-contain"})]})]});let CustomTexts_TypingText=e=>{let{title:t,textStyles:s}=e;return(0,i.jsx)(n.E.p,{variants:o,className:"font-normal text-[14px] text-secondary-white ".concat(s),children:Array.from(t).map((e,t)=>(0,i.jsx)(n.E.span,{variants:r,children:" "===e?"\xa0":e},t))})},CustomTexts_TitleText=e=>{let{title:t,textStyles:s}=e;return(0,i.jsx)(n.E.h2,{variants:r,initial:"hidden",whileInView:"show",className:"mt-[8px] font-bold md:text-[64px] text-[40px] text-white ".concat(s),children:t})};var components_ExploreCard=e=>{let{id:t,imgUrl:s,title:l,content:o,index:r,active:x,handleClick:c}=e;return(0,i.jsxs)(n.E.div,{variants:motion_fadeIn("right","spring",.5*r,.75),className:"relative ".concat(x===t?"lg:flex-[3.5] flex-[10]":"lg:flex-[0.5] flex-[2]"," flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer"),onClick:()=>c(t),children:[(0,i.jsx)("img",{src:s,alt:"planet-04",className:"absolute w-full h-full object-cover rounded-[24px]"}),x!==t?(0,i.jsx)("h3",{className:"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]",children:l}):(0,i.jsxs)("div",{className:"absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]",children:[(0,i.jsx)("div",{className:"".concat(a.flexCenter," w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]"),children:(0,i.jsx)("img",{src:"/headset.svg",alt:"headset",className:"w-1/2 h-1/2 object-contain"})}),(0,i.jsx)("h2",{className:"mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white",children:l}),(0,i.jsx)("p",{className:"text-white",children:o})]})]})},components_NewFeatures=e=>{let{imgUrl:t,title:s,subtitle:n}=e;return(0,i.jsxs)("div",{className:"flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]",children:[(0,i.jsx)("div",{className:"".concat(a.flexCenter," w-[200px] h-[200px] rounded-[24px] bg-[#323F5D]"),children:(0,i.jsx)("img",{src:t,alt:"icon",className:"w-1/2 h-1/2 object-contain"})}),(0,i.jsx)("h1",{className:"mt-[26px] font-bold text-[24px] leading-[30.24px] text-white",children:s}),(0,i.jsx)("p",{className:"flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]",children:n})]})},components_InsightCard=e=>{let{imgUrl:t,title:s,subtitle:a,index:l}=e;return(0,i.jsxs)(n.E.div,{variants:motion_fadeIn("up","spring",.5*l,1),className:"flex md:flex-row flex-col gap-4",children:[(0,i.jsx)("img",{src:t,alt:"planet-01",className:"md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"}),(0,i.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,i.jsxs)("div",{className:"flex-1 md:ml-[62px] flex flex-col max-w-[650px]",children:[(0,i.jsx)("h4",{className:"font-normal lg:text-[42px] text-[26px] text-white",children:s}),(0,i.jsx)("p",{className:"mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white",children:a})]}),(0,i.jsx)("div",{className:"lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white",children:(0,i.jsx)("img",{src:"/arrow.svg",alt:"arrow",className:"w-[40%] h-[40%] object-contain"})})]})]})};let c=[{id:"world-1",imgUrl:"/gif7.gif",title:"Connecting people with puzzle pieces",content:"There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s. Maybe the cure is currently separated in different people’s heads. How can we design the web so that these half-formed solutions can come together? - Sir Tim Berners-Lee, Creator of the Web"},{id:"world-2",imgUrl:"/gif2.gif",title:"The auto-suggest layer for human thinking",content:"Connect fragments of information from siloed sources faster than ever before. \n Your organization's collective memory at your fingertips."},{id:"world-3",imgUrl:"/gif6.gif",title:"Blogs",content:"The central hubs of innovation and all things AI"}],d=[{imgUrl:"/first round.png",title:"",subtitle:""},{imgUrl:"/8vc.png",title:"",subtitle:""},{imgUrl:"/startx.png",title:"",subtitle:""},{imgUrl:"/33 more.png",title:"",subtitle:""}],m=[{imgUrl:"/people-1.png",title:"Marty Weiner | Former CTO, Reddit Ideaflow Advisor",subtitle:"A key step to realizing the potential of the Web as a medium for collective intelligence."},{imgUrl:"/people-2.png",title:"John Devadoss | Founding Director, Microsoft Digital Consulting",subtitle:"Ideaflow is the force multiplier for business productivity in this new normal."},{imgUrl:"/people-3.png",title:"Tim Draper | Founder, DFJ Ideaflow Investor",subtitle:"The amount of value that can be unlocked by connecting the right people and ideas together is incredible. I’m very excited for what Ideaflow is building."}],p=[{name:"twitter",url:"/twitter.svg"},{name:"linkedin",url:"/linkedin.svg"},{name:"instagram",url:"/instagram.svg"},{name:"facebook",url:"/facebook.svg"}];var components_Footer=()=>(0,i.jsxs)(n.E.footer,{variants:x,initial:"hidden",whileInView:"show",className:"".concat(a.xPaddings," py-8 relative"),children:[(0,i.jsx)("div",{className:"footer-gradient"}),(0,i.jsxs)("div",{className:"".concat(a.innerWidth," mx-auto flex flex-col gap-8"),children:[(0,i.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-5",children:[(0,i.jsx)("h4",{className:"font-bold md:text-[64px] text-[44px] text-white",children:"Ideaflow"}),(0,i.jsxs)("button",{type:"button",className:"flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]",children:[(0,i.jsx)("img",{src:"/headset.svg",alt:"headset",className:"w-[24px] h-[24px] object-contain"}),(0,i.jsx)("span",{className:"font-normal text-[16px] text-white",children:"Contact"})]})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("div",{className:"mb-[50px] h-[2px] bg-white opacity-10"}),(0,i.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[(0,i.jsx)("h4",{className:"font-extrabold text-[24px] text-white",children:"LATEST UPDATES"}),(0,i.jsx)("p",{className:"font-normal text-[14px] text-white opacity-50",children:"Copyright \xa9 2020 Ideaflow, Inc. All rights reserved."}),(0,i.jsx)("div",{className:"flex gap-4",children:p.map(e=>(0,i.jsx)("img",{src:e.url,alt:e.name,className:"w-[24px] h-[24px] object-contain cursor-pointer"},e.name))})]})]})]})]}),sections_Hero=()=>(0,i.jsx)("section",{className:"".concat(a.yPaddings," sm:pl-16 pl-6"),children:(0,i.jsxs)(n.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(a.innerWidth," mx-auto flex flex-col"),children:[(0,i.jsxs)("div",{className:"flex justify-center items-center flex-col relative z-10",children:[(0,i.jsx)(n.E.h2,{variants:textVariant(1.1),className:a.heroHeading}),(0,i.jsxs)(n.E.div,{variants:textVariant(1.2),className:"flex flex-row justify-center items-center",children:[(0,i.jsx)("p",{className:a.heroHeading,children:"I"}),(0,i.jsx)("div",{className:a.heroDText}),(0,i.jsx)("p",{className:a.heroHeading,children:"EAFLOW.IO"})]})]}),(0,i.jsx)(n.E.div,{variants:slideIn("right","tween",.2,1),className:"relative w-full md:-mt-[20px] -mt-[12px]",children:(0,i.jsx)("img",{src:"/ideaflow cover.png",className:"mx-auto center sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"})})]})}),sections_About=()=>(0,i.jsxs)("section",{className:"".concat(a.paddings," relative z-10"),children:[(0,i.jsx)("div",{className:"gradient-02 z-0"}),(0,i.jsxs)(n.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(a.innerWidth," mx-auto ").concat(a.flexCenter," flex-col"),children:[(0,i.jsx)(CustomTexts_TypingText,{title:"| About Ideaflow",textStyles:"text-center"}),(0,i.jsx)(n.E.p,{variants:motion_fadeIn("up","tween",.2,1),className:"mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white",children:(0,i.jsx)("span",{className:"font-extrabold text-white",children:"We’re creating an ecosystem for humans and machines to work together to solve the world’s most important problems – starting with a notebook that augments your intelligence."})}),(0,i.jsx)(n.E.img,{variants:motion_fadeIn("up","tween",.3,1),src:"/arrow-down.svg",alt:"arrow down",className:"w-[18px] h-[28px] object-contain mt-[28px]"})]})]}),h=s(7294),sections_Explore=()=>{let[e,t]=(0,h.useState)("world-2");return(0,i.jsx)("section",{className:"".concat(a.paddings),id:"explore",children:(0,i.jsxs)(n.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(a.innerWidth," mx-auto flex flex-col"),children:[(0,i.jsx)(CustomTexts_TypingText,{title:"| The World",textStyles:"text-center"}),(0,i.jsx)(CustomTexts_TitleText,{title:(0,i.jsxs)(i.Fragment,{children:["Choose what you want ",(0,i.jsx)("br",{className:"md:block hidden"})," to explore"]}),textStyles:"text-center"}),(0,i.jsx)("div",{className:"mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5",children:c.map((s,n)=>(0,i.jsx)(components_ExploreCard,{...s,index:n,active:e,handleClick:t},s.id))})]})})},sections_WhatsNew=()=>(0,i.jsx)("section",{className:"".concat(a.paddings," relative z-10"),children:(0,i.jsxs)(n.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(a.innerWidth," mx-auto flex lg:flex-row flex-col gap-8"),children:[(0,i.jsxs)(n.E.div,{variants:motion_fadeIn("right","tween",.2,1),className:"flex-[0.95] flex justify-center flex-col",children:[(0,i.jsx)(CustomTexts_TypingText,{title:"| Behind the scenes"}),(0,i.jsx)(CustomTexts_TitleText,{title:(0,i.jsx)(i.Fragment,{children:"Backed by world-class investors and partners"})}),(0,i.jsx)("div",{className:"mt-[48px] flex flex-wrap justify-between gap-[24px]",children:d.map(e=>(0,i.jsx)(components_NewFeatures,{...e},e.title))})]}),(0,i.jsx)(n.E.div,{variants:motion_planetVariants("right"),className:"flex-1 ".concat(a.flexCenter),children:(0,i.jsx)("img",{src:"/whats-new.png",alt:"get-started",className:"w-[90%] h-[90%] object-contain"})})]})}),sections_Insights=()=>(0,i.jsx)("section",{className:"".concat(a.paddings," relative z-10"),children:(0,i.jsxs)(n.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(a.innerWidth," mx-auto flex flex-col"),children:[(0,i.jsx)(CustomTexts_TypingText,{title:"| People",textStyles:"text-center"}),(0,i.jsx)(CustomTexts_TitleText,{title:(0,i.jsx)(i.Fragment,{children:"Meet the people behind the ideas"}),textStyles:"text-center"}),(0,i.jsx)("div",{className:"mt-[50px] flex flex-col gap-[30px]",children:m.map((e,t)=>(0,i.jsx)(components_InsightCard,{...e,index:t+1},"insight-".concat(t)))})]})}),sections_Feedback=()=>(0,i.jsx)("section",{className:"".concat(a.paddings),children:(0,i.jsxs)(n.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(a.innerWidth," mx-auto flex lg:flex-row flex-col gap-6"),children:[(0,i.jsxs)(n.E.div,{variants:motion_fadeIn("right","tween",.2,1),className:"flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative",children:[(0,i.jsx)("div",{className:"feedback-gradient"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{className:"font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white",children:"We're hiring"}),(0,i.jsx)("p",{className:"mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white",children:"Key roles"})]}),(0,i.jsx)("p",{className:"mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white",children:"“Help us expand the human mind”"})]}),(0,i.jsxs)(n.E.div,{variants:motion_fadeIn("left","tween",.2,1),className:"relative flex-1 flex justify-center items-center",children:[(0,i.jsx)("img",{src:"/hiring-1.png",alt:"planet-09",className:"w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"}),(0,i.jsx)(n.E.div,{variants:zoomIn(.4,1),className:"lg:block hidden absolute -left-[10%] top-[3%]",children:(0,i.jsx)("img",{src:"/arrow button.png",alt:"stamp",className:"w-[155px] h-[155px] object-contain"})})]})]})}),pages=()=>(0,i.jsxs)("div",{className:"bg-primary-black overflow-hidden",children:[(0,i.jsx)(components_Navbar,{}),(0,i.jsx)(sections_Hero,{}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)(sections_About,{}),(0,i.jsx)("div",{className:"gradient-03 z-0"}),(0,i.jsx)(sections_Explore,{})]}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"gradient-04 z-0"}),(0,i.jsx)(sections_WhatsNew,{})]}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)(sections_Insights,{}),(0,i.jsx)("div",{className:"gradient-04 z-0"}),(0,i.jsx)(sections_Feedback,{})]}),(0,i.jsx)(components_Footer,{})]})}},function(e){e.O(0,[566,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);