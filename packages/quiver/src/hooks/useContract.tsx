import { Contract, ContractInterface } from '@ethersproject/contracts';
import { JsonRpcProvider } from '@ethersproject/providers';

import { useWallet } from '../WalletContext';
/**
 * Returns an ethers contract instance which can be used with other hooks as well as directly calling functions on the contract.
 * @category Hooks
 */
export const useContract = (
  address: string,
  ABI: ContractInterface,
  options?: {
    staticProvider?: {
      // if the wallet is not connected use a static provider with the given chain id
      enable: boolean;
      chainId: string;
    };
  }
): {
  contract: Contract | null;
  error: Error | null;
} => {
  const { provider, isConnected, networks } = useWallet();

  const signerOrProvider =
    options?.staticProvider?.enable && !isConnected
      ? new JsonRpcProvider(
          networks[options?.staticProvider?.chainId].rpc,
          Number(options?.staticProvider?.chainId)
        )
      : provider?.getSigner();

  if (signerOrProvider) {
    return {
      contract: new Contract(address, ABI, signerOrProvider),
      error: null,
    };
  }

  return {
    contract: null,
    error: new Error('Could not find the signer for the given provider'),
  };
};
