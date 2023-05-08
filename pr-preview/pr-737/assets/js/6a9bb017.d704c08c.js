"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a="Maintain High Validator Uptime",l={unversionedId:"nodes/itn-high-uptime",id:"nodes/itn-high-uptime",title:"Maintain High Validator Uptime",description:"Description",source:"@site/docs/nodes/itn-high-uptime.md",sourceDirName:"nodes",slug:"/nodes/itn-high-uptime",permalink:"/pr-preview/pr-737/nodes/itn-high-uptime",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-high-uptime.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging Criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2},{value:"Example",id:"example",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"maintain-high-validator-uptime"},"Maintain High Validator Uptime"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Ensure your validator has a high up-time for the duration of\nthe Blockspace Race, including during pauses."),(0,i.kt)("p",null,"Please note that there are tasks and phases where you will\nlikely have some downtime, so please ensure you have the\nbest possible uptime outside of those events."),(0,i.kt)("h2",{id:"directions"},"Directions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure your validator does not go offline otherwise it\nimpacts your uptime score.")),(0,i.kt)("h2",{id:"judging-criteria"},"Judging Criteria"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Points are awarded based on the following ",(0,i.kt)("a",{parentName:"li",href:"https://www.wolframalpha.com/input?i=y%3D1.08%5Ex%2F1.08%5E100+from+0+to+100"},"formula"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_uptime = total_signed_blocks/network_height")),(0,i.kt)("li",{parentName:"ol"},"Maximum score for uptime at the end of phase 5 is 350 points.")),(0,i.kt)("h2",{id:"submission"},"Submission"),(0,i.kt)("p",null,"Validators need to submit their ",(0,i.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," operator address."),(0,i.kt)("p",null,"Submission link can be found ",(0,i.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p")))}d.isMDXComponent=!0}}]);