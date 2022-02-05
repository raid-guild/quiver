---
sidebar_position: 2
---

# Getting Started

Quiver requires some peer dependencies to be installed with the project.

1. Install the dependencies

```bash
yarn add @raidguild/quiver ethers web3modal
```

2. Wrap your app with WalletProvider

```jsx
import { WalletProvider, NetworkConfig } from "@raidguild/quiver";

// If using Authereum provider
import Authereum from "authereum";
// If using Portis provider
import Portis from "@portis/web3";
// If using Frame provider
import ethProvider from "eth-provider";
// If using wallet connect
import WalletConnectProvider from "@walletconnect/web3-provider";
import { IProviderOptions } from "web3modal";
import { Toaster } from "react-hot-toast";

const SUPPORTED_NETWORKS: NetworkConfig = {
  "0x1": {
    chainId: "0x1",
    name: "Mainnet",
    symbol: "ETH",
    explorer: "https://etherscan.io",
    rpc: "https://mainnet.infura.io/v3/<your infura project id>",
  },
  "0x4": {
    chainId: "0x4",
    name: "Rinkeby",
    symbol: "ETH",
    explorer: "https://rinkeby.etherscan.io",
    rpc: "https://rinkeby.infura.io/v3/<your infura project id>",
  },
  "0x539": {
    chainId: "0x539",
    name: "Hardhat",
    symbol: "ETH",
    explorer: "http://localhost:1234",
    rpc: "http://localhost:8545",
  },
  "0x89": {
    chainId: "0x89",
    name: "Polygon",
    symbol: "MATIC",
    explorer: "https://polygonscan.com",
    rpc: "https://polygon-rpc.com/",
  },
  "0x13881": {
    chainId: "0x13881",
    name: "Mumbai Testnet",
    symbol: "MATIC",
    explorer: "https://mumbai.polygonscan.com",
    rpc: "https://matic-mumbai.chainstacklabs.com",
  },
};

const providerOptions: IProviderOptions = {
  authereum: {
    package: Authereum,
  },
  frame: {
    package: ethProvider,
  },
  portis: {
    package: Portis,
    options: {
      // Get the DAPP ID at https://dashboard.portis.io/
      id: "YOUR-PORTIS-DAPP-ID",
    },
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: networks["0x1"].rpc,
        4: networks["0x4"].rpc,
        1337: networks["0x539"].rpc,
      },
    },
  },
  // .. Other providers
};

const web3modalOptions = {
  cacheProvider: true,
  providerOptions,
  theme: "dark",
};

const DEFAULT_CHAIN_ID = "0x1"; // Used to switch to if the user is on an unsupported network

const App = () => (
  <>
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
      }}
    />
    <WalletProvider
      web3modalOptions={web3modalOptions}
      networks={SUPPORTED_NETWORKS}
      // Optional if you want to auto switch the network
      defaultChainId={DEFAULT_NETWORK}
      // Optional but useful to handle events.
      handleModalEvents={(eventName, error) => {
        if (error) {
          toast.error(error.message);
        }

        console.log(eventName);
      }}
    >
      <YourRoutes />
    </WalletProvider>
  </>
);
```

Notes

- You need to have an infura account setup / or any other RPC provider for static provider to work. This is needed to interact with the contract when the user has not connected to the wallet.
- Default chain id is needed to switch to the network if the user is connected to a different network. If you do not provide the prop, the network will not auto switch.
- You can integrate wallet providers that are supported by web3modal.

3. Now, you are ready to use hooks within your routes.
4. Check out the [API](/api) and Guides for detailed documentation
