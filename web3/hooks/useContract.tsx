import { Contract, ContractInterface } from '@ethersproject/contracts'
import { JsonRpcProvider } from '@ethersproject/providers'
import { DEFAULT_NETWORK, NETWORKS } from '../constants'
import { useWallet } from '../WalletContext'
import { ContractFactory, ContractInstance } from './types'

export const useContract = <TContract extends ContractInstance = any>(
  address: string,
  typechainFactoryOrABI: ContractFactory<TContract> | ContractInterface,
  options?: {
    useStaticProvider?: boolean // if the wallet is not connected use a static provider
  },
): {
  contract: TContract | Contract | null
  error: Error | null
} => {
  const { provider, isConnected } = useWallet()

  const signerOrProvider =
    options?.useStaticProvider && !isConnected
      ? new JsonRpcProvider(NETWORKS[DEFAULT_NETWORK].rpc, DEFAULT_NETWORK)
      : provider.getSigner()

  if (signerOrProvider) {
    let contract: TContract | Contract
    if (typeof typechainFactoryOrABI === 'function' && 'connect' in typechainFactoryOrABI) {
      contract = (typechainFactoryOrABI as ContractFactory<TContract>).connect(
        address,
        signerOrProvider,
      ) as TContract
    } else {
      contract = new Contract(
        address,
        typechainFactoryOrABI as ContractInterface,
        signerOrProvider,
      )
    }
    return {
      contract,
      error: null,
    }
  }

  return {
    contract: null,
    error: new Error('Could not find the signer for the given provider'),
  }
}
