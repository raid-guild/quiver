"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[736],{7522:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return f}});var r=n(9901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},i),{},{components:n})):r.createElement(m,c({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4821:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return i},default:function(){return p}});var r=n(1437),a=n(1268),o=(n(9901),n(7522)),c=["components"],l={},u="Token Balance",s={unversionedId:"guides/token-balance",id:"guides/token-balance",title:"Token Balance",description:"Usage",source:"@site/docs/guides/token-balance.md",sourceDirName:"guides",slug:"/guides/token-balance",permalink:"/quiver/guides/token-balance",editUrl:"https://github.com/raid-guild/quiver/edit/main/website/docs/guides/token-balance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Read and Write Contract",permalink:"/quiver/guides/read-write-cg"}},i=[{value:"Usage",id:"usage",children:[{value:"ERC20 Token",id:"erc20-token",children:[],level:3},{value:"Network Token (Ex. ETH)",id:"network-token-ex-eth",children:[],level:3},{value:"Custom Contract",id:"custom-contract",children:[],level:3},{value:"Custom Wallet",id:"custom-wallet",children:[],level:3},{value:"Auto Update",id:"auto-update",children:[],level:3}],level:2}],d={toc:i};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-balance"},"Token Balance"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"erc20-token"},"ERC20 Token"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// ERC20 Contract can use the ERC20_ABI included in Quiver\nconst { contract: erc20Contract } = useContract(\n  ERC20_TOKEN_CONTRACT_ADDRESS,\n  ERC20_ABI\n);\nconst erc20Balance = useTokenBalance(erc20Contract);\n")),(0,o.kt)("h3",{id:"network-token-ex-eth"},"Network Token (Ex. ETH)"),(0,o.kt)("p",null,"You do not need to use the hook to retrieve network token balance as ethers already provides a method to retrieve the balance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const { provider, address } = useWallet();\nconst [ethBalance, setEthBalance] = useState(BigNumber.from(0));\n\nuseEffect(() => {\n  if (!address) return;\n  if (!provider) return;\n\n  const getEthBalance = async (address) => {\n    const balance = await provider.getBalance(address); // can also set a custom address\n    setEthBalance(balance);\n  };\n  getEthBalance(address); // can be a custom address\n}, [provider, address]);\n")),(0,o.kt)("h3",{id:"custom-contract"},"Custom Contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const { contract: ufoContract } = useTypedContract(\n  UFO_TOKEN_CONTRACT_ADDRESS,\n  XToken__factory\n)\n\nconst ufoBalance = useTokenBalance(ufoContract as XToken)\n\n")),(0,o.kt)("h3",{id:"custom-wallet"},"Custom Wallet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const { contract: erc20Contract } = useContract(\n  ERC20_TOKEN_CONTRACT_ADDRESS,\n  ERC20_ABI\n);\nconst erc20Balance = useTokenBalance(erc20Contract, walletAddress); // by default it uses the connected wallet\n")),(0,o.kt)("h3",{id:"auto-update"},"Auto Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const { contract: erc20Contract } = useContract(\n  ERC20_TOKEN_CONTRACT_ADDRESS,\n  ERC20_ABI\n);\nconst erc20Balance = useTokenBalance(erc20Contract, undefined, 15000); // auto update every 15 seconds\n")))}p.isMDXComponent=!0}}]);