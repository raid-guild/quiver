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
    staticProvider?: {
      // if the wallet is not connected use a static provider with the given chain id
      enable: boolean;
      chainId: string;
    };
  }
): {
  contract: TContract | null;
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
      contract: typechainFactory.connect(address, signerOrProvider),
      error: null,
    };
  }

  return {
    contract: null,
    error: new Error('Could not find the signer for the given provider'),
  };
};
