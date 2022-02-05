# Read and Write Contract

NOTE - Due to shortage of time, we havent been able to put new docs. This page contains the older (and possibly non-working) documentation. Please use this documentation only for reference.

### Read from and Write to contract

Example

```tsx
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { useState } from "react";
import toast from "react-hot-toast";

import { BrandedBox, OutlineButton } from "@/components";
import { Staking__factory, Staking } from "@/types/typechain";
import { formatToken, formatToUSD } from "@/web3/helpers";
import {
  useCGPrice,
  useTypedContract,
  useReadContract,
  useWriteContract,
} from "@/web3/hooks";

export const PoolSummary = ({
  contractAddress,
}: {
  contractAddress: string;
}) => {
  const { contract: stakingContract } = useTypedContract(
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

  const { mutate: harvestPlasma } = useWriteContract(
    stakingContract,
    "withdrawReward",
    {
      onConfirmation: handleConfirmation,
      onError: handleError,
      onResponse: handleTransactionWait,
    }
  );
  const { response: totalLpTokensLockedInThisContract } = useReadContract(
    stakingContract,
    "totalLpTokensLocked",
    [],
    {
      autoUpdate: 15000,
    }
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

  const { price: ufoPrice } = useCGPrice({ tokenId: "ufo-gaming" });

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

useReadContract needs the contract object from useContract, the name of the function and options (where you can specify if you'd like to auto update the value or not)

In case you would like to update the value manually (on button click) you can use the mutate function returned in the hook.

```jsx
const { mutate, response } = useReadContract(contract, "functionName", []);

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
