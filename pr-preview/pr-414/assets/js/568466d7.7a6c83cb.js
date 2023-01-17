"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5867],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(4334),r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(3117),l=n(7294),r=n(4334),i=n(2389),o=n(7392),p=n(7094),s=n(2466),d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:k,groupId:m,className:y}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=k??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,p.U)(),[w,C]=(0,l.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=m){const e=v[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==w&&(x(t),C(a),null!=m&&N(m,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},y)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:O,onClick:I},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,l.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function k(e){const t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(3117),l=(n(7294),n(3905)),r=n(5488),i=n(5162);const o={sidebar_label:"Wallet with Celestia Node"},p="Create A Wallet with Celestia Node",s={unversionedId:"developers/celestia-node-key",id:"developers/celestia-node-key",title:"Create A Wallet with Celestia Node",description:"This tutorial will go over using the cel-key utility",source:"@site/docs/developers/celestia-node-key.mdx",sourceDirName:"developers",slug:"/developers/celestia-node-key",permalink:"/pr-preview/pr-414/developers/celestia-node-key",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node-key.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Wallet with Celestia Node"},sidebar:"developers",previous:{title:"Wallet With Celestia App",permalink:"/pr-preview/pr-414/developers/celestia-app-wallet"},next:{title:"Data Availability API",permalink:"/pr-preview/pr-414/category/data-availability-api"}},d={},u=[{value:"Using the <code>cel-key</code> utility",id:"using-the-cel-key-utility",level:2},{value:"Installation",id:"installation",level:3},{value:"<code>keyring-backend</code> usage",id:"keyring-backend-usage",level:3},{value:"Steps for generating node keys",id:"steps-for-generating-node-keys",level:3},{value:"Steps for exporting node keys",id:"steps-for-exporting-node-keys",level:3},{value:"Steps for importing node keys",id:"steps-for-importing-node-keys",level:3},{value:"View all options for <code>cel-key</code>",id:"view-all-options-for-cel-key",level:3}],c={toc:u};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-a-wallet-with-celestia-node"},"Create A Wallet with Celestia Node"),(0,l.kt)("p",null,"This tutorial will go over using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," utility\nto generate a wallet on Celestia Node."),(0,l.kt)("p",null,"While this tutorial will go over installation process\nof ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key"),", it is recommended that you complete\nthe following prerequisites first:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../nodes/environment"},"Setting Up Your Environment"))),(0,l.kt)("p",null,"Once you completed the prerequisite, you can proceed with this\ntutorial."),(0,l.kt)("h2",{id:"using-the-cel-key-utility"},"Using the ",(0,l.kt)("inlineCode",{parentName:"h2"},"cel-key")," utility"),(0,l.kt)("p",null,"Inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository is a utility called ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," that uses\nthe key utility provided by Cosmos-SDK under the hood. The utility can be\nused to ",(0,l.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),", and manage keys for any DA node\ntype ",(0,l.kt)("inlineCode",{parentName:"p"},"(bridge || full || light)"),", or just keys in general."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You need to first pull down the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\n")),(0,l.kt)("p",null,"It can be built using either of the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# dumps binary in current working directory, accessible via `./cel-key`\nmake cel-key\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# installs binary in GOBIN path, accessible via `cel-key`\nmake install-key\n")),(0,l.kt)("p",null,"For the purpose of this guide, we will use the ",(0,l.kt)("inlineCode",{parentName:"p"},"make cel-key")," command."),(0,l.kt)("h3",{id:"keyring-backend-usage"},(0,l.kt)("inlineCode",{parentName:"h3"},"keyring-backend")," usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"keyring-backend")," configures the keyring's backend, how the keys are stored."),(0,l.kt)("p",null,"Fully supported options are: ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"test"),". Other options are also available to use at user's discretion. The default used in ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," and Celestia's documentation is ",(0,l.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,l.kt)("p",null,"You can learn more about the keyring on the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/keyring.html"},"Cosmos documentation"),"\nor ",(0,l.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/crypto/keyring"},"Go Package documentation"),"."),(0,l.kt)("h3",{id:"steps-for-generating-node-keys"},"Steps for generating node keys"),(0,l.kt)(r.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,l.kt)("p",null,"To generate a key for a Celestia bridge node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --keyring-dir ~/.celestia-bridge-<p2p_network>/keys\n")),(0,l.kt)("p",null,"This will load the key ",(0,l.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the bridge node.")),(0,l.kt)(i.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,l.kt)("p",null,"To generate a key for a Celestia full node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --keyring-dir ~/.celestia-full-<p2p_network>/keys\n")),(0,l.kt)("p",null,"This will load the key ",(0,l.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the full node.")),(0,l.kt)(i.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,l.kt)("p",null,"To generate a key for a Celestia light node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --keyring-dir ~/.celestia-light-<p2p_network>/keys\n")),(0,l.kt)("p",null,"This will load the key ",(0,l.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the light node."))),(0,l.kt)("p",null,"Further flags you can use to customize your key are the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--node.store"),": Specifies a different directory you can use to\nsave your node data and configurations. Expects a path to a directory."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--p2p.network"),": Specifies which network you want the key for. Values\nare ",(0,l.kt)("inlineCode",{parentName:"li"},"arabica")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"mocha"),". Please note the default network will be ",(0,l.kt)("inlineCode",{parentName:"li"},"mocha"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--node.type"),": Specifies which node type you want the node for. Values\nare ",(0,l.kt)("inlineCode",{parentName:"li"},"bridge"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"full"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"light"),".")),(0,l.kt)("p",null,"Keep in mind that your Celestia Node will only pick up keys that\nare inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"node.store")," directory under ",(0,l.kt)("inlineCode",{parentName:"p"},"/keys")," so you should make\nsure to point ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," utility to the correct directory via either the ",(0,l.kt)("inlineCode",{parentName:"p"},"--keyring-dir")," flag, or ",(0,l.kt)("inlineCode",{parentName:"p"},"node.store")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"p2p.network")," flags if\nyou have specified a custom\ndirectory or network other than Mocha."),(0,l.kt)("p",null,"Also keep in mind that if you do not specify a network with ",(0,l.kt)("inlineCode",{parentName:"p"},"--p2p.network"),",\nthe default one will always be ",(0,l.kt)("inlineCode",{parentName:"p"},"mocha"),"."),(0,l.kt)("h3",{id:"steps-for-exporting-node-keys"},"Steps for exporting node keys"),(0,l.kt)(r.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,l.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --keyring-dir ~/.celestia-bridge-<p2p_network>/keys\n"))),(0,l.kt)(i.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,l.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --keyring-dir ~/.celestia-full-<p2p_network>/keys\n"))),(0,l.kt)(i.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,l.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --keyring-dir ~/.celestia-light-<p2p_network>/keys\n")))),(0,l.kt)("h3",{id:"steps-for-importing-node-keys"},"Steps for importing node keys"),(0,l.kt)(r.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,l.kt)("p",null,"Importing from a mnemonic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --keyring-dir ~/.celestia-bridge-<p2p_network>/keys\n")),(0,l.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --keyring-dir ~/.celestia-bridge-<p2p_network>/keys\n"))),(0,l.kt)(i.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,l.kt)("p",null,"Importing from a mnemonic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --keyring-dir ~/.celestia-full-<p2p_network>/keys\n")),(0,l.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --keyring-dir ~/.celestia-full-<p2p_network>/keys\n"))),(0,l.kt)(i.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,l.kt)("p",null,"Importing from a mnemonic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --keyring-dir ~/.celestia-light-<p2p_network>/keys\n")),(0,l.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --keyring-dir ~/.celestia-light-<p2p_network>/keys\n")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"view-all-options-for-cel-key"},"View all options for ",(0,l.kt)("inlineCode",{parentName:"h3"},"cel-key")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key --help\n")))}k.isMDXComponent=!0}}]);