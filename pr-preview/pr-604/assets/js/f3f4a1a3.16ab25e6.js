"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Quick start"},i="Quick start guide",l={unversionedId:"nodes/quick-start",id:"nodes/quick-start",title:"Quick start guide",description:"In this section, we show you how to get started",source:"@site/docs/nodes/quick-start.md",sourceDirName:"nodes",slug:"/nodes/quick-start",permalink:"/pr-preview/pr-604/nodes/quick-start",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/quick-start.md",tags:[],version:"current",frontMatter:{sidebar_label:"Quick start"},sidebar:"nodes",previous:{title:"Mocha testnet",permalink:"/pr-preview/pr-604/nodes/mocha-testnet"},next:{title:"Docker images",permalink:"/pr-preview/pr-604/nodes/docker-images"}},s={},c=[{value:"celestia-node",id:"celestia-node",level:2},{value:"celestia-app",id:"celestia-app",level:2},{value:"Getting started",id:"getting-started",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start-guide"},"Quick start guide"),(0,o.kt)("p",null,"In this section, we show you how to get started\nwith installing the needed libraries and packages\nin Celestia to help you run a node on Celestia."),(0,o.kt)("h2",{id:"celestia-node"},"celestia-node"),(0,o.kt)("p",null,"Installing celestia-node allows you to get started with\nrunning a light node and do Data Availability Sampling."),(0,o.kt)("p",null,"Light Nodes are the best nodes to test out initially if\nyou are new to participating in Celestia."),(0,o.kt)("p",null,"celestia-node client also allows you to run other types\nof Data-Availability nodes like Bridge and Full Storage\nnodes, which will be covered in later sections."),(0,o.kt)("h2",{id:"celestia-app"},"celestia-app"),(0,o.kt)("p",null,"celestia-app is the software that allows you to run\nValidator nodes and also provide RPC endpoints."),(0,o.kt)("p",null,"celestia-app covers the Consensus layer, while celestia-node\ncovers the Data Availability layer."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"As covered in the previous section, Celestia offers\ntwo different test networks, ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-604/nodes/arabica-devnet"},"Arabica"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-604/nodes/mocha-testnet"},"Mocha"),"."),(0,o.kt)("p",null,"If you are planning to run a light node, it is recommended\nto use Arabica, which you will find options to connecting to\nin the later sections."),(0,o.kt)("p",null,"If you plan on running a validator, your only option is to run\nyour node on Mocha."),(0,o.kt)("p",null,"In this Quick Start guide, we will go over installing both of\nthe software clients: celestia-node and celestia-app."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: If you just want to run a Light Node, you don't need to\ninstall celestia-app and can skip that part.")),(0,o.kt)("p",null,"Proceed to the next section in order to get started."))}d.isMDXComponent=!0}}]);