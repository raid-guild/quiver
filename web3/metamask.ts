import { utils } from 'ethers'

import { isSupportedChain } from './helpers'

import { NETWORKS } from './constants'

export const switchChainOnMetaMask = async (chainId: number): Promise<boolean> => {
  if (!isSupportedChain(chainId.toString())) return false

  const { name, symbol } = NETWORKS[chainId] || {}
  const networkName = NETWORKS[chainId].name
  const rpcUrl = NETWORKS[chainId].rpc
  const explorerUrl = NETWORKS[chainId].explorer

  if (!(name && symbol && networkName && rpcUrl && explorerUrl && window.ethereum)) return false

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId: utils.hexValue(chainId),
        },
      ],
    })
    return true
  } catch (switchError: any) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: utils.hexValue(chainId),
              chainName: networkName,
              nativeCurrency: {
                name,
                symbol,
                decimals: 18,
              },
              rpcUrls: [rpcUrl],
              blockExplorerUrls: [explorerUrl],
            },
          ],
        })
        return true
      } catch (addError) {
        // eslint-disable-next-line no-console
        console.error('Unable to add chain to metamask', addError)
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('Unable to switch to chain on metamask', switchError)
    }
  }
  return false
}
