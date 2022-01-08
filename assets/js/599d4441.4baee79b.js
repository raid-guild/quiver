"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[988,291,514],{7522:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8918:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(9901),r=n(7522),o=n(2618),l=n(8932),i=n(5789),c=n(3875),s=n(9463),u=n(9597),d=n(1437);var m=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(1607),f=n(1268),b=n(1982),h=n(1752),v=n(9956),E="menuLinkText_PgPj",g="hasHref_QfAZ",y=n(9815),C=["items"],N=["item"],S=["item","onItemClick","activePath","level"],_=["item","onItemClick","activePath","level"],k=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,C);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(T,(0,d.Z)({key:t,item:e},n))})))}));function T(e){var t=e.item,n=(0,f.Z)(e,N);return"category"===t.type?0===t.items.length?null:a.createElement(I,(0,d.Z)({item:t},n)):a.createElement(O,(0,d.Z)({item:t},n))}function I(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=e.level,s=(0,f.Z)(e,S),u=n.items,m=n.label,h=n.collapsible,v=n.className,C=n.href,N=function(e){var t=(0,y.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.findFirstCategoryLink)(e):void 0}),[e,t])}(n),_=(0,c.isActiveSidebarItem)(n,o),T=(0,c.useCollapsible)({initialState:function(){return!!h&&(!_&&n.collapsed)}}),I=T.collapsed,O=T.setCollapsed,P=T.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,c.usePrevious)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:_,collapsed:I,setCollapsed:O}),a.createElement("li",{className:(0,i.Z)(c.ThemeClassNames.docs.docSidebarItemCategory,c.ThemeClassNames.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":I},v)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(b.default,(0,d.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":h&&!C,"menu__link--active":_},t[E]=!h,t[g]=!!N,t)),onClick:h?function(e){null==r||r(n),C?O(!1):(e.preventDefault(),P())}:function(){null==r||r(n)},href:h?null!=N?N:"#":N},s),m),C&&h&&a.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),P()}})),a.createElement(c.Collapsible,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(k,{items:u,tabIndex:I?-1:0,onItemClick:r,activePath:o,level:l+1})))}function O(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=(0,f.Z)(e,_),s=t.href,u=t.label,m=t.className,p=(0,c.isActiveSidebarItem)(t,r);return a.createElement("li",{className:(0,i.Z)(c.ThemeClassNames.docs.docSidebarItemLink,c.ThemeClassNames.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},a.createElement(b.default,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},l),(0,h.Z)(s)?u:a.createElement("span",null,u,a.createElement(v.Z,null))))}var P="sidebar_MOiB",Z="sidebarWithHideableNavbar_mRYr",w="sidebarHidden_iRrM",A="sidebarLogo_UUpn",x="menu_SnVz",M="menuWithAnnouncementBar_u8+b",j="collapseSidebarButton_DOEY",D="collapseSidebarButtonIcon_mii7";function B(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",j),onClick:t},a.createElement(m,{className:D}))}function L(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,d=function(){var e=(0,c.useAnnouncementBar)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.useScrollPosition)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.useThemeConfig)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(P,(t={},t[Z]=p,t[w]=s,t))},p&&a.createElement(u.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",x,(n={},n[M]=d,n))},a.createElement("ul",{className:(0,i.Z)(c.ThemeClassNames.docs.docSidebarMenu,"menu__list")},a.createElement(k,{items:o,activePath:r,level:1}))),f&&a.createElement(B,{onClick:l}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.ThemeClassNames.docs.docSidebarMenu,"menu__list")},a.createElement(k,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function R(e){return a.createElement(c.MobileSecondaryMenuFiller,{component:F,props:e})}var H=a.memo(L),W=a.memo(R);function Y(e){var t=(0,s.default)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(H,e),r&&a.createElement(W,e))}var X=n(5730),z=n(1291),V="backToTopButton_Ib6q",U="backToTopButtonShow_N40W";function q(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var K=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=q(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,c.useScrollPosition)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||u(),n<300)r(!1);else if(l){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&r(!0)}else r(!1)}})),(0,c.useLocationChange)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.ThemeClassNames.common.backToTopButton,V,(e={},e[U]=n,e)),type:"button",onClick:function(){return s()}})},J=n(2455),Q={docPage:"docPage_y7O7",docMainContainer:"docMainContainer_Ynl5",docSidebarContainer:"docSidebarContainer_XIBN",docMainContainerEnhanced:"docMainContainerEnhanced_6KXR",docSidebarContainerHidden:"docSidebarContainerHidden_YfnA",collapsedDocSidebar:"collapsedDocSidebar_iCDi",expandSidebarButtonIcon:"expandSidebarButtonIcon_AZCV",docItemWrapperEnhanced:"docItemWrapperEnhanced_XJNI"},G=n(3206);function $(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,f=e.sidebarName,b=(0,c.useDocsSidebar)(),h=u.pluginId,v=u.version,E=(0,a.useState)(!1),g=E[0],y=E[1],C=(0,a.useState)(!1),N=C[0],S=C[1],_=(0,a.useCallback)((function(){N&&S(!1),y((function(e){return!e}))}),[N]);return a.createElement(l.Z,{wrapperClassName:c.ThemeClassNames.wrapper.docsPages,pageClassName:c.ThemeClassNames.page.docsDocPage,searchMetadata:{version:v,tag:(0,c.docVersionSearchTag)(h,v)}},a.createElement("div",{className:Q.docPage},a.createElement(K,null),b&&a.createElement("aside",{className:(0,i.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&g&&S(!0)}},a.createElement(Y,{key:f,sidebar:b,path:s.path,onCollapse:_,isHidden:N}),N&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},a.createElement(m,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=g||!b,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(o={},o[Q.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:X.default},d)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,J.LX)(r.pathname,e)}));if(!l)return a.createElement(z.default,null);var i=l.sidebar,s=i?n.docsSidebars[i]:null;return a.createElement(a.Fragment,null,a.createElement(G.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.DocsVersionProvider,{version:n},a.createElement(c.DocsSidebarProvider,{sidebar:s},a.createElement($,{currentDocRoute:l,versionMetadata:n,sidebarName:i},(0,o.Z)(t,{versionMetadata:n})))))}},1291:function(e,t,n){n.r(t);var a=n(9901),r=n(8932),o=n(1607);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},3088:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=n(9901).createContext({options:{minimal:!1,pluginId:"default"},reflections:{}});t.ApiDataContext=a},6099:function(e,t,n){var a=["options","packages"];function r(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(1018),n(5289);var o=n(9901),l=n(8918),i=n(3088),c=function(e){return e&&e.__esModule?e:{default:e}},s=c(o),u=c(l);function d(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function m(e,t,n){return Object.entries(e).forEach((function(a){var r=a[0],o=a[1];if("id"===r){var l="type"in e;(!l||l&&"reference"!==e.type)&&(t[Number(o)]=e,n&&(e.parentId=n.id))}else Array.isArray(o)?o.forEach((function(n){d(n)&&m(n,t,e)})):d(o)&&m(o,t,e)})),t}function p(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){m(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,l=r(e,a),c=o.useMemo((function(){return{options:t,reflections:p(n)}}),[t,n]);return s.default.createElement(i.ApiDataContext.Provider,{value:c},s.default.createElement(u.default,l))}},1018:function(e,t,n){n.r(t)},5289:function(e,t,n){n.r(t)}}]);