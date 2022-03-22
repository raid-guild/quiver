(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{2692:function(e,t,r){e.exports=r(6319)},4498:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(2054),o=r(9901);function i(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){i(a,n,o,c,s,"next",e)}function s(e){i(a,n,o,c,s,"throw",e)}c(void 0)}))}}var c=r(2692),s=r.n(c),l=function(e){var t=e.copyText,r=(0,o.useState)(!1),n=r[0],i=r[1];function c(){return(c=a(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("clipboard"in navigator)){e.next=6;break}return e.next=3,navigator.clipboard.writeText(t);case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",document.execCommand("copy",!0,t));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o.createElement("div",null,o.createElement("button",{onClick:function(){(function(e){return c.apply(this,arguments)})(t).then((function(){i(!0),setTimeout((function(){i(!1)}),1500)})).catch((function(e){console.log(e)}))},className:"py-1 px-3 "+(n?"bg-raidRed":"bg-stone-900")+"  rounded text-xs hover:bg-stone-700"},n?"Copied!":"Copy"))},u=r(9322),d=function(){return o.createElement("div",{className:"bg-zinc-900 min-h-screen bg-arrow-bg bg-center md:bg-top bg-cover bg-no-repeat"},o.createElement("div",{className:"p-8 sm:pl-16 md:pl-40 pt-10 md:pt-40 font-sans tracking-wide max-w-lg sm:max-w-xl md:max-w-3xl"},o.createElement("div",{className:"flex space-x-4"},o.createElement("img",{src:"/quiver/img/quiver-logo-white.png",alt:"Quiver logo",className:"h-12 w-auto"}),o.createElement("p",{className:"text-xs p-1 rounded bg-raidRed bg-opacity-50 self-center text-white"},"v"+u.version)),o.createElement("p",{className:"text-lg py-6 text-white"},"A collection of React hooks and components for Ethereum dApps"),o.createElement("div",{className:"flex flex-col space-y-12"},o.createElement("div",{className:"flex flex-col gap-3 dark:ring-1 dark:ring-inset dark:ring-raidRed/40 p-2 rounded-lg"},o.createElement("div",{className:"flex justify-between px-4"},o.createElement("p",{className:"border-b border-raidRed"},"Yarn"),o.createElement(l,{copyText:"yarn add @raidguild/quiver ethers web3modal"})),o.createElement("pre",{className:"bg-stone-800 text-sm text-white flex justify-between align-middle w-full gap-3"},o.createElement("div",{className:"flex gap-2"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-raidRed",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2},o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})),o.createElement("code",null,"yarn add @raidguild/quiver ethers web3modal")))),o.createElement("div",{className:"text-white"},o.createElement("p",null,"Powered by"),o.createElement("ul",{className:"list-disc"},o.createElement("li",null,o.createElement("span",{className:"text-raidRed"},"ethers")," - for ethereum functionality."),o.createElement("li",null,o.createElement("span",{className:"text-raidRed"},"Web3Modal")," ","- to connect to wallets"),o.createElement("li",null,o.createElement("span",{className:"text-raidRed"},"TypeChain")," ","- for TypeScript out of the box, including fully-typed contracts."))),o.createElement("div",{className:"flex flex-row space-x-3"},o.createElement(n.default,{href:"https://github.com/raid-guild/quiver",className:"hover:no-underline hover:opacity-80 hover:-translate-y-2 transition-transform"},o.createElement("button",{className:"flex justify-center space-x-2 text-white bg-gradient-to-r from-raidRed to-raidPurple p-3 rounded-md"},o.createElement("span",null,o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",version:"1.1",viewBox:"-1163 1657.697 56.693 56.693",xmlSpace:"preserve",fill:"currentColor"},o.createElement("path",{fillRule:"evenodd",d:"M-1134.66 1662.916c-13.6 0-24.63 11.027-24.63 24.63 0 10.882 7.057 20.115 16.844 23.371 1.23.228 1.683-.534 1.683-1.184 0-.587-.023-2.528-.034-4.586-6.852 1.49-8.298-2.906-8.298-2.906-1.12-2.847-2.734-3.604-2.734-3.604-2.235-1.529.168-1.497.168-1.497 2.473.173 3.776 2.538 3.776 2.538 2.196 3.765 5.761 2.677 7.167 2.047.221-1.591.86-2.678 1.564-3.293-5.47-.623-11.222-2.735-11.222-12.172 0-2.69.962-4.886 2.538-6.611-.256-.62-1.099-3.126.239-6.519 0 0 2.068-.661 6.774 2.525 1.965-.545 4.072-.82 6.165-.829 2.093.01 4.202.284 6.17.83 4.701-3.187 6.767-2.526 6.767-2.526 1.34 3.393.497 5.898.241 6.519 1.58 1.725 2.535 3.922 2.535 6.61 0 9.46-5.762 11.544-11.246 12.153.883.765 1.67 2.264 1.67 4.561 0 3.296-.028 5.948-.028 6.76 0 .655.443 1.423 1.691 1.181 9.782-3.26 16.83-12.49 16.83-23.368 0-13.603-11.027-24.63-24.63-24.63z",clipRule:"evenodd"}),o.createElement("path",{d:"M-1149.961 1698.28c-.054.122-.247.159-.422.075-.18-.08-.28-.248-.221-.37.053-.126.245-.161.424-.077.179.08.28.249.219.371zm-.303-.225M-1148.963 1699.392c-.118.109-.348.058-.504-.114-.16-.172-.19-.401-.071-.512.12-.108.343-.057.505.114.16.174.192.402.07.512zm-.235-.252M-1147.992 1700.81c-.151.106-.398.007-.55-.212-.152-.219-.152-.482.003-.587.152-.105.396-.01.55.207.15.223.15.485-.003.592zm0 0M-1146.662 1702.181c-.135.15-.423.109-.633-.094-.215-.199-.275-.48-.14-.63.137-.149.426-.107.638.095.214.198.279.482.135.63zm0 0M-1144.826 1702.977c-.06.193-.337.28-.616.198-.279-.084-.46-.31-.405-.505.058-.194.337-.285.617-.198.279.084.461.309.404.505zm0 0M-1142.81 1703.124c.006.203-.23.372-.523.375-.295.007-.533-.157-.536-.357 0-.205.23-.372.525-.377.293-.006.533.158.533.36zm0 0M-1140.935 1702.805c.035.198-.169.402-.46.456-.285.053-.55-.07-.586-.267-.036-.203.171-.406.457-.459.291-.05.552.069.589.27zm0 0"}))),o.createElement("p",null,"View GitHub"))),o.createElement(n.default,{href:"/introduction",className:"hover:no-underline hover:opacity-80 hover:-translate-y-2 transition-transform"},o.createElement("button",{className:"flex justify-center space-x-2 text-white bg-gradient-to-br from-raidPurple to-raidRed p-3 rounded-md"},o.createElement("span",null,o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor"},o.createElement("path",{"fill-rule":"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z","clip-rule":"evenodd"}))),o.createElement("p",null,"Read docs")))))))}},6319:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(O){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(e,t,r){var n=d;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=u(e,t,r);if("normal"===s.type){if(n=r.done?f:h,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=f,r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var d="suspendedStart",h="suspendedYield",p="executing",f="completed",m={};function v(){}function g(){}function y(){}var w={};s(w,i,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(T([])));b&&b!==r&&n.call(b,i)&&(w=b);var E=y.prototype=v.prototype=Object.create(w);function N(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(d).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function T(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:C}}function C(){return{value:t,done:!0}}return g.prototype=y,s(E,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},N(L.prototype),s(L.prototype,a,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},N(E),s(E,c,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),R(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},9322:function(e){"use strict";e.exports=JSON.parse('{"name":"@raidguild/quiver","version":"0.9.0","author":"Raid Guild","license":"MIT","sideEffects":false,"source":"src/index.ts","main":"./dist/index.cjs","module":"./dist/index.module.js","unpkg":"./dist/index.umd.js","types":"./dist/index.d.ts","scripts":{"build":"microbundle","dev":"microbundle watch"},"peerDependencies":{"ethers":"^5.5.3","react":">=16","web3modal":"^1.9.4"},"husky":{"hooks":{"pre-commit":"tsdx lint"}},"prettier":{"printWidth":80,"semi":true,"singleQuote":true,"trailingComma":"es5"},"devDependencies":{"@changesets/cli":"^2.19.0","@types/lodash":"^4.14.178","@types/react":"^17.0.38","@types/react-dom":"^17.0.11","@typescript-eslint/eslint-plugin":"^5.9.0","@typescript-eslint/parser":"^5.9.0","eslint":"8.6.0","eslint-config-universe":"^10.0.0","husky":"^7.0.4","microbundle":"^0.14.1","prettier":"^2.5.1","typescript":"^4.5.4"},"dependencies":{"@ethersproject/abstract-signer":"^5.5.0","@ethersproject/bignumber":"^5.5.0","@ethersproject/contracts":"^5.5.0","@ethersproject/providers":"^5.5.2","@ethersproject/units":"^5.5.0","@gnosis.pm/safe-apps-sdk":"^6.1.1","@gnosis.pm/safe-apps-web3modal":"^6.0.1","ethers":"^5.5.3","lodash":"^4.17.21","lodash-es":"^4.17.21","react":">=16","react-dom":"^17.0.2","web3modal":"^1.9.4"},"contributors":["midgerate"],"eslintConfig":{"extends":"universe/web"},"publishConfig":{"access":"public"},"homepage":"https://raid-guild.github.io/quiver","repository":{"url":"https://github.com/raid-guild/quiver"}}')}}]);