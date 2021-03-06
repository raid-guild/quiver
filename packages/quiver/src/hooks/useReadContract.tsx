import { Contract } from '@ethersproject/contracts';
import { useEffect, useState } from 'react';

import { Awaited, ContractFunctions, ContractInstance } from './types';
/**
 * Read from contract
 * @category Hooks
 */
export const useReadContract = <
  TContract extends ContractInstance = any,
  TFunctionName extends string & keyof ContractFunctions<TContract> = string
>(
  contract: TContract | Contract | null,
  functionName: TFunctionName,
  args: Parameters<ContractFunctions<TContract>[TFunctionName]>,
  options?: {
    autoUpdateInterval?: number;
  }
): {
  loading: boolean;
  error: Error | null;
  response:
    | Awaited<ReturnType<ContractFunctions<TContract>[TFunctionName]>>
    | undefined;
  mutate: () => Promise<
    | {
        loading: boolean;
        error: Error;
        response: any;
      }
    | undefined
  >;
} => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState(undefined);

  const fetchResponse = async () => {
    if (!contract) {
      return {
        loading: false,
        error: new Error('No contract provided'),
        response: undefined,
      };
    }
    try {
      const response = await (contract as Contract)[functionName](...args);
      setResponse(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!options?.autoUpdateInterval) return;
    if (!contract) return;

    const interval = setInterval(fetchResponse, options.autoUpdateInterval);
    return () => clearInterval(interval);
  }, [(contract as Contract)?.address]);

  useEffect(() => {
    fetchResponse();
  }, [(contract as Contract)?.address]);

  const mutate = fetchResponse;

  return {
    loading,
    error,
    response,
    mutate,
  };
};
