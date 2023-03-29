"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7753],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),h=a,m=s["".concat(p,".").concat(h)]||s[h]||d[h]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"RPC API tutorial"},l="RPC API tutorial",i={unversionedId:"developers/rpc-tutorial",id:"developers/rpc-tutorial",title:"RPC API tutorial",description:"This tutorial will teach you how to interact with a node's RPC API.",source:"@site/docs/developers/rpc-tutorial.mdx",sourceDirName:"developers",slug:"/developers/rpc-tutorial",permalink:"/pr-preview/pr-571/fr/developers/rpc-tutorial",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rpc-tutorial.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"RPC API tutorial"},sidebar:"developers",previous:{title:"RPC API",permalink:"/pr-preview/pr-571/fr/category/rpc-api"},next:{title:"Rollkit",permalink:"/pr-preview/pr-571/fr/developers/rollkit"}},p={},c=[{value:"cURL guide",id:"curl-guide",level:2},{value:"Golang guide",id:"golang-guide",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rpc-api-tutorial"},"RPC API tutorial"),(0,a.kt)("p",null,"This tutorial will teach you how to interact with a node's RPC API."),(0,a.kt)("p",null,"First, ",(0,a.kt)("a",{parentName:"p",href:"../../nodes/light-node"},"install celestia-node"),"."),(0,a.kt)("p",null,"Initalize your node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node_type> init --p2p.network <network>\n")),(0,a.kt)("p",null,"Start your node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node_type> start --p2p.network <network>\n")),(0,a.kt)("h2",{id:"curl-guide"},"cURL guide"),(0,a.kt)("p",null,"In another terminal instance, run the following command to generate the JWT (JSON Web Token)\nauth token and set it as a variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# make sure to add network flags if you're using a network other than the default\n# auth level can be any of the following [read || write || admin]\n\nexport AUTH_TOKEN=$(celestia <node_type> auth <auth level>)\n")),(0,a.kt)("p",null,"You'll also need the port that is exposed on your node, by default it is 26658."),(0,a.kt)("p",null,"To view the CLI menu:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"celestia light auth -h\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# returns the node\'s SamplingStats\n\ncurl -X POST -H \'Authorization: Bearer \'$AUTH_TOKEN\'\' -H \'Content-Type: application/json\' -d \'{"jsonrpc":"2.0","id":0,"method":"das.SamplingStats","params":[]}\' http://localhost:26658/ | jq\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# returns the node\'s chain head\n\ncurl -X POST -H \'Authorization: Bearer \'$AUTH_TOKEN\'\' -H \'Content-Type: application/json\' -d \'{"jsonrpc":"2.0","id":0,"method":"header.Head","params":[]}\' http://localhost:26658/ | jq\n')),(0,a.kt)("h2",{id:"golang-guide"},"Golang guide"),(0,a.kt)("p",null,"If you're interested in interacting with the node's API in Go,\nyou can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/renaynay/da-rpc-client-tutorial"},"da-rpc-client-tutorial"),"\nrepo."))}d.isMDXComponent=!0}}]);