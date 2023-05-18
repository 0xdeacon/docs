"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),p=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),a=p[n].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},6422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={sidebar_label:"Bridge node",description:"Learn how to set up your Celestia Bridge node."},s="Setting up a Celestia bridge node",p={unversionedId:"nodes/bridge-node",id:"nodes/bridge-node",title:"Setting up a Celestia bridge node",description:"Learn how to set up your Celestia Bridge node.",source:"@site/docs/nodes/bridge-node.mdx",sourceDirName:"nodes",slug:"/nodes/bridge-node",permalink:"/pr-preview/pr-760/nodes/bridge-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/bridge-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Bridge node",description:"Learn how to set up your Celestia Bridge node."},sidebar:"nodes",previous:{title:"Light node",permalink:"/pr-preview/pr-760/nodes/light-node"},next:{title:"Full storage node",permalink:"/pr-preview/pr-760/nodes/full-storage-node"}},d={},c=[{value:"Overview of bridge nodes",id:"overview-of-bridge-nodes",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your bridge node",id:"setting-up-your-bridge-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Deploy the Celestia bridge node",id:"deploy-the-celestia-bridge-node",level:2},{value:"Install Celestia Node",id:"install-celestia-node",level:3},{value:"Initialize the bridge node",id:"initialize-the-bridge-node",level:3},{value:"Run the bridge node",id:"run-the-bridge-node",level:3},{value:"Optional: run the bridge node with a custom key",id:"optional-run-the-bridge-node-with-a-custom-key",level:4},{value:"Optional: start the bridge node with SystemD",id:"optional-start-the-bridge-node-with-systemd",level:3}],u={toc:c},m="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-celestia-bridge-node"},"Setting up a Celestia bridge node"),(0,r.kt)("p",null,"This tutorial will go over the steps to setting up your Celestia Bridge node."),(0,r.kt)("p",null,"Bridge nodes connect the data availability layer and the consensus layer."),(0,r.kt)("p",null,"Validators do not have to run bridge nodes, but are encouraged to in order\nto relay blocks to the data availability network."),(0,r.kt)("h2",{id:"overview-of-bridge-nodes"},"Overview of bridge nodes"),(0,r.kt)("p",null,"A Celestia bridge node has the following properties:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import and process \u201craw\u201d headers & blocks from a trusted Core process\n(meaning a trusted RPC connection to a celestia-core node) in the\nConsensus network. Bridge Nodes can run this Core process internally\n(embedded) or simply connect to a remote endpoint. Bridge Nodes also\nhave the option of being an active validator in the Consensus network."),(0,r.kt)("li",{parentName:"ol"},"Validate and erasure code the \u201craw\u201d blocks"),(0,r.kt)("li",{parentName:"ol"},"Supply block shares with data availability headers to Light Nodes in the DA network.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bridge-node-diagram",src:n(8245).Z,width:"3000",height:"1319"})),(0,r.kt)("p",null,"From an implementation perspective, Bridge Nodes run two separate processes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-core"),"\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app"},"see repo"),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"celestia-app"))," is the state machine where the application and the\nproof-of-stake logic is run. ",(0,r.kt)("inlineCode",{parentName:"li"},"celestia-app")," is built on\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network"},"Cosmos SDK")," and also encompasses\n",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"celestia-core")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"celestia-core"))," is the state interaction, consensus and block production\nlayer. ",(0,r.kt)("inlineCode",{parentName:"li"},"celestia-core")," is built on ",(0,r.kt)("a",{parentName:"li",href:"https://docs.tendermint.com"},"Tendermint Core"),",\nmodified to store data roots of erasure coded blocks among other changes\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/celestia-core/tree/master/docs/celestia-architecture"},"see ADRs"),")."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node"},"see repo"),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"celestia-node"))," augments the above with a separate libp2p network that\nserves data availability sampling requests. The team sometimes refers to\nthis as the \u201chalo\u201d network.")))),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nbridge node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory: ",(0,r.kt)("strong",{parentName:"li"},"8 GB RAM")),(0,r.kt)("li",{parentName:"ul"},"CPU: ",(0,r.kt)("strong",{parentName:"li"},"6 cores")),(0,r.kt)("li",{parentName:"ul"},"Disk: ",(0,r.kt)("strong",{parentName:"li"},"1 TB SSD Storage")),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: ",(0,r.kt)("strong",{parentName:"li"},"1 Gbps for Download/1 Gbps for Upload"))),(0,r.kt)("h2",{id:"setting-up-your-bridge-node"},"Setting up your bridge node"),(0,r.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,r.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,r.kt)("p",null,"Follow the tutorial here installing the dependencies ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-760/nodes/environment"},"here"),"."),(0,r.kt)("h2",{id:"deploy-the-celestia-bridge-node"},"Deploy the Celestia bridge node"),(0,r.kt)("h3",{id:"install-celestia-node"},"Install Celestia Node"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary, which will be used to run the Bridge Node."),(0,r.kt)("p",null,"Follow the tutorial for installing ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-760/nodes/celestia-node"},"here"),"."),(0,r.kt)("h3",{id:"initialize-the-bridge-node"},"Initialize the bridge node"),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip <ip-address> --p2p.network blockspacerace\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090,\nso if you do not specify it in the command\nline, it will default to that port. You can\nadd the port after the IP address or use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer."),(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"../blockspace-race"},"here")),(0,r.kt)("p",null,"Here is an example of initializing the bridge node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip <ip-address> --p2p.network blockspacerace\n"))),(0,r.kt)(i.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip <ip-address>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090,\nso if you do not specify it in the command\nline, it will default to that port. You can\nadd the port after the IP address or use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer."),(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"../mocha-testnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"Here is an example of initializing the bridge node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip https://rpc-mocha.pops.one\n"))),(0,r.kt)(i.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,r.kt)("p",null,"  Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip <ip-address> --p2p.network arabica\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090,\nso if you do not specify it in the command\nline, it will default to that port. You can\nadd the port after the IP address or use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer."),(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"../arabica-devnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"Here is an example of initializing the bridge node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip https://limani.celestia-devops.dev/ --p2p.network arabica\n")))),(0,r.kt)("h3",{id:"run-the-bridge-node"},"Run the bridge node"),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,r.kt)("p",null,"Start the Bridge Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip-address> --p2p.network blockspacerace\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090,\nso if you do not specify it in the command\nline, it will default to that port. You can\nadd the port after the IP address or use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer."),(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"../blockspace-race"},"here")),(0,r.kt)("p",null,"Here is an example of starting the bridge node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip-address> --p2p.network blockspacerace\n")),(0,r.kt)("p",null,"You can create your key for your node by following the ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,r.kt)("a",{parentName:"p",href:"../../developers/celestia-node-key"},"here")),(0,r.kt)("p",null,"Once you start the Bridge Node, a wallet key will be generated for you.\nYou will need to fund that address with Testnet tokens to pay for\n",(0,r.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions.\nYou can find the address by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type bridge --keyring-backend test --p2p.network <network>\n")),(0,r.kt)("p",null,"You can get testnet tokens from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../arabica-devnet"},"Blockspace Race")))),(0,r.kt)(i.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("p",null,"Start the Bridge Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip-address>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090,\nso if you do not specify it in the command\nline, it will default to that port. You can\nadd the port after the IP address or use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer."),(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"../mocha-testnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"Here is an example of starting the bridge node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip https://rpc-mocha.pops.one:26657\n")),(0,r.kt)("p",null,"You can create your key for your node by following the ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,r.kt)("a",{parentName:"p",href:"../../developers/celestia-node-key"},"here")),(0,r.kt)("p",null,"Once you start the Bridge Node, a wallet key will be generated for you.\nYou will need to fund that address with Testnet tokens to pay for\n",(0,r.kt)("inlineCode",{parentName:"p"},"PayForData")," transactions.\nYou can find the address by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type bridge --keyring-backend test --p2p.network <network>\n")),(0,r.kt)("p",null,"You can get testnet tokens from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../mocha-testnet"},"Mocha"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a bridge node for your validator\nit is highly recommended to request Mocha testnet tokens\nas this is the testnet used to test out validator operations."))),(0,r.kt)(i.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,r.kt)("p",null,"Start the Bridge Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip-address> --p2p.network arabica\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090,\nso if you do not specify it in the command\nline, it will default to that port. You can\nadd the port after the IP address or use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer."),(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"../mocha-testnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"Here is an example of starting the bridge node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip https://limani.celestia-devops.dev/ --p2p.network arabica\n")),(0,r.kt)("p",null,"You can create your key for your node by following the ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,r.kt)("a",{parentName:"p",href:"../../developers/celestia-node-key"},"here")),(0,r.kt)("p",null,"Once you start the Bridge Node, a wallet key will be generated for you.\nYou will need to fund that address with Testnet tokens to pay for\n",(0,r.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions.\nYou can find the address by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type bridge --keyring-backend test --p2p.network <network>\n")),(0,r.kt)("p",null,"You can get testnet tokens from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../arabica-devnet"},"Arabica"))))),(0,r.kt)("h4",{id:"optional-run-the-bridge-node-with-a-custom-key"},"Optional: run the bridge node with a custom key"),(0,r.kt)("p",null,"In order to run a bridge node using a custom key:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The custom key must exist inside the celestia bridge node directory at the\ncorrect path (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.celestia-bridge/keys/keyring-test"),")"),(0,r.kt)("li",{parentName:"ol"},"The name of the custom key must be passed upon ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", like so:")),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip> --keyring.accname <name_of_custom_key> --p2p.network blockspacerace\n"))),(0,r.kt)(i.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip> --keyring.accname <name_of_custom_key>\n"))),(0,r.kt)(i.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip> --keyring.accname <name_of_custom_key> --p2p.network arabica\n")))),(0,r.kt)("h3",{id:"optional-start-the-bridge-node-with-systemd"},"Optional: start the bridge node with SystemD"),(0,r.kt)("p",null,"Follow the tutorial on setting up the bridge node as a background process with\nSystemD ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-760/nodes/systemd"},"here"),"."),(0,r.kt)("p",null,"You have successfully set up a bridge node that is syncing with the network."))}h.isMDXComponent=!0},8245:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/BridgeNodes-861637ace5d63c6265b1bce166edbefe.png"}}]);