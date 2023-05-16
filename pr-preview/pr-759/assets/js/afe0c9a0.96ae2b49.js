"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2460],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=n.createContext({}),p=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(r.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=i,k=d["".concat(r,".").concat(h)]||d[h]||m[h]||s;return t?n.createElement(k,o(o({ref:a},c),{},{components:t})):n.createElement(k,o({ref:a},c))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=h;var l={};for(var r in a)hasOwnProperty.call(a,r)&&(l[r]=a[r]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2229:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const s={sidebar_label:"Celestia's data availability layer",description:"Celestia's Data Availability layer and its key features."},o="Celestia's data availability layer",l={unversionedId:"concepts/how-celestia-works/data-availability-layer",id:"concepts/how-celestia-works/data-availability-layer",title:"Celestia's data availability layer",description:"Celestia's Data Availability layer and its key features.",source:"@site/docs/concepts/how-celestia-works/data-availability-layer.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/data-availability-layer",permalink:"/pr-preview/pr-759/concepts/how-celestia-works/data-availability-layer",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/data-availability-layer.md",tags:[],version:"current",frontMatter:{sidebar_label:"Celestia's data availability layer",description:"Celestia's Data Availability layer and its key features."},sidebar:"concepts",previous:{title:"Monolithic vs. modular blockchains",permalink:"/pr-preview/pr-759/concepts/how-celestia-works/monolithic-vs-modular"},next:{title:"The lifecycle of a Celestia App transaction",permalink:"/pr-preview/pr-759/concepts/how-celestia-works/transaction-lifecycle"}},r={},p=[{value:"Data availability sampling (DAS)",id:"data-availability-sampling-das",level:2},{value:"Scalability",id:"scalability",level:3},{value:"Fraud proofs of incorrectly extended data",id:"fraud-proofs-of-incorrectly-extended-data",level:3},{value:"Namespaced Merkle Trees (NMTs)",id:"namespaced-merkle-trees-nmts",level:2},{value:"Building a PoS blockchain for DA",id:"building-a-pos-blockchain-for-da",level:2},{value:"Providing data availability",id:"providing-data-availability",level:3}],c={toc:p},d="wrapper";function m(e){let{components:a,...s}=e;return(0,i.kt)(d,(0,n.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"celestias-data-availability-layer"},"Celestia's data availability layer"),(0,i.kt)("p",null,"Celestia is a data availability (DA) layer that provides a\nscalable solution to the ",(0,i.kt)("a",{parentName:"p",href:"https://coinmarketcap.com/alexandria/article/what-is-data-availability"},"data availability problem"),".\nDue to the permissionless nature of the blockchain networks,\na DA layer must provide a mechanism for the execution and settlement\nlayers to check in a trust-minimized way whether transaction data is indeed available."),(0,i.kt)("p",null,"Two key features of Celestia's DA layer are ",(0,i.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-mvp-release-data-availability-sampling-light-clients"},"data availability sampling"),"\n(DAS) and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/nmt"},"Namespaced Merkle trees")," (NMTs).\nBoth features are novel blockchain scaling solutions: DAS enables light\nnodes to verify data availability without needing to download an entire block;\nNMTs enable execution and settlement layers on Celestia to download transactions\nthat are only relevant to them."),(0,i.kt)("h2",{id:"data-availability-sampling-das"},"Data availability sampling (DAS)"),(0,i.kt)("p",null,"In general, light nodes download only block headers that contain\ncommitments (i.e., Merkle roots) of the block data\xa0(i.e., the list of transactions)."),(0,i.kt)("p",null,"To make DAS possible, Celestia uses a 2-dimensional Reed-Solomon\nencoding scheme to encode the block data: every block data is split\ninto k \xd7 k chunks, arranged in a k \xd7 k matrix, and extended with parity\ndata into a 2k \xd7 2k extended matrix by applying multiple times Reed-Solomon encoding."),(0,i.kt)("p",null,"Then, 4k separate Merkle roots are computed for the rows and columns\nof the extended matrix; the Merkle root of these Merkle roots is used\nas the block data commitment in the block header."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2D Reed-Soloman (RS) Encoding",src:t(1047).Z,width:"3000",height:"1722"})),(0,i.kt)("p",null,"To verify that the data is available, Celestia light nodes are sampling\nthe 2k \xd7 2k data chunks."),(0,i.kt)("p",null,"Every light node randomly chooses a set of unique coordinates in the\nextended matrix and queries full nodes for the data chunks and the\ncorresponding Merkle proofs at those coordinates. If light nodes\nreceive a valid response for each sampling query, then there is a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/issues/805#issuecomment-1150081075"},"high probability guarantee"),"\nthat the whole block's data is available."),(0,i.kt)("p",null,"Additionally, every received data chunk with a correct Merkle proof\nis gossiped to the network. As a result, as long as the Celestia light\nnodes are sampling together enough data chunks (i.e., at least k \xd7 k unique chunks),\nthe full block can be recovered by honest full nodes."),(0,i.kt)("p",null,"For more details on DAS, take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1809.09044"},"original paper"),"."),(0,i.kt)("h3",{id:"scalability"},"Scalability"),(0,i.kt)("p",null,"DAS enables Celestia to scale the DA layer. DAS can be performed by\nresource-limited light nodes since each light node only samples a small\nportion of the block data. The more light nodes there are in the network,\nthe more data they can collectively download and store."),(0,i.kt)("p",null,"This means that increasing the number of light nodes performing DAS allows\nfor larger blocks (i.e., with more transactions), while still keeping DAS\nfeasible for resource-limited light nodes. However, in order to validate\nblock headers, Celestia light nodes need to download the 4k intermediate\nMerkle roots."),(0,i.kt)("p",null,"For a block data size of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msup"},"n"),(0,i.kt)("mn",{parentName:"msup"},"2"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n^2")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))))," bytes, this means that every light node must\ndownload O(n) bytes. Therefore, any improvement in the bandwidth capacity\nof Celestia light nodes has a quadratic effect on the throughput of Celestia's\nDA layer."),(0,i.kt)("h3",{id:"fraud-proofs-of-incorrectly-extended-data"},"Fraud proofs of incorrectly extended data"),(0,i.kt)("p",null,"The requirement of downloading the 4k intermediate Merkle roots is a\nconsequence of using a 2-dimensional Reed-Solomon encoding scheme. Alternatively,\nDAS could be designed with a standard (i.e., 1-dimensional) Reed-Solomon encoding,\nwhere the original data is split into k  chunks and extended with k additional\nchunks of parity data. Since the block data commitment is the Merkle root of the\n2k resulting data chunks, light nodes no longer need to download O(n) bytes to\nvalidate block headers."),(0,i.kt)("p",null,"The downside of the standard Reed-Solomon encoding is dealing with malicious\nblock producers that generate the extended data incorrectly."),(0,i.kt)("p",null,"This is possible as ",(0,i.kt)("strong",{parentName:"p"},"Celestia does not require a majority of the consensus\n(i.e., block producers) to be honest to guarantee data availability."),"\nThus, if the extended data is invalid, the original data might not be\nrecoverable, even if the light nodes are sampling sufficient unique chunks\n(i.e., at least k for a standard encoding and k \xd7 k for a 2-dimensional encoding)."),(0,i.kt)("p",null,"As a solution, ",(0,i.kt)("em",{parentName:"p"},"Fraud Proofs of Incorrectly Generated Extended Data")," enable\nlight nodes to reject blocks with invalid extended data. Such proofs require\nreconstructing the encoding and verifying the mismatch. With standard Reed-Solomon\nencoding, this entails downloading the original data, i.e., ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msup"},"n"),(0,i.kt)("mn",{parentName:"msup"},"2"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n^2")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))))," bytes.\nContrastingly, with 2-dimensional Reed-Solomon encoding, only O(n) bytes are\nrequired as it is sufficient to verify only one row or one column of the\nextended matrix."),(0,i.kt)("h2",{id:"namespaced-merkle-trees-nmts"},"Namespaced Merkle Trees (NMTs)"),(0,i.kt)("p",null,"Celestia partitions the block data into multiple namespaces, one for\nevery application (e.g., rollup) using the DA layer. As a result, every\napplication needs to download only its own data and can ignore the data\nof other applications."),(0,i.kt)("p",null,"For this to work, the DA layer must be able to prove that the provided\ndata is complete, i.e., all the data for a given namespace is returned.\nTo this end, Celestia is using Namespaced Merkle Trees (NMTs)."),(0,i.kt)("p",null,"An NMT is a Merkle tree with the leafs ordered by the namespace identifiers\nand the hash function modified so that every node  in the tree includes the\nrange of namespaces of all its descendants. The following figure shows an\nexample of an NMT with height three (i.e., eight data chunks). The data is\npartitioned into three namespaces."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Namespaced Merkle Tree",src:t(8797).Z,width:"3000",height:"1459"})),(0,i.kt)("p",null,"When an application requests the data for namespace 2, the DA layer must\nprovide the data chunks ",(0,i.kt)("inlineCode",{parentName:"p"},"D3"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"D4"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"D5"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"D6")," and the nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"N2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"N8"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"N7")," as proof (note that the application already has the root ",(0,i.kt)("inlineCode",{parentName:"p"},"N14")," from\nthe block header)."),(0,i.kt)("p",null,"As a result, the application is able to check that the provided data is part\nof the block data. Furthermore, the application can verify that all the data\nfor namespace 2 was provided. If the DA layer provides for example only the\ndata chunks ",(0,i.kt)("inlineCode",{parentName:"p"},"D4")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"D5"),", it must also provide nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"N12")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"N11")," as proofs.\nHowever, the application can identify that the data is incomplete by checking\nthe namespace range of the two nodes, i.e., both ",(0,i.kt)("inlineCode",{parentName:"p"},"N12")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"N11")," have descendants\npart of namespace 2."),(0,i.kt)("p",null,"For more details on NMTs, take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1905.09274"},"original paper"),"."),(0,i.kt)("h2",{id:"building-a-pos-blockchain-for-da"},"Building a PoS blockchain for DA"),(0,i.kt)("h3",{id:"providing-data-availability"},"Providing data availability"),(0,i.kt)("p",null,"The Celestia DA layer consists of a PoS blockchain. Celestia is dubbing this\nblockchain as the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app"},(0,i.kt)("inlineCode",{parentName:"a"},"celestia-app")),",\nan application that provides transactions to facilitate the DA layer and is built\nusing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main"},"Cosmos SDK"),". The following figure\nshows the main components of ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-app"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Main components of `celestia-app`",src:t(6512).Z,width:"3000",height:"2710"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"celestia-app")," is built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-core"},"celestia-core"),",\na modified version of the ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1807.04938"},"Tendermint consensus algorithm"),".\nAmong the more important changes to vanilla Tendermint, celestia-core:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enables the erasure coding of block data (using the 2-dimensional Reed-Solomon\nencoding scheme)."),(0,i.kt)("li",{parentName:"ul"},"Replaces the regular Merkle tree used by Tendermint to store block data with\na ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/nmt"},"Namespaced Merkle tree")," that enables\nthe above layers (i.e., execution and settlement) to only download the needed\ndata (for more details, see the section below describing use cases).")),(0,i.kt)("p",null,"For more details on the changes to Tendermint, take a look at the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-core/tree/v0.34.x-celestia/docs/celestia-architecture"},"ADRs"),".\nNotice that celestia-core nodes are still using the Tendermint p2p network."),(0,i.kt)("p",null,"Similarly to Tendermint, celestia-core is connected to the application layer\n(i.e., the state machine) by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/tree/master/spec/abci%2B%2B"},"ABCI++"),",\na major evolution of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/tree/master/spec/abci"},"ABCI"),"\n(Application Blockchain Interface)."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-app")," state machine is necessary to execute the PoS logic and to\nenable the governance of the DA layer."),(0,i.kt)("p",null,"However, the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-app")," is data-agnostic -- the state machine neither\nvalidates nor stores the data that is made available by the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-app"),"."))}m.isMDXComponent=!0},6512:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/celestia-app-dade9feedac983fdbc5336fc713f2a3a.png"},8797:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/nmt-e0e70f4a26315a006b2c62bb3753fe4f.png"},1047:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/reed-solomon-encoding-5e807cd199f4aaac4cb0f9aef83446a4.png"}}]);