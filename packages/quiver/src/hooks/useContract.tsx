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
    useStaticProvider?: boolean; // if the wallet is not connected use a static provider
  }
): {
  contract: Contract | null;
  error: Error | null;
} => {
  const { provider, isConnected, networks, defaultChainId } = useWallet();

  const signerOrProvider =
    options?.useStaticProvider && !isConnected
      ? new JsonRpcProvider(
          networks[defaultChainId].rpc,
          Number(defaultChainId)
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
