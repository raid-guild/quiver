import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { useEffect, useState } from 'react'

import { useWallet } from '../WalletContext'
import { AUTO_UPDATE_BALANCE_INTERVAL } from '../constants'

/**
 * Gets the current token balance for a specified address, or the currently-connected wallet.
 * This should be used on ERC20 or ERC721 contracts that implement the `balanceOf(address)` function.
 * This hook will suspend while it loads.
 *
 * @param contract The smart contract for the token. Should be an ERC20 or ERC721 contract.
 * @param address The address. Defaults to the address of the connected wallet.
 */
export function useTokenBalance(
  contract: Contract | null,
  address?: string
): BigNumber {
  const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0))
  const { address: walletAddress } = useWallet()
  const getBalance = async () => {
    const bal = (await contract?.balanceOf(
      address ?? walletAddress
    )) as BigNumber
    setBalance(bal)
  }

  useEffect(() => {
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
    const interval = setInterval(getBalance, AUTO_UPDATE_BALANCE_INTERVAL)
    return () => clearInterval(interval)
  }, [contract?.address])

  useEffect(() => {
    if (!contract) return
    getBalance()
  }, [contract?.address])

  return balance
}
