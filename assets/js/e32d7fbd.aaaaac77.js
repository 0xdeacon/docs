"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[403],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(a),h=l,g=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7289:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),o=["components"],r={},s="Setting Up a Celestia Light Node",d={unversionedId:"nodes/light-node",id:"nodes/light-node",title:"Setting Up a Celestia Light Node",description:"This tutorial will guide you through setting up a Celestia Light Node, which can allow you to do data-sampling on the Data Availability (DA) network.",source:"@site/docs/nodes/light-node.md",sourceDirName:"nodes",slug:"/nodes/light-node",permalink:"/nodes/light-node",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes/light-node.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Setting Up A Celestia Bridge & Validator Node",permalink:"/nodes/bridge-validator-node"}},u={},c=[{value:"Overview of Light Nodes",id:"overview-of-light-nodes",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Setting Up Your Light Node",id:"setting-up-your-light-node",level:2},{value:"Setup The Dependencies",id:"setup-the-dependencies",level:3},{value:"Install Golang",id:"install-golang",level:3},{value:"Install Celestia Node",id:"install-celestia-node",level:2},{value:"Run the Light Node",id:"run-the-light-node",level:3},{value:"Data Availability Sampling(DAS)",id:"data-availability-samplingdas",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:3},{value:"Create a wallet",id:"create-a-wallet",level:3},{value:"Fund the Wallet",id:"fund-the-wallet",level:3},{value:"Send a transaction",id:"send-a-transaction",level:3},{value:"Observe DAS in action",id:"observe-das-in-action",level:3}],p={toc:c};function h(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-a-celestia-light-node"},"Setting Up a Celestia Light Node"),(0,i.kt)("p",null,"This tutorial will guide you through setting up a Celestia Light Node, which can allow you to do data-sampling on the Data Availability (DA) network."),(0,i.kt)("h2",{id:"overview-of-light-nodes"},"Overview of Light Nodes"),(0,i.kt)("p",null,"Light nodes (CLN) ensure data availability. This is the most common way to interact with the Celestia network."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: In future implementations, Light Nodes can also publish transactions ( ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/blob/main/docs/adr/adr-004-state-interaction.md"},"see ADR")," ), though in Devnet, transactions are left to Bridge Nodes.  ")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(8009).Z,width:"1058",height:"245"}),"\nLight Nodes have the following properties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect to a  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/networks#celestia-validator-bridge-nodes"},"Celestia Bridge Node"),"  in the DA network. ",(0,i.kt)("em",{parentName:"li"},"Note: Light Nodes do not communicate with each other, but only with Bridge Nodes.")),(0,i.kt)("li",{parentName:"ol"},"Listen for ExtendedHeaders, i.e. wrapped \u201craw\u201d headers, that notify Celestia Nodes of new block headers and relevant DA metadata."),(0,i.kt)("li",{parentName:"ol"},"Perform data availability sampling (DAS) on the received headers")),(0,i.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,i.kt)("p",null,"The following hardware minimum requirements are recommended for running the light node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,i.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,i.kt)("li",{parentName:"ul"},"Disk: 5 GB SDD Storage"),(0,i.kt)("li",{parentName:"ul"},"Bandwidth: 1 GB of input-output connection")),(0,i.kt)("h2",{id:"setting-up-your-light-node"},"Setting Up Your Light Node"),(0,i.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine. "),(0,i.kt)("h3",{id:"setup-the-dependencies"},"Setup The Dependencies"),(0,i.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin setting up the box with all the needed dependencies in order to run your light node."),(0,i.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt update && sudo apt upgrade -y\n")),(0,i.kt)("p",null,"These are essential packages that are necessary to execute many tasks like downloading files, compiling and monitoring the node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n")),(0,i.kt)("h3",{id:"install-golang"},"Install Golang"),(0,i.kt)("p",null,"Golang will be installed on this machine in order for us to be able to build the necessary binaries for running the light node. For Golang specifically, it\u2019s needed to be able to compile Celestia Light Node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'ver="1.17.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n')),(0,i.kt)("p",null,"Now we need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to\n",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n')),(0,i.kt)("p",null,"To check if Go was installed correctly run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go version\n")),(0,i.kt)("p",null,"Output should be the version installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go version go1.17.2 linux/amd64\n")),(0,i.kt)("h2",{id:"install-celestia-node"},"Install Celestia Node"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Make sure that you have at least 5+ Gb of free space for Celestia Light Node  ")),(0,i.kt)("p",null,"Install the Celestia Node binary. Make sure that you have ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"golang")," installed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.2.0 -b v0.2.0\nmake install\n")),(0,i.kt)("h3",{id:"run-the-light-node"},"Run the Light Node"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you want to connect to your Celestia Bridge Node and start syncing the Celestia Light Node from a non-genesis hash, then consider editing ",(0,i.kt)("inlineCode",{parentName:"p"},"config.toml")," file.",(0,i.kt)("br",{parentName:"p"}),"\n","More information on ",(0,i.kt)("inlineCode",{parentName:"p"},"config.toml")," is found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/config-toml.md"},"here"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Initialize the Light Node")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"celestia light init\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Start the Light Node")),(0,i.kt)("p",null,"Start the Light Node as daemon process in the background"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-lightd.service\n[Unit]\nDescription=celestia-lightd Light Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia light start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,i.kt)("p",null,"If the file was created succesfully you will be able to see its content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cat /etc/systemd/system/celestia-lightd.service\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Enable and start celestia-lightd daemon:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl enable celestia-lightd\nsudo systemctl start celestia-lightd\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Check if daemon has been started correctly:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl status celestia-lightd\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Check daemon logs in real time:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo journalctl -u celestia-lightd.service -f\n")),(0,i.kt)("p",null,"Now, the Celestia Light Node will start syncing headers. After sync is finished, Light Node will do data availability sampling(DAS) from the Bridge Node."),(0,i.kt)("h2",{id:"data-availability-samplingdas"},"Data Availability Sampling(DAS)"),(0,i.kt)("h3",{id:"pre-requisites"},"Pre-Requisites"),(0,i.kt)("p",null,"To continue, you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Celestia Light Node connected to a Bridge Node"),(0,i.kt)("li",{parentName:"ul"},"A Celestia wallet")),(0,i.kt)("p",null,"Open 2 terminals in order to see how DASing works:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First terminal: tail your Light Node logs"),(0,i.kt)("li",{parentName:"ol"},"Second terminal: use Celestia App's CLI to submit a paid ",(0,i.kt)("inlineCode",{parentName:"li"},"payForMessage")," tx to the network")),(0,i.kt)("h3",{id:"create-a-wallet"},"Create a wallet"),(0,i.kt)("p",null,"First, you need a wallet to pay for the transaction."),(0,i.kt)("p",null,"Option 1: Use the Keplr wallet which has beta support for Celestia. ",(0,i.kt)("a",{parentName:"p",href:"https://staking.celestia.observer/"},"https://staking.celestia.observer/")),(0,i.kt)("p",null,"Option 2: Download the Celestia App binary which has a CLI for creating wallets"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the celestia-appd binary inside ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/go/bin")," folder which will be used to create wallets.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/celestiaorg/celestia-app.git\ncd celestia-app/\ngit checkout tags/v0.2.0 -b v0.2.0\nmake install\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"To check if the binary was succesfully compiled you can run the binary using the ",(0,i.kt)("inlineCode",{parentName:"li"},"--help")," flag:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd $HOME/go/bin\n./celestia-appd \u2014help\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create the wallet with any wallet name you want e.g.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"celestia-appd keys add mywallet\n")),(0,i.kt)("p",null,"Save the mnemonic output as this is the only way to recover your validator wallet in case you lose it! "),(0,i.kt)("h3",{id:"fund-the-wallet"},"Fund the Wallet"),(0,i.kt)("p",null,"You can fund an existing wallet via Discord by sending this message to #faucet channel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"!faucet celes1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),(0,i.kt)("p",null,"Wait to see if you get a confirmation that the tokens have been successfully sent. To check if tokens have arrived succesfully to the destination wallet run the command below replacing the public address with your own:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"celestia-appd q bank balances celes1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),(0,i.kt)("h3",{id:"send-a-transaction"},"Send a transaction"),(0,i.kt)("p",null,"In the second terminal, submit a ",(0,i.kt)("inlineCode",{parentName:"p"},"payForMessage")," transaction with ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-appd")," (or do so in the wallet):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"celestia-appd tx payment payForMessage <hex_namespace> <hex_message> \u2014from <wallet_name> \u2014keyring-backend <keyring-name> \u2014chain-id <chain_name>\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"celestia-appd tx payment payForMessage 0102030405060708 68656c6c6f43656c6573746961444153 \u2014from myWallet \u2014keyring-backend test \u2014chain-id devnet-2\n")),(0,i.kt)("h3",{id:"observe-das-in-action"},"Observe DAS in action"),(0,i.kt)("p",null,"In the Light Node logs you should see how data availability sampling works:"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"INFO    das das/daser.go:96 sampling successful {\u201cheight\u201d: 81547, \u201chash\u201d: \u201cDE0B0EB63193FC34225BD55CCD3841C701BE841F29523C428CE3685F72246D94\u201d, \u201csquare width\u201d: 2, \u201cfinished (s)\u201d: 0.000117466}\n")))}h.isMDXComponent=!0},8009:function(e,t,a){t.Z=a.p+"assets/images/LightNodes-6e065ce02c37e36a01707b9b1edd36b3.png"}}]);