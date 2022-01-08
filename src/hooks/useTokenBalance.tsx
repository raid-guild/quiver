import { BigNumber } from '@ethersproject/bignumber';
import { Contract } from '@ethersproject/contracts';
import { useEffect, useState } from 'react';

import { useWallet } from '../WalletContext';

/**
 * Gets the current token balance for a specified address, or the currently-connected wallet.
 * This should be used on ERC20 or ERC721 contracts that implement the `balanceOf(address)` function.
 * This hook will suspend while it loads.
 *
 * @param contract The smart contract for the token. Should be an ERC20 or ERC721 contract.
 * @param address The address. Defaults to the address of the connected wallet.
 * @param autoUpdateInterval The interval in milliseconds to automatically update the balance.
 * @category Hooks
 */
export function useTokenBalance(
  contract: Contract | null,
  address?: string,
  autoUpdateInterval?: number
): BigNumber {
  const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
  const { address: walletAddress } = useWallet();
  const getBalance = async () => {
    const bal = (await contract?.balanceOf(
      address ?? walletAddress
    )) as BigNumber;
    setBalance(bal);
  };

  useEffect(() => {
    if (!autoUpdateInterval) return;
    if (!contract) return;

    const interval = setInterval(getBalance, autoUpdateInterval);
    return () => clearInterval(interval);
  }, [contract?.address]);

  useEffect(() => {
    if (!contract) return;
    getBalance();
  }, [contract?.address]);

  return balance;
}
