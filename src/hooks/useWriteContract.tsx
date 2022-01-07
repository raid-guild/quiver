import {
  Contract,
  ContractReceipt,
  ContractTransaction,
} from '@ethersproject/contracts';

import { useCallback, useEffect, useState } from 'react';

import { ContractFunctions, ContractInstance } from './types';
export const useWriteContract = <
  TContract extends ContractInstance = any,
  TFunctionName extends string & keyof ContractFunctions<TContract> = string
>(
  contract: TContract | Contract | null,
  functionName: TFunctionName,
  options?: {
    confirmations?: number;
    onError?: (error: Error) => void;
    onResponse?: (response: ContractTransaction) => void;
    onConfirmation?: (receipt: ContractReceipt) => void;
  }
): {
  mutate: (
    ...args: Parameters<ContractFunctions<TContract>[TFunctionName]>
  ) => Promise<void>;
  error: Error | null;
  response: ContractTransaction | undefined;
} => {
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<ContractTransaction | undefined>(
    undefined
  );

  useEffect(() => {
    const cleanup = () => {
      if (!contract) {
        return {
          error: new Error('No contract provided'),
          response: undefined,
        };
      }

      return {
        error: null,
        response: undefined,
      };
    };

    cleanup();
  }, [(contract as Contract)?.signer, functionName]);

  const mutate = useCallback(
    async (
      ...args: Parameters<ContractFunctions<TContract>[TFunctionName]>
    ) => {
      if (!contract) {
        const error = new Error('No contract provided');
        options?.onError?.(error);
        setError(error);
      }
      try {
        const response: ContractTransaction = await (contract as Contract)[
          functionName
        ](...args);
        options?.onResponse?.(response);
        setResponse(response);
        const receipt = await response.wait(
          options?.confirmations ?? undefined
        );
        options?.onConfirmation?.(receipt);
      } catch (error) {
        options?.onError?.(error as Error);
        setError(error as Error);
      }
    },
    [(contract as Contract)?.signer, functionName]
  );

  return {
    mutate,
    error,
    response,
  };
};
