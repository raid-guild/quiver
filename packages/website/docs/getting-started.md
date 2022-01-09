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
import { WalletProvider, NetworkConfig } from "@raid-guild/quiver";
// If using wallet connect
import WalletConnectProvider from "@walletconnect/web3-provider";
import { IProviderOptions } from "web3modal";
import { Toaster } from "react-hot-toast";

const SUPPORTED_NETWORKS: NetworkConfig = {
  1: {
    chainId: 1,
    name: "Mainnet",
    symbol: "ETH",
    explorer: "https://etherscan.io/tx/",
    rpc: "https://mainnet.infura.io/v3/<your infura project id>",
  },
  4: {
    chainId: 4,
    name: "Rinkeby",
    symbol: "ETH",
    explorer: "https://rinkeby.etherscan.io/",
    rpc: "https://rinkeby.infura.io/v3/<your infura project id>",
  },
  1337: {
    chainId: 1337,
    name: "Hardhat",
    symbol: "ETH",
    explorer: "http://localhost:1234/",
    rpc: "http://localhost:8545",
  },
};

const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: networks[1].rpc,
        4: networks[4].rpc,
        1337: networks[1337].rpc,
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

const DEFAULT_NETWORK = 1; // Used to switch to if the user is on an unsupported network

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
      defaultNetwork={DEFAULT_NETWORK}
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
- Default network is needed to switch to the network if the user is connected to a different network.
- You can integrate wallet providers that are supported by web3modal.

3. Now, you are ready to use hooks within your routes.
4. Check out the [API](/api) and Guides for detailed documentation
