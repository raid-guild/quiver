"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75],{7522:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(9901);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(g,c(c({ref:n},s),{},{components:t})):r.createElement(g,c({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7101:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(1437),o=t(1268),i=(t(9901),t(7522)),c=["components"],a={},l="Connecting To a Wallet",u={unversionedId:"guides/connecting-wallet",id:"guides/connecting-wallet",title:"Connecting To a Wallet",description:"Quiver exposes useful variables to connect to a wallet. Here is an example.",source:"@site/docs/guides/connecting-wallet.md",sourceDirName:"guides",slug:"/guides/connecting-wallet",permalink:"/quiver/guides/connecting-wallet",editUrl:"https://github.com/raid-guild/quiver/edit/main/website/docs/guides/connecting-wallet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/quiver/getting-started"},next:{title:"ENS Hook",permalink:"/quiver/guides/ens"}},s=[],p={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connecting-to-a-wallet"},"Connecting To a Wallet"),(0,i.kt)("p",null,"Quiver exposes useful variables to connect to a wallet. Here is an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useWallet } from "@raidguild/quiver";\n\nconst ConnectWallet: React.FC = () => {\n  const { connectWallet, isConnecting, isConnected, disconnect, address } =\n    useWallet();\n  return (\n    <>\n      {!isConnected && (\n        <button\n          disabled={isConnecting}\n          onClick={() => !isConnected && connectWallet()}\n        >\n          {isConnecting\n            ? "Connecting..."\n            : isConnected\n            ? "Connected"\n            : "Connect Wallet"}\n        </button>\n      )}\n      {isConnected && (\n        <>\n          <h4 style={{ display: "inline" }}>{formatAddress(address)}</h4>\n          <button onClick={() => disconnect()}>Disconnect</button>\n        </>\n      )}\n    </>\n  );\n};\n')))}d.isMDXComponent=!0}}]);