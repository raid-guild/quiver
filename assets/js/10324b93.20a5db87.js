"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[652],{7522:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(9901);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(t),p=s,f=g["".concat(d,".").concat(p)]||g[p]||l[p]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function p(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=g;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4123:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var r=t(1437),s=t(1268),a=(t(9901),t(7522)),o=["components"],i={},d="ENS Hook",u={unversionedId:"guides/ens",id:"guides/ens",title:"ENS Hook",description:"useENS allows you to get the address of the ENS name of ens from address along with avatar and methods to query address and ens.",source:"@site/docs/guides/ens.md",sourceDirName:"guides",slug:"/guides/ens",permalink:"/quiver/guides/ens",editUrl:"https://github.com/raid-guild/quiver/edit/main/website/docs/guides/ens.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connecting To a Wallet",permalink:"/quiver/guides/connecting-wallet"},next:{title:"Add Gnonis Safe Integration",permalink:"/quiver/guides/gnosis-safe"}},c=[{value:"Usage",id:"usage",children:[],level:2}],l={toc:c};function g(e){var n=e.components,t=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ens-hook"},"ENS Hook"),(0,a.kt)("p",null,"useENS allows you to get the address of the ENS name of ens from address along with avatar and methods to query address and ens."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// Signature\nconst useENS = ({\n  ens,\n  address,\n}: {\n  ens?: string;\n  address?: string;\n}): {\n  ens?: string;\n  address?: string;\n  resolver?: Resolver;\n  avatar?: string;\n  getAddress: (ens: string) => Promise<string>;\n  getEns: (address: string) => Promise<string>;\n  loading: boolean;\n}\n\n// Usage - When Address is present\nconst { ens, avatar, loading } = useENS({ address: bid?.bidder.id ?? '' });\n\n// Usage - When ENS is presnet\nconst { ens, avatar, loading } = useENS({ ens: bid?.bidder.ens ?? '' });\n\n// Usage - When you want to fetch address / ens on event\nconst {getEns, getAddress} = useENS();\n\n// get ens when address is present\nconst ens = await getEns(address)\n// get address if ens is present\nconst address = await getAddress(ens)\n\n// Usage - when you want to get a text record\nconst {resolver} = useENS({ens}) // can be address also\nconst avatar = await resolver.getText('avatar')\nconst github = await resolver.getText('com.github')\n")))}g.isMDXComponent=!0}}]);