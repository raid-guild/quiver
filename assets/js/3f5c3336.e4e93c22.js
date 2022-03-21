"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[125],{7522:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1741:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var o=n(2994),r=n(3988),a=(n(9901),n(7522)),i=["components"],c={},s="Read and Write Contract",l={unversionedId:"guides/read-write-cg",id:"guides/read-write-cg",title:"Read and Write Contract",description:"NOTE - Due to shortage of time, we havent been able to put new docs. This page contains the older (and possibly non-working) documentation. Please use this documentation only for reference.",source:"@site/docs/guides/read-write-cg.md",sourceDirName:"guides",slug:"/guides/read-write-cg",permalink:"/quiver/guides/read-write-cg",editUrl:"https://github.com/raid-guild/quiver/edit/main/website/docs/guides/read-write-cg.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Other Hooks",permalink:"/quiver/guides/other-hooks"},next:{title:"Switching Network",permalink:"/quiver/guides/switch-network"}},u={},d=[{value:"Read from and Write to contract",id:"read-from-and-write-to-contract",level:3},{value:"Get Price from Coingecko",id:"get-price-from-coingecko",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"read-and-write-contract"},"Read and Write Contract"),(0,a.kt)("p",null,"NOTE - Due to shortage of time, we havent been able to put new docs. This page contains the older (and possibly non-working) documentation. Please use this documentation only for reference."),(0,a.kt)("h3",{id:"read-from-and-write-to-contract"},"Read from and Write to contract"),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/layout";\nimport { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";\nimport { useState } from "react";\nimport toast from "react-hot-toast";\n\nimport { BrandedBox, OutlineButton } from "@/components";\nimport { Staking__factory, Staking } from "@/types/typechain";\nimport { formatToken, formatToUSD } from "@/web3/helpers";\nimport {\n  useCGPrice,\n  useTypedContract,\n  useReadContract,\n  useWriteContract,\n} from "@/web3/hooks";\n\nexport const PoolSummary = ({\n  contractAddress,\n}: {\n  contractAddress: string;\n}) => {\n  const { contract: stakingContract } = useTypedContract(\n    contractAddress,\n    Staking__factory\n  );\n\n  const [waiting, setWaiting] = useState(false);\n  const handleConfirmation = async () => {\n    toast.success("Plasma Claimed");\n    setWaiting(false);\n  };\n\n  const handleTransactionWait = async () => {\n    toast.success("Waiting for transaction to finish");\n  };\n\n  const handleError = (error: any) => {\n    toast.error(error?.data?.message || error.message);\n  };\n\n  const { mutate: harvestPlasma } = useWriteContract(\n    stakingContract,\n    "withdrawReward",\n    {\n      onConfirmation: handleConfirmation,\n      onError: handleError,\n      onResponse: handleTransactionWait,\n    }\n  );\n  const { response: totalLpTokensLockedInThisContract } = useReadContract(\n    stakingContract,\n    "totalLpTokensLocked",\n    [],\n    {\n      autoUpdate: 15000,\n    }\n  );\n\n  const claimPlasma = async () => {\n    // DO VALIDATIONS HERE\n    // lockAmount cannot be empty\n\n    try {\n      setWaiting(true);\n      await harvestPlasma();\n    } catch (error) {\n      console.log(error);\n      toast.error("Something went wrong");\n    } finally {\n      setWaiting(false);\n    }\n  };\n\n  const { price: ufoPrice } = useCGPrice({ tokenId: "ufo-gaming" });\n\n  return (\n    <BrandedBox flex="1" px="8" py="6">\n      <VStack spacing="-5">\n        <Box align="center">\n          <VStack>\n            <OutlineButton\n              isLoading={waiting}\n              loadingText="Claiming"\n              disabled={waiting}\n              onClick={() => claimPlasma()}\n              small\n              text="Claim Plasma"\n            />\n          </VStack>\n        </Box>\n\n        <Stack w="full" spacing="-8">\n          <Table variant="brand">\n            <Thead>\n              <Tr>\n                <Th>TOTAL POOL (WEIGHTED)</Th>\n                <Th width="45%">TOTAL PLASMA</Th>\n              </Tr>\n            </Thead>\n            <Tbody>\n              <Tr>\n                <Td>\n                  <Text d="inline" variant="body2">\n                    {formatToken(totalLpTokensLockedInThisContract)} UFO\n                  </Text>\n                  <Text variant="caption">\n                    USD{" "}\n                    {formatToUSD(\n                      ufoPrice,\n                      totalLpTokensLockedInThisContract ?? undefined\n                    )}\n                  </Text>\n                </Td>\n              </Tr>\n            </Tbody>\n          </Table>\n        </Stack>\n      </VStack>\n    </BrandedBox>\n  );\n};\n')),(0,a.kt)("p",null,"There is a lot going on in the example above let's break it down."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useContract")," is a hook that allows you to get the Contract object from the contract which is used by useReadContract and useWriteContract. It can also use the static RPC provider if the wallet is not connected if you set ",(0,a.kt)("inlineCode",{parentName:"p"},'staticProvider: {enable: true, chainId: "0x1"}')," in options. This will then use the provided chainId to create a static provider."),(0,a.kt)("p",null,"useContract needs the contract address and the Contract Factory from typechain. Make sure you copy the generated types from hardhat and paste it in the frontend project directory. In my case I have it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/types/typechain")," folder."),(0,a.kt)("p",null,"You can also use a ContractInterface ABI, however you wouldnt get any autocompletion so I do not recommend using this."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useReadContract")," allows you to access public view functions or variables of the contract. Check your useReadContract.tsx for more implementation details."),(0,a.kt)("p",null,"useReadContract needs the contract object from useContract, the name of the function and options (where you can specify if you'd like to auto update the value or not)"),(0,a.kt)("p",null,"In case you would like to update the value manually (on button click) you can use the mutate function returned in the hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const { mutate, response } = useReadContract(contract, "functionName", []);\n\nconst handleClick = () => {\n  // Do stuff Here\n\n  mutate();\n};\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useWriteContract")," allows you to access public write functions of the contract. Check your useWriteContract.tsx for more implementation details."),(0,a.kt)("p",null,"useWriteContract needs the contract object from useContract, the name of the function, the options where you can specify how to handle the error if it occurs, handle the transaction wait and handle the confirmation on chain.\nIt returns a mutate method which you can call on a button click."),(0,a.kt)("p",null,"As you can see in my example, there is a claim plasma button which calls the harvestPlasma method, before calling it, you can do any frontend validations, set loaders etc.\nIf your mutation method requires arguments, you can pass them when calling the method. You can also send ether by giving override options."),(0,a.kt)("h3",{id:"get-price-from-coingecko"},"Get Price from Coingecko"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useCGPrice")," allows you to get the price of the token. By default it will get the USD value, however you can provider vsCurrency along with tokenId to get the price of the token in that currency. check out useCGPrice.tsx for more implementation details."))}m.isMDXComponent=!0}}]);