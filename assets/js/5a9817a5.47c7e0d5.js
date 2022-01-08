"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[736],{7522:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(9901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=n(1437),a=n(1268),o=(n(9901),n(7522)),c=["components"],u={},l="Token Balance",i={unversionedId:"guides/token-balance",id:"guides/token-balance",title:"Token Balance",description:"Usage",source:"@site/docs/guides/token-balance.md",sourceDirName:"guides",slug:"/guides/token-balance",permalink:"/guides/token-balance",editUrl:"https://github.com/raid-guild/quiver/edit/main/website/docs/guides/token-balance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Read and Write Contract",permalink:"/guides/read-write-cg"}},s=[{value:"Usage",id:"usage",children:[{value:"ERC20 Token",id:"erc20-token",children:[],level:3},{value:"Custom Contract",id:"custom-contract",children:[],level:3},{value:"Custom Wallet",id:"custom-wallet",children:[],level:3},{value:"Auto Update",id:"auto-update",children:[],level:3}],level:2}],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-balance"},"Token Balance"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"erc20-token"},"ERC20 Token"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// ERC20 Contract can use the ERC20_ABI included in Quiver\nconst { contract: erc20Contract } = useContract(\n  ERC20_TOKEN_CONTRACT_ADDRESS,\n  ERC20_ABI\n);\nconst erc20Balance = useTokenBalance(erc20Contract);\n")),(0,o.kt)("h3",{id:"custom-contract"},"Custom Contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const { contract: ufoContract } = useContract(\n  UFO_TOKEN_CONTRACT_ADDRESS,\n  XToken__factory\n)\n\nconst ufoBalance = useTokenBalance(ufoContract as XToken)\n\n")),(0,o.kt)("h3",{id:"custom-wallet"},"Custom Wallet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const { contract: erc20Contract } = useContract(\n  ERC20_TOKEN_CONTRACT_ADDRESS,\n  ERC20_ABI\n);\nconst erc20Balance = useTokenBalance(erc20Contract, walletAddress); // by default it uses the connected wallet\n")),(0,o.kt)("h3",{id:"auto-update"},"Auto Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const { contract: erc20Contract } = useContract(\n  ERC20_TOKEN_CONTRACT_ADDRESS,\n  ERC20_ABI\n);\nconst erc20Balance = useTokenBalance(erc20Contract, undefined, 15000); // auto update every 15 seconds\n")))}p.isMDXComponent=!0}}]);