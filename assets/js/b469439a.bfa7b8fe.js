"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[927],{3210:function(e){e.exports=JSON.parse('[{"entryPoints":[{"index":true,"label":"Index","reflection":{"id":0,"name":"@raidguild/quiver","kind":1,"kindString":"Project","flags":{},"originalName":"","children":[{"id":1,"name":"NetworkConfig","kind":4194304,"kindString":"Type alias","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":46,"character":12}],"type":{"type":"reflection","declaration":{"id":2,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":46,"character":28}],"indexSignature":{"id":3,"name":"__index","kind":8192,"kindString":"Index signature","flags":{},"parameters":[{"id":4,"name":"chainId","kind":32768,"flags":{},"type":{"type":"intrinsic","name":"number"}}],"type":{"type":"reflection","declaration":{"id":5,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":6,"name":"chainId","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":48,"character":4}],"type":{"type":"intrinsic","name":"number"}},{"id":9,"name":"explorer","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":51,"character":4}],"type":{"type":"intrinsic","name":"string"}},{"id":7,"name":"name","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":49,"character":4}],"type":{"type":"intrinsic","name":"string"}},{"id":10,"name":"rpc","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":52,"character":4}],"type":{"type":"intrinsic","name":"string"}},{"id":8,"name":"symbol","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":50,"character":4}],"type":{"type":"intrinsic","name":"string"}}],"groups":[{"title":"Properties","kind":1024,"children":[6,9,7,10,8]}],"sources":[{"fileName":"WalletContext.tsx","line":47,"character":21}]}}}}},"permalink":"/quiver/api/quiver#NetworkConfig","previousId":11,"nextId":117},{"id":117,"name":"ERC165_ABI","kind":32,"kindString":"Variable","flags":{},"comment":{"shortText":"An ABI definition for ERC165."},"sources":[{"fileName":"abi.ts","line":20,"character":13}],"type":{"type":"typeOperator","operator":"readonly","target":{"type":"array","elementType":{"type":"intrinsic","name":"string"}}},"defaultValue":"...","permalink":"/quiver/api/quiver#ERC165_ABI","nextId":116},{"id":116,"name":"ERC20_ABI","kind":32,"kindString":"Variable","flags":{},"comment":{"shortText":"A minimal ABI definition for an ERC20 token."},"sources":[{"fileName":"abi.ts","line":5,"character":13}],"type":{"type":"typeOperator","operator":"readonly","target":{"type":"array","elementType":{"type":"intrinsic","name":"string"}}},"defaultValue":"...","permalink":"/quiver/api/quiver#ERC20_ABI","previousId":117,"nextId":121},{"id":121,"name":"ERC721_ABI","kind":32,"kindString":"Variable","flags":{},"comment":{"shortText":"An ABI definition for an ERC721 (non-fungible) token.\\nThis ABI includes common extensions for metadata, and enumerability."},"sources":[{"fileName":"abi.ts","line":68,"character":13}],"type":{"type":"typeOperator","operator":"readonly","target":{"type":"array","elementType":{"type":"intrinsic","name":"string"}}},"defaultValue":"...","permalink":"/quiver/api/quiver#ERC721_ABI","previousId":116,"nextId":118},{"id":118,"name":"ERC721_BASE_ABI","kind":32,"kindString":"Variable","flags":{},"comment":{"shortText":"A minimal ABI definition for an ERC721 (non-fungible) token."},"sources":[{"fileName":"abi.ts","line":28,"character":13}],"type":{"type":"typeOperator","operator":"readonly","target":{"type":"array","elementType":{"type":"intrinsic","name":"string"}}},"defaultValue":"...","permalink":"/quiver/api/quiver#ERC721_BASE_ABI","previousId":121,"nextId":120},{"id":120,"name":"ERC721_ENUMERABLE_ABI","kind":32,"kindString":"Variable","flags":{},"comment":{"shortText":"An ABI definition for enumerability of ERC721 tokens."},"sources":[{"fileName":"abi.ts","line":57,"character":13}],"type":{"type":"typeOperator","operator":"readonly","target":{"type":"array","elementType":{"type":"intrinsic","name":"string"}}},"defaultValue":"...","permalink":"/quiver/api/quiver#ERC721_ENUMERABLE_ABI","previousId":118,"nextId":119},{"id":119,"name":"ERC721_METADATA_ABI","kind":32,"kindString":"Variable","flags":{},"comment":{},"sources":[{"fileName":"abi.ts","line":47,"character":13}],"type":{"type":"typeOperator","operator":"readonly","target":{"type":"array","elementType":{"type":"intrinsic","name":"string"}}},"defaultValue":"...","permalink":"/quiver/api/quiver#ERC721_METADATA_ABI","previousId":120,"nextId":11},{"id":11,"name":"WalletProvider","kind":32,"kindString":"Variable","flags":{},"comment":{},"sources":[{"fileName":"WalletContext.tsx","line":63,"character":13}],"type":{"type":"reference","typeArguments":[{"type":"reflection","declaration":{"id":12,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":15,"name":"defaultNetwork","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":66,"character":2}],"type":{"type":"intrinsic","name":"number"}},{"id":14,"name":"networks","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":65,"character":2}],"type":{"type":"reference","id":1,"name":"NetworkConfig"}},{"id":13,"name":"web3modalOptions","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":64,"character":2}],"type":{"type":"reference","typeArguments":[{"type":"reference","name":"ICoreOptions"}],"name":"Partial"}},{"id":16,"name":"handleModalEvents","kind":2048,"kindString":"Method","flags":{"isOptional":true},"sources":[{"fileName":"WalletContext.tsx","line":67,"character":2}],"signatures":[{"id":17,"name":"handleModalEvents","kind":4096,"kindString":"Call signature","flags":{},"parameters":[{"id":18,"name":"eventName","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"union","types":[{"type":"literal","value":"error"},{"type":"literal","value":"accountsChanged"},{"type":"literal","value":"chainChanged"}]}},{"id":19,"name":"error","kind":32768,"kindString":"Parameter","flags":{"isOptional":true},"type":{"type":"reflection","declaration":{"id":20,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":21,"name":"code","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":69,"character":14}],"type":{"type":"intrinsic","name":"string"}},{"id":22,"name":"message","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"WalletContext.tsx","line":69,"character":28}],"type":{"type":"intrinsic","name":"string"}}],"groups":[{"title":"Properties","kind":1024,"children":[21,22]}]}}}],"type":{"type":"intrinsic","name":"void"}}]}],"groups":[{"title":"Properties","kind":1024,"children":[15,14,13]},{"title":"Methods","kind":2048,"children":[16]}],"sources":[{"fileName":"WalletContext.tsx","line":63,"character":38}]}}],"name":"React.FC"},"defaultValue":"...","permalink":"/quiver/api/quiver#WalletProvider","previousId":119},{"id":28,"name":"formatAddress","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"helpers.ts","line":15,"character":13}],"signatures":[{"id":29,"name":"formatAddress","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Given an address, format and truncate the address from middle."},"parameters":[{"id":30,"name":"address","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"union","types":[{"type":"intrinsic","name":"undefined"},{"type":"literal","value":null},{"type":"intrinsic","name":"string"}]}},{"id":31,"name":"ensName","kind":32768,"kindString":"Parameter","flags":{"isOptional":true},"type":{"type":"union","types":[{"type":"literal","value":null},{"type":"intrinsic","name":"string"}]}},{"id":32,"name":"chars","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"number"},"defaultValue":"5"}],"type":{"type":"intrinsic","name":"string"}}],"permalink":"/quiver/api/quiver/function/formatAddress","nextId":33},{"id":33,"name":"formatNumber","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"helpers.ts","line":32,"character":13}],"signatures":[{"id":34,"name":"formatNumber","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Converts a number to the localaized string representation."},"parameters":[{"id":35,"name":"number","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"number"}}],"type":{"type":"intrinsic","name":"string"}}],"permalink":"/quiver/api/quiver/function/formatNumber","previousId":28,"nextId":36},{"id":36,"name":"formatToUSD","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"helpers.ts","line":43,"character":13}],"signatures":[{"id":37,"name":"formatToUSD","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Returns a localized string representation of a BigNumber multiplied by a currency unit"},"parameters":[{"id":38,"name":"usdPrice","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"number"}},{"id":39,"name":"number","kind":32768,"kindString":"Parameter","flags":{"isOptional":true},"type":{"type":"reference","name":"BigNumber"}}],"type":{"type":"intrinsic","name":"string"}}],"permalink":"/quiver/api/quiver/function/formatToUSD","previousId":33,"nextId":40},{"id":40,"name":"formatToken","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"helpers.ts","line":52,"character":13}],"signatures":[{"id":41,"name":"formatToken","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Formats a Bignumber to a string and displays 6 decimal places."},"parameters":[{"id":42,"name":"number","kind":32768,"kindString":"Parameter","flags":{"isOptional":true},"type":{"type":"union","types":[{"type":"intrinsic","name":"string"},{"type":"reference","name":"BigNumber"}]}},{"id":43,"name":"decimals","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"union","types":[{"type":"intrinsic","name":"string"},{"type":"intrinsic","name":"number"}]},"defaultValue":"18"}],"type":{"type":"union","types":[{"type":"intrinsic","name":"undefined"},{"type":"intrinsic","name":"string"}]}}],"permalink":"/quiver/api/quiver/function/formatToken","previousId":36,"nextId":25},{"id":25,"name":"parseTokenURI","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"helpers.ts","line":8,"character":13}],"signatures":[{"id":26,"name":"parseTokenURI","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Converts an ipfs:// link to an HTTP IPFS url https://ipfs.io/ipfs/<hash>"},"parameters":[{"id":27,"name":"text","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"string"}}],"type":{"type":"intrinsic","name":"string"}}],"permalink":"/quiver/api/quiver/function/parseTokenURI","previousId":40,"nextId":44},{"id":44,"name":"parseTxErrorMessage","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"helpers.ts","line":72,"character":13}],"signatures":[{"id":45,"name":"parseTxErrorMessage","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Parses the errors returned from RPC calls and returns the error message string. Useful to display it in toast messages."},"parameters":[{"id":46,"name":"error","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"any"}}],"type":{"type":"intrinsic","name":"any"}}],"permalink":"/quiver/api/quiver/function/parseTxErrorMessage","previousId":25,"nextId":107},{"id":107,"name":"useCGPrice","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"hooks/useCGPrice.tsx","line":8,"character":13}],"signatures":[{"id":108,"name":"useCGPrice","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Gets the currency value of a token from coin gecko"},"parameters":[{"id":109,"name":"__namedParameters","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"reflection","declaration":{"id":110,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":111,"name":"tokenId","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useCGPrice.tsx","line":12,"character":2}],"type":{"type":"intrinsic","name":"string"}},{"id":112,"name":"vsCurrency","kind":1024,"kindString":"Property","flags":{"isOptional":true},"sources":[{"fileName":"hooks/useCGPrice.tsx","line":13,"character":2}],"type":{"type":"literal","value":"usd"}}],"groups":[{"title":"Properties","kind":1024,"children":[111,112]}]}}}],"type":{"type":"reflection","declaration":{"id":113,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":115,"name":"loading","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useCGPrice.tsx","line":14,"character":21}],"type":{"type":"intrinsic","name":"boolean"}},{"id":114,"name":"price","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useCGPrice.tsx","line":14,"character":6}],"type":{"type":"intrinsic","name":"number"}}],"groups":[{"title":"Properties","kind":1024,"children":[115,114]}]}}}],"permalink":"/quiver/api/quiver/function/useCGPrice","previousId":44,"nextId":96},{"id":96,"name":"useContract","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"hooks/useContract.tsx","line":9,"character":13}],"signatures":[{"id":97,"name":"useContract","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Returns an ethers contract instance which can be used with other hooks as well as directly calling functions on the contract."},"typeParameter":[{"id":98,"name":"TContract","kind":131072,"kindString":"Type parameter","flags":{},"type":{"type":"reference","typeArguments":[{"type":"intrinsic","name":"any"},{"type":"reference","id":98,"name":"TContract"}],"name":"ContractInstance"},"default":{"type":"intrinsic","name":"any"}}],"parameters":[{"id":99,"name":"address","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"string"}},{"id":100,"name":"typechainFactoryOrABI","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"union","types":[{"type":"reference","typeArguments":[{"type":"reference","id":98,"name":"TContract"}],"name":"ContractFactory"},{"type":"reference","name":"ContractInterface"}]}},{"id":101,"name":"options","kind":32768,"kindString":"Parameter","flags":{"isOptional":true},"type":{"type":"reflection","declaration":{"id":102,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":103,"name":"useStaticProvider","kind":1024,"kindString":"Property","flags":{"isOptional":true},"sources":[{"fileName":"hooks/useContract.tsx","line":13,"character":4}],"type":{"type":"intrinsic","name":"boolean"}}],"groups":[{"title":"Properties","kind":1024,"children":[103]}]}}}],"type":{"type":"reflection","declaration":{"id":104,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":105,"name":"contract","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useContract.tsx","line":16,"character":2}],"type":{"type":"union","types":[{"type":"literal","value":null},{"type":"reference","name":"Contract"},{"type":"reference","id":98,"name":"TContract"}]}},{"id":106,"name":"error","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useContract.tsx","line":17,"character":2}],"type":{"type":"union","types":[{"type":"literal","value":null},{"type":"reference","name":"Error"}]}}],"groups":[{"title":"Properties","kind":1024,"children":[105,106]}]}}}],"permalink":"/quiver/api/quiver/function/useContract","previousId":107,"nextId":47},{"id":47,"name":"useReadContract","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"hooks/useReadContract.tsx","line":9,"character":13}],"signatures":[{"id":48,"name":"useReadContract","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Read from contract"},"typeParameter":[{"id":49,"name":"TContract","kind":131072,"kindString":"Type parameter","flags":{},"type":{"type":"reference","typeArguments":[{"type":"intrinsic","name":"any"},{"type":"reference","id":49,"name":"TContract"}],"name":"ContractInstance"},"default":{"type":"intrinsic","name":"any"}},{"id":50,"name":"TFunctionName","kind":131072,"kindString":"Type parameter","flags":{},"type":{"type":"intrinsic","name":"string"},"default":{"type":"intrinsic","name":"string"}}],"parameters":[{"id":51,"name":"contract","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"union","types":[{"type":"literal","value":null},{"type":"reference","id":49,"name":"TContract"},{"type":"reference","name":"Contract"}]}},{"id":52,"name":"functionName","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"reference","id":50,"name":"TFunctionName"}},{"id":53,"name":"options","kind":32768,"kindString":"Parameter","flags":{"isOptional":true},"type":{"type":"reflection","declaration":{"id":54,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":55,"name":"autoUpdateInterval","kind":1024,"kindString":"Property","flags":{"isOptional":true},"sources":[{"fileName":"hooks/useReadContract.tsx","line":16,"character":4}],"type":{"type":"intrinsic","name":"number"}}],"groups":[{"title":"Properties","kind":1024,"children":[55]}]}}},{"id":56,"name":"args","kind":32768,"kindString":"Parameter","flags":{"isRest":true},"type":{"type":"reference","typeArguments":[{"type":"indexedAccess","indexType":{"type":"reference","id":50,"name":"TFunctionName"},"objectType":{"type":"reference","typeArguments":[{"type":"reference","id":49,"name":"TContract"}],"name":"ContractFunctions"}}],"name":"Parameters"}}],"type":{"type":"reflection","declaration":{"id":57,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":59,"name":"error","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useReadContract.tsx","line":21,"character":2}],"type":{"type":"union","types":[{"type":"literal","value":null},{"type":"reference","name":"Error"}]}},{"id":58,"name":"loading","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useReadContract.tsx","line":20,"character":2}],"type":{"type":"intrinsic","name":"boolean"}},{"id":60,"name":"response","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useReadContract.tsx","line":22,"character":2}],"type":{"type":"union","types":[{"type":"intrinsic","name":"undefined"},{"type":"reference","typeArguments":[{"type":"reference","typeArguments":[{"type":"indexedAccess","indexType":{"type":"reference","id":50,"name":"TFunctionName"},"objectType":{"type":"reference","typeArguments":[{"type":"reference","id":49,"name":"TContract"}],"name":"ContractFunctions"}}],"name":"ReturnType"}],"name":"Awaited"}]}},{"id":61,"name":"mutate","kind":2048,"kindString":"Method","flags":{},"sources":[{"fileName":"hooks/useReadContract.tsx","line":24,"character":2}],"signatures":[{"id":62,"name":"mutate","kind":4096,"kindString":"Call signature","flags":{},"type":{"type":"reference","typeArguments":[{"type":"union","types":[{"type":"intrinsic","name":"undefined"},{"type":"reflection","declaration":{"id":63,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":65,"name":"error","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useReadContract.tsx","line":27,"character":8}],"type":{"type":"reference","name":"Error"}},{"id":64,"name":"loading","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useReadContract.tsx","line":26,"character":8}],"type":{"type":"intrinsic","name":"boolean"}},{"id":66,"name":"response","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useReadContract.tsx","line":28,"character":8}],"type":{"type":"intrinsic","name":"any"}}],"groups":[{"title":"Properties","kind":1024,"children":[65,64,66]}]}}]}],"name":"Promise"}}]}],"groups":[{"title":"Properties","kind":1024,"children":[59,58,60]},{"title":"Methods","kind":2048,"children":[61]}]}}}],"permalink":"/quiver/api/quiver/function/useReadContract","previousId":96,"nextId":91},{"id":91,"name":"useTokenBalance","kind":64,"kindString":"Function","flags":{},"sources":[{"fileName":"hooks/useTokenBalance.tsx","line":17,"character":16}],"signatures":[{"id":92,"name":"useTokenBalance","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Gets the current token balance for a specified address, or the currently-connected wallet.\\nThis should be used on ERC20 or ERC721 contracts that implement the `balanceOf(address)` function.\\nThis hook will suspend while it loads."},"parameters":[{"id":93,"name":"contract","kind":32768,"kindString":"Parameter","flags":{},"comment":{"shortText":"The smart contract for the token. Should be an ERC20 or ERC721 contract."},"type":{"type":"union","types":[{"type":"literal","value":null},{"type":"reference","name":"Contract"}]}},{"id":94,"name":"address","kind":32768,"kindString":"Parameter","flags":{"isOptional":true},"comment":{"shortText":"The address. Defaults to the address of the connected wallet."},"type":{"type":"intrinsic","name":"string"}},{"id":95,"name":"autoUpdateInterval","kind":32768,"kindString":"Parameter","flags":{"isOptional":true},"comment":{"shortText":"The interval in milliseconds to automatically update the balance."},"type":{"type":"intrinsic","name":"number"}}],"type":{"type":"reference","name":"BigNumber"}}],"permalink":"/quiver/api/quiver/function/useTokenBalance","previousId":47,"nextId":23},{"id":23,"name":"useWallet","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"WalletContext.tsx","line":212,"character":13}],"signatures":[{"id":24,"name":"useWallet","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Gets the wallet context from the wallet provider"},"type":{"type":"reference","name":"WalletContextType"}}],"permalink":"/quiver/api/quiver/function/useWallet","previousId":91,"nextId":67},{"id":67,"name":"useWriteContract","kind":64,"kindString":"Function","flags":{"isConst":true},"sources":[{"fileName":"hooks/useWriteContract.tsx","line":15,"character":13}],"signatures":[{"id":68,"name":"useWriteContract","kind":4096,"kindString":"Call signature","flags":{},"comment":{"shortText":"Write to a contract"},"typeParameter":[{"id":69,"name":"TContract","kind":131072,"kindString":"Type parameter","flags":{},"type":{"type":"reference","typeArguments":[{"type":"intrinsic","name":"any"},{"type":"reference","id":69,"name":"TContract"}],"name":"ContractInstance"},"default":{"type":"intrinsic","name":"any"}},{"id":70,"name":"TFunctionName","kind":131072,"kindString":"Type parameter","flags":{},"type":{"type":"intrinsic","name":"string"},"default":{"type":"intrinsic","name":"string"}}],"parameters":[{"id":71,"name":"contract","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"union","types":[{"type":"literal","value":null},{"type":"reference","name":"Contract"},{"type":"reference","id":69,"name":"TContract"}]}},{"id":72,"name":"functionName","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"reference","id":70,"name":"TFunctionName"}},{"id":73,"name":"options","kind":32768,"kindString":"Parameter","flags":{"isOptional":true},"type":{"type":"reflection","declaration":{"id":74,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":75,"name":"confirmations","kind":1024,"kindString":"Property","flags":{"isOptional":true},"sources":[{"fileName":"hooks/useWriteContract.tsx","line":22,"character":4}],"type":{"type":"intrinsic","name":"number"}},{"id":82,"name":"onConfirmation","kind":2048,"kindString":"Method","flags":{"isOptional":true},"sources":[{"fileName":"hooks/useWriteContract.tsx","line":25,"character":4}],"signatures":[{"id":83,"name":"onConfirmation","kind":4096,"kindString":"Call signature","flags":{},"parameters":[{"id":84,"name":"receipt","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"reference","name":"ContractReceipt"}}],"type":{"type":"intrinsic","name":"void"}}]},{"id":76,"name":"onError","kind":2048,"kindString":"Method","flags":{"isOptional":true},"sources":[{"fileName":"hooks/useWriteContract.tsx","line":23,"character":4}],"signatures":[{"id":77,"name":"onError","kind":4096,"kindString":"Call signature","flags":{},"parameters":[{"id":78,"name":"error","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"reference","name":"Error"}}],"type":{"type":"intrinsic","name":"void"}}]},{"id":79,"name":"onResponse","kind":2048,"kindString":"Method","flags":{"isOptional":true},"sources":[{"fileName":"hooks/useWriteContract.tsx","line":24,"character":4}],"signatures":[{"id":80,"name":"onResponse","kind":4096,"kindString":"Call signature","flags":{},"parameters":[{"id":81,"name":"response","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"reference","name":"ContractTransaction"}}],"type":{"type":"intrinsic","name":"void"}}]}],"groups":[{"title":"Properties","kind":1024,"children":[75]},{"title":"Methods","kind":2048,"children":[82,76,79]}]}}}],"type":{"type":"reflection","declaration":{"id":85,"name":"__type","kind":65536,"kindString":"Type literal","flags":{},"children":[{"id":89,"name":"error","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useWriteContract.tsx","line":31,"character":2}],"type":{"type":"union","types":[{"type":"literal","value":null},{"type":"reference","name":"Error"}]}},{"id":90,"name":"response","kind":1024,"kindString":"Property","flags":{},"sources":[{"fileName":"hooks/useWriteContract.tsx","line":32,"character":2}],"type":{"type":"union","types":[{"type":"intrinsic","name":"undefined"},{"type":"reference","name":"ContractTransaction"}]}},{"id":86,"name":"mutate","kind":2048,"kindString":"Method","flags":{},"sources":[{"fileName":"hooks/useWriteContract.tsx","line":28,"character":2}],"signatures":[{"id":87,"name":"mutate","kind":4096,"kindString":"Call signature","flags":{},"parameters":[{"id":88,"name":"args","kind":32768,"kindString":"Parameter","flags":{"isRest":true},"type":{"type":"reference","typeArguments":[{"type":"indexedAccess","indexType":{"type":"reference","id":70,"name":"TFunctionName"},"objectType":{"type":"reference","typeArguments":[{"type":"reference","id":69,"name":"TContract"}],"name":"ContractFunctions"}}],"name":"Parameters"}}],"type":{"type":"reference","typeArguments":[{"type":"intrinsic","name":"void"}],"name":"Promise"}}]}],"groups":[{"title":"Properties","kind":1024,"children":[89,90]},{"title":"Methods","kind":2048,"children":[86]}]}}}],"permalink":"/quiver/api/quiver/function/useWriteContract","previousId":23,"nextId":1}],"groups":[{"title":"Functions","kind":64,"children":[28,33,36,40,25,44,107,96,47,91,23,67],"categories":[{"title":"Helpers","children":[28,33,36,40,25,44]},{"title":"Hooks","children":[107,96,47,91,23,67]}]},{"title":"Type aliases","kind":4194304,"children":[1]},{"title":"Variables","kind":32,"children":[117,116,121,118,120,119,11],"categories":[{"title":"Common ABIs","children":[117,116,121,118,120,119]},{"title":"Providers","children":[11]}]}],"sources":[{"fileName":"index.ts","line":1,"character":0}],"permalink":"/quiver/api/quiver"},"urlSlug":"quiver"}],"packageName":"@raidguild/quiver","packageVersion":"0.5.0"}]')}}]);