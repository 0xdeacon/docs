"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1852],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=a.createContext({}),p=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(r.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,m=u["".concat(r,".").concat(h)]||u[h]||d[h]||l;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=h;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const l={sidebar_label:"Consensus Full Node"},i="Setting up a Celestia consensus full node",s={unversionedId:"nodes/consensus-full-node",id:"nodes/consensus-full-node",title:"Setting up a Celestia consensus full node",description:"Consensus Full Nodes allow you to sync blockchain history in the Celestia",source:"@site/docs/nodes/consensus-full-node.md",sourceDirName:"nodes",slug:"/nodes/consensus-full-node",permalink:"/fr/nodes/consensus-full-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/consensus-full-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Consensus Full Node"},sidebar:"nodes",previous:{title:"Validator node",permalink:"/fr/nodes/validator-node"},next:{title:"Relayer",permalink:"/fr/nodes/relayer"}},r={},p=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your consensus full node",id:"setting-up-your-consensus-full-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Deploying the celestia-app",id:"deploying-the-celestia-app",level:2},{value:"Install celestia-app",id:"install-celestia-app",level:3},{value:"Setup the P2P networks",id:"setup-the-p2p-networks",level:3},{value:"Configure pruning",id:"configure-pruning",level:3},{value:"Reset network",id:"reset-network",level:3},{value:"Optional: quick-sync with snapshot",id:"optional-quick-sync-with-snapshot",level:3},{value:"Start the celestia-app",id:"start-the-celestia-app",level:3},{value:"Optional: configure for RPC endpoint",id:"optional-configure-for-rpc-endpoint",level:3},{value:"Start the celestia-app with SystemD",id:"start-the-celestia-app-with-systemd",level:3},{value:"Transaction indexer configuration options",id:"transaction-indexer-configuration-options",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...l}=e;return(0,o.kt)(u,(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-celestia-consensus-full-node"},"Setting up a Celestia consensus full node"),(0,o.kt)("p",null,"Consensus Full Nodes allow you to sync blockchain history in the Celestia\nConsensus Layer."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Consensus Full Node",src:t(5024).Z,width:"3000",height:"3761"})),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,o.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nConsensus Full Node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,o.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,o.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,o.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,o.kt)("h2",{id:"setting-up-your-consensus-full-node"},"Setting up your consensus full node"),(0,o.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,o.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,o.kt)("p",null,"Follow the instructions on installing the dependencies ",(0,o.kt)("a",{parentName:"p",href:"/fr/nodes/environment"},"here"),"."),(0,o.kt)("h2",{id:"deploying-the-celestia-app"},"Deploying the celestia-app"),(0,o.kt)("p",null,"This section describes part 1 of Celestia consensus full node setup:\nrunning a celestia-app daemon with an internal celestia-core node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Make sure you have at least 100+ Gb of free space to safely install + run\nthe consensus full node.  ")),(0,o.kt)("h3",{id:"install-celestia-app"},"Install celestia-app"),(0,o.kt)("p",null,"Follow the tutorial on installing celestia-app ",(0,o.kt)("a",{parentName:"p",href:"/fr/nodes/celestia-app"},"here"),"."),(0,o.kt)("h3",{id:"setup-the-p2p-networks"},"Setup the P2P networks"),(0,o.kt)("p",null,"Now we will setup the P2P Networks by cloning the networks repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf networks\ngit clone https://github.com/celestiaorg/networks.git\n")),(0,o.kt)("p",null,'To initialize the network pick a "node-name" that describes your\nnode. The --chain-id parameter we are using here is ',(0,o.kt)("inlineCode",{parentName:"p"},"mocha"),". Keep in\nmind that this might change if a new testnet is deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd init "node-name" --chain-id mocha\n')),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file. For mocha we are using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp $HOME/networks/mocha/genesis.json $HOME/.celestia-app/config\n")),(0,o.kt)("p",null,"Set seeds and peers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'PERSISTENT_PEERS=$(curl -sL https://raw.githubusercontent.com/celestiaorg/networks/master/mocha/peers.txt | tr -d \'\\n\')\necho $PERSISTENT_PEERS\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$PERSISTENT_PEERS\\"/" $HOME/.celestia-app/config/config.toml\n')),(0,o.kt)("p",null,"Note: You can find more peers ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/mocha/peers.txt"},"here"),"."),(0,o.kt)("h3",{id:"configure-pruning"},"Configure pruning"),(0,o.kt)("p",null,"For lower disk space usage we recommend setting up pruning using the\nconfigurations below. You can change this to your own pruning configurations\nif you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'PRUNING="custom"\nPRUNING_KEEP_RECENT="100"\nPRUNING_INTERVAL="10"\n\nsed -i -e "s/^pruning *=.*/pruning = \\"$PRUNING\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\\n\\"$PRUNING_KEEP_RECENT\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\\n\\"$PRUNING_INTERVAL\\"/" $HOME/.celestia-app/config/app.toml\n')),(0,o.kt)("h3",{id:"reset-network"},"Reset network"),(0,o.kt)("p",null,"This will delete all data folders so we can start fresh:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tendermint unsafe-reset-all --home $HOME/.celestia-app\n")),(0,o.kt)("h3",{id:"optional-quick-sync-with-snapshot"},"Optional: quick-sync with snapshot"),(0,o.kt)("p",null,"Syncing from Genesis can take a long time, depending on your hardware. Using\nthis method you can synchronize your celestia-node very quickly by downloading\na recent snapshot of the blockchain. If you would like to sync from the Genesis,\nthen you can skip this part."),(0,o.kt)("p",null,"Run the following command to quick-sync from a snapshot for ",(0,o.kt)("inlineCode",{parentName:"p"},"mocha"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf ~/.celestia-app/data\nmkdir -p ~/.celestia-app/data\nSNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \\\n    egrep -o ">mocha.*tar" | tr -d ">")\nwget -O - https://snaps.qubelabs.io/celestia/${SNAP_NAME} | tar xf - \\\n    -C ~/.celestia-app/data/\n')),(0,o.kt)("h3",{id:"start-the-celestia-app"},"Start the celestia-app"),(0,o.kt)("p",null,"In order to start your consensus full node, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\n")),(0,o.kt)("p",null,"This will let you sync the Celestia blockchain history."),(0,o.kt)("h3",{id:"optional-configure-for-rpc-endpoint"},"Optional: configure for RPC endpoint"),(0,o.kt)("p",null,"You can configure your Consensus Full Node to be a public RPC endpoint\nand listen to any connections from Data Availability Nodes in order to\nserve requests for the Data Availability API ",(0,o.kt)("a",{parentName:"p",href:"/fr/developers/node-tutorial"},"here"),"."),(0,o.kt)("p",null,"Note that you would need to ensure port 9090 is open for this."),(0,o.kt)("p",null,"Run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'EXTERNAL_ADDRESS=$(wget -qO- eth0.me)\nsed -i.bak -e "s/^external-address = \\"\\"/external-address = \\"$EXTERNAL_ADDRESS:26656\\"/" $HOME/.celestia-app/config/config.toml\nsed -i \'s#"tcp://127.0.0.1:26657"#"tcp://127.0.0.1:26657"#g\' ~/.celestia-app/config/config.toml\n')),(0,o.kt)("p",null,"Restart ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-appd")," in the previous step to load those configs."),(0,o.kt)("h3",{id:"start-the-celestia-app-with-systemd"},"Start the celestia-app with SystemD"),(0,o.kt)("p",null,"Follow the tutorial on setting up Celestia-App as a background process\nwith SystemD ",(0,o.kt)("a",{parentName:"p",href:"/fr/nodes/systemd"},"here"),"."),(0,o.kt)("h2",{id:"transaction-indexer-configuration-options"},"Transaction indexer configuration options"),(0,o.kt)("p",null,"This section will show you how to set your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-app"),"\nto chose which transactions to index. In some\ncases, a node operator will be able to decide which transactions to index\nbased on configuration set in the application."),(0,o.kt)("p",null,"The options are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"kv")," (default) - the simplest possible indexer backed by key-value storage\n(defaults to levelDB; see DBBackend)",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"when ",(0,o.kt)("inlineCode",{parentName:"li"},"kv")," is chosen ",(0,o.kt)("inlineCode",{parentName:"li"},"tx.height")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tx.hash")," will always be indexed"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"psql")," - the indexer services backed by PostgreSQL",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"when ",(0,o.kt)("inlineCode",{parentName:"li"},"kv")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"psql")," is chosen, ",(0,o.kt)("inlineCode",{parentName:"li"},"tx.height")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tx.hash")," will always be indexed")))))}d.isMDXComponent=!0},5024:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/consensus-full-node-ac064680461158f12d081ec59f14c546.png"}}]);