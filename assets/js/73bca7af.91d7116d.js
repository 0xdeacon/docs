"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[909],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(a),g=n,h=s["".concat(p,".").concat(g)]||s[g]||d[g]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_label:"Gateway API tutorial"},l="Gateway API tutorial",i={unversionedId:"developers/gateway-api-tutorial",id:"developers/gateway-api-tutorial",title:"Gateway API tutorial",description:"This tutorial will teach you how to interact with a node's gateway API.",source:"@site/docs/developers/gateway-api-tutorial.mdx",sourceDirName:"developers",slug:"/developers/gateway-api-tutorial",permalink:"/developers/gateway-api-tutorial",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gateway-api-tutorial.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Gateway API tutorial"},sidebar:"developers",previous:{title:"Gateway API docs",permalink:"/developers/node-gateway-docs"},next:{title:"RPC API",permalink:"/category/rpc-api"}},p={},u=[{value:"cURL guide",id:"curl-guide",level:2},{value:"Golang guide",id:"golang-guide",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gateway-api-tutorial"},"Gateway API tutorial"),(0,n.kt)("p",null,"This tutorial will teach you how to interact with a node's gateway API."),(0,n.kt)("p",null,"First, ",(0,n.kt)("a",{parentName:"p",href:"../../nodes/light-node"},"install celestia-node"),"."),(0,n.kt)("p",null,"Initalize your node:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node_type> init --p2p.network <network>\n")),(0,n.kt)("p",null,"Start your node:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node_type> start --p2p.network <network>\n")),(0,n.kt)("h2",{id:"curl-guide"},"cURL guide"),(0,n.kt)("p",null,"In another terminal instance, run the following command to generate the JWT auth token\nand set it as a variable:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# make sure to add network flags if you're using a network other than the default\n# auth level can be any of the following [read || write || admin]\n\nexport AUTH_TOKEN=$(celestia <node_type> auth <auth level>)\n")),(0,n.kt)("p",null,"You'll also need the port that is exposed on your node, by default it is 26658."),(0,n.kt)("p",null,"To view the CLI menu:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"celestia light auth -h\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# returns the node\'s SamplingStats\n\ncurl -X POST -H \'Authorization: Bearer \'$AUTH_TOKEN\'\' -H \'Content-Type: application/json\' -d \'{"jsonrpc":"2.0","id":0,"method":"das.SamplingStats","params":[]}\' http://localhost:26658/ | jq\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# returns the node\'s chain head\n\ncurl -X POST -H \'Authorization: Bearer \'$AUTH_TOKEN\'\' -H \'Content-Type: application/json\' -d \'{"jsonrpc":"2.0","id":0,"method":"header.Head","params":[]}\' http://localhost:26658/ | jq\n')),(0,n.kt)("h2",{id:"golang-guide"},"Golang guide"),(0,n.kt)("p",null,"If you're interested in interacting with the node's API in Go,\nyou can use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/renaynay/da-rpc-client-tutorial"},"da-rpc-client-tutorial"),"\nrepo."))}d.isMDXComponent=!0}}]);