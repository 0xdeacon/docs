"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9795],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return t?r.createElement(h,a(a({ref:n},m),{},{components:t})):r.createElement(h,a({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4954:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=t(3117),i=(t(7294),t(3905));const o={sidebar_label:"Setup Network Environment"},a="Setting Up Your Environment for CosmWasm on Celestia",s={unversionedId:"developers/cosmwasm-environment",id:"developers/cosmwasm-environment",title:"Setting Up Your Environment for CosmWasm on Celestia",description:"Now the wasmd binary is built, we need to setup a local network",source:"@site/docs/developers/cosmwasm-environment.md",sourceDirName:"developers",slug:"/developers/cosmwasm-environment",permalink:"/pr-preview/pr-478/fr/developers/cosmwasm-environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-environment.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setup Network Environment"},sidebar:"developers",previous:{title:"CosmWasm Dependencies",permalink:"/pr-preview/pr-478/fr/developers/cosmwasm-dependency"},next:{title:"Contract Deployment",permalink:"/pr-preview/pr-478/fr/developers/cosmwasm-contract-deployment"}},l={},c=[{value:"Initializing Cosmwasm Rollup with a Bash Script",id:"initializing-cosmwasm-rollup-with-a-bash-script",level:2},{value:"Optional: See what&#39;s inside the script",id:"optional-see-whats-inside-the-script",level:2}],m={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-your-environment-for-cosmwasm-on-celestia"},"Setting Up Your Environment for CosmWasm on Celestia"),(0,i.kt)("p",null,"Now the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," binary is built, we need to setup a local network\nthat communicates between ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," and Rollmint."),(0,i.kt)("h2",{id:"initializing-cosmwasm-rollup-with-a-bash-script"},"Initializing Cosmwasm Rollup with a Bash Script"),(0,i.kt)("p",null,"We have a handy ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sh")," found in this repo\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/devrel-tools"},"here"),"."),(0,i.kt)("p",null,"We can copy it over to our directory with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# From inside the `wasmd` directory\ncd ..\ngit clone https://github.com/celestiaorg/devrel-tools\ncp devrel-tools/cosmwasm/init.sh wasmd/\ncd wasmd/\n")),(0,i.kt)("p",null,"This copies over our ",(0,i.kt)("inlineCode",{parentName:"p"},"init.sh")," script to initialize our\nCosmWasm rollup."),(0,i.kt)("p",null,"You can view the contents of the script to see how we\ninitialize the CosmWasm Rollup."),(0,i.kt)("admonition",{title:"caution",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If you are on macOS, you will need to install md5sha1sum before starting your\nrollup:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew install md5sha1sum\n"))),(0,i.kt)("p",null,"You can initialize the script with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"bash init.sh\n")),(0,i.kt)("p",null,"With that, we have kickstarted our ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," network!"),(0,i.kt)("h2",{id:"optional-see-whats-inside-the-script"},"Optional: See what's inside the script"),(0,i.kt)("p",null,"You can skip this section, but it is important to know\nhow Rollmint is initializing the cosmwasm rollup."),(0,i.kt)("p",null,"Here are the contents of the script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/sh\n\nVALIDATOR_NAME=validator1\nCHAIN_ID=celeswasm\nKEY_NAME=celeswasm-key\nTOKEN_AMOUNT="10000000000000000000000000uwasm"\nSTAKING_AMOUNT=1000000000uwasm\nCHAINFLAG="--chain-id ${CHAIN_ID}"\nTXFLAG="--chain-id ${CHAIN_ID} --gas-prices 0uwasm --gas auto --gas-adjustment 1.3"\nNODEIP="--node http://127.0.0.1:26657"\n\nNAMESPACE_ID=$(echo $RANDOM | md5sum | head -c 16; echo;)\necho $NAMESPACE_ID\nDA_BLOCK_HEIGHT=$(curl https://rpc-mocha.pops.one/block | jq -r \'.result.block.header.height\')\necho $DA_BLOCK_HEIGHT\n\nrm -rf "$HOME"/.wasmd\nwasmd tendermint unsafe-reset-all\nwasmd init $VALIDATOR_NAME --chain-id $CHAIN_ID\n\nsed -i\'\' -e \'s/^minimum-gas-prices *= .*/minimum-gas-prices = "0uwasm"/\' "$HOME"/.wasmd/config/app.toml\nsed -i\'\' -e \'/\\[api\\]/,+3 s/enable *= .*/enable = true/\' "$HOME"/.wasmd/config/app.toml\nsed -i\'\' -e "s/^chain-id *= .*/chain-id = \\"$CHAIN_ID\\"/" "$HOME"/.wasmd/config/client.toml\nsed -i\'\' -e \'/\\[rpc\\]/,+3 s/laddr *= .*/laddr = "tcp:\\/\\/0.0.0.0:26657"/\' "$HOME"/.wasmd/config/config.toml\nsed -i\'\' -e \'s/"time_iota_ms": "1000"/"time_iota_ms": "10"/\' "$HOME"/.wasmd/config/genesis.json\nsed -i\'\' -e \'s/bond_denom": ".*"/bond_denom": "uwasm"/\' "$HOME"/.wasmd/config/genesis.json\nsed -i\'\' -e \'s/mint_denom": ".*"/mint_denom": "uwasm"/\' "$HOME"/.wasmd/config/genesis.json\n\nwasmd keys add $KEY_NAME --keyring-backend test\nwasmd add-genesis-account $KEY_NAME $TOKEN_AMOUNT --keyring-backend test\nwasmd gentx $KEY_NAME $STAKING_AMOUNT --chain-id $CHAIN_ID --keyring-backend test\nwasmd start --rollmint.aggregator true --rollmint.da_layer celestia --rollmint.da_config=\'{"base_url":"http://localhost:26659","timeout":60000000000,"fee":6000,"gas_limit":6000000}\' --rollmint.namespace_id $NAMESPACE_ID --rollmint.da_start_height $DA_BLOCK_HEIGHT\n')))}p.isMDXComponent=!0}}]);