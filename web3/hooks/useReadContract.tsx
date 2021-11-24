import { Contract } from '@ethersproject/contracts'
import { useEffect, useState } from 'react'

import { Awaited, ContractFunctions, ContractInstance } from './types'

import { AUTO_UPDATE_BALANCE_INTERVAL } from '../constants'
export const useReadContract = <
  TContract extends ContractInstance = any,
  TFunctionName extends string & keyof ContractFunctions<TContract> = string
>(
  contract: TContract | Contract | null,
  functionName: TFunctionName,
  options?: {
    autoUpdate?: boolean
  },
  ...args: Parameters<ContractFunctions<TContract>[TFunctionName]>
): {
  loading: boolean
  error: Error | null
  response:
    | Awaited<ReturnType<ContractFunctions<TContract>[TFunctionName]>>
    | undefined
} => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [response, setResponse] = useState(undefined)

  const fetchResponse = async () => {
    if (!contract) {
      return {
        loading: false,
        error: new Error('No contract provided'),
        response: undefined,
      }
    }
    try {
      const response = await (contract as Contract)[functionName](...args)
      setResponse(response)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!options?.autoUpdate) return
    if (!contract) return
    // TODO: Using Provider is better but it seems to be not working
    // if (!provider) {
    //   return
    // }
    // // FIXME: I do not understand why this runs 4 times?? It looks like the event is not getting unregistered
    // provider.on('block', getBalance)
    // return () => {
    //   provider.off('block', getBalance)
    // }

    // Using interval is not so better but is more consistent
    const interval = setInterval(fetchResponse, AUTO_UPDATE_BALANCE_INTERVAL)
    return () => clearInterval(interval)
  }, [(contract as Contract)?.address])

  useEffect(() => {
    fetchResponse()
  }, [(contract as Contract)?.address])

  return {
    loading,
    error,
    response,
  }
}
