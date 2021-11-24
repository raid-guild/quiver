import { Contract, ContractInterface } from '@ethersproject/contracts'

import { useProvider } from '../WalletContext'
import { ContractInstance, ContractFactory } from './types'

export const useContract = <TContract extends ContractInstance = any>(
  address: string,
  typechainFactoryOrABI: ContractFactory<TContract> | ContractInterface
): {
  contract: TContract | Contract | null
  error: Error | null
} => {
  const provider = useProvider()
  const signer = provider?.getSigner()
  if (signer) {
    let contract: TContract | Contract
    if (
      typeof typechainFactoryOrABI === 'function' &&
      'connect' in typechainFactoryOrABI
    ) {
      contract = (typechainFactoryOrABI as ContractFactory<TContract>).connect(
        address,
        signer
      ) as TContract
    } else {
      contract = new Contract(
        address,
        typechainFactoryOrABI as ContractInterface,
        signer
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
