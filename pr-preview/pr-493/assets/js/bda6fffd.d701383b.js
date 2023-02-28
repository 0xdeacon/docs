"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5150],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4130:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return s}});var a=n(3117),l=(n(7294),n(3905));const r={},o="Fuelmint documentation",i={unversionedId:"developers/fuelmint",id:"developers/fuelmint",title:"Fuelmint documentation",description:"Introduction",source:"@site/docs/developers/fuelmint.md",sourceDirName:"developers",slug:"/developers/fuelmint",permalink:"/pr-preview/pr-493/developers/fuelmint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/fuelmint.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Full stack modular blockchain development guide",permalink:"/pr-preview/pr-493/developers/full-stack-modular-development-guide"},next:{title:"Integrate Celestia",permalink:"/pr-preview/pr-493/developers/integrate-celestia"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Fuel",id:"fuel",level:3},{value:"Celestia",id:"celestia",level:3},{value:"Fuelmint",id:"fuelmint",level:3},{value:"Installation",id:"installation",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Setup Fuelmint",id:"setup-fuelmint",level:3},{value:"Deploy a Sway smart contract",id:"deploy-a-sway-smart-contract",level:2},{value:"Install Forc",id:"install-forc",level:3},{value:"Counter smart contract",id:"counter-smart-contract",level:3},{value:"Run Fuelmint on Mocha",id:"run-fuelmint-on-mocha",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fuelmint-documentation"},"Fuelmint documentation"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("h3",{id:"fuel"},"Fuel"),(0,l.kt)("p",null,"Fuel is an execution layer for the modular stack."),(0,l.kt)("p",null,"Fuel is an execution layer in modular blockchains\nthat provides a fast and efficient solution\nto scalability. It aims to address the scalability\ncrisis in Ethereum, which has seen modest increase\nin total throughput with L2 solutions. Fuel is designed\nto leverage the shift in L1 blockchain architectures\nfrom monolithic to modular, where execution is separated\nfrom data availability and consensus, leading to increased\nbandwidth capacity."),(0,l.kt)("p",null,"Fuel has three key components:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parallel transaction execution"),(0,l.kt)("li",{parentName:"ul"},"The Fuel virtual machine"),(0,l.kt)("li",{parentName:"ul"},"A great developer experience")),(0,l.kt)("p",null,"Fuel provides a flexible throughput with high security\nand is considered as the engine for the autonomous future,\nwhere individuals and groups can access verifiable\nautonomous systems."),(0,l.kt)("p",null,"Learn about Fuel ",(0,l.kt)("a",{parentName:"p",href:"https://www.fuel.network/"},"here"),"."),(0,l.kt)("h3",{id:"celestia"},"Celestia"),(0,l.kt)("p",null,"Celestia is a modular blockchain network whose goal\nis to build a scalable data availability layer,\nenabling the next generation of scalable blockchain\narchitectures - modular blockchains."),(0,l.kt)("p",null,"You can learn more about Celestia in our\n",(0,l.kt)("a",{parentName:"p",href:"../../concepts/how-celestia-works/introduction"},"concepts"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"../build-modular"},"build modular")," pages."),(0,l.kt)("h3",{id:"fuelmint"},"Fuelmint"),(0,l.kt)("p",null,"Fuelmint is a sovereign FuelVM rollups on Celestia using\nRollkit and ABCI (Application BlockChain Interface).\nYou can read the announcement blog post\n",(0,l.kt)("a",{parentName:"p",href:"https://diegoferrer.substack.com/p/fuelmint-sovereign-fuelvm-rollups"},"here"),"."),(0,l.kt)("p",null,"In this tutorial, we will show you how to setup Fuelmint, so\nyou can test out the advantages of using Sway while having a sovereign\nrollup on Celestia."),(0,l.kt)("p",null,"Let's get started!"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("h3",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"You will need to install the following dependencies on your machine\nto be able to setup Fuelmint."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Install Rust and Cargo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"Install Docker")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../nodes/environment"},"Install system environment setup for Linux AMD, including Golang")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Install Node.js and NPM"))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This tutorial has only been tested on Ubuntu LTS on an AMD machine.")),(0,l.kt)("h3",{id:"setup-fuelmint"},"Setup Fuelmint"),(0,l.kt)("p",null,"You can find the Fuelmint Repo on GitHub ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Ferret-san/fuelmint/tree/tx_pool_experiment"},"here"),"."),(0,l.kt)("p",null,"The first step is to clone the Fuelmint repo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Ferret-san/fuelmint.git\n")),(0,l.kt)("p",null,"Then, go to the Docker directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd fuelmint/local-da\n")),(0,l.kt)("p",null,"You can start by running a Docker compose\nsetup with a\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/local-celestia-devnet"},"local data availability (DA) network"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f ./docker/test-docker-compose.yml up\n")),(0,l.kt)("p",null,"In a separate terminal session, you must\nbuild the Fuelmint binary with ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo"),":"),(0,l.kt)("admonition",{title:"note",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If this is your first time running ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo")," to build the Fuelmint binary,\nit will take some time to install all of the required dependencies.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nrm -rf ~/.fuel/db\ncd fuelmint\ncargo run --bin fuelmint\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"When you restart Fuelmint, you will need to remove existing data\nfrom Fuelmint and Tendermint.")),(0,l.kt)("p",null,"If you'd like to see the CLI menu for Fuelmint, run this command in\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"fuelmint")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --bin fuelmint -- --help\n")),(0,l.kt)("p",null,"Save one of the private keys in the output from the command above,\nyou'll be using this again later in the tutorial."),(0,l.kt)("p",null,"In another terminal session, you will need\nto build the Rollkit node with Golang:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd fuelmint/rollkit-node\ngo build\n")),(0,l.kt)("p",null,"In a new terminal clone and install ",(0,l.kt)("inlineCode",{parentName:"p"},"rollkit/tendermint"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/rollkit/tendermint.git\ncd tendermint\ngit checkout 8be9b54c8c21\nmake install\n")),(0,l.kt)("p",null,"Then, run the following commands from the ",(0,l.kt)("inlineCode",{parentName:"p"},"fuelmint/rollkit-node")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'rm -rf /tmp/fuelmint/\nTMHOME="/tmp/fuelmint" tendermint init\nNAMESPACE_ID=$(echo $RANDOM | md5sum | head -c 16; echo;)\n./rollkit-node -config "/tmp/fuelmint/config/config.toml" -rollkit.namespace_id $NAMESPACE_ID -rollkit.da_start_height 1\n')),(0,l.kt)("p",null,"In another terminal, in the ",(0,l.kt)("inlineCode",{parentName:"p"},"fuelmint/rollkit-node")," directory, view the CLI menu\nby running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./rollkit-node -help\n")),(0,l.kt)("h2",{id:"deploy-a-sway-smart-contract"},"Deploy a Sway smart contract"),(0,l.kt)("h3",{id:"install-forc"},"Install Forc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/FuelLabs/fuelup"},"Forc"))),(0,l.kt)("h3",{id:"counter-smart-contract"},"Counter smart contract"),(0,l.kt)("p",null,"Find the Sway smart contracts ",(0,l.kt)("a",{parentName:"p",href:"https://fuellabs.github.io/fuels-ts/QUICKSTART"},"here"),"."),(0,l.kt)("p",null,"Let's deploy a Sway smart contract for counter! First, open a new terminal instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ncd fuelmint/examples/counter/contract\nforc build\nforc deploy --unsigned\n")),(0,l.kt)("p",null,"This generates the ",(0,l.kt)("inlineCode",{parentName:"p"},"contract-id"),". You will need to save this along with your\nprivate key from earlier in the tutorial and add it to your frontend demo\nbelow."),(0,l.kt)("p",null,"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"fuelmint/examples/counter/frontend/src/App.tsx")," in your text editor.\nGet the wallet secret generated when you started fuelmint, and replace it for\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"WALLET_SECRET")," on line 9 to allow you to send transactions on the frontend."),(0,l.kt)("p",null,"Then, replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"CONTRACT_ID")," with your contract ID from the output of your\ndeployment."),(0,l.kt)("p",null,"Generate the front end with ",(0,l.kt)("inlineCode",{parentName:"p"},"contract-id"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd fuelmint/examples/counter/frontend\nnpm install\nnpm start\n")),(0,l.kt)("p",null,"You can now view your counter at ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"!"),(0,l.kt)("h2",{id:"run-fuelmint-on-mocha"},"Run Fuelmint on Mocha"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Posting to Mocha and Arabica coming soon.")),(0,l.kt)("p",null,"Run a Mocha light node and get it funded ",(0,l.kt)("a",{parentName:"p",href:"../../nodes/light-node"},"here"),".\nIf you're running both nodes on the same machine (Rollkit and Celestia),\nyou will need to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"--rpc.port string")," flag to the start command\nof your light node, similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"celestia light start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha --rpc.port 36658\n")),(0,l.kt)("p",null,"Then clear the existing database with your fuelmint binary:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\nrm -rf ~/.fuel/db\ncd fuelmint\ncargo run --bin fuelmint\n")),(0,l.kt)("p",null,"In a new terminal, we'll start the Rollkit node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ncd fuelmint/rollkit-node\nNAMESPACE_ID=$(echo $RANDOM | md5sum | head -c 16; echo;)\nDA_BLOCK_HEIGHT=$(curl https://rpc-mocha.pops.one/block | jq -r '.result.block.header.height')\n")),(0,l.kt)("p",null,"From the ",(0,l.kt)("inlineCode",{parentName:"p"},"fuelmint/rollkit-node")," directory, run the following to clear existing configs\nand restart the chain on Mocha:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'rm -rf /tmp/fuelmint/\nTMHOME="/tmp/fuelmint" tendermint init\n./rollkit-node -config "/tmp/fuelmint/config/config.toml" -rollkit.aggregator true -rollkit.da_layer celestia -rollkit.da_config=\'{"base_url":"http://localhost:26659","timeout":60000000000,"gas_limit":6000000,"fee":6000}\' -rollkit.namespace_id $NAMESPACE_ID -rollkit.da_start_height $DA_BLOCK_HEIGHT \n')),(0,l.kt)("p",null,"You can find more smart contracts ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/FuelLabs/sway-applications"},"here"),"."))}p.isMDXComponent=!0}}]);