import { JsonRpcProvider } from '@ethersproject/providers';

import { useWallet } from '../WalletContext';
import { ContractFactory, ContractInstance } from './types';
/**
 * Returns an ethers contract instance which can be used with other hooks as well as directly calling functions on the contract.
 * @category Hooks
 */
export const useTypedContract = <TContract extends ContractInstance = any>(
  address: string,
  typechainFactory: ContractFactory<TContract>,
  options?: {
    useStaticProvider?: boolean; // if the wallet is not connected use a static provider
  }
): {
  contract: TContract | null;
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
      contract: typechainFactory.connect(address, signerOrProvider),
      error: null,
    };
  }

  return {
    contract: null,
    error: new Error('Could not find the signer for the given provider'),
  };
};
