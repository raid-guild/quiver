# Quiver

Makes smart contract integrations on your react web app very easy.

## Motivation

Current Problems with web3 integrations on React -

1. It's a very time consuming process to integrate a smart contract with a react web app. (Create a context, expose methods to connect with the wallet, reading and writing from the contract and so on.)
2. Every developer does it in their own style, which makes it harder for other devs to understand.

Quiver aims

1. to decrease the time it takes to integrate from 15 hours to 2 hours
2. to make it faster to add more contract interactions to their codebase
3. to focus on the business logic rather than web3 specifics.

## Current state of the project

Its currently not a library, so you need to copy paste the folder to your project and configure a few things, but it's a good start.
There are also certain limitations to the current implementation

1. It can only be used in typescript projects (you are free to remove the types from the project if you want)
2. It can only interact with smart contracts for which we have typechain generated type definitions.

It needs the the following libraries

- ethers.js
- web3modal
- typescript
- lodash (Optional)
- react-hot-toast (Optional)
- walletconnect (Optional)
- walletlink (Optional)

You can remove optional libraries but then you will have to fix the code that uses them. (there's not a lot of it though. :))

## TODO

- [] Provide starter apps for both CRA and Next.js with hardhat
- [] Better documentation
- [] Add subgraphs hook

## Quickstart

1. Download the repo
2. Copy the web3 folder to the root of your frontend project.
3. Open constants.ts in the web3 folder and configure the Supported networks, default network and the auto update time interval.
4. Open providerOptions.ts in the web3 folder and configure the wallets you want your users to connect with.
5. If you see errors in the web3 folder, most likely you are missing dependencies, just install them.
6. Go to the index.js or root file of your project and import WalletProvider from web3 WalletContext.

Example

```jsx
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { GlobalProvider } from "@/contexts/GlobalContext";
import Fonts from "@/theme/Fonts";
import { theme } from "@/theme/theme";
import { WalletProvider } from "@/web3/WalletContext";

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
      <Router>
        <ChakraProvider theme={theme}>
          <Fonts />
          <App />
        </ChakraProvider>
      </Router>
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Now you should be able to interact with the contracts. Check out all the use cases and examples below to understand how they work.

### Connect with wallet

Example

```jsx
import { Button } from "@chakra-ui/button";
import { FC } from "react";

import { useWallet } from "@/web3/WalletContext";
import { formatAddress } from "@/web3/helpers";

export const ConnectWallet: FC = () => {
  const { connectWallet, isConnecting, isConnected, disconnect, address } =
    useWallet();

  return (
    <>
      {!isConnected && (
        <Button
          size="sm"
          id="button"
          disabled={isConnecting}
          onClick={() => !isConnected && connectWallet()}
        >
          {isConnecting
            ? "Connecting..."
            : isConnected
            ? "Connected"
            : "Connect Wallet"}
        </Button>
      )}
      {isConnected && (
        <>
          {formatAddress(address, undefined, 7)}
          <Button w="full" size="sm" onClick={() => disconnect()}>
            Disconnect
          </Button>
        </>
      )}
    </>
  );
};
```

As you can see above, `useWallet` hook exposes several methods. Most commonly you will need the `address` of the user connected with the wallet.

In this case, we also use connectWallet, disconnect, isConnecting, isConnected to show an interactive connect to wallet button.

Check out WalletContext.tsx to understand how it works and if you would like to change the behaviour of switching the network, or displaying an error if the network is not supported etc.

### Read from and Write to contract

Example

```jsx
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { useState } from "react";
import toast from "react-hot-toast";

import { BrandedBox, OutlineButton } from "@/components";
import { Staking__factory } from "@/types/typechain";
import { formatToken, formatToUSD } from "@/web3/helpers";
import {
  useCGPrice,
  useContract,
  useReadContract,
  useWriteContract,
} from "@/web3/hooks";

export const PoolSummary = ({
  contractAddress,
}: {
  contractAddress: string,
}) => {
  const { contract: stakingContract } = useContract(
    contractAddress,
    Staking__factory
  );

  const [waiting, setWaiting] = useState(false);
  const handleConfirmation = async () => {
    toast.success("Plasma Claimed");
    setWaiting(false);
  };

  const handleTransactionWait = async () => {
    toast.success("Waiting for transaction to finish");
  };

  const handleError = (error: any) => {
    toast.error(error?.data?.message || error.message);
  };

  const [harvestPlasma] = useWriteContract(stakingContract, "withdrawReward", {
    onConfirmation: handleConfirmation,
    onError: handleError,
    onResponse: handleTransactionWait,
  });
  const { response: totalLpTokensLockedInThisContract } = useReadContract(
    stakingContract,
    "totalLpTokensLocked",
    { autoUpdate: true }
  );

  const claimPlasma = async () => {
    // DO VALIDATIONS HERE
    // lockAmount cannot be empty

    try {
      setWaiting(true);
      await harvestPlasma();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setWaiting(false);
    }
  };

  const [ufoPrice] = useCGPrice({ tokenId: "ufo-gaming" });

  return (
    <BrandedBox flex="1" px="8" py="6">
      <VStack spacing="-5">
        <Box align="center">
          <VStack>
            <OutlineButton
              isLoading={waiting}
              loadingText="Claiming"
              disabled={waiting}
              onClick={() => claimPlasma()}
              small
              text="Claim Plasma"
            />
          </VStack>
        </Box>

        <Stack w="full" spacing="-8">
          <Table variant="brand">
            <Thead>
              <Tr>
                <Th>TOTAL POOL (WEIGHTED)</Th>
                <Th width="45%">TOTAL PLASMA</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Text d="inline" variant="body2">
                    {formatToken(totalLpTokensLockedInThisContract)} UFO
                  </Text>
                  <Text variant="caption">
                    USD{" "}
                    {formatToUSD(
                      ufoPrice,
                      totalLpTokensLockedInThisContract ?? undefined
                    )}
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Stack>
      </VStack>
    </BrandedBox>
  );
};
```

There is a lot going on in the example above let's break it down.

`useContract` is a hook that allows you to get the Contract object from the contract which is used by useReadContract and useWriteContract. It can also use the static RPC provider if the wallet is not connected if you set `useStaticProvider: true` in options.

useContract needs the contract address and the Contract Factory from typechain. Make sure you copy the generated types from hardhat and paste it in the frontend project directory. In my case I have it in the `src/types/typechain` folder.

You can also use a ContractInterface ABI, however you wouldnt get any autocompletion so I do not recommend using this.

`useReadContract` allows you to access public view functions or variables of the contract. Check your useReadContract.tsx for more implementation details.

useReadContract needs the contract object from useContract, the name of the function and options (where you can specify if you'd like to auto update the value or not)(.

The AUTO_UPDATE_BALANCE_INTERVAL constant is used to set the interval for auto updating the value.

In case you would like to update the value manually (on button click) you can use the mutate function returned in the hook.

```jsx
const { mutate, response } = useReadContract(contract, "functionName");

const handleClick = () => {
  // Do stuff Here

  mutate();
};
```

`useWriteContract` allows you to access public write functions of the contract. Check your useWriteContract.tsx for more implementation details.

useWriteContract needs the contract object from useContract, the name of the function, the options where you can specify how to handle the error if it occurs, handle the transaction wait and handle the confirmation on chain.
It returns a mutate method which you can call on a button click.

As you can see in my example, there is a claim plasma button which calls the harvestPlasma method, before calling it, you can do any frontend validations, set loaders etc.
If your mutation method requires arguments, you can pass them when calling the method. You can also send ether by giving override options.

### Get Price from Coingecko

`useCGPrice` allows you to get the price of the token. By default it will get the USD value, however you can provider vsCurrency along with tokenId to get the price of the token in that currency. check out useCGPrice.tsx for more implementation details.

### ENS Resolution

`useENS` allows you to get the address of the ENS name of ens from address along with avatar and methods to query address and ens.

```jsx
// Signature
const useENS = ({
  ens,
  address,
}: {
  ens?: string;
  address?: string;
}): {
  ens?: string;
  address?: string;
  resolver?: Resolver;
  avatar?: string;
  getAddress: (ens: string) => Promise<string>;
  getEns: (address: string) => Promise<string>;
  loading: boolean;
}

// Usage - When Address is present
const { ens, avatar, loading } = useENS({ address: bid?.bidder.id ?? '' });

// Usage - When ENS is presnet
const { ens, avatar, loading } = useENS({ ens: bid?.bidder.ens ?? '' });

// Usage - When you want to fetch address / ens on event
const {getEns, getAddress} = useENS();

// get ens when address is present
const ens = await getEns(address)
// get address if ens is present
const address = await getAddress(ens)

// Usage - when you want to get a text record
const {resolver} = useENS({ens}) // can be address also
const avatar = await resolver.getText('avatar')
const gitub = await resolver.getText('com.github')

```

### Token Balance

Getting token balance is one of the most common scenarios.

Example

```jsx
  const { contract: ufoContract } = useContract(
    UFO_TOKEN_CONTRACT_ADDRESS,
    XToken__factory
  )

  const ufoBalance = useTokenBalance(ufoContract as XToken)

```

`useTokenBalance` is a hook that allows you to get the balance of a token. It auto updates the balance every AUTO_UPDATE_BALANCE_INTERVAL seconds.

You need to give it the contract object from useContract, and optionally you can also mention the token address. By default it will get the balance of the connected wallet.

### Helpers

Since these are very commonly used, I also created these functions so that you dont have to write them

formatAddress - formats the wallet address to be displayed in the UI

formatNumber - formats a number to locale string

formatToUSD - given a usd price and the number of tokens, it will return the formatted usd value of the token.

formatToken - given a bignumber token (in wei) it will convert the number to string and also print the token value in ethers.

parseTxErrorMessage - parses the error messages from the transaction and returns a readable message.

Other methods can be found in the helpers.ts file.
