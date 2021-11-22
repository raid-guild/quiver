import { Contract } from '@ethersproject/contracts'

import { useProvider } from '../WalletContext'
import { ContractInstance, ContractFactory } from './types'

export const useContract = <TContract extends ContractInstance = any>(
  address: string,
  typechainFactory: ContractFactory<TContract>
): {
  contract: TContract | Contract | null
  error: Error | null
} => {
  const provider = useProvider()
  const signer = provider?.getSigner()

  if (signer) {
    const contract = typechainFactory.connect(address, signer)
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
