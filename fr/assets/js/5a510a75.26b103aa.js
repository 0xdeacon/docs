"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1739],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>g});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=i(l),m=n,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return l?a.createElement(g,o(o({ref:t},d),{},{components:l})):a.createElement(g,o({ref:t},d))}));function g(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:n,o[1]=u;for(var i=2;i<r;i++)o[i]=l[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},5162:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(7294),n=l(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:l,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,o),hidden:l},t)}},4866:(e,t,l)=>{l.d(t,{Z:()=>y});var a=l(7462),n=l(7294),r=l(6010),o=l(2466),u=l(6550),s=l(1980),i=l(7392),d=l(12);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:l,attributes:a,default:n}}=e;return{value:t,label:l,attributes:a,default:n}}))}function c(e){const{values:t,children:l}=e;return(0,n.useMemo)((()=>{const e=t??p(l);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function m(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:l}=e;const a=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:l=!1,groupId:a}=e,r=c(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,i]=g({queryString:l,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(l);return[a,(0,n.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:a}),k=(()=>{const e=s??p;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),b(e)}),[i,b,r]),tabValues:r}}var k=l(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:l,selectedValue:u,selectValue:s,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,l=d.indexOf(t),a=i[l].value;a!==u&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=d.indexOf(e.currentTarget)+1;t=d[l]??d[0];break}case"ArrowLeft":{const l=d.indexOf(e.currentTarget)-1;t=d[l]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},t)},i.map((e=>{let{value:t,label:l,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},o,{className:(0,r.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":u===t})}),l??t)})))}function f(e){let{lazy:t,children:l,selectedValue:a}=e;if(l=Array.isArray(l)?l:[l],t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=b(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(f,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return n.createElement(T,(0,a.Z)({key:String(t)},e))}},578:(e,t,l)=>{l.d(t,{Z:()=>a});const a=Object.freeze({golangNodeBSR:"1.20.2",golangNodeOther:"1.19.1",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-6",bsrChainId:"blockspacerace-0",rollkitVersion:"v0.7.3",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},2409:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=l(7462),n=(l(7294),l(3905)),r=l(578),o=l(4866),u=l(5162);const s={sidebar_label:"Setting up environment",description:"Learn to set up your development environment to run Celestia software."},i="Development environment",d={unversionedId:"nodes/environment",id:"nodes/environment",title:"Development environment",description:"Learn to set up your development environment to run Celestia software.",source:"@site/docs/nodes/environment.mdx",sourceDirName:"nodes",slug:"/nodes/environment",permalink:"/fr/nodes/environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/environment.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Setting up environment",description:"Learn to set up your development environment to run Celestia software."},sidebar:"nodes",previous:{title:"Docker images",permalink:"/fr/nodes/docker-images"},next:{title:"Installing Celestia Node",permalink:"/fr/nodes/celestia-node"}},p={},c=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq",level:4},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew-1",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq-1",level:4},{value:"Install Golang",id:"install-golang",level:3}],m={toc:c},g="wrapper";function b(e){let{components:t,...l}=e;return(0,n.kt)(g,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"development-environment"},"Development environment"),(0,n.kt)("p",null,"This tutorial will go over setting up your development environment to run\nCelestia software. This environment can be used for development, building\nbinaries, and running nodes."),(0,n.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,n.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin installing the\ndependencies needed to run a node."),(0,n.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,n.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update && sudo apt upgrade -y\n"))),(0,n.kt)(u.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum update\n")))),(0,n.kt)("p",null,"These are essential packages that are necessary to execute many tasks like\ndownloading files, compiling, and monitoring the node:"),(0,n.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,n.kt)(u.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,n.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,n.kt)("h4",{id:"-installing-homebrew"},"\ud83c\udf7a Installing Homebrew"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,n.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,n.kt)("h4",{id:"-install-wget-and-jq"},"\ud83d\uddc4 Install wget and jq"),(0,n.kt)("p",null,"Using Homebrew, in your terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")," is an internet file retriever and\n",(0,n.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq"},"jq")," is a lightweight command-line JSON\nprocessor.")),(0,n.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,n.kt)("h4",{id:"-installing-homebrew-1"},"\ud83c\udf7a Installing Homebrew"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,n.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,n.kt)("h4",{id:"-install-wget-and-jq-1"},"\ud83d\uddc4 Install wget and jq"),(0,n.kt)("p",null,"Using Homebrew, in your terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")," is an internet file retriever and\n",(0,n.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq"},"jq")," is a lightweight command-line JSON\nprocessor."))),(0,n.kt)("h3",{id:"install-golang"},"Install Golang"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"celestia-app")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"celestia-node")," are written in ",(0,n.kt)("a",{parentName:"p",href:"https://go.dev"},"Golang"),"\nso we must install Golang to build and run them."),(0,n.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,n.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeBSR,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz"',(0,n.kt)("br",null)))),(0,n.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeBSR,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.linux-arm64.tar.gz"',(0,n.kt)("br",null)))),(0,n.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeBSR,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.darwin-arm64.tar.gz"',(0,n.kt)("br",null)))),(0,n.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeBSR,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.darwin-amd64.tar.gz"',(0,n.kt)("br",null))))),(0,n.kt)("p",null,"Now we need to add the ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,n.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,n.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,n.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,n.kt)("p",null,"To check if Go was installed correctly run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,n.kt)("p",null,"The output should be the version installed:"),(0,n.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeBSR," linux/amd64"))),(0,n.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeBSR," linux/arm64"))),(0,n.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeBSR," darwin/arm64"))),(0,n.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeBSR," darwin/amd64"))))),(0,n.kt)(u.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,n.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeOther,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz"',(0,n.kt)("br",null)))),(0,n.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeOther,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.linux-arm64.tar.gz"',(0,n.kt)("br",null)))),(0,n.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeOther,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.darwin-arm64.tar.gz"',(0,n.kt)("br",null)))),(0,n.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeOther,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.darwin-amd64.tar.gz"',(0,n.kt)("br",null))))),(0,n.kt)("p",null,"Now we need to add the ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,n.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,n.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,n.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,n.kt)("p",null,"To check if Go was installed correctly run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,n.kt)("p",null,"The output should be the version installed:"),(0,n.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeOther," linux/amd64"))),(0,n.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeOther," linux/arm64"))),(0,n.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeOther," darwin/arm64"))),(0,n.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeOther," darwin/amd64"))))),(0,n.kt)(u.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,n.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeOther,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz"',(0,n.kt)("br",null)))),(0,n.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeOther,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.linux-arm64.tar.gz"',(0,n.kt)("br",null)))),(0,n.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeOther,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.darwin-arm64.tar.gz"',(0,n.kt)("br",null)))),(0,n.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,'ver="',r.Z.golangNodeOther,'"',(0,n.kt)("br",null),"cd $HOME",(0,n.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz"',(0,n.kt)("br",null),"sudo rm -rf /usr/local/go",(0,n.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz"',(0,n.kt)("br",null),'rm "go$ver.darwin-amd64.tar.gz"',(0,n.kt)("br",null))))),(0,n.kt)("p",null,"Now we need to add the ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,n.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,n.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,n.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,n.kt)("p",null,"To check if Go was installed correctly run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,n.kt)("p",null,"The output should be the version installed:"),(0,n.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeOther," linux/amd64"))),(0,n.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeOther," linux/arm64"))),(0,n.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeOther," darwin/arm64"))),(0,n.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",null,"go version go",r.Z.golangNodeOther," darwin/amd64")))))))}b.isMDXComponent=!0}}]);